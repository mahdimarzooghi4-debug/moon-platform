import React from "react";
import "./index.css";

export default function Main() {
  return (
    <div className="main-container flex w-[1440px] h-[900px] items-start flex-nowrap bg-[#f7fafc] relative overflow-hidden mx-auto my-0">
      <div className="flex w-[648px] pt-[48px] pr-[48px] pb-[48px] pl-[48px] flex-col justify-center items-center self-stretch shrink-0 flex-nowrap bg-[#f7fafc] relative">
        <div className="flex flex-col gap-[28px] items-start self-stretch shrink-0 flex-nowrap relative z-[1]">
          <div className="flex pt-[36px] pr-[36px] pb-[36px] pl-[36px] flex-col gap-[24px] items-start self-stretch shrink-0 flex-nowrap bg-[#fff] rounded-[24px] border-solid border border-[#e4ebf1] relative shadow-[0_4px_16px_0_rgba(22,45,71,0.08)] z-[2]">
            <div className="flex flex-col gap-[8px] items-end self-stretch shrink-0 flex-nowrap relative z-[3]">
              <div className="flex w-[102px] pt-[6px] pr-[12px] pb-[6px] pl-[12px] justify-center items-center shrink-0 flex-nowrap bg-[#fff6e5] rounded-[12px] relative z-[4]">
                <span className="flex w-[78px] h-[20px] justify-center items-start shrink-0 basis-auto font-['Vazirmatn'] text-[12px] font-normal leading-[20px] text-[#c27a10] relative text-center whitespace-nowrap z-[5]">
                  اقدام امنیتی لازم
                </span>
              </div>
              <span className="h-[34px] self-stretch shrink-0 basis-auto font-['Vazirmatn'] text-[22px] font-bold leading-[34px] text-[#17324d] relative text-right whitespace-nowrap z-[6]">
                تکمیل امنیت حساب
              </span>
              <span className="h-[22px] self-stretch shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-normal leading-[22px] text-[#60758a] relative text-right whitespace-nowrap z-[7]">
                برای ورود به CMS باید تنظیمات امنیتی حساب خود را تکمیل کنید.
              </span>
            </div>
            <div className="flex flex-col gap-[14px] items-start self-stretch shrink-0 flex-nowrap relative z-[8]">
              <div className="flex gap-[12px] justify-end items-center self-stretch shrink-0 flex-nowrap relative z-[9]">
                <span className="h-[22px] grow shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-normal leading-[21.875px] text-[#60758a] relative text-right whitespace-nowrap z-10">
                  تأیید ایمیل سازمانی
                </span>
                <div className="flex w-[24px] h-[24px] justify-center items-center shrink-0 flex-nowrap bg-[#eaf8f0] rounded-[12px] relative z-[11]">
                  <div className="w-[12px] h-[10px] shrink-0 bg-[url(/assets/codia/d6zQSXQuYY.svg)] bg-cover bg-no-repeat relative overflow-hidden z-[12]" />
                </div>
              </div>
              <div className="flex pt-[12px] pr-[12px] pb-[12px] pl-[12px] gap-[12px] justify-end items-center self-stretch shrink-0 flex-nowrap bg-[#eaf5fd] rounded-[12px] relative z-[13]">
                <div className="flex flex-col gap-[2px] items-start grow shrink-0 basis-0 flex-nowrap relative z-[14]">
                  <span className="h-[22px] self-stretch shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-bold leading-[21.875px] text-[#2094e3] relative text-right whitespace-nowrap z-[15]">
                    فعال‌سازی رمز دومرحله‌ای (MFA)
                  </span>
                  <span className="h-[19px] self-stretch shrink-0 basis-auto font-['Vazirmatn'] text-[12px] font-normal leading-[18.75px] text-[#60758a] relative text-right whitespace-nowrap z-[16]">
                    الزامی برای کلیه مدیران و اعضای پنل محتوا
                  </span>
                </div>
                <div className="flex w-[24px] h-[24px] justify-center items-center shrink-0 flex-nowrap bg-[#eaf5fd] rounded-[12px] relative z-[17]">
                  <div className="w-[8px] h-[8px] shrink-0 bg-[url(/assets/codia/9hPDivRj4U.svg)] bg-cover bg-no-repeat rounded-[50%] relative z-[18]" />
                </div>
              </div>
              <div className="flex gap-[12px] justify-end items-center self-stretch shrink-0 flex-nowrap relative z-[19]">
                <span className="h-[22px] grow shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-normal leading-[21.875px] text-[#60758a] relative text-right whitespace-nowrap z-20">
                  پذیرش سیاست امنیتی و حریم خصوصی
                </span>
                <div className="flex w-[24px] h-[24px] justify-center items-center shrink-0 flex-nowrap bg-[#f7fafc] rounded-[12px] border-solid border border-[#e4ebf1] relative z-[21]" />
              </div>
              <div className="flex gap-[12px] justify-end items-center self-stretch shrink-0 flex-nowrap relative z-[22]">
                <span className="h-[22px] grow shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-normal leading-[21.875px] text-[#60758a] relative text-right whitespace-nowrap z-[23]">
                  به‌روزرسانی رمز عبور دوره جدید
                </span>
                <div className="flex w-[24px] h-[24px] justify-center items-center shrink-0 flex-nowrap bg-[#f7fafc] rounded-[12px] border-solid border border-[#e4ebf1] relative z-[24]" />
              </div>
            </div>
            <div className="flex flex-col gap-[12px] items-start self-stretch shrink-0 flex-nowrap relative z-[25]">
              <div className="flex pt-[11px] pr-[20px] pb-[11px] pl-[20px] gap-[8px] justify-center items-center self-stretch shrink-0 flex-nowrap bg-[#2094e3] rounded-[12px] relative z-[26]">
                <span className="flex w-[120px] h-[22px] justify-center items-start shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-medium leading-[22px] text-[#fff] relative text-center whitespace-nowrap z-[27]">
                  ادامه تنظیمات امنیتی
                </span>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-[12px] items-center self-stretch shrink-0 flex-nowrap relative z-[28]">
            <div className="flex w-[313px] gap-[16px] justify-center items-start shrink-0 flex-nowrap relative z-[29]">
              <span className="flex w-[69px] h-[19px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[12px] font-normal leading-[18.75px] text-[#60758a] relative text-right whitespace-nowrap z-30">
                حریم خصوصی
              </span>
              <span className="h-[19px] shrink-0 basis-auto font-['Vazirmatn'] text-[12px] font-normal leading-[18.75px] text-[#60758a] relative text-left whitespace-nowrap z-[31]">
                |
              </span>
              <span className="flex w-[70px] h-[19px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[12px] font-normal leading-[18.75px] text-[#60758a] relative text-right whitespace-nowrap z-[32]">
                شرایط استفاده
              </span>
              <span className="h-[19px] shrink-0 basis-auto font-['Vazirmatn'] text-[12px] font-normal leading-[18.75px] text-[#60758a] relative text-left whitespace-nowrap z-[33]">
                |
              </span>
              <span className="flex w-[104px] h-[19px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[12px] font-normal leading-[18.75px] text-[#60758a] relative text-right whitespace-nowrap z-[34]">
                راهنمای امنیت حساب
              </span>
            </div>
            <span className="flex w-[224px] h-[17px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[11px] font-normal leading-[17px] text-[#60758a] relative text-right whitespace-nowrap z-[35]">
              © سامانه ماه · مدیریت مسئولیت اجتماعی هوشمند
            </span>
          </div>
        </div>
      </div>
      <div className="flex w-[792px] pt-[64px] pr-[64px] pb-[64px] pl-[64px] flex-col justify-between items-end self-stretch shrink-0 flex-nowrap bg-[#eaf5fd] border-solid border-l border-l-[#e4ebf1] relative z-[36]">
        <div className="flex gap-[12px] justify-end items-center self-stretch shrink-0 flex-nowrap relative z-[37]">
          <img
            className="w-[137px] h-[46px] shrink-0 object-cover relative z-[38]"
            src="/assets/codia/pFQzjPkapO.png"
            alt="سامانه ماه"
          />
        </div>
        <div className="flex flex-col gap-[32px] items-end self-stretch shrink-0 flex-nowrap relative z-[39]">
          <div className="flex flex-col gap-[12px] items-end self-stretch shrink-0 flex-nowrap relative z-40">
            <div className="flex w-[136px] justify-end items-start shrink-0 flex-nowrap relative z-[41]">
              <div className="flex w-[136px] pt-[6px] pr-[12px] pb-[6px] pl-[12px] justify-center items-center shrink-0 flex-nowrap bg-[#eaf5fd] rounded-[12px] relative z-[42]">
                <span className="flex w-[112px] h-[20px] justify-center items-start shrink-0 basis-auto font-['Vazirmatn'] text-[12px] font-normal leading-[20px] text-[#2094e3] relative text-center whitespace-nowrap z-[43]">
                  مدیریت محتوای عمومی
                </span>
              </div>
            </div>
            <span className="h-[50px] self-stretch shrink-0 basis-auto font-['Vazirmatn'] text-[32px] font-bold leading-[50px] text-[#17324d] relative text-right whitespace-nowrap z-[44]">
              مدیریت شفاف محتوای سامانه ماه
            </span>
            <span className="flex w-[664px] h-[52px] justify-end items-start self-stretch shrink-0 font-['Vazirmatn'] text-[15px] font-normal leading-[26px] text-[#60758a] relative text-right z-[45]">
              این بخش فقط در اختیار اعضای تأییدشده تیم محتوا، بازبین‌ها و ناشران
              سامانه قرار دارد. دسترسی به پنل CMS مشمول سیاست‌ها و راهنمای امنیت
              حساب است.
            </span>
          </div>
          <div className="flex flex-col gap-[16px] items-start self-stretch shrink-0 flex-nowrap relative z-[46]">
            <div className="flex gap-[12px] justify-end items-center self-stretch shrink-0 flex-nowrap relative z-[47]">
              <span className="flex w-[131px] h-[22px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-medium leading-[21.875px] text-[#17324d] relative text-right whitespace-nowrap z-[48]">
                مدیریت محتوای عمومی
              </span>
              <div className="flex w-[32px] h-[32px] justify-center items-center shrink-0 flex-nowrap bg-[#fff] rounded-[8px] border-solid border border-[#e4ebf1] relative z-[49]">
                <div className="w-[16px] h-[16px] shrink-0 bg-[url(/assets/codia/TGF2RRtDnW.svg)] bg-cover bg-no-repeat relative overflow-hidden z-50" />
              </div>
            </div>
            <div className="flex gap-[12px] justify-end items-center self-stretch shrink-0 flex-nowrap relative z-[51]">
              <span className="flex w-[142px] h-[22px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-medium leading-[21.875px] text-[#17324d] relative text-right whitespace-nowrap z-[52]">
                بازبینی و انتشار کنترل‌شده
              </span>
              <div className="flex w-[32px] h-[32px] justify-center items-center shrink-0 flex-nowrap bg-[#fff] rounded-[8px] border-solid border border-[#e4ebf1] relative z-[53]">
                <div className="w-[16px] h-[16px] shrink-0 bg-[url(/assets/codia/Ld7JxDZ1iO.svg)] bg-cover bg-no-repeat relative overflow-hidden z-[54]" />
              </div>
            </div>
            <div className="flex gap-[12px] justify-end items-center self-stretch shrink-0 flex-nowrap relative z-[55]">
              <span className="flex w-[118px] h-[22px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-medium leading-[21.875px] text-[#17324d] relative text-right whitespace-nowrap z-[56]">
                ثبت و ردیابی تغییرات
              </span>
              <div className="flex w-[32px] h-[32px] justify-center items-center shrink-0 flex-nowrap bg-[#fff] rounded-[8px] border-solid border border-[#e4ebf1] relative z-[57]">
                <div className="w-[16px] h-[16px] shrink-0 bg-[url(/assets/codia/Nk4bqDR3Js.svg)] bg-cover bg-no-repeat relative overflow-hidden z-[58]" />
              </div>
            </div>
          </div>
        </div>
        <div className="flex gap-[8px] justify-end items-center self-stretch shrink-0 flex-nowrap relative z-[59]">
          <span className="h-[19px] grow shrink-0 basis-auto font-['Vazirmatn'] text-[12px] font-normal leading-[18.75px] text-[#60758a] relative text-right whitespace-nowrap z-[60]">
            دسترسی به این بخش براساس نقش سازمانی و مجوزهای تأییدشده انجام
            می‌شود.
          </span>
          <div className="w-[14px] h-[14px] shrink-0 bg-[url(/assets/codia/z3wFUFe7mf.svg)] bg-cover bg-no-repeat relative overflow-hidden z-[61]" />
        </div>
      </div>
    </div>
  );
}
