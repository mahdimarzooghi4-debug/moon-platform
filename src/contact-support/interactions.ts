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

function editableElement(form: HTMLElement, predicate: (text: string) => boolean) {
  return Array.from(form.querySelectorAll<HTMLElement>("span, p")).find((element) =>
    predicate(normalize(element.textContent)),
  );
}

function markEditableField(
  form: HTMLElement,
  key: string,
  placeholder: string,
  predicate: (text: string) => boolean,
  required = false,
) {
  if (form.querySelector<HTMLElement>(`[data-mah-support-field="${key}"]`)) return;

  const element = editableElement(form, predicate);
  if (!element) return;

  element.dataset.mahSupportField = key;
  element.dataset.placeholder = placeholder;
  if (required) element.dataset.required = "true";
  element.contentEditable = "true";
  element.spellcheck = false;
  element.setAttribute("role", "textbox");
  element.setAttribute("aria-label", placeholder);
  element.classList.add("mah-support-editable");
}

function markSupportFields() {
  const form = document.getElementById("mah-support-form");
  if (!(form instanceof HTMLElement)) return;

  markEditableField(form, "mobile", "شماره موبایل", (text) => text === "۰۹۱۲۳۴۵۶۷۸۹", true);
  markEditableField(form, "name", "نام و نام خانوادگی", (text) => text === "علیرضا محمدی", true);
  markEditableField(
    form,
    "title",
    "عنوان درخواست",
    (text) => text === "عدم دریافت پیامک پس از تراکنش",
    true,
  );
  markEditableField(form, "email", "ایمیل (اختیاری)", (text) => text === "example@mail.com");
  markEditableField(
    form,
    "description",
    "توضیحات درخواست",
    (text) => text.startsWith("مبلغ مشارکت به میزان ۳۰۰٬۰۰۰ تومان"),
    true,
  );
  markEditableField(form, "gateway", "شماره پیگیری درگاه", (text) => text === "۸۳۷۴۹۲۱۰۵۶");
  markEditableField(form, "card", "۴ رقم آخر کارت", (text) => text === "۱۲۳۴");
  markEditableField(form, "amount", "مبلغ پرداخت شده", (text) => text === "۳۰۰,۰۰۰ تومان");
  markEditableField(
    form,
    "payment-time",
    "تاریخ و ساعت تقریبی",
    (text) => text === "۲۴ مرداد ۱۴۰۵ - ساعت ۱۴:۳۲",
  );
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
      return;
    }

    if (label === "پاک‌کردن فرم") {
      element.dataset.mahContactFormAction = "clear";
      element.setAttribute("role", "button");
      element.tabIndex = 0;
      return;
    }

    if (label === "ارسال درخواست") {
      element.dataset.mahContactFormAction = "submit";
      element.setAttribute("role", "button");
      element.tabIndex = 0;
    }
  });
}

function removeFormStatus(form: HTMLElement) {
  form.querySelector(".mah-support-form-status")?.remove();
}

function showFormStatus(form: HTMLElement, type: "success" | "error", text: string) {
  removeFormStatus(form);
  const status = document.createElement("div");
  status.className = `mah-support-form-status mah-support-form-status--${type}`;
  status.setAttribute("role", type === "error" ? "alert" : "status");
  status.textContent = text;

  const fieldsContainer = form.children.item(1);
  if (fieldsContainer) form.insertBefore(status, fieldsContainer);
  else form.appendChild(status);
}

function clearSupportForm() {
  const form = document.getElementById("mah-support-form");
  if (!(form instanceof HTMLElement)) return;

  form.querySelectorAll<HTMLElement>("[data-mah-support-field]").forEach((field) => {
    field.textContent = "";
  });

  const uploadedFile = Array.from(form.querySelectorAll<HTMLElement>("span, p, div")).find((element) =>
    normalize(element.textContent).includes("receipt_1405.jpg"),
  );
  if (uploadedFile) {
    let row: HTMLElement | null = uploadedFile;
    while (row && row !== form) {
      const className = typeof row.className === "string" ? row.className : "";
      if (className.includes("justify-between") && className.includes("rounded-[8px]")) {
        row.style.display = "none";
        break;
      }
      row = row.parentElement;
    }
  }

  removeFormStatus(form);
  form.querySelector<HTMLElement>("[data-mah-support-field]")?.focus();
}

function supportPayload(form: HTMLElement) {
  return Object.fromEntries(
    Array.from(form.querySelectorAll<HTMLElement>("[data-mah-support-field]")).map((field) => [
      field.dataset.mahSupportField ?? "field",
      normalize(field.textContent),
    ]),
  );
}

function submitSupportForm() {
  const form = document.getElementById("mah-support-form");
  if (!(form instanceof HTMLElement)) return;

  const requiredFields = Array.from(
    form.querySelectorAll<HTMLElement>('[data-mah-support-field][data-required="true"]'),
  );
  const missing = requiredFields.find((field) => !normalize(field.textContent));
  if (missing) {
    showFormStatus(form, "error", "لطفاً فیلدهای ضروری فرم را تکمیل کنید.");
    missing.focus();
    return;
  }

  const trackingCode = `MAH-${Date.now().toString().slice(-8)}`;
  const request = {
    trackingCode,
    createdAt: new Date().toISOString(),
    ...supportPayload(form),
  };

  try {
    const current = JSON.parse(localStorage.getItem("mah-support-requests") ?? "[]");
    const requests = Array.isArray(current) ? current : [];
    requests.unshift(request);
    localStorage.setItem("mah-support-requests", JSON.stringify(requests.slice(0, 20)));
  } catch {
    // Continue to the confirmation page when local storage is unavailable.
  }

  window.location.assign(`/contact?submitted=${encodeURIComponent(trackingCode)}`);
}

function enhanceContactPage() {
  const root = getContactRoot();
  if (!root) return;

  root.classList.add("mah-contact-page");
  markSupportForm(root);
  markSupportFields();
  markContactActions(root);
  void repairFigmaSvgAssets(root);
}

function activate(element: HTMLElement) {
  const formAction = element.dataset.mahContactFormAction;
  if (formAction === "clear") {
    clearSupportForm();
    return;
  }
  if (formAction === "submit") {
    submitSupportForm();
    return;
  }

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
    "[data-mah-contact-href], [data-mah-contact-external], [data-mah-contact-scroll], [data-mah-contact-form-action]",
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
    !target.dataset.mahContactScroll &&
    !target.dataset.mahContactFormAction
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
