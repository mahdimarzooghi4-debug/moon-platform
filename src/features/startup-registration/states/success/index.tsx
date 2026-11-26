import { useState } from "react";
import { Link } from "react-router-dom";
import { startupApplicationStatus, trackStartupApplication } from "../../api";
import { toPersianLoginDigits } from "../../../../auth/oidc";
import React from "react";
import "./index.css";

export default function Main() {
  const [status, setStatus] = useState("");
  const code = sessionStorage.getItem("moon-startup-tracking-code");
  const [copyStatus, setCopyStatus] = useState("");
  const displayCode = code?.length === 10 ? toPersianLoginDigits(code) : code?.length === 16 ? code.match(/.{4}/g)?.join("-") ?? code : code;
  async function copyCode() {
    if (!code) return;
    try { await navigator.clipboard.writeText(displayCode ?? code); setCopyStatus("کد کپی شد."); }
    catch { setCopyStatus("کد را انتخاب و کپی کنید."); }
  }
  return (
    <div dir="rtl" className="main-container mah-startup-success flex w-full max-w-[1440px] min-h-screen flex-col justify-between items-center flex-nowrap bg-[#f7fafc] relative mx-auto my-0">
      <div className="flex h-[80px] pt-0 pr-[120px] pb-0 pl-[120px] justify-between items-center self-stretch shrink-0 flex-nowrap bg-[#fff] border-solid border-t border-t-[#e4ebf1] relative">
        <div className="flex w-[223px] gap-[20px] items-center shrink-0 flex-nowrap relative z-[1]">
          <span className="flex w-[119px] h-[22px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-medium leading-[21.875px] text-[#718096] relative text-right whitespace-nowrap z-[2]">
            ورود به حساب کاربری
          </span>
          <span className="flex w-[84px] h-[22px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-medium leading-[21.875px] text-[#2094e3] relative text-right whitespace-nowrap z-[3]">
            خروج از سامانه
          </span>
        </div>
        <div className="flex w-[137px] gap-[12px] items-center shrink-0 flex-nowrap relative z-[4]">
          <div className="flex w-[137px] gap-[12px] items-center shrink-0 flex-nowrap relative z-[5]">
            <div className="flex w-[137px] gap-[12px] items-center shrink-0 flex-nowrap relative z-[6]">
              <div className="w-[137px] h-[46px] shrink-0 bg-[url(https://static.codia.ai/image/2026-08-24/NeK4sFj955.png)] bg-cover bg-no-repeat relative z-[7]" />
            </div>
          </div>
        </div>
      </div>
      <div className="flex pt-[80px] pr-0 pb-[80px] pl-0 flex-col gap-[32px] items-center self-stretch shrink-0 flex-nowrap relative z-[8]">
        <div className="mah-startup-success-card flex w-[560px] pt-[36px] pr-[36px] pb-[36px] pl-[36px] flex-col gap-[28px] items-center shrink-0 flex-nowrap bg-[#fff] rounded-[24px] border-solid border border-[#e4ebf1] relative shadow-[0_4px_24px_0_rgba(0,0,0,0.03)] z-[9]">
          <div className="flex w-[64px] h-[64px] justify-center items-center shrink-0 flex-nowrap bg-[#eaf8f0] rounded-[32px] relative z-10">
            <span className="h-[44px] shrink-0 basis-auto font-['Vazirmatn'] text-[28px] font-normal leading-[43.75px] text-[#159455] relative text-left whitespace-nowrap z-[11]">
              ✓
            </span>
          </div>
          <div className="flex w-[446px] flex-col gap-[8px] items-center shrink-0 flex-nowrap relative z-[12]">
            <span className="flex w-[244px] h-[34px] justify-center items-start shrink-0 basis-auto font-['Vazirmatn'] text-[22px] font-bold leading-[34px] text-[#1a202c] relative text-center whitespace-nowrap z-[13]">
              {code ? "درخواست ثبت‌نام ارسال شد" : "کد پیگیری در دسترس نیست"}
            </span>
            <span className="flex w-[446px] h-[22px] justify-center items-start shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-normal leading-[21.875px] text-[#718096] relative text-center whitespace-nowrap z-[14]">
              {code ? "اطلاعات استارتاپ شما برای بررسی به خانه خلاق ارجاع شد." : "بدون کد پیگیری نمی‌توان ثبت درخواست را تأیید کرد."}
            </span>
          </div>
          <div className="h-px self-stretch shrink-0 bg-[url(https://static.codia.ai/image/2026-08-24/cYLGeXa7H3.png)] bg-cover bg-no-repeat relative z-[15]" />
          <div className="mah-tracking-box" dir="rtl">
            <span className="mah-tracking-label">کد پیگیری درخواست</span>
            {code ? <>
              <bdi dir="ltr" className="mah-tracking-code">{displayCode}</bdi>
              <button type="button" className="mah-tracking-copy" onClick={() => void copyCode()}>کپی کد پیگیری</button>
              {copyStatus && <p role="status">{copyStatus}</p>}
            </> : <p role="alert">کد پیگیری ثبت نشده است.</p>}
            <div className="mah-tracking-estimate"><span>زمان تقریبی بررسی</span><strong>۳ تا ۵ روز کاری</strong></div>
          </div>
          <div className="h-px self-stretch shrink-0 bg-[url(https://static.codia.ai/image/2026-08-24/5Tbko6fs8e.png)] bg-cover bg-no-repeat relative z-[23]" />
          <div className="flex flex-col gap-[12px] items-start self-stretch shrink-0 flex-nowrap relative z-[24]">
            <div className="flex flex-col gap-[12px] items-start self-stretch shrink-0 flex-nowrap relative z-[25]">
              <div className="flex pt-[11px] pr-[20px] pb-[11px] pl-[20px] gap-[8px] justify-center items-center self-stretch shrink-0 flex-nowrap bg-[#2094e3] rounded-[12px] relative z-[26]">
                <button type="button" className="flex w-[96px] h-[22px] justify-center items-start shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-medium leading-[22px] text-[#fff] relative text-center whitespace-nowrap z-[27]" disabled={!code} onClick={async () => { if (!code) return; if (code.length === 10) { window.location.assign("/registration/track"); return; } try { const result = await trackStartupApplication(code); setStatus(result ? startupApplicationStatus(result.status) : "پرونده پیدا نشد."); } catch { setStatus("دریافت وضعیت انجام نشد."); } }}>پیگیری درخواست</button><output className="text-sm text-[#17324d]" role="status">{status}</output>
              </div>
              <div className="flex pt-[12px] pr-0 pb-[12px] pl-0 justify-center items-center self-stretch shrink-0 flex-nowrap relative z-[28]">
                <Link to="/" className="text-sm font-semibold text-[#2094e3]">بازگشت به صفحه اصلی</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex pt-[24px] pr-0 pb-[40px] pl-0 flex-col gap-[16px] items-start self-stretch shrink-0 flex-nowrap relative z-30">
        <div className="flex flex-col gap-[12px] items-center self-stretch shrink-0 flex-nowrap relative z-[31]">
          <span className="h-[19px] self-stretch shrink-0 basis-auto font-['Vazirmatn'] text-[12px] font-normal leading-[18.75px] text-[#a0aec0] relative text-center whitespace-nowrap z-[32]">
            اطلاعات شما مطابق سیاست حریم خصوصی سامانه ماه محافظت می‌شود.
          </span>
          <div className="flex w-[180px] gap-[16px] items-center shrink-0 flex-nowrap relative z-[33]">
            <span className="flex w-[76px] h-[19px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[12px] font-normal leading-[18.75px] text-[#718096] relative text-right whitespace-nowrap z-[34]">
              قوانین و مقررات
            </span>
            <span className="h-[19px] shrink-0 basis-auto font-['Vazirmatn'] text-[12px] font-normal leading-[18.75px] text-[#a0aec0] relative text-left whitespace-nowrap z-[35]">
              |
            </span>
            <span className="flex w-[69px] h-[19px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[12px] font-normal leading-[18.75px] text-[#718096] relative text-right whitespace-nowrap z-[36]">
              حریم خصوصی
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
