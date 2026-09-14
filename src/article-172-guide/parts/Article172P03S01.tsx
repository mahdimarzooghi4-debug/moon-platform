import React from "react";

const steps = [
  {
    eyebrow: "مرحله ۴",
    title: "ثبت مشارکت",
    description: "انتخاب پروژه توانمندسازی و ثبت نیت مشارکت در سامانه",
    height: 149,
  },
  {
    eyebrow: "مرحله ۳",
    title: "تأیید حساب",
    description: "احراز هویت حقوقی و بررسی امضاکنندگان مجاز توسط سامانه",
    height: 149,
  },
  {
    eyebrow: "مرحله ۲",
    title: "ثبت‌نام شرکت",
    description: "ایجاد پروفایل سازمانی و وارد کردن اطلاعات شناسه ملی شرکت",
    height: 149,
  },
  {
    eyebrow: "مرحله ۱",
    title: "ورود به سامانه",
    description: "ثبت‌نام اولیه و ایجاد حساب کاربری در سامانه مشارکت‌های مردمی",
    height: 151,
    strongShadow: true,
  },
  {
    badge: "خاتمه بررسی",
    title: "اعلام نتیجه",
    description: "ارائه خروجی و اعلام نظر مرجع صلاحیت‌دار در خصوص مستندات",
    height: 154,
  },
  {
    eyebrow: "مرحله ۷",
    title: "بررسی مدارک",
    description: "انطباق اسناد و سنجش صحت واریزی توسط کارشناسان مربوط",
    height: 149,
  },
  {
    eyebrow: "مرحله ۶",
    title: "ثبت درخواست بررسی",
    description: "بارگذاری مستندات و ثبت تقاضای پایش در پنل اختصاصی شرکت",
    height: 149,
  },
  {
    eyebrow: "مرحله ۵",
    title: "پرداخت رسمی",
    description: "واریز مبلغ به صورت امن مستقیماً به حساب رسمی کمیته امداد",
    height: 149,
  },
];

export function Article172P03S01() {
  return (
    <section
      className="flex flex-col gap-[48px] bg-[#fcfbf8] px-[120px] py-[80px]"
      data-node-id="745:4235"
    >
      <div className="flex flex-col items-center gap-[12px] text-center">
        <h2
          className="font-['Vazirmatn'] text-[28px] font-extrabold leading-[44px] text-[#17324d]"
          dir="auto"
        >
          درخواست چگونه بررسی می‌شود؟
        </h2>
        <p
          className="w-full font-['Vazirmatn'] text-[15px] font-normal leading-[23px] text-[#60758a]"
          dir="auto"
        >
          فرآیند گام‌به‌گام بررسی مستندات از ثبت‌نام اولیه تا دریافت اعلام نتیجه
        </p>
      </div>

      <div className="grid w-full grid-cols-4 items-start gap-x-[24px] gap-y-[24px]">
        {steps.map((step) => (
          <article
            key={step.title}
            className={`flex flex-col items-end gap-[12px] rounded-[16px] border border-[#e4ebf1] bg-white p-[20px] ${
              step.strongShadow
                ? "shadow-[0_4px_16px_rgba(23,46,71,0.08)]"
                : "shadow-[0_4px_8px_rgba(23,46,71,0.08)]"
            }`}
            style={{ height: step.height }}
          >
            {step.badge ? (
              <div className="rounded-[8px] bg-[#eaf5fd] px-[8px] py-[4px]">
                <span
                  className="font-['Vazirmatn'] text-[11px] font-normal leading-[17px] text-[#2094e3]"
                  dir="auto"
                >
                  {step.badge}
                </span>
              </div>
            ) : (
              <div className="flex h-[20px] w-full items-center justify-end">
                <span
                  className="font-['Vazirmatn'] text-[13px] font-normal leading-[20px] text-[#60758a]"
                  dir="auto"
                >
                  {step.eyebrow}
                </span>
              </div>
            )}

            <h3
              className="font-['Vazirmatn'] text-[16px] font-bold leading-[25px] text-[#17324d]"
              dir="auto"
            >
              {step.title}
            </h3>
            <p
              className="w-full font-['Vazirmatn'] text-[13px] font-normal leading-[20px] text-[#60758a]"
              dir="auto"
            >
              {step.description}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
