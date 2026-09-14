import React from "react";

const certificateItems = [
  "نتیجه بررسی و تایید مدارک و انطباق آن با قوانین ماده ۱۷۲",
  "صادرشده پس از احراز هویت، انطباق نام و تایید تحقق KPI",
  "مستند نهایی قابل ارائه به سازمان امور مالیاتی کشور",
  "صدور آن منوط به تایید نهایی مراجع ذی‌صلاح نظارتی است",
];

const receiptItems = [
  "سند تراکنش مالی موفق و رسید بانکی مستقیم واریز وجه",
  "صادرشده به صورت خودکار بلافاصله پس از تکمیل پرداخت",
  "تاییدیه انتقال ریالی وجه به حساب امانی اعلام‌شده",
  "صرفا رسید پرداخت است و فاقد اثر یا رسمیت گواهی ماده ۱۷۲ است",
];

function ComparisonList({
  title,
  items,
  icon,
}: {
  title: string;
  items: string[];
  icon: string;
}) {
  return (
    <div className="flex min-w-0 flex-1 flex-col items-end gap-[16px]">
      <h3 className="font-['Vazirmatn'] text-[18px] font-bold leading-[28px] text-[#17324d]" dir="auto">
        {title}
      </h3>
      {items.map((item) => (
        <div key={item} className="flex w-full items-start justify-end gap-[8px]">
          <p className="min-w-0 flex-1 text-right font-['Vazirmatn'] text-[14px] font-normal leading-[22px] text-[#60758a]" dir="auto">
            {item}
          </p>
          <img src={icon} alt="" className="h-[16px] w-[16px] shrink-0" />
        </div>
      ))}
    </div>
  );
}

export function Article172P04S01() {
  return (
    <section className="bg-white px-[120px] py-[80px]" data-node-id="745:4390">
      <div className="flex w-full flex-col items-start gap-[28px] rounded-[24px] border border-[#e4ebf1] bg-[#fcfbf8] p-[36px] shadow-[0_4px_8px_rgba(23,46,71,0.08)]">
        <h2 className="w-full text-right font-['Vazirmatn'] text-[24px] font-extrabold leading-[38px] text-[#17324d]" dir="auto">
          رسید پرداخت با گواهی یکسان نیست
        </h2>
        <div className="h-px w-full bg-[#e4ebf1]" />
        <div className="flex w-full items-start gap-[48px]">
          <ComparisonList
            title="نتیجه یا گواهی مربوط"
            items={certificateItems}
            icon="/assets/codia/faVqhygZGy.svg"
          />
          <div className="h-[160px] w-px shrink-0 bg-[#e4ebf1]" />
          <ComparisonList
            title="رسید پرداخت عمومی"
            items={receiptItems}
            icon="/assets/codia/a105e4cc-9729-417b-8f1d-770d6bfa39c4.svg"
          />
        </div>
      </div>
    </section>
  );
}
