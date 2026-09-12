const CHECKOUT_PATH = /^\/projects\/([^/]+)\/participate\/?$/;

type CheckoutState = {
  projectId: string;
  amount: number;
  phoneVerified: boolean;
  acceptedTerms: boolean;
  acceptedPaymentNotice: boolean;
};

const state: CheckoutState = {
  projectId: "",
  amount: 5_000_000,
  phoneVerified: true,
  acceptedTerms: true,
  acceptedPaymentNotice: true,
};

function toLatinDigits(value: string) {
  return value
    .replace(/[۰-۹]/g, (digit) => String("۰۱۲۳۴۵۶۷۸۹".indexOf(digit)))
    .replace(/[٠-٩]/g, (digit) => String("٠١٢٣٤٥٦٧٨٩".indexOf(digit)));
}

function parseAmount(raw: string | null) {
  if (!raw) return 5_000_000;
  const numeric = Number(toLatinDigits(raw).replace(/[^0-9]/g, ""));
  if (!Number.isFinite(numeric) || numeric <= 0) return 5_000_000;

  // Project-details quick choices historically passed just the visible number.
  if (numeric === 500) return 500_000;
  if (numeric > 0 && numeric <= 10) return numeric * 1_000_000;
  return numeric;
}

function formatAmount(value: number) {
  return `${new Intl.NumberFormat("fa-IR").format(value)} تومان`;
}

function amountInWords(value: number) {
  const known: Record<number, string> = {
    500000: "پانصد هزار تومان",
    1000000: "یک میلیون تومان",
    5000000: "پنج میلیون تومان",
    10000000: "ده میلیون تومان",
  };
  return known[value] ?? formatAmount(value);
}

function checkoutMatch() {
  return window.location.pathname.match(CHECKOUT_PATH);
}

function checkoutRoot() {
  const match = checkoutMatch();
  if (!match) return null;
  const params = new URLSearchParams(window.location.search);
  if ((params.get("type") ?? "individual") !== "individual") return null;

  state.projectId = match[1];
  state.amount = parseAmount(params.get("amount"));

  return document.querySelector<HTMLElement>(".main-container");
}

function byZ(root: HTMLElement, z: number) {
  return root.querySelector<HTMLElement>(`[class~="z-[${z}]" ]`) ??
    root.querySelector<HTMLElement>(`[class~="z-[${z}]"]`);
}

function setText(root: HTMLElement, z: number, value: string) {
  const element = byZ(root, z);
  if (element && element.textContent !== value) element.textContent = value;
}

function markHref(element: HTMLElement | null, href: string, label: string) {
  if (!element) return;
  element.dataset.mahCheckoutHref = href;
  element.setAttribute("role", "link");
  element.setAttribute("aria-label", label);
  element.tabIndex = 0;
  element.style.cursor = "pointer";
}

function markAction(element: HTMLElement | null, action: string, label: string) {
  if (!element) return;
  element.dataset.mahCheckoutAction = action;
  element.setAttribute("role", "button");
  element.setAttribute("aria-label", label);
  element.tabIndex = 0;
  element.style.cursor = "pointer";
}

function projectPath() {
  return `/projects/${state.projectId}`;
}

function companyParticipationPath() {
  return `/panel/company/projects/${state.projectId}/participate`;
}

function paymentPath() {
  const params = new URLSearchParams({
    type: "individual",
    amount: String(state.amount),
  });
  return `/projects/${state.projectId}/participate/redirecting?${params.toString()}`;
}

