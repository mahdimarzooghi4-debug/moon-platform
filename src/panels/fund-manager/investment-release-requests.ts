const FUND_MANAGER_DETAIL_PATH = "/panel/fund-manager/investments/detail";
const EMDAD_REQUESTS_PATH = "/panel/emdad/release-requests";
const EMDAD_REQUEST_DETAIL_PATH = "/panel/emdad/release-requests/detail";
const REQUESTS_KEY = "mah.fundManager.investmentReleaseRequests.v1";
const SELECTED_REQUEST_KEY = "mah.emdad.selectedInvestmentReleaseRequest.v1";

type ReleaseStatus = "pending" | "released";

type InvestmentReleaseRequest = {
  id: string;
  project: string;
  executor: string;
  investmentAmount: number;
  requestedAmount: number;
  stage: string;
  note: string;
  status: ReleaseStatus;
  createdAt: string;
  releasedAt?: string;
};

function normalizedText(value: string | null | undefined) {
  return (value ?? "").replace(/\s+/g, " ").trim();
}

function toEnglishDigits(value: string) {
  const fa = "۰۱۲۳۴۵۶۷۸۹";
  const ar = "٠١٢٣٤٥٦٧٨٩";
  return value
    .replace(/[۰-۹]/g, (digit) => String(fa.indexOf(digit)))
    .replace(/[٠-٩]/g, (digit) => String(ar.indexOf(digit)));
}

function parseMoney(value: string) {
  const normalized = toEnglishDigits(value).replace(/[٬,]/g, "");
  const numeric = Number((normalized.match(/[\d.]+/) ?? ["0"])[0]);
  if (!Number.isFinite(numeric)) return 0;
  if (/میلیارد/.test(value)) return Math.round(numeric * 1_000_000_000);
  if (/میلیون/.test(value)) return Math.round(numeric * 1_000_000);
  return Math.round(numeric);
}

function faNumber(value: number) {
  return new Intl.NumberFormat("fa-IR").format(value);
}

function faMoney(value: number) {
  return `${faNumber(value)} تومان`;
}

function readRequests(): InvestmentReleaseRequest[] {
  try {
    const raw = localStorage.getItem(REQUESTS_KEY);
    const parsed = raw ? JSON.parse(raw) : [];
    return Array.isArray(parsed) ? parsed.filter((item) => item && typeof item.id === "string") : [];
  } catch {
    return [];
  }
}

function writeRequests(requests: InvestmentReleaseRequest[]) {
  localStorage.setItem(REQUESTS_KEY, JSON.stringify(requests));
}

function selectedRequest() {
  const id = sessionStorage.getItem(SELECTED_REQUEST_KEY);
  if (!id) return null;
  return readRequests().find((request) => request.id === id) ?? null;
}

function setText(node: Element | null | undefined, text: string) {
  if (!(node instanceof HTMLElement)) return;
  if (normalizedText(node.textContent) !== text) node.textContent = text;
}

function spaNavigate(path: string) {
  if (window.location.pathname === path) return;
  window.history.pushState({}, "", path);
  window.dispatchEvent(new PopStateEvent("popstate"));
}

function fieldValue(root: ParentNode, label: string) {
  const fields = Array.from(root.querySelectorAll<HTMLElement>('[data-name="detail-field"], [data-name="summary-field"]'));
  for (const field of fields) {
    const paragraphs = field.querySelectorAll<HTMLElement>("p");
    if (normalizedText(paragraphs.item(0)?.textContent) === label) {
      return normalizedText(paragraphs.item(1)?.textContent);
    }
  }
  return "";
}

function closeRequestDialog() {
  document.querySelector<HTMLElement>('[data-investment-release-dialog="true"]')?.remove();
}

function createInputLabel(text: string, input: HTMLElement) {
  const label = document.createElement("label");
  label.style.display = "flex";
  label.style.flexDirection = "column";
  label.style.gap = "7px";
  label.style.fontSize = "12px";
  label.style.fontWeight = "600";
  label.style.color = "#17324d";
  const caption = document.createElement("span");
  caption.textContent = text;
  label.append(caption, input);
  return label;
}

