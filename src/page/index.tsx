import React from "react";
import "./index.css";

export default function Main() {
  return (
    <div className="main-container flex w-[1440px] pt-[80px] pr-[40px] pb-[80px] pl-[40px] flex-col gap-[48px] justify-center items-center flex-nowrap bg-[#f4f6f8] relative mx-auto my-0">
      <img
        className="w-[137px] h-[46px] shrink-0 object-cover relative"
        src="/assets/codia/6PbU3hBgAg.png"
        alt="سامانه ماه"
      />
      <div className="flex w-[560px] pt-[48px] pr-[48px] pb-[48px] pl-[48px] flex-col gap-[28px] justify-center items-center shrink-0 flex-nowrap bg-[#fff] rounded-[24px] border-solid border border-[#e4ebf1] relative shadow-[0_4px_16px_0_rgba(22,45,71,0.08)] z-[1]">
        <div className="flex w-[72px] h-[72px] flex-col justify-center items-center shrink-0 flex-nowrap bg-[#fff2f2] rounded-[36px] border-solid border border-[#ef4444] relative z-[2]">
          <div className="w-[28px] h-[28px] shrink-0 relative overflow-hidden z-[3]">
            <div className="w-[18.665px] h-[18.665px] bg-[url(/assets/codia/CfFZCJxRHi.svg)] bg-[length:100%_100%] bg-no-repeat relative overflow-hidden z-[4] mt-[4.667px] mr-0 mb-0 ml-[4.668px]" />
          </div>
        </div>
        <div className="flex flex-col gap-[12px] items-center self-stretch shrink-0 flex-nowrap relative z-[5]">
          <span className="flex w-[142px] h-[34px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[22px] font-extrabold leading-[34px] text-[#17324d] relative text-right whitespace-nowrap z-[6]">
            دسترسی محدود
          </span>
          <span className="flex w-[464px] h-[44px] justify-center items-start self-stretch shrink-0 font-['Vazirmatn'] text-[14px] font-normal leading-[22px] text-[#60758a] relative text-center z-[7]">
            شما مجوز دسترسی به پنل مدیریت محتوا را ندارید. برای دریافت دسترسی با
            مدیر سامانه تماس بگیرید.
          </span>
        </div>
        <div className="flex pt-[16px] pr-[16px] pb-[16px] pl-[16px] gap-[12px] items-center self-stretch shrink-0 flex-nowrap bg-[#fcfbf8] rounded-[16px] border-solid border border-[#e4ebf1] relative z-[8]">
          <div className="flex flex-col gap-[2px] items-end grow shrink-0 basis-0 flex-nowrap relative z-[9]">
            <span className="flex w-[65px] h-[22px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-bold leading-[21.875px] text-[#17324d] relative text-right whitespace-nowrap z-10">
              نگار حسینی
            </span>
            <span className="h-[19px] shrink-0 basis-auto font-['Vazirmatn'] text-[12px] font-normal leading-[18.75px] text-[#60758a] relative text-left whitespace-nowrap z-[11]">
              negar@example.com
            </span>
          </div>
          <img
            className="w-[40px] h-[40px] shrink-0 object-cover rounded-[20px] relative z-[12]"
            src="/assets/codia/CdjYCTKTSx.png"
            alt="نگار حسینی"
          />
        </div>
        <div className="flex gap-[12px] justify-center items-start self-stretch shrink-0 flex-nowrap relative z-[13]">
          <div className="flex w-[135px] pt-[11px] pr-[20px] pb-[11px] pl-[20px] gap-[8px] justify-center items-center shrink-0 flex-nowrap bg-[#fff] rounded-[12px] border-solid border border-[#e4ebf1] relative z-[14]">
            <span className="flex w-[95px] h-[22px] justify-center items-start shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-medium leading-[22px] text-[#2094e3] relative text-center whitespace-nowrap z-[15]">
              بازگشت به سایت
            </span>
          </div>
          <div className="flex w-[146px] pt-[11px] pr-[20px] pb-[11px] pl-[20px] gap-[8px] justify-center items-center shrink-0 flex-nowrap bg-[#2094e3] rounded-[12px] relative z-[16]">
            <span className="flex w-[106px] h-[22px] justify-center items-start shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-medium leading-[22px] text-[#fff] relative text-center whitespace-nowrap z-[17]">
              درخواست دسترسی
            </span>
          </div>
        </div>
      </div>
      <span className="flex w-[188px] h-[19px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[12px] font-normal leading-[18.75px] text-[#60758a] relative text-right whitespace-nowrap z-[18]">
        سامانه مدیریت محتوای ماه — نسخه ۱.۰
      </span>
    </div>
  );
}
