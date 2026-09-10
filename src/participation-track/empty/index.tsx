import React from "react";
import "./index.css";

export default function Main() {
  return (
    <div className="main-container flex w-[1440px] flex-col items-center flex-nowrap bg-[#fcfbf8] relative overflow-hidden mx-auto my-0">
      <div className="flex h-[80px] pt-[16px] pr-[120px] pb-[16px] pl-[120px] justify-between items-center self-stretch shrink-0 flex-nowrap bg-[#fff] border-solid border-t border-t-[#e4ebf1] relative">
        <div className="flex w-[246px] gap-[24px] items-center shrink-0 flex-nowrap relative z-[1]">
          <span className="flex w-[92px] h-[22px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-medium leading-[21.875px] text-[#60758a] relative text-right whitespace-nowrap z-[2]">
            مشاهده پروژه‌ها
          </span>
          <span className="flex w-[130px] h-[22px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-medium leading-[21.875px] text-[#60758a] relative text-right whitespace-nowrap z-[3]">
            بازگشت به صفحه اصلی
          </span>
        </div>
        <div className="w-[137px] h-[46px] shrink-0 bg-[url(https://static.codia.ai/image/2026-08-24/iTcyzQS0q3.png)] bg-cover bg-no-repeat relative z-[4]" />
      </div>
      <div className="flex pt-[120px] pr-[120px] pb-[120px] pl-[120px] flex-col items-center self-stretch shrink-0 flex-nowrap relative z-[5]">
        <div className="flex w-[560px] pt-[36px] pr-[36px] pb-[36px] pl-[36px] flex-col gap-[28px] items-start shrink-0 flex-nowrap bg-[#fff] rounded-[24px] border-solid border border-[#e4ebf1] relative shadow-[0_4px_16px_0_rgba(22,45,71,0.08)] z-[6]">
          <div className="flex flex-col gap-[16px] items-center self-stretch shrink-0 flex-nowrap relative z-[7]">
            <div className="flex w-[72px] h-[72px] flex-col justify-center items-center shrink-0 flex-nowrap bg-[#f4f4f5] rounded-[36px] relative z-[8]">
              <div className="w-[32px] h-[32px] shrink-0 bg-[url(https://static.codia.ai/image/2026-08-24/EiR12haRbp.png)] bg-cover bg-no-repeat relative overflow-hidden z-[9]" />
            </div>
            <span className="flex w-[157px] h-[34px] justify-center items-start shrink-0 basis-auto font-['Vazirmatn'] text-[22px] font-bold leading-[34px] text-[#17324d] relative text-center whitespace-nowrap z-10">
              مشارکتی پیدا نشد
            </span>
            <span className="flex w-[488px] h-[44px] justify-center items-start self-stretch shrink-0 font-['Vazirmatn'] text-[14px] font-normal leading-[21.875px] text-[#60758a] relative text-center z-[11]">
              کد پیگیری یا شماره موبایل با اطلاعات ثبت‌شده مطابقت ندارد. از صحت
              اطلاعات واردشده اطمینان حاصل کنید.
            </span>
          </div>
          <div className="h-px self-stretch shrink-0 bg-[url(https://static.codia.ai/image/2026-08-24/bAUO3U2tf4.png)] bg-cover bg-no-repeat relative z-[12]" />
          <div className="flex flex-col gap-[16px] items-center self-stretch shrink-0 flex-nowrap relative z-[13]">
            <span className="flex w-[206px] h-[22px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-semibold leading-[21.875px] text-[#2094e3] relative text-right underline whitespace-nowrap z-[14]">
              ویرایش اطلاعات و جست‌وجوی مجدد
            </span>
            <span className="flex w-[155px] h-[22px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-semibold leading-[21.875px] text-[#2094e3] relative text-right underline whitespace-nowrap z-[15]">
              مشاهده پروژه‌های فعال ماه
            </span>
            <span className="flex w-[139px] h-[22px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-semibold leading-[21.875px] text-[#2094e3] relative text-right underline whitespace-nowrap z-[16]">
              تماس با پشتیبانی سامانه
            </span>
          </div>
          <div className="h-px self-stretch shrink-0 bg-[url(https://static.codia.ai/image/2026-08-24/pcgAW61GDr.png)] bg-cover bg-no-repeat relative z-[17]" />
          <div className="flex h-[100px] pt-0 pr-0 pb-0 pl-0 gap-[12px] justify-center items-start self-stretch shrink-0 flex-nowrap relative z-[18]" />
        </div>
      </div>
    </div>
  );
}
