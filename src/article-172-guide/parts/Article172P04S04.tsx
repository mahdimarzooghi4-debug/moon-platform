import React from "react";

const responsibilities = [
  "ثبت اطلاعات کاملا منطبق با روزنامه رسمی شرکت",
  "ثبت‌نام و احراز هویت نماینده قانونی دارای حق امضا",
  "انجام پرداخت‌ها منحصراً از حساب رسمی حقوقی شرکت",
  "پیگیری منظم وضعیت نقص مدارک اعلام‌شده در پنل",
  "بررسی و انطباق شرایط سال مالی مودی با زمان مشارکت",
  "نگهداری نسخه فیزیکی فیش‌ها و رسیدهای رسمی بانک",
  "مستندسازی و دفاع از مشارکت در جریان ممیزی مالیاتی",
];

export function Article172P04S04() {
  return (
    <section className="px-[120px] py-[80px]" data-node-id="745:4510">
      <div className="flex w-full flex-col items-end gap-[24px] rounded-[20px] border border-[#e4ebf1] bg-white p-[32px] shadow-[0_4px_8px_rgba(23,46,71,0.08)]">
        <h2 className="w-full text-right font-['Vazirmatn'] text-[20px] font-extrabold leading-[31px] text-[#17324d]" dir="auto">
          مسئولیت شرکت متقاضی
        </h2>
        <div className="h-px w-full bg-[#e4ebf1]" />
        <div className="grid w-full grid-cols-3 gap-x-[20px] gap-y-[20px]">
          {responsibilities.map((item, index) => (
            <div
              key={item}
              className={`flex items-center justify-end gap-[12px] ${index === 6 ? "col-start-3" : ""}`}
            >
              <p className="min-w-0 flex-1 text-right font-['Vazirmatn'] text-[14px] font-normal leading-[22px] text-[#60758a]" dir="auto">
                {item}
              </p>
              <img src="/assets/codia/b17PkAoKTE.svg" alt="" className="h-[6px] w-[6px] shrink-0" />
            </div>
          ))}
        </div>
        <div className="h-px w-full bg-[#e4ebf1]" />
        <p className="w-full text-right font-['Vazirmatn'] text-[12px] font-normal leading-[19px] text-[#60758a]" dir="auto">
          مسئولیت صحت اطلاعات و استفاده مالیاتی از مدارک بر عهده شرکت و مراجع قانونی مربوط است.
        </p>
      </div>
    </section>
  );
}
