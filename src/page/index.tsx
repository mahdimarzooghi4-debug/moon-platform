import React from "react";
import "./index.css";

export default function Main() {
  return (
    <div className="main-container flex w-[768px] h-[520px] pt-[36px] pr-[32px] pb-[36px] pl-[32px] flex-col gap-[20px] items-end flex-nowrap bg-[#f7fafc] relative overflow-hidden mx-auto my-0">
      <div className="flex w-[704px] h-[56px] flex-col gap-[4px] items-end shrink-0 flex-nowrap relative overflow-hidden">
        <span className="flex w-[306px] h-[34px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[22px] font-semibold leading-[34px] text-[#17324d] relative text-right whitespace-nowrap z-[1]">
          حالت‌های پروفایل عمومی استارتاپ
        </span>
        <span className="flex w-[255px] h-[17px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[11px] font-normal leading-[17px] text-[#60758a] relative text-right whitespace-nowrap z-[2]">
          نمایش عمومی فقط برای پروفایل تأییدشده و پروژه‌های مجاز
        </span>
      </div>
      <div className="flex w-[704px] h-[180px] pt-[24px] pr-[24px] pb-[24px] pl-[24px] flex-col gap-[14px] items-end shrink-0 flex-nowrap bg-[#fff] rounded-[16px] border-solid border border-[#e4ebf1] relative overflow-hidden z-[3]">
        <div className="w-[48px] h-[5px] shrink-0 bg-[#2094e3] rounded-[999px] relative z-[4]" />
        <span className="flex w-[245px] h-[27px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[17px] font-semibold leading-[26.563px] text-[#17324d] relative text-right whitespace-nowrap z-[5]">
          در حال حاضر پروژه فعالی وجود ندارد
        </span>
        <span className="flex w-[329px] h-[17px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[11px] font-normal leading-[17px] text-[#60758a] relative text-right whitespace-nowrap z-[6]">
          می‌توانید پروژه‌های تکمیل‌شده و گزارش‌های اثر این استارتاپ را مشاهده
          کنید.
        </span>
        <span className="flex w-[111px] h-[19px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[12px] font-medium leading-[18.75px] text-[#2094e3] relative text-right whitespace-nowrap z-[7]">
          مشاهده پروژه‌های دیگر
        </span>
      </div>
      <div className="flex w-[704px] h-[180px] pt-[24px] pr-[24px] pb-[24px] pl-[24px] flex-col gap-[14px] items-end shrink-0 flex-nowrap bg-[#fff] rounded-[16px] border-solid border border-[#e4ebf1] relative overflow-hidden z-[8]">
        <div className="w-[48px] h-[5px] shrink-0 bg-[#c27a10] rounded-[999px] relative z-[9]" />
        <span className="flex w-[334px] h-[27px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[17px] font-semibold leading-[26.563px] text-[#17324d] relative text-right whitespace-nowrap z-10">
          این پروفایل برای نمایش عمومی در دسترس نیست
        </span>
        <span className="flex w-[299px] h-[17px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[11px] font-normal leading-[17px] text-[#60758a] relative text-right whitespace-nowrap z-[11]">
          اطلاعات پروفایل تأییدنشده یا فاقد پروژه عمومی نمایش داده نمی‌شود.
        </span>
        <span className="flex w-[88px] h-[19px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[12px] font-medium leading-[18.75px] text-[#2094e3] relative text-right whitespace-nowrap z-[12]">
          بازگشت به پروژه‌ها
        </span>
      </div>
    </div>
  );
}
