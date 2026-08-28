import React from "react";
import "./index.css";

export default function Main() {
  return (
    <div className="main-container flex w-[1440px] flex-col items-center flex-nowrap bg-[#fcfbf8] relative overflow-hidden mx-auto my-0">
      <div className="flex h-[80px] pt-[16px] pr-[120px] pb-[16px] pl-[120px] justify-between items-center self-stretch shrink-0 flex-nowrap bg-[#fff] border-solid border-t border-t-[#e4ebf1] relative">
        <div className="flex w-[246px] gap-[24px] items-center shrink-0 flex-nowrap relative z-[1]">
          <span className="flex w-[130px] h-[22px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-medium leading-[21.875px] text-[#60758a] relative text-right whitespace-nowrap z-[2]">
            بازگشت به صفحه اصلی
          </span>
          <span className="flex w-[92px] h-[22px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-medium leading-[21.875px] text-[#60758a] relative text-right whitespace-nowrap z-[3]">
            مشاهده پروژه‌ها
          </span>
        </div>
        <div className="flex w-[137px] gap-[8px] items-center shrink-0 flex-nowrap relative z-[4]">
          <img
            className="w-[137px] h-[46px] shrink-0 object-contain relative z-[5]"
            src="/assets/codia/894cfG1jev.png"
            alt="سامانه ماه"
          />
        </div>
      </div>
      <div className="flex pt-[80px] pr-0 pb-[80px] pl-0 flex-col items-center self-stretch shrink-0 flex-nowrap relative z-[6]">
        <div className="flex w-[600px] pt-[36px] pr-[36px] pb-[36px] pl-[36px] flex-col gap-[28px] items-start shrink-0 flex-nowrap bg-[#fff] rounded-[24px] border-solid border border-[#e4ebf1] relative shadow-[0_4px_16px_0_rgba(22,45,71,0.08)] z-[7]">
          <div className="flex flex-col gap-[12px] items-center self-stretch shrink-0 flex-nowrap relative z-[8]">
            <div className="flex justify-end items-start self-stretch shrink-0 flex-nowrap relative z-[9]">
              <div className="flex w-[106px] gap-[4px] items-center shrink-0 flex-nowrap relative z-10">
                <span className="flex w-[90px] h-[20px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[13px] font-bold leading-[20px] text-[#2094e3] relative text-right whitespace-nowrap z-[11]">
                  ورود با کد پیگیری
                </span>
                <div className="w-[12px] h-[12px] shrink-0 bg-[url(/assets/codia/b0mXn6wEqJ.svg)] bg-cover bg-no-repeat relative overflow-hidden z-[12]" />
              </div>
            </div>
            <div className="flex w-[56px] h-[56px] flex-col justify-center items-center shrink-0 flex-nowrap bg-[#eaf8f0] rounded-[28px] relative z-[13]">
              <div className="w-[24px] h-[24px] shrink-0 bg-[url(/assets/codia/uqNFWOo7Ze.svg)] bg-cover bg-no-repeat relative overflow-hidden z-[14]" />
            </div>
            <span className="flex w-[242px] h-[34px] justify-center items-start shrink-0 basis-auto font-['Vazirmatn'] text-[22px] font-bold leading-[34px] text-[#17324d] relative text-center whitespace-nowrap z-[15]">
              مشارکت خود را پیگیری کنید
            </span>
            <span className="h-[22px] self-stretch shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-normal leading-[21.875px] text-[#60758a] relative text-center whitespace-nowrap z-[16]">
              پس از تأیید موبایل، آخرین مشارکت‌های ثبت‌شده با این شماره نمایش
              داده می‌شوند.
            </span>
          </div>
          <div className="flex flex-col gap-[20px] items-start self-stretch shrink-0 flex-nowrap relative z-[17]">
            <div className="flex flex-col gap-[8px] items-start self-stretch shrink-0 flex-nowrap relative z-[18]">
              <div className="flex justify-end items-start self-stretch shrink-0 flex-nowrap relative z-[19]">
                <span className="flex w-[74px] h-[22px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-medium leading-[21.875px] text-[#17324d] relative text-right whitespace-nowrap z-20">
                  شماره موبایل
                </span>
              </div>
              <div className="flex h-[46px] pt-[12px] pr-[16px] pb-[12px] pl-[16px] gap-[8px] items-center self-stretch shrink-0 flex-nowrap bg-[#fff] rounded-[12px] border-solid border border-[#e4ebf1] relative z-[21]">
                <span className="h-[22px] grow shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-normal leading-[21.875px] text-[#60758a] relative text-right whitespace-nowrap z-[22]">
                  مثال: ۰۹۱۲۱۲۳۴۵۶۷
                </span>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-[16px] items-center self-stretch shrink-0 flex-nowrap relative z-[23]">
            <div className="flex h-[46px] pt-[12px] pr-0 pb-[12px] pl-0 justify-center items-center self-stretch shrink-0 flex-nowrap bg-[#2094e3] rounded-[12px] relative z-[24]">
              <span className="h-[23px] shrink-0 basis-auto font-['Vazirmatn'] text-[15px] font-bold leading-[23px] text-[#fff] relative text-left whitespace-nowrap z-[25]">
                دریافت کد تأیید
              </span>
            </div>
            <div className="flex gap-[8px] justify-center items-center self-stretch shrink-0 flex-nowrap relative z-[26]">
              <span className="flex w-[370px] h-[19px] justify-center items-start shrink-0 basis-auto font-['Vazirmatn'] text-[12px] font-normal leading-[18.75px] text-[#60758a] relative text-center whitespace-nowrap z-[27]">
                اطلاعات مشارکت فقط پس از تأیید شماره موبایل ثبت‌شده نمایش داده
                می‌شود.
              </span>
              <div className="w-[14px] h-[14px] shrink-0 bg-[url(/assets/codia/uMY7mRAcxa.svg)] bg-cover bg-no-repeat relative overflow-hidden z-[28]" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
