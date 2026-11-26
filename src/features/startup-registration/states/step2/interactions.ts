import { registrationDraft, registrationFiles } from "../../draft";
import { submitStartupApplication } from "../../api";
import { normalizeIranMobile } from "../../../../auth/oidc";

let sending = false;

function showRegistrationError(message: string) {
  let node = document.querySelector<HTMLElement>("[data-registration-error]");
  if (!node) {
    node = document.createElement("p");
    node.dataset.registrationError = "";
    node.setAttribute("role", "alert");
    node.className = "mx-auto w-fit px-4 py-3 text-red-700";
    document.querySelector(".main-container")?.prepend(node);
  }
  node.textContent = message;
  node.scrollIntoView({ block: "nearest" });
}

const STARTUP_REGISTER_ROOT = "/register/startup";
const STEP2_PATH = `${STARTUP_REGISTER_ROOT}/states/step2`;
const STEP3_PATH = `${STARTUP_REGISTER_ROOT}/states/step3`;
const STEP4_PATH = `${STARTUP_REGISTER_ROOT}/states/step4`;
const SUCCESS_PATH = `${STARTUP_REGISTER_ROOT}/states/success`;
const TEAM_MEMBER_PATH = `${STEP2_PATH}/team-member/new`;

const commonRoutes: Record<string, string> = {
  "بازگشت به ورود": "/auth",
  "بازگشت به صفحه اصلی": "/",
  "قوانین و مقررات": "/terms",
  "حریم خصوصی": "/privacy-policy",
};

const routesByPath: Record<string, Record<string, string>> = {
  [STARTUP_REGISTER_ROOT]: {
    ...commonRoutes,
    "ذخیره و ادامه": STEP2_PATH,
  },
  [STEP2_PATH]: {
    ...commonRoutes,
    "مرحله قبل": STARTUP_REGISTER_ROOT,
    "ذخیره و ادامه": STEP3_PATH,
    "+ افزودن عضو جدید به تیم": TEAM_MEMBER_PATH,
    "افزودن عضو جدید به تیم": TEAM_MEMBER_PATH,
  },
  [STEP3_PATH]: {
    ...commonRoutes,
    "مرحله قبل": STEP2_PATH,
    "ذخیره و ادامه": STEP4_PATH,
  },
  [STEP4_PATH]: {
    ...commonRoutes,
    "بازگشت و ویرایش": STEP3_PATH,
    "ارسال درخواست ثبت‌نام": SUCCESS_PATH,
  },
  [SUCCESS_PATH]: {
    ...commonRoutes,
    "ورود به حساب کاربری": "/auth",
    "خروج از سامانه": "/",
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
  if (path.startsWith(STARTUP_REGISTER_ROOT)) {
    window.history.pushState(null, "", path);
    window.dispatchEvent(new PopStateEvent("popstate"));
    window.scrollTo(0, 0);
    return;
  }
  window.location.assign(path);
}

async function continueRegistration(label: string, path: string) {
  if (label === "ذخیره و ادامه") {
    for (const field of document.querySelectorAll<HTMLInputElement | HTMLTextAreaElement>("[data-registration-field]")) {
      if (!field.reportValidity()) return;
    }
    if (path === STEP4_PATH && !registrationFiles.pitchDeck) {
      showRegistrationError("فایل معرفی استارتاپ را انتخاب کنید.");
      return;
    }
  }
  if (label === "ارسال درخواست ثبت‌نام") {
    if (sending) return;
    if ([...document.querySelectorAll<HTMLInputElement>("[data-registration-consent]")].some(field => !field.checked)) {
      showRegistrationError("همهٔ تأییدیه‌ها را بررسی و علامت بزنید.");
      return;
    }
    const { pitchDeck } = registrationFiles;
    if (!pitchDeck || pitchDeck.size > 15 * 1024 * 1024 || !registrationDraft.name || !registrationDraft.team || !registrationDraft.audience) {
      showRegistrationError("مراحل قبلی را تکمیل و فایل PDF حداکثر ۱۵ مگابایتی انتخاب کنید.");
      return;
    }
    const form = new FormData();
    for (const key of ["name", "email", "product", "description", "team", "audience"]) {
      form.set(key, registrationDraft[key] ?? "");
    }
    form.set("mobile", normalizeIranMobile(registrationDraft.mobile ?? ""));
    form.set("contactName", [registrationDraft.firstName, registrationDraft.lastName].join(" ").trim());
    form.set("pitchDeck", pitchDeck);
    sending = true;
    try {
      const result = await submitStartupApplication(form);
      sessionStorage.setItem("moon-startup-tracking-code", result.trackingCode);
      for (const key of Object.keys(registrationDraft)) delete registrationDraft[key];
      delete registrationFiles.pitchDeck;
    } catch (error) {
      showRegistrationError(error instanceof Error ? error.message : "ارسال انجام نشد.");
      return;
    } finally {
      sending = false;
    }
  }
  navigate(path);
}

function handleClick(event: MouseEvent) {
  const routes = activeRoutes();
  if (!routes) return;

  const target = event.target as HTMLElement | null;
  if (!target) return;

  const action = findAction(target, routes);
  if (!action) return;

  event.preventDefault();
  void continueRegistration(action.label, routes[action.label]);
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
  void continueRegistration(action.label, routes[action.label]);
}

function applyPointerAffordance() {
  const routes = activeRoutes();
  if (!routes) return;

  document
    .querySelectorAll<HTMLElement>(".main-container span, .main-container button, .main-container a, .main-container div")
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
