import { clearSession } from "../../auth/oidc";

const EMDAD_ROOT = "/panel/emdad";
const DEV_PANEL_PREVIEW_KEY = "moon.auth.dev-panel-preview";
const RELEASE_REQUESTS_KEY = "mah.creativeHouse.releaseRequests.v1";
const RELEASE_SELECTED_KEY = "mah.creativeHouse.releaseRequests.selected.v1";
const SIDEBAR_SELECTOR = '.emdad-panel [data-name="colored-sidebar"]';
const NAV_ITEM_SELECTOR = '[data-name$="-nav"], a, button';
const DASHBOARD_SELECTOR = '[data-name="emdad-main-dashboard"]';
const DASHBOARD_ACTION_SELECTOR = [
  '[data-name="action-button"]',
  '[data-name="detail-button"]',
  '[data-name="view-all-fund-synergy"]',
  '[data-name="fund-synergy-kpi"] [data-name="kpi-top"]',
].join(", ");

type StoredReleaseRequest = {
  id: string;
  project: string;
  amount: number;
  status?: string;
};

const NAV_ROUTES: Record<string, string> = {
  "dashboard-nav": EMDAD_ROOT,
  "release-requests-nav": `${EMDAD_ROOT}/release-requests`,
  "fund-payments-nav": `${EMDAD_ROOT}/fund-payments`,
  "article-172-approvals-nav": `${EMDAD_ROOT}/article172-approvals`,
  "fund-synergy-nav": `${EMDAD_ROOT}/fund-synergy`,
  "fund-synergy-history-nav": `${EMDAD_ROOT}/fund-synergy/history`,
  "payment-history-nav": `${EMDAD_ROOT}/payment-history`,
  "financial-reports-nav": `${EMDAD_ROOT}/financial-reports`,
  "fund-returns-nav": `${EMDAD_ROOT}/fund-returns`,
};

const LABEL_ROUTES = new Map<string, string>([
  ["داشبورد", EMDAD_ROOT],
  ["درخواست‌های آزادسازی", `${EMDAD_ROOT}/release-requests`],
  ["آزادسازی وجه", `${EMDAD_ROOT}/release-requests`],
  ["درخواست‌های آزادسازی وجه", `${EMDAD_ROOT}/release-requests`],
  ["پرداخت‌های تأییدشده صندوق", `${EMDAD_ROOT}/fund-payments`],
  ["پرداخت‌های تاییدشده صندوق", `${EMDAD_ROOT}/fund-payments`],
  ["پرداخت از محل صندوق", `${EMDAD_ROOT}/fund-payments`],
  ["تأیید گواهی ماده ۱۷۲", `${EMDAD_ROOT}/article172-approvals`],
  ["گواهی ماده ۱۷۲", `${EMDAD_ROOT}/article172-approvals`],
  ["هم‌افزایی صندوق", `${EMDAD_ROOT}/fund-synergy`],
  ["سوابق هم‌افزایی صندوق", `${EMDAD_ROOT}/fund-synergy/history`],
  ["سوابق پرداخت", `${EMDAD_ROOT}/payment-history`],
  ["گزارش‌های مالی", `${EMDAD_ROOT}/financial-reports`],
  ["منابع برگشتی صندوق", `${EMDAD_ROOT}/fund-returns`],
  ["بازگشت‌های صندوق", `${EMDAD_ROOT}/fund-returns`],
]);

const DASHBOARD_ACTION_ROUTES = new Map<string, string>([
  ["مشاهده همه درخواست‌های آزادسازی", `${EMDAD_ROOT}/release-requests`],
  ["بررسی درخواست", `${EMDAD_ROOT}/release-requests/detail`],
  ["مشاهده همه درخواست‌های ماده ۱۷۲", `${EMDAD_ROOT}/article172-approvals`],
  ["بررسی پرونده", `${EMDAD_ROOT}/article172-approvals/detail`],
  ["ثبت تخصیص", `${EMDAD_ROOT}/fund-synergy/allocation`],
  ["مشاهده همه هم‌افزایی‌ها", `${EMDAD_ROOT}/fund-synergy`],
  ["هم‌افزایی صندوق", `${EMDAD_ROOT}/fund-synergy`],
]);

