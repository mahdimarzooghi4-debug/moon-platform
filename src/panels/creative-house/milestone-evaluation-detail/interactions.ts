const MILESTONE_DETAIL_ROOT_SELECTOR =
  '.creative-house-dashboard[data-name="ayeneh-milestone-evaluation-detail"]';
const DOCUMENT_ROW_SELECTOR = `${MILESTONE_DETAIL_ROOT_SELECTOR} button[data-name="document-row"]`;
const DOCUMENTS_ROUTE = "/projects/impact-report/documents";

document.addEventListener("click", (event) => {
  if (event.defaultPrevented || event.button !== 0) return;

  const target = event.target;
  if (!(target instanceof Element)) return;

  const documentRow = target.closest<HTMLButtonElement>(DOCUMENT_ROW_SELECTOR);
  if (!documentRow) return;

  event.preventDefault();
  window.location.assign(DOCUMENTS_ROUTE);
});
