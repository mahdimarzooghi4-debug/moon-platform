import React, { useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";
import {
  isValidIranMobile,
  normalizeIranMobile,
  type AccountType,
} from "../auth/oidc";
import OtpStep from "./OtpStep";
import "./index.css";

const IMG = {
  logo: "/assets/codia/qreWA0b9ix.png",
  backIcon: "/assets/image_cd1430e5-409a-40f6-a742-c82761e81fa7.png",
  phoneIcon: "/assets/image_bcf4aaa2-a2ce-459b-85c8-e1b5f6395009.png",
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

function accountTypeFromParam(value: string | null): AccountType | null {
  return value === "company" || value === "startup" || value === "internal" ? value : null;
}

const ERROR_MESSAGES: Record<string, string> = {
  forbidden: "این حساب اجازه دسترسی به پنل درخواستی را ندارد.",
  callback: "ورود کامل نشد. دوباره تلاش کنید.",
  "no-panel-access": "برای این حساب هنوز دسترسی به پنلی تعریف نشده است.",
};

function selectedCardClass(accountType: AccountType) {
  if (accountType === "internal") {
    return "bg-[#eaf5fd] border-2 border-[#2094e3]";
  }
  if (accountType === "startup") {
    return "bg-[#f0f7fe] border-[1.5px] border-[rgba(32,148,227,0.78)]";
  }
  return "bg-[#f6fbfe] border-[1.5px] border-[#2094e3]";
}

export default function Main() {
  const [searchParams, setSearchParams] = useSearchParams();
  const returnTo = searchParams.get("returnTo");
  const error = searchParams.get("error");
  const queryAccountType = accountTypeFromParam(searchParams.get("accountType"));
  const queryMobile = searchParams.get("mobile") ?? "";
  const suggestedType = useMemo(() => accountTypeForReturnTo(returnTo), [returnTo]);
  const [selected, setSelected] = useState<AccountType | null>(suggestedType ?? queryAccountType);
  const [phone, setPhone] = useState(queryMobile);

  const normalizedPhone = normalizeIranMobile(phone);
  const canSubmit = Boolean(selected && isValidIranMobile(normalizedPhone));
  const hasSelection = selected !== null;
  const isOtpStep = searchParams.get("step") === "otp";

  if (
    isOtpStep &&
    queryAccountType &&
    isValidIranMobile(normalizeIranMobile(queryMobile))
  ) {
    return (
      <OtpStep
        accountType={queryAccountType}
        mobile={normalizeIranMobile(queryMobile)}
        returnTo={returnTo ?? undefined}
      />
    );
  }

  function handleLogin() {
    if (!selected || !isValidIranMobile(normalizedPhone)) return;
    const params = new URLSearchParams({
      step: "otp",
      accountType: selected,
      mobile: normalizedPhone,
    });
    if (returnTo) params.set("returnTo", returnTo);
    setSearchParams(params);
  }

  function renderAccountHint() {
    if (error) {
      return (
        <p className="m-0 text-center text-[13px] text-[#c53030]">
          {ERROR_MESSAGES[error] ?? "ورود انجام نشد. دوباره تلاش کنید."}
        </p>
      );
    }

    if (!selected) {
      return (
        <p className="m-0 text-center text-[13px] text-[#a0aec0]">
          جهت فعال‌سازی دکمه ورود، ابتدا نوع حساب خود را از بالا انتخاب کنید.
        </p>
      );
    }

    if (selected === "company") {
      return (
        <p className="m-0 flex items-center justify-center gap-1 text-[14px] text-[#718096]">
          <span>هنوز حساب سازمانی ندارید؟</span>
          <a href="/register/company" className="font-semibold text-[#2094e3] underline">
            ثبت‌نام شرکت
          </a>
        </p>
      );
    }

    if (selected === "startup") {
      return (
        <p className="m-0 flex items-center justify-center gap-1 text-[14px] text-[#718096]">
          <span>هنوز حساب استارتاپی ندارید؟</span>
          <a href="/register/startup" className="font-semibold text-[#2094e3] underline">
            ثبت‌نام استارتاپ
          </a>
        </p>
      );
    }

    return (
      <p className="m-0 text-center text-[13px] text-[#718096]">
        حساب کاربران داخلی توسط مدیر سامانه ایجاد می‌شود.
      </p>
    );
  }

  return (
    <div
      className="main-container min-h-screen flex flex-col items-center bg-[#f7fafc]"
      dir="rtl"
      style={{ fontFamily: "'Vazirmatn', sans-serif" }}
    >
      <header className="flex h-[80px] w-full shrink-0 items-center justify-between border-b border-[#e5ebf2] bg-white px-[120px]">
        <img src={IMG.logo} alt="سامانه ماه" className="h-[46px] w-[137px] object-contain" />

        <button
          type="button"
          dir="ltr"
          onClick={() => window.location.assign("/")}
          className="flex cursor-pointer items-center justify-center gap-2 border-none bg-transparent text-[#2e3d54] transition-opacity hover:opacity-80"
        >
          <img src={IMG.backIcon} alt="" className="h-4 w-4 object-contain" />
          <span dir="rtl" className="text-[14px] font-medium">بازگشت به صفحه اصلی</span>
        </button>
      </header>

      <main className="relative flex w-full flex-1 flex-col items-center justify-center py-12">
        <div
          className={[
            "relative z-10 flex w-[780px] flex-col items-end rounded-[20px] border border-[#e4ebf1] bg-white",
            selected === "internal" ? "gap-7 p-9" : hasSelection ? "gap-6 p-9" : "gap-6 p-8",
          ].join(" ")}
        >
          <div className="flex w-full items-center justify-between">
            <div className="flex w-full flex-col items-end gap-1.5 text-right">
              <h1 className="m-0 w-full text-right text-[24px] font-bold leading-normal text-[#1a202c]">
                ورود به سامانه ماه
              </h1>
              <p className="m-0 w-full text-right text-[14px] font-normal leading-normal text-[#718096]">
                نوع حساب خود را انتخاب کنید و با شماره موبایل وارد شوید.
              </p>
            </div>
            <div dir="ltr" className="flex shrink-0 items-center gap-1.5 rounded-[8px] bg-[#eaf8f0] px-2.5 py-1">
              <span dir="rtl" className="text-[11px] font-semibold text-[#159455]">
                ورود امن با کد یک‌بار مصرف
              </span>
              <img src={IMG.otpIcon} alt="" className="h-[14px] w-[14px] object-contain" />
            </div>
          </div>

          <div className="grid w-full grid-cols-3 gap-4">
            {CARDS.map((card) => {
              const isActive = selected === card.id;
              const baseCompany = !selected && card.id === "company";

              return (
                <button
                  key={card.id}
                  type="button"
                  onClick={() => setSelected(card.id)}
                  className={[
                    "flex h-[180px] cursor-pointer flex-col items-end gap-3 text-right transition-all",
                    hasSelection ? "rounded-[12px] p-4" : "rounded-[14px] p-[18px]",
                    isActive
                      ? selectedCardClass(card.id)
                      : hasSelection
                        ? "border border-[#e4ebf1] bg-white hover:border-[#b0c8e8]"
                        : "border border-[#e0e5ed] bg-white hover:border-[#b0c8e8]",
                  ].join(" ")}
                >
                  <div dir="ltr" className="flex w-full items-center justify-between">
                    <div
                      className={[
                        "h-[18px] w-[18px] shrink-0 rounded-[9px] bg-white",
                        isActive
                          ? card.id === "internal"
                            ? "border-[5px] border-[#2094e3]"
                            : "border-4 border-[#2094e3]"
                          : "border border-[#cbd5e1]",
                      ].join(" ")}
                    />
                    <div
                      className={[
                        "flex h-10 w-10 shrink-0 items-center justify-center rounded-[8px]",
                        isActive ? "bg-[rgba(32,148,227,0.08)]" : "bg-[#f7fafc]",
                      ].join(" ")}
                    >
                      <img src={card.icon} alt="" className="h-[22px] w-[22px] object-contain" />
                    </div>
                  </div>

                  <span
                    className={[
                      "w-full text-right text-[16px] font-bold leading-normal",
                      isActive
                        ? "text-[#2094e3]"
                        : baseCompany
                          ? "text-[#0f3d78]"
                          : "text-[#1a202c]",
                    ].join(" ")}
                  >
                    {card.title}
                  </span>
                  <span
                    className={[
                      "w-full text-right text-[12px] font-normal leading-[18px]",
                      baseCompany ? "text-[#3d526b]" : "text-[#718096]",
                    ].join(" ")}
                  >
                    {card.desc}
                  </span>
                </button>
              );
            })}
          </div>

          <div className="flex w-full flex-col items-end gap-2 text-right">
            <label htmlFor="moon-login-mobile" className="block w-full text-right text-[14px] font-semibold text-[#2d3748]">
              شماره موبایل
            </label>
            <div
              dir="ltr"
              className={[
                "flex h-[48px] w-full items-center gap-2 rounded-[12px] bg-white px-4",
                selected && phone
                  ? "border-2 border-[#2094e3]"
                  : "border border-[#cbd5e1] focus-within:border-2 focus-within:border-[#2094e3]",
              ].join(" ")}
            >
              <input
                id="moon-login-mobile"
                type="tel"
                inputMode="numeric"
                autoComplete="tel"
                dir="rtl"
                value={phone}
                onChange={(event) => setPhone(event.target.value)}
                onKeyDown={(event) => {
                  if (event.key === "Enter") handleLogin();
                }}
                placeholder="مثال: ۰۹۱۲۱۲۳۴۵۶۷"
                className="min-w-0 grow border-none bg-transparent text-right text-[14px] font-normal text-[#1a202c] outline-none placeholder:text-[#a0aec0]"
              />
              <img src={IMG.phoneIcon} alt="" className="h-[18px] w-[18px] shrink-0 object-contain" />
            </div>
            <span className="w-full text-right text-[12px] font-normal text-[#718096]">
              کد تأیید به این شماره ارسال می‌شود.
            </span>
          </div>

          <button
            type="button"
            disabled={!canSubmit}
            onClick={handleLogin}
            className={[
              "flex h-[50px] w-full items-center justify-center rounded-[12px] border-none text-[16px] font-semibold transition-opacity",
              canSubmit
                ? "cursor-pointer bg-gradient-to-r from-[#2094e3] to-[#159455] text-white hover:opacity-90"
                : "cursor-not-allowed bg-[#e2e8f0] text-[#a0aec0]",
            ].join(" ")}
          >
            ادامه و دریافت کد تأیید
          </button>

          <div className="flex w-full items-center justify-center">
            {renderAccountHint()}
          </div>
        </div>
      </main>

      <footer className="flex h-[139px] w-full shrink-0 flex-col items-center gap-[18px] py-6">
        <div className="flex h-[54px] w-[780px] flex-col items-center gap-[10px] border-t border-[#e8e8e8]">
          <span className="text-[14px] font-normal text-[#718096]">
            برای مشارکت فردی نیازی به ساخت حساب کاربری نیست.
          </span>
          <a href="/projects" className="text-[14px] font-semibold text-[#2094e3] underline">
            مشارکت بدون ثبت‌نام
          </a>
        </div>
        <div dir="ltr" className="flex h-[19px] w-[180px] items-center justify-center gap-[14px] text-[12px]">
          <a href="/terms" className="text-[#718096] underline">قوانین و مقررات</a>
          <span className="text-[#a0aec0]">|</span>
          <a href="/privacy-policy" className="text-[#718096] underline">حریم خصوصی</a>
        </div>
      </footer>
    </div>
  );
}
