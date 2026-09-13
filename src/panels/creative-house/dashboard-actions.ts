const ACTION_SELECTOR =
  '.creative-house-dashboard[data-name="ayeneh-main-dashboard"] [data-name="Top Actions"] a';

const ACTION_ROUTES = new Map<string, string>([
  ["گزارش‌های آماری", "/panel/creative-house/reports"],
  ["همه ارزیابی‌ها", "/panel/creative-house/startup-evaluations"],
]);

function getActionRoute(anchor: HTMLAnchorElement) {
  const label = anchor.textContent?.replace(/\s+/g, " ").trim();
  return label ? ACTION_ROUTES.get(label) : undefined;
}

function applyActionHrefs(root: ParentNode = document) {
  root.querySelectorAll<HTMLAnchorElement>(ACTION_SELECTOR).forEach((anchor) => {
    const route = getActionRoute(anchor);
    if (route) {
      anchor.setAttribute("href", route);
    }
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

  const anchor = target.closest<HTMLAnchorElement>(ACTION_SELECTOR);
  if (!anchor) return;

  const route = getActionRoute(anchor);
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
