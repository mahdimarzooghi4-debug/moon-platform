import React from "react";
import "./index.css";

export default function Main() {
  return (
    <div className="main-container flex w-[1440px] flex-col items-center flex-nowrap bg-[#fcfbf8] relative overflow-hidden mx-auto my-0">
      <div className="flex h-[80px] pt-[16px] pr-[120px] pb-[16px] pl-[120px] justify-between items-center self-stretch shrink-0 flex-nowrap bg-[#fff] border-solid border-t border-t-[#e4ebf1] relative">
        <div className="flex w-[380px] gap-[24px] items-center shrink-0 flex-nowrap relative z-[1]">
          <span className="flex w-[143px] h-[22px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-medium leading-[21.875px] text-[#60758a] relative text-right underline whitespace-nowrap z-[2]">
            انصراف و بازگشت به پروژه
          </span>
          <div className="flex w-[213px] pt-[6px] pr-[12px] pb-[6px] pl-[12px] gap-[8px] items-center shrink-0 flex-nowrap bg-[#eaf5fd] rounded-[12px] relative z-[3]">
            <span className="h-[20px] shrink-0 basis-auto font-['Vazirmatn'] text-[13px] font-medium leading-[20px] text-[#2094e3] relative text-left whitespace-nowrap z-[4]">
              پرداخت امن از طریق درگاه رسمی
            </span>
            <div className="flex w-[14px] h-[14px] flex-col justify-center items-center shrink-0 flex-nowrap relative overflow-hidden z-[5]">
              <div className="w-[14px] h-[14px] shrink-0 bg-[url(https://static.codia.ai/image/2026-08-24/0MwW5XuSXJ.png)] bg-cover bg-no-repeat relative overflow-hidden z-[6]" />
            </div>
          </div>
        </div>
        <div className="flex w-[296px] gap-[24px] items-center shrink-0 flex-nowrap relative z-[7]">
          <span className="flex w-[110px] h-[28px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[18px] font-bold leading-[28px] text-[#17324d] relative text-right whitespace-nowrap z-[8]">
            تکمیل مشارکت
          </span>
          <div className="w-px h-[24px] shrink-0 bg-[#e4ebf1] relative z-[9]" />
          <div className="w-[137px] h-[46px] shrink-0 bg-[url(https://static.codia.ai/image/2026-08-24/XQJdcyCMcT.png)] bg-cover bg-no-repeat relative z-10" />
        </div>
      </div>
      <div className="flex h-[709px] pt-[160px] pr-0 pb-[160px] pl-0 flex-col gap-[32px] justify-center items-center self-stretch shrink-0 flex-nowrap relative z-[11]">
        <div className="flex w-[80px] h-[80px] flex-col justify-center items-center shrink-0 flex-nowrap relative z-[12]">
          <div className="w-[64px] h-[64px] shrink-0 bg-[url(https://static.codia.ai/image/2026-08-24/bCDnn2mPTk.png)] bg-cover bg-no-repeat rounded-[50%] relative z-[13]" />
        </div>
        <div className="flex w-[288px] flex-col gap-[16px] items-center shrink-0 flex-nowrap relative z-[14]">
          <span className="flex w-[288px] h-[38px] justify-center items-start shrink-0 basis-auto font-['Vazirmatn'] text-[24px] font-bold leading-[37.5px] text-[#17324d] relative text-center whitespace-nowrap z-[15]">
            در حال انتقال به درگاه پرداخت
          </span>
          <span className="flex w-[157px] h-[25px] justify-center items-start shrink-0 basis-auto font-['Vazirmatn'] text-[16px] font-normal leading-[25px] text-[#60758a] relative text-center whitespace-nowrap z-[16]">
            لطفاً این صفحه را نبندید.
          </span>
        </div>
        <div className="flex w-[360px] pt-[20px] pr-[20px] pb-[20px] pl-[20px] flex-col gap-[12px] items-center shrink-0 flex-nowrap bg-[#fff] rounded-[16px] border-solid border border-[#e4ebf1] relative shadow-[0_4px_16px_0_rgba(22,45,71,0.08)] z-[17]">
          <span className="flex w-[140px] h-[34px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[22px] font-bold leading-[34px] text-[#2094e3] relative text-right whitespace-nowrap z-[18]">
            ۵٬۰۰۰٬۰۰۰ تومان
          </span>
          <span className="flex w-[140px] h-[22px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-normal leading-[21.875px] text-[#60758a] relative text-right whitespace-nowrap z-[19]">
            دریافت‌کننده: کمیته امداد
          </span>
        </div>
        <div className="flex w-[199px] flex-col gap-[16px] items-center shrink-0 flex-nowrap relative z-20">
          <span className="flex w-[199px] h-[20px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[13px] font-normal leading-[20px] text-[#60758a] relative text-right whitespace-nowrap z-[21]">
            اگر انتقال انجام نشد، دوباره تلاش کنید.
          </span>
          <div className="flex w-[106px] pt-[11px] pr-[20px] pb-[11px] pl-[20px] gap-[8px] justify-center items-center shrink-0 flex-nowrap bg-[#fff] rounded-[12px] border-solid border border-[#e4ebf1] relative z-[22]">
            <span className="flex w-[66px] h-[22px] justify-center items-start shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-medium leading-[22px] text-[#2094e3] relative text-center whitespace-nowrap z-[23]">
              تلاش مجدد
            </span>
          </div>
        </div>
      </div>
      <div className="flex pt-[80px] pr-[120px] pb-[40px] pl-[120px] flex-col gap-[64px] items-start self-stretch shrink-0 flex-nowrap bg-[#111e30] relative z-[24]">
        <div className="flex gap-[48px] items-start self-stretch shrink-0 flex-nowrap relative z-[25]">
          <div className="flex w-[220px] h-[182px] flex-col gap-[12px] items-end shrink-0 flex-nowrap relative z-[26]">
            <span className="flex w-[59px] h-[22px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-bold leading-[21.875px] text-[#fff] relative text-right whitespace-nowrap z-[27]">
              ارتباط با ما
            </span>
            <span className="flex w-[115px] h-[20px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[13px] font-normal leading-[20px] text-[#e4ebf1] relative text-right whitespace-nowrap z-[28]">
              تلفن: ۰۲۱-۸۸۸۸۸۸۸۸
            </span>
            <span className="flex w-[156px] h-[20px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[13px] font-normal leading-[20px] text-[#e4ebf1] relative text-right whitespace-nowrap z-[29]">
              ایمیل: info@mahplatform.ir
            </span>
            <div className="flex w-[48px] pt-[8px] pr-0 pb-0 pl-0 gap-[12px] items-center shrink-0 flex-nowrap relative z-30">
              <div className="flex w-[18px] h-[18px] flex-col justify-center items-center shrink-0 flex-nowrap relative overflow-hidden z-[31]">
                <div className="w-[18px] h-[18px] shrink-0 bg-[url(https://static.codia.ai/image/2026-08-24/LrcnzMFtiA.png)] bg-cover bg-no-repeat relative overflow-hidden z-[32]" />
              </div>
              <div className="flex w-[18px] h-[18px] flex-col justify-center items-center shrink-0 flex-nowrap relative overflow-hidden z-[33]">
                <div className="w-[18px] h-[18px] shrink-0 bg-[url(https://static.codia.ai/image/2026-08-24/Wm5jVPrfuX.png)] bg-cover bg-no-repeat relative overflow-hidden z-[34]" />
              </div>
            </div>
          </div>
          <div className="flex w-[150px] h-[182px] flex-col gap-[12px] items-end shrink-0 flex-nowrap relative z-[35]">
            <span className="flex w-[39px] h-[22px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-bold leading-[21.875px] text-[#fff] relative text-right whitespace-nowrap z-[36]">
              حقوقی
            </span>
            <span className="flex w-[82px] h-[20px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[13px] font-normal leading-[20px] text-[#e4ebf1] relative text-right whitespace-nowrap z-[37]">
              قوانین و مقررات
            </span>
            <span className="flex w-[75px] h-[20px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[13px] font-normal leading-[20px] text-[#e4ebf1] relative text-right whitespace-nowrap z-[38]">
              حریم خصوصی
            </span>
          </div>
          <div className="flex w-[160px] h-[182px] flex-col gap-[12px] items-end shrink-0 flex-nowrap relative z-[39]">
            <span className="flex w-[49px] h-[22px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-bold leading-[21.875px] text-[#fff] relative text-right whitespace-nowrap z-40">
              پشتیبانی
            </span>
            <span className="flex w-[55px] h-[20px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[13px] font-normal leading-[20px] text-[#e4ebf1] relative text-right whitespace-nowrap z-[41]">
              تماس با ما
            </span>
            <span className="flex w-[77px] h-[20px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[13px] font-normal leading-[20px] text-[#e4ebf1] relative text-right whitespace-nowrap z-[42]">
              سؤالات متداول
            </span>
            <span className="flex w-[82px] h-[20px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[13px] font-normal leading-[20px] text-[#e4ebf1] relative text-right whitespace-nowrap z-[43]">
              پیگیری مشارکت
            </span>
          </div>
          <div className="flex w-[180px] flex-col gap-[12px] items-end shrink-0 flex-nowrap relative z-[44]">
            <span className="flex w-[83px] h-[22px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-bold leading-[21.875px] text-[#fff] relative text-right whitespace-nowrap z-[45]">
              دسترسی سریع
            </span>
            <span className="flex w-[38px] h-[20px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[13px] font-normal leading-[20px] text-[#e4ebf1] relative text-right whitespace-nowrap z-[46]">
              پروژه‌ها
            </span>
            <span className="flex w-[69px] h-[20px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[13px] font-normal leading-[20px] text-[#e4ebf1] relative text-right whitespace-nowrap z-[47]">
              برای شرکت‌ها
            </span>
            <span className="flex w-[71px] h-[20px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[13px] font-normal leading-[20px] text-[#e4ebf1] relative text-right whitespace-nowrap z-[48]">
              نحوه مشارکت
            </span>
            <span className="flex w-[84px] h-[20px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[13px] font-normal leading-[20px] text-[#e4ebf1] relative text-right whitespace-nowrap z-[49]">
              ثبت‌نام استارتاپ
            </span>
            <span className="flex w-[80px] h-[20px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[13px] font-normal leading-[20px] text-[#e4ebf1] relative text-right whitespace-nowrap z-50">
              اخبار و رویدادها
            </span>
          </div>
          <div className="flex w-[298px] h-[182px] flex-col gap-[14px] items-end shrink-0 flex-nowrap relative z-[51]">
            <div className="w-[210px] h-[70px] shrink-0 bg-[url(https://static.codia.ai/image/2026-08-24/js5oOpcxNi.png)] bg-cover bg-no-repeat relative z-[52]" />
            <span className="flex w-[298px] h-[44px] justify-end items-start self-stretch shrink-0 font-['Vazirmatn'] text-[13px] font-normal leading-[22px] text-[#e4ebf1] relative text-right z-[53]">
              سامانه مشارکت در پروژه‌های اثر اجتماعی با مسیر مالی شفاف و اثر
              قابل‌اندازه‌گیری.
            </span>
          </div>
        </div>
        <div className="flex pt-[20px] pr-0 pb-0 pl-0 flex-col gap-[4px] items-center self-stretch shrink-0 flex-nowrap border-solid border-b border-b-[rgba(255,255,255,0.12)] relative z-[54]">
          <span className="flex w-[219px] h-[19px] justify-center items-start shrink-0 basis-auto font-['Vazirmatn'] text-[12px] font-normal leading-[18.75px] text-[#e4ebf1] relative text-center whitespace-nowrap z-[55]">
            طراحی و توسعه با هدف ارتقای عدالت اجتماعی
          </span>
          <span className="flex w-[203px] h-[19px] justify-center items-start shrink-0 basis-auto font-['Vazirmatn'] text-[12px] font-normal leading-[18.75px] text-[#e4ebf1] relative text-center whitespace-nowrap z-[56]">
            تمامی حقوق برای سامانه ماه محفوظ است.
          </span>
        </div>
      </div>
    </div>
  );
}
