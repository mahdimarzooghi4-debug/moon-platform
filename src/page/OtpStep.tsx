import React, { useEffect, useMemo, useRef, useState } from "react";
import { beginLogin, type AccountType } from "../auth/oidc";
import shieldCheckIcon from "../assets/auth-otp-shield-check.svg";
import securityShieldIcon from "../assets/auth-otp-shield.svg";

const LOGO = "/assets/codia/qreWA0b9ix.png";
const BACK_ICON = "/assets/image_cd1430e5-409a-40f6-a742-c82761e81fa7.png";
const PERSIAN_DIGITS = "۰۱۲۳۴۵۶۷۸۹";

type Props = {
  accountType: AccountType;
  mobile: string;
  returnTo?: string;
};

function toLatinDigits(value: string) {
  return value
    .replace(/[۰-۹]/g, (digit) => String(PERSIAN_DIGITS.indexOf(digit)))
    .replace(/[٠-٩]/g, (digit) => String("٠١٢٣٤٥٦٧٨٩".indexOf(digit)));
}

function toPersianDigits(value: string | number) {
  return String(value).replace(/\d/g, (digit) => PERSIAN_DIGITS[Number(digit)]);
}

function maskedMobile(mobile: string) {
  if (mobile.length < 8) return toPersianDigits(mobile);
  return toPersianDigits(`${mobile.slice(0, 4)}•••${mobile.slice(-4)}`);
}

function timerText(seconds: number) {
  const minutes = Math.floor(seconds / 60);
  const rest = seconds % 60;
  return `${toPersianDigits(minutes)}:${toPersianDigits(String(rest).padStart(2, "0"))}`;
}

