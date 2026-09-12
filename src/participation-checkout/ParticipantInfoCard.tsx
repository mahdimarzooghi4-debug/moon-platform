import React, { useRef, useState } from "react";
import { checkoutAssets, toFaDigits, toLatinDigits } from "./checkout-utils";

export default function ParticipantInfoCard() {
  const [phone, setPhone] = useState("09123456789");
  const [otp, setOtp] = useState(["5", "2", "", "", "", ""]);
  const [verified, setVerified] = useState(true);
  const [name, setName] = useState("");
  const otpRefs = useRef<Array<HTMLInputElement | null>>([]);
  const phoneRef = useRef<HTMLInputElement | null>(null);

  const phoneFa = toFaDigits(phone);
  const maskedPhone = `${phoneFa.slice(0, 4)}•••${phoneFa.slice(-4)}`;

  const changePhone = (value: string) => {
    const next = toLatinDigits(value).replace(/\D/g, "").slice(0, 11);
    setPhone(next);
    setVerified(false);
  };

  const changeOtp = (index: number, value: string) => {
    const digit = toLatinDigits(value).replace(/\D/g, "").slice(-1);
    setOtp((current) => current.map((item, currentIndex) => currentIndex === index ? digit : item));
    if (digit && index < 5) otpRefs.current[index + 1]?.focus();
  };

  const editPhone = () => {
    setVerified(false);
    window.setTimeout(() => phoneRef.current?.focus(), 0);
  };

  const resend = () => {
    setOtp(["", "", "", "", "", ""]);
    setVerified(false);
    window.setTimeout(() => otpRefs.current[0]?.focus(), 0);
  };

  const verify = () => {
    if (phone.length === 11 && otp.every(Boolean)) setVerified(true);
  };

  return (
    <section className="flex w-full flex-col gap-5 rounded-3xl border border-[#e4ebf1] bg-white p-8 shadow-[0_4px_16px_rgba(23,46,71,0.08)]" dir="rtl">
      <div className="flex flex-col items-end gap-2 text-right">
        <h1 className="m-0 text-[20px] font-extrabold leading-[31px]">۱. تأیید اطلاعات و شماره موبایل</h1>
        <p className="m-0 w-full text-[14px] leading-[22px] text-[#60758a]">برای ثبت رسمی و امکان پیگیری نتایج مشارکت، لطفاً شماره موبایل خود را تأیید کنید. نیازی به ایجاد حساب کاربری کامل نیست.</p>
      </div>
      <div className="h-px w-full bg-[#e4ebf1]" />

      <div className="flex w-full items-start gap-6" dir="ltr">
        <div className="flex w-[355px] shrink-0 flex-col items-end gap-4 rounded-2xl border border-[#2094e3] bg-[#fcfbf8] p-6" dir="rtl">
          <div className="flex w-full flex-col items-end gap-1 text-right">
            <strong className="text-[14px]">کد تأیید را وارد کنید</strong>
            <span className="text-[12px] text-[#60758a]">کد یک‌بارمصرف به شماره {maskedPhone} ارسال شد.</span>
          </div>
          <div className="flex w-full justify-center gap-2.5" dir="ltr">
            {otp.map((digit, index) => (
              <input
                key={index}
                ref={(element) => { otpRefs.current[index] = element; }}
                value={toFaDigits(digit)}
                onChange={(event) => changeOtp(index, event.target.value)}
                onKeyDown={(event) => {
                  if (event.key === "Backspace" && !otp[index] && index > 0) otpRefs.current[index - 1]?.focus();
                }}
                inputMode="numeric"
                maxLength={1}
                dir="ltr"
                aria-label={`رقم ${index + 1} کد تأیید`}
                className={`h-12 w-11 rounded-[10px] bg-white px-0 text-center text-[18px] font-bold leading-[48px] text-[#17324d] outline-none ${index === 0 ? "border-2 border-[#2094e3]" : "border border-[#e4ebf1]"}`}
              />
            ))}
          </div>
          <div className="flex w-full items-center justify-between text-[12px]">
            <button type="button" onClick={editPhone} className="cursor-pointer border-0 bg-transparent p-0 text-[#2094e3] underline">ویرایش شماره موبایل</button>
            <span className="text-[#c27a10]">ارسال مجدد کد تا ۰۱:۲۹</span>
          </div>
          <button type="button" onClick={verify} className="min-h-11 w-full cursor-pointer rounded-xl border-0 bg-[#2094e3] px-5 py-[11px] text-[14px] font-medium text-white">تأیید شماره موبایل</button>
        </div>

        <div className="flex w-[355px] shrink-0 flex-col items-end gap-4" dir="rtl">
          <div className="flex w-full flex-col items-end gap-2">
            <label htmlFor="individual-phone" className="text-[14px] font-bold">شماره موبایل</label>
            <div className="flex w-full items-center gap-3 rounded-xl border border-[#e4ebf1] bg-white p-3.5" dir="ltr">
              <img src={checkoutAssets.phone} alt="" className="h-4 w-4 shrink-0" />
              <input
                id="individual-phone"
                ref={phoneRef}
                value={phoneFa}
                onChange={(event) => changePhone(event.target.value)}
                inputMode="numeric"
                className="min-w-0 flex-1 border-0 bg-transparent p-0 text-right text-[14px] text-[#17324d] outline-none"
                dir="ltr"
              />
            </div>
            <span className="w-full text-right text-[12px] text-[#60758a]">کد تأیید و اطلاعات پیگیری به این شماره ارسال خواهد شد.</span>
          </div>
          <button type="button" onClick={resend} className="min-h-11 w-full cursor-pointer rounded-xl border border-[#e4ebf1] bg-white px-5 py-[11px] text-[14px] font-medium text-[#2094e3]">دریافت کد تأیید جدید</button>
          {verified && (
            <div className="flex w-full items-center justify-end gap-3 rounded-xl bg-[#eaf8f0] p-3">
              <button type="button" onClick={editPhone} className="cursor-pointer border-0 bg-transparent p-0 text-[12px] text-[#2094e3] underline">تغییر شماره</button>
              <span className="text-[13px] font-medium text-[#17324d]">{phoneFa}</span>
              <span className="text-[13px] font-medium text-[#159455]">شماره موبایل تأیید شد</span>
              <img src={checkoutAssets.verified} alt="" className="h-4 w-4" />
            </div>
          )}
        </div>
      </div>

      <div className="flex w-full flex-col items-end gap-2 pt-3 text-right">
        <label htmlFor="participant-name" className="text-[14px] font-bold">نام و نام خانوادگی مشارکت‌کننده</label>
        <span className="w-full text-[12px] text-[#60758a]">در صورت تمایل، نام خود را برای درج در رسید مشارکت و تابلوی همراهان پروژه وارد کنید.</span>
        <input id="participant-name" value={name} onChange={(event) => setName(event.target.value)} placeholder="مثلاً مریم احمدی" className="w-full rounded-xl border border-[#e4ebf1] bg-[#fcfbf8] p-3.5 text-right text-[14px] text-[#17324d] placeholder:text-[#60758a]" />
      </div>
    </section>
  );
}
