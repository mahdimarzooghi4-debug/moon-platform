const PANEL_PREFIX = "/panel/fund-manager";
const SETTINGS_KEY = "mah.fundManager.profitSplit.settings.v1";

type SplitSettings = {
  returnShare: number;
  incomeShare: number;
};

const DEFAULT_SETTINGS: SplitSettings = {
  returnShare: 70,
  incomeShare: 30,
};

function readSettings(): SplitSettings {
  try {
    const raw = localStorage.getItem(SETTINGS_KEY);
    if (!raw) return DEFAULT_SETTINGS;
    const parsed = JSON.parse(raw) as Partial<SplitSettings>;
    const returnShare = Number(parsed.returnShare);
    const incomeShare = Number(parsed.incomeShare);
    if (!Number.isFinite(returnShare) || !Number.isFinite(incomeShare)) return DEFAULT_SETTINGS;
    if (Math.abs(returnShare + incomeShare - 100) > 0.001) return DEFAULT_SETTINGS;
    return { returnShare, incomeShare };
  } catch {
    return DEFAULT_SETTINGS;
  }
}

function normalize(value: string | null | undefined) {
  return (value ?? "").replace(/\s+/g, " ").trim();
}

function setText(node: Element | null | undefined, text: string) {
  if (!(node instanceof HTMLElement)) return;
  if (normalize(node.textContent) !== text) node.textContent = text;
}

function faNumber(value: number) {
  return new Intl.NumberFormat("fa-IR", { maximumFractionDigits: 1 }).format(value);
}

function updateProfitCycleCopy(root: HTMLElement) {
  const cycle = root.querySelector<HTMLElement>('[data-name="active-funding-projects"]');
  if (!cycle) return;

  const directParagraphs = cycle.querySelectorAll<HTMLElement>(":scope > p");
  setText(directParagraphs.item(0), "سود و بازگشت به منابع صندوق");
  setText(
    directParagraphs.item(1),
    "سود هر دوره بر اساس نسبت ثبت‌شده همان دوره بین منابع صندوق و درآمد ماه تقسیم می‌شود.",
  );

  setText(cycle.querySelector<HTMLElement>('[data-name="active-projects-count"] p'), "نسبت هر دوره");

  const headers = cycle.querySelectorAll<HTMLElement>('[data-name="eligible-header"] > p');
  setText(headers.item(2), "بازگشت به منابع صندوق");
  setText(headers.item(3), "درآمد ماه");
}

function applyDashboardRatio() {
  if (!window.location.pathname.startsWith(PANEL_PREFIX)) return;
  const root = document.querySelector<HTMLElement>('[data-name="fund-manager-main-dashboard"]');
  if (!root) return;

  const settings = readSettings();
  const returnCard = root.querySelector<HTMLElement>('[data-name="Active Projects"]');
  const incomeCard = root.querySelector<HTMLElement>('[data-name="Raised Funds"]');

  if (returnCard) {
    const paragraphs = returnCard.querySelectorAll<HTMLElement>("p");
    setText(paragraphs.item(0), "بازگشت به منابع صندوق");
    setText(paragraphs.item(2), `${faNumber(settings.returnShare)}٪`);
  }

  if (incomeCard) {
    const paragraphs = incomeCard.querySelectorAll<HTMLElement>("p");
    setText(paragraphs.item(0), "سهم درآمد ماه");
    setText(paragraphs.item(2), `${faNumber(settings.incomeShare)}٪`);
  }

  updateProfitCycleCopy(root);
}

applyDashboardRatio();

if (document.body) {
  let scheduled = false;
  new MutationObserver((mutations) => {
    const dashboardAdded = mutations.some((mutation) =>
      Array.from(mutation.addedNodes).some((node) => {
        if (!(node instanceof Element)) return false;
        return node.matches('[data-name="fund-manager-main-dashboard"]') || Boolean(node.querySelector('[data-name="fund-manager-main-dashboard"]'));
      }),
    );
    if (!dashboardAdded || scheduled) return;
    scheduled = true;
    requestAnimationFrame(() => {
      scheduled = false;
      applyDashboardRatio();
    });
  }).observe(document.body, { childList: true, subtree: true });
}

window.addEventListener("popstate", () => requestAnimationFrame(applyDashboardRatio));
window.addEventListener("storage", () => requestAnimationFrame(applyDashboardRatio));
window.addEventListener("moon:profit-split-settings-changed", () => requestAnimationFrame(applyDashboardRatio));