function inputBaseStyle(input: HTMLInputElement | HTMLTextAreaElement) {
  input.style.width = "100%";
  input.style.border = "1px solid #dbe5f0";
  input.style.borderRadius = "9px";
  input.style.background = "#f8fbfe";
  input.style.color = "#17324d";
  input.style.fontFamily = "Vazirmatn, sans-serif";
  input.style.fontSize = "12px";
  input.style.outline = "none";
  input.style.padding = "0 12px";
  input.style.boxSizing = "border-box";
}

function openRequestDialog(root: HTMLElement) {
  closeRequestDialog();

  const project = fieldValue(root, "پروژه") || "سلامت خانواده";
  const executor = fieldValue(root, "استارتاپ / مجری") || "استارتاپ مجری پروژه";
  const amountLabel = fieldValue(root, "مبلغ تخصیص‌یافته") || fieldValue(root, "مبلغ سرمایه‌گذاری") || "۳۰۰ میلیون تومان";
  const investmentAmount = parseMoney(amountLabel) || 300_000_000;

  const backdrop = document.createElement("div");
  backdrop.dataset.investmentReleaseDialog = "true";
  Object.assign(backdrop.style, {
    position: "fixed",
    inset: "0",
    zIndex: "10000",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: "rgba(16, 38, 59, .44)",
    padding: "24px",
    fontFamily: "Vazirmatn, sans-serif",
  });

  const dialog = document.createElement("div");
  dialog.setAttribute("role", "dialog");
  dialog.setAttribute("aria-modal", "true");
  dialog.setAttribute("dir", "rtl");
  Object.assign(dialog.style, {
    width: "480px",
    background: "#fff",
    border: "1px solid #dbe5f0",
    borderRadius: "16px",
    boxShadow: "0 18px 48px rgba(23,50,77,.2)",
    padding: "22px",
    color: "#17324d",
  });

  const title = document.createElement("h2");
  title.textContent = "ثبت درخواست آزادسازی وجه";
  Object.assign(title.style, { margin: "0 0 6px", fontSize: "19px", fontWeight: "700" });

  const description = document.createElement("p");
  description.textContent = `درخواست برای پروژه «${project}» ثبت می‌شود و برای بررسی به پنل کمیته امداد می‌رود.`;
  Object.assign(description.style, { margin: "0 0 18px", fontSize: "11px", lineHeight: "1.9", color: "#60758a" });

  const projectBox = document.createElement("div");
  projectBox.textContent = `پروژه: ${project} · سقف سرمایه‌گذاری ثبت‌شده: ${amountLabel}`;
  Object.assign(projectBox.style, {
    background: "#edf7fe",
    borderRadius: "9px",
    padding: "10px 12px",
    marginBottom: "14px",
    fontSize: "11px",
    color: "#17324d",
  });

  const stageInput = document.createElement("input");
  stageInput.type = "text";
  stageInput.value = "مرحله بعدی پروژه";
  stageInput.style.height = "42px";
  inputBaseStyle(stageInput);

  const amountInput = document.createElement("input");
  amountInput.type = "number";
  amountInput.min = "1";
  amountInput.max = String(investmentAmount);
  amountInput.step = "1000000";
  amountInput.value = String(investmentAmount);
  amountInput.style.height = "42px";
  inputBaseStyle(amountInput);
  amountInput.style.direction = "ltr";
  amountInput.style.textAlign = "center";

  const noteInput = document.createElement("textarea");
  noteInput.rows = 3;
  noteInput.placeholder = "توضیح اختیاری برای کمیته امداد";
  inputBaseStyle(noteInput);
  noteInput.style.padding = "10px 12px";
  noteInput.style.resize = "vertical";

  const fields = document.createElement("div");
  fields.style.display = "flex";
  fields.style.flexDirection = "column";
  fields.style.gap = "12px";
  fields.append(
    createInputLabel("مرحله / عنوان تخصیص", stageInput),
    createInputLabel("مبلغ درخواست (تومان)", amountInput),
    createInputLabel("توضیحات", noteInput),
  );

  const error = document.createElement("div");
  Object.assign(error.style, { minHeight: "20px", marginTop: "10px", fontSize: "11px", color: "#d9592e" });

  const actions = document.createElement("div");
  actions.style.display = "flex";
  actions.style.gap = "10px";
  actions.style.marginTop = "8px";

  const cancel = document.createElement("button");
  cancel.type = "button";
  cancel.textContent = "انصراف";
  Object.assign(cancel.style, {
    width: "110px",
    height: "40px",
    border: "1px solid #dbe5f0",
    borderRadius: "9px",
    background: "#fff",
    color: "#60758a",
    cursor: "pointer",
    fontFamily: "Vazirmatn, sans-serif",
  });
  cancel.addEventListener("click", closeRequestDialog);

  const submit = document.createElement("button");
  submit.type = "button";
  submit.textContent = "ارسال برای کمیته امداد";
  Object.assign(submit.style, {
    flex: "1",
    height: "40px",
    border: "1px solid #2094e3",
    borderRadius: "9px",
    background: "#2094e3",
    color: "#fff",
    cursor: "pointer",
    fontFamily: "Vazirmatn, sans-serif",
    fontWeight: "600",
  });

  submit.addEventListener("click", () => {
    const requestedAmount = Math.round(Number(amountInput.value));
    const stage = normalizedText(stageInput.value);
    if (!stage) {
      error.textContent = "عنوان مرحله را وارد کنید.";
      return;
    }
    if (!Number.isFinite(requestedAmount) || requestedAmount <= 0 || requestedAmount > investmentAmount) {
      error.textContent = "مبلغ درخواست باید بیشتر از صفر و حداکثر برابر سرمایه‌گذاری ثبت‌شده باشد.";
      return;
    }

    const requests = readRequests();
    const hasPending = requests.some((request) => request.project === project && request.status === "pending");
    if (hasPending) {
      error.textContent = "برای این پروژه یک درخواست در انتظار بررسی وجود دارد.";
      return;
    }

    const request: InvestmentReleaseRequest = {
      id: `FM-${Date.now()}`,
      project,
      executor,
      investmentAmount,
      requestedAmount,
      stage,
      note: normalizedText(noteInput.value),
      status: "pending",
      createdAt: new Date().toISOString(),
    };
    writeRequests([request, ...requests]);
    closeRequestDialog();
    applyFundManagerInvestmentRequestUI();
  });

  actions.append(cancel, submit);
  dialog.append(title, description, projectBox, fields, error, actions);
  backdrop.appendChild(dialog);
  backdrop.addEventListener("click", (event) => {
    if (event.target === backdrop) closeRequestDialog();
  });
  document.body.appendChild(backdrop);
  stageInput.focus();
}

