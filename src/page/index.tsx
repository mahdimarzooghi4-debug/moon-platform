import React from "react";
import "./index.css";

export default function Main() {
  return (
    <div className="main-container flex w-[1440px] h-[900px] items-start flex-nowrap bg-[#f7fafc] relative overflow-hidden mx-auto my-0">
      <div className="flex w-[648px] pt-[48px] pr-[48px] pb-[48px] pl-[48px] flex-col justify-center items-center self-stretch shrink-0 flex-nowrap bg-[#f7fafc] relative">
        <div className="flex flex-col gap-[28px] items-start self-stretch shrink-0 flex-nowrap relative z-[1]">
          <div className="flex pt-[36px] pr-[36px] pb-[36px] pl-[36px] flex-col gap-[24px] items-start self-stretch shrink-0 flex-nowrap bg-[#fff] rounded-[24px] border-solid border border-[#e4ebf1] relative shadow-[0_4px_8px_0_rgba(23,46,71,0.08)] z-[2]">
            <div className="flex flex-col gap-[8px] items-end self-stretch shrink-0 flex-nowrap relative z-[3]">
              <div className="flex w-[97px] pt-[6px] pr-[12px] pb-[6px] pl-[12px] justify-center items-center shrink-0 flex-nowrap bg-[#fff6e5] rounded-[12px] relative z-[4]">
                <span className="flex w-[73px] h-[20px] justify-center items-start shrink-0 basis-auto font-['Vazirmatn'] text-[12px] font-normal leading-[20px] text-[#c27a10] relative text-center whitespace-nowrap z-[5]">
                  انقضای نشست
                </span>
              </div>
              <span className="h-[34px] self-stretch shrink-0 basis-auto font-['Vazirmatn'] text-[22px] font-bold leading-[34px] text-[#17324d] relative text-right whitespace-nowrap z-[6]">
                نشست شما منقضی شده است
              </span>
              <span className="h-[22px] self-stretch shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-normal leading-[22px] text-[#60758a] relative text-right whitespace-nowrap z-[7]">
                برای ادامه کار دوباره وارد حساب سازمانی خود شوید.
              </span>
            </div>
            <div className="flex pt-[16px] pr-[16px] pb-[16px] pl-[16px] gap-[12px] items-center self-stretch shrink-0 flex-nowrap bg-[#eaf6fa] rounded-[12px] relative z-[8]">
              <div className="flex flex-col gap-[4px] items-end grow shrink-0 basis-0 flex-nowrap relative z-[9]">
                <span className="flex w-[342px] h-[20px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[13px] font-normal leading-[20px] text-[#17324d] relative text-right whitespace-nowrap z-10">
                  آخرین تغییرات ذخیره‌شده پس از ورود مجدد در دسترس خواهد بود.
                </span>
              </div>
            </div>
            <div className="flex flex-col gap-[12px] items-start self-stretch shrink-0 flex-nowrap relative z-[11]">
              <div className="flex pt-[11px] pr-[20px] pb-[11px] pl-[20px] gap-[8px] justify-center items-center self-stretch shrink-0 flex-nowrap bg-[#2094e3] rounded-[12px] relative z-[12]">
                <span className="flex w-[60px] h-[22px] justify-center items-start shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-medium leading-[22px] text-[#fff] relative text-center whitespace-nowrap z-[13]">
                  ورود مجدد
                </span>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-[12px] items-center self-stretch shrink-0 flex-nowrap relative z-[14]">
            <div className="flex w-[313px] gap-[16px] justify-center items-start shrink-0 flex-nowrap relative z-[15]">
              <span className="flex w-[69px] h-[19px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[12px] font-normal leading-[18.75px] text-[#60758a] relative text-right whitespace-nowrap z-[16]">
                حریم خصوصی
              </span>
              <span className="h-[19px] shrink-0 basis-auto font-['Vazirmatn'] text-[12px] font-normal leading-[18.75px] text-[#60758a] relative text-left whitespace-nowrap z-[17]">
                |
              </span>
              <span className="flex w-[70px] h-[19px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[12px] font-normal leading-[18.75px] text-[#60758a] relative text-right whitespace-nowrap z-[18]">
                شرایط استفاده
              </span>
              <span className="h-[19px] shrink-0 basis-auto font-['Vazirmatn'] text-[12px] font-normal leading-[18.75px] text-[#60758a] relative text-left whitespace-nowrap z-[19]">
                |
              </span>
              <span className="flex w-[104px] h-[19px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[12px] font-normal leading-[18.75px] text-[#60758a] relative text-right whitespace-nowrap z-20">
                راهنمای امنیت حساب
              </span>
            </div>
            <span className="flex w-[224px] h-[17px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[11px] font-normal leading-[17px] text-[#60758a] relative text-right whitespace-nowrap z-[21]">
              © سامانه ماه · مدیریت مسئولیت اجتماعی هوشمند
            </span>
          </div>
        </div>
      </div>
      <div className="flex w-[792px] pt-[64px] pr-[64px] pb-[64px] pl-[64px] flex-col justify-between items-end self-stretch shrink-0 flex-nowrap bg-[#eaf5fd] border-solid border-l border-l-[#e4ebf1] relative z-[22]">
        <div className="flex gap-[12px] justify-end items-center self-stretch shrink-0 flex-nowrap relative z-[23]">
          <img src="/assets/codia/qWqkg4gF4B.png" alt="سامانه ماه" className="w-[137px] h-[46px] shrink-0 object-contain relative z-[24]" />
        </div>
        <div className="flex flex-col gap-[32px] items-end self-stretch shrink-0 flex-nowrap relative z-[25]">
          <div className="flex flex-col gap-[12px] items-end self-stretch shrink-0 flex-nowrap relative z-[26]">
            <div className="flex w-[136px] justify-end items-start shrink-0 flex-nowrap relative z-[27]">
              <div className="flex w-[136px] pt-[6px] pr-[12px] pb-[6px] pl-[12px] justify-center items-center shrink-0 flex-nowrap bg-[#eaf5fd] rounded-[12px] relative z-[28]">
                <span className="flex w-[112px] h-[20px] justify-center items-start shrink-0 basis-auto font-['Vazirmatn'] text-[12px] font-normal leading-[20px] text-[#2094e3] relative text-center whitespace-nowrap z-[29]">
                  مدیریت محتوای عمومی
                </span>
              </div>
            </div>
            <span className="h-[50px] self-stretch shrink-0 basis-auto font-['Vazirmatn'] text-[32px] font-bold leading-[50px] text-[#17324d] relative text-right whitespace-nowrap z-30">
              مدیریت شفاف محتوای سامانه ماه
            </span>
            <span className="flex w-[664px] h-[52px] justify-end items-start self-stretch shrink-0 font-['Vazirmatn'] text-[15px] font-normal leading-[26px] text-[#60758a] relative text-right z-[31]">
              این بخش فقط در اختیار اعضای تأییدشده تیم محتوا، بازبین‌ها و ناشران
              سامانه قرار دارد. دسترسی به پنل CMS مشمول سیاست‌ها و راهنمای امنیت
              حساب است.
            </span>
          </div>
          <div className="flex flex-col gap-[16px] items-start self-stretch shrink-0 flex-nowrap relative z-[32]">
            <div className="flex gap-[12px] justify-end items-center self-stretch shrink-0 flex-nowrap relative z-[33]">
              <span className="flex w-[131px] h-[22px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-medium leading-[21.875px] text-[#17324d] relative text-right whitespace-nowrap z-[34]">
                مدیریت محتوای عمومی
              </span>
              <div className="flex w-[32px] h-[32px] justify-center items-center shrink-0 flex-nowrap bg-[#fff] rounded-[8px] border-solid border border-[#e4ebf1] relative z-[35]">
                <div className="w-[16px] h-[16px] shrink-0 bg-[url(/assets/codia/Ca0rBD0P73.svg)] bg-cover bg-no-repeat relative overflow-hidden z-[36]" />
              </div>
            </div>
            <div className="flex gap-[12px] justify-end items-center self-stretch shrink-0 flex-nowrap relative z-[37]">
              <span className="flex w-[142px] h-[22px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-medium leading-[21.875px] text-[#17324d] relative text-right whitespace-nowrap z-[38]">
                بازبینی و انتشار کنترل‌شده
              </span>
              <div className="flex w-[32px] h-[32px] justify-center items-center shrink-0 flex-nowrap bg-[#fff] rounded-[8px] border-solid border border-[#e4ebf1] relative z-[39]">
                <div className="w-[16px] h-[16px] shrink-0 bg-[url(/assets/codia/cjd0w3gSMZ.svg)] bg-cover bg-no-repeat relative overflow-hidden z-40" />
              </div>
            </div>
            <div className="flex gap-[12px] justify-end items-center self-stretch shrink-0 flex-nowrap relative z-[41]">
              <span className="flex w-[118px] h-[22px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-medium leading-[21.875px] text-[#17324d] relative text-right whitespace-nowrap z-[42]">
                ثبت و ردیابی تغییرات
              </span>
              <div className="flex w-[32px] h-[32px] justify-center items-center shrink-0 flex-nowrap bg-[#fff] rounded-[8px] border-solid border border-[#e4ebf1] relative z-[43]">
                <div className="w-[16px] h-[16px] shrink-0 bg-[url(/assets/codia/BGnNVkNTDW.svg)] bg-cover bg-no-repeat relative overflow-hidden z-[44]" />
              </div>
            </div>
          </div>
        </div>
        <div className="flex gap-[8px] justify-end items-center self-stretch shrink-0 flex-nowrap relative z-[45]">
          <span className="h-[19px] grow shrink-0 basis-auto font-['Vazirmatn'] text-[12px] font-normal leading-[18.75px] text-[#60758a] relative text-right whitespace-nowrap z-[46]">
            دسترسی به این بخش براساس نقش سازمانی و مجوزهای تأییدشده انجام
            می‌شود.
          </span>
          <div className="w-[14px] h-[14px] shrink-0 bg-[url(/assets/codia/TYyEwEfFWG.svg)] bg-cover bg-no-repeat relative overflow-hidden z-[47]" />
        </div>
      </div>
    </div>
  );
}
