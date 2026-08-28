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
          <div className="flex w-[137px] gap-[12px] items-center shrink-0 flex-nowrap relative z-[5]">
            <div className="w-[137px] h-[46px] shrink-0 bg-[url(https://static.codia.ai/image/2026-08-24/jhc5UhSRik.png)] bg-cover bg-no-repeat relative z-[6]" />
          </div>
        </div>
      </div>
      <div className="flex pt-[48px] pr-0 pb-[48px] pl-0 flex-col gap-[32px] items-center self-stretch shrink-0 flex-nowrap relative z-[7]">
        <div className="flex w-[1000px] flex-col gap-[24px] items-end shrink-0 flex-nowrap relative z-[8]">
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
            <div className="flex w-[117px] h-[36px] gap-[8px] items-center shrink-0 flex-nowrap relative z-[19]">
              <span className="flex w-[81px] h-[22px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-medium leading-[21.875px] text-[#718096] relative text-right whitespace-nowrap z-20">
                بازبینی و ارسال
              </span>
              <div className="flex w-[28px] h-[28px] justify-center items-center shrink-0 flex-nowrap bg-[#e2e8f0] rounded-[14px] relative z-[21]">
                <span className="flex w-[8px] h-[19px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[12px] font-bold leading-[18.75px] text-[#718096] relative text-right whitespace-nowrap z-[22]">
                  ۴
                </span>
              </div>
            </div>
            <div className="flex w-[196px] h-[36px] gap-[8px] justify-end items-center shrink-0 flex-nowrap relative z-[23]">
              <span className="flex w-[112px] h-[22px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-medium leading-[21.875px] text-[#718096] relative text-right whitespace-nowrap z-[24]">
                اثر اجتماعی و مدارک
              </span>
              <div className="flex w-[28px] h-[28px] justify-center items-center shrink-0 flex-nowrap bg-[#e2e8f0] rounded-[14px] relative z-[25]">
                <span className="flex w-[9px] h-[19px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[12px] font-bold leading-[18.75px] text-[#718096] relative text-right whitespace-nowrap z-[26]">
                  ۳
                </span>
              </div>
              <div className="w-[40px] h-px shrink-0 bg-[url(https://static.codia.ai/image/2026-08-24/3zT0fShPBj.png)] bg-cover bg-no-repeat relative z-[27]" />
            </div>
            <div className="flex w-[161px] h-[36px] gap-[8px] items-center shrink-0 flex-nowrap relative z-[28]">
              <span className="flex w-[77px] h-[22px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-bold leading-[21.875px] text-[#2094e3] relative text-right whitespace-nowrap z-[29]">
                محصول و تیم
              </span>
              <div className="flex w-[28px] h-[28px] justify-center items-center shrink-0 flex-nowrap bg-[#eaf5fd] rounded-[14px] border-solid border-[1.5px] border-[#2094e3] relative z-30">
                <span className="flex w-[7px] h-[19px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[12px] font-bold leading-[18.75px] text-[#2094e3] relative text-right whitespace-nowrap z-[31]">
                  ۲
                </span>
              </div>
              <div className="w-[40px] h-px shrink-0 bg-[url(https://static.codia.ai/image/2026-08-24/Dt8i7rBwxp.png)] bg-cover bg-no-repeat relative z-[32]" />
            </div>
            <div className="flex w-[105px] h-[36px] gap-[8px] items-center shrink-0 flex-nowrap relative z-[33]">
              <span className="flex w-[69px] h-[22px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-medium leading-[21.875px] text-[#159455] relative text-right whitespace-nowrap z-[34]">
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
              <span className="flex w-[167px] h-[28px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[18px] font-bold leading-[28px] text-[#1a202c] relative text-right whitespace-nowrap z-[39]">
                محصول و تیم استارتاپ
              </span>
              <span className="flex w-[257px] h-[22px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-normal leading-[21.875px] text-[#718096] relative text-right whitespace-nowrap z-40">
                محصول، بازار و اعضای اصلی تیم را معرفی کنید.
              </span>
              <div className="h-px self-stretch shrink-0 bg-[url(https://static.codia.ai/image/2026-08-24/kGHxhhykfN.png)] bg-cover bg-no-repeat relative z-[41]" />
            </div>
            <div className="flex h-[126px] flex-col gap-[8px] items-end self-stretch shrink-0 flex-nowrap relative z-[42]">
              <div className="flex gap-[4px] justify-end items-start self-stretch shrink-0 flex-nowrap relative z-[43]">
                <span className="h-[22px] shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-normal leading-[21.875px] text-[#e53e3e] relative text-left whitespace-nowrap z-[44]">
                  *
                </span>
                <span className="flex w-[235px] h-[22px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-semibold leading-[21.875px] text-[#2d3748] relative text-right whitespace-nowrap z-[45]">
                  معرفی کوتاه استارتاپ (حداکثر ۳۰۰ کاراکتر)
                </span>
              </div>
              <div className="flex h-[96px] pt-[12px] pr-[12px] pb-[12px] pl-[12px] flex-col items-end self-stretch shrink-0 flex-nowrap bg-[#fff] rounded-[12px] border-solid border border-[#e4ebf1] relative z-[46]">
                <span className="flex w-[904px] h-[72px] justify-end items-start self-stretch shrink-0 font-['Vazirmatn'] text-[14px] font-normal leading-[21.875px] text-[#1a202c] relative text-right z-[47]">
                  سامانه ماه، اولین پلتفرم یکپارچه مدیریت شتابدهی است که چرخه
                  حیات استارتاپ‌ها، فرآیند ارزیابی مربیان و مدیریت سرمایه‌گذاران
                  را برای مراکز نوآوری و خانه‌های خلاق تسهیل و هوشمند می‌کند.
                </span>
              </div>
            </div>
            <div className="flex h-[126px] flex-col gap-[8px] items-end self-stretch shrink-0 flex-nowrap relative z-[48]">
              <div className="flex gap-[4px] justify-end items-start self-stretch shrink-0 flex-nowrap relative z-[49]">
                <span className="h-[22px] shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-normal leading-[21.875px] text-[#e53e3e] relative text-left whitespace-nowrap z-50">
                  *
                </span>
                <span className="flex w-[69px] h-[22px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-semibold leading-[21.875px] text-[#2d3748] relative text-right whitespace-nowrap z-[51]">
                  مسئله اصلی
                </span>
              </div>
              <div className="flex h-[96px] pt-[12px] pr-[12px] pb-[12px] pl-[12px] flex-col items-end self-stretch shrink-0 flex-nowrap bg-[#fff] rounded-[12px] border-solid border border-[#e4ebf1] relative z-[52]">
                <span className="flex w-[904px] h-[72px] justify-end items-start self-stretch shrink-0 font-['Vazirmatn'] text-[14px] font-normal leading-[21.875px] text-[#1a202c] relative text-right z-[53]">
                  فرآیندهای ارزیابی و نظارت بر پیشرفت تیم‌های استارتاپی در
                  شتابدهنده‌ها و خانه‌های خلاق به‌شدت دستی، نامنظم و پراکنده است
                  که موجب اتلاف زمان، عدم ارزیابی کیفی منصفانه و عدم شفافیت برای
                  سرمایه‌گذار می‌شود.
                </span>
              </div>
            </div>
            <div className="flex h-[126px] flex-col gap-[8px] items-end self-stretch shrink-0 flex-nowrap relative z-[54]">
              <div className="flex gap-[4px] justify-end items-start self-stretch shrink-0 flex-nowrap relative z-[55]">
                <span className="h-[22px] shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-normal leading-[21.875px] text-[#e53e3e] relative text-left whitespace-nowrap z-[56]">
                  *
                </span>
                <span className="flex w-[34px] h-[22px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-semibold leading-[21.875px] text-[#2d3748] relative text-right whitespace-nowrap z-[57]">
                  راهکار
                </span>
              </div>
              <div className="flex h-[96px] pt-[12px] pr-[12px] pb-[12px] pl-[12px] flex-col items-end self-stretch shrink-0 flex-nowrap bg-[#fff] rounded-[12px] border-solid border border-[#e4ebf1] relative z-[58]">
                <span className="flex w-[904px] h-[72px] justify-end items-start self-stretch shrink-0 font-['Vazirmatn'] text-[14px] font-normal leading-[21.875px] text-[#1a202c] relative text-right z-[59]">
                  ماه با ارائه داشبوردهای شاخص‌های کلیدی عملکرد (KPI)، ارزیابی
                  چندبعدی مربیان، رصد زمان واقعی پروژه‌ها و پنل اختصاصی
                  سرمایه‌گذاران، چرخه شتابدهی را کاملاً شفاف، خودکار و داده‌محور
                  می‌سازد.
                </span>
              </div>
            </div>
            <div className="flex h-[126px] flex-col gap-[8px] items-end self-stretch shrink-0 flex-nowrap relative z-[60]">
              <div className="flex gap-[4px] justify-end items-start self-stretch shrink-0 flex-nowrap relative z-[61]">
                <span className="h-[22px] shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-normal leading-[21.875px] text-[#e53e3e] relative text-left whitespace-nowrap z-[62]">
                  *
                </span>
                <span className="flex w-[134px] h-[22px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-semibold leading-[21.875px] text-[#2d3748] relative text-right whitespace-nowrap z-[63]">
                  مشتریان یا کاربران هدف
                </span>
              </div>
              <div className="flex h-[96px] pt-[12px] pr-[12px] pb-[12px] pl-[12px] flex-col items-end self-stretch shrink-0 flex-nowrap bg-[#fff] rounded-[12px] border-solid border border-[#e4ebf1] relative z-[64]">
                <span className="flex w-[904px] h-[72px] justify-end items-start self-stretch shrink-0 font-['Vazirmatn'] text-[14px] font-normal leading-[21.875px] text-[#1a202c] relative text-right z-[65]">
                  شتابدهنده‌های عمومی و سازمانی، خانه‌های خلاق و نوآوری،
                  پارک‌های علم و فناوری، سرمایه‌گذاران خطرپذیر (VC) و صندوق‌های
                  پژوهش و فناوری.
                </span>
              </div>
            </div>
            <div className="flex gap-[16px] items-start self-stretch shrink-0 flex-nowrap relative z-[66]">
              <div className="flex w-[450px] flex-col gap-[8px] items-end shrink-0 flex-nowrap relative z-[67]">
                <div className="flex w-[136px] gap-[4px] justify-end items-start shrink-0 flex-nowrap relative z-[68]">
                  <span className="h-[22px] shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-normal leading-[21.875px] text-[#e53e3e] relative text-left whitespace-nowrap z-[69]">
                    *
                  </span>
                  <span className="flex w-[125px] h-[22px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-semibold leading-[21.875px] text-[#2d3748] relative text-right whitespace-nowrap z-[70]">
                    وضعیت فعلی محصول
                  </span>
                </div>
                <div className="flex w-[401px] h-[48px] gap-[12px] items-center shrink-0 flex-wrap relative z-[71]">
                  <div className="flex w-[78px] gap-[6px] items-center flex-nowrap relative z-[72]">
                    <span className="flex w-[56px] h-[20px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[13px] font-normal leading-[20px] text-[#1a202c] relative text-right whitespace-nowrap z-[73]">
                      دارای درآمد
                    </span>
                    <div className="w-[16px] h-[16px] shrink-0 bg-[url(https://static.codia.ai/image/2026-08-24/hLqcQGTOkT.png)] bg-cover bg-no-repeat rounded-[50%] relative z-[74]" />
                  </div>
                  <div className="flex w-[88px] gap-[6px] items-center flex-nowrap relative z-[75]">
                    <span className="flex w-[66px] h-[20px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[13px] font-normal leading-[20px] text-[#4a5568] relative text-right whitespace-nowrap z-[76]">
                      دارای مشتری
                    </span>
                    <div className="w-[16px] h-[16px] shrink-0 bg-[url(https://static.codia.ai/image/2026-08-24/ZhTZbNOezF.png)] bg-cover bg-no-repeat rounded-[50%] relative z-[77]" />
                  </div>
                  <div className="flex w-[92px] gap-[6px] items-center flex-nowrap relative z-[78]">
                    <span className="flex w-[70px] h-[20px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[13px] font-normal leading-[20px] text-[#4a5568] relative text-right whitespace-nowrap z-[79]">
                      محصول فعال
                    </span>
                    <div className="w-[16px] h-[16px] shrink-0 bg-[url(https://static.codia.ai/image/2026-08-24/QH5KXhTOZa.png)] bg-cover bg-no-repeat rounded-[50%] relative z-[80]" />
                  </div>
                  <div className="flex w-[107px] gap-[6px] items-center flex-nowrap relative z-[81]">
                    <span className="flex w-[85px] h-[20px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[13px] font-normal leading-[20px] text-[#4a5568] relative text-right whitespace-nowrap z-[82]">
                      نمونه اولیه آماده
                    </span>
                    <div className="w-[16px] h-[16px] shrink-0 bg-[url(https://static.codia.ai/image/2026-08-24/QyZU84nbLF.png)] bg-cover bg-no-repeat rounded-[50%] relative z-[83]" />
                  </div>
                </div>
              </div>
              <div className="flex w-[450px] flex-col gap-[8px] items-end shrink-0 flex-nowrap relative z-[84]">
                <div className="flex gap-[4px] justify-end items-start self-stretch shrink-0 flex-nowrap relative z-[85]">
                  <span className="h-[22px] shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-normal leading-[21.875px] text-[#e53e3e] relative text-left whitespace-nowrap z-[86]">
                    *
                  </span>
                  <span className="flex w-[121px] h-[22px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-semibold leading-[21.875px] text-[#2d3748] relative text-right whitespace-nowrap z-[87]">
                    مدل درآمدی استارتاپ
                  </span>
                </div>
                <div className="flex h-[48px] pt-0 pr-[16px] pb-0 pl-[16px] gap-[12px] items-center self-stretch shrink-0 flex-nowrap bg-[#fff] rounded-[12px] border-solid border border-[#e4ebf1] relative z-[88]">
                  <span className="h-[22px] grow shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-normal leading-[21.875px] text-[#1a202c] relative text-right whitespace-nowrap z-[89]">
                    فروش اشتراک (SaaS) / کارمزد از سرمایه‌گذاری
                  </span>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-[12px] items-end self-stretch shrink-0 flex-nowrap relative z-[90]">
              <div className="flex gap-[4px] justify-end items-start self-stretch shrink-0 flex-nowrap relative z-[91]">
                <span className="flex w-[221px] h-[23px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[15px] font-bold leading-[23px] text-[#2d3748] relative text-right whitespace-nowrap z-[92]">
                  شاخص‌های عملکردی فعلی (اختیاری)
                </span>
              </div>
              <div className="flex gap-[16px] items-start self-stretch shrink-0 flex-nowrap relative z-[93]">
                <div className="flex w-[450px] flex-col gap-[8px] items-end shrink-0 flex-nowrap relative z-[94]">
                  <div className="flex gap-[4px] justify-end items-start self-stretch shrink-0 flex-nowrap relative z-[95]">
                    <span className="flex w-[159px] h-[22px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-semibold leading-[21.875px] text-[#2d3748] relative text-right whitespace-nowrap z-[96]">
                      تعداد مشتریان پرداخت‌کننده
                    </span>
                  </div>
                  <div className="flex h-[48px] pt-0 pr-[16px] pb-0 pl-[16px] gap-[12px] items-center self-stretch shrink-0 flex-nowrap bg-[#fff] rounded-[12px] border-solid border border-[#e4ebf1] relative z-[97]">
                    <span className="h-[22px] grow shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-normal leading-[21.875px] text-[#1a202c] relative text-right whitespace-nowrap z-[98]">
                      ۱۲ مرکز نوآوری
                    </span>
                  </div>
                </div>
                <div className="flex w-[450px] flex-col gap-[8px] items-end shrink-0 flex-nowrap relative z-[99]">
                  <div className="flex gap-[4px] justify-end items-start self-stretch shrink-0 flex-nowrap relative z-[100]">
                    <span className="flex w-[148px] h-[22px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-semibold leading-[21.875px] text-[#2d3748] relative text-right whitespace-nowrap z-[101]">
                      تعداد کاربران فعال سیستم
                    </span>
                  </div>
                  <div className="flex h-[48px] pt-0 pr-[16px] pb-0 pl-[16px] gap-[12px] items-center self-stretch shrink-0 flex-nowrap bg-[#fff] rounded-[12px] border-solid border border-[#e4ebf1] relative z-[102]">
                    <span className="h-[22px] grow shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-normal leading-[21.875px] text-[#1a202c] relative text-right whitespace-nowrap z-[103]">
                      ۱۵۰ مدیر و مربی
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex gap-[16px] items-start self-stretch shrink-0 flex-nowrap relative z-[104]">
                <div className="flex w-[450px] flex-col gap-[8px] items-end shrink-0 flex-nowrap relative z-[105]">
                  <div className="flex gap-[4px] justify-end items-start self-stretch shrink-0 flex-nowrap relative z-[106]">
                    <span className="flex w-[124px] h-[22px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-semibold leading-[21.875px] text-[#2d3748] relative text-right whitespace-nowrap z-[107]">
                      نرخ رشد سه‌ماهه اخیر
                    </span>
                  </div>
                  <div className="flex h-[48px] pt-0 pr-[16px] pb-0 pl-[16px] gap-[12px] items-center self-stretch shrink-0 flex-nowrap bg-[#fff] rounded-[12px] border-solid border border-[#e4ebf1] relative z-[108]">
                    <span className="h-[22px] grow shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-normal leading-[21.875px] text-[#1a202c] relative text-right whitespace-nowrap z-[109]">
                      ۲۵٪
                    </span>
                  </div>
                </div>
                <div className="flex w-[450px] flex-col gap-[8px] items-end shrink-0 flex-nowrap relative z-[110]">
                  <div className="flex gap-[4px] justify-end items-start self-stretch shrink-0 flex-nowrap relative z-[111]">
                    <span className="flex w-[163px] h-[22px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-semibold leading-[21.875px] text-[#2d3748] relative text-right whitespace-nowrap z-[112]">
                      درآمد میانگین ماهانه (تومان)
                    </span>
                  </div>
                  <div className="flex h-[48px] pt-0 pr-[16px] pb-0 pl-[16px] gap-[12px] items-center self-stretch shrink-0 flex-nowrap bg-[#fff] rounded-[12px] border-solid border border-[#e4ebf1] relative z-[113]">
                    <span className="h-[22px] grow shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-normal leading-[21.875px] text-[#1a202c] relative text-right whitespace-nowrap z-[114]">
                      ۸۰,۰۰۰,۰۰۰ تومان
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-[16px] items-end self-stretch shrink-0 flex-nowrap relative z-[115]">
              <div className="flex justify-between items-center self-stretch shrink-0 flex-nowrap relative z-[116]">
                <div className="flex w-[152px] pt-[6px] pr-[12px] pb-[6px] pl-[12px] items-start shrink-0 flex-nowrap rounded-[8px] border-solid border border-[#2094e3] relative z-[117]">
                  <span className="flex w-[128px] h-[19px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[12px] font-semibold leading-[18.75px] text-[#2094e3] relative text-right whitespace-nowrap z-[118]">
                    + افزودن عضو جدید به تیم
                  </span>
                </div>
                <span className="flex w-[155px] h-[23px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[15px] font-bold leading-[23px] text-[#2d3748] relative text-right whitespace-nowrap z-[119]">
                  اعضای اصلی تیم استارتاپ
                </span>
              </div>
              <div className="flex gap-[16px] items-start self-stretch shrink-0 flex-nowrap relative z-[120]">
                <div className="flex w-[450px] pt-[16px] pr-[16px] pb-[16px] pl-[16px] gap-[12px] justify-end items-center shrink-0 flex-nowrap rounded-[12px] border-solid border border-[#e2e8f0] relative z-[121]">
                  <div className="flex flex-col gap-[4px] items-end grow shrink-0 basis-0 flex-nowrap relative z-[122]">
                    <span className="flex w-[53px] h-[22px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-bold leading-[21.875px] text-[#1a202c] relative text-right whitespace-nowrap z-[123]">
                      علی علوی
                    </span>
                    <span className="flex w-[146px] h-[19px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[12px] font-normal leading-[18.75px] text-[#718096] relative text-right whitespace-nowrap z-[124]">
                      هم‌بنیان‌گذار و مدیر فنی (CTO)
                    </span>
                    <div className="flex w-[56px] pt-[2px] pr-[8px] pb-[2px] pl-[8px] items-start shrink-0 flex-nowrap bg-[#eaf8f0] rounded-[4px] relative z-[125]">
                      <span className="flex w-[40px] h-[17px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[11px] font-semibold leading-[17px] text-[#159455] relative text-right whitespace-nowrap z-[126]">
                        تمام‌وقت
                      </span>
                    </div>
                  </div>
                  <div className="flex w-[48px] h-[48px] justify-center items-center shrink-0 flex-nowrap bg-[#e2e8f0] rounded-[24px] relative z-[127]">
                    <span className="flex w-[15px] h-[19px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[12px] font-normal leading-[18.75px] text-[#4a5568] relative text-right whitespace-nowrap z-[128]">
                      ع‌ع
                    </span>
                  </div>
                </div>
                <div className="flex w-[450px] pt-[16px] pr-[16px] pb-[16px] pl-[16px] gap-[12px] justify-end items-center shrink-0 flex-nowrap rounded-[12px] border-solid border border-[#e2e8f0] relative z-[129]">
                  <div className="flex flex-col gap-[4px] items-end grow shrink-0 basis-0 flex-nowrap relative z-[130]">
                    <span className="flex w-[67px] h-[22px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-bold leading-[21.875px] text-[#1a202c] relative text-right whitespace-nowrap z-[131]">
                      سارا حسینی
                    </span>
                    <span className="flex w-[159px] h-[19px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[12px] font-normal leading-[18.75px] text-[#718096] relative text-right whitespace-nowrap z-[132]">
                      مدیر محصول و طراح تجربه کاربری
                    </span>
                    <div className="flex w-[52px] pt-[2px] pr-[8px] pb-[2px] pl-[8px] items-start shrink-0 flex-nowrap bg-[#eaf5fd] rounded-[4px] relative z-[133]">
                      <span className="flex w-[36px] h-[17px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[11px] font-semibold leading-[17px] text-[#2094e3] relative text-right whitespace-nowrap z-[134]">
                        پاره‌وقت
                      </span>
                    </div>
                  </div>
                  <div className="flex w-[48px] h-[48px] justify-center items-center shrink-0 flex-nowrap bg-[#e2e8f0] rounded-[24px] relative z-[135]">
                    <span className="flex w-[23px] h-[19px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[12px] font-normal leading-[18.75px] text-[#4a5568] relative text-right whitespace-nowrap z-[136]">
                      س‌ح
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex pt-[24px] pr-0 pb-0 pl-0 justify-between items-center self-stretch shrink-0 flex-nowrap border-solid border-b border-b-[#e4ebf1] relative z-[137]">
              <div className="flex w-[230px] gap-[16px] items-center shrink-0 flex-nowrap relative z-[138]">
                <div className="flex w-[98px] h-[44px] pt-[11px] pr-[20px] pb-[11px] pl-[20px] items-center shrink-0 flex-nowrap rounded-[12px] border-solid border border-[#e2e8f0] relative z-[139]">
                  <span className="flex w-[58px] h-[22px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-medium leading-[21.875px] text-[#4a5568] relative text-right whitespace-nowrap z-[140]">
                    مرحله قبل
                  </span>
                </div>
                <div className="flex w-[116px] pt-[11px] pr-[20px] pb-[11px] pl-[20px] gap-[8px] justify-center items-center shrink-0 flex-nowrap bg-[#2094e3] rounded-[12px] relative z-[141]">
                  <span className="flex w-[76px] h-[22px] justify-center items-start shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-medium leading-[22px] text-[#fff] relative text-center whitespace-nowrap z-[142]">
                    ذخیره و ادامه
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex pt-[24px] pr-0 pb-[40px] pl-0 flex-col gap-[16px] items-end self-stretch shrink-0 flex-nowrap relative z-[143]">
        <div className="flex flex-col gap-[12px] items-center self-stretch shrink-0 flex-nowrap relative z-[144]">
          <span className="h-[19px] self-stretch shrink-0 basis-auto font-['Vazirmatn'] text-[12px] font-normal leading-[18.75px] text-[#a0aec0] relative text-center whitespace-nowrap z-[145]">
            اطلاعات شما مطابق سیاست حریم خصوصی سامانه ماه محافظت می‌شود.
          </span>
          <div className="flex w-[180px] gap-[16px] items-center shrink-0 flex-nowrap relative z-[146]">
            <span className="flex w-[76px] h-[19px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[12px] font-normal leading-[18.75px] text-[#718096] relative text-right whitespace-nowrap z-[147]">
              قوانین و مقررات
            </span>
            <span className="h-[19px] shrink-0 basis-auto font-['Vazirmatn'] text-[12px] font-normal leading-[18.75px] text-[#a0aec0] relative text-left whitespace-nowrap z-[148]">
              |
            </span>
            <span className="flex w-[69px] h-[19px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[12px] font-normal leading-[18.75px] text-[#718096] relative text-right whitespace-nowrap z-[149]">
              حریم خصوصی
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
