import React from "react";
import "./index.css";

type SidebarItem = {
  label: string;
  icon: string;
  active?: boolean;
  key?: React.Key;
};

type Kpi = {
  label: string;
  value: string;
  caption: string;
  barClass: string;
  captionClass: string;
};

type StatusTab = {
  label: string;
  count: string;
  active?: boolean;
};

type FaqRow = {
  question: string;
  category: string;
  pages: string;
  author: string;
  lastEdit: string;
  reviewDate: string;
  status: string;
  statusTone: "success" | "legal" | "warning" | "danger";
};

const contentItems: SidebarItem[] = [
  { label: "داشبورد", icon: "/assets/mah/grid.svg" },
  { label: "همه محتواها", icon: "/assets/mah/file-text.svg" },
  { label: "اخبار", icon: "/assets/mah/book-open.svg" },
  { label: "صفحات سایت", icon: "/assets/mah/layout.svg" },
  { label: "صفحه اصلی", icon: "/assets/mah/home.svg" },
  { label: "سوالات متداول", icon: "", active: true },
];

const publishItems: SidebarItem[] = [
  { label: "رسانه‌ها", icon: "/assets/mah/image.svg" },
  { label: "منو و Footer", icon: "/assets/mah/menu.svg" },
  { label: "بازبینی و پیش‌نمایش", icon: "/assets/mah/eye.svg" },
];

const manageItems: SidebarItem[] = [
  { label: "کاربران و نقش‌ها", icon: "/assets/mah/users-roles.svg" },
  { label: "گزارش فعالیت‌ها", icon: "/assets/mah/activity.svg" },
];

const kpis: Kpi[] = [
  {
    label: "کل سوالات",
    value: "۸۶ سوال",
    caption: "در همه دسته‌بندی‌ها",
    barClass: "bg-[#2094e3]",
    captionClass: "text-[#2094e3]",
  },
  {
    label: "منتشرشده",
    value: "۶۴ سوال",
    caption: "قابل مشاهده در سایت",
    barClass: "bg-[#159455]",
    captionClass: "text-[#159455]",
  },
  {
    label: "در انتظار بازبینی",
    value: "۹ سوال",
    caption: "نیازمند بررسی ویراستار",
    barClass: "bg-[#ef4444]",
    captionClass: "text-[#ef4444]",
  },
  {
    label: "نیازمند بررسی حقوقی",
    value: "۴ سوال",
    caption: "مربوط به پرداخت یا ماده ۱۷۲",
    barClass: "bg-[#c27a10]",
    captionClass: "text-[#c27a10]",
  },
];

const statusTabs: StatusTab[] = [
  { label: "همه", count: "(۸۶)", active: true },
  { label: "پیش‌نویس", count: "(۸)" },
  { label: "در انتظار بازبینی", count: "(۹)" },
  { label: "نیازمند اصلاح", count: "(۱)" },
  { label: "بررسی حقوقی", count: "(۴)" },
  { label: "تأییدشده", count: "(۰)" },
  { label: "زمان‌بندی‌شده", count: "(۰)" },
  { label: "منتشرشده", count: "(۶۴)" },
  { label: "بایگانی‌شده", count: "(۰)" },
];

