import React from "react";
import "./index.css";

export default function Main() {
  return (
    <div className="main-container flex w-[1440px] flex-col items-center flex-nowrap bg-[#fcfbf8] relative overflow-hidden mx-auto my-0">
      <div className="flex pt-[16px] pr-[120px] pb-[16px] pl-[120px] justify-between items-center self-stretch shrink-0 flex-nowrap bg-[#fff] border-solid border-t border-t-[#e4ebf1] relative">
        <div className="flex w-[384px] gap-[12px] items-center shrink-0 flex-nowrap relative z-[1]">
          <div className="flex w-[120px] h-[44px] pt-[11px] pr-[20px] pb-[11px] pl-[20px] justify-center items-center shrink-0 flex-nowrap bg-[#fff] rounded-[12px] border-solid border-[1.5px] border-[#2094e3] relative overflow-hidden z-[2]">
            <span className="flex w-[65px] h-[22px] justify-center items-start shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-medium leading-[22px] text-[#2094e3] relative text-center whitespace-nowrap z-[3]">
              ورود کاربران
            </span>
          </div>
          <div className="flex w-[120px] h-[44px] pt-[11px] pr-[20px] pb-[11px] pl-[20px] justify-center items-center shrink-0 flex-nowrap bg-[#fff] rounded-[12px] border-solid border-[1.5px] border-[#2094e3] relative overflow-hidden z-[4]">
            <span className="flex w-[89px] h-[22px] justify-center items-start shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-medium leading-[22px] text-[#2094e3] relative text-center whitespace-nowrap z-[5]">
              پیگیری مشارکت
            </span>
          </div>
          <div className="flex w-[120px] pt-[11px] pr-[20px] pb-[11px] pl-[20px] gap-[8px] justify-center items-center shrink-0 flex-nowrap bg-[#2094e3] rounded-[12px] relative z-[6]">
            <span className="flex w-[82px] h-[22px] justify-center items-start shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-medium leading-[22px] text-[#fff] relative text-center whitespace-nowrap z-[7]">
              شروع مشارکت
            </span>
          </div>
        </div>
        <div className="flex w-[630px] gap-[40px] justify-end items-center shrink-0 flex-nowrap relative z-[8]">
          <div className="flex w-[453px] gap-[24px] items-center shrink-0 flex-nowrap relative z-[9]">
            <span className="flex w-[45px] h-[22px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-medium leading-[21.875px] text-[#17324d] relative text-right whitespace-nowrap z-10">
              درباره ما
            </span>
            <span className="flex w-[60px] h-[22px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-medium leading-[21.875px] text-[#17324d] relative text-right whitespace-nowrap z-[11]">
              تماس با ما
            </span>
            <span className="flex w-[52px] h-[22px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-medium leading-[21.875px] text-[#17324d] relative text-right whitespace-nowrap z-[12]">
              {" "}
              شرکت‌ها
            </span>
            <span className="flex w-[66px] h-[22px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-medium leading-[21.875px] text-[#17324d] relative text-right whitespace-nowrap z-[13]">
              {" "}
              استارتاپ‌ها
            </span>
            <span className="flex w-[41px] h-[22px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-medium leading-[21.875px] text-[#2094e3] relative text-right whitespace-nowrap z-[14]">
              پروژه‌ها
            </span>
            <span className="flex w-[69px] h-[22px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-medium leading-[21.875px] text-[#17324d] relative text-right whitespace-nowrap z-[15]">
              صفحه اصلی
            </span>
          </div>
          <div className="w-[137px] h-[46px] shrink-0 bg-[url(https://static.codia.ai/image/2026-08-24/ieNQPWGcyn.png)] bg-cover bg-no-repeat relative z-[16]" />
        </div>
      </div>
      <div className="flex pt-[24px] pr-[120px] pb-0 pl-[120px] justify-end items-start self-stretch shrink-0 flex-nowrap relative z-[17]">
        <span className="flex w-[157px] h-[20px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[13px] font-normal leading-[20px] text-[#60758a] relative text-right whitespace-nowrap z-[18]">
          صفحه اصلی / نتایج جست‌وجو
        </span>
      </div>
      <div className="flex pt-[24px] pr-[120px] pb-[16px] pl-[120px] items-start self-stretch shrink-0 flex-nowrap relative z-[19]">
        <div className="flex pt-[12px] pr-[12px] pb-[12px] pl-[12px] gap-[12px] items-center grow shrink-0 basis-0 flex-nowrap bg-[#fff] rounded-[16px] border-solid border border-[#e4ebf1] relative shadow-[0_4px_16px_0_rgba(22,45,71,0.08)] z-20">
          <div className="flex w-[97px] pt-[11px] pr-[20px] pb-[11px] pl-[20px] justify-center items-center shrink-0 flex-nowrap bg-[#2094e3] rounded-[12px] relative z-[21]">
            <span className="flex w-[57px] h-[22px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-bold leading-[21.875px] text-[#fff] relative text-right whitespace-nowrap z-[22]">
              جست‌وجو
            </span>
          </div>
          <div className="flex gap-[8px] items-center grow shrink-0 basis-0 flex-nowrap relative z-[23]">
            <div className="w-[16px] h-[16px] shrink-0 bg-[url(https://static.codia.ai/image/2026-08-24/zcf199AEn6.png)] bg-cover bg-no-repeat relative overflow-hidden z-[24]" />
            <span className="h-[23px] grow shrink-0 basis-auto font-['Vazirmatn'] text-[15px] font-normal leading-[23px] text-[#17324d] relative text-right whitespace-nowrap z-[25]">
              توسعه دریایی
            </span>
            <div className="w-[20px] h-[20px] shrink-0 bg-[url(https://static.codia.ai/image/2026-08-24/xkFL0XDDTT.png)] bg-cover bg-no-repeat relative overflow-hidden z-[26]" />
          </div>
        </div>
      </div>
      <div className="flex pt-0 pr-[120px] pb-0 pl-[120px] gap-[24px] justify-end items-start self-stretch shrink-0 flex-nowrap border-solid border-t border-t-[#e4ebf1] relative z-[27]">
        <div className="flex w-[123px] pt-[14px] pr-[8px] pb-[14px] pl-[8px] gap-[4px] items-start shrink-0 flex-nowrap relative z-[28]">
          <span className="h-[22px] shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-medium leading-[21.875px] text-[#60758a] relative text-left whitespace-nowrap z-[29]">
            صفحات راهنما — ۰
          </span>
        </div>
        <div className="flex w-[67px] pt-[14px] pr-[8px] pb-[14px] pl-[8px] gap-[4px] items-start shrink-0 flex-nowrap relative z-30">
          <span className="h-[22px] shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-medium leading-[21.875px] text-[#60758a] relative text-left whitespace-nowrap z-[31]">
            اخبار — ۰
          </span>
        </div>
        <div className="flex w-[116px] pt-[14px] pr-[8px] pb-[14px] pl-[8px] gap-[4px] items-start shrink-0 flex-nowrap relative z-[32]">
          <span className="h-[22px] shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-medium leading-[21.875px] text-[#60758a] relative text-left whitespace-nowrap z-[33]">
            گزارش‌های اثر — ۰
          </span>
        </div>
        <div className="flex w-[103px] pt-[14px] pr-[8px] pb-[14px] pl-[8px] gap-[4px] items-start shrink-0 flex-nowrap relative z-[34]">
          <span className="h-[22px] shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-medium leading-[21.875px] text-[#60758a] relative text-left whitespace-nowrap z-[35]">
            استارتاپ‌ها — ۰
          </span>
        </div>
        <div className="flex w-[82px] pt-[14px] pr-[8px] pb-[14px] pl-[8px] gap-[4px] items-start shrink-0 flex-nowrap relative z-[36]">
          <span className="h-[22px] shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-medium leading-[21.875px] text-[#60758a] relative text-left whitespace-nowrap z-[37]">
            پروژه‌ها — ۰
          </span>
        </div>
        <div className="flex w-[66px] pt-[14px] pr-[8px] pb-[12px] pl-[8px] flex-col gap-[8px] items-start shrink-0 flex-nowrap border-solid border-t-[3px] border-t-[#2094e3] relative z-[38]">
          <span className="h-[22px] shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-bold leading-[21.875px] text-[#2094e3] relative text-left whitespace-nowrap z-[39]">
            همه — ۰
          </span>
        </div>
      </div>
      <div className="flex pt-[64px] pr-[120px] pb-[80px] pl-[120px] flex-col gap-[32px] items-center self-stretch shrink-0 flex-nowrap relative z-40">
        <div className="flex w-[120px] h-[120px] flex-col justify-center items-center shrink-0 flex-nowrap bg-[#eaf5fd] rounded-[60px] relative z-[41]">
          <div className="w-[48px] h-[48px] shrink-0 relative overflow-hidden z-[42]">
            <div className="w-[40.32px] h-[40.32px] bg-[url(https://static.codia.ai/image/2026-08-24/b7ZbTggfA0.png)] bg-[length:100%_100%] bg-no-repeat relative overflow-hidden z-[43] mt-[3.844px] mr-0 mb-0 ml-[3.84px]" />
          </div>
        </div>
        <div className="flex flex-col gap-[8px] items-center self-stretch shrink-0 flex-nowrap relative z-[44]">
          <span className="flex w-[343px] h-[34px] justify-center items-start shrink-0 basis-auto font-['Vazirmatn'] text-[22px] font-extrabold leading-[34px] text-[#17324d] relative text-center whitespace-nowrap z-[45]">
            نتیجه‌ای برای «توسعه دریایی» پیدا نشد
          </span>
          <span className="flex w-[560px] h-[22px] justify-center items-start shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-normal leading-[21.875px] text-[#60758a] relative text-center whitespace-nowrap z-[46]">
            املای عبارت را بررسی کنید، فیلترها را تغییر دهید یا از عبارت‌های
            عمومی‌تری استفاده کنید.
          </span>
        </div>
        <div className="flex gap-[16px] justify-center items-start self-stretch shrink-0 flex-nowrap relative z-[47]">
          <div className="flex w-[161px] pt-[11px] pr-[20px] pb-[11px] pl-[20px] justify-center items-center shrink-0 flex-nowrap bg-[#fff] rounded-[12px] border-solid border border-[#e4ebf1] relative z-[48]">
            <span className="flex w-[121px] h-[22px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-medium leading-[21.875px] text-[#17324d] relative text-right whitespace-nowrap z-[49]">
              مشاهده همه پروژه‌ها
            </span>
          </div>
          <div className="flex w-[131px] pt-[11px] pr-[20px] pb-[11px] pl-[20px] justify-center items-center shrink-0 flex-nowrap bg-[#2094e3] rounded-[12px] relative z-50">
            <span className="flex w-[91px] h-[22px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-medium leading-[21.875px] text-[#fff] relative text-right whitespace-nowrap z-[51]">
              پاک‌کردن فیلترها
            </span>
          </div>
        </div>
        <div className="flex w-[500px] pt-[20px] pr-[20px] pb-[20px] pl-[20px] flex-col gap-[12px] items-start shrink-0 flex-nowrap bg-[#fff] rounded-[16px] border-solid border border-[#e4ebf1] relative z-[52]">
          <span className="flex w-[130px] h-[20px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[13px] font-bold leading-[20px] text-[#60758a] relative text-right whitespace-nowrap z-[53]">
            توصیه‌ها برای جست‌وجو:
          </span>
          <div className="flex flex-col gap-[8px] items-start self-stretch shrink-0 flex-nowrap relative z-[54]">
            <div className="flex gap-[8px] justify-end items-start self-stretch shrink-0 flex-nowrap relative z-[55]">
              <span className="flex w-[217px] h-[20px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[13px] font-normal leading-[20px] text-[#17324d] relative text-right whitespace-nowrap z-[56]">
                استفاده از واژه کوتاه‌تر یا کلیدواژه‌های اصلی
              </span>
              <div className="w-[5px] h-[5px] shrink-0 bg-[url(https://static.codia.ai/image/2026-08-24/FrZ4BiB4Zq.png)] bg-cover bg-no-repeat rounded-[50%] relative z-[57]" />
            </div>
            <div className="flex gap-[8px] justify-end items-start self-stretch shrink-0 flex-nowrap relative z-[58]">
              <span className="flex w-[230px] h-[20px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[13px] font-normal leading-[20px] text-[#17324d] relative text-right whitespace-nowrap z-[59]">
                حذف نام استان یا فیلترهای محدودکننده دیگر
              </span>
              <div className="w-[5px] h-[5px] shrink-0 bg-[url(https://static.codia.ai/image/2026-08-24/yVx7uEO6GN.png)] bg-cover bg-no-repeat rounded-[50%] relative z-[60]" />
            </div>
            <div className="flex gap-[8px] justify-end items-start self-stretch shrink-0 flex-nowrap relative z-[61]">
              <span className="flex w-[277px] h-[20px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[13px] font-normal leading-[20px] text-[#17324d] relative text-right whitespace-nowrap z-[62]">
                جست‌وجوی حوزه اثر کلی (مانند «اشتغال» یا «آموزش»)
              </span>
              <div className="w-[5px] h-[5px] shrink-0 bg-[url(https://static.codia.ai/image/2026-08-24/msZkbo9Nzr.png)] bg-cover bg-no-repeat rounded-[50%] relative z-[63]" />
            </div>
            <div className="flex gap-[8px] justify-end items-start self-stretch shrink-0 flex-nowrap relative z-[64]">
              <span className="flex w-[217px] h-[20px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[13px] font-normal leading-[20px] text-[#17324d] relative text-right whitespace-nowrap z-[65]">
                بررسی پروژه‌ها یا گزارش‌های جدیدتر سامانه
              </span>
              <div className="w-[5px] h-[5px] shrink-0 bg-[url(https://static.codia.ai/image/2026-08-24/xMAvOa5B30.png)] bg-cover bg-no-repeat rounded-[50%] relative z-[66]" />
            </div>
          </div>
        </div>
      </div>
      <div className="flex pt-[80px] pr-[120px] pb-[40px] pl-[120px] flex-col gap-[64px] items-start self-stretch shrink-0 flex-nowrap bg-[#111e30] relative z-[67]">
        <div className="flex gap-[48px] items-start self-stretch shrink-0 flex-nowrap relative z-[68]">
          <div className="flex w-[220px] h-[182px] flex-col gap-[12px] items-end shrink-0 flex-nowrap relative z-[69]">
            <span className="flex w-[59px] h-[22px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-bold leading-[21.875px] text-[#fff] relative text-right whitespace-nowrap z-[70]">
              ارتباط با ما
            </span>
            <span className="flex w-[115px] h-[20px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[13px] font-normal leading-[20px] text-[#e4ebf1] relative text-right whitespace-nowrap z-[71]">
              تلفن: ۰۲۱-۸۸۸۸۸۸۸۸
            </span>
            <span className="flex w-[156px] h-[20px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[13px] font-normal leading-[20px] text-[#e4ebf1] relative text-right whitespace-nowrap z-[72]">
              ایمیل: info@mahplatform.ir
            </span>
            <div className="flex w-[48px] pt-[8px] pr-0 pb-0 pl-0 gap-[12px] items-center shrink-0 flex-nowrap relative z-[73]">
              <div className="flex w-[18px] h-[18px] flex-col justify-center items-center shrink-0 flex-nowrap relative overflow-hidden z-[74]">
                <div className="w-[18px] h-[18px] shrink-0 bg-[url(https://static.codia.ai/image/2026-08-24/PzTPAeJYiH.png)] bg-cover bg-no-repeat relative overflow-hidden z-[75]" />
              </div>
              <div className="flex w-[18px] h-[18px] flex-col justify-center items-center shrink-0 flex-nowrap relative overflow-hidden z-[76]">
                <div className="w-[18px] h-[18px] shrink-0 bg-[url(https://static.codia.ai/image/2026-08-24/kheizpR92F.png)] bg-cover bg-no-repeat relative overflow-hidden z-[77]" />
              </div>
            </div>
          </div>
          <div className="flex w-[150px] h-[182px] flex-col gap-[12px] items-end shrink-0 flex-nowrap relative z-[78]">
            <span className="flex w-[39px] h-[22px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-bold leading-[21.875px] text-[#fff] relative text-right whitespace-nowrap z-[79]">
              حقوقی
            </span>
            <span className="flex w-[82px] h-[20px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[13px] font-normal leading-[20px] text-[#e4ebf1] relative text-right whitespace-nowrap z-[80]">
              قوانین و مقررات
            </span>
            <span className="flex w-[75px] h-[20px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[13px] font-normal leading-[20px] text-[#e4ebf1] relative text-right whitespace-nowrap z-[81]">
              حریم خصوصی
            </span>
          </div>
          <div className="flex w-[160px] h-[182px] flex-col gap-[12px] items-end shrink-0 flex-nowrap relative z-[82]">
            <span className="flex w-[49px] h-[22px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-bold leading-[21.875px] text-[#fff] relative text-right whitespace-nowrap z-[83]">
              پشتیبانی
            </span>
            <span className="flex w-[55px] h-[20px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[13px] font-normal leading-[20px] text-[#e4ebf1] relative text-right whitespace-nowrap z-[84]">
              تماس با ما
            </span>
            <span className="flex w-[77px] h-[20px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[13px] font-normal leading-[20px] text-[#e4ebf1] relative text-right whitespace-nowrap z-[85]">
              سؤالات متداول
            </span>
            <span className="flex w-[82px] h-[20px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[13px] font-normal leading-[20px] text-[#e4ebf1] relative text-right whitespace-nowrap z-[86]">
              پیگیری مشارکت
            </span>
          </div>
          <div className="flex w-[180px] flex-col gap-[12px] items-end shrink-0 flex-nowrap relative z-[87]">
            <span className="flex w-[83px] h-[22px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-bold leading-[21.875px] text-[#fff] relative text-right whitespace-nowrap z-[88]">
              دسترسی سریع
            </span>
            <span className="flex w-[38px] h-[20px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[13px] font-normal leading-[20px] text-[#e4ebf1] relative text-right whitespace-nowrap z-[89]">
              پروژه‌ها
            </span>
            <span className="flex w-[69px] h-[20px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[13px] font-normal leading-[20px] text-[#e4ebf1] relative text-right whitespace-nowrap z-[90]">
              برای شرکت‌ها
            </span>
            <span className="flex w-[71px] h-[20px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[13px] font-normal leading-[20px] text-[#e4ebf1] relative text-right whitespace-nowrap z-[91]">
              نحوه مشارکت
            </span>
            <span className="flex w-[84px] h-[20px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[13px] font-normal leading-[20px] text-[#e4ebf1] relative text-right whitespace-nowrap z-[92]">
              ثبت‌نام استارتاپ
            </span>
            <span className="flex w-[80px] h-[20px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[13px] font-normal leading-[20px] text-[#e4ebf1] relative text-right whitespace-nowrap z-[93]">
              اخبار و رویدادها
            </span>
          </div>
          <div className="flex w-[298px] h-[182px] flex-col gap-[14px] items-end shrink-0 flex-nowrap relative z-[94]">
            <div className="w-[210px] h-[70px] shrink-0 bg-[url(https://static.codia.ai/image/2026-08-24/mXQMj7xZpb.png)] bg-cover bg-no-repeat relative z-[95]" />
            <span className="flex w-[298px] h-[44px] justify-end items-start self-stretch shrink-0 font-['Vazirmatn'] text-[13px] font-normal leading-[22px] text-[#e4ebf1] relative text-right z-[96]">
              سامانه مشارکت در پروژه‌های اثر اجتماعی با مسیر مالی شفاف و اثر
              قابل‌اندازه‌گیری.
            </span>
          </div>
        </div>
        <div className="flex pt-[20px] pr-0 pb-0 pl-0 flex-col gap-[4px] items-center self-stretch shrink-0 flex-nowrap border-solid border-b border-b-[rgba(255,255,255,0.12)] relative z-[97]">
          <span className="flex w-[219px] h-[19px] justify-center items-start shrink-0 basis-auto font-['Vazirmatn'] text-[12px] font-normal leading-[18.75px] text-[#e4ebf1] relative text-center whitespace-nowrap z-[98]">
            طراحی و توسعه با هدف ارتقای عدالت اجتماعی
          </span>
          <span className="flex w-[203px] h-[19px] justify-center items-start shrink-0 basis-auto font-['Vazirmatn'] text-[12px] font-normal leading-[18.75px] text-[#e4ebf1] relative text-center whitespace-nowrap z-[99]">
            تمامی حقوق برای سامانه ماه محفوظ است.
          </span>
        </div>
      </div>
    </div>
  );
}
