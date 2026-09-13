const DASHBOARD_ACTION_SELECTOR =
  '.creative-house-dashboard[data-name="ayeneh-main-dashboard"] [data-name="Top Actions"] a';
const STARTUP_EVALUATION_ACTION_SELECTOR =
  '.creative-house-dashboard[data-name="ayeneh-startup-evaluations"] [data-name="action-button"]';
const PROJECT_EVALUATION_ACTION_SELECTOR =
  '.creative-house-dashboard[data-name="ayeneh-project-evaluations"] [data-name="action-button"]';
const MILESTONE_EVALUATION_ACTION_SELECTOR =
  '.creative-house-dashboard[data-name="ayeneh-milestone-evaluations"] [data-name="action-button"]';

const DASHBOARD_ACTION_ROUTES = new Map<string, string>([
  ["گزارش‌های آماری", "/panel/creative-house/reports"],
  ["همه ارزیابی‌ها", "/panel/creative-house/startup-evaluations"],
]);

const STARTUP_EVALUATION_DETAIL_ROUTE =
  "/panel/creative-house/startup-evaluations/detail";
const PROJECT_EVALUATION_DETAIL_ROUTE =
  "/panel/creative-house/project-evaluations/detail";
const MILESTONE_EVALUATION_DETAIL_ROUTE =
  "/panel/creative-house/milestone-evaluations/detail";

const PROJECT_EVALUATION_ICON_STYLE_ID =
  "creative-house-project-evaluation-icon-size";

function getDashboardActionRoute(anchor: HTMLAnchorElement) {
  const label = anchor.textContent?.replace(/\s+/g, " ").trim();
  return label ? DASHBOARD_ACTION_ROUTES.get(label) : undefined;
}

function ensureProjectEvaluationIconStyle() {
  if (document.getElementById(PROJECT_EVALUATION_ICON_STYLE_ID)) return;

  const style = document.createElement("style");
  style.id = PROJECT_EVALUATION_ICON_STYLE_ID;
  style.textContent = `
    .creative-house-dashboard[data-name="ayeneh-project-evaluations"] [data-name^="project-stat-card-"] [data-name="stat-icon"] {
      width: 34px !important;
      height: 34px !important;
      left: 20px !important;
      top: 20px !important;
    }
  `;
  document.head.appendChild(style);
}

function setHrefIfNeeded(anchor: HTMLAnchorElement, route: string) {
  if (anchor.getAttribute("href") !== route) {
    anchor.setAttribute("href", route);
  }
}

function applyActionHrefs(root: ParentNode = document) {
  root
    .querySelectorAll<HTMLAnchorElement>(DASHBOARD_ACTION_SELECTOR)
    .forEach((anchor) => {
      const route = getDashboardActionRoute(anchor);
      if (route) setHrefIfNeeded(anchor, route);
    });

  root
    .querySelectorAll<HTMLAnchorElement>(STARTUP_EVALUATION_ACTION_SELECTOR)
    .forEach((anchor) => {
      setHrefIfNeeded(anchor, STARTUP_EVALUATION_DETAIL_ROUTE);
    });

  root
    .querySelectorAll<HTMLAnchorElement>(PROJECT_EVALUATION_ACTION_SELECTOR)
    .forEach((anchor) => {
      setHrefIfNeeded(anchor, PROJECT_EVALUATION_DETAIL_ROUTE);
    });

  root
    .querySelectorAll<HTMLAnchorElement>(MILESTONE_EVALUATION_ACTION_SELECTOR)
    .forEach((anchor) => {
      setHrefIfNeeded(anchor, MILESTONE_EVALUATION_DETAIL_ROUTE);
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

  const milestoneEvaluationAction =
    target.closest<HTMLAnchorElement>(MILESTONE_EVALUATION_ACTION_SELECTOR);
  if (milestoneEvaluationAction) {
    event.preventDefault();
    navigateWithinApp(MILESTONE_EVALUATION_DETAIL_ROUTE);
    return;
  }

  const projectEvaluationAction =
    target.closest<HTMLAnchorElement>(PROJECT_EVALUATION_ACTION_SELECTOR);
  if (projectEvaluationAction) {
    event.preventDefault();
    navigateWithinApp(PROJECT_EVALUATION_DETAIL_ROUTE);
    return;
  }

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
  ensureProjectEvaluationIconStyle();
  applyActionHrefs();

  const observer = new MutationObserver(() => applyActionHrefs());
  observer.observe(document.body, { childList: true, subtree: true });
};

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", start, { once: true });
} else {
  start();
}
