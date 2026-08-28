import React from "react";
import "./index.css";

export default function Main() {
  return (
    <div className="main-container flex w-[1440px] flex-col items-center flex-nowrap bg-[#f7fafc] relative mx-auto my-0">
      <div className="flex h-[80px] pt-0 pr-[120px] pb-0 pl-[120px] justify-between items-center self-stretch shrink-0 flex-nowrap bg-[#fff] border-solid border-t border-t-[#e8e8e8] relative">
        <div className="flex w-[150px] gap-[8px] items-center shrink-0 flex-nowrap relative z-[1]">
          <div className="flex w-[16px] h-[16px] flex-col justify-center items-center shrink-0 flex-nowrap relative overflow-hidden z-[2]">
            <div className="w-[16px] h-[16px] shrink-0 bg-[url(https://static.codia.ai/image/2026-08-24/woz79uGNKp.png)] bg-cover bg-no-repeat relative overflow-hidden z-[3]" />
          </div>
          <span className="flex w-[126px] h-[22px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-medium leading-[21.875px] text-[#4a5568] relative text-right whitespace-nowrap z-[4]">
            بازگشت به صفحه ورود
          </span>
        </div>
        <div className="flex w-[137px] gap-[12px] items-center shrink-0 flex-nowrap relative z-[5]">
          <div className="w-[137px] h-[46px] shrink-0 bg-[url(https://static.codia.ai/image/2026-08-24/zr6rJfPcYr.png)] bg-cover bg-no-repeat relative z-[6]" />
        </div>
      </div>
      <div className="flex pt-[48px] pr-0 pb-[48px] pl-0 flex-col items-center self-stretch shrink-0 flex-nowrap relative z-[7]">
        <div className="flex w-[540px] pt-[36px] pr-[36px] pb-[36px] pl-[36px] flex-col gap-[24px] items-center shrink-0 flex-nowrap bg-[#fff] rounded-[20px] border-solid border border-[#e4ebf1] relative shadow-[0_4px_20px_0_rgba(0,0,0,0.04)] z-[8]">
          <div className="flex w-[64px] h-[64px] justify-center items-center shrink-0 flex-nowrap bg-[#fff6e5] rounded-[32px] relative z-[9]">
            <div className="w-[28px] h-[28px] shrink-0 bg-[url(https://static.codia.ai/image/2026-08-24/wccjzuNBo8.png)] bg-cover bg-no-repeat relative overflow-hidden z-10" />
          </div>
          <div className="flex pt-[12px] pr-0 pb-[12px] pl-0 flex-col gap-[12px] items-center self-stretch shrink-0 flex-nowrap relative z-[11]">
            <span className="h-[31px] self-stretch shrink-0 basis-auto font-['Vazirmatn'] text-[20px] font-bold leading-[31px] text-[#1a202c] relative text-center whitespace-nowrap z-[12]">
              تعداد تلاش‌های ناموفق بیش از حد مجاز
            </span>
            <span className="flex w-[468px] h-[42px] justify-center items-start self-stretch shrink-0 font-['Vazirmatn'] text-[14px] font-normal leading-[21px] text-[#718096] relative text-center z-[13]">
              به دلیل وارد کردن مکرر کد اشتباه، حساب شما موقتاً محدود شده است.
              لطفاً چند دقیقه دیگر مجدداً تلاش کنید.
            </span>
          </div>
          <div className="flex pt-[12px] pr-[24px] pb-[12px] pl-[24px] justify-center items-start self-stretch shrink-0 flex-nowrap bg-[#fffaf0] rounded-[12px] border-solid border border-[#dd6b20] relative z-[14]">
            <span className="flex w-[161px] h-[23px] justify-center items-start shrink-0 basis-auto font-['Vazirmatn'] text-[15px] font-semibold leading-[23px] text-[#dd6b20] relative text-center whitespace-nowrap z-[15]">
              امکان تلاش مجدد تا ۰۴:۵۹
            </span>
          </div>
          <div className="flex pt-[14px] pr-[32px] pb-[14px] pl-[32px] justify-center items-center self-stretch shrink-0 flex-nowrap bg-[#cbd5e1] rounded-[12px] relative z-[16]">
            <span className="h-[25px] shrink-0 basis-auto font-['Vazirmatn'] text-[16px] font-semibold leading-[25px] text-[#94a3b8] relative text-left whitespace-nowrap z-[17]">
              تأیید و ورود
            </span>
          </div>
          <div className="flex pt-[16px] pr-0 pb-0 pl-0 flex-col gap-[8px] items-center self-stretch shrink-0 flex-nowrap relative z-[18]">
            <div className="flex w-[283px] gap-[6px] items-center shrink-0 flex-nowrap relative z-[19]">
              <span className="flex w-[263px] h-[19px] justify-center items-start shrink-0 basis-auto font-['Vazirmatn'] text-[12px] font-normal leading-[18.75px] text-[#718096] relative text-center whitespace-nowrap z-20">
                کد تأیید محرمانه است؛ آن را در اختیار دیگران قرار ندهید.
              </span>
              <div className="w-[14px] h-[14px] shrink-0 bg-[url(https://static.codia.ai/image/2026-08-24/LcYCAWVXz2.png)] bg-cover bg-no-repeat relative overflow-hidden z-[21]" />
            </div>
            <span className="flex w-[250px] h-[17px] justify-center items-start shrink-0 basis-auto font-['Vazirmatn'] text-[11px] font-normal leading-[17px] text-[#a0aec0] relative text-center whitespace-nowrap z-[22]">
              ورود شما با کد یک‌بارمصرف و بدون رمز عبور انجام می‌شود.
            </span>
          </div>
        </div>
      </div>
      <div className="flex pt-[24px] pr-0 pb-[40px] pl-0 flex-col gap-[12px] items-center self-stretch shrink-0 flex-nowrap relative z-[23]">
        <span className="flex w-[347px] h-[19px] justify-center items-start shrink-0 basis-auto font-['Vazirmatn'] text-[12px] font-normal leading-[18.75px] text-[#a0aec0] relative text-center whitespace-nowrap z-[24]">
          اطلاعات شما مطابق سیاست حریم خصوصی سامانه ماه محافظت می‌شود.
        </span>
        <div className="flex w-[180px] gap-[16px] items-center shrink-0 flex-nowrap relative z-[25]">
          <span className="flex w-[76px] h-[19px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[12px] font-normal leading-[18.75px] text-[#718096] relative text-right whitespace-nowrap z-[26]">
            قوانین و مقررات
          </span>
          <span className="h-[19px] shrink-0 basis-auto font-['Vazirmatn'] text-[12px] font-normal leading-[18.75px] text-[#93a3b7] relative text-left whitespace-nowrap z-[27]">
            |
          </span>
          <span className="flex w-[69px] h-[19px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[12px] font-normal leading-[18.75px] text-[#718096] relative text-right whitespace-nowrap z-[28]">
            حریم خصوصی
          </span>
        </div>
      </div>
    </div>
  );
}
