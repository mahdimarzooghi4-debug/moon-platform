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
          <img
            className="w-[137px] h-[46px] shrink-0 object-contain relative z-[5]"
            src="/assets/codia/86mTM8H5kj.png"
            alt="سامانه ماه"
          />
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
              <div className="w-[40px] h-px shrink-0 bg-[url(/assets/codia/8zvRJPY3ny.svg)] bg-cover bg-no-repeat relative z-[22]" />
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
              <div className="w-[40px] h-px shrink-0 bg-[url(/assets/codia/pm1yOagzks.svg)] bg-cover bg-no-repeat relative z-[27]" />
            </div>
            <div className="flex w-[168px] h-[36px] gap-[8px] items-center shrink-0 flex-nowrap relative z-[28]">
              <span className="flex w-[84px] h-[22px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-bold leading-[21.875px] text-[#2094e3] relative text-right whitespace-nowrap z-[29]">
                نماینده سازمان
              </span>
              <div className="flex w-[28px] h-[28px] justify-center items-center shrink-0 flex-nowrap bg-[#eaf5fd] rounded-[14px] border-solid border-[1.5px] border-[#2094e3] relative z-30">
                <span className="flex w-[7px] h-[19px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[12px] font-bold leading-[18.75px] text-[#2094e3] relative text-right whitespace-nowrap z-[31]">
                  ۲
                </span>
              </div>
              <div className="w-[40px] h-px shrink-0 bg-[url(/assets/codia/1vnQP4yM8Y.svg)] bg-cover bg-no-repeat relative z-[32]" />
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
          <div className="flex pt-[36px] pr-[36px] pb-[36px] pl-[36px] flex-col gap-[28px] items-end self-stretch shrink-0 flex-nowrap bg-[#fff] rounded-[20px] border-solid border border-[#e4ebf1] relative shadow-[0_4px_24px_0_rgba(0,0,0,0.03)] z-[37]">
            <div className="flex flex-col gap-[6px] items-end self-stretch shrink-0 flex-nowrap relative z-[38]">
              <span className="flex w-[170px] h-[28px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[18px] font-bold leading-[28px] text-[#1a202c] relative text-right whitespace-nowrap z-[39]">
                اطلاعات نماینده سازمان
              </span>
              <span className="flex w-[278px] h-[22px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-normal leading-[21.875px] text-[#718096] relative text-right whitespace-nowrap z-40">
                این فرد رابط رسمی شرکت با سامانه ماه خواهد بود.
              </span>
              <div className="h-px self-stretch shrink-0 bg-[url(/assets/codia/FeXdCWbzFg.svg)] bg-cover bg-no-repeat relative z-[41]" />
            </div>
            <div className="flex h-[100px] gap-[16px] items-start self-stretch shrink-0 flex-nowrap relative z-[42]">
              <div className="flex w-[456px] flex-col gap-[8px] items-end shrink-0 flex-nowrap relative z-[43]">
                <div className="flex w-[28px] gap-[4px] justify-end items-start shrink-0 flex-nowrap relative z-[44]">
                  <span className="h-[22px] shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-normal leading-[21.875px] text-[#e53e3e] relative text-left whitespace-nowrap z-[45]">
                    *
                  </span>
                  <span className="flex w-[17px] h-[22px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-semibold leading-[21.875px] text-[#2d3748] relative text-right whitespace-nowrap z-[46]">
                    نام
                  </span>
                </div>
                <div className="flex h-[48px] pt-0 pr-[16px] pb-0 pl-[16px] gap-[12px] items-center self-stretch shrink-0 flex-nowrap bg-[#fff] rounded-[12px] border-solid border border-[#e4ebf1] relative z-[47]">
                  <span className="h-[22px] grow shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-normal leading-[21.875px] text-[#1a202c] relative text-right whitespace-nowrap z-[48]">
                    علیرضا
                  </span>
                </div>
              </div>
              <div className="flex w-[456px] flex-col gap-[8px] items-end shrink-0 flex-nowrap relative z-[49]">
                <div className="flex w-[81px] gap-[4px] justify-end items-start shrink-0 flex-nowrap relative z-50">
                  <span className="h-[22px] shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-normal leading-[21.875px] text-[#e53e3e] relative text-left whitespace-nowrap z-[51]">
                    *
                  </span>
                  <span className="flex w-[70px] h-[22px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-semibold leading-[21.875px] text-[#2d3748] relative text-right whitespace-nowrap z-[52]">
                    نام خانوادگی
                  </span>
                </div>
                <div className="flex h-[48px] pt-0 pr-[16px] pb-0 pl-[16px] gap-[12px] items-center self-stretch shrink-0 flex-nowrap bg-[#fff] rounded-[12px] border-solid border border-[#e4ebf1] relative z-[53]">
                  <span className="h-[22px] grow shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-normal leading-[21.875px] text-[#1a202c] relative text-right whitespace-nowrap z-[54]">
                    سهرابی
                  </span>
                </div>
              </div>
            </div>
            <div className="flex h-[100px] gap-[16px] items-start self-stretch shrink-0 flex-nowrap relative z-[55]">
              <div className="flex w-[456px] flex-col gap-[8px] items-end shrink-0 flex-nowrap relative z-[56]">
                <div className="flex w-[50px] gap-[4px] justify-end items-start shrink-0 flex-nowrap relative z-[57]">
                  <span className="h-[22px] shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-normal leading-[21.875px] text-[#e53e3e] relative text-left whitespace-nowrap z-[58]">
                    *
                  </span>
                  <span className="flex w-[39px] h-[22px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-semibold leading-[21.875px] text-[#2d3748] relative text-right whitespace-nowrap z-[59]">
                    کد ملی
                  </span>
                </div>
                <div className="flex h-[48px] pt-0 pr-[16px] pb-0 pl-[16px] gap-[12px] justify-end items-center self-stretch shrink-0 flex-nowrap bg-[#fff] rounded-[12px] border-solid border border-[#e4ebf1] relative z-[60]">
                  <span className="h-[22px] grow shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-normal leading-[21.875px] text-[#1a202c] relative text-right whitespace-nowrap z-[61]">
                    ۰۰۱۲۳۴۵۶۷۸
                  </span>
                </div>
              </div>
              <div className="flex w-[456px] flex-col gap-[8px] items-end shrink-0 flex-nowrap relative z-[62]">
                <div className="flex w-[91px] gap-[4px] justify-end items-start shrink-0 flex-nowrap relative z-[63]">
                  <span className="h-[22px] shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-normal leading-[21.875px] text-[#e53e3e] relative text-left whitespace-nowrap z-[64]">
                    *
                  </span>
                  <span className="flex w-[80px] h-[22px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-semibold leading-[21.875px] text-[#2d3748] relative text-right whitespace-nowrap z-[65]">
                    سمت سازمانی
                  </span>
                </div>
                <div className="flex h-[48px] pt-0 pr-[16px] pb-0 pl-[16px] gap-[12px] items-center self-stretch shrink-0 flex-nowrap bg-[#fff] rounded-[12px] border-solid border border-[#e4ebf1] relative z-[66]">
                  <span className="h-[22px] grow shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-normal leading-[21.875px] text-[#1a202c] relative text-right whitespace-nowrap z-[67]">
                    مدیر مسئولیت اجتماعی
                  </span>
                </div>
              </div>
            </div>
            <div className="flex w-[928px] h-[100px] items-start self-stretch shrink-0 flex-nowrap relative z-[68]">
              <div className="flex w-[928px] flex-col gap-[8px] items-end shrink-0 flex-nowrap relative z-[69]">
                <div className="flex w-[85px] gap-[4px] justify-end items-start shrink-0 flex-nowrap relative z-[70]">
                  <span className="h-[22px] shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-normal leading-[21.875px] text-[#e53e3e] relative text-left whitespace-nowrap z-[71]">
                    *
                  </span>
                  <span className="flex w-[74px] h-[22px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-semibold leading-[21.875px] text-[#2d3748] relative text-right whitespace-nowrap z-[72]">
                    شماره موبایل
                  </span>
                </div>
                <div className="flex h-[48px] pt-0 pr-[16px] pb-0 pl-[16px] gap-[12px] items-center self-stretch shrink-0 flex-nowrap bg-[#fff] rounded-[12px] border-solid border border-[#e4ebf1] relative z-[73]">
                  <div className="flex w-[99px] pt-[6px] pr-[12px] pb-[6px] pl-[12px] items-start shrink-0 flex-nowrap bg-[#eaf5fd] rounded-[8px] relative z-[74]">
                    <span className="h-[19px] shrink-0 basis-auto font-['Vazirmatn'] text-[12px] font-semibold leading-[18.75px] text-[#2094e3] relative text-left whitespace-nowrap z-[75]">
                      دریافت کد تأیید
                    </span>
                  </div>
                  <span className="h-[22px] grow shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-normal leading-[21.875px] text-[#1a202c] relative text-right whitespace-nowrap z-[76]">
                    ۰۹۱۲۳۴۵۶۷۸۹
                  </span>
                </div>
              </div>
            </div>
            <div className="flex h-[100px] gap-[16px] items-start self-stretch shrink-0 flex-nowrap relative z-[77]">
              <div className="flex w-[456px] flex-col gap-[8px] items-end shrink-0 flex-nowrap relative z-[78]">
                <div className="flex w-[90px] gap-[4px] justify-end items-start shrink-0 flex-nowrap relative z-[79]">
                  <span className="h-[22px] shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-normal leading-[21.875px] text-[#e53e3e] relative text-left whitespace-nowrap z-[80]">
                    *
                  </span>
                  <span className="flex w-[79px] h-[22px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-semibold leading-[21.875px] text-[#2d3748] relative text-right whitespace-nowrap z-[81]">
                    ایمیل سازمانی
                  </span>
                </div>
                <div className="flex h-[48px] pt-0 pr-[16px] pb-0 pl-[16px] gap-[12px] items-center self-stretch shrink-0 flex-nowrap bg-[#fff] rounded-[12px] border-solid border border-[#e4ebf1] relative z-[82]">
                  <span className="h-[22px] grow shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-normal leading-[21.875px] text-[#1a202c] relative text-right whitespace-nowrap z-[83]">
                    sohrabi@paydar-soft.ir
                  </span>
                </div>
              </div>
              <div className="flex w-[456px] flex-col gap-[8px] items-end shrink-0 flex-nowrap relative z-[84]">
                <div className="flex w-[161px] gap-[4px] justify-end items-start shrink-0 flex-nowrap relative z-[85]">
                  <span className="h-[22px] shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-normal leading-[21.875px] text-[#e53e3e] relative text-left whitespace-nowrap z-[86]">
                    *
                  </span>
                  <span className="flex w-[150px] h-[22px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-semibold leading-[21.875px] text-[#2d3748] relative text-right whitespace-nowrap z-[87]">
                    شماره تلفن ثابت با کد شهر
                  </span>
                </div>
                <div className="flex h-[48px] pt-0 pr-[16px] pb-0 pl-[16px] gap-[12px] justify-end items-center self-stretch shrink-0 flex-nowrap bg-[#fff] rounded-[12px] border-solid border border-[#e4ebf1] relative z-[88]">
                  <span className="h-[22px] grow shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-normal leading-[21.875px] text-[#1a202c] relative text-right whitespace-nowrap z-[89]">
                    ۰۲۱۸۸۹۹۲۲۰۱
                  </span>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-[12px] items-end self-stretch shrink-0 flex-nowrap relative z-[90]">
              <div className="flex w-[149px] gap-[4px] justify-end items-start shrink-0 flex-nowrap relative z-[91]">
                <span className="h-[22px] shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-normal leading-[21.875px] text-[#e53e3e] relative text-left whitespace-nowrap z-[92]">
                  *
                </span>
                <span className="flex w-[138px] h-[22px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-semibold leading-[21.875px] text-[#2d3748] relative text-right whitespace-nowrap z-[93]">
                  معرفی‌نامه رسمی نماینده
                </span>
              </div>
              <div className="flex pt-[24px] pr-[24px] pb-[24px] pl-[24px] flex-col gap-[12px] justify-center items-center self-stretch shrink-0 flex-nowrap bg-[#f7fafc] rounded-[16px] border-dashed border-[1.5px] border-[#e4ebf1] relative z-[94]">
                <div className="flex w-[40px] h-[40px] justify-center items-center shrink-0 flex-nowrap bg-[#eaf5fd] rounded-[20px] relative z-[95]">
                  <div className="w-[20px] h-[20px] shrink-0 bg-[url(/assets/codia/KwbFeoYbY3.svg)] bg-cover bg-no-repeat relative overflow-hidden z-[96]" />
                </div>
                <span className="flex w-[186px] h-[22px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-semibold leading-[21.875px] text-[#2094e3] relative text-right whitespace-nowrap z-[97]">
                  بارگذاری معرفی‌نامه رسمی نماینده
                </span>
                <span className="flex w-[537px] h-[19px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[12px] font-normal leading-[18.75px] text-[#718096] relative text-right whitespace-nowrap z-[98]">
                  فایل معرفی‌نامه دارای سربرگ، مهر و امضای شرکت را بارگذاری
                  کنید. (حداکثر ۱۰ مگابایت، قالب‌های PDF, JPG, PNG)
                </span>
              </div>
            </div>
            <div className="flex pt-[24px] pr-0 pb-0 pl-0 justify-between items-center self-stretch shrink-0 flex-nowrap border-solid border-b border-b-[#e4ebf1] relative z-[99]">
              <div className="flex w-[230px] gap-[16px] items-center shrink-0 flex-nowrap relative z-[100]">
                <div className="flex w-[98px] pt-[11px] pr-[20px] pb-[11px] pl-[20px] items-center shrink-0 flex-nowrap rounded-[12px] border-solid border border-[#e2e8f0] relative z-[101]">
                  <span className="flex w-[58px] h-[22px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-semibold leading-[21.875px] text-[#2d3748] relative text-right whitespace-nowrap z-[102]">
                    مرحله قبل
                  </span>
                </div>
                <div className="flex w-[116px] pt-[11px] pr-[20px] pb-[11px] pl-[20px] gap-[8px] justify-center items-center shrink-0 flex-nowrap bg-[#2094e3] rounded-[12px] relative z-[103]">
                  <span className="flex w-[76px] h-[22px] justify-center items-start shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-medium leading-[22px] text-[#fff] relative text-center whitespace-nowrap z-[104]">
                    ذخیره و ادامه
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex pt-[24px] pr-0 pb-[40px] pl-0 flex-col gap-[16px] items-start self-stretch shrink-0 flex-nowrap relative z-[105]">
        <div className="flex flex-col gap-[12px] items-center self-stretch shrink-0 flex-nowrap relative z-[106]">
          <span className="flex w-[347px] h-[19px] justify-center items-start shrink-0 basis-auto font-['Vazirmatn'] text-[12px] font-normal leading-[18.75px] text-[#a0aec0] relative text-center whitespace-nowrap z-[107]">
            اطلاعات شما مطابق سیاست حریم خصوصی سامانه ماه محافظت می‌شود.
          </span>
          <div className="flex w-[180px] gap-[16px] items-center shrink-0 flex-nowrap relative z-[108]">
            <span className="flex w-[76px] h-[19px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[12px] font-normal leading-[18.75px] text-[#718096] relative text-right whitespace-nowrap z-[109]">
              قوانین و مقررات
            </span>
            <span className="h-[19px] shrink-0 basis-auto font-['Vazirmatn'] text-[12px] font-normal leading-[18.75px] text-[#a0aec0] relative text-left whitespace-nowrap z-[110]">
              |
            </span>
            <span className="flex w-[69px] h-[19px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[12px] font-normal leading-[18.75px] text-[#718096] relative text-right whitespace-nowrap z-[111]">
              حریم خصوصی
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
