import React from "react";
import "./index.css";

export default function Main() {
  return (
    <div className="main-container flex w-[360px] h-[286px] pt-[24px] pr-[24px] pb-[24px] pl-[24px] flex-col gap-[12px] items-end flex-nowrap bg-[#fff] rounded-[16px] relative overflow-hidden shadow-[0_8px_24px_0_rgba(22,45,71,0.12)] mx-auto my-0">
      <span className="flex w-[232px] h-[28px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[18px] font-semibold leading-[28px] text-[#17324d] relative text-right whitespace-nowrap">
        اشتراک‌گذاری پروفایل راهکار سبز
      </span>
      <span className="flex w-[248px] h-[17px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[11px] font-normal leading-[17px] text-[#60758a] relative text-right whitespace-nowrap z-[1]">
        لینک عمومی پروفایل را از مسیر دلخواه به اشتراک بگذارید.
      </span>
      <div className="flex w-[312px] h-[46px] pt-0 pr-[14px] pb-0 pl-[14px] justify-end items-center shrink-0 flex-nowrap bg-[#f7fafc] rounded-[10px] relative overflow-hidden z-[2]">
        <span className="flex w-[82px] h-[19px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[12px] font-medium leading-[18.75px] text-[#2094e3] relative text-right whitespace-nowrap z-[3]">
          کپی لینک عمومی
        </span>
      </div>
      <div className="flex w-[312px] h-[46px] pt-0 pr-[14px] pb-0 pl-[14px] justify-end items-center shrink-0 flex-nowrap bg-[#f7fafc] rounded-[10px] relative overflow-hidden z-[4]">
        <span className="flex w-[124px] h-[19px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[12px] font-medium leading-[18.75px] text-[#2094e3] relative text-right whitespace-nowrap z-[5]">
          اشتراک‌گذاری در LinkedIn
        </span>
      </div>
      <div className="flex w-[312px] h-[46px] pt-0 pr-[14px] pb-0 pl-[14px] justify-end items-center shrink-0 flex-nowrap bg-[#f7fafc] rounded-[10px] relative overflow-hidden z-[6]">
        <span className="flex w-[148px] h-[19px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[12px] font-medium leading-[18.75px] text-[#2094e3] relative text-right whitespace-nowrap z-[7]">
          اشتراک‌گذاری در شبکه اجتماعی
        </span>
      </div>
    </div>
  );
}
