import React from "react";

const infoRows = [
  ["۲٫۴ میلیارد تومان", "مبلغ مشارکت", "#17324d"],
  ["موفق", "وضعیت پرداخت", "#159455"],
  ["کمیته امداد", "دریافت‌کننده رسمی", "#17324d"],
  ["۱۲ مرداد ۱۴۰۵", "تاریخ ثبت درخواست", "#17324d"],
  ["در حال بررسی", "وضعیت فعلی", "#c5a056"],
  ["۱۸ مرداد ۱۴۰۵", "آخرین به‌روزرسانی", "#17324d"],
];

const timeline = [
  "پرداخت موفق ثبت شد",
  "رسید مشارکت صادر شد",
  "درخواست بررسی ثبت شد",
  "مدارک اولیه دریافت شد",
  "بررسی در حال انجام است",
];

const persianNumbers = ["۱", "۲", "۳", "۴", "۵"];

export function Article172P05S02() {
  return (
    <section className="flex flex-col items-end gap-[40px] px-[120px] py-[80px]" data-node-id="745:4583">
      <div className="flex w-full flex-col items-center gap-[12px] text-center">
        <h2 className="font-['Vazirmatn'] text-[28px] font-extrabold leading-[44px] text-[#17324d]" dir="auto">
          مسیر یک درخواست
        </h2>
        <p className="w-full font-['Vazirmatn'] text-[15px] font-normal leading-[23px] text-[#60758a]" dir="auto">
          فرآیند گام‌به‌گام پایش پرونده برای یک مشارکت موفق
        </p>
      </div>

      <div className="flex w-full flex-col items-start gap-[24px] rounded-[24px] border border-dashed border-[#e4ebf1] bg-white p-[32px] shadow-[0_4px_8px_rgba(23,46,71,0.08)]">
        <div className="flex w-full flex-col items-end gap-[12px]">
          <h3 className="font-['Vazirmatn'] text-[24px] font-extrabold leading-[38px] text-[#17324d]" dir="auto">
            مسیر یک درخواست
          </h3>
          <p className="w-full text-right font-['Vazirmatn'] text-[14px] font-normal leading-[22px] text-[#60758a]" dir="auto">
            فرآیند گام‌به‌گام پایش پرونده برای یک مشارکت
          </p>
        </div>

        <div className="w-full rounded-[16px] border border-[#e4ebf1] bg-[#fcfbf8] p-[20px]">
          <div className="flex w-full items-center gap-[12px]">
            <img
              src="/assets/codia/1bcac914-881a-4083-8498-bd0939351682.png"
              alt=""
              className="h-[64px] w-[64px] shrink-0 rounded-[12px] object-cover"
            />
            <div className="flex min-w-0 flex-1 flex-col items-end gap-[4px] text-right">
              <h4 className="font-['Vazirmatn'] text-[16px] font-bold leading-[25px] text-[#17324d]" dir="auto">
                اشتغال زنان روستایی
              </h4>
              <p className="font-['Vazirmatn'] text-[13px] font-normal leading-[20px] text-[#60758a]" dir="auto">
                شرکت متقاضی: گروه صنعتی آریا
              </p>
            </div>
          </div>
        </div>

        <div className="flex w-full flex-col gap-[12px]">
          {infoRows.map(([value, label, color]) => (
            <div key={label} className="flex w-full items-center justify-between border-b border-[#e4ebf1] pb-[8px]">
              <span className="font-['Vazirmatn'] text-[14px] font-bold leading-[22px]" style={{ color }} dir="auto">
                {value}
              </span>
              <span className="font-['Vazirmatn'] text-[14px] font-normal leading-[22px] text-[#60758a]" dir="auto">
                {label}
              </span>
            </div>
          ))}
        </div>

        <div className="flex w-full flex-col items-start gap-[16px]">
          <h4 className="font-['Vazirmatn'] text-[16px] font-bold leading-[25px] text-[#17324d]" dir="auto">
            مراحل فرآیند
          </h4>
          <div className="flex w-full flex-col gap-[12px]">
            {timeline.map((item, index) => (
              <div key={item} className="flex w-full items-center gap-[12px]">
                <div className="flex h-[24px] w-[24px] shrink-0 items-center justify-center rounded-[12px] bg-[#eaf5fd]">
                  <span className="font-['Vazirmatn'] text-[12px] font-bold leading-[19px] text-[#2094e3]">
                    {persianNumbers[index]}
                  </span>
                </div>
                <p className="min-w-0 flex-1 text-right font-['Vazirmatn'] text-[14px] font-normal leading-[22px] text-[#17324d]" dir="auto">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>

        <p className="w-full text-center font-['Vazirmatn'] text-[12px] font-normal leading-[19px] text-[#60758a]" dir="auto">
          این مثال صرفاً برای نمایش فرایند است و نتیجه نهایی درخواست را پیش‌بینی نمی‌کند.
        </p>
      </div>
    </section>
  );
}
