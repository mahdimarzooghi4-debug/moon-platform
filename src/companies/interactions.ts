const COMPANY_PATHS = new Set(["/companies", "/for-companies"]);

const companyRoutes: Record<string, string> = {
  "ورود کاربران": "/auth",
  "پیگیری مشارکت": "/participation/track",
  "شروع مشارکت": "/projects",
  "درباره ما": "/about",
  "تماس با ما": "/contact",
  "شرکت‌ها": "/companies",
  "استارتاپ‌ها": "/startups",
  "پروژه‌ها": "/projects",
  "صفحه اصلی": "/",
  "مشاهده پروژه‌ها": "/projects",
  "مشاهده همه پروژه‌ها": "/projects",
  "ایجاد حساب سازمانی": "/register/company",
  "شروع ثبت‌نام شرکت": "/register/company",
  "ثبت‌نام شرکت": "/register/company",
  "قبلاً ثبت‌نام کرده‌اید؟ ورود سازمانی": "/auth",
  "ورود سازمانی": "/auth",
  "پیگیری ثبت‌نام": "/registration/track",
  "آشنایی با ماده ۱۷۲": "/article-172-guide",
  "راهنمای ماده ۱۷۲": "/article-172-guide",
  "مشاهده همه سوالات متداول": "/faq",
  "مشاهده همه سؤالات متداول": "/faq",
};

const svgAssetCache = new Map<string, Promise<string | null>>();

function isCompanyPage() {
  return COMPANY_PATHS.has(window.location.pathname);
}

function normalize(value: string | null | undefined) {
  return (value ?? "").replace(/\s+/g, " ").trim();
}

function getCompanyRoot() {
  if (!isCompanyPage()) return null;
  return document.querySelector<HTMLElement>(".main-container");
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

function codiaPngPath(element: HTMLElement) {
  const className = typeof element.className === "string" ? element.className : "";
  const match = className.match(/(\/assets\/codia\/[^)\]\s]+\.png)/);
  return match?.[1] ?? null;
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

  const images = Array.from(root.querySelectorAll<HTMLImageElement>("img"));
  await Promise.all(
    images.map(async (image) => {
      const path = image.getAttribute("src");
      if (!path?.startsWith("/assets/codia/") || !path.endsWith(".png")) return;
      const objectUrl = await svgObjectUrlFor(path);
      if (objectUrl) image.src = objectUrl;
    }),
  );
}

function styleProjectCards(root: HTMLElement) {
  const elements = Array.from(root.querySelectorAll<HTMLElement>("div"));
  const middleImage = elements.find((element) =>
    codiaPngPath(element)?.endsWith("/bZ15zUixSc.png"),
  );

  const middleCard = middleImage?.parentElement;
  const cardRow = middleCard?.parentElement;
  if (!middleCard || !cardRow) return;

  cardRow.classList.add("mah-company-projects-row");

  Array.from(cardRow.children).forEach((child) => {
    if (!(child instanceof HTMLElement)) return;
    child.classList.add("mah-company-project-card");
    child.removeAttribute("dir");
  });
}

function markCompanyLinks(root: HTMLElement) {
  root.querySelectorAll<HTMLElement>("span, a, button, div").forEach((element) => {
    const label = normalize(element.textContent);
    const href = companyRoutes[label];
    if (!href) return;

    element.dataset.mahCompanyHref = href;
    element.setAttribute("role", "link");
    element.setAttribute("aria-label", label);
    element.tabIndex = 0;
    element.style.cursor = "pointer";
  });
}

function enhanceCompanyPage() {
  const root = getCompanyRoot();
  if (!root) return;

  root.classList.add("mah-companies-page");
  styleProjectCards(root);
  markCompanyLinks(root);
  void repairFigmaSvgAssets(root);
}

function followCompanyLink(element: HTMLElement) {
  const href = element.dataset.mahCompanyHref;
  if (!href || href === window.location.pathname) return;
  window.location.assign(href);
}

document.addEventListener("click", (event) => {
  if (!isCompanyPage()) return;
  const target = event.target;
  if (!(target instanceof Element)) return;

  const action = target.closest<HTMLElement>("[data-mah-company-href]");
  if (!action || !action.closest(".main-container")) return;

  event.preventDefault();
  followCompanyLink(action);
});

document.addEventListener("keydown", (event) => {
  if (!isCompanyPage() || (event.key !== "Enter" && event.key !== " ")) return;
  const target = event.target;
  if (!(target instanceof HTMLElement) || !target.dataset.mahCompanyHref) return;
  if (!target.closest(".main-container")) return;

  event.preventDefault();
  followCompanyLink(target);
});

let scheduled = false;
const scheduleEnhance = () => {
  if (scheduled || !isCompanyPage()) return;
  scheduled = true;
  window.setTimeout(() => {
    scheduled = false;
    enhanceCompanyPage();
  }, 0);
};

const observer = new MutationObserver(scheduleEnhance);
observer.observe(document.documentElement, { childList: true, subtree: true });
window.addEventListener("load", scheduleEnhance);
window.addEventListener("popstate", scheduleEnhance);
scheduleEnhance();
