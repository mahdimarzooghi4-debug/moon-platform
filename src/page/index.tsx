import React from "react";
import "./index.css";

export default function Main() {
  return (
    <div className="main-container flex w-[1440px] items-start flex-nowrap bg-[#f7fafc] relative overflow-hidden mx-auto my-0">
      <div className="flex w-[648px] pt-[48px] pr-[48px] pb-[48px] pl-[48px] flex-col justify-center items-center self-stretch shrink-0 flex-nowrap bg-[#f7fafc] relative">
        <div className="flex flex-col gap-[28px] items-start self-stretch shrink-0 flex-nowrap relative z-[1]">
          <div className="flex pt-[36px] pr-[36px] pb-[36px] pl-[36px] flex-col gap-[24px] items-start self-stretch shrink-0 flex-nowrap bg-[#fff] rounded-[24px] border-solid border border-[#e4ebf1] relative shadow-[0_4px_16px_0_rgba(22,45,71,0.08)] z-[2]">
            <div className="flex flex-col gap-[8px] items-end self-stretch shrink-0 flex-nowrap relative z-[3]">
              <div className="flex w-[109px] pt-[6px] pr-[12px] pb-[6px] pl-[12px] justify-center items-center shrink-0 flex-nowrap bg-[#fff6e5] rounded-[12px] relative z-[4]">
                <span className="flex w-[85px] h-[20px] justify-center items-start shrink-0 basis-auto font-['Vazirmatn'] text-[12px] font-normal leading-[20px] text-[#c27a10] relative text-center whitespace-nowrap z-[5]">
                  پشتیبانی دسترسی
                </span>
              </div>
              <span className="h-[38px] self-stretch shrink-0 basis-auto font-['Vazirmatn'] text-[24px] font-bold leading-[37.5px] text-[#17324d] relative text-right whitespace-nowrap z-[6]">
                بازیابی دسترسی
              </span>
              <span className="h-[22px] self-stretch shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-normal leading-[22px] text-[#60758a] relative text-right whitespace-nowrap z-[7]">
                ایمیل سازمانی خود را وارد کنید تا لینک تغییر رمز عبور برای شما
                ارسال شود.
              </span>
            </div>
            <div className="flex flex-col gap-[6px] items-start self-stretch shrink-0 flex-nowrap relative z-[8]">
              <span className="h-[20px] self-stretch shrink-0 basis-auto font-['Vazirmatn'] text-[13px] font-medium leading-[20px] text-[#17324d] relative text-right whitespace-nowrap z-[9]">
                ایمیل سازمانی
              </span>
              <div className="flex pt-[11px] pr-[14px] pb-[11px] pl-[14px] gap-[8px] items-center self-stretch shrink-0 flex-nowrap bg-[#fff] rounded-[12px] border-solid border border-[#e4ebf1] relative z-10">
                <span className="h-[22px] grow shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-normal leading-[21.875px] text-[#60758a] relative text-right overflow-hidden whitespace-nowrap z-[11]">
                  name@organization.ir
                </span>
              </div>
            </div>
            <div className="flex pt-[11px] pr-[20px] pb-[11px] pl-[20px] gap-[8px] justify-center items-center self-stretch shrink-0 flex-nowrap bg-[#2094e3] rounded-[12px] relative z-[12]">
              <span className="flex w-[119px] h-[22px] justify-center items-start shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-medium leading-[22px] text-[#fff] relative text-center whitespace-nowrap z-[13]">
                ارسال راهنمای بازیابی
              </span>
            </div>
            <div className="flex gap-[12px] items-center self-stretch shrink-0 flex-nowrap relative z-[14]">
              <div className="h-px grow shrink-0 basis-0 bg-[url(/assets/codia/YPb8bV2EQE.svg)] bg-cover bg-no-repeat relative z-[15]" />
            </div>
            <div className="flex gap-[6px] justify-center items-start self-stretch shrink-0 flex-nowrap relative z-[16]">
              <span className="flex w-[141px] h-[20px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[13px] font-normal leading-[20px] text-[#60758a] relative text-right whitespace-nowrap z-[17]">
                مایل به ورود دوباره هستید؟
              </span>
              <span className="flex w-[81px] h-[20px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[13px] font-semibold leading-[20px] text-[#2094e3] relative text-right whitespace-nowrap z-[18]">
                بازگشت به ورود
              </span>
            </div>
          </div>
          <div className="flex flex-col gap-[12px] items-center self-stretch shrink-0 flex-nowrap relative z-[19]">
            <div className="flex w-[313px] gap-[16px] justify-center items-start shrink-0 flex-nowrap relative z-20">
              <span className="flex w-[69px] h-[19px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[12px] font-normal leading-[18.75px] text-[#60758a] relative text-right whitespace-nowrap z-[21]">
                حریم خصوصی
              </span>
              <span className="h-[19px] shrink-0 basis-auto font-['Vazirmatn'] text-[12px] font-normal leading-[18.75px] text-[#60758a] relative text-left whitespace-nowrap z-[22]">
                |
              </span>
              <span className="flex w-[70px] h-[19px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[12px] font-normal leading-[18.75px] text-[#60758a] relative text-right whitespace-nowrap z-[23]">
                شرایط استفاده
              </span>
              <span className="h-[19px] shrink-0 basis-auto font-['Vazirmatn'] text-[12px] font-normal leading-[18.75px] text-[#60758a] relative text-left whitespace-nowrap z-[24]">
                |
              </span>
              <span className="flex w-[104px] h-[19px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[12px] font-normal leading-[18.75px] text-[#60758a] relative text-right whitespace-nowrap z-[25]">
                راهنمای امنیت حساب
              </span>
            </div>
            <span className="flex w-[224px] h-[17px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[11px] font-normal leading-[17px] text-[#60758a] relative text-right whitespace-nowrap z-[26]">
              © سامانه ماه · مدیریت مسئولیت اجتماعی هوشمند
            </span>
          </div>
        </div>
      </div>
      <div className="flex w-[792px] pt-[64px] pr-[64px] pb-[64px] pl-[64px] flex-col justify-between items-start self-stretch shrink-0 flex-nowrap bg-[#eaf5fd] border-solid border-l border-l-[#e4ebf1] relative z-[27]">
        <div className="flex gap-[12px] justify-end items-center self-stretch shrink-0 flex-nowrap relative z-[28]">
          <img
            src="/assets/codia/jWa9V1o1pd.png"
            alt="لوگوی سامانه ماه"
            className="w-[137px] h-[46px] shrink-0 object-contain relative z-[29]"
          />
        </div>
        <div className="flex flex-col gap-[32px] items-end self-stretch shrink-0 flex-nowrap relative z-30">
          <div className="flex flex-col gap-[12px] items-end self-stretch shrink-0 flex-nowrap relative z-[31]">
            <div className="flex w-[136px] justify-end items-start shrink-0 flex-nowrap relative z-[32]">
              <div className="flex w-[136px] pt-[6px] pr-[12px] pb-[6px] pl-[12px] justify-center items-center shrink-0 flex-nowrap bg-[#eaf5fd] rounded-[12px] relative z-[33]">
                <span className="flex w-[112px] h-[20px] justify-center items-start shrink-0 basis-auto font-['Vazirmatn'] text-[12px] font-normal leading-[20px] text-[#2094e3] relative text-center whitespace-nowrap z-[34]">
                  مدیریت محتوای عمومی
                </span>
              </div>
            </div>
            <span className="h-[50px] self-stretch shrink-0 basis-auto font-['Vazirmatn'] text-[32px] font-bold leading-[50px] text-[#17324d] relative text-right whitespace-nowrap z-[35]">
              مدیریت شفاف محتوای سامانه ماه
            </span>
            <span className="flex w-[664px] h-[52px] justify-end items-start self-stretch shrink-0 font-['Vazirmatn'] text-[15px] font-normal leading-[26px] text-[#60758a] relative text-right z-[36]">
              این بخش فقط در اختیار اعضای تأییدشده تیم محتوا، بازبین‌ها و ناشران
              سامانه قرار دارد. دسترسی به پنل CMS مشمول سیاست‌ها و راهنمای امنیت
              حساب است.
            </span>
          </div>
          <div className="flex flex-col gap-[16px] items-start self-stretch shrink-0 flex-nowrap relative z-[37]">
            <div className="flex gap-[12px] justify-end items-center self-stretch shrink-0 flex-nowrap relative z-[38]">
              <span className="flex w-[131px] h-[22px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-medium leading-[21.875px] text-[#17324d] relative text-right whitespace-nowrap z-[39]">
                مدیریت محتوای عمومی
              </span>
              <div className="flex w-[32px] h-[32px] justify-center items-center shrink-0 flex-nowrap bg-[#fff] rounded-[8px] border-solid border border-[#e4ebf1] relative z-40">
                <div className="w-[16px] h-[16px] shrink-0 bg-[url(/assets/codia/j5EmmAqanF.svg)] bg-cover bg-no-repeat relative overflow-hidden z-[41]" />
              </div>
            </div>
            <div className="flex gap-[12px] justify-end items-center self-stretch shrink-0 flex-nowrap relative z-[42]">
              <span className="flex w-[142px] h-[22px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-medium leading-[21.875px] text-[#17324d] relative text-right whitespace-nowrap z-[43]">
                بازبینی و انتشار کنترل‌شده
              </span>
              <div className="flex w-[32px] h-[32px] justify-center items-center shrink-0 flex-nowrap bg-[#fff] rounded-[8px] border-solid border border-[#e4ebf1] relative z-[44]">
                <div className="w-[16px] h-[16px] shrink-0 bg-[url(/assets/codia/4HRGEtZWLy.svg)] bg-cover bg-no-repeat relative overflow-hidden z-[45]" />
              </div>
            </div>
            <div className="flex gap-[12px] justify-end items-center self-stretch shrink-0 flex-nowrap relative z-[46]">
              <span className="flex w-[118px] h-[22px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-medium leading-[21.875px] text-[#17324d] relative text-right whitespace-nowrap z-[47]">
                ثبت و ردیابی تغییرات
              </span>
              <div className="flex w-[32px] h-[32px] justify-center items-center shrink-0 flex-nowrap bg-[#fff] rounded-[8px] border-solid border border-[#e4ebf1] relative z-[48]">
                <div className="w-[16px] h-[16px] shrink-0 bg-[url(/assets/codia/mMV7tdSOtM.svg)] bg-cover bg-no-repeat relative overflow-hidden z-[49]" />
              </div>
            </div>
          </div>
        </div>
        <div className="flex gap-[8px] justify-end items-center self-stretch shrink-0 flex-nowrap relative z-50">
          <span className="h-[19px] grow shrink-0 basis-auto font-['Vazirmatn'] text-[12px] font-normal leading-[18.75px] text-[#60758a] relative text-right whitespace-nowrap z-[51]">
            دسترسی به این بخش براساس نقش سازمانی و مجوزهای تأییدشده انجام
            می‌شود.
          </span>
          <div className="w-[14px] h-[14px] shrink-0 bg-[url(/assets/codia/sMGYNqtfcn.svg)] bg-cover bg-no-repeat relative overflow-hidden z-[52]" />
        </div>
      </div>
    </div>
  );
}
