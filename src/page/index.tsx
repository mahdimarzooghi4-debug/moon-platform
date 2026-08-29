import React from "react";
import "./index.css";

type CardProps = { title: string; children: React.ReactNode; className?: string };

const kpis = [
  { title: "آموزش مهارت", value: "۳۷۰ نفر", target: "هدف: ۳۶۰ نفر", percent: "۱۰۳٪" },
  { title: "کسب مهارت", value: "۳۶۰ نفر", target: "هدف: ۳۶۰ نفر", percent: "۱۰۰٪" },
  { title: "اشتغال پایدار", value: "۲۸۲ نفر", target: "هدف: ۳۰۰ نفر", percent: "۹۴٪" },
  { title: "رضایت شرکت‌کنندگان", value: "۹۶٪", target: "هدف: ۹۰٪", percent: "۱۰۷٪" },
];

function Header() {
  return <header className="flex h-[78px] items-center justify-between border-b border-[#e4ebf1] bg-white px-[120px]">
    <img className="h-[46px] w-[137px] object-contain" src="/assets/codia/qreWA0b9ix.png" alt="سامانه ماه" />
    <nav aria-label="ناوبری اصلی" className="flex items-center gap-7 text-[14px] font-medium text-[#17324d]"><a href="#">صفحه اصلی</a><a className="text-[#2094e3]" href="#">پروژه‌ها</a><a href="#">استارتاپ‌ها</a><a href="#">شرکت‌ها</a><a href="#">تماس با ما</a><a href="#">درباره ما</a></nav>
    <div className="flex gap-3"><button className="rounded-xl bg-[#2094e3] px-5 py-3 text-[14px] font-bold text-white">شروع مشارکت</button><button className="rounded-xl border border-[#2094e3] px-5 py-3 text-[14px] font-bold text-[#2094e3]">پیگیری مشارکت</button></div>
  </header>;
}

function Card({ title, children, className = "" }: CardProps) {
  return <section className={`rounded-[20px] border border-[#e4ebf1] bg-white p-7 ${className}`}><h2 className="mb-6 text-[20px] font-bold text-[#17324d]">{title}</h2>{children}</section>;
}

function Metric({ label, value, tone = "blue" }: { label: string; value: string; tone?: "blue" | "green" }) {
  return <div className="rounded-xl bg-[#f6f9fb] p-5"><span className="text-[12px] text-[#60758a]">{label}</span><strong className={`mt-2 block text-[18px] ${tone === "green" ? "text-[#238a57]" : "text-[#17324d]"}`}>{value}</strong></div>;
}

function Footer() {
  return <footer className="mt-20 bg-[#111e30] px-[120px] pb-8 pt-14 text-white"><div className="grid grid-cols-[1.7fr_1fr_1fr_1fr] gap-16">
    <div><img className="mb-5 h-[50px] w-[150px] object-contain brightness-0 invert" src="/assets/codia/j0Pvw1w6QL.png" alt="ماه" /><p className="max-w-[420px] text-[14px] leading-7 text-[#c7d2dc]">ماه، بستر شفاف مشارکت در پروژه‌های اثرگذار اجتماعی است؛ جایی برای دیدن نتیجه، سنجش اثر و ساختن آینده‌ای پایدار.</p></div>
    <div><h3 className="mb-4 font-bold">دسترسی سریع</h3><p className="text-[13px] leading-8 text-[#c7d2dc]">صفحه اصلی<br />پروژه‌ها<br />استارتاپ‌ها<br />شرکت‌ها</p></div>
    <div><h3 className="mb-4 font-bold">راهنما</h3><p className="text-[13px] leading-8 text-[#c7d2dc]">سؤالات متداول<br />حریم خصوصی<br />قوانین و مقررات<br />تماس با ما</p></div>
    <div><h3 className="mb-4 font-bold">ارتباط با ما</h3><p className="text-[13px] leading-8 text-[#c7d2dc]">تهران، خانه خلاق و نوآوری آینه<br />info@mah.ir<br />۰۲۱-۸۸۷۷۶۶۵۵</p></div>
  </div><div className="mt-10 border-t border-[#304154] pt-6 text-center text-[12px] text-[#93a5b7]">تمامی حقوق این سامانه برای پلتفرم ماه محفوظ است.</div></footer>;
}

