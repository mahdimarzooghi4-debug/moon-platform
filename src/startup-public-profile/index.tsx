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
          <div className="w-[137px] h-[46px] shrink-0 bg-[url(/assets/p1sGueAZhz.png)] bg-cover bg-no-repeat relative z-[16]" />
        </div>
      </div>
      <div className="flex pt-[32px] pr-[120px] pb-[96px] pl-[120px] flex-col gap-[32px] items-center self-stretch shrink-0 flex-nowrap relative z-[17]">
        <div className="flex w-[1200px] h-[42px] justify-end items-center shrink-0 flex-nowrap relative overflow-hidden z-[18]">
          <span className="flex w-[162px] h-[38px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[24px] font-semibold leading-[37.5px] text-[#17324d] relative text-right whitespace-nowrap z-[19]">
            پروفایل استارتاپ
          </span>
        </div>
        <div className="flex w-[1200px] gap-[8px] justify-end items-start shrink-0 flex-nowrap relative z-20">
          <span className="flex w-[55px] h-[20px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[13px] font-bold leading-[20px] text-[#2094e3] relative text-right whitespace-nowrap z-[21]">
            راهکار سبز
          </span>
          <span className="h-[20px] shrink-0 basis-auto font-['Vazirmatn'] text-[13px] font-normal leading-[20px] text-[#60758a] relative text-left whitespace-nowrap z-[22]">
            /
          </span>
          <span className="flex w-[57px] h-[20px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[13px] font-normal leading-[20px] text-[#60758a] relative text-right whitespace-nowrap z-[23]">
            استارتاپ‌ها
          </span>
          <span className="h-[20px] shrink-0 basis-auto font-['Vazirmatn'] text-[13px] font-normal leading-[20px] text-[#60758a] relative text-left whitespace-nowrap z-[24]">
            /
          </span>
          <span className="flex w-[63px] h-[20px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[13px] font-normal leading-[20px] text-[#60758a] relative text-right whitespace-nowrap z-[25]">
            صفحه اصلی
          </span>
        </div>
        <div className="flex w-[1200px] pt-[32px] pr-[32px] pb-[32px] pl-[32px] justify-between items-center shrink-0 flex-nowrap bg-[#fff] rounded-[24px] border-solid border border-[#e4ebf1] relative shadow-[0_4px_16px_0_rgba(22,45,71,0.08)] z-[26]">
          <div className="flex w-[400px] flex-col gap-[16px] items-end shrink-0 flex-nowrap relative z-[27]">
            <div className="flex w-[391px] gap-[12px] items-start shrink-0 flex-nowrap relative z-[28]">
              <div className="flex w-[44px] pt-[12px] pr-[12px] pb-[12px] pl-[12px] items-start shrink-0 flex-nowrap bg-[#fff] rounded-[12px] border-solid border border-[#e4ebf1] relative z-[29]">
                <div className="flex w-[20px] h-[20px] flex-col justify-center items-center shrink-0 flex-nowrap relative overflow-hidden z-30">
                  <div className="w-[20px] h-[20px] shrink-0 bg-[url(/assets/LrSreSeMb4.png)] bg-cover bg-no-repeat relative overflow-hidden z-[31]" />
                </div>
              </div>
              <div className="flex w-[150px] pt-[11px] pr-[16px] pb-[11px] pl-[16px] items-start shrink-0 flex-nowrap bg-[#fff] rounded-[12px] border-solid border border-[#e4ebf1] relative z-[32]">
                <span className="flex w-[118px] h-[22px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-medium leading-[21.875px] text-[#17324d] relative text-right whitespace-nowrap z-[33]">
                  اشتراک‌گذاری پروفایل
                </span>
              </div>
              <div className="flex w-[173px] pt-[11px] pr-[20px] pb-[11px] pl-[20px] items-start shrink-0 flex-nowrap bg-[#2094e3] rounded-[12px] relative z-[34]">
                <span className="flex w-[133px] h-[22px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-medium leading-[21.875px] text-[#fff] relative text-right whitespace-nowrap z-[35]">
                  مشاهده پروژه‌های فعال
                </span>
              </div>
            </div>
            <span className="flex w-[288px] h-[19px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[12px] font-normal leading-[18.75px] text-[#60758a] relative text-right whitespace-nowrap z-[36]">
              مشارکت مالی فقط از طریق پروژه‌های تأییدشده انجام می‌شود.
            </span>
          </div>
          <div className="flex w-[683px] gap-[24px] justify-end items-center shrink-0 flex-nowrap relative z-[37]">
            <div className="flex w-[563px] flex-col gap-[8px] items-end shrink-0 flex-nowrap relative z-[38]">
              <div className="flex w-[277px] gap-[12px] items-center shrink-0 flex-nowrap relative z-[39]">
                <div className="flex w-[147px] pt-[4px] pr-[10px] pb-[4px] pl-[10px] items-start shrink-0 flex-nowrap bg-[#eaf8f0] rounded-[8px] relative z-40">
                  <span className="flex w-[127px] h-[19px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[12px] font-medium leading-[18.75px] text-[#159455] relative text-right whitespace-nowrap z-[41]">
                    تأییدشده توسط خانه خلاق
                  </span>
                </div>
                <span className="flex w-[118px] h-[44px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[28px] font-bold leading-[43.75px] text-[#17324d] relative text-right whitespace-nowrap z-[42]">
                  راهکار سبز
                </span>
              </div>
              <span className="flex w-[257px] h-[25px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[16px] font-normal leading-[25px] text-[#60758a] relative text-right whitespace-nowrap z-[43]">
                اتصال ظرفیت‌های محلی به بازارهای پایدار
              </span>
              <span className="flex w-[563px] h-[20px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[13px] font-normal leading-[20px] text-[#60758a] relative text-right whitespace-nowrap z-[44]">
                حوزه: اشتغال، توسعه روستایی و تجارت اجتماعی | موقعیت: گرگان،
                گلستان | سال شروع: ۱۴۰۱ | مرحله رشد: رشد
              </span>
              <div className="flex w-[263px] pt-[8px] pr-0 pb-0 pl-0 gap-[16px] items-start shrink-0 flex-nowrap relative z-[45]">
                <div className="flex w-[95px] gap-[4px] items-center shrink-0 flex-nowrap relative z-[46]">
                  <span className="flex w-[75px] h-[20px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[13px] font-normal leading-[20px] text-[#2094e3] relative text-right whitespace-nowrap z-[47]">
                    شبکه اجتماعی
                  </span>
                  <div className="flex w-[16px] h-[16px] flex-col justify-center items-center shrink-0 flex-nowrap relative overflow-hidden z-[48]">
                    <div className="w-[16px] h-[16px] shrink-0 bg-[url(/assets/pCb89Xs53Q.png)] bg-cover bg-no-repeat relative overflow-hidden z-[49]" />
                  </div>
                </div>
                <div className="flex w-[69px] gap-[4px] items-center shrink-0 flex-nowrap relative z-50">
                  <span className="h-[20px] shrink-0 basis-auto font-['Vazirmatn'] text-[13px] font-normal leading-[20px] text-[#2094e3] relative text-left whitespace-nowrap z-[51]">
                    LinkedIn
                  </span>
                  <div className="flex w-[16px] h-[16px] flex-col justify-center items-center shrink-0 flex-nowrap relative overflow-hidden z-[52]">
                    <div className="w-[16px] h-[16px] shrink-0 bg-[url(/assets/Aims4thdgq.png)] bg-cover bg-no-repeat relative overflow-hidden z-[53]" />
                  </div>
                </div>
                <div className="flex w-[67px] gap-[4px] items-center shrink-0 flex-nowrap relative z-[54]">
                  <span className="flex w-[47px] h-[20px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[13px] font-normal leading-[20px] text-[#2094e3] relative text-right whitespace-nowrap z-[55]">
                    وب‌سایت
                  </span>
                  <div className="flex w-[16px] h-[16px] flex-col justify-center items-center shrink-0 flex-nowrap relative overflow-hidden z-[56]">
                    <div className="w-[16px] h-[16px] shrink-0 bg-[url(/assets/O9PDhox8VE.png)] bg-cover bg-no-repeat relative overflow-hidden z-[57]" />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex w-[96px] h-[96px] justify-center items-center shrink-0 flex-nowrap bg-[#e4ebf1] rounded-[20px] relative z-[58]">
              <div className="flex w-[48px] h-[48px] flex-col justify-center items-center shrink-0 flex-nowrap relative overflow-hidden z-[59]">
                <div className="w-[48px] h-[48px] shrink-0 bg-[url(/assets/toZForw5Hm.png)] bg-cover bg-no-repeat relative overflow-hidden z-[60]" />
              </div>
            </div>
          </div>
        </div>
        <div className="flex w-[1200px] pt-[20px] pr-[32px] pb-[20px] pl-[32px] justify-between items-center shrink-0 flex-nowrap bg-[#fff] rounded-[16px] border-solid border border-[#e4ebf1] relative z-[61]">
          <div className="flex w-[180px] flex-col gap-[4px] items-center shrink-0 flex-nowrap relative z-[62]">
            <span className="flex w-[65px] h-[20px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[13px] font-normal leading-[20px] text-[#60758a] relative text-right whitespace-nowrap z-[63]">
              افراد بهره‌مند
            </span>
            <span className="flex w-[86px] h-[34px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[22px] font-bold leading-[34px] text-[#17324d] relative text-right whitespace-nowrap z-[64]">
              ۲٬۸۴۰ نفر
            </span>
          </div>
          <div className="w-px h-[40px] shrink-0 bg-[url(/assets/Gb0vpCw36g.png)] bg-cover bg-no-repeat relative z-[65]" />
          <div className="flex w-[180px] flex-col gap-[4px] items-center shrink-0 flex-nowrap relative z-[66]">
            <span className="flex w-[96px] h-[20px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[13px] font-normal leading-[20px] text-[#60758a] relative text-right whitespace-nowrap z-[67]">
              میانگین تحقق KPI
            </span>
            <span className="flex w-[37px] h-[34px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[22px] font-bold leading-[34px] text-[#17324d] relative text-right whitespace-nowrap z-[68]">
              ۸۶٪
            </span>
          </div>
          <div className="w-px h-[40px] shrink-0 bg-[url(/assets/0DtGEkUZua.png)] bg-cover bg-no-repeat relative z-[69]" />
          <div className="flex w-[180px] flex-col gap-[4px] items-center shrink-0 flex-nowrap relative z-[70]">
            <span className="flex w-[75px] h-[20px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[13px] font-normal leading-[20px] text-[#60758a] relative text-right whitespace-nowrap z-[71]">
              پروژه‌های فعال
            </span>
            <span className="flex w-[62px] h-[34px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[22px] font-bold leading-[34px] text-[#17324d] relative text-right whitespace-nowrap z-[72]">
              ۲ پروژه
            </span>
          </div>
          <div className="w-px h-[40px] shrink-0 bg-[url(/assets/px3gPaa8p6.png)] bg-cover bg-no-repeat relative z-[73]" />
          <div className="flex w-[180px] flex-col gap-[4px] items-center shrink-0 flex-nowrap relative z-[74]">
            <span className="flex w-[106px] h-[20px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[13px] font-normal leading-[20px] text-[#60758a] relative text-right whitespace-nowrap z-[75]">
              پروژه‌های تکمیل‌شده
            </span>
            <span className="flex w-[64px] h-[34px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[22px] font-bold leading-[34px] text-[#17324d] relative text-right whitespace-nowrap z-[76]">
              ۳ پروژه
            </span>
          </div>
          <div className="w-px h-[40px] shrink-0 bg-[url(/assets/V1bAchhAQi.png)] bg-cover bg-no-repeat relative z-[77]" />
          <div className="flex w-[180px] flex-col gap-[4px] items-center shrink-0 flex-nowrap relative z-[78]">
            <span className="flex w-[94px] h-[20px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[13px] font-normal leading-[20px] text-[#60758a] relative text-right whitespace-nowrap z-[79]">
              پروژه‌های ثبت‌شده
            </span>
            <span className="flex w-[61px] h-[34px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[22px] font-bold leading-[34px] text-[#17324d] relative text-right whitespace-nowrap z-[80]">
              ۶ پروژه
            </span>
          </div>
        </div>
        <div className="flex w-[1200px] pt-0 pr-[16px] pb-0 pl-[16px] gap-[32px] justify-end items-start shrink-0 flex-nowrap border-solid border-t border-t-[#e4ebf1] relative z-[81]">
          <div className="flex w-[52px] pt-[12px] pr-0 pb-[12px] pl-0 flex-col gap-[8px] items-center shrink-0 flex-nowrap relative z-[82]">
            <span className="flex w-[52px] h-[23px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[15px] font-medium leading-[23px] text-[#60758a] relative text-right whitespace-nowrap z-[83]">
              گزارش‌ها
            </span>
          </div>
          <div className="flex w-[70px] pt-[12px] pr-0 pb-[12px] pl-0 flex-col gap-[8px] items-center shrink-0 flex-nowrap relative z-[84]">
            <span className="flex w-[70px] h-[23px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[15px] font-medium leading-[23px] text-[#60758a] relative text-right whitespace-nowrap z-[85]">
              عملکرد و اثر
            </span>
          </div>
          <div className="flex w-[44px] pt-[12px] pr-0 pb-[12px] pl-0 flex-col gap-[8px] items-center shrink-0 flex-nowrap relative z-[86]">
            <span className="flex w-[44px] h-[23px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[15px] font-medium leading-[23px] text-[#60758a] relative text-right whitespace-nowrap z-[87]">
              پروژه‌ها
            </span>
          </div>
          <div className="flex w-[20px] pt-[12px] pr-0 pb-[12px] pl-0 flex-col gap-[8px] items-center shrink-0 flex-nowrap relative z-[88]">
            <span className="flex w-[20px] h-[23px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[15px] font-medium leading-[23px] text-[#60758a] relative text-right whitespace-nowrap z-[89]">
              تیم
            </span>
          </div>
          <div className="flex w-[98px] pt-[12px] pr-0 pb-[12px] pl-0 flex-col gap-[8px] items-center shrink-0 flex-nowrap relative z-[90]">
            <span className="flex w-[98px] h-[23px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[15px] font-medium leading-[23px] text-[#60758a] relative text-right whitespace-nowrap z-[91]">
              محصول و راهکار
            </span>
          </div>
          <div className="flex w-[39px] pt-[12px] pr-0 pb-[12px] pl-0 flex-col gap-[8px] items-center shrink-0 flex-nowrap relative z-[92]">
            <span className="flex w-[39px] h-[23px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[15px] font-bold leading-[23px] text-[#2094e3] relative text-right whitespace-nowrap z-[93]">
              معرفی
            </span>
            <div className="h-[3px] self-stretch shrink-0 bg-[#2094e3] rounded-[2px] relative z-[94]" />
          </div>
        </div>
        <div className="flex w-[1200px] gap-[24px] justify-end items-start shrink-0 flex-nowrap relative z-[95]">
          <div className="flex w-[360px] flex-col gap-[24px] items-end shrink-0 flex-nowrap relative z-[96]">
            <div className="flex pt-[24px] pr-[24px] pb-[24px] pl-[24px] flex-col gap-[20px] items-end self-stretch shrink-0 flex-nowrap bg-[#fff] rounded-[16px] border-solid border border-[#e4ebf1] relative shadow-[0_4px_16px_0_rgba(22,45,71,0.08)] z-[97]">
              <span className="flex w-[176px] h-[25px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[16px] font-bold leading-[25px] text-[#17324d] relative text-right whitespace-nowrap z-[98]">
                وضعیت تأیید در سامانه ماه
              </span>
              <div className="flex flex-col gap-[12px] items-end self-stretch shrink-0 flex-nowrap relative z-[99]">
                <div className="flex justify-between items-center self-stretch shrink-0 flex-nowrap relative z-[100]">
                  <div className="flex w-[71px] gap-[6px] items-center shrink-0 flex-nowrap relative z-[101]">
                    <span className="flex w-[49px] h-[20px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[13px] font-bold leading-[20px] text-[#159455] relative text-right whitespace-nowrap z-[102]">
                      تأییدشده
                    </span>
                    <div className="flex w-[16px] h-[16px] flex-col justify-center items-center shrink-0 flex-nowrap relative overflow-hidden z-[103]">
                      <div className="w-[16px] h-[16px] shrink-0 bg-[url(/assets/nFMoTUd1WX.png)] bg-cover bg-no-repeat relative overflow-hidden z-[104]" />
                    </div>
                  </div>
                  <span className="flex w-[106px] h-[20px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[13px] font-normal leading-[20px] text-[#60758a] relative text-right whitespace-nowrap z-[105]">
                    احراز هویت استارتاپ
                  </span>
                </div>
                <div className="flex justify-between items-center self-stretch shrink-0 flex-nowrap relative z-[106]">
                  <div className="flex w-[71px] gap-[6px] items-center shrink-0 flex-nowrap relative z-[107]">
                    <span className="flex w-[49px] h-[20px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[13px] font-bold leading-[20px] text-[#159455] relative text-right whitespace-nowrap z-[108]">
                      تأییدشده
                    </span>
                    <div className="flex w-[16px] h-[16px] flex-col justify-center items-center shrink-0 flex-nowrap relative overflow-hidden z-[109]">
                      <div className="w-[16px] h-[16px] shrink-0 bg-[url(/assets/GL4LBvsDyk.png)] bg-cover bg-no-repeat relative overflow-hidden z-[110]" />
                    </div>
                  </div>
                  <span className="flex w-[80px] h-[20px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[13px] font-normal leading-[20px] text-[#60758a] relative text-right whitespace-nowrap z-[111]">
                    اطلاعات حقوقی
                  </span>
                </div>
                <div className="flex justify-between items-center self-stretch shrink-0 flex-nowrap relative z-[112]">
                  <div className="flex w-[71px] gap-[6px] items-center shrink-0 flex-nowrap relative z-[113]">
                    <span className="flex w-[49px] h-[20px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[13px] font-bold leading-[20px] text-[#159455] relative text-right whitespace-nowrap z-[114]">
                      تأییدشده
                    </span>
                    <div className="flex w-[16px] h-[16px] flex-col justify-center items-center shrink-0 flex-nowrap relative overflow-hidden z-[115]">
                      <div className="w-[16px] h-[16px] shrink-0 bg-[url(/assets/HCzX9q0JMs.png)] bg-cover bg-no-repeat relative overflow-hidden z-[116]" />
                    </div>
                  </div>
                  <span className="flex w-[47px] h-[20px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[13px] font-normal leading-[20px] text-[#60758a] relative text-right whitespace-nowrap z-[117]">
                    تیم اصلی
                  </span>
                </div>
                <div className="flex justify-between items-center self-stretch shrink-0 flex-nowrap relative z-[118]">
                  <div className="flex w-[48px] gap-[6px] items-center shrink-0 flex-nowrap relative z-[119]">
                    <span className="flex w-[26px] h-[20px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[13px] font-bold leading-[20px] text-[#159455] relative text-right whitespace-nowrap z-[120]">
                      فعال
                    </span>
                    <div className="flex w-[16px] h-[16px] flex-col justify-center items-center shrink-0 flex-nowrap relative overflow-hidden z-[121]">
                      <div className="w-[16px] h-[16px] shrink-0 bg-[url(/assets/fUjv8gBi0m.png)] bg-cover bg-no-repeat relative overflow-hidden z-[122]" />
                    </div>
                  </div>
                  <span className="flex w-[82px] h-[20px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[13px] font-normal leading-[20px] text-[#60758a] relative text-right whitespace-nowrap z-[123]">
                    امکان ثبت پروژه
                  </span>
                </div>
                <div className="flex justify-between items-center self-stretch shrink-0 flex-nowrap relative z-[124]">
                  <div className="flex w-[79px] gap-[6px] items-center shrink-0 flex-nowrap relative z-[125]">
                    <span className="flex w-[57px] h-[20px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[13px] font-bold leading-[20px] text-[#159455] relative text-right whitespace-nowrap z-[126]">
                      مرداد ۱۴۰۵
                    </span>
                    <div className="flex w-[16px] h-[16px] flex-col justify-center items-center shrink-0 flex-nowrap relative overflow-hidden z-[127]">
                      <div className="w-[16px] h-[16px] shrink-0 bg-[url(/assets/nuUg5iHusq.png)] bg-cover bg-no-repeat relative overflow-hidden z-[128]" />
                    </div>
                  </div>
                  <span className="flex w-[67px] h-[20px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[13px] font-normal leading-[20px] text-[#60758a] relative text-right whitespace-nowrap z-[129]">
                    آخرین بازبینی
                  </span>
                </div>
              </div>
            </div>
            <div className="flex pt-[24px] pr-[24px] pb-[24px] pl-[24px] flex-col gap-[16px] items-end self-stretch shrink-0 flex-nowrap bg-[#fff] rounded-[16px] border-solid border border-[#e4ebf1] relative shadow-[0_4px_16px_0_rgba(22,45,71,0.08)] z-[130]">
              <span className="flex w-[87px] h-[25px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[16px] font-bold leading-[25px] text-[#17324d] relative text-right whitespace-nowrap z-[131]">
                سابقه عملکرد
              </span>
              <div className="flex flex-col gap-[16px] items-end self-stretch shrink-0 flex-nowrap relative z-[132]">
                <div className="flex flex-col gap-[6px] items-end self-stretch shrink-0 flex-nowrap relative z-[133]">
                  <div className="flex justify-between items-start self-stretch shrink-0 flex-nowrap relative z-[134]">
                    <span className="flex w-[20px] h-[19px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[12px] font-bold leading-[18.75px] text-[#17324d] relative text-right whitespace-nowrap z-[135]">
                      ۸۶٪
                    </span>
                    <span className="flex w-[88px] h-[19px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[12px] font-normal leading-[18.75px] text-[#60758a] relative text-right whitespace-nowrap z-[136]">
                      میانگین تحقق KPI
                    </span>
                  </div>
                  <div className="flex h-[6px] justify-end items-start self-stretch shrink-0 flex-nowrap bg-[#e4ebf1] rounded-[3px] relative overflow-hidden z-[137]">
                    <div className="w-[241px] self-stretch shrink-0 bg-[#2094e3] rounded-[3px] relative z-[138]" />
                  </div>
                </div>
                <div className="flex flex-col gap-[6px] items-end self-stretch shrink-0 flex-nowrap relative z-[139]">
                  <div className="flex justify-between items-start self-stretch shrink-0 flex-nowrap relative z-[140]">
                    <span className="flex w-[22px] h-[19px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[12px] font-bold leading-[18.75px] text-[#17324d] relative text-right whitespace-nowrap z-[141]">
                      ۸۳٪
                    </span>
                    <span className="flex w-[138px] h-[19px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[12px] font-normal leading-[18.75px] text-[#60758a] relative text-right whitespace-nowrap z-[142]">
                      پروژه‌های تکمیل در زمان مقرر
                    </span>
                  </div>
                  <div className="flex h-[6px] justify-end items-start self-stretch shrink-0 flex-nowrap bg-[#e4ebf1] rounded-[3px] relative overflow-hidden z-[143]">
                    <div className="w-[232px] self-stretch shrink-0 bg-[#2094e3] rounded-[3px] relative z-[144]" />
                  </div>
                </div>
                <div className="flex flex-col gap-[6px] items-end self-stretch shrink-0 flex-nowrap relative z-[145]">
                  <div className="flex justify-between items-start self-stretch shrink-0 flex-nowrap relative z-[146]">
                    <span className="flex w-[16px] h-[19px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[12px] font-bold leading-[18.75px] text-[#17324d] relative text-right whitespace-nowrap z-[147]">
                      ۹۱٪
                    </span>
                    <span className="flex w-[96px] h-[19px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[12px] font-normal leading-[18.75px] text-[#60758a] relative text-right whitespace-nowrap z-[148]">
                      گزارش‌های تأییدشده
                    </span>
                  </div>
                  <div className="flex h-[6px] justify-end items-start self-stretch shrink-0 flex-nowrap bg-[#e4ebf1] rounded-[3px] relative overflow-hidden z-[149]">
                    <div className="w-[255px] self-stretch shrink-0 bg-[#2094e3] rounded-[3px] relative z-[150]" />
                  </div>
                </div>
                <div className="flex flex-col gap-[6px] items-end self-stretch shrink-0 flex-nowrap relative z-[151]">
                  <div className="flex justify-between items-start self-stretch shrink-0 flex-nowrap relative z-[152]">
                    <span className="flex w-[21px] h-[19px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[12px] font-bold leading-[18.75px] text-[#17324d] relative text-right whitespace-nowrap z-[153]">
                      ۸۷٪
                    </span>
                    <span className="flex w-[77px] h-[19px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[12px] font-normal leading-[18.75px] text-[#60758a] relative text-right whitespace-nowrap z-[154]">
                      رضایت ذی‌نفعان
                    </span>
                  </div>
                  <div className="flex h-[6px] justify-end items-start self-stretch shrink-0 flex-nowrap bg-[#e4ebf1] rounded-[3px] relative overflow-hidden z-[155]">
                    <div className="w-[244px] self-stretch shrink-0 bg-[#2094e3] rounded-[3px] relative z-[156]" />
                  </div>
                </div>
              </div>
              <span className="flex w-[312px] h-[34px] justify-end items-start self-stretch shrink-0 font-['Vazirmatn'] text-[11px] font-normal leading-[17.188px] text-[#60758a] relative text-right z-[157]">
                شاخص‌ها براساس پروژه‌های تأییدشده و گزارش‌های عمومی سامانه ماه
                محاسبه شده‌اند.
              </span>
            </div>
            <div className="flex pt-[24px] pr-[24px] pb-[24px] pl-[24px] flex-col gap-[16px] items-end self-stretch shrink-0 flex-nowrap bg-[#fff] rounded-[16px] border-solid border border-[#e4ebf1] relative shadow-[0_4px_16px_0_rgba(22,45,71,0.08)] z-[158]">
              <span className="flex w-[83px] h-[25px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[16px] font-bold leading-[25px] text-[#17324d] relative text-right whitespace-nowrap z-[159]">
                اطلاعات ثبتی
              </span>
              <div className="flex flex-col gap-[12px] items-end self-stretch shrink-0 flex-nowrap relative z-[160]">
                <div className="flex flex-col gap-[4px] items-end self-stretch shrink-0 flex-nowrap relative z-[161]">
                  <span className="flex w-[46px] h-[17px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[11px] font-normal leading-[17px] text-[#60758a] relative text-right whitespace-nowrap z-[162]">
                    نام حقوقی
                  </span>
                  <span className="flex w-[120px] h-[20px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[13px] font-medium leading-[20px] text-[#17324d] relative text-right whitespace-nowrap z-[163]">
                    شرکت راهکار سبز پایدار
                  </span>
                </div>
                <div className="flex flex-col gap-[4px] items-end self-stretch shrink-0 flex-nowrap relative z-[164]">
                  <span className="flex w-[68px] h-[17px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[11px] font-normal leading-[17px] text-[#60758a] relative text-right whitespace-nowrap z-[165]">
                    وضعیت حقوقی
                  </span>
                  <span className="flex w-[45px] h-[20px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[13px] font-medium leading-[20px] text-[#17324d] relative text-right whitespace-nowrap z-[166]">
                    ثبت‌شده
                  </span>
                </div>
                <div className="flex flex-col gap-[4px] items-end self-stretch shrink-0 flex-nowrap relative z-[167]">
                  <span className="flex w-[55px] h-[17px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[11px] font-normal leading-[17px] text-[#60758a] relative text-right whitespace-nowrap z-[168]">
                    سال تأسیس
                  </span>
                  <span className="flex w-[21px] h-[20px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[13px] font-medium leading-[20px] text-[#17324d] relative text-right whitespace-nowrap z-[169]">
                    ۱۴۰۱
                  </span>
                </div>
                <div className="flex flex-col gap-[4px] items-end self-stretch shrink-0 flex-nowrap relative z-[170]">
                  <span className="flex w-[40px] h-[17px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[11px] font-normal leading-[17px] text-[#60758a] relative text-right whitespace-nowrap z-[171]">
                    شهر ثبتی
                  </span>
                  <span className="flex w-[29px] h-[20px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[13px] font-medium leading-[20px] text-[#17324d] relative text-right whitespace-nowrap z-[172]">
                    گرگان
                  </span>
                </div>
                <div className="flex flex-col gap-[4px] items-end self-stretch shrink-0 flex-nowrap relative z-[173]">
                  <span className="flex w-[41px] h-[17px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[11px] font-normal leading-[17px] text-[#60758a] relative text-right whitespace-nowrap z-[174]">
                    تعداد تیم
                  </span>
                  <span className="flex w-[27px] h-[20px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[13px] font-medium leading-[20px] text-[#17324d] relative text-right whitespace-nowrap z-[175]">
                    ۸ نفر
                  </span>
                </div>
                <div className="flex flex-col gap-[4px] items-end self-stretch shrink-0 flex-nowrap relative z-[176]">
                  <span className="flex w-[46px] h-[17px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[11px] font-normal leading-[17px] text-[#60758a] relative text-right whitespace-nowrap z-[177]">
                    حوزه اصلی
                  </span>
                  <span className="flex w-[68px] h-[20px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[13px] font-medium leading-[20px] text-[#17324d] relative text-right whitespace-nowrap z-[178]">
                    اشتغال پایدار
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="flex w-[816px] flex-col gap-[32px] items-end shrink-0 flex-nowrap relative z-[179]">
            <div className="flex pt-[32px] pr-[32px] pb-[32px] pl-[32px] flex-col gap-[16px] items-end self-stretch shrink-0 flex-nowrap bg-[#fff] rounded-[20px] border-solid border border-[#e4ebf1] relative z-[180]">
              <div className="flex flex-col gap-[8px] items-end self-stretch shrink-0 flex-nowrap relative z-[181]">
                <span className="flex w-[160px] h-[38px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[24px] font-bold leading-[37.5px] text-[#17324d] relative text-right whitespace-nowrap z-[182]">
                  درباره راهکار سبز
                </span>
                <div className="w-[48px] h-[4px] shrink-0 bg-[#2094e3] rounded-[2px] relative z-[183]" />
              </div>
              <span className="flex w-[752px] h-[78px] justify-end items-start self-stretch shrink-0 font-['Vazirmatn'] text-[15px] font-normal leading-[26px] text-[#17324d] relative text-right z-[184]">
                راهکار سبز یک استارتاپ حوزه توسعه روستایی است که با استفاده از
                فناوری، آموزش و شبکه‌سازی بازار، تولیدکنندگان محلی و کسب‌وکارهای
                کوچک را به بازارهای فروش متصل می‌کند. ما معتقدیم توسعه پایدار
                زمانی محقق می‌شود که جوامع محلی ابزار و مهارت کافی برای
                نقش‌آفرینی مستقل را داشته باشند.
              </span>
            </div>
            <div className="flex gap-[20px] items-start self-stretch shrink-0 flex-nowrap relative z-[185]">
              <div className="flex pt-[24px] pr-[24px] pb-[24px] pl-[24px] flex-col gap-[12px] items-end self-stretch grow shrink-0 basis-0 flex-nowrap bg-[#f4faf7] rounded-[16px] border-solid border border-[#d1ece3] relative z-[186]">
                <div className="flex w-[84px] gap-[8px] items-center shrink-0 flex-nowrap relative z-[187]">
                  <span className="flex w-[56px] h-[25px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[16px] font-bold leading-[25px] text-[#159455] relative text-right whitespace-nowrap z-[188]">
                    راهکار ما
                  </span>
                  <div className="flex w-[20px] h-[20px] flex-col justify-center items-center shrink-0 flex-nowrap relative overflow-hidden z-[189]">
                    <div className="w-[20px] h-[20px] shrink-0 bg-[url(/assets/xZWmmWVYeR.png)] bg-cover bg-no-repeat relative overflow-hidden z-[190]" />
                  </div>
                </div>
                <div className="flex flex-col gap-[8px] items-end self-stretch shrink-0 flex-nowrap relative z-[191]">
                  <div className="flex w-[151px] gap-[8px] items-center shrink-0 flex-nowrap relative z-[192]">
                    <span className="flex w-[139px] h-[20px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[13px] font-normal leading-[20px] text-[#17324d] relative text-right whitespace-nowrap z-[193]">
                      شناسایی ظرفیت‌های محلی
                    </span>
                    <div className="w-[4px] h-[4px] shrink-0 bg-[#159455] rounded-[2px] relative z-[194]" />
                  </div>
                  <div className="flex w-[143px] gap-[8px] items-center shrink-0 flex-nowrap relative z-[195]">
                    <span className="flex w-[131px] h-[20px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[13px] font-normal leading-[20px] text-[#17324d] relative text-right whitespace-nowrap z-[196]">
                      آموزش مهارت و کسب‌وکار
                    </span>
                    <div className="w-[4px] h-[4px] shrink-0 bg-[#159455] rounded-[2px] relative z-[197]" />
                  </div>
                  <div className="flex w-[110px] gap-[8px] items-center shrink-0 flex-nowrap relative z-[198]">
                    <span className="flex w-[98px] h-[20px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[13px] font-normal leading-[20px] text-[#17324d] relative text-right whitespace-nowrap z-[199]">
                      تجهیز تولیدکنندگان
                    </span>
                    <div className="w-[4px] h-[4px] shrink-0 bg-[#159455] rounded-[2px] relative z-[200]" />
                  </div>
                  <div className="flex w-[134px] gap-[8px] items-center shrink-0 flex-nowrap relative z-[201]">
                    <span className="flex w-[122px] h-[20px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[13px] font-normal leading-[20px] text-[#17324d] relative text-right whitespace-nowrap z-[202]">
                      ایجاد شبکه فروش پایدار
                    </span>
                    <div className="w-[4px] h-[4px] shrink-0 bg-[#159455] rounded-[2px] relative z-[203]" />
                  </div>
                  <div className="flex w-[132px] gap-[8px] items-center shrink-0 flex-nowrap relative z-[204]">
                    <span className="flex w-[120px] h-[20px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[13px] font-normal leading-[20px] text-[#17324d] relative text-right whitespace-nowrap z-[205]">
                      سنجش درآمد و اشتغال
                    </span>
                    <div className="w-[4px] h-[4px] shrink-0 bg-[#159455] rounded-[2px] relative z-[206]" />
                  </div>
                  <div className="flex w-[129px] gap-[8px] items-center shrink-0 flex-nowrap relative z-[207]">
                    <span className="flex w-[117px] h-[20px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[13px] font-normal leading-[20px] text-[#17324d] relative text-right whitespace-nowrap z-[208]">
                      گزارش‌دهی اثر اجتماعی
                    </span>
                    <div className="w-[4px] h-[4px] shrink-0 bg-[#159455] rounded-[2px] relative z-[209]" />
                  </div>
                </div>
              </div>
              <div className="flex pt-[24px] pr-[24px] pb-[24px] pl-[24px] flex-col gap-[12px] items-end self-stretch grow shrink-0 basis-0 flex-nowrap bg-[#fcf5f5] rounded-[16px] border-solid border border-[#fbdcdd] relative z-[210]">
                <div className="flex w-[184px] gap-[8px] items-center shrink-0 flex-nowrap relative z-[211]">
                  <span className="flex w-[156px] h-[25px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[16px] font-bold leading-[25px] text-[#d32f2f] relative text-right whitespace-nowrap z-[212]">
                    مسئله‌ای که حل می‌کنیم
                  </span>
                  <div className="flex w-[20px] h-[20px] flex-col justify-center items-center shrink-0 flex-nowrap relative overflow-hidden z-[213]">
                    <div className="w-[20px] h-[20px] shrink-0 bg-[url(/assets/0yyDZZBoXn.png)] bg-cover bg-no-repeat relative overflow-hidden z-[214]" />
                  </div>
                </div>
                <span className="flex w-[350px] h-[96px] justify-end items-start self-stretch shrink-0 font-['Vazirmatn'] text-[14px] font-normal leading-[24px] text-[#17324d] relative text-right z-[215]">
                  تولیدکنندگان محلی و زنان روستایی معمولاً به آموزش کسب‌وکار،
                  تجهیزات کارآمد، شبکه فروش گسترده و دسترسی مستقیم به بازار
                  پایدار دسترسی کافی ندارند. این امر باعث حاشیه‌نشینی اقتصادی
                  آنان می‌گردد.
                </span>
              </div>
            </div>
            <div className="flex flex-col gap-[20px] items-end self-stretch shrink-0 flex-nowrap relative z-[216]">
              <div className="flex flex-col gap-[8px] items-end self-stretch shrink-0 flex-nowrap relative z-[217]">
                <span className="flex w-[171px] h-[38px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[24px] font-bold leading-[37.5px] text-[#17324d] relative text-right whitespace-nowrap z-[218]">
                  محصول و خدمات
                </span>
                <div className="w-[48px] h-[4px] shrink-0 bg-[#2094e3] rounded-[2px] relative z-[219]" />
              </div>
              <div className="flex gap-[16px] items-start self-stretch shrink-0 flex-nowrap relative z-[220]">
                <div className="flex pt-[20px] pr-[20px] pb-[20px] pl-[20px] flex-col gap-[12px] items-end grow shrink-0 basis-0 flex-nowrap bg-[#fff] rounded-[16px] border-solid border border-[#e4ebf1] relative z-[221]">
                  <div className="flex w-[40px] h-[40px] justify-center items-center shrink-0 flex-nowrap bg-[#eaf8f0] rounded-[10px] relative z-[222]">
                    <div className="flex w-[20px] h-[20px] flex-col justify-center items-center shrink-0 flex-nowrap relative overflow-hidden z-[223]">
                      <div className="w-[20px] h-[20px] shrink-0 bg-[url(/assets/K86RYGK7Qz.png)] bg-cover bg-no-repeat relative overflow-hidden z-[224]" />
                    </div>
                  </div>
                  <span className="flex w-[86px] h-[23px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[15px] font-bold leading-[23px] text-[#17324d] relative text-right whitespace-nowrap z-[225]">
                    پایش اثر پایدار
                  </span>
                  <span className="flex w-[221.333px] h-[40px] justify-end items-start self-stretch shrink-0 font-['Vazirmatn'] text-[12px] font-normal leading-[20px] text-[#60758a] relative text-right z-[226]">
                    ثبت داده‌های اشتغال، درآمد و پیشرفت لحظه‌ای بهره‌مندان پروژه
                  </span>
                </div>
                <div className="flex pt-[20px] pr-[20px] pb-[20px] pl-[20px] flex-col gap-[12px] items-end grow shrink-0 basis-0 flex-nowrap bg-[#fff] rounded-[16px] border-solid border border-[#e4ebf1] relative z-[227]">
                  <div className="flex w-[40px] h-[40px] justify-center items-center shrink-0 flex-nowrap bg-[#eaf8f0] rounded-[10px] relative z-[228]">
                    <div className="flex w-[20px] h-[20px] flex-col justify-center items-center shrink-0 flex-nowrap relative overflow-hidden z-[229]">
                      <div className="w-[20px] h-[20px] shrink-0 bg-[url(/assets/A5Axy17H7k.png)] bg-cover bg-no-repeat relative overflow-hidden z-[230]" />
                    </div>
                  </div>
                  <span className="flex w-[139px] h-[23px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[15px] font-bold leading-[23px] text-[#17324d] relative text-right whitespace-nowrap z-[231]">
                    زیرساخت زنجیره فروش
                  </span>
                  <span className="flex w-[221.333px] h-[40px] justify-end items-start self-stretch shrink-0 font-['Vazirmatn'] text-[12px] font-normal leading-[20px] text-[#60758a] relative text-right z-[232]">
                    اتصال هوشمند تولیدکنندگان محلی به زنجیره تأمین و کانال‌های
                    فروش مدرن
                  </span>
                </div>
                <div className="flex pt-[20px] pr-[20px] pb-[20px] pl-[20px] flex-col gap-[12px] items-end grow shrink-0 basis-0 flex-nowrap bg-[#fff] rounded-[16px] border-solid border border-[#e4ebf1] relative z-[233]">
                  <div className="flex w-[40px] h-[40px] justify-center items-center shrink-0 flex-nowrap bg-[#eaf8f0] rounded-[10px] relative z-[234]">
                    <div className="flex w-[20px] h-[20px] flex-col justify-center items-center shrink-0 flex-nowrap relative overflow-hidden z-[235]">
                      <div className="w-[20px] h-[20px] shrink-0 bg-[url(/assets/ukMGsxj1Qk.png)] bg-cover bg-no-repeat relative overflow-hidden z-[236]" />
                    </div>
                  </div>
                  <span className="flex w-[130px] h-[23px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[15px] font-bold leading-[23px] text-[#17324d] relative text-right whitespace-nowrap z-[237]">
                    آموزش و توانمندسازی
                  </span>
                  <span className="flex w-[221.333px] h-[40px] justify-end items-start self-stretch shrink-0 font-['Vazirmatn'] text-[12px] font-normal leading-[20px] text-[#60758a] relative text-right z-[238]">
                    برنامه‌های آموزشی مهارت، ارتقای کیفیت تولید، قیمت‌گذاری و
                    مدیریت مالی
                  </span>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-[16px] items-end self-stretch shrink-0 flex-nowrap relative z-[239]">
              <div className="flex flex-col gap-[8px] items-end self-stretch shrink-0 flex-nowrap relative z-[240]">
                <span className="flex w-[256px] h-[38px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[24px] font-bold leading-[37.5px] text-[#17324d] relative text-right whitespace-nowrap z-[241]">
                  حوزه‌های اثرگذاری اجتماعی
                </span>
                <div className="w-[48px] h-[4px] shrink-0 bg-[#2094e3] rounded-[2px] relative z-[242]" />
              </div>
              <div className="flex gap-[12px] items-start self-stretch shrink-0 flex-nowrap relative z-[243]">
                <div className="flex pt-[16px] pr-[16px] pb-[16px] pl-[16px] gap-[12px] justify-end items-center grow shrink-0 basis-0 flex-nowrap bg-[#fff] rounded-[12px] border-solid border border-[#e4ebf1] relative z-[244]">
                  <div className="flex w-[102px] flex-col gap-[2px] items-end shrink-0 flex-nowrap relative z-[245]">
                    <span className="flex w-[102px] h-[20px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[13px] font-bold leading-[20px] text-[#17324d] relative text-right whitespace-nowrap z-[246]">
                      افزایش درآمد خانوار
                    </span>
                    <span className="flex w-[30px] h-[17px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[11px] font-normal leading-[17px] text-[#60758a] relative text-right whitespace-nowrap z-[247]">
                      ۲ پروژه
                    </span>
                  </div>
                  <div className="flex w-[32px] h-[32px] justify-center items-center shrink-0 flex-nowrap bg-[#f0f4f8] rounded-[8px] relative z-[248]">
                    <div className="flex w-[16px] h-[16px] flex-col justify-center items-center shrink-0 flex-nowrap relative overflow-hidden z-[249]">
                      <div className="w-[16px] h-[16px] shrink-0 bg-[url(/assets/c6YW7PeOAD.png)] bg-cover bg-no-repeat relative overflow-hidden z-[250]" />
                    </div>
                  </div>
                </div>
                <div className="flex pt-[16px] pr-[16px] pb-[16px] pl-[16px] gap-[12px] justify-end items-center grow shrink-0 basis-0 flex-nowrap bg-[#fff] rounded-[12px] border-solid border border-[#e4ebf1] relative z-[251]">
                  <div className="flex w-[113px] flex-col gap-[2px] items-end shrink-0 flex-nowrap relative z-[252]">
                    <span className="flex w-[113px] h-[20px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[13px] font-bold leading-[20px] text-[#17324d] relative text-right whitespace-nowrap z-[253]">
                      توسعه پایدار روستایی
                    </span>
                    <span className="flex w-[31px] h-[17px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[11px] font-normal leading-[17px] text-[#60758a] relative text-right whitespace-nowrap z-[254]">
                      ۵ پروژه
                    </span>
                  </div>
                  <div className="flex w-[32px] h-[32px] justify-center items-center shrink-0 flex-nowrap bg-[#f0f4f8] rounded-[8px] relative z-[255]">
                    <div className="flex w-[16px] h-[16px] flex-col justify-center items-center shrink-0 flex-nowrap relative overflow-hidden z-[256]">
                      <div className="w-[16px] h-[16px] shrink-0 bg-[url(/assets/Vh5dRbar9V.png)] bg-cover bg-no-repeat relative overflow-hidden z-[257]" />
                    </div>
                  </div>
                </div>
                <div className="flex pt-[16px] pr-[16px] pb-[16px] pl-[16px] gap-[12px] justify-end items-center grow shrink-0 basis-0 flex-nowrap bg-[#fff] rounded-[12px] border-solid border border-[#e4ebf1] relative z-[258]">
                  <div className="flex w-[88px] flex-col gap-[2px] items-end shrink-0 flex-nowrap relative z-[259]">
                    <span className="flex w-[88px] h-[20px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[13px] font-bold leading-[20px] text-[#17324d] relative text-right whitespace-nowrap z-[260]">
                      توانمندسازی زنان
                    </span>
                    <span className="flex w-[31px] h-[17px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[11px] font-normal leading-[17px] text-[#60758a] relative text-right whitespace-nowrap z-[261]">
                      ۴ پروژه
                    </span>
                  </div>
                  <div className="flex w-[32px] h-[32px] justify-center items-center shrink-0 flex-nowrap bg-[#f0f4f8] rounded-[8px] relative z-[262]">
                    <div className="flex w-[16px] h-[16px] flex-col justify-center items-center shrink-0 flex-nowrap relative overflow-hidden z-[263]">
                      <div className="w-[16px] h-[16px] shrink-0 bg-[url(/assets/RskBnGJ4EZ.png)] bg-cover bg-no-repeat relative overflow-hidden z-[264]" />
                    </div>
                  </div>
                </div>
                <div className="flex pt-[16px] pr-[16px] pb-[16px] pl-[16px] gap-[12px] justify-end items-center grow shrink-0 basis-0 flex-nowrap bg-[#fff] rounded-[12px] border-solid border border-[#e4ebf1] relative z-[265]">
                  <div className="flex w-[101px] flex-col gap-[2px] items-end shrink-0 flex-nowrap relative z-[266]">
                    <span className="flex w-[101px] h-[20px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[13px] font-bold leading-[20px] text-[#17324d] relative text-right whitespace-nowrap z-[267]">
                      اشتغال پایدار محلی
                    </span>
                    <span className="flex w-[32px] h-[17px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[11px] font-normal leading-[17px] text-[#60758a] relative text-right whitespace-nowrap z-[268]">
                      ۳ پروژه
                    </span>
                  </div>
                  <div className="flex w-[32px] h-[32px] justify-center items-center shrink-0 flex-nowrap bg-[#f0f4f8] rounded-[8px] relative z-[269]">
                    <div className="flex w-[16px] h-[16px] flex-col justify-center items-center shrink-0 flex-nowrap relative overflow-hidden z-[270]">
                      <div className="w-[16px] h-[16px] shrink-0 bg-[url(/assets/4hdhqdqSvX.png)] bg-cover bg-no-repeat relative overflow-hidden z-[271]" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-[20px] items-end self-stretch shrink-0 flex-nowrap relative z-[272]">
              <div className="flex flex-col gap-[8px] items-end self-stretch shrink-0 flex-nowrap relative z-[273]">
                <span className="flex w-[142px] h-[38px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[24px] font-bold leading-[37.5px] text-[#17324d] relative text-right whitespace-nowrap z-[274]">
                  پروژه‌های فعال
                </span>
                <div className="w-[48px] h-[4px] shrink-0 bg-[#2094e3] rounded-[2px] relative z-[275]" />
              </div>
              <div className="flex gap-[20px] items-start self-stretch shrink-0 flex-nowrap relative z-[276]">
                <div className="flex pt-[24px] pr-[24px] pb-[24px] pl-[24px] flex-col gap-[16px] items-end grow shrink-0 basis-0 flex-nowrap bg-[#fff] rounded-[16px] border-solid border border-[#e4ebf1] relative z-[277]">
                  <div className="flex justify-between items-center self-stretch shrink-0 flex-nowrap relative z-[278]">
                    <div className="flex w-[66px] pt-[4px] pr-[8px] pb-[4px] pl-[8px] items-start shrink-0 flex-nowrap bg-[#fff3cd] rounded-[6px] relative z-[279]">
                      <span className="flex w-[50px] h-[17px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[11px] font-bold leading-[17px] text-[#856404] relative text-right whitespace-nowrap z-[280]">
                        در حال اجرا
                      </span>
                    </div>
                    <span className="flex w-[223px] h-[25px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[16px] font-bold leading-[25px] text-[#17324d] relative text-right whitespace-nowrap z-[281]">
                      اشتغال پایدار زنان روستایی گلستان
                    </span>
                  </div>
                  <span className="flex w-[68px] h-[19px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[12px] font-normal leading-[18.75px] text-[#60758a] relative text-right whitespace-nowrap z-[282]">
                    گلستان، گرگان
                  </span>
                  <div className="flex flex-col gap-[12px] items-end self-stretch shrink-0 flex-nowrap relative z-[283]">
                    <div className="flex flex-col gap-[4px] items-end self-stretch shrink-0 flex-nowrap relative z-[284]">
                      <div className="flex justify-between items-start self-stretch shrink-0 flex-nowrap relative z-[285]">
                        <span className="flex w-[20px] h-[17px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[11px] font-bold leading-[17px] text-[#17324d] relative text-right whitespace-nowrap z-[286]">
                          ۵۸٪
                        </span>
                        <span className="flex w-[84px] h-[17px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[11px] font-normal leading-[17px] text-[#60758a] relative text-right whitespace-nowrap z-[287]">
                          پیشرفت جذب مالی
                        </span>
                      </div>
                      <div className="flex h-[6px] justify-end items-start self-stretch shrink-0 flex-nowrap bg-[#e4ebf1] rounded-[3px] relative z-[288]">
                        <div className="w-[180px] self-stretch shrink-0 bg-[#2094e3] rounded-[3px] relative z-[289]" />
                      </div>
                    </div>
                    <div className="flex flex-col gap-[4px] items-end self-stretch shrink-0 flex-nowrap relative z-[290]">
                      <div className="flex justify-between items-start self-stretch shrink-0 flex-nowrap relative z-[291]">
                        <span className="flex w-[19px] h-[17px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[11px] font-bold leading-[17px] text-[#17324d] relative text-right whitespace-nowrap z-[292]">
                          ۴۲٪
                        </span>
                        <span className="flex w-[108px] h-[17px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[11px] font-normal leading-[17px] text-[#60758a] relative text-right whitespace-nowrap z-[293]">
                          پیشرفت فیزیکی و اجرایی
                        </span>
                      </div>
                      <div className="flex h-[6px] justify-end items-start self-stretch shrink-0 flex-nowrap bg-[#e4ebf1] rounded-[3px] relative z-[294]">
                        <div className="w-[130px] self-stretch shrink-0 bg-[#159455] rounded-[3px] relative z-[295]" />
                      </div>
                    </div>
                  </div>
                  <div className="flex pt-[8px] pr-0 pb-0 pl-0 justify-between items-center self-stretch shrink-0 flex-nowrap relative z-[296]">
                    <div className="flex w-[111px] pt-[8px] pr-[16px] pb-[8px] pl-[16px] items-start shrink-0 flex-nowrap bg-[#2094e3] rounded-[8px] relative z-[297]">
                      <span className="flex w-[79px] h-[19px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[12px] font-bold leading-[18.75px] text-[#fff] relative text-right whitespace-nowrap z-[298]">
                        مشاهده جزئیات
                      </span>
                    </div>
                    <div className="flex w-[73px] gap-[12px] items-start shrink-0 flex-nowrap relative z-[299]">
                      <span className="flex w-[73px] h-[17px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[11px] font-normal leading-[17px] text-[#60758a] relative text-right whitespace-nowrap z-[300]">
                        ۴ شاخص ارزیابی
                      </span>
                    </div>
                  </div>
                </div>
                <div className="flex pt-[24px] pr-[24px] pb-[24px] pl-[24px] flex-col gap-[16px] items-end grow shrink-0 basis-0 flex-nowrap bg-[#fff] rounded-[16px] border-solid border border-[#e4ebf1] relative z-[301]">
                  <div className="flex justify-between items-center self-stretch shrink-0 flex-nowrap relative z-[302]">
                    <div className="flex w-[66px] pt-[4px] pr-[8px] pb-[4px] pl-[8px] items-start shrink-0 flex-nowrap bg-[#fff3cd] rounded-[6px] relative z-[303]">
                      <span className="flex w-[50px] h-[17px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[11px] font-bold leading-[17px] text-[#856404] relative text-right whitespace-nowrap z-[304]">
                        در حال اجرا
                      </span>
                    </div>
                    <span className="flex w-[235px] h-[25px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[16px] font-bold leading-[25px] text-[#17324d] relative text-right whitespace-nowrap z-[305]">
                      توسعه زنجیره تأمین محصولات محلی
                    </span>
                  </div>
                  <span className="flex w-[69px] h-[19px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[12px] font-normal leading-[18.75px] text-[#60758a] relative text-right whitespace-nowrap z-[306]">
                    مازندران، ساری
                  </span>
                  <div className="flex flex-col gap-[12px] items-end self-stretch shrink-0 flex-nowrap relative z-[307]">
                    <div className="flex flex-col gap-[4px] items-end self-stretch shrink-0 flex-nowrap relative z-[308]">
                      <div className="flex justify-between items-start self-stretch shrink-0 flex-nowrap relative z-[309]">
                        <span className="flex w-[19px] h-[17px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[11px] font-bold leading-[17px] text-[#17324d] relative text-right whitespace-nowrap z-[310]">
                          ۷۲٪
                        </span>
                        <span className="flex w-[84px] h-[17px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[11px] font-normal leading-[17px] text-[#60758a] relative text-right whitespace-nowrap z-[311]">
                          پیشرفت جذب مالی
                        </span>
                      </div>
                      <div className="flex h-[6px] justify-end items-start self-stretch shrink-0 flex-nowrap bg-[#e4ebf1] rounded-[3px] relative z-[312]">
                        <div className="w-[180px] self-stretch shrink-0 bg-[#2094e3] rounded-[3px] relative z-[313]" />
                      </div>
                    </div>
                    <div className="flex flex-col gap-[4px] items-end self-stretch shrink-0 flex-nowrap relative z-[314]">
                      <div className="flex justify-between items-start self-stretch shrink-0 flex-nowrap relative z-[315]">
                        <span className="flex w-[19px] h-[17px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[11px] font-bold leading-[17px] text-[#17324d] relative text-right whitespace-nowrap z-[316]">
                          ۶۵٪
                        </span>
                        <span className="flex w-[108px] h-[17px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[11px] font-normal leading-[17px] text-[#60758a] relative text-right whitespace-nowrap z-[317]">
                          پیشرفت فیزیکی و اجرایی
                        </span>
                      </div>
                      <div className="flex h-[6px] justify-end items-start self-stretch shrink-0 flex-nowrap bg-[#e4ebf1] rounded-[3px] relative z-[318]">
                        <div className="w-[130px] self-stretch shrink-0 bg-[#159455] rounded-[3px] relative z-[319]" />
                      </div>
                    </div>
                  </div>
                  <div className="flex pt-[8px] pr-0 pb-0 pl-0 justify-between items-center self-stretch shrink-0 flex-nowrap relative z-[320]">
                    <div className="flex w-[111px] pt-[8px] pr-[16px] pb-[8px] pl-[16px] items-start shrink-0 flex-nowrap bg-[#2094e3] rounded-[8px] relative z-[321]">
                      <span className="flex w-[79px] h-[19px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[12px] font-bold leading-[18.75px] text-[#fff] relative text-right whitespace-nowrap z-[322]">
                        مشاهده جزئیات
                      </span>
                    </div>
                    <div className="flex w-[73px] gap-[12px] items-start shrink-0 flex-nowrap relative z-[323]">
                      <span className="flex w-[73px] h-[17px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[11px] font-normal leading-[17px] text-[#60758a] relative text-right whitespace-nowrap z-[324]">
                        ۴ شاخص ارزیابی
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-[16px] items-end self-stretch shrink-0 flex-nowrap relative z-[325]">
              <div className="flex flex-col gap-[8px] items-end self-stretch shrink-0 flex-nowrap relative z-[326]">
                <span className="flex w-[199px] h-[38px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[24px] font-bold leading-[37.5px] text-[#17324d] relative text-right whitespace-nowrap z-[327]">
                  پروژه‌های تکمیل‌شده
                </span>
                <div className="w-[48px] h-[4px] shrink-0 bg-[#2094e3] rounded-[2px] relative z-[328]" />
              </div>
              <div className="flex flex-col gap-[8px] items-end self-stretch shrink-0 flex-nowrap bg-[#fff] rounded-[12px] border-solid border border-[#e4ebf1] relative overflow-hidden z-[329]">
                <div className="flex pt-[16px] pr-[16px] pb-[16px] pl-[16px] justify-between items-center self-stretch shrink-0 flex-nowrap border-solid border-t border-t-[#e4ebf1] relative z-[330]">
                  <div className="flex w-[110px] gap-[12px] items-center shrink-0 flex-nowrap relative z-[331]">
                    <span className="flex w-[110px] h-[20px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[13px] font-normal leading-[20px] text-[#2094e3] relative text-right underline whitespace-nowrap z-[332]">
                      مشاهده گزارش نهایی
                    </span>
                  </div>
                  <div className="flex w-[643px] gap-[24px] items-center shrink-0 flex-nowrap relative z-[333]">
                    <span className="flex w-[95px] h-[20px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[13px] font-normal leading-[20px] text-[#17324d] relative text-right whitespace-nowrap z-[334]">
                      بهره‌مندان: ۶۲۰ نفر
                    </span>
                    <span className="flex w-[92px] h-[20px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[13px] font-normal leading-[20px] text-[#17324d] relative text-right whitespace-nowrap z-[335]">
                      تحقق اهداف: ۹۲٪
                    </span>
                    <span className="flex w-[84px] h-[20px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[13px] font-normal leading-[20px] text-[#60758a] relative text-right whitespace-nowrap z-[336]">
                      سال اتمام: ۱۴۰۳
                    </span>
                    <span className="flex w-[300px] h-[22px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-bold leading-[21.875px] text-[#17324d] relative text-right whitespace-nowrap z-[337]">
                      توسعه بازار فروش صنایع‌دستی روستایی
                    </span>
                  </div>
                </div>
                <div className="flex pt-[16px] pr-[16px] pb-[16px] pl-[16px] justify-between items-center self-stretch shrink-0 flex-nowrap border-solid border-t border-t-[#e4ebf1] relative z-[338]">
                  <div className="flex w-[110px] gap-[12px] items-center shrink-0 flex-nowrap relative z-[339]">
                    <span className="flex w-[110px] h-[20px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[13px] font-normal leading-[20px] text-[#2094e3] relative text-right underline whitespace-nowrap z-[340]">
                      مشاهده گزارش نهایی
                    </span>
                  </div>
                  <div className="flex w-[646px] gap-[24px] items-center shrink-0 flex-nowrap relative z-[341]">
                    <span className="flex w-[97px] h-[20px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[13px] font-normal leading-[20px] text-[#17324d] relative text-right whitespace-nowrap z-[342]">
                      بهره‌مندان: ۴۸۰ نفر
                    </span>
                    <span className="flex w-[94px] h-[20px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[13px] font-normal leading-[20px] text-[#17324d] relative text-right whitespace-nowrap z-[343]">
                      تحقق اهداف: ۸۸٪
                    </span>
                    <span className="flex w-[83px] h-[20px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[13px] font-normal leading-[20px] text-[#60758a] relative text-right whitespace-nowrap z-[344]">
                      سال اتمام: ۱۴۰۴
                    </span>
                    <span className="flex w-[300px] h-[22px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-bold leading-[21.875px] text-[#17324d] relative text-right whitespace-nowrap z-[345]">
                      آموزش کسب‌وکار خرد زنان محلی
                    </span>
                  </div>
                </div>
                <div className="flex pt-[16px] pr-[16px] pb-[16px] pl-[16px] justify-between items-center self-stretch shrink-0 flex-nowrap relative z-[346]">
                  <div className="flex w-[110px] gap-[12px] items-center shrink-0 flex-nowrap relative z-[347]">
                    <span className="flex w-[110px] h-[20px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[13px] font-normal leading-[20px] text-[#2094e3] relative text-right underline whitespace-nowrap z-[348]">
                      مشاهده گزارش نهایی
                    </span>
                  </div>
                  <div className="flex w-[642px] gap-[24px] items-center shrink-0 flex-nowrap relative z-[349]">
                    <span className="flex w-[97px] h-[20px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[13px] font-normal leading-[20px] text-[#17324d] relative text-right whitespace-nowrap z-[350]">
                      بهره‌مندان: ۷۴۰ نفر
                    </span>
                    <span className="flex w-[90px] h-[20px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[13px] font-normal leading-[20px] text-[#17324d] relative text-right whitespace-nowrap z-[351]">
                      تحقق اهداف: ۸۱٪
                    </span>
                    <span className="flex w-[83px] h-[20px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[13px] font-normal leading-[20px] text-[#60758a] relative text-right whitespace-nowrap z-[352]">
                      سال اتمام: ۱۴۰۴
                    </span>
                    <span className="flex w-[300px] h-[22px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-bold leading-[21.875px] text-[#17324d] relative text-right whitespace-nowrap z-[353]">
                      ایجاد بازار آنلاین محصولات بومی گلستان
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-[16px] items-end self-stretch shrink-0 flex-nowrap relative z-[354]">
              <div className="flex flex-col gap-[8px] items-end self-stretch shrink-0 flex-nowrap relative z-[355]">
                <span className="flex w-[295px] h-[38px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[24px] font-bold leading-[37.5px] text-[#17324d] relative text-right whitespace-nowrap z-[356]">
                  اثر تجمیعی پروژه‌های تأییدشده
                </span>
                <div className="w-[48px] h-[4px] shrink-0 bg-[#2094e3] rounded-[2px] relative z-[357]" />
              </div>
              <div className="flex pt-[24px] pr-[24px] pb-[24px] pl-[24px] flex-col gap-[20px] items-end self-stretch shrink-0 flex-nowrap bg-[#f0f8ff] rounded-[16px] border-solid border border-[#cbe4fc] relative z-[358]">
                <div className="flex gap-[16px] items-start self-stretch shrink-0 flex-nowrap relative z-[359]">
                  <div className="flex pt-[16px] pr-[16px] pb-[16px] pl-[16px] flex-col gap-[8px] items-end grow shrink-0 basis-0 flex-nowrap bg-[#fff] rounded-[12px] border-solid border border-[#e4ebf1] relative z-[360]">
                    <div className="flex w-[32px] h-[32px] justify-center items-center shrink-0 flex-nowrap bg-[#e2f0ff] rounded-[8px] relative z-[361]">
                      <div className="flex w-[16px] h-[16px] flex-col justify-center items-center shrink-0 flex-nowrap relative overflow-hidden z-[362]">
                        <div className="w-[16px] h-[16px] shrink-0 bg-[url(/assets/vv7uzraKEU.png)] bg-cover bg-no-repeat relative overflow-hidden z-[363]" />
                      </div>
                    </div>
                    <span className="flex w-[101px] h-[17px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[11px] font-normal leading-[17px] text-[#60758a] relative text-right whitespace-nowrap z-[364]">
                      روستاهای تحت پوشش
                    </span>
                    <span className="flex w-[66px] h-[28px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[18px] font-bold leading-[28px] text-[#17324d] relative text-right whitespace-nowrap z-[365]">
                      ۶۸ روستا
                    </span>
                  </div>
                  <div className="flex pt-[16px] pr-[16px] pb-[16px] pl-[16px] flex-col gap-[8px] items-end grow shrink-0 basis-0 flex-nowrap bg-[#fff] rounded-[12px] border-solid border border-[#e4ebf1] relative z-[366]">
                    <div className="flex w-[32px] h-[32px] justify-center items-center shrink-0 flex-nowrap bg-[#e2f0ff] rounded-[8px] relative z-[367]">
                      <div className="flex w-[16px] h-[16px] flex-col justify-center items-center shrink-0 flex-nowrap relative overflow-hidden z-[368]">
                        <div className="w-[16px] h-[16px] shrink-0 bg-[url(/assets/5sM44P6LpP.png)] bg-cover bg-no-repeat relative overflow-hidden z-[369]" />
                      </div>
                    </div>
                    <span className="flex w-[78px] h-[17px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[11px] font-normal leading-[17px] text-[#60758a] relative text-right whitespace-nowrap z-[370]">
                      خانوارهای بهره‌مند
                    </span>
                    <span className="flex w-[91px] h-[28px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[18px] font-bold leading-[28px] text-[#17324d] relative text-right whitespace-nowrap z-[371]">
                      ۲٬۸۴۰ خانوار
                    </span>
                  </div>
                  <div className="flex pt-[16px] pr-[16px] pb-[16px] pl-[16px] flex-col gap-[8px] items-end grow shrink-0 basis-0 flex-nowrap bg-[#fff] rounded-[12px] border-solid border border-[#e4ebf1] relative z-[372]">
                    <div className="flex w-[32px] h-[32px] justify-center items-center shrink-0 flex-nowrap bg-[#e2f0ff] rounded-[8px] relative z-[373]">
                      <div className="flex w-[16px] h-[16px] flex-col justify-center items-center shrink-0 flex-nowrap relative overflow-hidden z-[374]">
                        <div className="w-[16px] h-[16px] shrink-0 bg-[url(/assets/0jXtqwbfEk.png)] bg-cover bg-no-repeat relative overflow-hidden z-[375]" />
                      </div>
                    </div>
                    <span className="flex w-[71px] h-[17px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[11px] font-normal leading-[17px] text-[#60758a] relative text-right whitespace-nowrap z-[376]">
                      افراد آموزش‌دیده
                    </span>
                    <span className="flex w-[66px] h-[28px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[18px] font-bold leading-[28px] text-[#17324d] relative text-right whitespace-nowrap z-[377]">
                      ۱٬۲۵۰ نفر
                    </span>
                  </div>
                  <div className="flex pt-[16px] pr-[16px] pb-[16px] pl-[16px] flex-col gap-[8px] items-end grow shrink-0 basis-0 flex-nowrap bg-[#fff] rounded-[12px] border-solid border border-[#e4ebf1] relative z-[378]">
                    <div className="flex w-[32px] h-[32px] justify-center items-center shrink-0 flex-nowrap bg-[#e2f0ff] rounded-[8px] relative z-[379]">
                      <div className="flex w-[16px] h-[16px] flex-col justify-center items-center shrink-0 flex-nowrap relative overflow-hidden z-[380]">
                        <div className="w-[16px] h-[16px] shrink-0 bg-[url(/assets/XVc8MZGRzg.png)] bg-cover bg-no-repeat relative overflow-hidden z-[381]" />
                      </div>
                    </div>
                    <span className="flex w-[76px] h-[17px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[11px] font-normal leading-[17px] text-[#60758a] relative text-right whitespace-nowrap z-[382]">
                      اشتغال ایجادشده
                    </span>
                    <span className="flex w-[56px] h-[28px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[18px] font-bold leading-[28px] text-[#17324d] relative text-right whitespace-nowrap z-[383]">
                      ۴۸۰ نفر
                    </span>
                  </div>
                </div>
                <span className="flex w-[551px] h-[19px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[12px] font-normal leading-[18.75px] text-[#60758a] relative text-right whitespace-nowrap z-[384]">
                  این آمار شامل پروژه‌هایی است که گزارش نهایی عملکرد آن‌ها توسط
                  خانه خلاق و کمیته امداد ارزیابی و تأیید شده است.
                </span>
              </div>
            </div>
            <div className="flex flex-col gap-[16px] items-end self-stretch shrink-0 flex-nowrap relative z-[385]">
              <div className="flex flex-col gap-[8px] items-end self-stretch shrink-0 flex-nowrap relative z-[386]">
                <span className="flex w-[139px] h-[38px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[24px] font-bold leading-[37.5px] text-[#17324d] relative text-right whitespace-nowrap z-[387]">
                  تیم راهکار سبز
                </span>
                <span className="flex w-[195px] h-[22px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-normal leading-[21.875px] text-[#60758a] relative text-right whitespace-nowrap z-[388]">
                  اعضای اصلی و عمومی تیم استارتاپ
                </span>
                <div className="w-[48px] h-[4px] shrink-0 bg-[#2094e3] rounded-[2px] relative z-[389]" />
              </div>
              <div className="flex gap-[16px] items-start self-stretch shrink-0 flex-nowrap relative z-[390]">
                <div className="flex pt-[16px] pr-[16px] pb-[16px] pl-[16px] flex-col gap-[12px] items-center grow shrink-0 basis-0 flex-nowrap bg-[#fff] rounded-[16px] border-solid border border-[#e4ebf1] relative z-[391]">
                  <div className="w-[80px] h-[80px] shrink-0 bg-[url(/assets/fvh8FBsucL.jpg)] bg-cover bg-no-repeat rounded-[40px] relative z-[392]" />
                  <div className="flex w-[105px] flex-col gap-[4px] items-center shrink-0 flex-nowrap relative z-[393]">
                    <span className="flex w-[75px] h-[23px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[15px] font-bold leading-[23px] text-[#17324d] relative text-right whitespace-nowrap z-[394]">
                      سارا محمدی
                    </span>
                    <span className="flex w-[105px] h-[17px] justify-center items-start shrink-0 basis-auto font-['Vazirmatn'] text-[11px] font-normal leading-[17px] text-[#60758a] relative text-center whitespace-nowrap z-[395]">
                      هم‌بنیان‌گذار و مدیرعامل
                    </span>
                  </div>
                  <div className="flex w-[134px] pt-[4px] pr-[8px] pb-[4px] pl-[8px] items-start shrink-0 flex-nowrap bg-[#f0f4f8] rounded-[6px] relative z-[396]">
                    <span className="flex w-[118px] h-[16px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[10px] font-normal leading-[15.625px] text-[#60758a] relative text-right whitespace-nowrap z-[397]">
                      توسعه کسب‌وکارهای اجتماعی
                    </span>
                  </div>
                  <div className="flex w-[16px] h-[16px] flex-col justify-center items-center shrink-0 flex-nowrap relative overflow-hidden z-[398]">
                    <div className="w-[16px] h-[16px] shrink-0 bg-[url(/assets/nSiUfGu5Rn.png)] bg-cover bg-no-repeat relative overflow-hidden z-[399]" />
                  </div>
                </div>
                <div className="flex pt-[16px] pr-[16px] pb-[16px] pl-[16px] flex-col gap-[12px] items-center grow shrink-0 basis-0 flex-nowrap bg-[#fff] rounded-[16px] border-solid border border-[#e4ebf1] relative z-[400]">
                  <div className="w-[80px] h-[80px] shrink-0 bg-[url(/assets/sAKOUKce0v.jpg)] bg-cover bg-no-repeat rounded-[40px] relative z-[401]" />
                  <div className="flex w-[122px] flex-col gap-[4px] items-center shrink-0 flex-nowrap relative z-[402]">
                    <span className="flex w-[66px] h-[23px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[15px] font-bold leading-[23px] text-[#17324d] relative text-right whitespace-nowrap z-[403]">
                      امیر رضایی
                    </span>
                    <span className="flex w-[122px] h-[17px] justify-center items-start shrink-0 basis-auto font-['Vazirmatn'] text-[11px] font-normal leading-[17px] text-[#60758a] relative text-center whitespace-nowrap z-[404]">
                      هم‌بنیان‌گذار و مدیر محصول
                    </span>
                  </div>
                  <div className="flex w-[111px] pt-[4px] pr-[8px] pb-[4px] pl-[8px] items-start shrink-0 flex-nowrap bg-[#f0f4f8] rounded-[6px] relative z-[405]">
                    <span className="flex w-[95px] h-[16px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[10px] font-normal leading-[15.625px] text-[#60758a] relative text-right whitespace-nowrap z-[406]">
                      طراحی محصول و فناوری
                    </span>
                  </div>
                  <div className="flex w-[16px] h-[16px] flex-col justify-center items-center shrink-0 flex-nowrap relative overflow-hidden z-[407]">
                    <div className="w-[16px] h-[16px] shrink-0 bg-[url(/assets/sjM0FX2j6n.png)] bg-cover bg-no-repeat relative overflow-hidden z-[408]" />
                  </div>
                </div>
                <div className="flex pt-[16px] pr-[16px] pb-[16px] pl-[16px] flex-col gap-[12px] items-center grow shrink-0 basis-0 flex-nowrap bg-[#fff] rounded-[16px] border-solid border border-[#e4ebf1] relative z-[409]">
                  <div className="w-[80px] h-[80px] shrink-0 bg-[url(/assets/MP9Ry5Aydv.jpg)] bg-cover bg-no-repeat rounded-[40px] relative z-[410]" />
                  <div className="flex w-[76px] flex-col gap-[4px] items-center shrink-0 flex-nowrap relative z-[411]">
                    <span className="flex w-[76px] h-[23px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[15px] font-bold leading-[23px] text-[#17324d] relative text-right whitespace-nowrap z-[412]">
                      مریم حسینی
                    </span>
                    <span className="flex w-[55px] h-[17px] justify-center items-start shrink-0 basis-auto font-['Vazirmatn'] text-[11px] font-normal leading-[17px] text-[#60758a] relative text-center whitespace-nowrap z-[413]">
                      مدیر عملیات
                    </span>
                  </div>
                  <div className="flex w-[112px] pt-[4px] pr-[8px] pb-[4px] pl-[8px] items-start shrink-0 flex-nowrap bg-[#f0f4f8] rounded-[6px] relative z-[414]">
                    <span className="flex w-[96px] h-[16px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[10px] font-normal leading-[15.625px] text-[#60758a] relative text-right whitespace-nowrap z-[415]">
                      اجرای پروژه‌های روستایی
                    </span>
                  </div>
                  <div className="flex w-[16px] h-[16px] flex-col justify-center items-center shrink-0 flex-nowrap relative overflow-hidden z-[416]">
                    <div className="w-[16px] h-[16px] shrink-0 bg-[url(/assets/0WnFTWuM6T.png)] bg-cover bg-no-repeat relative overflow-hidden z-[417]" />
                  </div>
                </div>
                <div className="flex pt-[16px] pr-[16px] pb-[16px] pl-[16px] flex-col gap-[12px] items-center grow shrink-0 basis-0 flex-nowrap bg-[#fff] rounded-[16px] border-solid border border-[#e4ebf1] relative z-[418]">
                  <div className="w-[80px] h-[80px] shrink-0 bg-[url(/assets/D2sjgKL7fM.jpg)] bg-cover bg-no-repeat rounded-[40px] relative z-[419]" />
                  <div className="flex w-[70px] flex-col gap-[4px] items-center shrink-0 flex-nowrap relative z-[420]">
                    <span className="flex w-[63px] h-[23px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[15px] font-bold leading-[23px] text-[#17324d] relative text-right whitespace-nowrap z-[421]">
                      علی کریمی
                    </span>
                    <span className="flex w-[70px] h-[17px] justify-center items-start shrink-0 basis-auto font-['Vazirmatn'] text-[11px] font-normal leading-[17px] text-[#60758a] relative text-center whitespace-nowrap z-[422]">
                      مدیر سنجش اثر
                    </span>
                  </div>
                  <div className="flex w-[130px] pt-[4px] pr-[8px] pb-[4px] pl-[8px] items-start shrink-0 flex-nowrap bg-[#f0f4f8] rounded-[6px] relative z-[423]">
                    <span className="flex w-[114px] h-[16px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[10px] font-normal leading-[15.625px] text-[#60758a] relative text-right whitespace-nowrap z-[424]">
                      تحلیل داده و ارزیابی اجتماعی
                    </span>
                  </div>
                  <div className="flex w-[16px] h-[16px] flex-col justify-center items-center shrink-0 flex-nowrap relative overflow-hidden z-[425]">
                    <div className="w-[16px] h-[16px] shrink-0 bg-[url(/assets/3AvBUe7M6w.png)] bg-cover bg-no-repeat relative overflow-hidden z-[426]" />
                  </div>
                </div>
              </div>
              <div className="flex justify-center items-start self-stretch shrink-0 flex-nowrap relative z-[427]">
                <span className="flex w-[146px] h-[20px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[13px] font-bold leading-[20px] text-[#2094e3] relative text-right whitespace-nowrap z-[428]">
                  مشاهده همه اعضای تیم ←
                </span>
              </div>
            </div>
            <div className="flex flex-col gap-[16px] items-end self-stretch shrink-0 flex-nowrap relative z-[429]">
              <div className="flex flex-col gap-[8px] items-end self-stretch shrink-0 flex-nowrap relative z-[430]">
                <span className="flex w-[191px] h-[38px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[24px] font-bold leading-[37.5px] text-[#17324d] relative text-right whitespace-nowrap z-[431]">
                  مسیر رشد و فعالیت
                </span>
                <div className="w-[48px] h-[4px] shrink-0 bg-[#2094e3] rounded-[2px] relative z-[432]" />
              </div>
              <div className="flex pt-0 pr-[16px] pb-0 pl-0 flex-col items-end self-stretch shrink-0 flex-nowrap relative z-[433]">
                <div className="flex gap-[16px] justify-end items-start self-stretch shrink-0 flex-nowrap relative z-[434]">
                  <div className="flex pt-0 pr-0 pb-[24px] pl-0 flex-col gap-[4px] items-end grow shrink-0 basis-0 flex-nowrap relative z-[435]">
                    <span className="flex w-[24px] h-[22px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-bold leading-[21.875px] text-[#17324d] relative text-right whitespace-nowrap z-[436]">
                      ۱۴۰۱
                    </span>
                    <span className="flex w-[290px] h-[20px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[13px] font-normal leading-[20px] text-[#60758a] relative text-right whitespace-nowrap z-[437]">
                      آغاز فعالیت رسمی استارتاپ در پارک علم و فناوری گلستان
                    </span>
                  </div>
                  <div className="flex w-[16px] h-[68px] flex-col items-center shrink-0 flex-nowrap bg-[url(/assets/3EObqDD71S.png)] bg-cover bg-no-repeat relative z-[438]" />
                </div>
                <div className="flex gap-[16px] justify-end items-start self-stretch shrink-0 flex-nowrap relative z-[439]">
                  <div className="flex pt-0 pr-0 pb-[24px] pl-0 flex-col gap-[4px] items-end grow shrink-0 basis-0 flex-nowrap relative z-[440]">
                    <span className="flex w-[27px] h-[22px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-bold leading-[21.875px] text-[#17324d] relative text-right whitespace-nowrap z-[441]">
                      ۱۴۰۲
                    </span>
                    <span className="flex w-[349px] h-[20px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[13px] font-normal leading-[20px] text-[#60758a] relative text-right whitespace-nowrap z-[442]">
                      اجرای نخستین پروژه توانمندسازی روستایی با همکاری شوراهای
                      محلی
                    </span>
                  </div>
                  <div className="flex w-[16px] h-[68px] flex-col items-center shrink-0 flex-nowrap bg-[url(/assets/gkOpLCddWF.png)] bg-cover bg-no-repeat relative z-[443]" />
                </div>
                <div className="flex gap-[16px] justify-end items-start self-stretch shrink-0 flex-nowrap relative z-[444]">
                  <div className="flex pt-0 pr-0 pb-[24px] pl-0 flex-col gap-[4px] items-end grow shrink-0 basis-0 flex-nowrap relative z-[445]">
                    <span className="flex w-[29px] h-[22px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-bold leading-[21.875px] text-[#17324d] relative text-right whitespace-nowrap z-[446]">
                      ۱۴۰۳
                    </span>
                    <span className="flex w-[335px] h-[20px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[13px] font-normal leading-[20px] text-[#60758a] relative text-right whitespace-nowrap z-[447]">
                      تأیید اولین طرح اشتغال‌زایی و مشارکت مالی در سامانه کشوری
                      ماه
                    </span>
                  </div>
                  <div className="flex w-[16px] h-[68px] flex-col items-center shrink-0 flex-nowrap bg-[url(/assets/oq4niUpnwL.png)] bg-cover bg-no-repeat relative z-[448]" />
                </div>
                <div className="flex gap-[16px] justify-end items-start self-stretch shrink-0 flex-nowrap relative z-[449]">
                  <div className="flex pt-0 pr-0 pb-[24px] pl-0 flex-col gap-[4px] items-end grow shrink-0 basis-0 flex-nowrap relative z-[450]">
                    <span className="flex w-[28px] h-[22px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-bold leading-[21.875px] text-[#17324d] relative text-right whitespace-nowrap z-[451]">
                      ۱۴۰۴
                    </span>
                    <span className="flex w-[362px] h-[20px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[13px] font-normal leading-[20px] text-[#60758a] relative text-right whitespace-nowrap z-[452]">
                      عبور از سقف ۲٬۰۰۰ فرد بهره‌مند مستقیم در سطح دو استان شمال
                      کشور
                    </span>
                  </div>
                  <div className="flex w-[16px] h-[68px] flex-col items-center shrink-0 flex-nowrap bg-[url(/assets/iGR43j6Fv7.png)] bg-cover bg-no-repeat relative z-[453]" />
                </div>
                <div className="flex gap-[16px] justify-end items-start self-stretch shrink-0 flex-nowrap relative z-[454]">
                  <div className="flex pt-0 pr-0 pb-[24px] pl-0 flex-col gap-[4px] items-end grow shrink-0 basis-0 flex-nowrap relative z-[455]">
                    <span className="flex w-[28px] h-[22px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-bold leading-[21.875px] text-[#17324d] relative text-right whitespace-nowrap z-[456]">
                      ۱۴۰۵
                    </span>
                    <span className="flex w-[335px] h-[20px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[13px] font-normal leading-[20px] text-[#60758a] relative text-right whitespace-nowrap z-[457]">
                      آغاز بهره‌برداری از دو پروژه جدید فعال و خروجی‌محور
                      (KPI-based)
                    </span>
                  </div>
                  <div className="flex w-[16px] flex-col items-center shrink-0 flex-nowrap relative z-[458]">
                    <div className="w-[12px] h-[12px] shrink-0 bg-[url(/assets/mLQWJYbFPw.png)] bg-cover bg-no-repeat rounded-[50%] relative z-[459]" />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-[16px] items-end self-stretch shrink-0 flex-nowrap relative z-[460]">
              <div className="flex flex-col gap-[8px] items-end self-stretch shrink-0 flex-nowrap relative z-[461]">
                <span className="flex w-[175px] h-[38px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[24px] font-bold leading-[37.5px] text-[#17324d] relative text-right whitespace-nowrap z-[462]">
                  گزارش‌های عمومی
                </span>
                <div className="w-[48px] h-[4px] shrink-0 bg-[#2094e3] rounded-[2px] relative z-[463]" />
              </div>
              <div className="flex flex-col gap-[8px] items-end self-stretch shrink-0 flex-nowrap relative z-[464]">
                <div className="flex pt-[16px] pr-[16px] pb-[16px] pl-[16px] justify-between items-center self-stretch shrink-0 flex-nowrap bg-[#fff] rounded-[12px] border-solid border border-[#e4ebf1] relative z-[465]">
                  <div className="flex w-[175px] gap-[16px] items-center shrink-0 flex-nowrap relative z-[466]">
                    <span className="flex w-[63px] h-[20px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[13px] font-normal leading-[20px] text-[#2094e3] relative text-right whitespace-nowrap z-[467]">
                      دریافت فایل
                    </span>
                    <span className="h-[20px] shrink-0 basis-auto font-['Vazirmatn'] text-[13px] font-normal leading-[20px] text-[#60758a] relative text-left whitespace-nowrap z-[468]">
                      |
                    </span>
                    <span className="flex w-[76px] h-[20px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[13px] font-normal leading-[20px] text-[#2094e3] relative text-right whitespace-nowrap z-[469]">
                      مشاهده آنلاین
                    </span>
                  </div>
                  <div className="flex w-[420px] gap-[16px] items-center shrink-0 flex-nowrap relative z-[470]">
                    <span className="flex w-[58px] h-[19px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[12px] font-normal leading-[18.75px] text-[#60758a] relative text-right whitespace-nowrap z-[471]">
                      ۳.۲ مگابایت
                    </span>
                    <span className="flex w-[55px] h-[19px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[12px] font-normal leading-[18.75px] text-[#60758a] relative text-right whitespace-nowrap z-[472]">
                      اسفند ۱۴۰۴
                    </span>
                    <span className="flex w-[239px] h-[22px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-medium leading-[21.875px] text-[#17324d] relative text-right whitespace-nowrap z-[473]">
                      گزارش جامع سنجش اثر اجتماعی سال ۱۴۰۴
                    </span>
                    <div className="flex w-[20px] h-[20px] flex-col justify-center items-center shrink-0 flex-nowrap relative overflow-hidden z-[474]">
                      <div className="w-[20px] h-[20px] shrink-0 bg-[url(/assets/FQZht9oD9P.png)] bg-cover bg-no-repeat relative overflow-hidden z-[475]" />
                    </div>
                  </div>
                </div>
                <div className="flex pt-[16px] pr-[16px] pb-[16px] pl-[16px] justify-between items-center self-stretch shrink-0 flex-nowrap bg-[#fff] rounded-[12px] border-solid border border-[#e4ebf1] relative z-[476]">
                  <div className="flex w-[175px] gap-[16px] items-center shrink-0 flex-nowrap relative z-[477]">
                    <span className="flex w-[63px] h-[20px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[13px] font-normal leading-[20px] text-[#2094e3] relative text-right whitespace-nowrap z-[478]">
                      دریافت فایل
                    </span>
                    <span className="h-[20px] shrink-0 basis-auto font-['Vazirmatn'] text-[13px] font-normal leading-[20px] text-[#60758a] relative text-left whitespace-nowrap z-[479]">
                      |
                    </span>
                    <span className="flex w-[76px] h-[20px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[13px] font-normal leading-[20px] text-[#2094e3] relative text-right whitespace-nowrap z-[480]">
                      مشاهده آنلاین
                    </span>
                  </div>
                  <div className="flex w-[420px] gap-[16px] items-center shrink-0 flex-nowrap relative z-[481]">
                    <span className="flex w-[55px] h-[19px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[12px] font-normal leading-[18.75px] text-[#60758a] relative text-right whitespace-nowrap z-[482]">
                      ۱.۸ مگابایت
                    </span>
                    <span className="flex w-[44px] h-[19px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[12px] font-normal leading-[18.75px] text-[#60758a] relative text-right whitespace-nowrap z-[483]">
                      آبان ۱۴۰۴
                    </span>
                    <span className="flex w-[253px] h-[22px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-medium leading-[21.875px] text-[#17324d] relative text-right whitespace-nowrap z-[484]">
                      گزارش نهایی عملکرد پروژه توسعه صنایع‌دستی
                    </span>
                    <div className="flex w-[20px] h-[20px] flex-col justify-center items-center shrink-0 flex-nowrap relative overflow-hidden z-[485]">
                      <div className="w-[20px] h-[20px] shrink-0 bg-[url(/assets/8utKsxpgBn.png)] bg-cover bg-no-repeat relative overflow-hidden z-[486]" />
                    </div>
                  </div>
                </div>
                <div className="flex pt-[16px] pr-[16px] pb-[16px] pl-[16px] justify-between items-center self-stretch shrink-0 flex-nowrap bg-[#fff] rounded-[12px] border-solid border border-[#e4ebf1] relative z-[487]">
                  <div className="flex w-[175px] gap-[16px] items-center shrink-0 flex-nowrap relative z-[488]">
                    <span className="flex w-[63px] h-[20px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[13px] font-normal leading-[20px] text-[#2094e3] relative text-right whitespace-nowrap z-[489]">
                      دریافت فایل
                    </span>
                    <span className="h-[20px] shrink-0 basis-auto font-['Vazirmatn'] text-[13px] font-normal leading-[20px] text-[#60758a] relative text-left whitespace-nowrap z-[490]">
                      |
                    </span>
                    <span className="flex w-[76px] h-[20px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[13px] font-normal leading-[20px] text-[#2094e3] relative text-right whitespace-nowrap z-[491]">
                      مشاهده آنلاین
                    </span>
                  </div>
                  <div className="flex w-[408px] gap-[16px] items-center shrink-0 flex-nowrap relative z-[492]">
                    <span className="flex w-[62px] h-[19px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[12px] font-normal leading-[18.75px] text-[#60758a] relative text-right whitespace-nowrap z-[493]">
                      ۹۵۰ کیلوبایت
                    </span>
                    <span className="flex w-[60px] h-[19px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[12px] font-normal leading-[18.75px] text-[#60758a] relative text-right whitespace-nowrap z-[494]">
                      شهریور ۱۴۰۴
                    </span>
                    <span className="flex w-[218px] h-[22px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-medium leading-[21.875px] text-[#17324d] relative text-right whitespace-nowrap z-[495]">
                      خلاصه مدیریتی عملکرد سالانه استارتاپ
                    </span>
                    <div className="flex w-[20px] h-[20px] flex-col justify-center items-center shrink-0 flex-nowrap relative overflow-hidden z-[496]">
                      <div className="w-[20px] h-[20px] shrink-0 bg-[url(/assets/epQWEC8wBm.png)] bg-cover bg-no-repeat relative overflow-hidden z-[497]" />
                    </div>
                  </div>
                </div>
                <div className="flex pt-[16px] pr-[16px] pb-[16px] pl-[16px] justify-between items-center self-stretch shrink-0 flex-nowrap bg-[#fff] rounded-[12px] border-solid border border-[#e4ebf1] relative z-[498]">
                  <div className="flex w-[175px] gap-[16px] items-center shrink-0 flex-nowrap relative z-[499]">
                    <span className="flex w-[63px] h-[20px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[13px] font-normal leading-[20px] text-[#2094e3] relative text-right whitespace-nowrap z-[500]">
                      دریافت فایل
                    </span>
                    <span className="h-[20px] shrink-0 basis-auto font-['Vazirmatn'] text-[13px] font-normal leading-[20px] text-[#60758a] relative text-left whitespace-nowrap z-[501]">
                      |
                    </span>
                    <span className="flex w-[76px] h-[20px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[13px] font-normal leading-[20px] text-[#2094e3] relative text-right whitespace-nowrap z-[502]">
                      مشاهده آنلاین
                    </span>
                  </div>
                  <div className="flex w-[444px] gap-[16px] items-center shrink-0 flex-nowrap relative z-[503]">
                    <span className="flex w-[54px] h-[19px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[12px] font-normal leading-[18.75px] text-[#60758a] relative text-right whitespace-nowrap z-[504]">
                      ۲.۱ مگابایت
                    </span>
                    <span className="flex w-[73px] h-[19px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[12px] font-normal leading-[18.75px] text-[#60758a] relative text-right whitespace-nowrap z-[505]">
                      اردیبهشت ۱۴۰۴
                    </span>
                    <span className="flex w-[249px] h-[22px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-medium leading-[21.875px] text-[#17324d] relative text-right whitespace-nowrap z-[506]">
                      گزارش پایش و سنجش رضایت بهره‌مندان خرد
                    </span>
                    <div className="flex w-[20px] h-[20px] flex-col justify-center items-center shrink-0 flex-nowrap relative overflow-hidden z-[507]">
                      <div className="w-[20px] h-[20px] shrink-0 bg-[url(/assets/x0AGkpeChB.png)] bg-cover bg-no-repeat relative overflow-hidden z-[508]" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-[16px] items-end self-stretch shrink-0 flex-nowrap relative z-[509]">
              <div className="flex flex-col gap-[8px] items-end self-stretch shrink-0 flex-nowrap relative z-[510]">
                <span className="flex w-[192px] h-[38px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[24px] font-bold leading-[37.5px] text-[#17324d] relative text-right whitespace-nowrap z-[511]">
                  آخرین به‌روزرسانی‌ها
                </span>
                <div className="w-[48px] h-[4px] shrink-0 bg-[#2094e3] rounded-[2px] relative z-[512]" />
              </div>
              <div className="flex flex-col gap-[12px] items-end self-stretch shrink-0 flex-nowrap relative z-[513]">
                <div className="flex pt-[20px] pr-[20px] pb-[20px] pl-[20px] flex-col gap-[8px] items-end self-stretch shrink-0 flex-nowrap bg-[#fff] rounded-[12px] border-solid border border-[#e4ebf1] relative z-[514]">
                  <div className="flex justify-between items-center self-stretch shrink-0 flex-nowrap relative z-[515]">
                    <span className="flex w-[82px] h-[17px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[11px] font-normal leading-[17px] text-[#60758a] relative text-right whitespace-nowrap z-[516]">
                      ۲۴ اردیبهشت ۱۴۰۵
                    </span>
                    <span className="flex w-[328px] h-[23px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[15px] font-bold leading-[23px] text-[#17324d] relative text-right whitespace-nowrap z-[517]">
                      تکمیل موفقیت‌آمیز فاز اول زنجیره آموزش کارآفرینی زنان
                    </span>
                  </div>
                  <span className="h-[22px] self-stretch shrink-0 basis-auto font-['Vazirmatn'] text-[13px] font-normal leading-[22px] text-[#60758a] relative text-right whitespace-nowrap z-[518]">
                    دوره جامع بازاریابی محلی و استانداردهای تولید با مشارکت کامل
                    کارآموزان روستای حاجی‌آباد پایان یافت.
                  </span>
                  <span className="flex w-[103px] h-[19px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[12px] font-bold leading-[18.75px] text-[#2094e3] relative text-right whitespace-nowrap z-[519]">
                    مشاهده کامل خبر ←
                  </span>
                </div>
                <div className="flex pt-[20px] pr-[20px] pb-[20px] pl-[20px] flex-col gap-[8px] items-end self-stretch shrink-0 flex-nowrap bg-[#fff] rounded-[12px] border-solid border border-[#e4ebf1] relative z-[520]">
                  <div className="flex justify-between items-center self-stretch shrink-0 flex-nowrap relative z-[521]">
                    <span className="flex w-[69px] h-[17px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[11px] font-normal leading-[17px] text-[#60758a] relative text-right whitespace-nowrap z-[522]">
                      ۱۰ فروردین ۱۴۰۵
                    </span>
                    <span className="flex w-[338px] h-[23px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[15px] font-bold leading-[23px] text-[#17324d] relative text-right whitespace-nowrap z-[523]">
                      تجهیز کارگاه تولیدی صنایع‌دستی با مشارکت حامیان مادی
                    </span>
                  </div>
                  <span className="h-[22px] self-stretch shrink-0 basis-auto font-['Vazirmatn'] text-[13px] font-normal leading-[22px] text-[#60758a] relative text-right whitespace-nowrap z-[524]">
                    ابزارآلات کارگاهی تخصصی خریداری و در سه مرکز تجمیعی توسعه
                    محلی مستقر و بهره‌برداری شد.
                  </span>
                  <span className="flex w-[103px] h-[19px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[12px] font-bold leading-[18.75px] text-[#2094e3] relative text-right whitespace-nowrap z-[525]">
                    مشاهده کامل خبر ←
                  </span>
                </div>
                <div className="flex pt-[20px] pr-[20px] pb-[20px] pl-[20px] flex-col gap-[8px] items-end self-stretch shrink-0 flex-nowrap bg-[#fff] rounded-[12px] border-solid border border-[#e4ebf1] relative z-[526]">
                  <div className="flex justify-between items-center self-stretch shrink-0 flex-nowrap relative z-[527]">
                    <span className="flex w-[63px] h-[17px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[11px] font-normal leading-[17px] text-[#60758a] relative text-right whitespace-nowrap z-[528]">
                      ۱۵ اسفند ۱۴۰۴
                    </span>
                    <span className="flex w-[346px] h-[23px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[15px] font-bold leading-[23px] text-[#17324d] relative text-right whitespace-nowrap z-[529]">
                      انتشار ارزیابی اثرگذاری ملموس سالانه توسط ناظران خارجی
                    </span>
                  </div>
                  <span className="h-[22px] self-stretch shrink-0 basis-auto font-['Vazirmatn'] text-[13px] font-normal leading-[22px] text-[#60758a] relative text-right whitespace-nowrap z-[530]">
                    گزارش ارزیابی شاخص‌های پایداری اقتصادی در سطح معیشت خانوارها
                    با تأیید نهایی منتشر گردید.
                  </span>
                  <span className="flex w-[103px] h-[19px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[12px] font-bold leading-[18.75px] text-[#2094e3] relative text-right whitespace-nowrap z-[531]">
                    مشاهده کامل خبر ←
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex w-[1200px] pt-[48px] pr-[48px] pb-[48px] pl-[48px] flex-col gap-[24px] items-center shrink-0 flex-nowrap bg-[#1e2a38] rounded-[24px] relative z-[532]">
          <div className="flex w-[531px] flex-col gap-[8px] items-center shrink-0 flex-nowrap relative z-[533]">
            <span className="flex w-[355px] h-[38px] justify-center items-start shrink-0 basis-auto font-['Vazirmatn'] text-[24px] font-bold leading-[37.5px] text-[#fff] relative text-center whitespace-nowrap z-[534]">
              در پروژه‌های راهکار سبز مشارکت کنید
            </span>
            <span className="flex w-[531px] h-[22px] justify-center items-start shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-normal leading-[21.875px] text-[#aebccb] relative text-center whitespace-nowrap z-[535]">
              مشارکت فقط از طریق پروژه‌های تأییدشده و با واریز مستقیم به حساب
              کمیته امداد انجام می‌شود.
            </span>
          </div>
          <div className="flex w-[366px] gap-[16px] items-start shrink-0 flex-nowrap relative z-[536]">
            <div className="flex w-[169px] pt-[12px] pr-[24px] pb-[12px] pl-[24px] items-start shrink-0 flex-nowrap rounded-[12px] border-solid border border-[#aebccb] relative z-[537]">
              <span className="flex w-[121px] h-[22px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-medium leading-[21.875px] text-[#fff] relative text-right whitespace-nowrap z-[538]">
                مشاهده همه پروژه‌ها
              </span>
            </div>
            <div className="flex w-[181px] pt-[12px] pr-[24px] pb-[12px] pl-[24px] items-start shrink-0 flex-nowrap bg-[#2094e3] rounded-[12px] relative z-[539]">
              <span className="flex w-[133px] h-[22px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-medium leading-[21.875px] text-[#fff] relative text-right whitespace-nowrap z-[540]">
                مشاهده پروژه‌های فعال
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="flex pt-[80px] pr-[120px] pb-[40px] pl-[120px] flex-col gap-[32px] items-end self-stretch shrink-0 flex-nowrap bg-[#111e30] relative z-[541]">
        <div className="flex gap-[48px] items-start self-stretch shrink-0 flex-nowrap relative z-[542]">
          <div className="flex w-[220px] h-[182px] flex-col gap-[12px] items-end shrink-0 flex-nowrap relative z-[543]">
            <span className="flex w-[59px] h-[22px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-bold leading-[21.875px] text-[#fff] relative text-right whitespace-nowrap z-[544]">
              ارتباط با ما
            </span>
            <span className="flex w-[115px] h-[20px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[13px] font-normal leading-[20px] text-[#e4ebf1] relative text-right whitespace-nowrap z-[545]">
              تلفن: ۰۲۱-۸۸۸۸۸۸۸۸
            </span>
            <span className="flex w-[156px] h-[20px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[13px] font-normal leading-[20px] text-[#e4ebf1] relative text-right whitespace-nowrap z-[546]">
              ایمیل: info@mahplatform.ir
            </span>
            <div className="flex w-[48px] pt-[8px] pr-0 pb-0 pl-0 gap-[12px] items-center shrink-0 flex-nowrap relative z-[547]">
              <div className="flex w-[18px] h-[18px] flex-col justify-center items-center shrink-0 flex-nowrap relative overflow-hidden z-[548]">
                <div className="w-[18px] h-[18px] shrink-0 bg-[url(/assets/x4gHLWY9Dg.png)] bg-cover bg-no-repeat relative overflow-hidden z-[549]" />
              </div>
              <div className="flex w-[18px] h-[18px] flex-col justify-center items-center shrink-0 flex-nowrap relative overflow-hidden z-[550]">
                <div className="w-[18px] h-[18px] shrink-0 bg-[url(/assets/9CqGk4qAqO.png)] bg-cover bg-no-repeat relative overflow-hidden z-[551]" />
              </div>
            </div>
          </div>
          <div className="flex w-[150px] h-[182px] flex-col gap-[12px] items-end shrink-0 flex-nowrap relative z-[552]">
            <span className="flex w-[39px] h-[22px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-bold leading-[21.875px] text-[#fff] relative text-right whitespace-nowrap z-[553]">
              حقوقی
            </span>
            <span className="flex w-[82px] h-[20px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[13px] font-normal leading-[20px] text-[#e4ebf1] relative text-right whitespace-nowrap z-[554]">
              قوانین و مقررات
            </span>
            <span className="flex w-[75px] h-[20px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[13px] font-normal leading-[20px] text-[#e4ebf1] relative text-right whitespace-nowrap z-[555]">
              حریم خصوصی
            </span>
          </div>
          <div className="flex w-[160px] h-[182px] flex-col gap-[12px] items-end shrink-0 flex-nowrap relative z-[556]">
            <span className="flex w-[49px] h-[22px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-bold leading-[21.875px] text-[#fff] relative text-right whitespace-nowrap z-[557]">
              پشتیبانی
            </span>
            <span className="flex w-[55px] h-[20px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[13px] font-normal leading-[20px] text-[#e4ebf1] relative text-right whitespace-nowrap z-[558]">
              تماس با ما
            </span>
            <span className="flex w-[77px] h-[20px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[13px] font-normal leading-[20px] text-[#e4ebf1] relative text-right whitespace-nowrap z-[559]">
              سؤالات متداول
            </span>
            <span className="flex w-[82px] h-[20px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[13px] font-normal leading-[20px] text-[#e4ebf1] relative text-right whitespace-nowrap z-[560]">
              پیگیری مشارکت
            </span>
          </div>
          <div className="flex w-[180px] flex-col gap-[12px] items-end shrink-0 flex-nowrap relative z-[561]">
            <span className="flex w-[83px] h-[22px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-bold leading-[21.875px] text-[#fff] relative text-right whitespace-nowrap z-[562]">
              دسترسی سریع
            </span>
            <span className="flex w-[38px] h-[20px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[13px] font-normal leading-[20px] text-[#e4ebf1] relative text-right whitespace-nowrap z-[563]">
              پروژه‌ها
            </span>
            <span className="flex w-[69px] h-[20px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[13px] font-normal leading-[20px] text-[#e4ebf1] relative text-right whitespace-nowrap z-[564]">
              برای شرکت‌ها
            </span>
            <span className="flex w-[71px] h-[20px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[13px] font-normal leading-[20px] text-[#e4ebf1] relative text-right whitespace-nowrap z-[565]">
              نحوه مشارکت
            </span>
            <span className="flex w-[84px] h-[20px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[13px] font-normal leading-[20px] text-[#e4ebf1] relative text-right whitespace-nowrap z-[566]">
              ثبت‌نام استارتاپ
            </span>
            <span className="flex w-[80px] h-[20px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[13px] font-normal leading-[20px] text-[#e4ebf1] relative text-right whitespace-nowrap z-[567]">
              اخبار و رویدادها
            </span>
          </div>
          <div className="flex w-[298px] h-[182px] flex-col gap-[14px] items-end shrink-0 flex-nowrap relative z-[568]">
            <div className="w-[210px] h-[70px] shrink-0 bg-[url(/assets/gvfq1QJuD0.png)] bg-cover bg-no-repeat relative z-[569]" />
            <span className="flex w-[298px] h-[44px] justify-end items-start self-stretch shrink-0 font-['Vazirmatn'] text-[13px] font-normal leading-[22px] text-[#e4ebf1] relative text-right z-[570]">
              سامانه مشارکت در پروژه‌های اثر اجتماعی با مسیر مالی شفاف و اثر
              قابل‌اندازه‌گیری.
            </span>
          </div>
        </div>
        <div className="flex pt-[20px] pr-0 pb-0 pl-0 flex-col gap-[4px] items-center self-stretch shrink-0 flex-nowrap border-solid border-b border-b-[rgba(255,255,255,0.12)] relative z-[571]">
          <span className="flex w-[219px] h-[19px] justify-center items-start shrink-0 basis-auto font-['Vazirmatn'] text-[12px] font-normal leading-[18.75px] text-[#e4ebf1] relative text-center whitespace-nowrap z-[572]">
            طراحی و توسعه با هدف ارتقای عدالت اجتماعی
          </span>
          <span className="flex w-[203px] h-[19px] justify-center items-start shrink-0 basis-auto font-['Vazirmatn'] text-[12px] font-normal leading-[18.75px] text-[#e4ebf1] relative text-center whitespace-nowrap z-[573]">
            تمامی حقوق برای سامانه ماه محفوظ است.
          </span>
        </div>
      </div>
    </div>
  );
}
