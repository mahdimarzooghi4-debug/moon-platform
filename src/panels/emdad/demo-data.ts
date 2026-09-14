import "./demo-data.css";

const FUND_REQUESTS_KEY = "mah.fundProjectPaymentRequests.v1";
const FUND_SYNERGY_PATH = "/panel/emdad/fund-synergy";
const FUND_SYNERGY_ROOT = '[data-name="emdad-fund-synergy"]';

type DemoFundPaymentRequest = {
  id: string;
  project: string;
  executor: string;
  stage: string;
  investmentAmount: number;
  requestedAmount: number;
  note: string;
  status: "approved" | "paid";
  createdAt: string;
  approvedAt: string;
  paidAt?: string;
  receipt?: string;
};

const demoFundPayments: DemoFundPaymentRequest[] = [
  {
    id: "demo-fund-payment-1",
    project: "توسعه زنجیره ارزش محصولات روستایی",
    executor: "تعاونی زنان آفتاب",
    stage: "توسعه بازار و فروش",
    investmentAmount: 650_000_000,
    requestedAmount: 180_000_000,
    note: "وجه صندوق به حساب امداد واریز شده و آماده پرداخت مرحله‌ای به پروژه است.",
    status: "approved",
    createdAt: "2026-09-11T08:30:00.000Z",
    approvedAt: "2026-09-12T09:15:00.000Z",
  },
  {
    id: "demo-fund-payment-2",
    project: "مهارت برای نوجوانان",
    executor: "مؤسسه مسیر فردا",
    stage: "اجرای دوره‌های مهارتی",
    investmentAmount: 420_000_000,
    requestedAmount: 120_000_000,
    note: "پرداخت از محل منابع صندوق و از طریق حساب امداد انجام شده است.",
    status: "paid",
    createdAt: "2026-09-07T07:45:00.000Z",
    approvedAt: "2026-09-08T10:20:00.000Z",
    paidAt: "2026-09-09T06:40:00.000Z",
    receipt: "FP-14050618-02",
  },
  {
    id: "demo-fund-payment-3",
    project: "اشتغال زنان روستایی",
    executor: "گروه توسعه کسب‌وکار گلستان",
    stage: "تأمین تجهیزات اولیه",
    investmentAmount: 780_000_000,
    requestedAmount: 210_000_000,
    note: "مبلغ تأییدشده صندوق در حساب امداد موجود و در انتظار پرداخت به مجری است.",
    status: "approved",
    createdAt: "2026-09-13T06:10:00.000Z",
    approvedAt: "2026-09-13T11:30:00.000Z",
  },
];

const demoSynergyRows = [
  {
    project: "سلامت خانواده",
    company: "پایدار پرداز خلاق آریا",
    payment: "۲۰۰ میلیون تومان",
    fundShare: "۲۰ میلیون تومان",
    status: "pending" as const,
  },
  {
    project: "اشتغال زنان روستایی",
    company: "شرکت توسعه کارآفرینی گلستان",
    payment: "۱۵۰ میلیون تومان",
    fundShare: "۱۵ میلیون تومان",
    status: "allocated" as const,
  },
  {
    project: "مهارت برای نوجوانان",
    company: "آینده‌سازان سپهر",
    payment: "۹۰ میلیون تومان",
    fundShare: "۹ میلیون تومان",
    status: "pending" as const,
  },
];

function normalize(value: string | null | undefined) {
  return (value ?? "").replace(/\s+/g, " ").trim();
}

function setText(node: Element | null | undefined, text: string) {
  if (!(node instanceof HTMLElement)) return;
  if (normalize(node.textContent) !== text) node.textContent = text;
}

function navigate(path: string) {
  if (window.location.pathname === path) return;
  window.history.pushState({}, "", path);
  window.dispatchEvent(new PopStateEvent("popstate"));
  window.scrollTo({ top: 0, left: 0, behavior: "auto" });
}

function seedFundPaymentData() {
  try {
    const raw = localStorage.getItem(FUND_REQUESTS_KEY);
    const parsed = raw ? JSON.parse(raw) : [];
    const current = Array.isArray(parsed) ? parsed : [];
    const hasEligible = current.some(
      (item) => item && typeof item === "object" && (item.status === "approved" || item.status === "paid"),
    );
    if (hasEligible) return;

    const knownIds = new Set(
      current
        .filter((item) => item && typeof item === "object" && typeof item.id === "string")
        .map((item) => item.id as string),
    );
    const additions = demoFundPayments.filter((item) => !knownIds.has(item.id));
    if (!additions.length) return;

    localStorage.setItem(FUND_REQUESTS_KEY, JSON.stringify([...additions, ...current]));
    window.dispatchEvent(new CustomEvent("moon:fund-project-payments-changed"));
  } catch {
    localStorage.setItem(FUND_REQUESTS_KEY, JSON.stringify(demoFundPayments));
  }
}

