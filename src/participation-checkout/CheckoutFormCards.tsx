import React, { useState } from "react";
import { amountInWords, checkoutAssets, formatAmount } from "./checkout-utils";

export default function CheckoutFormCards({
  amount,
  onEditAmount,
  onHowItWorks,
  onTerms,
  onPrivacy,
  onPay,
  onBack,
}: {
  amount: number;
  onEditAmount: () => void;
  onHowItWorks: () => void;
  onTerms: () => void;
  onPrivacy: () => void;
  onPay: () => void;
  onBack: () => void;
}) {
  const [acceptedTerms, setAcceptedTerms] = useState(true);
  const [acceptedPayment, setAcceptedPayment] = useState(true);
  const canPay = acceptedTerms && acceptedPayment;

  return (
    <>
      <section className="flex w-full flex-col gap-5 rounded-3xl border border-[#e4ebf1] bg-white p-8 text-right shadow-[0_4px_16px_rgba(23,46,71,0.08)]" dir="rtl">
        <div className="flex w-full items-center justify-between" dir="ltr">
          <button type="button" onClick={onEditAmount} className="cursor-pointer border-0 bg-transparent p-0 text-[13px] text-[#2094e3] underline">ویرایش مبلغ</button>
          <h2 className="m-0 text-right text-[20px] font-extrabold leading-[31px]" dir="rtl">۲. مبلغ و مسیر مصرف منابع</h2>
        </div>
        <div className="flex w-full items-center justify-between rounded-2xl bg-[#eaf5fd] p-5" dir="ltr">
          <span className="text-[14px] text-[#60758a]" dir="rtl">{amountInWords(amount)}</span>
          <strong className="text-[24px] leading-[38px] text-[#2094e3]" dir="rtl">{formatAmount(amount)}</strong>
        </div>
        <div className="flex w-full flex-col items-start gap-3 text-right" dir="rtl">
          <strong className="w-full text-right text-[14px]">مشارکت شما به کجا اختصاص می‌یابد؟</strong>
          <p className="m-0 w-full text-right text-[13px] leading-[22px] text-[#60758a]">این مبلغ به صورت مستقیم برای طرح اشتغال زنان روستایی سیستان و گلستان ثبت می‌شود و به حساب تحت نظارت کمیته امداد واریز خواهد شد. پرداخت منابع به استارتاپ مجری پروژه (راهکار سبز) به صورت مرحله‌ای و منوط به تأیید شاخص‌های اثر اجتماعی (KPI) هر مرحله توسط خانه خلاق است.</p>
          <button type="button" onClick={onHowItWorks} className="cursor-pointer border-0 bg-transparent p-0 text-right text-[13px] text-[#2094e3] underline">آشنایی با مسیر پایش منابع در ماه ←</button>
        </div>
      </section>

      <section className="flex w-full flex-col gap-5 rounded-3xl border border-[#e4ebf1] bg-white p-8 text-right shadow-[0_4px_16px_rgba(23,46,71,0.08)]" dir="rtl">
        <h2 className="m-0 w-full text-right text-[20px] font-extrabold leading-[31px]">۳. قوانین و تأیید نهایی</h2>
        <div className="flex w-full flex-col gap-4 text-right" dir="rtl">
          <div className="flex w-full items-start justify-start gap-3">
            <button type="button" onClick={() => setAcceptedTerms((value) => !value)} aria-pressed={acceptedTerms} className={`flex h-5 w-5 shrink-0 cursor-pointer items-center justify-center rounded border ${acceptedTerms ? "border-[#2094e3] bg-[#2094e3]" : "border-[#e4ebf1] bg-white"}`}>
              {acceptedTerms && <img src={checkoutAssets.checkbox} alt="" className="h-3 w-3" />}
            </button>
            <div className="flex min-w-0 flex-1 flex-col items-start gap-0.5 text-right">
              <p className="m-0 w-full text-right text-[13px] leading-[22px]">شرایط استفاده و قوانین مشارکت در سامانه ماه را مطالعه کرده و می‌پذیرم.</p>
              <button type="button" onClick={onTerms} className="cursor-pointer border-0 bg-transparent p-0 text-right text-[12px] text-[#2094e3] underline">مطالعه شرایط استفاده و قوانین</button>
            </div>
          </div>
          <div className="flex w-full items-start justify-start gap-3">
            <button type="button" onClick={() => setAcceptedPayment((value) => !value)} aria-pressed={acceptedPayment} className={`flex h-5 w-5 shrink-0 cursor-pointer items-center justify-center rounded border ${acceptedPayment ? "border-[#2094e3] bg-[#2094e3]" : "border-[#e4ebf1] bg-white"}`}>
              {acceptedPayment && <img src={checkoutAssets.checkbox} alt="" className="h-3 w-3" />}
            </button>
            <p className="m-0 min-w-0 flex-1 text-right text-[13px] leading-[22px]">تأیید می‌کنم مبلغ مشارکت مستقیماً به حساب رسمی کمیته امداد واریز می‌شود و تعهدی برای پرداخت خارج از سامانه به استارتاپ مجری ندارم.</p>
          </div>
        </div>
        <div className="h-px w-full bg-[#e4ebf1]" />
        <div className="flex w-full items-center justify-start gap-1.5 text-right text-[12px] text-[#60758a]" dir="rtl">
          <img src={checkoutAssets.shield} alt="" className="h-3.5 w-3.5" />
          <span>شماره موبایل شما صرفاً برای ثبت رسید، اطلاع‌رسانی پیامکی مراحل و پیگیری همین مشارکت استفاده می‌شود.</span>
          <button type="button" onClick={onPrivacy} className="cursor-pointer border-0 bg-transparent p-0 text-[#2094e3] underline">سیاست حریم خصوصی</button>
        </div>
        <div className="flex w-full flex-col items-center gap-4">
          <button
            type="button"
            disabled={!canPay}
            onClick={onPay}
            className={`flex w-full items-center justify-center rounded-xl px-8 py-3.5 text-[16px] font-bold text-white ${canPay ? "cursor-pointer" : "cursor-not-allowed opacity-50"}`}
            style={{ backgroundImage: "linear-gradient(4.13deg, rgb(32, 148, 227) 25%, rgb(20, 184, 166) 75%)" }}
          >
            <span>{`ادامه و پرداخت ${formatAmount(amount)}`}</span>
          </button>
          <p className="m-0 w-full text-center text-[12px] text-[#60758a]">با کلیک روی این دکمه به درگاه رسمی پرداخت متصل به حساب کمیته امداد منتقل می‌شوید.</p>
          <button type="button" onClick={onBack} className="min-h-11 w-full cursor-pointer rounded-xl border border-[#e4ebf1] bg-white px-5 py-[11px] text-[14px] font-medium text-[#2094e3]">بازگشت به پروژه</button>
        </div>
      </section>
    </>
  );
}
