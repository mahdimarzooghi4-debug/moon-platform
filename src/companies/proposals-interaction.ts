const COMPANY_PATHS = new Set(["/companies", "/for-companies"]);

const COMPANY_ACTIONS: Record<string, string> = {
  "مشاهده پیشنهادها": "/projects",
  "ورود به حساب سازمانی": "/auth",
  "ثبت درخواست تماس": "/contact",
  "درخواست تماس": "/contact",
};

function normalize(value: string | null | undefined) {
  return (value ?? "").replace(/\s+/g, " ").trim();
}

function isCompanyPage() {
  return COMPANY_PATHS.has(window.location.pathname);
}

function actionFor(node: HTMLElement) {
  const label = normalize(node.textContent);
  const href = COMPANY_ACTIONS[label];
  return href ? { label, href } : null;
}

function findCompanyAction(target: Element) {
  const root = target.closest<HTMLElement>(".main-container");
  if (!root) return null;

  let node: HTMLElement | null = target instanceof HTMLElement ? target : target.parentElement;
  while (node) {
    const action = actionFor(node);
    if (action) return { node, ...action };
    if (node === root) break;
    node = node.parentElement;
  }

  return null;
}

function follow(href: string) {
  if (window.location.pathname === href) return;
  window.location.assign(href);
}

function markCompanyActions() {
  if (!isCompanyPage()) return;

  document.querySelectorAll<HTMLElement>(".main-container span, .main-container div").forEach((node) => {
    const action = actionFor(node);
    if (!action) return;

    node.style.cursor = "pointer";
    node.setAttribute("role", "link");
    node.setAttribute("aria-label", action.label);
    node.dataset.mahCompanyExtraHref = action.href;
    node.tabIndex = 0;
  });
}

document.addEventListener("click", (event) => {
  if (!isCompanyPage()) return;
  const target = event.target;
  if (!(target instanceof Element)) return;

  const action = findCompanyAction(target);
  if (!action) return;

  event.preventDefault();
  follow(action.href);
});

document.addEventListener("keydown", (event) => {
  if (!isCompanyPage() || (event.key !== "Enter" && event.key !== " ")) return;
  const target = event.target;
  if (!(target instanceof Element)) return;

  const action = findCompanyAction(target);
  if (!action) return;

  event.preventDefault();
  follow(action.href);
});

const observer = new MutationObserver(markCompanyActions);
observer.observe(document.documentElement, { childList: true, subtree: true });
window.addEventListener("load", markCompanyActions);
window.addEventListener("popstate", markCompanyActions);
window.setTimeout(markCompanyActions, 0);
