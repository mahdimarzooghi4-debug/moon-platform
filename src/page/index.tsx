import React from "react";
import "./index.css";

export default function Main() {
  return (
    <div className="main-container flex w-[1440px] flex-col items-center flex-nowrap bg-[#f7fafc] relative mx-auto my-0">
      <div className="flex h-[80px] pt-0 pr-[120px] pb-0 pl-[120px] justify-between items-center self-stretch shrink-0 flex-nowrap bg-[#fff] border-solid border-t border-t-[#e8e8e8] relative">
        <div className="flex w-[150px] gap-[8px] items-center shrink-0 flex-nowrap relative z-[1]">
          <div className="flex w-[16px] h-[16px] flex-col justify-center items-center shrink-0 flex-nowrap relative overflow-hidden z-[2]">
            <div className="w-[16px] h-[16px] shrink-0 bg-[url(https://static.codia.ai/image/2026-08-24/FEQLYByHBJ.png)] bg-cover bg-no-repeat relative overflow-hidden z-[3]" />
          </div>
          <span className="flex w-[126px] h-[22px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-medium leading-[21.875px] text-[#4a5568] relative text-right whitespace-nowrap z-[4]">
            بازگشت به صفحه ورود
          </span>
        </div>
        <div className="flex w-[137px] gap-[12px] items-center shrink-0 flex-nowrap relative z-[5]">
          <div className="w-[137px] h-[46px] shrink-0 bg-[url(https://static.codia.ai/image/2026-08-24/o0UsZUDh4P.png)] bg-cover bg-no-repeat relative z-[6]" />
        </div>
      </div>
      <div className="flex pt-[48px] pr-0 pb-[48px] pl-0 flex-col items-center self-stretch shrink-0 flex-nowrap relative z-[7]">
        <div className="flex w-[540px] pt-[36px] pr-[36px] pb-[36px] pl-[36px] flex-col gap-[28px] items-center shrink-0 flex-nowrap bg-[#fff] rounded-[20px] border-solid border border-[#e4ebf1] relative shadow-[0_4px_20px_0_rgba(0,0,0,0.04)] z-[8]">
          <div className="flex w-[72px] h-[72px] justify-center items-center shrink-0 flex-nowrap bg-[#eaf8f0] rounded-[36px] border-solid border-2 border-[#159455] relative z-[9]">
            <div className="w-[32px] h-[32px] shrink-0 bg-[url(https://static.codia.ai/image/2026-08-24/6EpFpRsM6c.png)] bg-cover bg-no-repeat relative overflow-hidden z-10" />
          </div>
          <div className="flex flex-col gap-[12px] items-center self-stretch shrink-0 flex-nowrap relative z-[11]">
            <span className="flex w-[203px] h-[38px] justify-center items-start shrink-0 basis-auto font-['Vazirmatn'] text-[24px] font-extrabold leading-[37.5px] text-[#1a202c] relative text-center whitespace-nowrap z-[12]">
              ورود موفقیت‌آمیز بود
            </span>
            <span className="flex w-[239px] h-[23px] justify-center items-start shrink-0 basis-auto font-['Vazirmatn'] text-[15px] font-normal leading-[23px] text-[#718096] relative text-center whitespace-nowrap z-[13]">
              هویت سازمانی شما با موفقیت تأیید شد.
            </span>
          </div>
          <div className="flex w-[210px] pt-[8px] pr-0 pb-[16px] pl-0 gap-[10px] justify-center items-center shrink-0 flex-nowrap relative z-[14]">
            <div className="w-[16px] h-[16px] shrink-0 bg-[url(https://static.codia.ai/image/2026-08-24/SkAZDZJmg9.png)] bg-cover bg-no-repeat relative overflow-hidden z-[15]" />
            <span className="flex w-[184px] h-[22px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-medium leading-[21.875px] text-[#2094e3] relative text-right whitespace-nowrap z-[16]">
              در حال انتقال به پنل کاربری ماه...
            </span>
          </div>
        </div>
      </div>
      <div className="flex pt-[24px] pr-0 pb-[40px] pl-0 flex-col gap-[12px] items-center self-stretch shrink-0 flex-nowrap relative z-[17]">
        <span className="flex w-[347px] h-[19px] justify-center items-start shrink-0 basis-auto font-['Vazirmatn'] text-[12px] font-normal leading-[18.75px] text-[#a0aec0] relative text-center whitespace-nowrap z-[18]">
          اطلاعات شما مطابق سیاست حریم خصوصی سامانه ماه محافظت می‌شود.
        </span>
        <div className="flex w-[180px] gap-[16px] items-center shrink-0 flex-nowrap relative z-[19]">
          <span className="flex w-[76px] h-[19px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[12px] font-normal leading-[18.75px] text-[#718096] relative text-right whitespace-nowrap z-20">
            قوانین و مقررات
          </span>
          <span className="h-[19px] shrink-0 basis-auto font-['Vazirmatn'] text-[12px] font-normal leading-[18.75px] text-[#93a3b7] relative text-left whitespace-nowrap z-[21]">
            |
          </span>
          <span className="flex w-[69px] h-[19px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[12px] font-normal leading-[18.75px] text-[#718096] relative text-right whitespace-nowrap z-[22]">
            حریم خصوصی
          </span>
        </div>
      </div>
    </div>
  );
}
