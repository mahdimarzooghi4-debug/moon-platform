const FUND_MANAGER_HISTORY_PATH = "/panel/fund-manager/financial-history";
const HISTORY_KEY = "mah.fundManager.financialHistory.dynamic.v1";

type HistoryEvent = {
  id: string;
  flowId: string;
  title: string;
  project: string;
  source: string;
  amount: string;
  reference: string;
  date: string;
  type: string;
  finalizedAt: string;
};

function readEvents(): HistoryEvent[] {
  try {
    const raw = localStorage.getItem(HISTORY_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

function syncFinancialHistory() {
  if (window.location.pathname !== FUND_MANAGER_HISTORY_PATH) return;
  const root = document.querySelector<HTMLElement>('[data-name="fund-manager-financial-history"]');
  if (!root) return;

  const main = root.querySelector<HTMLElement>('[data-name="Main Content"]');
  const table = root.querySelector<HTMLElement>('[data-name="resources-table"]');
  if (!main || !table) return;

  const events = readEvents();
  const existing = main.querySelector<HTMLElement>('[data-fund-history-dynamic="true"]');
  if (!events.length) {
    existing?.remove();
    return;
  }

  const latest = events.slice(0, 3);
  const signature = latest.map((event) => event.id).join("|");
  if (existing?.dataset.signature === signature) return;
  existing?.remove();

  const panel = document.createElement("div");
  panel.dataset.fundHistoryDynamic = "true";
  panel.dataset.signature = signature;
  panel.setAttribute("dir", "rtl");
  panel.style.cssText = [
    "width:1160px",
    "min-height:48px",
    "border:1px solid #bfe8d0",
    "border-radius:12px",
    "background:#f2fbf6",
    "padding:9px 14px",
    "display:flex",
    "align-items:center",
    "justify-content:space-between",
    "gap:16px",
    "color:#17324d",
    "font-family:Vazirmatn,sans-serif",
  ].join(";");

  const title = document.createElement("div");
  title.style.cssText = "font-size:11px;font-weight:700;white-space:nowrap;color:#149e57";
  title.textContent = "ثبت‌های نهایی جدید";

  const items = document.createElement("div");
  items.style.cssText = "display:flex;align-items:center;justify-content:flex-end;gap:10px;flex:1;overflow:hidden";
  latest.forEach((event) => {
    const chip = document.createElement("div");
    chip.style.cssText = "font-size:9px;border:1px solid #d7eee1;border-radius:8px;background:#fff;padding:6px 9px;white-space:nowrap;color:#60758a";
    chip.textContent = `${event.project} · ${event.amount} · ${event.reference}`;
    items.appendChild(chip);
  });

  panel.append(title, items);
  main.insertBefore(panel, table);
}

syncFinancialHistory();

if (document.body) {
  new MutationObserver((mutations) => {
    if (window.location.pathname !== FUND_MANAGER_HISTORY_PATH) return;
    if (!mutations.some((mutation) => mutation.addedNodes.length > 0)) return;
    syncFinancialHistory();
  }).observe(document.body, { childList: true, subtree: true });
}
