import "./fund-release-request-flow.css";

const FUND_MANAGER_DETAIL_PATH = "/panel/fund-manager/investments/detail";
const EMDAD_QUEUE_PATH = "/panel/emdad/release-requests";
const EMDAD_DETAIL_PATH = "/panel/emdad/release-requests/detail";
const EMDAD_SUCCESS_PATH = "/panel/emdad/release-requests/success";
const REQUESTS_KEY = "mah.fundReleaseRequests.v1";
const SELECTED_KEY = "mah.fundReleaseRequests.selected.v1";

type ReleaseRequestStatus = "pending" | "released";

type ReleaseRequest = {
  id: string;
  project: string;
  executor: string;
  stage: string;
  amount: number;
  note: string;
  status: ReleaseRequestStatus;
  createdAt: string;
  releasedAt?: string;
};

function normalize(value: string | null | undefined) {
  return (value ?? "").replace(/\s+/g, " ").trim();
}

function readRequests(): ReleaseRequest[] {
  try {
    const raw = localStorage.getItem(REQUESTS_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    if (!Array.isArray(parsed)) return [];
    return parsed.filter((item): item is ReleaseRequest => {
      return Boolean(
        item &&
          typeof item.id === "string" &&
          typeof item.project === "string" &&
          typeof item.executor === "string" &&
          typeof item.stage === "string" &&
          typeof item.amount === "number" &&
          Number.isFinite(item.amount) &&
          typeof item.note === "string" &&
          (item.status === "pending" || item.status === "released") &&
          typeof item.createdAt === "string",
      );
    });
  } catch {
    return [];
  }
}

function writeRequests(requests: ReleaseRequest[]) {
  localStorage.setItem(REQUESTS_KEY, JSON.stringify(requests));
  window.dispatchEvent(new CustomEvent("moon:fund-release-requests-changed"));
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

function faNumber(value: number) {
  return new Intl.NumberFormat("fa-IR").format(value);
}

function formatAmount(value: number) {
  return `${faNumber(value)} تومان`;
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

function setText(node: Element | null | undefined, text: string) {
  if (!(node instanceof HTMLElement)) return;
  if (normalize(node.textContent) !== text) node.textContent = text;
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

function closeReleaseDialog() {
  document.querySelector<HTMLElement>('[data-fund-release-dialog="true"]')?.remove();
}

function openReleaseDialog(root: HTMLElement) {
  closeReleaseDialog();

  const project = findDetailValue(root, "پروژه") || "پروژه منتخب";
  const executor = findDetailValue(root, "استارتاپ / مجری") || "مجری پروژه";
  const investmentLabel = findDetailValue(root, "مبلغ تخصیص‌یافته");
  const maxAmount = parseAmountLabel(investmentLabel);

  const backdrop = document.createElement("div");
  backdrop.dataset.fundReleaseDialog = "true";
  backdrop.className = "fund-release-dialog-backdrop";
  backdrop.setAttribute("dir", "rtl");

  const dialog = document.createElement("div");
  dialog.className = "fund-release-dialog";
  dialog.setAttribute("role", "dialog");
  dialog.setAttribute("aria-modal", "true");
  dialog.setAttribute("aria-label", "ثبت درخواست آزادسازی وجه");

  const title = document.createElement("h2");
  title.textContent = "درخواست آزادسازی وجه";

  const description = document.createElement("p");
  description.className = "fund-release-dialog-description";
  description.textContent =
    "مدیر صندوق درخواست تخصیص را ثبت می‌کند؛ پرداخت نهایی پس از بررسی در پنل کمیته امداد انجام می‌شود.";

  const projectSummary = document.createElement("div");
  projectSummary.className = "fund-release-project-summary";
  projectSummary.textContent = `پروژه: ${project} · مجری: ${executor}${investmentLabel ? ` · سقف سرمایه‌گذاری: ${investmentLabel}` : ""}`;

  const fields = document.createElement("div");
  fields.className = "fund-release-fields";

  const stageField = document.createElement("label");
  stageField.className = "fund-release-field";
  const stageLabel = document.createElement("span");
  stageLabel.textContent = "مرحله پروژه";
  const stageInput = document.createElement("input");
  stageInput.type = "text";
  stageInput.placeholder = "نام مرحله را وارد کنید";
  stageInput.autocomplete = "off";
  stageField.append(stageLabel, stageInput);

  const amountField = document.createElement("label");
  amountField.className = "fund-release-field";
  const amountLabel = document.createElement("span");
  amountLabel.textContent = "مبلغ درخواست (تومان)";
  const amountInput = document.createElement("input");
  amountInput.type = "number";
  amountInput.min = "1";
  amountInput.step = "1000";
  if (maxAmount > 0) amountInput.max = String(maxAmount);
  amountInput.placeholder = maxAmount > 0 ? `حداکثر ${faNumber(maxAmount)}` : "مبلغ";
  amountField.append(amountLabel, amountInput);

  const noteField = document.createElement("label");
  noteField.className = "fund-release-field fund-release-field-wide";
  const noteLabel = document.createElement("span");
  noteLabel.textContent = "توضیح درخواست";
  const noteInput = document.createElement("textarea");
  noteInput.placeholder = "در صورت نیاز توضیح کوتاه ثبت کنید";
  noteField.append(noteLabel, noteInput);

  fields.append(stageField, amountField, noteField);

  const error = document.createElement("div");
  error.className = "fund-release-error";

  const actions = document.createElement("div");
  actions.className = "fund-release-dialog-actions";

  const cancel = document.createElement("button");
  cancel.type = "button";
  cancel.className = "fund-release-cancel";
  cancel.textContent = "انصراف";
  cancel.addEventListener("click", closeReleaseDialog);

  const submit = document.createElement("button");
  submit.type = "button";
  submit.className = "fund-release-submit";
  submit.textContent = "ثبت و ارسال به امداد";
  submit.addEventListener("click", () => {
    const stage = normalize(stageInput.value);
    const amount = Number(amountInput.value);
    const note = normalize(noteInput.value);

    if (!stage) {
      error.textContent = "مرحله پروژه را وارد کنید.";
      stageInput.focus();
      return;
    }
    if (!Number.isFinite(amount) || amount <= 0) {
      error.textContent = "مبلغ درخواست را به‌درستی وارد کنید.";
      amountInput.focus();
      return;
    }
    if (maxAmount > 0 && amount > maxAmount) {
      error.textContent = `مبلغ درخواست نمی‌تواند بیشتر از ${formatAmount(maxAmount)} باشد.`;
      amountInput.focus();
      return;
    }

    const requests = readRequests();
    const duplicate = requests.find(
      (request) =>
        request.status === "pending" &&
        normalize(request.project) === project &&
        normalize(request.stage) === stage,
    );
    if (duplicate) {
      error.textContent = "برای این پروژه و مرحله یک درخواست باز وجود دارد.";
      return;
    }

    const request: ReleaseRequest = {
      id: `FR-${Date.now()}`,
      project,
      executor,
      stage,
      amount,
      note,
      status: "pending",
      createdAt: new Date().toISOString(),
    };
    writeRequests([request, ...requests]);
    setSelectedRequest(request.id);
    closeReleaseDialog();
    applyFundManagerInvestmentDetail();
  });

  actions.append(cancel, submit);
  dialog.append(title, description, projectSummary, fields, error, actions);
  backdrop.appendChild(dialog);
  backdrop.addEventListener("click", (event) => {
    if (event.target === backdrop) closeReleaseDialog();
  });
  document.body.appendChild(backdrop);
  stageInput.focus();
}

function applyFundManagerInvestmentDetail() {
  if (window.location.pathname !== FUND_MANAGER_DETAIL_PATH) return;
  const root = document.querySelector<HTMLElement>('[data-name="fund-manager-investment-detail"]');
  if (!root) return;

  const header = root.querySelector<HTMLElement>('[data-name="header"]');
  if (header && !header.querySelector('[data-fund-release-button="true"]')) {
    const button = document.createElement("button");
    button.type = "button";
    button.dataset.fundReleaseButton = "true";
    button.className = "fund-release-request-button";
    button.textContent = "درخواست آزادسازی وجه";
    button.addEventListener("click", (event) => {
      event.preventDefault();
      event.stopPropagation();
      openReleaseDialog(root);
    });
    header.appendChild(button);
  }

  const project = findDetailValue(root, "پروژه");
  if (!project) return;
  const latest = readRequests()
    .filter((request) => normalize(request.project) === project)
    .sort((a, b) => b.createdAt.localeCompare(a.createdAt))[0];
  const summary = root.querySelector<HTMLElement>('[data-name="resource-summary"]');
  if (!summary) return;

  let status = summary.querySelector<HTMLElement>('[data-fund-release-status="true"]');
  if (!latest) {
    status?.remove();
    return;
  }
  if (!status) {
    status = document.createElement("div");
    status.dataset.fundReleaseStatus = "true";
    status.className = "fund-release-request-status";
    summary.appendChild(status);
  }
  status.dataset.status = latest.status;
  status.textContent = latest.status === "pending" ? "در انتظار اقدام کمیته امداد" : "آزادسازی وجه انجام شده";
}

function makeCell(text: string, extraClass = "") {
  const cell = document.createElement("div");
  cell.className = `moon-release-queue-cell ${extraClass}`.trim();
  cell.textContent = text;
  return cell;
}

function renderEmdadQueue(root: HTMLElement) {
  const requests = readRequests();
  if (requests.length === 0) return;

  const table = root.querySelector<HTMLElement>('[data-name="release-requests-table"]');
  const toolbar = root.querySelector<HTMLElement>('[data-name="toolbar"]');
  if (!table || !toolbar) return;

  root.querySelector<HTMLElement>('[data-name="request-row"]')?.style.setProperty("display", "none", "important");
  root.querySelector<HTMLElement>('[data-name="pagination-footer"]')?.style.setProperty("display", "none", "important");

  const headers = table.querySelectorAll<HTMLElement>('[data-name="table-header"] p');
  setText(headers.item(0), "پروژه");
  setText(headers.item(1), "مرحله");
  setText(headers.item(2), "مرجع درخواست");
  setText(headers.item(3), "مبلغ");
  setText(headers.item(4), "وضعیت");
  setText(headers.item(5), "اقدام");

  const pendingCount = requests.filter((request) => request.status === "pending").length;
  const releasedCount = requests.filter((request) => request.status === "released").length;
  const toolbarParagraphs = toolbar.querySelectorAll<HTMLElement>("p");
  setText(toolbarParagraphs.item(0), `${faNumber(requests.length)} درخواست مدیر صندوق`);

  const waitingTab = toolbar.querySelector<HTMLElement>('[data-name="waiting-tab"]');
  const releasedTab = toolbar.querySelector<HTMLElement>('[data-name="released-tab"]');
  setText(waitingTab?.querySelector("p"), `در انتظار اقدام ${faNumber(pendingCount)}`);
  setText(releasedTab?.querySelector("p"), `آزادسازی‌شده ${faNumber(releasedCount)}`);

  if (waitingTab && waitingTab.dataset.moonBound !== "true") {
    waitingTab.dataset.moonBound = "true";
    waitingTab.style.cursor = "pointer";
    waitingTab.setAttribute("role", "button");
    waitingTab.tabIndex = 0;
    const activate = () => {
      table.dataset.moonReleaseView = "pending";
      renderEmdadQueue(root);
    };
    waitingTab.addEventListener("click", activate);
    waitingTab.addEventListener("keydown", (event) => {
      if (event.key === "Enter" || event.key === " ") activate();
    });
  }
  if (releasedTab && releasedTab.dataset.moonBound !== "true") {
    releasedTab.dataset.moonBound = "true";
    const activate = () => {
      table.dataset.moonReleaseView = "released";
      renderEmdadQueue(root);
    };
    releasedTab.addEventListener("click", activate);
  }

  const view: ReleaseRequestStatus = table.dataset.moonReleaseView === "released" ? "released" : "pending";
  waitingTab?.setAttribute("data-moon-active", view === "pending" ? "true" : "false");
  releasedTab?.setAttribute("data-moon-active", view === "released" ? "true" : "false");

  let list = table.querySelector<HTMLElement>('[data-moon-release-queue="true"]');
  if (!list) {
    list = document.createElement("div");
    list.dataset.moonReleaseQueue = "true";
    list.className = "moon-release-queue-list";
    table.appendChild(list);
  }
  list.replaceChildren();

  const visible = requests.filter((request) => request.status === view);
  if (visible.length === 0) {
    const empty = document.createElement("div");
    empty.className = "moon-release-queue-empty";
    empty.textContent = view === "pending" ? "درخواست در انتظار اقدامی وجود ندارد." : "هنوز آزادسازی ثبت نشده است.";
    list.appendChild(empty);
    return;
  }

  visible.forEach((request) => {
    const row = document.createElement("div");
    row.className = "moon-release-queue-row";
    row.dataset.releaseRequestId = request.id;

    const project = makeCell(request.project, "moon-release-queue-project");
    const executor = document.createElement("small");
    executor.textContent = request.executor;
    project.appendChild(executor);

    row.appendChild(project);
    row.appendChild(makeCell(request.stage));
    row.appendChild(makeCell("مدیر صندوق"));
    row.appendChild(makeCell(formatAmount(request.amount)));

    const statusCell = document.createElement("div");
    statusCell.className = "moon-release-queue-cell";
    const status = document.createElement("span");
    status.className = "moon-release-queue-status";
    status.dataset.status = request.status;
    status.textContent = request.status === "pending" ? "در انتظار آزادسازی" : "آزادسازی‌شده";
    statusCell.appendChild(status);
    row.appendChild(statusCell);

    const actionCell = document.createElement("div");
    actionCell.className = "moon-release-queue-cell";
    const action = document.createElement("button");
    action.type = "button";
    action.className = "moon-release-queue-action";
    action.textContent = request.status === "pending" ? "بررسی درخواست" : "مشاهده";
    action.addEventListener("click", () => {
      setSelectedRequest(request.id);
      navigate(EMDAD_DETAIL_PATH);
    });
    actionCell.appendChild(action);
    row.appendChild(actionCell);
    list.appendChild(row);
  });
}

function setInfoPair(container: HTMLElement, label: string, nextLabel: string, value: string) {
  const rows = container.querySelectorAll<HTMLElement>('[data-name="info-row"]');
  for (const row of rows) {
    const paragraphs = row.querySelectorAll<HTMLElement>("p");
    if (normalize(paragraphs.item(0)?.textContent) === label) {
      setText(paragraphs.item(0), nextLabel);
      setText(paragraphs.item(1), value);
      return;
    }
  }
}

function applyEmdadDetail() {
  if (window.location.pathname !== EMDAD_DETAIL_PATH) return;
  const request = getSelectedRequest();
  if (!request) return;
  const root = document.querySelector<HTMLElement>('[data-name="emdad-release-request-detail"]');
  if (!root) return;

  const headerParagraphs = root.querySelectorAll<HTMLElement>('[data-name="header"] p');
  setText(headerParagraphs.item(0), "بررسی درخواست آزادسازی وجه صندوق");
  setText(headerParagraphs.item(1), "بررسی درخواست تخصیص ثبت‌شده توسط مدیر صندوق و ثبت تصمیم کمیته امداد");

  const summary = root.querySelector<HTMLElement>('[data-name="request-summary"]');
  if (summary) {
    const paragraphs = summary.querySelectorAll<HTMLElement>("p");
    setText(paragraphs.item(0), request.project);
    setText(paragraphs.item(1), `درخواست مدیر صندوق · ${request.executor}`);
    setText(paragraphs.item(2), request.status === "pending" ? "در انتظار آزادسازی" : "آزادسازی‌شده");
    setText(paragraphs.item(4), request.stage);
    setText(paragraphs.item(5), "مبلغ درخواست");
    setText(paragraphs.item(6), formatAmount(request.amount));
    setText(paragraphs.item(7), "مرجع درخواست");
    setText(paragraphs.item(8), "مدیر صندوق");
    setText(
      paragraphs.item(9),
      "این درخواست پس از تصمیم تخصیص مدیر صندوق برای اقدام مالی به صف کمیته امداد ارسال شده است.",
    );
  }

  const decision = root.querySelector<HTMLElement>('[data-name="release-decision"]');
  if (decision) {
    setInfoPair(decision, "مرجع ارزیابی مرحله", "مرجع درخواست", "مدیر صندوق");
    setInfoPair(
      decision,
      "نتیجه ارزیابی",
      "وضعیت درخواست",
      request.status === "pending" ? "در انتظار اقدام" : "آزادسازی‌شده",
    );
    setInfoPair(decision, "سهم این مرحله", "مبلغ درخواست", formatAmount(request.amount));
    setInfoPair(
      decision,
      "وضعیت مالی",
      "وضعیت مالی",
      request.status === "pending" ? "در انتظار آزادسازی" : "آزادسازی‌شده",
    );
    const note = decision.querySelector<HTMLElement>('[data-name="scope-note"] p');
    setText(note, "کمیته امداد مبلغ و مشخصات درخواست مدیر صندوق را بررسی و نتیجه پرداخت را ثبت می‌کند.");
  }

  const actionArea = root.querySelector<HTMLElement>('[data-name="action-area"]');
  if (actionArea) {
    const paragraphs = actionArea.querySelectorAll<HTMLElement>("p");
    setText(
      paragraphs.item(1),
      "با ثبت تأیید، آزادسازی وجه این درخواست انجام‌شده ثبت می‌شود و نتیجه در سوابق مالی قابل پیگیری خواهد بود.",
    );
    const info = actionArea.querySelector<HTMLElement>('[data-name="info"] p');
    setText(
      info,
      `مبلغ درخواست: ${formatAmount(request.amount)}${request.note ? ` · توضیح: ${request.note}` : ""}`,
    );
  }

  const approve = root.querySelector<HTMLElement>('[data-name="approve-release-button"]');
  if (!approve) return;
  const approveText = approve.querySelector<HTMLElement>("p");

  if (request.status === "released") {
    approve.dataset.moonReleased = "true";
    setText(approveText, "آزادسازی انجام شده");
    return;
  }

  approve.removeAttribute("data-moon-released");
  setText(approveText, "تأیید و آزادسازی وجه");
  if (approve.dataset.moonBound !== "true") {
    approve.dataset.moonBound = "true";
    approve.addEventListener("click", (event) => {
      const selected = getSelectedRequest();
      if (!selected || selected.status !== "pending") return;
      event.preventDefault();
      event.stopPropagation();
      const updated = readRequests().map((item) =>
        item.id === selected.id
          ? {
              ...item,
              status: "released" as const,
              releasedAt: new Date().toISOString(),
            }
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
  const root = document.querySelector<HTMLElement>('[data-name="emdad-release-success"]');
  if (!root) return;

  const hero = root.querySelector<HTMLElement>('[data-name="release-success-hero"]');
  if (hero) {
    const paragraphs = hero.querySelectorAll<HTMLElement>("p");
    setText(paragraphs.item(1), `آزادسازی وجه پروژه «${request.project}» ثبت شد`);
    setText(paragraphs.item(2), `مبلغ ${formatAmount(request.amount)} برای مرحله «${request.stage}» آزادسازی شد.`);
  }

  const summaryItems = root.querySelectorAll<HTMLElement>('[data-name="release-result-summary"] [data-name="summary-item"]');
  if (summaryItems.length >= 4) {
    const project = summaryItems.item(0).querySelectorAll<HTMLElement>("p");
    setText(project.item(1), request.project);
    const stage = summaryItems.item(1).querySelectorAll<HTMLElement>("p");
    setText(stage.item(1), request.stage);
    const amount = summaryItems.item(2).querySelectorAll<HTMLElement>("p");
    setText(amount.item(0), "مبلغ آزادشده");
    setText(amount.item(1), formatAmount(request.amount));
    const source = summaryItems.item(3).querySelectorAll<HTMLElement>("p");
    setText(source.item(0), "مرجع درخواست");
    setText(source.item(1), "مدیر صندوق");
  }

  const steps = root.querySelectorAll<HTMLElement>('[data-name="release-process-result"] [data-name="completed-step"]');
  setText(steps.item(0)?.querySelectorAll("p").item(1), "ثبت درخواست توسط مدیر صندوق");
  setText(steps.item(1)?.querySelectorAll("p").item(1), "آزادسازی توسط کمیته امداد");
  setText(steps.item(2)?.querySelectorAll("p").item(1), "ثبت نتیجه در سوابق پرداخت");
}

function applyCurrentPage() {
  applyFundManagerInvestmentDetail();
  if (window.location.pathname === EMDAD_QUEUE_PATH) {
    const root = document.querySelector<HTMLElement>('[data-name="emdad-release-requests"]');
    if (root) renderEmdadQueue(root);
  }
  applyEmdadDetail();
  applyEmdadSuccess();
}

function hasRelevantPageNode(node: Node) {
  if (!(node instanceof Element)) return false;
  const selector =
    '[data-name="fund-manager-investment-detail"], [data-name="emdad-release-requests"], [data-name="emdad-release-request-detail"], [data-name="emdad-release-success"]';
  return node.matches(selector) || Boolean(node.querySelector(selector));
}

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
window.addEventListener("moon:fund-release-requests-changed", () => requestAnimationFrame(applyCurrentPage));
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") closeReleaseDialog();
});
