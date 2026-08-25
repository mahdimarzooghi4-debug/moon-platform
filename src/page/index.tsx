import React from "react";
import "./index.css";

export default function Main() {
  return (
    <div className="main-container flex w-[1440px] flex-col items-center flex-nowrap bg-[#fcfbf8] relative overflow-hidden mx-auto my-0">
      <div className="flex h-[80px] pt-[16px] pr-[120px] pb-[16px] pl-[120px] justify-between items-center self-stretch shrink-0 flex-nowrap bg-[#fff] border-solid border-t border-t-[#e4ebf1] relative">
        <div className="flex w-[246px] gap-[24px] items-center shrink-0 flex-nowrap relative z-[1]">
          <span className="flex w-[130px] h-[22px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-medium leading-[21.875px] text-[#60758a] relative text-right whitespace-nowrap z-[2]">
            بازگشت به صفحه اصلی
          </span>
          <span className="flex w-[92px] h-[22px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-medium leading-[21.875px] text-[#60758a] relative text-right whitespace-nowrap z-[3]">
            مشاهده پروژه‌ها
          </span>
        </div>
        <div className="w-[137px] h-[46px] shrink-0 bg-[url(/assets/8KYyQggdL6.png)] bg-cover bg-no-repeat relative z-[4]" />
      </div>
      <div className="flex pt-[48px] pr-[120px] pb-[80px] pl-[120px] flex-col gap-[40px] items-center self-stretch shrink-0 flex-nowrap relative z-[5]">
        <div className="flex flex-col gap-[8px] items-end self-stretch shrink-0 flex-nowrap relative z-[6]">
          <span className="h-[38px] self-stretch shrink-0 basis-auto font-['Vazirmatn'] text-[24px] font-bold leading-[37.5px] text-[#17324d] relative text-right whitespace-nowrap z-[7]">
            حالت‌های خطا — نتیجه پرداخت
          </span>
          <span className="h-[22px] self-stretch shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-normal leading-[21.875px] text-[#60758a] relative text-right whitespace-nowrap z-[8]">
            خطاهای احتمالی در فرآیند تایید تراکنش و راه‌های برطرف‌سازی موقت
            آن‌ها
          </span>
        </div>
        <div className="flex flex-col gap-[24px] items-start self-stretch shrink-0 flex-nowrap relative z-[9]">
          <div className="flex gap-[24px] items-start self-stretch shrink-0 flex-nowrap relative z-10">
            <div className="flex pt-[24px] pr-[24px] pb-[24px] pl-[24px] flex-col gap-[16px] items-end grow shrink-0 basis-0 flex-nowrap bg-[#fff] rounded-[20px] border-solid border border-[#e4ebf1] relative shadow-[0_4px_16px_0_rgba(22,45,71,0.08)] z-[11]">
              <div className="flex gap-[12px] justify-end items-center self-stretch shrink-0 flex-nowrap relative z-[12]">
                <span className="h-[25px] grow shrink-0 basis-auto font-['Vazirmatn'] text-[16px] font-bold leading-[25px] text-[#17324d] relative text-right whitespace-nowrap z-[13]">
                  وضعیت نامشخص
                </span>
                <div className="flex w-[40px] h-[40px] flex-col justify-center items-center shrink-0 flex-nowrap bg-[#fce8e6] rounded-[20px] relative z-[14]">
                  <div className="w-[20px] h-[20px] shrink-0 bg-[url(/assets/SDkvFzNhkW.png)] bg-cover bg-no-repeat relative overflow-hidden z-[15]" />
                </div>
              </div>
              <span className="flex w-[336px] h-[44px] justify-end items-start self-stretch shrink-0 font-['Vazirmatn'] text-[14px] font-normal leading-[22px] text-[#60758a] relative text-right z-[16]">
                وضعیت تراکنش قابل تعیین نیست. لطفاً دقایقی بعد تلاش کنید.
              </span>
              <div className="flex pt-[12px] pr-[12px] pb-[12px] pl-[12px] flex-col items-end self-stretch shrink-0 flex-nowrap bg-[#f8f9fa] rounded-[12px] relative z-[17]">
                <span className="flex w-[312px] h-[36px] justify-end items-start self-stretch shrink-0 font-['Vazirmatn'] text-[12px] font-normal leading-[18px] text-[#60758a] relative text-right z-[18]">
                  در صورت کسر وجه از حساب شما، مبلغ نهایتاً ظرف ۷۲ ساعت آینده به
                  صورت خودکار بازگردانده خواهد شد.
                </span>
              </div>
              <div className="flex h-[100px] pt-0 pr-0 pb-0 pl-0 items-start self-stretch shrink-0 flex-nowrap relative z-[19]" />
            </div>
            <div className="flex pt-[24px] pr-[24px] pb-[24px] pl-[24px] flex-col gap-[16px] items-end grow shrink-0 basis-0 flex-nowrap bg-[#fff] rounded-[20px] border-solid border border-[#e4ebf1] relative shadow-[0_4px_16px_0_rgba(22,45,71,0.08)] z-20">
              <div className="flex gap-[12px] justify-end items-center self-stretch shrink-0 flex-nowrap relative z-[21]">
                <span className="h-[25px] grow shrink-0 basis-auto font-['Vazirmatn'] text-[16px] font-bold leading-[25px] text-[#17324d] relative text-right whitespace-nowrap z-[22]">
                  کد پیگیری نامعتبر
                </span>
                <div className="flex w-[40px] h-[40px] flex-col justify-center items-center shrink-0 flex-nowrap bg-[#fce8e6] rounded-[20px] relative z-[23]">
                  <div className="w-[20px] h-[20px] shrink-0 bg-[url(/assets/7N1nkJ2tnO.png)] bg-cover bg-no-repeat relative overflow-hidden z-[24]" />
                </div>
              </div>
              <span className="h-[22px] self-stretch shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-normal leading-[22px] text-[#60758a] relative text-right whitespace-nowrap z-[25]">
                کد پیگیری وارد شده معتبر نیست یا منقضی شده است.
              </span>
              <div className="flex pt-[12px] pr-[12px] pb-[12px] pl-[12px] flex-col items-end self-stretch shrink-0 flex-nowrap bg-[#f8f9fa] rounded-[12px] relative z-[26]">
                <span className="flex w-[312px] h-[36px] justify-end items-start self-stretch shrink-0 font-['Vazirmatn'] text-[12px] font-normal leading-[18px] text-[#60758a] relative text-right z-[27]">
                  کد پیگیری تراکنش یکبار مصرف بوده و پس از گذشت زمان معین از
                  درجه اعتبار ساقط می‌شود.
                </span>
              </div>
              <div className="flex h-[100px] pt-0 pr-0 pb-0 pl-0 items-start self-stretch shrink-0 flex-nowrap relative z-[28]" />
            </div>
            <div className="flex pt-[24px] pr-[24px] pb-[24px] pl-[24px] flex-col gap-[16px] items-end grow shrink-0 basis-0 flex-nowrap bg-[#fff] rounded-[20px] border-solid border border-[#e4ebf1] relative shadow-[0_4px_16px_0_rgba(22,45,71,0.08)] z-[29]">
              <div className="flex gap-[12px] justify-end items-center self-stretch shrink-0 flex-nowrap relative z-30">
                <span className="h-[25px] grow shrink-0 basis-auto font-['Vazirmatn'] text-[16px] font-bold leading-[25px] text-[#17324d] relative text-right whitespace-nowrap z-[31]">
                  دریافت اطلاعات تراکنش ناموفق
                </span>
                <div className="flex w-[40px] h-[40px] flex-col justify-center items-center shrink-0 flex-nowrap bg-[#fce8e6] rounded-[20px] relative z-[32]">
                  <div className="w-[20px] h-[20px] shrink-0 bg-[url(/assets/vaS7EOmQgr.png)] bg-cover bg-no-repeat relative overflow-hidden z-[33]" />
                </div>
              </div>
              <span className="h-[22px] self-stretch shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-normal leading-[22px] text-[#60758a] relative text-right whitespace-nowrap z-[34]">
                اطلاعات پرداخت از درگاه بانکی دریافت نشد.
              </span>
              <div className="flex pt-[12px] pr-[12px] pb-[12px] pl-[12px] flex-col items-end self-stretch shrink-0 flex-nowrap bg-[#f8f9fa] rounded-[12px] relative z-[35]">
                <span className="flex w-[312px] h-[36px] justify-end items-start self-stretch shrink-0 font-['Vazirmatn'] text-[12px] font-normal leading-[18px] text-[#60758a] relative text-right z-[36]">
                  ارتباط با سرور مرکزی درگاه با اختلال مواجه شده است. لطفاً
                  وضعیت حساب بانکی خود را بررسی نمایید.
                </span>
              </div>
              <div className="flex h-[100px] pt-0 pr-0 pb-0 pl-0 items-start self-stretch shrink-0 flex-nowrap relative z-[37]" />
            </div>
          </div>
          <div className="flex gap-[24px] items-start self-stretch shrink-0 flex-nowrap relative z-[38]">
            <div className="flex pt-[24px] pr-[24px] pb-[24px] pl-[24px] flex-col gap-[16px] items-end grow shrink-0 basis-0 flex-nowrap bg-[#fff] rounded-[20px] border-solid border border-[#e4ebf1] relative shadow-[0_4px_16px_0_rgba(22,45,71,0.08)] z-[39]">
              <div className="flex gap-[12px] justify-end items-center self-stretch shrink-0 flex-nowrap relative z-40">
                <span className="h-[25px] grow shrink-0 basis-auto font-['Vazirmatn'] text-[16px] font-bold leading-[25px] text-[#17324d] relative text-right whitespace-nowrap z-[41]">
                  قطع ارتباط با درگاه
                </span>
                <div className="flex w-[40px] h-[40px] flex-col justify-center items-center shrink-0 flex-nowrap bg-[#fce8e6] rounded-[20px] relative z-[42]">
                  <div className="w-[20px] h-[20px] shrink-0 bg-[url(/assets/fXGh1SGzms.png)] bg-cover bg-no-repeat relative overflow-hidden z-[43]" />
                </div>
              </div>
              <span className="h-[22px] self-stretch shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-normal leading-[22px] text-[#60758a] relative text-right whitespace-nowrap z-[44]">
                ارتباط با درگاه بانکی قطع شده است.
              </span>
              <div className="flex pt-[12px] pr-[12px] pb-[12px] pl-[12px] flex-col items-end self-stretch shrink-0 flex-nowrap bg-[#f8f9fa] rounded-[12px] relative z-[45]">
                <span className="flex w-[312px] h-[36px] justify-end items-start self-stretch shrink-0 font-['Vazirmatn'] text-[12px] font-normal leading-[18px] text-[#60758a] relative text-right z-[46]">
                  تراکنش به درستی آغاز نشد؛ هیچ وجهی از حساب شما کسر نگردیده
                  است. می‌توانید فرآیند را تکرار کنید.
                </span>
              </div>
              <div className="flex h-[100px] pt-0 pr-0 pb-0 pl-0 items-start self-stretch shrink-0 flex-nowrap relative z-[47]" />
            </div>
            <div className="flex pt-[24px] pr-[24px] pb-[24px] pl-[24px] flex-col gap-[16px] items-end grow shrink-0 basis-0 flex-nowrap bg-[#fff] rounded-[20px] border-solid border border-[#e4ebf1] relative shadow-[0_4px_16px_0_rgba(22,45,71,0.08)] z-[48]">
              <div className="flex gap-[12px] justify-end items-center self-stretch shrink-0 flex-nowrap relative z-[49]">
                <span className="h-[25px] grow shrink-0 basis-auto font-['Vazirmatn'] text-[16px] font-bold leading-[25px] text-[#17324d] relative text-right whitespace-nowrap z-50">
                  خطای چاپ
                </span>
                <div className="flex w-[40px] h-[40px] flex-col justify-center items-center shrink-0 flex-nowrap bg-[#fce8e6] rounded-[20px] relative z-[51]">
                  <div className="w-[20px] h-[20px] shrink-0 bg-[url(/assets/VDJ5Bb0pQC.png)] bg-cover bg-no-repeat relative overflow-hidden z-[52]" />
                </div>
              </div>
              <span className="h-[22px] self-stretch shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-normal leading-[22px] text-[#60758a] relative text-right whitespace-nowrap z-[53]">
                امکان چاپ رسید در مرورگر فعلی وجود ندارد.
              </span>
              <div className="flex pt-[12px] pr-[12px] pb-[12px] pl-[12px] flex-col items-end self-stretch shrink-0 flex-nowrap bg-[#f8f9fa] rounded-[12px] relative z-[54]">
                <span className="flex w-[312px] h-[36px] justify-end items-start self-stretch shrink-0 font-['Vazirmatn'] text-[12px] font-normal leading-[18px] text-[#60758a] relative text-right z-[55]">
                  برخی از مرورگرهای موبایل از قابلیت پیش‌نمایش چاپ پشتیبانی
                  نمی‌کنند. نسخه PDF را دریافت نمایید.
                </span>
              </div>
              <div className="flex items-start self-stretch shrink-0 flex-nowrap relative z-[56]">
                <span className="flex w-[101px] h-[22px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-medium leading-[21.875px] text-[#2094e3] relative text-right underline whitespace-nowrap z-[57]">
                  دریافت رسید PDF
                </span>
              </div>
            </div>
            <div className="flex pt-[24px] pr-[24px] pb-[24px] pl-[24px] flex-col gap-[16px] items-end grow shrink-0 basis-0 flex-nowrap bg-[#fff] rounded-[20px] border-solid border border-[#e4ebf1] relative shadow-[0_4px_16px_0_rgba(22,45,71,0.08)] z-[58]">
              <div className="flex gap-[12px] justify-end items-center self-stretch shrink-0 flex-nowrap relative z-[59]">
                <span className="h-[25px] grow shrink-0 basis-auto font-['Vazirmatn'] text-[16px] font-bold leading-[25px] text-[#17324d] relative text-right whitespace-nowrap z-[60]">
                  خطای دریافت رسید
                </span>
                <div className="flex w-[40px] h-[40px] flex-col justify-center items-center shrink-0 flex-nowrap bg-[#fce8e6] rounded-[20px] relative z-[61]">
                  <div className="w-[20px] h-[20px] shrink-0 bg-[url(/assets/tcickNnyRe.png)] bg-cover bg-no-repeat relative overflow-hidden z-[62]" />
                </div>
              </div>
              <span className="h-[22px] self-stretch shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-normal leading-[22px] text-[#60758a] relative text-right whitespace-nowrap z-[63]">
                رسید پرداخت در حال حاضر قابل دریافت نیست.
              </span>
              <div className="flex pt-[12px] pr-[12px] pb-[12px] pl-[12px] flex-col items-end self-stretch shrink-0 flex-nowrap bg-[#f8f9fa] rounded-[12px] relative z-[64]">
                <span className="flex w-[312px] h-[36px] justify-end items-start self-stretch shrink-0 font-['Vazirmatn'] text-[12px] font-normal leading-[18px] text-[#60758a] relative text-right z-[65]">
                  سامانه ثبت اسناد و رسیدهای دیجیتال موقتاً با تاخیر مواجه است.
                  لطفاً دقایقی دیگر اقدام کنید.
                </span>
              </div>
              <div className="flex h-[100px] pt-0 pr-0 pb-0 pl-0 items-start self-stretch shrink-0 flex-nowrap relative z-[66]" />
            </div>
          </div>
        </div>
        <div className="flex pt-[16px] pr-[16px] pb-[16px] pl-[16px] gap-[12px] items-center self-stretch shrink-0 flex-nowrap bg-[#fff9e6] rounded-[16px] border-solid border border-[#e4ebf1] relative z-[67]">
          <div className="flex flex-col gap-[4px] items-end grow shrink-0 basis-0 flex-nowrap relative z-[68]">
            <span className="h-[22px] self-stretch shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-bold leading-[21.875px] text-[#17324d] relative text-right whitespace-nowrap z-[69]">
              راهنمای عمومی پیگیری خطا
            </span>
            <span className="h-[20px] self-stretch shrink-0 basis-auto font-['Vazirmatn'] text-[13px] font-normal leading-[20px] text-[#60758a] relative text-right whitespace-nowrap z-[70]">
              دریافت نتیجه پرداخت انجام نشد. با استفاده از کد پیگیری، وضعیت را
              دوباره بررسی کنید. در صورت بروز هرگونه مشکل مستمر، پشتیبانی سامانه
              ماه آماده پاسخگویی است.
            </span>
          </div>
          <div className="flex w-[36px] h-[36px] flex-col justify-center items-center shrink-0 flex-nowrap bg-[#fff1d2] rounded-[18px] relative z-[71]">
            <div className="w-[18px] h-[18px] shrink-0 bg-[url(/assets/FbpbFm865c.png)] bg-cover bg-no-repeat relative overflow-hidden z-[72]" />
          </div>
        </div>
      </div>
      <div className="flex pt-[40px] pr-[120px] pb-[40px] pl-[120px] flex-col gap-[16px] items-center self-stretch shrink-0 flex-nowrap bg-[#111e30] relative z-[73]">
        <span className="flex w-[199px] h-[19px] justify-center items-start shrink-0 basis-auto font-['Vazirmatn'] text-[12px] font-normal leading-[18.75px] text-[rgba(255,255,255,0.6)] relative text-center whitespace-nowrap z-[74]">
          تمامی حقوق برای سامانه ماه محفوظ است
        </span>
      </div>
    </div>
  );
}
