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
            <span className="flex w-[66px] h-[22px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-medium leading-[21.875px] text-[#2094e3] relative text-right whitespace-nowrap z-[13]">
              {" "}
              استارتاپ‌ها
            </span>
            <span className="flex w-[41px] h-[22px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-medium leading-[21.875px] text-[#17324d] relative text-right whitespace-nowrap z-[14]">
              پروژه‌ها
            </span>
            <span className="flex w-[69px] h-[22px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-medium leading-[21.875px] text-[#17324d] relative text-right whitespace-nowrap z-[15]">
              صفحه اصلی
            </span>
          </div>
          <div className="w-[137px] h-[46px] shrink-0 bg-[url(/assets/logo.png)] bg-cover bg-no-repeat relative z-[16]" />
        </div>
      </div>
      <div className="flex w-[1200px] pt-[24px] pr-0 pb-[64px] pl-0 flex-col gap-[40px] items-end shrink-0 flex-nowrap relative z-[17]">
        <div className="flex justify-end items-start self-stretch shrink-0 flex-nowrap relative z-[18]">
          <span className="flex w-[133px] h-[20px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[13px] font-normal leading-[20px] text-[#60758a] relative text-right whitespace-nowrap z-[19]">
            صفحه اصلی / استارتاپ‌ها
          </span>
        </div>
        <div className="flex pt-[32px] pr-[32px] pb-[32px] pl-[32px] justify-between items-center self-stretch shrink-0 flex-nowrap bg-[#fff] rounded-[24px] border-solid border border-[#e4ebf1] relative shadow-[0_4px_16px_0_rgba(22,45,71,0.08)] z-20">
          <div className="flex w-[420px] flex-col gap-[12px] items-end shrink-0 flex-nowrap relative z-[21]">
            <div className="flex w-[320px] gap-[12px] items-start shrink-0 flex-nowrap relative z-[22]">
              <div className="flex w-[177px] pt-[11px] pr-[20px] pb-[11px] pl-[20px] gap-[8px] justify-center items-center shrink-0 flex-nowrap bg-[#fff] rounded-[12px] border-solid border border-[#e4ebf1] relative z-[23]">
                <span className="flex w-[137px] h-[22px] justify-center items-start shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-medium leading-[22px] text-[#2094e3] relative text-center whitespace-nowrap z-[24]">
                  فرایند ارزیابی استارتاپ‌ها
                </span>
              </div>
              <div className="flex w-[131px] pt-[11px] pr-[20px] pb-[11px] pl-[20px] gap-[8px] justify-center items-center shrink-0 flex-nowrap bg-[#2094e3] rounded-[12px] relative z-[25]">
                <span className="flex w-[91px] h-[22px] justify-center items-start shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-medium leading-[22px] text-[#fff] relative text-center whitespace-nowrap z-[26]">
                  ثبت‌نام استارتاپ
                </span>
              </div>
            </div>
            <span className="flex w-[377px] h-[19px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[12px] font-normal leading-[18.75px] text-[#60758a] relative text-right whitespace-nowrap z-[27]">
              نمایش عمومی پروفایل پس از بررسی اطلاعات و تأیید سامانه ماه
              امکان‌پذیر است.
            </span>
          </div>
          <div className="flex w-[700px] flex-col gap-[8px] items-end shrink-0 flex-nowrap relative z-[28]">
            <span className="flex w-[219px] h-[50px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[32px] font-extrabold leading-[50px] text-[#17324d] relative text-right whitespace-nowrap z-[29]">
              استارتاپ‌های ماه
            </span>
            <span className="h-[25px] self-stretch shrink-0 basis-auto font-['Vazirmatn'] text-[16px] font-normal leading-[25px] text-[#60758a] relative text-right whitespace-nowrap z-30">
              با تیم‌هایی آشنا شوید که راهکارهای قابل سنجش برای اشتغال، آموزش،
              سلامت و توسعه پایدار اجرا می‌کنند.
            </span>
          </div>
        </div>
        <div className="flex pt-[24px] pr-[24px] pb-[24px] pl-[24px] flex-col gap-[16px] items-end self-stretch shrink-0 flex-nowrap bg-[#fff] rounded-[20px] border-solid border border-[#e4ebf1] relative shadow-[0_4px_16px_0_rgba(22,45,71,0.08)] z-[31]">
          <div className="flex justify-between items-center self-stretch shrink-0 flex-nowrap relative z-[32]">
            <div className="flex w-[180px] flex-col gap-[4px] items-center shrink-0 flex-nowrap relative z-[33]">
              <span className="flex w-[65px] h-[20px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[13px] font-normal leading-[20px] text-[#60758a] relative text-right whitespace-nowrap z-[34]">
                افراد بهره‌مند
              </span>
              <span className="flex w-[93px] h-[34px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[22px] font-bold leading-[34px] text-[#17324d] relative text-right whitespace-nowrap z-[35]">
                ۱۲٬۸۴۰ نفر
              </span>
            </div>
            <div className="w-px h-[40px] shrink-0 bg-[url(/assets/line.png)] bg-cover bg-no-repeat relative z-[36]" />
            <div className="flex w-[180px] flex-col gap-[4px] items-center shrink-0 flex-nowrap relative z-[37]">
              <span className="flex w-[96px] h-[20px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[13px] font-normal leading-[20px] text-[#60758a] relative text-right whitespace-nowrap z-[38]">
                میانگین تحقق KPI
              </span>
              <span className="flex w-[38px] h-[34px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[22px] font-bold leading-[34px] text-[#17324d] relative text-right whitespace-nowrap z-[39]">
                ۸۴٪
              </span>
            </div>
            <div className="w-px h-[40px] shrink-0 bg-[url(/assets/line.png)] bg-cover bg-no-repeat relative z-40" />
            <div className="flex w-[180px] flex-col gap-[4px] items-center shrink-0 flex-nowrap relative z-[41]">
              <span className="flex w-[106px] h-[20px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[13px] font-normal leading-[20px] text-[#60758a] relative text-right whitespace-nowrap z-[42]">
                پروژه‌های تکمیل‌شده
              </span>
              <span className="flex w-[74px] h-[34px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[22px] font-bold leading-[34px] text-[#17324d] relative text-right whitespace-nowrap z-[43]">
                ۵۶ پروژه
              </span>
            </div>
            <div className="w-px h-[40px] shrink-0 bg-[url(/assets/line.png)] bg-cover bg-no-repeat relative z-[44]" />
            <div className="flex w-[180px] flex-col gap-[4px] items-center shrink-0 flex-nowrap relative z-[45]">
              <span className="flex w-[75px] h-[20px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[13px] font-normal leading-[20px] text-[#60758a] relative text-right whitespace-nowrap z-[46]">
                پروژه‌های فعال
              </span>
              <span className="flex w-[75px] h-[34px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[22px] font-bold leading-[34px] text-[#17324d] relative text-right whitespace-nowrap z-[47]">
                ۲۴ پروژه
              </span>
            </div>
            <div className="w-px h-[40px] shrink-0 bg-[url(/assets/line.png)] bg-cover bg-no-repeat relative z-[48]" />
            <div className="flex w-[180px] flex-col gap-[4px] items-center shrink-0 flex-nowrap relative z-[49]">
              <span className="flex w-[117px] h-[20px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[13px] font-normal leading-[20px] text-[#60758a] relative text-right whitespace-nowrap z-50">
                استارتاپ‌های تأییدشده
              </span>
              <span className="flex w-[112px] h-[34px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[22px] font-bold leading-[34px] text-[#17324d] relative text-right whitespace-nowrap z-[51]">
                ۳۸ استارتاپ
              </span>
            </div>
          </div>
          <span className="h-[17px] self-stretch shrink-0 basis-auto font-['Vazirmatn'] text-[11px] font-normal leading-[17px] text-[#60758a] relative text-right whitespace-nowrap z-[52]">
            آمار براساس پروژه‌ها و گزارش‌های عمومی تأییدشده محاسبه شده است.
          </span>
        </div>
        <div className="flex pt-[24px] pr-[24px] pb-[24px] pl-[24px] flex-col gap-[16px] items-start self-stretch shrink-0 flex-nowrap bg-[#fff] rounded-[16px] border-solid border border-[#e4ebf1] relative z-[53]">
          <div className="flex pt-[12px] pr-[12px] pb-[12px] pl-[12px] gap-[12px] items-center self-stretch shrink-0 flex-nowrap bg-[#fcfbf8] rounded-[12px] border-solid border border-[#e4ebf1] relative z-[54]">
            <span className="h-[22px] grow shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-normal leading-[21.875px] text-[#60758a] relative text-right whitespace-nowrap z-[55]">
              جست‌وجوی نام یا حوزه فعالیت استارتاپ...
            </span>
            <div className="flex w-[18px] h-[18px] flex-col justify-center items-center shrink-0 flex-nowrap relative overflow-hidden z-[56]">
              <div className="w-[18px] h-[18px] shrink-0 bg-[url(/assets/search.png)] bg-cover bg-no-repeat relative overflow-hidden z-[57]" />
            </div>
          </div>
          <div className="flex gap-[12px] items-start self-stretch shrink-0 flex-nowrap relative z-[58]">
            <div className="flex pt-[10px] pr-[14px] pb-[10px] pl-[14px] gap-[8px] items-center grow shrink-0 basis-0 flex-nowrap bg-[#fff] rounded-[10px] border-solid border border-[#e4ebf1] relative z-[59]">
              <div className="flex w-[14px] h-[14px] flex-col justify-center items-center shrink-0 flex-nowrap relative overflow-hidden z-[60]">
                <div className="w-[14px] h-[14px] shrink-0 bg-[url(/assets/chevron.png)] bg-cover bg-no-repeat relative overflow-hidden z-[61]" />
              </div>
              <span className="h-[19px] grow shrink-0 basis-auto font-['Vazirmatn'] text-[12px] font-normal leading-[18.75px] text-[#17324d] relative text-right whitespace-nowrap z-[62]">
                مرتب‌سازی
              </span>
            </div>
            <div className="flex pt-[10px] pr-[14px] pb-[10px] pl-[14px] gap-[8px] items-center grow shrink-0 basis-0 flex-nowrap bg-[#fff] rounded-[10px] border-solid border border-[#e4ebf1] relative z-[63]">
              <div className="flex w-[14px] h-[14px] flex-col justify-center items-center shrink-0 flex-nowrap relative overflow-hidden z-[64]">
                <div className="w-[14px] h-[14px] shrink-0 bg-[url(/assets/chevron.png)] bg-cover bg-no-repeat relative overflow-hidden z-[65]" />
              </div>
              <span className="h-[19px] grow shrink-0 basis-auto font-['Vazirmatn'] text-[12px] font-normal leading-[18.75px] text-[#17324d] relative text-right whitespace-nowrap z-[66]">
                مرحله رشد
              </span>
            </div>
            <div className="flex pt-[10px] pr-[14px] pb-[10px] pl-[14px] gap-[8px] items-center grow shrink-0 basis-0 flex-nowrap bg-[#fff] rounded-[10px] border-solid border border-[#e4ebf1] relative z-[67]">
              <div className="flex w-[14px] h-[14px] flex-col justify-center items-center shrink-0 flex-nowrap relative overflow-hidden z-[68]">
                <div className="w-[14px] h-[14px] shrink-0 bg-[url(/assets/chevron.png)] bg-cover bg-no-repeat relative overflow-hidden z-[69]" />
              </div>
              <span className="h-[19px] grow shrink-0 basis-auto font-['Vazirmatn'] text-[12px] font-normal leading-[18.75px] text-[#17324d] relative text-right whitespace-nowrap z-[70]">
                وضعیت پروژه
              </span>
            </div>
            <div className="flex pt-[10px] pr-[14px] pb-[10px] pl-[14px] gap-[8px] items-center grow shrink-0 basis-0 flex-nowrap bg-[#fff] rounded-[10px] border-solid border border-[#e4ebf1] relative z-[71]">
              <div className="flex w-[14px] h-[14px] flex-col justify-center items-center shrink-0 flex-nowrap relative overflow-hidden z-[72]">
                <div className="w-[14px] h-[14px] shrink-0 bg-[url(/assets/chevron.png)] bg-cover bg-no-repeat relative overflow-hidden z-[73]" />
              </div>
              <span className="h-[19px] grow shrink-0 basis-auto font-['Vazirmatn'] text-[12px] font-normal leading-[18.75px] text-[#17324d] relative text-right whitespace-nowrap z-[74]">
                استان محل فعالیت
              </span>
            </div>
            <div className="flex pt-[10px] pr-[14px] pb-[10px] pl-[14px] gap-[8px] items-center grow shrink-0 basis-0 flex-nowrap bg-[#fff] rounded-[10px] border-solid border border-[#e4ebf1] relative z-[75]">
              <div className="flex w-[14px] h-[14px] flex-col justify-center items-center shrink-0 flex-nowrap relative overflow-hidden z-[76]">
                <div className="w-[14px] h-[14px] shrink-0 bg-[url(/assets/chevron.png)] bg-cover bg-no-repeat relative overflow-hidden z-[77]" />
              </div>
              <span className="h-[19px] grow shrink-0 basis-auto font-['Vazirmatn'] text-[12px] font-normal leading-[18.75px] text-[#17324d] relative text-right whitespace-nowrap z-[78]">
                حوزه اثر
              </span>
            </div>
          </div>
          <div className="flex gap-[12px] justify-end items-start self-stretch shrink-0 flex-nowrap relative z-[79]">
            <div className="flex w-[102px] pt-[11px] pr-[20px] pb-[11px] pl-[20px] gap-[8px] justify-center items-center shrink-0 flex-nowrap bg-[#2094e3] rounded-[12px] relative z-[80]">
              <span className="flex w-[62px] h-[22px] justify-center items-start shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-medium leading-[22px] text-[#fff] relative text-center whitespace-nowrap z-[81]">
                اعمال فیلتر
              </span>
            </div>
            <div className="flex w-[116px] pt-[10px] pr-[14px] pb-[10px] pl-[14px] gap-[8px] justify-center items-center shrink-0 flex-nowrap bg-[#fff] rounded-[8px] border-solid border border-[#dbe0e8] relative overflow-hidden z-[82]">
              <span className="flex w-[88px] h-[20px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[13px] font-medium leading-[20px] text-[#495468] relative text-right whitespace-nowrap z-[83]">
                پاک کردن فیلترها
              </span>
            </div>
          </div>
        </div>
        <div className="flex gap-[8px] justify-end items-center self-stretch shrink-0 flex-nowrap relative z-[84]">
          <div className="flex w-[112px] pt-[8px] pr-[16px] pb-[8px] pl-[16px] items-start shrink-0 flex-nowrap bg-[#eaf5fd] rounded-[10px] relative z-[85]">
            <span className="h-[20px] shrink-0 basis-auto font-['Vazirmatn'] text-[13px] font-normal leading-[20px] text-[#2094e3] relative text-left whitespace-nowrap z-[86]">
              فناوری اجتماعی
            </span>
          </div>
          <div className="flex w-[113px] pt-[8px] pr-[16px] pb-[8px] pl-[16px] items-start shrink-0 flex-nowrap bg-[#eaf5fd] rounded-[10px] relative z-[87]">
            <span className="h-[20px] shrink-0 basis-auto font-['Vazirmatn'] text-[13px] font-normal leading-[20px] text-[#2094e3] relative text-left whitespace-nowrap z-[88]">
              توسعه روستایی
            </span>
          </div>
          <div className="flex w-[70px] pt-[8px] pr-[16px] pb-[8px] pl-[16px] items-start shrink-0 flex-nowrap bg-[#eaf5fd] rounded-[10px] relative z-[89]">
            <span className="h-[20px] shrink-0 basis-auto font-['Vazirmatn'] text-[13px] font-normal leading-[20px] text-[#2094e3] relative text-left whitespace-nowrap z-[90]">
              سلامت
            </span>
          </div>
          <div className="flex w-[67px] pt-[8px] pr-[16px] pb-[8px] pl-[16px] items-start shrink-0 flex-nowrap bg-[#eaf5fd] rounded-[10px] relative z-[91]">
            <span className="h-[20px] shrink-0 basis-auto font-['Vazirmatn'] text-[13px] font-normal leading-[20px] text-[#2094e3] relative text-left whitespace-nowrap z-[92]">
              آموزش
            </span>
          </div>
          <div className="flex w-[70px] pt-[8px] pr-[16px] pb-[8px] pl-[16px] items-start shrink-0 flex-nowrap bg-[#eaf5fd] rounded-[10px] relative z-[93]">
            <span className="h-[20px] shrink-0 basis-auto font-['Vazirmatn'] text-[13px] font-normal leading-[20px] text-[#2094e3] relative text-left whitespace-nowrap z-[94]">
              اشتغال
            </span>
          </div>
          <div className="flex w-[118px] pt-[8px] pr-[16px] pb-[8px] pl-[16px] items-start shrink-0 flex-nowrap bg-[#2094e3] rounded-[10px] relative z-[95]">
            <span className="h-[20px] shrink-0 basis-auto font-['Vazirmatn'] text-[13px] font-bold leading-[20px] text-[#fff] relative text-left whitespace-nowrap z-[96]">
              همه استارتاپ‌ها
            </span>
          </div>
        </div>
        <div className="flex flex-col gap-[24px] items-end self-stretch shrink-0 flex-nowrap relative z-[97]">
          <div className="flex flex-col gap-[6px] items-end self-stretch shrink-0 flex-nowrap relative z-[98]">
            <span className="flex w-[290px] h-[38px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[24px] font-extrabold leading-[37.5px] text-[#17324d] relative text-right whitespace-nowrap z-[99]">
              استارتاپ‌های دارای پروژه فعال
            </span>
            <span className="flex w-[372px] h-[22px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-normal leading-[21.875px] text-[#60758a] relative text-right whitespace-nowrap z-[100]">
              تیم‌هایی که در حال اجرای پروژه‌های تأییدشده در سامانه ماه هستند.
            </span>
          </div>
          <div className="flex gap-[24px] justify-end items-start self-stretch shrink-0 flex-nowrap relative z-[101]">
            <div className="flex pt-[24px] pr-[24px] pb-[24px] pl-[24px] flex-col gap-[20px] items-end grow shrink-0 basis-0 flex-nowrap bg-[#fff] rounded-[24px] border-solid border border-[#e4ebf1] relative shadow-[0_4px_16px_0_rgba(22,45,71,0.08)] z-[102]">
              <div className="flex justify-between items-center self-stretch shrink-0 flex-nowrap relative z-[103]">
                <div className="flex w-[238px] gap-[12px] justify-end items-center shrink-0 flex-nowrap relative z-[104]">
                  <div className="flex w-[48px] h-[48px] justify-center items-center shrink-0 flex-nowrap bg-[#eaf5fd] rounded-[12px] relative z-[105]">
                    <div className="flex w-[24px] h-[24px] flex-col justify-center items-center shrink-0 flex-nowrap relative overflow-hidden z-[106]">
                      <div className="w-[24px] h-[24px] shrink-0 bg-[url(/assets/activity.png)] bg-cover bg-no-repeat relative overflow-hidden z-[107]" />
                    </div>
                  </div>
                  <div className="flex w-[178px] flex-col items-end shrink-0 flex-nowrap relative z-[108]">
                    <span className="flex w-[127px] h-[28px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[18px] font-bold leading-[28px] text-[#17324d] relative text-right whitespace-nowrap z-[109]">
                      سلامت‌یار خانواده
                    </span>
                    <span className="flex w-[178px] h-[19px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[12px] font-normal leading-[18.75px] text-[#60758a] relative text-right whitespace-nowrap z-[110]">
                      دسترسی خانواده‌ها به خدمات سلامت
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-[8px] items-end self-stretch shrink-0 flex-nowrap relative z-[111]">
                <span className="flex w-[209px] h-[20px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[13px] font-normal leading-[20px] text-[#60758a] relative text-right whitespace-nowrap z-[112]">
                  تیم: ۱۰ نفر | سال آغاز: ۱۴۰۲ | شیراز، فارس
                </span>
                <span className="flex w-[124px] h-[20px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[13px] font-normal leading-[20px] text-[#2094e3] relative text-right whitespace-nowrap z-[113]">
                  سلامت، فناوری اجتماعی
                </span>
              </div>
              <div className="h-px self-stretch shrink-0 bg-[url(/assets/line.png)] bg-cover bg-no-repeat relative z-[114]" />
              <div className="flex justify-between items-start self-stretch shrink-0 flex-nowrap relative z-[115]">
                <div className="flex w-[70px] flex-col items-center shrink-0 flex-nowrap relative z-[116]">
                  <span className="flex w-[5px] h-[22px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-bold leading-[21.875px] text-[#17324d] relative text-right whitespace-nowrap z-[117]">
                    ۱
                  </span>
                  <span className="flex w-[46px] h-[17px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[11px] font-normal leading-[17px] text-[#60758a] relative text-right whitespace-nowrap z-[118]">
                    پروژه فعال
                  </span>
                </div>
                <div className="flex w-[70px] flex-col items-center shrink-0 flex-nowrap relative z-[119]">
                  <span className="flex w-[8px] h-[22px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-bold leading-[21.875px] text-[#17324d] relative text-right whitespace-nowrap z-[120]">
                    ۲
                  </span>
                  <span className="flex w-[47px] h-[17px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[11px] font-normal leading-[17px] text-[#60758a] relative text-right whitespace-nowrap z-[121]">
                    تکمیل‌شده
                  </span>
                </div>
                <div className="flex w-[70px] flex-col items-center shrink-0 flex-nowrap relative z-[122]">
                  <span className="flex w-[32px] h-[22px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-bold leading-[21.875px] text-[#17324d] relative text-right whitespace-nowrap z-[123]">
                    ۱٬۴۸۰
                  </span>
                  <span className="flex w-[33px] h-[17px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[11px] font-normal leading-[17px] text-[#60758a] relative text-right whitespace-nowrap z-[124]">
                    بهره‌مند
                  </span>
                </div>
                <div className="flex w-[70px] flex-col items-center shrink-0 flex-nowrap relative z-[125]">
                  <span className="flex w-[24px] h-[22px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-bold leading-[21.875px] text-[#17324d] relative text-right whitespace-nowrap z-[126]">
                    ۸۲٪
                  </span>
                  <span className="flex w-[44px] h-[17px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[11px] font-normal leading-[17px] text-[#60758a] relative text-right whitespace-nowrap z-[127]">
                    تحقق KPI
                  </span>
                </div>
              </div>
              <div className="flex pt-[12px] pr-[12px] pb-[12px] pl-[12px] flex-col gap-[8px] items-end self-stretch shrink-0 flex-nowrap bg-[#fcfbf8] rounded-[12px] relative z-[128]">
                <div className="flex justify-between items-start self-stretch shrink-0 flex-nowrap relative z-[129]">
                  <span className="flex w-[157px] h-[20px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[13px] font-medium leading-[20px] text-[#17324d] relative text-right whitespace-nowrap z-[130]">
                    پروژه فعال: سلامت کم‌برخوردار
                  </span>
                  <span className="flex w-[76px] h-[19px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[12px] font-normal leading-[18.75px] text-[#2094e3] relative text-right whitespace-nowrap z-[131]">
                    ۵۳٪ تأمین شده
                  </span>
                </div>
                <div className="flex h-[6px] justify-end items-start self-stretch shrink-0 flex-nowrap bg-[#e4ebf1] rounded-[3px] relative overflow-hidden z-[132]">
                  <div className="w-[175px] self-stretch shrink-0 bg-[#2094e3] relative z-[133]" />
                </div>
              </div>
              <div className="flex gap-[12px] items-start self-stretch shrink-0 flex-nowrap relative z-[134]">
                <div className="flex pt-[10px] pr-[10px] pb-[10px] pl-[10px] justify-center items-center grow shrink-0 basis-0 flex-nowrap bg-[#2094e3] rounded-[10px] relative z-[135]">
                  <span className="flex w-[86px] h-[20px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[13px] font-medium leading-[20px] text-[#fff] relative text-right whitespace-nowrap z-[136]">
                    مشاهده پروفایل
                  </span>
                </div>
                <div className="flex pt-[10px] pr-[10px] pb-[10px] pl-[10px] justify-center items-center grow shrink-0 basis-0 flex-nowrap rounded-[10px] border-solid border border-[#e4ebf1] relative z-[137]">
                  <span className="flex w-[102px] h-[20px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[13px] font-medium leading-[20px] text-[#60758a] relative text-right whitespace-nowrap z-[138]">
                    مشاهده پروژه فعال
                  </span>
                </div>
              </div>
              <span className="h-[17px] self-stretch shrink-0 basis-auto font-['Vazirmatn'] text-[11px] font-normal leading-[17px] text-[#60758a] relative text-center whitespace-nowrap z-[139]">
                مشارکت فقط از طریق پروژه‌های تأییدشده انجام می‌شود.
              </span>
            </div>
            <div className="flex pt-[24px] pr-[24px] pb-[24px] pl-[24px] flex-col gap-[20px] items-end grow shrink-0 basis-0 flex-nowrap bg-[#fff] rounded-[24px] border-solid border border-[#e4ebf1] relative shadow-[0_4px_16px_0_rgba(22,45,71,0.08)] z-[140]">
              <div className="flex justify-between items-center self-stretch shrink-0 flex-nowrap relative z-[141]">
                <div className="flex w-[337px] gap-[12px] justify-end items-center shrink-0 flex-nowrap relative z-[142]">
                  <div className="flex w-[48px] h-[48px] justify-center items-center shrink-0 flex-nowrap bg-[#eaf5fd] rounded-[12px] relative z-[143]">
                    <div className="flex w-[24px] h-[24px] flex-col justify-center items-center shrink-0 flex-nowrap relative overflow-hidden z-[144]">
                      <div className="w-[24px] h-[24px] shrink-0 bg-[url(/assets/graduation.png)] bg-cover bg-no-repeat relative overflow-hidden z-[145]" />
                    </div>
                  </div>
                  <div className="flex w-[277px] flex-col items-end shrink-0 flex-nowrap relative z-[146]">
                    <span className="flex w-[59px] h-[28px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[18px] font-bold leading-[28px] text-[#17324d] relative text-right whitespace-nowrap z-[147]">
                      مهارت‌نو
                    </span>
                    <span className="flex w-[178px] h-[19px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[12px] font-normal leading-[18.75px] text-[#60758a] relative text-right whitespace-nowrap z-[148]">
                      آموزش مهارت‌های کاربردی به نوجوانان
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-[8px] items-end self-stretch shrink-0 flex-nowrap relative z-[149]">
                <span className="flex w-[256px] h-[20px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[13px] font-normal leading-[20px] text-[#60758a] relative text-right whitespace-nowrap z-[150]">
                  تیم: ۱۲ نفر | سال آغاز: ۱۴۰۰ | مشهد، خراسان رضوی
                </span>
                <span className="flex w-[79px] h-[20px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[13px] font-normal leading-[20px] text-[#2094e3] relative text-right whitespace-nowrap z-[151]">
                  آموزش، اشتغال
                </span>
              </div>
              <div className="h-px self-stretch shrink-0 bg-[url(/assets/line.png)] bg-cover bg-no-repeat relative z-[152]" />
              <div className="flex justify-between items-start self-stretch shrink-0 flex-nowrap relative z-[153]">
                <div className="flex w-[70px] flex-col items-center shrink-0 flex-nowrap relative z-[154]">
                  <span className="flex w-[10px] h-[22px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-bold leading-[21.875px] text-[#17324d] relative text-right whitespace-nowrap z-[155]">
                    ۳
                  </span>
                  <span className="flex w-[46px] h-[17px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[11px] font-normal leading-[17px] text-[#60758a] relative text-right whitespace-nowrap z-[156]">
                    پروژه فعال
                  </span>
                </div>
                <div className="flex w-[70px] flex-col items-center shrink-0 flex-nowrap relative z-[157]">
                  <span className="flex w-[9px] h-[22px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-bold leading-[21.875px] text-[#17324d] relative text-right whitespace-nowrap z-[158]">
                    ۴
                  </span>
                  <span className="flex w-[47px] h-[17px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[11px] font-normal leading-[17px] text-[#60758a] relative text-right whitespace-nowrap z-[159]">
                    تکمیل‌شده
                  </span>
                </div>
                <div className="flex w-[70px] flex-col items-center shrink-0 flex-nowrap relative z-[160]">
                  <span className="flex w-[32px] h-[22px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-bold leading-[21.875px] text-[#17324d] relative text-right whitespace-nowrap z-[161]">
                    ۳٬۱۲۰
                  </span>
                  <span className="flex w-[33px] h-[17px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[11px] font-normal leading-[17px] text-[#60758a] relative text-right whitespace-nowrap z-[162]">
                    بهره‌مند
                  </span>
                </div>
                <div className="flex w-[70px] flex-col items-center shrink-0 flex-nowrap relative z-[163]">
                  <span className="flex w-[23px] h-[22px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-bold leading-[21.875px] text-[#17324d] relative text-right whitespace-nowrap z-[164]">
                    ۸۹٪
                  </span>
                  <span className="flex w-[44px] h-[17px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[11px] font-normal leading-[17px] text-[#60758a] relative text-right whitespace-nowrap z-[165]">
                    تحقق KPI
                  </span>
                </div>
              </div>
              <div className="flex pt-[12px] pr-[12px] pb-[12px] pl-[12px] flex-col gap-[8px] items-end self-stretch shrink-0 flex-nowrap bg-[#fcfbf8] rounded-[12px] relative z-[166]">
                <div className="flex justify-between items-start self-stretch shrink-0 flex-nowrap relative z-[167]">
                  <span className="flex w-[179px] h-[20px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[13px] font-medium leading-[20px] text-[#17324d] relative text-right whitespace-nowrap z-[168]">
                    پروژه فعال: آموزش مهارت نوجوانان
                  </span>
                  <span className="flex w-[74px] h-[19px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[12px] font-normal leading-[18.75px] text-[#2094e3] relative text-right whitespace-nowrap z-[169]">
                    ۶۴٪ تأمین شده
                  </span>
                </div>
                <div className="flex h-[6px] justify-end items-start self-stretch shrink-0 flex-nowrap bg-[#e4ebf1] rounded-[3px] relative overflow-hidden z-[170]">
                  <div className="w-[210px] self-stretch shrink-0 bg-[#2094e3] relative z-[171]" />
                </div>
              </div>
              <div className="flex gap-[12px] items-start self-stretch shrink-0 flex-nowrap relative z-[172]">
                <div className="flex pt-[10px] pr-[10px] pb-[10px] pl-[10px] justify-center items-center grow shrink-0 basis-0 flex-nowrap bg-[#2094e3] rounded-[10px] relative z-[173]">
                  <span className="flex w-[86px] h-[20px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[13px] font-medium leading-[20px] text-[#fff] relative text-right whitespace-nowrap z-[174]">
                    مشاهده پروفایل
                  </span>
                </div>
                <div className="flex pt-[10px] pr-[10px] pb-[10px] pl-[10px] justify-center items-center grow shrink-0 basis-0 flex-nowrap rounded-[10px] border-solid border border-[#e4ebf1] relative z-[175]">
                  <span className="flex w-[102px] h-[20px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[13px] font-medium leading-[20px] text-[#60758a] relative text-right whitespace-nowrap z-[176]">
                    مشاهده پروژه فعال
                  </span>
                </div>
              </div>
              <span className="h-[17px] self-stretch shrink-0 basis-auto font-['Vazirmatn'] text-[11px] font-normal leading-[17px] text-[#60758a] relative text-center whitespace-nowrap z-[177]">
                مشارکت فقط از طریق پروژه‌های تأییدشده انجام می‌شود.
              </span>
            </div>
            <div className="flex pt-[24px] pr-[24px] pb-[24px] pl-[24px] flex-col gap-[20px] items-end grow shrink-0 basis-0 flex-nowrap bg-[#fff] rounded-[24px] border-solid border border-[#e4ebf1] relative shadow-[0_4px_16px_0_rgba(22,45,71,0.08)] z-[178]">
              <div className="flex justify-between items-center self-stretch shrink-0 flex-nowrap relative z-[179]">
                <div className="flex w-[337px] gap-[12px] justify-end items-center shrink-0 flex-nowrap relative z-[180]">
                  <div className="flex w-[48px] h-[48px] justify-center items-center shrink-0 flex-nowrap bg-[#eaf5fd] rounded-[12px] relative z-[181]">
                    <div className="flex w-[24px] h-[24px] flex-col justify-center items-center shrink-0 flex-nowrap relative overflow-hidden z-[182]">
                      <div className="w-[24px] h-[24px] shrink-0 bg-[url(/assets/graduation.png)] bg-cover bg-no-repeat relative overflow-hidden z-[183]" />
                    </div>
                  </div>
                  <div className="flex w-[277px] flex-col items-end shrink-0 flex-nowrap relative z-[184]">
                    <span className="flex w-[59px] h-[28px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[18px] font-bold leading-[28px] text-[#17324d] relative text-right whitespace-nowrap z-[185]">
                      مهارت‌نو
                    </span>
                    <span className="flex w-[178px] h-[19px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[12px] font-normal leading-[18.75px] text-[#60758a] relative text-right whitespace-nowrap z-[186]">
                      آموزش مهارت‌های کاربردی به نوجوانان
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-[8px] items-end self-stretch shrink-0 flex-nowrap relative z-[187]">
                <span className="flex w-[214px] h-[20px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[13px] font-normal leading-[20px] text-[#60758a] relative text-right whitespace-nowrap z-[188]">
                  تیم: ۸ نفر | سال آغاز: ۱۴۰۱ | گرگان، گلستان
                </span>
                <span className="flex w-[125px] h-[20px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[13px] font-normal leading-[20px] text-[#2094e3] relative text-right whitespace-nowrap z-[189]">
                  اشتغال، توسعه روستایی
                </span>
              </div>
              <div className="h-px self-stretch shrink-0 bg-[url(/assets/line.png)] bg-cover bg-no-repeat relative z-[190]" />
              <div className="flex justify-between items-start self-stretch shrink-0 flex-nowrap relative z-[191]">
                <div className="flex w-[70px] flex-col items-center shrink-0 flex-nowrap relative z-[192]">
                  <span className="flex w-[8px] h-[22px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-bold leading-[21.875px] text-[#17324d] relative text-right whitespace-nowrap z-[193]">
                    ۲
                  </span>
                  <span className="flex w-[46px] h-[17px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[11px] font-normal leading-[17px] text-[#60758a] relative text-right whitespace-nowrap z-[194]">
                    پروژه فعال
                  </span>
                </div>
                <div className="flex w-[70px] flex-col items-center shrink-0 flex-nowrap relative z-[195]">
                  <span className="flex w-[10px] h-[22px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-bold leading-[21.875px] text-[#17324d] relative text-right whitespace-nowrap z-[196]">
                    ۳
                  </span>
                  <span className="flex w-[47px] h-[17px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[11px] font-normal leading-[17px] text-[#60758a] relative text-right whitespace-nowrap z-[197]">
                    تکمیل‌شده
                  </span>
                </div>
                <div className="flex w-[70px] flex-col items-center shrink-0 flex-nowrap relative z-[198]">
                  <span className="flex w-[35px] h-[22px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-bold leading-[21.875px] text-[#17324d] relative text-right whitespace-nowrap z-[199]">
                    ۲٬۸۴۰
                  </span>
                  <span className="flex w-[33px] h-[17px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[11px] font-normal leading-[17px] text-[#60758a] relative text-right whitespace-nowrap z-[200]">
                    بهره‌مند
                  </span>
                </div>
                <div className="flex w-[70px] flex-col items-center shrink-0 flex-nowrap relative z-[201]">
                  <span className="flex w-[23px] h-[22px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-bold leading-[21.875px] text-[#17324d] relative text-right whitespace-nowrap z-[202]">
                    ۸۶٪
                  </span>
                  <span className="flex w-[44px] h-[17px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[11px] font-normal leading-[17px] text-[#60758a] relative text-right whitespace-nowrap z-[203]">
                    تحقق KPI
                  </span>
                </div>
              </div>
              <div className="flex pt-[12px] pr-[12px] pb-[12px] pl-[12px] flex-col gap-[8px] items-end self-stretch shrink-0 flex-nowrap bg-[#fcfbf8] rounded-[12px] relative z-[204]">
                <div className="flex justify-between items-start self-stretch shrink-0 flex-nowrap relative z-[205]">
                  <span className="flex w-[169px] h-[20px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[13px] font-medium leading-[20px] text-[#17324d] relative text-right whitespace-nowrap z-[206]">
                    پروژه فعال: اشتغال زنان روستایی
                  </span>
                  <span className="flex w-[74px] h-[19px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[12px] font-normal leading-[18.75px] text-[#2094e3] relative text-right whitespace-nowrap z-[207]">
                    ۴۲٪ تأمین شده
                  </span>
                </div>
                <div className="flex h-[6px] justify-end items-start self-stretch shrink-0 flex-nowrap bg-[#e4ebf1] rounded-[3px] relative overflow-hidden z-[208]">
                  <div className="w-[140px] self-stretch shrink-0 bg-[#2094e3] relative z-[209]" />
                </div>
              </div>
              <div className="flex gap-[12px] items-start self-stretch shrink-0 flex-nowrap relative z-[210]">
                <div className="flex pt-[10px] pr-[10px] pb-[10px] pl-[10px] justify-center items-center grow shrink-0 basis-0 flex-nowrap bg-[#2094e3] rounded-[10px] relative z-[211]">
                  <span className="flex w-[86px] h-[20px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[13px] font-medium leading-[20px] text-[#fff] relative text-right whitespace-nowrap z-[212]">
                    مشاهده پروفایل
                  </span>
                </div>
                <div className="flex pt-[10px] pr-[10px] pb-[10px] pl-[10px] justify-center items-center grow shrink-0 basis-0 flex-nowrap rounded-[10px] border-solid border border-[#e4ebf1] relative z-[213]">
                  <span className="flex w-[102px] h-[20px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[13px] font-medium leading-[20px] text-[#60758a] relative text-right whitespace-nowrap z-[214]">
                    مشاهده پروژه فعال
                  </span>
                </div>
              </div>
              <span className="h-[17px] self-stretch shrink-0 basis-auto font-['Vazirmatn'] text-[11px] font-normal leading-[17px] text-[#60758a] relative text-center whitespace-nowrap z-[215]">
                مشارکت فقط از طریق پروژه‌های تأییدشده انجام می‌شود.
              </span>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-[24px] items-end self-stretch shrink-0 flex-nowrap relative z-[216]">
          <div className="flex flex-col gap-[6px] items-end self-stretch shrink-0 flex-nowrap relative z-[217]">
            <span className="flex w-[272px] h-[38px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[24px] font-extrabold leading-[37.5px] text-[#17324d] relative text-right whitespace-nowrap z-[218]">
              همه استارتاپ‌های تأییدشده
            </span>
          </div>
          <div className="self-stretch shrink-0 relative z-[219]">
            <div className="flex w-[1200px] h-[313px] justify-between items-center relative z-[274]">
              <div className="flex pt-[20px] pr-[20px] pb-[20px] pl-[20px] flex-col gap-[16px] items-start grow shrink-0 basis-0 flex-nowrap bg-[#fff] rounded-[16px] border-solid border border-[#e4ebf1] relative shadow-[0_4px_16px_0_rgba(22,45,71,0.08)] z-[220]">
                <div className="flex justify-between items-center self-stretch shrink-0 flex-nowrap relative z-[221]">
                  <div className="flex w-[344px] gap-[12px] justify-end items-center shrink-0 flex-nowrap relative z-[222]">
                    <span className="flex w-[60px] h-[25px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[16px] font-bold leading-[25px] text-[#17324d] relative text-right whitespace-nowrap z-[223]">
                      بازار بومی
                    </span>
                    <div className="flex w-[40px] h-[40px] justify-center items-center shrink-0 flex-nowrap bg-[#eaf5fd] rounded-[10px] relative z-[224]">
                      <div className="flex w-[20px] h-[20px] flex-col justify-center items-center shrink-0 flex-nowrap relative overflow-hidden z-[225]">
                        <div className="w-[20px] h-[20px] shrink-0 bg-[url(/assets/building.png)] bg-cover bg-no-repeat relative overflow-hidden z-[226]" />
                      </div>
                    </div>
                  </div>
                </div>
                <span className="flex w-[344px] h-[40px] justify-end items-start self-stretch shrink-0 font-['Vazirmatn'] text-[13px] font-normal leading-[20.313px] text-[#60758a] relative text-right overflow-hidden z-[227]">
                  تجارت اجتماعی و توسعه بازار برای محصولات محلی و روستایی کشور.
                </span>
                <div className="flex flex-col gap-[4px] items-end self-stretch shrink-0 flex-nowrap relative z-[228]">
                  <span className="flex w-[153px] h-[19px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[12px] font-normal leading-[18.75px] text-[#2094e3] relative text-right whitespace-nowrap z-[229]">
                    تجارت اجتماعی، توسعه روستایی
                  </span>
                  <span className="flex w-[69px] h-[19px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[12px] font-normal leading-[18.75px] text-[#60758a] relative text-right whitespace-nowrap z-[230]">
                    ساری، مازندران
                  </span>
                </div>
                <div className="h-px self-stretch shrink-0 bg-[url(/assets/line.png)] bg-cover bg-no-repeat relative z-[231]" />
                <div className="flex justify-between items-start self-stretch shrink-0 flex-nowrap relative z-[232]">
                  <div className="flex w-[40px] flex-col items-center shrink-0 flex-nowrap relative z-[233]">
                    <span className="flex w-[23px] h-[20px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[13px] font-bold leading-[20px] text-[#17324d] relative text-right whitespace-nowrap z-[234]">
                      ۸۸٪
                    </span>
                    <span className="flex w-[40px] h-[16px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[10px] font-normal leading-[15.625px] text-[#60758a] relative text-right whitespace-nowrap z-[235]">
                      تحقق KPI
                    </span>
                  </div>
                  <div className="flex w-[46px] flex-col items-center shrink-0 flex-nowrap relative z-[236]">
                    <span className="flex w-[46px] h-[20px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[13px] font-bold leading-[20px] text-[#17324d] relative text-right whitespace-nowrap z-[237]">
                      ۱٬۹۶۰ نفر
                    </span>
                    <span className="flex w-[39px] h-[16px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[10px] font-normal leading-[15.625px] text-[#60758a] relative text-right whitespace-nowrap z-[238]">
                      بهره‌مندان
                    </span>
                  </div>
                  <div className="flex w-[43px] flex-col items-center shrink-0 flex-nowrap relative z-[239]">
                    <span className="flex w-[8px] h-[20px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[13px] font-bold leading-[20px] text-[#17324d] relative text-right whitespace-nowrap z-[240]">
                      ۵
                    </span>
                    <span className="flex w-[43px] h-[16px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[10px] font-normal leading-[15.625px] text-[#60758a] relative text-right whitespace-nowrap z-[241]">
                      تکمیل‌شده
                    </span>
                  </div>
                  <div className="flex w-[41px] flex-col items-center shrink-0 flex-nowrap relative z-[242]">
                    <span className="flex w-[8px] h-[20px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[13px] font-bold leading-[20px] text-[#17324d] relative text-right whitespace-nowrap z-[243]">
                      ۲
                    </span>
                    <span className="flex w-[41px] h-[16px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[10px] font-normal leading-[15.625px] text-[#60758a] relative text-right whitespace-nowrap z-[244]">
                      پروژه فعال
                    </span>
                  </div>
                </div>
                <div className="flex pt-[8px] pr-[8px] pb-[8px] pl-[8px] justify-center items-center self-stretch shrink-0 flex-nowrap bg-[#eaf5fd] rounded-[8px] relative z-[245]">
                  <span className="flex w-[124px] h-[19px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[12px] font-medium leading-[18.75px] text-[#2094e3] relative text-right whitespace-nowrap z-[246]">
                    مشاهده پروفایل استارتاپ
                  </span>
                </div>
              </div>
              <div className="flex pt-[20px] pr-[20px] pb-[20px] pl-[20px] flex-col gap-[16px] items-start grow shrink-0 basis-0 flex-nowrap bg-[#fff] rounded-[16px] border-solid border border-[#e4ebf1] relative shadow-[0_4px_16px_0_rgba(22,45,71,0.08)] z-[247]">
                <div className="flex justify-between items-center self-stretch shrink-0 flex-nowrap relative z-[248]">
                  <div className="flex w-[344px] gap-[12px] justify-end items-center shrink-0 flex-nowrap relative z-[249]">
                    <span className="flex w-[57px] h-[25px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[16px] font-bold leading-[25px] text-[#17324d] relative text-right whitespace-nowrap z-[250]">
                      روستاتک
                    </span>
                    <div className="flex w-[40px] h-[40px] justify-center items-center shrink-0 flex-nowrap bg-[#eaf5fd] rounded-[10px] relative z-[251]">
                      <div className="flex w-[20px] h-[20px] flex-col justify-center items-center shrink-0 flex-nowrap relative overflow-hidden z-[252]">
                        <div className="w-[20px] h-[20px] shrink-0 bg-[url(/assets/building.png)] bg-cover bg-no-repeat relative overflow-hidden z-[253]" />
                      </div>
                    </div>
                  </div>
                </div>
                <span className="flex w-[344px] h-[40px] justify-end items-start self-stretch shrink-0 font-['Vazirmatn'] text-[13px] font-normal leading-[20.313px] text-[#60758a] relative text-right overflow-hidden z-[254]">
                  ارائه فناوری‌های نوین کشاورزی و ابزارهای معیشت پایدار
                  کشاورزان.
                </span>
                <div className="flex flex-col gap-[4px] items-end self-stretch shrink-0 flex-nowrap relative z-[255]">
                  <span className="flex w-[120px] h-[19px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[12px] font-normal leading-[18.75px] text-[#2094e3] relative text-right whitespace-nowrap z-[256]">
                    فناوری کشاورزی، معیشت
                  </span>
                  <span className="flex w-[137px] h-[19px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[12px] font-normal leading-[18.75px] text-[#60758a] relative text-right whitespace-nowrap z-[257]">
                    زاهدان، سیستان و بلوچستان
                  </span>
                </div>
                <div className="h-px self-stretch shrink-0 bg-[url(/assets/line.png)] bg-cover bg-no-repeat relative z-[258]" />
                <div className="flex justify-between items-start self-stretch shrink-0 flex-nowrap relative z-[259]">
                  <div className="flex w-[40px] flex-col items-center shrink-0 flex-nowrap relative z-[260]">
                    <span className="flex w-[19px] h-[20px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[13px] font-bold leading-[20px] text-[#17324d] relative text-right whitespace-nowrap z-[261]">
                      ۸۱٪
                    </span>
                    <span className="flex w-[40px] h-[16px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[10px] font-normal leading-[15.625px] text-[#60758a] relative text-right whitespace-nowrap z-[262]">
                      تحقق KPI
                    </span>
                  </div>
                  <div className="flex w-[47px] flex-col items-center shrink-0 flex-nowrap relative z-[263]">
                    <span className="flex w-[47px] h-[20px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[13px] font-bold leading-[20px] text-[#17324d] relative text-right whitespace-nowrap z-[264]">
                      ۱٬۲۲۰ نفر
                    </span>
                    <span className="flex w-[39px] h-[16px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[10px] font-normal leading-[15.625px] text-[#60758a] relative text-right whitespace-nowrap z-[265]">
                      بهره‌مندان
                    </span>
                  </div>
                  <div className="flex w-[43px] flex-col items-center shrink-0 flex-nowrap relative z-[266]">
                    <span className="flex w-[8px] h-[20px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[13px] font-bold leading-[20px] text-[#17324d] relative text-right whitespace-nowrap z-[267]">
                      ۲
                    </span>
                    <span className="flex w-[43px] h-[16px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[10px] font-normal leading-[15.625px] text-[#60758a] relative text-right whitespace-nowrap z-[268]">
                      تکمیل‌شده
                    </span>
                  </div>
                  <div className="flex w-[41px] flex-col items-center shrink-0 flex-nowrap relative z-[269]">
                    <span className="flex w-[8px] h-[20px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[13px] font-bold leading-[20px] text-[#17324d] relative text-right whitespace-nowrap z-[270]">
                      ۲
                    </span>
                    <span className="flex w-[41px] h-[16px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[10px] font-normal leading-[15.625px] text-[#60758a] relative text-right whitespace-nowrap z-[271]">
                      پروژه فعال
                    </span>
                  </div>
                </div>
                <div className="flex pt-[8px] pr-[8px] pb-[8px] pl-[8px] justify-center items-center self-stretch shrink-0 flex-nowrap bg-[#eaf5fd] rounded-[8px] relative z-[272]">
                  <span className="flex w-[124px] h-[19px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[12px] font-medium leading-[18.75px] text-[#2094e3] relative text-right whitespace-nowrap z-[273]">
                    مشاهده پروفایل استارتاپ
                  </span>
                </div>
              </div>
              <div className="flex pt-[20px] pr-[20px] pb-[20px] pl-[20px] flex-col gap-[16px] items-start grow shrink-0 basis-0 flex-nowrap bg-[#fff] rounded-[16px] border-solid border border-[#e4ebf1] relative shadow-[0_4px_16px_0_rgba(22,45,71,0.08)] z-[274]">
                <div className="flex justify-between items-center self-stretch shrink-0 flex-nowrap relative z-[275]">
                  <div className="flex w-[344px] gap-[12px] justify-end items-center shrink-0 flex-nowrap relative z-[276]">
                    <span className="flex w-[46px] h-[25px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[16px] font-bold leading-[25px] text-[#17324d] relative text-right whitespace-nowrap z-[277]">
                      خانه‌کار
                    </span>
                    <div className="flex w-[40px] h-[40px] justify-center items-center shrink-0 flex-nowrap bg-[#eaf5fd] rounded-[10px] relative z-[278]">
                      <div className="flex w-[20px] h-[20px] flex-col justify-center items-center shrink-0 flex-nowrap relative overflow-hidden z-[279]">
                        <div className="w-[20px] h-[20px] shrink-0 bg-[url(/assets/building.png)] bg-cover bg-no-repeat relative overflow-hidden z-[280]" />
                      </div>
                    </div>
                  </div>
                </div>
                <span className="flex w-[344px] h-[40px] justify-end items-start self-stretch shrink-0 font-['Vazirmatn'] text-[13px] font-normal leading-[20.313px] text-[#60758a] relative text-right overflow-hidden z-[281]">
                  توسعه کسب‌وکارهای خانگی و توانمندسازی اقتصادی زنان خانه‌دار.
                </span>
                <div className="flex flex-col gap-[4px] items-end self-stretch shrink-0 flex-nowrap relative z-[282]">
                  <span className="flex w-[128px] h-[19px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[12px] font-normal leading-[18.75px] text-[#2094e3] relative text-right whitespace-nowrap z-[283]">
                    مشاغل خانگی، اشتغال زنان
                  </span>
                  <span className="flex w-[25px] h-[19px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[12px] font-normal leading-[18.75px] text-[#60758a] relative text-right whitespace-nowrap z-[284]">
                    تهران
                  </span>
                </div>
                <div className="h-px self-stretch shrink-0 bg-[url(/assets/line.png)] bg-cover bg-no-repeat relative z-[285]" />
                <div className="flex justify-between items-start self-stretch shrink-0 flex-nowrap relative z-[286]">
                  <div className="flex w-[40px] flex-col items-center shrink-0 flex-nowrap relative z-[287]">
                    <span className="flex w-[23px] h-[20px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[13px] font-bold leading-[20px] text-[#17324d] relative text-right whitespace-nowrap z-[288]">
                      ۸۷٪
                    </span>
                    <span className="flex w-[40px] h-[16px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[10px] font-normal leading-[15.625px] text-[#60758a] relative text-right whitespace-nowrap z-[289]">
                      تحقق KPI
                    </span>
                  </div>
                  <div className="flex w-[45px] flex-col items-center shrink-0 flex-nowrap relative z-[290]">
                    <span className="flex w-[45px] h-[20px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[13px] font-bold leading-[20px] text-[#17324d] relative text-right whitespace-nowrap z-[291]">
                      ۲٬۱۰۰ نفر
                    </span>
                    <span className="flex w-[39px] h-[16px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[10px] font-normal leading-[15.625px] text-[#60758a] relative text-right whitespace-nowrap z-[292]">
                      بهره‌مندان
                    </span>
                  </div>
                  <div className="flex w-[43px] flex-col items-center shrink-0 flex-nowrap relative z-[293]">
                    <span className="flex w-[8px] h-[20px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[13px] font-bold leading-[20px] text-[#17324d] relative text-right whitespace-nowrap z-[294]">
                      ۴
                    </span>
                    <span className="flex w-[43px] h-[16px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[10px] font-normal leading-[15.625px] text-[#60758a] relative text-right whitespace-nowrap z-[295]">
                      تکمیل‌شده
                    </span>
                  </div>
                  <div className="flex w-[41px] flex-col items-center shrink-0 flex-nowrap relative z-[296]">
                    <span className="flex w-[5px] h-[20px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[13px] font-bold leading-[20px] text-[#17324d] relative text-right whitespace-nowrap z-[297]">
                      ۱
                    </span>
                    <span className="flex w-[41px] h-[16px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[10px] font-normal leading-[15.625px] text-[#60758a] relative text-right whitespace-nowrap z-[298]">
                      پروژه فعال
                    </span>
                  </div>
                </div>
                <div className="flex pt-[8px] pr-[8px] pb-[8px] pl-[8px] justify-center items-center self-stretch shrink-0 flex-nowrap bg-[#eaf5fd] rounded-[8px] relative z-[299]">
                  <span className="flex w-[124px] h-[19px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[12px] font-medium leading-[18.75px] text-[#2094e3] relative text-right whitespace-nowrap z-[300]">
                    مشاهده پروفایل استارتاپ
                  </span>
                </div>
              </div>
            </div>
            <div className="flex w-[1200px] h-[313px] justify-between items-center relative z-[355]">
              <div className="flex pt-[20px] pr-[20px] pb-[20px] pl-[20px] flex-col gap-[16px] items-start grow shrink-0 basis-0 flex-nowrap bg-[#fff] rounded-[16px] border-solid border border-[#e4ebf1] relative shadow-[0_4px_16px_0_rgba(22,45,71,0.08)] z-[301]">
                <div className="flex justify-between items-center self-stretch shrink-0 flex-nowrap relative z-[302]">
                  <div className="flex w-[344px] gap-[12px] justify-end items-center shrink-0 flex-nowrap relative z-[303]">
                    <span className="flex w-[55px] h-[25px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[16px] font-bold leading-[25px] text-[#17324d] relative text-right whitespace-nowrap z-[304]">
                      آینده‌ساز
                    </span>
                    <div className="flex w-[40px] h-[40px] justify-center items-center shrink-0 flex-nowrap bg-[#eaf5fd] rounded-[10px] relative z-[305]">
                      <div className="flex w-[20px] h-[20px] flex-col justify-center items-center shrink-0 flex-nowrap relative overflow-hidden z-[306]">
                        <div className="w-[20px] h-[20px] shrink-0 bg-[url(/assets/building.png)] bg-cover bg-no-repeat relative overflow-hidden z-[307]" />
                      </div>
                    </div>
                  </div>
                </div>
                <span className="flex w-[344px] h-[40px] justify-end items-start self-stretch shrink-0 font-['Vazirmatn'] text-[13px] font-normal leading-[20.313px] text-[#60758a] relative text-right overflow-hidden z-[308]">
                  ارائه آموزش‌های فنی، تخصصی و مهارتی برای نوجوانان مناطق محروم.
                </span>
                <div className="flex flex-col gap-[4px] items-end self-stretch shrink-0 flex-nowrap relative z-[309]">
                  <span className="flex w-[139px] h-[19px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[12px] font-normal leading-[18.75px] text-[#2094e3] relative text-right whitespace-nowrap z-[310]">
                    آموزش، توانمندسازی نوجوانان
                  </span>
                  <span className="flex w-[72px] h-[19px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[12px] font-normal leading-[18.75px] text-[#60758a] relative text-right whitespace-nowrap z-[311]">
                    اهواز، خوزستان
                  </span>
                </div>
                <div className="h-px self-stretch shrink-0 bg-[url(/assets/line.png)] bg-cover bg-no-repeat relative z-[312]" />
                <div className="flex justify-between items-start self-stretch shrink-0 flex-nowrap relative z-[313]">
                  <div className="flex w-[40px] flex-col items-center shrink-0 flex-nowrap relative z-[314]">
                    <span className="flex w-[24px] h-[20px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[13px] font-bold leading-[20px] text-[#17324d] relative text-right whitespace-nowrap z-[315]">
                      ۸۳٪
                    </span>
                    <span className="flex w-[40px] h-[16px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[10px] font-normal leading-[15.625px] text-[#60758a] relative text-right whitespace-nowrap z-[316]">
                      تحقق KPI
                    </span>
                  </div>
                  <div className="flex w-[48px] flex-col items-center shrink-0 flex-nowrap relative z-[317]">
                    <span className="flex w-[48px] h-[20px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[13px] font-bold leading-[20px] text-[#17324d] relative text-right whitespace-nowrap z-[318]">
                      ۱٬۷۴۰ نفر
                    </span>
                    <span className="flex w-[39px] h-[16px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[10px] font-normal leading-[15.625px] text-[#60758a] relative text-right whitespace-nowrap z-[319]">
                      بهره‌مندان
                    </span>
                  </div>
                  <div className="flex w-[43px] flex-col items-center shrink-0 flex-nowrap relative z-[320]">
                    <span className="flex w-[9px] h-[20px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[13px] font-bold leading-[20px] text-[#17324d] relative text-right whitespace-nowrap z-[321]">
                      ۳
                    </span>
                    <span className="flex w-[43px] h-[16px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[10px] font-normal leading-[15.625px] text-[#60758a] relative text-right whitespace-nowrap z-[322]">
                      تکمیل‌شده
                    </span>
                  </div>
                  <div className="flex w-[41px] flex-col items-center shrink-0 flex-nowrap relative z-[323]">
                    <span className="flex w-[8px] h-[20px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[13px] font-bold leading-[20px] text-[#17324d] relative text-right whitespace-nowrap z-[324]">
                      ۲
                    </span>
                    <span className="flex w-[41px] h-[16px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[10px] font-normal leading-[15.625px] text-[#60758a] relative text-right whitespace-nowrap z-[325]">
                      پروژه فعال
                    </span>
                  </div>
                </div>
                <div className="flex pt-[8px] pr-[8px] pb-[8px] pl-[8px] justify-center items-center self-stretch shrink-0 flex-nowrap bg-[#eaf5fd] rounded-[8px] relative z-[326]">
                  <span className="flex w-[124px] h-[19px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[12px] font-medium leading-[18.75px] text-[#2094e3] relative text-right whitespace-nowrap z-[327]">
                    مشاهده پروفایل استارتاپ
                  </span>
                </div>
              </div>
              <div className="flex pt-[20px] pr-[20px] pb-[20px] pl-[20px] flex-col gap-[16px] items-start grow shrink-0 basis-0 flex-nowrap bg-[#fff] rounded-[16px] border-solid border border-[#e4ebf1] relative shadow-[0_4px_16px_0_rgba(22,45,71,0.08)] z-[328]">
                <div className="flex justify-between items-center self-stretch shrink-0 flex-nowrap relative z-[329]">
                  <div className="flex w-[344px] gap-[12px] justify-end items-center shrink-0 flex-nowrap relative z-[330]">
                    <span className="flex w-[64px] h-[25px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[16px] font-bold leading-[25px] text-[#17324d] relative text-right whitespace-nowrap z-[331]">
                      زیست‌پاک
                    </span>
                    <div className="flex w-[40px] h-[40px] justify-center items-center shrink-0 flex-nowrap bg-[#eaf5fd] rounded-[10px] relative z-[332]">
                      <div className="flex w-[20px] h-[20px] flex-col justify-center items-center shrink-0 flex-nowrap relative overflow-hidden z-[333]">
                        <div className="w-[20px] h-[20px] shrink-0 bg-[url(/assets/building.png)] bg-cover bg-no-repeat relative overflow-hidden z-[334]" />
                      </div>
                    </div>
                  </div>
                </div>
                <span className="flex w-[344px] h-[40px] justify-end items-start self-stretch shrink-0 font-['Vazirmatn'] text-[13px] font-normal leading-[20.313px] text-[#60758a] relative text-right overflow-hidden z-[335]">
                  راهکارهای محیط‌زیستی، تفکیک از مبدا و توسعه اقتصاد چرخشی محلی.
                </span>
                <div className="flex flex-col gap-[4px] items-end self-stretch shrink-0 flex-nowrap relative z-[336]">
                  <span className="flex w-[137px] h-[19px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[12px] font-normal leading-[18.75px] text-[#2094e3] relative text-right whitespace-nowrap z-[337]">
                    محیط‌زیست، اقتصاد چرخشی
                  </span>
                  <span className="flex w-[37px] h-[19px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[12px] font-normal leading-[18.75px] text-[#60758a] relative text-right whitespace-nowrap z-[338]">
                    اصفهان
                  </span>
                </div>
                <div className="h-px self-stretch shrink-0 bg-[url(/assets/line.png)] bg-cover bg-no-repeat relative z-[339]" />
                <div className="flex justify-between items-start self-stretch shrink-0 flex-nowrap relative z-[340]">
                  <div className="flex w-[40px] flex-col items-center shrink-0 flex-nowrap relative z-[341]">
                    <span className="flex w-[23px] h-[20px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[13px] font-bold leading-[20px] text-[#17324d] relative text-right whitespace-nowrap z-[342]">
                      ۸۵٪
                    </span>
                    <span className="flex w-[40px] h-[16px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[10px] font-normal leading-[15.625px] text-[#60758a] relative text-right whitespace-nowrap z-[343]">
                      تحقق KPI
                    </span>
                  </div>
                  <div className="flex w-[39px] flex-col items-center shrink-0 flex-nowrap relative z-[344]">
                    <span className="flex w-[39px] h-[20px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[13px] font-bold leading-[20px] text-[#17324d] relative text-right whitespace-nowrap z-[345]">
                      ۹۸۰ نفر
                    </span>
                    <span className="flex w-[39px] h-[16px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[10px] font-normal leading-[15.625px] text-[#60758a] relative text-right whitespace-nowrap z-[346]">
                      بهره‌مندان
                    </span>
                  </div>
                  <div className="flex w-[43px] flex-col items-center shrink-0 flex-nowrap relative z-[347]">
                    <span className="flex w-[8px] h-[20px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[13px] font-bold leading-[20px] text-[#17324d] relative text-right whitespace-nowrap z-[348]">
                      ۲
                    </span>
                    <span className="flex w-[43px] h-[16px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[10px] font-normal leading-[15.625px] text-[#60758a] relative text-right whitespace-nowrap z-[349]">
                      تکمیل‌شده
                    </span>
                  </div>
                  <div className="flex w-[41px] flex-col items-center shrink-0 flex-nowrap relative z-[350]">
                    <span className="flex w-[5px] h-[20px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[13px] font-bold leading-[20px] text-[#17324d] relative text-right whitespace-nowrap z-[351]">
                      ۱
                    </span>
                    <span className="flex w-[41px] h-[16px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[10px] font-normal leading-[15.625px] text-[#60758a] relative text-right whitespace-nowrap z-[352]">
                      پروژه فعال
                    </span>
                  </div>
                </div>
                <div className="flex pt-[8px] pr-[8px] pb-[8px] pl-[8px] justify-center items-center self-stretch shrink-0 flex-nowrap bg-[#eaf5fd] rounded-[8px] relative z-[353]">
                  <span className="flex w-[124px] h-[19px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[12px] font-medium leading-[18.75px] text-[#2094e3] relative text-right whitespace-nowrap z-[354]">
                    مشاهده پروفایل استارتاپ
                  </span>
                </div>
              </div>
              <div className="flex pt-[20px] pr-[20px] pb-[20px] pl-[20px] flex-col gap-[16px] items-start grow shrink-0 basis-0 flex-nowrap bg-[#fff] rounded-[16px] border-solid border border-[#e4ebf1] relative shadow-[0_4px_16px_0_rgba(22,45,71,0.08)] z-[355]">
                <div className="flex justify-between items-center self-stretch shrink-0 flex-nowrap relative z-[356]">
                  <div className="flex w-[344px] gap-[12px] justify-end items-center shrink-0 flex-nowrap relative z-[357]">
                    <span className="flex w-[87px] h-[25px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[16px] font-bold leading-[25px] text-[#17324d] relative text-right whitespace-nowrap z-[358]">
                      همیار سلامت
                    </span>
                    <div className="flex w-[40px] h-[40px] justify-center items-center shrink-0 flex-nowrap bg-[#eaf5fd] rounded-[10px] relative z-[359]">
                      <div className="flex w-[20px] h-[20px] flex-col justify-center items-center shrink-0 flex-nowrap relative overflow-hidden z-[360]">
                        <div className="w-[20px] h-[20px] shrink-0 bg-[url(/assets/building.png)] bg-cover bg-no-repeat relative overflow-hidden z-[361]" />
                      </div>
                    </div>
                  </div>
                </div>
                <span className="flex w-[344px] h-[40px] justify-end items-start self-stretch shrink-0 font-['Vazirmatn'] text-[13px] font-normal leading-[20.313px] text-[#60758a] relative text-right overflow-hidden z-[362]">
                  ارائه خدمات سلامت اولیه، ارتقای بهداشت عمومی و پیشگیری
                  خانواده.
                </span>
                <div className="flex flex-col gap-[4px] items-end self-stretch shrink-0 flex-nowrap relative z-[363]">
                  <span className="flex w-[122px] h-[19px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[12px] font-normal leading-[18.75px] text-[#2094e3] relative text-right whitespace-nowrap z-[364]">
                    سلامت، خدمات پیشگیری
                  </span>
                  <span className="flex w-[27px] h-[19px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[12px] font-normal leading-[18.75px] text-[#60758a] relative text-right whitespace-nowrap z-[365]">
                    کرمان
                  </span>
                </div>
                <div className="h-px self-stretch shrink-0 bg-[url(/assets/line.png)] bg-cover bg-no-repeat relative z-[366]" />
                <div className="flex justify-between items-start self-stretch shrink-0 flex-nowrap relative z-[367]">
                  <div className="flex w-[40px] flex-col items-center shrink-0 flex-nowrap relative z-[368]">
                    <span className="flex w-[21px] h-[20px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[13px] font-bold leading-[20px] text-[#17324d] relative text-right whitespace-nowrap z-[369]">
                      ۸۰٪
                    </span>
                    <span className="flex w-[40px] h-[16px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[10px] font-normal leading-[15.625px] text-[#60758a] relative text-right whitespace-nowrap z-[370]">
                      تحقق KPI
                    </span>
                  </div>
                  <div className="flex w-[49px] flex-col items-center shrink-0 flex-nowrap relative z-[371]">
                    <span className="flex w-[49px] h-[20px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[13px] font-bold leading-[20px] text-[#17324d] relative text-right whitespace-nowrap z-[372]">
                      ۱٬۳۴۰ نفر
                    </span>
                    <span className="flex w-[39px] h-[16px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[10px] font-normal leading-[15.625px] text-[#60758a] relative text-right whitespace-nowrap z-[373]">
                      بهره‌مندان
                    </span>
                  </div>
                  <div className="flex w-[43px] flex-col items-center shrink-0 flex-nowrap relative z-[374]">
                    <span className="flex w-[9px] h-[20px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[13px] font-bold leading-[20px] text-[#17324d] relative text-right whitespace-nowrap z-[375]">
                      ۳
                    </span>
                    <span className="flex w-[43px] h-[16px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[10px] font-normal leading-[15.625px] text-[#60758a] relative text-right whitespace-nowrap z-[376]">
                      تکمیل‌شده
                    </span>
                  </div>
                  <div className="flex w-[41px] flex-col items-center shrink-0 flex-nowrap relative z-[377]">
                    <span className="flex w-[5px] h-[20px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[13px] font-bold leading-[20px] text-[#17324d] relative text-right whitespace-nowrap z-[378]">
                      ۱
                    </span>
                    <span className="flex w-[41px] h-[16px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[10px] font-normal leading-[15.625px] text-[#60758a] relative text-right whitespace-nowrap z-[379]">
                      پروژه فعال
                    </span>
                  </div>
                </div>
                <div className="flex pt-[8px] pr-[8px] pb-[8px] pl-[8px] justify-center items-center self-stretch shrink-0 flex-nowrap bg-[#eaf5fd] rounded-[8px] relative z-[380]">
                  <span className="flex w-[124px] h-[19px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[12px] font-medium leading-[18.75px] text-[#2094e3] relative text-right whitespace-nowrap z-[381]">
                    مشاهده پروفایل استارتاپ
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex pt-[12px] pr-0 pb-[12px] pl-0 justify-between items-center self-stretch shrink-0 flex-nowrap relative z-[382]">
          <span className="flex w-[142px] h-[20px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[13px] font-normal leading-[20px] text-[#60758a] relative text-right whitespace-nowrap z-[383]">
            نمایش ۱ تا ۹ از ۳۸ استارتاپ
          </span>
          <div className="flex w-[308px] gap-[8px] items-center shrink-0 flex-nowrap relative z-[384]">
            <div className="flex w-[52px] pt-[6px] pr-[12px] pb-[6px] pl-[12px] items-start shrink-0 flex-nowrap bg-[#fff] rounded-[8px] border-solid border border-[#e4ebf1] relative z-[385]">
              <span className="flex w-[28px] h-[20px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[13px] font-normal leading-[20px] text-[#60758a] relative text-right whitespace-nowrap z-[386]">
                بعدی
              </span>
            </div>
            <div className="flex w-[32px] pt-[6px] pr-[12px] pb-[6px] pl-[12px] items-start shrink-0 flex-nowrap bg-[#fff] rounded-[8px] border-solid border border-[#e4ebf1] relative z-[387]">
              <span className="flex w-[8px] h-[20px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[13px] font-normal leading-[20px] text-[#60758a] relative text-right whitespace-nowrap z-[388]">
                ۷
              </span>
            </div>
            <div className="flex w-[35px] pt-[6px] pr-[12px] pb-[6px] pl-[12px] items-start shrink-0 flex-nowrap bg-[#fff] rounded-[8px] border-solid border border-[#e4ebf1] relative z-[389]">
              <span className="h-[20px] shrink-0 basis-auto font-['Vazirmatn'] text-[13px] font-normal leading-[20px] text-[#60758a] relative text-left whitespace-nowrap z-[390]">
                ...
              </span>
            </div>
            <div className="flex w-[33px] pt-[6px] pr-[12px] pb-[6px] pl-[12px] items-start shrink-0 flex-nowrap bg-[#fff] rounded-[8px] border-solid border border-[#e4ebf1] relative z-[391]">
              <span className="flex w-[9px] h-[20px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[13px] font-normal leading-[20px] text-[#60758a] relative text-right whitespace-nowrap z-[392]">
                ۳
              </span>
            </div>
            <div className="flex w-[31px] pt-[6px] pr-[12px] pb-[6px] pl-[12px] items-start shrink-0 flex-nowrap bg-[#fff] rounded-[8px] border-solid border border-[#e4ebf1] relative z-[393]">
              <span className="flex w-[7px] h-[20px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[13px] font-normal leading-[20px] text-[#60758a] relative text-right whitespace-nowrap z-[394]">
                ۲
              </span>
            </div>
            <div className="flex w-[29px] pt-[6px] pr-[12px] pb-[6px] pl-[12px] items-start shrink-0 flex-nowrap bg-[#eaf5fd] rounded-[8px] border-solid border border-[#2094e3] relative z-[395]">
              <span className="flex w-[5px] h-[20px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[13px] font-bold leading-[20px] text-[#2094e3] relative text-right whitespace-nowrap z-[396]">
                ۱
              </span>
            </div>
            <div className="flex w-[48px] pt-[6px] pr-[12px] pb-[6px] pl-[12px] items-start shrink-0 flex-nowrap bg-[#fff] rounded-[8px] border-solid border border-[#e4ebf1] relative z-[397]">
              <span className="flex w-[24px] h-[20px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[13px] font-normal leading-[20px] text-[#60758a] relative text-right whitespace-nowrap z-[398]">
                قبلی
              </span>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-[24px] items-end self-stretch shrink-0 flex-nowrap relative z-[399]">
          <div className="flex flex-col gap-[6px] items-end self-stretch shrink-0 flex-nowrap relative z-[400]">
            <span className="flex w-[423px] h-[38px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[24px] font-extrabold leading-[37.5px] text-[#17324d] relative text-right whitespace-nowrap z-[401]">
              استارتاپ‌ها چگونه وارد سامانه ماه می‌شوند؟
            </span>
          </div>
          <div className="flex gap-[20px] justify-end items-end self-stretch shrink-0 flex-nowrap relative z-[402]">
            <div className="flex pt-[20px] pr-[20px] pb-[20px] pl-[20px] flex-col gap-[12px] items-end grow shrink-0 basis-0 flex-nowrap bg-[#fff] rounded-[16px] border-solid border border-[#e4ebf1] relative z-[403]">
              <div className="flex w-[132px] justify-between items-center shrink-0 flex-nowrap relative z-[404]">
                <span className="flex w-[102px] h-[22px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-bold leading-[21.875px] text-[#17324d] relative text-right whitespace-nowrap z-[405]">
                  فعال‌شدن پروفایل
                </span>
                <div className="flex w-[32px] h-[32px] justify-center items-center shrink-0 flex-nowrap bg-[#eaf5fd] rounded-[16px] relative z-[406]">
                  <span className="flex w-[9px] h-[22px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-bold leading-[21.875px] text-[#2094e3] relative text-right whitespace-nowrap z-[407]">
                    ۴
                  </span>
                </div>
              </div>
              <span className="flex w-[245px] h-[40px] justify-end items-start self-stretch shrink-0 font-['Vazirmatn'] text-[12px] font-normal leading-[20px] text-[#60758a] relative text-right z-[408]">
                پس از تأیید، استارتاپ می‌تواند پروژه ثبت کند و اطلاعات عمومی آن
                نمایش داده می‌شود.
              </span>
            </div>
            <div className="flex pt-[20px] pr-[20px] pb-[20px] pl-[20px] flex-col gap-[12px] items-center grow shrink-0 basis-0 flex-nowrap bg-[#fff] rounded-[16px] border-solid border border-[#e4ebf1] relative z-[409]">
              <div className="flex w-[135px] justify-between items-center shrink-0 flex-nowrap relative z-[410]">
                <span className="flex w-[89px] h-[22px] justify-center items-start shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-bold leading-[21.875px] text-[#17324d] relative text-center whitespace-nowrap z-[411]">
                  ارزیابی راهکار
                </span>
                <div className="flex w-[32px] h-[32px] justify-center items-center shrink-0 flex-nowrap bg-[#eaf5fd] rounded-[16px] relative z-[412]">
                  <span className="flex w-[10px] h-[22px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-bold leading-[21.875px] text-[#2094e3] relative text-right whitespace-nowrap z-[413]">
                    ۳
                  </span>
                </div>
              </div>
              <span className="flex w-[245px] h-[40px] justify-end items-start self-stretch shrink-0 font-['Vazirmatn'] text-[12px] font-normal leading-[20px] text-[#60758a] relative text-right z-[414]">
                خانه خلاق ظرفیت اجرایی، مدل اثر و امکان سنجش KPI را ارزیابی
                می‌کند.
              </span>
            </div>
            <div className="flex pt-[20px] pr-[20px] pb-[20px] pl-[20px] flex-col gap-[12px] items-end grow shrink-0 basis-0 flex-nowrap bg-[#fff] rounded-[16px] border-solid border border-[#e4ebf1] relative z-[415]">
              <div className="flex w-[99px] justify-between items-center shrink-0 flex-nowrap relative z-[416]">
                <span className="flex w-[65px] h-[22px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-bold leading-[21.875px] text-[#17324d] relative text-right whitespace-nowrap z-[417]">
                  بررسی اولیه
                </span>
                <div className="flex w-[32px] h-[32px] justify-center items-center shrink-0 flex-nowrap bg-[#eaf5fd] rounded-[16px] relative z-[418]">
                  <span className="flex w-[8px] h-[22px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-bold leading-[21.875px] text-[#2094e3] relative text-right whitespace-nowrap z-[419]">
                    ۲
                  </span>
                </div>
              </div>
              <span className="flex w-[245px] h-[40px] justify-end items-start self-stretch shrink-0 font-['Vazirmatn'] text-[12px] font-normal leading-[20px] text-[#60758a] relative text-right z-[420]">
                اطلاعات عمومی و مدارک موردنیاز توسط سامانه بررسی می‌شوند.
              </span>
            </div>
            <div className="flex pt-[20px] pr-[20px] pb-[20px] pl-[20px] flex-col gap-[12px] items-end grow shrink-0 basis-0 flex-nowrap bg-[#fff] rounded-[16px] border-solid border border-[#e4ebf1] relative z-[421]">
              <div className="flex w-[109px] justify-between items-center shrink-0 flex-nowrap relative z-[422]">
                <span className="flex w-[72px] h-[22px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-bold leading-[21.875px] text-[#17324d] relative text-right whitespace-nowrap z-[423]">
                  ثبت اطلاعات
                </span>
                <div className="flex w-[32px] h-[32px] justify-center items-center shrink-0 flex-nowrap bg-[#eaf5fd] rounded-[16px] relative z-[424]">
                  <span className="flex w-[5px] h-[22px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-bold leading-[21.875px] text-[#2094e3] relative text-right whitespace-nowrap z-[425]">
                    ۱
                  </span>
                </div>
              </div>
              <span className="flex w-[245px] h-[40px] justify-end items-start self-stretch shrink-0 font-['Vazirmatn'] text-[12px] font-normal leading-[20px] text-[#60758a] relative text-right z-[426]">
                استارتاپ اطلاعات حقوقی، تیم و حوزه فعالیت خود را ثبت می‌کند.
              </span>
            </div>
          </div>
          <span className="h-[17px] self-stretch shrink-0 basis-auto font-['Vazirmatn'] text-[11px] font-normal leading-[17px] text-[#60758a] relative text-right whitespace-nowrap z-[427]">
            تأیید استارتاپ به‌تنهایی به معنای تأیید همه پروژه‌های آن نیست؛ هر
            پروژه به‌صورت مستقل ارزیابی می‌شود.
          </span>
        </div>
        <div className="flex pt-[32px] pr-[32px] pb-[32px] pl-[32px] gap-[40px] items-start self-stretch shrink-0 flex-nowrap bg-[#eaf5fd] rounded-[24px] border-solid border border-[#2094e3] relative z-[428]">
          <div className="flex w-[300px] flex-col gap-[16px] justify-center items-start shrink-0 flex-nowrap relative z-[429]">
            <div className="flex w-[197px] pt-[11px] pr-[20px] pb-[11px] pl-[20px] gap-[8px] justify-center items-center shrink-0 flex-nowrap bg-[#2094e3] rounded-[12px] relative z-[430]">
              <span className="flex w-[157px] h-[22px] justify-center items-start shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-medium leading-[22px] text-[#fff] relative text-center whitespace-nowrap z-[431]">
                مشاهده پروژه‌های تأییدشده
              </span>
            </div>
          </div>
          <div className="flex w-[780px] flex-col gap-[16px] items-end shrink-0 flex-nowrap relative z-[432]">
            <div className="flex w-[857px] flex-col gap-[6px] items-end shrink-0 flex-nowrap relative z-[433]">
              <span className="flex w-[217px] h-[34px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[22px] font-bold leading-[34px] text-[#17324d] relative text-right whitespace-nowrap z-[434]">
                اثر اجتماعی قابل سنجش
              </span>
              <span className="flex w-[857px] h-[22px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-normal leading-[22px] text-[#60758a] relative text-right whitespace-nowrap z-[435]">
                برای هر پروژه، شاخص‌های مشخص و قابل اندازه‌گیری تعریف می‌شوند.
                آزادسازی منابع پروژه پس از بررسی گزارش‌ها و تأیید تحقق این
                شاخص‌ها انجام می‌شود.
              </span>
            </div>
            <div className="flex gap-[24px] justify-end items-start self-stretch shrink-0 flex-nowrap relative z-[436]">
              <div className="flex w-[180px] gap-[8px] items-center shrink-0 flex-nowrap relative z-[437]">
                <span className="flex w-[156px] h-[20px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[13px] font-normal leading-[20px] text-[#17324d] relative text-right whitespace-nowrap z-[438]">
                  پرداخت پس از تأیید خانه خلاق
                </span>
                <div className="flex w-[16px] h-[16px] flex-col justify-center items-center shrink-0 flex-nowrap relative overflow-hidden z-[439]">
                  <div className="w-[16px] h-[16px] shrink-0 bg-[url(/assets/shield-check.png)] bg-cover bg-no-repeat relative overflow-hidden z-[440]" />
                </div>
              </div>
              <div className="flex w-[142px] gap-[8px] items-center shrink-0 flex-nowrap relative z-[441]">
                <span className="flex w-[118px] h-[20px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[13px] font-normal leading-[20px] text-[#17324d] relative text-right whitespace-nowrap z-[442]">
                  گزارش‌دهی مرحله‌ای اثر
                </span>
                <div className="flex w-[16px] h-[16px] flex-col justify-center items-center shrink-0 flex-nowrap relative overflow-hidden z-[443]">
                  <div className="w-[16px] h-[16px] shrink-0 bg-[url(/assets/file-text.png)] bg-cover bg-no-repeat relative overflow-hidden z-[444]" />
                </div>
              </div>
              <div className="flex w-[194px] gap-[8px] items-center shrink-0 flex-nowrap relative z-[445]">
                <span className="flex w-[170px] h-[20px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[13px] font-normal leading-[20px] text-[#17324d] relative text-right whitespace-nowrap z-[446]">
                  شاخص‌های مشخص پیش از اجرا
                </span>
                <div className="flex w-[16px] h-[16px] flex-col justify-center items-center shrink-0 flex-nowrap relative overflow-hidden z-[447]">
                  <div className="w-[16px] h-[16px] shrink-0 bg-[url(/assets/target.png)] bg-cover bg-no-repeat relative overflow-hidden z-[448]" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex pt-[40px] pr-[40px] pb-[40px] pl-[40px] flex-col gap-[24px] items-center self-stretch shrink-0 flex-nowrap bg-[#1e2a38] rounded-[24px] relative z-[449]">
          <div className="flex flex-col gap-[8px] items-center self-stretch shrink-0 flex-nowrap relative z-[450]">
            <span className="flex w-[355px] h-[38px] justify-center items-start shrink-0 basis-auto font-['Vazirmatn'] text-[24px] font-bold leading-[37.5px] text-[#fff] relative text-center whitespace-nowrap z-[451]">
              راهکاری برای ایجاد اثر اجتماعی دارید؟
            </span>
            <span className="h-[22px] self-stretch shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-normal leading-[21.875px] text-[#aebccb] relative text-center whitespace-nowrap z-[452]">
              اگر استارتاپ شما توانایی اجرای یک راهکار قابل سنجش در حوزه‌های
              اجتماعی را دارد، اطلاعات خود را برای بررسی ثبت کنید.
            </span>
          </div>
          <div className="flex w-[326px] gap-[16px] items-center shrink-0 flex-nowrap relative z-[453]">
            <div className="flex w-[179px] pt-[11px] pr-[20px] pb-[11px] pl-[20px] gap-[8px] justify-center items-center shrink-0 flex-nowrap bg-[#fff] rounded-[12px] border-solid border border-[#e4ebf1] relative z-[454]">
              <span className="flex w-[139px] h-[22px] justify-center items-start shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-medium leading-[22px] text-[#2094e3] relative text-center whitespace-nowrap z-[455]">
                پیگیری درخواست ثبت‌نام
              </span>
            </div>
            <div className="flex w-[131px] pt-[11px] pr-[20px] pb-[11px] pl-[20px] gap-[8px] justify-center items-center shrink-0 flex-nowrap bg-[#2094e3] rounded-[12px] relative z-[456]">
              <span className="flex w-[91px] h-[22px] justify-center items-start shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-medium leading-[22px] text-[#fff] relative text-center whitespace-nowrap z-[457]">
                ثبت‌نام استارتاپ
              </span>
            </div>
          </div>
          <span className="flex w-[248px] h-[19px] justify-center items-start shrink-0 basis-auto font-['Vazirmatn'] text-[12px] font-normal leading-[18.75px] text-[#aebccb] relative text-center whitespace-nowrap z-[458]">
            ثبت‌نام به معنای تأیید نهایی استارتاپ یا پروژه نیست.
          </span>
        </div>
      </div>
      <div className="flex pt-[80px] pr-[120px] pb-[40px] pl-[120px] flex-col gap-[64px] items-start self-stretch shrink-0 flex-nowrap bg-[#111e30] relative z-[459]">
        <div className="flex gap-[48px] items-start self-stretch shrink-0 flex-nowrap relative z-[460]">
          <div className="flex w-[220px] h-[182px] flex-col gap-[12px] items-end shrink-0 flex-nowrap relative z-[461]">
            <span className="flex w-[59px] h-[22px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-bold leading-[21.875px] text-[#fff] relative text-right whitespace-nowrap z-[462]">
              ارتباط با ما
            </span>
            <span className="flex w-[115px] h-[20px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[13px] font-normal leading-[20px] text-[#e4ebf1] relative text-right whitespace-nowrap z-[463]">
              تلفن: ۰۲۱-۸۸۸۸۸۸۸۸
            </span>
            <span className="flex w-[156px] h-[20px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[13px] font-normal leading-[20px] text-[#e4ebf1] relative text-right whitespace-nowrap z-[464]">
              ایمیل: info@mahplatform.ir
            </span>
            <div className="flex w-[48px] pt-[8px] pr-0 pb-0 pl-0 gap-[12px] items-center shrink-0 flex-nowrap relative z-[465]">
              <div className="flex w-[18px] h-[18px] flex-col justify-center items-center shrink-0 flex-nowrap relative overflow-hidden z-[466]">
                <div className="w-[18px] h-[18px] shrink-0 bg-[url(/assets/telegram.png)] bg-cover bg-no-repeat relative overflow-hidden z-[467]" />
              </div>
              <div className="flex w-[18px] h-[18px] flex-col justify-center items-center shrink-0 flex-nowrap relative overflow-hidden z-[468]">
                <div className="w-[18px] h-[18px] shrink-0 bg-[url(/assets/eitaa.png)] bg-cover bg-no-repeat relative overflow-hidden z-[469]" />
              </div>
            </div>
          </div>
          <div className="flex w-[150px] h-[182px] flex-col gap-[12px] items-end shrink-0 flex-nowrap relative z-[470]">
            <span className="flex w-[39px] h-[22px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-bold leading-[21.875px] text-[#fff] relative text-right whitespace-nowrap z-[471]">
              حقوقی
            </span>
            <span className="flex w-[82px] h-[20px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[13px] font-normal leading-[20px] text-[#e4ebf1] relative text-right whitespace-nowrap z-[472]">
              قوانین و مقررات
            </span>
            <span className="flex w-[75px] h-[20px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[13px] font-normal leading-[20px] text-[#e4ebf1] relative text-right whitespace-nowrap z-[473]">
              حریم خصوصی
            </span>
          </div>
          <div className="flex w-[160px] h-[182px] flex-col gap-[12px] items-end shrink-0 flex-nowrap relative z-[474]">
            <span className="flex w-[49px] h-[22px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-bold leading-[21.875px] text-[#fff] relative text-right whitespace-nowrap z-[475]">
              پشتیبانی
            </span>
            <span className="flex w-[55px] h-[20px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[13px] font-normal leading-[20px] text-[#e4ebf1] relative text-right whitespace-nowrap z-[476]">
              تماس با ما
            </span>
            <span className="flex w-[77px] h-[20px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[13px] font-normal leading-[20px] text-[#e4ebf1] relative text-right whitespace-nowrap z-[477]">
              سؤالات متداول
            </span>
            <span className="flex w-[82px] h-[20px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[13px] font-normal leading-[20px] text-[#e4ebf1] relative text-right whitespace-nowrap z-[478]">
              پیگیری مشارکت
            </span>
          </div>
          <div className="flex w-[180px] flex-col gap-[12px] items-end shrink-0 flex-nowrap relative z-[479]">
            <span className="flex w-[83px] h-[22px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-bold leading-[21.875px] text-[#fff] relative text-right whitespace-nowrap z-[480]">
              دسترسی سریع
            </span>
            <span className="flex w-[38px] h-[20px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[13px] font-normal leading-[20px] text-[#e4ebf1] relative text-right whitespace-nowrap z-[481]">
              پروژه‌ها
            </span>
            <span className="flex w-[69px] h-[20px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[13px] font-normal leading-[20px] text-[#e4ebf1] relative text-right whitespace-nowrap z-[482]">
              برای شرکت‌ها
            </span>
            <span className="flex w-[71px] h-[20px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[13px] font-normal leading-[20px] text-[#e4ebf1] relative text-right whitespace-nowrap z-[483]">
              نحوه مشارکت
            </span>
            <span className="flex w-[84px] h-[20px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[13px] font-normal leading-[20px] text-[#e4ebf1] relative text-right whitespace-nowrap z-[484]">
              ثبت‌نام استارتاپ
            </span>
            <span className="flex w-[80px] h-[20px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[13px] font-normal leading-[20px] text-[#e4ebf1] relative text-right whitespace-nowrap z-[485]">
              اخبار و رویدادها
            </span>
          </div>
          <div className="flex w-[298px] h-[182px] flex-col gap-[14px] items-end shrink-0 flex-nowrap relative z-[486]">
            <div className="w-[210px] h-[70px] shrink-0 bg-[url(/assets/footer-logo.png)] bg-cover bg-no-repeat relative z-[487]" />
            <span className="flex w-[298px] h-[44px] justify-end items-start self-stretch shrink-0 font-['Vazirmatn'] text-[13px] font-normal leading-[22px] text-[#e4ebf1] relative text-right z-[488]">
              سامانه مشارکت در پروژه‌های اثر اجتماعی با مسیر مالی شفاف و اثر
              قابل‌اندازه‌گیری.
            </span>
          </div>
        </div>
        <div className="flex pt-[20px] pr-0 pb-0 pl-0 flex-col gap-[4px] items-center self-stretch shrink-0 flex-nowrap border-solid border-b border-b-[rgba(255,255,255,0.12)] relative z-[489]">
          <span className="flex w-[219px] h-[19px] justify-center items-start shrink-0 basis-auto font-['Vazirmatn'] text-[12px] font-normal leading-[18.75px] text-[#e4ebf1] relative text-center whitespace-nowrap z-[490]">
            طراحی و توسعه با هدف ارتقای عدالت اجتماعی
          </span>
          <span className="flex w-[203px] h-[19px] justify-center items-start shrink-0 basis-auto font-['Vazirmatn'] text-[12px] font-normal leading-[18.75px] text-[#e4ebf1] relative text-center whitespace-nowrap z-[491]">
            تمامی حقوق برای سامانه ماه محفوظ است.
          </span>
        </div>
      </div>
    </div>
  );
}
