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

const svgAssetCache = new Map<string, Promise<string | null>>();

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

function findStakeholderCard(root: HTMLElement, label: string, partial = false) {
  const titles = Array.from(root.querySelectorAll<HTMLElement>("span"));

  for (const title of titles) {
    const text = normalize(title.textContent);
    const matches = partial ? text.includes(label) : text === label;
    if (!matches) continue;

    let current = title.parentElement;
    while (current && current !== root) {
      const className = typeof current.className === "string" ? current.className : "";
      if (
        className.includes("w-[384px]") &&
        className.includes("rounded-[20px]") &&
        className.includes("border")
      ) {
        return current;
      }
      current = current.parentElement;
    }
  }

  return null;
}

function swapStakeholderCards(root: HTMLElement) {
  if (root.dataset.mahStakeholderCardsSwapped === "true") return;

  const emdadCard = findStakeholderCard(root, "کمیته امداد امام خمینی", true);
  const startupCard = findStakeholderCard(root, "استارتاپ‌ها");
  if (!emdadCard || !startupCard || emdadCard === startupCard) return;

  const emdadParent = emdadCard.parentElement;
  const startupParent = startupCard.parentElement;
  if (!emdadParent || !startupParent || emdadParent !== startupParent) return;

  const emdadMarker = document.createComment("mah-emdad-card-slot");
  const startupMarker = document.createComment("mah-startup-card-slot");

  emdadParent.insertBefore(emdadMarker, emdadCard);
  startupParent.insertBefore(startupMarker, startupCard);
  emdadParent.replaceChild(startupCard, emdadCard);
  startupParent.replaceChild(emdadCard, startupMarker);
  emdadMarker.remove();

  root.dataset.mahStakeholderCardsSwapped = "true";
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
  swapStakeholderCards(root);
  markAboutLinks(root);
  void repairFigmaSvgAssets(root);
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
