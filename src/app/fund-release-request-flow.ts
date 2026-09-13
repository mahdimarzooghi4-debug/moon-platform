import "./fund-release-request-flow.css";

const FUND_RESOURCE_DETAIL_PATH = "/panel/fund-manager/resources/detail";
const FUND_RESOURCES_PATH = "/panel/fund-manager/resources";
const EMDAD_SYNERGY_PATH = "/panel/emdad/fund-synergy";
const EMDAD_ALLOCATION_PATH = "/panel/emdad/fund-synergy/allocation";
const EMDAD_SUCCESS_PATH = "/panel/emdad/fund-synergy/success";

const REQUESTS_KEY = "mah.fundSynergyRequests.v2";
const SELECTED_KEY = "mah.fundSynergyRequests.selected.v2";
const LEGACY_REQUESTS_KEY = "mah.fundReleaseRequests.v1";
const LEGACY_SELECTED_KEY = "mah.fundReleaseRequests.selected.v1";

type SynergyRequestStatus = "pending" | "allocated";

type SynergyRequest = {
  id: string;
  company: string;
  project: string;
  companyPayment: number;
  fundShare: number;
  note: string;
  status: SynergyRequestStatus;
  createdAt: string;
  allocatedAt?: string;
  receipt?: string;
};

function normalize(value: string | null | undefined) {
  return (value ?? "").replace(/\s+/g, " ").trim();
}

function setText(node: Element | null | undefined, text: string) {
  if (!(node instanceof HTMLElement)) return;
  if (normalize(node.textContent) !== text) node.textContent = text;
}

function faNumber(value: number) {
  return new Intl.NumberFormat("fa-IR", { maximumFractionDigits: 0 }).format(value);
}

function formatAmount(value: number) {
  return `${faNumber(value)} تومان`;
}

function formatDate(value: string | undefined) {
  if (!value) return "—";
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return "—";
  try {
    return new Intl.DateTimeFormat("fa-IR-u-ca-persian", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    }).format(date);
  } catch {
    return new Intl.DateTimeFormat("fa-IR").format(date);
  }
}

function toLatinDigits(value: string) {
  return value
    .replace(/[۰-۹]/g, (digit) => String("۰۱۲۳۴۵۶۷۸۹".indexOf(digit)))
    .replace(/[٠-٩]/g, (digit) => String("٠١٢٣٤٥٦٧٨٩".indexOf(digit)));
}

function parseAmountLabel(value: string) {
  const normalized = toLatinDigits(value).replace(/[٬,]/g, "");
  const match = normalized.match(/(\d+(?:\.\d+)?)/);
  if (!match) return 0;
  const amount = Number(match[1]);
  if (!Number.isFinite(amount)) return 0;
  if (normalized.includes("میلیارد")) return amount * 1_000_000_000;
  if (normalized.includes("میلیون")) return amount * 1_000_000;
  if (normalized.includes("هزار")) return amount * 1_000;
  return amount;
}

