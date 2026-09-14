const REPORT_DETAIL_DOC_SELECTOR =
  '.creative-house-dashboard[data-name="ayeneh-report-detail"] [data-name="doc-row"]';

const REPORT_DOCUMENT_ROUTES = new Map<string, string>([
  ["2378:232", "/projects/impact-report/print"],
  ["2378:236", "/projects/impact-report/documents"],
  ["2378:240", "/panel/creative-house/milestone-evaluations/detail"],
]);

function getReportDocumentRoute(row: HTMLElement) {
  const nodeId = row.dataset.nodeId;
  return nodeId ? REPORT_DOCUMENT_ROUTES.get(nodeId) : undefined;
}

function navigateWithinApp(route: string) {
  window.history.pushState({}, "", route);
  window.dispatchEvent(new PopStateEvent("popstate"));
}

function decorateReportDocumentRows(root: ParentNode = document) {
  root.querySelectorAll<HTMLElement>(REPORT_DETAIL_DOC_SELECTOR).forEach((row) => {
    row.setAttribute("role", "link");
    row.tabIndex = 0;
    row.style.cursor = "pointer";
    row.setAttribute("aria-label", `مشاهده ${row.textContent?.replace(/\s+/g, " ").trim() ?? "مستند"}`);
  });
}

function openReportDocument(row: HTMLElement) {
  const route = getReportDocumentRoute(row);
  if (!route) return;
  navigateWithinApp(route);
}

document.addEventListener("click", (event) => {
  const target = event.target;
  if (!(target instanceof Element)) return;

  const row = target.closest<HTMLElement>(REPORT_DETAIL_DOC_SELECTOR);
  if (!row) return;

  event.preventDefault();
  openReportDocument(row);
});

document.addEventListener("keydown", (event) => {
  if (event.key !== "Enter" && event.key !== " ") return;

  const target = event.target;
  if (!(target instanceof Element)) return;

  const row = target.closest<HTMLElement>(REPORT_DETAIL_DOC_SELECTOR);
  if (!row) return;

  event.preventDefault();
  openReportDocument(row);
});

const start = () => {
  decorateReportDocumentRows();

  const observer = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
      mutation.addedNodes.forEach((node) => {
        if (node instanceof Element) {
          decorateReportDocumentRows(node);
        }
      });
    });
  });

  observer.observe(document.body, { childList: true, subtree: true });
};

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", start, { once: true });
} else {
  start();
}
