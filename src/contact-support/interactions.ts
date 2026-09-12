const CONTACT_PATHS = new Set(["/contact", "/contact-support"]);

const contactRoutes: Record<string, string> = {
  "ورود کاربران": "/auth",
  "پیگیری مشارکت": "/participation/track",
  "شروع مشارکت": "/projects",
  "درباره ما": "/about",
  "تماس با ما": "/contact",
  "شرکت‌ها": "/companies",
  "استارتاپ‌ها": "/startups",
  "پروژه‌ها": "/projects",
  "صفحه اصلی": "/",
  "پیگیری ثبت‌نام": "/registration/track",
  "پیگیری مشارکت فردی": "/participation/track",
  "پیگیری ثبت‌نام شرکت یا استارتاپ": "/registration/track",
  "مشاهده پروژه‌ها": "/projects",
  "گزارش‌های اثر": "/impact-reports",
  "سؤالات متداول": "/faq",
  "مشاهده همه سؤالات متداول": "/faq",
  "مشاهده گزارش‌ها": "/impact-reports",
  "قوانین و مقررات": "/terms",
  "حریم خصوصی": "/privacy-policy",
  "برای شرکت‌ها": "/companies",
  "نحوه مشارکت": "/how-it-works",
  "ثبت‌نام استارتاپ": "/register/startup",
  "اخبار و رویدادها": "/news",
};

const formScrollLabels = new Set([
  "پشتیبانی مشارکت",
  "پشتیبانی شرکت‌ها",
  "پشتیبانی استارتاپ‌ها",
  "ثبت درخواست عمومی",
]);

const svgAssetCache = new Map<string, Promise<string | null>>();

function normalize(value: string | null | undefined) {
  return (value ?? "").replace(/\s+/g, " ").trim();
}

function isContactPage() {
  return CONTACT_PATHS.has(window.location.pathname);
}

function getContactRoot() {
  if (!isContactPage()) return null;
  return document.querySelector<HTMLElement>(".main-container");
}

function codiaPngPath(element: HTMLElement) {
  const className = typeof element.className === "string" ? element.className : "";
  const match = className.match(/(\/assets\/codia\/[^)\]\s]+\.png)/);
  return match?.[1] ?? null;
}

async function svgObjectUrlFor(path: string) {
  const existing = svgAssetCache.get(path);
  if (existing) return existing;

  const pending = (async () => {
    try {
      const response = await fetch(path);
      if (!response.ok) return null;
      const source = await response.text();
      if (!source.trimStart().startsWith("<svg")) return null;
      return URL.createObjectURL(new Blob([source], { type: "image/svg+xml" }));
    } catch {
      return null;
    }
  })();

  svgAssetCache.set(path, pending);
  return pending;
}

async function repairFigmaSvgAssets(root: HTMLElement) {
  const elements = Array.from(root.querySelectorAll<HTMLElement>("div, span"));
  await Promise.all(
    elements.map(async (element) => {
      const path = codiaPngPath(element);
      if (!path) return;
      const objectUrl = await svgObjectUrlFor(path);
      if (objectUrl) element.style.backgroundImage = `url("${objectUrl}")`;
    }),
  );
}

function markSupportForm(root: HTMLElement) {
  const heading = Array.from(root.querySelectorAll<HTMLElement>("span, p")).find(
    (element) => normalize(element.textContent) === "ثبت درخواست پشتیبانی",
  );
  if (!heading) return;

  let current = heading.parentElement;
  while (current && current !== root) {
    const className = typeof current.className === "string" ? current.className : "";
    if (className.includes("gap-[28px]") && className.includes("flex-col")) {
      current.id = "mah-support-form";
      return;
    }
    current = current.parentElement;
  }
}

function markContactActions(root: HTMLElement) {
  root.querySelectorAll<HTMLElement>("span, p, a, button, div").forEach((element) => {
    const label = normalize(element.textContent);

    const href = contactRoutes[label];
    if (href) {
      element.dataset.mahContactHref = href;
      element.setAttribute("role", "link");
      element.tabIndex = 0;
      return;
    }

    if (formScrollLabels.has(label)) {
      element.dataset.mahContactScroll = "support-form";
      element.setAttribute("role", "button");
      element.tabIndex = 0;
      return;
    }

    if (label === "ارسال ایمیل") {
      element.dataset.mahContactExternal = "mailto:info@mahcsr.ir";
      element.setAttribute("role", "link");
      element.tabIndex = 0;
      return;
    }

    if (label === "تماس تلفنی") {
      element.dataset.mahContactExternal = "tel:+982166485374";
      element.setAttribute("role", "link");
      element.tabIndex = 0;
    }
  });
}

function enhanceContactPage() {
  const root = getContactRoot();
  if (!root) return;

  root.classList.add("mah-contact-page");
  markSupportForm(root);
  markContactActions(root);
  void repairFigmaSvgAssets(root);
}

function activate(element: HTMLElement) {
  const href = element.dataset.mahContactHref;
  if (href && href !== window.location.pathname) {
    window.location.assign(href);
    return;
  }

  const external = element.dataset.mahContactExternal;
  if (external) {
    window.location.href = external;
    return;
  }

  if (element.dataset.mahContactScroll === "support-form") {
    document.getElementById("mah-support-form")?.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

document.addEventListener("click", (event) => {
  if (!isContactPage()) return;
  const target = event.target;
  if (!(target instanceof Element)) return;

  const action = target.closest<HTMLElement>(
    "[data-mah-contact-href], [data-mah-contact-external], [data-mah-contact-scroll]",
  );
  if (!action || !action.closest(".main-container")) return;

  event.preventDefault();
  activate(action);
});

document.addEventListener("keydown", (event) => {
  if (!isContactPage() || (event.key !== "Enter" && event.key !== " ")) return;
  const target = event.target;
  if (!(target instanceof HTMLElement)) return;
  if (
    !target.dataset.mahContactHref &&
    !target.dataset.mahContactExternal &&
    !target.dataset.mahContactScroll
  ) {
    return;
  }

  event.preventDefault();
  activate(target);
});

let scheduled = false;
const scheduleEnhance = () => {
  if (scheduled || !isContactPage()) return;
  scheduled = true;
  window.setTimeout(() => {
    scheduled = false;
    enhanceContactPage();
  }, 0);
};

const observer = new MutationObserver(scheduleEnhance);
observer.observe(document.documentElement, { childList: true, subtree: true });
window.addEventListener("load", scheduleEnhance);
window.addEventListener("popstate", scheduleEnhance);
scheduleEnhance();