function normalize(value: string | null | undefined) {
  return (value ?? "").replace(/\s+/g, " ").trim();
}

function setText(node: Element | null | undefined, text: string) {
  if (!(node instanceof HTMLElement)) return;
  if (normalize(node.textContent) !== text) node.textContent = text;
}

function readReleaseRequests(): StoredReleaseRequest[] {
  try {
    const raw = localStorage.getItem(RELEASE_REQUESTS_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    if (!Array.isArray(parsed)) return [];
    return parsed.filter(
      (item): item is StoredReleaseRequest =>
        Boolean(
          item &&
            typeof item.id === "string" &&
            typeof item.project === "string" &&
            typeof item.amount === "number" &&
            Number.isFinite(item.amount),
        ),
    );
  } catch {
    return [];
  }
}

function formatAmount(value: number) {
  return `${new Intl.NumberFormat("fa-IR", { maximumFractionDigits: 0 }).format(value)} تومان`;
}

function amountForProject(project: string, requests: StoredReleaseRequest[]) {
  const match = requests.find((request) => normalize(request.project) === normalize(project));
  return match && match.amount > 0 ? formatAmount(match.amount) : "مطابق مصوبه مرحله";
}

function selectedReleaseAmount(requests: StoredReleaseRequest[]) {
  const selectedId = localStorage.getItem(RELEASE_SELECTED_KEY);
  const selected = selectedId ? requests.find((request) => request.id === selectedId) : null;
  return selected && selected.amount > 0 ? formatAmount(selected.amount) : "مطابق مصوبه مرحله";
}

function routeForNav(nav: HTMLElement) {
  const name = nav.dataset.name ?? "";
  if (NAV_ROUTES[name]) return NAV_ROUTES[name];
  return LABEL_ROUTES.get(normalize(nav.textContent)) ?? null;
}

function routeForDashboardAction(action: HTMLElement) {
  return DASHBOARD_ACTION_ROUTES.get(normalize(action.textContent)) ?? null;
}

function isActiveRoute(pathname: string, route: string) {
  if (route === EMDAD_ROOT) return pathname === EMDAD_ROOT || pathname === `${EMDAD_ROOT}/`;
  return pathname === route || pathname.startsWith(`${route}/`);
}

function navigate(route: string) {
  if (window.location.pathname === route) return;
  window.history.pushState({}, "", route);
  window.dispatchEvent(new PopStateEvent("popstate"));
  window.scrollTo({ top: 0, left: 0, behavior: "auto" });
}

function decorateSidebar(root: ParentNode = document) {
  if (!window.location.pathname.startsWith(EMDAD_ROOT)) return;

  root.querySelectorAll<HTMLElement>(SIDEBAR_SELECTOR).forEach((sidebar) => {
    sidebar.setAttribute("dir", "rtl");

    sidebar.querySelectorAll<HTMLElement>(NAV_ITEM_SELECTOR).forEach((nav) => {
      if (nav.dataset.name === "logout-nav" || normalize(nav.textContent) === "خروج از سیستم") {
        nav.setAttribute("aria-label", "خروج از سیستم");
        nav.style.cursor = "pointer";
        return;
      }

      const route = routeForNav(nav);
      if (!route) return;

      if (nav instanceof HTMLAnchorElement) nav.href = route;
      else {
        nav.setAttribute("role", "link");
        nav.tabIndex = 0;
      }

      const active = isActiveRoute(window.location.pathname, route);
      nav.dataset.active = active ? "true" : "false";
      nav.style.cursor = "pointer";
      nav.style.backgroundColor = active ? "#2094e3" : "transparent";

      if (active) nav.setAttribute("aria-current", "page");
      else nav.removeAttribute("aria-current");
    });
  });
}

function decorateDashboard(root: ParentNode = document) {
  if (window.location.pathname !== EMDAD_ROOT && window.location.pathname !== `${EMDAD_ROOT}/`) return;

  root.querySelectorAll<HTMLElement>(`${DASHBOARD_SELECTOR} ${DASHBOARD_ACTION_SELECTOR}`).forEach((action) => {
    const route = routeForDashboardAction(action);
    if (!route) return;

    action.style.cursor = "pointer";
    action.setAttribute("aria-label", normalize(action.textContent));

    if (action instanceof HTMLAnchorElement) {
      action.href = route;
    } else {
      action.setAttribute("role", "link");
      action.tabIndex = 0;
    }
  });
}

function replacePercentWithAmount(row: HTMLElement, amount: string) {
  const paragraphs = Array.from(row.querySelectorAll<HTMLElement>("p"));
  const percent = paragraphs.find((paragraph) => /[۰-۹٠-٩0-9]+\s*٪/.test(normalize(paragraph.textContent)));
  setText(percent, amount);
}

function projectNameFromRow(row: HTMLElement, requests: StoredReleaseRequest[]) {
  const texts = Array.from(row.querySelectorAll<HTMLElement>("p")).map((paragraph) => normalize(paragraph.textContent));
  return requests.find((request) => texts.some((text) => text === normalize(request.project)))?.project ?? "";
}

function decorateReleaseAmounts(root: ParentNode = document) {
  if (!window.location.pathname.startsWith(EMDAD_ROOT)) return;
  const requests = readReleaseRequests();

  const dashboardRelease = root.querySelector<HTMLElement>(
    `${DASHBOARD_SELECTOR} [data-name="dashboard-release-requests"]`,
  );
  if (dashboardRelease) {
    const headerParagraphs = Array.from(
      dashboardRelease.querySelectorAll<HTMLElement>('[data-name="table-header"] p'),
    );
    setText(headerParagraphs.find((paragraph) => normalize(paragraph.textContent) === "سهم مرحله"), "مبلغ آزادسازی");

    dashboardRelease.querySelectorAll<HTMLElement>('[data-name="release-request-row"]').forEach((row) => {
      const project = projectNameFromRow(row, requests);
      replacePercentWithAmount(row, project ? amountForProject(project, requests) : "مطابق مصوبه مرحله");
    });
  }

  const releaseQueue = root.querySelector<HTMLElement>('[data-name="emdad-release-requests"]');
  if (releaseQueue) {
    const headerParagraphs = Array.from(releaseQueue.querySelectorAll<HTMLElement>('[data-name="table-header"] p'));
    setText(headerParagraphs.find((paragraph) => normalize(paragraph.textContent) === "سهم مرحله"), "مبلغ آزادسازی");

    releaseQueue.querySelectorAll<HTMLElement>('[data-name="request-row"]').forEach((row) => {
      const project = projectNameFromRow(row, requests);
      replacePercentWithAmount(row, project ? amountForProject(project, requests) : "مطابق مصوبه مرحله");
    });
  }

  const detail = root.querySelector<HTMLElement>('[data-name="emdad-release-request-detail"]');
  if (detail) {
    const amount = selectedReleaseAmount(requests);
    const summaryParagraphs = Array.from(
      detail.querySelectorAll<HTMLElement>('[data-name="request-summary"] p'),
    );
    const shareLabelIndex = summaryParagraphs.findIndex((paragraph) => normalize(paragraph.textContent) === "سهم مرحله");
    if (shareLabelIndex >= 0) {
      setText(summaryParagraphs[shareLabelIndex], "مبلغ آزادسازی");
      setText(summaryParagraphs[shareLabelIndex + 1], amount);
    }

    detail.querySelectorAll<HTMLElement>('[data-name="info-row"]').forEach((row) => {
      const paragraphs = row.querySelectorAll<HTMLElement>("p");
      if (normalize(paragraphs.item(0)?.textContent) !== "سهم این مرحله") return;
      setText(paragraphs.item(0), "مبلغ آزادسازی");
      setText(paragraphs.item(1), amount);
    });
  }
}

function activateNav(nav: HTMLElement, event?: Event) {
  if (nav.dataset.name === "logout-nav" || normalize(nav.textContent) === "خروج از سیستم") {
    event?.preventDefault();
    clearSession();
    sessionStorage.removeItem(DEV_PANEL_PREVIEW_KEY);
    window.location.assign("/auth");
    return true;
  }

  const route = routeForNav(nav);
  if (!route) return false;
  event?.preventDefault();
  navigate(route);
  return true;
}

function activateDashboardAction(action: HTMLElement, event?: Event) {
  const route = routeForDashboardAction(action);
  if (!route) return false;
  event?.preventDefault();
  navigate(route);
  return true;
}

function findSidebarNav(target: Element) {
  const nav = target.closest<HTMLElement>(NAV_ITEM_SELECTOR);
  if (!nav) return null;
  return nav.closest(SIDEBAR_SELECTOR) ? nav : null;
}

function findDashboardAction(target: Element) {
  const action = target.closest<HTMLElement>(DASHBOARD_ACTION_SELECTOR);
  if (!action) return null;
  return action.closest(DASHBOARD_SELECTOR) ? action : null;
}

document.addEventListener(
  "click",
  (event) => {
    if (
      event.defaultPrevented ||
      event.button !== 0 ||
      event.metaKey ||
      event.ctrlKey ||
      event.shiftKey ||
      event.altKey
    ) {
      return;
    }

    const target = event.target;
    if (!(target instanceof Element)) return;

    const nav = findSidebarNav(target);
    if (nav) {
      if (activateNav(nav, event)) event.stopPropagation();
      return;
    }

    const dashboardAction = findDashboardAction(target);
    if (dashboardAction && activateDashboardAction(dashboardAction, event)) event.stopPropagation();
  },
  true,
);

document.addEventListener(
  "keydown",
  (event) => {
    if (event.key !== "Enter" && event.key !== " ") return;
    const target = event.target;
    if (!(target instanceof Element)) return;

    const nav = findSidebarNav(target);
    if (nav && !(nav instanceof HTMLAnchorElement)) {
      if (activateNav(nav, event)) event.stopPropagation();
      return;
    }

    const dashboardAction = findDashboardAction(target);
    if (dashboardAction && !(dashboardAction instanceof HTMLAnchorElement)) {
      if (activateDashboardAction(dashboardAction, event)) event.stopPropagation();
    }
  },
  true,
);

window.addEventListener("popstate", () =>
  requestAnimationFrame(() => {
    decorateSidebar();
    decorateDashboard();
    decorateReleaseAmounts();
  }),
);

window.addEventListener("moon:creative-house-release-requests-changed", () =>
  requestAnimationFrame(() => decorateReleaseAmounts()),
);

const start = () => {
  decorateSidebar();
  decorateDashboard();
  decorateReleaseAmounts();

  if (!document.body) return;
  let scheduled = false;
  new MutationObserver((mutations) => {
    const relevantNodeAdded = mutations.some((mutation) =>
      Array.from(mutation.addedNodes).some((node) => {
        if (!(node instanceof Element)) return false;
        return (
          node.matches(".emdad-panel") ||
          node.matches('[data-name="colored-sidebar"]') ||
          node.matches(DASHBOARD_SELECTOR) ||
          Boolean(node.querySelector(".emdad-panel")) ||
          Boolean(node.querySelector('[data-name="colored-sidebar"]')) ||
          Boolean(node.querySelector(DASHBOARD_SELECTOR))
        );
      }),
    );

    if (!relevantNodeAdded || scheduled) return;
    scheduled = true;
    requestAnimationFrame(() => {
      scheduled = false;
      decorateSidebar();
      decorateDashboard();
      decorateReleaseAmounts();
    });
  }).observe(document.body, { childList: true, subtree: true });
};

if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", start, { once: true });
else start();
