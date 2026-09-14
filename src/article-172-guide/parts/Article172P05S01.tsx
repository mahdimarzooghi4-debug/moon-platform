import React from "react";

const privateItems = [
  "کد ملی مدیران و صاحبان امضا",
  "شناسه ملی و شماره ثبت ثبتی",
  "تصاویر روزنامه رسمی شرکت",
  "تصویر امضای دیجیتال یا فیزیکی",
  "کد مودی مالیاتی و اقتصادی",
  "مبالغ دقیق حواله‌های مشارکت تک‌تک",
  "فیش‌های بانکی و رسیدهای تراکنش",
  "آدرس فیزیکی و تلفن‌های مستقیم",
  "مکاتبات کارشناسی پرونده در پنل",
];

export function Article172P05S01() {
  return (
    <section className="flex items-start bg-white px-[120px] py-[80px]" data-node-id="745:4538">
      <div className="flex w-full flex-col items-start gap-[24px] rounded-[24px] border border-[#e4ebf1] bg-[#fcfbf8] p-[32px] shadow-[0_4px_8px_rgba(23,46,71,0.08)]">
        <div className="flex w-full items-center justify-end gap-[12px]">
          <h2 className="font-['Vazirmatn'] text-[18px] font-bold leading-[28px] text-[#17324d]" dir="auto">
            اطلاعات حقوقی و مالی شرکت عمومی نمی‌شوند
          </h2>
          <img src="/assets/codia/3XU8bzZt6A.svg" alt="" className="h-[24px] w-[24px]" />
        </div>
        <p className="w-full text-right font-['Vazirmatn'] text-[14px] font-normal leading-[22px] text-[#60758a]" dir="auto">
          به منظور کرامت انسانی و رعایت الزامات حقوقی، اسناد مالی و اطلاعات ثبتی شرکت‌ها صرفاً برای کارشناسان بررسی‌کننده ذی‌صلاح نمایش داده می‌شوند و شامل موارد عدم انتشار عمومی زیر هستند:
        </p>
        <div className="h-px w-full bg-[#e4ebf1]" />
        <div className="grid w-full grid-cols-3 gap-[16px]">
          {privateItems.map((item) => (
            <div key={item} className="flex items-center justify-end gap-[10px]">
              <p className="min-w-0 flex-1 text-right font-['Vazirmatn'] text-[14px] font-normal leading-[22px] text-[#60758a]" dir="auto">
                {item}
              </p>
              <img src="/assets/codia/qBjG2pf0GH.svg" alt="" className="h-[16px] w-[16px] shrink-0" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