function makeCell(text: string, extraClass?: string) {
  const cell = document.createElement("div");
  cell.className = `emdad-demo-synergy-cell${extraClass ? ` ${extraClass}` : ""}`;
  cell.textContent = text;
  return cell;
}

function decorateFundSynergy() {
  if (window.location.pathname !== FUND_SYNERGY_PATH) return;
  const root = document.querySelector<HTMLElement>(FUND_SYNERGY_ROOT);
  if (!root) return;

  const summaryCards = root.querySelectorAll<HTMLElement>('[data-name="summary-card"]');
  const summaryValues = [
    ["پرداخت‌های مشمول", "۳", "پرداخت نقدی با منبع شرکت"],
    ["مبلغ منابع شرکت", "۴۴۰ میلیون تومان", "مبلغ نقدی ثبت‌شده"],
    ["سهم هم‌افزایی صندوق", "۴۴ میلیون تومان", "۱۰٪ منابع نقدی شرکت"],
  ];
  summaryCards.forEach((card, index) => {
    const paragraphs = card.querySelectorAll("p");
    const values = summaryValues[index];
    if (!values) return;
    setText(paragraphs.item(0), values[0]);
    setText(paragraphs.item(1), values[1]);
    setText(paragraphs.item(2), values[2]);
  });

  setText(root.querySelector('[data-name="count-pill"] p'), "۳ مورد");

  root
    .querySelectorAll<HTMLElement>(
      '[data-name="fund-synergy-row"], [data-name="table-note"], [data-name="pagination-footer"]',
    )
    .forEach((element) => {
      element.style.display = "none";
    });

  const table = root.querySelector<HTMLElement>('[data-name="fund-synergy-table"]');
  if (!table) return;
  table.querySelector<HTMLElement>('[data-emdad-demo-synergy="true"]')?.remove();

  const list = document.createElement("div");
  list.className = "emdad-demo-synergy-list";
  list.dataset.emdadDemoSynergy = "true";

  demoSynergyRows.forEach((item, index) => {
    const row = document.createElement("div");
    row.className = "emdad-demo-synergy-row";

    row.appendChild(makeCell(String(index + 1)));

    const project = document.createElement("div");
    project.className = "emdad-demo-synergy-cell emdad-demo-synergy-project";
    const projectName = document.createElement("span");
    projectName.textContent = item.project;
    const company = document.createElement("small");
    company.textContent = `${item.company} · منبع: شرکت`;
    project.append(projectName, company);
    row.appendChild(project);

    row.appendChild(makeCell(item.payment));
    row.appendChild(makeCell(item.fundShare));

    const statusCell = document.createElement("div");
    statusCell.className = "emdad-demo-synergy-cell";
    const status = document.createElement("span");
    status.className = "emdad-demo-synergy-status";
    status.dataset.status = item.status;
    status.textContent = item.status === "pending" ? "در انتظار تخصیص" : "تخصیص ثبت‌شده";
    statusCell.appendChild(status);
    row.appendChild(statusCell);

    const actionCell = document.createElement("div");
    actionCell.className = "emdad-demo-synergy-cell";
    const action = document.createElement("button");
    action.type = "button";
    action.className = "emdad-demo-synergy-action";
    action.dataset.kind = item.status === "allocated" ? "history" : "allocation";
    action.textContent = item.status === "allocated" ? "مشاهده سابقه" : "ثبت تخصیص";
    action.addEventListener("click", () =>
      navigate(
        item.status === "allocated"
          ? "/panel/emdad/fund-synergy/history"
          : "/panel/emdad/fund-synergy/allocation",
      ),
    );
    actionCell.appendChild(action);
    row.appendChild(actionCell);

    list.appendChild(row);
  });

  table.appendChild(list);
}

function apply() {
  seedFundPaymentData();
  decorateFundSynergy();
}

window.addEventListener("popstate", () => requestAnimationFrame(apply));
window.addEventListener("storage", () => requestAnimationFrame(apply));

const start = () => {
  apply();
  if (!document.body) return;

  let scheduled = false;
  new MutationObserver((mutations) => {
    const panelAdded = mutations.some((mutation) =>
      Array.from(mutation.addedNodes).some((node) => {
        if (!(node instanceof Element)) return false;
        return node.matches(FUND_SYNERGY_ROOT) || Boolean(node.querySelector(FUND_SYNERGY_ROOT));
      }),
    );
    if (!panelAdded || scheduled) return;
    scheduled = true;
    requestAnimationFrame(() => {
      scheduled = false;
      decorateFundSynergy();
    });
  }).observe(document.body, { childList: true, subtree: true });
};

if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", start, { once: true });
else start();