function ensureInput(
  root: HTMLElement,
  z: number,
  kind: "phone" | "name",
  initialValue: string,
  placeholder = "",
) {
  const existing = root.querySelector<HTMLInputElement>(`input[data-mah-checkout-input="${kind}"]`);
  if (existing) return existing;

  const target = byZ(root, z);
  if (!target) return null;

  const input = document.createElement("input");
  input.dataset.mahCheckoutInput = kind;
  input.type = "text";
  input.value = initialValue;
  input.placeholder = placeholder;
  input.className = target.className;
  input.style.width = "100%";
  input.style.minWidth = "0";
  input.style.height = "22px";
  input.style.padding = "0";
  input.style.margin = "0";
  input.style.border = "0";
  input.style.background = "transparent";
  input.style.direction = "rtl";
  input.style.textAlign = "right";
  input.style.color = kind === "name" ? "#17324d" : "#17324d";
  input.style.fontSize = "14px";
  input.style.lineHeight = "22px";
  input.style.outline = "none";
  if (kind === "phone") {
    input.inputMode = "numeric";
    input.maxLength = 11;
  }

  target.replaceWith(input);
  return input;
}

function ensureOtpInputs(root: HTMLElement) {
  const boxes = [116, 118, 120, 122, 124, 126];
  const initial = ["۵", "۲", "", "", "", ""];

  boxes.forEach((z, index) => {
    const box = byZ(root, z);
    if (!box || box.querySelector("input[data-mah-otp-index]")) return;

    box.textContent = "";
    const input = document.createElement("input");
    input.dataset.mahOtpIndex = String(index);
    input.type = "text";
    input.inputMode = "numeric";
    input.maxLength = 1;
    input.value = initial[index];
    input.setAttribute("aria-label", `رقم ${index + 1} کد تأیید`);
    input.style.width = "100%";
    input.style.height = "100%";
    input.style.padding = "0";
    input.style.border = "0";
    input.style.background = "transparent";
    input.style.outline = "0";
    input.style.textAlign = "center";
    input.style.fontFamily = "Vazirmatn, sans-serif";
    input.style.fontSize = "18px";
    input.style.fontWeight = "700";
    input.style.color = "#17324d";

    input.addEventListener("input", () => {
      const raw = toLatinDigits(input.value).replace(/\D/g, "").slice(-1);
      input.value = raw ? "۰۱۲۳۴۵۶۷۸۹"[Number(raw)] : "";
      if (input.value) {
        root.querySelector<HTMLInputElement>(`input[data-mah-otp-index="${index + 1}"]`)?.focus();
      }
    });

    input.addEventListener("keydown", (event) => {
      if (event.key === "Backspace" && !input.value && index > 0) {
        root.querySelector<HTMLInputElement>(`input[data-mah-otp-index="${index - 1}"]`)?.focus();
      }
    });

    box.appendChild(input);
  });
}

function otpValue(root: HTMLElement) {
  return [...root.querySelectorAll<HTMLInputElement>("input[data-mah-otp-index]")]
    .sort((a, b) => Number(a.dataset.mahOtpIndex) - Number(b.dataset.mahOtpIndex))
    .map((input) => input.value)
    .join("");
}

function updateVerificationBanner(root: HTMLElement) {
  const banner = byZ(root, 143);
  const label = byZ(root, 146);
  if (!banner || !label) return;

  if (state.phoneVerified) {
    banner.style.display = "flex";
    banner.style.background = "#eaf8f0";
    label.textContent = "شماره موبایل تأیید شد";
    label.style.color = "#159455";
  } else {
    banner.style.display = "none";
  }
}

function setCheckbox(root: HTMLElement, z: number, checked: boolean) {
  const box = byZ(root, z);
  if (!box) return;
  box.dataset.mahChecked = checked ? "true" : "false";
  box.style.background = checked ? "#2094e3" : "#fff";
  box.style.border = checked ? "1px solid #2094e3" : "1px solid #e4ebf1";
  const icon = box.firstElementChild as HTMLElement | null;
  if (icon) icon.style.visibility = checked ? "visible" : "hidden";
}

