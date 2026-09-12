const STARTUP_REGISTER_PREFIX = "/register/startup";

const routeActions: Record<string, string> = {
  "بازگشت به ورود": "/auth",
  "بازگشت به صفحه اصلی": "/",
  "ذخیره و ادامه": "/register/startup/states/step2",
  "قوانین و مقررات": "/terms",
  "حریم خصوصی": "/privacy-policy",
};

const interactiveLabels = new Set([
  ...Object.keys(routeActions),
  "بارگذاری لوگو",
  "دریافت کد تأیید",
]);

function isStartupRegistrationPage() {
  return window.location.pathname === STARTUP_REGISTER_PREFIX;
}

function normalize(value: string | null | undefined) {
  return (value ?? "").replace(/\s+/g, " ").trim();
}

function markActions() {
  if (!isStartupRegistrationPage()) return;

  document.querySelectorAll<HTMLElement>(".main-container span, .main-container button, .main-container a").forEach((node) => {
    const label = normalize(node.textContent);
    if (!interactiveLabels.has(label)) return;

    node.dataset.mahRegisterAction = label;
    if (node.tagName !== "BUTTON" && node.tagName !== "A") {
      node.setAttribute("role", "button");
      node.tabIndex = 0;
    }
  });
}

function navigate(path: string) {
  if (window.location.pathname === path) return;
  window.location.assign(path);
}

function openLogoPicker(actionNode: HTMLElement) {
  const picker = document.createElement("input");
  picker.type = "file";
  picker.accept = ".png,.jpg,.jpeg,.svg,image/png,image/jpeg,image/svg+xml";

  picker.addEventListener("change", () => {
    const file = picker.files?.[0];
    if (!file) return;

    if (file.size > 5 * 1024 * 1024) {
      window.alert("حداکثر حجم لوگو ۵ مگابایت است.");
      return;
    }

    const allowed = ["image/png", "image/jpeg", "image/svg+xml"];
    if (file.type && !allowed.includes(file.type)) {
      window.alert("فرمت لوگو باید PNG، JPG یا SVG باشد.");
      return;
    }

    const logoLabel = Array.from(document.querySelectorAll<HTMLElement>(".main-container span"))
      .find((node) => normalize(node.textContent) === "لوگو");

    const preview = logoLabel?.parentElement;
    if (preview) {
      const previous = preview.querySelector("img[data-mah-logo-preview]");
      previous?.remove();
      logoLabel.style.display = "none";

      const img = document.createElement("img");
      img.dataset.mahLogoPreview = "true";
      img.alt = "پیش‌نمایش لوگوی استارتاپ";
      img.src = URL.createObjectURL(file);
      img.style.width = "100%";
      img.style.height = "100%";
      img.style.objectFit = "cover";
      img.style.borderRadius = "999px";
      preview.appendChild(img);
    }

    actionNode.textContent = "تغییر لوگو";
  }, { once: true });

  picker.click();
}

function handleAction(actionNode: HTMLElement, label: string) {
  const route = routeActions[label];
  if (route) {
    navigate(route);
    return;
  }

  if (label === "بارگذاری لوگو" || label === "تغییر لوگو") {
    openLogoPicker(actionNode);
    return;
  }

  if (label === "دریافت کد تأیید") {
    window.alert("ارسال کد تأیید هنوز به سرویس پیامک Backend متصل نشده است.");
  }
}

document.addEventListener("click", (event) => {
  if (!isStartupRegistrationPage()) return;
  const target = event.target as HTMLElement | null;
  const actionNode = target?.closest<HTMLElement>("[data-mah-register-action]");
  if (!actionNode) return;

  const label = normalize(actionNode.dataset.mahRegisterAction || actionNode.textContent);
  event.preventDefault();
  handleAction(actionNode, label);
});

document.addEventListener("keydown", (event) => {
  if (!isStartupRegistrationPage()) return;
  if (event.key !== "Enter" && event.key !== " ") return;

  const target = event.target as HTMLElement | null;
  const actionNode = target?.closest<HTMLElement>("[data-mah-register-action]");
  if (!actionNode) return;

  event.preventDefault();
  const label = normalize(actionNode.dataset.mahRegisterAction || actionNode.textContent);
  handleAction(actionNode, label);
});

window.addEventListener("load", markActions);
window.addEventListener("popstate", () => window.setTimeout(markActions, 0));
document.addEventListener("click", () => window.setTimeout(markActions, 0));
window.setTimeout(markActions, 0);
