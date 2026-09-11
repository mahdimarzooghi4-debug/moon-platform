import React from "react";
import "./index.css";

export default function Main() {
  return (
    <div className="main-container flex w-[1440px] flex-col items-center flex-nowrap bg-[#f7fafc] relative mx-auto my-0">
      <div className="flex h-[80px] pt-0 pr-[120px] pb-0 pl-[120px] justify-between items-center self-stretch shrink-0 flex-nowrap bg-[#fff] border-solid border-t border-t-[#e2e8f0] relative">
        <div className="flex w-[290px] gap-[24px] items-center shrink-0 flex-nowrap relative z-[1]">
          <div className="flex w-[87px] gap-[8px] items-center shrink-0 flex-nowrap relative z-[2]">
            <span className="flex w-[87px] h-[22px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-medium leading-[21.875px] text-[#4a5568] relative text-right whitespace-nowrap z-[3]">
              بازگشت به ورود
            </span>
          </div>
          <div className="flex w-px h-[16px] items-start shrink-0 flex-nowrap bg-[#e2e8f0] relative z-[4]" />
          <div className="flex w-[154px] gap-[8px] items-center shrink-0 flex-nowrap relative z-[5]">
            <div className="w-[16px] h-[16px] shrink-0 bg-[url(https://static.codia.ai/image/2026-08-24/frgDCYbWru.png)] bg-cover bg-no-repeat relative overflow-hidden z-[6]" />
            <span className="flex w-[130px] h-[22px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-medium leading-[21.875px] text-[#718096] relative text-right whitespace-nowrap z-[7]">
              بازگشت به صفحه اصلی
            </span>
          </div>
        </div>
        <div className="flex w-[137px] gap-[12px] items-center shrink-0 flex-nowrap relative z-[8]">
          <div className="flex w-[137px] gap-[12px] items-center shrink-0 flex-nowrap relative z-[9]">
            <div className="w-[137px] h-[46px] shrink-0 bg-[url(https://static.codia.ai/image/2026-08-24/Orypbjwkdx.png)] bg-cover bg-no-repeat relative z-10" />
          </div>
        </div>
      </div>
      <div className="flex pt-[64px] pr-0 pb-[64px] pl-0 flex-col items-center self-stretch shrink-0 flex-nowrap relative z-[11]">
        <div className="flex w-[580px] pt-[36px] pr-[36px] pb-[36px] pl-[36px] flex-col gap-[28px] items-center shrink-0 flex-nowrap bg-[#fff] rounded-[24px] border-solid border border-[#e2e8f0] relative shadow-[0_4px_20px_0_rgba(0,0,0,0.02)] z-[12]">
          <div className="flex w-[64px] h-[64px] justify-center items-center shrink-0 flex-nowrap bg-[#fff6e5] rounded-[32px] relative z-[13]">
            <div className="w-[32px] h-[32px] shrink-0 bg-[url(https://static.codia.ai/image/2026-08-24/CAyG7ENzK9.png)] bg-cover bg-no-repeat relative overflow-hidden z-[14]" />
          </div>
          <div className="flex w-[400px] flex-col gap-[12px] items-center shrink-0 flex-nowrap relative z-[15]">
            <span className="flex w-[300px] h-[31px] justify-center items-start shrink-0 basis-auto font-['Vazirmatn'] text-[20px] font-bold leading-[31px] text-[#1a202c] relative text-center whitespace-nowrap z-[16]">
              درخواستی با این مشخصات یافت نشد
            </span>
            <span className="flex w-[400px] h-[44px] justify-center items-start shrink-0 font-['Vazirmatn'] text-[14px] font-normal leading-[21.875px] text-[#718096] relative text-center z-[17]">
              کد پیگیری یا شماره موبایل واردشده با سوابق ثبت‌نام سامانه ماه
              همخوانی ندارد. لطفاً صحت اطلاعات خود را بررسی کنید.
            </span>
          </div>
          <div className="flex w-[152px] gap-[12px] justify-center items-center self-stretch shrink-0 flex-nowrap relative z-[18]">
            <div className="flex w-[152px] h-[48px] pt-[12px] pr-[24px] pb-[12px] pl-[24px] justify-center items-center shrink-0 flex-nowrap rounded-[12px] relative overflow-hidden z-[19]">
              <span className="h-[25px] grow shrink-0 basis-auto font-['Vazirmatn'] text-[16px] font-bold leading-[25px] text-[#fff] relative text-center whitespace-nowrap z-20">
                ویرایش اطلاعات
              </span>
            </div>
          </div>
          <span className="flex w-[154px] h-[20px] justify-center items-start shrink-0 basis-auto font-['Vazirmatn'] text-[13px] font-normal leading-[20px] text-[#2094e3] relative text-center underline whitespace-nowrap z-[21]">
            تماس با مرکز ارتباط مردمی ماه
          </span>
        </div>
      </div>
    </div>
  );
}
