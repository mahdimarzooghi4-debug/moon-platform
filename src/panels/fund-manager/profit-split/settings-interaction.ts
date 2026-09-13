const PANEL_PREFIX = "/panel/fund-manager";
const PROFIT_SPLIT_PATH = `${PANEL_PREFIX}/profit-split`;
const PROFIT_SPLIT_DETAIL_PATH = `${PANEL_PREFIX}/profit-split/detail`;
const SETTINGS_KEY = "mah.fundManager.profitSplit.settings.v1";
const HISTORY_KEY = "mah.fundManager.profitSplit.settingsHistory.v1";

type SplitSettings = {
  returnShare: number;
  incomeShare: number;
  updatedAt: string;
};

type SplitSettingsHistory = SplitSettings & {
  previousReturnShare: number;
  previousIncomeShare: number;
};

const DEFAULT_SETTINGS: SplitSettings = {
  returnShare: 70,
  incomeShare: 30,
  updatedAt: "",
};

function normalize(value: string | null | undefined) {
  return (value ?? "").replace(/\s+/g, " ").trim();
}

function isFundManagerPage() {
  return window.location.pathname.startsWith(PANEL_PREFIX);
}

function isValidShare(value: unknown): value is number {
  return typeof value === "number" && Number.isFinite(value) && value >= 0 && value <= 100;
}

function readSettings(): SplitSettings {
  try {
    const raw = localStorage.getItem(SETTINGS_KEY);
    if (!raw) return DEFAULT_SETTINGS;
    const parsed = JSON.parse(raw) as Partial<SplitSettings>;
    if (!isValidShare(parsed.returnShare) || !isValidShare(parsed.incomeShare)) return DEFAULT_SETTINGS;
    if (Math.abs(parsed.returnShare + parsed.incomeShare - 100) > 0.001) return DEFAULT_SETTINGS;
    return {
      returnShare: parsed.returnShare,
      incomeShare: parsed.incomeShare,
      updatedAt: typeof parsed.updatedAt === "string" ? parsed.updatedAt : "",
    };
  } catch {
    return DEFAULT_SETTINGS;
  }
}

function writeSettings(next: SplitSettings, previous: SplitSettings) {
  localStorage.setItem(SETTINGS_KEY, JSON.stringify(next));
  try {
    const raw = localStorage.getItem(HISTORY_KEY);
    const parsed = raw ? JSON.parse(raw) : [];
    const history = Array.isArray(parsed) ? parsed : [];
    const entry: SplitSettingsHistory = {
      ...next,
      previousReturnShare: previous.returnShare,
      previousIncomeShare: previous.incomeShare,
    };
    localStorage.setItem(HISTORY_KEY, JSON.stringify([entry, ...history].slice(0, 50)));
  } catch {
    // The active setting is already saved; audit history is best-effort in this frontend prototype.
  }
}

function faNumber(value: number) {
  return new Intl.NumberFormat("fa-IR", { maximumFractionDigits: 1 }).format(value);
}

function ratioLabel(settings: SplitSettings) {
  return `${faNumber(settings.returnShare)}/${faNumber(settings.incomeShare)}`;
}

function setText(node: Element | null | undefined, text: string) {
  if (!(node instanceof HTMLElement)) return;
  if (normalize(node.textContent) !== text) node.textContent = text;
}

function updateSidebarLabels() {
  document.querySelectorAll<HTMLElement>('[data-name="revenues-nav"] > p').forEach((label) => {
    setText(label, "تقسیم سود");
  });
}

function updateDashboard(settings: SplitSettings) {
  const root = document.querySelector<HTMLElement>('[data-name="fund-manager-main-dashboard"]');
  if (!root) return;

  const returnCard = root.querySelector<HTMLElement>('[data-name="Active Projects"]');
  const incomeCard = root.querySelector<HTMLElement>('[data-name="Raised Funds"]');
  if (returnCard) {
    const paragraphs = returnCard.querySelectorAll<HTMLElement>("p");
    setText(paragraphs.item(0), "سهم بازگشت سود");
    setText(paragraphs.item(2), `${faNumber(settings.returnShare)}٪`);
  }
  if (incomeCard) {
    const paragraphs = incomeCard.querySelectorAll<HTMLElement>("p");
    setText(paragraphs.item(0), "سهم درآمد ماه");
    setText(paragraphs.item(2), `${faNumber(settings.incomeShare)}٪`);
  }
}

