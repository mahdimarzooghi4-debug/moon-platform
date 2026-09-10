import React from "react";
import "./index.css";

type CardProps = {
  title: string;
  children: React.ReactNode;
  className?: string;
};

const kpis = [
  { title: "آموزش مهارت", value: "۱۲۴ نفر", target: "هدف: ۱۲۰ نفر", percent: "۱۰۳٪" },
  { title: "کسب مهارت", value: "۱۲۰ نفر", target: "هدف: ۱۲۰ نفر", percent: "۱۰۰٪" },
  { title: "روستاهای تحت پوشش", value: "۱۵ روستا", target: "هدف: ۱۵ روستا", percent: "۱۰۰٪" },
  { title: "رضایت شرکت‌کنندگان", value: "۸۷٪", target: "هدف: ۸۰٪", percent: "۱۰۹٪" },
];

const rows = [
  ["تعداد زنان آموزش‌دیده", "۱۲۰ نفر", "۱۲۴ نفر", "۱۰۳٪", "فراتر از هدف"],
  ["تعداد افراد کسب‌کننده مهارت", "۱۲۰ نفر", "۱۲۰ نفر", "۱۰۰٪", "تحقق کامل"],
  ["تعداد روستاهای تحت پوشش", "۱۵ روستا", "۱۵ روستا", "۱۰۰٪", "تحقق کامل"],
  ["رضایت شرکت‌کنندگان", "۸۰٪", "۸۷٪", "۱۰۹٪", "فراتر از هدف"],
];

function Header() {
  return (
    <header className="flex h-[78px] items-center justify-between border-b border-[#e4ebf1] bg-white px-[120px]">
      <img className="h-[46px] w-[137px] object-contain" src="/assets/codia/qreWA0b9ix.png" alt="سامانه ماه" />
      <nav aria-label="ناوبری اصلی" className="flex items-center gap-7 text-[14px] font-medium text-[#17324d]">
        <a href="#">صفحه اصلی</a><a className="text-[#2094e3]" href="#">پروژه‌ها</a><a href="#">استارتاپ‌ها</a>
        <a href="#">شرکت‌ها</a><a href="#">تماس با ما</a><a href="#">درباره ما</a>
      </nav>
      <div className="flex gap-3">
        <button className="rounded-xl bg-[#2094e3] px-5 py-3 text-[14px] font-bold text-white">شروع مشارکت</button>
        <button className="rounded-xl border border-[#2094e3] px-5 py-3 text-[14px] font-bold text-[#2094e3]">پیگیری مشارکت</button>
      </div>
    </header>
  );
}

function Card({ title, children, className = "" }: CardProps) {
  return (
    <section className={`rounded-[20px] border border-[#e4ebf1] bg-white p-7 ${className}`}>
      <h2 className="mb-6 text-[20px] font-bold text-[#17324d]">{title}</h2>
      {children}
    </section>
  );
}

function Footer() {
  return (
    <footer className="mt-20 bg-[#111e30] px-[120px] pb-8 pt-14 text-white">
      <div className="grid grid-cols-[1.7fr_1fr_1fr_1fr] gap-16">
        <div><img className="mb-5 h-[50px] w-[150px] object-contain brightness-0 invert" src="/assets/codia/j0Pvw1w6QL.png" alt="ماه" />
          <p className="max-w-[420px] text-[14px] leading-7 text-[#c7d2dc]">ماه، بستر شفاف مشارکت در پروژه‌های اثرگذار اجتماعی است؛ جایی برای دیدن نتیجه، سنجش اثر و ساختن آینده‌ای پایدار.</p></div>
        <div><h3 className="mb-4 font-bold">دسترسی سریع</h3><p className="space-y-3 text-[13px] leading-8 text-[#c7d2dc]">صفحه اصلی<br />پروژه‌ها<br />استارتاپ‌ها<br />شرکت‌ها</p></div>
        <div><h3 className="mb-4 font-bold">راهنما</h3><p className="space-y-3 text-[13px] leading-8 text-[#c7d2dc]">سؤالات متداول<br />حریم خصوصی<br />قوانین و مقررات<br />تماس با ما</p></div>
        <div><h3 className="mb-4 font-bold">ارتباط با ما</h3><p className="text-[13px] leading-8 text-[#c7d2dc]">تهران، خانه خلاق و نوآوری آینه<br />info@mah.ir<br />۰۲۱-۸۸۷۷۶۶۵۵</p></div>
      </div>
      <div className="mt-10 border-t border-[#304154] pt-6 text-center text-[12px] text-[#93a5b7]">تمامی حقوق این سامانه برای پلتفرم ماه محفوظ است.</div>
    </footer>
  );
}

