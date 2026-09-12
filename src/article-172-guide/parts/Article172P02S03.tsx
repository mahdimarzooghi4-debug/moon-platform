import React from "react";

const prerequisites = [
  {
    title: "احراز شرایط قانونی",
    description: "مطابقت موضوع فعالیت شرکت و شرایط قانونی با ضوابط اجرایی ماده ۱۷۲",
    height: 153,
  },
  {
    title: "تکمیل مدارک",
    description: "ثبت کامل اطلاعات شناسه ملی، کد اقتصادی و آخرین تغییرات روزنامه رسمی",
    height: 153,
  },
  {
    title: "تطبیق اطلاعات پرداخت",
    description: "یکسان بودن نام شرکت واریزکننده با هویت حقوقی ثبت‌شده در ماه",
    height: 133,
  },
  {
    title: "پرداخت موفق",
    description: "تکمیل تراکنش مالی و دریافت رسید معتبر بانکی از درگاه کمیته امداد",
    height: 153,
  },
  {
    title: "مشارکت رسمی ثبت‌شده",
    description: "انتخاب پروژه فعال توانمندسازی اجتماعی روی بستر سامانه ماه",
    height: 153,
  },
  {
    title: "حساب سازمانی تأییدشده",
    description: "ثبت‌نام شرکت و بررسی و تأیید هویت حقوقی توسط کارشناسان پلتفرم",
    height: 153,
  },
];

export function Article172P02S03() {
  return (
    <section
      className="flex flex-col gap-[40px] bg-white px-[120px] py-[80px]"
      data-node-id="745:4186"
    >
      <div className="flex flex-col items-center gap-[12px] text-center">
        <h2
          className="font-['Vazirmatn'] text-[28px] font-extrabold leading-[44px] text-[#17324d]"
          dir="auto"
        >
          پیش‌نیازهای ثبت درخواست
        </h2>
        <p
          className="w-full font-['Vazirmatn'] text-[15px] font-normal leading-[23px] text-[#60758a]"
          dir="auto"
        >
          اطمینان حاصل کنید که این مدارک و گام‌ها پیش از ثبت نهایی انجام شده‌اند
        </p>
      </div>

      <div className="grid w-full grid-cols-3 items-start gap-x-[24px] gap-y-[24px]">
        {prerequisites.map((item) => (
          <article
            key={item.title}
            className="flex flex-col items-end gap-[12px] rounded-[16px] border border-[#e4ebf1] bg-[#fcfbf8] p-[24px] shadow-[0_4px_8px_rgba(23,46,71,0.08)]"
            style={{ height: item.height }}
          >
            <div className="flex h-[16px] w-[18px] items-center justify-end">
              <img
                src="/assets/codia/La473zpOsE.svg"
                alt=""
                className="h-[16px] w-[16px]"
              />
            </div>
            <h3
              className="font-['Vazirmatn'] text-[16px] font-bold leading-[25px] text-[#17324d]"
              dir="auto"
            >
              {item.title}
            </h3>
            <p
              className="w-full font-['Vazirmatn'] text-[13px] font-normal leading-[20px] text-[#60758a]"
              dir="auto"
            >
              {item.description}
            </p>
          </article>
        ))}
      </div>

      <div className="flex w-full items-start rounded-[12px] bg-[#eaf5fd] p-[16px]">
        <p
          className="w-full text-center font-['Vazirmatn'] text-[14px] font-bold leading-[22px] text-[#2094e3]"
          dir="auto"
        >
          وجود تمام پیش‌نیازها فقط امکان ثبت یا بررسی درخواست را فراهم می‌کند و به معنای تأیید نهایی نیست.
        </p>
      </div>
    </section>
  );
}