export default function OtpStep({ accountType, mobile, returnTo }: Props) {
  const [digits, setDigits] = useState<string[]>(["", "", "", "", ""]);
  const [seconds, setSeconds] = useState(90);
  const [busy, setBusy] = useState(false);
  const inputRefs = useRef<Array<HTMLInputElement | null>>([]);

  const completed = useMemo(() => digits.every(Boolean), [digits]);

  useEffect(() => {
    inputRefs.current[4]?.focus();
  }, []);

  useEffect(() => {
    if (seconds <= 0) return;
    const timer = window.setInterval(() => setSeconds((value) => Math.max(0, value - 1)), 1000);
    return () => window.clearInterval(timer);
  }, [seconds]);

  function setDigit(index: number, rawValue: string) {
    const numeric = toLatinDigits(rawValue).replace(/\D/g, "").slice(-1);
    setDigits((current) => {
      const next = [...current];
      next[index] = numeric;
      return next;
    });
    if (numeric && index > 0) inputRefs.current[index - 1]?.focus();
  }

  function handleKeyDown(index: number, event: React.KeyboardEvent<HTMLInputElement>) {
    if (event.key === "Backspace" && !digits[index] && index < 4) {
      inputRefs.current[index + 1]?.focus();
    }
    if (event.key === "ArrowLeft" && index > 0) inputRefs.current[index - 1]?.focus();
    if (event.key === "ArrowRight" && index < 4) inputRefs.current[index + 1]?.focus();
  }

  function handlePaste(event: React.ClipboardEvent<HTMLInputElement>) {
    const pasted = toLatinDigits(event.clipboardData.getData("text")).replace(/\D/g, "").slice(0, 5);
    if (!pasted) return;
    event.preventDefault();
    const next = ["", "", "", "", ""];
    pasted.split("").forEach((digit, logicalIndex) => {
      next[4 - logicalIndex] = digit;
    });
    setDigits(next);
    const nextEmpty = next.findIndex((digit) => !digit);
    inputRefs.current[nextEmpty >= 0 ? nextEmpty : 0]?.focus();
  }

  function editMobile() {
    const params = new URLSearchParams({ accountType, mobile });
    if (returnTo) params.set("returnTo", returnTo);
    window.location.assign(`/auth?${params.toString()}`);
  }

  async function confirmLogin() {
    if (!completed || busy) return;
    setBusy(true);
    try {
      await beginLogin({ accountType, mobile, returnTo });
    } catch {
      setBusy(false);
    }
  }

  return (
    <div
      className="main-container flex min-h-screen flex-col items-center bg-[#f7fafc]"
      dir="rtl"
      style={{ fontFamily: "'Vazirmatn', sans-serif" }}
    >
      <header className="flex h-[80px] w-full shrink-0 items-center justify-between border-b border-[#e8e8e8] bg-white px-[120px]">
        <img src={LOGO} alt="سامانه ماه" className="h-[46px] w-[137px] object-contain" />
        <button
          type="button"
          dir="ltr"
          onClick={editMobile}
          className="flex cursor-pointer items-center gap-2 border-none bg-transparent text-[#4a5568]"
        >
          <img src={BACK_ICON} alt="" className="h-4 w-4 object-contain" />
          <span dir="rtl" className="text-[14px] font-medium">بازگشت به صفحه ورود</span>
        </button>
      </header>

      <main className="flex w-full flex-1 flex-col items-center py-12">
        <section className="flex w-[540px] flex-col items-center gap-6 rounded-[20px] border border-[#e4ebf1] bg-white p-9 shadow-[0_4px_10px_rgba(0,0,0,0.04)]">
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#eaf5fd]">
            <img src={shieldCheckIcon} alt="" className="h-7 w-7" />
          </div>

          <div className="flex w-full flex-col items-center gap-2 text-center">
            <h1 className="m-0 text-center text-[24px] font-bold leading-normal text-[#1a202c]">
              کد تأیید را وارد کنید
            </h1>
            <p className="m-0 text-center text-[14px] font-normal text-[#718096]">
              کد پنج‌رقمی ارسال‌شده به شماره زیر را وارد کنید.
            </p>
            <button
              type="button"
              onClick={editMobile}
              className="flex cursor-pointer items-center justify-center gap-2 border-none bg-transparent p-0"
            >
              <span className="text-[15px] font-medium text-[#1a202c]" dir="ltr">
                {maskedMobile(mobile)}
              </span>
              <span className="text-[14px] font-semibold text-[#2094e3]">ویرایش شماره</span>
            </button>
          </div>

          <div className="flex w-full items-start justify-center gap-3" dir="ltr">
            {digits.map((digit, index) => (
              <input
                key={index}
                ref={(element) => { inputRefs.current[index] = element; }}
                value={digit ? toPersianDigits(digit) : ""}
                onChange={(event) => setDigit(index, event.target.value)}
                onKeyDown={(event) => handleKeyDown(index, event)}
                onPaste={handlePaste}
                inputMode="numeric"
                autoComplete={index === 4 ? "one-time-code" : "off"}
                aria-label={`رقم ${5 - index} کد تأیید`}
                className={[
                  "h-[56px] w-[52px] rounded-[12px] bg-white text-center text-[20px] font-bold text-[#1a202c] caret-[#2094e3] outline-none",
                  document.activeElement === inputRefs.current[index]
                    ? "border-2 border-[#2094e3]"
                    : digit
                      ? "border border-[#a0aec0]"
                      : "border border-[#e4ebf1] focus:border-2 focus:border-[#2094e3]",
                ].join(" ")}
              />
            ))}
          </div>

          <div className="h-[20px] text-center text-[13px] text-[#718096]">
            {seconds > 0 ? (
              <span>ارسال مجدد کد تا {timerText(seconds)}</span>
            ) : (
              <button
                type="button"
                onClick={() => setSeconds(90)}
                className="cursor-pointer border-none bg-transparent p-0 text-[13px] font-semibold text-[#2094e3] underline"
              >
                ارسال مجدد کد
              </button>
            )}
          </div>

          <button
            type="button"
            disabled={!completed || busy}
            onClick={() => void confirmLogin()}
            className={[
              "flex h-[50px] w-full items-center justify-center rounded-[12px] border-none text-[16px] font-semibold transition-opacity",
              completed && !busy
                ? "cursor-pointer bg-gradient-to-r from-[#2094e3] to-[#14b8a6] text-white shadow-[0_4px_6px_rgba(32,148,227,0.25)] hover:opacity-90"
                : "cursor-not-allowed bg-[#cbd5e1] text-[#94a3b8]",
            ].join(" ")}
          >
            {busy ? "در حال ورود..." : "تأیید و ورود"}
          </button>

          <div className="flex w-full flex-col items-center gap-2 pt-4">
            <div className="flex items-center gap-1.5">
              <p className="m-0 text-center text-[12px] font-normal text-[#718096]">
                کد تأیید محرمانه است؛ آن را در اختیار دیگران قرار ندهید.
              </p>
              <img src={securityShieldIcon} alt="" className="h-[14px] w-[14px]" />
            </div>
            <p className="m-0 text-center text-[11px] font-normal text-[#a0aec0]">
              ورود شما با کد یک‌بارمصرف و بدون رمز عبور انجام می‌شود.
            </p>
          </div>
        </section>
      </main>

      <footer className="flex w-full shrink-0 flex-col items-center gap-3 pb-10 pt-6 text-[12px] font-normal">
        <p className="m-0 text-center text-[#a0aec0]">
          اطلاعات شما مطابق سیاست حریم خصوصی سامانه ماه محافظت می‌شود.
        </p>
        <div dir="ltr" className="flex items-center gap-4">
          <a href="/terms" className="text-[#718096]">قوانین و مقررات</a>
          <span className="text-[#94a3b8]">|</span>
          <a href="/privacy-policy" className="text-[#718096]">حریم خصوصی</a>
        </div>
      </footer>
    </div>
  );
}
