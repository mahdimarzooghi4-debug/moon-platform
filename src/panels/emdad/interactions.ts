import { clearSession } from "../../auth/oidc";

const EMDAD_ROOT = "/panel/emdad";
const DEV_PANEL_PREVIEW_KEY = "moon.auth.dev-panel-preview";
const SIDEBAR_SELECTOR = '.emdad-panel [data-name="colored-sidebar"]';

const NAV_ROUTES: Record<string, string> = {
  "dashboard-nav": EMDAD_ROOT,
  "release-requests-nav": `${EMDAD_ROOT}/release-requests`,
  "fund-payments-nav": `${EMDAD_ROOT}/fund-payments`,
  "article-172-approvals-nav": `${EMDAD_ROOT}/article172-approvals`,
  "fund-synergy-nav": `${EMDAD_ROOT}/fund-synergy`,
  "fund-synergy-history-nav": `${EMDAD_ROOT}/fund-synergy-history`,
  "payment-history-nav": `${EMDAD_ROOT}/payment-history`,
  "financial-reports-nav": `${EMDAD_ROOT}/financial-reports`,
  "fund-returns-nav": `${EMDAD_ROOT}/fund-returns`,
};

const LABEL_ROUTES = new Map<string, string>([
  ["داشبورد", EMDAD_ROOT],
  ["درخواست‌های آزادسازی", `${EMDAD_ROOT}/release-requests`],
  ["درخواست‌های آزادسازی وجه", `${EMDAD_ROOT}/release-requests`],
  ["پرداخت‌های تأییدشده صندوق", `${EMDAD_ROOT}/fund-payments`],
  ["پرداخت‌های تاییدشده صندوق", `${EMDAD_ROOT}/fund-payments`],
  ["تأیید گواهی ماده ۱۷۲", `${EMDAD_ROOT}/article172-approvals`],
  ["هم‌افزایی صندوق", `${EMDAD_ROOT}/fund-synergy`],
  ["سوابق هم‌افزایی صندوق", `${EMDAD_ROOT}/fund-synergy-history`],
  ["سوابق پرداخت", `${EMDAD_ROOT}/payment-history`],
  ["گزارش‌های مالی", `${EMDAD_ROOT}/financial-reports`],
  ["منابع برگشتی صندوق", `${EMDAD_ROOT}/fund-returns`],
]);

function normalize(value: string | null | undefined) {
  return (value ?? "").replace(/\s+/g, " ").trim();
}

function routeForNav(nav: HTMLElement) {
  const name = nav.dataset.name ?? "";
  if (NAV_ROUTES[name]) return NAV_ROUTES[name];
  return LABEL_ROUTES.get(normalize(nav.textContent)) ?? null;
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

    sidebar.querySelectorAll<HTMLElement>('[data-name$="-nav"]').forEach((nav) => {
      if (nav.dataset.name === "logout-nav") {
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

function activateNav(nav: HTMLElement, event?: Event) {
  if (nav.dataset.name === "logout-nav") {
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

document.addEventListener("click", (event) => {
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
  const nav = target.closest<HTMLElement>(`${SIDEBAR_SELECTOR} [data-name$="-nav"]`);
  if (!nav) return;
  activateNav(nav, event);
});

document.addEventListener("keydown", (event) => {
  if (event.key !== "Enter" && event.key !== " ") return;
  const target = event.target;
  if (!(target instanceof Element)) return;
  const nav = target.closest<HTMLElement>(`${SIDEBAR_SELECTOR} [data-name$="-nav"]`);
  if (!nav || nav instanceof HTMLAnchorElement) return;
  activateNav(nav, event);
});

window.addEventListener("popstate", () => requestAnimationFrame(() => decorateSidebar()));

const start = () => {
  decorateSidebar();

  if (!document.body) return;
  let scheduled = false;
  new MutationObserver((mutations) => {
    const sidebarAdded = mutations.some((mutation) =>
      Array.from(mutation.addedNodes).some((node) => {
        if (!(node instanceof Element)) return false;
        return (
          node.matches(".emdad-panel") ||
          node.matches('[data-name="colored-sidebar"]') ||
          Boolean(node.querySelector(".emdad-panel")) ||
          Boolean(node.querySelector('[data-name="colored-sidebar"]'))
        );
      }),
    );

    if (!sidebarAdded || scheduled) return;
    scheduled = true;
    requestAnimationFrame(() => {
      scheduled = false;
      decorateSidebar();
    });
  }).observe(document.body, { childList: true, subtree: true });
};

if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", start, { once: true });
else start();
