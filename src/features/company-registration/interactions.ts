const COMPANY_REGISTER_ROOT = "/register/company";
const STEP2_PATH = `${COMPANY_REGISTER_ROOT}/states/step2`;
const STEP3_PATH = `${COMPANY_REGISTER_ROOT}/states/step3`;
const STEP4_PATH = `${COMPANY_REGISTER_ROOT}/states/step4`;
const SUCCESS_PATH = `${COMPANY_REGISTER_ROOT}/states/success`;
const STATUS_PATH = `${COMPANY_REGISTER_ROOT}/status`;

const commonRoutes: Record<string, string> = {
  "بازگشت به ورود": "/auth",
  "بازگشت به صفحه اصلی": "/",
  "قوانین و مقررات": "/terms",
  "حریم خصوصی": "/privacy-policy",
};

const routesByPath: Record<string, Record<string, string>> = {
  [COMPANY_REGISTER_ROOT]: {
    ...commonRoutes,
    "ذخیره و ادامه": STEP2_PATH,
  },
  [STEP2_PATH]: {
    ...commonRoutes,
    "مرحله قبل": COMPANY_REGISTER_ROOT,
    "ذخیره و ادامه": STEP3_PATH,
  },
  [STEP3_PATH]: {
    ...commonRoutes,
    "مرحله قبل": STEP2_PATH,
    "ذخیره و ادامه": STEP4_PATH,
  },
  [STEP4_PATH]: {
    ...commonRoutes,
    "مرحله قبل": STEP3_PATH,
    "بازگشت و ویرایش": STEP3_PATH,
    "ارسال درخواست ثبت‌نام": SUCCESS_PATH,
  },
  [SUCCESS_PATH]: {
    ...commonRoutes,
    "پیگیری درخواست": STATUS_PATH,
  },
  [STATUS_PATH]: {
    "بازگشت به صفحه اصلی": "/",
    "ورود به سامانه": "/auth",
  },
};

function normalize(value: string | null | undefined) {
  return (value ?? "").replace(/\s+/g, " ").trim();
}

function activeRoutes() {
  return routesByPath[window.location.pathname] ?? null;
}

function findAction(target: HTMLElement, routes: Record<string, string>) {
  const root = target.closest<HTMLElement>(".main-container");
  if (!root) return null;

  let node: HTMLElement | null = target;
  while (node) {
    const label = normalize(node.textContent);
    if (routes[label]) return { node, label };
    if (node === root) break;
    node = node.parentElement;
  }

  return null;
}

function navigate(path: string) {
  if (window.location.pathname === path) return;
  window.location.assign(path);
}

function handleClick(event: MouseEvent) {
  const routes = activeRoutes();
  if (!routes) return;

  const target = event.target as HTMLElement | null;
  if (!target) return;

  const action = findAction(target, routes);
  if (!action) return;

  event.preventDefault();
  navigate(routes[action.label]);
}

function handleKeydown(event: KeyboardEvent) {
  if (event.key !== "Enter" && event.key !== " ") return;

  const routes = activeRoutes();
  if (!routes) return;

  const target = event.target as HTMLElement | null;
  if (!target) return;

  const action = findAction(target, routes);
  if (!action) return;

  event.preventDefault();
  navigate(routes[action.label]);
}

function applyPointerAffordance() {
  const routes = activeRoutes();
  if (!routes) return;

  document
    .querySelectorAll<HTMLElement>(
      ".main-container span, .main-container button, .main-container a, .main-container div",
    )
    .forEach((node) => {
      const label = normalize(node.textContent);
      if (!routes[label]) return;

      node.style.cursor = "pointer";
      if (node.tagName !== "BUTTON" && node.tagName !== "A") {
        node.setAttribute("role", "button");
        node.tabIndex = 0;
      }
    });
}

document.addEventListener("click", handleClick);
document.addEventListener("keydown", handleKeydown);

const observer = new MutationObserver(applyPointerAffordance);
observer.observe(document.documentElement, { childList: true, subtree: true });
window.addEventListener("load", applyPointerAffordance);
window.addEventListener("popstate", applyPointerAffordance);
window.setTimeout(applyPointerAffordance, 0);
