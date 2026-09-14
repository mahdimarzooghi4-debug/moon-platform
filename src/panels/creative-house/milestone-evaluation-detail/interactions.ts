const MILESTONE_DETAIL_ROOT_SELECTOR =
  '.creative-house-dashboard[data-name="ayeneh-milestone-evaluation-detail"]';
const DOCUMENT_ROW_SELECTOR = `${MILESTONE_DETAIL_ROOT_SELECTOR} button[data-name="document-row"]`;
const DOCUMENTS_ROUTE = "/projects/impact-report/documents";

function normalize(value: string | null | undefined) {
  return (value ?? "").replace(/\s+/g, " ").trim();
}

function setText(node: Element | null | undefined, text: string) {
  if (!(node instanceof HTMLElement)) return;
  if (normalize(node.textContent) !== text) node.textContent = text;
}

function applyMilestonePresentation() {
  const root = document.querySelector<HTMLElement>(MILESTONE_DETAIL_ROOT_SELECTOR);
  if (!root) return;

  root.querySelector<HTMLElement>('[data-name="milestone-report-data"] [data-name="source"]')?.remove();

  root.querySelectorAll<HTMLElement>('p').forEach((paragraph) => {
    const text = normalize(paragraph.textContent);
    if (text === "گزارش مرحله اول از لندینگ") {
      setText(paragraph, "گزارش مرحله اول");
    } else if (text === "اطلاعات زیر مستقیماً از گزارش عملکرد مرحله اول پروژه استخراج شده‌اند.") {
      setText(paragraph, "اطلاعات و مستندات ثبت‌شده برای مرحله اول پروژه در ادامه نمایش داده می‌شوند.");
    } else if (text === "تصمیم بر اساس گزارش و شواهد ثبت‌شده در لندینگ انجام می‌شود.") {
      setText(paragraph, "تصمیم بر اساس گزارش، شاخص‌ها و شواهد ثبت‌شده مرحله انجام می‌شود.");
    }
  });
}

applyMilestonePresentation();

if (document.body) {
  let scheduled = false;
  new MutationObserver((mutations) => {
    const pageAdded = mutations.some((mutation) =>
      Array.from(mutation.addedNodes).some((node) => {
        if (!(node instanceof Element)) return false;
        return node.matches(MILESTONE_DETAIL_ROOT_SELECTOR) || Boolean(node.querySelector(MILESTONE_DETAIL_ROOT_SELECTOR));
      }),
    );
    if (!pageAdded || scheduled) return;
    scheduled = true;
    requestAnimationFrame(() => {
      scheduled = false;
      applyMilestonePresentation();
    });
  }).observe(document.body, { childList: true, subtree: true });
}

document.addEventListener("click", (event) => {
  if (event.defaultPrevented || event.button !== 0) return;

  const target = event.target;
  if (!(target instanceof Element)) return;

  const documentRow = target.closest<HTMLButtonElement>(DOCUMENT_ROW_SELECTOR);
  if (!documentRow) return;

  event.preventDefault();
  window.location.assign(DOCUMENTS_ROUTE);
});
