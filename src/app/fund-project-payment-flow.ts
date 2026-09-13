import "./fund-project-payment-flow.css";

const FUND_DETAIL_PATH = "/panel/fund-manager/investments/detail";
const EMDAD_PAYMENTS_PATH = "/panel/emdad/fund-payments";
const REQUESTS_KEY = "mah.fundProjectPaymentRequests.v1";

export type FundProjectPaymentStatus = "pending_admin" | "approved" | "rejected" | "paid";

export type FundProjectPaymentRequest = {
  id: string;
  project: string;
  executor: string;
  stage: string;
  investmentAmount: number;
  requestedAmount: number;
  note: string;
  status: FundProjectPaymentStatus;
  createdAt: string;
  approvedAt?: string;
  rejectedAt?: string;
  paidAt?: string;
  receipt?: string;
};

function normalize(value: string | null | undefined) {
  return (value ?? "").replace(/\s+/g, " ").trim();
}

function toLatinDigits(value: string) {
  return value
    .replace(/[۰-۹]/g, (digit) => String("۰۱۲۳۴۵۶۷۸۹".indexOf(digit)))
    .replace(/[٠-٩]/g, (digit) => String("٠١٢٣٤٥٦٧٨٩".indexOf(digit)));
}

function parseAmount(value: string) {
  const normalized = toLatinDigits(value).replace(/[٬,]/g, "");
  const match = normalized.match(/(\d+(?:\.\d+)?)/);
  if (!match) return 0;
  const amount = Number(match[1]);
  if (!Number.isFinite(amount)) return 0;
  if (normalized.includes("میلیارد")) return Math.round(amount * 1_000_000_000);
  if (normalized.includes("میلیون")) return Math.round(amount * 1_000_000);
  if (normalized.includes("هزار")) return Math.round(amount * 1_000);
  return Math.round(amount);
}

function faNumber(value: number) {
  return new Intl.NumberFormat("fa-IR", { maximumFractionDigits: 0 }).format(value);
}

function formatAmount(value: number) {
  return `${faNumber(value)} تومان`;
}

function normalizeRequest(item: unknown): FundProjectPaymentRequest | null {
  if (!item || typeof item !== "object") return null;
  const value = item as Record<string, unknown>;
  const legacyStatus = value.status === "pending" ? "pending_admin" : value.status;
  if (
    typeof value.id !== "string" ||
    typeof value.project !== "string" ||
    typeof value.executor !== "string" ||
    typeof value.stage !== "string" ||
    typeof value.investmentAmount !== "number" ||
    !Number.isFinite(value.investmentAmount) ||
    typeof value.requestedAmount !== "number" ||
    !Number.isFinite(value.requestedAmount) ||
    typeof value.note !== "string" ||
    !["pending_admin", "approved", "rejected", "paid"].includes(String(legacyStatus)) ||
    typeof value.createdAt !== "string"
  ) {
    return null;
  }

  return {
    id: value.id,
    project: value.project,
    executor: value.executor,
    stage: value.stage,
    investmentAmount: value.investmentAmount,
    requestedAmount: value.requestedAmount,
    note: value.note,
    status: legacyStatus as FundProjectPaymentStatus,
    createdAt: value.createdAt,
    approvedAt: typeof value.approvedAt === "string" ? value.approvedAt : undefined,
    rejectedAt: typeof value.rejectedAt === "string" ? value.rejectedAt : undefined,
    paidAt: typeof value.paidAt === "string" ? value.paidAt : undefined,
    receipt: typeof value.receipt === "string" ? value.receipt : undefined,
  };
}