function applyFundManagerInvestmentRequestUI() {
  if (window.location.pathname !== FUND_MANAGER_DETAIL_PATH) return;
  const root = document.querySelector<HTMLElement>('[data-name="fund-manager-investment-detail"]');
  if (!root) return;

  const project = fieldValue(root, "پروژه") || "سلامت خانواده";
  const requests = readRequests().filter((request) => request.project === project);
  const pending = requests.find((request) => request.status === "pending");
  const latest = requests[0];
  const summary = root.querySelector<HTMLElement>('[data-name="resource-summary"]');
  if (!summary) return;

  let button = summary.querySelector<HTMLButtonElement>('[data-release-request-button="true"]');
  if (!button) {
    button = document.createElement("button");
    button.type = "button";
    button.dataset.releaseRequestButton = "true";
    Object.assign(button.style, {
      position: "absolute",
      left: "155px",
      top: "15px",
      width: "190px",
      height: "34px",
      borderRadius: "8px",
      border: "1px solid #2094e3",
      fontFamily: "Vazirmatn, sans-serif",
      fontSize: "11px",
      fontWeight: "600",
      cursor: "pointer",
      zIndex: "2",
    });
    button.addEventListener("click", () => openRequestDialog(root));
    summary.appendChild(button);
  }

  button.disabled = Boolean(pending);
  button.textContent = pending ? "در انتظار بررسی امداد" : latest?.status === "released" ? "ثبت درخواست جدید" : "درخواست آزادسازی وجه";
  button.style.background = pending ? "#fff7e8" : "#2094e3";
  button.style.color = pending ? "#c27a10" : "#fff";
  button.style.borderColor = pending ? "#f4d399" : "#2094e3";
  button.style.cursor = pending ? "default" : "pointer";

  let status = summary.querySelector<HTMLElement>('[data-release-request-status="true"]');
  if (!status) {
    status = document.createElement("div");
    status.dataset.releaseRequestStatus = "true";
    Object.assign(status.style, {
      position: "absolute",
      left: "360px",
      top: "20px",
      width: "250px",
      fontFamily: "Vazirmatn, sans-serif",
      fontSize: "10px",
      textAlign: "left",
    });
    summary.appendChild(status);
  }
  status.textContent = pending
    ? `درخواست ${faMoney(pending.requestedAmount)} برای «${pending.stage}» ارسال شده است.`
    : latest?.status === "released"
      ? `آخرین درخواست ${faMoney(latest.requestedAmount)} توسط کمیته امداد آزاد شده است.`
      : "";
  status.style.color = pending ? "#c27a10" : "#159455";
}

