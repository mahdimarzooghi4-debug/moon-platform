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
          <div className="w-[137px] h-[46px] shrink-0 bg-[url(https://static.codia.ai/image/2026-08-24/fZygfL8i8J.png)] bg-cover bg-no-repeat relative z-[16]" />
        </div>
      </div>
      <div className="flex pt-[48px] pr-[120px] pb-[40px] pl-[120px] flex-col gap-[24px] items-start self-stretch shrink-0 flex-nowrap bg-[#fcfbf8] relative z-[17]">
        <div className="flex justify-end items-start self-stretch shrink-0 flex-nowrap relative z-[18]">
          <span className="flex w-[258px] h-[20px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[13px] font-normal leading-[20px] text-[#60758a] relative text-right whitespace-nowrap z-[19]">
            صفحه اصلی / اخبار / گزارش اثر اجتماعی سال ۱۴۰۴
          </span>
        </div>
        <div className="flex flex-col gap-[20px] items-center self-stretch shrink-0 flex-nowrap relative z-20">
          <span className="flex w-[850px] h-[48px] justify-center items-start shrink-0 basis-auto font-['Vazirmatn'] text-[32px] font-extrabold leading-[48px] text-[#17324d] relative text-center whitespace-nowrap z-[21]">
            گزارش اثر اجتماعی سامانه ماه در سال ۱۴۰۴ منتشر شد
          </span>
          <span className="flex w-[800px] h-[52px] justify-center items-start shrink-0 font-['Vazirmatn'] text-[15px] font-normal leading-[26px] text-[#60758a] relative text-center z-[22]">
            این گزارش، نتایج پروژه‌های تأییدشده سامانه ماه در حوزه‌های اشتغال،
            آموزش، سلامت و معیشت پایدار را براساس داده‌های ثبت‌شده و گزارش‌های
            مورد تأیید خانه خلاق ارائه می‌کند.
          </span>
          <div className="flex pt-[12px] pr-0 pb-[12px] pl-0 gap-[16px] justify-center items-center self-stretch shrink-0 flex-nowrap relative z-[23]">
            <span className="flex w-[145px] h-[20px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[13px] font-normal leading-[20px] text-[#60758a] relative text-right whitespace-nowrap z-[24]">
              نویسنده: تحریریه سامانه ماه
            </span>
            <div className="flex w-[16px] h-[16px] items-start shrink-0 flex-nowrap bg-[#2094e3] rounded-[8px] relative z-[25]">
              <div className="w-[10px] h-[10px] shrink-0 bg-[url(https://static.codia.ai/image/2026-08-24/Kf1YCCzq7z.png)] bg-cover bg-no-repeat absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] overflow-hidden z-[26]" />
            </div>
            <span className="h-[20px] shrink-0 basis-auto font-['Vazirmatn'] text-[13px] font-normal leading-[20px] text-[#60758a] relative text-left whitespace-nowrap z-[27]">
              |
            </span>
            <span className="flex w-[111px] h-[20px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[13px] font-normal leading-[20px] text-[#60758a] relative text-right whitespace-nowrap z-[28]">
              زمان مطالعه: ۶ دقیقه
            </span>
            <span className="h-[20px] shrink-0 basis-auto font-['Vazirmatn'] text-[13px] font-normal leading-[20px] text-[#60758a] relative text-left whitespace-nowrap z-[29]">
              |
            </span>
            <span className="flex w-[168px] h-[20px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[13px] font-normal leading-[20px] text-[#60758a] relative text-right whitespace-nowrap z-30">
              آخرین به‌روزرسانی: ۲۸ مرداد ۱۴۰۵
            </span>
            <span className="h-[20px] shrink-0 basis-auto font-['Vazirmatn'] text-[13px] font-normal leading-[20px] text-[#60758a] relative text-left whitespace-nowrap z-[31]">
              |
            </span>
            <span className="flex w-[139px] h-[20px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[13px] font-normal leading-[20px] text-[#60758a] relative text-right whitespace-nowrap z-[32]">
              تاریخ انتشار: ۲۵ مرداد ۱۴۰۵
            </span>
          </div>
          <div className="flex w-[381px] gap-[12px] justify-center items-start shrink-0 flex-nowrap relative z-[33]">
            <div className="flex w-[121px] pt-[8px] pr-[16px] pb-[8px] pl-[16px] gap-[6px] items-center shrink-0 flex-nowrap bg-[#fff] rounded-[8px] border-solid border border-[#e4ebf1] relative z-[34]">
              <span className="flex w-[69px] h-[20px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[13px] font-normal leading-[20px] text-[#60758a] relative text-right whitespace-nowrap z-[35]">
                گزارش مشکل
              </span>
              <div className="w-[14px] h-[14px] shrink-0 bg-[url(https://static.codia.ai/image/2026-08-24/Ghdm27dcfK.png)] bg-cover bg-no-repeat relative overflow-hidden z-[36]" />
            </div>
            <div className="flex w-[118px] pt-[8px] pr-[16px] pb-[8px] pl-[16px] gap-[6px] items-center shrink-0 flex-nowrap bg-[#fff] rounded-[8px] border-solid border border-[#e4ebf1] relative z-[37]">
              <span className="flex w-[66px] h-[20px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[13px] font-normal leading-[20px] text-[#60758a] relative text-right whitespace-nowrap z-[38]">
                ذخیره مطلب
              </span>
              <div className="w-[14px] h-[14px] shrink-0 bg-[url(https://static.codia.ai/image/2026-08-24/v9sZZqXRg6.png)] bg-cover bg-no-repeat relative overflow-hidden z-[39]" />
            </div>
            <div className="flex w-[118px] pt-[8px] pr-[16px] pb-[8px] pl-[16px] gap-[6px] items-center shrink-0 flex-nowrap bg-[#fff] rounded-[8px] border-solid border border-[#e4ebf1] relative z-40">
              <span className="flex w-[66px] h-[20px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[13px] font-normal leading-[20px] text-[#60758a] relative text-right whitespace-nowrap z-[41]">
                اشتراک‌گذاری
              </span>
              <div className="w-[14px] h-[14px] shrink-0 bg-[url(https://static.codia.ai/image/2026-08-24/nyWpVfVC94.png)] bg-cover bg-no-repeat relative overflow-hidden z-[42]" />
            </div>
          </div>
        </div>
      </div>
      <div className="flex pt-0 pr-[120px] pb-[48px] pl-[120px] flex-col gap-[12px] items-center self-stretch shrink-0 flex-nowrap relative z-[43]">
        <div className="w-[1200px] h-[500px] shrink-0 bg-[url(https://static.codia.ai/image/2026-08-24/pVnLaDmDZ7.png)] bg-cover bg-no-repeat rounded-[16px] relative z-[44]" />
        <span className="h-[20px] self-stretch shrink-0 basis-auto font-['Vazirmatn'] text-[13px] font-normal leading-[20px] text-[#60758a] relative text-center whitespace-nowrap z-[45]">
          بررسی داده‌های پروژه‌های تأییدشده سامانه ماه — تابستان ۱۴۰۵
        </span>
      </div>
      <div className="flex pt-0 pr-[120px] pb-[80px] pl-[120px] gap-[32px] justify-end items-start self-stretch shrink-0 flex-nowrap relative z-[46]">
        <div className="flex w-[350px] flex-col gap-[24px] items-start shrink-0 flex-nowrap relative z-[47]">
          <div className="flex pt-[24px] pr-[24px] pb-[24px] pl-[24px] flex-col gap-[16px] items-start self-stretch shrink-0 flex-nowrap bg-[#fff] rounded-[20px] border-solid border border-[#e4ebf1] relative z-[48]">
            <span className="h-[25px] self-stretch shrink-0 basis-auto font-['Vazirmatn'] text-[16px] font-bold leading-[25px] text-[#17324d] relative text-right whitespace-nowrap z-[49]">
              در این مطلب
            </span>
            <div className="flex h-px items-start self-stretch shrink-0 flex-nowrap bg-[#e4ebf1] relative z-50" />
            <div className="flex flex-col gap-[12px] items-start self-stretch shrink-0 flex-nowrap relative z-[51]">
              <div className="flex gap-[8px] justify-end items-center self-stretch shrink-0 flex-nowrap relative z-[52]">
                <span className="h-[22px] grow shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-bold leading-[21.875px] text-[#2094e3] relative text-right whitespace-nowrap z-[53]">
                  خلاصه گزارش
                </span>
                <div className="w-[3px] h-[16px] shrink-0 bg-[#2094e3] rounded-[1.5px] relative z-[54]" />
              </div>
              <div className="flex pt-0 pr-[8px] pb-0 pl-0 gap-[8px] justify-end items-center self-stretch shrink-0 flex-nowrap relative z-[55]">
                <span className="h-[22px] grow shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-normal leading-[21.875px] text-[#60758a] relative text-right whitespace-nowrap z-[56]">
                  شاخص‌های کلیدی
                </span>
              </div>
              <div className="flex pt-0 pr-[8px] pb-0 pl-0 gap-[8px] justify-end items-center self-stretch shrink-0 flex-nowrap relative z-[57]">
                <span className="h-[22px] grow shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-normal leading-[21.875px] text-[#60758a] relative text-right whitespace-nowrap z-[58]">
                  اشتغال و درآمد
                </span>
              </div>
              <div className="flex pt-0 pr-[8px] pb-0 pl-0 gap-[8px] justify-end items-center self-stretch shrink-0 flex-nowrap relative z-[59]">
                <span className="h-[22px] grow shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-normal leading-[21.875px] text-[#60758a] relative text-right whitespace-nowrap z-[60]">
                  آموزش و توانمندسازی
                </span>
              </div>
              <div className="flex pt-0 pr-[8px] pb-0 pl-0 gap-[8px] justify-end items-center self-stretch shrink-0 flex-nowrap relative z-[61]">
                <span className="h-[22px] grow shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-normal leading-[21.875px] text-[#60758a] relative text-right whitespace-nowrap z-[62]">
                  سلامت خانواده‌ها
                </span>
              </div>
              <div className="flex pt-0 pr-[8px] pb-0 pl-0 gap-[8px] justify-end items-center self-stretch shrink-0 flex-nowrap relative z-[63]">
                <span className="h-[22px] grow shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-normal leading-[21.875px] text-[#60758a] relative text-right whitespace-nowrap z-[64]">
                  شفافیت منابع مالی
                </span>
              </div>
              <div className="flex pt-0 pr-[8px] pb-0 pl-0 gap-[8px] justify-end items-center self-stretch shrink-0 flex-nowrap relative z-[65]">
                <span className="h-[22px] grow shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-normal leading-[21.875px] text-[#60758a] relative text-right whitespace-nowrap z-[66]">
                  روش محاسبه آمار
                </span>
              </div>
              <div className="flex pt-0 pr-[8px] pb-0 pl-0 gap-[8px] justify-end items-center self-stretch shrink-0 flex-nowrap relative z-[67]">
                <span className="h-[22px] grow shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-normal leading-[21.875px] text-[#60758a] relative text-right whitespace-nowrap z-[68]">
                  فایل‌های مرتبط
                </span>
              </div>
            </div>
          </div>
          <div className="flex pt-[20px] pr-[20px] pb-[20px] pl-[20px] flex-col gap-[12px] items-start self-stretch shrink-0 flex-nowrap bg-[#fff] rounded-[16px] border-solid border border-[#e4ebf1] relative z-[69]">
            <div className="flex pt-0 pr-0 pb-[8px] pl-0 justify-between items-start self-stretch shrink-0 flex-nowrap border-solid border-t border-t-[#e4ebf1] relative z-[70]">
              <span className="flex w-[49px] h-[20px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[13px] font-medium leading-[20px] text-[#17324d] relative text-right whitespace-nowrap z-[71]">
                گزارش اثر
              </span>
              <span className="flex w-[53px] h-[20px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[13px] font-normal leading-[20px] text-[#60758a] relative text-right whitespace-nowrap z-[72]">
                دسته‌بندی
              </span>
            </div>
            <div className="flex pt-0 pr-0 pb-[8px] pl-0 justify-between items-start self-stretch shrink-0 flex-nowrap border-solid border-t border-t-[#e4ebf1] relative z-[73]">
              <span className="flex w-[74px] h-[20px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[13px] font-medium leading-[20px] text-[#17324d] relative text-right whitespace-nowrap z-[74]">
                ۲۵ مرداد ۱۴۰۵
              </span>
              <span className="flex w-[60px] h-[20px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[13px] font-normal leading-[20px] text-[#60758a] relative text-right whitespace-nowrap z-[75]">
                تاریخ انتشار
              </span>
            </div>
            <div className="flex pt-0 pr-0 pb-[8px] pl-0 justify-between items-start self-stretch shrink-0 flex-nowrap border-solid border-t border-t-[#e4ebf1] relative z-[76]">
              <span className="flex w-[74px] h-[20px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[13px] font-medium leading-[20px] text-[#17324d] relative text-right whitespace-nowrap z-[77]">
                ۲۸ مرداد ۱۴۰۵
              </span>
              <span className="flex w-[89px] h-[20px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[13px] font-normal leading-[20px] text-[#60758a] relative text-right whitespace-nowrap z-[78]">
                آخرین به‌روزرسانی
              </span>
            </div>
            <div className="flex pt-0 pr-0 pb-[8px] pl-0 justify-between items-start self-stretch shrink-0 flex-nowrap border-solid border-t border-t-[#e4ebf1] relative z-[79]">
              <span className="flex w-[41px] h-[20px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[13px] font-medium leading-[20px] text-[#17324d] relative text-right whitespace-nowrap z-[80]">
                ۶ دقیقه
              </span>
              <span className="flex w-[64px] h-[20px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[13px] font-normal leading-[20px] text-[#60758a] relative text-right whitespace-nowrap z-[81]">
                زمان مطالعه
              </span>
            </div>
            <div className="flex justify-between items-start self-stretch shrink-0 flex-nowrap relative z-[82]">
              <span className="flex w-[98px] h-[20px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[13px] font-medium leading-[20px] text-[#17324d] relative text-right whitespace-nowrap z-[83]">
                تحریریه سامانه ماه
              </span>
              <span className="flex w-[42px] h-[20px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[13px] font-normal leading-[20px] text-[#60758a] relative text-right whitespace-nowrap z-[84]">
                نویسنده
              </span>
            </div>
          </div>
          <div className="flex pt-[24px] pr-[24px] pb-[24px] pl-[24px] flex-col gap-[16px] items-start self-stretch shrink-0 flex-nowrap bg-[#fcfbf8] rounded-[20px] border-solid border border-[#e4ebf1] relative z-[85]">
            <span className="h-[25px] self-stretch shrink-0 basis-auto font-['Vazirmatn'] text-[16px] font-bold leading-[25px] text-[#17324d] relative text-right whitespace-nowrap z-[86]">
              گزارش‌های اثر بیشتری ببینید
            </span>
            <span className="flex w-[302px] h-[44px] justify-end items-start self-stretch shrink-0 font-['Vazirmatn'] text-[13px] font-normal leading-[22px] text-[#60758a] relative text-right z-[87]">
              تمامی گزارش‌های دوره‌ای و سالانه پروژه‌های اجتماعی به صورت عمومی
              در سامانه ماه منتشر می‌شود.
            </span>
            <div className="flex pt-[11px] pr-[20px] pb-[11px] pl-[20px] gap-[8px] justify-center items-center self-stretch shrink-0 flex-nowrap bg-[#fff] rounded-[12px] border-solid border border-[#e4ebf1] relative z-[88]">
              <span className="flex w-[100px] h-[22px] justify-center items-start shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-medium leading-[22px] text-[#2094e3] relative text-center whitespace-nowrap z-[89]">
                مشاهده گزارش‌ها
              </span>
            </div>
          </div>
          <div className="flex pt-[24px] pr-[24px] pb-[24px] pl-[24px] flex-col gap-[16px] items-start self-stretch shrink-0 flex-nowrap bg-[#fcfbf8] rounded-[20px] border-solid border border-[#e4ebf1] relative z-[90]">
            <span className="h-[25px] self-stretch shrink-0 basis-auto font-['Vazirmatn'] text-[16px] font-bold leading-[25px] text-[#17324d] relative text-right whitespace-nowrap z-[91]">
              پروژه‌های فعال را بررسی کنید
            </span>
            <span className="flex w-[302px] h-[44px] justify-end items-start self-stretch shrink-0 font-['Vazirmatn'] text-[13px] font-normal leading-[22px] text-[#60758a] relative text-right z-[92]">
              با مشارکت در پروژه‌های در حال تأمین مالی، در زنجیره خلق اثر
              اجتماعی شریک شوید.
            </span>
            <div className="flex pt-[11px] pr-[20px] pb-[11px] pl-[20px] gap-[8px] justify-center items-center self-stretch shrink-0 flex-nowrap bg-[#2094e3] rounded-[12px] relative z-[93]">
              <span className="flex w-[92px] h-[22px] justify-center items-start shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-medium leading-[22px] text-[#fff] relative text-center whitespace-nowrap z-[94]">
                مشاهده پروژه‌ها
              </span>
            </div>
          </div>
        </div>
        <div className="flex w-[818px] flex-col gap-[40px] items-start shrink-0 flex-nowrap relative z-[95]">
          <div className="flex pt-[24px] pr-[24px] pb-[24px] pl-[24px] flex-col gap-[16px] items-start self-stretch shrink-0 flex-nowrap bg-[#eaf5fd] rounded-[16px] border-solid border border-[#e4ebf1] relative z-[96]">
            <span className="h-[28px] self-stretch shrink-0 basis-auto font-['Vazirmatn'] text-[18px] font-bold leading-[28px] text-[#17324d] relative text-right whitespace-nowrap z-[97]">
              خلاصه گزارش
            </span>
            <span className="flex w-[770px] h-[48px] justify-end items-start self-stretch shrink-0 font-['Vazirmatn'] text-[14px] font-normal leading-[24px] text-[#60758a] relative text-right z-[98]">
              سامانه ماه مفتخر است که در طول سال ۱۴۰۴، بستری امن و شفاف برای
              اتصال نیت‌های خیرخواهانه جامعه به پروژه‌های اشتغال‌زایی و
              کارآفرینی مجریان خلاق کشور فراهم آورده است. در ادامه، نکات کلیدی
              روش گزارش‌گیری سامانه آمده است:
            </span>
            <div className="flex flex-col gap-[10px] items-start self-stretch shrink-0 flex-nowrap relative z-[99]">
              <div className="flex gap-[8px] justify-end items-center self-stretch shrink-0 flex-nowrap relative z-[100]">
                <span className="h-[22px] grow shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-normal leading-[21.875px] text-[#60758a] relative text-right whitespace-nowrap z-[101]">
                  داده‌ها فقط از پروژه‌های دارای گزارش تأییدشده استخراج شده‌اند
                </span>
                <div className="flex w-[18px] h-[18px] justify-center items-center shrink-0 flex-nowrap bg-[#159455] rounded-[9px] relative z-[102]">
                  <div className="w-[10px] h-[10px] shrink-0 bg-[url(https://static.codia.ai/image/2026-08-24/kmSqozPeS0.png)] bg-cover bg-no-repeat relative overflow-hidden z-[103]" />
                </div>
              </div>
              <div className="flex gap-[8px] justify-end items-center self-stretch shrink-0 flex-nowrap relative z-[104]">
                <span className="h-[22px] grow shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-normal leading-[21.875px] text-[#60758a] relative text-right whitespace-nowrap z-[105]">
                  شاخص‌ها براساس تعریف KPI هر پروژه محاسبه شده‌اند
                </span>
                <div className="flex w-[18px] h-[18px] justify-center items-center shrink-0 flex-nowrap bg-[#159455] rounded-[9px] relative z-[106]">
                  <div className="w-[10px] h-[10px] shrink-0 bg-[url(https://static.codia.ai/image/2026-08-24/XwBNCjtsvQ.png)] bg-cover bg-no-repeat relative overflow-hidden z-[107]" />
                </div>
              </div>
              <div className="flex gap-[8px] justify-end items-center self-stretch shrink-0 flex-nowrap relative z-[108]">
                <span className="h-[22px] grow shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-normal leading-[21.875px] text-[#60758a] relative text-right whitespace-nowrap z-[109]">
                  اطلاعات شخصی بهره‌مندان در گزارش عمومی نمایش داده نمی‌شود
                </span>
                <div className="flex w-[18px] h-[18px] justify-center items-center shrink-0 flex-nowrap bg-[#159455] rounded-[9px] relative z-[110]">
                  <div className="w-[10px] h-[10px] shrink-0 bg-[url(https://static.codia.ai/image/2026-08-24/5x1yCCMfqz.png)] bg-cover bg-no-repeat relative overflow-hidden z-[111]" />
                </div>
              </div>
            </div>
          </div>
          <div className="flex pt-[24px] pr-[24px] pb-[24px] pl-[24px] flex-col gap-[20px] items-start self-stretch shrink-0 flex-nowrap bg-[#fff] rounded-[20px] border-solid border border-[#e4ebf1] relative z-[112]">
            <div className="flex justify-between items-start self-stretch shrink-0 flex-nowrap relative z-[113]">
              <div className="flex w-[164px] gap-[16px] justify-end items-center shrink-0 flex-nowrap relative z-[114]">
                <div className="flex w-[164px] flex-col gap-[4px] items-end shrink-0 flex-nowrap relative z-[115]">
                  <span className="flex w-[81px] h-[20px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[13px] font-normal leading-[20px] text-[#60758a] relative text-right whitespace-nowrap z-[116]">
                    منابع جذب‌شده
                  </span>
                  <span className="flex w-[134px] h-[28px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[18px] font-extrabold leading-[28px] text-[#17324d] relative text-right whitespace-nowrap z-[117]">
                    ۱۸٫۴ میلیارد تومان
                  </span>
                  <span className="flex w-[164px] h-[17px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[11px] font-normal leading-[17px] text-[#60758a] relative text-right whitespace-nowrap z-[118]">
                    واریزشده به حساب رسمی کمیته امداد
                  </span>
                </div>
              </div>
              <div className="flex w-[154px] gap-[16px] justify-end items-center shrink-0 flex-nowrap relative z-[119]">
                <div className="w-px h-[60px] shrink-0 bg-[#e4ebf1] relative z-[120]" />
                <div className="flex w-[137px] flex-col gap-[4px] items-end shrink-0 flex-nowrap relative z-[121]">
                  <span className="flex w-[75px] h-[20px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[13px] font-normal leading-[20px] text-[#60758a] relative text-right whitespace-nowrap z-[122]">
                    پروژه‌های فعال
                  </span>
                  <span className="flex w-[61px] h-[28px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[18px] font-extrabold leading-[28px] text-[#17324d] relative text-right whitespace-nowrap z-[123]">
                    ۲۴ پروژه
                  </span>
                  <span className="flex w-[137px] h-[17px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[11px] font-normal leading-[17px] text-[#60758a] relative text-right whitespace-nowrap z-[124]">
                    در حوزه‌های مختلف اثر اجتماعی
                  </span>
                </div>
              </div>
              <div className="flex w-[155px] gap-[16px] justify-end items-center shrink-0 flex-nowrap relative z-[125]">
                <div className="w-px h-[60px] shrink-0 bg-[#e4ebf1] relative z-[126]" />
                <div className="flex w-[138px] flex-col gap-[4px] items-end shrink-0 flex-nowrap relative z-[127]">
                  <span className="flex w-[90px] h-[20px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[13px] font-normal leading-[20px] text-[#60758a] relative text-right whitespace-nowrap z-[128]">
                    اشتغال ایجادشده
                  </span>
                  <span className="flex w-[130px] h-[28px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[18px] font-extrabold leading-[28px] text-[#17324d] relative text-right whitespace-nowrap z-[129]">
                    ۳۴۶ فرصت شغلی
                  </span>
                  <span className="flex w-[138px] h-[17px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[11px] font-normal leading-[17px] text-[#60758a] relative text-right whitespace-nowrap z-[130]">
                    اشتغال ثبت‌شده و قابل سنجش
                  </span>
                </div>
              </div>
              <div className="flex w-[166px] gap-[16px] justify-end items-center shrink-0 flex-nowrap relative z-[131]">
                <div className="w-px h-[60px] shrink-0 bg-[#e4ebf1] relative z-[132]" />
                <div className="flex w-[149px] flex-col gap-[4px] items-end shrink-0 flex-nowrap relative z-[133]">
                  <span className="flex w-[65px] h-[20px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[13px] font-normal leading-[20px] text-[#60758a] relative text-right whitespace-nowrap z-[134]">
                    افراد بهره‌مند
                  </span>
                  <span className="flex w-[77px] h-[28px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[18px] font-extrabold leading-[28px] text-[#17324d] relative text-right whitespace-nowrap z-[135]">
                    ۱۲٬۸۴۰ نفر
                  </span>
                  <span className="flex w-[149px] h-[17px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[11px] font-normal leading-[17px] text-[#60758a] relative text-right whitespace-nowrap z-[136]">
                    براساس گزارش پروژه‌های تأییدشده
                  </span>
                </div>
              </div>
            </div>
            <span className="h-[19px] self-stretch shrink-0 basis-auto font-['Vazirmatn'] text-[12px] font-normal leading-[18.75px] text-[#60758a] relative text-right whitespace-nowrap z-[137]">
              * این آمار ممکن است با انتشار گزارش‌های جدید به‌روزرسانی شود.
            </span>
          </div>
          <div className="flex flex-col gap-[16px] items-start self-stretch shrink-0 flex-nowrap relative z-[138]">
            <span className="h-[34px] self-stretch shrink-0 basis-auto font-['Vazirmatn'] text-[22px] font-extrabold leading-[34px] text-[#17324d] relative text-right whitespace-nowrap z-[139]">
              نگاهی به عملکرد سال ۱۴۰۴
            </span>
            <span className="flex w-[818px] h-[56px] justify-end items-start self-stretch shrink-0 font-['Vazirmatn'] text-[15px] font-normal leading-[28px] text-[#60758a] relative text-right z-[140]">
              در طول سال ۱۴۰۴، سامانه ماه تمرکز ویژه‌ای بر بهبود فرآیندهای
              راستی‌آزمایی و ارتقای معیارهای پایش داشته است. سرمایه‌گذاری‌های
              انجام‌شده از مسیر حساب‌های امانی بانکی و با نظارت دقیق ناظرین خانه
              خلاق و نوآوری ماه به کارآفرینان تخصیص یافت.
            </span>
            <span className="flex w-[818px] h-[56px] justify-end items-start self-stretch shrink-0 font-['Vazirmatn'] text-[15px] font-normal leading-[28px] text-[#60758a] relative text-right z-[141]">
              تسهیل و ساده‌سازی مشارکت برای کاربران حقیقی سبب شد بیش از ۷۰ درصد
              منابع مالی خرد مردمی به صورت مستقیم به حساب‌های متناظر با هر پروژه
              واریز شود و گزارش نهایی آن از طریق پیامک برای یکایک مشارکت‌کنندگان
              ارسال گردد.
            </span>
          </div>
          <div className="flex flex-col gap-[16px] items-start self-stretch shrink-0 flex-nowrap relative z-[142]">
            <span className="h-[31px] self-stretch shrink-0 basis-auto font-['Vazirmatn'] text-[20px] font-extrabold leading-[31px] text-[#17324d] relative text-right whitespace-nowrap z-[143]">
              اشتغال و درآمد پایدار
            </span>
            <span className="flex w-[818px] h-[56px] justify-end items-start self-stretch shrink-0 font-['Vazirmatn'] text-[15px] font-normal leading-[28px] text-[#60758a] relative text-right z-[144]">
              یکی از ارکان اساسی توسعه عدالت اجتماعی، حمایت از کسب‌وکارهای خرد و
              خانگی در مناطق محروم با تاکید بر اشتغال پایدار زنان سرپرست خانوار
              است.
            </span>
            <div className="flex pt-[16px] pr-[16px] pb-[16px] pl-[16px] justify-between items-start self-stretch shrink-0 flex-nowrap bg-[#fcfbf8] rounded-[12px] border-solid border border-[#e4ebf1] relative z-[145]">
              <span className="flex w-[56px] h-[22px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-normal leading-[21.875px] text-[#60758a] relative text-right whitespace-nowrap z-[146]">
                پروژه‌ها: ۸
              </span>
              <span className="flex w-[67px] h-[22px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-normal leading-[21.875px] text-[#60758a] relative text-right whitespace-nowrap z-[147]">
                روستاها: ۶۸
              </span>
              <span className="flex w-[73px] h-[22px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-normal leading-[21.875px] text-[#60758a] relative text-right whitespace-nowrap z-[148]">
                خانوارها: ۸۹۰
              </span>
              <span className="flex w-[106px] h-[22px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-bold leading-[21.875px] text-[#17324d] relative text-right whitespace-nowrap z-[149]">
                فرصت شغلی: ۳۴۶
              </span>
            </div>
            <div className="flex justify-end items-start self-stretch shrink-0 flex-nowrap relative z-[150]">
              <span className="flex w-[195px] h-[22px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-bold leading-[21.875px] text-[#2094e3] relative text-right whitespace-nowrap z-[151]">
                مشاهده پروژه‌های حوزه اشتغال ←
              </span>
            </div>
          </div>
          <div className="flex flex-col gap-[16px] items-start self-stretch shrink-0 flex-nowrap relative z-[152]">
            <span className="h-[31px] self-stretch shrink-0 basis-auto font-['Vazirmatn'] text-[20px] font-extrabold leading-[31px] text-[#17324d] relative text-right whitespace-nowrap z-[153]">
              آموزش و توانمندسازی
            </span>
            <span className="flex w-[818px] h-[56px] justify-end items-start self-stretch shrink-0 font-['Vazirmatn'] text-[15px] font-normal leading-[28px] text-[#60758a] relative text-right z-[154]">
              برنامه‌های مهارتی برای نوجوانان و مستعدان اشتغال با تکیه بر
              آموزش‌های دیجیتال به شکل مستمر ادامه دارد تا زمینه‌ساز ورود پایدار
              نسل جدید به بازار کار شود.
            </span>
            <div className="flex pt-[16px] pr-[16px] pb-[16px] pl-[16px] justify-between items-start self-stretch shrink-0 flex-nowrap bg-[#fcfbf8] rounded-[12px] border-solid border border-[#e4ebf1] relative z-[155]">
              <span className="flex w-[55px] h-[22px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-normal leading-[21.875px] text-[#60758a] relative text-right whitespace-nowrap z-[156]">
                پروژه‌ها: ۶
              </span>
              <span className="flex w-[49px] h-[22px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-normal leading-[21.875px] text-[#60758a] relative text-right whitespace-nowrap z-[157]">
                مراکز: ۲۶
              </span>
              <span className="flex w-[62px] h-[22px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-normal leading-[21.875px] text-[#60758a] relative text-right whitespace-nowrap z-[158]">
                دوره‌ها: ۳۸
              </span>
              <span className="flex w-[101px] h-[22px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-bold leading-[21.875px] text-[#17324d] relative text-right whitespace-nowrap z-[159]">
                آموزش‌دیده: ۲٬۱۰۰
              </span>
            </div>
          </div>
          <div className="flex flex-col gap-[16px] items-start self-stretch shrink-0 flex-nowrap relative z-[160]">
            <span className="h-[31px] self-stretch shrink-0 basis-auto font-['Vazirmatn'] text-[20px] font-extrabold leading-[31px] text-[#17324d] relative text-right whitespace-nowrap z-[161]">
              سلامت خانواده‌ها
            </span>
            <span className="flex w-[818px] h-[56px] justify-end items-start self-stretch shrink-0 font-['Vazirmatn'] text-[15px] font-normal leading-[28px] text-[#60758a] relative text-right z-[162]">
              پوشش‌های غربالگری و بهبود دسترسی درمانی در مناطق کم‌برخوردار در
              قالب طرح‌های سلامت خانواده به یکی از موفق‌ترین دستاوردهای این دوره
              تبدیل شده است.
            </span>
            <div className="flex pt-[16px] pr-[16px] pb-[16px] pl-[16px] justify-between items-start self-stretch shrink-0 flex-nowrap bg-[#fcfbf8] rounded-[12px] border-solid border border-[#e4ebf1] relative z-[163]">
              <span className="flex w-[56px] h-[22px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-normal leading-[21.875px] text-[#60758a] relative text-right whitespace-nowrap z-[164]">
                پروژه‌ها: ۵
              </span>
              <span className="flex w-[56px] h-[22px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-normal leading-[21.875px] text-[#60758a] relative text-right whitespace-nowrap z-[165]">
                مناطق: ۳۱
              </span>
              <span className="flex w-[47px] h-[22px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-normal leading-[21.875px] text-[#60758a] relative text-right whitespace-nowrap z-[166]">
                مراکز: ۱۴
              </span>
              <span className="flex w-[110px] h-[22px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-bold leading-[21.875px] text-[#17324d] relative text-right whitespace-nowrap z-[167]">
                تحت پوشش: ۱٬۴۸۰
              </span>
            </div>
          </div>
          <div className="flex flex-col gap-[16px] items-start self-stretch shrink-0 flex-nowrap relative z-[168]">
            <span className="h-[28px] self-stretch shrink-0 basis-auto font-['Vazirmatn'] text-[18px] font-extrabold leading-[28px] text-[#17324d] relative text-right whitespace-nowrap z-[169]">
              منابع چگونه به اجرای پروژه می‌رسند؟
            </span>
            <div className="flex pt-[16px] pr-[16px] pb-[16px] pl-[16px] justify-between items-center self-stretch shrink-0 flex-nowrap bg-[#fff] rounded-[16px] border-solid border border-[#e4ebf1] relative z-[170]">
              <div className="flex w-[55px] gap-[8px] items-center shrink-0 flex-nowrap relative z-[171]">
                <div className="flex w-[55px] flex-col gap-[4px] items-center shrink-0 flex-nowrap relative z-[172]">
                  <div className="flex w-[28px] h-[28px] justify-center items-center shrink-0 flex-nowrap bg-[#2094e3] rounded-[14px] relative z-[173]">
                    <span className="flex w-[8px] h-[19px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[12px] font-bold leading-[18.75px] text-[#fff] relative text-right whitespace-nowrap z-[174]">
                      ۷
                    </span>
                  </div>
                  <span className="flex w-[55px] h-[16px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[10px] font-normal leading-[15.625px] text-[#17324d] relative text-right whitespace-nowrap z-[175]">
                    گزارش عمومی
                  </span>
                </div>
              </div>
              <div className="flex w-[66px] gap-[8px] items-center shrink-0 flex-nowrap relative z-[176]">
                <div className="flex w-[66px] flex-col gap-[4px] items-center shrink-0 flex-nowrap relative z-[177]">
                  <div className="flex w-[28px] h-[28px] justify-center items-center shrink-0 flex-nowrap bg-[#eaf5fd] rounded-[14px] relative z-[178]">
                    <span className="flex w-[7px] h-[19px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[12px] font-bold leading-[18.75px] text-[#2094e3] relative text-right whitespace-nowrap z-[179]">
                      ۶
                    </span>
                  </div>
                  <span className="flex w-[66px] h-[16px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[10px] font-normal leading-[15.625px] text-[#17324d] relative text-right whitespace-nowrap z-[180]">
                    پرداخت مرحله‌ای
                  </span>
                </div>
              </div>
              <div className="flex w-[37px] gap-[8px] items-center shrink-0 flex-nowrap relative z-[181]">
                <div className="flex w-[37px] flex-col gap-[4px] items-center shrink-0 flex-nowrap relative z-[182]">
                  <div className="flex w-[28px] h-[28px] justify-center items-center shrink-0 flex-nowrap bg-[#eaf5fd] rounded-[14px] relative z-[183]">
                    <span className="flex w-[8px] h-[19px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[12px] font-bold leading-[18.75px] text-[#2094e3] relative text-right whitespace-nowrap z-[184]">
                      ۵
                    </span>
                  </div>
                  <span className="flex w-[37px] h-[16px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[10px] font-normal leading-[15.625px] text-[#17324d] relative text-right whitespace-nowrap z-[185]">
                    تأیید KPI
                  </span>
                </div>
              </div>
              <div className="flex w-[48px] gap-[8px] items-center shrink-0 flex-nowrap relative z-[186]">
                <div className="flex w-[48px] flex-col gap-[4px] items-center shrink-0 flex-nowrap relative z-[187]">
                  <div className="flex w-[28px] h-[28px] justify-center items-center shrink-0 flex-nowrap bg-[#eaf5fd] rounded-[14px] relative z-[188]">
                    <span className="flex w-[8px] h-[19px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[12px] font-bold leading-[18.75px] text-[#2094e3] relative text-right whitespace-nowrap z-[189]">
                      ۴
                    </span>
                  </div>
                  <span className="flex w-[48px] h-[16px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[10px] font-normal leading-[15.625px] text-[#17324d] relative text-right whitespace-nowrap z-[190]">
                    اجرای مرحله
                  </span>
                </div>
              </div>
              <div className="flex w-[52px] gap-[8px] items-center shrink-0 flex-nowrap relative z-[191]">
                <div className="flex w-[52px] flex-col gap-[4px] items-center shrink-0 flex-nowrap relative z-[192]">
                  <div className="flex w-[28px] h-[28px] justify-center items-center shrink-0 flex-nowrap bg-[#eaf5fd] rounded-[14px] relative z-[193]">
                    <span className="flex w-[9px] h-[19px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[12px] font-bold leading-[18.75px] text-[#2094e3] relative text-right whitespace-nowrap z-[194]">
                      ۳
                    </span>
                  </div>
                  <span className="flex w-[52px] h-[16px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[10px] font-normal leading-[15.625px] text-[#17324d] relative text-right whitespace-nowrap z-[195]">
                    واریز به امداد
                  </span>
                </div>
              </div>
              <div className="flex w-[52px] gap-[8px] items-center shrink-0 flex-nowrap relative z-[196]">
                <div className="flex w-[52px] flex-col gap-[4px] items-center shrink-0 flex-nowrap relative z-[197]">
                  <div className="flex w-[28px] h-[28px] justify-center items-center shrink-0 flex-nowrap bg-[#eaf5fd] rounded-[14px] relative z-[198]">
                    <span className="flex w-[7px] h-[19px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[12px] font-bold leading-[18.75px] text-[#2094e3] relative text-right whitespace-nowrap z-[199]">
                      ۲
                    </span>
                  </div>
                  <span className="flex w-[52px] h-[16px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[10px] font-normal leading-[15.625px] text-[#17324d] relative text-right whitespace-nowrap z-[200]">
                    ثبت مشارکت
                  </span>
                </div>
              </div>
              <div className="flex w-[49px] gap-[8px] items-center shrink-0 flex-nowrap relative z-[201]">
                <div className="flex w-[49px] flex-col gap-[4px] items-center shrink-0 flex-nowrap relative z-[202]">
                  <div className="flex w-[28px] h-[28px] justify-center items-center shrink-0 flex-nowrap bg-[#eaf5fd] rounded-[14px] relative z-[203]">
                    <span className="flex w-[4px] h-[19px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[12px] font-bold leading-[18.75px] text-[#2094e3] relative text-right whitespace-nowrap z-[204]">
                      ۱
                    </span>
                  </div>
                  <span className="flex w-[49px] h-[16px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[10px] font-normal leading-[15.625px] text-[#17324d] relative text-right whitespace-nowrap z-[205]">
                    انتخاب پروژه
                  </span>
                </div>
              </div>
            </div>
            <span className="h-[19px] self-stretch shrink-0 basis-auto font-['Vazirmatn'] text-[12px] font-normal leading-[18.75px] text-[#60758a] relative text-right whitespace-nowrap z-[206]">
              * مبالغ مشارکت مستقیماً به استارتاپ‌ها پرداخت نمی‌شود، بلکه تنها
              پس از پیشرفت فیزیکی و تأیید شاخص‌ها آزاد می‌گردد.
            </span>
          </div>
          <div className="flex flex-col gap-[16px] items-start self-stretch shrink-0 flex-nowrap relative z-[207]">
            <span className="h-[28px] self-stretch shrink-0 basis-auto font-['Vazirmatn'] text-[18px] font-extrabold leading-[28px] text-[#17324d] relative text-right whitespace-nowrap z-[208]">
              خلاصه نتایج تأییدشده براساس حوزه اثر
            </span>
            <div className="flex pt-[24px] pr-[24px] pb-[24px] pl-[24px] flex-col gap-[16px] items-start self-stretch shrink-0 flex-nowrap bg-[#fff] rounded-[16px] border-solid border border-[#e4ebf1] relative z-[209]">
              <div className="flex flex-col gap-[6px] items-end self-stretch shrink-0 flex-nowrap relative z-[210]">
                <div className="flex justify-between items-start self-stretch shrink-0 flex-nowrap relative z-[211]">
                  <span className="flex w-[44px] h-[20px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[13px] font-normal leading-[20px] text-[#60758a] relative text-right whitespace-nowrap z-[212]">
                    ۲٬۱۰۰ نفر
                  </span>
                  <span className="flex w-[113px] h-[20px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[13px] font-bold leading-[20px] text-[#17324d] relative text-right whitespace-nowrap z-[213]">
                    آموزش و توانمندسازی
                  </span>
                </div>
                <div className="flex h-[16px] justify-end items-start self-stretch shrink-0 flex-nowrap bg-[#e4ebf1] rounded-[8px] relative z-[214]">
                  <div className="w-[450px] self-stretch shrink-0 bg-[#2094e3] rounded-[8px] relative z-[215]" />
                </div>
              </div>
              <div className="flex flex-col gap-[6px] items-end self-stretch shrink-0 flex-nowrap relative z-[216]">
                <div className="flex justify-between items-start self-stretch shrink-0 flex-nowrap relative z-[217]">
                  <span className="flex w-[47px] h-[20px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[13px] font-normal leading-[20px] text-[#60758a] relative text-right whitespace-nowrap z-[218]">
                    ۱٬۴۸۰ نفر
                  </span>
                  <span className="flex w-[92px] h-[20px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[13px] font-bold leading-[20px] text-[#17324d] relative text-right whitespace-nowrap z-[219]">
                    سلامت خانواده‌ها
                  </span>
                </div>
                <div className="flex h-[16px] justify-end items-start self-stretch shrink-0 flex-nowrap bg-[#e4ebf1] rounded-[8px] relative z-[220]">
                  <div className="w-[320px] self-stretch shrink-0 bg-[#34a8e8] rounded-[8px] relative z-[221]" />
                </div>
              </div>
              <div className="flex flex-col gap-[6px] items-end self-stretch shrink-0 flex-nowrap relative z-[222]">
                <div className="flex justify-between items-start self-stretch shrink-0 flex-nowrap relative z-[223]">
                  <span className="flex w-[52px] h-[20px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[13px] font-normal leading-[20px] text-[#60758a] relative text-right whitespace-nowrap z-[224]">
                    ۸۹۰ خانوار
                  </span>
                  <span className="flex w-[73px] h-[20px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[13px] font-bold leading-[20px] text-[#17324d] relative text-right whitespace-nowrap z-[225]">
                    معیشت پایدار
                  </span>
                </div>
                <div className="flex h-[16px] justify-end items-start self-stretch shrink-0 flex-nowrap bg-[#e4ebf1] rounded-[8px] relative z-[226]">
                  <div className="w-[200px] self-stretch shrink-0 bg-[#5cbced] rounded-[8px] relative z-[227]" />
                </div>
              </div>
              <div className="flex flex-col gap-[6px] items-end self-stretch shrink-0 flex-nowrap relative z-[228]">
                <div className="flex justify-between items-start self-stretch shrink-0 flex-nowrap relative z-[229]">
                  <span className="flex w-[93px] h-[20px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[13px] font-normal leading-[20px] text-[#60758a] relative text-right whitespace-nowrap z-[230]">
                    ۳۴۶ فرصت شغلی
                  </span>
                  <span className="flex w-[84px] h-[20px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[13px] font-bold leading-[20px] text-[#17324d] relative text-right whitespace-nowrap z-[231]">
                    اشتغال مستقیم
                  </span>
                </div>
                <div className="flex h-[16px] justify-end items-start self-stretch shrink-0 flex-nowrap bg-[#e4ebf1] rounded-[8px] relative z-[232]">
                  <div className="w-[100px] self-stretch shrink-0 bg-[#84d0f2] rounded-[8px] relative z-[233]" />
                </div>
              </div>
            </div>
            <span className="h-[19px] self-stretch shrink-0 basis-auto font-['Vazirmatn'] text-[12px] font-normal leading-[18.75px] text-[#60758a] relative text-right whitespace-nowrap z-[234]">
              * واحد اندازه‌گیری حوزه‌ها متفاوت است و مقادیر نباید به‌صورت
              رتبه‌بندی مستقیم تفسیر شوند.
            </span>
          </div>
          <div className="flex gap-[24px] items-start self-stretch shrink-0 flex-nowrap relative z-[235]">
            <div className="flex flex-col gap-[8px] items-end grow shrink-0 basis-0 flex-nowrap relative z-[236]">
              <div className="h-[200px] self-stretch shrink-0 bg-[url(https://static.codia.ai/image/2026-08-24/BkK6DUkeGW.png)] bg-cover bg-no-repeat rounded-[16px] relative z-[237]" />
              <span className="flex w-[240px] h-[19px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[12px] font-normal leading-[18.75px] text-[#60758a] relative text-right whitespace-nowrap z-[238]">
                کارگاه توانمندسازی خیاطی زنان روستایی — تیر ۱۴۰۵
              </span>
            </div>
            <div className="flex flex-col gap-[8px] items-end grow shrink-0 basis-0 flex-nowrap relative z-[239]">
              <div className="h-[200px] self-stretch shrink-0 bg-[url(https://static.codia.ai/image/2026-08-24/S9NydpBYY7.png)] bg-cover bg-no-repeat rounded-[16px] relative z-[240]" />
              <span className="flex w-[326px] h-[19px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[12px] font-normal leading-[18.75px] text-[#60758a] relative text-right whitespace-nowrap z-[241]">
                نشست هماهنگی پایش سلامت خانواده در مناطق تابعه — مرداد ۱۴۰۵
              </span>
            </div>
          </div>
          <div className="flex pt-[24px] pr-[24px] pb-[24px] pl-[24px] flex-col gap-[16px] items-start self-stretch shrink-0 flex-nowrap bg-[#fff] rounded-[24px] border-solid border border-[#e4ebf1] relative shadow-[0_4px_16px_0_rgba(23,46,71,0.05)] z-[242]">
            <span className="h-[28px] self-stretch shrink-0 basis-auto font-['Vazirmatn'] text-[18px] font-bold leading-[28px] text-[#17324d] relative text-right whitespace-nowrap z-[243]">
              روش محاسبه آمار و داده‌ها
            </span>
            <span className="h-[24px] self-stretch shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-normal leading-[24px] text-[#60758a] relative text-right whitespace-nowrap z-[244]">
              داده‌های تجمیعی ارائه‌شده در این گزارش بر اساس فرآیند راستی‌آزمایی
              ۵ مرحله‌ای زیر پایش و نهایی شده‌اند:
            </span>
            <div className="flex flex-col gap-[12px] items-start self-stretch shrink-0 flex-nowrap relative z-[245]">
              <div className="flex gap-[12px] justify-end items-start self-stretch shrink-0 flex-nowrap relative z-[246]">
                <span className="h-[22px] grow shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-normal leading-[21.875px] text-[#60758a] relative text-right whitespace-nowrap z-[247]">
                  ثبت داده‌های آماری اجرای هر پروژه توسط استارتاپ مجری در پنل
                  کاربری
                </span>
                <div className="flex w-[24px] h-[24px] justify-center items-center shrink-0 flex-nowrap bg-[#eaf5fd] rounded-[12px] relative z-[248]">
                  <span className="flex w-[4px] h-[19px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[12px] font-bold leading-[18.75px] text-[#2094e3] relative text-right whitespace-nowrap z-[249]">
                    ۱
                  </span>
                </div>
              </div>
              <div className="flex gap-[12px] justify-end items-start self-stretch shrink-0 flex-nowrap relative z-[250]">
                <span className="h-[22px] grow shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-normal leading-[21.875px] text-[#60758a] relative text-right whitespace-nowrap z-[251]">
                  بررسی اسناد پشتیبان مالی و هویتی بهره‌مندان توسط ناظر مقیم
                </span>
                <div className="flex w-[24px] h-[24px] justify-center items-center shrink-0 flex-nowrap bg-[#eaf5fd] rounded-[12px] relative z-[252]">
                  <span className="flex w-[7px] h-[19px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[12px] font-bold leading-[18.75px] text-[#2094e3] relative text-right whitespace-nowrap z-[253]">
                    ۲
                  </span>
                </div>
              </div>
              <div className="flex gap-[12px] justify-end items-start self-stretch shrink-0 flex-nowrap relative z-[254]">
                <span className="h-[22px] grow shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-normal leading-[21.875px] text-[#60758a] relative text-right whitespace-nowrap z-[255]">
                  انجام ارزیابی دوره‌ای و انطباق سنجی با شاخص‌های مصوب توسط
                  ارزیاب خانه خلاق
                </span>
                <div className="flex w-[24px] h-[24px] justify-center items-center shrink-0 flex-nowrap bg-[#eaf5fd] rounded-[12px] relative z-[256]">
                  <span className="flex w-[9px] h-[19px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[12px] font-bold leading-[18.75px] text-[#2094e3] relative text-right whitespace-nowrap z-[257]">
                    ۳
                  </span>
                </div>
              </div>
              <div className="flex gap-[12px] justify-end items-start self-stretch shrink-0 flex-nowrap relative z-[258]">
                <span className="h-[22px] grow shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-normal leading-[21.875px] text-[#60758a] relative text-right whitespace-nowrap z-[259]">
                  حذف داده‌های خام هویتی و شخصی بهره‌مندان بر اساس پروتکل حفظ
                  حریم خصوصی
                </span>
                <div className="flex w-[24px] h-[24px] justify-center items-center shrink-0 flex-nowrap bg-[#eaf5fd] rounded-[12px] relative z-[260]">
                  <span className="flex w-[8px] h-[19px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[12px] font-bold leading-[18.75px] text-[#2094e3] relative text-right whitespace-nowrap z-[261]">
                    ۴
                  </span>
                </div>
              </div>
              <div className="flex gap-[12px] justify-end items-start self-stretch shrink-0 flex-nowrap relative z-[262]">
                <span className="h-[22px] grow shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-normal leading-[21.875px] text-[#60758a] relative text-right whitespace-nowrap z-[263]">
                  انتشار مقدار تجمیعی تأییدشده شاخص در سامانه پایش عمومی ماه
                </span>
                <div className="flex w-[24px] h-[24px] justify-center items-center shrink-0 flex-nowrap bg-[#eaf5fd] rounded-[12px] relative z-[264]">
                  <span className="flex w-[8px] h-[19px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[12px] font-bold leading-[18.75px] text-[#2094e3] relative text-right whitespace-nowrap z-[265]">
                    ۵
                  </span>
                </div>
              </div>
            </div>
            <div className="flex pt-[12px] pr-0 pb-0 pl-0 justify-between items-start self-stretch shrink-0 flex-nowrap border-solid border-b border-b-[#e4ebf1] relative z-[266]">
              <span className="flex w-[152px] h-[20px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[13px] font-bold leading-[20px] text-[#2094e3] relative text-right whitespace-nowrap z-[267]">
                آشنایی با روش سنجش اثر ←
              </span>
              <span className="flex w-[299px] h-[19px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[12px] font-normal leading-[18.75px] text-[#60758a] relative text-right whitespace-nowrap z-[268]">
                دوره داده: فروردین تا اسفند ۱۴۰۴ | آخرین بازبینی: ۲۸ مرداد ۱۴۰۵
              </span>
            </div>
          </div>
          <div className="flex pt-[24px] pr-[24px] pb-[24px] pl-[24px] flex-col gap-[8px] items-start self-stretch shrink-0 flex-nowrap bg-[#fcfbf8] border-solid border-r-4 border-r-[#2094e3] relative z-[269]">
            <span className="flex w-[770px] h-[56px] justify-end items-start self-stretch shrink-0 font-['Vazirmatn'] text-[16px] font-bold leading-[28px] text-[#17324d] relative text-right z-[270]">
              «هدف از انتشار گزارش اثر، فراهم‌کردن تصویری روشن از مسیر منابع،
              اجرای پروژه‌ها و نتایج قابل‌اندازه‌گیری آن‌هاست تا همگان از تحقق
              نیت‌های خود اطمینان یابند.»
            </span>
            <span className="h-[20px] self-stretch shrink-0 basis-auto font-['Vazirmatn'] text-[13px] font-normal leading-[20px] text-[#60758a] relative text-right whitespace-nowrap z-[271]">
              — گزارش رسمی سامانه ماه — سال ۱۴۰۴
            </span>
          </div>
          <div className="flex pt-[24px] pr-[24px] pb-[24px] pl-[24px] flex-col gap-[16px] items-start self-stretch shrink-0 flex-nowrap bg-[#fff] rounded-[20px] border-solid border border-[#e4ebf1] relative z-[272]">
            <span className="h-[25px] self-stretch shrink-0 basis-auto font-['Vazirmatn'] text-[16px] font-bold leading-[25px] text-[#17324d] relative text-right whitespace-nowrap z-[273]">
              فایل‌ها و گزارش‌های مرتبط
            </span>
            <div className="flex flex-col gap-[12px] items-start self-stretch shrink-0 flex-nowrap relative z-[274]">
              <div className="flex pt-[12px] pr-[12px] pb-[12px] pl-[12px] justify-between items-center self-stretch shrink-0 flex-nowrap bg-[#fcfbf8] rounded-[12px] relative z-[275]">
                <div className="flex w-[184px] gap-[8px] items-start shrink-0 flex-nowrap relative z-[276]">
                  <div className="flex w-[82px] pt-[6px] pr-[12px] pb-[6px] pl-[12px] items-start shrink-0 flex-nowrap bg-[#fff] rounded-[8px] border-solid border border-[#e4ebf1] relative z-[277]">
                    <span className="flex w-[58px] h-[19px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[12px] font-normal leading-[18.75px] text-[#2094e3] relative text-right whitespace-nowrap z-[278]">
                      دریافت فایل
                    </span>
                  </div>
                  <div className="flex w-[94px] pt-[6px] pr-[12px] pb-[6px] pl-[12px] items-start shrink-0 flex-nowrap bg-[#2094e3] rounded-[8px] relative z-[279]">
                    <span className="flex w-[70px] h-[19px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[12px] font-normal leading-[18.75px] text-[#fff] relative text-right whitespace-nowrap z-[280]">
                      مشاهده آنلاین
                    </span>
                  </div>
                </div>
                <div className="flex w-[245px] gap-[12px] items-center shrink-0 flex-nowrap relative z-[281]">
                  <div className="flex w-[197px] flex-col gap-[2px] items-end shrink-0 flex-nowrap relative z-[282]">
                    <span className="flex w-[197px] h-[22px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-bold leading-[21.875px] text-[#17324d] relative text-right whitespace-nowrap z-[283]">
                      گزارش اثر اجتماعی سامانه ماه ۱۴۰۴
                    </span>
                    <span className="flex w-[156px] h-[17px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[11px] font-normal leading-[17px] text-[#60758a] relative text-right whitespace-nowrap z-[284]">
                      PDF • ۴٫۸ مگابایت • ۲۵ مرداد ۱۴۰۵
                    </span>
                  </div>
                  <div className="flex w-[36px] h-[36px] justify-center items-center shrink-0 flex-nowrap bg-[#fdf3e2] rounded-[8px] relative z-[285]">
                    <div className="w-[18px] h-[18px] shrink-0 bg-[url(https://static.codia.ai/image/2026-08-24/XYv07mktzM.png)] bg-cover bg-no-repeat relative overflow-hidden z-[286]" />
                  </div>
                </div>
              </div>
              <div className="flex pt-[12px] pr-[12px] pb-[12px] pl-[12px] justify-between items-center self-stretch shrink-0 flex-nowrap bg-[#fcfbf8] rounded-[12px] relative z-[287]">
                <div className="flex w-[184px] gap-[8px] items-start shrink-0 flex-nowrap relative z-[288]">
                  <div className="flex w-[82px] pt-[6px] pr-[12px] pb-[6px] pl-[12px] items-start shrink-0 flex-nowrap bg-[#fff] rounded-[8px] border-solid border border-[#e4ebf1] relative z-[289]">
                    <span className="flex w-[58px] h-[19px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[12px] font-normal leading-[18.75px] text-[#2094e3] relative text-right whitespace-nowrap z-[290]">
                      دریافت فایل
                    </span>
                  </div>
                  <div className="flex w-[94px] pt-[6px] pr-[12px] pb-[6px] pl-[12px] items-start shrink-0 flex-nowrap bg-[#2094e3] rounded-[8px] relative z-[291]">
                    <span className="flex w-[70px] h-[19px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[12px] font-normal leading-[18.75px] text-[#fff] relative text-right whitespace-nowrap z-[292]">
                      مشاهده آنلاین
                    </span>
                  </div>
                </div>
                <div className="flex w-[200px] gap-[12px] items-center shrink-0 flex-nowrap relative z-[293]">
                  <div className="flex w-[152px] flex-col gap-[2px] items-end shrink-0 flex-nowrap relative z-[294]">
                    <span className="flex w-[125px] h-[22px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-bold leading-[21.875px] text-[#17324d] relative text-right whitespace-nowrap z-[295]">
                      خلاصه مدیریتی گزارش
                    </span>
                    <span className="flex w-[152px] h-[17px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[11px] font-normal leading-[17px] text-[#60758a] relative text-right whitespace-nowrap z-[296]">
                      PDF • ۱٫۲ مگابایت • ۲۵ مرداد ۱۴۰۵
                    </span>
                  </div>
                  <div className="flex w-[36px] h-[36px] justify-center items-center shrink-0 flex-nowrap bg-[#fdf3e2] rounded-[8px] relative z-[297]">
                    <div className="w-[18px] h-[18px] shrink-0 bg-[url(https://static.codia.ai/image/2026-08-24/XvTcCsdcGb.png)] bg-cover bg-no-repeat relative overflow-hidden z-[298]" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-[20px] items-start self-stretch shrink-0 flex-nowrap relative z-[299]">
            <span className="h-[28px] self-stretch shrink-0 basis-auto font-['Vazirmatn'] text-[18px] font-extrabold leading-[28px] text-[#17324d] relative text-right whitespace-nowrap z-[300]">
              پروژه‌های مرتبط با این گزارش
            </span>
            <div className="flex gap-[16px] items-start self-stretch shrink-0 flex-nowrap relative z-[301]">
              <div className="flex pt-[16px] pr-[16px] pb-[16px] pl-[16px] flex-col gap-[12px] items-start grow shrink-0 basis-0 flex-nowrap bg-[#fff] rounded-[16px] border-solid border border-[#e4ebf1] relative z-[302]">
                <div className="flex flex-col gap-[4px] items-end self-stretch shrink-0 flex-nowrap relative z-[303]">
                  <div className="flex w-[137px] gap-[6px] items-center shrink-0 flex-nowrap relative z-[304]">
                    <span className="flex w-[64px] h-[17px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[11px] font-normal leading-[17px] text-[#60758a] relative text-right whitespace-nowrap z-[305]">
                      استان: گلستان
                    </span>
                    <span className="h-[17px] shrink-0 basis-auto font-['Vazirmatn'] text-[11px] font-normal leading-[17px] text-[#60758a] relative text-left whitespace-nowrap z-[306]">
                      |
                    </span>
                    <span className="flex w-[58px] h-[17px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[11px] font-normal leading-[17px] text-[#2094e3] relative text-right whitespace-nowrap z-[307]">
                      حوزه: اشتغال
                    </span>
                  </div>
                  <span className="flex w-[118px] h-[22px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-bold leading-[21.875px] text-[#17324d] relative text-right whitespace-nowrap z-[308]">
                    اشتغال زنان روستایی
                  </span>
                  <span className="flex w-[97px] h-[19px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[12px] font-normal leading-[18.75px] text-[#60758a] relative text-right whitespace-nowrap z-[309]">
                    استارتاپ: راهکار سبز
                  </span>
                </div>
                <div className="flex justify-between items-center self-stretch shrink-0 flex-nowrap relative z-[310]">
                  <span className="flex w-[83px] h-[19px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[12px] font-bold leading-[18.75px] text-[#2094e3] relative text-right whitespace-nowrap z-[311]">
                    مشاهده پروژه ←
                  </span>
                </div>
              </div>
              <div className="flex pt-[16px] pr-[16px] pb-[16px] pl-[16px] flex-col gap-[12px] items-start grow shrink-0 basis-0 flex-nowrap bg-[#fff] rounded-[16px] border-solid border border-[#e4ebf1] relative z-[312]">
                <div className="flex flex-col gap-[4px] items-end self-stretch shrink-0 flex-nowrap relative z-[313]">
                  <div className="flex w-[195px] gap-[6px] items-center shrink-0 flex-nowrap relative z-[314]">
                    <span className="flex w-[122px] h-[17px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[11px] font-normal leading-[17px] text-[#60758a] relative text-right whitespace-nowrap z-[315]">
                      استان: سیستان و بلوچستان
                    </span>
                    <span className="h-[17px] shrink-0 basis-auto font-['Vazirmatn'] text-[11px] font-normal leading-[17px] text-[#60758a] relative text-left whitespace-nowrap z-[316]">
                      |
                    </span>
                    <span className="flex w-[58px] h-[17px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[11px] font-normal leading-[17px] text-[#2094e3] relative text-right whitespace-nowrap z-[317]">
                      حوزه: سلامت
                    </span>
                  </div>
                  <span className="flex w-[86px] h-[22px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-bold leading-[21.875px] text-[#17324d] relative text-right whitespace-nowrap z-[318]">
                    سلامت خانواده
                  </span>
                  <span className="flex w-[113px] h-[19px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[12px] font-normal leading-[18.75px] text-[#60758a] relative text-right whitespace-nowrap z-[319]">
                    استارتاپ: همراه سلامت
                  </span>
                </div>
                <div className="flex justify-between items-center self-stretch shrink-0 flex-nowrap relative z-[320]">
                  <span className="flex w-[83px] h-[19px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[12px] font-bold leading-[18.75px] text-[#2094e3] relative text-right whitespace-nowrap z-[321]">
                    مشاهده پروژه ←
                  </span>
                </div>
              </div>
              <div className="flex pt-[16px] pr-[16px] pb-[16px] pl-[16px] flex-col gap-[12px] items-start grow shrink-0 basis-0 flex-nowrap bg-[#fff] rounded-[16px] border-solid border border-[#e4ebf1] relative z-[322]">
                <div className="flex flex-col gap-[4px] items-end self-stretch shrink-0 flex-nowrap relative z-[323]">
                  <div className="flex w-[136px] gap-[6px] items-center shrink-0 flex-nowrap relative z-[324]">
                    <span className="flex w-[65px] h-[17px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[11px] font-normal leading-[17px] text-[#60758a] relative text-right whitespace-nowrap z-[325]">
                      استان: اصفهان
                    </span>
                    <span className="h-[17px] shrink-0 basis-auto font-['Vazirmatn'] text-[11px] font-normal leading-[17px] text-[#60758a] relative text-left whitespace-nowrap z-[326]">
                      |
                    </span>
                    <span className="flex w-[56px] h-[17px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[11px] font-normal leading-[17px] text-[#2094e3] relative text-right whitespace-nowrap z-[327]">
                      حوزه: آموزش
                    </span>
                  </div>
                  <span className="flex w-[113px] h-[22px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-bold leading-[21.875px] text-[#17324d] relative text-right whitespace-nowrap z-[328]">
                    مهارت برای نوجوانان
                  </span>
                  <span className="flex w-[87px] h-[19px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[12px] font-normal leading-[18.75px] text-[#60758a] relative text-right whitespace-nowrap z-[329]">
                    استارتاپ: آینده‌ساز
                  </span>
                </div>
                <div className="flex justify-between items-center self-stretch shrink-0 flex-nowrap relative z-[330]">
                  <span className="flex w-[83px] h-[19px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[12px] font-bold leading-[18.75px] text-[#2094e3] relative text-right whitespace-nowrap z-[331]">
                    مشاهده پروژه ←
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex pt-[64px] pr-[120px] pb-[64px] pl-[120px] flex-col gap-[32px] items-start self-stretch shrink-0 flex-nowrap bg-[#fff] border-solid border-t border-t-[#e4ebf1] border-solid border-b border-b-[#e4ebf1] relative z-[332]">
        <span className="h-[38px] self-stretch shrink-0 basis-auto font-['Vazirmatn'] text-[24px] font-extrabold leading-[37.5px] text-[#17324d] relative text-right whitespace-nowrap z-[333]">
          مطالب مرتبط با این گزارش
        </span>
        <div className="flex gap-[24px] items-start self-stretch shrink-0 flex-nowrap relative z-[334]">
          <div className="flex flex-col items-start grow shrink-0 basis-0 flex-nowrap bg-[#fff] rounded-[16px] border-solid border border-[#e4ebf1] relative overflow-hidden shadow-[0_4px_16px_0_rgba(23,46,71,0.05)] z-[335]">
            <div className="h-[180px] self-stretch shrink-0 bg-[url(https://static.codia.ai/image/2026-08-24/vJuF0Pm9ES.png)] bg-cover bg-no-repeat relative z-[336]" />
            <div className="flex pt-[24px] pr-[24px] pb-[24px] pl-[24px] flex-col gap-[12px] items-start self-stretch shrink-0 flex-nowrap relative z-[337]">
              <div className="flex justify-between items-start self-stretch shrink-0 flex-nowrap relative z-[338]">
                <span className="flex w-[66px] h-[19px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[12px] font-normal leading-[18.75px] text-[#60758a] relative text-right whitespace-nowrap z-[339]">
                  ۲۲ مرداد ۱۴۰۵
                </span>
                <span className="flex w-[60px] h-[19px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[12px] font-normal leading-[18.75px] text-[#2094e3] relative text-right whitespace-nowrap z-[340]">
                  اخبار پروژه‌ها
                </span>
              </div>
              <span className="flex w-[330px] h-[25px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[16px] font-bold leading-[25px] text-[#17324d] relative text-right overflow-hidden whitespace-nowrap z-[341]">
                مرحله آموزش پروژه اشتغال زنان روستایی تکمیل شد
              </span>
              <span className="flex w-[336px] h-[40px] justify-end items-start self-stretch shrink-0 font-['Vazirmatn'] text-[13px] font-normal leading-[20.313px] text-[#60758a] relative text-right overflow-hidden z-[342]">
                توانمندسازی و توسعه مهارت‌های پایدار در جهت گسترش کسب‌وکارهای
                بومی در مناطق محروم.
              </span>
              <div className="flex pt-[8px] pr-0 pb-0 pl-0 justify-end items-start self-stretch shrink-0 flex-nowrap relative z-[343]">
                <span className="flex w-[76px] h-[20px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[13px] font-bold leading-[20px] text-[#2094e3] relative text-right whitespace-nowrap z-[344]">
                  مطالعه خبر ←
                </span>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-start grow shrink-0 basis-0 flex-nowrap bg-[#fff] rounded-[16px] border-solid border border-[#e4ebf1] relative overflow-hidden shadow-[0_4px_16px_0_rgba(23,46,71,0.05)] z-[345]">
            <div className="h-[180px] self-stretch shrink-0 bg-[url(https://static.codia.ai/image/2026-08-24/yZjwRhTP7B.png)] bg-cover bg-no-repeat relative z-[346]" />
            <div className="flex pt-[24px] pr-[24px] pb-[24px] pl-[24px] flex-col gap-[12px] items-start self-stretch shrink-0 flex-nowrap relative z-[347]">
              <div className="flex justify-between items-start self-stretch shrink-0 flex-nowrap relative z-[348]">
                <span className="flex w-[64px] h-[19px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[12px] font-normal leading-[18.75px] text-[#60758a] relative text-right whitespace-nowrap z-[349]">
                  ۱۸ مرداد ۱۴۰۵
                </span>
                <span className="flex w-[44px] h-[19px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[12px] font-normal leading-[18.75px] text-[#2094e3] relative text-right whitespace-nowrap z-[350]">
                  گزارش اثر
                </span>
              </div>
              <span className="flex w-[305px] h-[25px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[16px] font-bold leading-[25px] text-[#17324d] relative text-right overflow-hidden whitespace-nowrap z-[351]">
                گزارش مرحله‌ای پروژه سلامت خانواده منتشر شد
              </span>
              <span className="flex w-[336px] h-[40px] justify-end items-start self-stretch shrink-0 font-['Vazirmatn'] text-[13px] font-normal leading-[20.313px] text-[#60758a] relative text-right overflow-hidden z-[352]">
                نتایج فاز اول ارزیابی‌های دوره‌ای و بهبود دسترسی درمانی اهالی
                روستاهای محروم.
              </span>
              <div className="flex pt-[8px] pr-0 pb-0 pl-0 justify-end items-start self-stretch shrink-0 flex-nowrap relative z-[353]">
                <span className="flex w-[76px] h-[20px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[13px] font-bold leading-[20px] text-[#2094e3] relative text-right whitespace-nowrap z-[354]">
                  مطالعه خبر ←
                </span>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-start grow shrink-0 basis-0 flex-nowrap bg-[#fff] rounded-[16px] border-solid border border-[#e4ebf1] relative overflow-hidden shadow-[0_4px_16px_0_rgba(23,46,71,0.05)] z-[355]">
            <div className="h-[180px] self-stretch shrink-0 bg-[url(https://static.codia.ai/image/2026-08-24/JLsciyankS.png)] bg-cover bg-no-repeat relative z-[356]" />
            <div className="flex pt-[24px] pr-[24px] pb-[24px] pl-[24px] flex-col gap-[12px] items-start self-stretch shrink-0 flex-nowrap relative z-[357]">
              <div className="flex justify-between items-start self-stretch shrink-0 flex-nowrap relative z-[358]">
                <span className="flex w-[64px] h-[19px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[12px] font-normal leading-[18.75px] text-[#60758a] relative text-right whitespace-nowrap z-[359]">
                  ۱۵ مرداد ۱۴۰۵
                </span>
                <span className="flex w-[53px] h-[19px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[12px] font-normal leading-[18.75px] text-[#2094e3] relative text-right whitespace-nowrap z-[360]">
                  استارتاپ‌ها
                </span>
              </div>
              <span className="flex w-[336px] h-[50px] justify-end items-start self-stretch shrink-0 font-['Vazirmatn'] text-[16px] font-bold leading-[25px] text-[#17324d] relative text-right overflow-hidden z-[361]">
                راهکار سبز از عبور تعداد بهره‌مندان خود از ۲٬۸۰۰ نفر خبر داد
              </span>
              <span className="flex w-[336px] h-[40px] justify-end items-start self-stretch shrink-0 font-['Vazirmatn'] text-[13px] font-normal leading-[20.313px] text-[#60758a] relative text-right overflow-hidden z-[362]">
                رکورد جدید مشارکت‌های مردمی در طرح پایدار تامین انرژی پاک مناطق
                دورافتاده.
              </span>
              <div className="flex pt-[8px] pr-0 pb-0 pl-0 justify-end items-start self-stretch shrink-0 flex-nowrap relative z-[363]">
                <span className="flex w-[76px] h-[20px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[13px] font-bold leading-[20px] text-[#2094e3] relative text-right whitespace-nowrap z-[364]">
                  مطالعه خبر ←
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex pt-[80px] pr-[120px] pb-[80px] pl-[120px] flex-col gap-[24px] items-center self-stretch shrink-0 flex-nowrap bg-[#fcfbf8] relative z-[365]">
        <span className="h-[44px] self-stretch shrink-0 basis-auto font-['Vazirmatn'] text-[28px] font-extrabold leading-[43.75px] text-[#17324d] relative text-center whitespace-nowrap z-[366]">
          آخرین اخبار اثر اجتماعی را دنبال کنید
        </span>
        <span className="h-[23px] self-stretch shrink-0 basis-auto font-['Vazirmatn'] text-[15px] font-normal leading-[23px] text-[#60758a] relative text-center whitespace-nowrap z-[367]">
          با عضویت در خبرنامه سامانه ماه از پیشرفت پروژه‌ها و نتایج آماری آن‌ها
          باخبر شوید.
        </span>
        <div className="flex w-[307px] gap-[16px] justify-center items-start shrink-0 flex-nowrap relative z-[368]">
          <div className="flex w-[144px] pt-[11px] pr-[20px] pb-[11px] pl-[20px] gap-[8px] justify-center items-center shrink-0 flex-nowrap bg-[#fff] rounded-[12px] border-solid border border-[#e4ebf1] relative z-[369]">
            <span className="flex w-[104px] h-[22px] justify-center items-start shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-medium leading-[22px] text-[#2094e3] relative text-center whitespace-nowrap z-[370]">
              مرور گزارش‌های اثر
            </span>
          </div>
          <div className="flex w-[147px] pt-[11px] pr-[20px] pb-[11px] pl-[20px] gap-[8px] justify-center items-center shrink-0 flex-nowrap bg-[#2094e3] rounded-[12px] relative z-[371]">
            <span className="flex w-[107px] h-[22px] justify-center items-start shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-medium leading-[22px] text-[#fff] relative text-center whitespace-nowrap z-[372]">
              مشاهده همه اخبار
            </span>
          </div>
        </div>
      </div>
      <div className="flex pt-[80px] pr-[120px] pb-[40px] pl-[120px] flex-col gap-[64px] items-start self-stretch shrink-0 flex-nowrap bg-[#111e30] relative z-[373]">
        <div className="flex gap-[48px] items-start self-stretch shrink-0 flex-nowrap relative z-[374]">
          <div className="flex w-[220px] h-[182px] flex-col gap-[12px] items-end shrink-0 flex-nowrap relative z-[375]">
            <span className="flex w-[59px] h-[22px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-bold leading-[21.875px] text-[#fff] relative text-right whitespace-nowrap z-[376]">
              ارتباط با ما
            </span>
            <span className="flex w-[115px] h-[20px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[13px] font-normal leading-[20px] text-[#e4ebf1] relative text-right whitespace-nowrap z-[377]">
              تلفن: ۰۲۱-۸۸۸۸۸۸۸۸
            </span>
            <span className="flex w-[156px] h-[20px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[13px] font-normal leading-[20px] text-[#e4ebf1] relative text-right whitespace-nowrap z-[378]">
              ایمیل: info@mahplatform.ir
            </span>
            <div className="flex w-[48px] pt-[8px] pr-0 pb-0 pl-0 gap-[12px] items-center shrink-0 flex-nowrap relative z-[379]">
              <div className="flex w-[18px] h-[18px] flex-col justify-center items-center shrink-0 flex-nowrap relative overflow-hidden z-[380]">
                <div className="w-[18px] h-[18px] shrink-0 bg-[url(https://static.codia.ai/image/2026-08-24/LLOrVSvztz.png)] bg-cover bg-no-repeat relative overflow-hidden z-[381]" />
              </div>
              <div className="flex w-[18px] h-[18px] flex-col justify-center items-center shrink-0 flex-nowrap relative overflow-hidden z-[382]">
                <div className="w-[18px] h-[18px] shrink-0 bg-[url(https://static.codia.ai/image/2026-08-24/oVBE28BBwe.png)] bg-cover bg-no-repeat relative overflow-hidden z-[383]" />
              </div>
            </div>
          </div>
          <div className="flex w-[150px] h-[182px] flex-col gap-[12px] items-end shrink-0 flex-nowrap relative z-[384]">
            <span className="flex w-[39px] h-[22px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-bold leading-[21.875px] text-[#fff] relative text-right whitespace-nowrap z-[385]">
              حقوقی
            </span>
            <span className="flex w-[82px] h-[20px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[13px] font-normal leading-[20px] text-[#e4ebf1] relative text-right whitespace-nowrap z-[386]">
              قوانین و مقررات
            </span>
            <span className="flex w-[75px] h-[20px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[13px] font-normal leading-[20px] text-[#e4ebf1] relative text-right whitespace-nowrap z-[387]">
              حریم خصوصی
            </span>
          </div>
          <div className="flex w-[160px] h-[182px] flex-col gap-[12px] items-end shrink-0 flex-nowrap relative z-[388]">
            <span className="flex w-[49px] h-[22px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-bold leading-[21.875px] text-[#fff] relative text-right whitespace-nowrap z-[389]">
              پشتیبانی
            </span>
            <span className="flex w-[55px] h-[20px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[13px] font-normal leading-[20px] text-[#e4ebf1] relative text-right whitespace-nowrap z-[390]">
              تماس با ما
            </span>
            <span className="flex w-[77px] h-[20px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[13px] font-normal leading-[20px] text-[#e4ebf1] relative text-right whitespace-nowrap z-[391]">
              سؤالات متداول
            </span>
            <span className="flex w-[82px] h-[20px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[13px] font-normal leading-[20px] text-[#e4ebf1] relative text-right whitespace-nowrap z-[392]">
              پیگیری مشارکت
            </span>
          </div>
          <div className="flex w-[180px] flex-col gap-[12px] items-end shrink-0 flex-nowrap relative z-[393]">
            <span className="flex w-[83px] h-[22px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-bold leading-[21.875px] text-[#fff] relative text-right whitespace-nowrap z-[394]">
              دسترسی سریع
            </span>
            <span className="flex w-[38px] h-[20px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[13px] font-normal leading-[20px] text-[#e4ebf1] relative text-right whitespace-nowrap z-[395]">
              پروژه‌ها
            </span>
            <span className="flex w-[69px] h-[20px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[13px] font-normal leading-[20px] text-[#e4ebf1] relative text-right whitespace-nowrap z-[396]">
              برای شرکت‌ها
            </span>
            <span className="flex w-[71px] h-[20px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[13px] font-normal leading-[20px] text-[#e4ebf1] relative text-right whitespace-nowrap z-[397]">
              نحوه مشارکت
            </span>
            <span className="flex w-[84px] h-[20px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[13px] font-normal leading-[20px] text-[#e4ebf1] relative text-right whitespace-nowrap z-[398]">
              ثبت‌نام استارتاپ
            </span>
            <span className="flex w-[80px] h-[20px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[13px] font-normal leading-[20px] text-[#e4ebf1] relative text-right whitespace-nowrap z-[399]">
              اخبار و رویدادها
            </span>
          </div>
          <div className="flex w-[298px] h-[182px] flex-col gap-[14px] items-end shrink-0 flex-nowrap relative z-[400]">
            <div className="w-[210px] h-[70px] shrink-0 bg-[url(https://static.codia.ai/image/2026-08-24/pgdqvBijPB.png)] bg-cover bg-no-repeat relative z-[401]" />
            <span className="flex w-[298px] h-[44px] justify-end items-start self-stretch shrink-0 font-['Vazirmatn'] text-[13px] font-normal leading-[22px] text-[#e4ebf1] relative text-right z-[402]">
              سامانه مشارکت در پروژه‌های اثر اجتماعی با مسیر مالی شفاف و اثر
              قابل‌اندازه‌گیری.
            </span>
          </div>
        </div>
        <div className="flex pt-[20px] pr-0 pb-0 pl-0 flex-col gap-[4px] items-center self-stretch shrink-0 flex-nowrap border-solid border-b border-b-[rgba(255,255,255,0.12)] relative z-[403]">
          <span className="flex w-[219px] h-[19px] justify-center items-start shrink-0 basis-auto font-['Vazirmatn'] text-[12px] font-normal leading-[18.75px] text-[#e4ebf1] relative text-center whitespace-nowrap z-[404]">
            طراحی و توسعه با هدف ارتقای عدالت اجتماعی
          </span>
          <span className="flex w-[203px] h-[19px] justify-center items-start shrink-0 basis-auto font-['Vazirmatn'] text-[12px] font-normal leading-[18.75px] text-[#e4ebf1] relative text-center whitespace-nowrap z-[405]">
            تمامی حقوق برای سامانه ماه محفوظ است.
          </span>
        </div>
      </div>
    </div>
  );
}