const faqRows: FaqRow[] = [
  {
    question: "چگونه می‌توانم در یک پروژه مشارکت کنم؟",
    category: "مشارکت فردی",
    pages: "۳ صفحه",
    author: "نگار رضایی",
    lastEdit: "۲۱ مرداد ۱۴۰۵",
    reviewDate: "۲۱ آبان ۱۴۰۵",
    status: "منتشرشده",
    statusTone: "success",
  },
  {
    question: "آیا برای مشارکت فردی به ساخت حساب کاربری نیاز دارم؟",
    category: "حساب کاربری",
    pages: "۲ صفحه",
    author: "سارا موسوی",
    lastEdit: "۱۸ مرداد ۱۴۰۵",
    reviewDate: "۱۸ آبان ۱۴۰۵",
    status: "منتشرشده",
    statusTone: "success",
  },
  {
    question: "پرداخت مشارکت‌های سازمانی به چه حسابی انجام می‌شود؟",
    category: "پرداخت و پیگیری",
    pages: "۲ صفحه",
    author: "نگار رضایی",
    lastEdit: "۱۷ مرداد ۱۴۰۵",
    reviewDate: "تعیین نشده",
    status: "بررسی حقوقی",
    statusTone: "legal",
  },
  {
    question: "آیا امکان پرداخت مستقیم به استارتاپ وجود دارد؟",
    category: "پروژه‌ها",
    pages: "۴ صفحه",
    author: "امیر حسینی",
    lastEdit: "۱۴ مرداد ۱۴۰۵",
    reviewDate: "۱۴ آبان ۱۴۰۵",
    status: "منتشرشده",
    statusTone: "success",
  },
  {
    question: "درخواست گواهی ماده ۱۷۲ چگونه بررسی می‌شود؟",
    category: "ماده ۱۷۲",
    pages: "۱ صفحه",
    author: "سارا موسوی",
    lastEdit: "۱۲ مرداد ۱۴۰۵",
    reviewDate: "تعیین نشده",
    status: "نیازمند بررسی حقوقی",
    statusTone: "warning",
  },
  {
    question: "گزارش‌های اثر اجتماعی چگونه تأیید می‌شوند؟",
    category: "گزارش‌های اثر",
    pages: "۲ صفحه",
    author: "نگار رضایی",
    lastEdit: "۱۰ مرداد ۱۴۰۵",
    reviewDate: "۱۰ آبان ۱۴۰۵",
    status: "در انتظار بازبینی",
    statusTone: "danger",
  },
];

function FaqActiveIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
      <path
        d="M6.81781 6.7495C6.99415 6.24821 7.34221 5.82551 7.80035 5.55626C8.25849 5.28701 8.79714 5.18858 9.32089 5.27842C9.84464 5.36826 10.3197 5.64056 10.6619 6.04709C11.0041 6.45363 11.1914 6.96816 11.1907 7.49956C11.1907 8.99968 8.94048 9.74974 8.94048 9.74974M9.0006 12.7503H9.0081M16.5012 8.99999C16.5012 13.1425 13.1431 16.5006 9.0006 16.5006C4.85813 16.5006 1.5 13.1425 1.5 8.99999C1.5 4.85752 4.85813 1.49939 9.0006 1.49939C13.1431 1.49939 16.5012 4.85752 16.5012 8.99999Z"
        stroke="#2094E3"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

function ChevronDownIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
      <path d="M3 4.5L6 7.5L9 4.5" stroke="#60758A" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

function SearchSmallIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
      <path
        d="M12.25 12.25L9.71836 9.71836M11.0833 6.41663C11.0833 8.99393 8.99393 11.0833 6.41663 11.0833C3.83932 11.0833 1.75 8.99393 1.75 6.41663C1.75 3.83932 3.83932 1.75 6.41663 1.75C8.99393 1.75 11.0833 3.83932 11.0833 6.41663Z"
        stroke="#60758A"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

function ChevronLeftIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
      <path d="M8.75 10.5L5.25 7L8.75 3.5" stroke="#60758A" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

function ChevronRightIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
      <path d="M5.25 10.5L8.75 7L5.25 3.5" stroke="#60758A" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

function MahButton({ label, variant = "primary" }: { label: string; variant?: "primary" | "secondary" }) {
  const secondary = variant === "secondary";
  return (
    <button
      type="button"
      className={`flex min-h-[44px] items-center justify-center rounded-[12px] px-[20px] py-[11px] ${
        secondary ? "border border-[#e4ebf1] bg-white text-[#2094e3]" : "bg-[#2094e3] text-white"
      }`}
    >
      <span dir="auto" className="whitespace-nowrap text-center font-['Vazirmatn'] text-[14px] font-medium leading-[22px]">
        {label}
      </span>
    </button>
  );
}

function SidebarLink({ label, icon, active = false }: SidebarItem) {
  return (
    <div className={`flex h-[42px] w-full items-center justify-end gap-[12px] rounded-[8px] px-[16px] py-[10px] ${active ? "bg-[#eaf5fd]" : "bg-transparent"}`}>
      <span
        dir="auto"
        className={`min-w-0 flex-1 whitespace-nowrap text-right font-['Vazirmatn'] text-[14px] font-medium leading-[22px] ${
          active ? "text-[#2094e3]" : "text-[#60758a]"
        }`}
      >
        {label}
      </span>
      {active ? <FaqActiveIcon /> : <img src={icon} alt="" className="size-[18px] shrink-0" />}
    </div>
  );
}