function buildQueueCard(requests: InvestmentReleaseRequest[]) {
  const card = document.createElement("div");
  card.dataset.managerReleaseQueue = "true";
  card.setAttribute("dir", "rtl");
  Object.assign(card.style, {
    width: "100%",
    minHeight: "88px",
    background: "#fff",
    border: "1px solid #dbe5f0",
    borderRadius: "12px",
    padding: "12px 14px",
    boxSizing: "border-box",
    fontFamily: "Vazirmatn, sans-serif",
  });

  const title = document.createElement("div");
  title.textContent = "درخواست‌های ثبت‌شده توسط مدیر صندوق";
  Object.assign(title.style, { fontSize: "13px", fontWeight: "700", color: "#17324d", marginBottom: "9px" });
  card.appendChild(title);

  requests.slice(0, 3).forEach((request) => {
    const row = document.createElement("div");
    Object.assign(row.style, {
      display: "flex",
      alignItems: "center",
      gap: "12px",
      minHeight: "42px",
      padding: "6px 8px",
      borderTop: "1px solid #edf1f5",
      fontSize: "11px",
    });

    const project = document.createElement("div");
    project.textContent = request.project;
    Object.assign(project.style, { flex: "1 1 220px", fontWeight: "600", color: "#17324d" });

    const stage = document.createElement("div");
    stage.textContent = request.stage;
    Object.assign(stage.style, { flex: "1 1 230px", color: "#60758a" });

    const amount = document.createElement("div");
    amount.textContent = faMoney(request.requestedAmount);
    Object.assign(amount.style, { flex: "0 0 150px", color: "#17324d", textAlign: "center" });

    const status = document.createElement("div");
    status.textContent = request.status === "released" ? "آزادسازی‌شده" : "در انتظار بررسی";
    Object.assign(status.style, {
      flex: "0 0 120px",
      textAlign: "center",
      color: request.status === "released" ? "#159455" : "#c27a10",
    });

    const review = document.createElement("button");
    review.type = "button";
    review.textContent = request.status === "released" ? "مشاهده" : "بررسی درخواست";
    Object.assign(review.style, {
      flex: "0 0 130px",
      height: "32px",
      border: "1px solid #2094e3",
      borderRadius: "8px",
      background: request.status === "released" ? "#fff" : "#2094e3",
      color: request.status === "released" ? "#2094e3" : "#fff",
      cursor: "pointer",
      fontFamily: "Vazirmatn, sans-serif",
      fontSize: "10px",
    });
    review.addEventListener("click", () => {
      sessionStorage.setItem(SELECTED_REQUEST_KEY, request.id);
      spaNavigate(EMDAD_REQUEST_DETAIL_PATH);
    });

    row.append(project, stage, amount, status, review);
    card.appendChild(row);
  });

  return card;
}

