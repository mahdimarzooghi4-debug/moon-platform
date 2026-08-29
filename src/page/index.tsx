import React from "react";
import "./index.css";

const details = [
  ["پروژه هدف", "اشتغال زنان روستایی (راهکار سبز)"],
  ["مبلغ تراکنش", "۳۰۰٬۰۰۰ تومان"],
  ["تاریخ تلاش برای پرداخت", "۲۴ مرداد ۱۴۰۵"],
  ["کد پیگیری موقت", "MAH-P-۱۴۰۵-۰۰۲۸۴۶"],
];

export default function Main() {
  return (
    <div dir="rtl" className="main-container min-h-screen w-[1440px] bg-[#fcfbf8] text-[#17324d] mx-auto">
      <header className="flex h-[80px] items-center justify-between border-b border-[#e4ebf1] bg-white px-[120px]">
        <img className="h-[46px] w-[137px] object-contain" src="/assets/codia/ULrekjV9pt.png" alt="سامانه ماه" />
        <nav className="flex gap-[24px] font-['Vazirmatn'] text-[14px] font-medium text-[#60758a]">
          <a href="#" className="hover:text-[#2094e3]">بازگشت به صفحه اصلی</a>
          <a href="#" className="hover:text-[#2094e3]">مشاهده پروژه‌ها</a>
        </nav>
      </header>

      <main className="flex justify-center px-[120px] py-[96px]">
        <section className="w-[640px] rounded-[24px] border border-[#e4ebf1] bg-white p-[36px] shadow-[0_4px_16px_rgba(22,45,71,0.08)]">
          <div className="flex flex-col items-center gap-[12px] text-center">
            <div aria-hidden="true" className="clock-icon" />
            <h1 className="font-['Vazirmatn'] text-[22px] font-bold">در حال بررسی پرداخت</h1>
            <span className="rounded-[8px] bg-[#eaf5fd] px-[12px] py-[4px] font-['Vazirmatn'] text-[13px] font-semibold text-[#2094e3]">
              در حال بررسی پرداخت
            </span>
            <p className="font-['Vazirmatn'] text-[14px] leading-[22px] text-[#60758a]">
              نتیجه نهایی تراکنش هنوز از درگاه دریافت نشده است. این فرایند ممکن است چند دقیقه زمان ببرد.
            </p>
          </div>

          <div className="my-[28px] h-px bg-[#e4ebf1]" />

          <dl className="space-y-[16px] font-['Vazirmatn'] text-[14px]">
            {details.map(([label, value]) => (
              <div key={label} className="flex items-center justify-between">
                <dt className="text-[#60758a]">{label}</dt>
                <dd dir="auto" className="font-semibold text-[#17324d]">{value}</dd>
              </div>
            ))}
          </dl>

          <div className="my-[28px] h-px bg-[#e4ebf1]" />
          <div role="status" className="flex items-center justify-center gap-[8px] text-[#d69e2e]">
            <span aria-hidden="true" className="warning-icon">!</span>
            <p className="font-['Vazirmatn'] text-[13px]">تا مشخص‌شدن وضعیت، پرداخت مجدد انجام ندهید.</p>
          </div>
          <div className="h-[100px]" aria-hidden="true" />
        </section>
      </main>
    </div>
  );
}
