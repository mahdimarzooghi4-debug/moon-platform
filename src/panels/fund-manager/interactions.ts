import { clearSession } from "../../auth/oidc";

const PANEL_PREFIX = "/panel/fund-manager";

const navRoutes: Record<string, string> = {
  "dashboard-nav": PANEL_PREFIX,
  "startup-evaluations-nav": `${PANEL_PREFIX}/resources`,
  "project-evaluations-nav": `${PANEL_PREFIX}/investments`,
  "milestone-evaluations-nav": `${PANEL_PREFIX}/profit-returns`,
  "reports-nav": `${PANEL_PREFIX}/cycle-returns`,
  "revenues-nav": `${PANEL_PREFIX}/profit-split`,
  "evaluation-history-nav": `${PANEL_PREFIX}/reports`,
  "settings-nav": `${PANEL_PREFIX}/financial-history`,
};

const detailRoutes: Record<string, string> = {
  [`${PANEL_PREFIX}/resources`]: `${PANEL_PREFIX}/resources/detail`,
  [`${PANEL_PREFIX}/investments`]: `${PANEL_PREFIX}/investments/detail`,
  [`${PANEL_PREFIX}/profit-returns`]: `${PANEL_PREFIX}/profit-returns/detail`,
  [`${PANEL_PREFIX}/cycle-returns`]: `${PANEL_PREFIX}/cycle-returns/detail`,
  [`${PANEL_PREFIX}/profit-split`]: `${PANEL_PREFIX}/profit-split/detail`,
  [`${PANEL_PREFIX}/reports`]: `${PANEL_PREFIX}/reports/detail`,
  [`${PANEL_PREFIX}/financial-history`]: `${PANEL_PREFIX}/financial-history/detail`,
};

const navSelector = Object.keys(navRoutes)
  .map((name) => `[data-name="${name}"]`)
  .join(",");

function isFundManagerPage() {
  return window.location.pathname.startsWith(PANEL_PREFIX);
}

function navigatePanel(route: string) {
  if (window.location.pathname === route) return;
  window.history.pushState({}, "", route);
  window.dispatchEvent(new PopStateEvent("popstate"));
  window.scrollTo({ top: 0, left: 0, behavior: "auto" });
}

function preloadPanelRoutes() {
  if (!isFundManagerPage()) return;
  void Promise.allSettled([
    import("./resources"),
    import("./resource-detail"),
    import("./investments"),
    import("./investment-detail"),
    import("./profit-returns"),
    import("./profit-return-detail"),
    import("./cycle-returns"),
    import("./cycle-return-detail"),
    import("./profit-split"),
    import("./profit-split-detail"),
    import("./reports"),
  ]);
}

function applyDestinations(root: ParentNode = document) {
  if (!isFundManagerPage()) return;

  Object.entries(navRoutes).forEach(([name, route]) => {
    root.querySelectorAll<HTMLElement>(`[data-name="${name}"]`).forEach((element) => {
      if (element instanceof HTMLAnchorElement && element.getAttribute("href") !== route) {
        element.setAttribute("href", route);
      }
      element.style.cursor = "pointer";
      if (!(element instanceof HTMLAnchorElement)) {
        element.setAttribute("role", "link");
        element.tabIndex = 0;
      }
    });
  });

  const fallbackDetail = detailRoutes[window.location.pathname];
  if (fallbackDetail) {
    root.querySelectorAll<HTMLAnchorElement>('a[data-name="action"]').forEach((anchor) => {
      if (!anchor.getAttribute("href")) anchor.setAttribute("href", fallbackDetail);
    });
  }
}

preloadPanelRoutes();
applyDestinations();

if (document.body) {
  new MutationObserver((mutations) => {
    if (!mutations.some((mutation) => mutation.addedNodes.length > 0)) return;
    applyDestinations();
  }).observe(document.body, { childList: true, subtree: true });
}

document.addEventListener("click", (event) => {
  if (!isFundManagerPage()) return;
  if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || event.button !== 0) return;

  const target = event.target;
  if (!(target instanceof Element)) return;

  const logout = target.closest<HTMLButtonElement>('button[data-name="logout-nav"]');
  if (logout) {
    event.preventDefault();
    clearSession();
    sessionStorage.removeItem("moon.auth.dev-panel-preview");
    localStorage.removeItem("moon.auth.dev-panel-preview");
    window.location.assign("/auth");
    return;
  }

  const nav = target.closest<HTMLElement>(navSelector);
  const navName = nav?.getAttribute("data-name") ?? "";
  const route = navRoutes[navName];
  if (route) {
    event.preventDefault();
    navigatePanel(route);
    return;
  }

  const action = target.closest<HTMLElement>('a[data-name="action"], button[data-name="action"]');
  if (!action) return;

  const fallbackRoute = detailRoutes[window.location.pathname];
  const href = action.getAttribute("href") || fallbackRoute;
  if (href?.startsWith(PANEL_PREFIX)) {
    event.preventDefault();
    navigatePanel(href);
  }
});

document.addEventListener("keydown", (event) => {
  if (!isFundManagerPage() || (event.key !== "Enter" && event.key !== " ")) return;
  const target = event.target;
  if (!(target instanceof HTMLElement)) return;
  const nav = target.closest<HTMLElement>(navSelector);
  const name = nav?.getAttribute("data-name") ?? "";
  const route = navRoutes[name];
  if (!route) return;
  event.preventDefault();
  navigatePanel(route);
});
