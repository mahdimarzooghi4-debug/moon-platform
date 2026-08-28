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
          <img
            src="/assets/codia/GauVhG5t7x.png"
            alt="لوگوی سامانه ماه"
            className="w-[137px] h-[46px] shrink-0 object-contain relative z-[16]"
          />
        </div>
      </div>
      <div className="flex pt-[48px] pr-[120px] pb-[48px] pl-[120px] flex-col gap-[20px] items-start self-stretch shrink-0 flex-nowrap bg-[#fcfbf8] border-solid border-t border-t-[#e4ebf1] relative z-[17]">
        <div className="flex justify-end items-start self-stretch shrink-0 flex-nowrap relative z-[18]">
          <span className="flex w-[104px] h-[19px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[12px] font-normal leading-[18.75px] text-[#60758a] relative text-right whitespace-nowrap z-[19]">
            صفحه اصلی / پروژه‌ها
          </span>
        </div>
        <div className="flex justify-between items-center self-stretch shrink-0 flex-nowrap relative z-20">
          <div className="flex w-[266px] gap-[24px] items-center shrink-0 flex-nowrap relative z-[21]">
            <div className="flex w-[50px] flex-col gap-[4px] items-center shrink-0 flex-nowrap relative z-[22]">
              <span className="h-[31px] shrink-0 basis-auto font-['Vazirmatn'] text-[20px] font-bold leading-[31px] text-[#17324d] relative text-left whitespace-nowrap z-[23]">
                ۲۴
              </span>
              <span className="h-[19px] shrink-0 basis-auto font-['Vazirmatn'] text-[12px] font-normal leading-[18.75px] text-[#60758a] relative text-left whitespace-nowrap z-[24]">
                پروژه فعال
              </span>
            </div>
            <div className="w-px h-[40px] shrink-0 bg-[#e4ebf1] relative z-[25]" />
            <div className="flex w-[56px] flex-col gap-[4px] items-center shrink-0 flex-nowrap relative z-[26]">
              <span className="h-[31px] shrink-0 basis-auto font-['Vazirmatn'] text-[20px] font-bold leading-[31px] text-[#17324d] relative text-left whitespace-nowrap z-[27]">
                ۱۲٬۸۴۰
              </span>
              <span className="h-[19px] shrink-0 basis-auto font-['Vazirmatn'] text-[12px] font-normal leading-[18.75px] text-[#60758a] relative text-left whitespace-nowrap z-[28]">
                فرد بهره‌مند
              </span>
            </div>
            <div className="w-px h-[40px] shrink-0 bg-[#e4ebf1] relative z-[29]" />
            <div className="flex w-[62px] flex-col gap-[4px] items-center shrink-0 flex-nowrap relative z-30">
              <span className="h-[31px] shrink-0 basis-auto font-['Vazirmatn'] text-[20px] font-bold leading-[31px] text-[#17324d] relative text-left whitespace-nowrap z-[31]">
                ۳۴۶
              </span>
              <span className="h-[19px] shrink-0 basis-auto font-['Vazirmatn'] text-[12px] font-normal leading-[18.75px] text-[#60758a] relative text-left whitespace-nowrap z-[32]">
                فرصت شغلی
              </span>
            </div>
          </div>
          <div className="flex w-[447px] flex-col gap-[8px] items-end shrink-0 flex-nowrap relative z-[33]">
            <span className="flex w-[274px] h-[50px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[32px] font-extrabold leading-[50px] text-[#17324d] relative text-right whitespace-nowrap z-[34]">
              پروژه‌های اثر اجتماعی
            </span>
            <span className="flex w-[447px] h-[23px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[15px] font-normal leading-[23px] text-[#60758a] relative text-right whitespace-nowrap z-[35]">
              پروژه‌ای را انتخاب کنید که اثر آن از قبل مشخص، تأیید و
              قابل‌اندازه‌گیری است.
            </span>
          </div>
        </div>
      </div>
      <div className="flex pt-[24px] pr-[120px] pb-[16px] pl-[120px] flex-col gap-[16px] items-start self-stretch shrink-0 flex-nowrap bg-[#fff] border-solid border border-[#e4ebf1] relative z-[36]">
        <div className="h-[44px] self-stretch shrink-0 bg-[#e4ebf1] rounded-[12px] relative z-[37]" />
        <div className="flex gap-[12px] items-start self-stretch shrink-0 flex-nowrap relative z-[38]">
          <div className="h-[38px] grow shrink-0 basis-0 bg-[#e4ebf1] rounded-[10px] relative z-[39]" />
          <div className="h-[38px] grow shrink-0 basis-0 bg-[#e4ebf1] rounded-[10px] relative z-40" />
          <div className="h-[38px] grow shrink-0 basis-0 bg-[#e4ebf1] rounded-[10px] relative z-[41]" />
          <div className="h-[38px] grow shrink-0 basis-0 bg-[#e4ebf1] rounded-[10px] relative z-[42]" />
          <div className="h-[38px] grow shrink-0 basis-0 bg-[#e4ebf1] rounded-[10px] relative z-[43]" />
          <div className="h-[38px] grow shrink-0 basis-0 bg-[#e4ebf1] rounded-[10px] relative z-[44]" />
        </div>
      </div>
      <div className="flex pt-[32px] pr-[120px] pb-[48px] pl-[120px] items-start self-stretch shrink-0 flex-nowrap relative z-[45]">
        <div className="flex gap-[24px] items-start grow shrink-0 basis-0 flex-wrap relative z-[46]">
          <div className="flex w-[384px] pt-[24px] pr-[24px] pb-[24px] pl-[24px] flex-col gap-[20px] items-start flex-nowrap bg-[#fcfbf8] rounded-[24px] border-solid border border-[#e4ebf1] relative shadow-[0_4px_16px_0_rgba(22,45,71,0.08)] z-[47]">
            <div className="h-[180px] self-stretch shrink-0 bg-[#e4ebf1] rounded-[16px] relative z-[48]" />
            <div className="flex flex-col gap-[8px] items-end self-stretch shrink-0 flex-nowrap relative z-[49]">
              <div className="w-[140px] h-[16px] shrink-0 bg-[#e4ebf1] rounded-[4px] relative z-50" />
              <div className="h-[24px] self-stretch shrink-0 bg-[#e4ebf1] rounded-[4px] relative z-[51]" />
              <div className="w-[100px] h-[14px] shrink-0 bg-[#e4ebf1] rounded-[4px] relative z-[52]" />
            </div>
            <div className="flex flex-col gap-[12px] items-start self-stretch shrink-0 flex-nowrap relative z-[53]">
              <div className="h-[40px] self-stretch shrink-0 bg-[#e4ebf1] rounded-[4px] relative z-[54]" />
              <div className="h-[40px] self-stretch shrink-0 bg-[#e4ebf1] rounded-[4px] relative z-[55]" />
            </div>
            <div className="h-[44px] self-stretch shrink-0 bg-[#e4ebf1] rounded-[12px] relative z-[56]" />
          </div>
          <div className="flex w-[384px] pt-[24px] pr-[24px] pb-[24px] pl-[24px] flex-col gap-[20px] items-start flex-nowrap bg-[#fcfbf8] rounded-[24px] border-solid border border-[#e4ebf1] relative shadow-[0_4px_16px_0_rgba(22,45,71,0.08)] z-[77]">
            <div className="h-[180px] self-stretch shrink-0 bg-[#e4ebf1] rounded-[16px] relative z-[78]" />
            <div className="flex flex-col gap-[8px] items-end self-stretch shrink-0 flex-nowrap relative z-[79]">
              <div className="w-[140px] h-[16px] shrink-0 bg-[#e4ebf1] rounded-[4px] relative z-[80]" />
              <div className="h-[24px] self-stretch shrink-0 bg-[#e4ebf1] rounded-[4px] relative z-[81]" />
              <div className="w-[100px] h-[14px] shrink-0 bg-[#e4ebf1] rounded-[4px] relative z-[82]" />
            </div>
            <div className="flex flex-col gap-[12px] items-start self-stretch shrink-0 flex-nowrap relative z-[83]">
              <div className="h-[40px] self-stretch shrink-0 bg-[#e4ebf1] rounded-[4px] relative z-[84]" />
              <div className="h-[40px] self-stretch shrink-0 bg-[#e4ebf1] rounded-[4px] relative z-[85]" />
            </div>
            <div className="h-[44px] self-stretch shrink-0 bg-[#e4ebf1] rounded-[12px] relative z-[86]" />
          </div>
          <div className="flex w-[384px] pt-[24px] pr-[24px] pb-[24px] pl-[24px] flex-col gap-[20px] items-start flex-nowrap bg-[#fcfbf8] rounded-[24px] border-solid border border-[#e4ebf1] relative shadow-[0_4px_16px_0_rgba(22,45,71,0.08)] z-[57]">
            <div className="h-[180px] self-stretch shrink-0 bg-[#e4ebf1] rounded-[16px] relative z-[58]" />
            <div className="flex flex-col gap-[8px] items-end self-stretch shrink-0 flex-nowrap relative z-[59]">
              <div className="w-[140px] h-[16px] shrink-0 bg-[#e4ebf1] rounded-[4px] relative z-[60]" />
              <div className="h-[24px] self-stretch shrink-0 bg-[#e4ebf1] rounded-[4px] relative z-[61]" />
              <div className="w-[100px] h-[14px] shrink-0 bg-[#e4ebf1] rounded-[4px] relative z-[62]" />
            </div>
            <div className="flex flex-col gap-[12px] items-start self-stretch shrink-0 flex-nowrap relative z-[63]">
              <div className="h-[40px] self-stretch shrink-0 bg-[#e4ebf1] rounded-[4px] relative z-[64]" />
              <div className="h-[40px] self-stretch shrink-0 bg-[#e4ebf1] rounded-[4px] relative z-[65]" />
            </div>
            <div className="h-[44px] self-stretch shrink-0 bg-[#e4ebf1] rounded-[12px] relative z-[66]" />
          </div>
          <div className="flex w-[384px] pt-[24px] pr-[24px] pb-[24px] pl-[24px] flex-col gap-[20px] items-start flex-nowrap bg-[#fcfbf8] rounded-[24px] border-solid border border-[#e4ebf1] relative shadow-[0_4px_16px_0_rgba(22,45,71,0.08)] z-[87]">
            <div className="h-[180px] self-stretch shrink-0 bg-[#e4ebf1] rounded-[16px] relative z-[88]" />
            <div className="flex flex-col gap-[8px] items-end self-stretch shrink-0 flex-nowrap relative z-[89]">
              <div className="w-[140px] h-[16px] shrink-0 bg-[#e4ebf1] rounded-[4px] relative z-[90]" />
              <div className="h-[24px] self-stretch shrink-0 bg-[#e4ebf1] rounded-[4px] relative z-[91]" />
              <div className="w-[100px] h-[14px] shrink-0 bg-[#e4ebf1] rounded-[4px] relative z-[92]" />
            </div>
            <div className="flex flex-col gap-[12px] items-start self-stretch shrink-0 flex-nowrap relative z-[93]">
              <div className="h-[40px] self-stretch shrink-0 bg-[#e4ebf1] rounded-[4px] relative z-[94]" />
              <div className="h-[40px] self-stretch shrink-0 bg-[#e4ebf1] rounded-[4px] relative z-[95]" />
            </div>
            <div className="h-[44px] self-stretch shrink-0 bg-[#e4ebf1] rounded-[12px] relative z-[96]" />
          </div>
          <div className="flex w-[384px] pt-[24px] pr-[24px] pb-[24px] pl-[24px] flex-col gap-[20px] items-start flex-nowrap bg-[#fcfbf8] rounded-[24px] border-solid border border-[#e4ebf1] relative shadow-[0_4px_16px_0_rgba(22,45,71,0.08)] z-[67]">
            <div className="h-[180px] self-stretch shrink-0 bg-[#e4ebf1] rounded-[16px] relative z-[68]" />
            <div className="flex flex-col gap-[8px] items-end self-stretch shrink-0 flex-nowrap relative z-[69]">
              <div className="w-[140px] h-[16px] shrink-0 bg-[#e4ebf1] rounded-[4px] relative z-[70]" />
              <div className="h-[24px] self-stretch shrink-0 bg-[#e4ebf1] rounded-[4px] relative z-[71]" />
              <div className="w-[100px] h-[14px] shrink-0 bg-[#e4ebf1] rounded-[4px] relative z-[72]" />
            </div>
            <div className="flex flex-col gap-[12px] items-start self-stretch shrink-0 flex-nowrap relative z-[73]">
              <div className="h-[40px] self-stretch shrink-0 bg-[#e4ebf1] rounded-[4px] relative z-[74]" />
              <div className="h-[40px] self-stretch shrink-0 bg-[#e4ebf1] rounded-[4px] relative z-[75]" />
            </div>
            <div className="h-[44px] self-stretch shrink-0 bg-[#e4ebf1] rounded-[12px] relative z-[76]" />
          </div>
          <div className="flex w-[384px] pt-[24px] pr-[24px] pb-[24px] pl-[24px] flex-col gap-[20px] items-start flex-nowrap bg-[#fcfbf8] rounded-[24px] border-solid border border-[#e4ebf1] relative shadow-[0_4px_16px_0_rgba(22,45,71,0.08)] z-[97]">
            <div className="h-[180px] self-stretch shrink-0 bg-[#e4ebf1] rounded-[16px] relative z-[98]" />
            <div className="flex flex-col gap-[8px] items-end self-stretch shrink-0 flex-nowrap relative z-[99]">
              <div className="w-[140px] h-[16px] shrink-0 bg-[#e4ebf1] rounded-[4px] relative z-[100]" />
              <div className="h-[24px] self-stretch shrink-0 bg-[#e4ebf1] rounded-[4px] relative z-[101]" />
              <div className="w-[100px] h-[14px] shrink-0 bg-[#e4ebf1] rounded-[4px] relative z-[102]" />
            </div>
            <div className="flex flex-col gap-[12px] items-start self-stretch shrink-0 flex-nowrap relative z-[103]">
              <div className="h-[40px] self-stretch shrink-0 bg-[#e4ebf1] rounded-[4px] relative z-[104]" />
              <div className="h-[40px] self-stretch shrink-0 bg-[#e4ebf1] rounded-[4px] relative z-[105]" />
            </div>
            <div className="h-[44px] self-stretch shrink-0 bg-[#e4ebf1] rounded-[12px] relative z-[106]" />
          </div>
        </div>
      </div>
      <div className="flex pt-[80px] pr-[120px] pb-[40px] pl-[120px] flex-col gap-[64px] items-start self-stretch shrink-0 flex-nowrap bg-[#111e30] relative z-[107]">
        <div className="flex gap-[48px] items-start self-stretch shrink-0 flex-nowrap relative z-[108]">
          <div className="flex w-[220px] h-[182px] flex-col gap-[12px] items-end shrink-0 flex-nowrap relative z-[109]">
            <span className="flex w-[59px] h-[22px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-bold leading-[21.875px] text-[#fff] relative text-right whitespace-nowrap z-[110]">
              ارتباط با ما
            </span>
            <span className="flex w-[115px] h-[20px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[13px] font-normal leading-[20px] text-[#e4ebf1] relative text-right whitespace-nowrap z-[111]">
              تلفن: ۰۲۱-۸۸۸۸۸۸۸۸
            </span>
            <span className="flex w-[156px] h-[20px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[13px] font-normal leading-[20px] text-[#e4ebf1] relative text-right whitespace-nowrap z-[112]">
              ایمیل: info@mahplatform.ir
            </span>
            <div className="flex w-[48px] pt-[8px] pr-0 pb-0 pl-0 gap-[12px] items-center shrink-0 flex-nowrap relative z-[113]">
              <div className="flex w-[18px] h-[18px] flex-col justify-center items-center shrink-0 flex-nowrap relative overflow-hidden z-[114]">
                <div className="w-[18px] h-[18px] shrink-0 bg-[url(/assets/codia/c2dyX7OPLg.svg)] bg-cover bg-no-repeat relative overflow-hidden z-[115]" />
              </div>
              <div className="flex w-[18px] h-[18px] flex-col justify-center items-center shrink-0 flex-nowrap relative overflow-hidden z-[116]">
                <div className="w-[18px] h-[18px] shrink-0 bg-[url(/assets/codia/YOpi6o9C2x.svg)] bg-cover bg-no-repeat relative overflow-hidden z-[117]" />
              </div>
            </div>
          </div>
          <div className="flex w-[150px] h-[182px] flex-col gap-[12px] items-end shrink-0 flex-nowrap relative z-[118]">
            <span className="flex w-[39px] h-[22px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-bold leading-[21.875px] text-[#fff] relative text-right whitespace-nowrap z-[119]">
              حقوقی
            </span>
            <span className="flex w-[82px] h-[20px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[13px] font-normal leading-[20px] text-[#e4ebf1] relative text-right whitespace-nowrap z-[120]">
              قوانین و مقررات
            </span>
            <span className="flex w-[75px] h-[20px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[13px] font-normal leading-[20px] text-[#e4ebf1] relative text-right whitespace-nowrap z-[121]">
              حریم خصوصی
            </span>
          </div>
          <div className="flex w-[160px] h-[182px] flex-col gap-[12px] items-end shrink-0 flex-nowrap relative z-[122]">
            <span className="flex w-[49px] h-[22px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-bold leading-[21.875px] text-[#fff] relative text-right whitespace-nowrap z-[123]">
              پشتیبانی
            </span>
            <span className="flex w-[55px] h-[20px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[13px] font-normal leading-[20px] text-[#e4ebf1] relative text-right whitespace-nowrap z-[124]">
              تماس با ما
            </span>
            <span className="flex w-[77px] h-[20px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[13px] font-normal leading-[20px] text-[#e4ebf1] relative text-right whitespace-nowrap z-[125]">
              سؤالات متداول
            </span>
            <span className="flex w-[82px] h-[20px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[13px] font-normal leading-[20px] text-[#e4ebf1] relative text-right whitespace-nowrap z-[126]">
              پیگیری مشارکت
            </span>
          </div>
          <div className="flex w-[180px] flex-col gap-[12px] items-end shrink-0 flex-nowrap relative z-[127]">
            <span className="flex w-[83px] h-[22px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-bold leading-[21.875px] text-[#fff] relative text-right whitespace-nowrap z-[128]">
              دسترسی سریع
            </span>
            <span className="flex w-[38px] h-[20px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[13px] font-normal leading-[20px] text-[#e4ebf1] relative text-right whitespace-nowrap z-[129]">
              پروژه‌ها
            </span>
            <span className="flex w-[69px] h-[20px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[13px] font-normal leading-[20px] text-[#e4ebf1] relative text-right whitespace-nowrap z-[130]">
              برای شرکت‌ها
            </span>
            <span className="flex w-[71px] h-[20px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[13px] font-normal leading-[20px] text-[#e4ebf1] relative text-right whitespace-nowrap z-[131]">
              نحوه مشارکت
            </span>
            <span className="flex w-[84px] h-[20px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[13px] font-normal leading-[20px] text-[#e4ebf1] relative text-right whitespace-nowrap z-[132]">
              ثبت‌نام استارتاپ
            </span>
            <span className="flex w-[80px] h-[20px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[13px] font-normal leading-[20px] text-[#e4ebf1] relative text-right whitespace-nowrap z-[133]">
              اخبار و رویدادها
            </span>
          </div>
          <div className="flex w-[298px] h-[182px] flex-col gap-[14px] items-end shrink-0 flex-nowrap relative z-[134]">
            <img
              src="/assets/codia/gzsynta3Fc.png"
              alt="لوگوی سامانه ماه"
              className="w-[210px] h-[70px] shrink-0 object-contain relative z-[135]"
            />
            <span className="flex w-[298px] h-[44px] justify-end items-start self-stretch shrink-0 font-['Vazirmatn'] text-[13px] font-normal leading-[22px] text-[#e4ebf1] relative text-right z-[136]">
              سامانه مشارکت در پروژه‌های اثر اجتماعی با مسیر مالی شفاف و اثر
              قابل‌اندازه‌گیری.
            </span>
          </div>
        </div>
        <div className="flex pt-[20px] pr-0 pb-0 pl-0 flex-col gap-[4px] items-center self-stretch shrink-0 flex-nowrap border-solid border-b border-b-[rgba(255,255,255,0.12)] relative z-[137]">
          <span className="flex w-[219px] h-[19px] justify-center items-start shrink-0 basis-auto font-['Vazirmatn'] text-[12px] font-normal leading-[18.75px] text-[#e4ebf1] relative text-center whitespace-nowrap z-[138]">
            طراحی و توسعه با هدف ارتقای عدالت اجتماعی
          </span>
          <span className="flex w-[203px] h-[19px] justify-center items-start shrink-0 basis-auto font-['Vazirmatn'] text-[12px] font-normal leading-[18.75px] text-[#e4ebf1] relative text-center whitespace-nowrap z-[139]">
            تمامی حقوق برای سامانه ماه محفوظ است.
          </span>
        </div>
      </div>
    </div>
  );
}