function applyEmdadQueueUI() {
  if (window.location.pathname !== EMDAD_REQUESTS_PATH) return;
  const root = document.querySelector<HTMLElement>('[data-name="emdad-release-requests"]');
  const main = root?.querySelector<HTMLElement>('[data-name="Main Content"]');
  if (!root || !main) return;

  const requests = readRequests();
  main.querySelector<HTMLElement>('[data-manager-release-queue="true"]')?.remove();
  if (requests.length) {
    const toolbar = main.querySelector<HTMLElement>('[data-name="toolbar"]');
    toolbar?.insertAdjacentElement("afterend", buildQueueCard(requests));
  }

  const totalLabel = main.querySelector<HTMLElement>('[data-name="toolbar"] > div:first-child p');
  setText(totalLabel, `${faNumber(1 + requests.length)} درخواست`);

  const waiting = 1 + requests.filter((request) => request.status === "pending").length;
  const released = requests.filter((request) => request.status === "released").length;
  setText(main.querySelector('[data-name="waiting-tab"] p'), `در انتظار اقدام ${faNumber(waiting)}`);
  setText(main.querySelector('[data-name="released-tab"] p'), `آزادسازی‌شده ${faNumber(released)}`);
}

function updateInfoRow(row: Element | undefined, label: string, value: string, valueColor = "#17324d") {
  if (!row) return;
  const paragraphs = row.querySelectorAll<HTMLElement>("p");
  setText(paragraphs.item(0), label);
  setText(paragraphs.item(1), value);
  if (paragraphs.item(1)) paragraphs.item(1).style.color = valueColor;
}

