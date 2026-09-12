const STARTUP_REGISTER_ROOT = "/register/startup";

const commonRoutes: Record<string, string> = {
  "بازگشت به ورود": "/auth",
  "بازگشت به صفحه اصلی": "/",
  "قوانین و مقررات": "/terms",
  "حریم خصوصی": "/privacy-policy",
};

const routesByPath: Record<string, Record<string, string>> = {
  [STARTUP_REGISTER_ROOT]: {
    "ذخیره و ادامه": "/register/startup/states/step2",
  },
  "/register/startup/states/step2": {
    "مرحله قبل": STARTUP_REGISTER_ROOT,
    "ذخیره و ادامه": "/register/startup/states/step3",
  },
  "/register/startup/states/step3": {
    "مرحله قبل": "/register/startup/states/step2",
    "ذخیره و ادامه": "/register/startup/states/step4",
  },
  "/register/startup/states/step4": {
    "بازگشت و ویرایش": "/register/startup/states/step3",
    "ارسال درخواست ثبت‌نام": "/register/startup/states/success",
  },
  "/register/startup/states/success": {
    "ورود به حساب کاربری": "/auth",
    "خروج از سامانه": "/",
    "پیگیری درخواست": "/registration/track",
    "بازگشت به صفحه اصلی": "/",
  },
};

function isStartupRegistrationFlow() {
  return window.location.pathname === STARTUP_REGISTER_ROOT ||
    window.location.pathname.startsWith(`${STARTUP_REGISTER_ROOT}/states/`);
}

function normalize(value: string | null | undefined) {
  return (value ?? "").replace(/\s+/g, " ").trim();
}

function currentRoutes() {
  return {
    ...commonRoutes,
    ...(routesByPath[window.location.pathname] ?? {}),
  };
}

function markActions() {
  if (!isStartupRegistrationFlow()) return;

  const routes = currentRoutes();
  document
    .querySelectorAll<HTMLElement>(".main-container span, .main-container button, .main-container a")
    .forEach((node) => {
      const label = normalize(node.textContent);
      if (!routes[label]) {
        delete node.dataset.mahStartupFlowAction;
        return;
      }

      node.dataset.mahStartupFlowAction = label;
      node.style.cursor = "pointer";
      if (node.tagName !== "BUTTON" && node.tagName !== "A") {
        node.setAttribute("role", "button");
        node.tabIndex = 0;
      }
    });
}

function navigateFor(node: HTMLElement) {
  const label = normalize(node.dataset.mahStartupFlowAction || node.textContent);
  const path = currentRoutes()[label];
  if (!path || window.location.pathname === path) return;
  window.location.assign(path);
}

document.addEventListener("click", (event) => {
  if (!isStartupRegistrationFlow()) return;
  const target = event.target as HTMLElement | null;
  const action = target?.closest<HTMLElement>("[data-mah-startup-flow-action]");
  if (!action) return;
  event.preventDefault();
  navigateFor(action);
});

document.addEventListener("keydown", (event) => {
  if (!isStartupRegistrationFlow() || (event.key !== "Enter" && event.key !== " ")) return;
  const target = event.target as HTMLElement | null;
  const action = target?.closest<HTMLElement>("[data-mah-startup-flow-action]");
  if (!action) return;
  event.preventDefault();
  navigateFor(action);
});

window.addEventListener("load", markActions);
window.addEventListener("popstate", () => window.setTimeout(markActions, 0));
document.addEventListener("click", () => window.setTimeout(markActions, 0));
window.setTimeout(markActions, 0);
