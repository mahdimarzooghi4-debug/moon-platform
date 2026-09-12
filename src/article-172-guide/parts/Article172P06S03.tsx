import React from "react";

const secondaryButton =
  "flex min-h-[44px] items-center justify-center rounded-[12px] border border-[#e4ebf1] bg-white px-[20px] py-[11px] text-center font-['Vazirmatn'] text-[14px] font-medium leading-[22px] text-[#2094e3]";
const primaryButton =
  "flex min-h-[44px] items-center justify-center rounded-[12px] bg-[#2094e3] px-[20px] py-[11px] text-center font-['Vazirmatn'] text-[14px] font-medium leading-[22px] text-white";

export function Article172P06S03() {
  return (
    <section className="flex flex-col items-start gap-[24px] px-[120px] pb-[80px]" data-node-id="745:4717">
      <div className="flex w-full items-center gap-[16px] rounded-[16px] border border-[#e4ebf1] bg-[#eaf5fd] p-[24px]">
        <button type="button" className={secondaryButton}>مشاهده پروژه‌ها</button>
        <div className="flex min-w-0 flex-1 flex-col items-end gap-[4px] text-right">
          <h3 className="font-['Vazirmatn'] text-[15px] font-bold leading-[23px] text-[#17324d]" dir="auto">
            این مسیر برای مشارکت‌های سازمانی است
          </h3>
          <p className="w-full font-['Vazirmatn'] text-[13px] font-normal leading-[20px] text-[#60758a]" dir="auto">
            کاربران حقیقی می‌توانند بدون ایجاد حساب کامل و با شماره موبایل در پروژه‌ها مشارکت کنند، اما امکان درخواست گواهی ماده ۱۷۲ برای مشارکت فردی در سامانه ماه وجود ندارد.
          </p>
        </div>
        <img src="/assets/codia/MX1aQWNoFO.svg" alt="" className="h-[24px] w-[24px] shrink-0" />
      </div>

      <div className="flex w-full items-center gap-[16px] rounded-[16px] border border-[#e4ebf1] bg-[#fcfbf8] p-[24px] shadow-[0_4px_8px_rgba(23,46,71,0.08)]">
        <div className="flex shrink-0 items-start gap-[12px]">
          <button type="button" className={secondaryButton}>ثبت‌نام شرکت</button>
          <button type="button" className={primaryButton}>ورود به حساب شرکت</button>
        </div>
        <div className="flex min-w-0 flex-1 flex-col items-end gap-[4px] text-right">
          <h3 className="font-['Vazirmatn'] text-[15px] font-bold leading-[23px] text-[#17324d]" dir="auto">
            برای مشاهده وضعیت درخواست‌ها وارد حساب شرکت شوید
          </h3>
          <p className="w-full font-['Vazirmatn'] text-[13px] font-normal leading-[20px] text-[#60758a]" dir="auto">
            برای مشاهده وضعیت درخواست‌ها و دسترسی به مدارک، ابتدا وارد حساب سازمانی شرکت شوید.
          </p>
        </div>
        <img src="/assets/codia/3XU8bzZt6A.svg" alt="" className="h-[24px] w-[24px] shrink-0" />
      </div>

      <div className="flex w-full items-center gap-[16px] rounded-[16px] border border-[#f2c94c] bg-[#fff8e6] p-[24px]">
        <button type="button" className={secondaryButton}>مشاهده قوانین جدید</button>
        <div className="flex min-w-0 flex-1 flex-col items-end gap-[4px] text-right">
          <h3 className="font-['Vazirmatn'] text-[15px] font-bold leading-[23px] text-[#17324d]" dir="auto">
            اطلاعات این راهنما در حال به‌روزرسانی است
          </h3>
          <p className="w-full font-['Vazirmatn'] text-[13px] font-normal leading-[20px] text-[#60758a]" dir="auto">
            برای اقدام مالیاتی، آخرین ضوابط را از منبع رسمی یا مشاور مالیاتی بررسی کنید.
          </p>
        </div>
        <img src="/assets/codia/jSSZpoRK8H.svg" alt="" className="h-[24px] w-[24px] shrink-0" />
      </div>
    </section>
  );
}
