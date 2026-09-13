const DASHBOARD_ACTION_SELECTOR =
  '.creative-house-dashboard[data-name="ayeneh-main-dashboard"] [data-name="Top Actions"] a';
const STARTUP_EVALUATION_ACTION_SELECTOR =
  '.creative-house-dashboard[data-name="ayeneh-startup-evaluations"] [data-name="action-button"]';

const DASHBOARD_ACTION_ROUTES = new Map<string, string>([
  ["گزارش‌های آماری", "/panel/creative-house/reports"],
  ["همه ارزیابی‌ها", "/panel/creative-house/startup-evaluations"],
]);

const STARTUP_EVALUATION_DETAIL_ROUTE =
  "/panel/creative-house/startup-evaluations/detail";

function getDashboardActionRoute(anchor: HTMLAnchorElement) {
  const label = anchor.textContent?.replace(/\s+/g, " ").trim();
  return label ? DASHBOARD_ACTION_ROUTES.get(label) : undefined;
}

function applyActionHrefs(root: ParentNode = document) {
  root
    .querySelectorAll<HTMLAnchorElement>(DASHBOARD_ACTION_SELECTOR)
    .forEach((anchor) => {
      const route = getDashboardActionRoute(anchor);
      if (route) {
        anchor.setAttribute("href", route);
      }
    });

  root
    .querySelectorAll<HTMLAnchorElement>(STARTUP_EVALUATION_ACTION_SELECTOR)
    .forEach((anchor) => {
      anchor.setAttribute("href", STARTUP_EVALUATION_DETAIL_ROUTE);
    });
}

function navigateWithinApp(route: string) {
  window.history.pushState({}, "", route);
  window.dispatchEvent(new PopStateEvent("popstate"));
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

  const startupEvaluationAction =
    target.closest<HTMLAnchorElement>(STARTUP_EVALUATION_ACTION_SELECTOR);
  if (startupEvaluationAction) {
    event.preventDefault();
    navigateWithinApp(STARTUP_EVALUATION_DETAIL_ROUTE);
    return;
  }

  const dashboardAction = target.closest<HTMLAnchorElement>(
    DASHBOARD_ACTION_SELECTOR,
  );
  if (!dashboardAction) return;

  const route = getDashboardActionRoute(dashboardAction);
  if (!route) return;

  event.preventDefault();
  navigateWithinApp(route);
});

const start = () => {
  applyActionHrefs();

  const observer = new MutationObserver(() => applyActionHrefs());
  observer.observe(document.body, { childList: true, subtree: true });
};

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", start, { once: true });
} else {
  start();
}
