import React from "react";
import "./index.css";

export default function Main() {
  return (
    <div className="main-container flex w-[1440px] flex-col items-center flex-nowrap bg-[#f7fafc] relative mx-auto my-0">
      <div className="flex h-[80px] pt-0 pr-[120px] pb-0 pl-[120px] justify-between items-center self-stretch shrink-0 flex-nowrap bg-[#fff] border-solid border-t border-t-[#e2e8f0] relative">
        <div className="flex w-[284px] gap-[24px] items-center shrink-0 flex-nowrap relative z-[1]">
          <div className="flex w-[81px] gap-[8px] items-center shrink-0 flex-nowrap relative z-[2]">
            <span className="flex w-[81px] h-[22px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-medium leading-[21.875px] text-[#4a5568] relative text-right whitespace-nowrap z-[3]">
              ورود به سامانه
            </span>
          </div>
          <div className="flex w-px h-[16px] items-start shrink-0 flex-nowrap bg-[#e2e8f0] relative z-[4]" />
          <div className="flex w-[154px] gap-[8px] items-center shrink-0 flex-nowrap relative z-[5]">
            <div className="w-[16px] h-[16px] shrink-0 bg-[url('/assets/arrow-left.png')] bg-cover bg-no-repeat relative overflow-hidden z-[6]" />
            <span className="flex w-[130px] h-[22px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-medium leading-[21.875px] text-[#718096] relative text-right whitespace-nowrap z-[7]">
              بازگشت به صفحه اصلی
            </span>
          </div>
        </div>
        <div className="flex w-[137px] gap-[12px] items-center shrink-0 flex-nowrap relative z-[8]">
          <div className="flex w-[137px] gap-[12px] items-center shrink-0 flex-nowrap relative z-[9]">
            <div className="flex w-[137px] gap-[12px] items-center shrink-0 flex-nowrap relative z-10">
              <div className="w-[137px] h-[46px] shrink-0 bg-[url('/assets/logo.png')] bg-cover bg-no-repeat relative z-[11]" />
            </div>
          </div>
        </div>
      </div>
      <div className="flex pt-[64px] pr-0 pb-[64px] pl-0 flex-col gap-[32px] items-center self-stretch shrink-0 flex-nowrap relative z-[12]">
        <div className="flex w-[880px] pt-[36px] pr-[36px] pb-[36px] pl-[36px] flex-col gap-[28px] items-start shrink-0 flex-nowrap bg-[#fff] rounded-[24px] border-solid border border-[#e2e8f0] relative shadow-[0_4px_20px_0_rgba(0,0,0,0.02)] z-[13]">
          <div className="flex justify-between items-center self-stretch shrink-0 flex-nowrap relative z-[14]">
            <div className="flex w-[164px] pt-[6px] pr-[12px] pb-[6px] pl-[12px] justify-center items-center shrink-0 flex-nowrap bg-[#eaf5fd] rounded-[100px] relative z-[15]">
              <span className="flex w-[140px] h-[19px] justify-center items-start shrink-0 basis-auto font-['Vazirmatn'] text-[12px] font-semibold leading-[18.75px] text-[#2094e3] relative text-center whitespace-nowrap z-[16]">
                در حال بررسی هویتی و مدارک
              </span>
            </div>
            <div className="flex w-[246px] flex-col gap-[4px] items-end shrink-0 flex-nowrap relative z-[17]">
              <span className="flex w-[246px] h-[31px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[20px] font-bold leading-[31px] text-[#1a202c] relative text-right whitespace-nowrap z-[18]">
                وضعیت درخواست ثبت‌نام شما
              </span>
              <span className="flex w-[167px] h-[20px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[13px] font-normal leading-[20px] text-[#718096] relative text-right whitespace-nowrap z-[19]">
                آخرین به‌روزرسانی: ۲۲ مرداد ۱۴۰۵
              </span>
            </div>
          </div>
          <div className="flex h-px items-start self-stretch shrink-0 flex-nowrap bg-[#e2e8f0] relative z-20" />
          <div className="flex gap-[16px] items-start self-stretch shrink-0 flex-wrap relative z-[21]">
            <div className="flex pt-[12px] pr-[12px] pb-[12px] pl-[12px] flex-col gap-[4px] items-end grow basis-0 flex-nowrap bg-[#f7fafc] rounded-[12px] relative z-[22]">
              <span className="flex w-[96px] h-[19px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[12px] font-normal leading-[18.75px] text-[#718096] relative text-right whitespace-nowrap z-[23]">
                تاریخ ثبت درخواست
              </span>
              <span className="flex w-[78px] h-[22px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-semibold leading-[21.875px] text-[#1a202c] relative text-right whitespace-nowrap z-[24]">
                ۲۰ مرداد ۱۴۰۵
              </span>
            </div>
            <div className="flex pt-[12px] pr-[12px] pb-[12px] pl-[12px] flex-col gap-[4px] items-end grow basis-0 flex-nowrap bg-[#f7fafc] rounded-[12px] relative z-[25]">
              <span className="flex w-[69px] h-[19px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[12px] font-normal leading-[18.75px] text-[#718096] relative text-right whitespace-nowrap z-[26]">
                کد پیگیری ملی
              </span>
              <span className="flex w-[116px] h-[22px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-semibold leading-[21.875px] text-[#1a202c] relative text-right whitespace-nowrap z-[27]">
                MAH-C-۱۴۰۵-۰۰۲۴
              </span>
            </div>
            <div className="flex pt-[12px] pr-[12px] pb-[12px] pl-[12px] flex-col gap-[4px] items-end grow basis-0 flex-nowrap bg-[#f7fafc] rounded-[12px] relative z-[28]">
              <span className="flex w-[79px] h-[19px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[12px] font-normal leading-[18.75px] text-[#718096] relative text-right whitespace-nowrap z-[29]">
                نام ثبتی متقاضی
              </span>
              <span className="flex w-[129px] h-[22px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-semibold leading-[21.875px] text-[#1a202c] relative text-right whitespace-nowrap z-30">
                شرکت توسعه پایدار آریا
              </span>
            </div>
            <div className="flex pt-[12px] pr-[12px] pb-[12px] pl-[12px] flex-col gap-[4px] items-end grow basis-0 flex-nowrap bg-[#f7fafc] rounded-[12px] relative z-[31]">
              <span className="flex w-[66px] h-[19px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[12px] font-normal leading-[18.75px] text-[#718096] relative text-right whitespace-nowrap z-[32]">
                نوع درخواست
              </span>
              <span className="flex w-[131px] h-[22px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-semibold leading-[21.875px] text-[#1a202c] relative text-right whitespace-nowrap z-[33]">
                ثبت‌نام شرکت و سازمان
              </span>
            </div>
          </div>
          <div className="flex flex-col gap-[16px] items-end self-stretch shrink-0 flex-nowrap relative z-[34]">
            <span className="flex w-[128px] h-[25px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[16px] font-bold leading-[25px] text-[#1a202c] relative text-right whitespace-nowrap z-[35]">
              مراحل بررسی پرونده
            </span>
            <div className="flex gap-[16px] justify-end items-start self-stretch shrink-0 flex-nowrap relative z-[36]">
              <div className="flex flex-col gap-[4px] items-end grow shrink-0 basis-0 flex-nowrap relative z-[37]">
                <span className="flex w-[164px] h-[22px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-semibold leading-[21.875px] text-[#1a202c] relative text-right whitespace-nowrap z-[38]">
                  درخواست با موفقیت ثبت شد
                </span>
                <span className="flex w-[318px] h-[19px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[12px] font-normal leading-[18.75px] text-[#718096] relative text-right whitespace-nowrap z-[39]">
                  پرونده دیجیتال تشکیل و به کارتابل ارزیابی ارجاع داده شد. (۲۰
                  مرداد)
                </span>
              </div>
              <div className="flex w-[24px] flex-col items-center self-stretch shrink-0 flex-nowrap relative z-40">
                <div className="flex w-[24px] h-[24px] justify-center items-center shrink-0 flex-nowrap bg-[#eaf8f0] rounded-[12px] relative z-[41]">
                  <div className="w-[14px] h-[14px] shrink-0 bg-[url('/assets/check.png')] bg-cover bg-no-repeat relative overflow-hidden z-[42]" />
                </div>
                <div className="w-[2px] h-[40px] shrink-0 bg-[#38a169] relative z-[43]" />
              </div>
            </div>
            <div className="flex gap-[16px] justify-end items-start self-stretch shrink-0 flex-nowrap relative z-[44]">
              <div className="flex flex-col gap-[4px] items-end grow shrink-0 basis-0 flex-nowrap relative z-[45]">
                <span className="flex w-[158px] h-[22px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-semibold leading-[21.875px] text-[#1a202c] relative text-right whitespace-nowrap z-[46]">
                  بررسی اطلاعات هویتی و ثبتی
                </span>
                <span className="flex w-[400px] h-[19px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[12px] font-normal leading-[18.75px] text-[#718096] relative text-right whitespace-nowrap z-[47]">
                  اطلاعات شناسه ملی و نمایندگان با سامانه ثبت شرکت‌ها تطبیق و
                  تأیید شد. (۲۱ مرداد)
                </span>
              </div>
              <div className="flex w-[24px] flex-col items-center self-stretch shrink-0 flex-nowrap relative z-[48]">
                <div className="flex w-[24px] h-[24px] justify-center items-center shrink-0 flex-nowrap bg-[#eaf8f0] rounded-[12px] relative z-[49]">
                  <div className="w-[14px] h-[14px] shrink-0 bg-[url('/assets/check.png')] bg-cover bg-no-repeat relative overflow-hidden z-50" />
                </div>
                <div className="w-[2px] h-[40px] shrink-0 bg-[#2094e3] relative z-[51]" />
              </div>
            </div>
            <div className="flex gap-[16px] justify-end items-start self-stretch shrink-0 flex-nowrap relative z-[52]">
              <div className="flex flex-col gap-[4px] items-end grow shrink-0 basis-0 flex-nowrap relative z-[53]">
                <span className="flex w-[173px] h-[22px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-semibold leading-[21.875px] text-[#2094e3] relative text-right whitespace-nowrap z-[54]">
                  بررسی مدارک و اهداف مشارکت
                </span>
                <span className="flex w-[375px] h-[19px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[12px] font-normal leading-[18.75px] text-[#2094e3] relative text-right whitespace-nowrap z-[55]">
                  کارشناسان حقوقی و مالی در حال ارزیابی اسناد بارگذاری‌شده
                  می‌باشند. (۲۲ مرداد)
                </span>
              </div>
              <div className="flex w-[24px] flex-col items-center self-stretch shrink-0 flex-nowrap relative z-[56]">
                <div className="w-[24px] h-[24px] shrink-0 bg-[url('/assets/active-status.png')] bg-cover bg-no-repeat relative z-[57]" />
                <div className="w-[2px] h-[40px] shrink-0 bg-[#e2e8f0] relative z-[59]" />
              </div>
            </div>
            <div className="flex gap-[16px] justify-end items-start self-stretch shrink-0 flex-nowrap relative z-[60]">
              <div className="flex flex-col gap-[4px] items-end grow shrink-0 basis-0 flex-nowrap relative z-[61]">
                <span className="flex w-[134px] h-[22px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-medium leading-[21.875px] text-[#718096] relative text-right whitespace-nowrap z-[62]">
                  ارزیابی نهایی کارگروه ماه
                </span>
                <span className="flex w-[206px] h-[19px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[12px] font-normal leading-[18.75px] text-[#a0aec0] relative text-right whitespace-nowrap z-[63]">
                  در انتظار تکمیل مراحل قبلی ارزیابی تخصصی
                </span>
              </div>
              <div className="flex w-[24px] flex-col items-center self-stretch shrink-0 flex-nowrap relative z-[64]">
                <div className="flex w-[24px] h-[24px] items-start shrink-0 flex-nowrap bg-[#f7fafc] rounded-[12px] border-solid border-2 border-[#e2e8f0] relative z-[65]" />
                <div className="w-[2px] h-[40px] shrink-0 bg-[#e2e8f0] relative z-[66]" />
              </div>
            </div>
            <div className="flex gap-[16px] justify-end items-start self-stretch shrink-0 flex-nowrap relative z-[67]">
              <div className="flex flex-col gap-[4px] items-end grow shrink-0 basis-0 flex-nowrap relative z-[68]">
                <span className="flex w-[182px] h-[22px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-medium leading-[21.875px] text-[#718096] relative text-right whitespace-nowrap z-[69]">
                  اعلام نتیجه نهایی و تخصیص پنل
                </span>
                <span className="flex w-[245px] h-[19px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[12px] font-normal leading-[18.75px] text-[#a0aec0] relative text-right whitespace-nowrap z-[70]">
                  نتیجه بررسی نهایی از طریق پیامک ارسال خواهد شد.
                </span>
              </div>
              <div className="flex w-[24px] flex-col items-center self-stretch shrink-0 flex-nowrap relative z-[71]">
                <div className="flex w-[24px] h-[24px] items-start shrink-0 flex-nowrap bg-[#f7fafc] rounded-[12px] border-solid border-2 border-[#e2e8f0] relative z-[72]" />
              </div>
            </div>
          </div>
          <div className="flex pt-[16px] pr-[16px] pb-[16px] pl-[16px] gap-[12px] items-center self-stretch shrink-0 flex-nowrap bg-[#eaf5fd] rounded-[16px] relative z-[73]">
            <span className="h-[20px] grow shrink-0 basis-auto font-['Vazirmatn'] text-[13px] font-normal leading-[20px] text-[#2094e3] relative text-right whitespace-nowrap z-[74]">
              پرونده شما در صف بررسی کارگروه تخصصی ماه است. میانگین زمان
              پاسخگویی برای درخواست‌های سازمانی ۳ روز کاری می‌باشد.
            </span>
            <div className="w-[20px] h-[20px] shrink-0 bg-[url('/assets/info.png')] bg-cover bg-no-repeat relative overflow-hidden z-[75]" />
          </div>
          <div className="flex w-[406px] gap-[24px] justify-center items-center self-stretch shrink-0 flex-nowrap relative z-[76]">
            <span className="h-[22px] shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-medium leading-[21.875px] text-[#2094e3] relative text-left whitespace-nowrap z-[77]">
              دریافت رسید درخواست
            </span>
            <span className="h-[22px] shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-medium leading-[21.875px] text-[#2094e3] relative text-left whitespace-nowrap z-[78]">
              چاپ وضعیت درخواست
            </span>
            <span className="h-[22px] shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-medium leading-[21.875px] text-[#2094e3] relative text-left whitespace-nowrap z-[79]">
              تماس با پشتیبانی
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
