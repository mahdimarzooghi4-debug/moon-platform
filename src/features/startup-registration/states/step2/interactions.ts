const STEP2_PATH = "/register/startup/states/step2";

const routeActions: Record<string, string> = {
  "بازگشت به ورود": "/auth",
  "بازگشت به صفحه اصلی": "/",
  "مرحله قبل": "/register/startup",
  "ذخیره و ادامه": "/register/startup/states/step3",
  "قوانین و مقررات": "/terms",
  "حریم خصوصی": "/privacy-policy",
};

function isStep2Page() {
  return window.location.pathname === STEP2_PATH;
}

function normalize(value: string | null | undefined) {
  return (value ?? "").replace(/\s+/g, " ").trim();
}

function markStep2Actions() {
  if (!isStep2Page()) return;

  document
    .querySelectorAll<HTMLElement>(".main-container span, .main-container button, .main-container a")
    .forEach((node) => {
      const label = normalize(node.textContent);
      if (!routeActions[label]) return;

      node.dataset.mahStartupStep2Action = label;
      node.style.cursor = "pointer";
      if (node.tagName !== "BUTTON" && node.tagName !== "A") {
        node.setAttribute("role", "button");
        node.tabIndex = 0;
      }
    });
}

function navigateFor(node: HTMLElement) {
  const label = normalize(node.dataset.mahStartupStep2Action || node.textContent);
  const path = routeActions[label];
  if (!path || window.location.pathname === path) return;
  window.location.assign(path);
}

document.addEventListener("click", (event) => {
  if (!isStep2Page()) return;
  const target = event.target as HTMLElement | null;
  const action = target?.closest<HTMLElement>("[data-mah-startup-step2-action]");
  if (!action) return;
  event.preventDefault();
  navigateFor(action);
});

document.addEventListener("keydown", (event) => {
  if (!isStep2Page() || (event.key !== "Enter" && event.key !== " ")) return;
  const target = event.target as HTMLElement | null;
  const action = target?.closest<HTMLElement>("[data-mah-startup-step2-action]");
  if (!action) return;
  event.preventDefault();
  navigateFor(action);
});

window.addEventListener("load", markStep2Actions);
window.addEventListener("popstate", () => window.setTimeout(markStep2Actions, 0));
document.addEventListener("click", () => window.setTimeout(markStep2Actions, 0));
window.setTimeout(markStep2Actions, 0);
