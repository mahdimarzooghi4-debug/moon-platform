const ABOUT_PATH = "/about";

const aboutRoutes: Record<string, string> = {
  "ورود کاربران": "/auth",
  "پیگیری مشارکت": "/participation/track",
  "شروع مشارکت": "/projects",
  "درباره ما": "/about",
  "تماس با ما": "/contact",
  "شرکت‌ها": "/companies",
  "استارتاپ‌ها": "/startups",
  "پروژه‌ها": "/projects",
  "صفحه اصلی": "/",
  "ماه چگونه کار می‌کند؟": "/how-it-works",
  "مشاهده پروژه‌ها": "/projects",
  "ورود به بخش شرکت‌ها و سازمان‌ها": "/companies",
};

function normalize(value: string | null | undefined) {
  return (value ?? "").replace(/\s+/g, " ").trim();
}

function isAboutPage() {
  return window.location.pathname === ABOUT_PATH;
}

function getAboutRoot() {
  if (!isAboutPage()) return null;
  return document.querySelector<HTMLElement>(".main-container");
}

function markAboutLinks(root: HTMLElement) {
  root.querySelectorAll<HTMLElement>("span, a, button, div").forEach((element) => {
    const label = normalize(element.textContent);
    const href = aboutRoutes[label];
    if (!href) return;

    element.dataset.mahAboutHref = href;
    element.setAttribute("role", "link");
    element.setAttribute("aria-label", label);
    element.tabIndex = 0;
    element.style.cursor = "pointer";
  });
}

function enhanceAboutPage() {
  const root = getAboutRoot();
  if (!root) return;
  markAboutLinks(root);
}

function followAboutLink(element: HTMLElement) {
  const href = element.dataset.mahAboutHref;
  if (!href || href === window.location.pathname) return;
  window.location.assign(href);
}

document.addEventListener("click", (event) => {
  if (!isAboutPage()) return;
  const target = event.target;
  if (!(target instanceof Element)) return;

  const action = target.closest<HTMLElement>("[data-mah-about-href]");
  if (!action || !action.closest(".main-container")) return;

  event.preventDefault();
  followAboutLink(action);
});

document.addEventListener("keydown", (event) => {
  if (!isAboutPage() || (event.key !== "Enter" && event.key !== " ")) return;
  const target = event.target;
  if (!(target instanceof HTMLElement) || !target.dataset.mahAboutHref) return;
  if (!target.closest(".main-container")) return;

  event.preventDefault();
  followAboutLink(target);
});

let scheduled = false;
const scheduleEnhance = () => {
  if (scheduled || !isAboutPage()) return;
  scheduled = true;
  window.setTimeout(() => {
    scheduled = false;
    enhanceAboutPage();
  }, 0);
};

const observer = new MutationObserver(scheduleEnhance);
observer.observe(document.documentElement, { childList: true, subtree: true });
window.addEventListener("load", scheduleEnhance);
window.addEventListener("popstate", scheduleEnhance);
scheduleEnhance();