function addAddress(root: HTMLElement) {
  const contact = byZ(root, 193);
  const socials = byZ(root, 197);
  if (!contact || !socials || contact.querySelector("[data-mah-checkout-address]")) return;

  const address = document.createElement("span");
  address.dataset.mahCheckoutAddress = "1";
  address.textContent = "آدرس: تهران، خیابان انقلاب، خیابان رازی، کوچه شهبازیان، پلاک ۲۲";
  address.style.width = "220px";
  address.style.fontFamily = "Vazirmatn, sans-serif";
  address.style.fontSize = "12px";
  address.style.fontWeight = "400";
  address.style.lineHeight = "19px";
  address.style.color = "#e4ebf1";
  address.style.direction = "rtl";
  address.style.textAlign = "right";
  address.style.whiteSpace = "normal";
  contact.insertBefore(address, socials);
  contact.style.height = "auto";
}

function applyContent(root: HTMLElement) {
  setText(root, 63, formatAmount(state.amount));
  setText(root, 70, formatAmount(state.amount));
  setText(root, 159, amountInWords(state.amount));
  setText(root, 160, formatAmount(state.amount));
  setText(root, 187, `ادامه و پرداخت ${formatAmount(state.amount)}`);

  setText(root, 195, "تلفن: ۰۲۱-۶۶۴۸۵۳۷۴");
  setText(root, 196, "ایمیل: info@mahcsr.ir");
  addAddress(root);

  const telegram = byZ(root, 199);
  const eitaa = byZ(root, 201);
  if (telegram) telegram.style.backgroundImage = "url('/assets/codia/projects-telegram.svg')";
  if (eitaa) eitaa.style.backgroundImage = "url('/assets/codia/projects-eitaa.svg')";

  const payButton = byZ(root, 184);
  if (payButton) {
    payButton.style.backgroundImage = "linear-gradient(4.13deg, rgb(32, 148, 227) 25%, rgb(20, 184, 166) 75%)";
    payButton.style.cursor = "pointer";
  }
}

function bindActions(root: HTMLElement) {
  markHref(byZ(root, 2), projectPath(), "انصراف و بازگشت به پروژه");
  markHref(byZ(root, 58), projectPath(), "مشاهده جزئیات کامل پروژه");
  markHref(byZ(root, 103), companyParticipationPath(), "مشارکت سازمانی");
  markHref(byZ(root, 156), projectPath(), "ویرایش مبلغ");
  markHref(byZ(root, 171), "/terms", "قوانین و مقررات");
  markHref(byZ(root, 180), "/privacy-policy", "سیاست حریم خصوصی");
  markHref(byZ(root, 189), projectPath(), "بازگشت به پروژه");

  markAction(byZ(root, 131), "verify-phone", "تأیید شماره موبایل");
  markAction(byZ(root, 141), "resend-otp", "دریافت کد تأیید جدید");
  markAction(byZ(root, 144), "change-phone", "تغییر شماره موبایل");
  markAction(byZ(root, 172), "toggle-terms", "پذیرش قوانین");
  markAction(byZ(root, 176), "toggle-payment", "تأیید پرداخت رسمی");
  markAction(byZ(root, 184), "continue-payment", "ادامه و پرداخت");

  markHref(byZ(root, 204), "/terms", "قوانین و مقررات");
  markHref(byZ(root, 205), "/privacy-policy", "حریم خصوصی");
  markHref(byZ(root, 208), "/contact", "تماس با ما");
  markHref(byZ(root, 209), "/faq", "سؤالات متداول");
  markHref(byZ(root, 210), "/participation/track", "پیگیری مشارکت");
  markHref(byZ(root, 213), "/projects", "پروژه‌ها");
  markHref(byZ(root, 214), "/companies", "برای شرکت‌ها");
  markHref(byZ(root, 215), "/how-it-works", "نحوه مشارکت");
  markHref(byZ(root, 216), "/register/startup", "ثبت‌نام استارتاپ");
  markHref(byZ(root, 217), "/news", "اخبار و رویدادها");

  const phone = byZ(root, 195);
  const email = byZ(root, 196);
  if (phone) markHref(phone, "tel:02166485374", "تماس تلفنی");
  if (email) markHref(email, "mailto:info@mahcsr.ir", "ارسال ایمیل");
}

