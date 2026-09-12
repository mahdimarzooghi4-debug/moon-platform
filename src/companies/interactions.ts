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
  const firstImage = elements.find((element) =>
    codiaPngPath(element)?.endsWith("/OVPcmhB9Gi.png"),
  );

  const firstCard = firstImage?.parentElement;
  const cardRow = firstCard?.parentElement;
  if (!(firstCard instanceof HTMLElement) || !(cardRow instanceof HTMLElement)) return;

  const cards = Array.from(cardRow.children).filter(
    (child): child is HTMLElement => child instanceof HTMLElement,
  );
  if (cards.length < 3) return;

  const middleCard = cards[1];

  // The requested middle card is an exact copy of Project Card 1.
  // Doing the copy before the visual normalization guarantees identical image,
  // text, stats, progress and button placement.
  if (middleCard.dataset.mahCopiedFromFirst !== "true") {
    middleCard.innerHTML = firstCard.innerHTML;
    middleCard.dataset.mahCopiedFromFirst = "true";
  }

  cardRow.classList.add("mah-company-projects-row");
  cardRow.style.alignItems = "stretch";
  cardRow.style.direction = "ltr";

  cards.slice(0, 3).forEach((card) => {
    card.classList.add("mah-company-project-card");
    card.setAttribute("dir", "rtl");
    card.style.direction = "rtl";
    card.style.textAlign = "right";
    card.style.height = "540px";
    card.style.minHeight = "540px";
    card.style.maxHeight = "540px";
    card.style.display = "flex";
    card.style.flexDirection = "column";
    card.style.alignItems = "stretch";
    card.style.gap = "20px";

    const parts = Array.from(card.children).filter(
      (child): child is HTMLElement => child instanceof HTMLElement,
    );

    parts.forEach((part) => {
      part.style.width = "100%";
      part.style.alignSelf = "stretch";
    });

    const [, heading, stats, progress, button] = parts;

    if (heading) {
      heading.style.direction = "rtl";
      heading.style.textAlign = "right";
      heading.style.alignItems = "flex-end";
      const metaRow = heading.firstElementChild;
      if (metaRow instanceof HTMLElement) {
        metaRow.style.direction = "rtl";
        metaRow.style.justifyContent = "flex-start";
      }
    }

    if (stats) {
      stats.style.direction = "rtl";
      stats.style.textAlign = "right";
      Array.from(stats.children).forEach((row) => {
        if (!(row instanceof HTMLElement)) return;
        row.style.direction = "rtl";
        Array.from(row.children).forEach((stat) => {
          if (!(stat instanceof HTMLElement)) return;
          stat.style.alignItems = "flex-end";
          stat.style.textAlign = "right";
        });
      });
    }

    if (progress) {
      progress.style.direction = "rtl";
      progress.style.textAlign = "right";
      const labels = progress.firstElementChild;
      if (labels instanceof HTMLElement) labels.style.direction = "rtl";
      const track = progress.children[1];
      if (track instanceof HTMLElement) {
        track.style.direction = "rtl";
        track.style.justifyContent = "flex-start";
      }
    }

    if (button) {
      button.style.marginTop = "auto";
      button.style.width = "100%";
      button.style.direction = "rtl";
      button.style.textAlign = "center";
    }

    card.querySelectorAll<HTMLElement>("span, p").forEach((text) => {
      text.style.direction = "rtl";
      text.style.unicodeBidi = "plaintext";
      text.style.textAlign = button?.contains(text) ? "center" : "right";
    });
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