function SidebarSection({ title, items }: { title: string; items: SidebarItem[] }) {
  return (
    <div className="flex w-full flex-col items-end gap-[6px]">
      <span dir="auto" className="h-[19px] w-full text-right font-['Vazirmatn'] text-[12px] font-bold leading-[19px] text-[#60758a]">
        {title}
      </span>
      {items.map((item) => (
        <SidebarLink key={item.label} {...item} />
      ))}
    </div>
  );
}

function KpiCard({ item }: { item: Kpi; key?: React.Key }) {
  return (
    <div
      className="flex h-[144px] min-w-0 flex-1 flex-col items-end gap-[6px] rounded-[20px] border border-[#e4ebf1] bg-white p-[18px]"
      style={{ boxShadow: "0 4px 16px rgba(23, 46, 71, 0.08)" }}
    >
      <div className={`h-[6px] w-[36px] shrink-0 rounded-[3px] ${item.barClass}`} />
      <span dir="auto" className="whitespace-nowrap text-right font-['Vazirmatn'] text-[14px] font-medium leading-[22px] text-[#60758a]">
        {item.label}
      </span>
      <span dir="auto" className="whitespace-nowrap text-right font-['Vazirmatn'] text-[28px] font-bold leading-[42px] text-[#17324d]">
        {item.value}
      </span>
      <span dir="auto" className={`whitespace-nowrap text-right font-['Vazirmatn'] text-[12px] font-normal leading-[20px] ${item.captionClass}`}>
        {item.caption}
      </span>
    </div>
  );
}

function StatusTabs() {
  return (
    <div className="flex h-[36px] w-full items-start justify-end gap-[8px] whitespace-nowrap text-[13px]">
      {statusTabs.map((tab) => (
        <div
          key={tab.label}
          className={`flex h-[36px] shrink-0 items-center gap-[6px] rounded-[10px] border px-[14px] py-[8px] ${
            tab.active ? "border-[#2094e3] bg-[#eaf5fd] text-[#2094e3]" : "border-[#e4ebf1] bg-white"
          }`}
        >
          <span dir="auto" className={`font-['Vazirmatn'] font-normal leading-[20px] ${tab.active ? "text-[#2094e3]" : "text-[#60758a]"}`}>
            {tab.count}
          </span>
          <span
            dir="auto"
            className={`font-['Vazirmatn'] leading-[20px] ${tab.active ? "font-bold text-[#2094e3]" : "font-medium text-[#17324d]"}`}
          >
            {tab.label}
          </span>
        </div>
      ))}
    </div>
  );
}

function Dropdown({ label, width }: { label: string; width: number }) {
  return (
    <div
      className="flex h-[36px] shrink-0 items-center gap-[8px] rounded-[8px] border border-[#e4ebf1] bg-white px-[12px] py-[8px]"
      style={{ width }}
    >
      <div className="size-[12px] shrink-0">
        <ChevronDownIcon />
      </div>
      <span dir="auto" className="whitespace-nowrap text-right font-['Vazirmatn'] text-[13px] font-normal leading-[20px] text-[#17324d]">
        {label}
      </span>
    </div>
  );
}

function StatusBadge({ tone, label }: { tone: FaqRow["statusTone"]; label: string }) {
  const styles = {
    success: "bg-[#eaf8f0] text-[#159455]",
    legal: "bg-[#f5f3ff] text-[#8a5cf6]",
    warning: "bg-[#fcf6ec] text-[#c27a10]",
    danger: "bg-[#fee2e2] text-[#ef4444]",
  }[tone];

  return (
    <div className={`shrink-0 rounded-[12px] px-[10px] py-[4px] ${styles}`}>
      <span dir="auto" className="whitespace-nowrap text-right font-['Vazirmatn'] text-[11px] font-bold leading-[17px]">
        {label}
      </span>
    </div>
  );
}

function CategoryBadge({ label }: { label: string }) {
  return (
    <div className="shrink-0 rounded-[8px] bg-[#eaf5fd] px-[8px] py-[4px]">
      <span dir="auto" className="whitespace-nowrap text-right font-['Vazirmatn'] text-[11px] font-bold leading-[17px] text-[#2094e3]">
        {label}
      </span>
    </div>
  );
}

