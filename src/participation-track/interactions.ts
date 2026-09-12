const LIST_PATH = "/participation/track/list";

function normalize(value: string | null | undefined) {
  return (value ?? "").replace(/\s+/g, " ").trim();
}

function isParticipationListPage() {
  return window.location.pathname === LIST_PATH;
}

function toLatinDigits(value: string) {
  return value
    .replace(/[۰-۹]/g, (digit) => String("۰۱۲۳۴۵۶۷۸۹".indexOf(digit)))
    .replace(/[٠-٩]/g, (digit) => String("٠١٢٣٤٥٦٧٨٩".indexOf(digit)));
}

function toPersianDigits(value: string) {
  return value.replace(/\d/g, (digit) => "۰۱۲۳۴۵۶۷۸۹"[Number(digit)]);
}

function maskMobile(value: string) {
  const digits = toLatinDigits(value).replace(/\D/g, "");
  if (digits.length < 7) return "۰۹۱۲•••۴۵۶۷";
  return `${toPersianDigits(digits.slice(0, 4))}•••${toPersianDigits(digits.slice(-4))}`;
}

function markLink(element: HTMLElement, href: string) {
  element.dataset.mahParticipationHref = href;
  element.setAttribute("role", "link");
  element.tabIndex = 0;
  element.style.cursor = "pointer";
}

function findParticipationRow(element: HTMLElement, root: HTMLElement) {
  let current = element.parentElement;
  while (current && current !== root) {
    const className = typeof current.className === "string" ? current.className : "";
    if (
      className.includes("rounded-[16px]") &&
      className.includes("border") &&
      className.includes("justify-between")
    ) {
      return current;
    }
    current = current.parentElement;
  }
  return null;
}

function enhanceParticipationList() {
  if (!isParticipationListPage()) return;
  const root = document.querySelector<HTMLElement>(".main-container");
  if (!root) return;

  const params = new URLSearchParams(window.location.search);
  const mobile = params.get("mobile") ?? "";

  root.querySelectorAll<HTMLElement>("span, p").forEach((element) => {
    const label = normalize(element.textContent);

    if (label === "بازگشت به صفحه اصلی") {
      markLink(element, "/");
      return;
    }

    if (label === "مشاهده پروژه‌ها") {
      markLink(element, "/projects");
      return;
    }

    if (label.startsWith("مشارکت‌های ثبت‌شده با شماره") && mobile) {
      element.textContent = `مشارکت‌های ثبت‌شده با شماره ${maskMobile(mobile)}`;
      return;
    }

    if (label !== "مشاهده جزییات" && label !== "مشاهده جزئیات") return;

    const row = findParticipationRow(element, root);
    if (!row) return;

    const trackingCode = Array.from(row.querySelectorAll<HTMLElement>("span, p"))
      .map((node) => normalize(node.textContent))
      .find((text) => text.startsWith("MAH-P-"));

    const query = new URLSearchParams();
    if (trackingCode) query.set("code", trackingCode);
    if (mobile) query.set("mobile", mobile);
    const suffix = query.toString();
    markLink(element, `/participation/track/details${suffix ? `?${suffix}` : ""}`);
  });
}

function activate(element: HTMLElement) {
  const href = element.dataset.mahParticipationHref;
  if (!href) return;
  window.location.assign(href);
}

document.addEventListener("click", (event) => {
  if (!isParticipationListPage()) return;
  const target = event.target;
  if (!(target instanceof Element)) return;
  const action = target.closest<HTMLElement>("[data-mah-participation-href]");
  if (!action) return;
  event.preventDefault();
  activate(action);
});

document.addEventListener("keydown", (event) => {
  if (!isParticipationListPage() || (event.key !== "Enter" && event.key !== " ")) return;
  const target = event.target;
  if (!(target instanceof HTMLElement) || !target.dataset.mahParticipationHref) return;
  event.preventDefault();
  activate(target);
});

let scheduled = false;
function scheduleEnhance() {
  if (scheduled || !isParticipationListPage()) return;
  scheduled = true;
  window.setTimeout(() => {
    scheduled = false;
    enhanceParticipationList();
  }, 0);
}

const observer = new MutationObserver(scheduleEnhance);
observer.observe(document.documentElement, { childList: true, subtree: true });
window.addEventListener("load", scheduleEnhance);
window.addEventListener("popstate", scheduleEnhance);
scheduleEnhance();