function ensureSettingsButton(root: HTMLElement, settings: SplitSettings) {
  const header = root.querySelector<HTMLElement>('[data-name="header"]');
  if (!header) return;

  let button = header.querySelector<HTMLButtonElement>('[data-profit-split-settings-button="true"]');
  if (!button) {
    button = document.createElement("button");
    button.type = "button";
    button.dataset.profitSplitSettingsButton = "true";
    button.className = "fund-profit-split-settings-button";
    button.addEventListener("click", (event) => {
      event.preventDefault();
      event.stopPropagation();
      openSettingsDialog();
    });
    header.appendChild(button);
  }
  setText(button, `تنظیم نسبت · ${ratioLabel(settings)}`);
}

function updateProfitSplitPage(settings: SplitSettings) {
  const root = document.querySelector<HTMLElement>('[data-name="fund-manager-profit-split"]');
  if (!root) return;

  const headerParagraphs = root.querySelectorAll<HTMLElement>('[data-name="header"] > p');
  setText(headerParagraphs.item(0), "تقسیم سود صندوق");
  setText(
    headerParagraphs.item(1),
    `نسبت فعال ${ratioLabel(settings)} است و برای دوره‌های بعدی قابل تغییر است؛ دوره‌های نهایی‌شده دست‌نخورده می‌مانند.`,
  );

  const cards = root.querySelectorAll<HTMLElement>('[data-name="resources-kpi-row"] [data-name="kpi-card"]');
  setText(cards.item(2)?.querySelector("p"), "بازگشت ثبت‌شده");
  setText(cards.item(3)?.querySelector("p"), "درآمد ثبت‌شده");

  const tableHeaders = root.querySelectorAll<HTMLElement>('[data-name="table-header"] > p');
  setText(tableHeaders.item(2), "سهم بازگشت");
  setText(tableHeaders.item(3), "سهم درآمد");

  ensureSettingsButton(root, settings);
}

function updateProfitSplitDetail() {
  const root = document.querySelector<HTMLElement>('[data-name="fund-manager-profit-split-detail"]');
  if (!root) return;

  const header = root.querySelector<HTMLElement>('[data-name="header"]');
  const title = header?.querySelector<HTMLElement>(":scope > p");
  const back = header?.querySelector<HTMLElement>('[data-name="action"] p');
  setText(title, "جزئیات تقسیم سود");
  setText(back, "بازگشت به تقسیم سود");
}

function applyProfitSplitSettings() {
  if (!isFundManagerPage()) return;
  const settings = readSettings();
  updateSidebarLabels();
  updateDashboard(settings);
  if (window.location.pathname === PROFIT_SPLIT_PATH) updateProfitSplitPage(settings);
  if (window.location.pathname === PROFIT_SPLIT_DETAIL_PATH) updateProfitSplitDetail();
}

function clampShare(value: number) {
  return Math.min(100, Math.max(0, Math.round(value * 10) / 10));
}

function closeSettingsDialog() {
  document.querySelector<HTMLElement>('[data-profit-split-dialog="true"]')?.remove();
}

