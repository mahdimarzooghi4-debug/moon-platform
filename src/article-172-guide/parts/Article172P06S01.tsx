import React from "react";

const faqs = [
  ["آیا واریز مبالغ مستقیماً به استارتاپ‌ها انجام می‌شود؟", "خیر. تمام پرداخت‌ها مستقیماً به حساب رسمی کمیته امداد امام خمینی (ره) انجام می‌شود و پرداخت مستقیم عمومی وجود ندارد."],
  ["چرا پرداخت مستقیم به استارتاپ‌ها برای ماده ۱۷۲ پذیرفته نیست؟", "طبق قانون، وجوه بلاعوض باید منحصراً به حساب‌های رسمی اعلام‌شده مراجع دولتی و نهادهای عمومی واریز شود تا شرایط ماده ۱۷۲ احراز گردد."],
  ["نقش خانه خلاق در این فرآیند چیست؟", "خانه خلاق و نوآوری آینه ارزیابی فنی پروژه‌ها و بررسی دوره‌ای تحقق شاخص‌های کلیدی عملکرد (KPI) را برعهده دارد و جریان پرداخت‌ها مبتنی بر تایید اوست."],
  ["آیا ایجاد حساب کاربری برای مودی سازمانی الزامی است؟", "بله. به دلیل پایش دقیق اسناد ثبتی و هویتی شرکت و ارسال مستندات متمم، ایجاد حساب حقوقی تأییدشده الزامی است."],
  ["چه مدت زمان برای بررسی درخواست مورد نیاز است؟", "مدت زمان بسته به نوبت کارشناسی، صحت مستندات ارسالی و بررسی پرونده متفاوت است و زمان ثابتی از قبل تضمین نمی‌شود."],
  ["آیا اشخاص حقیقی هم می‌توانند گواهی ماده ۱۷۲ دریافت کنند؟", "طبق ضوابط جاری، تسهیلات و گواهی ماده ۱۷۲ معطوف به مودیان حقوقی است و اشخاص حقیقی گواهی دریافت نمی‌کنند."],
  ["آیا برای مشارکت‌های غیرریالی (کالا یا خدمت) امکان ثبت درخواست وجود دارد؟", "بله، اما فرآیند ارزش‌گذاری، مستندسازی و شرایط تایید آن پیچیده‌تر است و نیاز به مشاوره قبلی با تیم ماه دارد."],
  ["در صورت رد درخواست، آیا امکان اصلاح مدارک وجود دارد؟", "بله. در صورتی که رد درخواست به دلیل نقص در اسناد هویتی یا اطلاعات تراکنش باشد، امکان ویرایش مجدد و ارسال متمم در پنل فعال خواهد شد."],
];

export function Article172P06S01() {
  return (
    <section className="flex flex-col items-start gap-[40px] border-y border-[#e4ebf1] bg-[#fcfbf8] px-[120px] py-[80px]" data-node-id="745:4653">
      <div className="flex w-full flex-col items-center gap-[12px] text-center">
        <h2 className="font-['Vazirmatn'] text-[28px] font-extrabold leading-[44px] text-[#17324d]" dir="auto">
          سؤالات پرتکرار مودیان و مشارکت‌کنندگان
        </h2>
        <p className="w-full font-['Vazirmatn'] text-[15px] font-normal leading-[23px] text-[#60758a]" dir="auto">
          پاسخ به ابهامات رایج در فرآیند پایش آنلاین و جریان مالی پلتفرم
        </p>
      </div>

      <div className="flex w-full flex-col items-start gap-[12px]">
        {faqs.map(([question, answer]) => (
          <article key={question} className="flex w-full flex-col items-start gap-[12px] rounded-[12px] border border-[#e4ebf1] bg-white p-[20px] shadow-[0_4px_8px_rgba(23,46,71,0.08)]">
            <div className="flex w-full items-center justify-between">
              <img src="/assets/codia/ZYxoxBtoW4.svg" alt="" className="h-[16px] w-[16px] shrink-0" />
              <h3 className="min-w-0 flex-1 text-right font-['Vazirmatn'] text-[16px] font-bold leading-[25px] text-[#17324d]" dir="auto">
                {question}
              </h3>
            </div>
            <p className="w-full text-right font-['Vazirmatn'] text-[14px] font-normal leading-[22px] text-[#60758a]" dir="auto">
              {answer}
            </p>
          </article>
        ))}
      </div>

      <p className="w-full cursor-pointer text-center font-['Vazirmatn'] text-[14px] font-bold leading-[22px] text-[#2094e3]" dir="auto">
        مشاهده همه سوالات متداول ←
      </p>
    </section>
  );
}
