import React from "react";
import "./index.css";

export default function Main() {
  return (
    <div className="main-container flex w-[1440px] flex-col justify-between items-center flex-nowrap bg-[#f7fafc] relative mx-auto my-0">
      <div className="flex h-[80px] pt-0 pr-[120px] pb-0 pl-[120px] justify-between items-center self-stretch shrink-0 flex-nowrap bg-[#fff] border-solid border-t border-t-[#e2e8f0] relative">
        <div className="flex w-[284px] gap-[24px] items-center shrink-0 flex-nowrap relative z-[1]">
          <div className="flex w-[81px] gap-[8px] items-center shrink-0 flex-nowrap relative z-[2]">
            <span className="flex w-[81px] h-[22px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-medium leading-[21.875px] text-[#4a5568] relative text-right whitespace-nowrap z-[3]">
              ورود به سامانه
            </span>
          </div>
          <div className="flex w-px h-[16px] items-start shrink-0 flex-nowrap bg-[#e2e8f0] relative z-[4]" />
          <div className="flex w-[154px] gap-[8px] items-center shrink-0 flex-nowrap relative z-[5]">
            <div className="w-[16px] h-[16px] shrink-0 bg-[url(https://static.codia.ai/image/2026-08-24/54CxL6pa2b.png)] bg-cover bg-no-repeat relative overflow-hidden z-[6]" />
            <span className="flex w-[130px] h-[22px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-medium leading-[21.875px] text-[#718096] relative text-right whitespace-nowrap z-[7]">
              بازگشت به صفحه اصلی
            </span>
          </div>
        </div>
        <div className="flex w-[137px] gap-[12px] items-center shrink-0 flex-nowrap relative z-[8]">
          <div className="flex w-[137px] gap-[12px] items-center shrink-0 flex-nowrap relative z-[9]">
            <div className="flex w-[137px] gap-[12px] items-center shrink-0 flex-nowrap relative z-10">
              <div className="w-[137px] h-[46px] shrink-0 bg-[url(https://static.codia.ai/image/2026-08-24/XPWdr5063L.png)] bg-cover bg-no-repeat relative z-[11]" />
            </div>
          </div>
        </div>
      </div>
      <div className="flex pt-[64px] pr-0 pb-[64px] pl-0 flex-col items-center self-stretch shrink-0 flex-nowrap relative z-[12]">
        <div className="flex w-[580px] pt-[36px] pr-[36px] pb-[36px] pl-[36px] flex-col gap-[28px] items-end shrink-0 flex-nowrap bg-[#fff] rounded-[24px] border-solid border border-[#e2e8f0] relative shadow-[0_4px_20px_0_rgba(0,0,0,0.02)] z-[13]">
          <div className="flex flex-col gap-[12px] items-end self-stretch shrink-0 flex-nowrap relative z-[14]">
            <div className="flex w-[48px] h-[48px] justify-center items-center shrink-0 flex-nowrap bg-[#eaf5fd] rounded-[24px] relative z-[15]">
              <div className="w-[24px] h-[24px] shrink-0 bg-[url(https://static.codia.ai/image/2026-08-24/6Wk2GjQngX.png)] bg-cover bg-no-repeat relative overflow-hidden z-[16]" />
            </div>
            <span className="flex w-[295px] h-[34px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[22px] font-bold leading-[34px] text-[#1a202c] relative text-right whitespace-nowrap z-[17]">
              پیگیری وضعیت درخواست ثبت‌نام
            </span>
            <span className="flex w-[508px] h-[44px] justify-end items-start self-stretch shrink-0 font-['Vazirmatn'] text-[14px] font-normal leading-[21.875px] text-[#718096] relative text-right z-[18]">
              نوع درخواست، کد پیگیری و شماره موبایل ثبت‌شده خود را برای مشاهده
              آخرین وضعیت درخواست وارد کنید.
            </span>
          </div>
          <div className="flex flex-col gap-[8px] items-end self-stretch shrink-0 flex-nowrap relative z-[19]">
            <span className="flex w-[78px] h-[22px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-semibold leading-[21.875px] text-[#4a5568] relative text-right whitespace-nowrap z-20">
              نوع درخواست
            </span>
            <div className="flex gap-[12px] items-start self-stretch shrink-0 flex-nowrap relative z-[21]">
              <div className="flex pt-[16px] pr-[16px] pb-[16px] pl-[16px] flex-col gap-[8px] items-end grow shrink-0 basis-0 flex-nowrap bg-[#fff] rounded-[12px] border-solid border border-[#e2e8f0] relative z-[22]">
                <div className="flex justify-between items-center self-stretch shrink-0 flex-nowrap relative z-[23]">
                  <div className="flex w-[16px] h-[16px] justify-center items-center shrink-0 flex-nowrap rounded-[8px] border-solid border-2 border-[#a0aec0] relative z-[24]" />
                  <div className="w-[20px] h-[20px] shrink-0 bg-[url(https://static.codia.ai/image/2026-08-24/gbbEaXmKaZ.png)] bg-cover bg-no-repeat relative overflow-hidden z-[25]" />
                </div>
                <span className="flex w-[92px] h-[22px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-semibold leading-[21.875px] text-[#1a202c] relative text-right whitespace-nowrap z-[26]">
                  ثبت‌نام استارتاپ
                </span>
              </div>
              <div className="flex pt-[16px] pr-[16px] pb-[16px] pl-[16px] flex-col gap-[8px] items-end grow shrink-0 basis-0 flex-nowrap bg-[#fff] rounded-[12px] border-solid border-2 border-[#2094e3] relative z-[27]">
                <div className="flex justify-between items-center self-stretch shrink-0 flex-nowrap relative z-[28]">
                  <div className="flex w-[16px] h-[16px] justify-center items-center shrink-0 flex-nowrap rounded-[8px] border-solid border-2 border-[#2094e3] relative z-[29]">
                    <div className="w-[8px] h-[8px] shrink-0 bg-[url(https://static.codia.ai/image/2026-08-24/GUcgEzSS32.png)] bg-cover bg-no-repeat rounded-[50%] relative z-30" />
                  </div>
                  <div className="w-[20px] h-[20px] shrink-0 bg-[url(https://static.codia.ai/image/2026-08-24/2wbWafa03y.png)] bg-cover bg-no-repeat relative overflow-hidden z-[31]" />
                </div>
                <span className="flex w-[131px] h-[22px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-semibold leading-[21.875px] text-[#1a202c] relative text-right whitespace-nowrap z-[32]">
                  ثبت‌نام شرکت و سازمان
                </span>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-[8px] items-end self-stretch shrink-0 flex-nowrap relative z-[33]">
            <span className="flex w-[56px] h-[22px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-semibold leading-[21.875px] text-[#4a5568] relative text-right whitespace-nowrap z-[34]">
              کد پیگیری
            </span>
            <div className="flex h-[48px] pt-0 pr-[16px] pb-0 pl-[16px] gap-[8px] items-center self-stretch shrink-0 flex-nowrap bg-[#fff] rounded-[12px] border-solid border border-[#e2e8f0] relative z-[35]">
              <span className="h-[22px] grow shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-normal leading-[21.875px] text-[#a0aec0] relative text-right whitespace-nowrap z-[36]">
                مثال: MAH-C-۱۴۰۵-۰۰۲۴
              </span>
              <div className="w-[18px] h-[18px] shrink-0 bg-[url(https://static.codia.ai/image/2026-08-24/mYutyGtbCs.png)] bg-cover bg-no-repeat relative overflow-hidden z-[37]" />
            </div>
            <span className="h-[19px] self-stretch shrink-0 basis-auto font-['Vazirmatn'] text-[12px] font-normal leading-[18.75px] text-[#718096] relative text-right whitespace-nowrap z-[38]">
              کد پیگیری در پایان فرآیند ثبت‌نام اولیه ارسال یا نمایش داده شده
              است.
            </span>
          </div>
          <div className="flex flex-col gap-[8px] items-end self-stretch shrink-0 flex-nowrap relative z-[39]">
            <span className="flex w-[126px] h-[22px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-semibold leading-[21.875px] text-[#4a5568] relative text-right whitespace-nowrap z-40">
              شماره موبایل ثبت‌شده
            </span>
            <div className="flex h-[48px] pt-0 pr-[16px] pb-0 pl-[16px] gap-[8px] items-center self-stretch shrink-0 flex-nowrap bg-[#fff] rounded-[12px] border-solid border border-[#e2e8f0] relative z-[41]">
              <span className="h-[22px] grow shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-normal leading-[21.875px] text-[#a0aec0] relative text-right whitespace-nowrap z-[42]">
                مثال: ۰۹۱۲۱۲۳۴۵۶۷
              </span>
              <div className="w-[18px] h-[18px] shrink-0 bg-[url(https://static.codia.ai/image/2026-08-24/d2fwCqVeAx.png)] bg-cover bg-no-repeat relative overflow-hidden z-[43]" />
            </div>
          </div>
          <div className="flex flex-col items-start self-stretch shrink-0 flex-nowrap relative z-[44]">
            <div className="flex w-[508px] pt-[12px] pr-[24px] pb-[12px] pl-[24px] justify-center items-center grow shrink-0 basis-0 flex-nowrap rounded-[12px] relative overflow-hidden z-[45]">
              <span className="h-[25px] grow shrink-0 basis-auto font-['Vazirmatn'] text-[16px] font-bold leading-[25px] text-[#fff] relative text-center whitespace-nowrap z-[46]">
                دریافت کد تأیید
              </span>
            </div>
          </div>
          <div className="flex pt-[12px] pr-[12px] pb-[12px] pl-[12px] gap-[10px] items-center self-stretch shrink-0 flex-nowrap bg-[#eaf5fd] rounded-[12px] relative z-[47]">
            <span className="flex w-[456px] h-[38px] justify-end items-start grow shrink-0 basis-0 font-['Vazirmatn'] text-[12px] font-normal leading-[18.75px] text-[#2094e3] relative text-right z-[48]">
              جهت حفظ حریم شخصی و امنیت اطلاعات سازمانی، دریافت گزارش کامل وضعیت
              نیازمند اعتبارسنجی پیامکی مالک شماره تماس می‌باشد.
            </span>
            <div className="w-[18px] h-[18px] shrink-0 bg-[url(https://static.codia.ai/image/2026-08-24/p5wKSpEiui.png)] bg-cover bg-no-repeat relative overflow-hidden z-[49]" />
          </div>
        </div>
      </div>
    </div>
  );
}