function Checkbox() {
  return <div aria-hidden="true" className="size-[24px] shrink-0 rounded-[6px] border-2 border-[#e4ebf1] bg-white" />;
}

function TableHeader() {
  return (
    <div className="flex h-[48px] w-full items-start gap-[16px] border-b border-[#e4ebf1] bg-[#fcfbf8] p-[12px]">
      <span dir="auto" className="w-[65px] shrink-0 text-center font-['Vazirmatn'] text-[12px] font-bold leading-[19px] text-[#60758a]">عملیات</span>
      <span dir="auto" className="w-[110px] shrink-0 text-right font-['Vazirmatn'] text-[12px] font-bold leading-[19px] text-[#60758a]">وضعیت</span>
      <span dir="auto" className="w-[100px] shrink-0 text-right font-['Vazirmatn'] text-[12px] font-bold leading-[19px] text-[#60758a]">تاریخ بازبینی</span>
      <span dir="auto" className="w-[115px] shrink-0 text-right font-['Vazirmatn'] text-[12px] font-bold leading-[19px] text-[#60758a]">آخرین ویرایش</span>
      <span dir="auto" className="w-[90px] shrink-0 text-right font-['Vazirmatn'] text-[12px] font-bold leading-[19px] text-[#60758a]">نویسنده</span>
      <span dir="auto" className="w-[85px] shrink-0 text-right font-['Vazirmatn'] text-[12px] font-bold leading-[19px] text-[#60758a]">محل استفاده</span>
      <span dir="auto" className="w-[100px] shrink-0 text-right font-['Vazirmatn'] text-[12px] font-bold leading-[19px] text-[#60758a]">دسته‌بندی</span>
      <span dir="auto" className="min-w-0 flex-1 text-right font-['Vazirmatn'] text-[12px] font-bold leading-[19px] text-[#60758a]">سوال</span>
      <Checkbox />
    </div>
  );
}

function TableRow({ row }: { row: FaqRow; key?: React.Key }) {
  return (
    <div className="flex h-[64px] w-full items-center gap-[16px] border-b border-[#e4ebf1] p-[12px]">
      <div className="flex w-[65px] shrink-0 items-start justify-center">
        <button type="button" className="font-['Vazirmatn'] text-[13px] font-bold leading-[20px] text-[#2094e3] underline underline-offset-[2px]">
          <span dir="auto">ویرایش</span>
        </button>
      </div>
      <div className="flex w-[110px] shrink-0 items-start justify-end">
        <StatusBadge tone={row.statusTone} label={row.status} />
      </div>
      <span dir="auto" className="w-[100px] shrink-0 text-right font-['Vazirmatn'] text-[13px] font-normal leading-[20px] text-[#60758a]">
        {row.reviewDate}
      </span>
      <span dir="auto" className="w-[115px] shrink-0 text-right font-['Vazirmatn'] text-[13px] font-normal leading-[20px] text-[#17324d]">
        {row.lastEdit}
      </span>
      <span dir="auto" className="w-[90px] shrink-0 text-right font-['Vazirmatn'] text-[13px] font-normal leading-[20px] text-[#17324d]">
        {row.author}
      </span>
      <span dir="auto" className="w-[85px] shrink-0 text-right font-['Vazirmatn'] text-[13px] font-normal leading-[20px] text-[#17324d]">
        {row.pages}
      </span>
      <div className="flex w-[100px] shrink-0 items-start justify-end">
        <CategoryBadge label={row.category} />
      </div>
      <span dir="auto" className="min-w-0 flex-1 text-right font-['Vazirmatn'] text-[13px] font-bold leading-[20px] text-[#17324d]">
        {row.question}
      </span>
      <Checkbox />
    </div>
  );
}

