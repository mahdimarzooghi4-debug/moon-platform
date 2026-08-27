import React from "react";
import "./index.css";

export default function Main() {
  return (
    <div className="main-container flex w-[1440px] h-[1584px] items-start flex-nowrap bg-[#f4f6f8] relative mx-auto my-0">
      <div className="flex pt-[24px] pr-[40px] pb-[40px] pl-[40px] flex-col gap-[24px] items-end self-stretch grow shrink-0 basis-0 flex-nowrap relative">
        <div className="flex pt-0 pr-0 pb-[16px] pl-0 justify-between items-center self-stretch shrink-0 flex-nowrap border-solid border-b border-b-[#e4ebf1] relative z-[1]">
          <div className="flex w-[399px] gap-[16px] items-center shrink-0 flex-nowrap relative z-[2]">
            <div className="flex w-[101px] gap-[10px] items-center shrink-0 flex-nowrap relative z-[3]">
              <div className="flex w-[36px] h-[36px] flex-col items-start shrink-0 flex-nowrap rounded-[18px] relative overflow-hidden z-[4]">
                <div className="w-[36px] h-[36px] shrink-0 bg-[url(/assets/cms-page-editor/avatar.png)] bg-cover bg-no-repeat relative z-[5]" />
              </div>
              <div className="flex w-[55px] flex-col gap-[2px] items-start shrink-0 flex-nowrap relative z-[6]">
                <span className="flex w-[55px] h-[20px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[13px] font-bold leading-[20px] text-[#17324d] relative text-right whitespace-nowrap z-[7]">
                  نگار رضایی
                </span>
                <span className="flex w-[48px] h-[17px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[11px] font-normal leading-[17px] text-[#60758a] relative text-right whitespace-nowrap z-[8]">
                  مدیر محتوا
                </span>
              </div>
            </div>
            <div className="w-px h-[24px] shrink-0 bg-[#e4ebf1] relative z-[9]" />
            <div className="flex w-[34px] pt-[8px] pr-[8px] pb-[8px] pl-[8px] items-start shrink-0 flex-nowrap bg-[#fff] rounded-[8px] border-solid border border-[#e4ebf1] relative z-10">
              <div className="w-[18px] h-[18px] shrink-0 relative overflow-hidden z-[11]">
                <div className="w-full h-full bg-[url(/assets/cms-page-editor/header-help.svg)] bg-contain bg-center bg-no-repeat relative z-[12]" />
              </div>
            </div>
            <div className="flex w-[34px] items-start shrink-0 flex-nowrap relative z-[13]">
              <div className="flex w-[34px] pt-[8px] pr-[8px] pb-[8px] pl-[8px] items-start shrink-0 flex-nowrap bg-[#fff] rounded-[8px] border-solid border border-[#e4ebf1] relative z-[14]">
                <div className="w-[18px] h-[18px] shrink-0 relative overflow-hidden z-[15]">
                  <div className="w-full h-full bg-[url(/assets/cms-page-editor/header-bell.svg)] bg-contain bg-center bg-no-repeat relative z-[16]" />
                </div>
              </div>
              <div className="flex w-[19px] h-[20px] pt-[2px] pr-[6px] pb-[2px] pl-[6px] justify-center items-center shrink-0 flex-nowrap bg-[#ef4444] rounded-[10px] absolute top-[-4px] right-[-4px] z-[17]">
                <span className="h-[16px] shrink-0 basis-auto font-['Vazirmatn'] text-[10px] font-bold leading-[15.625px] text-[#fff] relative text-left whitespace-nowrap z-[18]">
                  ۵
                </span>
              </div>
            </div>
            <div className="flex w-[165px] pt-[8px] pr-[12px] pb-[8px] pl-[12px] gap-[8px] items-center shrink-0 flex-nowrap bg-[#fff] rounded-[8px] border-solid border border-[#e4ebf1] relative z-[19]">
              <span className="flex w-[117px] h-[20px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[13px] font-medium leading-[20px] text-[#17324d] relative text-right whitespace-nowrap z-20">
                یکشنبه، ۲۶ مرداد ۱۴۰۵
              </span>
              <div className="w-[16px] h-[16px] shrink-0 relative overflow-hidden z-[21]">
                <div className="w-full h-full bg-[url(/assets/cms-page-editor/header-calendar.svg)] bg-contain bg-center bg-no-repeat relative z-[22]" />
              </div>
            </div>
          </div>
          <div className="flex w-[380px] pt-[10px] pr-[16px] pb-[10px] pl-[16px] gap-[8px] justify-end items-center shrink-0 flex-nowrap bg-[#fff] rounded-[12px] border-solid border border-[#e4ebf1] relative z-[23]">
            <span className="h-[20px] grow shrink-0 basis-auto font-['Vazirmatn'] text-[13px] font-normal leading-[20px] text-[#60758a] relative text-right whitespace-nowrap z-[24]">
              جست‌وجو در محتوای CMS...
            </span>
            <div className="w-[16px] h-[16px] shrink-0 relative overflow-hidden z-[25]">
              <div className="w-full h-full bg-[url(/assets/cms-page-editor/header-search.svg)] bg-contain bg-center bg-no-repeat relative z-[26]" />
            </div>
          </div>
        </div>
        <div className="flex justify-between items-center self-stretch shrink-0 flex-nowrap relative z-[27]">
          <div className="flex w-[624px] gap-[12px] items-center shrink-0 flex-nowrap relative z-[28]">
            <div className="flex w-[40px] pt-[11px] pr-[11px] pb-[11px] pl-[11px] items-start shrink-0 flex-nowrap bg-[#fff] rounded-[12px] border-solid border border-[#e4ebf1] relative z-[29]">
              <div className="flex w-[18px] h-[18px] justify-center items-center shrink-0 flex-nowrap relative overflow-hidden z-30">
                <div className="w-[18px] h-[18px] shrink-0 bg-[url(/assets/cms-page-editor/more-horizontal.svg)] bg-cover bg-no-repeat relative overflow-hidden z-[31]" />
              </div>
            </div>
            <div className="flex w-[138px] pt-[10px] pr-[20px] pb-[10px] pl-[20px] gap-[8px] justify-center items-center shrink-0 flex-nowrap bg-[#2094e3] rounded-[12px] relative z-[32]">
              <span className="flex w-[98px] h-[22px] justify-center items-start shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-bold leading-[21.875px] text-[#fff] relative text-center whitespace-nowrap z-[33]">
                ارسال برای بازبینی
              </span>
            </div>
            <div className="flex w-[137px] pt-[10px] pr-[20px] pb-[10px] pl-[20px] gap-[8px] justify-center items-center shrink-0 flex-nowrap bg-[#fff] rounded-[12px] border-solid border border-[#e4ebf1] relative z-[34]">
              <span className="flex w-[97px] h-[22px] justify-center items-start shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-bold leading-[21.875px] text-[#2094e3] relative text-center whitespace-nowrap z-[35]">
                ذخیره پیش‌نویس
              </span>
            </div>
            <div className="flex w-[106px] pt-[10px] pr-[20px] pb-[10px] pl-[20px] gap-[8px] justify-center items-center shrink-0 flex-nowrap bg-[#eaf5fd] rounded-[12px] relative z-[36]">
              <span className="flex w-[66px] h-[22px] justify-center items-start shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-bold leading-[21.875px] text-[#2094e3] relative text-center whitespace-nowrap z-[37]">
                پیش‌نمایش
              </span>
            </div>
            <span className="h-[19px] shrink-0 basis-auto font-['Vazirmatn'] text-[12px] font-normal leading-[18.75px] text-[#60758a] relative text-left whitespace-nowrap z-[38]">
              آخرین ذخیره: امروز، ساعت ۱۰:۴۵
            </span>
          </div>
          <div className="flex w-[303px] gap-[16px] items-center shrink-0 flex-nowrap relative z-[39]">
            <div className="flex w-[131px] pt-[4px] pr-[10px] pb-[4px] pl-[10px] items-start shrink-0 flex-nowrap bg-[#fcf6ec] rounded-[8px] relative z-40">
              <span className="h-[19px] shrink-0 basis-auto font-['Vazirmatn'] text-[12px] font-bold leading-[18.75px] text-[#c27a10] relative text-left whitespace-nowrap z-[41]">
                پیش‌نویس نسخه جدید
              </span>
            </div>
            <div className="flex w-[156px] flex-col gap-[2px] items-end shrink-0 flex-nowrap relative z-[42]">
              <span className="flex w-[149px] h-[19px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[12px] font-normal leading-[18.75px] text-[#60758a] relative text-right whitespace-nowrap z-[43]">
                صفحات سایت / ویرایش صفحه
              </span>
              <span className="flex w-[156px] h-[28px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[18px] font-extrabold leading-[28px] text-[#17324d] relative text-right whitespace-nowrap z-[44]">
                ماه چگونه کار می‌کند؟
              </span>
            </div>
          </div>
        </div>
        <div className="flex pt-[12px] pr-[20px] pb-[12px] pl-[20px] justify-between items-center self-stretch shrink-0 flex-nowrap bg-[#eaf5fd] rounded-[12px] border-solid border border-[#2094e3] relative z-[45]">
          <div className="flex w-[299px] gap-[12px] items-center shrink-0 flex-nowrap relative z-[46]">
            <div className="flex w-[154px] pt-[10px] pr-[20px] pb-[10px] pl-[20px] gap-[8px] justify-center items-center shrink-0 flex-nowrap bg-[#fff] rounded-[12px] border-solid border border-[#e4ebf1] relative z-[47]">
              <span className="flex w-[114px] h-[22px] justify-center items-start shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-bold leading-[21.875px] text-[#2094e3] relative text-center whitespace-nowrap z-[48]">
                مشاهده نسخه Live
              </span>
            </div>
            <div className="flex w-[133px] pt-[10px] pr-[20px] pb-[10px] pl-[20px] gap-[8px] justify-center items-center shrink-0 flex-nowrap bg-[#eaf5fd] rounded-[12px] relative z-[49]">
              <span className="flex w-[93px] h-[22px] justify-center items-start shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-bold leading-[21.875px] text-[#2094e3] relative text-center whitespace-nowrap z-50">
                مقایسه نسخه‌ها
              </span>
            </div>
          </div>
          <div className="flex w-[531px] gap-[8px] items-center shrink-0 flex-nowrap relative z-[51]">
            <span className="flex w-[507px] h-[20px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[13px] font-normal leading-[20px] text-[#17324d] relative text-right whitespace-nowrap z-[52]">
              در حال ویرایش نسخه جدید هستید. نسخه فعلی سایت تا انتشار این نسخه
              بدون تغییر باقی می‌ماند.
            </span>
            <div className="flex w-[16px] h-[16px] justify-center items-center shrink-0 flex-nowrap relative overflow-hidden z-[53]">
              <div className="w-[16px] h-[16px] shrink-0 bg-[url(/assets/cms-page-editor/info.svg)] bg-cover bg-no-repeat relative overflow-hidden z-[54]" />
            </div>
          </div>
        </div>
        <div className="flex gap-[20px] items-start self-stretch shrink-0 flex-nowrap relative z-[55]">
          <div className="flex w-[340px] flex-col gap-[20px] items-start shrink-0 flex-nowrap relative z-[56]">
            <div className="flex pt-[20px] pr-[20px] pb-[20px] pl-[20px] flex-col gap-[16px] items-start self-stretch shrink-0 flex-nowrap bg-[#fff] rounded-[16px] border-solid border border-[#e4ebf1] relative z-[57]">
              <span className="h-[23px] self-stretch shrink-0 basis-auto font-['Vazirmatn'] text-[15px] font-bold leading-[23px] text-[#17324d] relative text-right whitespace-nowrap z-[58]">
                وضعیت انتشار صفحه
              </span>
              <div className="h-px self-stretch shrink-0 bg-[#e4ebf1] relative z-[59]" />
              <div className="flex flex-col gap-[10px] items-start self-stretch shrink-0 flex-nowrap relative z-[60]">
                <div className="flex justify-between items-start self-stretch shrink-0 flex-nowrap relative z-[61]">
                  <span className="flex w-[69px] h-[20px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[13px] font-bold leading-[20px] text-[#17324d] relative text-right whitespace-nowrap z-[62]">
                    صفحه راهنما
                  </span>
                  <span className="flex w-[54px] h-[20px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[13px] font-normal leading-[20px] text-[#60758a] relative text-right whitespace-nowrap z-[63]">
                    نوع صفحه
                  </span>
                </div>
                <div className="flex justify-between items-start self-stretch shrink-0 flex-nowrap relative z-[64]">
                  <span className="flex w-[87px] h-[20px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[13px] font-bold leading-[20px] text-[#c27a10] relative text-right whitespace-nowrap z-[65]">
                    پیش‌نویس جدید
                  </span>
                  <span className="flex w-[66px] h-[20px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[13px] font-normal leading-[20px] text-[#60758a] relative text-right whitespace-nowrap z-[66]">
                    وضعیت سند
                  </span>
                </div>
                <div className="flex justify-between items-start self-stretch shrink-0 flex-nowrap relative z-[67]">
                  <span className="flex w-[59px] h-[20px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[13px] font-normal leading-[20px] text-[#17324d] relative text-right whitespace-nowrap z-[68]">
                    نگار حسینی
                  </span>
                  <span className="flex w-[72px] h-[20px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[13px] font-normal leading-[20px] text-[#60758a] relative text-right whitespace-nowrap z-[69]">
                    نویسنده اصلی
                  </span>
                </div>
                <div className="flex justify-between items-start self-stretch shrink-0 flex-nowrap relative z-[70]">
                  <span className="flex w-[56px] h-[20px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[13px] font-normal leading-[20px] text-[#17324d] relative text-right whitespace-nowrap z-[71]">
                    پیمان نوری
                  </span>
                  <span className="flex w-[63px] h-[20px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[13px] font-normal leading-[20px] text-[#60758a] relative text-right whitespace-nowrap z-[72]">
                    بازبین محتوا
                  </span>
                </div>
                <div className="flex justify-between items-start self-stretch shrink-0 flex-nowrap relative z-[73]">
                  <span className="flex w-[121px] h-[20px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[13px] font-normal leading-[20px] text-[#c27a10] relative text-right whitespace-nowrap z-[74]">
                    حقوقی سیستم (ماده ۱۷۲)
                  </span>
                  <span className="flex w-[72px] h-[20px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[13px] font-normal leading-[20px] text-[#60758a] relative text-right whitespace-nowrap z-[75]">
                    بازبین حقوقی
                  </span>
                </div>
              </div>
            </div>
            <div className="flex pt-[20px] pr-[20px] pb-[20px] pl-[20px] flex-col gap-[16px] items-start self-stretch shrink-0 flex-nowrap bg-[#fff] rounded-[16px] border-solid border border-[#e4ebf1] relative z-[76]">
              <span className="h-[23px] self-stretch shrink-0 basis-auto font-['Vazirmatn'] text-[15px] font-bold leading-[23px] text-[#17324d] relative text-right whitespace-nowrap z-[77]">
                نمایش در ناوبری سایت
              </span>
              <div className="h-px self-stretch shrink-0 bg-[#e4ebf1] relative z-[78]" />
              <div className="flex flex-col gap-[12px] items-start self-stretch shrink-0 flex-nowrap relative z-[79]">
                <div className="flex justify-between items-center self-stretch shrink-0 flex-nowrap relative z-80">
                  <div className="w-[36px] h-[20px] shrink-0 bg-[url(/assets/cms-page-editor/toggle-on.svg)] bg-cover bg-no-repeat relative z-[81]" />
                  <span className="flex w-[104px] h-[20px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[13px] font-normal leading-[20px] text-[#17324d] relative text-right whitespace-nowrap z-[82]">
                    نمایش در منوی اصلی
                  </span>
                </div>
                <div className="flex justify-between items-center self-stretch shrink-0 flex-nowrap relative z-[83]">
                  <div className="w-[36px] h-[20px] shrink-0 bg-[url(/assets/cms-page-editor/toggle-off.svg)] bg-cover bg-no-repeat relative z-[84]" />
                  <span className="flex w-[83px] h-[20px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[13px] font-normal leading-[20px] text-[#17324d] relative text-right whitespace-nowrap z-[85]">
                    نمایش در فوتر
                  </span>
                </div>
                <div className="flex flex-col gap-[6px] items-end self-stretch shrink-0 flex-nowrap relative z-[86]">
                  <span className="h-[19px] shrink-0 basis-auto font-['Vazirmatn'] text-[12px] font-normal leading-[18.75px] text-[#60758a] relative text-right whitespace-nowrap z-[87]">
                    ترتیب نمایش در منو
                  </span>
                  <div className="flex pt-[10px] pr-[10px] pb-[10px] pl-[10px] items-start self-stretch shrink-0 flex-nowrap bg-[#f4f6f8] rounded-[8px] border-solid border border-[#e4ebf1] relative z-[88]">
                    <span className="h-[20px] grow shrink-0 basis-auto font-['Vazirmatn'] text-[13px] font-normal leading-[20px] text-[#17324d] relative text-right whitespace-nowrap z-[89]">
                      ۳
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex pt-[20px] pr-[20px] pb-[20px] pl-[20px] flex-col gap-[16px] items-start self-stretch shrink-0 flex-nowrap bg-[#fff] rounded-[16px] border-solid border border-[#e4ebf1] relative z-90">
              <span className="h-[23px] self-stretch shrink-0 basis-auto font-['Vazirmatn'] text-[15px] font-bold leading-[23px] text-[#17324d] relative text-right whitespace-nowrap z-[91]">
                انطباق و بررسی حقوقی
              </span>
              <div className="h-px self-stretch shrink-0 bg-[#e4ebf1] relative z-[92]" />
              <div className="flex flex-col gap-[12px] items-start self-stretch shrink-0 flex-nowrap relative z-[93]">
                <div className="flex pt-[10px] pr-[10px] pb-[10px] pl-[10px] items-start self-stretch shrink-0 flex-nowrap bg-[#fcf6ec] rounded-[8px] relative z-[94]">
                  <span className="flex h-[57px] justify-end items-start grow shrink-0 basis-0 font-['Vazirmatn'] text-[12px] font-normal leading-[18.75px] text-[#c27a10] relative text-right z-[95]">
                    تغییرات این صفحه شامل بخش «راهنمای معافیت مالیاتی ماده ۱۷۲
                    ق.م.م» است و نیاز به بازبینی رسمی حقوقی دارد.
                  </span>
                </div>
                <div className="flex gap-[8px] justify-end items-center self-stretch shrink-0 flex-nowrap relative z-[96]">
                  <span className="h-[19px] shrink-0 basis-auto font-['Vazirmatn'] text-[12px] font-normal leading-[18.75px] text-[#17324d] relative text-right whitespace-nowrap z-[97]">
                    تأیید می‌کنم متن با منبع رسمی تطبیق دارد.
                  </span>
                  <div className="w-[18px] h-[18px] shrink-0 bg-[#fff] rounded-[4px] border-solid border-2 border-[#2094e3] relative z-[98]" />
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-[24px] items-start grow shrink-0 basis-0 flex-nowrap relative z-[99]">
            <div className="flex pt-[24px] pr-[24px] pb-[24px] pl-[24px] flex-col gap-[20px] items-start self-stretch shrink-0 flex-nowrap bg-[#fff] rounded-[20px] border-solid border border-[#e4ebf1] relative z-[100]">
              <span className="h-[25px] self-stretch shrink-0 basis-auto font-['Vazirmatn'] text-[16px] font-extrabold leading-[25px] text-[#17324d] relative text-right whitespace-nowrap z-[101]">
                اطلاعات پایه صفحه
              </span>
              <div className="h-px self-stretch shrink-0 bg-[#e4ebf1] relative z-[102]" />
              <div className="flex flex-col gap-[12px] items-start self-stretch shrink-0 flex-nowrap relative z-[103]">
                <div className="flex flex-col gap-[6px] items-end self-stretch shrink-0 flex-nowrap relative z-[104]">
                  <span className="h-[20px] shrink-0 basis-auto font-['Vazirmatn'] text-[13px] font-bold leading-[20px] text-[#17324d] relative text-right whitespace-nowrap z-[105]">
                    عنوان صفحه (نمایش در مرورگر)
                  </span>
                  <div className="flex pt-[12px] pr-[12px] pb-[12px] pl-[12px] items-start self-stretch shrink-0 flex-nowrap bg-[#fff] rounded-[8px] border-solid border border-[#e4ebf1] relative z-[106]">
                    <span className="h-[22px] grow shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-normal leading-[21.875px] text-[#17324d] relative text-right whitespace-nowrap z-[107]">
                      ماه چگونه کار می‌کند؟
                    </span>
                  </div>
                </div>
                <div className="flex flex-col gap-[6px] items-end self-stretch shrink-0 flex-nowrap relative z-[108]">
                  <span className="h-[20px] shrink-0 basis-auto font-['Vazirmatn'] text-[13px] font-bold leading-[20px] text-[#17324d] relative text-right whitespace-nowrap z-[109]">
                    نشانی یکتا (Slug)
                  </span>
                  <div className="flex pt-[12px] pr-[12px] pb-[12px] pl-[12px] gap-[4px] items-start self-stretch shrink-0 flex-nowrap bg-[#fff] rounded-[8px] border-solid border border-[#e4ebf1] relative z-[110]">
                    <span className="h-[22px] shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-normal leading-[21.875px] text-[#60758a] relative text-left whitespace-nowrap z-[111]">
                      how-it-works
                    </span>
                    <span className="h-[22px] shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-normal leading-[21.875px] text-[#2094e3] relative text-left whitespace-nowrap z-[112]">
                      mah.ir/
                    </span>
                  </div>
                </div>
                <div className="flex flex-col gap-[6px] items-end self-stretch shrink-0 flex-nowrap relative z-[113]">
                  <span className="h-[20px] shrink-0 basis-auto font-['Vazirmatn'] text-[13px] font-bold leading-[20px] text-[#17324d] relative text-right whitespace-nowrap z-[114]">
                    توضیحات داخلی سیستم
                  </span>
                  <div className="flex min-h-[80px] pt-[12px] pr-[12px] pb-[12px] pl-[12px] items-start self-stretch shrink-0 flex-nowrap bg-[#fff] rounded-[8px] border-solid border border-[#e4ebf1] relative z-[115]">
                    <span className="flex h-[44px] justify-end items-start grow shrink-0 basis-0 font-['Vazirmatn'] text-[14px] font-normal leading-[21.875px] text-[#17324d] relative text-right z-[116]">
                      صفحه عمومی توضیح مسیر پروژه، انواع روش‌های مشارکت حامیان،
                      پرداخت امن، چگونگی تأیید KPI توسط خانه‌های خلاق و فرآیند
                      گزارش اثر اجتماعی.
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex pt-[24px] pr-[24px] pb-[24px] pl-[24px] flex-col gap-[20px] items-start self-stretch shrink-0 flex-nowrap bg-[#fff] rounded-[20px] border-solid border border-[#e4ebf1] relative z-[117]">
              <span className="h-[25px] self-stretch shrink-0 basis-auto font-['Vazirmatn'] text-[16px] font-extrabold leading-[25px] text-[#17324d] relative text-right whitespace-nowrap z-[118]">
                الگوی نمایش صفحه (Page Template)
              </span>
              <div className="h-px self-stretch shrink-0 bg-[#e4ebf1] relative z-[119]" />
              <div className="flex gap-[12px] items-start self-stretch shrink-0 flex-nowrap relative z-[120]">
                <div className="flex pt-[14px] pr-[14px] pb-[14px] pl-[14px] flex-col gap-[6px] items-end grow shrink-0 basis-0 flex-nowrap bg-[#eaf5fd] rounded-[12px] border-solid border-2 border-[#2094e3] relative z-[121]">
                  <div className="flex w-[24px] h-[24px] justify-center items-center shrink-0 flex-nowrap relative overflow-hidden z-[122]">
                    <div className="w-[24px] h-[24px] shrink-0 bg-[url(/assets/cms-page-editor/template-book-open.svg)] bg-cover bg-no-repeat relative overflow-hidden z-[123]" />
                  </div>
                  <span className="h-[22px] shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-bold leading-[21.875px] text-[#17324d] relative text-right whitespace-nowrap z-[124]">
                    صفحه راهنما
                  </span>
                  <span className="flex h-[34px] justify-end items-start self-stretch shrink-0 font-['Vazirmatn'] text-[11px] font-normal leading-[17.188px] text-[#60758a] relative text-right z-[125]">
                    الگوی بهینه برای ارائه اطلاعات ساختاریافته چندمرحله‌ای
                  </span>
                </div>
                <div className="flex pt-[14px] pr-[14px] pb-[14px] pl-[14px] flex-col gap-[6px] items-end grow shrink-0 basis-0 flex-nowrap bg-[#fff] rounded-[12px] border-solid border border-[#e4ebf1] relative z-[126]">
                  <div className="flex w-[24px] h-[24px] justify-center items-center shrink-0 flex-nowrap relative overflow-hidden z-[127]">
                    <div className="w-[24px] h-[24px] shrink-0 bg-[url(/assets/cms-page-editor/template-layout.svg)] bg-cover bg-no-repeat relative overflow-hidden z-[128]" />
                  </div>
                  <span className="h-[22px] shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-bold leading-[21.875px] text-[#17324d] relative text-right whitespace-nowrap z-[129]">
                    صفحه فرود
                  </span>
                  <span className="flex h-[34px] justify-end items-start self-stretch shrink-0 font-['Vazirmatn'] text-[11px] font-normal leading-[17.188px] text-[#60758a] relative text-right z-130">
                    طرح باز برای اهداف کمپینی و جذب اولیه مشارکت‌کننده
                  </span>
                </div>
                <div className="flex pt-[14px] pr-[14px] pb-[14px] pl-[14px] flex-col gap-[6px] items-end grow shrink-0 basis-0 flex-nowrap bg-[#fff] rounded-[12px] border-solid border border-[#e4ebf1] relative z-[131]">
                  <div className="flex w-[24px] h-[24px] justify-center items-center shrink-0 flex-nowrap relative overflow-hidden z-[132]">
                    <div className="w-[24px] h-[24px] shrink-0 bg-[url(/assets/cms-page-editor/template-file-text.svg)] bg-cover bg-no-repeat relative overflow-hidden z-[133]" />
                  </div>
                  <span className="h-[22px] shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-bold leading-[21.875px] text-[#17324d] relative text-right whitespace-nowrap z-[134]">
                    صفحه استاندارد
                  </span>
                  <span className="flex h-[34px] justify-end items-start self-stretch shrink-0 font-['Vazirmatn'] text-[11px] font-normal leading-[17.188px] text-[#60758a] relative text-right z-[135]">
                    طرح ساده تک‌ستونه برای مستندات و مقالات عمومی
                  </span>
                </div>
              </div>
            </div>
            <div className="flex pt-[24px] pr-[24px] pb-[24px] pl-[24px] flex-col gap-[20px] items-start self-stretch shrink-0 flex-nowrap bg-[#fff] rounded-[20px] border-solid border border-[#e4ebf1] relative z-[136]">
              <div className="flex justify-between items-center self-stretch shrink-0 flex-nowrap relative z-[137]">
                <div className="flex w-[40px] gap-[8px] items-start shrink-0 flex-nowrap relative z-[138]">
                  <div className="flex w-[16px] h-[16px] justify-center items-center shrink-0 flex-nowrap relative overflow-hidden z-[139]">
                    <div className="w-[16px] h-[16px] shrink-0 bg-[url(/assets/cms-page-editor/eye-16.svg)] bg-cover bg-no-repeat relative overflow-hidden z-140" />
                  </div>
                  <div className="flex w-[16px] h-[16px] justify-center items-center shrink-0 flex-nowrap relative overflow-hidden z-[141]">
                    <div className="w-[16px] h-[16px] shrink-0 bg-[url(/assets/cms-page-editor/trash.svg)] bg-cover bg-no-repeat relative overflow-hidden z-[142]" />
                  </div>
                </div>
                <div className="flex w-[237px] gap-[8px] items-center shrink-0 flex-nowrap relative z-[143]">
                  <span className="flex w-[213px] h-[22px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-bold leading-[21.875px] text-[#17324d] relative text-right whitespace-nowrap z-[144]">
                    بخش اول: بنر قهرمان (Hero Section)
                  </span>
                  <div className="flex w-[16px] h-[16px] justify-center items-center shrink-0 flex-nowrap relative overflow-hidden z-[145]">
                    <div className="w-[16px] h-[16px] shrink-0 bg-[url(/assets/cms-page-editor/move.svg)] bg-cover bg-no-repeat relative overflow-hidden z-[146]" />
                  </div>
                </div>
              </div>
              <div className="h-px self-stretch shrink-0 bg-[#e4ebf1] relative z-[147]" />
              <div className="flex flex-col gap-[12px] items-start self-stretch shrink-0 flex-nowrap relative z-[148]">
                <div className="flex flex-col gap-[6px] items-end self-stretch shrink-0 flex-nowrap relative z-[149]">
                  <span className="h-[20px] shrink-0 basis-auto font-['Vazirmatn'] text-[13px] font-normal leading-[20px] text-[#17324d] relative text-right whitespace-nowrap z-150">
                    عنوان فرعی (Eyebrow)
                  </span>
                  <div className="flex pt-[12px] pr-[12px] pb-[12px] pl-[12px] items-start self-stretch shrink-0 flex-nowrap bg-[#fff] rounded-[8px] border-solid border border-[#e4ebf1] relative z-[151]">
                    <span className="h-[22px] grow shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-normal leading-[21.875px] text-[#17324d] relative text-right whitespace-nowrap z-[152]">
                      شفافیت از ابتدا تا انتها
                    </span>
                  </div>
                </div>
                <div className="flex flex-col gap-[6px] items-end self-stretch shrink-0 flex-nowrap relative z-[153]">
                  <span className="h-[20px] shrink-0 basis-auto font-['Vazirmatn'] text-[13px] font-normal leading-[20px] text-[#17324d] relative text-right whitespace-nowrap z-[154]">
                    عنوان بزرگ (Headline)
                  </span>
                  <div className="flex pt-[12px] pr-[12px] pb-[12px] pl-[12px] items-start self-stretch shrink-0 flex-nowrap bg-[#fff] rounded-[8px] border-solid border border-[#e4ebf1] relative z-[155]">
                    <span className="h-[22px] grow shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-normal leading-[21.875px] text-[#17324d] relative text-right whitespace-nowrap z-[156]">
                      از انتخاب پروژه کارآفرینی تا تحقق نهایی اثر اجتماعی
                    </span>
                  </div>
                </div>
                <div className="flex flex-col gap-[6px] items-end self-stretch shrink-0 flex-nowrap relative z-[157]">
                  <span className="h-[20px] shrink-0 basis-auto font-['Vazirmatn'] text-[13px] font-normal leading-[20px] text-[#17324d] relative text-right whitespace-nowrap z-[158]">
                    توضیحات (Subhead)
                  </span>
                  <div className="flex pt-[12px] pr-[12px] pb-[12px] pl-[12px] items-start self-stretch shrink-0 flex-nowrap bg-[#fff] rounded-[8px] border-solid border border-[#e4ebf1] relative z-[159]">
                    <span className="flex h-[44px] justify-end items-start grow shrink-0 basis-0 font-['Vazirmatn'] text-[14px] font-normal leading-[21.875px] text-[#17324d] relative text-right z-[160]">
                      سامانه ماه پلی مستقیم، کارآمد و امن میان حامیان توانمند و
                      پروژه‌های کارآفرینی سراسر کشور است که با نظارت مستمر
                      خانه‌های خلاق هدایت می‌شود.
                    </span>
                  </div>
                </div>
                <div className="flex gap-[12px] items-start self-stretch shrink-0 flex-nowrap relative z-[161]">
                  <div className="flex flex-col gap-[6px] items-end grow shrink-0 basis-0 flex-nowrap relative z-[162]">
                    <span className="h-[20px] shrink-0 basis-auto font-['Vazirmatn'] text-[13px] font-normal leading-[20px] text-[#17324d] relative text-right whitespace-nowrap z-[163]">
                      دکمه ثانویه
                    </span>
                    <div className="flex pt-[12px] pr-[12px] pb-[12px] pl-[12px] items-start self-stretch shrink-0 flex-nowrap bg-[#fff] rounded-[8px] border-solid border border-[#e4ebf1] relative z-[164]">
                      <span className="h-[22px] grow shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-normal leading-[21.875px] text-[#17324d] relative text-right whitespace-nowrap z-[165]">
                        انتخاب مسیر مشارکت
                      </span>
                    </div>
                  </div>
                  <div className="flex flex-col gap-[6px] items-end grow shrink-0 basis-0 flex-nowrap relative z-[166]">
                    <span className="h-[20px] shrink-0 basis-auto font-['Vazirmatn'] text-[13px] font-normal leading-[20px] text-[#17324d] relative text-right whitespace-nowrap z-[167]">
                      دکمه اولیه (CTA)
                    </span>
                    <div className="flex pt-[12px] pr-[12px] pb-[12px] pl-[12px] items-start self-stretch shrink-0 flex-nowrap bg-[#fff] rounded-[8px] border-solid border border-[#e4ebf1] relative z-[168]">
                      <span className="h-[22px] grow shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-normal leading-[21.875px] text-[#17324d] relative text-right whitespace-nowrap z-[169]">
                        مشاهده پروژه‌ها
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex w-[280px] flex-col items-start shrink-0 flex-nowrap relative z-[170]">
            <div className="flex pt-[20px] pr-[20px] pb-[20px] pl-[20px] flex-col gap-[16px] items-start self-stretch shrink-0 flex-nowrap bg-[#fff] rounded-[16px] border-solid border border-[#e4ebf1] relative z-[171]">
              <span className="h-[23px] self-stretch shrink-0 basis-auto font-['Vazirmatn'] text-[15px] font-bold leading-[23px] text-[#17324d] relative text-right whitespace-nowrap z-[172]">
                ساختار و بخش‌های صفحه
              </span>
              <div className="h-px self-stretch shrink-0 bg-[#e4ebf1] relative z-[173]" />
              <div className="flex flex-col gap-[8px] items-start self-stretch shrink-0 flex-nowrap relative z-[174]">
                <div className="flex pt-[10px] pr-[10px] pb-[10px] pl-[10px] justify-between items-center self-stretch shrink-0 flex-nowrap bg-[#fcfbf8] rounded-[10px] border-solid border border-[#e4ebf1] relative z-[175]">
                  <div className="flex w-[36px] gap-[8px] items-center shrink-0 flex-nowrap relative z-[176]">
                    <div className="flex w-[14px] h-[14px] justify-center items-center shrink-0 flex-nowrap relative overflow-hidden z-[177]">
                      <div className="w-[14px] h-[14px] shrink-0 bg-[url(/assets/cms-page-editor/outline-eye.svg)] bg-cover bg-no-repeat relative overflow-hidden z-[178]" />
                    </div>
                    <div className="flex w-[14px] h-[14px] justify-center items-center shrink-0 flex-nowrap relative overflow-hidden z-[179]">
                      <div className="w-[14px] h-[14px] shrink-0 bg-[url(/assets/cms-page-editor/outline-more.svg)] bg-cover bg-no-repeat relative overflow-hidden z-180" />
                    </div>
                  </div>
                  <div className="flex w-[156px] gap-[8px] justify-end items-center shrink-0 flex-nowrap relative z-[181]">
                    <span className="flex w-[134px] h-[20px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[13px] font-medium leading-[20px] text-[#17324d] relative text-right whitespace-nowrap z-[182]">
                      ۱. ناوبری مسیر (Breadcrumb)
                    </span>
                    <div className="flex w-[14px] h-[14px] justify-center items-center shrink-0 flex-nowrap relative overflow-hidden z-[183]">
                      <div className="w-[14px] h-[14px] shrink-0 bg-[url(/assets/cms-page-editor/outline-layout.svg)] bg-cover bg-no-repeat relative overflow-hidden z-[184]" />
                    </div>
                  </div>
                </div>
                <div className="flex pt-[10px] pr-[10px] pb-[10px] pl-[10px] justify-between items-center self-stretch shrink-0 flex-nowrap bg-[#eaf5fd] rounded-[10px] border-solid border border-[#2094e3] relative z-[185]">
                  <div className="flex w-[36px] gap-[8px] items-center shrink-0 flex-nowrap relative z-[186]">
                    <div className="flex w-[14px] h-[14px] justify-center items-center shrink-0 flex-nowrap relative overflow-hidden z-[187]">
                      <div className="w-[14px] h-[14px] shrink-0 bg-[url(/assets/cms-page-editor/outline-eye.svg)] bg-cover bg-no-repeat relative overflow-hidden z-[188]" />
                    </div>
                    <div className="flex w-[14px] h-[14px] justify-center items-center shrink-0 flex-nowrap relative overflow-hidden z-[189]">
                      <div className="w-[14px] h-[14px] shrink-0 bg-[url(/assets/cms-page-editor/outline-more.svg)] bg-cover bg-no-repeat relative overflow-hidden z-190" />
                    </div>
                  </div>
                  <div className="flex w-[148px] gap-[8px] justify-end items-center shrink-0 flex-nowrap relative z-[191]">
                    <span className="flex w-[126px] h-[20px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[13px] font-bold leading-[20px] text-[#2094e3] relative text-right whitespace-nowrap z-[192]">
                      ۲. بخش بنر اصلی (Hero)
                    </span>
                    <div className="flex w-[14px] h-[14px] justify-center items-center shrink-0 flex-nowrap relative overflow-hidden z-[193]">
                      <div className="w-[14px] h-[14px] shrink-0 bg-[url(/assets/cms-page-editor/outline-image.svg)] bg-cover bg-no-repeat relative overflow-hidden z-[194]" />
                    </div>
                  </div>
                </div>
                <div className="flex pt-[10px] pr-[10px] pb-[10px] pl-[10px] justify-between items-center self-stretch shrink-0 flex-nowrap bg-[#fcfbf8] rounded-[10px] border-solid border border-[#e4ebf1] relative z-[195]">
                  <div className="flex w-[36px] gap-[8px] items-center shrink-0 flex-nowrap relative z-[196]">
                    <div className="flex w-[14px] h-[14px] justify-center items-center shrink-0 flex-nowrap relative overflow-hidden z-[197]">
                      <div className="w-[14px] h-[14px] shrink-0 bg-[url(/assets/cms-page-editor/outline-eye.svg)] bg-cover bg-no-repeat relative overflow-hidden z-[198]" />
                    </div>
                    <div className="flex w-[14px] h-[14px] justify-center items-center shrink-0 flex-nowrap relative overflow-hidden z-[199]">
                      <div className="w-[14px] h-[14px] shrink-0 bg-[url(/assets/cms-page-editor/outline-more.svg)] bg-cover bg-no-repeat relative overflow-hidden z-200" />
                    </div>
                  </div>
                  <div className="flex w-[144px] gap-[8px] justify-end items-center shrink-0 flex-nowrap relative z-[201]">
                    <span className="flex w-[122px] h-[20px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[13px] font-medium leading-[20px] text-[#17324d] relative text-right whitespace-nowrap z-[202]">
                      ۳. ماه در یک نگاه (KPIs)
                    </span>
                    <div className="flex w-[14px] h-[14px] justify-center items-center shrink-0 flex-nowrap relative overflow-hidden z-[203]">
                      <div className="w-[14px] h-[14px] shrink-0 bg-[url(/assets/cms-page-editor/outline-grid.svg)] bg-cover bg-no-repeat relative overflow-hidden z-[204]" />
                    </div>
                  </div>
                </div>
                <div className="flex pt-[10px] pr-[10px] pb-[10px] pl-[10px] justify-between items-center self-stretch shrink-0 flex-nowrap bg-[#fcfbf8] rounded-[10px] border-solid border border-[#e4ebf1] relative z-[205]">
                  <div className="flex w-[36px] gap-[8px] items-center shrink-0 flex-nowrap relative z-[206]">
                    <div className="flex w-[14px] h-[14px] justify-center items-center shrink-0 flex-nowrap relative overflow-hidden z-[207]">
                      <div className="w-[14px] h-[14px] shrink-0 bg-[url(/assets/cms-page-editor/outline-eye.svg)] bg-cover bg-no-repeat relative overflow-hidden z-[208]" />
                    </div>
                    <div className="flex w-[14px] h-[14px] justify-center items-center shrink-0 flex-nowrap relative overflow-hidden z-[209]">
                      <div className="w-[14px] h-[14px] shrink-0 bg-[url(/assets/cms-page-editor/outline-more.svg)] bg-cover bg-no-repeat relative overflow-hidden z-210" />
                    </div>
                  </div>
                  <div className="flex w-[150px] gap-[8px] justify-end items-center shrink-0 flex-nowrap relative z-[211]">
                    <span className="flex w-[128px] h-[20px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[13px] font-medium leading-[20px] text-[#17324d] relative text-right whitespace-nowrap z-[212]">
                      ۴. مسیر گام‌به‌گام پروژه
                    </span>
                    <div className="flex w-[14px] h-[14px] justify-center items-center shrink-0 flex-nowrap relative overflow-hidden z-[213]">
                      <div className="w-[14px] h-[14px] shrink-0 bg-[url(/assets/cms-page-editor/outline-activity.svg)] bg-cover bg-no-repeat relative overflow-hidden z-[214]" />
                    </div>
                  </div>
                </div>
                <div className="flex pt-[10px] pr-[10px] pb-[10px] pl-[10px] justify-between items-center self-stretch shrink-0 flex-nowrap bg-[#fcfbf8] rounded-[10px] border-solid border border-[#e4ebf1] relative z-[215]">
                  <div className="flex w-[36px] gap-[8px] items-center shrink-0 flex-nowrap relative z-[216]">
                    <div className="flex w-[14px] h-[14px] justify-center items-center shrink-0 flex-nowrap relative overflow-hidden z-[217]">
                      <div className="w-[14px] h-[14px] shrink-0 bg-[url(/assets/cms-page-editor/outline-eye.svg)] bg-cover bg-no-repeat relative overflow-hidden z-[218]" />
                    </div>
                    <div className="flex w-[14px] h-[14px] justify-center items-center shrink-0 flex-nowrap relative overflow-hidden z-[219]">
                      <div className="w-[14px] h-[14px] shrink-0 bg-[url(/assets/cms-page-editor/outline-more.svg)] bg-cover bg-no-repeat relative overflow-hidden z-220" />
                    </div>
                  </div>
                  <div className="flex w-[138px] gap-[8px] justify-end items-center shrink-0 flex-nowrap relative z-[221]">
                    <span className="flex w-[116px] h-[20px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[13px] font-medium leading-[20px] text-[#17324d] relative text-right whitespace-nowrap z-[222]">
                      ۵. نقش ارکان حاکمیتی
                    </span>
                    <div className="flex w-[14px] h-[14px] justify-center items-center shrink-0 flex-nowrap relative overflow-hidden z-[223]">
                      <div className="w-[14px] h-[14px] shrink-0 bg-[url(/assets/cms-page-editor/outline-users.svg)] bg-cover bg-no-repeat relative overflow-hidden z-[224]" />
                    </div>
                  </div>
                </div>
                <div className="flex pt-[10px] pr-[10px] pb-[10px] pl-[10px] justify-between items-center self-stretch shrink-0 flex-nowrap bg-[#fcfbf8] rounded-[10px] border-solid border border-[#e4ebf1] relative z-[225]">
                  <div className="flex w-[36px] gap-[8px] items-center shrink-0 flex-nowrap relative z-[226]">
                    <div className="flex w-[14px] h-[14px] justify-center items-center shrink-0 flex-nowrap relative overflow-hidden z-[227]">
                      <div className="w-[14px] h-[14px] shrink-0 bg-[url(/assets/cms-page-editor/outline-eye.svg)] bg-cover bg-no-repeat relative overflow-hidden z-[228]" />
                    </div>
                    <div className="flex w-[14px] h-[14px] justify-center items-center shrink-0 flex-nowrap relative overflow-hidden z-[229]">
                      <div className="w-[14px] h-[14px] shrink-0 bg-[url(/assets/cms-page-editor/outline-more.svg)] bg-cover bg-no-repeat relative overflow-hidden z-230" />
                    </div>
                  </div>
                  <div className="flex w-[139px] gap-[8px] justify-end items-center shrink-0 flex-nowrap relative z-[231]">
                    <span className="flex w-[117px] h-[20px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[13px] font-medium leading-[20px] text-[#17324d] relative text-right whitespace-nowrap z-[232]">
                      ۶. مسیر مشارکت اشخاص
                    </span>
                    <div className="flex w-[14px] h-[14px] justify-center items-center shrink-0 flex-nowrap relative overflow-hidden z-[233]">
                      <div className="w-[14px] h-[14px] shrink-0 bg-[url(/assets/cms-page-editor/outline-user.svg)] bg-cover bg-no-repeat relative overflow-hidden z-[234]" />
                    </div>
                  </div>
                </div>
                <div className="flex pt-[10px] pr-[10px] pb-[10px] pl-[10px] justify-between items-center self-stretch shrink-0 flex-nowrap bg-[#fcfbf8] rounded-[10px] border-solid border border-[#e4ebf1] relative z-[235]">
                  <div className="flex w-[36px] gap-[8px] items-center shrink-0 flex-nowrap relative z-[236]">
                    <div className="flex w-[14px] h-[14px] justify-center items-center shrink-0 flex-nowrap relative overflow-hidden z-[237]">
                      <div className="w-[14px] h-[14px] shrink-0 bg-[url(/assets/cms-page-editor/outline-eye.svg)] bg-cover bg-no-repeat relative overflow-hidden z-[238]" />
                    </div>
                    <div className="flex w-[14px] h-[14px] justify-center items-center shrink-0 flex-nowrap relative overflow-hidden z-[239]">
                      <div className="w-[14px] h-[14px] shrink-0 bg-[url(/assets/cms-page-editor/outline-more.svg)] bg-cover bg-no-repeat relative overflow-hidden z-240" />
                    </div>
                  </div>
                  <div className="flex w-[140px] gap-[8px] justify-end items-center shrink-0 flex-nowrap relative z-[241]">
                    <span className="flex w-[118px] h-[20px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[13px] font-medium leading-[20px] text-[#17324d] relative text-right whitespace-nowrap z-[242]">
                      ۷. مسیر مشارکت شرکت‌ها
                    </span>
                    <div className="flex w-[14px] h-[14px] justify-center items-center shrink-0 flex-nowrap relative overflow-hidden z-[243]">
                      <div className="w-[14px] h-[14px] shrink-0 bg-[url(/assets/cms-page-editor/outline-briefcase.svg)] bg-cover bg-no-repeat relative overflow-hidden z-[244]" />
                    </div>
                  </div>
                </div>
                <div className="flex pt-[12px] pr-[12px] pb-[12px] pl-[12px] gap-[8px] justify-center items-center self-stretch shrink-0 flex-nowrap bg-[#fff] rounded-[10px] border-dashed border border-[#e4ebf1] relative z-[245]">
                  <span className="h-[20px] shrink-0 basis-auto font-['Vazirmatn'] text-[13px] font-bold leading-[20px] text-[#2094e3] relative text-right whitespace-nowrap z-[246]">
                    افزودن بخش جدید
                  </span>
                  <div className="flex w-[14px] h-[14px] justify-center items-center shrink-0 flex-nowrap relative overflow-hidden z-[247]">
                    <div className="w-[14px] h-[14px] shrink-0 bg-[url(/assets/cms-page-editor/plus.svg)] bg-cover bg-no-repeat relative overflow-hidden z-[248]" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex w-[280px] pt-[24px] pr-[16px] pb-[24px] pl-[16px] flex-col gap-[24px] items-start self-stretch shrink-0 flex-nowrap bg-[#fcfbf8] border-solid border-l border-l-[#e4ebf1] relative z-[249]">
        <div className="flex flex-col gap-[16px] items-end self-stretch shrink-0 flex-nowrap relative z-[250]">
          <div className="w-[137px] h-[46px] shrink-0 bg-[url(/assets/cms-page-editor/logo.png)] bg-cover bg-no-repeat relative z-[251]" />
          <div className="flex pt-[8px] pr-[12px] pb-[8px] pl-[12px] gap-[12px] justify-end items-center self-stretch shrink-0 flex-nowrap bg-[#f4f6f8] rounded-[12px] relative z-[252]">
            <div className="flex w-[40px] pt-[4px] pr-[8px] pb-[4px] pl-[8px] items-start shrink-0 flex-nowrap bg-[#eaf5fd] rounded-[8px] relative z-[253]">
              <span className="h-[17px] shrink-0 basis-auto font-['Vazirmatn'] text-[11px] font-bold leading-[17px] text-[#2094e3] relative text-left whitespace-nowrap z-[254]">
                CMS
              </span>
            </div>
            <div className="flex w-[60px] flex-col gap-[2px] items-end shrink-0 flex-nowrap relative z-[255]">
              <span className="flex w-[60px] h-[20px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[13px] font-bold leading-[20px] text-[#17324d] relative text-right whitespace-nowrap z-[256]">
                نگار حسینی
              </span>
              <span className="flex w-[48px] h-[17px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[11px] font-normal leading-[17px] text-[#60758a] relative text-right whitespace-nowrap z-[257]">
                مدیر محتوا
              </span>
            </div>
          </div>
        </div>
        <div className="h-px self-stretch shrink-0 bg-[#e4ebf1] relative z-[258]" />
        <div className="flex flex-col gap-[20px] items-start self-stretch shrink-0 flex-nowrap relative z-[259]">
          <div className="flex flex-col gap-[6px] items-start self-stretch shrink-0 flex-nowrap relative z-[260]">
            <span className="h-[19px] self-stretch shrink-0 basis-auto font-['Vazirmatn'] text-[12px] font-bold leading-[18.75px] text-[#60758a] relative text-right whitespace-nowrap z-[261]">
              محتوا
            </span>
            <div className="flex pt-[10px] pr-[16px] pb-[10px] pl-[16px] gap-[12px] justify-end items-center self-stretch shrink-0 flex-nowrap bg-[rgba(0,0,0,0)] rounded-[8px] relative z-[262]">
              <span className="h-[22px] grow shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-medium leading-[21.875px] text-[#60758a] relative text-right whitespace-nowrap z-[263]">
                داشبورد
              </span>
              <div className="flex w-[18px] h-[18px] flex-col justify-center items-center shrink-0 flex-nowrap relative overflow-hidden z-[264]">
                <div className="w-[18px] h-[18px] shrink-0 bg-[url(/assets/cms-page-editor/sidebar-grid.svg)] bg-cover bg-no-repeat relative overflow-hidden z-[265]" />
              </div>
            </div>
            <div className="flex pt-[10px] pr-[16px] pb-[10px] pl-[16px] gap-[12px] justify-end items-center self-stretch shrink-0 flex-nowrap bg-[rgba(0,0,0,0)] rounded-[8px] relative z-[266]">
              <span className="h-[22px] grow shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-medium leading-[21.875px] text-[#60758a] relative text-right whitespace-nowrap z-[267]">
                همه محتواها
              </span>
              <div className="w-[18px] h-[18px] shrink-0 bg-[url(/assets/cms-page-editor/sidebar-file-text.svg)] bg-cover bg-no-repeat relative overflow-hidden z-[268]" />
            </div>
            <div className="flex pt-[10px] pr-[16px] pb-[10px] pl-[16px] gap-[12px] justify-end items-center self-stretch shrink-0 flex-nowrap bg-[rgba(0,0,0,0)] rounded-[8px] relative z-[269]">
              <span className="h-[22px] grow shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-medium leading-[21.875px] text-[#60758a] relative text-right whitespace-nowrap z-[270]">
                اخبار
              </span>
              <div className="w-[18px] h-[18px] shrink-0 bg-[url(/assets/cms-page-editor/sidebar-book-open.svg)] bg-cover bg-no-repeat relative overflow-hidden z-[271]" />
            </div>
            <div className="flex pt-[10px] pr-[16px] pb-[10px] pl-[16px] gap-[12px] justify-end items-center self-stretch shrink-0 flex-nowrap bg-[#eaf5fd] rounded-[8px] relative z-[272]">
              <span className="flex w-[81px] h-[22px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-bold leading-[21.875px] text-[#2094e3] relative text-right whitespace-nowrap z-[273]">
                صفحات سایت
              </span>
              <div className="flex w-[18px] h-[18px] justify-center items-center shrink-0 flex-nowrap relative overflow-hidden z-[274]">
                <div className="w-[18px] h-[18px] shrink-0 bg-[url(/assets/cms-page-editor/sidebar-layout-active.svg)] bg-cover bg-no-repeat relative overflow-hidden z-[275]" />
              </div>
            </div>
            <div className="flex pt-[10px] pr-[16px] pb-[10px] pl-[16px] gap-[12px] justify-end items-center self-stretch shrink-0 flex-nowrap bg-[rgba(0,0,0,0)] rounded-[8px] relative z-[276]">
              <span className="h-[22px] grow shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-medium leading-[21.875px] text-[#60758a] relative text-right whitespace-nowrap z-[277]">
                صفحه اصلی
              </span>
              <div className="w-[18px] h-[18px] shrink-0 bg-[url(/assets/cms-page-editor/sidebar-home.svg)] bg-cover bg-no-repeat relative overflow-hidden z-[278]" />
            </div>
            <div className="flex pt-[10px] pr-[16px] pb-[10px] pl-[16px] gap-[12px] justify-end items-center self-stretch shrink-0 flex-nowrap bg-[rgba(0,0,0,0)] rounded-[8px] relative z-[279]">
              <span className="h-[22px] grow shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-medium leading-[21.875px] text-[#60758a] relative text-right whitespace-nowrap z-[280]">
                سوالات متداول
              </span>
              <div className="w-[18px] h-[18px] shrink-0 bg-[url(/assets/cms-page-editor/sidebar-help.svg)] bg-cover bg-no-repeat relative overflow-hidden z-[281]" />
            </div>
          </div>
          <div className="flex flex-col gap-[6px] items-start self-stretch shrink-0 flex-nowrap relative z-[282]">
            <span className="h-[19px] self-stretch shrink-0 basis-auto font-['Vazirmatn'] text-[12px] font-bold leading-[18.75px] text-[#60758a] relative text-right whitespace-nowrap z-[283]">
              انتشار
            </span>
            <div className="flex pt-[10px] pr-[16px] pb-[10px] pl-[16px] gap-[12px] justify-end items-center self-stretch shrink-0 flex-nowrap bg-[rgba(0,0,0,0)] rounded-[8px] relative z-[284]">
              <span className="h-[22px] grow shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-medium leading-[21.875px] text-[#60758a] relative text-right whitespace-nowrap z-[285]">
                رسانه‌ها
              </span>
              <div className="w-[18px] h-[18px] shrink-0 bg-[url(/assets/cms-page-editor/sidebar-image.svg)] bg-cover bg-no-repeat relative overflow-hidden z-[286]" />
            </div>
            <div className="flex pt-[10px] pr-[16px] pb-[10px] pl-[16px] gap-[12px] justify-end items-center self-stretch shrink-0 flex-nowrap bg-[rgba(0,0,0,0)] rounded-[8px] relative z-[287]">
              <span className="h-[22px] grow shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-medium leading-[21.875px] text-[#60758a] relative text-right whitespace-nowrap z-[288]">
                منو و Footer
              </span>
              <div className="w-[18px] h-[18px] shrink-0 bg-[url(/assets/cms-page-editor/sidebar-menu.svg)] bg-cover bg-no-repeat relative overflow-hidden z-[289]" />
            </div>
            <div className="flex pt-[10px] pr-[16px] pb-[10px] pl-[16px] gap-[12px] justify-end items-center self-stretch shrink-0 flex-nowrap bg-[rgba(0,0,0,0)] rounded-[8px] relative z-[290]">
              <span className="h-[22px] grow shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-medium leading-[21.875px] text-[#60758a] relative text-right whitespace-nowrap z-[291]">
                بازبینی و پیش‌نمایش
              </span>
              <div className="w-[18px] h-[18px] shrink-0 bg-[url(/assets/cms-page-editor/sidebar-eye.svg)] bg-cover bg-no-repeat relative overflow-hidden z-[292]" />
            </div>
          </div>
          <div className="flex flex-col gap-[6px] items-start self-stretch shrink-0 flex-nowrap relative z-[293]">
            <span className="h-[19px] self-stretch shrink-0 basis-auto font-['Vazirmatn'] text-[12px] font-bold leading-[18.75px] text-[#60758a] relative text-right whitespace-nowrap z-[294]">
              مدیریت
            </span>
            <div className="flex pt-[10px] pr-[16px] pb-[10px] pl-[16px] gap-[12px] justify-end items-center self-stretch shrink-0 flex-nowrap rounded-[8px] relative z-[295]">
              <span className="h-[22px] grow shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-medium leading-[21.875px] text-[#60758a] relative text-right whitespace-nowrap z-[296]">
                کاربران و نقش‌ها
              </span>
              <div className="w-[18px] h-[18px] shrink-0 bg-[url(/assets/cms-page-editor/sidebar-users.svg)] bg-cover bg-no-repeat relative overflow-hidden z-[297]" />
            </div>
            <div className="flex pt-[10px] pr-[16px] pb-[10px] pl-[16px] gap-[12px] justify-end items-center self-stretch shrink-0 flex-nowrap bg-[rgba(0,0,0,0)] rounded-[8px] relative z-[298]">
              <span className="flex w-[93px] h-[22px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-medium leading-[21.875px] text-[#60758a] relative text-right whitespace-nowrap z-[299]">
                گزارش فعالیت‌ها
              </span>
              <div className="flex w-[18px] h-[18px] justify-center items-center shrink-0 flex-nowrap relative overflow-hidden z-300">
                <div className="w-[18px] h-[18px] shrink-0 bg-[url(/assets/cms-page-editor/sidebar-activity.svg)] bg-cover bg-no-repeat relative overflow-hidden z-[301]" />
              </div>
            </div>
          </div>
        </div>
        <div className="self-stretch grow shrink-0 basis-0 relative overflow-hidden z-[302]" />
        <div className="flex flex-col gap-[12px] items-start self-stretch shrink-0 flex-nowrap bg-[#fff] relative z-[303]">
          <div className="h-px self-stretch shrink-0 bg-[#e4ebf1] relative z-[304]" />
          <div className="flex pt-[12px] pr-[12px] pb-[12px] pl-[12px] gap-[10px] justify-center items-center self-stretch shrink-0 flex-nowrap bg-[#2094e3] rounded-[12px] relative z-[305]">
            <span className="h-[22px] shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-bold leading-[21.875px] text-[#fff] relative text-left whitespace-nowrap z-[306]">
              خروج از سیستم
            </span>
            <div className="w-[16px] h-[16px] shrink-0 bg-[url(/assets/cms-page-editor/logout.svg)] bg-cover bg-no-repeat relative overflow-hidden z-[307]" />
          </div>
        </div>
      </div>
    </div>
  );
}
