const STARTUP_PATHS = new Set(["/startups", "/for-startups"]);

const ACTION_ROUTES: Record<string, string> = {
  "ورود کاربران": "/auth",
  "پیگیری مشارکت": "/participation/track",
  "شروع مشارکت": "/projects",
  "درباره ما": "/about",
  "تماس با ما": "/contact",
  "شرکت‌ها": "/companies",
  "استارتاپ‌ها": "/startups",
  "پروژه‌ها": "/projects",
  "صفحه اصلی": "/",
  "پیگیری وضعیت ثبت‌نام": "/registration/track",
  "ثبت‌نام استارتاپ": "/register/startup",
  "شروع ثبت‌نام استارتاپ": "/register/startup",
  "پیگیری ثبت‌نام قبلی": "/registration/track",
  "مشاهده استارتاپ‌های تأییدشده": "/startups-directory",
  "مشاهده جزئیات": "/startups/rahkar-sabz",
  "مشاهده جزئیات کامل پروژه": "/projects/sustainable-agriculture",
  "مشاهده همه سؤالات متداول": "/faq",
  "تماس با پشتیبانی": "/contact",
};

function normalizeLabel(value: string | null | undefined) {
  return (value ?? "")
    .replace(/[←→]/g, "")
    .replace(/\s+/g, " ")
    .trim();
}

function startupPageIsActive() {
  return STARTUP_PATHS.has(window.location.pathname);
}

function routeForElement(element: Element | null) {
  let current = element;
  for (let depth = 0; current && depth < 4; depth += 1, current = current.parentElement) {
    const route = ACTION_ROUTES[normalizeLabel(current.textContent)];
    if (route) return route;
  }
  return null;
}

function markInteractiveLabels() {
  if (!startupPageIsActive()) return;

  document.querySelectorAll("span, div").forEach((element) => {
    const label = normalizeLabel(element.textContent);
    if (!ACTION_ROUTES[label]) return;

    element.setAttribute("role", "link");
    element.setAttribute("tabindex", "0");
    (element as HTMLElement).style.cursor = "pointer";
  });
}

document.addEventListener("click", (event) => {
  if (!startupPageIsActive()) return;

  const target = event.target as Element | null;
  if (!target || target.closest("a[href], button")) return;

  const route = routeForElement(target);
  if (!route) return;

  event.preventDefault();
  window.location.assign(route);
});

document.addEventListener("keydown", (event) => {
  if (!startupPageIsActive() || (event.key !== "Enter" && event.key !== " ")) return;

  const target = event.target as Element | null;
  if (!target || target.closest("a[href], button")) return;

  const route = routeForElement(target);
  if (!route) return;

  event.preventDefault();
  window.location.assign(route);
});

const observer = new MutationObserver(() => markInteractiveLabels());
observer.observe(document.documentElement, { childList: true, subtree: true });

window.addEventListener("popstate", markInteractiveLabels);
window.addEventListener("load", markInteractiveLabels);
queueMicrotask(markInteractiveLabels);
