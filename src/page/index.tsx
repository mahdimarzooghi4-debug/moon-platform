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
          <div className="w-[137px] h-[46px] shrink-0 bg-[url(/assets/EUZU8qpLC5.png)] bg-cover bg-no-repeat relative z-[16]" />
        </div>
      </div>
      <div className="flex pt-[24px] pr-[120px] pb-[16px] pl-[120px] flex-col gap-[8px] items-end self-stretch shrink-0 flex-nowrap relative z-[17]">
        <div className="w-[398px] shrink-0 font-['Vazirmatn'] text-[28px] font-extrabold leading-[43.75px] relative text-right whitespace-nowrap z-[18]">
          <span className="font-['Vazirmatn'] text-[28px] font-extrabold leading-[43.75px] text-[#17324d] relative text-right">
            نتایج جست‌وجو برای{" "}
          </span>
          <span className="font-['Vazirmatn'] text-[28px] font-extrabold leading-[43.75px] text-[#2094e3] relative text-right">
            «اشتغال زنان»
          </span>
        </div>
        <span className="flex w-[263px] h-[22px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-normal leading-[21.875px] text-[#60758a] relative text-right whitespace-nowrap z-[19]">
          ۱۸ نتیجه در محتوای عمومی سامانه ماه پیدا شد.
        </span>
      </div>
      <div className="flex pt-[8px] pr-[120px] pb-[16px] pl-[120px] items-start self-stretch shrink-0 flex-nowrap relative z-20">
        <div className="flex pt-[12px] pr-[12px] pb-[12px] pl-[12px] gap-[12px] items-center grow shrink-0 basis-0 flex-nowrap bg-[#fff] rounded-[16px] border-solid border border-[#e4ebf1] relative shadow-[0_4px_16px_0_rgba(22,45,71,0.08)] z-[21]">
          <div className="flex w-[97px] pt-[11px] pr-[20px] pb-[11px] pl-[20px] gap-[8px] justify-center items-center shrink-0 flex-nowrap bg-[#2094e3] rounded-[12px] relative z-[22]">
            <span className="flex w-[57px] h-[22px] justify-center items-start shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-medium leading-[22px] text-[#fff] relative text-center whitespace-nowrap z-[23]">
              جست‌وجو
            </span>
          </div>
          <div className="flex gap-[8px] items-center grow shrink-0 basis-0 flex-nowrap relative z-[24]">
            <div className="flex w-[16px] h-[16px] flex-col justify-center items-center shrink-0 flex-nowrap relative z-[25]">
              <div className="w-[16px] h-[16px] shrink-0 bg-[url(/assets/6HsJeqCggq.png)] bg-cover bg-no-repeat relative overflow-hidden z-[26]" />
            </div>
            <span className="h-[23px] grow shrink-0 basis-auto font-['Vazirmatn'] text-[15px] font-normal leading-[23px] text-[#17324d] relative text-right whitespace-nowrap z-[27]">
              اشتغال زنان
            </span>
            <div className="flex w-[20px] h-[20px] flex-col justify-center items-center shrink-0 flex-nowrap relative z-[28]">
              <div className="w-[20px] h-[20px] shrink-0 bg-[url(/assets/Fe3PsQ3r12.png)] bg-cover bg-no-repeat relative overflow-hidden z-[29]" />
            </div>
          </div>
        </div>
      </div>
      <div className="flex pt-0 pr-[120px] pb-0 pl-[120px] gap-[24px] justify-end items-start self-stretch shrink-0 flex-nowrap border-solid border-t border-t-[#e4ebf1] relative z-30">
        <div className="flex w-[98px] pt-[14px] pr-[8px] pb-[14px] pl-[8px] gap-[4px] items-start shrink-0 flex-nowrap relative z-[31]">
          <span className="h-[22px] shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-medium leading-[21.875px] text-[#60758a] relative text-left whitespace-nowrap z-[32]">
            صفحات راهنما{" "}
          </span>
        </div>
        <div className="flex w-[43px] pt-[14px] pr-[8px] pb-[14px] pl-[8px] gap-[4px] items-start shrink-0 flex-nowrap relative z-[33]">
          <span className="h-[22px] shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-medium leading-[21.875px] text-[#60758a] relative text-left whitespace-nowrap z-[34]">
            اخبار{" "}
          </span>
        </div>
        <div className="flex w-[92px] pt-[14px] pr-[8px] pb-[14px] pl-[8px] gap-[4px] items-start shrink-0 flex-nowrap relative z-[35]">
          <span className="h-[22px] shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-medium leading-[21.875px] text-[#60758a] relative text-left whitespace-nowrap z-[36]">
            گزارش‌های اثر{" "}
          </span>
        </div>
        <div className="flex w-[79px] pt-[14px] pr-[8px] pb-[14px] pl-[8px] gap-[4px] items-start shrink-0 flex-nowrap relative z-[37]">
          <span className="h-[22px] shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-medium leading-[21.875px] text-[#60758a] relative text-left whitespace-nowrap z-[38]">
            استارتاپ‌ها{" "}
          </span>
        </div>
        <div className="flex w-[57px] pt-[14px] pr-[8px] pb-[14px] pl-[8px] gap-[4px] items-start shrink-0 flex-nowrap relative z-[39]">
          <span className="h-[22px] shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-medium leading-[21.875px] text-[#60758a] relative text-left whitespace-nowrap z-40">
            پروژه‌ها{" "}
          </span>
        </div>
        <div className="flex w-[42px] pt-[14px] pr-[8px] pb-[12px] pl-[8px] flex-col gap-[8px] items-start shrink-0 flex-nowrap border-solid border-t-[3px] border-t-[#2094e3] relative z-[41]">
          <span className="h-[22px] shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-bold leading-[21.875px] text-[#2094e3] relative text-left whitespace-nowrap z-[42]">
            همه{" "}
          </span>
        </div>
      </div>
      <div className="flex pt-[20px] pr-[120px] pb-[20px] pl-[120px] flex-col gap-[16px] items-start self-stretch shrink-0 flex-nowrap bg-[#fcfbf8] border-solid border-t border-t-[#e4ebf1] relative z-[43]">
        <div className="flex gap-[12px] items-start self-stretch shrink-0 flex-nowrap relative z-[44]">
          <div className="flex pt-[10px] pr-[14px] pb-[10px] pl-[14px] gap-[8px] items-center grow shrink-0 basis-0 flex-nowrap bg-[#fff] rounded-[10px] border-solid border border-[#e4ebf1] relative z-[45]">
            <div className="flex w-[14px] h-[14px] flex-col justify-center items-center shrink-0 flex-nowrap relative z-[46]">
              <div className="w-[14px] h-[14px] shrink-0 bg-[url(/assets/6nO5ULyKG6.png)] bg-cover bg-no-repeat relative overflow-hidden z-[47]" />
            </div>
            <span className="h-[20px] grow shrink-0 basis-auto font-['Vazirmatn'] text-[13px] font-normal leading-[20px] text-[#17324d] relative text-right whitespace-nowrap z-[48]">
              مرتبط‌ترین
            </span>
          </div>
          <div className="flex pt-[10px] pr-[14px] pb-[10px] pl-[14px] gap-[8px] items-center grow shrink-0 basis-0 flex-nowrap bg-[#fff] rounded-[10px] border-solid border border-[#e4ebf1] relative z-[49]">
            <div className="flex w-[14px] h-[14px] flex-col justify-center items-center shrink-0 flex-nowrap relative z-50">
              <div className="w-[14px] h-[14px] shrink-0 bg-[url(/assets/2OVXH2AZ8B.png)] bg-cover bg-no-repeat relative overflow-hidden z-[51]" />
            </div>
            <span className="h-[20px] grow shrink-0 basis-auto font-['Vazirmatn'] text-[13px] font-normal leading-[20px] text-[#17324d] relative text-right whitespace-nowrap z-[52]">
              بازه انتشار
            </span>
          </div>
          <div className="flex pt-[10px] pr-[14px] pb-[10px] pl-[14px] gap-[8px] items-center grow shrink-0 basis-0 flex-nowrap bg-[#fff] rounded-[10px] border-solid border border-[#e4ebf1] relative z-[53]">
            <div className="flex w-[14px] h-[14px] flex-col justify-center items-center shrink-0 flex-nowrap relative z-[54]">
              <div className="w-[14px] h-[14px] shrink-0 bg-[url(/assets/Y3hs90ZdLr.png)] bg-cover bg-no-repeat relative overflow-hidden z-[55]" />
            </div>
            <span className="h-[20px] grow shrink-0 basis-auto font-['Vazirmatn'] text-[13px] font-normal leading-[20px] text-[#17324d] relative text-right whitespace-nowrap z-[56]">
              همه استان‌ها
            </span>
          </div>
          <div className="flex pt-[10px] pr-[14px] pb-[10px] pl-[14px] gap-[8px] items-center grow shrink-0 basis-0 flex-nowrap bg-[#fff] rounded-[10px] border-solid border border-[#e4ebf1] relative z-[57]">
            <div className="flex w-[14px] h-[14px] flex-col justify-center items-center shrink-0 flex-nowrap relative z-[58]">
              <div className="w-[14px] h-[14px] shrink-0 bg-[url(/assets/w0J8BM121S.png)] bg-cover bg-no-repeat relative overflow-hidden z-[59]" />
            </div>
            <span className="h-[20px] grow shrink-0 basis-auto font-['Vazirmatn'] text-[13px] font-normal leading-[20px] text-[#17324d] relative text-right whitespace-nowrap z-[60]">
              حوزه اثر
            </span>
          </div>
          <div className="flex pt-[10px] pr-[14px] pb-[10px] pl-[14px] gap-[8px] items-center grow shrink-0 basis-0 flex-nowrap bg-[#fff] rounded-[10px] border-solid border border-[#e4ebf1] relative z-[61]">
            <div className="flex w-[14px] h-[14px] flex-col justify-center items-center shrink-0 flex-nowrap relative z-[62]">
              <div className="w-[14px] h-[14px] shrink-0 bg-[url(/assets/iPJhWAoAMn.png)] bg-cover bg-no-repeat relative overflow-hidden z-[63]" />
            </div>
            <span className="h-[20px] grow shrink-0 basis-auto font-['Vazirmatn'] text-[13px] font-normal leading-[20px] text-[#17324d] relative text-right whitespace-nowrap z-[64]">
              نوع محتوا
            </span>
          </div>
        </div>
        <div className="flex gap-[16px] justify-end items-center self-stretch shrink-0 flex-nowrap relative z-[65]">
          <span className="flex w-[84px] h-[20px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[13px] font-normal leading-[20px] text-[#60758a] relative text-right whitespace-nowrap z-[66]">
            پاک‌کردن فیلترها
          </span>
          <div className="flex w-[102px] pt-[11px] pr-[20px] pb-[11px] pl-[20px] gap-[8px] justify-center items-center shrink-0 flex-nowrap bg-[#fff] rounded-[12px] border-solid border border-[#e4ebf1] relative z-[67]">
            <span className="flex w-[62px] h-[22px] justify-center items-start shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-medium leading-[22px] text-[#2094e3] relative text-center whitespace-nowrap z-[68]">
              اعمال فیلتر
            </span>
          </div>
        </div>
      </div>
      <div className="flex pt-[20px] pr-[120px] pb-[20px] pl-[120px] justify-between items-center self-stretch shrink-0 flex-nowrap relative z-[69]">
        <div className="flex w-[143px] gap-[6px] items-center shrink-0 flex-nowrap relative z-[70]">
          <div className="flex w-[14px] h-[14px] flex-col justify-center items-center shrink-0 flex-nowrap relative z-[71]">
            <div className="w-[14px] h-[14px] shrink-0 bg-[url(/assets/DRpOqAS2ou.png)] bg-cover bg-no-repeat relative overflow-hidden z-[72]" />
          </div>
          <span className="flex w-[123px] h-[22px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-normal leading-[21.875px] text-[#60758a] relative text-right whitespace-nowrap z-[73]">
            مرتب‌سازی: مرتبط‌ترین
          </span>
        </div>
        <span className="flex w-[209px] h-[23px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[15px] font-medium leading-[23px] text-[#17324d] relative text-right whitespace-nowrap z-[74]">
          نمایش ۱ تا ۱۰ از ۱۸ نتیجه جست‌وجو
        </span>
      </div>
      <div className="flex pt-[16px] pr-[120px] pb-[32px] pl-[120px] flex-col gap-[20px] items-start self-stretch shrink-0 flex-nowrap relative z-[75]">
        <div className="flex gap-[10px] justify-end items-center self-stretch shrink-0 flex-nowrap relative z-[76]">
          <div className="flex w-[49px] pt-[4px] pr-[8px] pb-[4px] pl-[8px] items-start shrink-0 flex-nowrap bg-[#eaf5fd] rounded-[8px] relative z-[77]">
            <span className="h-[19px] shrink-0 basis-auto font-['Vazirmatn'] text-[12px] font-bold leading-[18.75px] text-[#2094e3] relative text-left whitespace-nowrap z-[78]">
              ۶ پروژه
            </span>
          </div>
          <span className="flex w-[60px] h-[31px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[20px] font-extrabold leading-[31px] text-[#17324d] relative text-right whitespace-nowrap z-[79]">
            پروژه‌ها
          </span>
        </div>
        <div className="flex gap-[24px] items-start self-stretch shrink-0 flex-nowrap relative z-[80]">
          <div className="flex pt-[24px] pr-[24px] pb-[24px] pl-[24px] flex-col gap-[16px] items-end grow shrink-0 basis-0 flex-nowrap bg-[#fff] rounded-[24px] border-solid border border-[#e4ebf1] relative shadow-[0_4px_16px_0_rgba(22,45,71,0.08)] z-[81]">
            <div className="h-[160px] self-stretch shrink-0 bg-[url(/assets/4W1a4aJ2KM.png)] bg-cover bg-no-repeat rounded-[16px] relative z-[82]" />
            <div className="flex flex-col gap-[8px] items-end self-stretch shrink-0 flex-nowrap relative z-[83]">
              <div className="flex w-[199px] gap-[6px] items-center shrink-0 flex-nowrap relative z-[84]">
                <span className="h-[19px] shrink-0 basis-auto font-['Vazirmatn'] text-[12px] font-normal leading-[18.75px] text-[#60758a] relative text-left whitespace-nowrap z-[85]">
                  استان: گلستان
                </span>
                <span className="h-[19px] shrink-0 basis-auto font-['Vazirmatn'] text-[12px] font-normal leading-[18.75px] text-[#60758a] relative text-left whitespace-nowrap z-[86]">
                  |
                </span>
                <span className="h-[19px] shrink-0 basis-auto font-['Vazirmatn'] text-[12px] font-normal leading-[18.75px] text-[#2094e3] relative text-left whitespace-nowrap z-[87]">
                  حوزه: اشتغال و معیشت
                </span>
              </div>
              <span className="flex w-[151px] h-[28px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[18px] font-bold leading-[28px] text-[#17324d] relative text-right whitespace-nowrap z-[88]">
                اشتغال زنان روستایی
              </span>
              <span className="flex w-[105px] h-[20px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[13px] font-normal leading-[20px] text-[#60758a] relative text-right whitespace-nowrap z-[89]">
                استارتاپ: راهکار سبز
              </span>
            </div>
            <div className="flex flex-col gap-[6px] items-end self-stretch shrink-0 flex-nowrap relative z-[90]">
              <div className="flex justify-between items-start self-stretch shrink-0 flex-nowrap relative z-[91]">
                <span className="flex w-[103px] h-[19px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[12px] font-normal leading-[18.75px] text-[#60758a] relative text-right whitespace-nowrap z-[92]">
                  هدف: ۴ میلیارد تومان
                </span>
                <span className="flex w-[85px] h-[19px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[12px] font-bold leading-[18.75px] text-[#17324d] relative text-right whitespace-nowrap z-[93]">
                  ۲٫۴ میلیارد تومان
                </span>
              </div>
              <div className="flex h-[8px] justify-end items-start self-stretch shrink-0 flex-nowrap bg-[#e4ebf1] rounded-[4px] relative overflow-hidden z-[94]">
                <div className="w-[220px] self-stretch shrink-0 bg-[#2094e3] relative z-[95]" />
              </div>
              <span className="flex w-[141px] h-[19px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[12px] font-bold leading-[18.75px] text-[#159455] relative text-right whitespace-nowrap z-[96]">
                ۵۸٪ تأمین شده • در حال اجرا
              </span>
            </div>
            <div className="flex pt-[11px] pr-[20px] pb-[11px] pl-[20px] gap-[8px] justify-center items-center self-stretch shrink-0 flex-nowrap bg-[#2094e3] rounded-[12px] relative z-[97]">
              <span className="flex w-[78px] h-[22px] justify-center items-start shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-medium leading-[22px] text-[#fff] relative text-center whitespace-nowrap z-[98]">
                مشاهده پروژه
              </span>
            </div>
          </div>
          <div className="flex pt-[24px] pr-[24px] pb-[24px] pl-[24px] flex-col gap-[16px] items-end grow shrink-0 basis-0 flex-nowrap bg-[#fff] rounded-[24px] border-solid border border-[#e4ebf1] relative shadow-[0_4px_16px_0_rgba(22,45,71,0.08)] z-[99]">
            <div className="h-[160px] self-stretch shrink-0 bg-[url(/assets/GM24JjNCq7.png)] bg-cover bg-no-repeat rounded-[16px] relative z-[100]" />
            <div className="flex flex-col gap-[8px] items-end self-stretch shrink-0 flex-nowrap relative z-[101]">
              <div className="flex w-[203px] gap-[6px] items-center shrink-0 flex-nowrap relative z-[102]">
                <span className="h-[19px] shrink-0 basis-auto font-['Vazirmatn'] text-[12px] font-normal leading-[18.75px] text-[#60758a] relative text-left whitespace-nowrap z-[103]">
                  استان: تهران
                </span>
                <span className="h-[19px] shrink-0 basis-auto font-['Vazirmatn'] text-[12px] font-normal leading-[18.75px] text-[#60758a] relative text-left whitespace-nowrap z-[104]">
                  |
                </span>
                <span className="h-[19px] shrink-0 basis-auto font-['Vazirmatn'] text-[12px] font-normal leading-[18.75px] text-[#2094e3] relative text-left whitespace-nowrap z-[105]">
                  حوزه: توانمندسازی اجتماعی
                </span>
              </div>
              <span className="flex w-[255px] h-[28px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[18px] font-bold leading-[28px] text-[#17324d] relative text-right whitespace-nowrap z-[106]">
                سامانه اشتغال زنان سرپرست خانوار
              </span>
              <span className="flex w-[104px] h-[20px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[13px] font-normal leading-[20px] text-[#60758a] relative text-right whitespace-nowrap z-[107]">
                استارتاپ: کارآفرین‌یار
              </span>
            </div>
            <div className="flex flex-col gap-[6px] items-end self-stretch shrink-0 flex-nowrap relative z-[108]">
              <div className="flex justify-between items-start self-stretch shrink-0 flex-nowrap relative z-[109]">
                <span className="flex w-[104px] h-[19px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[12px] font-normal leading-[18.75px] text-[#60758a] relative text-right whitespace-nowrap z-[110]">
                  هدف: ۳ میلیارد تومان
                </span>
                <span className="flex w-[84px] h-[19px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[12px] font-bold leading-[18.75px] text-[#17324d] relative text-right whitespace-nowrap z-[111]">
                  ۲٫۲ میلیارد تومان
                </span>
              </div>
              <div className="flex h-[8px] justify-end items-start self-stretch shrink-0 flex-nowrap bg-[#e4ebf1] rounded-[4px] relative overflow-hidden z-[112]">
                <div className="w-[280px] self-stretch shrink-0 bg-[#2094e3] relative z-[113]" />
              </div>
              <span className="flex w-[141px] h-[19px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[12px] font-bold leading-[18.75px] text-[#159455] relative text-right whitespace-nowrap z-[114]">
                ۷۴٪ تأمین شده • در حال اجرا
              </span>
            </div>
            <div className="flex pt-[11px] pr-[20px] pb-[11px] pl-[20px] gap-[8px] justify-center items-center self-stretch shrink-0 flex-nowrap bg-[#2094e3] rounded-[12px] relative z-[115]">
              <span className="flex w-[78px] h-[22px] justify-center items-start shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-medium leading-[22px] text-[#fff] relative text-center whitespace-nowrap z-[116]">
                مشاهده پروژه
              </span>
            </div>
          </div>
          <div className="flex pt-[24px] pr-[24px] pb-[24px] pl-[24px] flex-col gap-[16px] items-end grow shrink-0 basis-0 flex-nowrap bg-[#fff] rounded-[24px] border-solid border border-[#e4ebf1] relative shadow-[0_4px_16px_0_rgba(22,45,71,0.08)] z-[117]">
            <div className="h-[160px] self-stretch shrink-0 bg-[url(/assets/81Qv3pPnXe.png)] bg-cover bg-no-repeat rounded-[16px] relative z-[118]" />
            <div className="flex flex-col gap-[8px] items-end self-stretch shrink-0 flex-nowrap relative z-[119]">
              <div className="flex w-[221px] gap-[6px] items-center shrink-0 flex-nowrap relative z-[120]">
                <span className="h-[19px] shrink-0 basis-auto font-['Vazirmatn'] text-[12px] font-normal leading-[18.75px] text-[#60758a] relative text-left whitespace-nowrap z-[121]">
                  استان: خراسان رضوی
                </span>
                <span className="h-[19px] shrink-0 basis-auto font-['Vazirmatn'] text-[12px] font-normal leading-[18.75px] text-[#60758a] relative text-left whitespace-nowrap z-[122]">
                  |
                </span>
                <span className="h-[19px] shrink-0 basis-auto font-['Vazirmatn'] text-[12px] font-normal leading-[18.75px] text-[#2094e3] relative text-left whitespace-nowrap z-[123]">
                  حوزه: کسب‌وکار خانگی
                </span>
              </div>
              <span className="flex w-[230px] h-[28px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[18px] font-bold leading-[28px] text-[#17324d] relative text-right whitespace-nowrap z-[124]">
                توسعه مشاغل خانگی زنان محلی
              </span>
              <span className="flex w-[99px] h-[20px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[13px] font-normal leading-[20px] text-[#60758a] relative text-right whitespace-nowrap z-[125]">
                استارتاپ: بازار بومی
              </span>
            </div>
            <div className="flex flex-col gap-[6px] items-end self-stretch shrink-0 flex-nowrap relative z-[126]">
              <div className="flex justify-between items-start self-stretch shrink-0 flex-nowrap relative z-[127]">
                <span className="flex w-[112px] h-[19px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[12px] font-normal leading-[18.75px] text-[#60758a] relative text-right whitespace-nowrap z-[128]">
                  هدف: ۱٫۵ میلیارد تومان
                </span>
                <span className="flex w-[82px] h-[19px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[12px] font-bold leading-[18.75px] text-[#17324d] relative text-right whitespace-nowrap z-[129]">
                  ۱٫۵ میلیارد تومان
                </span>
              </div>
              <div className="flex h-[8px] items-start self-stretch shrink-0 flex-nowrap bg-[#e4ebf1] rounded-[4px] relative overflow-hidden z-[130]">
                <div className="w-[336px] self-stretch shrink-0 bg-[#159455] relative z-[131]" />
              </div>
              <span className="flex w-[139px] h-[19px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[12px] font-bold leading-[18.75px] text-[#159455] relative text-right whitespace-nowrap z-[132]">
                ۱۰۰٪ تأمین شده • تکمیل‌شده
              </span>
            </div>
            <div className="flex pt-[11px] pr-[20px] pb-[11px] pl-[20px] gap-[8px] justify-center items-center self-stretch shrink-0 flex-nowrap bg-[#2094e3] rounded-[12px] relative z-[133]">
              <span className="flex w-[78px] h-[22px] justify-center items-start shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-medium leading-[22px] text-[#fff] relative text-center whitespace-nowrap z-[134]">
                مشاهده پروژه
              </span>
            </div>
          </div>
        </div>
        <div className="flex pt-[12px] pr-0 pb-0 pl-0 gap-[8px] justify-center items-center self-stretch shrink-0 flex-nowrap relative z-[135]">
          <div className="flex w-[16px] h-[16px] flex-col justify-center items-center shrink-0 flex-nowrap relative z-[136]">
            <div className="w-[16px] h-[16px] shrink-0 bg-[url(/assets/5TCY96qrkV.png)] bg-cover bg-no-repeat relative overflow-hidden z-[137]" />
          </div>
          <span className="flex w-[154px] h-[22px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-bold leading-[21.875px] text-[#2094e3] relative text-right whitespace-nowrap z-[138]">
            مشاهده همه نتایج پروژه‌ها
          </span>
        </div>
      </div>
      <div className="flex pt-[16px] pr-[120px] pb-[32px] pl-[120px] flex-col gap-[16px] items-start self-stretch shrink-0 flex-nowrap relative z-[139]">
        <span className="h-[31px] self-stretch shrink-0 basis-auto font-['Vazirmatn'] text-[20px] font-extrabold leading-[31px] text-[#17324d] relative text-right whitespace-nowrap z-[140]">
          استارتاپ‌ها
        </span>
        <div className="flex pt-[20px] pr-[20px] pb-[20px] pl-[20px] gap-[20px] items-center self-stretch shrink-0 flex-nowrap bg-[#fff] rounded-[20px] border-solid border border-[#e4ebf1] relative shadow-[0_4px_16px_0_rgba(22,45,71,0.08)] z-[141]">
          <span className="flex w-[93px] h-[22px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-bold leading-[21.875px] text-[#2094e3] relative text-right whitespace-nowrap z-[142]">
            مشاهده پروفایل
          </span>
          <div className="flex w-[307px] gap-[32px] items-center shrink-0 flex-nowrap relative z-[143]">
            <div className="flex w-[63px] flex-col gap-[2px] items-center shrink-0 flex-nowrap relative z-[144]">
              <span className="h-[25px] shrink-0 basis-auto font-['Vazirmatn'] text-[16px] font-bold leading-[25px] text-[#17324d] relative text-left whitespace-nowrap z-[145]">
                ۲٬۸۴۰ نفر
              </span>
              <span className="h-[19px] shrink-0 basis-auto font-['Vazirmatn'] text-[12px] font-normal leading-[18.75px] text-[#60758a] relative text-left whitespace-nowrap z-[146]">
                بهره‌مند فعال
              </span>
            </div>
            <div className="flex w-[66px] flex-col gap-[2px] items-center shrink-0 flex-nowrap relative z-[147]">
              <span className="h-[25px] shrink-0 basis-auto font-['Vazirmatn'] text-[16px] font-bold leading-[25px] text-[#159455] relative text-left whitespace-nowrap z-[148]">
                ۸۶٪
              </span>
              <span className="h-[19px] shrink-0 basis-auto font-['Vazirmatn'] text-[12px] font-normal leading-[18.75px] text-[#60758a] relative text-left whitespace-nowrap z-[149]">
                تحقق شاخص
              </span>
            </div>
            <div className="flex w-[114px] flex-col gap-[2px] items-center shrink-0 flex-nowrap relative z-[150]">
              <span className="h-[25px] shrink-0 basis-auto font-['Vazirmatn'] text-[16px] font-bold leading-[25px] text-[#17324d] relative text-left whitespace-nowrap z-[151]">
                ۲ فعال / ۳ تکمیل
              </span>
              <span className="h-[19px] shrink-0 basis-auto font-['Vazirmatn'] text-[12px] font-normal leading-[18.75px] text-[#60758a] relative text-left whitespace-nowrap z-[152]">
                وضعیت پروژه‌ها
              </span>
            </div>
          </div>
          <div className="flex flex-col gap-[6px] items-end grow shrink-0 basis-0 flex-nowrap relative z-[153]">
            <div className="flex w-[179px] gap-[8px] justify-end items-center shrink-0 flex-nowrap relative z-[154]">
              <div className="flex w-[103px] pt-[2px] pr-[8px] pb-[2px] pl-[8px] items-start shrink-0 flex-nowrap bg-[#eaf8f0] rounded-[6px] relative z-[155]">
                <span className="flex w-[87px] h-[17px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[11px] font-normal leading-[17px] text-[#159455] relative text-right whitespace-nowrap z-[156]">
                  تأییدشده خانه خلاق
                </span>
              </div>
              <span className="flex w-[68px] h-[25px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[16px] font-bold leading-[25px] text-[#17324d] relative text-right whitespace-nowrap z-[157]">
                راهکار سبز
              </span>
            </div>
            <span className="flex w-[525px] h-[20px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[13px] font-normal leading-[20px] text-[#60758a] relative text-right whitespace-nowrap z-[158]">
              تمرکز بر توانمندسازی اقتصادی، مشاغل سبز و توسعه زنجیره ارزش
              محصولات روستایی در استان گلستان.
            </span>
          </div>
          <div className="flex w-[48px] h-[48px] justify-center items-center shrink-0 flex-nowrap bg-[#eaf5fd] rounded-[12px] relative z-[159]">
            <div className="flex w-[24px] h-[24px] flex-col justify-center items-center shrink-0 flex-nowrap relative z-[160]">
              <div className="w-[24px] h-[24px] shrink-0 bg-[url(/assets/Ke58by4RHv.png)] bg-cover bg-no-repeat relative overflow-hidden z-[161]" />
            </div>
          </div>
        </div>
        <div className="flex pt-[20px] pr-[20px] pb-[20px] pl-[20px] gap-[20px] items-center self-stretch shrink-0 flex-nowrap bg-[#fff] rounded-[20px] border-solid border border-[#e4ebf1] relative shadow-[0_4px_16px_0_rgba(22,45,71,0.08)] z-[162]">
          <span className="flex w-[93px] h-[22px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-bold leading-[21.875px] text-[#2094e3] relative text-right whitespace-nowrap z-[163]">
            مشاهده پروفایل
          </span>
          <div className="flex w-[301px] gap-[32px] items-center shrink-0 flex-nowrap relative z-[164]">
            <div className="flex w-[63px] flex-col gap-[2px] items-center shrink-0 flex-nowrap relative z-[165]">
              <span className="h-[25px] shrink-0 basis-auto font-['Vazirmatn'] text-[16px] font-bold leading-[25px] text-[#17324d] relative text-left whitespace-nowrap z-[166]">
                ۱٬۴۲۰ نفر
              </span>
              <span className="h-[19px] shrink-0 basis-auto font-['Vazirmatn'] text-[12px] font-normal leading-[18.75px] text-[#60758a] relative text-left whitespace-nowrap z-[167]">
                بهره‌مند فعال
              </span>
            </div>
            <div className="flex w-[66px] flex-col gap-[2px] items-center shrink-0 flex-nowrap relative z-[168]">
              <span className="h-[25px] shrink-0 basis-auto font-['Vazirmatn'] text-[16px] font-bold leading-[25px] text-[#159455] relative text-left whitespace-nowrap z-[169]">
                ۸۲٪
              </span>
              <span className="h-[19px] shrink-0 basis-auto font-['Vazirmatn'] text-[12px] font-normal leading-[18.75px] text-[#60758a] relative text-left whitespace-nowrap z-[170]">
                تحقق شاخص
              </span>
            </div>
            <div className="flex w-[108px] flex-col gap-[2px] items-center shrink-0 flex-nowrap relative z-[171]">
              <span className="h-[25px] shrink-0 basis-auto font-['Vazirmatn'] text-[16px] font-bold leading-[25px] text-[#17324d] relative text-left whitespace-nowrap z-[172]">
                ۱ فعال / ۲ تکمیل
              </span>
              <span className="h-[19px] shrink-0 basis-auto font-['Vazirmatn'] text-[12px] font-normal leading-[18.75px] text-[#60758a] relative text-left whitespace-nowrap z-[173]">
                وضعیت پروژه‌ها
              </span>
            </div>
          </div>
          <div className="flex flex-col gap-[6px] items-end grow shrink-0 basis-0 flex-nowrap relative z-[174]">
            <div className="flex w-[132px] gap-[8px] justify-end items-center shrink-0 flex-nowrap relative z-[175]">
              <div className="flex w-[56px] pt-[2px] pr-[8px] pb-[2px] pl-[8px] items-start shrink-0 flex-nowrap bg-[#eaf8f0] rounded-[6px] relative z-[176]">
                <span className="flex w-[40px] h-[17px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[11px] font-normal leading-[17px] text-[#159455] relative text-right whitespace-nowrap z-[177]">
                  تأییدشده
                </span>
              </div>
              <span className="flex w-[68px] h-[25px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[16px] font-bold leading-[25px] text-[#17324d] relative text-right whitespace-nowrap z-[178]">
                کارآفرین‌یار
              </span>
            </div>
            <span className="flex w-[454px] h-[20px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[13px] font-normal leading-[20px] text-[#60758a] relative text-right whitespace-nowrap z-[179]">
              توسعه فرصت‌های شغلی پایدار برای توان‌افزایی زنان سرپرست خانوار در
              حاشیه کلان‌شهرها.
            </span>
          </div>
          <div className="flex w-[48px] h-[48px] justify-center items-center shrink-0 flex-nowrap bg-[#eaf5fd] rounded-[12px] relative z-[180]">
            <div className="flex w-[24px] h-[24px] flex-col justify-center items-center shrink-0 flex-nowrap relative z-[181]">
              <div className="w-[24px] h-[24px] shrink-0 bg-[url(/assets/3LyNpC2VeU.png)] bg-cover bg-no-repeat relative overflow-hidden z-[182]" />
            </div>
          </div>
        </div>
      </div>
      <div className="flex pt-[16px] pr-[120px] pb-[32px] pl-[120px] flex-col gap-[16px] items-start self-stretch shrink-0 flex-nowrap relative z-[183]">
        <span className="h-[31px] self-stretch shrink-0 basis-auto font-['Vazirmatn'] text-[20px] font-extrabold leading-[31px] text-[#17324d] relative text-right whitespace-nowrap z-[184]">
          گزارش‌های اثر
        </span>
        <div className="flex pt-[20px] pr-[20px] pb-[20px] pl-[20px] gap-[20px] items-center self-stretch shrink-0 flex-nowrap bg-[#fff] rounded-[20px] border-solid border border-[#e4ebf1] relative shadow-[0_4px_16px_0_rgba(22,45,71,0.08)] z-[185]">
          <span className="flex w-[87px] h-[22px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-bold leading-[21.875px] text-[#2094e3] relative text-right whitespace-nowrap z-[186]">
            مشاهده گزارش
          </span>
          <div className="flex w-[215px] gap-[16px] items-center shrink-0 flex-nowrap relative z-[187]">
            <div className="flex w-[148px] pt-[4px] pr-[10px] pb-[4px] pl-[10px] items-start shrink-0 flex-nowrap bg-[#eaf8f0] rounded-[12px] relative z-[188]">
              <span className="h-[19px] shrink-0 basis-auto font-['Vazirmatn'] text-[12px] font-bold leading-[18.75px] text-[#159455] relative text-left whitespace-nowrap z-[189]">
                تأییدشده • ۹۲٪ شاخص اثر
              </span>
            </div>
            <span className="h-[19px] shrink-0 basis-auto font-['Vazirmatn'] text-[12px] font-normal leading-[18.75px] text-[#60758a] relative text-left whitespace-nowrap z-[190]">
              مرداد ۱۴۰۵
            </span>
          </div>
          <div className="flex flex-col gap-[4px] items-end grow shrink-0 basis-0 flex-nowrap relative z-[191]">
            <span className="flex w-[286px] h-[25px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[16px] font-bold leading-[25px] text-[#17324d] relative text-right whitespace-nowrap z-[192]">
              گزارش مرحله دوم پروژه اشتغال زنان روستایی
            </span>
            <span className="flex w-[232px] h-[20px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[13px] font-normal leading-[20px] text-[#60758a] relative text-right whitespace-nowrap z-[193]">
              پروژه: اشتغال روستایی • استارتاپ: راهکار سبز
            </span>
          </div>
          <div className="flex w-[40px] h-[40px] justify-center items-center shrink-0 flex-nowrap bg-[#eaf5fd] rounded-[10px] relative z-[194]">
            <div className="flex w-[20px] h-[20px] flex-col justify-center items-center shrink-0 flex-nowrap relative z-[195]">
              <div className="w-[20px] h-[20px] shrink-0 bg-[url(/assets/9qwnE4NL23.png)] bg-cover bg-no-repeat relative overflow-hidden z-[196]" />
            </div>
          </div>
        </div>
        <div className="flex pt-[20px] pr-[20px] pb-[20px] pl-[20px] gap-[20px] items-center self-stretch shrink-0 flex-nowrap bg-[#fff] rounded-[20px] border-solid border border-[#e4ebf1] relative shadow-[0_4px_16px_0_rgba(22,45,71,0.08)] z-[197]">
          <span className="flex w-[87px] h-[22px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-bold leading-[21.875px] text-[#2094e3] relative text-right whitespace-nowrap z-[198]">
            مشاهده گزارش
          </span>
          <div className="flex w-[229px] gap-[16px] items-center shrink-0 flex-nowrap relative z-[199]">
            <div className="flex w-[150px] pt-[4px] pr-[10px] pb-[4px] pl-[10px] items-start shrink-0 flex-nowrap bg-[#eaf8f0] rounded-[12px] relative z-[200]">
              <span className="h-[19px] shrink-0 basis-auto font-['Vazirmatn'] text-[12px] font-bold leading-[18.75px] text-[#159455] relative text-left whitespace-nowrap z-[201]">
                تأییدشده • ۸۷٪ شاخص اثر
              </span>
            </div>
            <span className="h-[19px] shrink-0 basis-auto font-['Vazirmatn'] text-[12px] font-normal leading-[18.75px] text-[#60758a] relative text-left whitespace-nowrap z-[202]">
              تابستان ۱۴۰۵
            </span>
          </div>
          <div className="flex flex-col gap-[4px] items-end grow shrink-0 basis-0 flex-nowrap relative z-[203]">
            <span className="flex w-[243px] h-[25px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[16px] font-bold leading-[25px] text-[#17324d] relative text-right whitespace-nowrap z-[204]">
              گزارش اثر اشتغال زنان سرپرست خانوار
            </span>
            <span className="flex w-[244px] h-[20px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[13px] font-normal leading-[20px] text-[#60758a] relative text-right whitespace-nowrap z-[205]">
              پروژه: توانمندسازی شهری • استارتاپ: کارآفرین‌یار
            </span>
          </div>
          <div className="flex w-[40px] h-[40px] justify-center items-center shrink-0 flex-nowrap bg-[#eaf5fd] rounded-[10px] relative z-[206]">
            <div className="flex w-[20px] h-[20px] flex-col justify-center items-center shrink-0 flex-nowrap relative z-[207]">
              <div className="w-[20px] h-[20px] shrink-0 bg-[url(/assets/dW4Ssu9UcE.png)] bg-cover bg-no-repeat relative overflow-hidden z-[208]" />
            </div>
          </div>
        </div>
      </div>
      <div className="flex pt-[16px] pr-[120px] pb-[32px] pl-[120px] flex-col gap-[16px] items-start self-stretch shrink-0 flex-nowrap relative z-[209]">
        <span className="h-[31px] self-stretch shrink-0 basis-auto font-['Vazirmatn'] text-[20px] font-extrabold leading-[31px] text-[#17324d] relative text-right whitespace-nowrap z-[210]">
          اخبار و به‌روزرسانی‌ها
        </span>
        <div className="flex pt-[16px] pr-[16px] pb-[16px] pl-[16px] gap-[20px] items-center self-stretch shrink-0 flex-nowrap bg-[#fff] rounded-[20px] border-solid border border-[#e4ebf1] relative shadow-[0_4px_16px_0_rgba(22,45,71,0.08)] z-[211]">
          <span className="flex w-[65px] h-[22px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-bold leading-[21.875px] text-[#2094e3] relative text-right whitespace-nowrap z-[212]">
            مطالعه خبر
          </span>
          <div className="flex flex-col gap-[4px] items-end grow shrink-0 basis-0 flex-nowrap relative z-[213]">
            <div className="flex w-[255px] gap-[8px] justify-end items-center shrink-0 flex-nowrap relative z-[214]">
              <span className="flex w-[76px] h-[19px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[12px] font-normal leading-[18.75px] text-[#60758a] relative text-right whitespace-nowrap z-[215]">
                ۴ دقیقه مطالعه
              </span>
              <span className="h-[19px] shrink-0 basis-auto font-['Vazirmatn'] text-[12px] font-normal leading-[18.75px] text-[#60758a] relative text-left whitespace-nowrap z-[216]">
                •
              </span>
              <span className="flex w-[64px] h-[19px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[12px] font-normal leading-[18.75px] text-[#60758a] relative text-right whitespace-nowrap z-[217]">
                ۱۸ مرداد ۱۴۰۵
              </span>
              <div className="flex w-[86px] pt-[2px] pr-[8px] pb-[2px] pl-[8px] items-start shrink-0 flex-nowrap bg-[#e0f2fe] rounded-[6px] relative z-[218]">
                <span className="flex w-[70px] h-[17px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[11px] font-normal leading-[17px] text-[#2094e3] relative text-right whitespace-nowrap z-[219]">
                  به‌روزرسانی پروژه
                </span>
              </div>
            </div>
            <span className="flex w-[269px] h-[25px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[16px] font-bold leading-[25px] text-[#17324d] relative text-right whitespace-nowrap z-[220]">
              آغاز مرحله دوم پروژه اشتغال زنان روستایی
            </span>
            <span className="flex w-[439px] h-[20px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[13px] font-normal leading-[20px] text-[#60758a] relative text-right whitespace-nowrap z-[221]">
              تأمین مالی و تجهیز کارگاه مرحله دوم پس از اخذ تأییدیه عملکرد دوره
              نخست آغاز گردید.
            </span>
          </div>
          <div className="w-[80px] h-[80px] shrink-0 bg-[url(/assets/zB5302X2DS.png)] bg-cover bg-no-repeat rounded-[12px] relative z-[222]" />
        </div>
        <div className="flex pt-[16px] pr-[16px] pb-[16px] pl-[16px] gap-[20px] items-center self-stretch shrink-0 flex-nowrap bg-[#fff] rounded-[20px] border-solid border border-[#e4ebf1] relative shadow-[0_4px_16px_0_rgba(22,45,71,0.08)] z-[223]">
          <span className="flex w-[65px] h-[22px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-bold leading-[21.875px] text-[#2094e3] relative text-right whitespace-nowrap z-[224]">
            مطالعه خبر
          </span>
          <div className="flex flex-col gap-[4px] items-end grow shrink-0 basis-0 flex-nowrap relative z-[225]">
            <div className="flex w-[222px] gap-[8px] justify-end items-center shrink-0 flex-nowrap relative z-[226]">
              <span className="flex w-[75px] h-[19px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[12px] font-normal leading-[18.75px] text-[#60758a] relative text-right whitespace-nowrap z-[227]">
                ۶ دقیقه مطالعه
              </span>
              <span className="h-[19px] shrink-0 basis-auto font-['Vazirmatn'] text-[12px] font-normal leading-[18.75px] text-[#60758a] relative text-left whitespace-nowrap z-[228]">
                •
              </span>
              <span className="flex w-[62px] h-[19px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[12px] font-normal leading-[18.75px] text-[#60758a] relative text-right whitespace-nowrap z-[229]">
                ۱۰ مرداد ۱۴۰۵
              </span>
              <div className="flex w-[56px] pt-[2px] pr-[8px] pb-[2px] pl-[8px] items-start shrink-0 flex-nowrap bg-[#eaf8f0] rounded-[6px] relative z-[230]">
                <span className="flex w-[40px] h-[17px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[11px] font-normal leading-[17px] text-[#159455] relative text-right whitespace-nowrap z-[231]">
                  گزارش اثر
                </span>
              </div>
            </div>
            <span className="flex w-[335px] h-[25px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[16px] font-bold leading-[25px] text-[#17324d] relative text-right whitespace-nowrap z-[232]">
              انتشار گزارش اثر برنامه‌های اشتغال زنان در سال ۱۴۰۴
            </span>
            <span className="flex w-[489px] h-[20px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[13px] font-normal leading-[20px] text-[#60758a] relative text-right whitespace-nowrap z-[233]">
              بررسی نتایج ملموس، اشتغال ایجادشده و نرخ ماندگاری فرصت‌های شغلی در
              حوزه مشاغل خانگی.
            </span>
          </div>
          <div className="w-[80px] h-[80px] shrink-0 bg-[url(/assets/xuT7AJ92ho.png)] bg-cover bg-no-repeat rounded-[12px] relative z-[234]" />
        </div>
      </div>
      <div className="flex pt-[16px] pr-[120px] pb-[32px] pl-[120px] flex-col gap-[16px] items-start self-stretch shrink-0 flex-nowrap relative z-[235]">
        <span className="h-[31px] self-stretch shrink-0 basis-auto font-['Vazirmatn'] text-[20px] font-extrabold leading-[31px] text-[#17324d] relative text-right whitespace-nowrap z-[236]">
          صفحات راهنما
        </span>
        <div className="flex pt-[20px] pr-[20px] pb-[20px] pl-[20px] gap-[20px] items-center self-stretch shrink-0 flex-nowrap bg-[#fff] rounded-[20px] border-solid border border-[#e4ebf1] relative shadow-[0_4px_16px_0_rgba(22,45,71,0.08)] z-[237]">
          <span className="flex w-[87px] h-[22px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-bold leading-[21.875px] text-[#2094e3] relative text-right whitespace-nowrap z-[238]">
            مشاهده صفحه
          </span>
          <div className="flex flex-col gap-[4px] items-end grow shrink-0 basis-0 flex-nowrap relative z-[239]">
            <span className="flex w-[124px] h-[19px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[12px] font-normal leading-[18.75px] text-[#60758a] relative text-right whitespace-nowrap z-[240]">
              راهنمای سامانه / فرآیند اثر
            </span>
            <span className="flex w-[138px] h-[25px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[16px] font-bold leading-[25px] text-[#17324d] relative text-right whitespace-nowrap z-[241]">
              ماه چگونه کار می‌کند؟
            </span>
            <span className="flex w-[520px] h-[20px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[13px] font-normal leading-[20px] text-[#60758a] relative text-right whitespace-nowrap z-[242]">
              آشنایی کامل با نحوه ثبت استارتاپ، ارزیابی طرح‌ها توسط خانه خلاق و
              فرآیند تحقق گام‌به‌گام شاخص‌ها.
            </span>
          </div>
          <div className="flex w-[40px] h-[40px] justify-center items-center shrink-0 flex-nowrap bg-[#eaf5fd] rounded-[10px] relative z-[243]">
            <div className="flex w-[20px] h-[20px] flex-col justify-center items-center shrink-0 flex-nowrap relative z-[244]">
              <div className="w-[20px] h-[20px] shrink-0 bg-[url(/assets/RxJimj3oWr.png)] bg-cover bg-no-repeat relative overflow-hidden z-[245]" />
            </div>
          </div>
        </div>
        <div className="flex pt-[20px] pr-[20px] pb-[20px] pl-[20px] gap-[20px] items-center self-stretch shrink-0 flex-nowrap bg-[#fff] rounded-[20px] border-solid border border-[#e4ebf1] relative shadow-[0_4px_16px_0_rgba(22,45,71,0.08)] z-[246]">
          <span className="flex w-[87px] h-[22px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-bold leading-[21.875px] text-[#2094e3] relative text-right whitespace-nowrap z-[247]">
            مشاهده صفحه
          </span>
          <div className="flex flex-col gap-[4px] items-end grow shrink-0 basis-0 flex-nowrap relative z-[248]">
            <span className="flex w-[159px] h-[19px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[12px] font-normal leading-[18.75px] text-[#60758a] relative text-right whitespace-nowrap z-[249]">
              راهنمای سامانه / مشارکت حقوقی
            </span>
            <span className="flex w-[163px] h-[25px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[16px] font-bold leading-[25px] text-[#17324d] relative text-right whitespace-nowrap z-[250]">
              ویژه شرکت‌ها و سازمان‌ها
            </span>
            <span className="flex w-[502px] h-[20px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[13px] font-normal leading-[20px] text-[#60758a] relative text-right whitespace-nowrap z-[251]">
              جزئیات و مدارک لازم جهت ثبت مشارکت حقوقی، دریافت گواهی مالیاتی و
              نحوه گزارش‌دهی سازمانی.
            </span>
          </div>
          <div className="flex w-[40px] h-[40px] justify-center items-center shrink-0 flex-nowrap bg-[#eaf5fd] rounded-[10px] relative z-[252]">
            <div className="flex w-[20px] h-[20px] flex-col justify-center items-center shrink-0 flex-nowrap relative z-[253]">
              <div className="w-[20px] h-[20px] shrink-0 bg-[url(/assets/9WVP4Vrdro.png)] bg-cover bg-no-repeat relative overflow-hidden z-[254]" />
            </div>
          </div>
        </div>
      </div>
      <div className="flex pt-[24px] pr-[120px] pb-[24px] pl-[120px] flex-col gap-[16px] items-end self-stretch shrink-0 flex-nowrap relative z-[255]">
        <span className="flex w-[134px] h-[25px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[16px] font-bold leading-[25px] text-[#17324d] relative text-right whitespace-nowrap z-[256]">
          جست‌وجوهای مرتبط
        </span>
        <div className="flex gap-[12px] justify-end items-start self-stretch shrink-0 flex-nowrap relative z-[257]">
          <div className="flex w-[154px] pt-[8px] pr-[16px] pb-[8px] pl-[16px] items-start shrink-0 flex-nowrap bg-[#fff] rounded-[100px] border-solid border border-[#e4ebf1] relative z-[258]">
            <span className="h-[20px] shrink-0 basis-auto font-['Vazirmatn'] text-[13px] font-normal leading-[20px] text-[#60758a] relative text-left whitespace-nowrap z-[259]">
              پروژه‌های استان گلستان
            </span>
          </div>
          <div className="flex w-[183px] pt-[8px] pr-[16px] pb-[8px] pl-[16px] items-start shrink-0 flex-nowrap bg-[#fff] rounded-[100px] border-solid border border-[#e4ebf1] relative z-[260]">
            <span className="h-[20px] shrink-0 basis-auto font-['Vazirmatn'] text-[13px] font-normal leading-[20px] text-[#60758a] relative text-left whitespace-nowrap z-[261]">
              استارتاپ‌های توسعه روستایی
            </span>
          </div>
          <div className="flex w-[154px] pt-[8px] pr-[16px] pb-[8px] pl-[16px] items-start shrink-0 flex-nowrap bg-[#fff] rounded-[100px] border-solid border border-[#e4ebf1] relative z-[262]">
            <span className="h-[20px] shrink-0 basis-auto font-['Vazirmatn'] text-[13px] font-normal leading-[20px] text-[#60758a] relative text-left whitespace-nowrap z-[263]">
              گزارش‌های حوزه اشتغال
            </span>
          </div>
          <div className="flex w-[164px] pt-[8px] pr-[16px] pb-[8px] pl-[16px] items-start shrink-0 flex-nowrap bg-[#fff] rounded-[100px] border-solid border border-[#e4ebf1] relative z-[264]">
            <span className="h-[20px] shrink-0 basis-auto font-['Vazirmatn'] text-[13px] font-normal leading-[20px] text-[#60758a] relative text-left whitespace-nowrap z-[265]">
              توانمندسازی زنان روستایی
            </span>
          </div>
          <div className="flex w-[142px] pt-[8px] pr-[16px] pb-[8px] pl-[16px] items-start shrink-0 flex-nowrap bg-[#fff] rounded-[100px] border-solid border border-[#e4ebf1] relative z-[266]">
            <span className="h-[20px] shrink-0 basis-auto font-['Vazirmatn'] text-[13px] font-normal leading-[20px] text-[#60758a] relative text-left whitespace-nowrap z-[267]">
              پروژه‌های اشتغال زنان
            </span>
          </div>
        </div>
      </div>
      <div className="flex pt-[16px] pr-[120px] pb-[48px] pl-[120px] justify-between items-center self-stretch shrink-0 flex-nowrap bg-[rgba(0,0,0,0.04000000000000001)] relative z-[268]">
        <span className="flex w-[124px] h-[20px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[13px] font-normal leading-[20px] text-[#60758a] relative text-right whitespace-nowrap z-[269]">
          نمایش ۱ تا ۱۰ از ۱۸ نتیجه
        </span>
        <div className="flex w-[184px] gap-[8px] items-center shrink-0 flex-nowrap relative z-[270]">
          <div className="flex w-[52px] pt-[6px] pr-[12px] pb-[6px] pl-[12px] items-start shrink-0 flex-nowrap bg-[#fff] rounded-[8px] border-solid border border-[#e4ebf1] relative z-[271]">
            <span className="flex w-[28px] h-[20px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[13px] font-normal leading-[20px] text-[#60758a] relative text-right whitespace-nowrap z-[272]">
              بعدی
            </span>
          </div>
          <div className="flex w-[31px] pt-[6px] pr-[12px] pb-[6px] pl-[12px] items-start shrink-0 flex-nowrap bg-[#fff] rounded-[8px] border-solid border border-[#e4ebf1] relative z-[273]">
            <span className="flex w-[7px] h-[20px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[13px] font-normal leading-[20px] text-[#60758a] relative text-right whitespace-nowrap z-[274]">
              ۲
            </span>
          </div>
          <div className="flex w-[29px] pt-[6px] pr-[12px] pb-[6px] pl-[12px] items-start shrink-0 flex-nowrap bg-[#eaf5fd] rounded-[8px] border-solid border border-[#2094e3] relative z-[275]">
            <span className="flex w-[5px] h-[20px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[13px] font-bold leading-[20px] text-[#2094e3] relative text-right whitespace-nowrap z-[276]">
              ۱
            </span>
          </div>
          <div className="flex w-[48px] pt-[6px] pr-[12px] pb-[6px] pl-[12px] items-start shrink-0 flex-nowrap bg-[#fff] rounded-[8px] border-solid border border-[#e4ebf1] relative z-[277]">
            <span className="flex w-[24px] h-[20px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[13px] font-normal leading-[20px] text-[#60758a] relative text-right whitespace-nowrap z-[278]">
              قبلی
            </span>
          </div>
        </div>
      </div>
      <div className="flex pt-[80px] pr-[120px] pb-[40px] pl-[120px] flex-col gap-[64px] items-start self-stretch shrink-0 flex-nowrap bg-[#111e30] relative z-[279]">
        <div className="flex gap-[48px] items-start self-stretch shrink-0 flex-nowrap relative z-[280]">
          <div className="flex w-[220px] h-[182px] flex-col gap-[12px] items-end shrink-0 flex-nowrap relative z-[281]">
            <span className="flex w-[59px] h-[22px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-bold leading-[21.875px] text-[#fff] relative text-right whitespace-nowrap z-[282]">
              ارتباط با ما
            </span>
            <span className="flex w-[115px] h-[20px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[13px] font-normal leading-[20px] text-[#e4ebf1] relative text-right whitespace-nowrap z-[283]">
              تلفن: ۰۲۱-۸۸۸۸۸۸۸۸
            </span>
            <span className="flex w-[156px] h-[20px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[13px] font-normal leading-[20px] text-[#e4ebf1] relative text-right whitespace-nowrap z-[284]">
              ایمیل: info@mahplatform.ir
            </span>
            <div className="flex w-[48px] pt-[8px] pr-0 pb-0 pl-0 gap-[12px] items-center shrink-0 flex-nowrap relative z-[285]">
              <div className="flex w-[18px] h-[18px] flex-col justify-center items-center shrink-0 flex-nowrap relative overflow-hidden z-[286]">
                <div className="w-[18px] h-[18px] shrink-0 bg-[url(/assets/N3B3k7AM1O.png)] bg-cover bg-no-repeat relative overflow-hidden z-[287]" />
              </div>
              <div className="flex w-[18px] h-[18px] flex-col justify-center items-center shrink-0 flex-nowrap relative overflow-hidden z-[288]">
                <div className="w-[18px] h-[18px] shrink-0 bg-[url(/assets/nJSMvggU0v.png)] bg-cover bg-no-repeat relative overflow-hidden z-[289]" />
              </div>
            </div>
          </div>
          <div className="flex w-[150px] h-[182px] flex-col gap-[12px] items-end shrink-0 flex-nowrap relative z-[290]">
            <span className="flex w-[39px] h-[22px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-bold leading-[21.875px] text-[#fff] relative text-right whitespace-nowrap z-[291]">
              حقوقی
            </span>
            <span className="flex w-[82px] h-[20px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[13px] font-normal leading-[20px] text-[#e4ebf1] relative text-right whitespace-nowrap z-[292]">
              قوانین و مقررات
            </span>
            <span className="flex w-[75px] h-[20px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[13px] font-normal leading-[20px] text-[#e4ebf1] relative text-right whitespace-nowrap z-[293]">
              حریم خصوصی
            </span>
          </div>
          <div className="flex w-[160px] h-[182px] flex-col gap-[12px] items-end shrink-0 flex-nowrap relative z-[294]">
            <span className="flex w-[49px] h-[22px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-bold leading-[21.875px] text-[#fff] relative text-right whitespace-nowrap z-[295]">
              پشتیبانی
            </span>
            <span className="flex w-[55px] h-[20px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[13px] font-normal leading-[20px] text-[#e4ebf1] relative text-right whitespace-nowrap z-[296]">
              تماس با ما
            </span>
            <span className="flex w-[77px] h-[20px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[13px] font-normal leading-[20px] text-[#e4ebf1] relative text-right whitespace-nowrap z-[297]">
              سؤالات متداول
            </span>
            <span className="flex w-[82px] h-[20px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[13px] font-normal leading-[20px] text-[#e4ebf1] relative text-right whitespace-nowrap z-[298]">
              پیگیری مشارکت
            </span>
          </div>
          <div className="flex w-[180px] flex-col gap-[12px] items-end shrink-0 flex-nowrap relative z-[299]">
            <span className="flex w-[83px] h-[22px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-bold leading-[21.875px] text-[#fff] relative text-right whitespace-nowrap z-[300]">
              دسترسی سریع
            </span>
            <span className="flex w-[38px] h-[20px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[13px] font-normal leading-[20px] text-[#e4ebf1] relative text-right whitespace-nowrap z-[301]">
              پروژه‌ها
            </span>
            <span className="flex w-[69px] h-[20px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[13px] font-normal leading-[20px] text-[#e4ebf1] relative text-right whitespace-nowrap z-[302]">
              برای شرکت‌ها
            </span>
            <span className="flex w-[71px] h-[20px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[13px] font-normal leading-[20px] text-[#e4ebf1] relative text-right whitespace-nowrap z-[303]">
              نحوه مشارکت
            </span>
            <span className="flex w-[84px] h-[20px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[13px] font-normal leading-[20px] text-[#e4ebf1] relative text-right whitespace-nowrap z-[304]">
              ثبت‌نام استارتاپ
            </span>
            <span className="flex w-[80px] h-[20px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[13px] font-normal leading-[20px] text-[#e4ebf1] relative text-right whitespace-nowrap z-[305]">
              اخبار و رویدادها
            </span>
          </div>
          <div className="flex w-[298px] h-[182px] flex-col gap-[14px] items-end shrink-0 flex-nowrap relative z-[306]">
            <div className="w-[210px] h-[70px] shrink-0 bg-[url(/assets/CuEWoeZd09.png)] bg-cover bg-no-repeat relative z-[307]" />
            <span className="flex w-[298px] h-[44px] justify-end items-start self-stretch shrink-0 font-['Vazirmatn'] text-[13px] font-normal leading-[22px] text-[#e4ebf1] relative text-right z-[308]">
              سامانه مشارکت در پروژه‌های اثر اجتماعی با مسیر مالی شفاف و اثر
              قابل‌اندازه‌گیری.
            </span>
          </div>
        </div>
        <div className="flex pt-[20px] pr-0 pb-0 pl-0 flex-col gap-[4px] items-center self-stretch shrink-0 flex-nowrap border-solid border-b border-b-[rgba(255,255,255,0.12)] relative z-[309]">
          <span className="flex w-[219px] h-[19px] justify-center items-start shrink-0 basis-auto font-['Vazirmatn'] text-[12px] font-normal leading-[18.75px] text-[#e4ebf1] relative text-center whitespace-nowrap z-[310]">
            طراحی و توسعه با هدف ارتقای عدالت اجتماعی
          </span>
          <span className="flex w-[203px] h-[19px] justify-center items-start shrink-0 basis-auto font-['Vazirmatn'] text-[12px] font-normal leading-[18.75px] text-[#e4ebf1] relative text-center whitespace-nowrap z-[311]">
            تمامی حقوق برای سامانه ماه محفوظ است.
          </span>
        </div>
      </div>
    </div>
  );
}
