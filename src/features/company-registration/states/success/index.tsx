import React from "react";
import "./index.css";

export default function Main() {
  return (
    <div className="main-container flex w-[1440px] flex-col items-center flex-nowrap bg-[#f7fafc] relative mx-auto my-0">
      <div className="flex h-[80px] pt-0 pr-[120px] pb-0 pl-[120px] justify-between items-center self-stretch shrink-0 flex-nowrap bg-[#fff] border-solid border-t border-t-[#e4ebf1] relative">
        <div className="flex w-[237px] gap-[20px] items-center shrink-0 flex-nowrap relative z-[1]">
          <span className="flex w-[87px] h-[22px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-medium leading-[21.875px] text-[#718096] relative text-right whitespace-nowrap z-[2]">
            بازگشت به ورود
          </span>
          <span className="flex w-[130px] h-[22px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-medium leading-[21.875px] text-[#2094e3] relative text-right whitespace-nowrap z-[3]">
            بازگشت به صفحه اصلی
          </span>
        </div>
        <div className="flex w-[137px] gap-[12px] items-center shrink-0 flex-nowrap relative z-[4]">
          <div className="w-[137px] h-[46px] shrink-0 bg-[url(https://static.codia.ai/image/2026-08-24/b96Eb648yu.png)] bg-cover bg-no-repeat relative z-[5]" />
        </div>
      </div>
      <div className="flex pt-[80px] pr-0 pb-[80px] pl-0 flex-col gap-[32px] items-center self-stretch shrink-0 flex-nowrap relative z-[6]">
        <div className="flex w-[580px] pt-[48px] pr-[48px] pb-[48px] pl-[48px] flex-col gap-[32px] items-center shrink-0 flex-nowrap bg-[#fff] rounded-[24px] border-solid border border-[#e4ebf1] relative shadow-[0_4px_24px_0_rgba(0,0,0,0.03)] z-[7]">
          <div className="flex w-[72px] h-[72px] justify-center items-center shrink-0 flex-nowrap bg-[#eaf8f0] rounded-[36px] relative z-[8]">
            <div className="w-[32px] h-[32px] shrink-0 bg-[url(https://static.codia.ai/image/2026-08-24/Qu2RrbczeQ.png)] bg-cover bg-no-repeat relative overflow-hidden z-[9]" />
          </div>
          <div className="flex flex-col gap-[12px] items-center self-stretch shrink-0 flex-nowrap relative z-10">
            <span className="flex w-[268px] h-[38px] justify-center items-start shrink-0 basis-auto font-['Vazirmatn'] text-[24px] font-extrabold leading-[37.5px] text-[#1a202c] relative text-center whitespace-nowrap z-[11]">
              درخواست ثبت‌نام ارسال شد
            </span>
            <span className="flex w-[283px] h-[22px] justify-center items-start shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-normal leading-[21.875px] text-[#718096] relative text-center whitespace-nowrap z-[12]">
              اطلاعات شرکت برای بررسی به سامانه ماه ارسال شد.
            </span>
          </div>
          <div className="flex pt-[16px] pr-[16px] pb-[16px] pl-[16px] flex-col gap-[8px] items-center self-stretch shrink-0 flex-nowrap bg-[#f7fafc] rounded-[12px] relative z-[13]">
            <span className="flex w-[113px] h-[22px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-normal leading-[21.875px] text-[#718096] relative text-right whitespace-nowrap z-[14]">
              کد پیگیری درخواست
            </span>
            <span className="flex w-[150px] h-[28px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[18px] font-bold leading-[28px] text-[#2094e3] relative text-right whitespace-nowrap z-[15]">
              MAH-C-۱۴۰۵-۰۰۲۴
            </span>
          </div>
          <div className="flex w-[281px] gap-[8px] justify-center items-center shrink-0 flex-nowrap relative z-[16]">
            <span className="flex w-[257px] h-[20px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[13px] font-normal leading-[20px] text-[#718096] relative text-right whitespace-nowrap z-[17]">
              زمان تقریبی بررسی و تایید اطلاعات: ۲ تا ۳ روز کاری
            </span>
            <div className="flex w-[16px] h-[16px] justify-center items-center shrink-0 flex-nowrap bg-[#eaf5fd] rounded-[8px] relative z-[18]">
              <span className="h-[16px] shrink-0 basis-auto font-['Vazirmatn'] text-[10px] font-bold leading-[15.625px] text-[#2094e3] relative text-left whitespace-nowrap z-[19]">
                i
              </span>
            </div>
          </div>
          <div className="flex flex-col gap-[12px] items-start self-stretch shrink-0 flex-nowrap relative z-20">
            <div className="flex pt-[11px] pr-[20px] pb-[11px] pl-[20px] gap-[8px] justify-center items-center self-stretch shrink-0 flex-nowrap bg-[#2094e3] rounded-[12px] relative z-[21]">
              <span className="flex w-[96px] h-[22px] justify-center items-start shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-medium leading-[22px] text-[#fff] relative text-center whitespace-nowrap z-[22]">
                پیگیری درخواست
              </span>
            </div>
            <div className="flex pt-[12px] pr-0 pb-[12px] pl-0 justify-center items-center self-stretch shrink-0 flex-nowrap relative z-[23]">
              <span className="flex w-[131px] h-[22px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-semibold leading-[21.875px] text-[#2094e3] relative text-right whitespace-nowrap z-[24]">
                بازگشت به صفحه اصلی
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="flex pt-[24px] pr-0 pb-[40px] pl-0 flex-col gap-[16px] items-start self-stretch shrink-0 flex-nowrap relative z-[25]">
        <div className="flex flex-col gap-[12px] items-center self-stretch shrink-0 flex-nowrap relative z-[26]">
          <span className="flex w-[347px] h-[19px] justify-center items-start shrink-0 basis-auto font-['Vazirmatn'] text-[12px] font-normal leading-[18.75px] text-[#a0aec0] relative text-center whitespace-nowrap z-[27]">
            اطلاعات شما مطابق سیاست حریم خصوصی سامانه ماه محافظت می‌شود.
          </span>
          <div className="flex w-[180px] gap-[16px] items-center shrink-0 flex-nowrap relative z-[28]">
            <span className="flex w-[76px] h-[19px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[12px] font-normal leading-[18.75px] text-[#718096] relative text-right whitespace-nowrap z-[29]">
              قوانین و مقررات
            </span>
            <span className="h-[19px] shrink-0 basis-auto font-['Vazirmatn'] text-[12px] font-normal leading-[18.75px] text-[#a0aec0] relative text-left whitespace-nowrap z-30">
              |
            </span>
            <span className="flex w-[69px] h-[19px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[12px] font-normal leading-[18.75px] text-[#718096] relative text-right whitespace-nowrap z-[31]">
              حریم خصوصی
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
