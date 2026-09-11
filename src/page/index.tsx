import React, { useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";
import {
  beginLogin,
  isValidIranMobile,
  normalizeIranMobile,
  type AccountType,
} from "../auth/oidc";
import "./index.css";

const IMG = {
  logoIcon: "/assets/image_ae1865f7-c201-457c-b7c6-cb0573e56337.png",
  logoText: "/assets/image_ca277b70-8bb4-4096-9bc1-ea6881a35524.png",
  backIcon: "/assets/image_cd1430e5-409a-40f6-a742-c82761e81fa7.png",
  phoneFlag: "/assets/image_bcf4aaa2-a2ce-459b-85c8-e1b5f6395009.png",
  otpIcon: "/assets/image_fd57a38b-06b3-4cb8-ab22-2e4701d4b6ab.png",
  companyIcon: "/assets/image_f95f66f0-8705-40ba-ae7c-412f53c3f831.png",
  startupIcon: "/assets/image_4f6087ed-2d7c-4200-b9de-09d5fd3eca2b.png",
  internalIcon: "/assets/image_d6014067-da87-4c2d-bbc3-6c6943b4dabc.png",
};

const CARDS: { id: AccountType; title: string; desc: string; icon: string }[] = [
  {
    id: "company",
    title: "شرکت‌ها و سازمان‌ها",
    desc: "مدیریت مشارکت‌های سازمانی، گزارش مالی و گواهی ماده ۱۷۲",
    icon: IMG.companyIcon,
  },
  {
    id: "startup",
    title: "استارتاپ‌ها",
    desc: "ثبت پروژه، پیگیری ارزیابی، KPI و تأمین مالی",
    icon: IMG.startupIcon,
  },
  {
    id: "internal",
    title: "کاربران داخلی سامانه",
    desc: "خانه خلاق، مدیر ماه، مدیر مالی، مدیر صندوق و کمیته امداد",
    icon: IMG.internalIcon,
  },
];

function accountTypeForReturnTo(returnTo: string | null): AccountType | null {
  if (!returnTo) return null;
  if (returnTo.startsWith("/panel/startup")) return "startup";
  if (returnTo.startsWith("/panel/company")) return "company";
  if (returnTo.startsWith("/panel/")) return "internal";
  return null;
}

const ERROR_MESSAGES: Record<string, string> = {
  forbidden: "این حساب اجازه دسترسی به پنل درخواستی را ندارد.",
  callback: "ورود کامل نشد. دوباره تلاش کنید.",
  "no-panel-access": "برای این حساب هنوز دسترسی به پنلی تعریف نشده است.",
};

export default function Main() {
  const [searchParams] = useSearchParams();
  const returnTo = searchParams.get("returnTo");
  const error = searchParams.get("error");
  const suggestedType = useMemo(() => accountTypeForReturnTo(returnTo), [returnTo]);
  const [selected, setSelected] = useState<AccountType | null>(suggestedType);
  const [phone, setPhone] = useState("");
  const [busy, setBusy] = useState(false);

  const normalizedPhone = normalizeIranMobile(phone);
  const canSubmit = Boolean(selected && isValidIranMobile(normalizedPhone) && !busy);

  async function handleLogin() {
    if (!selected || !isValidIranMobile(normalizedPhone) || busy) return;
    setBusy(true);
    try {
      await beginLogin({
        accountType: selected,
        mobile: normalizedPhone,
        returnTo: returnTo ?? undefined,
      });
    } catch {
      setBusy(false);
    }
  }

  return (
    <div
      className="main-container min-h-screen flex flex-col bg-[#F6F9FB]"
      dir="rtl"
      style={{ fontFamily: "'Vazirmatn', sans-serif" }}
    >
      <header className="flex items-center justify-between h-[80px] px-[120px] bg-white border-b border-[#E4EBF1] shrink-0">
        <div className="flex items-center gap-3">
          <div className="flex flex-col items-end gap-0.5">
            <img src={IMG.logoText} alt="ماه" className="h-8 object-contain" />
            <span className="text-[10px] text-[#5781AD] leading-tight">مسئولیت اجتماعی هوشمند</span>
          </div>
          <img src={IMG.logoIcon} alt="" className="w-[42px] h-[41px] object-contain" />
        </div>

        <button
          type="button"
          onClick={() => window.location.assign("/")}
          className="flex items-center gap-2 text-[#4D5A6D] hover:opacity-80 transition-opacity cursor-pointer bg-transparent border-none"
        >
          <img src={IMG.backIcon} alt="" className="w-[13px] h-[12px]" />
          <span className="text-[16px] font-medium">بازگشت به صفحه اصلی</span>
        </button>
      </header>

      <main className="relative flex-1 flex items-center justify-center py-12">
        <div className="relative z-10 w-[780px] bg-white border border-[#E4EBF1] rounded-[20px] p-8 flex flex-col gap-6">
          <div className="flex items-center justify-between gap-3">
            <div className="flex flex-col items-end gap-1.5">
              <h1 className="text-[24px] font-bold text-[#1A202C] leading-tight">
                ورود به سامانه ماه
              </h1>
              <p className="text-[14px] font-medium text-[#8A97A9]">
                نوع حساب خود را انتخاب کنید و با شماره موبایل وارد شوید.
              </p>
            </div>
            <div className="flex items-center gap-1.5 bg-[#EAF8F0] rounded-[8px] px-2.5 py-1">
              <span className="text-[11px] text-[#159455] font-semibold">
                ورود امن با کد یک‌بار مصرف
              </span>
              <img src={IMG.otpIcon} alt="" className="w-[14px] h-[16px] object-contain" />
            </div>
          </div>

          <div className="grid grid-cols-3 gap-4">
            {CARDS.map((card) => {
              const isActive = selected === card.id;
              return (
                <button
                  key={card.id}
                  type="button"
                  onClick={() => setSelected(card.id)}
                  className={[
                    "h-[180px] flex flex-col gap-3 p-[18px] rounded-[14px] text-right transition-all cursor-pointer border",
                    isActive
                      ? "bg-[#F6FBFE] border-[#2194E3]"
                      : "bg-white border-[#E4EBF1] hover:border-[#B0C8E8]",
                  ].join(" ")}
                >
                  <div className="flex items-center justify-between">
                    <div
                      className={[
                        "w-[18px] h-[18px] rounded-full",
                        isActive
                          ? "border-4 border-[#2194E3] bg-white"
                          : "border border-[#CBD5E1] bg-white",
                      ].join(" ")}
                    />
                    <div
                      className={[
                        "w-10 h-10 rounded-[8px] flex items-center justify-center",
                        isActive ? "bg-[rgba(32,148,227,0.1)]" : "bg-[#F7FAFC]",
                      ].join(" ")}
                    >
                      <img src={card.icon} alt="" className="w-6 h-6 object-contain" />
                    </div>
                  </div>
                  <span
                    className={[
                      "text-[15px] font-bold",
                      isActive ? "text-[#2094E3]" : "text-[#2E343F]",
                    ].join(" ")}
                  >
                    {card.title}
                  </span>
                  <span className="text-[12px] text-[#718096] leading-5">{card.desc}</span>
                </button>
              );
            })}
          </div>

          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-2">
              <label htmlFor="moon-login-mobile" className="text-[14px] font-semibold text-[#454E5D]">
                شماره موبایل
              </label>
              <div className="flex items-center gap-2 h-[48px] px-4 bg-white rounded-[12px] border border-[#CBD5E1] focus-within:border-[#2194E3]">
                <input
                  id="moon-login-mobile"
                  type="tel"
                  inputMode="numeric"
                  autoComplete="tel"
                  dir="ltr"
                  value={phone}
                  onChange={(event) => setPhone(event.target.value)}
                  onKeyDown={(event) => {
                    if (event.key === "Enter") void handleLogin();
                  }}
                  placeholder="09121234567"
                  className="text-[14px] text-[#2E343F] placeholder:text-[#A0AEC0] grow outline-none bg-transparent border-none"
                />
                <img src={IMG.phoneFlag} alt="" className="w-[18px] h-[18px] object-contain" />
              </div>
              <span className="text-[12px] text-[#8794A7]">
                کد تأیید به این شماره ارسال می‌شود.
              </span>
            </div>

            <button
              type="button"
              disabled={!canSubmit}
              onClick={() => void handleLogin()}
              className={[
                "h-[50px] rounded-[12px] flex items-center justify-center text-[16px] font-semibold border-none transition-colors",
                canSubmit
                  ? "bg-[#2094E3] text-white cursor-pointer hover:bg-[#1886CF]"
                  : "bg-[#E2E8F0] text-[#A0AEC0] cursor-not-allowed",
              ].join(" ")}
            >
              {busy ? "در حال انتقال به ورود امن..." : "ادامه و دریافت کد تأیید"}
            </button>

            <p className={`text-center text-[13px] ${error ? "text-[#C53030]" : "text-[#A0AEC0]"}`}>
              {error
                ? ERROR_MESSAGES[error] ?? "ورود انجام نشد. دوباره تلاش کنید."
                : !selected
                  ? "جهت فعال‌سازی دکمه ورود، ابتدا نوع حساب خود را از بالا انتخاب کنید."
                  : !isValidIranMobile(normalizedPhone)
                    ? "شماره موبایل را به‌صورت ۱۱ رقمی وارد کنید."
                    : "پس از ورود، بر اساس نقش حساب به پنل مجاز هدایت می‌شوید."}
            </p>
          </div>
        </div>
      </main>

      <footer className="flex flex-col items-center gap-4 py-6 border-t border-[#E8E8E8] shrink-0 bg-[#F6F9FB]">
        <div className="flex flex-col items-center gap-1">
          <span className="text-[14px] text-[#8794A7]">
            برای مشارکت فردی نیازی به ساخت حساب کاربری نیست.
          </span>
          <a href="/participate" className="text-[14px] font-semibold text-[#3FA2E6] underline">
            مشارکت بدون ثبت‌نام
          </a>
        </div>
        <div className="flex items-center gap-3">
          <a href="/terms" className="text-[12px] text-[#8693A6] underline">قوانین و مقررات</a>
          <span className="text-[12px] text-[#A0AEC0]">|</span>
          <a href="/privacy" className="text-[12px] text-[#8895A8] underline">حریم خصوصی</a>
        </div>
      </footer>
    </div>
  );
}
