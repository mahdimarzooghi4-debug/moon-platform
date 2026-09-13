const REPORTS_ROOT_SELECTOR =
  '.creative-house-dashboard[data-name="ayeneh-reports"]';

let currentPage = 1;

function setPageButtonState(element: HTMLElement, active: boolean) {
  element.style.background = active ? "#2094e3" : "#ffffff";
  element.style.borderColor = active ? "#2094e3" : "#dde6ed";
  element.style.cursor = "pointer";
  element.setAttribute("role", "button");
  element.tabIndex = 0;

  const label = element.querySelector<HTMLElement>("p");
  if (label) label.style.color = active ? "#ffffff" : "#60758a";
}

function setArrowState(element: HTMLElement, enabled: boolean, label: string) {
  element.style.opacity = enabled ? "1" : "0.35";
  element.style.cursor = enabled ? "pointer" : "default";
  element.style.pointerEvents = enabled ? "auto" : "none";
  element.setAttribute("role", "button");
  element.setAttribute("aria-label", label);
  element.setAttribute("aria-disabled", enabled ? "false" : "true");
  element.tabIndex = enabled ? 0 : -1;
}

function setArrowGlyph(element: HTMLElement, glyph: string) {
  const label = element.querySelector<HTMLElement>("p");
  if (label && label.textContent !== glyph) label.textContent = glyph;
}

function renderPagination(root: HTMLElement) {
  const pageOne = root.querySelector<HTMLElement>('[data-node-id="1791:284"]');
  const pageTwo = root.querySelector<HTMLElement>('[data-name="page-2"]');
  const leftArrow = root.querySelector<HTMLElement>('[data-name="prev-disabled"]');
  const rightArrow = root.querySelector<HTMLElement>('[data-name="next"]');
  const counter = root.querySelector<HTMLElement>('[data-node-id="1791:283"] p');

  if (!pageOne || !pageTwo || !leftArrow || !rightArrow || !counter) return;

  // Requested visual order: left arrow, page 1, page 2, right arrow.
  pageOne.style.left = "475px";
  pageTwo.style.left = "513px";

  setPageButtonState(pageOne, currentPage === 1);
  setPageButtonState(pageTwo, currentPage === 2);

  // Requested arrow direction: left arrow = previous, right arrow = next.
  setArrowGlyph(leftArrow, "‹");
  setArrowGlyph(rightArrow, "›");
  setArrowState(leftArrow, currentPage > 1, "صفحه قبل");
  setArrowState(rightArrow, currentPage < 2, "صفحه بعد");

  counter.textContent = `صفحه ${currentPage === 1 ? "۱" : "۲"} از ۲`;
  root.dataset.reportsPage = String(currentPage);
}

function setPage(page: number, root: HTMLElement) {
  currentPage = Math.max(1, Math.min(2, page));
  renderPagination(root);
}

function handlePaginationAction(target: Element) {
  const root = target.closest<HTMLElement>(REPORTS_ROOT_SELECTOR);
  if (!root) return false;

  if (target.closest('[data-node-id="1791:284"]')) {
    setPage(1, root);
    return true;
  }

  if (target.closest('[data-name="page-2"]')) {
    setPage(2, root);
    return true;
  }

  if (target.closest('[data-name="prev-disabled"]')) {
    setPage(currentPage - 1, root);
    return true;
  }

  if (target.closest('[data-name="next"]')) {
    setPage(currentPage + 1, root);
    return true;
  }

  return false;
}

document.addEventListener("click", (event) => {
  const target = event.target;
  if (!(target instanceof Element)) return;
  if (handlePaginationAction(target)) event.preventDefault();
});

document.addEventListener("keydown", (event) => {
  if (event.key !== "Enter" && event.key !== " ") return;

  const target = event.target;
  if (!(target instanceof Element)) return;
  if (handlePaginationAction(target)) event.preventDefault();
});

const initializeReportsPagination = () => {
  const root = document.querySelector<HTMLElement>(REPORTS_ROOT_SELECTOR);
  if (root) renderPagination(root);
};

const observer = new MutationObserver((mutations) => {
  if (
    mutations.some((mutation) =>
      Array.from(mutation.addedNodes).some(
        (node) =>
          node instanceof Element &&
          (node.matches(REPORTS_ROOT_SELECTOR) || node.querySelector(REPORTS_ROOT_SELECTOR)),
      ),
    )
  ) {
    currentPage = 1;
    initializeReportsPagination();
  }
});

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", () => {
    initializeReportsPagination();
    observer.observe(document.body, { childList: true, subtree: true });
  }, { once: true });
} else {
  initializeReportsPagination();
  observer.observe(document.body, { childList: true, subtree: true });
}