export default function Main() {
  return (
    <div className="main-container min-h-screen w-full min-w-[1180px] bg-[#fcfbf8]" dir="rtl">
      <Header />
      <main className="mx-auto w-[1200px] py-8">
        <div className="mb-7 text-[13px] text-[#60758a]">صفحه اصلی / پروژه‌ها / گزارش اثر پروژه</div>
        <section className="mb-7 rounded-[24px] border border-[#e4ebf1] bg-white p-8">
          <div className="flex items-start justify-between gap-8">
            <div>
              <span className="mb-4 inline-flex rounded-xl bg-[#e8f7ee] px-3 py-1.5 text-[12px] font-bold text-[#238a57]">گزارش تأییدشده</span>
              <h1 className="text-[30px] font-extrabold leading-[48px] text-[#17324d]">گزارش عملکرد مرحله اول پروژه اشتغال زنان روستایی</h1>
              <p className="mt-3 text-[14px] text-[#60758a]">کد پروژه: MAH-P-۱۴۰۵-۰۰۲۸۴۶ · تاریخ انتشار: ۲۰ آذر ۱۴۰۵</p>
            </div>
            <button className="shrink-0 rounded-xl border border-[#2094e3] px-5 py-3 text-[14px] font-bold text-[#2094e3]">دریافت نسخه چاپی</button>
          </div>
          <div className="mt-8 grid grid-cols-4 gap-4 rounded-2xl bg-[#f6f9fb] p-5 text-center">
            <div><p className="text-[12px] text-[#60758a]">وضعیت گزارش</p><strong className="mt-2 block text-[#238a57]">تأییدشده</strong></div>
            <div><p className="text-[12px] text-[#60758a]">مرحله پروژه</p><strong className="mt-2 block text-[#17324d]">مرحله اول تکمیل شده</strong></div>
            <div><p className="text-[12px] text-[#60758a]">پیشرفت مرحله</p><strong className="mt-2 block text-[#2094e3]">۱۰۰٪</strong></div>
            <div><p className="text-[12px] text-[#60758a]">وضعیت پرداخت</p><strong className="mt-2 block text-[#17324d]">آزادسازی شده</strong></div>
          </div>
        </section>

        <div className="mb-7 grid grid-cols-4 gap-4">
          {kpis.map((kpi) => <article key={kpi.title} className="rounded-[18px] border border-[#e4ebf1] bg-white p-5">
            <div className="mb-4 flex items-center justify-between"><span className="text-[13px] font-bold text-[#60758a]">{kpi.title}</span><span className="rounded-lg bg-[#eaf5fd] px-2 py-1 text-[12px] font-bold text-[#2094e3]">{kpi.percent}</span></div>
            <strong className="block text-[26px] text-[#17324d]">{kpi.value}</strong><span className="mt-2 block text-[12px] text-[#8091a2]">{kpi.target}</span>
          </article>)}
        </div>

        <Card title="خلاصه عملکرد پروژه" className="mb-7">
          <p className="text-[15px] leading-8 text-[#425b72]">در مرحله اول پروژه، برنامه آموزش مهارت‌های تولید و بسته‌بندی محصولات محلی در ۱۵ روستای استان گلستان اجرا شد. ۱۲۴ زن در دوره‌ها حضور یافتند و ۱۲۰ نفر موفق به تکمیل آموزش و کسب مهارت شدند. ارزیابی‌ها نشان می‌دهد کیفیت اجرا، مشارکت جامعه محلی و رضایت شرکت‌کنندگان فراتر از هدف پیش‌بینی‌شده بوده است.</p>
          <div className="mt-5 rounded-xl border-r-4 border-[#2094e3] bg-[#eaf5fd] p-4 text-[13px] leading-7 text-[#35536e]">این گزارش پس از بررسی مستندات، تطبیق شاخص‌ها و تأیید ناظر پروژه منتشر شده است.</div>
        </Card>

        <Card title="وضعیت شاخص‌های کلیدی" className="mb-7">
          <div className="overflow-hidden rounded-xl border border-[#e4ebf1]">
            <table className="w-full border-collapse text-right text-[13px]"><thead className="bg-[#f3f7fa] text-[#60758a]"><tr>{["شاخص", "هدف", "عملکرد", "درصد تحقق", "وضعیت"].map(h => <th key={h} className="px-4 py-4 font-bold">{h}</th>)}</tr></thead>
              <tbody>{rows.map((row) => <tr key={row[0]} className="border-t border-[#e4ebf1] text-[#17324d]">{row.map((cell, index) => <td key={cell} className={`px-4 py-4 ${index === 4 ? "font-bold text-[#238a57]" : ""}`}>{cell}</td>)}</tr>)}</tbody></table>
          </div>
        </Card>

        <div className="mb-7 grid grid-cols-2 gap-6">
          <Card title="روش اجرا و ارزیابی">
            <ol className="space-y-4 text-[14px] leading-7 text-[#425b72]">
              {["شناسایی روستاها و ثبت‌نام جامعه هدف", "برگزاری دوره‌های عملی و کارگاه‌های مهارتی", "ارزیابی آموخته‌ها و ثبت مستندات", "نظرسنجی رضایت و بررسی مستقل ناظر"].map((x, i) => <li key={x} className="flex gap-3"><span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-[#eaf5fd] font-bold text-[#2094e3]">{["۱","۲","۳","۴"][i]}</span><span>{x}</span></li>)}
            </ol>
          </Card>
          <Card title="پراکندگی جغرافیایی و جامعه هدف">
            <div className="grid grid-cols-2 gap-3">{[["استان", "گلستان"], ["شهرستان", "۳ شهرستان"], ["روستا", "۱۵ روستا"], ["مرکز آموزشی", "۵ مرکز"], ["کل شرکت‌کنندگان", "۱۲۴ نفر"], ["میانگین سن", "۳۶ سال"]].map(x => <div key={x[0]} className="rounded-xl bg-[#f6f9fb] p-4"><span className="block text-[11px] text-[#60758a]">{x[0]}</span><strong className="mt-1 block text-[15px] text-[#17324d]">{x[1]}</strong></div>)}</div>
            <div className="mt-4 flex gap-3"><span className="rounded-lg bg-[#fff2df] px-3 py-2 text-[12px] text-[#8b5a13]">۷۸ زن سرپرست خانوار</span><span className="rounded-lg bg-[#eef1ff] px-3 py-2 text-[12px] text-[#5160a6]">۴۶ نفر سایر گروه‌ها</span></div>
          </Card>
        </div>

        <Card title="گزارش مالی مرحله اول" className="mb-7">
          <div className="grid grid-cols-4 gap-4">{[["بودجه مصوب", "۱۲۰ میلیون تومان"], ["مبلغ آزادشده", "۱۲۰ میلیون تومان"], ["مانده این مرحله", "صفر تومان"], ["تاریخ پرداخت", "۱۹ آذر ۱۴۰۵"]].map(x => <div key={x[0]} className="rounded-xl bg-[#f6f9fb] p-5"><span className="text-[12px] text-[#60758a]">{x[0]}</span><strong className="mt-2 block text-[17px] text-[#17324d]">{x[1]}</strong></div>)}</div>
          <div className="mt-5 h-2 overflow-hidden rounded-full bg-[#e4ebf1]"><div className="h-full w-full bg-[#28a96b]" /></div><p className="mt-2 text-[12px] font-bold text-[#238a57]">۱۰۰٪ بودجه این مرحله پرداخت شده است.</p>
        </Card>

        <Card title="مستندات تصویری پروژه" className="mb-7">
          <div className="grid grid-cols-3 gap-4">
            <img className="h-[220px] w-full rounded-2xl object-cover" src="/assets/codia/qN8rNm5ete.webp" alt="کارگاه آموزش زنان روستایی" />
            <img className="h-[220px] w-full rounded-2xl object-cover" src="/assets/codia/xkhGZiM7zx.webp" alt="فعالیت عملی شرکت‌کنندگان" />
            <img className="h-[220px] w-full rounded-2xl object-cover" src="/assets/codia/k38ngLiS1o.webp" alt="محصولات تولیدشده در پروژه" />
          </div>
          <div className="mt-5 grid grid-cols-2 gap-4 text-[13px] text-[#425b72]"><p className="rounded-xl border border-[#e4ebf1] p-4">✓ فهرست حضور و گواهی پایان دوره شرکت‌کنندگان بررسی شد.</p><p className="rounded-xl border border-[#e4ebf1] p-4">✓ گزارش مربیان و فرم‌های ارزیابی مهارت تأیید شد.</p><p className="rounded-xl border border-[#e4ebf1] p-4">✓ اسناد هزینه‌کرد با بودجه مصوب تطبیق داده شد.</p><p className="rounded-xl border border-[#e4ebf1] p-4">✓ نتایج نظرسنجی رضایت در سامانه ثبت شده است.</p></div>
        </Card>

        <div className="mb-7 grid grid-cols-2 gap-6">
          <Card title="ارزیابی ناظر پروژه"><p className="text-[14px] leading-8 text-[#425b72]">اجرای مرحله اول از نظر کیفیت آموزش، پوشش جامعه هدف و مستندسازی، مطابق برنامه و قابل تأیید است. پیشنهاد می‌شود در مرحله بعد تمرکز بر اتصال محصولات به بازار و تثبیت درآمد باشد.</p><div className="mt-5 flex items-center justify-between rounded-xl bg-[#e8f7ee] p-4"><span className="font-bold text-[#238a57]">نتیجه ارزیابی: تأیید</span><span className="text-[12px] text-[#60758a]">خانه خلاق و نوآوری آینه</span></div></Card>
          <Card title="گام بعدی پروژه"><p className="text-[14px] leading-8 text-[#425b72]">با تأیید این مرحله، برنامه تجهیز کارگاه‌ها، توسعه محصول و اتصال تولیدکنندگان به شبکه فروش آغاز می‌شود.</p><button className="mt-5 w-full rounded-xl bg-[#2094e3] py-3.5 font-bold text-white">مشاهده برنامه مرحله دوم</button></Card>
        </div>

        <Card title="خط زمانی مرحله اول">
          <div className="relative grid grid-cols-4 gap-5 before:absolute before:right-[11%] before:left-[11%] before:top-4 before:h-[2px] before:bg-[#cce7f8]">
            {[["شروع آموزش", "مهر ۱۴۰۵"], ["ارزیابی میانی", "آبان ۱۴۰۵"], ["پایان آموزش", "۱۶ آذر ۱۴۰۵"], ["تأیید گزارش", "۲۰ آذر ۱۴۰۵"]].map(x => <div key={x[0]} className="relative text-center"><span className="relative z-10 mx-auto block h-8 w-8 rounded-full border-[7px] border-[#eaf5fd] bg-[#2094e3]" /><strong className="mt-3 block text-[13px] text-[#17324d]">{x[0]}</strong><span className="text-[12px] text-[#60758a]">{x[1]}</span></div>)}
          </div>
        </Card>

        <section className="mt-7 flex items-center justify-between rounded-[20px] bg-[#2094e3] p-8 text-white"><div><h2 className="text-[22px] font-bold">اثر پروژه را دنبال کنید</h2><p className="mt-2 text-[14px] text-[#eaf5fd]">گزارش مراحل بعدی و تازه‌ترین نتایج از همین صفحه منتشر می‌شود.</p></div><button className="rounded-xl bg-white px-6 py-3 font-bold text-[#2094e3]">بازگشت به صفحه پروژه</button></section>
      </main>
      <Footer />
    </div>
  );
}