function Pagination() {
  return (
    <div className="flex h-[47px] w-full items-center justify-between pt-[16px]">
      <div className="flex h-[31px] w-[163px] shrink-0 items-center gap-[8px]">
        <button type="button" aria-label="صفحه قبل" className="flex size-[26px] shrink-0 items-center justify-center rounded-[8px] border border-[#e4ebf1] bg-white p-[6px]">
          <ChevronLeftIcon />
        </button>
        <button type="button" className="flex h-[31px] w-[24px] shrink-0 items-start rounded-[8px] border border-[#2094e3] bg-[#eaf5fd] px-[10px] py-[6px]">
          <span dir="auto" className="font-['Vazirmatn'] text-[12px] font-bold leading-[19px] text-[#2094e3]">۱</span>
        </button>
        <button type="button" className="flex h-[31px] w-[27px] shrink-0 items-start rounded-[8px] border border-[#e4ebf1] bg-white px-[10px] py-[6px]">
          <span dir="auto" className="font-['Vazirmatn'] text-[12px] font-normal leading-[19px] text-[#60758a]">۲</span>
        </button>
        <button type="button" className="flex h-[31px] w-[28px] shrink-0 items-start rounded-[8px] border border-[#e4ebf1] bg-white px-[10px] py-[6px]">
          <span dir="auto" className="font-['Vazirmatn'] text-[12px] font-normal leading-[19px] text-[#60758a]">۳</span>
        </button>
        <button type="button" aria-label="صفحه بعد" className="flex size-[26px] shrink-0 items-center justify-center rounded-[8px] border border-[#e4ebf1] bg-white p-[6px]">
          <ChevronRightIcon />
        </button>
      </div>
      <span dir="auto" className="whitespace-nowrap text-right font-['Vazirmatn'] text-[13px] font-normal leading-[20px] text-[#60758a]">
        نمایش ۱ تا ۲۰ از ۸۶ سوال
      </span>
    </div>
  );
}

function Label({children}:{children: React.ReactNode}) {
  return <label className="mb-2 block text-[13px] font-bold text-[#17324d]">{children}</label>;
}

function FieldBox({children, className = ""}:{children: React.ReactNode; className?: string}) {
  return <div className={`rounded-xl border border-[#dbe4ec] bg-white px-4 py-3 text-[13px] text-[#17324d] ${className}`}>{children}</div>;
}

