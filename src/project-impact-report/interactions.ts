const FINAL_REPORT_PATH = "/projects/impact-report/states/final";
const PRINT_REPORT_PATH = "/projects/impact-report/print";

function normalize(value: string | null | undefined) {
  return (value ?? "").replace(/\s+/g, " ").trim();
}

function isFinalReportPage() {
  return window.location.pathname === FINAL_REPORT_PATH;
}

function enhanceFinalReportPage() {
  if (!isFinalReportPage()) return;

  const root = document.querySelector<HTMLElement>(".main-container");
  if (!root) return;

  const printButton = Array.from(root.querySelectorAll<HTMLElement>("button, a, span")).find(
    (element) => normalize(element.textContent) === "دریافت نسخه چاپی",
  );

  if (!printButton) return;

  printButton.dataset.mahPrintReport = "true";
  printButton.setAttribute("role", "link");
  printButton.tabIndex = 0;
  printButton.style.cursor = "pointer";
}

function openPrintReport() {
  const query = window.location.search;
  window.location.assign(`${PRINT_REPORT_PATH}${query}`);
}

document.addEventListener("click", (event) => {
  if (!isFinalReportPage()) return;
  const target = event.target;
  if (!(target instanceof Element)) return;
  const action = target.closest<HTMLElement>("[data-mah-print-report='true']");
  if (!action) return;
  event.preventDefault();
  openPrintReport();
});

document.addEventListener("keydown", (event) => {
  if (!isFinalReportPage() || (event.key !== "Enter" && event.key !== " ")) return;
  const target = event.target;
  if (!(target instanceof HTMLElement) || target.dataset.mahPrintReport !== "true") return;
  event.preventDefault();
  openPrintReport();
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
