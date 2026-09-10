import React from "react";
import "./index.css";

export default function Main() {
  return (
    <div className="main-container flex w-[480px] pt-[32px] pr-[32px] pb-[32px] pl-[32px] flex-col gap-[20px] items-start flex-nowrap bg-[#fff] rounded-[24px] border-solid border border-[#e4ebf1] relative mx-auto my-0">
      <div className="flex justify-between items-center self-stretch shrink-0 flex-nowrap relative">
        <div className="flex w-[20px] h-[20px] flex-col justify-center items-center shrink-0 flex-nowrap relative overflow-hidden z-[1]">
          <div className="w-[20px] h-[20px] shrink-0 bg-[url(https://static.codia.ai/image/2026-08-24/3RkWOpzKNh.png)] bg-cover bg-no-repeat relative overflow-hidden z-[2]" />
        </div>
        <span className="flex w-[237px] h-[31px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[20px] font-extrabold leading-[31px] text-[#17324d] relative text-right whitespace-nowrap z-[3]">
          مشارکت سریع و بدون ثبت‌نام
        </span>
      </div>
      <div className="flex pt-0 pr-[10px] pb-0 pl-[10px] justify-between items-center self-stretch shrink-0 flex-nowrap relative z-[4]">
        <div className="flex w-[89px] gap-[8px] items-center shrink-0 flex-nowrap relative z-[5]">
          <span className="flex w-[57px] h-[17px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[11px] font-normal leading-[17px] text-[#60758a] relative text-right whitespace-nowrap z-[6]">
            شماره موبایل
          </span>
          <div className="flex w-[24px] h-[24px] justify-center items-center shrink-0 flex-nowrap bg-[#e4ebf1] rounded-[12px] relative z-[7]">
            <span className="flex w-[8px] h-[17px] justify-center items-start shrink-0 basis-auto font-['Vazirmatn'] text-[11px] font-normal leading-[17px] text-[#60758a] relative text-center whitespace-nowrap z-[8]">
              ۳
            </span>
          </div>
        </div>
        <div className="w-[32px] h-px shrink-0 bg-[#e4ebf1] relative z-[9]" />
        <div className="flex w-[85px] gap-[8px] items-center shrink-0 flex-nowrap relative z-10">
          <span className="flex w-[53px] h-[17px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[11px] font-normal leading-[17px] text-[#60758a] relative text-right whitespace-nowrap z-[11]">
            انتخاب مبلغ
          </span>
          <div className="flex w-[24px] h-[24px] justify-center items-center shrink-0 flex-nowrap bg-[#e4ebf1] rounded-[12px] relative z-[12]">
            <span className="flex w-[6px] h-[17px] justify-center items-start shrink-0 basis-auto font-['Vazirmatn'] text-[11px] font-normal leading-[17px] text-[#60758a] relative text-center whitespace-nowrap z-[13]">
              ۲
            </span>
          </div>
        </div>
        <div className="w-[32px] h-px shrink-0 bg-[#e4ebf1] relative z-[14]" />
        <div className="flex w-[87px] gap-[8px] items-center shrink-0 flex-nowrap relative z-[15]">
          <span className="flex w-[55px] h-[17px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[11px] font-bold leading-[17px] text-[#17324d] relative text-right whitespace-nowrap z-[16]">
            انتخاب پروژه
          </span>
          <div className="flex w-[24px] h-[24px] justify-center items-center shrink-0 flex-nowrap bg-[#2094e3] rounded-[12px] relative z-[17]">
            <span className="flex w-[4px] h-[17px] justify-center items-start shrink-0 basis-auto font-['Vazirmatn'] text-[11px] font-bold leading-[17px] text-[#fff] relative text-center whitespace-nowrap z-[18]">
              ۱
            </span>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-[16px] items-start self-stretch shrink-0 flex-nowrap relative z-[19]">
        <div className="flex flex-col gap-[8px] items-start self-stretch shrink-0 flex-nowrap relative z-20">
          <span className="h-[19px] self-stretch shrink-0 basis-auto font-['Vazirmatn'] text-[12px] font-bold leading-[18.75px] text-[#17324d] relative text-right whitespace-nowrap z-[21]">
            پروژه منتخب
          </span>
          <div className="flex pt-[14px] pr-[14px] pb-[14px] pl-[14px] justify-between items-start self-stretch shrink-0 flex-nowrap bg-[#fcfbf8] rounded-[12px] border-solid border border-[#e4ebf1] relative z-[22]">
            <div className="flex w-[16px] h-[16px] flex-col justify-center items-center shrink-0 flex-nowrap relative overflow-hidden z-[23]">
              <div className="w-[16px] h-[16px] shrink-0 bg-[url(https://static.codia.ai/image/2026-08-24/tNVCW0602O.png)] bg-cover bg-no-repeat relative overflow-hidden z-[24]" />
            </div>
            <span className="flex w-[170px] h-[22px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-normal leading-[21.875px] text-[#17324d] relative text-right whitespace-nowrap z-[25]">
              اشتغال زنان روستایی (گلستان)
            </span>
          </div>
        </div>
        <div className="flex flex-col gap-[8px] items-start self-stretch shrink-0 flex-nowrap relative z-[26]">
          <span className="h-[19px] self-stretch shrink-0 basis-auto font-['Vazirmatn'] text-[12px] font-bold leading-[18.75px] text-[#17324d] relative text-right whitespace-nowrap z-[27]">
            مبلغ مشارکت (تومان)
          </span>
          <div className="flex pt-[14px] pr-[14px] pb-[14px] pl-[14px] justify-between items-start self-stretch shrink-0 flex-nowrap bg-[#fcfbf8] rounded-[12px] border-solid border border-[#e4ebf1] relative z-[28]">
            <div className="flex w-[16px] h-[16px] flex-col justify-center items-center shrink-0 flex-nowrap relative overflow-hidden z-[29]">
              <div className="w-[16px] h-[16px] shrink-0 bg-[url(https://static.codia.ai/image/2026-08-24/cRWhztS6qe.png)] bg-cover bg-no-repeat relative overflow-hidden z-30" />
            </div>
            <span className="flex w-[77px] h-[22px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-normal leading-[21.875px] text-[#17324d] relative text-right whitespace-nowrap z-[31]">
              ۵۰۰٬۰۰۰ تومان
            </span>
          </div>
        </div>
        <div className="flex flex-col gap-[8px] items-start self-stretch shrink-0 flex-nowrap relative z-[32]">
          <span className="h-[19px] self-stretch shrink-0 basis-auto font-['Vazirmatn'] text-[12px] font-bold leading-[18.75px] text-[#17324d] relative text-right whitespace-nowrap z-[33]">
            شماره موبایل برای پیگیری و دریافت کد تایید
          </span>
          <div className="flex pt-[14px] pr-[14px] pb-[14px] pl-[14px] justify-between items-start self-stretch shrink-0 flex-nowrap bg-[#fff] rounded-[12px] border-solid border border-[#2094e3] relative z-[34]">
            <div className="flex w-[32px] h-[24px] pt-[12px] pr-[16px] pb-[12px] pl-[16px] flex-col justify-center items-center shrink-0 flex-nowrap relative overflow-hidden z-[35]">
              <div className="w-[16px] h-[16px] shrink-0 bg-[url(https://static.codia.ai/image/2026-08-24/dBXqwrcCV1.png)] bg-cover bg-no-repeat relative overflow-hidden z-[36]" />
            </div>
            <span className="flex w-[80px] h-[22px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-normal leading-[21.875px] text-[#60758a] relative text-right whitespace-nowrap z-[37]">
              ۰۹۱۲۳۴۵۶۷۸۹
            </span>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-[12px] items-start self-stretch shrink-0 flex-nowrap relative z-[38]">
        <button
          type="button"
          className="flex pt-[14px] pr-[32px] pb-[14px] pl-[32px] justify-center items-center self-stretch shrink-0 flex-nowrap rounded-[12px] relative z-[39] bg-gradient-to-l from-[#1ab7a6] to-[#2094e3] cursor-pointer border-none outline-none hover:opacity-90 active:opacity-80 transition-opacity"
        >
          <span className="flex w-[117px] h-[22px] justify-center items-start shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-bold leading-[21.875px] text-[#fff] relative text-center whitespace-nowrap z-40">
            تأیید و پرداخت نهایی
          </span>
        </button>
        <span className="h-[17px] self-stretch shrink-0 basis-auto font-['Vazirmatn'] text-[11px] font-normal leading-[17px] text-[#159455] relative text-right whitespace-nowrap z-[41]">
          ✔ اشخاص حقیقی گواهی مالیاتی دریافت نمی‌کنند.
        </span>
      </div>
    </div>
  );
}
