import React from "react";
import "./index.css";

export default function Main() {
  return (
    <div className="main-container flex w-[1440px] flex-col items-center flex-nowrap bg-[#f7fafc] relative mx-auto my-0">
      <div className="flex h-[80px] pt-0 pr-[120px] pb-0 pl-[120px] justify-between items-center self-stretch shrink-0 flex-nowrap bg-[#fff] border-solid border-t border-t-[#e2e8f0] relative">
        <div className="flex w-[292px] gap-[24px] items-center shrink-0 flex-nowrap relative z-[1]">
          <div className="flex w-[89px] gap-[8px] items-center shrink-0 flex-nowrap relative z-[2]">
            <span className="flex w-[89px] h-[22px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-medium leading-[21.875px] text-[#4a5568] relative text-right whitespace-nowrap z-[3]">
              خروج از سیستم
            </span>
          </div>
          <div className="flex w-px h-[16px] items-start shrink-0 flex-nowrap bg-[#e2e8f0] relative z-[4]" />
          <div className="flex w-[154px] gap-[8px] items-center shrink-0 flex-nowrap relative z-[5]">
            <div className="w-[16px] h-[16px] shrink-0 bg-[url(/assets/codia/ukqtR1ciGB.svg)] bg-cover bg-no-repeat relative overflow-hidden z-[6]" />
            <span className="flex w-[130px] h-[22px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-medium leading-[21.875px] text-[#718096] relative text-right whitespace-nowrap z-[7]">
              بازگشت به صفحه اصلی
            </span>
          </div>
        </div>
        <div className="flex w-[137px] gap-[12px] items-center shrink-0 flex-nowrap relative z-[8]">
          <div className="flex w-[137px] gap-[12px] items-center shrink-0 flex-nowrap relative z-[9]">
            <img
              className="w-[137px] h-[46px] shrink-0 object-contain relative z-10"
              src="/assets/codia/j98wBg1CX9.png"
              alt="سامانه ماه"
            />
          </div>
        </div>
      </div>
      <div className="flex pt-[64px] pr-0 pb-[64px] pl-0 flex-col gap-[32px] items-center self-stretch shrink-0 flex-nowrap relative z-[11]">
        <div className="flex w-[880px] pt-[36px] pr-[36px] pb-[36px] pl-[36px] flex-col gap-[28px] items-start shrink-0 flex-nowrap bg-[#fff] rounded-[24px] border-solid border border-[#e2e8f0] relative shadow-[0_4px_20px_0_rgba(0,0,0,0.02)] z-[12]">
          <div className="flex justify-between items-center self-stretch shrink-0 flex-nowrap relative z-[13]">
            <div className="flex w-[131px] pt-[6px] pr-[12px] pb-[6px] pl-[12px] justify-center items-center shrink-0 flex-nowrap bg-[#fff6e5] rounded-[100px] relative z-[14]">
              <span className="flex w-[107px] h-[19px] justify-center items-start shrink-0 basis-auto font-['Vazirmatn'] text-[12px] font-semibold leading-[18.75px] text-[#d97706] relative text-center whitespace-nowrap z-[15]">
                نیازمند تکمیل اطلاعات
              </span>
            </div>
            <div className="flex w-[284px] flex-col gap-[4px] items-end shrink-0 flex-nowrap relative z-[16]">
              <span className="flex w-[284px] h-[31px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[20px] font-bold leading-[31px] text-[#1a202c] relative text-right whitespace-nowrap z-[17]">
                وضعیت درخواست ثبت‌نام استارتاپ
              </span>
              <span className="flex w-[169px] h-[20px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[13px] font-normal leading-[20px] text-[#718096] relative text-right whitespace-nowrap z-[18]">
                آخرین به‌روزرسانی: ۲۳ مرداد ۱۴۰۵
              </span>
            </div>
          </div>
          <div className="flex h-px items-start self-stretch shrink-0 flex-nowrap bg-[#e2e8f0] relative z-[19]" />
          <div className="flex gap-[16px] items-start self-stretch shrink-0 flex-wrap relative z-20">
            <div className="flex pt-[12px] pr-[12px] pb-[12px] pl-[12px] flex-col gap-[4px] items-end grow basis-0 flex-nowrap bg-[#f7fafc] rounded-[12px] relative z-[21]">
              <span className="flex w-[96px] h-[19px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[12px] font-normal leading-[18.75px] text-[#718096] relative text-right whitespace-nowrap z-[22]">
                تاریخ ثبت درخواست
              </span>
              <span className="flex w-[76px] h-[22px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-semibold leading-[21.875px] text-[#1a202c] relative text-right whitespace-nowrap z-[23]">
                ۲۱ مرداد ۱۴۰۵
              </span>
            </div>
            <div className="flex pt-[12px] pr-[12px] pb-[12px] pl-[12px] flex-col gap-[4px] items-end grow basis-0 flex-nowrap bg-[#f7fafc] rounded-[12px] relative z-[24]">
              <span className="flex w-[48px] h-[19px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[12px] font-normal leading-[18.75px] text-[#718096] relative text-right whitespace-nowrap z-[25]">
                کد پیگیری
              </span>
              <span className="flex w-[118px] h-[22px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-semibold leading-[21.875px] text-[#1a202c] relative text-right whitespace-nowrap z-[26]">
                MAH-S-۱۴۰۵-۰۰۳۸
              </span>
            </div>
            <div className="flex pt-[12px] pr-[12px] pb-[12px] pl-[12px] flex-col gap-[4px] items-end grow basis-0 flex-nowrap bg-[#f7fafc] rounded-[12px] relative z-[27]">
              <span className="flex w-[58px] h-[19px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[12px] font-normal leading-[18.75px] text-[#718096] relative text-right whitespace-nowrap z-[28]">
                نام استارتاپ
              </span>
              <span className="flex w-[79px] h-[22px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-semibold leading-[21.875px] text-[#1a202c] relative text-right whitespace-nowrap z-[29]">
                راهکار سبز آریا
              </span>
            </div>
            <div className="flex pt-[12px] pr-[12px] pb-[12px] pl-[12px] flex-col gap-[4px] items-end grow basis-0 flex-nowrap bg-[#f7fafc] rounded-[12px] relative z-30">
              <span className="flex w-[66px] h-[19px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[12px] font-normal leading-[18.75px] text-[#718096] relative text-right whitespace-nowrap z-[31]">
                نوع درخواست
              </span>
              <span className="flex w-[166px] h-[22px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-semibold leading-[21.875px] text-[#1a202c] relative text-right whitespace-nowrap z-[32]">
                ثبت‌نام شتابدهنده و استارتاپ
              </span>
            </div>
          </div>
          <div className="flex pt-[20px] pr-[20px] pb-[20px] pl-[20px] flex-col gap-[16px] items-start self-stretch shrink-0 flex-nowrap bg-[#fff6e5] rounded-[16px] border-solid border border-[#d97706] relative z-[33]">
            <div className="flex justify-between items-center self-stretch shrink-0 flex-nowrap relative z-[34]">
              <span className="flex w-[228px] h-[22px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-bold leading-[21.875px] text-[#d97706] relative text-right whitespace-nowrap z-[35]">
                مهلت اصلاح و ویرایش: تا ۵ شهریور ۱۴۰۵
              </span>
              <div className="flex w-[227px] gap-[8px] items-center shrink-0 flex-nowrap relative z-[36]">
                <span className="flex w-[201px] h-[23px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[15px] font-bold leading-[23px] text-[#d97706] relative text-right whitespace-nowrap z-[37]">
                  موارد نیازمند اصلاح و نقص مدارک
                </span>
                <div className="w-[18px] h-[18px] shrink-0 bg-[url(/assets/codia/nyD2kijybL.svg)] bg-cover bg-no-repeat relative overflow-hidden z-[38]" />
              </div>
            </div>
            <div className="flex flex-col gap-[10px] items-end self-stretch shrink-0 flex-nowrap relative z-[39]">
              <span className="flex w-[525px] h-[20px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[13px] font-normal leading-[20px] text-[#1a202c] relative text-right whitespace-nowrap z-40">
                • تصویر معرفی‌نامه نماینده رسمی استارتاپ خوانا نیست؛ لطفاً اسکن
                رنگی یا باکیفیت جدید بارگذاری کنید.
              </span>
              <span className="flex w-[497px] h-[20px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[13px] font-normal leading-[20px] text-[#1a202c] relative text-right whitespace-nowrap z-[41]">
                • فایل ارائه‌ معرفی یا همان Pitch Deck ارائه‌شده ناقص است و
                بخش‌های مدل درآمدی خالی است.
              </span>
              <span className="flex w-[476px] h-[20px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[13px] font-normal leading-[20px] text-[#1a202c] relative text-right whitespace-nowrap z-[42]">
                • آخرین آگهی روزنامه رسمی تغییرات استارتاپ با اعضای هیئت‌مدیره
                معرفی‌شده مطابقت ندارد.
              </span>
            </div>
          </div>
          <div className="flex w-[377px] gap-[12px] justify-center items-center self-stretch shrink-0 flex-nowrap relative z-[43]">
            <div className="flex w-[144px] h-[48px] pt-[12px] pr-[24px] pb-[12px] pl-[24px] justify-center items-center shrink-0 flex-nowrap rounded-[12px] relative overflow-hidden z-[44]">
              <span className="h-[25px] grow shrink-0 basis-auto font-['Vazirmatn'] text-[16px] font-bold leading-[25px] text-[#fff] relative text-center whitespace-nowrap z-[45]">
                تکمیل اطلاعات
              </span>
            </div>
            <div className="flex w-[221px] h-[48px] pt-[12px] pr-[24px] pb-[12px] pl-[24px] justify-center items-center shrink-0 flex-nowrap bg-[#fff] rounded-[12px] border-solid border border-[#e2e8f0] relative overflow-hidden z-[46]">
              <span className="h-[25px] grow shrink-0 basis-auto font-['Vazirmatn'] text-[16px] font-bold leading-[25px] text-[#333f54] relative text-center whitespace-nowrap z-[47]">
                مشاهده جزئیات درخواست
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
