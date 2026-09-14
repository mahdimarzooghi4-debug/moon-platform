import React from "react";
import "./index.css";

const toLatinDigits = (value: string) =>
  value
    .replace(/[۰-۹]/g, (digit) => String("۰۱۲۳۴۵۶۷۸۹".indexOf(digit)))
    .replace(/[٠-٩]/g, (digit) => String("٠١٢٣٤٥٦٧٨٩".indexOf(digit)));

const toPersianDigits = (value: string) => value.replace(/\d/g, (digit) => "۰۱۲۳۴۵۶۷۸۹"[Number(digit)]);

function maskMobile(value: string) {
  const digits = toLatinDigits(value).replace(/\D/g, "");
  if (digits.length < 7) return "۰۹۱۲•••۴۵۶۷";
  return `${toPersianDigits(digits.slice(0, 4))}•••${toPersianDigits(digits.slice(-4))}`;
}

export default function Main() {
  const params = new URLSearchParams(window.location.search);
  const trackingCode = params.get("code") || "MAH-P-۱۴۰۵-۰۰۲۸۴۶";
  const mobile = params.get("mobile") || "";

  const detailsQuery = new URLSearchParams();
  if (trackingCode) detailsQuery.set("code", trackingCode);
  if (mobile) detailsQuery.set("mobile", mobile);
  const detailsHref = `/participation/track/details?${detailsQuery.toString()}`;

  return (
    <>
      <div className="receipt-actions" dir="rtl">
        <a href={detailsHref} className="receipt-action receipt-action-secondary">
          بازگشت به جزئیات
        </a>
        <button type="button" className="receipt-action receipt-action-primary" onClick={() => window.print()}>
          چاپ / ذخیره PDF
        </button>
      </div>

      <div className="main-container flex w-[595px] h-[842px] pt-[40px] pr-[40px] pb-[40px] pl-[40px] flex-col gap-[24px] items-start flex-nowrap bg-[#fff] relative overflow-hidden mx-auto my-0">
        <div className="flex flex-col gap-[12px] items-center self-stretch shrink-0 flex-nowrap relative">
          <div className="w-[137px] h-[46px] shrink-0 bg-[url(https://static.codia.ai/image/2026-08-24/DtUrYC5R5Y.png)] bg-cover bg-no-repeat relative z-[1]" />
          <span className="flex w-[126px] h-[25px] justify-center items-start shrink-0 basis-auto font-['Vazirmatn'] text-[16px] font-bold leading-[25px] text-[#17324d] relative text-center whitespace-nowrap z-[2]">
            رسید مشارکت فردی
          </span>
          <div className="h-px self-stretch shrink-0 bg-[url(https://static.codia.ai/image/2026-08-24/N1jbnDfhdz.png)] bg-cover bg-no-repeat relative z-[3]" />
        </div>
        <div className="flex flex-col items-end self-stretch shrink-0 flex-nowrap relative z-[4]">
          <div className="flex pt-[12px] pr-[4px] pb-[12px] pl-[4px] justify-between items-center self-stretch shrink-0 flex-nowrap border-solid border-t border-t-[#e4ebf1] relative z-[5]">
            <span className="flex w-[117px] h-[22px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-medium leading-[21.875px] text-[#17324d] relative text-right whitespace-nowrap z-[6]">اشتغال زنان روستایی</span>
            <span className="flex w-[47px] h-[22px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-normal leading-[21.875px] text-[#60758a] relative text-right whitespace-nowrap z-[7]">نام پروژه</span>
          </div>
          <div className="flex pt-[12px] pr-[4px] pb-[12px] pl-[4px] justify-between items-center self-stretch shrink-0 flex-nowrap border-solid border-t border-t-[#e4ebf1] relative z-[8]">
            <span className="flex w-[59px] h-[22px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-medium leading-[21.875px] text-[#17324d] relative text-right whitespace-nowrap z-[9]">راهکار سبز</span>
            <span className="flex w-[84px] h-[22px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-normal leading-[21.875px] text-[#60758a] relative text-right whitespace-nowrap z-10">استارتاپ مجری</span>
          </div>
          <div className="flex pt-[12px] pr-[4px] pb-[12px] pl-[4px] justify-between items-center self-stretch shrink-0 flex-nowrap border-solid border-t border-t-[#e4ebf1] relative z-[11]">
            <span className="flex w-[42px] h-[22px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-medium leading-[21.875px] text-[#17324d] relative text-right whitespace-nowrap z-[12]">گلستان</span>
            <span className="flex w-[33px] h-[22px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-normal leading-[21.875px] text-[#60758a] relative text-right whitespace-nowrap z-[13]">استان</span>
          </div>
          <div className="flex pt-[12px] pr-[4px] pb-[12px] pl-[4px] justify-between items-center self-stretch shrink-0 flex-nowrap border-solid border-t border-t-[#e4ebf1] relative z-[14]">
            <span className="flex w-[80px] h-[22px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-bold leading-[21.875px] text-[#2094e3] relative text-right whitespace-nowrap z-[15]">۳۰۰٬۰۰۰ تومان</span>
            <span className="flex w-[75px] h-[22px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-normal leading-[21.875px] text-[#60758a] relative text-right whitespace-nowrap z-[16]">مبلغ مشارکت</span>
          </div>
          <div className="flex pt-[12px] pr-[4px] pb-[12px] pl-[4px] justify-between items-center self-stretch shrink-0 flex-nowrap border-solid border-t border-t-[#e4ebf1] relative z-[17]">
            <span className="flex w-[159px] h-[22px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-medium leading-[21.875px] text-[#17324d] relative text-right whitespace-nowrap z-[18]">۲۴ مرداد ۱۴۰۵، ساعت ۱۴:۳۲</span>
            <span className="flex w-[74px] h-[22px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-normal leading-[21.875px] text-[#60758a] relative text-right whitespace-nowrap z-[19]">تاریخ پرداخت</span>
          </div>
          <div className="flex pt-[12px] pr-[4px] pb-[12px] pl-[4px] justify-between items-center self-stretch shrink-0 flex-nowrap border-solid border-t border-t-[#e4ebf1] relative z-20">
            <span className="flex h-[22px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-bold leading-[21.875px] text-[#17324d] relative text-right whitespace-nowrap z-[21]">{trackingCode}</span>
            <span className="flex w-[77px] h-[22px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-normal leading-[21.875px] text-[#60758a] relative text-right whitespace-nowrap z-[22]">کد پیگیری ماه</span>
          </div>
          <div className="flex pt-[12px] pr-[4px] pb-[12px] pl-[4px] justify-between items-center self-stretch shrink-0 flex-nowrap border-solid border-t border-t-[#e4ebf1] relative z-[23]">
            <span className="flex w-[75px] h-[22px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-medium leading-[21.875px] text-[#17324d] relative text-right whitespace-nowrap z-[24]">۸۳۷۴۹۲۱۰۵۶</span>
            <span className="flex w-[99px] h-[22px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-normal leading-[21.875px] text-[#60758a] relative text-right whitespace-nowrap z-[25]">شماره مرجع بانکی</span>
          </div>
          <div className="flex pt-[12px] pr-[4px] pb-[12px] pl-[4px] justify-between items-center self-stretch shrink-0 flex-nowrap border-solid border-t border-t-[#e4ebf1] relative z-[26]">
            <span className="flex w-[90px] h-[22px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-medium leading-[21.875px] text-[#17324d] relative text-right whitespace-nowrap z-[27]">{maskMobile(mobile)}</span>
            <span className="flex w-[73px] h-[22px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-normal leading-[21.875px] text-[#60758a] relative text-right whitespace-nowrap z-[28]">شماره موبایل</span>
          </div>
          <div className="flex pt-[12px] pr-[4px] pb-[12px] pl-[4px] justify-between items-center self-stretch shrink-0 flex-nowrap border-solid border-t border-t-[#e4ebf1] relative z-[29]">
            <span className="flex w-[76px] h-[22px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-medium leading-[21.875px] text-[#159455] relative text-right whitespace-nowrap z-30">پرداخت موفق</span>
            <span className="flex w-[45px] h-[22px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-normal leading-[21.875px] text-[#60758a] relative text-right whitespace-nowrap z-[31]">وضعیت</span>
          </div>
        </div>
        <div className="flex gap-[24px] justify-end items-center self-stretch shrink-0 flex-nowrap relative z-[32]">
          <div className="flex w-[130px] h-[130px] pt-[8px] pr-[8px] pb-[8px] pl-[8px] flex-col gap-[6px] justify-center items-center shrink-0 flex-nowrap rounded-[12px] border-solid border border-[#e4ebf1] relative z-[33]">
            <div className="w-[90px] h-[90px] shrink-0 bg-[url(https://static.codia.ai/image/2026-08-24/JZcebh8eW2.png)] bg-cover bg-no-repeat relative z-[34]" />
            <span className="h-[14px] self-stretch shrink-0 basis-auto font-['Vazirmatn'] text-[9px] font-normal leading-[14px] text-[#60758a] relative text-center whitespace-nowrap z-[35]">مشاهده وضعیت مشارکت</span>
          </div>
          <div className="flex flex-col gap-[12px] items-start grow shrink-0 basis-0 flex-nowrap relative z-[36]">
            <div className="flex pt-[12px] pr-[12px] pb-[12px] pl-[12px] gap-[8px] items-center self-stretch shrink-0 flex-nowrap bg-[#eaf8f0] rounded-[8px] relative z-[37]">
              <span className="h-[19px] grow shrink-0 basis-auto font-['Vazirmatn'] text-[12px] font-medium leading-[18.75px] text-[#159455] relative text-right whitespace-nowrap z-[38]">✓ پرداخت به حساب کمیته امداد انجام شده است.</span>
            </div>
            <div className="flex pt-[12px] pr-[12px] pb-[12px] pl-[12px] gap-[8px] items-center self-stretch shrink-0 flex-nowrap rounded-[8px] border-solid border border-[#e4ebf1] relative z-[39]">
              <span className="h-[19px] grow shrink-0 basis-auto font-['Vazirmatn'] text-[12px] font-medium leading-[18.75px] text-[#60758a] relative text-right whitespace-nowrap z-40">⚠ این رسید گواهی مالیاتی محسوب نمی‌شود.</span>
            </div>
          </div>
        </div>
        <div className="flex h-[25px] flex-col gap-[8px] items-start shrink-0 flex-nowrap absolute bottom-[40px] left-[40px] right-[40px] z-[41]">
          <div className="h-px self-stretch shrink-0 bg-[url(https://static.codia.ai/image/2026-08-24/R2fSagPYyr.png)] bg-cover bg-no-repeat relative z-[42]" />
          <div className="flex justify-between items-center self-stretch shrink-0 flex-nowrap relative z-[43]">
            <span className="flex w-[50px] h-[17px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[11px] font-normal leading-[17px] text-[#60758a] relative text-right whitespace-nowrap z-[44]">صفحه ۱ از ۱</span>
            <span className="flex h-[17px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[11px] font-normal leading-[17px] text-[#60758a] relative text-right whitespace-nowrap z-[45]">سامانه ماه — پلتفرم مشارکت اجتماعی | پشتیبانی: info@mahcsr.ir</span>
          </div>
        </div>
      </div>
    </>
  );
}