function FaqEditorDrawer() {
  return (
    <>
      <div className="absolute inset-0 z-40 bg-[#17324d]/35" aria-hidden="true" />
      <aside dir="rtl" className="absolute left-0 top-0 z-50 flex h-[1584px] w-[570px] flex-col bg-white text-right shadow-[12px_0_36px_rgba(23,50,77,0.18)]">
        <header className="flex h-[74px] shrink-0 items-center justify-between border-b border-[#e4ebf1] px-6">
          <div><h2 className="text-[20px] font-extrabold text-[#17324d]">افزودن سوال جدید</h2><p className="mt-1 text-[12px] text-[#60758a]">اطلاعات سوال و پاسخ را تکمیل کنید.</p></div>
          <button className="grid h-9 w-9 place-items-center rounded-lg border border-[#e4ebf1] text-[22px] text-[#60758a]">×</button>
        </header>
        <div className="min-h-0 flex-1 overflow-hidden px-6 py-5">
          <div>
            <div className="flex items-center justify-between"><Label>سؤال</Label><span className="text-[11px] text-[#60758a]">۵۸ / ۱۵۰ کاراکتر</span></div>
            <FieldBox>آیا برای مشارکت فردی به ساخت حساب کاربری نیاز دارم؟</FieldBox>
          </div>
          <div className="mt-4"><Label>پاسخ</Label><div className="rounded-xl border border-[#dbe4ec] bg-white"><div className="flex h-10 items-center gap-4 border-b bg-[#f8fafb] px-3 text-[#60758a]"><b>ب</b><i>ک</i><span>• فهرست</span><span>↗ پیوند</span></div><p className="min-h-[108px] px-4 py-3 text-[13px] leading-7 text-[#17324d]">خیر، شما می‌توانید بدون ساخت حساب کاربری و صرفاً با پرداخت مستقیم، در طرح‌ها مشارکت کنید. با این حال داشتن حساب کاربری امکان دریافت سوابق و کدهای رهگیری را همواره در اختیارتان قرار می‌دهد.</p></div></div>
          <div className="mt-4 grid grid-cols-2 gap-3"><div><Label>دسته‌بندی</Label><FieldBox>حساب کاربری <span className="float-left">⌄</span></FieldBox></div><div><Label>ترتیب نمایش</Label><FieldBox>۱</FieldBox></div></div>
          <div className="mt-4"><Label>برچسب‌ها</Label><FieldBox className="flex flex-wrap gap-2 py-2">{["مشارکت بدون حساب","ورود","شماره همراه","OTP"].map(x=><span key={x} className="rounded-full bg-[#eaf5fd] px-3 py-1 text-[11px] text-[#2094e3]">{x} ×</span>)}</FieldBox></div>
          <div className="mt-4"><Label>محل نمایش</Label><div className="space-y-2 rounded-xl border border-[#dbe4ec] p-3 text-[12px]">{[["صفحه اصلی سامانه","mah-landing-page"],["صفحه اختصاصی سوالات متداول","mah-faq"],["صفحه راهنمای کاربری","mah-how-it-works"]].map(([x,id])=><label className="flex items-center gap-2" key={id}><input type="checkbox" defaultChecked className="accent-[#2094e3]"/><span>{x}</span><code dir="ltr" className="mr-auto rounded bg-[#f4f6f8] px-2 py-0.5 text-[10px] text-[#60758a]">{id}</code></label>)}</div></div>
          <div className="mt-4 rounded-xl border border-[#f59e0b] bg-[#fff7df] p-3 text-[12px]"><b className="text-[#9a5b04]">ممکن است سوال مشابهی وجود داشته باشد</b><p className="mt-1 text-[#60758a]">پیش از ثبت، سوال مشابه را بررسی کنید. <a className="font-bold text-[#2094e3] underline">مشاهده سوال مشابه</a></p></div>
          <details open className="mt-4 rounded-xl border border-[#dbe4ec] p-4"><summary className="cursor-pointer text-[13px] font-bold">منبع و ارجاع</summary><div className="mt-3 grid grid-cols-2 gap-3"><div><Label>عنوان منبع</Label><FieldBox>آیین‌نامه اجرایی ماده ۱۷۲</FieldBox></div><div><Label>پیوند منبع</Label><FieldBox><span dir="ltr" className="block truncate">https://mah.ir/docs/art-172</span></FieldBox></div></div></details>
          <label className="mt-4 flex items-start gap-2 text-[12px]"><input type="checkbox" defaultChecked className="mt-1 accent-[#2094e3]"/><span>این پاسخ شامل موضوعات حقوقی، مالیاتی، پرداخت یا ماده ۱۷۲ است و به بازبینی حقوقی نیاز دارد.</span></label>
          <div className="mt-4 grid grid-cols-2 gap-3"><div><Label>بازبین پیشنهادی</Label><FieldBox>داود هاشمی (کارشناس حقوقی)</FieldBox></div><div><Label>تاریخ بازبینی</Label><FieldBox>۲۱ آبان ۱۴۰۵</FieldBox></div></div>
          <div className="mt-4"><Label>یادداشت داخلی</Label><FieldBox className="min-h-[68px]">تغییرات جزئی در ادبیات ارجاع به پنل کاربری انجام گرفت.</FieldBox></div>
        </div>
        <footer className="shrink-0 border-t border-[#e4ebf1] bg-white px-6 py-4"><div className="mb-3 text-[11px] font-bold text-[#159455]">ذخیره شد</div><div className="flex gap-2"><button className="rounded-xl bg-[#2094e3] px-4 py-3 text-[13px] font-bold text-white">ارسال برای بازبینی</button><button className="rounded-xl border border-[#2094e3] px-4 py-3 text-[13px] font-bold text-[#2094e3]">پیش‌نمایش</button><button className="mr-auto rounded-xl border border-[#dbe4ec] px-4 py-3 text-[13px] font-bold text-[#60758a]">ذخیره پیش‌نویس</button></div></footer>
      </aside>
    </>
  );
}