function readRequests(): FundProjectPaymentRequest[] {
  try {
    const raw = localStorage.getItem(REQUESTS_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    if (!Array.isArray(parsed)) return [];
    const requests = parsed.map(normalizeRequest).filter((item): item is FundProjectPaymentRequest => Boolean(item));
    if (parsed.some((item) => item && typeof item === "object" && (item as { status?: unknown }).status === "pending")) {
      localStorage.setItem(REQUESTS_KEY, JSON.stringify(requests));
    }
    return requests;
  } catch {
    return [];
  }
}

function writeRequests(requests: FundProjectPaymentRequest[]) {
  localStorage.setItem(REQUESTS_KEY, JSON.stringify(requests));
  window.dispatchEvent(new CustomEvent("moon:fund-project-payments-changed"));
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

function investmentData(root: HTMLElement) {
  const project = findDetailValue(root, "پروژه") || "پروژه منتخب";
  const executor = findDetailValue(root, "استارتاپ / مجری") || "مجری پروژه";
  const investmentLabel = findDetailValue(root, "مبلغ تخصیص‌یافته");
  const investmentAmount = parseAmount(investmentLabel);
  const requests = readRequests().filter((request) => normalize(request.project) === project);
  const reservedAmount = requests
    .filter((request) => request.status !== "rejected")
    .reduce((sum, request) => sum + request.requestedAmount, 0);
  const remainingAmount = Math.max(0, investmentAmount - reservedAmount);
  return { project, executor, investmentAmount, reservedAmount, remainingAmount, requests };
}

function closeDialog() {
  document.querySelector<HTMLElement>('[data-fund-project-payment-dialog="true"]')?.remove();
}

function openDialog(root: HTMLElement) {
  closeDialog();
  const data = investmentData(root);
  if (data.investmentAmount <= 0 || data.remainingAmount <= 0) return;

  const backdrop = document.createElement("div");
  backdrop.dataset.fundProjectPaymentDialog = "true";
  backdrop.className = "fund-project-payment-dialog-backdrop";
  backdrop.setAttribute("dir", "rtl");

  const dialog = document.createElement("div");
  dialog.className = "fund-project-payment-dialog";
  dialog.setAttribute("role", "dialog");
  dialog.setAttribute("aria-modal", "true");
  dialog.setAttribute("aria-label", "درخواست پرداخت از منابع صندوق");

  const title = document.createElement("h2");
  title.textContent = "درخواست پرداخت از منابع صندوق";

  const description = document.createElement("p");
  description.className = "fund-project-payment-dialog-description";
  description.textContent =
    "درخواست ابتدا برای مدیر ماه ارسال می‌شود. پس از تأیید مدیر ماه، درخواست برای اجرای پرداخت به پروژه در اختیار کمیته امداد قرار می‌گیرد.";

  const summary = document.createElement("div");
  summary.className = "fund-project-payment-summary";
  const summaryItems = [
    ["پروژه", data.project],
    ["دریافت‌کننده", data.executor],
    ["سقف سرمایه‌گذاری", formatAmount(data.investmentAmount)],
    ["مانده قابل درخواست", formatAmount(data.remainingAmount)],
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

  const fields = document.createElement("div");
  fields.className = "fund-project-payment-fields";

  const stageField = document.createElement("label");
  stageField.className = "fund-project-payment-field";
  const stageLabel = document.createElement("span");
  stageLabel.textContent = "مرحله / شرح پرداخت";
  const stageInput = document.createElement("input");
  stageInput.type = "text";
  stageInput.placeholder = "مثلاً مرحله دوم اجرا";
  stageInput.autocomplete = "off";
  stageField.append(stageLabel, stageInput);

  const amountField = document.createElement("label");
  amountField.className = "fund-project-payment-field";
  const amountLabel = document.createElement("span");
  amountLabel.textContent = "مبلغ درخواست (تومان)";
  const amountInput = document.createElement("input");
  amountInput.type = "number";
  amountInput.min = "1";
  amountInput.max = String(data.remainingAmount);
  amountInput.step = "1000";
  amountInput.placeholder = `حداکثر ${faNumber(data.remainingAmount)}`;
  amountField.append(amountLabel, amountInput);

  const noteField = document.createElement("label");
  noteField.className = "fund-project-payment-field fund-project-payment-field-wide";
  const noteLabel = document.createElement("span");
  noteLabel.textContent = "توضیح درخواست";
  const noteInput = document.createElement("textarea");
  noteInput.placeholder = "توضیح اختیاری برای مدیر ماه";
  noteField.append(noteLabel, noteInput);

  fields.append(stageField, amountField, noteField);

  const error = document.createElement("div");
  error.className = "fund-project-payment-error";

  const actions = document.createElement("div");
  actions.className = "fund-project-payment-actions";
  const cancel = document.createElement("button");
  cancel.type = "button";
  cancel.className = "fund-project-payment-cancel";
  cancel.textContent = "انصراف";
  cancel.addEventListener("click", closeDialog);

  const submit = document.createElement("button");
  submit.type = "button";
  submit.className = "fund-project-payment-submit";
  submit.textContent = "ارسال درخواست به مدیر ماه";
  submit.addEventListener("click", () => {
    const stage = normalize(stageInput.value);
    const amount = Number(amountInput.value);
    if (!stage) {
      error.textContent = "مرحله یا شرح پرداخت را وارد کنید.";
      stageInput.focus();
      return;
    }
    if (!Number.isFinite(amount) || amount <= 0) {
      error.textContent = "مبلغ درخواست را به‌درستی وارد کنید.";
      amountInput.focus();
      return;
    }
    if (amount > data.remainingAmount) {
      error.textContent = `حداکثر مبلغ قابل درخواست ${formatAmount(data.remainingAmount)} است.`;
      amountInput.focus();
      return;
    }

    const requests = readRequests();
    const duplicate = requests.some(
      (request) =>
        (request.status === "pending_admin" || request.status === "approved") &&
        normalize(request.project) === data.project &&
        normalize(request.stage) === stage,
    );
    if (duplicate) {
      error.textContent = "برای این مرحله یک درخواست باز وجود دارد.";
      return;
    }

    const request: FundProjectPaymentRequest = {
      id: `FPP-${Date.now()}`,
      project: data.project,
      executor: data.executor,
      stage,
      investmentAmount: data.investmentAmount,
      requestedAmount: amount,
      note: normalize(noteInput.value),
      status: "pending_admin",
      createdAt: new Date().toISOString(),
    };
    writeRequests([request, ...requests]);
    closeDialog();
    applyFundDetail();
  });

  actions.append(cancel, submit);
  dialog.append(title, description, summary, fields, error, actions);
  backdrop.appendChild(dialog);
  backdrop.addEventListener("click", (event) => {
    if (event.target === backdrop) closeDialog();
  });
  document.body.appendChild(backdrop);
  stageInput.focus();
}

function requestStatusText(request: FundProjectPaymentRequest) {
  if (request.status === "pending_admin") return `در انتظار تأیید مدیر ماه · ${formatAmount(request.requestedAmount)}`;
  if (request.status === "approved") return `تأیید مدیر ماه · در انتظار پرداخت · ${formatAmount(request.requestedAmount)}`;
  if (request.status === "rejected") return `رد شده توسط مدیر ماه · ${formatAmount(request.requestedAmount)}`;
  return `پرداخت‌شده · ${formatAmount(request.requestedAmount)}`;
}

function applyFundDetail() {
  if (window.location.pathname !== FUND_DETAIL_PATH) return;
  const root = document.querySelector<HTMLElement>('[data-name="fund-manager-investment-detail"]');
  if (!root) return;

  const data = investmentData(root);
  const latest = [...data.requests].sort((a, b) => b.createdAt.localeCompare(a.createdAt))[0];
  const header = root.querySelector<HTMLElement>('[data-name="header"]');
  if (header) {
    let button = header.querySelector<HTMLButtonElement>('[data-fund-project-payment-button="true"]');
    if (!button) {
      button = document.createElement("button");
      button.type = "button";
      button.dataset.fundProjectPaymentButton = "true";
      button.className = "fund-project-payment-button";
      button.addEventListener("click", (event) => {
        event.preventDefault();
        event.stopPropagation();
        openDialog(root);
      });
      header.appendChild(button);
    }
    if (data.remainingAmount > 0) {
      button.disabled = false;
      button.textContent = "درخواست پرداخت از منابع صندوق";
    } else {
      button.disabled = true;
      button.textContent = "سقف سرمایه‌گذاری تکمیل شده";
    }
  }

  const summary = root.querySelector<HTMLElement>('[data-name="resource-summary"]');
  if (!summary) return;
  let status = summary.querySelector<HTMLElement>('[data-fund-project-payment-status="true"]');
  if (!latest) {
    status?.remove();
    return;
  }
  if (!status) {
    status = document.createElement("div");
    status.dataset.fundProjectPaymentStatus = "true";
    status.className = "fund-project-payment-status";
    summary.appendChild(status);
  }
  status.dataset.status = latest.status;
  status.textContent = requestStatusText(latest);
}

function ensureEmdadNav() {
  if (!window.location.pathname.startsWith("/panel/emdad")) return;
  const sidebar = document.querySelector<HTMLElement>('.emdad-panel [data-name="colored-sidebar"]');
  if (!sidebar) return;

  let link = sidebar.querySelector<HTMLAnchorElement>('[data-name="fund-payments-nav"]');
  if (!link) {
    link = document.createElement("a");
    link.href = EMDAD_PAYMENTS_PATH;
    link.dataset.name = "fund-payments-nav";
    link.className = "moon-emdad-fund-payments-nav";
    const label = document.createElement("span");
    label.className = "moon-nav-label";
    label.textContent = "پرداخت‌های تأییدشده صندوق";
    const icon = document.createElement("span");
    icon.className = "moon-nav-icon";
    icon.textContent = "↗";
    link.append(label, icon);
    link.addEventListener("click", (event) => {
      event.preventDefault();
      navigate(EMDAD_PAYMENTS_PATH);
    });
    const releaseLink = sidebar.querySelector<HTMLElement>('[data-name="release-requests-nav"]');
    if (releaseLink) releaseLink.insertAdjacentElement("afterend", link);
    else sidebar.appendChild(link);
  }
  link.dataset.active = window.location.pathname === EMDAD_PAYMENTS_PATH ? "true" : "false";
}

function applyCurrentPage() {
  applyFundDetail();
  ensureEmdadNav();
}

function hasRelevantNode(node: Node) {
  if (!(node instanceof Element)) return false;
  return (
    node.matches('[data-name="fund-manager-investment-detail"], .emdad-panel') ||
    Boolean(node.querySelector('[data-name="fund-manager-investment-detail"], .emdad-panel'))
  );
}

applyCurrentPage();

if (document.body) {
  let scheduled = false;
  new MutationObserver((mutations) => {
    if (!mutations.some((mutation) => Array.from(mutation.addedNodes).some(hasRelevantNode))) return;
    if (scheduled) return;
    scheduled = true;
    requestAnimationFrame(() => {
      scheduled = false;
      applyCurrentPage();
    });
  }).observe(document.body, { childList: true, subtree: true });
}

window.addEventListener("popstate", () => requestAnimationFrame(applyCurrentPage));
window.addEventListener("moon:fund-project-payments-changed", () => requestAnimationFrame(applyCurrentPage));
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") closeDialog();
});