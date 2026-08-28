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
          <img
            className="w-[137px] h-[46px] shrink-0 object-contain relative z-[16]"
            src="/assets/codia/GwpQccKzo5.png"
            alt="سامانه ماه"
          />
        </div>
      </div>
      <div className="flex pt-[32px] pr-[120px] pb-[96px] pl-[120px] flex-col gap-[32px] items-center self-stretch shrink-0 flex-nowrap relative z-[17]">
        <div className="flex w-[1200px] gap-[8px] justify-end items-start shrink-0 flex-nowrap relative z-[18]">
          <div className="flex w-[55px] gap-[8px] items-center shrink-0 flex-nowrap relative z-[19]">
            <span className="flex w-[55px] h-[20px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[13px] font-bold leading-[20px] text-[#2094e3] relative text-right whitespace-nowrap z-20">
              راهکار سبز
            </span>
          </div>
          <div className="flex w-[71px] gap-[8px] items-center shrink-0 flex-nowrap relative z-[21]">
            <span className="h-[20px] shrink-0 basis-auto font-['Vazirmatn'] text-[13px] font-normal leading-[20px] text-[#60758a] relative text-left whitespace-nowrap z-[22]">
              /
            </span>
            <span className="flex w-[57px] h-[20px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[13px] font-normal leading-[20px] text-[#60758a] relative text-right whitespace-nowrap z-[23]">
              استارتاپ‌ها
            </span>
          </div>
          <div className="flex w-[77px] gap-[8px] items-center shrink-0 flex-nowrap relative z-[24]">
            <span className="h-[20px] shrink-0 basis-auto font-['Vazirmatn'] text-[13px] font-normal leading-[20px] text-[#60758a] relative text-left whitespace-nowrap z-[25]">
              /
            </span>
            <span className="flex w-[63px] h-[20px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[13px] font-normal leading-[20px] text-[#60758a] relative text-right whitespace-nowrap z-[26]">
              صفحه اصلی
            </span>
          </div>
        </div>
        <div className="flex w-[1200px] pt-[32px] pr-[32px] pb-[32px] pl-[32px] justify-between items-center shrink-0 flex-nowrap bg-[#fff] rounded-[24px] border-solid border border-[#e4ebf1] relative shadow-[0_4px_16px_0_rgba(22,45,71,0.08)] z-[27]">
          <div className="flex w-[400px] flex-col gap-[16px] items-start shrink-0 flex-nowrap relative z-[28]">
            <div className="flex w-[391px] gap-[12px] items-center shrink-0 flex-nowrap relative z-[29]">
              <div className="flex w-[44px] pt-[12px] pr-[12px] pb-[12px] pl-[12px] items-start shrink-0 flex-nowrap bg-[#fff] rounded-[12px] border-solid border border-[#e4ebf1] relative z-30">
                <div className="w-[20px] h-[20px] shrink-0 bg-[url(/assets/codia/pMeWuWG0tD.svg)] bg-cover bg-no-repeat relative overflow-hidden z-[31]" />
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
            <span className="h-[20px] self-stretch shrink-0 basis-auto font-['Vazirmatn'] text-[13px] font-normal leading-[20px] text-[#60758a] relative text-right whitespace-nowrap z-[36]">
              مشارکت مالی فقط از طریق پروژه‌های تأییدشده انجام می‌شود.
            </span>
          </div>
          <div className="flex w-[683px] gap-[24px] justify-end items-center shrink-0 flex-nowrap relative z-[37]">
            <div className="flex w-[563px] flex-col gap-[8px] items-end shrink-0 flex-nowrap relative z-[38]">
              <div className="flex w-[277px] gap-[12px] items-center shrink-0 flex-nowrap relative z-[39]">
                <div className="flex w-[147px] pt-[4px] pr-[10px] pb-[4px] pl-[10px] items-start shrink-0 flex-nowrap bg-[#eaf8f0] rounded-[8px] relative z-40">
                  <span className="h-[19px] shrink-0 basis-auto font-['Vazirmatn'] text-[12px] font-medium leading-[18.75px] text-[#159455] relative text-left whitespace-nowrap z-[41]">
                    تأییدشده توسط خانه خلاق
                  </span>
                </div>
                <span className="h-[44px] shrink-0 basis-auto font-['Vazirmatn'] text-[28px] font-bold leading-[43.75px] text-[#17324d] relative text-left whitespace-nowrap z-[42]">
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
                  <div className="w-[16px] h-[16px] shrink-0 bg-[url(/assets/codia/rkpCYA2T9P.svg)] bg-cover bg-no-repeat relative overflow-hidden z-[48]" />
                </div>
                <div className="flex w-[69px] gap-[4px] items-center shrink-0 flex-nowrap relative z-[49]">
                  <span className="h-[20px] shrink-0 basis-auto font-['Vazirmatn'] text-[13px] font-normal leading-[20px] text-[#2094e3] relative text-left whitespace-nowrap z-50">
                    LinkedIn
                  </span>
                  <div className="w-[16px] h-[16px] shrink-0 bg-[url(/assets/codia/7Hi78wz11Z.svg)] bg-cover bg-no-repeat relative overflow-hidden z-[51]" />
                </div>
                <div className="flex w-[67px] gap-[4px] items-center shrink-0 flex-nowrap relative z-[52]">
                  <span className="flex w-[47px] h-[20px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[13px] font-normal leading-[20px] text-[#2094e3] relative text-right whitespace-nowrap z-[53]">
                    وب‌سایت
                  </span>
                  <div className="w-[16px] h-[16px] shrink-0 bg-[url(/assets/codia/tzxmxwQTUr.svg)] bg-cover bg-no-repeat relative overflow-hidden z-[54]" />
                </div>
              </div>
            </div>
            <div className="flex w-[96px] h-[96px] justify-center items-center shrink-0 flex-nowrap bg-[#e4ebf1] rounded-[20px] relative z-[55]">
              <div className="w-[48px] h-[48px] shrink-0 bg-[url(/assets/codia/gG80yOCmDV.svg)] bg-cover bg-no-repeat relative overflow-hidden z-[56]" />
            </div>
          </div>
        </div>
        <div className="flex w-[1200px] pt-[20px] pr-[32px] pb-[20px] pl-[32px] justify-between items-center shrink-0 flex-nowrap bg-[#fff] rounded-[16px] border-solid border border-[#e4ebf1] relative z-[57]">
          <div className="flex w-[180px] flex-col gap-[4px] items-center shrink-0 flex-nowrap relative z-[58]">
            <span className="flex w-[65px] h-[20px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[13px] font-normal leading-[20px] text-[#60758a] relative text-right whitespace-nowrap z-[59]">
              افراد بهره‌مند
            </span>
            <span className="flex w-[86px] h-[34px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[22px] font-bold leading-[34px] text-[#17324d] relative text-right whitespace-nowrap z-[60]">
              ۲٬۸۴۰ نفر
            </span>
          </div>
          <div className="w-px h-[40px] shrink-0 bg-[url(/assets/codia/x0TqZJ7O5n.svg)] bg-cover bg-no-repeat relative z-[61]" />
          <div className="flex w-[180px] flex-col gap-[4px] items-center shrink-0 flex-nowrap relative z-[62]">
            <span className="flex w-[96px] h-[20px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[13px] font-normal leading-[20px] text-[#60758a] relative text-right whitespace-nowrap z-[63]">
              میانگین تحقق KPI
            </span>
            <span className="flex w-[37px] h-[34px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[22px] font-bold leading-[34px] text-[#17324d] relative text-right whitespace-nowrap z-[64]">
              ۸۶٪
            </span>
          </div>
          <div className="w-px h-[40px] shrink-0 bg-[url(/assets/codia/V7JcASVvi5.svg)] bg-cover bg-no-repeat relative z-[65]" />
          <div className="flex w-[180px] flex-col gap-[4px] items-center shrink-0 flex-nowrap relative z-[66]">
            <span className="flex w-[75px] h-[20px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[13px] font-normal leading-[20px] text-[#60758a] relative text-right whitespace-nowrap z-[67]">
              پروژه‌های فعال
            </span>
            <span className="flex w-[59px] h-[34px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[22px] font-bold leading-[34px] text-[#17324d] relative text-right whitespace-nowrap z-[68]">
              ۰ پروژه
            </span>
          </div>
          <div className="w-px h-[40px] shrink-0 bg-[url(/assets/codia/eYcTZEVayS.svg)] bg-cover bg-no-repeat relative z-[69]" />
          <div className="flex w-[180px] flex-col gap-[4px] items-center shrink-0 flex-nowrap relative z-[70]">
            <span className="flex w-[106px] h-[20px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[13px] font-normal leading-[20px] text-[#60758a] relative text-right whitespace-nowrap z-[71]">
              پروژه‌های تکمیل‌شده
            </span>
            <span className="flex w-[64px] h-[34px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[22px] font-bold leading-[34px] text-[#17324d] relative text-right whitespace-nowrap z-[72]">
              ۳ پروژه
            </span>
          </div>
          <div className="w-px h-[40px] shrink-0 bg-[url(/assets/codia/Ow5Jq8L3r8.svg)] bg-cover bg-no-repeat relative z-[73]" />
          <div className="flex w-[180px] flex-col gap-[4px] items-center shrink-0 flex-nowrap relative z-[74]">
            <span className="flex w-[94px] h-[20px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[13px] font-normal leading-[20px] text-[#60758a] relative text-right whitespace-nowrap z-[75]">
              پروژه‌های ثبت‌شده
            </span>
            <span className="flex w-[64px] h-[34px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[22px] font-bold leading-[34px] text-[#17324d] relative text-right whitespace-nowrap z-[76]">
              ۳ پروژه
            </span>
          </div>
        </div>
        <div className="flex w-[1200px] pt-0 pr-[16px] pb-0 pl-[16px] gap-[32px] justify-end items-start shrink-0 flex-nowrap border-solid border-t border-t-[#e4ebf1] relative z-[77]">
          <div className="flex w-[52px] pt-[12px] pr-0 pb-[12px] pl-0 flex-col gap-[8px] items-center shrink-0 flex-nowrap relative z-[78]">
            <span className="h-[23px] shrink-0 basis-auto font-['Vazirmatn'] text-[15px] font-medium leading-[23px] text-[#60758a] relative text-left whitespace-nowrap z-[79]">
              گزارش‌ها
            </span>
          </div>
          <div className="flex w-[70px] pt-[12px] pr-0 pb-[12px] pl-0 flex-col gap-[8px] items-center shrink-0 flex-nowrap relative z-[80]">
            <span className="h-[23px] shrink-0 basis-auto font-['Vazirmatn'] text-[15px] font-medium leading-[23px] text-[#60758a] relative text-left whitespace-nowrap z-[81]">
              عملکرد و اثر
            </span>
          </div>
          <div className="flex w-[44px] pt-[12px] pr-0 pb-[12px] pl-0 flex-col gap-[8px] items-center shrink-0 flex-nowrap relative z-[82]">
            <span className="h-[23px] shrink-0 basis-auto font-['Vazirmatn'] text-[15px] font-medium leading-[23px] text-[#60758a] relative text-left whitespace-nowrap z-[83]">
              پروژه‌ها
            </span>
          </div>
          <div className="flex w-[20px] pt-[12px] pr-0 pb-[12px] pl-0 flex-col gap-[8px] items-center shrink-0 flex-nowrap relative z-[84]">
            <span className="h-[23px] shrink-0 basis-auto font-['Vazirmatn'] text-[15px] font-medium leading-[23px] text-[#60758a] relative text-left whitespace-nowrap z-[85]">
              تیم
            </span>
          </div>
          <div className="flex w-[98px] pt-[12px] pr-0 pb-[12px] pl-0 flex-col gap-[8px] items-center shrink-0 flex-nowrap relative z-[86]">
            <span className="h-[23px] shrink-0 basis-auto font-['Vazirmatn'] text-[15px] font-medium leading-[23px] text-[#60758a] relative text-left whitespace-nowrap z-[87]">
              محصول و راهکار
            </span>
          </div>
          <div className="flex w-[39px] pt-[12px] pr-0 pb-[12px] pl-0 flex-col gap-[8px] items-center shrink-0 flex-nowrap relative z-[88]">
            <span className="h-[23px] shrink-0 basis-auto font-['Vazirmatn'] text-[15px] font-bold leading-[23px] text-[#2094e3] relative text-left whitespace-nowrap z-[89]">
              معرفی
            </span>
            <div className="h-[3px] self-stretch shrink-0 bg-[#2094e3] rounded-[2px] relative z-[90]" />
          </div>
        </div>
        <div className="flex w-[1200px] gap-[24px] justify-end items-start shrink-0 flex-nowrap relative z-[91]">
          <div className="flex w-[360px] flex-col gap-[24px] items-start shrink-0 flex-nowrap relative z-[92]">
            <div className="flex pt-[24px] pr-[24px] pb-[24px] pl-[24px] flex-col gap-[20px] items-start self-stretch shrink-0 flex-nowrap bg-[#fff] rounded-[16px] border-solid border border-[#e4ebf1] relative shadow-[0_4px_16px_0_rgba(22,45,71,0.08)] z-[93]">
              <span className="h-[25px] self-stretch shrink-0 basis-auto font-['Vazirmatn'] text-[16px] font-bold leading-[25px] text-[#17324d] relative text-right whitespace-nowrap z-[94]">
                وضعیت تأیید در سامانه ماه
              </span>
              <div className="flex flex-col gap-[12px] items-start self-stretch shrink-0 flex-nowrap relative z-[95]">
                <div className="flex justify-between items-center self-stretch shrink-0 flex-nowrap relative z-[96]">
                  <div className="flex w-[71px] gap-[6px] items-center shrink-0 flex-nowrap relative z-[97]">
                    <span className="flex w-[49px] h-[20px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[13px] font-bold leading-[20px] text-[#159455] relative text-right whitespace-nowrap z-[98]">
                      تأییدشده
                    </span>
                    <div className="w-[16px] h-[16px] shrink-0 bg-[url(/assets/codia/0bBzxOOMEi.svg)] bg-cover bg-no-repeat relative overflow-hidden z-[99]" />
                  </div>
                  <span className="flex w-[106px] h-[20px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[13px] font-normal leading-[20px] text-[#60758a] relative text-right whitespace-nowrap z-[100]">
                    احراز هویت استارتاپ
                  </span>
                </div>
                <div className="flex justify-between items-center self-stretch shrink-0 flex-nowrap relative z-[101]">
                  <div className="flex w-[71px] gap-[6px] items-center shrink-0 flex-nowrap relative z-[102]">
                    <span className="flex w-[49px] h-[20px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[13px] font-bold leading-[20px] text-[#159455] relative text-right whitespace-nowrap z-[103]">
                      تأییدشده
                    </span>
                    <div className="w-[16px] h-[16px] shrink-0 bg-[url(/assets/codia/2z0zmvG9Tv.svg)] bg-cover bg-no-repeat relative overflow-hidden z-[104]" />
                  </div>
                  <span className="flex w-[80px] h-[20px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[13px] font-normal leading-[20px] text-[#60758a] relative text-right whitespace-nowrap z-[105]">
                    اطلاعات حقوقی
                  </span>
                </div>
                <div className="flex justify-between items-center self-stretch shrink-0 flex-nowrap relative z-[106]">
                  <div className="flex w-[71px] gap-[6px] items-center shrink-0 flex-nowrap relative z-[107]">
                    <span className="flex w-[49px] h-[20px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[13px] font-bold leading-[20px] text-[#159455] relative text-right whitespace-nowrap z-[108]">
                      تأییدشده
                    </span>
                    <div className="w-[16px] h-[16px] shrink-0 bg-[url(/assets/codia/F3idY84ccG.svg)] bg-cover bg-no-repeat relative overflow-hidden z-[109]" />
                  </div>
                  <span className="flex w-[47px] h-[20px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[13px] font-normal leading-[20px] text-[#60758a] relative text-right whitespace-nowrap z-[110]">
                    تیم اصلی
                  </span>
                </div>
                <div className="flex justify-between items-center self-stretch shrink-0 flex-nowrap relative z-[111]">
                  <div className="flex w-[48px] gap-[6px] items-center shrink-0 flex-nowrap relative z-[112]">
                    <span className="flex w-[26px] h-[20px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[13px] font-bold leading-[20px] text-[#159455] relative text-right whitespace-nowrap z-[113]">
                      فعال
                    </span>
                    <div className="w-[16px] h-[16px] shrink-0 bg-[url(/assets/codia/Mszh6wUZun.svg)] bg-cover bg-no-repeat relative overflow-hidden z-[114]" />
                  </div>
                  <span className="flex w-[82px] h-[20px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[13px] font-normal leading-[20px] text-[#60758a] relative text-right whitespace-nowrap z-[115]">
                    امکان ثبت پروژه
                  </span>
                </div>
                <div className="flex justify-between items-center self-stretch shrink-0 flex-nowrap relative z-[116]">
                  <div className="flex w-[79px] gap-[6px] items-center shrink-0 flex-nowrap relative z-[117]">
                    <span className="flex w-[57px] h-[20px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[13px] font-bold leading-[20px] text-[#159455] relative text-right whitespace-nowrap z-[118]">
                      مرداد ۱۴۰۵
                    </span>
                    <div className="w-[16px] h-[16px] shrink-0 bg-[url(/assets/codia/s3KSNhZ2LL.svg)] bg-cover bg-no-repeat relative overflow-hidden z-[119]" />
                  </div>
                  <span className="flex w-[67px] h-[20px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[13px] font-normal leading-[20px] text-[#60758a] relative text-right whitespace-nowrap z-[120]">
                    آخرین بازبینی
                  </span>
                </div>
              </div>
            </div>
            <div className="flex pt-[24px] pr-[24px] pb-[24px] pl-[24px] flex-col gap-[16px] items-start self-stretch shrink-0 flex-nowrap bg-[#fff] rounded-[16px] border-solid border border-[#e4ebf1] relative shadow-[0_4px_16px_0_rgba(22,45,71,0.08)] z-[121]">
              <span className="h-[25px] self-stretch shrink-0 basis-auto font-['Vazirmatn'] text-[16px] font-bold leading-[25px] text-[#17324d] relative text-right whitespace-nowrap z-[122]">
                سابقه عملکرد
              </span>
              <div className="flex flex-col gap-[16px] items-start self-stretch shrink-0 flex-nowrap relative z-[123]">
                <div className="flex flex-col gap-[6px] items-start self-stretch shrink-0 flex-nowrap relative z-[124]">
                  <div className="flex justify-between items-start self-stretch shrink-0 flex-nowrap relative z-[125]">
                    <span className="flex w-[20px] h-[19px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[12px] font-bold leading-[18.75px] text-[#17324d] relative text-right whitespace-nowrap z-[126]">
                      ۸۶٪
                    </span>
                    <span className="flex w-[96px] h-[20px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[13px] font-normal leading-[20px] text-[#60758a] relative text-right whitespace-nowrap z-[127]">
                      میانگین تحقق KPI
                    </span>
                  </div>
                  <div className="flex h-[6px] justify-end items-start self-stretch shrink-0 flex-nowrap bg-[#e4ebf1] rounded-[3px] relative overflow-hidden z-[128]">
                    <div className="w-[241px] self-stretch shrink-0 bg-[#2094e3] rounded-[3px] relative z-[129]" />
                  </div>
                </div>
                <div className="flex flex-col gap-[6px] items-start self-stretch shrink-0 flex-nowrap relative z-[130]">
                  <div className="flex justify-between items-start self-stretch shrink-0 flex-nowrap relative z-[131]">
                    <span className="flex w-[22px] h-[19px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[12px] font-bold leading-[18.75px] text-[#17324d] relative text-right whitespace-nowrap z-[132]">
                      ۸۳٪
                    </span>
                    <span className="flex w-[149px] h-[20px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[13px] font-normal leading-[20px] text-[#60758a] relative text-right whitespace-nowrap z-[133]">
                      پروژه‌های تکمیل در زمان مقرر
                    </span>
                  </div>
                  <div className="flex h-[6px] justify-end items-start self-stretch shrink-0 flex-nowrap bg-[#e4ebf1] rounded-[3px] relative overflow-hidden z-[134]">
                    <div className="w-[232px] self-stretch shrink-0 bg-[#2094e3] rounded-[3px] relative z-[135]" />
                  </div>
                </div>
                <div className="flex flex-col gap-[6px] items-start self-stretch shrink-0 flex-nowrap relative z-[136]">
                  <div className="flex justify-between items-start self-stretch shrink-0 flex-nowrap relative z-[137]">
                    <span className="flex w-[16px] h-[19px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[12px] font-bold leading-[18.75px] text-[#17324d] relative text-right whitespace-nowrap z-[138]">
                      ۹۱٪
                    </span>
                    <span className="flex w-[104px] h-[20px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[13px] font-normal leading-[20px] text-[#60758a] relative text-right whitespace-nowrap z-[139]">
                      گزارش‌های تأییدشده
                    </span>
                  </div>
                  <div className="flex h-[6px] justify-end items-start self-stretch shrink-0 flex-nowrap bg-[#e4ebf1] rounded-[3px] relative overflow-hidden z-[140]">
                    <div className="w-[255px] self-stretch shrink-0 bg-[#2094e3] rounded-[3px] relative z-[141]" />
                  </div>
                </div>
                <div className="flex flex-col gap-[6px] items-start self-stretch shrink-0 flex-nowrap relative z-[142]">
                  <div className="flex justify-between items-start self-stretch shrink-0 flex-nowrap relative z-[143]">
                    <span className="flex w-[21px] h-[19px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[12px] font-bold leading-[18.75px] text-[#17324d] relative text-right whitespace-nowrap z-[144]">
                      ۸۷٪
                    </span>
                    <span className="flex w-[83px] h-[20px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[13px] font-normal leading-[20px] text-[#60758a] relative text-right whitespace-nowrap z-[145]">
                      رضایت ذی‌نفعان
                    </span>
                  </div>
                  <div className="flex h-[6px] justify-end items-start self-stretch shrink-0 flex-nowrap bg-[#e4ebf1] rounded-[3px] relative overflow-hidden z-[146]">
                    <div className="w-[244px] self-stretch shrink-0 bg-[#2094e3] rounded-[3px] relative z-[147]" />
                  </div>
                </div>
              </div>
              <span className="flex w-[312px] h-[34px] justify-end items-start self-stretch shrink-0 font-['Vazirmatn'] text-[11px] font-normal leading-[17.188px] text-[#60758a] relative text-right z-[148]">
                شاخص‌ها براساس پروژه‌های تأییدشده و گزارش‌های عمومی سامانه ماه
                محاسبه شده‌اند.
              </span>
            </div>
            <div className="flex pt-[24px] pr-[24px] pb-[24px] pl-[24px] flex-col gap-[16px] items-start self-stretch shrink-0 flex-nowrap bg-[#fff] rounded-[16px] border-solid border border-[#e4ebf1] relative shadow-[0_4px_16px_0_rgba(22,45,71,0.08)] z-[149]">
              <span className="h-[25px] self-stretch shrink-0 basis-auto font-['Vazirmatn'] text-[16px] font-bold leading-[25px] text-[#17324d] relative text-right whitespace-nowrap z-[150]">
                اطلاعات ثبتی
              </span>
              <div className="flex flex-col gap-[12px] items-start self-stretch shrink-0 flex-nowrap relative z-[151]">
                <div className="flex flex-col gap-[4px] items-end self-stretch shrink-0 flex-nowrap relative z-[152]">
                  <span className="flex w-[46px] h-[17px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[11px] font-normal leading-[17px] text-[#60758a] relative text-right whitespace-nowrap z-[153]">
                    نام حقوقی
                  </span>
                  <span className="flex w-[120px] h-[20px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[13px] font-medium leading-[20px] text-[#17324d] relative text-right whitespace-nowrap z-[154]">
                    شرکت راهکار سبز پایدار
                  </span>
                </div>
                <div className="flex flex-col gap-[4px] items-end self-stretch shrink-0 flex-nowrap relative z-[155]">
                  <span className="flex w-[68px] h-[17px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[11px] font-normal leading-[17px] text-[#60758a] relative text-right whitespace-nowrap z-[156]">
                    وضعیت حقوقی
                  </span>
                  <span className="flex w-[45px] h-[20px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[13px] font-medium leading-[20px] text-[#17324d] relative text-right whitespace-nowrap z-[157]">
                    ثبت‌شده
                  </span>
                </div>
                <div className="flex flex-col gap-[4px] items-end self-stretch shrink-0 flex-nowrap relative z-[158]">
                  <span className="flex w-[55px] h-[17px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[11px] font-normal leading-[17px] text-[#60758a] relative text-right whitespace-nowrap z-[159]">
                    سال تأسیس
                  </span>
                  <span className="flex w-[21px] h-[20px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[13px] font-medium leading-[20px] text-[#17324d] relative text-right whitespace-nowrap z-[160]">
                    ۱۴۰۱
                  </span>
                </div>
                <div className="flex flex-col gap-[4px] items-end self-stretch shrink-0 flex-nowrap relative z-[161]">
                  <span className="flex w-[40px] h-[17px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[11px] font-normal leading-[17px] text-[#60758a] relative text-right whitespace-nowrap z-[162]">
                    شهر ثبتی
                  </span>
                  <span className="flex w-[29px] h-[20px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[13px] font-medium leading-[20px] text-[#17324d] relative text-right whitespace-nowrap z-[163]">
                    گرگان
                  </span>
                </div>
                <div className="flex flex-col gap-[4px] items-end self-stretch shrink-0 flex-nowrap relative z-[164]">
                  <span className="flex w-[41px] h-[17px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[11px] font-normal leading-[17px] text-[#60758a] relative text-right whitespace-nowrap z-[165]">
                    تعداد تیم
                  </span>
                  <span className="flex w-[27px] h-[20px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[13px] font-medium leading-[20px] text-[#17324d] relative text-right whitespace-nowrap z-[166]">
                    ۸ نفر
                  </span>
                </div>
                <div className="flex flex-col gap-[4px] items-end self-stretch shrink-0 flex-nowrap relative z-[167]">
                  <span className="flex w-[46px] h-[17px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[11px] font-normal leading-[17px] text-[#60758a] relative text-right whitespace-nowrap z-[168]">
                    حوزه اصلی
                  </span>
                  <span className="flex w-[68px] h-[20px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[13px] font-medium leading-[20px] text-[#17324d] relative text-right whitespace-nowrap z-[169]">
                    اشتغال پایدار
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="flex w-[816px] flex-col gap-[32px] items-start shrink-0 flex-nowrap relative z-[170]">
            <div className="flex pt-[32px] pr-[32px] pb-[32px] pl-[32px] flex-col gap-[16px] items-start self-stretch shrink-0 flex-nowrap bg-[#fff] rounded-[20px] border-solid border border-[#e4ebf1] relative z-[171]">
              <div className="flex flex-col gap-[8px] items-end self-stretch shrink-0 flex-nowrap relative z-[172]">
                <span className="flex w-[160px] h-[38px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[24px] font-bold leading-[37.5px] text-[#17324d] relative text-right whitespace-nowrap z-[173]">
                  درباره راهکار سبز
                </span>
                <div className="w-[48px] h-[4px] shrink-0 bg-[#2094e3] rounded-[2px] relative z-[174]" />
              </div>
              <span className="flex w-[752px] h-[78px] justify-end items-start self-stretch shrink-0 font-['Vazirmatn'] text-[15px] font-normal leading-[26px] text-[#17324d] relative text-right z-[175]">
                راهکار سبز یک استارتاپ حوزه توسعه روستایی است که با استفاده از
                فناوری، آموزش و شبکه‌سازی بازار، تولیدکنندگان محلی و کسب‌وکارهای
                کوچک را به بازارهای فروش متصل می‌کند. ما معتقدیم توسعه پایدار
                زمانی محقق می‌شود که جوامع محلی ابزار و مهارت کافی برای
                نقش‌آفرینی مستقل را داشته باشند.
              </span>
            </div>
            <div className="flex gap-[20px] items-start self-stretch shrink-0 flex-nowrap relative z-[176]">
              <div className="flex pt-[24px] pr-[24px] pb-[24px] pl-[24px] flex-col gap-[12px] items-end self-stretch grow shrink-0 basis-0 flex-nowrap bg-[#f4faf7] rounded-[16px] border-solid border border-[#d1ece3] relative z-[177]">
                <div className="flex w-[84px] gap-[8px] items-center shrink-0 flex-nowrap relative z-[178]">
                  <span className="flex w-[56px] h-[25px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[16px] font-bold leading-[25px] text-[#159455] relative text-right whitespace-nowrap z-[179]">
                    راهکار ما
                  </span>
                  <div className="w-[20px] h-[20px] shrink-0 bg-[url(/assets/codia/sY9t4Az2wo.svg)] bg-cover bg-no-repeat relative overflow-hidden z-[180]" />
                </div>
                <div className="flex flex-col gap-[8px] items-end self-stretch shrink-0 flex-nowrap relative z-[181]">
                  <div className="flex w-[151px] gap-[8px] items-center shrink-0 flex-nowrap relative z-[182]">
                    <span className="flex w-[139px] h-[20px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[13px] font-normal leading-[20px] text-[#17324d] relative text-right whitespace-nowrap z-[183]">
                      شناسایی ظرفیت‌های محلی
                    </span>
                    <div className="w-[4px] h-[4px] shrink-0 bg-[#159455] rounded-[2px] relative z-[184]" />
                  </div>
                  <div className="flex w-[143px] gap-[8px] items-center shrink-0 flex-nowrap relative z-[185]">
                    <span className="flex w-[131px] h-[20px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[13px] font-normal leading-[20px] text-[#17324d] relative text-right whitespace-nowrap z-[186]">
                      آموزش مهارت و کسب‌وکار
                    </span>
                    <div className="w-[4px] h-[4px] shrink-0 bg-[#159455] rounded-[2px] relative z-[187]" />
                  </div>
                  <div className="flex w-[110px] gap-[8px] items-center shrink-0 flex-nowrap relative z-[188]">
                    <span className="flex w-[98px] h-[20px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[13px] font-normal leading-[20px] text-[#17324d] relative text-right whitespace-nowrap z-[189]">
                      تجهیز تولیدکنندگان
                    </span>
                    <div className="w-[4px] h-[4px] shrink-0 bg-[#159455] rounded-[2px] relative z-[190]" />
                  </div>
                  <div className="flex w-[134px] gap-[8px] items-center shrink-0 flex-nowrap relative z-[191]">
                    <span className="flex w-[122px] h-[20px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[13px] font-normal leading-[20px] text-[#17324d] relative text-right whitespace-nowrap z-[192]">
                      ایجاد شبکه فروش پایدار
                    </span>
                    <div className="w-[4px] h-[4px] shrink-0 bg-[#159455] rounded-[2px] relative z-[193]" />
                  </div>
                  <div className="flex w-[132px] gap-[8px] items-center shrink-0 flex-nowrap relative z-[194]">
                    <span className="flex w-[120px] h-[20px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[13px] font-normal leading-[20px] text-[#17324d] relative text-right whitespace-nowrap z-[195]">
                      سنجش درآمد و اشتغال
                    </span>
                    <div className="w-[4px] h-[4px] shrink-0 bg-[#159455] rounded-[2px] relative z-[196]" />
                  </div>
                  <div className="flex w-[129px] gap-[8px] items-center shrink-0 flex-nowrap relative z-[197]">
                    <span className="flex w-[117px] h-[20px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[13px] font-normal leading-[20px] text-[#17324d] relative text-right whitespace-nowrap z-[198]">
                      گزارش‌دهی اثر اجتماعی
                    </span>
                    <div className="w-[4px] h-[4px] shrink-0 bg-[#159455] rounded-[2px] relative z-[199]" />
                  </div>
                </div>
              </div>
              <div className="flex pt-[24px] pr-[24px] pb-[24px] pl-[24px] flex-col gap-[12px] items-end self-stretch grow shrink-0 basis-0 flex-nowrap bg-[#fcf5f5] rounded-[16px] border-solid border border-[#fbdcdd] relative z-[200]">
                <div className="flex w-[184px] gap-[8px] items-center shrink-0 flex-nowrap relative z-[201]">
                  <span className="flex w-[156px] h-[25px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[16px] font-bold leading-[25px] text-[#d32f2f] relative text-right whitespace-nowrap z-[202]">
                    مسئله‌ای که حل می‌کنیم
                  </span>
                  <div className="w-[20px] h-[20px] shrink-0 bg-[url(/assets/codia/tnJbjkg6mp.svg)] bg-cover bg-no-repeat relative overflow-hidden z-[203]" />
                </div>
                <span className="flex w-[350px] h-[96px] justify-end items-start self-stretch shrink-0 font-['Vazirmatn'] text-[14px] font-normal leading-[24px] text-[#17324d] relative text-right z-[204]">
                  تولیدکنندگان محلی و زنان روستایی معمولاً به آموزش کسب‌وکار،
                  تجهیزات کارآمد، شبکه فروش گسترده و دسترسی مستقیم به بازار
                  پایدار دسترسی کافی ندارند. این امر باعث حاشیه‌نشینی اقتصادی
                  آنان می‌گردد.
                </span>
              </div>
            </div>
            <div className="flex flex-col gap-[20px] items-start self-stretch shrink-0 flex-nowrap relative z-[205]">
              <div className="flex flex-col gap-[8px] items-end self-stretch shrink-0 flex-nowrap relative z-[206]">
                <span className="flex w-[191px] h-[38px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[24px] font-bold leading-[37.5px] text-[#17324d] relative text-right whitespace-nowrap z-[207]">
                  محصولات و خدمات
                </span>
                <div className="w-[48px] h-[4px] shrink-0 bg-[#2094e3] rounded-[2px] relative z-[208]" />
              </div>
              <div className="flex gap-[16px] items-start self-stretch shrink-0 flex-nowrap relative z-[209]">
                <div className="flex pt-[20px] pr-[20px] pb-[20px] pl-[20px] flex-col gap-[12px] items-end grow shrink-0 basis-0 flex-nowrap bg-[#fff] rounded-[16px] border-solid border border-[#e4ebf1] relative z-[210]">
                  <div className="flex w-[40px] h-[40px] justify-center items-center shrink-0 flex-nowrap bg-[#eaf8f0] rounded-[10px] relative z-[211]">
                    <div className="w-[20px] h-[20px] shrink-0 bg-[url(/assets/codia/OVx3baw2x8.svg)] bg-cover bg-no-repeat relative overflow-hidden z-[212]" />
                  </div>
                  <span className="flex w-[86px] h-[23px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[15px] font-bold leading-[23px] text-[#17324d] relative text-right whitespace-nowrap z-[213]">
                    پایش اثر پایدار
                  </span>
                  <span className="flex w-[221.333px] h-[40px] justify-end items-start self-stretch shrink-0 font-['Vazirmatn'] text-[12px] font-normal leading-[20px] text-[#60758a] relative text-right z-[214]">
                    ثبت داده‌های اشتغال، درآمد و پیشرفت لحظه‌ای بهره‌مندان پروژه
                  </span>
                </div>
                <div className="flex pt-[20px] pr-[20px] pb-[20px] pl-[20px] flex-col gap-[12px] items-end grow shrink-0 basis-0 flex-nowrap bg-[#fff] rounded-[16px] border-solid border border-[#e4ebf1] relative z-[215]">
                  <div className="flex w-[40px] h-[40px] justify-center items-center shrink-0 flex-nowrap bg-[#eaf8f0] rounded-[10px] relative z-[216]">
                    <div className="w-[20px] h-[20px] shrink-0 bg-[url(/assets/codia/qYCbvjiONZ.svg)] bg-cover bg-no-repeat relative overflow-hidden z-[217]" />
                  </div>
                  <span className="flex w-[139px] h-[23px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[15px] font-bold leading-[23px] text-[#17324d] relative text-right whitespace-nowrap z-[218]">
                    زیرساخت زنجیره فروش
                  </span>
                  <span className="flex w-[221.333px] h-[40px] justify-end items-start self-stretch shrink-0 font-['Vazirmatn'] text-[12px] font-normal leading-[20px] text-[#60758a] relative text-right z-[219]">
                    اتصال هوشمند تولیدکنندگان محلی به زنجیره تأمین و کانال‌های
                    فروش مدرن
                  </span>
                </div>
                <div className="flex pt-[20px] pr-[20px] pb-[20px] pl-[20px] flex-col gap-[12px] items-end grow shrink-0 basis-0 flex-nowrap bg-[#fff] rounded-[16px] border-solid border border-[#e4ebf1] relative z-[220]">
                  <div className="flex w-[40px] h-[40px] justify-center items-center shrink-0 flex-nowrap bg-[#eaf8f0] rounded-[10px] relative z-[221]">
                    <div className="w-[20px] h-[20px] shrink-0 bg-[url(/assets/codia/b2FvU2zw8o.svg)] bg-cover bg-no-repeat relative overflow-hidden z-[222]" />
                  </div>
                  <span className="flex w-[130px] h-[23px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[15px] font-bold leading-[23px] text-[#17324d] relative text-right whitespace-nowrap z-[223]">
                    آموزش و توانمندسازی
                  </span>
                  <span className="flex w-[221.333px] h-[40px] justify-end items-start self-stretch shrink-0 font-['Vazirmatn'] text-[12px] font-normal leading-[20px] text-[#60758a] relative text-right z-[224]">
                    برنامه‌های آموزشی مهارت، ارتقای کیفیت تولید، قیمت‌گذاری و
                    مدیریت مالی
                  </span>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-[16px] items-start self-stretch shrink-0 flex-nowrap relative z-[225]">
              <div className="flex flex-col gap-[8px] items-end self-stretch shrink-0 flex-nowrap relative z-[226]">
                <span className="flex w-[256px] h-[38px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[24px] font-bold leading-[37.5px] text-[#17324d] relative text-right whitespace-nowrap z-[227]">
                  حوزه‌های اثرگذاری اجتماعی
                </span>
                <div className="w-[48px] h-[4px] shrink-0 bg-[#2094e3] rounded-[2px] relative z-[228]" />
              </div>
              <div className="flex gap-[12px] items-start self-stretch shrink-0 flex-nowrap relative z-[229]">
                <div className="flex pt-[16px] pr-[16px] pb-[16px] pl-[16px] gap-[12px] justify-end items-center grow shrink-0 basis-0 flex-nowrap bg-[#fff] rounded-[12px] border-solid border border-[#e4ebf1] relative z-[230]">
                  <div className="flex w-[102px] flex-col gap-[2px] items-end shrink-0 flex-nowrap relative z-[231]">
                    <span className="flex w-[102px] h-[20px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[13px] font-bold leading-[20px] text-[#17324d] relative text-right whitespace-nowrap z-[232]">
                      افزایش درآمد خانوار
                    </span>
                    <span className="flex w-[30px] h-[17px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[11px] font-normal leading-[17px] text-[#60758a] relative text-right whitespace-nowrap z-[233]">
                      ۲ پروژه
                    </span>
                  </div>
                  <div className="flex w-[32px] h-[32px] justify-center items-center shrink-0 flex-nowrap bg-[#f0f4f8] rounded-[8px] relative z-[234]">
                    <div className="w-[16px] h-[16px] shrink-0 bg-[url(/assets/codia/3m0nY8DELZ.svg)] bg-cover bg-no-repeat relative overflow-hidden z-[235]" />
                  </div>
                </div>
                <div className="flex pt-[16px] pr-[16px] pb-[16px] pl-[16px] gap-[12px] justify-end items-center grow shrink-0 basis-0 flex-nowrap bg-[#fff] rounded-[12px] border-solid border border-[#e4ebf1] relative z-[236]">
                  <div className="flex w-[113px] flex-col gap-[2px] items-end shrink-0 flex-nowrap relative z-[237]">
                    <span className="flex w-[113px] h-[20px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[13px] font-bold leading-[20px] text-[#17324d] relative text-right whitespace-nowrap z-[238]">
                      توسعه پایدار روستایی
                    </span>
                    <span className="flex w-[31px] h-[17px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[11px] font-normal leading-[17px] text-[#60758a] relative text-right whitespace-nowrap z-[239]">
                      ۵ پروژه
                    </span>
                  </div>
                  <div className="flex w-[32px] h-[32px] justify-center items-center shrink-0 flex-nowrap bg-[#f0f4f8] rounded-[8px] relative z-[240]">
                    <div className="w-[16px] h-[16px] shrink-0 bg-[url(/assets/codia/0hjAnagoEx.svg)] bg-cover bg-no-repeat relative overflow-hidden z-[241]" />
                  </div>
                </div>
                <div className="flex pt-[16px] pr-[16px] pb-[16px] pl-[16px] gap-[12px] justify-end items-center grow shrink-0 basis-0 flex-nowrap bg-[#fff] rounded-[12px] border-solid border border-[#e4ebf1] relative z-[242]">
                  <div className="flex w-[88px] flex-col gap-[2px] items-end shrink-0 flex-nowrap relative z-[243]">
                    <span className="flex w-[88px] h-[20px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[13px] font-bold leading-[20px] text-[#17324d] relative text-right whitespace-nowrap z-[244]">
                      توانمندسازی زنان
                    </span>
                    <span className="flex w-[31px] h-[17px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[11px] font-normal leading-[17px] text-[#60758a] relative text-right whitespace-nowrap z-[245]">
                      ۴ پروژه
                    </span>
                  </div>
                  <div className="flex w-[32px] h-[32px] justify-center items-center shrink-0 flex-nowrap bg-[#f0f4f8] rounded-[8px] relative z-[246]">
                    <div className="w-[16px] h-[16px] shrink-0 bg-[url(/assets/codia/R3jJYKiE42.svg)] bg-cover bg-no-repeat relative overflow-hidden z-[247]" />
                  </div>
                </div>
                <div className="flex pt-[16px] pr-[16px] pb-[16px] pl-[16px] gap-[12px] justify-end items-center grow shrink-0 basis-0 flex-nowrap bg-[#fff] rounded-[12px] border-solid border border-[#e4ebf1] relative z-[248]">
                  <div className="flex w-[101px] flex-col gap-[2px] items-end shrink-0 flex-nowrap relative z-[249]">
                    <span className="flex w-[101px] h-[20px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[13px] font-bold leading-[20px] text-[#17324d] relative text-right whitespace-nowrap z-[250]">
                      اشتغال پایدار محلی
                    </span>
                    <span className="flex w-[32px] h-[17px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[11px] font-normal leading-[17px] text-[#60758a] relative text-right whitespace-nowrap z-[251]">
                      ۳ پروژه
                    </span>
                  </div>
                  <div className="flex w-[32px] h-[32px] justify-center items-center shrink-0 flex-nowrap bg-[#f0f4f8] rounded-[8px] relative z-[252]">
                    <div className="w-[16px] h-[16px] shrink-0 bg-[url(/assets/codia/bDVnDJ1qtL.svg)] bg-cover bg-no-repeat relative overflow-hidden z-[253]" />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-[20px] items-start self-stretch shrink-0 flex-nowrap relative z-[254]">
              <div className="flex flex-col gap-[8px] items-end self-stretch shrink-0 flex-nowrap relative z-[255]">
                <span className="flex w-[142px] h-[38px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[24px] font-bold leading-[37.5px] text-[#17324d] relative text-right whitespace-nowrap z-[256]">
                  پروژه‌های فعال
                </span>
                <div className="w-[48px] h-[4px] shrink-0 bg-[#2094e3] rounded-[2px] relative z-[257]" />
              </div>
              <div className="flex pt-[48px] pr-[48px] pb-[48px] pl-[48px] flex-col gap-[16px] justify-center items-center self-stretch shrink-0 flex-nowrap bg-[#fff] rounded-[16px] border-solid border border-[#e4ebf1] relative z-[258]">
                <span className="h-[28px] self-stretch shrink-0 basis-auto font-['Vazirmatn'] text-[18px] font-bold leading-[28px] text-[#17324d] relative text-center whitespace-nowrap z-[259]">
                  در حال حاضر پروژه فعالی وجود ندارد
                </span>
                <span className="h-[22px] self-stretch shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-normal leading-[21.875px] text-[#60758a] relative text-center whitespace-nowrap z-[260]">
                  می‌توانید پروژه‌های تکمیل‌شده و گزارش‌های اثر این استارتاپ را
                  مشاهده کنید.
                </span>
                <div className="flex w-[100px] h-[100px] p-0 items-start shrink-0 flex-nowrap relative z-[261]" />
              </div>
            </div>
            <div className="flex flex-col gap-[16px] items-start self-stretch shrink-0 flex-nowrap relative z-[262]">
              <div className="flex flex-col gap-[8px] items-end self-stretch shrink-0 flex-nowrap relative z-[263]">
                <span className="flex w-[199px] h-[38px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[24px] font-bold leading-[37.5px] text-[#17324d] relative text-right whitespace-nowrap z-[264]">
                  پروژه‌های تکمیل‌شده
                </span>
                <div className="w-[48px] h-[4px] shrink-0 bg-[#2094e3] rounded-[2px] relative z-[265]" />
              </div>
              <div className="flex flex-col gap-[8px] items-start self-stretch shrink-0 flex-nowrap bg-[#fff] rounded-[12px] border-solid border border-[#e4ebf1] relative overflow-hidden z-[266]">
                <div className="flex pt-[16px] pr-[16px] pb-[16px] pl-[16px] justify-between items-center self-stretch shrink-0 flex-nowrap border-solid border-t border-t-[#e4ebf1] relative z-[267]">
                  <span className="flex w-[110px] h-[20px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[13px] font-normal leading-[20px] text-[#2094e3] relative text-right underline whitespace-nowrap z-[268]">
                    مشاهده گزارش نهایی
                  </span>
                  <div className="flex w-[643px] gap-[24px] items-center shrink-0 flex-nowrap relative z-[269]">
                    <span className="flex w-[95px] h-[20px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[13px] font-normal leading-[20px] text-[#17324d] relative text-right whitespace-nowrap z-[270]">
                      بهره‌مندان: ۶۲۰ نفر
                    </span>
                    <span className="flex w-[92px] h-[20px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[13px] font-normal leading-[20px] text-[#17324d] relative text-right whitespace-nowrap z-[271]">
                      تحقق اهداف: ۹۲٪
                    </span>
                    <span className="flex w-[84px] h-[20px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[13px] font-normal leading-[20px] text-[#60758a] relative text-right whitespace-nowrap z-[272]">
                      سال اتمام: ۱۴۰۳
                    </span>
                    <span className="flex w-[300px] h-[22px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-bold leading-[21.875px] text-[#17324d] relative text-right whitespace-nowrap z-[273]">
                      توسعه بازار فروش صنایع‌دستی روستایی
                    </span>
                  </div>
                </div>
                <div className="flex pt-[16px] pr-[16px] pb-[16px] pl-[16px] justify-between items-center self-stretch shrink-0 flex-nowrap border-solid border-t border-t-[#e4ebf1] relative z-[274]">
                  <span className="flex w-[110px] h-[20px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[13px] font-normal leading-[20px] text-[#2094e3] relative text-right underline whitespace-nowrap z-[275]">
                    مشاهده گزارش نهایی
                  </span>
                  <div className="flex w-[646px] gap-[24px] items-center shrink-0 flex-nowrap relative z-[276]">
                    <span className="flex w-[97px] h-[20px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[13px] font-normal leading-[20px] text-[#17324d] relative text-right whitespace-nowrap z-[277]">
                      بهره‌مندان: ۴۸۰ نفر
                    </span>
                    <span className="flex w-[94px] h-[20px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[13px] font-normal leading-[20px] text-[#17324d] relative text-right whitespace-nowrap z-[278]">
                      تحقق اهداف: ۸۸٪
                    </span>
                    <span className="flex w-[83px] h-[20px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[13px] font-normal leading-[20px] text-[#60758a] relative text-right whitespace-nowrap z-[279]">
                      سال اتمام: ۱۴۰۴
                    </span>
                    <span className="flex w-[300px] h-[22px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-bold leading-[21.875px] text-[#17324d] relative text-right whitespace-nowrap z-[280]">
                      آموزش کسب‌وکار خرد زنان محلی
                    </span>
                  </div>
                </div>
                <div className="flex pt-[16px] pr-[16px] pb-[16px] pl-[16px] justify-between items-center self-stretch shrink-0 flex-nowrap relative z-[281]">
                  <span className="flex w-[110px] h-[20px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[13px] font-normal leading-[20px] text-[#2094e3] relative text-right underline whitespace-nowrap z-[282]">
                    مشاهده گزارش نهایی
                  </span>
                  <div className="flex w-[642px] gap-[24px] items-center shrink-0 flex-nowrap relative z-[283]">
                    <span className="flex w-[97px] h-[20px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[13px] font-normal leading-[20px] text-[#17324d] relative text-right whitespace-nowrap z-[284]">
                      بهره‌مندان: ۷۴۰ نفر
                    </span>
                    <span className="flex w-[90px] h-[20px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[13px] font-normal leading-[20px] text-[#17324d] relative text-right whitespace-nowrap z-[285]">
                      تحقق اهداف: ۸۱٪
                    </span>
                    <span className="flex w-[83px] h-[20px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[13px] font-normal leading-[20px] text-[#60758a] relative text-right whitespace-nowrap z-[286]">
                      سال اتمام: ۱۴۰۴
                    </span>
                    <span className="flex w-[300px] h-[22px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-bold leading-[21.875px] text-[#17324d] relative text-right whitespace-nowrap z-[287]">
                      ایجاد بازار آنلاین محصولات بومی گلستان
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-[16px] items-start self-stretch shrink-0 flex-nowrap relative z-[288]">
              <div className="flex flex-col gap-[8px] items-end self-stretch shrink-0 flex-nowrap relative z-[289]">
                <span className="flex w-[295px] h-[38px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[24px] font-bold leading-[37.5px] text-[#17324d] relative text-right whitespace-nowrap z-[290]">
                  اثر تجمیعی پروژه‌های تأییدشده
                </span>
                <div className="w-[48px] h-[4px] shrink-0 bg-[#2094e3] rounded-[2px] relative z-[291]" />
              </div>
              <div className="flex pt-[24px] pr-[24px] pb-[24px] pl-[24px] flex-col gap-[20px] items-end self-stretch shrink-0 flex-nowrap bg-[#f0f8ff] rounded-[16px] border-solid border border-[#cbe4fc] relative z-[292]">
                <div className="flex gap-[16px] items-start self-stretch shrink-0 flex-nowrap relative z-[293]">
                  <div className="flex pt-[16px] pr-[16px] pb-[16px] pl-[16px] flex-col gap-[8px] items-end grow shrink-0 basis-0 flex-nowrap bg-[#fff] rounded-[12px] border-solid border border-[#e4ebf1] relative z-[294]">
                    <div className="flex w-[32px] h-[32px] justify-center items-center shrink-0 flex-nowrap bg-[#e2f0ff] rounded-[8px] relative z-[295]">
                      <div className="w-[16px] h-[16px] shrink-0 bg-[url(/assets/codia/tV6ySM5HrQ.svg)] bg-cover bg-no-repeat relative overflow-hidden z-[296]" />
                    </div>
                    <span className="flex w-[101px] h-[17px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[11px] font-normal leading-[17px] text-[#60758a] relative text-right whitespace-nowrap z-[297]">
                      روستاهای تحت پوشش
                    </span>
                    <span className="flex w-[66px] h-[28px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[18px] font-bold leading-[28px] text-[#17324d] relative text-right whitespace-nowrap z-[298]">
                      ۶۸ روستا
                    </span>
                  </div>
                  <div className="flex pt-[16px] pr-[16px] pb-[16px] pl-[16px] flex-col gap-[8px] items-end grow shrink-0 basis-0 flex-nowrap bg-[#fff] rounded-[12px] border-solid border border-[#e4ebf1] relative z-[299]">
                    <div className="flex w-[32px] h-[32px] justify-center items-center shrink-0 flex-nowrap bg-[#e2f0ff] rounded-[8px] relative z-[300]">
                      <div className="w-[16px] h-[16px] shrink-0 bg-[url(/assets/codia/owRFGFLNt3.svg)] bg-cover bg-no-repeat relative overflow-hidden z-[301]" />
                    </div>
                    <span className="flex w-[78px] h-[17px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[11px] font-normal leading-[17px] text-[#60758a] relative text-right whitespace-nowrap z-[302]">
                      خانوارهای بهره‌مند
                    </span>
                    <span className="flex w-[91px] h-[28px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[18px] font-bold leading-[28px] text-[#17324d] relative text-right whitespace-nowrap z-[303]">
                      ۲٬۸۴۰ خانوار
                    </span>
                  </div>
                  <div className="flex pt-[16px] pr-[16px] pb-[16px] pl-[16px] flex-col gap-[8px] items-end grow shrink-0 basis-0 flex-nowrap bg-[#fff] rounded-[12px] border-solid border border-[#e4ebf1] relative z-[304]">
                    <div className="flex w-[32px] h-[32px] justify-center items-center shrink-0 flex-nowrap bg-[#e2f0ff] rounded-[8px] relative z-[305]">
                      <div className="w-[16px] h-[16px] shrink-0 bg-[url(/assets/codia/EhXPuhmV6B.svg)] bg-cover bg-no-repeat relative overflow-hidden z-[306]" />
                    </div>
                    <span className="flex w-[71px] h-[17px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[11px] font-normal leading-[17px] text-[#60758a] relative text-right whitespace-nowrap z-[307]">
                      افراد آموزش‌دیده
                    </span>
                    <span className="flex w-[66px] h-[28px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[18px] font-bold leading-[28px] text-[#17324d] relative text-right whitespace-nowrap z-[308]">
                      ۱٬۲۵۰ نفر
                    </span>
                  </div>
                  <div className="flex pt-[16px] pr-[16px] pb-[16px] pl-[16px] flex-col gap-[8px] items-end grow shrink-0 basis-0 flex-nowrap bg-[#fff] rounded-[12px] border-solid border border-[#e4ebf1] relative z-[309]">
                    <div className="flex w-[32px] h-[32px] justify-center items-center shrink-0 flex-nowrap bg-[#e2f0ff] rounded-[8px] relative z-[310]">
                      <div className="w-[16px] h-[16px] shrink-0 bg-[url(/assets/codia/t73L1ockww.svg)] bg-cover bg-no-repeat relative overflow-hidden z-[311]" />
                    </div>
                    <span className="flex w-[76px] h-[17px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[11px] font-normal leading-[17px] text-[#60758a] relative text-right whitespace-nowrap z-[312]">
                      اشتغال ایجادشده
                    </span>
                    <span className="flex w-[56px] h-[28px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[18px] font-bold leading-[28px] text-[#17324d] relative text-right whitespace-nowrap z-[313]">
                      ۴۸۰ نفر
                    </span>
                  </div>
                </div>
                <span className="flex w-[597px] h-[20px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[13px] font-normal leading-[20px] text-[#60758a] relative text-right whitespace-nowrap z-[314]">
                  این آمار شامل پروژه‌هایی است که گزارش نهایی عملکرد آن‌ها توسط
                  خانه خلاق و کمیته امداد ارزیابی و تأیید شده است.
                </span>
              </div>
            </div>
            <div className="flex flex-col gap-[16px] items-start self-stretch shrink-0 flex-nowrap relative z-[315]">
              <div className="flex flex-col gap-[8px] items-end self-stretch shrink-0 flex-nowrap relative z-[316]">
                <span className="flex w-[139px] h-[38px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[24px] font-bold leading-[37.5px] text-[#17324d] relative text-right whitespace-nowrap z-[317]">
                  تیم راهکار سبز
                </span>
                <span className="flex w-[195px] h-[22px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-normal leading-[21.875px] text-[#60758a] relative text-right whitespace-nowrap z-[318]">
                  اعضای اصلی و عمومی تیم استارتاپ
                </span>
                <div className="w-[48px] h-[4px] shrink-0 bg-[#2094e3] rounded-[2px] relative z-[319]" />
              </div>
              <div className="flex gap-[16px] items-start self-stretch shrink-0 flex-nowrap relative z-[320]">
                <div className="flex pt-[16px] pr-[16px] pb-[16px] pl-[16px] flex-col gap-[12px] items-center grow shrink-0 basis-0 flex-nowrap bg-[#fff] rounded-[16px] border-solid border border-[#e4ebf1] relative z-[321]">
                  <img
                    className="w-[80px] h-[80px] shrink-0 object-cover rounded-[40px] relative z-[322]"
                    src="/assets/codia/Cgw1Rbr6NM.png"
                    alt="تصویر سارا محمدی"
                  />
                  <div className="flex w-[105px] flex-col gap-[4px] items-center shrink-0 flex-nowrap relative z-[323]">
                    <span className="flex w-[75px] h-[23px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[15px] font-bold leading-[23px] text-[#17324d] relative text-right whitespace-nowrap z-[324]">
                      سارا محمدی
                    </span>
                    <span className="flex w-[105px] h-[17px] justify-center items-start shrink-0 basis-auto font-['Vazirmatn'] text-[11px] font-normal leading-[17px] text-[#60758a] relative text-center whitespace-nowrap z-[325]">
                      هم‌بنیان‌گذار و مدیرعامل
                    </span>
                  </div>
                  <div className="flex w-[134px] pt-[4px] pr-[8px] pb-[4px] pl-[8px] items-start shrink-0 flex-nowrap bg-[#f0f4f8] rounded-[6px] relative z-[326]">
                    <span className="flex w-[118px] h-[16px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[10px] font-normal leading-[15.625px] text-[#60758a] relative text-right whitespace-nowrap z-[327]">
                      توسعه کسب‌وکارهای اجتماعی
                    </span>
                  </div>
                  <div className="w-[16px] h-[16px] shrink-0 bg-[url(/assets/codia/HNSsza2hYj.svg)] bg-cover bg-no-repeat relative overflow-hidden z-[328]" />
                </div>
                <div className="flex pt-[16px] pr-[16px] pb-[16px] pl-[16px] flex-col gap-[12px] items-center grow shrink-0 basis-0 flex-nowrap bg-[#fff] rounded-[16px] border-solid border border-[#e4ebf1] relative z-[329]">
                  <img
                    className="w-[80px] h-[80px] shrink-0 object-cover rounded-[40px] relative z-[330]"
                    src="/assets/codia/7F5rQViv7L.png"
                    alt="تصویر امیر رضایی"
                  />
                  <div className="flex w-[122px] flex-col gap-[4px] items-center shrink-0 flex-nowrap relative z-[331]">
                    <span className="flex w-[66px] h-[23px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[15px] font-bold leading-[23px] text-[#17324d] relative text-right whitespace-nowrap z-[332]">
                      امیر رضایی
                    </span>
                    <span className="flex w-[122px] h-[17px] justify-center items-start shrink-0 basis-auto font-['Vazirmatn'] text-[11px] font-normal leading-[17px] text-[#60758a] relative text-center whitespace-nowrap z-[333]">
                      هم‌بنیان‌گذار و مدیر محصول
                    </span>
                  </div>
                  <div className="flex w-[111px] pt-[4px] pr-[8px] pb-[4px] pl-[8px] items-start shrink-0 flex-nowrap bg-[#f0f4f8] rounded-[6px] relative z-[334]">
                    <span className="flex w-[95px] h-[16px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[10px] font-normal leading-[15.625px] text-[#60758a] relative text-right whitespace-nowrap z-[335]">
                      طراحی محصول و فناوری
                    </span>
                  </div>
                  <div className="w-[16px] h-[16px] shrink-0 bg-[url(/assets/codia/RBDLw2HTa1.svg)] bg-cover bg-no-repeat relative overflow-hidden z-[336]" />
                </div>
                <div className="flex pt-[16px] pr-[16px] pb-[16px] pl-[16px] flex-col gap-[12px] items-center grow shrink-0 basis-0 flex-nowrap bg-[#fff] rounded-[16px] border-solid border border-[#e4ebf1] relative z-[337]">
                  <img
                    className="w-[80px] h-[80px] shrink-0 object-cover rounded-[40px] relative z-[338]"
                    src="/assets/codia/MRhsvQCF0t.png"
                    alt="تصویر مریم حسینی"
                  />
                  <div className="flex w-[76px] flex-col gap-[4px] items-center shrink-0 flex-nowrap relative z-[339]">
                    <span className="flex w-[76px] h-[23px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[15px] font-bold leading-[23px] text-[#17324d] relative text-right whitespace-nowrap z-[340]">
                      مریم حسینی
                    </span>
                    <span className="flex w-[55px] h-[17px] justify-center items-start shrink-0 basis-auto font-['Vazirmatn'] text-[11px] font-normal leading-[17px] text-[#60758a] relative text-center whitespace-nowrap z-[341]">
                      مدیر عملیات
                    </span>
                  </div>
                  <div className="flex w-[112px] pt-[4px] pr-[8px] pb-[4px] pl-[8px] items-start shrink-0 flex-nowrap bg-[#f0f4f8] rounded-[6px] relative z-[342]">
                    <span className="flex w-[96px] h-[16px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[10px] font-normal leading-[15.625px] text-[#60758a] relative text-right whitespace-nowrap z-[343]">
                      اجرای پروژه‌های روستایی
                    </span>
                  </div>
                  <div className="w-[16px] h-[16px] shrink-0 bg-[url(/assets/codia/O56m5ZBXVH.svg)] bg-cover bg-no-repeat relative overflow-hidden z-[344]" />
                </div>
                <div className="flex pt-[16px] pr-[16px] pb-[16px] pl-[16px] flex-col gap-[12px] items-center grow shrink-0 basis-0 flex-nowrap bg-[#fff] rounded-[16px] border-solid border border-[#e4ebf1] relative z-[345]">
                  <img
                    className="w-[80px] h-[80px] shrink-0 object-cover rounded-[40px] relative z-[346]"
                    src="/assets/codia/3oVzrOPE33.png"
                    alt="تصویر علی کریمی"
                  />
                  <div className="flex w-[70px] flex-col gap-[4px] items-center shrink-0 flex-nowrap relative z-[347]">
                    <span className="flex w-[63px] h-[23px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[15px] font-bold leading-[23px] text-[#17324d] relative text-right whitespace-nowrap z-[348]">
                      علی کریمی
                    </span>
                    <span className="flex w-[70px] h-[17px] justify-center items-start shrink-0 basis-auto font-['Vazirmatn'] text-[11px] font-normal leading-[17px] text-[#60758a] relative text-center whitespace-nowrap z-[349]">
                      مدیر سنجش اثر
                    </span>
                  </div>
                  <div className="flex w-[130px] pt-[4px] pr-[8px] pb-[4px] pl-[8px] items-start shrink-0 flex-nowrap bg-[#f0f4f8] rounded-[6px] relative z-[350]">
                    <span className="flex w-[114px] h-[16px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[10px] font-normal leading-[15.625px] text-[#60758a] relative text-right whitespace-nowrap z-[351]">
                      تحلیل داده و ارزیابی اجتماعی
                    </span>
                  </div>
                  <div className="w-[16px] h-[16px] shrink-0 bg-[url(/assets/codia/XqzXwwRcjX.svg)] bg-cover bg-no-repeat relative overflow-hidden z-[352]" />
                </div>
              </div>
              <div className="flex pt-[8px] pr-0 pb-0 pl-0 justify-center items-start self-stretch shrink-0 flex-nowrap relative z-[353]">
                <span className="flex w-[146px] h-[20px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[13px] font-bold leading-[20px] text-[#2094e3] relative text-right whitespace-nowrap z-[354]">
                  مشاهده همه اعضای تیم ←
                </span>
              </div>
            </div>
            <div className="flex flex-col gap-[16px] items-start self-stretch shrink-0 flex-nowrap relative z-[355]">
              <div className="flex flex-col gap-[8px] items-end self-stretch shrink-0 flex-nowrap relative z-[356]">
                <span className="flex w-[191px] h-[38px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[24px] font-bold leading-[37.5px] text-[#17324d] relative text-right whitespace-nowrap z-[357]">
                  مسیر رشد و فعالیت
                </span>
                <div className="w-[48px] h-[4px] shrink-0 bg-[#2094e3] rounded-[2px] relative z-[358]" />
              </div>
              <div className="flex pt-0 pr-[16px] pb-0 pl-0 flex-col items-end self-stretch shrink-0 flex-nowrap relative z-[359]">
                <div className="flex gap-[16px] justify-end items-start self-stretch shrink-0 flex-nowrap relative z-[360]">
                  <div className="flex pt-0 pr-0 pb-[24px] pl-0 flex-col gap-[4px] items-end grow shrink-0 basis-0 flex-nowrap relative z-[361]">
                    <span className="flex w-[24px] h-[22px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-bold leading-[21.875px] text-[#17324d] relative text-right whitespace-nowrap z-[362]">
                      ۱۴۰۱
                    </span>
                    <span className="flex w-[290px] h-[20px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[13px] font-normal leading-[20px] text-[#60758a] relative text-right whitespace-nowrap z-[363]">
                      آغاز فعالیت رسمی استارتاپ در پارک علم و فناوری گلستان
                    </span>
                  </div>
                  <div className="flex w-[16px] h-[68px] flex-col items-center shrink-0 flex-nowrap bg-[url(/assets/codia/962qwHaRzP.svg)] bg-cover bg-no-repeat relative z-[364]" />
                </div>
                <div className="flex gap-[16px] justify-end items-start self-stretch shrink-0 flex-nowrap relative z-[365]">
                  <div className="flex pt-0 pr-0 pb-[24px] pl-0 flex-col gap-[4px] items-end grow shrink-0 basis-0 flex-nowrap relative z-[366]">
                    <span className="flex w-[27px] h-[22px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-bold leading-[21.875px] text-[#17324d] relative text-right whitespace-nowrap z-[367]">
                      ۱۴۰۲
                    </span>
                    <span className="flex w-[349px] h-[20px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[13px] font-normal leading-[20px] text-[#60758a] relative text-right whitespace-nowrap z-[368]">
                      اجرای نخستین پروژه توانمندسازی روستایی با همکاری شوراهای
                      محلی
                    </span>
                  </div>
                  <div className="flex w-[16px] h-[68px] flex-col items-center shrink-0 flex-nowrap bg-[url(/assets/codia/5Z0FrjnLNU.svg)] bg-cover bg-no-repeat relative z-[369]" />
                </div>
                <div className="flex gap-[16px] justify-end items-start self-stretch shrink-0 flex-nowrap relative z-[370]">
                  <div className="flex pt-0 pr-0 pb-[24px] pl-0 flex-col gap-[4px] items-end grow shrink-0 basis-0 flex-nowrap relative z-[371]">
                    <span className="flex w-[29px] h-[22px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-bold leading-[21.875px] text-[#17324d] relative text-right whitespace-nowrap z-[372]">
                      ۱۴۰۳
                    </span>
                    <span className="flex w-[335px] h-[20px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[13px] font-normal leading-[20px] text-[#60758a] relative text-right whitespace-nowrap z-[373]">
                      تأیید اولین طرح اشتغال‌زایی و مشارکت مالی در سامانه کشوری
                      ماه
                    </span>
                  </div>
                  <div className="flex w-[16px] h-[68px] flex-col items-center shrink-0 flex-nowrap bg-[url(/assets/codia/16ddP4cak1.svg)] bg-cover bg-no-repeat relative z-[374]" />
                </div>
                <div className="flex gap-[16px] justify-end items-start self-stretch shrink-0 flex-nowrap relative z-[375]">
                  <div className="flex pt-0 pr-0 pb-[24px] pl-0 flex-col gap-[4px] items-end grow shrink-0 basis-0 flex-nowrap relative z-[376]">
                    <span className="flex w-[28px] h-[22px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-bold leading-[21.875px] text-[#17324d] relative text-right whitespace-nowrap z-[377]">
                      ۱۴۰۴
                    </span>
                    <span className="flex w-[362px] h-[20px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[13px] font-normal leading-[20px] text-[#60758a] relative text-right whitespace-nowrap z-[378]">
                      عبور از سقف ۲٬۰۰۰ فرد بهره‌مند مستقیم در سطح دو استان شمال
                      کشور
                    </span>
                  </div>
                  <div className="flex w-[16px] h-[68px] flex-col items-center shrink-0 flex-nowrap bg-[url(/assets/codia/51nEO3YO7T.svg)] bg-cover bg-no-repeat relative z-[379]" />
                </div>
                <div className="flex gap-[16px] justify-end items-start self-stretch shrink-0 flex-nowrap relative z-[380]">
                  <div className="flex pt-0 pr-0 pb-[24px] pl-0 flex-col gap-[4px] items-end grow shrink-0 basis-0 flex-nowrap relative z-[381]">
                    <span className="flex w-[28px] h-[22px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-bold leading-[21.875px] text-[#17324d] relative text-right whitespace-nowrap z-[382]">
                      ۱۴۰۵
                    </span>
                    <span className="flex w-[335px] h-[20px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[13px] font-normal leading-[20px] text-[#60758a] relative text-right whitespace-nowrap z-[383]">
                      آغاز بهره‌برداری از دو پروژه جدید فعال و خروجی‌محور
                      (KPI-based)
                    </span>
                  </div>
                  <div className="flex w-[16px] flex-col items-center shrink-0 flex-nowrap relative z-[384]">
                    <div className="w-[12px] h-[12px] shrink-0 bg-[url(/assets/codia/f0uE2hFn5e.svg)] bg-cover bg-no-repeat rounded-[50%] relative z-[385]" />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-[16px] items-start self-stretch shrink-0 flex-nowrap relative z-[386]">
              <div className="flex flex-col gap-[8px] items-end self-stretch shrink-0 flex-nowrap relative z-[387]">
                <span className="flex w-[175px] h-[38px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[24px] font-bold leading-[37.5px] text-[#17324d] relative text-right whitespace-nowrap z-[388]">
                  گزارش‌های عمومی
                </span>
                <div className="w-[48px] h-[4px] shrink-0 bg-[#2094e3] rounded-[2px] relative z-[389]" />
              </div>
              <div className="flex flex-col gap-[8px] items-start self-stretch shrink-0 flex-nowrap relative z-[390]">
                <div className="flex pt-[16px] pr-[16px] pb-[16px] pl-[16px] justify-between items-center self-stretch shrink-0 flex-nowrap bg-[#fff] rounded-[12px] border-solid border border-[#e4ebf1] relative z-[391]">
                  <div className="flex w-[175px] gap-[16px] items-center shrink-0 flex-nowrap relative z-[392]">
                    <span className="flex w-[63px] h-[20px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[13px] font-normal leading-[20px] text-[#2094e3] relative text-right whitespace-nowrap z-[393]">
                      دریافت فایل
                    </span>
                    <span className="h-[20px] shrink-0 basis-auto font-['Vazirmatn'] text-[13px] font-normal leading-[20px] text-[#60758a] relative text-left whitespace-nowrap z-[394]">
                      |
                    </span>
                    <span className="flex w-[76px] h-[20px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[13px] font-normal leading-[20px] text-[#2094e3] relative text-right whitespace-nowrap z-[395]">
                      مشاهده آنلاین
                    </span>
                  </div>
                  <div className="flex w-[429px] gap-[16px] items-center shrink-0 flex-nowrap relative z-[396]">
                    <span className="flex w-[63px] h-[20px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[13px] font-normal leading-[20px] text-[#60758a] relative text-right whitespace-nowrap z-[397]">
                      ۳.۲ مگابایت
                    </span>
                    <span className="flex w-[59px] h-[20px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[13px] font-normal leading-[20px] text-[#60758a] relative text-right whitespace-nowrap z-[398]">
                      اسفند ۱۴۰۴
                    </span>
                    <span className="flex w-[239px] h-[22px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-medium leading-[21.875px] text-[#17324d] relative text-right whitespace-nowrap z-[399]">
                      گزارش جامع سنجش اثر اجتماعی سال ۱۴۰۴
                    </span>
                    <div className="w-[20px] h-[20px] shrink-0 bg-[url(/assets/codia/EEhdTsfdme.svg)] bg-cover bg-no-repeat relative overflow-hidden z-[400]" />
                  </div>
                </div>
                <div className="flex pt-[16px] pr-[16px] pb-[16px] pl-[16px] justify-between items-center self-stretch shrink-0 flex-nowrap bg-[#fff] rounded-[12px] border-solid border border-[#e4ebf1] relative z-[401]">
                  <div className="flex w-[175px] gap-[16px] items-center shrink-0 flex-nowrap relative z-[402]">
                    <span className="flex w-[63px] h-[20px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[13px] font-normal leading-[20px] text-[#2094e3] relative text-right whitespace-nowrap z-[403]">
                      دریافت فایل
                    </span>
                    <span className="h-[20px] shrink-0 basis-auto font-['Vazirmatn'] text-[13px] font-normal leading-[20px] text-[#60758a] relative text-left whitespace-nowrap z-[404]">
                      |
                    </span>
                    <span className="flex w-[76px] h-[20px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[13px] font-normal leading-[20px] text-[#2094e3] relative text-right whitespace-nowrap z-[405]">
                      مشاهده آنلاین
                    </span>
                  </div>
                  <div className="flex w-[427px] gap-[16px] items-center shrink-0 flex-nowrap relative z-[406]">
                    <span className="flex w-[59px] h-[20px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[13px] font-normal leading-[20px] text-[#60758a] relative text-right whitespace-nowrap z-[407]">
                      ۱.۸ مگابایت
                    </span>
                    <span className="flex w-[47px] h-[20px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[13px] font-normal leading-[20px] text-[#60758a] relative text-right whitespace-nowrap z-[408]">
                      آبان ۱۴۰۴
                    </span>
                    <span className="flex w-[253px] h-[22px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-medium leading-[21.875px] text-[#17324d] relative text-right whitespace-nowrap z-[409]">
                      گزارش نهایی عملکرد پروژه توسعه صنایع‌دستی
                    </span>
                    <div className="w-[20px] h-[20px] shrink-0 bg-[url(/assets/codia/ZCoaix1mgA.svg)] bg-cover bg-no-repeat relative overflow-hidden z-[410]" />
                  </div>
                </div>
                <div className="flex pt-[16px] pr-[16px] pb-[16px] pl-[16px] justify-between items-center self-stretch shrink-0 flex-nowrap bg-[#fff] rounded-[12px] border-solid border border-[#e4ebf1] relative z-[411]">
                  <div className="flex w-[175px] gap-[16px] items-center shrink-0 flex-nowrap relative z-[412]">
                    <span className="flex w-[63px] h-[20px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[13px] font-normal leading-[20px] text-[#2094e3] relative text-right whitespace-nowrap z-[413]">
                      دریافت فایل
                    </span>
                    <span className="h-[20px] shrink-0 basis-auto font-['Vazirmatn'] text-[13px] font-normal leading-[20px] text-[#60758a] relative text-left whitespace-nowrap z-[414]">
                      |
                    </span>
                    <span className="flex w-[76px] h-[20px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[13px] font-normal leading-[20px] text-[#2094e3] relative text-right whitespace-nowrap z-[415]">
                      مشاهده آنلاین
                    </span>
                  </div>
                  <div className="flex w-[418px] gap-[16px] items-center shrink-0 flex-nowrap relative z-[416]">
                    <span className="flex w-[67px] h-[20px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[13px] font-normal leading-[20px] text-[#60758a] relative text-right whitespace-nowrap z-[417]">
                      ۹۵۰ کیلوبایت
                    </span>
                    <span className="flex w-[65px] h-[20px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[13px] font-normal leading-[20px] text-[#60758a] relative text-right whitespace-nowrap z-[418]">
                      شهریور ۱۴۰۴
                    </span>
                    <span className="flex w-[218px] h-[22px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-medium leading-[21.875px] text-[#17324d] relative text-right whitespace-nowrap z-[419]">
                      خلاصه مدیریتی عملکرد سالانه استارتاپ
                    </span>
                    <div className="w-[20px] h-[20px] shrink-0 bg-[url(/assets/codia/5ekUzS8OQJ.svg)] bg-cover bg-no-repeat relative overflow-hidden z-[420]" />
                  </div>
                </div>
                <div className="flex pt-[16px] pr-[16px] pb-[16px] pl-[16px] justify-between items-center self-stretch shrink-0 flex-nowrap bg-[#fff] rounded-[12px] border-solid border border-[#e4ebf1] relative z-[421]">
                  <div className="flex w-[175px] gap-[16px] items-center shrink-0 flex-nowrap relative z-[422]">
                    <span className="flex w-[63px] h-[20px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[13px] font-normal leading-[20px] text-[#2094e3] relative text-right whitespace-nowrap z-[423]">
                      دریافت فایل
                    </span>
                    <span className="h-[20px] shrink-0 basis-auto font-['Vazirmatn'] text-[13px] font-normal leading-[20px] text-[#60758a] relative text-left whitespace-nowrap z-[424]">
                      |
                    </span>
                    <span className="flex w-[76px] h-[20px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[13px] font-normal leading-[20px] text-[#2094e3] relative text-right whitespace-nowrap z-[425]">
                      مشاهده آنلاین
                    </span>
                  </div>
                  <div className="flex w-[454px] gap-[16px] items-center shrink-0 flex-nowrap relative z-[426]">
                    <span className="flex w-[58px] h-[20px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[13px] font-normal leading-[20px] text-[#60758a] relative text-right whitespace-nowrap z-[427]">
                      ۲.۱ مگابایت
                    </span>
                    <span className="flex w-[79px] h-[20px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[13px] font-normal leading-[20px] text-[#60758a] relative text-right whitespace-nowrap z-[428]">
                      اردیبهشت ۱۴۰۴
                    </span>
                    <span className="flex w-[249px] h-[22px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-medium leading-[21.875px] text-[#17324d] relative text-right whitespace-nowrap z-[429]">
                      گزارش پایش و سنجش رضایت بهره‌مندان خرد
                    </span>
                    <div className="w-[20px] h-[20px] shrink-0 bg-[url(/assets/codia/KTBiOQQVQs.svg)] bg-cover bg-no-repeat relative overflow-hidden z-[430]" />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-[16px] items-start self-stretch shrink-0 flex-nowrap relative z-[431]">
              <div className="flex flex-col gap-[8px] items-end self-stretch shrink-0 flex-nowrap relative z-[432]">
                <span className="flex w-[192px] h-[38px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[24px] font-bold leading-[37.5px] text-[#17324d] relative text-right whitespace-nowrap z-[433]">
                  آخرین به‌روزرسانی‌ها
                </span>
                <div className="w-[48px] h-[4px] shrink-0 bg-[#2094e3] rounded-[2px] relative z-[434]" />
              </div>
              <div className="flex flex-col gap-[12px] items-start self-stretch shrink-0 flex-nowrap relative z-[435]">
                <div className="flex pt-[20px] pr-[20px] pb-[20px] pl-[20px] flex-col gap-[8px] items-end self-stretch shrink-0 flex-nowrap bg-[#fff] rounded-[12px] border-solid border border-[#e4ebf1] relative z-[436]">
                  <div className="flex justify-between items-center self-stretch shrink-0 flex-nowrap relative z-[437]">
                    <span className="flex w-[82px] h-[17px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[11px] font-normal leading-[17px] text-[#60758a] relative text-right whitespace-nowrap z-[438]">
                      ۲۴ اردیبهشت ۱۴۰۵
                    </span>
                    <span className="flex w-[328px] h-[23px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[15px] font-bold leading-[23px] text-[#17324d] relative text-right whitespace-nowrap z-[439]">
                      تکمیل موفقیت‌آمیز فاز اول زنجیره آموزش کارآفرینی زنان
                    </span>
                  </div>
                  <span className="h-[22px] self-stretch shrink-0 basis-auto font-['Vazirmatn'] text-[13px] font-normal leading-[22px] text-[#60758a] relative text-right whitespace-nowrap z-[440]">
                    دوره جامع بازاریابی محلی و استانداردهای تولید با مشارکت کامل
                    کارآموزان روستای حاجی‌آباد پایان یافت.
                  </span>
                  <span className="flex w-[111px] h-[20px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[13px] font-bold leading-[20px] text-[#2094e3] relative text-right whitespace-nowrap z-[441]">
                    مشاهده کامل خبر ←
                  </span>
                </div>
                <div className="flex pt-[20px] pr-[20px] pb-[20px] pl-[20px] flex-col gap-[8px] items-end self-stretch shrink-0 flex-nowrap bg-[#fff] rounded-[12px] border-solid border border-[#e4ebf1] relative z-[442]">
                  <div className="flex justify-between items-center self-stretch shrink-0 flex-nowrap relative z-[443]">
                    <span className="flex w-[69px] h-[17px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[11px] font-normal leading-[17px] text-[#60758a] relative text-right whitespace-nowrap z-[444]">
                      ۱۰ فروردین ۱۴۰۵
                    </span>
                    <span className="flex w-[338px] h-[23px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[15px] font-bold leading-[23px] text-[#17324d] relative text-right whitespace-nowrap z-[445]">
                      تجهیز کارگاه تولیدی صنایع‌دستی با مشارکت حامیان مادی
                    </span>
                  </div>
                  <span className="h-[22px] self-stretch shrink-0 basis-auto font-['Vazirmatn'] text-[13px] font-normal leading-[22px] text-[#60758a] relative text-right whitespace-nowrap z-[446]">
                    ابزارآلات کارگاهی تخصصی خریداری و در سه مرکز تجمیعی توسعه
                    محلی مستقر و بهره‌برداری شد.
                  </span>
                  <span className="flex w-[111px] h-[20px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[13px] font-bold leading-[20px] text-[#2094e3] relative text-right whitespace-nowrap z-[447]">
                    مشاهده کامل خبر ←
                  </span>
                </div>
                <div className="flex pt-[20px] pr-[20px] pb-[20px] pl-[20px] flex-col gap-[8px] items-end self-stretch shrink-0 flex-nowrap bg-[#fff] rounded-[12px] border-solid border border-[#e4ebf1] relative z-[448]">
                  <div className="flex justify-between items-center self-stretch shrink-0 flex-nowrap relative z-[449]">
                    <span className="flex w-[63px] h-[17px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[11px] font-normal leading-[17px] text-[#60758a] relative text-right whitespace-nowrap z-[450]">
                      ۱۵ اسفند ۱۴۰۴
                    </span>
                    <span className="flex w-[346px] h-[23px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[15px] font-bold leading-[23px] text-[#17324d] relative text-right whitespace-nowrap z-[451]">
                      انتشار ارزیابی اثرگذاری ملموس سالانه توسط ناظران خارجی
                    </span>
                  </div>
                  <span className="h-[22px] self-stretch shrink-0 basis-auto font-['Vazirmatn'] text-[13px] font-normal leading-[22px] text-[#60758a] relative text-right whitespace-nowrap z-[452]">
                    گزارش ارزیابی شاخص‌های پایداری اقتصادی در سطح معیشت خانوارها
                    با تأیید نهایی منتشر گردید.
                  </span>
                  <span className="flex w-[111px] h-[20px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[13px] font-bold leading-[20px] text-[#2094e3] relative text-right whitespace-nowrap z-[453]">
                    مشاهده کامل خبر ←
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex w-[1200px] pt-[48px] pr-[48px] pb-[48px] pl-[48px] flex-col gap-[24px] items-center shrink-0 flex-nowrap bg-[#1e2a38] rounded-[24px] relative z-[454]">
          <div className="flex w-[585px] flex-col gap-[8px] items-center shrink-0 flex-nowrap relative z-[455]">
            <span className="h-[38px] self-stretch shrink-0 basis-auto font-['Vazirmatn'] text-[24px] font-bold leading-[37.5px] text-[#fff] relative text-center whitespace-nowrap z-[456]">
              در پروژه‌های کارآفرینی و اشتغال‌زایی راهکار سبز مشارکت کنید
            </span>
            <span className="h-[22px] self-stretch shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-normal leading-[21.875px] text-[#aebccb] relative text-center whitespace-nowrap z-[457]">
              مشارکت‌ها فقط از طریق پروژه‌های تأییدشده و با واریز مستقیم به
              حساب‌های امانی حاکمیتی انجام می‌پذیرد.
            </span>
          </div>
          <div className="flex w-[100px] h-[100px] p-0 gap-[16px] items-start shrink-0 flex-nowrap relative z-[458]" />
        </div>
      </div>
      <div className="flex pt-[80px] pr-[120px] pb-[40px] pl-[120px] flex-col gap-[32px] items-end self-stretch shrink-0 flex-nowrap bg-[#111e30] relative z-[459]">
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
                <div className="w-[18px] h-[18px] shrink-0 bg-[url(/assets/codia/w3dyd0jOq2.svg)] bg-cover bg-no-repeat relative overflow-hidden z-[467]" />
              </div>
              <div className="flex w-[18px] h-[18px] flex-col justify-center items-center shrink-0 flex-nowrap relative overflow-hidden z-[468]">
                <div className="w-[18px] h-[18px] shrink-0 bg-[url(/assets/codia/B1MyFgKnmL.svg)] bg-cover bg-no-repeat relative overflow-hidden z-[469]" />
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
            <img
              className="w-[210px] h-[70px] shrink-0 object-contain relative z-[487]"
              src="/assets/codia/nqbN231Mja.png"
              alt="سامانه ماه"
            />
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
