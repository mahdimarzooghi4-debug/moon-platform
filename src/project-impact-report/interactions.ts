const FINAL_REPORT_PATH = "/projects/impact-report/states/final";
const PRINT_REPORT_PATH = "/projects/impact-report/print";
const DOCUMENTS_REPORT_PATH = "/projects/impact-report/documents";

function normalize(value: string | null | undefined) {
  return (value ?? "").replace(/\s+/g, " ").trim();
}

function isFinalReportPage() {
  return window.location.pathname === FINAL_REPORT_PATH;
}

function markAction(element: HTMLElement, action: "print" | "documents") {
  element.dataset.mahImpactReportAction = action;
  element.setAttribute("role", "link");
  element.tabIndex = 0;
  element.style.cursor = "pointer";
}

function enhanceFinalReportPage() {
  if (!isFinalReportPage()) return;

  const root = document.querySelector<HTMLElement>(".main-container");
  if (!root) return;

  const actions = Array.from(root.querySelectorAll<HTMLElement>("button, a, span"));

  const printButton = actions.find(
    (element) => normalize(element.textContent) === "دریافت نسخه چاپی",
  );
  if (printButton) markAction(printButton, "print");

  const documentsButton = actions.find(
    (element) => normalize(element.textContent) === "مشاهده مستندات",
  );
  if (documentsButton) markAction(documentsButton, "documents");
}

function openReportAction(action: "print" | "documents") {
  const query = window.location.search;
  const target = action === "print" ? PRINT_REPORT_PATH : DOCUMENTS_REPORT_PATH;
  window.location.assign(`${target}${query}`);
}

document.addEventListener("click", (event) => {
  if (!isFinalReportPage()) return;
  const target = event.target;
  if (!(target instanceof Element)) return;
  const element = target.closest<HTMLElement>("[data-mah-impact-report-action]");
  const action = element?.dataset.mahImpactReportAction;
  if (action !== "print" && action !== "documents") return;
  event.preventDefault();
  openReportAction(action);
});

document.addEventListener("keydown", (event) => {
  if (!isFinalReportPage() || (event.key !== "Enter" && event.key !== " ")) return;
  const target = event.target;
  if (!(target instanceof HTMLElement)) return;
  const action = target.dataset.mahImpactReportAction;
  if (action !== "print" && action !== "documents") return;
  event.preventDefault();
  openReportAction(action);
});

let scheduled = false;
function scheduleEnhance() {
  if (scheduled || !isFinalReportPage()) return;
  scheduled = true;
  window.setTimeout(() => {
    scheduled = false;
    enhanceFinalReportPage();
  }, 0);
}

const observer = new MutationObserver(scheduleEnhance);
observer.observe(document.documentElement, { childList: true, subtree: true });
window.addEventListener("load", scheduleEnhance);
window.addEventListener("popstate", scheduleEnhance);
scheduleEnhance();
