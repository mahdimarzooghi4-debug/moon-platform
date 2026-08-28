import React from "react";
import "./index.css";

export default function Main() {
  return (
    <div className="main-container flex w-[1440px] items-start flex-nowrap bg-[#f7fafc] relative overflow-hidden mx-auto my-0">
      <div className="flex w-[648px] pt-[48px] pr-[48px] pb-[48px] pl-[48px] flex-col justify-center items-center self-stretch shrink-0 flex-nowrap bg-[#f7fafc] relative">
        <div className="flex flex-col gap-[28px] items-start self-stretch shrink-0 flex-nowrap relative z-[1]">
          <div className="flex pt-[36px] pr-[36px] pb-[36px] pl-[36px] flex-col gap-[24px] items-start self-stretch shrink-0 flex-nowrap bg-[#fff] rounded-[24px] border-solid border border-[#e4ebf1] relative shadow-[0_4px_16px_0_rgba(22,45,71,0.08)] z-[2]">
            <div className="flex flex-col gap-[8px] items-end self-stretch shrink-0 flex-nowrap relative z-[3]">
              <div className="flex w-[127px] pt-[6px] pr-[12px] pb-[6px] pl-[12px] justify-center items-center shrink-0 flex-nowrap bg-[#eaf5fd] rounded-[12px] relative z-[4]">
                <span className="flex w-[103px] h-[20px] justify-center items-start shrink-0 basis-auto font-['Vazirmatn'] text-[12px] font-normal leading-[20px] text-[#2094e3] relative text-center whitespace-nowrap z-[5]">
                  مدیریت عمومی محتوا
                </span>
              </div>
              <span className="h-[38px] self-stretch shrink-0 basis-auto font-['Vazirmatn'] text-[24px] font-bold leading-[37.5px] text-[#17324d] relative text-right whitespace-nowrap z-[6]">
                ورود به مدیریت محتوا
              </span>
              <span className="h-[22px] self-stretch shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-normal leading-[21.875px] text-[#60758a] relative text-right whitespace-nowrap z-[7]">
                با حساب سازمانی تأییدشده خود وارد شوید.
              </span>
            </div>
            <div className="flex pt-[11px] pr-[20px] pb-[11px] pl-[20px] gap-[8px] justify-center items-center self-stretch shrink-0 flex-nowrap bg-[#fff] rounded-[12px] border-solid border border-[#e4ebf1] relative z-[8]">
              <span className="flex w-[124px] h-[22px] justify-center items-start shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-medium leading-[22px] text-[#2094e3] relative text-center whitespace-nowrap z-[9]">
                ورود با حساب سازمانی
              </span>
            </div>
            <div className="flex gap-[12px] items-center self-stretch shrink-0 flex-nowrap relative z-10">
              <div className="h-px grow shrink-0 basis-0 bg-[url(/assets/codia/J9barG2dRb.svg)] bg-cover bg-no-repeat relative z-[11]" />
              <span className="flex w-[7px] h-[19px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[12px] font-normal leading-[18.75px] text-[#60758a] relative text-right whitespace-nowrap z-[12]">
                یا
              </span>
              <div className="h-px grow shrink-0 basis-0 bg-[url(/assets/codia/3jD6MkOaFo.svg)] bg-cover bg-no-repeat relative z-[13]" />
            </div>
            <div className="flex flex-col gap-[16px] items-start self-stretch shrink-0 flex-nowrap relative z-[14]">
              <div className="flex flex-col gap-[6px] items-start self-stretch shrink-0 flex-nowrap relative z-[15]">
                <span className="h-[20px] self-stretch shrink-0 basis-auto font-['Vazirmatn'] text-[13px] font-medium leading-[20px] text-[#17324d] relative text-right whitespace-nowrap z-[16]">
                  ایمیل سازمانی
                </span>
                <div className="flex pt-[11px] pr-[14px] pb-[11px] pl-[14px] gap-[8px] items-center self-stretch shrink-0 flex-nowrap bg-[#fff] rounded-[12px] border-solid border border-[#e4ebf1] relative z-[17]">
                  <span className="h-[22px] grow shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-normal leading-[21.875px] text-[#60758a] relative text-right overflow-hidden whitespace-nowrap z-[18]">
                    name@organization.ir
                  </span>
                </div>
              </div>
              <div className="flex flex-col gap-[6px] items-start self-stretch shrink-0 flex-nowrap relative z-[19]">
                <span className="h-[20px] self-stretch shrink-0 basis-auto font-['Vazirmatn'] text-[13px] font-medium leading-[20px] text-[#17324d] relative text-right whitespace-nowrap z-20">
                  رمز عبور
                </span>
                <div className="flex pt-[11px] pr-[14px] pb-[11px] pl-[14px] gap-[8px] items-center self-stretch shrink-0 flex-nowrap bg-[#fff] rounded-[12px] border-solid border border-[#e4ebf1] relative z-[21]">
                  <div className="flex w-[16px] h-[16px] flex-col justify-center items-center shrink-0 flex-nowrap relative z-[22]">
                    <div className="w-[16px] h-[16px] shrink-0 bg-[url(/assets/codia/baBWoqTwza.svg)] bg-cover bg-no-repeat relative overflow-hidden z-[23]" />
                  </div>
                  <span className="h-[22px] grow shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-normal leading-[21.875px] text-[#60758a] relative text-right overflow-hidden whitespace-nowrap z-[24]">
                    ••••••••
                  </span>
                </div>
              </div>
            </div>
            <div className="flex justify-between items-center self-stretch shrink-0 flex-nowrap relative z-[25]">
              <span className="flex w-[134px] h-[20px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[13px] font-medium leading-[20px] text-[#2094e3] relative text-right underline whitespace-nowrap z-[26]">
                رمز عبور را فراموش کرده‌ام
              </span>
              <div className="flex w-[212px] gap-[8px] justify-end items-center shrink-0 flex-nowrap relative z-[27]">
                <span className="flex w-[186px] h-[20px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[13px] font-normal leading-[20px] text-[#60758a] relative text-right whitespace-nowrap z-[28]">
                  این دستگاه سازمانی را به خاطر بسپار
                </span>
                <div className="flex w-[18px] h-[18px] items-start shrink-0 flex-nowrap bg-[#fff] rounded-[4px] border-solid border-2 border-[#e4ebf1] relative z-[29]" />
              </div>
            </div>
            <div className="flex pt-[11px] pr-[20px] pb-[11px] pl-[20px] gap-[8px] justify-center items-center self-stretch shrink-0 flex-nowrap bg-[#2094e3] rounded-[12px] relative z-30">
              <span className="flex w-[74px] h-[22px] justify-center items-start shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-medium leading-[22px] text-[#fff] relative text-center whitespace-nowrap z-[31]">
                ورود به CMS
              </span>
            </div>
          </div>
          <div className="flex gap-[16px] justify-center items-start self-stretch shrink-0 flex-nowrap relative z-[32]">
            <span className="flex w-[89px] h-[20px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[13px] font-normal leading-[20px] text-[#60758a] relative text-right whitespace-nowrap z-[33]">
              تماس با پشتیبانی
            </span>
            <span className="h-[20px] shrink-0 basis-auto font-['Vazirmatn'] text-[13px] font-normal leading-[20px] text-[#60758a] relative text-left whitespace-nowrap z-[34]">
              ·
            </span>
            <span className="flex w-[107px] h-[20px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[13px] font-normal leading-[20px] text-[#60758a] relative text-right whitespace-nowrap z-[35]">
              مشکل در ورود دارید؟
            </span>
            <span className="h-[20px] shrink-0 basis-auto font-['Vazirmatn'] text-[13px] font-normal leading-[20px] text-[#60758a] relative text-left whitespace-nowrap z-[36]">
              ·
            </span>
            <span className="flex w-[126px] h-[20px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[13px] font-semibold leading-[20px] text-[#2094e3] relative text-right whitespace-nowrap z-[37]">
              بازگشت به وب‌سایت ماه
            </span>
          </div>
          <div className="flex flex-col gap-[12px] items-center self-stretch shrink-0 flex-nowrap relative z-[38]">
            <div className="flex w-[313px] gap-[16px] justify-center items-start shrink-0 flex-nowrap relative z-[39]">
              <span className="flex w-[69px] h-[19px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[12px] font-normal leading-[18.75px] text-[#60758a] relative text-right whitespace-nowrap z-40">
                حریم خصوصی
              </span>
              <span className="h-[19px] shrink-0 basis-auto font-['Vazirmatn'] text-[12px] font-normal leading-[18.75px] text-[#60758a] relative text-left whitespace-nowrap z-[41]">
                |
              </span>
              <span className="flex w-[70px] h-[19px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[12px] font-normal leading-[18.75px] text-[#60758a] relative text-right whitespace-nowrap z-[42]">
                شرایط استفاده
              </span>
              <span className="h-[19px] shrink-0 basis-auto font-['Vazirmatn'] text-[12px] font-normal leading-[18.75px] text-[#60758a] relative text-left whitespace-nowrap z-[43]">
                |
              </span>
              <span className="flex w-[104px] h-[19px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[12px] font-normal leading-[18.75px] text-[#60758a] relative text-right whitespace-nowrap z-[44]">
                راهنمای امنیت حساب
              </span>
            </div>
            <span className="flex w-[224px] h-[17px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[11px] font-normal leading-[17px] text-[#60758a] relative text-right whitespace-nowrap z-[45]">
              © سامانه ماه · مدیریت مسئولیت اجتماعی هوشمند
            </span>
          </div>
        </div>
      </div>
      <div className="flex w-[792px] pt-[64px] pr-[64px] pb-[64px] pl-[64px] flex-col justify-between items-end self-stretch shrink-0 flex-nowrap bg-[#eaf5fd] border-solid border-l border-l-[#e4ebf1] relative z-[46]">
        <div className="flex gap-[12px] justify-end items-center self-stretch shrink-0 flex-nowrap relative z-[47]">
          <img
            src="/assets/codia/WAhRhNT9tT.png"
            alt="لوگوی سامانه ماه"
            className="w-[137px] h-[46px] shrink-0 object-contain relative z-[48]"
          />
        </div>
        <div className="flex flex-col gap-[32px] items-end self-stretch shrink-0 flex-nowrap relative z-[49]">
          <div className="flex flex-col gap-[12px] items-end self-stretch shrink-0 flex-nowrap relative z-50">
            <div className="flex w-[136px] justify-end items-start shrink-0 flex-nowrap relative z-[51]">
              <div className="flex w-[136px] pt-[6px] pr-[12px] pb-[6px] pl-[12px] justify-center items-center shrink-0 flex-nowrap bg-[#eaf5fd] rounded-[12px] relative z-[52]">
                <span className="flex w-[112px] h-[20px] justify-center items-start shrink-0 basis-auto font-['Vazirmatn'] text-[12px] font-normal leading-[20px] text-[#2094e3] relative text-center whitespace-nowrap z-[53]">
                  مدیریت محتوای عمومی
                </span>
              </div>
            </div>
            <span className="h-[50px] self-stretch shrink-0 basis-auto font-['Vazirmatn'] text-[32px] font-bold leading-[50px] text-[#17324d] relative text-right whitespace-nowrap z-[54]">
              مدیریت شفاف محتوای سامانه ماه
            </span>
            <span className="flex w-[664px] h-[52px] justify-end items-start self-stretch shrink-0 font-['Vazirmatn'] text-[15px] font-normal leading-[26px] text-[#60758a] relative text-right z-[55]">
              این بخش فقط در اختیار اعضای تأییدشده تیم محتوا، بازبین‌ها و ناشران
              سامانه قرار دارد. دسترسی به پنل CMS مشمول سیاست‌ها و راهنمای امنیت
              حساب است.
            </span>
          </div>
          <div className="flex flex-col gap-[16px] items-start self-stretch shrink-0 flex-nowrap relative z-[56]">
            <div className="flex gap-[12px] justify-end items-center self-stretch shrink-0 flex-nowrap relative z-[57]">
              <span className="flex w-[131px] h-[22px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-medium leading-[21.875px] text-[#17324d] relative text-right whitespace-nowrap z-[58]">
                مدیریت محتوای عمومی
              </span>
              <div className="flex w-[32px] h-[32px] justify-center items-center shrink-0 flex-nowrap bg-[#fff] rounded-[8px] border-solid border border-[#e4ebf1] relative z-[59]">
                <div className="w-[16px] h-[16px] shrink-0 bg-[url(/assets/codia/5D1h1Zo2HC.svg)] bg-cover bg-no-repeat relative overflow-hidden z-[60]" />
              </div>
            </div>
            <div className="flex gap-[12px] justify-end items-center self-stretch shrink-0 flex-nowrap relative z-[61]">
              <span className="flex w-[142px] h-[22px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-medium leading-[21.875px] text-[#17324d] relative text-right whitespace-nowrap z-[62]">
                بازبینی و انتشار کنترل‌شده
              </span>
              <div className="flex w-[32px] h-[32px] justify-center items-center shrink-0 flex-nowrap bg-[#fff] rounded-[8px] border-solid border border-[#e4ebf1] relative z-[63]">
                <div className="w-[16px] h-[16px] shrink-0 bg-[url(/assets/codia/7LiwKzCnWg.svg)] bg-cover bg-no-repeat relative overflow-hidden z-[64]" />
              </div>
            </div>
            <div className="flex gap-[12px] justify-end items-center self-stretch shrink-0 flex-nowrap relative z-[65]">
              <span className="flex w-[118px] h-[22px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-medium leading-[21.875px] text-[#17324d] relative text-right whitespace-nowrap z-[66]">
                ثبت و ردیابی تغییرات
              </span>
              <div className="flex w-[32px] h-[32px] justify-center items-center shrink-0 flex-nowrap bg-[#fff] rounded-[8px] border-solid border border-[#e4ebf1] relative z-[67]">
                <div className="w-[16px] h-[16px] shrink-0 bg-[url(/assets/codia/6L2XJRwTRa.svg)] bg-cover bg-no-repeat relative overflow-hidden z-[68]" />
              </div>
            </div>
          </div>
        </div>
        <div className="flex gap-[8px] justify-end items-center self-stretch shrink-0 flex-nowrap relative z-[69]">
          <span className="h-[19px] grow shrink-0 basis-auto font-['Vazirmatn'] text-[12px] font-normal leading-[18.75px] text-[#60758a] relative text-right whitespace-nowrap z-[70]">
            دسترسی به این بخش براساس نقش سازمانی و مجوزهای تأییدشده انجام
            می‌شود.
          </span>
          <div className="w-[14px] h-[14px] shrink-0 bg-[url(/assets/codia/npFDsg0bh9.svg)] bg-cover bg-no-repeat relative overflow-hidden z-[71]" />
        </div>
      </div>
    </div>
  );
}