function readRequests(): SynergyRequest[] {
  try {
    const raw = localStorage.getItem(REQUESTS_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    if (!Array.isArray(parsed)) return [];
    return parsed.filter((item): item is SynergyRequest => {
      return Boolean(
        item &&
          typeof item.id === "string" &&
          typeof item.company === "string" &&
          typeof item.project === "string" &&
          typeof item.companyPayment === "number" &&
          Number.isFinite(item.companyPayment) &&
          typeof item.fundShare === "number" &&
          Number.isFinite(item.fundShare) &&
          typeof item.note === "string" &&
          (item.status === "pending" || item.status === "allocated") &&
          typeof item.createdAt === "string",
      );
    });
  } catch {
    return [];
  }
}

function writeRequests(requests: SynergyRequest[]) {
  localStorage.setItem(REQUESTS_KEY, JSON.stringify(requests));
  window.dispatchEvent(new CustomEvent("moon:fund-synergy-requests-changed"));
}

function setSelectedRequest(id: string) {
  localStorage.setItem(SELECTED_KEY, id);
}

function getSelectedRequest() {
  const id = localStorage.getItem(SELECTED_KEY);
  if (!id) return null;
  return readRequests().find((request) => request.id === id) ?? null;
}

function navigate(path: string) {
  if (window.location.pathname === path) return;
  window.history.pushState({}, "", path);
  window.dispatchEvent(new PopStateEvent("popstate"));
}

function findDetailValue(root: HTMLElement, label: string) {
  const fields = root.querySelectorAll<HTMLElement>('[data-name="detail-field"]');
  for (const field of fields) {
    const paragraphs = field.querySelectorAll<HTMLElement>("p");
    if (normalize(paragraphs.item(0)?.textContent) === label) {
      return normalize(paragraphs.item(1)?.textContent);
    }
  }
  return "";
}

function findSummaryField(root: HTMLElement, label: string) {
  const fields = root.querySelectorAll<HTMLElement>('[data-name="summary-field"]');
  for (const field of fields) {
    const paragraphs = field.querySelectorAll<HTMLElement>("p");
    if (normalize(paragraphs.item(0)?.textContent) === label) return field;
  }
  return null;
}

function currentResourceData(root: HTMLElement) {
  const company = findDetailValue(root, "شرکت") || "شرکت پرداخت‌کننده";
  const project = findDetailValue(root, "پروژه") || "پروژه";
  const companyPaymentLabel = findDetailValue(root, "مبلغ پرداخت شرکت");
  const fundShareLabel =
    findDetailValue(root, "مبلغ ورودی صندوق") ||
    findDetailValue(root, "سهم قابل درخواست") ||
    normalize(findSummaryField(root, "سهم صندوق")?.querySelectorAll("p").item(1)?.textContent);
  const companyPayment = parseAmountLabel(companyPaymentLabel);
  const parsedShare = parseAmountLabel(fundShareLabel);
  const fundShare = parsedShare > 0 ? parsedShare : Math.round(companyPayment * 0.1);
  return { company, project, companyPayment, fundShare };
}

function findLatestRequest(company: string, project: string) {
  return readRequests()
    .filter((request) => normalize(request.company) === company && normalize(request.project) === project)
    .sort((a, b) => b.createdAt.localeCompare(a.createdAt))[0];
}

function closeSynergyDialog() {
  document.querySelector<HTMLElement>('[data-fund-synergy-dialog="true"]')?.remove();
}

function openSynergyDialog(root: HTMLElement) {
  closeSynergyDialog();
  const data = currentResourceData(root);
  if (data.companyPayment <= 0 || data.fundShare <= 0) return;

  const existing = findLatestRequest(data.company, data.project);
  if (existing?.status === "pending" || existing?.status === "allocated") return;

  const backdrop = document.createElement("div");
  backdrop.dataset.fundSynergyDialog = "true";
  backdrop.className = "fund-synergy-dialog-backdrop";
  backdrop.setAttribute("dir", "rtl");

  const dialog = document.createElement("div");
  dialog.className = "fund-synergy-dialog";
  dialog.setAttribute("role", "dialog");
  dialog.setAttribute("aria-modal", "true");
  dialog.setAttribute("aria-label", "درخواست سهم ده درصد صندوق");

  const title = document.createElement("h2");
  title.textContent = "درخواست سهم ۱۰٪ صندوق";

  const description = document.createElement("p");
  description.className = "fund-synergy-dialog-description";
  description.textContent =
    "این درخواست مربوط به سهم ۱۰٪ صندوق از پرداخت نقدی شرکت است. مبلغ توسط سامانه محاسبه می‌شود و مدیر صندوق فقط درخواست آن را برای کمیته امداد ارسال می‌کند.";

  const summary = document.createElement("div");
  summary.className = "fund-synergy-dialog-summary";
  const summaryItems = [
    ["پروژه", data.project],
    ["شرکت", data.company],
    ["پرداخت نقدی شرکت", formatAmount(data.companyPayment)],
    ["سهم ۱۰٪ صندوق", formatAmount(data.fundShare)],
  ];
  summaryItems.forEach(([label, value]) => {
    const item = document.createElement("div");
    const labelNode = document.createElement("span");
    const valueNode = document.createElement("strong");
    labelNode.textContent = label;
    valueNode.textContent = value;
    item.append(labelNode, valueNode);
    summary.appendChild(item);
  });

  const noteLabel = document.createElement("label");
  noteLabel.className = "fund-synergy-note-field";
  const noteTitle = document.createElement("span");
  noteTitle.textContent = "توضیح اختیاری";
  const noteInput = document.createElement("textarea");
  noteInput.placeholder = "در صورت نیاز توضیح کوتاه برای کمیته امداد ثبت کنید";
  noteLabel.append(noteTitle, noteInput);

  const actions = document.createElement("div");
  actions.className = "fund-synergy-dialog-actions";
  const cancel = document.createElement("button");
  cancel.type = "button";
  cancel.className = "fund-synergy-cancel";
  cancel.textContent = "انصراف";
  cancel.addEventListener("click", closeSynergyDialog);

  const submit = document.createElement("button");
  submit.type = "button";
  submit.className = "fund-synergy-submit";
  submit.textContent = "ارسال درخواست به امداد";
  submit.addEventListener("click", () => {
    const requests = readRequests();
    const duplicate = requests.find(
      (request) =>
        request.status === "pending" &&
        normalize(request.company) === data.company &&
        normalize(request.project) === data.project,
    );
    if (duplicate) {
      closeSynergyDialog();
      applyFundResourceDetail();
      return;
    }

    const request: SynergyRequest = {
      id: `FS-${Date.now()}`,
      company: data.company,
      project: data.project,
      companyPayment: data.companyPayment,
      fundShare: data.fundShare,
      note: normalize(noteInput.value),
      status: "pending",
      createdAt: new Date().toISOString(),
    };
    writeRequests([request, ...requests]);
    setSelectedRequest(request.id);
    closeSynergyDialog();
    applyFundResourceDetail();
    applyFundResourcesList();
  });

  actions.append(cancel, submit);
  dialog.append(title, description, summary, noteLabel, actions);
  backdrop.appendChild(dialog);
  backdrop.addEventListener("click", (event) => {
    if (event.target === backdrop) closeSynergyDialog();
  });
  document.body.appendChild(backdrop);
  noteInput.focus();
}

function applyFundResourceDetail() {
  if (window.location.pathname !== FUND_RESOURCE_DETAIL_PATH) return;
  const root = document.querySelector<HTMLElement>('[data-name="fund-manager-resource-detail"]');
  if (!root) return;

  const data = currentResourceData(root);
  const latest = findLatestRequest(data.company, data.project);
  const header = root.querySelector<HTMLElement>('[data-name="header"]');
  if (header) {
    let button = header.querySelector<HTMLButtonElement>('[data-fund-synergy-request-button="true"]');
    if (!button) {
      button = document.createElement("button");
      button.type = "button";
      button.dataset.fundSynergyRequestButton = "true";
      button.className = "fund-synergy-request-button";
      button.addEventListener("click", (event) => {
        event.preventDefault();
        event.stopPropagation();
        openSynergyDialog(root);
      });
      header.appendChild(button);
    }
    if (!latest) {
      button.disabled = false;
      button.dataset.status = "ready";
      button.textContent = "درخواست سهم ۱۰٪ صندوق";
    } else if (latest.status === "pending") {
      button.disabled = true;
      button.dataset.status = "pending";
      button.textContent = "درخواست ارسال شد";
    } else {
      button.disabled = true;
      button.dataset.status = "allocated";
      button.textContent = "سهم ۱۰٪ دریافت شد";
    }
  }

  const summary = root.querySelector<HTMLElement>('[data-name="resource-summary"]');
  const summaryStatus = summary?.querySelector<HTMLElement>('[data-name="chip"] p');
  if (!latest) setText(summaryStatus, "آماده درخواست");
  else if (latest.status === "pending") setText(summaryStatus, "در انتظار تخصیص");
  else setText(summaryStatus, "ثبت قطعی");

  const dateField = root.querySelectorAll<HTMLElement>('[data-name="summary-field"]').item(3);
  if (dateField) {
    const paragraphs = dateField.querySelectorAll<HTMLElement>("p");
    if (!latest) {
      setText(paragraphs.item(0), "تاریخ پرداخت شرکت");
    } else if (latest.status === "pending") {
      setText(paragraphs.item(0), "تاریخ درخواست");
      setText(paragraphs.item(1), formatDate(latest.createdAt));
    } else {
      setText(paragraphs.item(0), "تاریخ تخصیص");
      setText(paragraphs.item(1), formatDate(latest.allocatedAt));
    }
  }

  const fields = root.querySelectorAll<HTMLElement>('[data-name="detail-field"]');
  fields.forEach((field) => {
    const paragraphs = field.querySelectorAll<HTMLElement>("p");
    const label = normalize(paragraphs.item(0)?.textContent);
    if (label === "مبلغ ورودی صندوق" || label === "سهم قابل درخواست") {
      setText(paragraphs.item(0), latest?.status === "allocated" ? "مبلغ ورودی صندوق" : "سهم قابل درخواست");
      if (data.fundShare > 0) setText(paragraphs.item(1), formatAmount(data.fundShare));
    }
  });
}

function applyFundResourcesList() {
  if (window.location.pathname !== FUND_RESOURCES_PATH) return;
  const root = document.querySelector<HTMLElement>('[data-name="fund-manager-resources"]');
  if (!root) return;

  const rows = root.querySelectorAll<HTMLElement>('[data-name="resource-row"]');
  rows.forEach((row) => {
    const text = normalize(row.textContent);
    if (!text.includes("۱۰٪ پرداخت نقدی شرکت") && !text.includes("هم‌افزایی")) return;
    const title = normalize(row.querySelector<HTMLElement>("p")?.textContent).replace(/^هم‌افزایی\s*/, "");
    const request = readRequests()
      .filter((item) => !title || normalize(item.project) === title)
      .sort((a, b) => b.createdAt.localeCompare(a.createdAt))[0];
    const chip = row.querySelector<HTMLElement>('[data-name="chip"] p');
    if (!request) setText(chip, "آماده درخواست");
    else if (request.status === "pending") setText(chip, "در انتظار تخصیص");
    else setText(chip, "ثبت قطعی");
  });
}

function makeQueueCell(text: string, className = "") {
  const cell = document.createElement("div");
  cell.className = `moon-synergy-request-cell ${className}`.trim();
  cell.textContent = text;
  return cell;
}

function renderEmdadSynergyQueue() {
  if (window.location.pathname !== EMDAD_SYNERGY_PATH) return;
  const root = document.querySelector<HTMLElement>('[data-name="emdad-fund-synergy"]');
  if (!root) return;
  const table = root.querySelector<HTMLElement>('[data-name="fund-synergy-table"]');
  if (!table) return;

  root.querySelector<HTMLElement>('[data-name="fund-synergy-row"]')?.style.setProperty("display", "none", "important");
  root.querySelector<HTMLElement>('[data-name="table-note"]')?.style.setProperty("display", "none", "important");
  root.querySelector<HTMLElement>('[data-name="pagination-footer"]')?.style.setProperty("display", "none", "important");

  const tableParagraphs = table.querySelectorAll<HTMLElement>(":scope > div, :scope > p");
  const title = table.querySelector<HTMLElement>('[data-node-id="2222:31"] p') ?? table.querySelector<HTMLElement>("p");
  setText(title, "درخواست‌های سهم ۱۰٪ صندوق");
  const subtitle = table.querySelector<HTMLElement>('[data-node-id="2222:32"] p');
  setText(subtitle, "فقط درخواست‌هایی که مدیر صندوق برای سهم ۱۰٪ ثبت کرده است در این بخش قابل اقدام هستند.");
  void tableParagraphs;

  const requests = readRequests();
  const countPill = root.querySelector<HTMLElement>('[data-name="count-pill"] p');
  setText(countPill, `${faNumber(requests.length)} درخواست`);

  const summaryCards = root.querySelectorAll<HTMLElement>('[data-name="summary-row"] [data-name="summary-card"]');
  const pending = requests.filter((request) => request.status === "pending");
  const allocated = requests.filter((request) => request.status === "allocated");
  const pendingAmount = pending.reduce((sum, request) => sum + request.fundShare, 0);
  const allocatedAmount = allocated.reduce((sum, request) => sum + request.fundShare, 0);
  if (requests.length > 0) {
    const c0 = summaryCards.item(0)?.querySelectorAll<HTMLElement>("p");
    setText(c0?.item(0), "درخواست‌های صندوق");
    setText(c0?.item(1), faNumber(requests.length));
    setText(c0?.item(2), `${faNumber(pending.length)} مورد در انتظار اقدام`);
    const c1 = summaryCards.item(1)?.querySelectorAll<HTMLElement>("p");
    setText(c1?.item(0), "سهم در انتظار تخصیص");
    setText(c1?.item(1), formatAmount(pendingAmount));
    setText(c1?.item(2), "درخواست‌شده توسط مدیر صندوق");
    const c2 = summaryCards.item(2)?.querySelectorAll<HTMLElement>("p");
    setText(c2?.item(0), "سهم تخصیص‌یافته");
    setText(c2?.item(1), formatAmount(allocatedAmount));
    setText(c2?.item(2), "ثبت‌شده برای صندوق");
  }

  let list = table.querySelector<HTMLElement>('[data-moon-synergy-request-list="true"]');
  if (!list) {
    list = document.createElement("div");
    list.dataset.moonSynergyRequestList = "true";
    list.className = "moon-synergy-request-list";
    table.appendChild(list);
  }
  list.replaceChildren();

  if (requests.length === 0) {
    const empty = document.createElement("div");
    empty.className = "moon-synergy-request-empty";
    empty.textContent = "هنوز مدیر صندوق درخواست سهم ۱۰٪ ثبت نکرده است.";
    list.appendChild(empty);
    return;
  }

  requests.forEach((request, index) => {
    const row = document.createElement("div");
    row.className = "moon-synergy-request-row";
    row.dataset.requestId = request.id;
    row.appendChild(makeQueueCell(faNumber(index + 1)));

    const project = makeQueueCell(request.project, "moon-synergy-request-project");
    const company = document.createElement("small");
    company.textContent = request.company;
    project.appendChild(company);
    row.appendChild(project);

    row.appendChild(makeQueueCell(formatAmount(request.companyPayment)));
    row.appendChild(makeQueueCell(formatAmount(request.fundShare)));

    const statusCell = document.createElement("div");
    statusCell.className = "moon-synergy-request-cell";
    const status = document.createElement("span");
    status.className = "moon-synergy-request-status";
    status.dataset.status = request.status;
    status.textContent = request.status === "pending" ? "در انتظار تخصیص" : "تخصیص‌شده";
    statusCell.appendChild(status);
    row.appendChild(statusCell);

    const actionCell = document.createElement("div");
    actionCell.className = "moon-synergy-request-cell";
    const action = document.createElement("button");
    action.type = "button";
    action.className = "moon-synergy-request-action";
    action.textContent = request.status === "pending" ? "بررسی درخواست" : "مشاهده";
    action.addEventListener("click", () => {
      setSelectedRequest(request.id);
      navigate(EMDAD_ALLOCATION_PATH);
    });
    actionCell.appendChild(action);
    row.appendChild(actionCell);
    list.appendChild(row);
  });
}

function setField(field: HTMLElement | undefined, label: string, value: string) {
  if (!field) return;
  const paragraphs = field.querySelectorAll<HTMLElement>("p");
  setText(paragraphs.item(0), label);
  setText(paragraphs.item(1), value);
}

function applyEmdadAllocation() {
  if (window.location.pathname !== EMDAD_ALLOCATION_PATH) return;
  const request = getSelectedRequest();
  if (!request) return;
  const root = document.querySelector<HTMLElement>('[data-name="emdad-fund-synergy-allocation"]');
  if (!root) return;

  const header = root.querySelector<HTMLElement>('[data-name="header"]');
  const headerParagraphs = header?.querySelectorAll<HTMLElement>("p");
  setText(headerParagraphs?.item(0), "بررسی درخواست سهم ۱۰٪ صندوق");
  setText(headerParagraphs?.item(1), "بررسی درخواست ثبت‌شده توسط مدیر صندوق و تأیید تخصیص سهم هم‌افزایی");
  setText(header?.querySelector<HTMLElement>('[data-name="status"] p'), request.status === "pending" ? "در انتظار بررسی" : "تخصیص‌شده");

  const fields = root.querySelectorAll<HTMLElement>('[data-name="request-summary"] [data-name="field"]');
  setField(fields.item(0), "شرکت", request.company);
  setField(fields.item(1), "مرجع درخواست", "مدیر صندوق");
  setField(fields.item(2), "پروژه", request.project);
  setField(fields.item(3), "مبلغ پرداخت شرکت", formatAmount(request.companyPayment));
  setField(fields.item(4), "سهم ۱۰٪ درخواستی", formatAmount(request.fundShare));
  setField(fields.item(5), "تاریخ درخواست", formatDate(request.createdAt));

  const checks = root.querySelectorAll<HTMLElement>('[data-name="final-controls"] [data-name="check-row"]');
  const checkData = [
    ["پرداخت شرکت", `پرداخت نقدی ${formatAmount(request.companyPayment)} مبنای درخواست است`, "تأیید"],
    ["محاسبه سهم صندوق", `۱۰٪ پرداخت برابر ${formatAmount(request.fundShare)} است`, "تأیید"],
    ["درخواست مدیر صندوق", `درخواست در تاریخ ${formatDate(request.createdAt)} ثبت شده است`, "ثبت شده"],
    ["وضعیت تخصیص", request.status === "pending" ? "در انتظار اقدام کمیته امداد" : "سهم صندوق تخصیص داده شده است", request.status === "pending" ? "در انتظار" : "انجام شد"],
  ];
  checks.forEach((row, index) => {
    const paragraphs = row.querySelectorAll<HTMLElement>("p");
    setText(paragraphs.item(0), checkData[index]?.[0] ?? "");
    setText(paragraphs.item(1), checkData[index]?.[1] ?? "");
    setText(paragraphs.item(2), checkData[index]?.[2] ?? "");
  });

  const steps = root.querySelectorAll<HTMLElement>('[data-name="process-step"]');
  const stepData = [
    ["ثبت پرداخت شرکت", `پرداخت ${formatAmount(request.companyPayment)} ثبت شده است`],
    ["محاسبه سهم ۱۰٪", `سهم صندوق ${formatAmount(request.fundShare)} محاسبه شده است`],
    ["ثبت درخواست صندوق", "مدیر صندوق درخواست سهم خود را ارسال کرده است"],
    ["تخصیص توسط امداد", request.status === "pending" ? "در انتظار تأیید و واریز سهم صندوق" : "تخصیص سهم صندوق ثبت شده است"],
  ];
  steps.forEach((step, index) => {
    const paragraphs = step.querySelectorAll<HTMLElement>("p");
    setText(paragraphs.item(1), stepData[index]?.[0] ?? "");
    setText(paragraphs.item(2), stepData[index]?.[1] ?? "");
  });

  const finalDecision = root.querySelector<HTMLElement>('[data-name="final-decision"]');
  const finalParagraphs = finalDecision?.querySelectorAll<HTMLElement>(":scope > div > p, :scope > p");
  if (finalParagraphs && finalParagraphs.length >= 2) {
    setText(finalParagraphs.item(0), "تخصیص سهم صندوق");
    setText(
      finalParagraphs.item(1),
      request.status === "pending"
        ? `با تأیید، مبلغ ${formatAmount(request.fundShare)} به‌عنوان سهم ۱۰٪ صندوق ثبت و رسید مالی ایجاد می‌شود.`
        : `مبلغ ${formatAmount(request.fundShare)} قبلاً برای صندوق تخصیص داده شده است.`,
    );
  }

  const approve = root.querySelector<HTMLElement>('[data-name="approve-final"]');
  const approveText = approve?.querySelector<HTMLElement>("p");
  if (!approve) return;
  if (request.status === "allocated") {
    approve.dataset.moonAllocated = "true";
    setText(approveText, "تخصیص انجام شده");
    return;
  }

  approve.removeAttribute("data-moon-allocated");
  setText(approveText, "تأیید و واریز سهم صندوق");
  if (approve.dataset.moonBound !== "true") {
    approve.dataset.moonBound = "true";
    approve.addEventListener("click", (event) => {
      const selected = getSelectedRequest();
      if (!selected || selected.status !== "pending") return;
      event.preventDefault();
      event.stopPropagation();
      const now = new Date().toISOString();
      const receipt = `FSR-${Date.now()}`;
      const updated = readRequests().map((item) =>
        item.id === selected.id
          ? { ...item, status: "allocated" as const, allocatedAt: now, receipt }
          : item,
      );
      writeRequests(updated);
      navigate(EMDAD_SUCCESS_PATH);
    });
  }
}

function applyEmdadSuccess() {
  if (window.location.pathname !== EMDAD_SUCCESS_PATH) return;
  const request = getSelectedRequest();
  if (!request) return;
  const root = document.querySelector<HTMLElement>('[data-name="emdad-fund-synergy-success"]');
  if (!root) return;

  const headerParagraphs = root.querySelectorAll<HTMLElement>('[data-name="header"] p');
  setText(headerParagraphs.item(0), "سهم ۱۰٪ صندوق تخصیص داده شد");
  setText(headerParagraphs.item(1), "درخواست مدیر صندوق توسط کمیته امداد تأیید و در سوابق مالی ثبت شد.");

  const banner = root.querySelector<HTMLElement>('[data-name="success-banner"]');
  const bannerParagraphs = banner?.querySelectorAll<HTMLElement>("p");
  setText(bannerParagraphs?.item(1), "واریز سهم صندوق با موفقیت ثبت شد");
  setText(bannerParagraphs?.item(2), `مبلغ ${formatAmount(request.fundShare)} برای پروژه «${request.project}» به‌عنوان سهم ۱۰٪ صندوق ثبت شد.`);

  const cells = root.querySelectorAll<HTMLElement>('[data-name="certificate-summary"] [data-name="summary-cell"]');
  setField(cells.item(0), "شرکت", request.company);
  setField(cells.item(1), "پروژه", request.project);
  setField(cells.item(2), "مبلغ پرداخت شرکت", formatAmount(request.companyPayment));
  setField(cells.item(3), "سهم ۱۰٪ صندوق", formatAmount(request.fundShare));
  setField(cells.item(4), "تاریخ تخصیص", formatDate(request.allocatedAt));
  setField(cells.item(5), "شماره رسید", request.receipt ?? "—");

  const steps = root.querySelectorAll<HTMLElement>('[data-name="process-state"] [data-name="process-step"]');
  const stepData = [
    ["ثبت پرداخت شرکت", `پرداخت ${formatAmount(request.companyPayment)} ثبت شد`],
    ["ثبت درخواست صندوق", "مدیر صندوق سهم ۱۰٪ را درخواست کرد"],
    ["تخصیص توسط امداد", `مبلغ ${formatAmount(request.fundShare)} برای صندوق ثبت شد`],
    ["ثبت رسید", `رسید ${request.receipt ?? "مالی"} ایجاد شد`],
  ];
  steps.forEach((step, index) => {
    const paragraphs = step.querySelectorAll<HTMLElement>("p");
    setText(paragraphs.item(1), stepData[index]?.[0] ?? "");
    setText(paragraphs.item(2), stepData[index]?.[1] ?? "");
  });
}

function migrateWrongPrototype() {
  if (localStorage.getItem(LEGACY_REQUESTS_KEY) !== null) localStorage.removeItem(LEGACY_REQUESTS_KEY);
  if (localStorage.getItem(LEGACY_SELECTED_KEY) !== null) localStorage.removeItem(LEGACY_SELECTED_KEY);
}

function applyCurrentPage() {
  applyFundResourceDetail();
  applyFundResourcesList();
  renderEmdadSynergyQueue();
  applyEmdadAllocation();
  applyEmdadSuccess();
}

function hasRelevantPageNode(node: Node) {
  if (!(node instanceof Element)) return false;
  const selector =
    '[data-name="fund-manager-resource-detail"], [data-name="fund-manager-resources"], [data-name="emdad-fund-synergy"], [data-name="emdad-fund-synergy-allocation"], [data-name="emdad-fund-synergy-success"]';
  return node.matches(selector) || Boolean(node.querySelector(selector));
}

migrateWrongPrototype();
applyCurrentPage();

if (document.body) {
  let scheduled = false;
  new MutationObserver((mutations) => {
    if (!mutations.some((mutation) => Array.from(mutation.addedNodes).some(hasRelevantPageNode))) return;
    if (scheduled) return;
    scheduled = true;
    requestAnimationFrame(() => {
      scheduled = false;
      applyCurrentPage();
    });
  }).observe(document.body, { childList: true, subtree: true });
}

window.addEventListener("popstate", () => requestAnimationFrame(applyCurrentPage));
window.addEventListener("moon:fund-synergy-requests-changed", () => requestAnimationFrame(applyCurrentPage));
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") closeSynergyDialog();
});
