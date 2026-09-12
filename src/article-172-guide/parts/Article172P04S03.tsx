import React from "react";

const features = [
  {
    title: "دسترسی به گزارش اثر",
    description: "امکان دانلود اسناد سنجش عملکرد، تصاویر اجرایی و مستندات فیزیکی تایید شده توسط ناظران",
  },
  {
    title: "نگهداری مستندات مجاز",
    description: "آرشیو امن رسیدها، فیش‌های بانکی و سوابق هویتی به صورت یکپارچه برای ارائه گزارش‌های سالانه",
  },
  {
    title: "نمایش وضعیت درخواست",
    description: "پیگیری گام‌به‌گام و مانیتورینگ روند گردش کار کارشناسی مدارک در بستر سامانه",
  },
  {
    title: "ثبت مسیر مشارکت",
    description: "ارائه ساختار شفاف برای مستندسازی نیت مشارکت و تسهیل ارتباط شرکت با جامعه هدف",
  },
];

export function Article172P04S03() {
  return (
    <section className="flex flex-col items-start gap-[40px] bg-white px-[120px] py-[80px]" data-node-id="745:4480">
      <div className="flex w-full flex-col items-center gap-[12px] text-center">
        <h2 className="font-['Vazirmatn'] text-[28px] font-extrabold leading-[44px] text-[#17324d]" dir="auto">
          سامانه ماه چه کاری انجام می‌دهد؟
        </h2>
        <p className="w-full font-['Vazirmatn'] text-[15px] font-normal leading-[23px] text-[#60758a]" dir="auto">
          مسئولیت‌ها، زیرساخت فناوری و ابزارهای پایش آنلاین ارائه شده در پلتفرم
        </p>
      </div>

      <div className="grid w-full grid-cols-2 gap-[24px]">
        {features.map((feature) => (
          <article key={feature.title} className="flex flex-col items-end gap-[16px] rounded-[16px] border border-[#e4ebf1] bg-[#fcfbf8] p-[24px] shadow-[0_4px_8px_rgba(23,46,71,0.08)]">
            <div className="rounded-[12px] bg-[#eaf5fd] p-[12px]">
              <img src="/assets/codia/hXbc3xmAFF.svg" alt="" className="h-[20px] w-[20px]" />
            </div>
            <h3 className="font-['Vazirmatn'] text-[18px] font-bold leading-[28px] text-[#17324d]" dir="auto">
              {feature.title}
            </h3>
            <p className="w-full text-right font-['Vazirmatn'] text-[14px] font-normal leading-[22px] text-[#60758a]" dir="auto">
              {feature.description}
            </p>
          </article>
        ))}
      </div>

      <p className="w-full text-center font-['Vazirmatn'] text-[14px] font-bold leading-[22px] text-[#2094e3]" dir="auto">
        ℹ سامانه ماه مشاور مالیاتی، مرجع تشخیص مالیات یا صادرکننده تضمینی گواهی نیست.
      </p>
    </section>
  );
}
