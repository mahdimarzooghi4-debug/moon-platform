import React from "react";
import "./index.css";

export default function Main() {
  return (
    <div className="main-container flex w-[1440px] flex-col items-center flex-nowrap bg-[#f7fafc] relative mx-auto my-0">
      <div className="flex h-[80px] pt-0 pr-[120px] pb-0 pl-[120px] justify-between items-center self-stretch shrink-0 flex-nowrap bg-[#fff] border-solid border-t border-t-[#e4ebf1] relative">
        <div className="flex w-[237px] gap-[20px] items-center shrink-0 flex-nowrap relative z-[1]">
          <span className="flex w-[87px] h-[22px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-medium leading-[21.875px] text-[#718096] relative text-right whitespace-nowrap z-[2]">
            بازگشت به ورود
          </span>
          <span className="flex w-[130px] h-[22px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-medium leading-[21.875px] text-[#2094e3] relative text-right whitespace-nowrap z-[3]">
            بازگشت به صفحه اصلی
          </span>
        </div>
        <div className="flex w-[137px] gap-[12px] items-center shrink-0 flex-nowrap relative z-[4]">
          <div className="w-[137px] h-[46px] shrink-0 bg-[url(https://static.codia.ai/image/2026-08-24/jvEr346DYe.png)] bg-cover bg-no-repeat relative z-[5]" />
        </div>
      </div>
      <div className="flex pt-[48px] pr-0 pb-[48px] pl-0 flex-col gap-[32px] items-center self-stretch shrink-0 flex-nowrap relative z-[6]">
        <div className="flex w-[1000px] flex-col gap-[24px] items-start shrink-0 flex-nowrap relative z-[7]">
          <div className="flex flex-col gap-[16px] items-end self-stretch shrink-0 flex-nowrap relative z-[8]">
            <div className="flex justify-between items-center self-stretch shrink-0 flex-nowrap relative z-[9]">
              <div className="flex w-[123px] gap-[12px] items-center shrink-0 flex-nowrap relative z-10">
                <span className="h-[19px] shrink-0 basis-auto font-['Vazirmatn'] text-[12px] font-normal leading-[18.75px] text-[#159455] relative text-left whitespace-nowrap z-[11]">
                  ✓ ذخیره خودکار انجام شد
                </span>
              </div>
              <div className="flex w-[376px] gap-[16px] items-center shrink-0 flex-nowrap relative z-[12]">
                <div className="flex w-[159px] pt-[4px] pr-[12px] pb-[4px] pl-[12px] items-start shrink-0 flex-nowrap bg-[#eaf5fd] rounded-[8px] relative z-[13]">
                  <span className="h-[19px] shrink-0 basis-auto font-['Vazirmatn'] text-[12px] font-medium leading-[18.75px] text-[#2094e3] relative text-left whitespace-nowrap z-[14]">
                    زمان تقریبی تکمیل: ۵ دقیقه
                  </span>
                </div>
                <span className="flex w-[201px] h-[38px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[24px] font-bold leading-[37.5px] text-[#1a202c] relative text-right whitespace-nowrap z-[15]">
                  ایجاد حساب سازمانی
                </span>
              </div>
            </div>
            <span className="flex w-[419px] h-[22px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-normal leading-[21.875px] text-[#718096] relative text-right whitespace-nowrap z-[16]">
              اطلاعات شرکت و نماینده سازمان را تکمیل کنید تا درخواست شما بررسی
              شود.
            </span>
          </div>
          <div className="flex pt-[16px] pr-0 pb-[16px] pl-0 gap-[16px] justify-center items-center self-stretch shrink-0 flex-nowrap relative z-[17]">
            <div className="flex w-[165px] h-[36px] gap-[8px] items-center shrink-0 flex-nowrap relative z-[18]">
              <span className="flex w-[81px] h-[22px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-medium leading-[21.875px] text-[#718096] relative text-right whitespace-nowrap z-[19]">
                بازبینی و ارسال
              </span>
              <div className="flex w-[28px] h-[28px] justify-center items-center shrink-0 flex-nowrap bg-[#e2e8f0] rounded-[14px] relative z-20">
                <span className="flex w-[8px] h-[19px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[12px] font-bold leading-[18.75px] text-[#718096] relative text-right whitespace-nowrap z-[21]">
                  ۴
                </span>
              </div>
              <div className="w-[40px] h-px shrink-0 bg-[url(https://static.codia.ai/image/2026-08-24/ynB3YRtdQd.png)] bg-cover bg-no-repeat relative z-[22]" />
            </div>
            <div className="flex w-[220px] h-[36px] gap-[8px] items-center shrink-0 flex-nowrap relative z-[23]">
              <span className="flex w-[136px] h-[22px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-bold leading-[21.875px] text-[#2094e3] relative text-right whitespace-nowrap z-[24]">
                اطلاعات مالیاتی و مدارک
              </span>
              <div className="flex w-[28px] h-[28px] justify-center items-center shrink-0 flex-nowrap bg-[#eaf5fd] rounded-[14px] border-solid border-[1.5px] border-[#2094e3] relative z-[25]">
                <span className="flex w-[9px] h-[19px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[12px] font-bold leading-[18.75px] text-[#2094e3] relative text-right whitespace-nowrap z-[26]">
                  ۳
                </span>
              </div>
              <div className="w-[40px] h-px shrink-0 bg-[url(https://static.codia.ai/image/2026-08-24/Ar1MXvPXNm.png)] bg-cover bg-no-repeat relative z-[27]" />
            </div>
            <div className="flex w-[167px] h-[36px] gap-[8px] items-center shrink-0 flex-nowrap relative z-[28]">
              <span className="flex w-[83px] h-[22px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-medium leading-[21.875px] text-[#159455] relative text-right whitespace-nowrap z-[29]">
                نماینده سازمان
              </span>
              <div className="flex w-[28px] h-[28px] justify-center items-center shrink-0 flex-nowrap bg-[#eaf8f0] rounded-[14px] relative z-30">
                <span className="h-[19px] shrink-0 basis-auto font-['Vazirmatn'] text-[12px] font-bold leading-[18.75px] text-[#159455] relative text-left whitespace-nowrap z-[31]">
                  ✓
                </span>
              </div>
              <div className="w-[40px] h-px shrink-0 bg-[url(https://static.codia.ai/image/2026-08-24/jue3pfQr4r.png)] bg-cover bg-no-repeat relative z-[32]" />
            </div>
            <div className="flex w-[120px] h-[36px] gap-[8px] items-center shrink-0 flex-nowrap relative z-[33]">
              <span className="flex w-[84px] h-[22px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-medium leading-[21.875px] text-[#159455] relative text-right whitespace-nowrap z-[34]">
                اطلاعات شرکت
              </span>
              <div className="flex w-[28px] h-[28px] justify-center items-center shrink-0 flex-nowrap bg-[#eaf8f0] rounded-[14px] relative z-[35]">
                <span className="h-[19px] shrink-0 basis-auto font-['Vazirmatn'] text-[12px] font-bold leading-[18.75px] text-[#159455] relative text-left whitespace-nowrap z-[36]">
                  ✓
                </span>
              </div>
            </div>
          </div>
          <div className="flex pt-[16px] pr-[16px] pb-[16px] pl-[16px] gap-[12px] items-center self-stretch shrink-0 flex-nowrap bg-[#eaf5fd] rounded-[12px] border-solid border border-[#bee3f8] relative z-[37]">
            <span className="h-[22px] grow shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-normal leading-[21.875px] text-[#2b6cb0] relative text-right whitespace-nowrap z-[38]">
              برای بررسی امکان صدور گواهی ماده ۱۷۲، اطلاعات حقوقی و مالیاتی شرکت
              باید تأیید شود. پرداخت‌های مشمول گواهی مستقیماً به حساب کمیته
              امداد انجام می‌شوند.
            </span>
            <div className="flex w-[24px] h-[24px] justify-center items-center shrink-0 flex-nowrap bg-[#63b3ed] rounded-[12px] relative z-[39]">
              <span className="h-[12px] shrink-0 basis-auto font-['Vazirmatn'] text-[12px] font-bold leading-[12px] text-[#fff] relative text-left whitespace-nowrap z-40">
                ℹ
              </span>
            </div>
          </div>
          <div className="flex pt-[36px] pr-[36px] pb-[36px] pl-[36px] flex-col gap-[28px] items-end self-stretch shrink-0 flex-nowrap bg-[#fff] rounded-[20px] border-solid border border-[#e4ebf1] relative shadow-[0_4px_24px_0_rgba(0,0,0,0.03)] z-[41]">
            <div className="flex flex-col gap-[6px] items-end self-stretch shrink-0 flex-nowrap relative z-[42]">
              <span className="flex w-[225px] h-[28px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[18px] font-bold leading-[28px] text-[#1a202c] relative text-right whitespace-nowrap z-[43]">
                اطلاعات مالیاتی و مدارک شرکت
              </span>
              <div className="h-px self-stretch shrink-0 bg-[url(https://static.codia.ai/image/2026-08-24/PVwpb8Vfot.png)] bg-cover bg-no-repeat relative z-[44]" />
            </div>
            <div className="flex justify-between items-start self-stretch shrink-0 flex-nowrap relative z-[45]">
              <div className="flex w-[456px] flex-col gap-[8px] items-end shrink-0 flex-nowrap relative z-[46]">
                <div className="flex w-[77px] gap-[4px] justify-end items-start shrink-0 flex-nowrap relative z-[47]">
                  <span className="h-[22px] shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-normal leading-[21.875px] text-[#e53e3e] relative text-left whitespace-nowrap z-[48]">
                    *
                  </span>
                  <span className="flex w-[66px] h-[22px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-semibold leading-[21.875px] text-[#2d3748] relative text-right whitespace-nowrap z-[49]">
                    کد اقتصادی
                  </span>
                </div>
                <div className="flex h-[48px] pt-0 pr-[16px] pb-0 pl-[16px] gap-[12px] items-center self-stretch shrink-0 flex-nowrap bg-[#fff] rounded-[12px] border-solid border border-[#e4ebf1] relative z-50">
                  <span className="h-[22px] grow shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-normal leading-[21.875px] text-[#1a202c] relative text-right whitespace-nowrap z-[51]">
                    ۴۱۱۶۸۵۹۳۲۱۴۵
                  </span>
                </div>
              </div>
              <div className="flex w-[456px] flex-col gap-[8px] items-end shrink-0 flex-nowrap relative z-[52]">
                <div className="flex w-[121px] gap-[4px] justify-end items-start shrink-0 flex-nowrap relative z-[53]">
                  <span className="h-[22px] shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-normal leading-[21.875px] text-[#e53e3e] relative text-left whitespace-nowrap z-[54]">
                    *
                  </span>
                  <span className="flex w-[110px] h-[22px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-semibold leading-[21.875px] text-[#2d3748] relative text-right whitespace-nowrap z-[55]">
                    شناسه یا کد مالیاتی
                  </span>
                </div>
                <div className="flex h-[48px] pt-0 pr-[16px] pb-0 pl-[16px] gap-[12px] items-center self-stretch shrink-0 flex-nowrap bg-[#fff] rounded-[12px] border-solid border border-[#e4ebf1] relative z-[56]">
                  <span className="h-[22px] grow shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-normal leading-[21.875px] text-[#1a202c] relative text-right whitespace-nowrap z-[57]">
                    ۴۱۱۵۸۹۶۲۳۷
                  </span>
                </div>
              </div>
            </div>
            <div className="flex justify-between items-start self-stretch shrink-0 flex-nowrap relative z-[58]">
              <div className="flex w-[456px] flex-col gap-[8px] items-end shrink-0 flex-nowrap relative z-[59]">
                <div className="flex w-[136px] gap-[4px] justify-end items-start shrink-0 flex-nowrap relative z-[60]">
                  <span className="h-[22px] shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-normal leading-[21.875px] text-[#e53e3e] relative text-left whitespace-nowrap z-[61]">
                    *
                  </span>
                  <span className="flex w-[125px] h-[22px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-semibold leading-[21.875px] text-[#2d3748] relative text-right whitespace-nowrap z-[62]">
                    وضعیت پرونده مالیاتی
                  </span>
                </div>
                <div className="flex h-[48px] pt-0 pr-[16px] pb-0 pl-[16px] gap-[12px] items-center self-stretch shrink-0 flex-nowrap bg-[#fff] rounded-[12px] border-solid border border-[#e4ebf1] relative z-[63]">
                  <span className="h-[22px] grow shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-normal leading-[21.875px] text-[#1a202c] relative text-right whitespace-nowrap z-[64]">
                    فعال
                  </span>
                </div>
              </div>
              <div className="flex w-[456px] flex-col gap-[8px] items-end shrink-0 flex-nowrap relative z-[65]">
                <div className="flex w-[168px] gap-[4px] justify-end items-start shrink-0 flex-nowrap relative z-[66]">
                  <span className="flex w-[168px] h-[22px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-semibold leading-[21.875px] text-[#2d3748] relative text-right whitespace-nowrap z-[67]">
                    نام اداره امور مالیاتی (اختیاری)
                  </span>
                </div>
                <div className="flex h-[48px] pt-0 pr-[16px] pb-0 pl-[16px] gap-[12px] items-center self-stretch shrink-0 flex-nowrap bg-[#fff] rounded-[12px] border-solid border border-[#e4ebf1] relative z-[68]">
                  <span className="h-[22px] grow shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-normal leading-[21.875px] text-[#1a202c] relative text-right whitespace-nowrap z-[69]">
                    اداره کل امور مالیاتی مودیان بزرگ
                  </span>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-[16px] items-start self-stretch shrink-0 flex-nowrap relative z-[70]">
              <div className="flex flex-col gap-[6px] items-end self-stretch shrink-0 flex-nowrap relative z-[71]">
                <span className="flex w-[230px] h-[28px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[18px] font-bold leading-[28px] text-[#1a202c] relative text-right whitespace-nowrap z-[72]">
                  مدارک و مستندات قانونی شرکت
                </span>
                <span className="flex w-[372px] h-[22px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-normal leading-[21.875px] text-[#718096] relative text-right whitespace-nowrap z-[73]">
                  بارگذاری مدارک ذیل جهت تأیید هویت و فرآیندهای مالی الزامی است.
                </span>
                <div className="h-px self-stretch shrink-0 bg-[url(https://static.codia.ai/image/2026-08-24/LNxW1uNkrf.png)] bg-cover bg-no-repeat relative z-[74]" />
              </div>
              <div className="flex pt-[24px] pr-[24px] pb-[24px] pl-[24px] flex-col gap-[12px] justify-center items-center self-stretch shrink-0 flex-nowrap bg-[#f7fafc] rounded-[16px] border-dashed border-[1.5px] border-[#e4ebf1] relative z-[75]">
                <div className="flex w-[40px] h-[40px] justify-center items-center shrink-0 flex-nowrap bg-[#eaf5fd] rounded-[20px] relative z-[76]">
                  <div className="w-[20px] h-[20px] shrink-0 bg-[url(https://static.codia.ai/image/2026-08-24/kJ5zQ07Kso.png)] bg-cover bg-no-repeat relative overflow-hidden z-[77]" />
                </div>
                <span className="flex w-[116px] h-[22px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-semibold leading-[21.875px] text-[#2094e3] relative text-right whitespace-nowrap z-[78]">
                  بارگذاری مدارک جدید
                </span>
                <span className="flex w-[438px] h-[19px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[12px] font-normal leading-[18.75px] text-[#718096] relative text-right whitespace-nowrap z-[79]">
                  تصویر آگهی تأسیس، اساسنامه، و آخرین تغییرات شرکت را اینجا رها
                  کنید (تا سقف ۱۰ مگابایت)
                </span>
              </div>
              <div className="flex flex-col gap-[10px] items-start self-stretch shrink-0 flex-nowrap relative z-[80]">
                <div className="flex pt-[16px] pr-[16px] pb-[16px] pl-[16px] justify-between items-center self-stretch shrink-0 flex-nowrap bg-[#fff] rounded-[12px] border-solid border border-[#e4ebf1] relative z-[81]">
                  <div className="flex w-[109px] gap-[16px] items-center shrink-0 flex-nowrap relative z-[82]">
                    <div className="flex w-[109px] gap-[12px] items-center shrink-0 flex-nowrap relative z-[83]">
                      <span className="flex w-[27px] h-[20px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[13px] font-normal leading-[20px] text-[#e53e3e] relative text-right whitespace-nowrap z-[84]">
                        حذف
                      </span>
                      <span className="flex w-[70px] h-[20px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[13px] font-normal leading-[20px] text-[#2094e3] relative text-right whitespace-nowrap z-[85]">
                        مشاهده فایل
                      </span>
                    </div>
                  </div>
                  <div className="flex w-[265px] gap-[12px] items-center shrink-0 flex-nowrap relative z-[86]">
                    <div className="flex w-[217px] flex-col gap-[2px] items-end shrink-0 flex-nowrap relative z-[87]">
                      <span className="flex w-[217px] h-[22px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-semibold leading-[21.875px] text-[#1a202c] relative text-right whitespace-nowrap z-[88]">
                        Establishment_Announcement.pdf
                      </span>
                      <span className="flex w-[57px] h-[19px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[12px] font-normal leading-[18.75px] text-[#718096] relative text-right whitespace-nowrap z-[89]">
                        ۲.۴ مگابایت
                      </span>
                    </div>
                    <div className="flex w-[36px] h-[36px] justify-center items-center shrink-0 flex-nowrap bg-[#eaf5fd] rounded-[8px] relative z-[90]">
                      <div className="w-[18px] h-[18px] shrink-0 bg-[url(https://static.codia.ai/image/2026-08-24/19XR7Weo1v.png)] bg-cover bg-no-repeat relative overflow-hidden z-[91]" />
                    </div>
                  </div>
                </div>
                <div className="flex pt-[16px] pr-[16px] pb-[16px] pl-[16px] justify-between items-center self-stretch shrink-0 flex-nowrap bg-[#fff] rounded-[12px] border-solid border border-[#e4ebf1] relative z-[92]">
                  <div className="flex w-[109px] gap-[16px] items-center shrink-0 flex-nowrap relative z-[93]">
                    <div className="flex w-[109px] gap-[12px] items-center shrink-0 flex-nowrap relative z-[94]">
                      <span className="flex w-[27px] h-[20px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[13px] font-normal leading-[20px] text-[#e53e3e] relative text-right whitespace-nowrap z-[95]">
                        حذف
                      </span>
                      <span className="flex w-[70px] h-[20px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[13px] font-normal leading-[20px] text-[#2094e3] relative text-right whitespace-nowrap z-[96]">
                        مشاهده فایل
                      </span>
                    </div>
                  </div>
                  <div className="flex w-[203px] gap-[12px] items-center shrink-0 flex-nowrap relative z-[97]">
                    <div className="flex w-[155px] flex-col gap-[2px] items-end shrink-0 flex-nowrap relative z-[98]">
                      <span className="flex w-[155px] h-[22px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-semibold leading-[21.875px] text-[#1a202c] relative text-right whitespace-nowrap z-[99]">
                        Latest_Changes_Doc.jpg
                      </span>
                      <span className="flex w-[55px] h-[19px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[12px] font-normal leading-[18.75px] text-[#718096] relative text-right whitespace-nowrap z-[100]">
                        ۴.۱ مگابایت
                      </span>
                    </div>
                    <div className="flex w-[36px] h-[36px] justify-center items-center shrink-0 flex-nowrap bg-[#eaf5fd] rounded-[8px] relative z-[101]">
                      <div className="w-[18px] h-[18px] shrink-0 bg-[url(https://static.codia.ai/image/2026-08-24/y8hB75TrCP.png)] bg-cover bg-no-repeat relative overflow-hidden z-[102]" />
                    </div>
                  </div>
                </div>
                <div className="flex pt-[16px] pr-[16px] pb-[16px] pl-[16px] justify-between items-center self-stretch shrink-0 flex-nowrap bg-[#fff] rounded-[12px] border-solid border border-[#e4ebf1] relative z-[103]">
                  <div className="flex w-[109px] gap-[16px] items-center shrink-0 flex-nowrap relative z-[104]">
                    <div className="flex w-[109px] gap-[12px] items-center shrink-0 flex-nowrap relative z-[105]">
                      <span className="flex w-[27px] h-[20px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[13px] font-normal leading-[20px] text-[#e53e3e] relative text-right whitespace-nowrap z-[106]">
                        حذف
                      </span>
                      <span className="flex w-[70px] h-[20px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[13px] font-normal leading-[20px] text-[#2094e3] relative text-right whitespace-nowrap z-[107]">
                        مشاهده فایل
                      </span>
                    </div>
                  </div>
                  <div className="flex w-[192px] gap-[12px] items-center shrink-0 flex-nowrap relative z-[108]">
                    <div className="flex w-[144px] flex-col gap-[2px] items-end shrink-0 flex-nowrap relative z-[109]">
                      <span className="flex w-[144px] h-[22px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-semibold leading-[21.875px] text-[#1a202c] relative text-right whitespace-nowrap z-[110]">
                        Company_Statutes.pdf
                      </span>
                      <span className="flex w-[57px] h-[19px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[12px] font-normal leading-[18.75px] text-[#718096] relative text-right whitespace-nowrap z-[111]">
                        ۹.۸ مگابایت
                      </span>
                    </div>
                    <div className="flex w-[36px] h-[36px] justify-center items-center shrink-0 flex-nowrap bg-[#eaf5fd] rounded-[8px] relative z-[112]">
                      <div className="w-[18px] h-[18px] shrink-0 bg-[url(https://static.codia.ai/image/2026-08-24/xwX8P2DJs7.png)] bg-cover bg-no-repeat relative overflow-hidden z-[113]" />
                    </div>
                  </div>
                </div>
                <div className="flex pt-[16px] pr-[16px] pb-[16px] pl-[16px] justify-between items-center self-stretch shrink-0 flex-nowrap bg-[#fff] rounded-[12px] border-solid border border-[#e4ebf1] relative z-[114]">
                  <div className="flex w-[109px] gap-[16px] items-center shrink-0 flex-nowrap relative z-[115]">
                    <div className="flex w-[109px] gap-[12px] items-center shrink-0 flex-nowrap relative z-[116]">
                      <span className="flex w-[27px] h-[20px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[13px] font-normal leading-[20px] text-[#e53e3e] relative text-right whitespace-nowrap z-[117]">
                        حذف
                      </span>
                      <span className="flex w-[70px] h-[20px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[13px] font-normal leading-[20px] text-[#2094e3] relative text-right whitespace-nowrap z-[118]">
                        مشاهده فایل
                      </span>
                    </div>
                  </div>
                  <div className="flex w-[226px] gap-[12px] items-center shrink-0 flex-nowrap relative z-[119]">
                    <div className="flex w-[178px] flex-col gap-[2px] items-end shrink-0 flex-nowrap relative z-[120]">
                      <span className="flex w-[178px] h-[22px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-semibold leading-[21.875px] text-[#1a202c] relative text-right whitespace-nowrap z-[121]">
                        Representative_ID_Card.png
                      </span>
                      <span className="flex w-[54px] h-[19px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[12px] font-normal leading-[18.75px] text-[#718096] relative text-right whitespace-nowrap z-[122]">
                        ۱.۲ مگابایت
                      </span>
                    </div>
                    <div className="flex w-[36px] h-[36px] justify-center items-center shrink-0 flex-nowrap bg-[#eaf5fd] rounded-[8px] relative z-[123]">
                      <div className="w-[18px] h-[18px] shrink-0 bg-[url(https://static.codia.ai/image/2026-08-24/nYPmESVZoR.png)] bg-cover bg-no-repeat relative overflow-hidden z-[124]" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="h-[100px] self-stretch shrink-0 relative z-[125]">
              <div className="flex w-[928px] flex-col gap-[8px] items-start flex-nowrap relative z-[126] mt-0 mr-0 mb-0 ml-0">
                <div className="flex w-[152px] gap-[4px] justify-end items-start shrink-0 flex-nowrap relative z-[127]">
                  <span className="flex w-[152px] h-[22px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-semibold leading-[21.875px] text-[#2d3748] relative text-right whitespace-nowrap z-[128]">
                    توضیحات تکمیلی (اختیاری)
                  </span>
                </div>
                <div className="flex h-[48px] pt-0 pr-[16px] pb-0 pl-[16px] gap-[12px] items-center self-stretch shrink-0 flex-nowrap bg-[#fff] rounded-[12px] border-solid border border-[#e4ebf1] relative z-[129]">
                  <span className="h-[22px] grow shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-normal leading-[21.875px] text-[#a0aec0] relative text-right whitespace-nowrap z-[130]">
                    در صورت نیاز توضیحات تکمیلی را وارد کنید.
                  </span>
                </div>
              </div>
            </div>
            <div className="flex pt-[24px] pr-0 pb-0 pl-0 justify-between items-center self-stretch shrink-0 flex-nowrap border-solid border-b border-b-[#e4ebf1] relative z-[131]">
              <div className="flex w-[230px] gap-[16px] items-center shrink-0 flex-nowrap relative z-[132]">
                <div className="flex w-[98px] pt-[11px] pr-[20px] pb-[11px] pl-[20px] items-center shrink-0 flex-nowrap rounded-[12px] border-solid border border-[#e2e8f0] relative z-[133]">
                  <span className="flex w-[58px] h-[22px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-semibold leading-[21.875px] text-[#2d3748] relative text-right whitespace-nowrap z-[134]">
                    مرحله قبل
                  </span>
                </div>
                <div className="flex w-[116px] pt-[11px] pr-[20px] pb-[11px] pl-[20px] gap-[8px] justify-center items-center shrink-0 flex-nowrap bg-[#2094e3] rounded-[12px] relative z-[135]">
                  <span className="flex w-[76px] h-[22px] justify-center items-start shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-medium leading-[22px] text-[#fff] relative text-center whitespace-nowrap z-[136]">
                    ذخیره و ادامه
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex pt-[24px] pr-0 pb-[40px] pl-0 flex-col gap-[16px] items-start self-stretch shrink-0 flex-nowrap relative z-[137]">
        <div className="flex flex-col gap-[12px] items-center self-stretch shrink-0 flex-nowrap relative z-[138]">
          <span className="flex w-[347px] h-[19px] justify-center items-start shrink-0 basis-auto font-['Vazirmatn'] text-[12px] font-normal leading-[18.75px] text-[#a0aec0] relative text-center whitespace-nowrap z-[139]">
            اطلاعات شما مطابق سیاست حریم خصوصی سامانه ماه محافظت می‌شود.
          </span>
          <div className="flex w-[180px] gap-[16px] items-center shrink-0 flex-nowrap relative z-[140]">
            <span className="flex w-[76px] h-[19px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[12px] font-normal leading-[18.75px] text-[#718096] relative text-right whitespace-nowrap z-[141]">
              قوانین و مقررات
            </span>
            <span className="h-[19px] shrink-0 basis-auto font-['Vazirmatn'] text-[12px] font-normal leading-[18.75px] text-[#a0aec0] relative text-left whitespace-nowrap z-[142]">
              |
            </span>
            <span className="flex w-[69px] h-[19px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[12px] font-normal leading-[18.75px] text-[#718096] relative text-right whitespace-nowrap z-[143]">
              حریم خصوصی
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