function enhanceCheckout() {
  const root = checkoutRoot();
  if (!root) return;

  applyContent(root);
  bindActions(root);
  ensureInput(root, 139, "phone", "۰۹۱۲۳۴۵۶۷۸۹");
  ensureInput(root, 153, "name", "", "مثلاً مریم احمدی");
  ensureOtpInputs(root);
  setCheckbox(root, 172, state.acceptedTerms);
  setCheckbox(root, 176, state.acceptedPaymentNotice);
  updateVerificationBanner(root);
}

function handleAction(action: string, root: HTMLElement) {
  switch (action) {
    case "verify-phone": {
      const otp = otpValue(root);
      if (otp.length !== 6) {
        root.querySelectorAll<HTMLElement>("[data-mah-otp-index]").forEach((input) => {
          input.parentElement!.style.borderColor = "#dc2626";
        });
        return;
      }
      state.phoneVerified = true;
      root.querySelectorAll<HTMLElement>("[data-mah-otp-index]").forEach((input) => {
        input.parentElement!.style.borderColor = "#e4ebf1";
      });
      updateVerificationBanner(root);
      break;
    }
    case "resend-otp": {
      state.phoneVerified = false;
      root.querySelectorAll<HTMLInputElement>("input[data-mah-otp-index]").forEach((input) => {
        input.value = "";
        if (input.parentElement) input.parentElement.style.borderColor = "#e4ebf1";
      });
      setText(root, 130, "ارسال مجدد کد تا ۰۱:۲۹");
      updateVerificationBanner(root);
      root.querySelector<HTMLInputElement>('input[data-mah-otp-index="0"]')?.focus();
      break;
    }
    case "change-phone": {
      state.phoneVerified = false;
      updateVerificationBanner(root);
      root.querySelector<HTMLInputElement>('input[data-mah-checkout-input="phone"]')?.focus();
      break;
    }
    case "toggle-terms": {
      state.acceptedTerms = !state.acceptedTerms;
      setCheckbox(root, 172, state.acceptedTerms);
      break;
    }
    case "toggle-payment": {
      state.acceptedPaymentNotice = !state.acceptedPaymentNotice;
      setCheckbox(root, 176, state.acceptedPaymentNotice);
      break;
    }
    case "continue-payment": {
      if (!state.phoneVerified) {
        byZ(root, 131)?.focus();
        return;
      }
      if (!state.acceptedTerms || !state.acceptedPaymentNotice) return;
      window.location.assign(paymentPath());
      break;
    }
  }
}

document.addEventListener("click", (event) => {
  const target = event.target;
  if (!(target instanceof Element)) return;
  const root = checkoutRoot();
  if (!root || !target.closest(".main-container")) return;

  const actionElement = target.closest<HTMLElement>("[data-mah-checkout-action]");
  if (actionElement) {
    event.preventDefault();
    event.stopPropagation();
    handleAction(actionElement.dataset.mahCheckoutAction!, root);
    return;
  }

  const link = target.closest<HTMLElement>("[data-mah-checkout-href]");
  if (link) {
    event.preventDefault();
    event.stopPropagation();
    window.location.assign(link.dataset.mahCheckoutHref!);
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key !== "Enter" && event.key !== " ") return;
  const target = event.target;
  if (!(target instanceof HTMLElement)) return;
  const root = checkoutRoot();
  if (!root) return;

  if (target.dataset.mahCheckoutAction) {
    event.preventDefault();
    handleAction(target.dataset.mahCheckoutAction, root);
  } else if (target.dataset.mahCheckoutHref) {
    event.preventDefault();
    window.location.assign(target.dataset.mahCheckoutHref);
  }
});

const checkoutObserver = new MutationObserver(() => enhanceCheckout());
checkoutObserver.observe(document.documentElement, { childList: true, subtree: true });
enhanceCheckout();
