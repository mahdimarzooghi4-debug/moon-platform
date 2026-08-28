import React from "react";
import "./index.css";

export default function Main() {
  return (
    <div className="main-container flex w-[1440px] h-[1800px] flex-col justify-between items-center flex-nowrap bg-[#f7fafc] relative mx-auto my-0">
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
          <div className="flex w-[137px] gap-[12px] items-center shrink-0 flex-nowrap relative z-[5]">
            <img
              className="w-[137px] h-[46px] shrink-0 object-contain relative z-[6]"
              src="/assets/codia/kau2Azafis.png"
              alt="سامانه ماه"
            />
          </div>
        </div>
      </div>
      <div className="flex pt-[48px] pr-0 pb-[48px] pl-0 flex-col gap-[32px] items-center self-stretch shrink-0 flex-nowrap relative z-[7]">
        <div className="flex w-[1000px] flex-col gap-[24px] items-start shrink-0 flex-nowrap relative z-[8]">
          <div className="flex flex-col gap-[16px] items-end self-stretch shrink-0 flex-nowrap relative z-[9]">
            <div className="flex justify-between items-center self-stretch shrink-0 flex-nowrap relative z-10">
              <div className="flex w-[144px] gap-[12px] items-center shrink-0 flex-nowrap relative z-[11]">
                <span className="h-[22px] shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-normal leading-[21.875px] text-[#159455] relative text-left whitespace-nowrap z-[12]">
                  ✓ ذخیره خودکار انجام شد
                </span>
              </div>
              <div className="flex w-[402px] gap-[16px] items-center shrink-0 flex-nowrap relative z-[13]">
                <div className="flex w-[170px] pt-[4px] pr-[12px] pb-[4px] pl-[12px] items-start shrink-0 flex-nowrap bg-[#eaf5fd] rounded-[8px] relative z-[14]">
                  <span className="h-[20px] shrink-0 basis-auto font-['Vazirmatn'] text-[13px] font-medium leading-[20px] text-[#2094e3] relative text-left whitespace-nowrap z-[15]">
                    زمان تقریبی تکمیل: ۷ دقیقه
                  </span>
                </div>
                <span className="flex w-[216px] h-[38px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[24px] font-bold leading-[37.5px] text-[#1a202c] relative text-right whitespace-nowrap z-[16]">
                  ایجاد حساب استارتاپی
                </span>
              </div>
            </div>
            <span className="h-[22px] self-stretch shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-normal leading-[21.875px] text-[#718096] relative text-right whitespace-nowrap z-[17]">
              اطلاعات استارتاپ و تیم خود را تکمیل کنید تا درخواست شما توسط خانه
              خلاق بررسی شود.
            </span>
          </div>
          <div className="flex pt-[16px] pr-0 pb-[16px] pl-0 gap-[16px] justify-center items-center self-stretch shrink-0 flex-nowrap relative z-[18]">
            <div className="flex w-[118px] h-[36px] gap-[8px] items-center shrink-0 flex-nowrap relative z-[19]">
              <span className="flex w-[82px] h-[22px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-bold leading-[21.875px] text-[#2094e3] relative text-right whitespace-nowrap z-20">
                بازبینی و ارسال
              </span>
              <div className="flex w-[28px] h-[28px] justify-center items-center shrink-0 flex-nowrap bg-[#eaf5fd] rounded-[14px] border-solid border-[1.5px] border-[#2094e3] relative z-[21]">
                <span className="h-[19px] shrink-0 basis-auto font-['Vazirmatn'] text-[12px] font-bold leading-[18.75px] text-[#2094e3] relative text-left whitespace-nowrap z-[22]">
                  ۴
                </span>
              </div>
            </div>
            <div className="flex w-[196px] h-[36px] gap-[8px] items-center shrink-0 flex-nowrap relative z-[23]">
              <span className="flex w-[112px] h-[22px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-medium leading-[21.875px] text-[#159455] relative text-right whitespace-nowrap z-[24]">
                اثر اجتماعی و مدارک
              </span>
              <div className="flex w-[28px] h-[28px] justify-center items-center shrink-0 flex-nowrap bg-[#eaf8f0] rounded-[14px] border-solid border-[1.5px] border-[#159455] relative z-[25]">
                <span className="h-[19px] shrink-0 basis-auto font-['Vazirmatn'] text-[12px] font-bold leading-[18.75px] text-[#159455] relative text-left whitespace-nowrap z-[26]">
                  ✓
                </span>
              </div>
              <div className="w-[40px] h-px shrink-0 bg-[url(/assets/codia/N0AXHZh5z7.svg)] bg-cover bg-no-repeat relative z-[27]" />
            </div>
            <div className="flex w-[161px] h-[36px] gap-[8px] items-center shrink-0 flex-nowrap relative z-[28]">
              <span className="h-[22px] shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-medium leading-[21.875px] text-[#159455] relative text-left whitespace-nowrap z-[29]">
                محصول و تیم
              </span>
              <div className="flex w-[28px] h-[28px] justify-center items-center shrink-0 flex-nowrap bg-[#eaf8f0] rounded-[14px] border-solid border-[1.5px] border-[#159455] relative z-30">
                <span className="h-[19px] shrink-0 basis-auto font-['Vazirmatn'] text-[12px] font-bold leading-[18.75px] text-[#159455] relative text-left whitespace-nowrap z-[31]">
                  ✓
                </span>
              </div>
              <div className="w-[40px] h-px shrink-0 bg-[url(/assets/codia/3K3RQgftDN.svg)] bg-cover bg-no-repeat relative z-[32]" />
            </div>
            <div className="flex w-[105px] h-[36px] gap-[8px] items-center shrink-0 flex-nowrap relative z-[33]">
              <span className="h-[22px] shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-medium leading-[21.875px] text-[#159455] relative text-left whitespace-nowrap z-[34]">
                اطلاعات پایه
              </span>
              <div className="flex w-[28px] h-[28px] justify-center items-center shrink-0 flex-nowrap bg-[#eaf8f0] rounded-[14px] border-solid border-[1.5px] border-[#159455] relative z-[35]">
                <span className="h-[19px] shrink-0 basis-auto font-['Vazirmatn'] text-[12px] font-bold leading-[18.75px] text-[#159455] relative text-left whitespace-nowrap z-[36]">
                  ✓
                </span>
              </div>
            </div>
          </div>
          <div className="flex pt-[36px] pr-[36px] pb-[36px] pl-[36px] flex-col gap-[28px] items-end self-stretch shrink-0 flex-nowrap bg-[#fff] rounded-[20px] border-solid border border-[#e4ebf1] relative shadow-[0_4px_24px_0_rgba(0,0,0,0.03)] z-[37]">
            <div className="flex flex-col gap-[6px] items-end self-stretch shrink-0 flex-nowrap relative z-[38]">
              <span className="flex w-[177px] h-[28px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[18px] font-bold leading-[28px] text-[#1a202c] relative text-right whitespace-nowrap z-[39]">
                بازبینی درخواست ثبت‌نام
              </span>
              <span className="flex w-[315px] h-[22px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-normal leading-[21.875px] text-[#718096] relative text-right whitespace-nowrap z-40">
                قبل از ارسال نهایی، صحت اطلاعات واردشده را کنترل کنید.
              </span>
              <div className="h-px self-stretch shrink-0 bg-[url(/assets/codia/wgSHY18QBb.svg)] bg-cover bg-no-repeat relative z-[41]" />
            </div>
            <div className="flex flex-col gap-[16px] items-start self-stretch shrink-0 flex-nowrap relative z-[42]">
              <div className="flex gap-[16px] items-start self-stretch shrink-0 flex-nowrap relative z-[43]">
                <div className="flex w-[450px] pt-[20px] pr-[20px] pb-[20px] pl-[20px] flex-col gap-[12px] items-end shrink-0 flex-nowrap bg-[#f8fafc] rounded-[12px] border-solid border border-[#e2e8f0] relative z-[44]">
                  <div className="flex justify-between items-center self-stretch shrink-0 flex-nowrap relative z-[45]">
                    <span className="flex w-[84px] h-[20px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[13px] font-semibold leading-[20px] text-[#2094e3] relative text-right whitespace-nowrap z-[46]">
                      ویرایش اطلاعات
                    </span>
                    <span className="flex w-[130px] h-[23px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[15px] font-bold leading-[23px] text-[#1a202c] relative text-right whitespace-nowrap z-[47]">
                      اطلاعات نماینده اصلی
                    </span>
                  </div>
                  <div className="flex flex-col gap-[6px] items-end self-stretch shrink-0 flex-nowrap relative z-[48]">
                    <span className="flex w-[147px] h-[20px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[13px] font-normal leading-[20px] text-[#4a5568] relative text-right whitespace-nowrap z-[49]">
                      نام و نام خانوادگی: علی علوی
                    </span>
                    <span className="flex w-[165px] h-[20px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[13px] font-normal leading-[20px] text-[#4a5568] relative text-right whitespace-nowrap z-50">
                      سمت: مدیر عامل و هم‌بنیان‌گذار
                    </span>
                    <span className="flex w-[146px] h-[20px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[13px] font-normal leading-[20px] text-[#4a5568] relative text-right whitespace-nowrap z-[51]">
                      شماره تماس: ۰۹۱۲۳۴۵۶۷۸۹
                    </span>
                  </div>
                </div>
                <div className="flex w-[450px] pt-[20px] pr-[20px] pb-[20px] pl-[20px] flex-col gap-[12px] items-end shrink-0 flex-nowrap bg-[#f8fafc] rounded-[12px] border-solid border border-[#e2e8f0] relative z-[52]">
                  <div className="flex justify-between items-center self-stretch shrink-0 flex-nowrap relative z-[53]">
                    <span className="flex w-[84px] h-[20px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[13px] font-semibold leading-[20px] text-[#2094e3] relative text-right whitespace-nowrap z-[54]">
                      ویرایش اطلاعات
                    </span>
                    <span className="flex w-[131px] h-[23px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[15px] font-bold leading-[23px] text-[#1a202c] relative text-right whitespace-nowrap z-[55]">
                      اطلاعات پایه استارتاپ
                    </span>
                  </div>
                  <div className="flex flex-col gap-[6px] items-end self-stretch shrink-0 flex-nowrap relative z-[56]">
                    <span className="flex w-[159px] h-[20px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[13px] font-normal leading-[20px] text-[#4a5568] relative text-right whitespace-nowrap z-[57]">
                      نام فارسی استارتاپ: سامانه ماه
                    </span>
                    <span className="flex w-[167px] h-[20px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[13px] font-normal leading-[20px] text-[#4a5568] relative text-right whitespace-nowrap z-[58]">
                      وضعیت حقوقی: شرکت ثبت‌شده
                    </span>
                    <span className="flex w-[202px] h-[20px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[13px] font-normal leading-[20px] text-[#4a5568] relative text-right whitespace-nowrap z-[59]">
                      مرحله رشد: نمونه محصول اولیه (MVP)
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex gap-[16px] items-start self-stretch shrink-0 flex-nowrap relative z-[60]">
                <div className="flex w-[450px] pt-[20px] pr-[20px] pb-[20px] pl-[20px] flex-col gap-[12px] items-end shrink-0 flex-nowrap bg-[#f8fafc] rounded-[12px] border-solid border border-[#e2e8f0] relative z-[61]">
                  <div className="flex justify-between items-center self-stretch shrink-0 flex-nowrap relative z-[62]">
                    <span className="flex w-[84px] h-[20px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[13px] font-semibold leading-[20px] text-[#2094e3] relative text-right whitespace-nowrap z-[63]">
                      ویرایش اطلاعات
                    </span>
                    <span className="flex w-[64px] h-[23px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[15px] font-bold leading-[23px] text-[#1a202c] relative text-right whitespace-nowrap z-[64]">
                      اعضای تیم
                    </span>
                  </div>
                  <div className="flex flex-col gap-[6px] items-end self-stretch shrink-0 flex-nowrap relative z-[65]">
                    <span className="flex w-[221px] h-[20px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[13px] font-normal leading-[20px] text-[#4a5568] relative text-right whitespace-nowrap z-[66]">
                      علی علوی - هم‌بنیان‌گذار و CTO (تمام‌وقت)
                    </span>
                    <span className="flex w-[226px] h-[20px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[13px] font-normal leading-[20px] text-[#4a5568] relative text-right whitespace-nowrap z-[67]">
                      سارا حسینی - طراح محصول و UX (پاره‌وقت)
                    </span>
                  </div>
                </div>
                <div className="flex w-[450px] pt-[20px] pr-[20px] pb-[20px] pl-[20px] flex-col gap-[12px] items-end shrink-0 flex-nowrap bg-[#f8fafc] rounded-[12px] border-solid border border-[#e2e8f0] relative z-[68]">
                  <div className="flex justify-between items-center self-stretch shrink-0 flex-nowrap relative z-[69]">
                    <span className="flex w-[84px] h-[20px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[13px] font-semibold leading-[20px] text-[#2094e3] relative text-right whitespace-nowrap z-[70]">
                      ویرایش اطلاعات
                    </span>
                    <span className="flex w-[85px] h-[23px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[15px] font-bold leading-[23px] text-[#1a202c] relative text-right whitespace-nowrap z-[71]">
                      محصول و بازار
                    </span>
                  </div>
                  <div className="flex flex-col gap-[6px] items-end self-stretch shrink-0 flex-nowrap relative z-[72]">
                    <span className="flex w-[182px] h-[20px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[13px] font-normal leading-[20px] text-[#4a5568] relative text-right whitespace-nowrap z-[73]">
                      مدل درآمدی: اشتراک سازمانی SaaS
                    </span>
                    <span className="flex w-[236px] h-[20px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[13px] font-normal leading-[20px] text-[#4a5568] relative text-right whitespace-nowrap z-[74]">
                      مشتریان هدف: شتابدهنده‌ها و خانه‌های خلاق
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex gap-[16px] items-start self-stretch shrink-0 flex-nowrap relative z-[75]">
                <div className="flex w-[450px] pt-[20px] pr-[20px] pb-[20px] pl-[20px] flex-col gap-[12px] items-end shrink-0 flex-nowrap bg-[#f8fafc] rounded-[12px] border-solid border border-[#e2e8f0] relative z-[76]">
                  <div className="flex justify-between items-center self-stretch shrink-0 flex-nowrap relative z-[77]">
                    <span className="flex w-[84px] h-[20px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[13px] font-semibold leading-[20px] text-[#2094e3] relative text-right whitespace-nowrap z-[78]">
                      ویرایش اطلاعات
                    </span>
                    <span className="flex w-[117px] h-[23px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[15px] font-bold leading-[23px] text-[#1a202c] relative text-right whitespace-nowrap z-[79]">
                      مدارک بارگذاری‌شده
                    </span>
                  </div>
                  <div className="flex flex-col gap-[6px] items-end self-stretch shrink-0 flex-nowrap relative z-[80]">
                    <span className="flex w-[199px] h-[20px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[13px] font-normal leading-[20px] text-[#4a5568] relative text-right whitespace-nowrap z-[81]">
                      مدرک ۱: آگهی_تاسیس_سامانه_ماه.pdf
                    </span>
                    <span className="flex w-[194px] h-[20px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[13px] font-normal leading-[20px] text-[#4a5568] relative text-right whitespace-nowrap z-[82]">
                      مدرک ۲: کارت_ملی_نماینده_رسمی.jpg
                    </span>
                  </div>
                </div>
                <div className="flex w-[450px] pt-[20px] pr-[20px] pb-[20px] pl-[20px] flex-col gap-[12px] items-end shrink-0 flex-nowrap bg-[#f8fafc] rounded-[12px] border-solid border border-[#e2e8f0] relative z-[83]">
                  <div className="flex justify-between items-center self-stretch shrink-0 flex-nowrap relative z-[84]">
                    <span className="flex w-[84px] h-[20px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[13px] font-semibold leading-[20px] text-[#2094e3] relative text-right whitespace-nowrap z-[85]">
                      ویرایش اطلاعات
                    </span>
                    <span className="flex w-[101px] h-[23px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[15px] font-bold leading-[23px] text-[#1a202c] relative text-right whitespace-nowrap z-[86]">
                      حوزه اثر اجتماعی
                    </span>
                  </div>
                  <div className="flex flex-col gap-[6px] items-end self-stretch shrink-0 flex-nowrap relative z-[87]">
                    <span className="flex w-[230px] h-[20px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[13px] font-normal leading-[20px] text-[#4a5568] relative text-right whitespace-nowrap z-[88]">
                      حوزه اثر: آموزش، توانمندسازی و اشتغال پایدار
                    </span>
                    <span className="flex w-[250px] h-[20px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[13px] font-normal leading-[20px] text-[#4a5568] relative text-right whitespace-nowrap z-[89]">
                      جامعه هدف: جوانان، نوجوانان و جویندگان مهارت
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-[12px] items-end self-stretch shrink-0 flex-nowrap relative z-[90]">
              <span className="flex w-[102px] h-[23px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[15px] font-bold leading-[23px] text-[#2d3748] relative text-right whitespace-nowrap z-[91]">
                تأییدیه و تعهدات
              </span>
              <div className="flex w-[319px] gap-[8px] items-center shrink-0 flex-nowrap relative z-[92]">
                <span className="flex w-[293px] h-[22px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-normal leading-[21.875px] text-[#4a5568] relative text-right whitespace-nowrap z-[93]">
                  صحت اطلاعات و مدارک واردشده را کاملاً تأیید می‌کنم.
                </span>
                <div className="flex w-[18px] h-[18px] justify-center items-center shrink-0 flex-nowrap bg-[#2094e3] rounded-[4px] relative z-[94]">
                  <span className="h-[17px] shrink-0 basis-auto font-['Vazirmatn'] text-[11px] font-black leading-[17px] text-[#fff] relative text-left whitespace-nowrap z-[95]">
                    ✓
                  </span>
                </div>
              </div>
              <div className="flex w-[434px] gap-[8px] items-center shrink-0 flex-nowrap relative z-[96]">
                <span className="flex w-[408px] h-[22px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-normal leading-[21.875px] text-[#4a5568] relative text-right whitespace-nowrap z-[97]">
                  اجازه بررسی اطلاعات توسط خانه خلاق و فرآیند پایش سامانه ماه را
                  می‌دهم.
                </span>
                <div className="flex w-[18px] h-[18px] justify-center items-center shrink-0 flex-nowrap bg-[#2094e3] rounded-[4px] relative z-[98]">
                  <span className="h-[17px] shrink-0 basis-auto font-['Vazirmatn'] text-[11px] font-black leading-[17px] text-[#fff] relative text-left whitespace-nowrap z-[99]">
                    ✓
                  </span>
                </div>
              </div>
              <div className="flex w-[425px] gap-[8px] items-center shrink-0 flex-nowrap relative z-[100]">
                <span className="flex w-[399px] h-[22px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-normal leading-[21.875px] text-[#4a5568] relative text-right whitespace-nowrap z-[101]">
                  قوانین و مقررات عمومی و سیاست حریم خصوصی سامانه ماه را
                  می‌پذیرم.
                </span>
                <div className="flex w-[18px] h-[18px] justify-center items-center shrink-0 flex-nowrap bg-[#2094e3] rounded-[4px] relative z-[102]">
                  <span className="h-[17px] shrink-0 basis-auto font-['Vazirmatn'] text-[11px] font-black leading-[17px] text-[#fff] relative text-left whitespace-nowrap z-[103]">
                    ✓
                  </span>
                </div>
              </div>
            </div>
            <div className="flex pt-[16px] pr-[16px] pb-[16px] pl-[16px] gap-[12px] justify-end items-center self-stretch shrink-0 flex-nowrap bg-[#edf2f7] rounded-[12px] border-solid border border-[#cbd5e0] relative z-[104]">
              <span className="h-[20px] grow shrink-0 basis-auto font-['Vazirmatn'] text-[13px] font-normal leading-[20px] text-[#4a5568] relative text-right whitespace-nowrap z-[105]">
                پس از بررسی و تأیید نهایی حساب توسط دبیرخانه خانه خلاق،
                می‌توانید پروژه خود را ثبت کنید. تأیید حساب یا بررسی محصول به
                معنی تضمین جذب سرمایه قطعی نیست.
              </span>
              <div className="flex w-[20px] h-[20px] justify-center items-center shrink-0 flex-nowrap bg-[#718096] rounded-[10px] relative z-[106]">
                <span className="h-[17px] shrink-0 basis-auto font-['Vazirmatn'] text-[11px] font-bold leading-[17px] text-[#fff] relative text-left whitespace-nowrap z-[107]">
                  i
                </span>
              </div>
            </div>
            <div className="flex pt-[24px] pr-0 pb-0 pl-0 justify-between items-center self-stretch shrink-0 flex-nowrap border-solid border-b border-b-[#e4ebf1] relative z-[108]">
              <div className="flex w-[326px] gap-[16px] items-center shrink-0 flex-nowrap relative z-[109]">
                <div className="flex w-[138px] h-[44px] pt-[11px] pr-[20px] pb-[11px] pl-[20px] items-center shrink-0 flex-nowrap rounded-[12px] border-solid border border-[#e2e8f0] relative z-[110]">
                  <span className="flex w-[98px] h-[22px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-medium leading-[21.875px] text-[#4a5568] relative text-right whitespace-nowrap z-[111]">
                    بازگشت و ویرایش
                  </span>
                </div>
                <div className="flex w-[172px] pt-[11px] pr-[20px] pb-[11px] pl-[20px] gap-[8px] justify-center items-center shrink-0 flex-nowrap bg-[#2094e3] rounded-[12px] relative z-[112]">
                  <span className="flex w-[132px] h-[22px] justify-center items-start shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-medium leading-[22px] text-[#fff] relative text-center whitespace-nowrap z-[113]">
                    ارسال درخواست ثبت‌نام
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex pt-[24px] pr-0 pb-[40px] pl-0 flex-col gap-[16px] items-start self-stretch shrink-0 flex-nowrap relative z-[114]">
        <div className="flex flex-col gap-[12px] items-center self-stretch shrink-0 flex-nowrap relative z-[115]">
          <span className="h-[19px] self-stretch shrink-0 basis-auto font-['Vazirmatn'] text-[12px] font-normal leading-[18.75px] text-[#a0aec0] relative text-center whitespace-nowrap z-[116]">
            اطلاعات شما مطابق سیاست حریم خصوصی سامانه ماه محافظت می‌شود.
          </span>
          <div className="flex w-[180px] gap-[16px] items-center shrink-0 flex-nowrap relative z-[117]">
            <span className="flex w-[76px] h-[19px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[12px] font-normal leading-[18.75px] text-[#718096] relative text-right whitespace-nowrap z-[118]">
              قوانین و مقررات
            </span>
            <span className="h-[19px] shrink-0 basis-auto font-['Vazirmatn'] text-[12px] font-normal leading-[18.75px] text-[#a0aec0] relative text-left whitespace-nowrap z-[119]">
              |
            </span>
            <span className="flex w-[69px] h-[19px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[12px] font-normal leading-[18.75px] text-[#718096] relative text-right whitespace-nowrap z-[120]">
              حریم خصوصی
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