export default function Main() {
  return <div className="main-container min-h-screen w-full min-w-[1180px] bg-[#fcfbf8]" dir="rtl">
    <Header />
    <main className="mx-auto w-[1200px] py-8">
      <div className="mb-7 text-[13px] text-[#60758a]">صفحه اصلی / پروژه‌ها / گزارش نهایی اثر</div>
      <section className="mb-7 rounded-[24px] border border-[#e4ebf1] bg-white p-8">
        <div className="flex items-start justify-between gap-8"><div><span className="mb-4 inline-flex rounded-xl bg-[#e8f7ee] px-3 py-1.5 text-[12px] font-bold text-[#238a57]">پروژه تکمیل‌شده</span><h1 className="text-[30px] font-extrabold leading-[48px] text-[#17324d]">گزارش نهایی عملکرد پروژه اشتغال زنان روستایی</h1><p className="mt-3 text-[14px] text-[#60758a]">کد پروژه: MAH-P-۱۴۰۵-۰۰۲۸۴۶ · تاریخ انتشار: ۲۸ اسفند ۱۴۰۵</p></div><button className="shrink-0 rounded-xl border border-[#2094e3] px-5 py-3 text-[14px] font-bold text-[#2094e3]">دریافت نسخه چاپی</button></div>
        <div className="mt-8 grid grid-cols-4 gap-4 rounded-2xl bg-[#f6f9fb] p-5 text-center"><div><p className="text-[12px] text-[#60758a]">وضعیت پروژه</p><strong className="mt-2 block text-[#238a57]">تکمیل‌شده</strong></div><div><p className="text-[12px] text-[#60758a]">تحقق اهداف</p><strong className="mt-2 block text-[#2094e3]">۹۴٪</strong></div><div><p className="text-[12px] text-[#60758a]">وضعیت مالی</p><strong className="mt-2 block text-[#17324d]">تسویه کامل</strong></div><div><p className="text-[12px] text-[#60758a]">تاریخ پایان</p><strong className="mt-2 block text-[#17324d]">۲۸ اسفند ۱۴۰۵</strong></div></div>
      </section>

      <div className="mb-7 grid grid-cols-4 gap-4">{kpis.map(kpi => <article key={kpi.title} className="rounded-[18px] border border-[#e4ebf1] bg-white p-5"><div className="mb-4 flex items-center justify-between"><span className="text-[13px] font-bold text-[#60758a]">{kpi.title}</span><span className="rounded-lg bg-[#eaf5fd] px-2 py-1 text-[12px] font-bold text-[#2094e3]">{kpi.percent}</span></div><strong className="block text-[26px] text-[#17324d]">{kpi.value}</strong><span className="mt-2 block text-[12px] text-[#8091a2]">{kpi.target}</span></article>)}</div>

      <Card title="خلاصه نهایی پروژه" className="mb-7"><p className="text-[15px] leading-8 text-[#425b72]">پروژه اشتغال زنان روستایی پس از اجرای سه مرحله آموزش، تجهیز و توسعه بازار به پایان رسید. ۳۷۰ زن از ۴۵ روستای استان گلستان در برنامه شرکت کردند، ۳۶۰ نفر مهارت تخصصی کسب کردند و برای ۲۸۲ نفر فرصت اشتغال پایدار ایجاد شد. همه پرداخت‌ها و اسناد مالی تأیید شده و نتایج پروژه برای پایش پس از اجرا ثبت شده است.</p><div className="mt-5 grid grid-cols-3 gap-4"><Metric label="مدت اجرای پروژه" value="۱۲ ماه" /><Metric label="امتیاز ارزیابی نهایی" value="۸۸ از ۱۰۰" tone="green" /><Metric label="وضعیت مستندات" value="کامل و تأییدشده" tone="green" /></div></Card>

      <Card title="دستاوردهای نهایی" className="mb-7"><div className="grid grid-cols-2 gap-4 text-[14px] leading-7 text-[#425b72]">{["برگزاری دوره‌های مهارتی برای ۳۷۰ زن روستایی", "تجهیز و راه‌اندازی ۱۵ مرکز تولید محلی", "ایجاد اشتغال پایدار برای ۲۸۲ نفر", "اتصال محصولات به شبکه فروش استانی", "تشکیل گروه‌های محلی پشتیبان تولید", "ثبت مدل اجرایی برای توسعه در استان‌های دیگر"].map(x => <p key={x} className="rounded-xl border border-[#e4ebf1] p-4"><span className="ml-2 font-bold text-[#238a57]">✓</span>{x}</p>)}</div></Card>

      <div className="mb-7 grid grid-cols-2 gap-6">
        <Card title="درس‌آموخته‌ها و پیشنهادها"><div className="space-y-4 text-[14px] leading-7 text-[#425b72]"><p className="rounded-xl bg-[#f6f9fb] p-4"><strong className="block text-[#17324d]">پشتیبانی پس از آموزش</strong>تداوم راهنمایی مربیان، نرخ ورود به بازار را به‌طور محسوسی افزایش داد.</p><p className="rounded-xl bg-[#f6f9fb] p-4"><strong className="block text-[#17324d]">شبکه‌سازی محلی</strong>همکاری دهیاری‌ها و گروه‌های زنان، عامل مهم حفظ مشارکت بود.</p><p className="rounded-xl bg-[#f6f9fb] p-4"><strong className="block text-[#17324d]">پیشنهاد توسعه</strong>برای مرحله توسعه، تقویت فروش دیجیتال و بسته‌بندی یکپارچه پیشنهاد می‌شود.</p></div></Card>
        <Card title="پراکندگی و جامعه هدف"><div className="grid grid-cols-2 gap-3"><Metric label="استان" value="گلستان" /><Metric label="شهرستان" value="۸ شهرستان" /><Metric label="روستا" value="۴۵ روستا" /><Metric label="مرکز تولید" value="۱۵ مرکز" /><Metric label="کل شرکت‌کنندگان" value="۳۷۰ نفر" /><Metric label="میانگین سن" value="۳۴ سال" /></div><div className="mt-4 flex gap-3"><span className="rounded-lg bg-[#fff2df] px-3 py-2 text-[12px] text-[#8b5a13]">۲۴۰ زن سرپرست خانوار</span><span className="rounded-lg bg-[#eef1ff] px-3 py-2 text-[12px] text-[#5160a6]">۱۳۰ نفر سایر گروه‌ها</span></div></Card>
      </div>

      <Card title="گزارش مالی نهایی" className="mb-7"><div className="grid grid-cols-4 gap-4"><Metric label="بودجه کل مصوب" value="۴۰۰ میلیون تومان" /><Metric label="مبلغ آزادشده" value="۴۰۰ میلیون تومان" /><Metric label="مانده پروژه" value="صفر تومان" tone="green" /><Metric label="وضعیت تسویه" value="تسویه کامل" tone="green" /></div><div className="mt-5 h-2 overflow-hidden rounded-full bg-[#e4ebf1]"><div className="h-full w-full bg-[#28a96b]" /></div><p className="mt-2 text-[12px] font-bold text-[#238a57]">۱۰۰٪ بودجه مطابق برنامه پرداخت و اسناد آن تأیید شد.</p></Card>

      <Card title="مستندات و شواهد نهایی" className="mb-7"><div className="grid grid-cols-3 gap-4"><img className="h-[215px] w-full rounded-2xl object-cover" src="/assets/codia/qN8rNm5ete.webp" alt="دوره آموزش زنان روستایی" /><img className="h-[215px] w-full rounded-2xl object-cover" src="/assets/codia/xkhGZiM7zx.webp" alt="محصولات پروژه اشتغال" /><img className="h-[215px] w-full rounded-2xl object-cover" src="/assets/codia/RR9PzHGgQe.webp" alt="ارائه محصولات نهایی پروژه" /></div><div className="mt-5 flex items-center justify-between rounded-xl bg-[#e8f7ee] p-5"><div><strong className="block text-[#238a57]">مجموعه مستندات کامل است</strong><span className="mt-1 block text-[12px] text-[#60758a]">گزارش‌ها، فاکتورها، فرم‌های ارزیابی و تصاویر توسط ناظر بررسی شده‌اند.</span></div><button className="rounded-lg border border-[#238a57] px-4 py-2 text-[13px] font-bold text-[#238a57]">مشاهده مستندات</button></div></Card>

      <div className="mb-7 grid grid-cols-2 gap-6"><Card title="ارزیابی نهایی ناظر"><div className="flex items-center justify-between rounded-xl bg-[#f6f9fb] p-5"><div><span className="text-[12px] text-[#60758a]">امتیاز نهایی</span><strong className="mt-1 block text-[28px] text-[#17324d]">۸۸ از ۱۰۰</strong></div><span className="rounded-full bg-[#e8f7ee] px-4 py-2 text-[13px] font-bold text-[#238a57]">عملکرد مطلوب</span></div><p className="mt-4 text-[14px] leading-8 text-[#425b72]">پروژه از نظر تحقق خروجی‌ها، کیفیت مستندسازی و پایداری نتایج مطلوب ارزیابی شد. شاخص اشتغال به ۹۴٪ هدف رسید و نیازمند پایش دوره‌ای است.</p></Card><Card title="جمع‌بندی و خاتمه پروژه"><p className="text-[14px] leading-8 text-[#425b72]">تمامی تعهدات اجرایی و مالی پروژه انجام شده است. پرونده پروژه با حفظ امکان پایش نتایج و انتشار گزارش‌های پس از اجرا بسته می‌شود.</p><div className="mt-5 rounded-xl border-r-4 border-[#238a57] bg-[#e8f7ee] p-4 font-bold text-[#238a57]">وضعیت نهایی: خاتمه موفق پروژه</div></Card></div>

      <Card title="خط زمانی کامل پروژه"><div className="relative grid grid-cols-5 gap-5 before:absolute before:right-[9%] before:left-[9%] before:top-4 before:h-[2px] before:bg-[#cce7f8]">{[["آغاز پروژه", "فروردین ۱۴۰۵"], ["پایان آموزش", "آذر ۱۴۰۵"], ["تجهیز مراکز", "دی ۱۴۰۵"], ["اتصال به بازار", "بهمن ۱۴۰۵"], ["خاتمه پروژه", "اسفند ۱۴۰۵"]].map(x => <div key={x[0]} className="relative text-center"><span className="relative z-10 mx-auto block h-8 w-8 rounded-full border-[7px] border-[#eaf5fd] bg-[#2094e3]" /><strong className="mt-3 block text-[13px] text-[#17324d]">{x[0]}</strong><span className="text-[12px] text-[#60758a]">{x[1]}</span></div>)}</div></Card>

      <section className="mt-7 flex items-center justify-between rounded-[20px] bg-[#2094e3] p-8 text-white"><div><h2 className="text-[22px] font-bold">نتیجه این اثر ماندگار است</h2><p className="mt-2 text-[14px] text-[#eaf5fd]">اطلاعات پایش پس از اجرا و تغییرات شاخص‌های اشتغال در همین صفحه منتشر می‌شود.</p></div><button className="rounded-xl bg-white px-6 py-3 font-bold text-[#2094e3]">بازگشت به صفحه پروژه</button></section>
    </main>
    <Footer />
  </div>;
}
