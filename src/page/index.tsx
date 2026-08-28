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
            <span className="flex w-[41px] h-[22px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-medium leading-[21.875px] text-[#17324d] relative text-right whitespace-nowrap z-[14]">
              پروژه‌ها
            </span>
            <span className="flex w-[69px] h-[22px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-medium leading-[21.875px] text-[#17324d] relative text-right whitespace-nowrap z-[15]">
              صفحه اصلی
            </span>
          </div>
          <div className="w-[137px] h-[46px] shrink-0 bg-[url(https://static.codia.ai/image/2026-08-24/jutZZKzv8X.png)] bg-cover bg-no-repeat relative z-[16]" />
        </div>
      </div>
      <div className="flex pt-[48px] pr-[120px] pb-[48px] pl-[120px] flex-col gap-[20px] items-start self-stretch shrink-0 flex-nowrap bg-[#fcfbf8] border-solid border-t border-t-[#e4ebf1] relative z-[17]">
        <div className="flex justify-end items-start self-stretch shrink-0 flex-nowrap relative z-[18]">
          <span className="flex w-[100px] h-[20px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[13px] font-normal leading-[20px] text-[#60758a] relative text-right whitespace-nowrap z-[19]">
            صفحه اصلی / اخبار
          </span>
        </div>
        <div className="flex justify-between items-center self-stretch shrink-0 flex-nowrap relative z-20">
          <div className="flex w-[322px] gap-[24px] items-center shrink-0 flex-nowrap relative z-[21]">
            <div className="flex w-[70px] flex-col gap-[4px] items-center shrink-0 flex-nowrap relative z-[22]">
              <span className="h-[38px] shrink-0 basis-auto font-['Vazirmatn'] text-[24px] font-bold leading-[37.5px] text-[#17324d] relative text-left whitespace-nowrap z-[23]">
                ۴۸
              </span>
              <span className="h-[17px] shrink-0 basis-auto font-['Vazirmatn'] text-[11px] font-normal leading-[17px] text-[#60758a] relative text-left whitespace-nowrap z-[24]">
                اخبار منتشرشده
              </span>
            </div>
            <div className="w-px h-[40px] shrink-0 bg-[#e4ebf1] relative z-[25]" />
            <div className="flex w-[71px] flex-col gap-[4px] items-center shrink-0 flex-nowrap relative z-[26]">
              <span className="h-[38px] shrink-0 basis-auto font-['Vazirmatn'] text-[24px] font-bold leading-[37.5px] text-[#17324d] relative text-left whitespace-nowrap z-[27]">
                ۱۲
              </span>
              <span className="h-[17px] shrink-0 basis-auto font-['Vazirmatn'] text-[11px] font-normal leading-[17px] text-[#60758a] relative text-left whitespace-nowrap z-[28]">
                گزارش‌های جدید
              </span>
            </div>
            <div className="w-px h-[40px] shrink-0 bg-[#e4ebf1] relative z-[29]" />
            <div className="flex w-[83px] flex-col gap-[4px] items-center shrink-0 flex-nowrap relative z-30">
              <span className="h-[38px] shrink-0 basis-auto font-['Vazirmatn'] text-[24px] font-bold leading-[37.5px] text-[#17324d] relative text-left whitespace-nowrap z-[31]">
                ۹
              </span>
              <span className="h-[17px] shrink-0 basis-auto font-['Vazirmatn'] text-[11px] font-normal leading-[17px] text-[#60758a] relative text-left whitespace-nowrap z-[32]">
                پروژه‌های به‌روزشده
              </span>
            </div>
          </div>
          <div className="flex w-[434px] flex-col gap-[8px] items-end shrink-0 flex-nowrap relative z-[33]">
            <span className="flex w-[264px] h-[50px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[32px] font-extrabold leading-[50px] text-[#17324d] relative text-right whitespace-nowrap z-[34]">
              اخبار و به‌روزرسانی‌ها
            </span>
            <span className="flex w-[434px] h-[23px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[15px] font-normal leading-[23px] text-[#60758a] relative text-right whitespace-nowrap z-[35]">
              آخرین خبرهای پروژه‌ها، استارتاپ‌ها، گزارش‌های اثر و رویدادهای
              سامانه ماه
            </span>
          </div>
        </div>
      </div>
      <div className="flex pt-[20px] pr-[120px] pb-[20px] pl-[120px] justify-between items-center self-stretch shrink-0 flex-nowrap bg-[#eaf5fd] border-solid border-t border-t-[#e4ebf1] relative z-[36]">
        <div className="flex w-[263px] gap-[8px] items-center shrink-0 flex-nowrap relative z-[37]">
          <span className="flex w-[239px] h-[20px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[13px] font-medium leading-[20px] text-[#2094e3] relative text-right whitespace-nowrap z-[38]">
            تاریخ انتشار و آخرین به‌روزرسانی مشخص است
          </span>
          <div className="w-[16px] h-[16px] shrink-0 bg-[url(https://static.codia.ai/image/2026-08-24/HXiHODHELj.png)] bg-cover bg-no-repeat relative overflow-hidden z-[39]" />
        </div>
        <div className="flex w-[290px] gap-[8px] items-center shrink-0 flex-nowrap relative z-40">
          <span className="flex w-[266px] h-[20px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[13px] font-medium leading-[20px] text-[#2094e3] relative text-right whitespace-nowrap z-[41]">
            آمار اثر از گزارش‌های رسمی پروژه‌ها استخراج می‌شود
          </span>
          <div className="w-[16px] h-[16px] shrink-0 bg-[url(https://static.codia.ai/image/2026-08-24/Y6bjrhiBVD.png)] bg-cover bg-no-repeat relative overflow-hidden z-[42]" />
        </div>
        <div className="flex w-[220px] gap-[8px] items-center shrink-0 flex-nowrap relative z-[43]">
          <span className="flex w-[196px] h-[20px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[13px] font-medium leading-[20px] text-[#2094e3] relative text-right whitespace-nowrap z-[44]">
            فقط اطلاعات تأییدشده منتشر می‌شود
          </span>
          <div className="w-[16px] h-[16px] shrink-0 bg-[url(https://static.codia.ai/image/2026-08-24/7n5BjKVBnb.png)] bg-cover bg-no-repeat relative overflow-hidden z-[45]" />
        </div>
      </div>
      <div className="flex pt-[48px] pr-[120px] pb-[48px] pl-[120px] flex-col items-center self-stretch shrink-0 flex-nowrap relative z-[46]">
        <div className="flex pt-[32px] pr-[32px] pb-[32px] pl-[32px] gap-[32px] items-start self-stretch shrink-0 flex-nowrap bg-[#fff] rounded-[24px] border-solid border border-[#e4ebf1] relative z-[47]">
          <div className="w-[520px] h-[320px] shrink-0 bg-[url(https://static.codia.ai/image/2026-08-24/7rt5oVLKOH.png)] bg-cover bg-no-repeat rounded-[16px] relative z-[48]" />
          <div className="flex flex-col gap-[16px] items-end grow shrink-0 basis-0 flex-nowrap relative z-[49]">
            <span className="h-[38px] self-stretch shrink-0 basis-auto font-['Vazirmatn'] text-[24px] font-extrabold leading-[37.5px] text-[#17324d] relative text-right whitespace-nowrap z-50">
              گزارش اثر اجتماعی سامانه ماه در سال ۱۴۰۴ منتشر شد
            </span>
            <span className="flex w-[584px] h-[48px] justify-end items-start self-stretch shrink-0 font-['Vazirmatn'] text-[14px] font-normal leading-[24px] text-[#60758a] relative text-right z-[51]">
              این گزارش، نتایج پروژه‌های تأییدشده سامانه ماه در حوزه‌های اشتغال،
              آموزش، سلامت و معیشت پایدار را براساس داده‌های ثبت‌شده و گزارش‌های
              مورد تأیید خانه خلاق ارائه می‌کند.
            </span>
            <div className="flex gap-[8px] justify-end items-start self-stretch shrink-0 flex-nowrap relative z-[52]">
              <span className="flex w-[155px] h-[19px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[12px] font-normal leading-[18.75px] text-[#60758a] relative text-right whitespace-nowrap z-[53]">
                آخرین به‌روزرسانی: ۲۸ مرداد ۱۴۰۵
              </span>
              <span className="h-[19px] shrink-0 basis-auto font-['Vazirmatn'] text-[12px] font-normal leading-[18.75px] text-[#60758a] relative text-left whitespace-nowrap z-[54]">
                |
              </span>
              <span className="flex w-[134px] h-[19px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[12px] font-normal leading-[18.75px] text-[#60758a] relative text-right whitespace-nowrap z-[55]">
                نویسنده: تحریریه سامانه ماه
              </span>
              <span className="h-[19px] shrink-0 basis-auto font-['Vazirmatn'] text-[12px] font-normal leading-[18.75px] text-[#60758a] relative text-left whitespace-nowrap z-[56]">
                |
              </span>
              <span className="flex w-[102px] h-[19px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[12px] font-normal leading-[18.75px] text-[#60758a] relative text-right whitespace-nowrap z-[57]">
                زمان مطالعه: ۶ دقیقه
              </span>
              <span className="h-[19px] shrink-0 basis-auto font-['Vazirmatn'] text-[12px] font-normal leading-[18.75px] text-[#60758a] relative text-left whitespace-nowrap z-[58]">
                |
              </span>
              <span className="flex w-[97px] h-[19px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[12px] font-normal leading-[18.75px] text-[#60758a] relative text-right whitespace-nowrap z-[59]">
                تاریخ: ۲۵ مرداد ۱۴۰۵
              </span>
            </div>
            <div className="flex pt-[8px] pr-0 pb-0 pl-0 gap-[12px] justify-end items-start self-stretch shrink-0 flex-nowrap relative z-[60]">
              <div className="flex w-[143px] pt-[11px] pr-[20px] pb-[11px] pl-[20px] gap-[8px] justify-center items-center shrink-0 flex-nowrap bg-[#fff] rounded-[12px] border-solid border border-[#e4ebf1] relative z-[61]">
                <span className="flex w-[103px] h-[22px] justify-center items-start shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-medium leading-[22px] text-[#2094e3] relative text-center whitespace-nowrap z-[62]">
                  مشاهده گزارش اثر
                </span>
              </div>
              <div className="flex w-[104px] pt-[11px] pr-[20px] pb-[11px] pl-[20px] gap-[8px] justify-center items-center shrink-0 flex-nowrap bg-[#2094e3] rounded-[12px] relative z-[63]">
                <span className="flex w-[64px] h-[22px] justify-center items-start shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-medium leading-[22px] text-[#fff] relative text-center whitespace-nowrap z-[64]">
                  مطالعه خبر
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex pt-[24px] pr-[120px] pb-[24px] pl-[120px] flex-col gap-[16px] items-start self-stretch shrink-0 flex-nowrap bg-[#fff] border-solid border-t border-t-[#e4ebf1] border-solid border-b border-b-[#e4ebf1] relative z-[65]">
        <div className="flex pt-[12px] pr-[12px] pb-[12px] pl-[12px] gap-[12px] items-center self-stretch shrink-0 flex-nowrap bg-[#fcfbf8] rounded-[12px] border-solid border border-[#e4ebf1] relative z-[66]">
          <span className="h-[22px] grow shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-normal leading-[21.875px] text-[#60758a] relative text-right whitespace-nowrap z-[67]">
            جست‌وجوی عنوان خبر، پروژه یا استارتاپ...
          </span>
          <div className="w-[18px] h-[18px] shrink-0 bg-[url(https://static.codia.ai/image/2026-08-24/AmgGbV1s91.png)] bg-cover bg-no-repeat relative overflow-hidden z-[68]" />
        </div>
        <div className="flex gap-[12px] items-start self-stretch shrink-0 flex-nowrap relative z-[69]">
          <div className="flex pt-[10px] pr-[14px] pb-[10px] pl-[14px] gap-[8px] items-center grow shrink-0 basis-0 flex-nowrap bg-[#fff] rounded-[10px] border-solid border border-[#e4ebf1] relative z-[70]">
            <div className="w-[14px] h-[14px] shrink-0 bg-[url(https://static.codia.ai/image/2026-08-24/kyCbu5XE7c.png)] bg-cover bg-no-repeat relative overflow-hidden z-[71]" />
            <span className="h-[22px] grow shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-normal leading-[21.875px] text-[#17324d] relative text-right whitespace-nowrap z-[72]">
              جدیدترین
            </span>
          </div>
          <div className="flex pt-[10px] pr-[14px] pb-[10px] pl-[14px] gap-[8px] items-center grow shrink-0 basis-0 flex-nowrap bg-[#fff] rounded-[10px] border-solid border border-[#e4ebf1] relative z-[73]">
            <div className="w-[14px] h-[14px] shrink-0 bg-[url(https://static.codia.ai/image/2026-08-24/ZPX7E6J09x.png)] bg-cover bg-no-repeat relative overflow-hidden z-[74]" />
            <span className="h-[22px] grow shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-normal leading-[21.875px] text-[#17324d] relative text-right whitespace-nowrap z-[75]">
              استارتاپ مرتبط
            </span>
          </div>
          <div className="flex pt-[10px] pr-[14px] pb-[10px] pl-[14px] gap-[8px] items-center grow shrink-0 basis-0 flex-nowrap bg-[#fff] rounded-[10px] border-solid border border-[#e4ebf1] relative z-[76]">
            <div className="w-[14px] h-[14px] shrink-0 bg-[url(https://static.codia.ai/image/2026-08-24/ah7uQAe7wW.png)] bg-cover bg-no-repeat relative overflow-hidden z-[77]" />
            <span className="h-[22px] grow shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-normal leading-[21.875px] text-[#17324d] relative text-right whitespace-nowrap z-[78]">
              پروژه مرتبط
            </span>
          </div>
          <div className="flex pt-[10px] pr-[14px] pb-[10px] pl-[14px] gap-[8px] items-center grow shrink-0 basis-0 flex-nowrap bg-[#fff] rounded-[10px] border-solid border border-[#e4ebf1] relative z-[79]">
            <div className="w-[14px] h-[14px] shrink-0 bg-[url(https://static.codia.ai/image/2026-08-24/46EcQytSUE.png)] bg-cover bg-no-repeat relative overflow-hidden z-[80]" />
            <span className="h-[22px] grow shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-normal leading-[21.875px] text-[#17324d] relative text-right whitespace-nowrap z-[81]">
              سال انتشار
            </span>
          </div>
          <div className="flex pt-[10px] pr-[14px] pb-[10px] pl-[14px] gap-[8px] items-center grow shrink-0 basis-0 flex-nowrap bg-[#fff] rounded-[10px] border-solid border border-[#e4ebf1] relative z-[82]">
            <div className="w-[14px] h-[14px] shrink-0 bg-[url(https://static.codia.ai/image/2026-08-24/zMzNbwGGgZ.png)] bg-cover bg-no-repeat relative overflow-hidden z-[83]" />
            <span className="h-[22px] grow shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-normal leading-[21.875px] text-[#17324d] relative text-right whitespace-nowrap z-[84]">
              دسته‌بندی
            </span>
          </div>
        </div>
        <div className="flex gap-[12px] justify-end items-start self-stretch shrink-0 flex-nowrap relative z-[85]">
          <span className="flex w-[67px] h-[20px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[13px] font-medium leading-[20px] text-[#60758a] relative text-right whitespace-nowrap z-[86]">
            حذف فیلترها
          </span>
          <div className="flex w-[102px] pt-[11px] pr-[20px] pb-[11px] pl-[20px] gap-[8px] justify-center items-center shrink-0 flex-nowrap bg-[#2094e3] rounded-[12px] relative z-[87]">
            <span className="flex w-[62px] h-[22px] justify-center items-start shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-medium leading-[22px] text-[#fff] relative text-center whitespace-nowrap z-[88]">
              اعمال فیلتر
            </span>
          </div>
        </div>
      </div>
      <div className="flex pt-[20px] pr-[120px] pb-[20px] pl-[120px] gap-[12px] justify-end items-center self-stretch shrink-0 flex-nowrap relative z-[89]">
        <div className="flex w-[75px] pt-[6px] pr-[12px] pb-[6px] pl-[12px] items-start shrink-0 flex-nowrap bg-[#fff] rounded-[8px] border-solid border border-[#e4ebf1] relative z-[90]">
          <span className="h-[20px] shrink-0 basis-auto font-['Vazirmatn'] text-[13px] font-normal leading-[20px] text-[#60758a] relative text-left whitespace-nowrap z-[91]">
            اطلاعیه‌ها
          </span>
        </div>
        <div className="flex w-[67px] pt-[6px] pr-[12px] pb-[6px] pl-[12px] items-start shrink-0 flex-nowrap bg-[#fff] rounded-[8px] border-solid border border-[#e4ebf1] relative z-[92]">
          <span className="h-[20px] shrink-0 basis-auto font-['Vazirmatn'] text-[13px] font-normal leading-[20px] text-[#60758a] relative text-left whitespace-nowrap z-[93]">
            رویدادها
          </span>
        </div>
        <div className="flex w-[81px] pt-[6px] pr-[12px] pb-[6px] pl-[12px] items-start shrink-0 flex-nowrap bg-[#fff] rounded-[8px] border-solid border border-[#e4ebf1] relative z-[94]">
          <span className="h-[20px] shrink-0 basis-auto font-['Vazirmatn'] text-[13px] font-normal leading-[20px] text-[#60758a] relative text-left whitespace-nowrap z-[95]">
            استارتاپ‌ها
          </span>
        </div>
        <div className="flex w-[93px] pt-[6px] pr-[12px] pb-[6px] pl-[12px] items-start shrink-0 flex-nowrap bg-[#fff] rounded-[8px] border-solid border border-[#e4ebf1] relative z-[96]">
          <span className="h-[20px] shrink-0 basis-auto font-['Vazirmatn'] text-[13px] font-normal leading-[20px] text-[#60758a] relative text-left whitespace-nowrap z-[97]">
            گزارش‌های اثر
          </span>
        </div>
        <div className="flex w-[62px] pt-[6px] pr-[12px] pb-[6px] pl-[12px] items-start shrink-0 flex-nowrap bg-[#fff] rounded-[8px] border-solid border border-[#e4ebf1] relative z-[98]">
          <span className="h-[20px] shrink-0 basis-auto font-['Vazirmatn'] text-[13px] font-normal leading-[20px] text-[#60758a] relative text-left whitespace-nowrap z-[99]">
            پروژه‌ها
          </span>
        </div>
        <div className="flex w-[48px] pt-[6px] pr-[12px] pb-[6px] pl-[12px] items-start shrink-0 flex-nowrap bg-[#2094e3] rounded-[8px] relative z-[100]">
          <span className="h-[20px] shrink-0 basis-auto font-['Vazirmatn'] text-[13px] font-bold leading-[20px] text-[#fff] relative text-left whitespace-nowrap z-[101]">
            همه
          </span>
        </div>
        <span className="h-[20px] shrink-0 basis-auto font-['Vazirmatn'] text-[13px] font-normal leading-[20px] text-[#60758a] relative text-left whitespace-nowrap z-[102]">
          دسته‌بندی‌ها:
        </span>
      </div>
      <div className="flex pt-[16px] pr-[120px] pb-[16px] pl-[120px] justify-between items-center self-stretch shrink-0 flex-nowrap relative z-[103]">
        <div className="flex w-[48px] gap-[12px] items-center shrink-0 flex-nowrap relative z-[104]">
          <div className="w-[18px] h-[18px] shrink-0 bg-[url(https://static.codia.ai/image/2026-08-24/ohBJeUanc2.png)] bg-cover bg-no-repeat relative overflow-hidden z-[105]" />
          <div className="w-[18px] h-[18px] shrink-0 bg-[url(https://static.codia.ai/image/2026-08-24/Usm0gPY0k7.png)] bg-cover bg-no-repeat relative overflow-hidden z-[106]" />
        </div>
        <span className="flex w-[157px] h-[22px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-medium leading-[21.875px] text-[#17324d] relative text-right whitespace-nowrap z-[107]">
          نمایش ۹ مطلب از ۴۸ مطلب
        </span>
      </div>
      <div className="flex pt-0 pr-[120px] pb-0 pl-[120px] flex-col gap-[24px] items-start self-stretch shrink-0 flex-nowrap relative z-[108]">
        <div className="self-stretch shrink-0 relative z-[109]">
          <div className="flex pt-[24px] pr-[24px] pb-[24px] pl-[24px] flex-col gap-[16px] items-start flex-nowrap bg-[#fff] rounded-[24px] border-solid border border-[#e4ebf1] relative z-[110]">
            <div className="h-[180px] self-stretch shrink-0 bg-[url(https://static.codia.ai/image/2026-08-24/k7oABd3NJM.png)] bg-cover bg-no-repeat rounded-[16px] relative z-[111]" />
            <div className="flex justify-between items-center self-stretch shrink-0 flex-nowrap relative z-[112]">
              <span className="flex w-[66px] h-[19px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[12px] font-normal leading-[18.75px] text-[#60758a] relative text-right whitespace-nowrap z-[113]">
                ۲۲ مرداد ۱۴۰۵
              </span>
            </div>
            <span className="h-[25px] self-stretch shrink-0 basis-auto font-['Vazirmatn'] text-[16px] font-bold leading-[25px] text-[#17324d] relative text-right overflow-hidden whitespace-nowrap z-[114]">
              مرحله آموزش پروژه اشتغال زنان روستایی تکمیل شد
            </span>
            <span className="flex w-[336px] h-[40px] justify-end items-start self-stretch shrink-0 font-['Vazirmatn'] text-[13px] font-normal leading-[20.313px] text-[#60758a] relative text-right overflow-hidden z-[115]">
              توانمندسازی و توسعه مهارت‌های پایدار در جهت گسترش کسب‌وکارهای بومی
              در مناطق محروم.
            </span>
            <div className="flex pt-[12px] pr-0 pb-0 pl-0 justify-between items-center self-stretch shrink-0 flex-nowrap relative z-[116]">
              <span className="flex w-[59px] h-[20px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[13px] font-normal leading-[20px] text-[#2094e3] relative text-right whitespace-nowrap z-[117]">
                مطالعه خبر
              </span>
              <span className="flex w-[176px] h-[19px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[12px] font-normal leading-[18.75px] text-[#60758a] relative text-right whitespace-nowrap z-[118]">
                ۴ دقیقه · پروژه: اشتغال زنان روستایی
              </span>
            </div>
          </div>
          <div className="flex pt-[24px] pr-[24px] pb-[24px] pl-[24px] flex-col gap-[16px] items-start flex-nowrap bg-[#fff] rounded-[24px] border-solid border border-[#e4ebf1] relative z-[119]">
            <div className="h-[180px] self-stretch shrink-0 bg-[url(https://static.codia.ai/image/2026-08-24/wCwyJZSkDZ.png)] bg-cover bg-no-repeat rounded-[16px] relative z-[120]" />
            <div className="flex justify-between items-center self-stretch shrink-0 flex-nowrap relative z-[121]">
              <span className="flex w-[64px] h-[19px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[12px] font-normal leading-[18.75px] text-[#60758a] relative text-right whitespace-nowrap z-[122]">
                ۱۸ مرداد ۱۴۰۵
              </span>
            </div>
            <span className="h-[25px] self-stretch shrink-0 basis-auto font-['Vazirmatn'] text-[16px] font-bold leading-[25px] text-[#17324d] relative text-right overflow-hidden whitespace-nowrap z-[123]">
              گزارش مرحله‌ای پروژه سلامت خانواده منتشر شد
            </span>
            <span className="flex w-[336px] h-[40px] justify-end items-start self-stretch shrink-0 font-['Vazirmatn'] text-[13px] font-normal leading-[20.313px] text-[#60758a] relative text-right overflow-hidden z-[124]">
              نتایج فاز اول ارزیابی‌های دوره‌ای و بهبود دسترسی درمانی اهالی
              روستاهای محروم.
            </span>
            <div className="flex pt-[12px] pr-0 pb-0 pl-0 justify-between items-center self-stretch shrink-0 flex-nowrap relative z-[125]">
              <span className="flex w-[59px] h-[20px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[13px] font-normal leading-[20px] text-[#2094e3] relative text-right whitespace-nowrap z-[126]">
                مطالعه خبر
              </span>
              <span className="flex w-[149px] h-[19px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[12px] font-normal leading-[18.75px] text-[#60758a] relative text-right whitespace-nowrap z-[127]">
                ۵ دقیقه · پروژه: سلامت خانواده
              </span>
            </div>
          </div>
          <div className="flex pt-[24px] pr-[24px] pb-[24px] pl-[24px] flex-col gap-[16px] items-start flex-nowrap bg-[#fff] rounded-[24px] border-solid border border-[#e4ebf1] relative z-[128]">
            <div className="h-[180px] self-stretch shrink-0 bg-[url(https://static.codia.ai/image/2026-08-24/YY789eM6Jw.png)] bg-cover bg-no-repeat rounded-[16px] relative z-[129]" />
            <div className="flex justify-between items-center self-stretch shrink-0 flex-nowrap relative z-[130]">
              <span className="flex w-[64px] h-[19px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[12px] font-normal leading-[18.75px] text-[#60758a] relative text-right whitespace-nowrap z-[131]">
                ۱۵ مرداد ۱۴۰۵
              </span>
            </div>
            <span className="flex w-[336px] h-[50px] justify-end items-start self-stretch shrink-0 font-['Vazirmatn'] text-[16px] font-bold leading-[25px] text-[#17324d] relative text-right overflow-hidden z-[132]">
              راهکار سبز از عبور تعداد بهره‌مندان خود از ۲٬۸۰۰ نفر خبر داد
            </span>
            <span className="flex w-[336px] h-[40px] justify-end items-start self-stretch shrink-0 font-['Vazirmatn'] text-[13px] font-normal leading-[20.313px] text-[#60758a] relative text-right overflow-hidden z-[133]">
              رکورد جدید مشارکت‌های مردمی در طرح پایدار تامین انرژی پاک مناطق
              دورافتاده.
            </span>
            <div className="flex pt-[12px] pr-0 pb-0 pl-0 justify-between items-center self-stretch shrink-0 flex-nowrap relative z-[134]">
              <span className="flex w-[59px] h-[20px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[13px] font-normal leading-[20px] text-[#2094e3] relative text-right whitespace-nowrap z-[135]">
                مطالعه خبر
              </span>
              <span className="flex w-[146px] h-[19px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[12px] font-normal leading-[18.75px] text-[#60758a] relative text-right whitespace-nowrap z-[136]">
                ۳ دقیقه · استارتاپ: راهکار سبز
              </span>
            </div>
          </div>
        </div>
        <div className="self-stretch shrink-0 relative z-[137]">
          <div className="flex pt-[24px] pr-[24px] pb-[24px] pl-[24px] flex-col gap-[16px] items-start flex-nowrap bg-[#fff] rounded-[24px] border-solid border border-[#e4ebf1] relative z-[138]">
            <div className="h-[180px] self-stretch shrink-0 bg-[url(https://static.codia.ai/image/2026-08-24/L2Utt8jypF.png)] bg-cover bg-no-repeat rounded-[16px] relative z-[139]" />
            <div className="flex justify-between items-center self-stretch shrink-0 flex-nowrap relative z-[140]">
              <span className="flex w-[64px] h-[19px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[12px] font-normal leading-[18.75px] text-[#60758a] relative text-right whitespace-nowrap z-[141]">
                ۱۲ مرداد ۱۴۰۵
              </span>
            </div>
            <span className="flex w-[336px] h-[50px] justify-end items-start self-stretch shrink-0 font-['Vazirmatn'] text-[16px] font-bold leading-[25px] text-[#17324d] relative text-right overflow-hidden z-[142]">
              توزیع تجهیزات پروژه زنجیره تأمین مشاغل خانگی آغاز شد
            </span>
            <span className="flex w-[336px] h-[40px] justify-end items-start self-stretch shrink-0 font-['Vazirmatn'] text-[13px] font-normal leading-[20.313px] text-[#60758a] relative text-right overflow-hidden z-[143]">
              فاز جدید تدارکات و ابزارآلات کارگاهی به جهت ارتقای بهره‌وری
              کارگاه‌های کوچک.
            </span>
            <div className="flex pt-[12px] pr-0 pb-0 pl-0 justify-between items-center self-stretch shrink-0 flex-nowrap relative z-[144]">
              <span className="flex w-[59px] h-[20px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[13px] font-normal leading-[20px] text-[#2094e3] relative text-right whitespace-nowrap z-[145]">
                مطالعه خبر
              </span>
              <span className="flex w-[143px] h-[19px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[12px] font-normal leading-[18.75px] text-[#60758a] relative text-right whitespace-nowrap z-[146]">
                ۴ دقیقه · پروژه: مشاغل خانگی
              </span>
            </div>
          </div>
          <div className="flex pt-[24px] pr-[24px] pb-[24px] pl-[24px] flex-col gap-[16px] items-start flex-nowrap bg-[#fff] rounded-[24px] border-solid border border-[#e4ebf1] relative z-[147]">
            <div className="h-[180px] self-stretch shrink-0 bg-[url(https://static.codia.ai/image/2026-08-24/5Ktd9HJDg6.png)] bg-cover bg-no-repeat rounded-[16px] relative z-[148]" />
            <div className="flex justify-between items-center self-stretch shrink-0 flex-nowrap relative z-[149]">
              <span className="flex w-[61px] h-[19px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[12px] font-normal leading-[18.75px] text-[#60758a] relative text-right whitespace-nowrap z-[150]">
                ۸ مرداد ۱۴۰۵
              </span>
            </div>
            <span className="flex w-[336px] h-[50px] justify-end items-start self-stretch shrink-0 font-['Vazirmatn'] text-[16px] font-bold leading-[25px] text-[#17324d] relative text-right overflow-hidden z-[151]">
              نشست سنجش اثر اجتماعی استارتاپ‌های منتخب برگزار شد
            </span>
            <span className="flex w-[336px] h-[40px] justify-end items-start self-stretch shrink-0 font-['Vazirmatn'] text-[13px] font-normal leading-[20.313px] text-[#60758a] relative text-right overflow-hidden z-[152]">
              هم‌اندیشی پیرامون روش‌های بهبود گزارش‌گیری و شفافیت آماری
              پروژه‌های حمایتی.
            </span>
            <div className="flex pt-[12px] pr-0 pb-0 pl-0 justify-between items-center self-stretch shrink-0 flex-nowrap relative z-[153]">
              <span className="flex w-[59px] h-[20px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[13px] font-normal leading-[20px] text-[#2094e3] relative text-right whitespace-nowrap z-[154]">
                مطالعه خبر
              </span>
              <span className="flex w-[88px] h-[19px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[12px] font-normal leading-[18.75px] text-[#60758a] relative text-right whitespace-nowrap z-[155]">
                ۳ دقیقه · رویدادها
              </span>
            </div>
          </div>
          <div className="flex pt-[24px] pr-[24px] pb-[24px] pl-[24px] flex-col gap-[16px] items-start flex-nowrap bg-[#fff] rounded-[24px] border-solid border border-[#e4ebf1] relative z-[156]">
            <div className="h-[180px] self-stretch shrink-0 bg-[url(https://static.codia.ai/image/2026-08-24/h8yiSSj8u9.png)] bg-cover bg-no-repeat rounded-[16px] relative z-[157]" />
            <div className="flex justify-between items-center self-stretch shrink-0 flex-nowrap relative z-[158]">
              <span className="flex w-[61px] h-[19px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[12px] font-normal leading-[18.75px] text-[#60758a] relative text-right whitespace-nowrap z-[159]">
                ۵ مرداد ۱۴۰۵
              </span>
            </div>
            <span className="flex w-[336px] h-[50px] justify-end items-start self-stretch shrink-0 font-['Vazirmatn'] text-[16px] font-bold leading-[25px] text-[#17324d] relative text-right overflow-hidden z-[160]">
              مهلت تکمیل اطلاعات استارتاپ‌های متقاضی تمدید شد
            </span>
            <span className="flex w-[336px] h-[40px] justify-end items-start self-stretch shrink-0 font-['Vazirmatn'] text-[13px] font-normal leading-[20.313px] text-[#60758a] relative text-right overflow-hidden z-[161]">
              پیرو درخواست مکرر طراحان پروژه، آخرین مهلت ارسال اسناد ارزیابی تا
              انتهای مرداد تمدید شد.
            </span>
            <div className="flex pt-[12px] pr-0 pb-0 pl-0 justify-between items-center self-stretch shrink-0 flex-nowrap relative z-[162]">
              <span className="flex w-[59px] h-[20px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[13px] font-normal leading-[20px] text-[#2094e3] relative text-right whitespace-nowrap z-[163]">
                مطالعه خبر
              </span>
              <span className="flex w-[82px] h-[19px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[12px] font-normal leading-[18.75px] text-[#60758a] relative text-right whitespace-nowrap z-[164]">
                ۲ دقیقه · اطلاعیه
              </span>
            </div>
          </div>
        </div>
        <div className="flex pt-[32px] pr-[32px] pb-[32px] pl-[32px] justify-between items-center self-stretch shrink-0 flex-nowrap bg-[#eaf5fd] rounded-[16px] border-solid border border-[#e4ebf1] relative z-[165]">
          <div className="flex w-[324px] gap-[12px] items-start shrink-0 flex-nowrap relative z-[166]">
            <div className="flex w-[145px] pt-[11px] pr-[20px] pb-[11px] pl-[20px] gap-[8px] justify-center items-center shrink-0 flex-nowrap bg-[#fff] rounded-[12px] border-solid border border-[#e4ebf1] relative z-[167]">
              <span className="flex w-[105px] h-[22px] justify-center items-start shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-medium leading-[22px] text-[#2094e3] relative text-center whitespace-nowrap z-[168]">
                مرور اثر سامانه ماه
              </span>
            </div>
            <div className="flex w-[167px] pt-[11px] pr-[20px] pb-[11px] pl-[20px] gap-[8px] justify-center items-center shrink-0 flex-nowrap bg-[#2094e3] rounded-[12px] relative z-[169]">
              <span className="flex w-[127px] h-[22px] justify-center items-start shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-medium leading-[22px] text-[#fff] relative text-center whitespace-nowrap z-[170]">
                مشاهده گزارش‌های اثر
              </span>
            </div>
          </div>
          <div className="flex w-[523px] flex-col gap-[6px] items-end shrink-0 flex-nowrap relative z-[171]">
            <span className="flex w-[266px] h-[28px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[18px] font-bold leading-[28px] text-[#17324d] relative text-right whitespace-nowrap z-[172]">
              گزارش‌های اثر تأییدشده را یکجا ببینید
            </span>
            <span className="flex w-[523px] h-[22px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-normal leading-[21.875px] text-[#60758a] relative text-right whitespace-nowrap z-[173]">
              گزارش‌های عمومی پروژه‌ها شامل میزان تحقق KPI، نتایج اجتماعی و
              آخرین وضعیت اجرا هستند.
            </span>
          </div>
        </div>
        <div className="self-stretch shrink-0 relative z-[174]">
          <div className="flex pt-[24px] pr-[24px] pb-[24px] pl-[24px] flex-col gap-[16px] items-start flex-nowrap bg-[#fff] rounded-[24px] border-solid border border-[#e4ebf1] relative z-[175]">
            <div className="h-[180px] self-stretch shrink-0 bg-[url(https://static.codia.ai/image/2026-08-24/oEDB7rCrhY.png)] bg-cover bg-no-repeat rounded-[16px] relative z-[176]" />
            <div className="flex justify-between items-center self-stretch shrink-0 flex-nowrap relative z-[177]">
              <span className="flex w-[56px] h-[19px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[12px] font-normal leading-[18.75px] text-[#60758a] relative text-right whitespace-nowrap z-[178]">
                ۲۸ تیر ۱۴۰۵
              </span>
            </div>
            <span className="flex w-[336px] h-[50px] justify-end items-start self-stretch shrink-0 font-['Vazirmatn'] text-[16px] font-bold leading-[25px] text-[#17324d] relative text-right overflow-hidden z-[179]">
              نتایج نهایی پروژه توسعه فروش صنایع‌دستی منتشر شد
            </span>
            <span className="flex w-[336px] h-[40px] justify-end items-start self-stretch shrink-0 font-['Vazirmatn'] text-[13px] font-normal leading-[20.313px] text-[#60758a] relative text-right overflow-hidden z-[180]">
              رشد ۲۵ درصدی درآمد پایدار با راه‌اندازی درگاه فروش مستقیم و حذف
              واسطه‌های تجاری.
            </span>
            <div className="flex pt-[12px] pr-0 pb-0 pl-0 justify-between items-center self-stretch shrink-0 flex-nowrap relative z-[181]">
              <span className="flex w-[59px] h-[20px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[13px] font-normal leading-[20px] text-[#2094e3] relative text-right whitespace-nowrap z-[182]">
                مطالعه خبر
              </span>
              <span className="flex w-[132px] h-[19px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[12px] font-normal leading-[18.75px] text-[#60758a] relative text-right whitespace-nowrap z-[183]">
                ۶ دقیقه · پروژه: صنایع‌دستی
              </span>
            </div>
          </div>
          <div className="flex pt-[24px] pr-[24px] pb-[24px] pl-[24px] flex-col gap-[16px] items-start flex-nowrap bg-[#fff] rounded-[24px] border-solid border border-[#e4ebf1] relative z-[184]">
            <div className="h-[180px] self-stretch shrink-0 bg-[url(https://static.codia.ai/image/2026-08-24/GOoSnvPO1B.png)] bg-cover bg-no-repeat rounded-[16px] relative z-[185]" />
            <div className="flex justify-between items-center self-stretch shrink-0 flex-nowrap relative z-[186]">
              <span className="flex w-[56px] h-[19px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[12px] font-normal leading-[18.75px] text-[#60758a] relative text-right whitespace-nowrap z-[187]">
                ۲۴ تیر ۱۴۰۵
              </span>
            </div>
            <span className="flex w-[336px] h-[50px] justify-end items-start self-stretch shrink-0 font-['Vazirmatn'] text-[16px] font-bold leading-[25px] text-[#17324d] relative text-right overflow-hidden z-[188]">
              امکان پیگیری مشارکت‌های فردی در سامانه ماه فعال شد
            </span>
            <span className="flex w-[336px] h-[40px] justify-end items-start self-stretch shrink-0 font-['Vazirmatn'] text-[13px] font-normal leading-[20.313px] text-[#60758a] relative text-right overflow-hidden z-[189]">
              با دریافت شناسه پیگیری پیامکی، تمامی مراحل تخصیص بودجه و تحقق اثر
              را رصد کنید.
            </span>
            <div className="flex pt-[12px] pr-0 pb-0 pl-0 justify-between items-center self-stretch shrink-0 flex-nowrap relative z-[190]">
              <span className="flex w-[59px] h-[20px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[13px] font-normal leading-[20px] text-[#2094e3] relative text-right whitespace-nowrap z-[191]">
                مطالعه خبر
              </span>
              <span className="flex w-[106px] h-[19px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[12px] font-normal leading-[18.75px] text-[#60758a] relative text-right whitespace-nowrap z-[192]">
                ۳ دقیقه · اخبار سامانه
              </span>
            </div>
          </div>
          <div className="flex pt-[24px] pr-[24px] pb-[24px] pl-[24px] flex-col gap-[16px] items-start flex-nowrap bg-[#fff] rounded-[24px] border-solid border border-[#e4ebf1] relative z-[193]">
            <div className="h-[180px] self-stretch shrink-0 bg-[url(https://static.codia.ai/image/2026-08-24/hPRePRtVCC.png)] bg-cover bg-no-repeat rounded-[16px] relative z-[194]" />
            <div className="flex justify-between items-center self-stretch shrink-0 flex-nowrap relative z-[195]">
              <span className="flex w-[54px] h-[19px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[12px] font-normal leading-[18.75px] text-[#60758a] relative text-right whitespace-nowrap z-[196]">
                ۲۰ تیر ۱۴۰۵
              </span>
            </div>
            <span className="flex w-[336px] h-[50px] justify-end items-start self-stretch shrink-0 font-['Vazirmatn'] text-[16px] font-bold leading-[25px] text-[#17324d] relative text-right overflow-hidden z-[197]">
              استارتاپ مهارت‌نو به جمع مجریان تأییدشده سامانه ماه پیوست
            </span>
            <span className="flex w-[336px] h-[40px] justify-end items-start self-stretch shrink-0 font-['Vazirmatn'] text-[13px] font-normal leading-[20.313px] text-[#60758a] relative text-right overflow-hidden z-[198]">
              شروع برنامه مشترک آموزش فنی و حرفه‌ای دیجیتال برای نوجوانان و
              مستعدان اشتغال.
            </span>
            <div className="flex pt-[12px] pr-0 pb-0 pl-0 justify-between items-center self-stretch shrink-0 flex-nowrap relative z-[199]">
              <span className="flex w-[59px] h-[20px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[13px] font-normal leading-[20px] text-[#2094e3] relative text-right whitespace-nowrap z-[200]">
                مطالعه خبر
              </span>
              <span className="flex w-[134px] h-[19px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[12px] font-normal leading-[18.75px] text-[#60758a] relative text-right whitespace-nowrap z-[201]">
                ۳ دقیقه · استارتاپ: مهارت‌نو
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="flex pt-[80px] pr-[120px] pb-[80px] pl-[120px] flex-col gap-[24px] items-center self-stretch shrink-0 flex-nowrap bg-[#fcfbf8] border-solid border-t border-t-[#e4ebf1] border-solid border-b border-b-[#e4ebf1] relative z-[202]">
        <span className="h-[44px] self-stretch shrink-0 basis-auto font-['Vazirmatn'] text-[28px] font-extrabold leading-[43.75px] text-[#17324d] relative text-center whitespace-nowrap z-[203]">
          اثر اجتماعی را در پروژه‌های واقعی دنبال کنید
        </span>
        <span className="h-[23px] self-stretch shrink-0 basis-auto font-['Vazirmatn'] text-[15px] font-normal leading-[23px] text-[#60758a] relative text-center whitespace-nowrap z-[204]">
          پروژه‌های تأییدشده، شاخص‌های اثر و گزارش‌های اجرای آن‌ها را بررسی
          کنید.
        </span>
        <div className="flex w-[278px] gap-[16px] justify-center items-start shrink-0 flex-nowrap relative z-[205]">
          <div className="flex w-[130px] pt-[11px] pr-[20px] pb-[11px] pl-[20px] gap-[8px] justify-center items-center shrink-0 flex-nowrap bg-[#fff] rounded-[12px] border-solid border border-[#e4ebf1] relative z-[206]">
            <span className="flex w-[90px] h-[22px] justify-center items-start shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-medium leading-[22px] text-[#2094e3] relative text-center whitespace-nowrap z-[207]">
              مرور استارتاپ‌ها
            </span>
          </div>
          <div className="flex w-[132px] pt-[11px] pr-[20px] pb-[11px] pl-[20px] gap-[8px] justify-center items-center shrink-0 flex-nowrap bg-[#2094e3] rounded-[12px] relative z-[208]">
            <span className="flex w-[92px] h-[22px] justify-center items-start shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-medium leading-[22px] text-[#fff] relative text-center whitespace-nowrap z-[209]">
              مشاهده پروژه‌ها
            </span>
          </div>
        </div>
      </div>
      <div className="flex pt-[80px] pr-[120px] pb-[40px] pl-[120px] flex-col gap-[64px] items-start self-stretch shrink-0 flex-nowrap bg-[#111e30] relative z-[210]">
        <div className="flex gap-[48px] items-start self-stretch shrink-0 flex-nowrap relative z-[211]">
          <div className="flex w-[220px] h-[182px] flex-col gap-[12px] items-end shrink-0 flex-nowrap relative z-[212]">
            <span className="flex w-[59px] h-[22px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-bold leading-[21.875px] text-[#fff] relative text-right whitespace-nowrap z-[213]">
              ارتباط با ما
            </span>
            <span className="flex w-[115px] h-[20px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[13px] font-normal leading-[20px] text-[#e4ebf1] relative text-right whitespace-nowrap z-[214]">
              تلفن: ۰۲۱-۸۸۸۸۸۸۸۸
            </span>
            <span className="flex w-[156px] h-[20px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[13px] font-normal leading-[20px] text-[#e4ebf1] relative text-right whitespace-nowrap z-[215]">
              ایمیل: info@mahplatform.ir
            </span>
            <div className="flex w-[48px] pt-[8px] pr-0 pb-0 pl-0 gap-[12px] items-center shrink-0 flex-nowrap relative z-[216]">
              <div className="flex w-[18px] h-[18px] flex-col justify-center items-center shrink-0 flex-nowrap relative overflow-hidden z-[217]">
                <div className="w-[18px] h-[18px] shrink-0 bg-[url(https://static.codia.ai/image/2026-08-24/c51yaBzWSO.png)] bg-cover bg-no-repeat relative overflow-hidden z-[218]" />
              </div>
              <div className="flex w-[18px] h-[18px] flex-col justify-center items-center shrink-0 flex-nowrap relative overflow-hidden z-[219]">
                <div className="w-[18px] h-[18px] shrink-0 bg-[url(https://static.codia.ai/image/2026-08-24/8QUHNMJOeF.png)] bg-cover bg-no-repeat relative overflow-hidden z-[220]" />
              </div>
            </div>
          </div>
          <div className="flex w-[150px] h-[182px] flex-col gap-[12px] items-end shrink-0 flex-nowrap relative z-[221]">
            <span className="flex w-[39px] h-[22px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-bold leading-[21.875px] text-[#fff] relative text-right whitespace-nowrap z-[222]">
              حقوقی
            </span>
            <span className="flex w-[82px] h-[20px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[13px] font-normal leading-[20px] text-[#e4ebf1] relative text-right whitespace-nowrap z-[223]">
              قوانین و مقررات
            </span>
            <span className="flex w-[75px] h-[20px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[13px] font-normal leading-[20px] text-[#e4ebf1] relative text-right whitespace-nowrap z-[224]">
              حریم خصوصی
            </span>
          </div>
          <div className="flex w-[160px] h-[182px] flex-col gap-[12px] items-end shrink-0 flex-nowrap relative z-[225]">
            <span className="flex w-[49px] h-[22px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-bold leading-[21.875px] text-[#fff] relative text-right whitespace-nowrap z-[226]">
              پشتیبانی
            </span>
            <span className="flex w-[55px] h-[20px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[13px] font-normal leading-[20px] text-[#e4ebf1] relative text-right whitespace-nowrap z-[227]">
              تماس با ما
            </span>
            <span className="flex w-[77px] h-[20px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[13px] font-normal leading-[20px] text-[#e4ebf1] relative text-right whitespace-nowrap z-[228]">
              سؤالات متداول
            </span>
            <span className="flex w-[82px] h-[20px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[13px] font-normal leading-[20px] text-[#e4ebf1] relative text-right whitespace-nowrap z-[229]">
              پیگیری مشارکت
            </span>
          </div>
          <div className="flex w-[180px] flex-col gap-[12px] items-end shrink-0 flex-nowrap relative z-[230]">
            <span className="flex w-[83px] h-[22px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-bold leading-[21.875px] text-[#fff] relative text-right whitespace-nowrap z-[231]">
              دسترسی سریع
            </span>
            <span className="flex w-[38px] h-[20px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[13px] font-normal leading-[20px] text-[#e4ebf1] relative text-right whitespace-nowrap z-[232]">
              پروژه‌ها
            </span>
            <span className="flex w-[69px] h-[20px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[13px] font-normal leading-[20px] text-[#e4ebf1] relative text-right whitespace-nowrap z-[233]">
              برای شرکت‌ها
            </span>
            <span className="flex w-[71px] h-[20px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[13px] font-normal leading-[20px] text-[#e4ebf1] relative text-right whitespace-nowrap z-[234]">
              نحوه مشارکت
            </span>
            <span className="flex w-[84px] h-[20px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[13px] font-normal leading-[20px] text-[#e4ebf1] relative text-right whitespace-nowrap z-[235]">
              ثبت‌نام استارتاپ
            </span>
            <span className="flex w-[80px] h-[20px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[13px] font-normal leading-[20px] text-[#e4ebf1] relative text-right whitespace-nowrap z-[236]">
              اخبار و رویدادها
            </span>
          </div>
          <div className="flex w-[298px] h-[182px] flex-col gap-[14px] items-end shrink-0 flex-nowrap relative z-[237]">
            <div className="w-[210px] h-[70px] shrink-0 bg-[url(https://static.codia.ai/image/2026-08-24/WoNJrxQgVE.png)] bg-cover bg-no-repeat relative z-[238]" />
            <span className="flex w-[298px] h-[44px] justify-end items-start self-stretch shrink-0 font-['Vazirmatn'] text-[13px] font-normal leading-[22px] text-[#e4ebf1] relative text-right z-[239]">
              سامانه مشارکت در پروژه‌های اثر اجتماعی با مسیر مالی شفاف و اثر
              قابل‌اندازه‌گیری.
            </span>
          </div>
        </div>
        <div className="flex pt-[20px] pr-0 pb-0 pl-0 flex-col gap-[4px] items-center self-stretch shrink-0 flex-nowrap border-solid border-b border-b-[rgba(255,255,255,0.12)] relative z-[240]">
          <span className="flex w-[219px] h-[19px] justify-center items-start shrink-0 basis-auto font-['Vazirmatn'] text-[12px] font-normal leading-[18.75px] text-[#e4ebf1] relative text-center whitespace-nowrap z-[241]">
            طراحی و توسعه با هدف ارتقای عدالت اجتماعی
          </span>
          <span className="flex w-[203px] h-[19px] justify-center items-start shrink-0 basis-auto font-['Vazirmatn'] text-[12px] font-normal leading-[18.75px] text-[#e4ebf1] relative text-center whitespace-nowrap z-[242]">
            تمامی حقوق برای سامانه ماه محفوظ است.
          </span>
        </div>
      </div>
    </div>
  );
}
