import React from "react";
import "./index.css";

export default function Main() {
  return (
    <div className="main-container flex w-[1440px] flex-col justify-between items-center flex-nowrap bg-[#f7fafc] relative mx-auto my-0">
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
          <div className="w-[137px] h-[46px] shrink-0 bg-[url(https://static.codia.ai/image/2026-08-24/d6V0H5TQKo.png)] bg-cover bg-no-repeat relative z-[5]" />
        </div>
      </div>
      <div className="flex pt-[32px] pr-0 pb-[32px] pl-0 flex-col gap-[24px] items-center self-stretch shrink-0 flex-nowrap relative z-[6]">
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
              <div className="w-[40px] h-px shrink-0 bg-[url(https://static.codia.ai/image/2026-08-24/4ZkQvC6w5h.png)] bg-cover bg-no-repeat relative z-[22]" />
            </div>
            <div className="flex w-[219px] h-[36px] gap-[8px] items-center shrink-0 flex-nowrap relative z-[23]">
              <span className="flex w-[135px] h-[22px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-medium leading-[21.875px] text-[#718096] relative text-right whitespace-nowrap z-[24]">
                اطلاعات مالیاتی و مدارک
              </span>
              <div className="flex w-[28px] h-[28px] justify-center items-center shrink-0 flex-nowrap bg-[#e2e8f0] rounded-[14px] relative z-[25]">
                <span className="flex w-[9px] h-[19px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[12px] font-bold leading-[18.75px] text-[#718096] relative text-right whitespace-nowrap z-[26]">
                  ۳
                </span>
              </div>
              <div className="w-[40px] h-px shrink-0 bg-[url(https://static.codia.ai/image/2026-08-24/8UwegcfV8f.png)] bg-cover bg-no-repeat relative z-[27]" />
            </div>
            <div className="flex w-[167px] h-[36px] gap-[8px] items-center shrink-0 flex-nowrap relative z-[28]">
              <span className="flex w-[83px] h-[22px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-medium leading-[21.875px] text-[#718096] relative text-right whitespace-nowrap z-[29]">
                نماینده سازمان
              </span>
              <div className="flex w-[28px] h-[28px] justify-center items-center shrink-0 flex-nowrap bg-[#e2e8f0] rounded-[14px] relative z-30">
                <span className="flex w-[7px] h-[19px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[12px] font-bold leading-[18.75px] text-[#718096] relative text-right whitespace-nowrap z-[31]">
                  ۲
                </span>
              </div>
              <div className="w-[40px] h-px shrink-0 bg-[url(https://static.codia.ai/image/2026-08-24/t6qmi3G2P7.png)] bg-cover bg-no-repeat relative z-[32]" />
            </div>
            <div className="flex w-[120px] h-[36px] gap-[8px] items-center shrink-0 flex-nowrap relative z-[33]">
              <span className="flex w-[84px] h-[22px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-bold leading-[21.875px] text-[#2094e3] relative text-right whitespace-nowrap z-[34]">
                اطلاعات شرکت
              </span>
              <div className="flex w-[28px] h-[28px] justify-center items-center shrink-0 flex-nowrap bg-[#eaf5fd] rounded-[14px] border-solid border-[1.5px] border-[#2094e3] relative z-[35]">
                <span className="flex w-[4px] h-[19px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[12px] font-bold leading-[18.75px] text-[#2094e3] relative text-right whitespace-nowrap z-[36]">
                  ۱
                </span>
              </div>
            </div>
          </div>
          <div className="flex pt-[36px] pr-[36px] pb-[36px] pl-[36px] flex-col gap-[24px] items-end self-stretch shrink-0 flex-nowrap bg-[#fff] rounded-[20px] border-solid border border-[#e4ebf1] relative shadow-[0_4px_24px_0_rgba(0,0,0,0.03)] z-[37]">
            <div className="flex flex-col gap-[6px] items-end self-stretch shrink-0 flex-nowrap relative z-[38]">
              <span className="flex w-[143px] h-[28px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[18px] font-bold leading-[28px] text-[#1a202c] relative text-right whitespace-nowrap z-[39]">
                اطلاعات ثبتی شرکت
              </span>
              <span className="flex w-[290px] h-[22px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-normal leading-[21.875px] text-[#718096] relative text-right whitespace-nowrap z-40">
                اطلاعات را مطابق آخرین آگهی رسمی شرکت وارد کنید.
              </span>
              <div className="h-px self-stretch shrink-0 bg-[url(https://static.codia.ai/image/2026-08-24/OMtErDig8N.png)] bg-cover bg-no-repeat relative z-[41]" />
            </div>
            <div className="h-[100px] self-stretch shrink-0 relative z-[42]">
              <div className="flex w-[928px] flex-col gap-[8px] items-end flex-nowrap relative z-[43] mt-0 mr-0 mb-0 ml-0">
                <div className="flex w-[113px] gap-[4px] justify-end items-start shrink-0 flex-nowrap relative z-[44]">
                  <span className="h-[22px] shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-normal leading-[21.875px] text-[#e53e3e] relative text-left whitespace-nowrap z-[45]">
                    *
                  </span>
                  <span className="flex w-[102px] h-[22px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-semibold leading-[21.875px] text-[#2d3748] relative text-right whitespace-nowrap z-[46]">
                    شناسه ملی شرکت
                  </span>
                </div>
                <div className="flex h-[48px] pt-0 pr-[16px] pb-0 pl-[16px] gap-[12px] items-center self-stretch shrink-0 flex-nowrap bg-[#fff] rounded-[12px] border-solid border border-[#e4ebf1] relative z-[47]">
                  <span className="h-[22px] grow shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-normal leading-[21.875px] text-[#1a202c] relative text-right whitespace-nowrap z-[48]">
                    ۱۰۱۰۴۵۸۶۹۲۱
                  </span>
                </div>
              </div>
            </div>
            <div className="h-[100px] self-stretch shrink-0 relative z-[49]">
              <div className="flex w-[928px] flex-col gap-[8px] items-end flex-nowrap relative z-50 mt-0 mr-0 mb-0 ml-0">
                <div className="flex w-[102px] gap-[4px] justify-end items-start shrink-0 flex-nowrap relative z-[51]">
                  <span className="h-[22px] shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-normal leading-[21.875px] text-[#e53e3e] relative text-left whitespace-nowrap z-[52]">
                    *
                  </span>
                  <span className="flex w-[91px] h-[22px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-semibold leading-[21.875px] text-[#2d3748] relative text-right whitespace-nowrap z-[53]">
                    نام رسمی شرکت
                  </span>
                </div>
                <div className="flex h-[48px] pt-0 pr-[16px] pb-0 pl-[16px] gap-[12px] items-center self-stretch shrink-0 flex-nowrap bg-[#fff] rounded-[12px] border-solid border border-[#e4ebf1] relative z-[54]">
                  <span className="h-[22px] grow shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-normal leading-[21.875px] text-[#1a202c] relative text-right whitespace-nowrap z-[55]">
                    پایدار پرداز خلاق آریا
                  </span>
                </div>
              </div>
            </div>
            <div className="flex gap-[16px] items-start self-stretch shrink-0 flex-nowrap relative z-[56]">
              <div className="flex flex-col gap-[8px] items-end grow shrink-0 basis-0 flex-nowrap relative z-[57]">
                <div className="flex w-[71px] gap-[4px] justify-end items-start shrink-0 flex-nowrap relative z-[58]">
                  <span className="h-[22px] shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-normal leading-[21.875px] text-[#e53e3e] relative text-left whitespace-nowrap z-[59]">
                    *
                  </span>
                  <span className="flex w-[60px] h-[22px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-semibold leading-[21.875px] text-[#2d3748] relative text-right whitespace-nowrap z-[60]">
                    شماره ثبت
                  </span>
                </div>
                <div className="flex h-[48px] pt-0 pr-[16px] pb-0 pl-[16px] gap-[12px] items-center self-stretch shrink-0 flex-nowrap bg-[#fff] rounded-[12px] border-solid border border-[#e4ebf1] relative z-[61]">
                  <span className="h-[22px] grow shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-normal leading-[21.875px] text-[#1a202c] relative text-right whitespace-nowrap z-[62]">
                    ۴۵۸۶۹۲
                  </span>
                </div>
              </div>
              <div className="flex flex-col gap-[8px] items-end grow shrink-0 basis-0 flex-nowrap relative z-[63]">
                <div className="flex w-[127px] gap-[4px] justify-end items-start shrink-0 flex-nowrap relative z-[64]">
                  <span className="h-[22px] shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-normal leading-[21.875px] text-[#e53e3e] relative text-left whitespace-nowrap z-[65]">
                    *
                  </span>
                  <span className="flex w-[116px] h-[22px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-semibold leading-[21.875px] text-[#2d3748] relative text-right whitespace-nowrap z-[66]">
                    نوع شخصیت حقوقی
                  </span>
                </div>
                <div className="flex h-[48px] pt-0 pr-[16px] pb-0 pl-[16px] gap-[12px] items-center self-stretch shrink-0 flex-nowrap bg-[#fff] rounded-[12px] border-solid border border-[#e4ebf1] relative z-[67]">
                  <span className="h-[22px] grow shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-normal leading-[21.875px] text-[#1a202c] relative text-right whitespace-nowrap z-[68]">
                    سهامی خاص
                  </span>
                </div>
              </div>
            </div>
            <div className="flex gap-[16px] items-start self-stretch shrink-0 flex-nowrap relative z-[69]">
              <div className="flex flex-col gap-[8px] items-end grow shrink-0 basis-0 flex-nowrap relative z-[70]">
                <div className="flex w-[66px] gap-[4px] justify-end items-start shrink-0 flex-nowrap relative z-[71]">
                  <span className="h-[22px] shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-normal leading-[21.875px] text-[#e53e3e] relative text-left whitespace-nowrap z-[72]">
                    *
                  </span>
                  <span className="flex w-[55px] h-[22px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-semibold leading-[21.875px] text-[#2d3748] relative text-right whitespace-nowrap z-[73]">
                    تاریخ ثبت
                  </span>
                </div>
                <div className="flex h-[48px] pt-0 pr-[16px] pb-0 pl-[16px] gap-[12px] items-center self-stretch shrink-0 flex-nowrap bg-[#fff] rounded-[12px] border-solid border border-[#e4ebf1] relative z-[74]">
                  <span className="h-[22px] grow shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-normal leading-[21.875px] text-[#1a202c] relative text-right whitespace-nowrap z-[75]">
                    ۱۳۹۸/۰۵/۱۲
                  </span>
                </div>
              </div>
              <div className="flex flex-col gap-[8px] items-end grow shrink-0 basis-0 flex-nowrap relative z-[76]">
                <div className="flex w-[82px] gap-[4px] justify-end items-start shrink-0 flex-nowrap relative z-[77]">
                  <span className="h-[22px] shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-normal leading-[21.875px] text-[#e53e3e] relative text-left whitespace-nowrap z-[78]">
                    *
                  </span>
                  <span className="flex w-[71px] h-[22px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-semibold leading-[21.875px] text-[#2d3748] relative text-right whitespace-nowrap z-[79]">
                    حوزه فعالیت
                  </span>
                </div>
                <div className="flex h-[48px] pt-0 pr-[16px] pb-0 pl-[16px] gap-[12px] items-center self-stretch shrink-0 flex-nowrap bg-[#fff] rounded-[12px] border-solid border border-[#e4ebf1] relative z-[80]">
                  <span className="h-[22px] grow shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-normal leading-[21.875px] text-[#1a202c] relative text-right whitespace-nowrap z-[81]">
                    فناوری اطلاعات و نرم‌افزار
                  </span>
                </div>
              </div>
            </div>
            <div className="h-[100px] self-stretch shrink-0 relative z-[82]">
              <div className="flex w-[928px] flex-col gap-[8px] items-end flex-nowrap relative z-[83] mt-0 mr-0 mb-0 ml-0">
                <div className="flex w-[90px] gap-[4px] justify-end items-start shrink-0 flex-nowrap relative z-[84]">
                  <span className="flex w-[90px] h-[22px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-semibold leading-[21.875px] text-[#2d3748] relative text-right whitespace-nowrap z-[85]">
                    وب‌سایت شرکت
                  </span>
                </div>
                <div className="flex h-[48px] pt-0 pr-[16px] pb-0 pl-[16px] gap-[12px] items-center self-stretch shrink-0 flex-nowrap bg-[#fff] rounded-[12px] border-solid border border-[#e4ebf1] relative z-[86]">
                  <span className="h-[22px] grow shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-normal leading-[21.875px] text-[#1a202c] relative text-right whitespace-nowrap z-[87]">
                    https://paydar-soft.ir
                  </span>
                </div>
              </div>
            </div>
            <div className="flex gap-[16px] items-start self-stretch shrink-0 flex-nowrap relative z-[88]">
              <div className="flex flex-col gap-[8px] items-end grow shrink-0 basis-0 flex-nowrap relative z-[89]">
                <div className="flex w-[35px] gap-[4px] justify-end items-start shrink-0 flex-nowrap relative z-[90]">
                  <span className="h-[22px] shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-normal leading-[21.875px] text-[#e53e3e] relative text-left whitespace-nowrap z-[91]">
                    *
                  </span>
                  <span className="flex w-[24px] h-[22px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-semibold leading-[21.875px] text-[#2d3748] relative text-right whitespace-nowrap z-[92]">
                    شهر
                  </span>
                </div>
                <div className="flex h-[48px] pt-0 pr-[16px] pb-0 pl-[16px] gap-[12px] items-center self-stretch shrink-0 flex-nowrap bg-[#fff] rounded-[12px] border-solid border border-[#e4ebf1] relative z-[93]">
                  <span className="h-[22px] grow shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-normal leading-[21.875px] text-[#1a202c] relative text-right whitespace-nowrap z-[94]">
                    تهران
                  </span>
                </div>
              </div>
              <div className="flex flex-col gap-[8px] items-end grow shrink-0 basis-0 flex-nowrap relative z-[95]">
                <div className="flex w-[45px] gap-[4px] justify-end items-start shrink-0 flex-nowrap relative z-[96]">
                  <span className="h-[22px] shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-normal leading-[21.875px] text-[#e53e3e] relative text-left whitespace-nowrap z-[97]">
                    *
                  </span>
                  <span className="flex w-[34px] h-[22px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-semibold leading-[21.875px] text-[#2d3748] relative text-right whitespace-nowrap z-[98]">
                    استان
                  </span>
                </div>
                <div className="flex h-[48px] pt-0 pr-[16px] pb-0 pl-[16px] gap-[12px] items-center self-stretch shrink-0 flex-nowrap bg-[#fff] rounded-[12px] border-solid border border-[#e4ebf1] relative z-[99]">
                  <span className="h-[22px] grow shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-normal leading-[21.875px] text-[#1a202c] relative text-right whitespace-nowrap z-[100]">
                    تهران
                  </span>
                </div>
              </div>
            </div>
            <div className="h-[100px] self-stretch shrink-0 relative z-[101]">
              <div className="flex w-[928px] flex-col gap-[8px] items-end flex-nowrap relative z-[102] mt-0 mr-0 mb-0 ml-0">
                <div className="flex w-[109px] gap-[4px] justify-end items-start shrink-0 flex-nowrap relative z-[103]">
                  <span className="h-[22px] shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-normal leading-[21.875px] text-[#e53e3e] relative text-left whitespace-nowrap z-[104]">
                    *
                  </span>
                  <span className="flex w-[98px] h-[22px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-semibold leading-[21.875px] text-[#2d3748] relative text-right whitespace-nowrap z-[105]">
                    نشانی دفتر مرکزی
                  </span>
                </div>
                <div className="flex h-[48px] pt-0 pr-[16px] pb-0 pl-[16px] gap-[12px] items-center self-stretch shrink-0 flex-nowrap bg-[#fff] rounded-[12px] border-solid border border-[#e4ebf1] relative z-[106]">
                  <span className="h-[22px] grow shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-normal leading-[21.875px] text-[#1a202c] relative text-right whitespace-nowrap z-[107]">
                    خیابان کارگر شمالی، نرسیده به بزرگراه جلال آل احمد، دانشکده
                    فنی دانشگاه تهران، ساختمان پارک علم و فناوری، واحد ۴۰۵
                  </span>
                </div>
              </div>
            </div>
            <div className="h-[100px] self-stretch shrink-0 relative z-[108]">
              <div className="flex w-[928px] flex-col gap-[8px] items-end flex-nowrap relative z-[109] mt-0 mr-0 mb-0 ml-0">
                <div className="flex w-[59px] gap-[4px] justify-end items-start shrink-0 flex-nowrap relative z-[110]">
                  <span className="h-[22px] shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-normal leading-[21.875px] text-[#e53e3e] relative text-left whitespace-nowrap z-[111]">
                    *
                  </span>
                  <span className="flex w-[48px] h-[22px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-semibold leading-[21.875px] text-[#2d3748] relative text-right whitespace-nowrap z-[112]">
                    کد پستی
                  </span>
                </div>
                <div className="flex h-[48px] pt-0 pr-[16px] pb-0 pl-[16px] gap-[12px] items-center self-stretch shrink-0 flex-nowrap bg-[#fff] rounded-[12px] border-solid border border-[#e4ebf1] relative z-[113]">
                  <span className="h-[22px] grow shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-normal leading-[21.875px] text-[#1a202c] relative text-right whitespace-nowrap z-[114]">
                    ۱۴۳۹۵۱۵۶۱۷
                  </span>
                </div>
              </div>
            </div>
            <div className="flex pt-[24px] pr-0 pb-0 pl-0 justify-between items-center self-stretch shrink-0 flex-nowrap border-solid border-b border-b-[#e4ebf1] relative z-[115]">
              <div className="flex w-[116px] gap-[16px] items-center shrink-0 flex-nowrap relative z-[116]">
                <div className="flex w-[116px] pt-[11px] pr-[20px] pb-[11px] pl-[20px] gap-[8px] justify-center items-center shrink-0 flex-nowrap bg-[#2094e3] rounded-[12px] relative z-[117]">
                  <span className="flex w-[76px] h-[22px] justify-center items-start shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-medium leading-[22px] text-[#fff] relative text-center whitespace-nowrap z-[118]">
                    ذخیره و ادامه
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex pt-[16px] pr-0 pb-[16px] pl-0 flex-col gap-[16px] items-start self-stretch shrink-0 flex-nowrap relative z-[119]">
        <div className="flex flex-col gap-[12px] items-center self-stretch shrink-0 flex-nowrap relative z-[120]">
          <span className="flex w-[347px] h-[19px] justify-center items-start shrink-0 basis-auto font-['Vazirmatn'] text-[12px] font-normal leading-[18.75px] text-[#a0aec0] relative text-center whitespace-nowrap z-[121]">
            اطلاعات شما مطابق سیاست حریم خصوصی سامانه ماه محافظت می‌شود.
          </span>
          <div className="flex w-[180px] gap-[16px] items-center shrink-0 flex-nowrap relative z-[122]">
            <span className="flex w-[76px] h-[19px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[12px] font-normal leading-[18.75px] text-[#718096] relative text-right whitespace-nowrap z-[123]">
              قوانین و مقررات
            </span>
            <span className="h-[19px] shrink-0 basis-auto font-['Vazirmatn'] text-[12px] font-normal leading-[18.75px] text-[#a0aec0] relative text-left whitespace-nowrap z-[124]">
              |
            </span>
            <span className="flex w-[69px] h-[19px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[12px] font-normal leading-[18.75px] text-[#718096] relative text-right whitespace-nowrap z-[125]">
              حریم خصوصی
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
