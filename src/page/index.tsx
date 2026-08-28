import React from "react";
import "./index.css";

export default function Main() {
  return (
    <div className="main-container flex w-[1440px] flex-col items-start flex-nowrap bg-[#f4f6f8] relative mx-auto my-0">
      <div className="flex pt-[12px] pr-[40px] pb-[12px] pl-[40px] justify-between items-center self-stretch shrink-0 flex-nowrap bg-[#17324d] relative">
        <div className="flex w-[328px] gap-[12px] items-center shrink-0 flex-nowrap relative z-[1]">
          <div className="flex w-[144px] pt-[10px] pr-[20px] pb-[10px] pl-[20px] gap-[8px] justify-center items-center shrink-0 flex-nowrap bg-[#fff] rounded-[12px] border-solid border border-[#e4ebf1] relative z-[2]">
            <span className="flex w-[104px] h-[22px] justify-center items-start shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-bold leading-[21.875px] text-[#2094e3] relative text-center whitespace-nowrap z-[3]">
              بازگشت به ویرایش
            </span>
          </div>
          <div className="flex w-[144px] pt-[8px] pr-[16px] pb-[8px] pl-[16px] items-start shrink-0 flex-nowrap rounded-[10px] border-solid border border-[rgba(255,255,255,0.2)] relative z-[4]">
            <span className="flex w-[112px] h-[20px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[13px] font-bold leading-[20px] text-[#fff] relative text-right whitespace-nowrap z-[5]">
              مقایسه با نسخه Live
            </span>
          </div>
          <div className="flex w-[16px] h-[16px] justify-center items-center shrink-0 flex-nowrap relative overflow-hidden z-[6]">
            <div className="w-[16px] h-[16px] shrink-0 bg-[url(/assets/codia/PEnFq7AShk.svg)] bg-cover bg-no-repeat relative overflow-hidden z-[7]" />
          </div>
        </div>
        <div className="flex w-[344px] gap-[16px] items-center shrink-0 flex-nowrap relative z-[8]">
          <div className="flex w-[119px] pt-[4px] pr-[10px] pb-[4px] pl-[10px] items-start shrink-0 flex-nowrap bg-[#ef4444] rounded-[8px] relative z-[9]">
            <span className="flex w-[99px] h-[17px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[11px] font-bold leading-[17px] text-[#fff] relative text-right whitespace-nowrap z-10">
              پیش‌نمایش غیرعمومی
            </span>
          </div>
          <div className="flex w-[209px] flex-col gap-px items-end shrink-0 flex-nowrap relative z-[11]">
            <span className="flex w-[132px] h-[22px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-bold leading-[21.875px] text-[#fff] relative text-right whitespace-nowrap z-[12]">
              پیش‌نمایش زنده صفحه
            </span>
            <span className="flex w-[209px] h-[17px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[11px] font-normal leading-[17px] text-[#60758a] relative text-right whitespace-nowrap z-[13]">
              نسخه اصلاح‌شده راهنمای کامل فرآیند کاربری ماه
            </span>
          </div>
        </div>
      </div>
      <div className="flex w-[1200px] h-[962px] flex-col items-start shrink-0 flex-nowrap bg-[#fff] rounded-[24px] border-solid border border-[#e4ebf1] absolute top-[100px] left-1/2 translate-x-[-50%] translate-y-0 overflow-hidden z-[14]">
        <div className="flex pt-[16px] pr-[48px] pb-[16px] pl-[48px] justify-between items-center self-stretch shrink-0 flex-nowrap bg-[#fff] border-solid border-t border-t-[#e4ebf1] relative z-[15]">
          <div className="flex w-[258px] gap-[12px] items-center shrink-0 flex-nowrap relative z-[16]">
            <div className="flex w-[106px] pt-[8px] pr-[16px] pb-[8px] pl-[16px] items-start shrink-0 flex-nowrap bg-[#2094e3] rounded-[8px] relative z-[17]">
              <span className="flex w-[74px] h-[20px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[13px] font-bold leading-[20px] text-[#fff] relative text-right whitespace-nowrap z-[18]">
                ورود / ثبت نام
              </span>
            </div>
            <div className="flex w-[140px] pt-[8px] pr-[16px] pb-[8px] pl-[16px] items-start shrink-0 flex-nowrap rounded-[8px] border-solid border border-[#e4ebf1] relative z-[19]">
              <span className="flex w-[108px] h-[20px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[13px] font-normal leading-[20px] text-[#17324d] relative text-right whitespace-nowrap z-20">
                سرمایه‌گذاری سازمانی
              </span>
            </div>
          </div>
          <div className="flex w-[432px] gap-[24px] items-center shrink-0 flex-nowrap relative z-[21]">
            <span className="flex w-[59px] h-[22px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-normal leading-[21.875px] text-[#60758a] relative text-right whitespace-nowrap z-[22]">
              تماس با ما
            </span>
            <span className="flex w-[83px] h-[22px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-normal leading-[21.875px] text-[#60758a] relative text-right whitespace-nowrap z-[23]">
              سوالات متداول
            </span>
            <span className="flex w-[117px] h-[22px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-bold leading-[21.875px] text-[#2094e3] relative text-right whitespace-nowrap z-[24]">
              ماه چطور کار می‌کند؟
            </span>
            <span className="flex w-[101px] h-[22px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-normal leading-[21.875px] text-[#60758a] relative text-right whitespace-nowrap z-[25]">
              پروژه‌های کارآفرینی
            </span>
          </div>
          <div className="flex w-[118px] gap-[8px] items-center shrink-0 flex-nowrap relative z-[26]">
            <span className="flex w-[78px] h-[28px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[18px] font-extrabold leading-[28px] text-[#17324d] relative text-right whitespace-nowrap z-[27]">
              سامانه ماه
            </span>
            <div className="flex w-[32px] h-[32px] justify-center items-center shrink-0 flex-nowrap bg-[#2094e3] rounded-[8px] relative z-[28]">
              <div className="flex w-[16px] h-[16px] justify-center items-center shrink-0 flex-nowrap relative overflow-hidden z-[29]">
                <div className="w-[16px] h-[16px] shrink-0 bg-[url(/assets/codia/2nYjFwwbbn.svg)] bg-cover bg-no-repeat relative overflow-hidden z-30" />
              </div>
            </div>
          </div>
        </div>
        <div className="flex pt-[64px] pr-[64px] pb-[64px] pl-[64px] flex-col gap-[24px] items-center self-stretch shrink-0 flex-nowrap bg-[#eaf5fd] relative z-[31]">
          <div className="flex flex-col gap-[12px] items-center self-stretch shrink-0 flex-nowrap relative z-[32]">
            <div className="flex w-[232px] pt-[4px] pr-[12px] pb-[4px] pl-[12px] items-start shrink-0 flex-nowrap bg-[#fff] rounded-[100px] border-solid border border-[#2094e3] relative z-[33]">
              <span className="flex w-[208px] h-[19px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[12px] font-bold leading-[18.75px] text-[#2094e3] relative text-right whitespace-nowrap z-[34]">
                شفافیت کامل حاکمیتی در هدایت سرمایه‌ها
              </span>
            </div>
            <span className="h-[50px] self-stretch shrink-0 basis-auto font-['Vazirmatn'] text-[32px] font-extrabold leading-[50px] text-[#17324d] relative text-center whitespace-nowrap z-[35]">
              از انتخاب پروژه تا ایجاد واقعی اثر اجتماعی در مناطق محروم
            </span>
            <span className="flex w-[720px] h-[46px] justify-center items-start shrink-0 font-['Vazirmatn'] text-[15px] font-normal leading-[23.438px] text-[#60758a] relative text-center z-[36]">
              ماه بستری قانونی و تحت نظارت برای شرکت‌ها و هلدینگ‌های اقتصادی است
              تا با بهره‌مندی از معافیت‌های مالیاتی ماده ۱۷۲، سهم مستقیمی در
              پروژه‌های کارآفرینی داشته باشند.
            </span>
          </div>
          <div className="flex gap-[16px] justify-center items-start self-stretch shrink-0 flex-nowrap relative z-[37]">
            <div className="flex w-[183px] pt-[12px] pr-[24px] pb-[12px] pl-[24px] items-start shrink-0 flex-nowrap bg-[#2094e3] rounded-[10px] relative z-[38]">
              <span className="flex w-[135px] h-[22px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-bold leading-[21.875px] text-[#fff] relative text-right whitespace-nowrap z-[39]">
                مشاهده پروژه‌های جاری
              </span>
            </div>
            <div className="flex w-[136px] pt-[12px] pr-[24px] pb-[12px] pl-[24px] items-start shrink-0 flex-nowrap bg-[#fff] rounded-[10px] border-solid border border-[#e4ebf1] relative z-40">
              <span className="flex w-[88px] h-[22px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-normal leading-[21.875px] text-[#17324d] relative text-right whitespace-nowrap z-[41]">
                قوانین ماده ۱۷۲
              </span>
            </div>
          </div>
        </div>
        <div className="flex pt-[64px] pr-[64px] pb-[64px] pl-[64px] flex-col gap-[40px] items-start self-stretch shrink-0 flex-nowrap relative z-[42]">
          <div className="flex flex-col gap-[8px] items-center self-stretch shrink-0 flex-nowrap relative z-[43]">
            <span className="flex w-[242px] h-[34px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[22px] font-extrabold leading-[34px] text-[#17324d] relative text-right whitespace-nowrap z-[44]">
              فرآیند ۳ گام اثرگذاری در ماه
            </span>
            <span className="flex w-[300px] h-[22px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-normal leading-[21.875px] text-[#60758a] relative text-right whitespace-nowrap z-[45]">
              مسیر تضمین کارایی و درستی پروژه‌های محرومیت‌زدایی
            </span>
          </div>
          <div className="flex gap-[24px] items-start self-stretch shrink-0 flex-nowrap relative z-[46]">
            <div className="flex pt-[24px] pr-[24px] pb-[24px] pl-[24px] flex-col gap-[12px] items-end grow shrink-0 basis-0 flex-nowrap bg-[#fcfbf8] rounded-[16px] border-solid border border-[#e4ebf1] relative z-[47]">
              <div className="flex w-[40px] h-[40px] justify-center items-center shrink-0 flex-nowrap bg-[#eaf5fd] rounded-[20px] relative z-[48]">
                <span className="flex w-[6px] h-[25px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[16px] font-extrabold leading-[25px] text-[#2094e3] relative text-right whitespace-nowrap z-[49]">
                  ۱
                </span>
              </div>
              <span className="flex w-[168px] h-[25px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[16px] font-bold leading-[25px] text-[#17324d] relative text-right whitespace-nowrap z-50">
                انتخاب و پرداخت هوشمند
              </span>
              <span className="flex w-[293.333px] h-[40px] justify-end items-start self-stretch shrink-0 font-['Vazirmatn'] text-[13px] font-normal leading-[20.313px] text-[#60758a] relative text-right z-[51]">
                انتخاب از میان ده‌ها پروژه منطقه‌ای تأییدشده دولتی و انتقال وجه
                به حساب امن نزد کمیته امداد.
              </span>
            </div>
            <div className="flex pt-[24px] pr-[24px] pb-[24px] pl-[24px] flex-col gap-[12px] items-end grow shrink-0 basis-0 flex-nowrap bg-[#fcfbf8] rounded-[16px] border-solid border border-[#e4ebf1] relative z-[52]">
              <div className="flex w-[40px] h-[40px] justify-center items-center shrink-0 flex-nowrap bg-[#eaf5fd] rounded-[20px] relative z-[53]">
                <span className="flex w-[9px] h-[25px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[16px] font-extrabold leading-[25px] text-[#2094e3] relative text-right whitespace-nowrap z-[54]">
                  ۲
                </span>
              </div>
              <span className="flex w-[159px] h-[25px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[16px] font-bold leading-[25px] text-[#17324d] relative text-right whitespace-nowrap z-[55]">
                اجرای KPIمحور استارتاپ
              </span>
              <span className="flex w-[293.333px] h-[60px] justify-end items-start self-stretch shrink-0 font-['Vazirmatn'] text-[13px] font-normal leading-[20.313px] text-[#60758a] relative text-right z-[56]">
                استارتاپ طرح خلاق خود را آغاز می‌کند. پرداخت اعتباری صرفاً با
                تأیید تحقق گام‌های اساسی توسط شتاب‌دهنده‌ها صورت می‌گیرد.
              </span>
            </div>
            <div className="flex pt-[24px] pr-[24px] pb-[24px] pl-[24px] flex-col gap-[12px] items-end grow shrink-0 basis-0 flex-nowrap bg-[#fcfbf8] rounded-[16px] border-solid border border-[#e4ebf1] relative z-[57]">
              <div className="flex w-[40px] h-[40px] justify-center items-center shrink-0 flex-nowrap bg-[#eaf5fd] rounded-[20px] relative z-[58]">
                <span className="flex w-[11px] h-[25px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[16px] font-extrabold leading-[25px] text-[#2094e3] relative text-right whitespace-nowrap z-[59]">
                  ۳
                </span>
              </div>
              <span className="flex w-[175px] h-[25px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[16px] font-bold leading-[25px] text-[#17324d] relative text-right whitespace-nowrap z-[60]">
                ارزیابی و گواهی اثر اجتماعی
              </span>
              <span className="flex w-[293.333px] h-[60px] justify-end items-start self-stretch shrink-0 font-['Vazirmatn'] text-[13px] font-normal leading-[20.313px] text-[#60758a] relative text-right z-[61]">
                پس از تأیید نهایی، گواهی رسمی عملکرد صادر شده و معافیت مالیاتی
                قطعی شرکت حامی به سازمان امور مالیاتی ارائه می‌شود.
              </span>
            </div>
          </div>
        </div>
        <div className="flex pt-[48px] pr-[48px] pb-[48px] pl-[48px] flex-col gap-[24px] items-start self-stretch shrink-0 flex-nowrap bg-[#17324d] relative z-[62]">
          <div className="flex justify-between items-center self-stretch shrink-0 flex-nowrap relative z-[63]">
            <span className="flex w-[496px] h-[20px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[13px] font-normal leading-[20px] text-[#60758a] relative text-right whitespace-nowrap z-[64]">
              © کلیه حقوق مادی و معنوی این سامانه متعلق به خانه خلاق و کمیته
              امداد امام خمینی (ره) است.
            </span>
            <div className="flex w-[151px] gap-[8px] items-center shrink-0 flex-nowrap relative z-[65]">
              <span className="flex w-[119px] h-[23px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[15px] font-bold leading-[23px] text-[#fff] relative text-right whitespace-nowrap z-[66]">
                سامانه حاکمیتی ماه
              </span>
              <div className="flex w-[24px] h-[24px] justify-center items-center shrink-0 flex-nowrap bg-[rgba(255,255,255,0.2)] rounded-[6px] relative z-[67]">
                <div className="flex w-[12px] h-[12px] justify-center items-center shrink-0 flex-nowrap relative overflow-hidden z-[68]">
                  <div className="w-[12px] h-[12px] shrink-0 bg-[url(/assets/codia/83AsXjC1hn.svg)] bg-cover bg-no-repeat relative overflow-hidden z-[69]" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
