import React, { useEffect, useMemo, useRef, useState } from "react";
import "./index.css";

const OTP_LENGTH = 5;

const toLatinDigits = (value: string) =>
  value
    .replace(/[۰-۹]/g, (digit) => String("۰۱۲۳۴۵۶۷۸۹".indexOf(digit)))
    .replace(/[٠-٩]/g, (digit) => String("٠١٢٣٤٥٦٧٨٩".indexOf(digit)));

const toPersianDigits = (value: string) => value.replace(/\d/g, (digit) => "۰۱۲۳۴۵۶۷۸۹"[Number(digit)]);

function maskMobile(value: string) {
  const digits = toLatinDigits(value).replace(/\D/g, "");
  if (digits.length < 7) return value || "۰۹۱۲•••۴۵۶۷";
  return `${toPersianDigits(digits.slice(0, 4))}•••${toPersianDigits(digits.slice(-4))}`;
}

export default function Main() {
  const params = useMemo(() => new URLSearchParams(window.location.search), []);
  const mobile = params.get("mobile") ?? "";
  const source = params.get("source") ?? "tracking";
  const [digits, setDigits] = useState<string[]>(Array(OTP_LENGTH).fill(""));
  const [secondsLeft, setSecondsLeft] = useState(90);
  const inputRefs = useRef<Array<HTMLInputElement | null>>([]);

  useEffect(() => {
    if (secondsLeft <= 0) return;
    const timer = window.setInterval(() => setSecondsLeft((current) => Math.max(0, current - 1)), 1000);
    return () => window.clearInterval(timer);
  }, [secondsLeft]);

  const updateDigit = (index: number, rawValue: string) => {
    const numeric = toLatinDigits(rawValue).replace(/\D/g, "");
    if (!numeric) {
      setDigits((current) => current.map((digit, digitIndex) => (digitIndex === index ? "" : digit)));
      return;
    }

    const next = [...digits];
    const incoming = numeric.slice(-1);
    next[index] = incoming;
    setDigits(next);
    if (index < OTP_LENGTH - 1) inputRefs.current[index + 1]?.focus();
  };

  const handleKeyDown = (index: number, event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Backspace" && !digits[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handlePaste = (event: React.ClipboardEvent<HTMLDivElement>) => {
    const numeric = toLatinDigits(event.clipboardData.getData("text")).replace(/\D/g, "").slice(0, OTP_LENGTH);
    if (!numeric) return;
    event.preventDefault();
    const next = Array(OTP_LENGTH).fill("");
    numeric.split("").forEach((digit, index) => {
      next[index] = digit;
    });
    setDigits(next);
    inputRefs.current[Math.min(numeric.length, OTP_LENGTH) - 1]?.focus();
  };

  const resendCode = () => {
    if (secondsLeft > 0) return;
    setDigits(Array(OTP_LENGTH).fill(""));
    setSecondsLeft(90);
    inputRefs.current[0]?.focus();
  };

  const editMobileHref = source === "mobile" ? "/participation/track/form?mode=no-code" : "/participation/track/form";
  const ready = digits.every(Boolean);
  const minutes = Math.floor(secondsLeft / 60);
  const seconds = String(secondsLeft % 60).padStart(2, "0");

  const confirm = () => {
    if (!ready) return;
    const query = new URLSearchParams();
    if (mobile) query.set("mobile", mobile);
    query.set("verified", "1");
    window.location.assign(`/participation/track/list?${query.toString()}`);
  };

  return (
    <div dir="ltr" className="main-container flex w-[1440px] min-h-[1000px] flex-col items-center flex-nowrap bg-[#fcfbf8] relative overflow-hidden mx-auto my-0">
      <header className="flex h-[80px] pt-[16px] pr-[120px] pb-[16px] pl-[120px] justify-between items-center self-stretch shrink-0 flex-nowrap bg-[#fff] border-solid border-b border-b-[#e4ebf1] relative">
        <div className="flex w-[246px] gap-[24px] items-center shrink-0 flex-nowrap relative z-[1]" dir="rtl">
          <a href="/" className="flex w-[130px] h-[22px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-medium leading-[21.875px] text-[#60758a] relative text-right whitespace-nowrap no-underline">
            بازگشت به صفحه اصلی
          </a>
          <a href="/projects" className="flex w-[92px] h-[22px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-medium leading-[21.875px] text-[#60758a] relative text-right whitespace-nowrap no-underline">
            مشاهده پروژه‌ها
          </a>
        </div>
        <img
          className="w-[137px] h-[46px] shrink-0 object-contain relative z-[4]"
          src="/assets/codia/894cfG1jev.png"
          alt="سامانه ماه"
        />
      </header>

      <main className="flex pt-[80px] pr-0 pb-[80px] pl-0 flex-col items-center self-stretch shrink-0 flex-nowrap relative z-[5]">
        <section dir="rtl" className="flex w-[480px] pt-[36px] pr-[36px] pb-[36px] pl-[36px] flex-col gap-[28px] items-start shrink-0 flex-nowrap bg-[#fff] rounded-[24px] border-solid border border-[#e4ebf1] relative shadow-[0_4px_16px_0_rgba(22,45,71,0.08)] z-[6]">
          <div className="flex flex-col gap-[12px] items-center self-stretch shrink-0 flex-nowrap relative z-[7]">
            <div className="flex w-[56px] h-[56px] flex-col justify-center items-center shrink-0 flex-nowrap bg-[#eaf8f0] rounded-[28px] relative z-[8]">
              <div className="w-[24px] h-[24px] shrink-0 bg-[url(https://static.codia.ai/image/2026-08-24/vY8WxjzVNQ.png)] bg-cover bg-no-repeat relative overflow-hidden z-[9]" />
            </div>
            <h1 className="m-0 font-['Vazirmatn'] text-[22px] font-bold leading-[34px] text-[#17324d] relative text-center whitespace-nowrap">
              تأیید شماره موبایل
            </h1>
            <p className="m-0 self-stretch font-['Vazirmatn'] text-[14px] font-normal leading-[21.875px] text-[#60758a] relative text-center whitespace-nowrap">
              کد پنج‌رقمی ارسال‌شده به شماره {maskMobile(mobile)} را وارد کنید.
            </p>
          </div>

          <div className="flex flex-col gap-[16px] items-center self-stretch shrink-0 flex-nowrap relative z-[12]">
            <div className="flex w-[288px] gap-[12px] justify-center items-start shrink-0 flex-nowrap relative z-[13]" dir="ltr" onPaste={handlePaste}>
              {digits.map((digit, index) => (
                <input
                  key={index}
                  ref={(element) => {
                    inputRefs.current[index] = element;
                  }}
                  value={toPersianDigits(digit)}
                  onChange={(event) => updateDigit(index, event.target.value)}
                  onKeyDown={(event) => handleKeyDown(index, event)}
                  inputMode="numeric"
                  autoComplete={index === 0 ? "one-time-code" : "off"}
                  maxLength={1}
                  aria-label={`رقم ${index + 1} کد تأیید`}
                  className={`w-[48px] h-[48px] shrink-0 bg-[#fff] rounded-[10px] border-solid ${
                    index === digits.findIndex((item) => !item) || (ready && index === OTP_LENGTH - 1)
                      ? "border-2 border-[#2094e3]"
                      : "border border-[#e4ebf1]"
                  } font-['Vazirmatn'] text-[20px] font-bold leading-[31px] text-[#17324d] text-center p-0`}
                />
              ))}
            </div>

            <div className="flex min-w-[139px] flex-col gap-[8px] items-center shrink-0 flex-nowrap relative z-[24]">
              <button
                type="button"
                onClick={resendCode}
                disabled={secondsLeft > 0}
                className={`border-0 bg-transparent p-0 font-['Vazirmatn'] text-[13px] font-normal leading-[20px] whitespace-nowrap ${secondsLeft > 0 ? "text-[#60758a] cursor-default" : "text-[#2094e3] cursor-pointer"}`}
              >
                {secondsLeft > 0
                  ? `ارسال مجدد کد تا ${toPersianDigits(`${minutes}:${seconds}`)} دیگر`
                  : "ارسال مجدد کد"}
              </button>
              <a href={editMobileHref} className="font-['Vazirmatn'] text-[13px] font-bold leading-[20px] text-[#2094e3] text-right whitespace-nowrap no-underline">
                ویرایش شماره موبایل
              </a>
            </div>
          </div>

          <div className="flex flex-col gap-[16px] items-center self-stretch shrink-0 flex-nowrap relative z-[27]">
            <button
              type="button"
              onClick={confirm}
              disabled={!ready}
              className={`flex h-[46px] pt-[12px] pr-0 pb-[12px] pl-0 justify-center items-center self-stretch shrink-0 flex-nowrap bg-[#2094e3] rounded-[12px] border-0 relative z-[28] ${ready ? "cursor-pointer opacity-100" : "cursor-default opacity-45"}`}
            >
              <span className="h-[23px] shrink-0 basis-auto font-['Vazirmatn'] text-[15px] font-bold leading-[23px] text-[#fff] relative text-left whitespace-nowrap">
                تأیید و مشاهده مشارکت
              </span>
            </button>
          </div>
        </section>
      </main>
    </div>
  );
}