export default function Main() {
  return (
    <div dir="rtl" className="main-container relative mx-auto flex h-[1584px] w-[1440px] flex-row-reverse flex-nowrap items-start bg-[#f4f6f8]">
      <main className="flex min-w-0 flex-1 self-stretch flex-col items-start gap-[24px] px-[40px] pb-[40px] pt-[24px]">
        <header className="flex h-[56px] w-full shrink-0 items-center justify-between border-b border-[#e4ebf1] pb-[16px]">
          <div className="flex h-[39px] w-[399px] shrink-0 items-center gap-[16px]">
            <div className="flex h-[39px] w-[101px] shrink-0 items-center gap-[10px]">
              <img src="/assets/mah/avatar.png" alt="" className="size-[36px] shrink-0 rounded-[18px] object-cover" />
              <div className="flex w-[55px] shrink-0 flex-col items-start gap-[2px]">
                <span dir="auto" className="whitespace-nowrap font-['Vazirmatn'] text-[13px] font-bold leading-[20px] text-[#17324d]">نگار رضایی</span>
                <span dir="auto" className="whitespace-nowrap font-['Vazirmatn'] text-[11px] font-normal leading-[17px] text-[#60758a]">مدیر محتوا</span>
              </div>
            </div>
            <div className="h-[24px] w-px shrink-0 bg-[#e4ebf1]" />
            <button type="button" aria-label="راهنما" className="flex size-[34px] shrink-0 items-center justify-center rounded-[8px] border border-[#e4ebf1] bg-white p-[8px]">
              <img src="/assets/mah/help-circle.svg" alt="" className="size-[18px]" />
            </button>
            <div className="relative flex size-[34px] shrink-0 items-center justify-center rounded-[8px] border border-[#e4ebf1] bg-white p-[8px]">
              <img src="/assets/mah/bell.svg" alt="" className="size-[18px]" />
              <div className="absolute right-[-4px] top-[-4px] flex h-[20px] min-w-[19px] items-center justify-center rounded-[10px] bg-[#ef4444] px-[6px] py-[2px]">
                <span dir="auto" className="font-['Vazirmatn'] text-[10px] font-bold leading-[16px] text-white">۵</span>
              </div>
            </div>
            <div className="flex h-[36px] w-[165px] shrink-0 items-center gap-[8px] rounded-[8px] border border-[#e4ebf1] bg-white px-[12px] py-[8px]">
              <span dir="auto" className="whitespace-nowrap text-right font-['Vazirmatn'] text-[13px] font-medium leading-[20px] text-[#17324d]">یکشنبه، ۲۶ مرداد ۱۴۰۵</span>
              <img src="/assets/mah/calendar.svg" alt="" className="size-[16px] shrink-0" />
            </div>
          </div>
          <div className="flex h-[40px] w-[380px] shrink-0 items-center justify-end gap-[8px] rounded-[12px] border border-[#e4ebf1] bg-white px-[16px] py-[10px]">
            <span dir="auto" className="min-w-0 flex-1 text-right font-['Vazirmatn'] text-[13px] font-normal leading-[20px] text-[#60758a]">جست‌وجو در محتوای CMS...</span>
            <img src="/assets/mah/search.svg" alt="" className="size-[16px] shrink-0" />
          </div>
        </header>

        <section className="flex h-[64px] w-full shrink-0 items-center justify-between">
          <div className="flex h-[44px] w-[315px] shrink-0 items-center gap-[12px]">
            <MahButton label="مدیریت دسته‌بندی‌ها" variant="secondary" />
            <MahButton label="افزودن سوال جدید" />
          </div>
          <div className="flex h-[64px] w-[445px] shrink-0 flex-col items-end gap-[6px] text-right">
            <h1 dir="auto" className="m-0 whitespace-nowrap font-['Vazirmatn'] text-[24px] font-extrabold leading-[38px] text-[#17324d]">مدیریت سوالات متداول</h1>
            <p dir="auto" className="m-0 whitespace-nowrap font-['Vazirmatn'] text-[13px] font-normal leading-[20px] text-[#60758a]">ایجاد، دسته‌بندی و انتشار پاسخ‌های عمومی قابل استفاده در صفحات مختلف سامانه ماه</p>
          </div>
        </section>

        <section className="flex h-[144px] w-full shrink-0 items-start gap-[16px]">
          {kpis.map((item) => <KpiCard key={item.label} item={item} />)}
        </section>

        <StatusTabs />

        <section className="flex h-[122px] w-full shrink-0 flex-col items-start rounded-[16px] border border-[#e4ebf1] bg-white p-[16px]">
          <div className="flex h-[90px] w-full flex-wrap content-start items-start justify-end gap-[10px]">
            <div className="flex h-[44px] w-[202px] shrink-0 items-center gap-[16px]">
              <button type="button" className="whitespace-nowrap text-right font-['Vazirmatn'] text-[13px] font-normal leading-[20px] text-[#2094e3] underline underline-offset-[2px]">
                <span dir="auto">پاک‌کردن فیلترها</span>
              </button>
              <div className="w-[102px] shrink-0"><MahButton label="اعمال فیلتر" /></div>
            </div>
            <Dropdown width={171} label="تازگی محتوا: همه زمان‌ها" />
            <Dropdown width={174} label="نویسنده: همه نویسندگان" />
            <Dropdown width={224} label="صفحه محل استفاده: همه صفحات" />
            <Dropdown width={116} label="وضعیت: همه" />
            <Dropdown width={171} label="دسته‌بندی: همه دسته‌ها" />
            <div className="flex h-[36px] w-[280px] shrink-0 items-center justify-end gap-[8px] rounded-[8px] border border-[#e4ebf1] bg-white px-[12px] py-[8px]">
              <span dir="auto" className="min-w-0 flex-1 whitespace-nowrap text-right font-['Vazirmatn'] text-[13px] font-normal leading-[20px] text-[#60758a]">جست‌وجوی سوال، پاسخ یا کلیدواژه...</span>
              <div className="size-[14px] shrink-0"><SearchSmallIcon /></div>
            </div>
          </div>
        </section>

        <section className="flex h-[680px] w-full shrink-0 flex-col items-start gap-[16px] rounded-[20px] border border-[#e4ebf1] bg-white p-[24px]">
          <h2 dir="auto" className="m-0 h-[25px] whitespace-nowrap text-right font-['Vazirmatn'] text-[16px] font-bold leading-[25px] text-[#17324d]">کتابخانه سوالات متداول</h2>
          <TableHeader />
          {faqRows.map((row) => <TableRow key={row.question} row={row} />)}
          <Pagination />
        </section>
      </main>

      <aside className="flex h-[1584px] w-[280px] shrink-0 flex-col items-start gap-[24px] border-l border-[#e4ebf1] bg-[#fcfbf8] px-[16px] py-[24px]">
        <div className="flex h-[117px] w-full shrink-0 flex-col items-end gap-[16px]">
          <img src="/assets/mah/logo.png" alt="ماه" className="h-[46px] w-[137px] object-contain" />
          <div className="flex h-[55px] w-full items-center justify-end gap-[12px] rounded-[12px] bg-[#f4f6f8] px-[12px] py-[8px]">
            <div className="shrink-0 rounded-[8px] bg-[#eaf5fd] px-[8px] py-[4px]">
              <span className="font-['Vazirmatn'] text-[11px] font-bold leading-[17px] text-[#2094e3]">CMS</span>
            </div>
            <div className="flex h-[39px] w-[60px] shrink-0 flex-col items-end gap-[2px]">
              <span dir="auto" className="whitespace-nowrap font-['Vazirmatn'] text-[13px] font-bold leading-[20px] text-[#17324d]">نگار حسینی</span>
              <span dir="auto" className="whitespace-nowrap font-['Vazirmatn'] text-[11px] font-normal leading-[17px] text-[#60758a]">مدیر محتوا</span>
            </div>
          </div>
        </div>
        <div className="h-px w-full shrink-0 bg-[#e4ebf1]" />
        <nav className="flex h-[625px] w-full shrink-0 flex-col items-start gap-[20px]">
          <SidebarSection title="محتوا" items={contentItems} />
          <SidebarSection title="انتشار" items={publishItems} />
          <SidebarSection title="مدیریت" items={manageItems} />
        </nav>
        <div className="min-h-0 w-full flex-1" />
        <div className="flex h-[59px] w-full shrink-0 flex-col items-start gap-[12px] bg-white">
          <div className="h-px w-full shrink-0 bg-[#e4ebf1]" />
          <button type="button" className="flex h-[46px] w-full items-center justify-center gap-[10px] rounded-[12px] bg-[#2094e3] p-[12px]">
            <span dir="auto" className="whitespace-nowrap font-['Vazirmatn'] text-[14px] font-bold leading-[22px] text-white">خروج از سیستم</span>
            <img src="/assets/mah/logout.svg" alt="" className="size-[16px] shrink-0" />
          </button>
        </div>
      </aside>
      <FaqEditorDrawer />
    </div>
  );
}
