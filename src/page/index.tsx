import React from "react";
import "./index.css";

const groups = [
  ["محتوا", ["داشبورد", "همه محتواها", "اخبار", "صفحات سایت", "صفحه اصلی", "سؤالات متداول"]],
  ["انتشار", ["رسانه‌ها", "منو و Footer", "مدیریت SEO", "بازبینی و پیش‌نمایش"]],
  ["مدیریت", ["کاربران و نقش‌ها", "گزارش فعالیت‌ها"]],
] as const;

function Sidebar() {
  return (
    <aside className="absolute right-0 top-0 flex h-[1024px] w-[264px] flex-col border-l border-[#e4ebf1] bg-white px-4 py-6">
      <img src="/assets/codia/qUM4YkHidH.png" alt="سامانه ماه" className="mb-5 h-[46px] w-[137px] self-center object-contain" />
      <div className="mb-6 flex items-center gap-3 rounded-xl bg-[#f4f6f8] p-3">
        <img src="/assets/codia/fbpv3fkd1w.png" alt="مریم احمدی" className="h-9 w-9 rounded-full object-cover" />
        <div><b className="text-[13px]">مریم احمدی</b><p className="text-[11px] text-[#60758a]">مدیر ارشد محتوا <span className="mr-2 rounded bg-[#eaf5fd] px-2 py-1 font-bold text-[#2094e3]">CMS</span></p></div>
      </div>
      {groups.map(([title, items]) => (
        <section className="mb-4" key={title}>
          <h2 className="mb-1 px-3 text-[11px] font-bold text-[#60758a]">{title}</h2>
          {items.map((item) => <div key={item} className={`flex items-center gap-3 rounded-lg px-3 py-2.5 text-[14px] ${item === "کاربران و نقش‌ها" ? "bg-[#eaf5fd] font-bold text-[#2094e3]" : "text-[#60758a]"}`}><span aria-hidden>◇</span>{item}</div>)}
        </section>
      ))}
      <button className="mt-auto rounded-xl bg-[#2094e3] py-3 font-bold text-white">خروج از سیستم</button>
    </aside>
  );
}

function Header() {
  return (
    <header className="flex h-20 items-center justify-between border-b border-[#e4ebf1]">
      <div className="flex items-center gap-4">
        <img src="/assets/codia/fbpv3fkd1w.png" alt="مریم احمدی" className="h-9 w-9 rounded-full object-cover" />
        <div><b className="text-[13px]">مریم احمدی</b><p className="text-[11px] text-[#60758a]">مدیر ارشد محتوا</p></div>
        <span className="h-6 w-px bg-[#e4ebf1]" /><button className="rounded-lg border bg-white p-2">؟</button><button className="relative rounded-lg border bg-white p-2">♧<span className="absolute -right-1 -top-2 rounded-full bg-[#ef4444] px-1.5 text-[10px] text-white">۳</span></button>
        <span className="rounded-lg border bg-white px-3 py-2 text-[13px]">▣ یکشنبه، ۲۶ مرداد ۱۴۰۵</span>
      </div>
      <div className="flex h-10 w-[380px] items-center rounded-xl border bg-white px-4 text-[13px] text-[#60758a]">⌕<span className="mr-2">جست‌وجو در محتوای CMS...</span></div>
    </header>
  );
}

const tabs = ["کاربران", "نقش‌ها و مجوزها", "دعوت‌ها", "درخواست‌های دسترسی", "دسترسی‌های حساس", "وضعیت امنیتی"];

export default function Main() {
  return (
    <div dir="rtl" className="main-container relative h-[1024px] w-[1440px] bg-[#f4f6f8] text-[#17324d]">
      <Sidebar />
      <div className="mr-[264px] px-10"><Header />
        <main className="pt-6">
          <section className="flex items-center justify-between">
            <div><h1 className="text-[24px] font-extrabold">کاربران و نقش‌ها</h1><p className="mt-1 text-[13px] text-[#60758a]">مدیریت اعضای تیم محتوا و سطح دسترسی آن‌ها در CMS سامانه ماه</p></div>
            <div className="flex gap-3"><button className="rounded-xl bg-[#2094e3] px-5 py-3 text-[14px] font-bold text-white">دعوت کاربر جدید</button><button className="rounded-xl border bg-white px-5 py-3 text-[14px] font-bold text-[#2094e3]">مشاهده درخواست‌های دسترسی</button></div>
          </section>
          <section className="mt-6 flex items-center justify-between rounded-xl border border-[#c27a10] bg-[#fef3c7] px-5 py-3 text-[13px]"><div><b>این بخش فقط دسترسی‌های CMS را مدیریت می‌کند</b><p className="mt-1 text-[#60758a]">دسترسی به سامانه‌های بیرونی و زیرساخت از این قسمت قابل تغییر نیست.</p></div><a className="font-bold text-[#2094e3] underline">مطالعه مستندات دسترسی‌ها</a></section>
          <nav className="mt-6 flex gap-7 border-b border-[#dbe4ec]">{tabs.map((tab, i) => <span key={tab} className={`pb-3 text-[13px] ${i === 0 ? "border-b-2 border-[#2094e3] font-bold text-[#2094e3]" : "text-[#60758a]"}`}>{tab}</span>)}</nav>
          <section className="mt-6 rounded-2xl border border-[#e4ebf1] bg-white p-4">
            <div className="flex items-center gap-3"><div className="flex h-10 flex-1 items-center rounded-lg border px-3 text-[13px] text-[#60758a]">⌕<span className="mr-2">جست‌وجوی نام، ایمیل یا نقش...</span></div>{["وضعیت: همه", "نقش: همه نقش‌ها", "آخرین فعالیت: همه زمان‌ها"].map(x => <button key={x} className="h-10 rounded-lg border px-4 text-[13px] text-[#60758a]">{x}⌄</button>)}<button className="h-10 rounded-lg bg-[#2094e3] px-5 text-[13px] font-bold text-white">اعمال فیلتر</button><button className="text-[13px] text-[#2094e3] underline">پاک‌کردن فیلترها</button></div>
          </section>
          <section className="mt-6 flex h-[430px] flex-col items-center justify-center rounded-[20px] border border-[#e4ebf1] bg-white text-center">
            <div className="grid h-24 w-24 place-items-center rounded-full bg-[#eaf5fd] text-[45px] text-[#2094e3]">⌕</div>
            <h2 className="mt-6 text-[18px] font-extrabold">کاربری مطابق فیلترهای انتخاب‌شده پیدا نشد</h2>
            <p className="mt-2 text-[13px] text-[#60758a]">فیلترها را تغییر دهید یا همه فیلترهای فعال را پاک کنید.</p>
            <button className="mt-6 rounded-xl border border-[#2094e3] bg-white px-6 py-3 text-[14px] font-bold text-[#2094e3]">پاک‌کردن فیلترها</button>
          </section>
        </main>
      </div>
    </div>
  );
}
