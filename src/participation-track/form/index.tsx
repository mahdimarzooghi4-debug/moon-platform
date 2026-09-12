import React, { useState } from "react";
import "./index.css";

const CHEVRON_RIGHT =
  "https://www.figma.com/api/mcp/asset/c0d5a414-340c-4ba0-984c-c71ab65d4ded.svg";

export default function Main() {
  const noCode = new URLSearchParams(window.location.search).get("mode") === "no-code";
  const [trackingCode, setTrackingCode] = useState("MAH-P-۱۴۰۵-۰۰۲۸۴۶");
  const [mobile, setMobile] = useState("");

  const openOtp = () => {
    if (!mobile.trim()) return;
    const params = new URLSearchParams({ mobile: mobile.trim(), source: noCode ? "mobile" : "tracking" });
    window.location.assign(`/participation/track/otp?${params.toString()}`);
  };

  const normalReady = trackingCode.trim().length > 0 && mobile.trim().length > 0;

  return (
    <div
      dir="rtl"
      className="main-container flex w-[1440px] flex-col items-center flex-nowrap bg-[#fcfbf8] relative overflow-hidden mx-auto my-0"
    >
      <header className="flex h-[80px] pt-[16px] pr-[120px] pb-[16px] pl-[120px] justify-between items-center self-stretch shrink-0 flex-nowrap bg-[#fff] border-solid border-b border-b-[#e4ebf1] relative">
        <div className="flex w-[246px] gap-[24px] items-center shrink-0 flex-nowrap relative z-[1]">
          <a href="/" className="flex w-[130px] h-[22px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-medium leading-[21.875px] text-[#60758a] relative text-right whitespace-nowrap no-underline">
            بازگشت به صفحه اصلی
          </a>
          <a href="/projects" className="flex w-[92px] h-[22px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-medium leading-[21.875px] text-[#60758a] relative text-right whitespace-nowrap no-underline">
            مشاهده پروژه‌ها
          </a>
        </div>
        <img
          className="w-[137px] h-[46px] shrink-0 object-contain relative z-[5]"
          src="/assets/codia/894cfG1jev.png"
          alt="سامانه ماه"
        />
      </header>

      <main className="flex pt-[80px] pr-0 pb-[80px] pl-0 flex-col items-center self-stretch shrink-0 flex-nowrap relative z-[6]">
        <section className="flex w-[600px] pt-[36px] pr-[36px] pb-[36px] pl-[36px] flex-col gap-[28px] items-start shrink-0 flex-nowrap bg-[#fff] rounded-[24px] border-solid border border-[#e4ebf1] relative shadow-[0_4px_16px_0_rgba(22,45,71,0.08)] z-[7]">
          <div className="flex flex-col gap-[12px] items-center self-stretch shrink-0 flex-nowrap relative z-[8]">
            {noCode && (
              <div className="flex justify-end items-start self-stretch shrink-0">
                <a
                  href="/participation/track/form"
                  className="flex gap-[4px] items-center font-['Vazirmatn'] text-[13px] font-bold leading-[20px] text-[#2094e3] no-underline"
                >
                  <span>ورود با کد پیگیری</span>
                  <img src={CHEVRON_RIGHT} alt="" className="w-[12px] h-[12px] shrink-0" />
                </a>
              </div>
            )}

            <div className="flex w-[56px] h-[56px] flex-col justify-center items-center shrink-0 flex-nowrap bg-[#eaf8f0] rounded-[28px] relative z-[13]">
              <img src="/assets/codia/uqNFWOo7Ze.svg" alt="" className="w-[24px] h-[24px]" />
            </div>
            <h1 className="m-0 font-['Vazirmatn'] text-[22px] font-bold leading-[34px] text-[#17324d] relative text-center whitespace-nowrap">
              مشارکت خود را پیگیری کنید
            </h1>
            <p className="m-0 self-stretch font-['Vazirmatn'] text-[14px] font-normal leading-[21.875px] text-[#60758a] relative text-center">
              {noCode
                ? "پس از تأیید موبایل، آخرین مشارکت‌های ثبت‌شده با این شماره نمایش داده می‌شوند."
                : "کد پیگیری و شماره موبایلی را که هنگام پرداخت وارد کرده‌اید ثبت کنید."}
            </p>
          </div>

          <div className={`flex flex-col ${noCode ? "gap-0" : "gap-[20px]"} items-start self-stretch shrink-0 flex-nowrap relative`}>
            {!noCode && (
              <div className="flex flex-col gap-[8px] items-start self-stretch shrink-0 flex-nowrap relative">
                <div className="flex justify-between items-start self-stretch shrink-0 flex-nowrap relative">
                  <a href="/participation/track/form?mode=no-code" className="font-['Vazirmatn'] text-[13px] font-medium leading-[20px] text-[#2094e3] relative text-right whitespace-nowrap no-underline">
                    کد پیگیری را ندارم
                  </a>
                  <label htmlFor="tracking-code" className="font-['Vazirmatn'] text-[14px] font-medium leading-[22px] text-[#17324d] relative text-right whitespace-nowrap">
                    کد پیگیری ماه
                  </label>
                </div>
                <div className="flex h-[46px] pt-[12px] pr-[16px] pb-[12px] pl-[16px] gap-[8px] items-center self-stretch shrink-0 flex-nowrap bg-[#fff] rounded-[12px] border-solid border border-[#e4ebf1] relative">
                  <img src="/assets/codia/participation-track-search.svg" alt="" className="w-[16px] h-[16px] shrink-0" />
                  <input
                    id="tracking-code"
                    value={trackingCode}
                    onChange={(event) => setTrackingCode(event.target.value)}
                    className="h-[22px] grow min-w-0 border-0 bg-transparent p-0 font-['Vazirmatn'] text-[14px] font-normal leading-[22px] text-[#60758a] text-right"
                    aria-label="کد پیگیری ماه"
                  />
                </div>
                <span className="self-stretch font-['Vazirmatn'] text-[12px] font-normal leading-[19px] text-[#60758a] relative text-right">
                  کد پیگیری در رسید پرداخت و پیامک تأیید ثبت شده است.
                </span>
              </div>
            )}

            <div className="flex flex-col gap-[8px] items-start self-stretch shrink-0 flex-nowrap relative">
              <div className="flex justify-end items-start self-stretch shrink-0 flex-nowrap relative">
                <label htmlFor="tracking-mobile" className="font-['Vazirmatn'] text-[14px] font-medium leading-[22px] text-[#17324d] relative text-right whitespace-nowrap">
                  شماره موبایل
                </label>
              </div>
              <div className="flex h-[46px] pt-[12px] pr-[16px] pb-[12px] pl-[16px] items-center self-stretch shrink-0 flex-nowrap bg-[#fff] rounded-[12px] border-solid border border-[#e4ebf1] relative">
                <input
                  id="tracking-mobile"
                  type="tel"
                  inputMode="numeric"
                  value={mobile}
                  onChange={(event) => setMobile(event.target.value)}
                  placeholder="مثال: ۰۹۱۲۱۲۳۴۵۶۷"
                  className="h-[22px] grow min-w-0 border-0 bg-transparent p-0 font-['Vazirmatn'] text-[14px] font-normal leading-[22px] text-[#60758a] placeholder:text-[#60758a] text-right"
                  aria-label="شماره موبایل"
                />
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-[16px] items-center self-stretch shrink-0 flex-nowrap relative">
            <button
              type="button"
              onClick={openOtp}
              disabled={!noCode && !normalReady}
              className={`flex h-[46px] pt-[12px] pr-0 pb-[12px] pl-0 justify-center items-center self-stretch shrink-0 flex-nowrap bg-[#2094e3] rounded-[12px] border-0 font-['Vazirmatn'] text-[15px] font-bold leading-[23px] text-[#fff] ${!noCode && !normalReady ? "opacity-45 cursor-default" : "cursor-pointer"}`}
            >
              دریافت کد تأیید
            </button>
            <div className="flex gap-[8px] justify-center items-center self-stretch shrink-0 flex-nowrap relative">
              <span className="font-['Vazirmatn'] text-[12px] font-normal leading-[19px] text-[#60758a] relative text-center whitespace-nowrap">
                اطلاعات مشارکت فقط پس از تأیید شماره موبایل ثبت‌شده نمایش داده می‌شود.
              </span>
              <img src="/assets/codia/uMY7mRAcxa.svg" alt="" className="w-[14px] h-[14px] shrink-0" />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
