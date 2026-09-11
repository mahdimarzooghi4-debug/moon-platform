import React from "react";
import "./index.css";

export default function Main() {
  return (
    <div className="main-container flex w-[1440px] h-[900px] flex-col items-center flex-nowrap bg-[#f7fafc] relative mx-auto my-0">
      <div className="flex h-[80px] pt-0 pr-[120px] pb-0 pl-[120px] justify-between items-center self-stretch shrink-0 flex-nowrap bg-[#fff] border-solid border-t border-t-[#e2e8f0] relative">
        <div className="flex w-[246px] gap-[24px] items-center shrink-0 flex-nowrap relative z-[1]">
          <div className="flex w-[43px] gap-[8px] items-center shrink-0 flex-nowrap relative z-[2]">
            <span className="flex w-[43px] h-[22px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-medium leading-[21.875px] text-[#4a5568] relative text-right whitespace-nowrap z-[3]">
              بازگشت
            </span>
          </div>
          <div className="flex w-px h-[16px] items-start shrink-0 flex-nowrap bg-[#e2e8f0] relative z-[4]" />
          <div className="flex w-[154px] gap-[8px] items-center shrink-0 flex-nowrap relative z-[5]">
            <div className="w-[16px] h-[16px] shrink-0 bg-[url(/assets/codia/ypmzGpj0vR.svg)] bg-cover bg-no-repeat relative overflow-hidden z-[6]" />
            <span className="flex w-[130px] h-[22px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-medium leading-[21.875px] text-[#718096] relative text-right whitespace-nowrap z-[7]">
              بازگشت به صفحه اصلی
            </span>
          </div>
        </div>
        <div className="flex w-[137px] gap-[12px] items-center shrink-0 flex-nowrap relative z-[8]">
          <div className="flex w-[137px] gap-[12px] items-center shrink-0 flex-nowrap relative z-[9]">
            <img
              className="w-[137px] h-[46px] shrink-0 object-contain relative z-10"
              src="/assets/codia/808FogDYer.png"
              alt="سامانه ماه"
            />
          </div>
        </div>
      </div>
      <div className="flex pt-[40px] pr-0 pb-[40px] pl-0 flex-col gap-[32px] justify-center items-center self-stretch grow shrink-0 basis-0 flex-nowrap relative z-[11]">
        <div className="flex w-[880px] pt-[36px] pr-[36px] pb-[36px] pl-[36px] flex-col gap-[28px] items-start shrink-0 flex-nowrap bg-[#fff] rounded-[24px] border-solid border border-[#e2e8f0] relative shadow-[0_4px_20px_0_rgba(0,0,0,0.02)] z-[12]">
          <div className="flex justify-between items-center self-stretch shrink-0 flex-nowrap relative z-[13]">
            <div className="flex w-[70px] pt-[6px] pr-[12px] pb-[6px] pl-[12px] justify-center items-center shrink-0 flex-nowrap bg-[#fef0ee] rounded-[100px] relative z-[14]">
              <span className="flex w-[46px] h-[19px] justify-center items-start shrink-0 basis-auto font-['Vazirmatn'] text-[12px] font-semibold leading-[18.75px] text-[#dc2626] relative text-center whitespace-nowrap z-[15]">
                تأیید نشد
              </span>
            </div>
            <div className="flex w-[215px] flex-col gap-[4px] items-end shrink-0 flex-nowrap relative z-[16]">
              <span className="flex w-[215px] h-[31px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[20px] font-bold leading-[31px] text-[#1a202c] relative text-right whitespace-nowrap z-[17]">
                نتیجه بررسی پرونده ثبت‌نام
              </span>
              <span className="flex w-[167px] h-[20px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[13px] font-normal leading-[20px] text-[#718096] relative text-right whitespace-nowrap z-[18]">
                آخرین به‌روزرسانی: ۲۶ مرداد ۱۴۰۵
              </span>
            </div>
          </div>
          <div className="flex h-px items-start self-stretch shrink-0 flex-nowrap bg-[#e2e8f0] relative z-[19]" />
          <div className="flex pt-[24px] pr-[24px] pb-[24px] pl-[24px] flex-col gap-[16px] items-end self-stretch shrink-0 flex-nowrap bg-[#fef0ee] rounded-[16px] border-solid border border-[#dc2626] relative z-20">
            <div className="flex w-[342px] gap-[8px] items-center shrink-0 flex-nowrap relative z-[21]">
              <span className="flex w-[314px] h-[25px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[16px] font-bold leading-[25px] text-[#dc2626] relative text-right whitespace-nowrap z-[22]">
                پرونده شما در وضعیت عدم تأیید نهایی قرار گرفت
              </span>
              <div className="w-[20px] h-[20px] shrink-0 bg-[url(/assets/codia/jGvoBGuxQh.svg)] bg-cover bg-no-repeat relative overflow-hidden z-[23]" />
            </div>
            <span className="h-[22px] self-stretch shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-normal leading-[21.875px] text-[#1a202c] relative text-right whitespace-nowrap z-[24]">
              متأسفانه درخواست ثبت‌نام شما بر اساس اسناد ارائه شده و معیارهای
              کارگروه ارزیابی نهایی در تاریخ ۲۶ مرداد ۱۴۰۵ رد شده است.
            </span>
          </div>
          <div className="flex pt-[20px] pr-[20px] pb-[20px] pl-[20px] flex-col gap-[12px] items-end self-stretch shrink-0 flex-nowrap bg-[#f7fafc] rounded-[16px] relative z-[25]">
            <span className="flex w-[178px] h-[22px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-bold leading-[21.875px] text-[#1a202c] relative text-right whitespace-nowrap z-[26]">
              دلیل عدم احراز صلاحیت حقوقی
            </span>
            <span className="flex w-[768px] h-[44px] justify-end items-start self-stretch shrink-0 font-['Vazirmatn'] text-[13px] font-normal leading-[22px] text-[#4a5568] relative text-right z-[27]">
              عدم تطابق اساسنامه شرکت با حوزه‌های فناوری مورد تایید سامانه، مضاف
              بر اینکه سرمایه ثبتی شرکت و گردش حساب معرفی شده، با حداقل نصاب
              مورد نیاز جهت مشارکت‌های مادی و ماده ۱۷۲ مصوب همخوانی ندارد.
            </span>
          </div>
          <div className="flex w-[351px] gap-[12px] justify-center items-center self-stretch shrink-0 flex-nowrap relative z-[28]">
            <div className="flex w-[178px] h-[48px] pt-[12px] pr-[24px] pb-[12px] pl-[24px] justify-center items-center shrink-0 flex-nowrap rounded-[12px] relative overflow-hidden z-[29]">
              <span className="h-[25px] grow shrink-0 basis-auto font-['Vazirmatn'] text-[16px] font-bold leading-[25px] text-[#fff] relative text-center whitespace-nowrap z-30">
                ثبت درخواست جدید
              </span>
            </div>
            <div className="flex w-[161px] h-[48px] pt-[12px] pr-[24px] pb-[12px] pl-[24px] justify-center items-center shrink-0 flex-nowrap bg-[#fff] rounded-[12px] border-solid border border-[#e2e8f0] relative overflow-hidden z-[31]">
              <span className="h-[25px] grow shrink-0 basis-auto font-['Vazirmatn'] text-[16px] font-bold leading-[25px] text-[#333f54] relative text-center whitespace-nowrap z-[32]">
                تماس با پشتیبانی
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