function applyEmdadDetailUI() {
  if (window.location.pathname !== EMDAD_REQUEST_DETAIL_PATH) return;
  const request = selectedRequest();
  if (!request) return;
  const root = document.querySelector<HTMLElement>('[data-name="emdad-release-request-detail"]');
  if (!root) return;

  const summary = root.querySelector<HTMLElement>('[data-name="request-summary"]');
  if (summary) {
    const direct = Array.from(summary.children).filter((child) => child instanceof HTMLElement) as HTMLElement[];
    setText(direct[0]?.querySelector("p"), request.project);
    setText(direct[1]?.querySelector("p"), `${request.executor} · درخواست تخصیص منابع صندوق`);
    setText(summary.querySelector('[data-name="status"] p'), request.status === "released" ? "آزادسازی‌شده" : "در انتظار آزادسازی");
    const summaryTexts = Array.from(summary.querySelectorAll<HTMLElement>("p"));
    const stageLabelIndex = summaryTexts.findIndex((item) => normalizedText(item.textContent) === "مرحله پروژه");
    if (stageLabelIndex >= 0) setText(summaryTexts[stageLabelIndex + 1], request.stage);
    const shareLabelIndex = summaryTexts.findIndex((item) => normalizedText(item.textContent) === "سهم مرحله");
    if (shareLabelIndex >= 0) {
      setText(summaryTexts[shareLabelIndex], "مبلغ درخواست");
      setText(summaryTexts[shareLabelIndex + 1], faMoney(request.requestedAmount));
    }
    const evaluationIndex = summaryTexts.findIndex((item) => normalizedText(item.textContent) === "ارزیابی مرحله");
    if (evaluationIndex >= 0) {
      setText(summaryTexts[evaluationIndex], "مرجع درخواست");
      setText(summaryTexts[evaluationIndex + 1], "مدیر صندوق ماه");
    }
    const note = summaryTexts.at(-1);
    setText(note, "این درخواست توسط مدیر صندوق برای تخصیص منابع صندوق ثبت و برای اقدام به کمیته امداد ارسال شده است.");
  }

  const evaluation = root.querySelector<HTMLElement>('[data-name="evaluation-and-kpi"]');
  if (evaluation) {
    const paragraphs = evaluation.querySelectorAll<HTMLElement>("p");
    setText(paragraphs.item(0), "اطلاعات درخواست تخصیص");
    setText(paragraphs.item(1), "اطلاعات ثبت‌شده توسط مدیر صندوق برای تصمیم آزادسازی وجه");
    setText(paragraphs.item(2), "مبنای درخواست");
    setText(paragraphs.item(3), "سرمایه‌گذاری فعال پروژه در صندوق ماه");
    setText(paragraphs.item(4), request.note || "درخواست آزادسازی مرحله‌ای از منابع تخصیص‌یافته صندوق");
    const documentRows = evaluation.querySelectorAll<HTMLElement>('[data-name="document-row"]');
    const docData = [
      ["وضعیت سرمایه‌گذاری", "فعال"],
      ["مبلغ درخواست", faMoney(request.requestedAmount)],
      ["ثبت‌کننده درخواست", "مدیر صندوق"],
    ];
    documentRows.forEach((row, index) => {
      const ps = row.querySelectorAll<HTMLElement>("p");
      setText(ps.item(0), docData[index]?.[0] ?? "اطلاعات درخواست");
      setText(ps.item(1), docData[index]?.[1] ?? "ثبت شده");
    });
  }

  const decision = root.querySelector<HTMLElement>('[data-name="release-decision"]');
  if (decision) {
    const rows = Array.from(decision.querySelectorAll<HTMLElement>('[data-name="info-row"]'));
    updateInfoRow(rows[0], "مرجع درخواست", "مدیر صندوق ماه");
    updateInfoRow(rows[1], "نوع درخواست", "تخصیص منابع صندوق");
    updateInfoRow(rows[2], "مبلغ درخواست", faMoney(request.requestedAmount));
    updateInfoRow(rows[3], "وضعیت مالی", request.status === "released" ? "آزادسازی‌شده" : "در انتظار آزادسازی", request.status === "released" ? "#159455" : "#c27a10");
    setText(decision.querySelector('[data-name="scope-note"] p'), "کمیته امداد پس از بررسی درخواست مالی مدیر صندوق، آزادسازی وجه را ثبت می‌کند.");
  }

  const actionArea = root.querySelector<HTMLElement>('[data-name="action-area"]');
  if (actionArea) {
    const paragraphs = actionArea.querySelectorAll<HTMLElement>("p");
    setText(paragraphs.item(1), "با ثبت تأیید، مبلغ درخواست برای پروژه آزادشده ثبت می‌شود و وضعیت برای مدیر صندوق قابل پیگیری خواهد بود.");
    setText(actionArea.querySelector('[data-name="info"] p'), `مبلغ درخواست آزادسازی: ${faMoney(request.requestedAmount)}`);
    const approve = actionArea.querySelector<HTMLElement>('[data-name="approve-release-button"]');
    const approveText = approve?.querySelector<HTMLElement>("p");
    if (request.status === "released") {
      setText(approveText, "آزادسازی انجام شده");
      if (approve) {
        approve.style.pointerEvents = "none";
        approve.style.opacity = "0.65";
      }
    } else {
      setText(approveText, "تأیید و آزادسازی وجه");
      if (approve) {
        approve.style.pointerEvents = "auto";
        approve.style.opacity = "1";
      }
    }
  }
}

function markSelectedRequestReleased() {
  const selected = selectedRequest();
  if (!selected || selected.status === "released") return;
  const requests = readRequests();
  const next = requests.map((request) =>
    request.id === selected.id
      ? { ...request, status: "released" as const, releasedAt: new Date().toISOString() }
      : request,
  );
  writeRequests(next);
}

function applyAll() {
  applyFundManagerInvestmentRequestUI();
  applyEmdadQueueUI();
  applyEmdadDetailUI();
}

applyAll();

if (document.body) {
  let scheduled = false;
  new MutationObserver((mutations) => {
    if (!mutations.some((mutation) => mutation.addedNodes.length > 0)) return;
    if (scheduled) return;
    scheduled = true;
    requestAnimationFrame(() => {
      scheduled = false;
      applyAll();
    });
  }).observe(document.body, { childList: true, subtree: true });
}

window.addEventListener("popstate", applyAll);

document.addEventListener(
  "click",
  (event) => {
    const target = event.target;
    if (!(target instanceof Element)) return;
    if (window.location.pathname === EMDAD_REQUEST_DETAIL_PATH && target.closest('[data-name="approve-release-button"]')) {
      markSelectedRequestReleased();
    }
  },
  true,
);

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") closeRequestDialog();
});
