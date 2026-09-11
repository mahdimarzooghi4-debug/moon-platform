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
          <div className="w-[137px] h-[46px] shrink-0 bg-[url(https://static.codia.ai/image/2026-08-24/UoXOiEMMrd.png)] bg-cover bg-no-repeat relative z-[5]" />
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
            <div className="flex w-[166px] h-[36px] gap-[8px] items-center shrink-0 flex-nowrap relative z-[18]">
              <span className="flex w-[82px] h-[22px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-bold leading-[21.875px] text-[#2094e3] relative text-right whitespace-nowrap z-[19]">
                بازبینی و ارسال
              </span>
              <div className="flex w-[28px] h-[28px] justify-center items-center shrink-0 flex-nowrap bg-[#eaf5fd] rounded-[14px] border-solid border-[1.5px] border-[#2094e3] relative z-20">
                <span className="flex w-[28px] h-[28px] justify-center items-center shrink-0 basis-auto font-['Vazirmatn'] text-[12px] font-bold leading-[28px] text-[#2094e3] relative text-center whitespace-nowrap z-[21]">
                  ۴
                </span>
              </div>
              <div className="w-[40px] h-px shrink-0 bg-[url(https://static.codia.ai/image/2026-08-24/EhhGobmNPQ.png)] bg-cover bg-no-repeat relative z-[22]" />
            </div>
            <div className="flex w-[219px] h-[36px] gap-[8px] items-center shrink-0 flex-nowrap relative z-[23]">
              <span className="flex w-[135px] h-[22px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-medium leading-[21.875px] text-[#159455] relative text-right whitespace-nowrap z-[24]">
                اطلاعات مالیاتی و مدارک
              </span>
              <div className="flex w-[28px] h-[28px] justify-center items-center shrink-0 flex-nowrap bg-[#eaf8f0] rounded-[14px] relative z-[25]">
                <span className="h-[19px] shrink-0 basis-auto font-['Vazirmatn'] text-[12px] font-bold leading-[18.75px] text-[#159455] relative text-left whitespace-nowrap z-[26]">
                  ✓
                </span>
              </div>
              <div className="w-[40px] h-px shrink-0 bg-[url(https://static.codia.ai/image/2026-08-24/HpdScGxAHh.png)] bg-cover bg-no-repeat relative z-[27]" />
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
              <div className="w-[40px] h-px shrink-0 bg-[url(https://static.codia.ai/image/2026-08-24/NKVTas83AW.png)] bg-cover bg-no-repeat relative z-[32]" />
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
              <span className="flex w-[110px] h-[28px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[18px] font-bold leading-[28px] text-[#1a202c] relative text-right whitespace-nowrap z-[39]">
                بازبینی اطلاعات
              </span>
              <span className="flex w-[328px] h-[22px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-normal leading-[21.875px] text-[#718096] relative text-right whitespace-nowrap z-40">
                قبل از ارسال نهایی، اطلاعات و مدارک واردشده را بررسی کنید.
              </span>
              <div className="h-px self-stretch shrink-0 bg-[url(https://static.codia.ai/image/2026-08-24/MuYO4u0upD.png)] bg-cover bg-no-repeat relative z-[41]" />
            </div>
            <div className="flex flex-col gap-[16px] items-start self-stretch shrink-0 flex-nowrap relative z-[42]">
              <div className="flex pt-[20px] pr-[20px] pb-[20px] pl-[20px] flex-col gap-[12px] items-end self-stretch shrink-0 flex-nowrap bg-[#f7fafc] rounded-[12px] border-solid border border-[#e4ebf1] relative z-[43]">
                <div className="flex justify-between items-center self-stretch shrink-0 flex-nowrap relative z-[44]">
                  <span className="flex w-[42px] h-[22px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-semibold leading-[21.875px] text-[#2094e3] relative text-right whitespace-nowrap z-[45]">
                    ویرایش
                  </span>
                  <span className="flex w-[141px] h-[25px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[16px] font-bold leading-[25px] text-[#1a202c] relative text-right whitespace-nowrap z-[46]">
                    ۱. اطلاعات ثبتی شرکت
                  </span>
                </div>
                <div className="h-px self-stretch shrink-0 bg-[url(https://static.codia.ai/image/2026-08-24/3qHOmGbfS8.png)] bg-cover bg-no-repeat relative z-[47]" />
                <div className="flex flex-col gap-[8px] items-end self-stretch shrink-0 flex-nowrap relative z-[48]">
                  <div className="w-[888px] self-stretch shrink-0 font-['Vazirmatn'] text-[14px] font-normal leading-[21.875px] relative text-right whitespace-nowrap z-[49]">
                    <span className="font-['Vazirmatn'] text-[14px] font-normal leading-[21.875px] text-[#718096] relative text-right">
                      شناسه ملی:{" "}
                    </span>
                    <span className="font-['Vazirmatn'] text-[14px] font-semibold leading-[21.875px] text-[#1a202c] relative text-right">
                      ۱۰۱۰۴۵۸۶۹۲۱
                    </span>
                  </div>
                  <div className="w-[888px] self-stretch shrink-0 font-['Vazirmatn'] text-[14px] font-normal leading-[21.875px] relative text-right whitespace-nowrap z-50">
                    <span className="font-['Vazirmatn'] text-[14px] font-normal leading-[21.875px] text-[#718096] relative text-right">
                      نام شرکت:{" "}
                    </span>
                    <span className="font-['Vazirmatn'] text-[14px] font-semibold leading-[21.875px] text-[#1a202c] relative text-right">
                      پایدار پرداز خلاق آریا
                    </span>
                  </div>
                  <div className="w-[888px] self-stretch shrink-0 font-['Vazirmatn'] text-[14px] font-normal leading-[21.875px] relative text-right whitespace-nowrap z-[51]">
                    <span className="font-['Vazirmatn'] text-[14px] font-normal leading-[21.875px] text-[#718096] relative text-right">
                      شماره ثبت:{" "}
                    </span>
                    <span className="font-['Vazirmatn'] text-[14px] font-semibold leading-[21.875px] text-[#1a202c] relative text-right">
                      ۴۵۸۶۹۲
                    </span>
                  </div>
                  <div className="w-[888px] self-stretch shrink-0 font-['Vazirmatn'] text-[14px] font-normal leading-[21.875px] relative text-right whitespace-nowrap z-[52]">
                    <span className="font-['Vazirmatn'] text-[14px] font-normal leading-[21.875px] text-[#718096] relative text-right">
                      نوع شخصیت:{" "}
                    </span>
                    <span className="font-['Vazirmatn'] text-[14px] font-semibold leading-[21.875px] text-[#1a202c] relative text-right">
                      سهامی خاص
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex pt-[20px] pr-[20px] pb-[20px] pl-[20px] flex-col gap-[12px] items-start self-stretch shrink-0 flex-nowrap bg-[#f7fafc] rounded-[12px] border-solid border border-[#e4ebf1] relative z-[53]">
                <div className="flex justify-between items-center self-stretch shrink-0 flex-nowrap relative z-[54]">
                  <span className="flex w-[42px] h-[22px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-semibold leading-[21.875px] text-[#2094e3] relative text-right whitespace-nowrap z-[55]">
                    ویرایش
                  </span>
                  <span className="flex w-[169px] h-[25px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[16px] font-bold leading-[25px] text-[#1a202c] relative text-right whitespace-nowrap z-[56]">
                    ۲. اطلاعات نماینده سازمان
                  </span>
                </div>
                <div className="h-px self-stretch shrink-0 bg-[url(https://static.codia.ai/image/2026-08-24/em3JObs51T.png)] bg-cover bg-no-repeat relative z-[57]" />
                <div className="flex flex-col gap-[8px] items-start self-stretch shrink-0 flex-nowrap relative z-[58]">
                  <div className="w-[888px] self-stretch shrink-0 font-['Vazirmatn'] text-[14px] font-normal leading-[21.875px] relative text-right whitespace-nowrap z-[59]">
                    <span className="font-['Vazirmatn'] text-[14px] font-normal leading-[21.875px] text-[#718096] relative text-right">
                      نماینده:{" "}
                    </span>
                    <span className="font-['Vazirmatn'] text-[14px] font-semibold leading-[21.875px] text-[#1a202c] relative text-right">
                      علیرضا سهرابی
                    </span>
                  </div>
                  <div className="w-[888px] self-stretch shrink-0 font-['Vazirmatn'] text-[14px] font-normal leading-[21.875px] relative text-right whitespace-nowrap z-[60]">
                    <span className="font-['Vazirmatn'] text-[14px] font-normal leading-[21.875px] text-[#718096] relative text-right">
                      سمت سازمانی:{" "}
                    </span>
                    <span className="font-['Vazirmatn'] text-[14px] font-semibold leading-[21.875px] text-[#1a202c] relative text-right">
                      مدیر مسئولیت اجتماعی
                    </span>
                  </div>
                  <div className="w-[888px] self-stretch shrink-0 font-['Vazirmatn'] text-[14px] font-normal leading-[21.875px] relative text-right whitespace-nowrap z-[61]">
                    <span className="font-['Vazirmatn'] text-[14px] font-normal leading-[21.875px] text-[#718096] relative text-right">
                      موبایل:{" "}
                    </span>
                    <span className="font-['Vazirmatn'] text-[14px] font-semibold leading-[21.875px] text-[#1a202c] relative text-right">
                      ۰۹۱۲۳۴۵۶۷۸۹
                    </span>
                  </div>
                  <div className="w-[888px] self-stretch shrink-0 font-['Vazirmatn'] text-[14px] font-normal leading-[21.875px] relative text-right whitespace-nowrap z-[62]">
                    <span className="font-['Vazirmatn'] text-[14px] font-normal leading-[21.875px] text-[#718096] relative text-right">
                      ایمیل:{" "}
                    </span>
                    <span className="font-['Vazirmatn'] text-[14px] font-semibold leading-[21.875px] text-[#1a202c] relative text-right">
                      sohrabi@paydar-soft.ir
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex pt-[20px] pr-[20px] pb-[20px] pl-[20px] flex-col gap-[12px] items-start self-stretch shrink-0 flex-nowrap bg-[#f7fafc] rounded-[12px] border-solid border border-[#e4ebf1] relative z-[63]">
                <div className="flex justify-between items-center self-stretch shrink-0 flex-nowrap relative z-[64]">
                  <span className="flex w-[42px] h-[22px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-semibold leading-[21.875px] text-[#2094e3] relative text-right whitespace-nowrap z-[65]">
                    ویرایش
                  </span>
                  <span className="flex w-[175px] h-[25px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[16px] font-bold leading-[25px] text-[#1a202c] relative text-right whitespace-nowrap z-[66]">
                    ۳. اطلاعات مالیاتی و مدارک
                  </span>
                </div>
                <div className="h-px self-stretch shrink-0 bg-[url(https://static.codia.ai/image/2026-08-24/DVG6HTN2cp.png)] bg-cover bg-no-repeat relative z-[67]" />
                <div className="flex flex-col gap-[8px] items-start self-stretch shrink-0 flex-nowrap relative z-[68]">
                  <div className="w-[888px] self-stretch shrink-0 font-['Vazirmatn'] text-[14px] font-normal leading-[21.875px] relative text-right whitespace-nowrap z-[69]">
                    <span className="font-['Vazirmatn'] text-[14px] font-normal leading-[21.875px] text-[#718096] relative text-right">
                      کد اقتصادی:{" "}
                    </span>
                    <span className="font-['Vazirmatn'] text-[14px] font-semibold leading-[21.875px] text-[#1a202c] relative text-right">
                      ۴۱۱۶۸۵۹۳۲۱۴۵
                    </span>
                  </div>
                  <div className="w-[888px] self-stretch shrink-0 font-['Vazirmatn'] text-[14px] font-normal leading-[21.875px] relative text-right whitespace-nowrap z-[70]">
                    <span className="font-['Vazirmatn'] text-[14px] font-normal leading-[21.875px] text-[#718096] relative text-right">
                      کد مالیاتی:{" "}
                    </span>
                    <span className="font-['Vazirmatn'] text-[14px] font-semibold leading-[21.875px] text-[#1a202c] relative text-right">
                      ۴۱۱۵۸۹۶۲۳۷
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex pt-[20px] pr-[20px] pb-[20px] pl-[20px] flex-col gap-[12px] items-start self-stretch shrink-0 flex-nowrap bg-[#f7fafc] rounded-[12px] border-solid border border-[#e4ebf1] relative z-[71]">
                <div className="flex justify-between items-center self-stretch shrink-0 flex-nowrap relative z-[72]">
                  <span className="flex w-[42px] h-[22px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-semibold leading-[21.875px] text-[#2094e3] relative text-right whitespace-nowrap z-[73]">
                    ویرایش
                  </span>
                  <span className="flex w-[143px] h-[25px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[16px] font-bold leading-[25px] text-[#1a202c] relative text-right whitespace-nowrap z-[74]">
                    ۴. مدارک بارگذاری‌شده
                  </span>
                </div>
                <div className="h-px self-stretch shrink-0 bg-[url(https://static.codia.ai/image/2026-08-24/AMXwsTUsuW.png)] bg-cover bg-no-repeat relative z-[75]" />
                <div className="flex flex-col gap-[8px] items-end self-stretch shrink-0 flex-nowrap relative z-[76]">
                  <div className="flex justify-end items-center self-stretch shrink-0 flex-nowrap relative z-[77]">
                    <span className="flex w-[148px] h-[22px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-normal leading-[21.875px] text-[#1a202c] relative text-right whitespace-nowrap z-[78]">
                      تصویر آگهی تأسیس شرکت
                    </span>
                  </div>
                  <div className="flex justify-end items-center self-stretch shrink-0 flex-nowrap relative z-[79]">
                    <span className="flex w-[127px] h-[22px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-normal leading-[21.875px] text-[#1a202c] relative text-right whitespace-nowrap z-[80]">
                      تصویر اساسنامه شرکت
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex pt-[12px] pr-0 pb-[12px] pl-0 flex-col gap-[16px] items-start self-stretch shrink-0 flex-nowrap relative z-[81]">
              <div className="flex gap-[12px] justify-end items-center self-stretch shrink-0 flex-nowrap relative z-[82]">
                <span className="flex w-[263px] h-[22px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-normal leading-[21.875px] text-[#2d3748] relative text-right whitespace-nowrap z-[83]">
                  صحت اطلاعات و مدارک واردشده را تأیید می‌کنم.
                </span>
                <div className="flex w-[20px] h-[20px] justify-center items-center shrink-0 flex-nowrap bg-[#eaf5fd] rounded-[6px] border-solid border-2 border-[#2094e3] relative z-[84]">
                  <span className="h-[19px] shrink-0 basis-auto font-['Vazirmatn'] text-[12px] font-bold leading-[18.75px] text-[#2094e3] relative text-left whitespace-nowrap z-[85]">
                    ✓
                  </span>
                </div>
              </div>
              <div className="flex gap-[12px] justify-end items-center self-stretch shrink-0 flex-nowrap relative z-[86]">
                <span className="flex w-[411px] h-[22px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-normal leading-[21.875px] text-[#2d3748] relative text-right whitespace-nowrap z-[87]">
                  قوانین و مقررات و سیاست حریم خصوصی سامانه ماه را مطالعه و
                  می‌پذیرم.
                </span>
                <div className="flex w-[20px] h-[20px] justify-center items-center shrink-0 flex-nowrap bg-[#eaf5fd] rounded-[6px] border-solid border-2 border-[#2094e3] relative z-[88]">
                  <span className="h-[19px] shrink-0 basis-auto font-['Vazirmatn'] text-[12px] font-bold leading-[18.75px] text-[#2094e3] relative text-left whitespace-nowrap z-[89]">
                    ✓
                  </span>
                </div>
              </div>
            </div>
            <div className="flex pt-[16px] pr-[16px] pb-[16px] pl-[16px] gap-[12px] items-center self-stretch shrink-0 flex-nowrap bg-[#fff6e5] rounded-[12px] border-solid border border-[#feebc8] relative z-[90]">
              <span className="flex w-[860px] h-[40px] justify-end items-start grow shrink-0 basis-0 font-['Vazirmatn'] text-[13px] font-normal leading-[20.313px] text-[#c05621] relative text-right z-[91]">
                صدور گواهی ماده ۱۷۲ منوط به تأیید اطلاعات شرکت، واریز وجه به
                حساب کمیته امداد و رعایت ضوابط قانونی است. ثبت حساب سازمانی
                به‌تنهایی تضمین‌کننده صدور گواهی نیست.
              </span>
              <div className="flex w-[24px] h-[24px] justify-center items-center shrink-0 flex-nowrap bg-[#f6ad55] rounded-[12px] relative z-[92]">
                <span className="h-[12px] shrink-0 basis-auto font-['Vazirmatn'] text-[12px] font-bold leading-[12px] text-[#fff] relative text-left whitespace-nowrap z-[93]">
                  ⚠
                </span>
              </div>
            </div>
            <div className="flex pt-[24px] pr-0 pb-0 pl-0 justify-between items-center self-stretch shrink-0 flex-nowrap border-solid border-b border-b-[#e4ebf1] relative z-[94]">
              <div className="flex w-[286px] gap-[16px] items-center shrink-0 flex-nowrap relative z-[95]">
                <div className="flex w-[98px] pt-[11px] pr-[20px] pb-[11px] pl-[20px] items-center shrink-0 flex-nowrap rounded-[12px] border-solid border border-[#e2e8f0] relative z-[96]">
                  <span className="flex w-[58px] h-[22px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-semibold leading-[21.875px] text-[#2d3748] relative text-right whitespace-nowrap z-[97]">
                    مرحله قبل
                  </span>
                </div>
                <div className="flex w-[172px] pt-[11px] pr-[20px] pb-[11px] pl-[20px] gap-[8px] justify-center items-center shrink-0 flex-nowrap bg-[#2094e3] rounded-[12px] relative z-[98]">
                  <span className="flex w-[132px] h-[22px] justify-center items-start shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-medium leading-[22px] text-[#fff] relative text-center whitespace-nowrap z-[99]">
                    ارسال درخواست ثبت‌نام
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex pt-[24px] pr-0 pb-[40px] pl-0 flex-col gap-[16px] items-start self-stretch shrink-0 flex-nowrap relative z-[100]">
        <div className="flex flex-col gap-[12px] items-center self-stretch shrink-0 flex-nowrap relative z-[101]">
          <span className="flex w-[347px] h-[19px] justify-center items-start shrink-0 basis-auto font-['Vazirmatn'] text-[12px] font-normal leading-[18.75px] text-[#a0aec0] relative text-center whitespace-nowrap z-[102]">
            اطلاعات شما مطابق سیاست حریم خصوصی سامانه ماه محافظت می‌شود.
          </span>
          <div className="flex w-[180px] gap-[16px] items-center shrink-0 flex-nowrap relative z-[103]">
            <span className="flex w-[76px] h-[19px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[12px] font-normal leading-[18.75px] text-[#718096] relative text-right whitespace-nowrap z-[104]">
              قوانین و مقررات
            </span>
            <span className="h-[19px] shrink-0 basis-auto font-['Vazirmatn'] text-[12px] font-normal leading-[18.75px] text-[#a0aec0] relative text-left whitespace-nowrap z-[105]">
              |
            </span>
            <span className="flex w-[69px] h-[19px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[12px] font-normal leading-[18.75px] text-[#718096] relative text-right whitespace-nowrap z-[106]">
              حریم خصوصی
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