function openSettingsDialog() {
  closeSettingsDialog();
  const current = readSettings();

  const overlay = document.createElement("div");
  overlay.dataset.profitSplitDialog = "true";
  overlay.className = "fund-profit-split-dialog-backdrop";
  overlay.setAttribute("dir", "rtl");

  const dialog = document.createElement("div");
  dialog.className = "fund-profit-split-dialog";
  dialog.setAttribute("role", "dialog");
  dialog.setAttribute("aria-modal", "true");
  dialog.setAttribute("aria-label", "تنظیم نسبت تقسیم سود");

  const title = document.createElement("h2");
  title.textContent = "تنظیم نسبت تقسیم سود";

  const description = document.createElement("p");
  description.className = "fund-profit-split-dialog-description";
  description.textContent = "این نسبت برای تقسیم‌های بعدی استفاده می‌شود. دوره‌های نهایی‌شده با نسبت ثبت‌شده خودشان باقی می‌مانند.";

  const fields = document.createElement("div");
  fields.className = "fund-profit-split-fields";

  const returnField = document.createElement("label");
  returnField.className = "fund-profit-split-field";
  const returnLabel = document.createElement("span");
  returnLabel.textContent = "بازگشت به چرخه";
  const returnInput = document.createElement("input");
  returnInput.type = "number";
  returnInput.min = "0";
  returnInput.max = "100";
  returnInput.step = "0.1";
  returnInput.value = String(current.returnShare);
  returnInput.setAttribute("aria-label", "درصد بازگشت به چرخه");
  const returnSuffix = document.createElement("span");
  returnSuffix.textContent = "٪";
  returnSuffix.className = "fund-profit-split-suffix";
  const returnInputWrap = document.createElement("div");
  returnInputWrap.className = "fund-profit-split-input-wrap";
  returnInputWrap.append(returnInput, returnSuffix);
  returnField.append(returnLabel, returnInputWrap);

  const incomeField = document.createElement("label");
  incomeField.className = "fund-profit-split-field";
  const incomeLabel = document.createElement("span");
  incomeLabel.textContent = "درآمد ماه";
  const incomeInput = document.createElement("input");
  incomeInput.type = "number";
  incomeInput.min = "0";
  incomeInput.max = "100";
  incomeInput.step = "0.1";
  incomeInput.value = String(current.incomeShare);
  incomeInput.setAttribute("aria-label", "درصد درآمد ماه");
  const incomeSuffix = document.createElement("span");
  incomeSuffix.textContent = "٪";
  incomeSuffix.className = "fund-profit-split-suffix";
  const incomeInputWrap = document.createElement("div");
  incomeInputWrap.className = "fund-profit-split-input-wrap";
  incomeInputWrap.append(incomeInput, incomeSuffix);
  incomeField.append(incomeLabel, incomeInputWrap);

  fields.append(returnField, incomeField);

  const total = document.createElement("div");
  total.className = "fund-profit-split-total";
  const updateTotal = () => {
    const sum = Number(returnInput.value) + Number(incomeInput.value);
    const valid = Number.isFinite(sum) && Math.abs(sum - 100) < 0.001;
    total.textContent = valid ? "مجموع: ۱۰۰٪" : `مجموع باید ۱۰۰٪ باشد (فعلاً ${faNumber(sum)}٪)`;
    total.dataset.valid = valid ? "true" : "false";
  };

  returnInput.addEventListener("input", () => {
    const value = Number(returnInput.value);
    if (Number.isFinite(value)) incomeInput.value = String(clampShare(100 - clampShare(value)));
    updateTotal();
  });

  incomeInput.addEventListener("input", () => {
    const value = Number(incomeInput.value);
    if (Number.isFinite(value)) returnInput.value = String(clampShare(100 - clampShare(value)));
    updateTotal();
  });

  const actions = document.createElement("div");
  actions.className = "fund-profit-split-dialog-actions";

  const cancel = document.createElement("button");
  cancel.type = "button";
  cancel.className = "fund-profit-split-cancel";
  cancel.textContent = "انصراف";
  cancel.addEventListener("click", closeSettingsDialog);

  const save = document.createElement("button");
  save.type = "button";
  save.className = "fund-profit-split-save";
  save.textContent = "ذخیره نسبت";
  save.addEventListener("click", () => {
    const returnShare = clampShare(Number(returnInput.value));
    const incomeShare = clampShare(Number(incomeInput.value));
    if (!isValidShare(returnShare) || !isValidShare(incomeShare) || Math.abs(returnShare + incomeShare - 100) > 0.001) {
      total.textContent = "مجموع دو سهم باید دقیقاً ۱۰۰٪ باشد.";
      total.dataset.valid = "false";
      return;
    }

    const previous = readSettings();
    const next: SplitSettings = {
      returnShare,
      incomeShare,
      updatedAt: new Date().toISOString(),
    };
    writeSettings(next, previous);
    closeSettingsDialog();
    applyProfitSplitSettings();
  });

  actions.append(cancel, save);
  dialog.append(title, description, fields, total, actions);
  overlay.appendChild(dialog);
  overlay.addEventListener("click", (event) => {
    if (event.target === overlay) closeSettingsDialog();
  });
  document.body.appendChild(overlay);
  updateTotal();
  returnInput.focus();
}

applyProfitSplitSettings();

if (document.body) {
  let scheduled = false;
  new MutationObserver((mutations) => {
    if (!isFundManagerPage()) return;
    if (!mutations.some((mutation) => mutation.addedNodes.length > 0)) return;
    if (scheduled) return;
    scheduled = true;
    requestAnimationFrame(() => {
      scheduled = false;
      applyProfitSplitSettings();
    });
  }).observe(document.body, { childList: true, subtree: true });
}

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") closeSettingsDialog();
});
