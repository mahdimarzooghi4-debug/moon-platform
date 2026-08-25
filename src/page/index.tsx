import React, { useState } from "react";
import "./index.css";

const IMG = {
  logoIcon:  "/assets/image_ae1865f7-c201-457c-b7c6-cb0573e56337.png",
  logoText:  "/assets/image_ca277b70-8bb4-4096-9bc1-ea6881a35524.png",
  backIcon:  "/assets/image_cd1430e5-409a-40f6-a742-c82761e81fa7.png",
  phoneFlag: "/assets/image_bcf4aaa2-a2ce-459b-85c8-e1b5f6395009.png",
  otpIcon:   "/assets/image_fd57a38b-06b3-4cb8-ab22-2e4701d4b6ab.png",
  companyIcon:  "/assets/image_f95f66f0-8705-40ba-ae7c-412f53c3f831.png",
  startupIcon:  "/assets/image_4f6087ed-2d7c-4200-b9de-09d5fd3eca2b.png",
  internalIcon: "/assets/image_d6014067-da87-4c2d-bbc3-6c6943b4dabc.png",
};

type AccountType = "company" | "startup" | "internal";

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

export default function Main() {
  const [selected, setSelected] = useState<AccountType | null>(null);

  return (
    <div
      className="main-container min-h-screen flex flex-col bg-[#F6F9FB]"
      dir="rtl"
      style={{ fontFamily: "'Vazirmatn', sans-serif" }}
    >
      {/* ─── Header ─── */}
      <header className="flex items-center justify-between h-[80px] px-[120px] bg-white border-b border-[#E4EBF1] shrink-0">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="flex flex-col items-end gap-0.5">
            <img src={IMG.logoText} alt="ماه" className="h-8 object-contain" />
            <span className="text-[10px] text-[#5781AD] leading-tight">مسئولیت اجتماعی هوشمند</span>
          </div>
          <img src={IMG.logoIcon} alt="" className="w-[42px] h-[41px] object-contain" />
        </div>

        {/* Back button */}
        <button
          type="button"
          className="flex items-center gap-2 text-[#4D5A6D] hover:opacity-80 transition-opacity cursor-pointer bg-transparent border-none"
        >
          <img src={IMG.backIcon} alt="" className="w-[13px] h-[12px]" />
          <span className="text-[16px] font-medium">بازگشت به صفحه اصلی</span>
        </button>
      </header>

      {/* ─── Main content ─── */}
      <main className="relative flex-1 flex items-center justify-center py-12">
        {/* Content card */}
        <div className="relative z-10 w-[780px] bg-white border border-[#E4EBF1] rounded-[20px] p-8 flex flex-col gap-6">
          {/* Title row */}
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

          {/* Account type cards */}
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
                    {/* Radio indicator */}
                    <div
                      className={[
                        "w-[18px] h-[18px] rounded-full",
                        isActive
                          ? "border-4 border-[#2194E3] bg-white"
                          : "border border-[#CBD5E1] bg-white",
                      ].join(" ")}
                    />
                    {/* Icon container */}
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

          {/* Login form card */}
          <div className="flex flex-col gap-4">
            {/* Phone input */}
            <div className="flex flex-col gap-2">
              <label className="text-[14px] font-semibold text-[#454E5D]">شماره موبایل</label>
              <div className="flex items-center gap-2 h-[48px] px-4 bg-white rounded-[12px] border border-[#CBD5E1]">
                <span className="text-[14px] text-[#A0AEC0] grow">مثال: ۰۹۱۲۱۲۳۴۵۶۷</span>
                <img src={IMG.phoneFlag} alt="" className="w-[18px] h-[18px] object-contain" />
              </div>
              <span className="text-[12px] text-[#8794A7]">
                کد تأیید به این شماره ارسال می‌شود.
              </span>
            </div>

            {/* Submit button */}
            <button
              type="button"
              disabled={!selected}
              className="h-[50px] rounded-[12px] flex items-center justify-center bg-[#E2E8F0] text-[#A0AEC0] text-[16px] font-semibold border-none disabled:cursor-not-allowed"
            >
              ادامه و دریافت کد تأیید
            </button>

            <p className="text-center text-[13px] text-[#A0AEC0]">
              جهت فعال‌سازی دکمه ورود، ابتدا نوع حساب خود را از بالا انتخاب کنید.
            </p>
          </div>
        </div>
      </main>

      {/* ─── Footer ─── */}
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
