import React from "react";
import { checkoutAssets, formatAmount } from "./checkout-utils";

function Row({ label, value, valueClass = "" }: { label: string; value: string; valueClass?: string }) {
  return (
    <div className="flex w-full items-start justify-between text-[13px] leading-5" dir="ltr">
      <span className={`font-bold text-[#17324d] ${valueClass}`} dir="rtl">{value}</span>
      <span className="text-[#60758a]" dir="rtl">{label}</span>
    </div>
  );
}

function TrustItem({ icon, title, description }: { icon: string; title: string; description: string }) {
  return (
    <div className="flex w-full items-center justify-end gap-3" dir="ltr">
      <div className="flex min-w-0 flex-1 flex-col items-end gap-0.5 text-right" dir="rtl">
        <strong className="text-[13px] leading-5 text-[#17324d]">{title}</strong>
        <span className="text-[11px] leading-[17px] text-[#60758a]">{description}</span>
      </div>
      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#eaf5fd]">
        <img src={icon} alt="" className="h-4 w-4" />
      </div>
    </div>
  );
}

export default function CheckoutSidebar({ amount, onProject, onCompany }: { amount: number; onProject: () => void; onCompany: () => void }) {
  return (
    <aside className="flex w-[370px] shrink-0 flex-col gap-6">
      <section className="flex w-full flex-col gap-5 rounded-3xl border border-[#e4ebf1] bg-white p-6 shadow-[0_4px_16px_rgba(23,46,71,0.08)]" dir="rtl">
        <img src={checkoutAssets.projectImage} alt="پروژه اشتغال زنان روستایی" className="h-40 w-full rounded-2xl object-cover" />
        <div className="flex flex-col items-end gap-2 text-right">
          <span className="text-[12px] text-[#2094e3]">حوزه: اشتغال و معیشت | استان: گلستان</span>
          <strong className="text-[18px] leading-7">اشتغال زنان روستایی</strong>
          <span className="text-[13px] text-[#60758a]">استارتاپ مجری: راهکار سبز</span>
        </div>
        <div className="h-px w-full bg-[#e4ebf1]" />
        <div className="flex flex-col gap-3">
          <Row label="جامعه هدف" value="زنان سرپرست خانوار" />
          <div className="flex flex-col gap-1.5">
            <div className="flex w-full items-start justify-between text-[13px]" dir="ltr">
              <strong className="text-[#2094e3]" dir="rtl">۵۸٪ تأمین شده</strong>
              <span className="text-[#60758a]" dir="rtl">هدف: ۴٫۲ میلیارد تومان</span>
            </div>
            <div className="flex h-2 w-full justify-end overflow-hidden rounded bg-[#e4ebf1]"><div className="h-full w-[58%] bg-[#2094e3]" /></div>
          </div>
          <Row label="تأمین‌شده" value="۲٫۴ میلیارد تومان" />
          <Row label="باقی‌مانده" value="۱٫۸ میلیارد تومان" />
        </div>
        <div className="h-px w-full bg-[#e4ebf1]" />
        <button type="button" onClick={onProject} className="cursor-pointer border-0 bg-transparent p-0 text-center text-[13px] text-[#2094e3] underline">مشاهده جزئیات کامل پروژه</button>
      </section>

      <section className="flex w-full flex-col gap-4 rounded-3xl border border-[#e4ebf1] bg-white p-6 shadow-[0_4px_16px_rgba(23,46,71,0.08)]" dir="rtl">
        <strong className="w-full text-right text-[16px]">خلاصه مشارکت</strong>
        <div className="flex flex-col gap-3">
          <Row label="مبلغ مشارکت" value={formatAmount(amount)} />
          <Row label="هزینه اضافی (کارمزد)" value="۰ تومان" />
          <div className="h-px w-full bg-[#e4ebf1]" />
          <Row label="مبلغ قابل پرداخت" value={formatAmount(amount)} valueClass="text-[18px] !text-[#2094e3]" />
          <div className="h-px w-full bg-[#e4ebf1]" />
          <Row label="دریافت‌کننده رسمی" value="کمیته امداد امام خمینی (ره)" />
          <Row label="استارتاپ مجری" value="راهکار سبز" />
        </div>
        <div className="rounded-xl bg-[#f8fafc] p-3 text-center text-[11px] leading-[18px] text-[#60758a]">🔒 سامانه ماه اطلاعات کارت بانکی شما را دریافت یا ذخیره نمی‌کند.</div>
      </section>

      <section className="flex w-full flex-col gap-4 rounded-[20px] border border-[#e4ebf1] bg-white p-5">
        <TrustItem icon={checkoutAssets.paymentLock} title="پرداخت رسمی" description="انتقال به درگاه پرداخت رسمی بانک‌های کشور" />
        <TrustItem icon={checkoutAssets.phoneTrack} title="پیگیری با موبایل" description="دریافت سریع کد پیگیری مشارکت از طریق پیامک" />
        <TrustItem icon={checkoutAssets.report} title="گزارش اثر واقعی" description="امکان مشاهده آنلاین گزارش‌های عمومی پیشرفت پروژه" />
      </section>

      <section className="flex w-full flex-col items-end gap-3 rounded-2xl bg-[#eaf5fd] p-5 text-right" dir="rtl">
        <strong className="w-full text-[13px] text-[#2094e3]">ثبت مشارکت به صورت حقیقی</strong>
        <p className="m-0 text-[12px] leading-5 text-[#60758a]">برای مشارکت فردی نیازی به حساب کاربری سازمانی نیست و گواهی مالیاتی موضوع ماده ۱۷۲ برای اشخاص حقیقی صادر نمی‌شود.</p>
        <button type="button" onClick={onCompany} className="cursor-pointer border-0 bg-transparent p-0 text-[12px] font-bold text-[#2094e3] underline">مشارکت از طرف شرکت و دریافت گواهی مالیاتی ←</button>
      </section>
    </aside>
  );
}
