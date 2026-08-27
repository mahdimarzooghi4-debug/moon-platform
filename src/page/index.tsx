import React from "react";
import "./index.css";

type SidebarItem = { label: string; icon: string; active?: boolean };

const contentItems: SidebarItem[] = [
  { label: "داشبورد", icon: "/assets/mah/media-grid.svg" },
  { label: "همه محتواها", icon: "/assets/mah/media-file-text.svg" },
  { label: "اخبار", icon: "/assets/mah/media-news.svg" },
  { label: "صفحات سایت", icon: "/assets/mah/media-layout.svg" },
  { label: "صفحه اصلی", icon: "/assets/mah/media-home.svg" },
  { label: "سوالات متداول", icon: "/assets/mah/media-help-circle.svg" },
];

const publishItems: SidebarItem[] = [
  { label: "رسانه‌ها", icon: "/assets/mah/media-image-active.svg", active: true },
  { label: "منو و Footer", icon: "/assets/mah/media-menu.svg" },
  { label: "بازبینی و پیش‌نمایش", icon: "/assets/mah/media-eye.svg" },
];

const manageItems: SidebarItem[] = [
  { label: "کاربران و نقش‌ها", icon: "/assets/mah/media-users.svg" },
  { label: "گزارش فعالیت‌ها", icon: "/assets/mah/media-activity.svg" },
];

function MahButton({ label, variant = "primary" }: { label: string; variant?: "primary" | "secondary" }) {
  const secondary = variant === "secondary";
  return (
    <button
      type="button"
      className={`flex min-h-[44px] shrink-0 items-center justify-center rounded-[12px] px-[20px] py-[11px] text-[14px] font-medium leading-[22px] ${
        secondary ? "border border-[#e4ebf1] bg-white text-[#2094e3]" : "bg-[#2094e3] text-white"
      }`}
    >
      <span dir="rtl" className="whitespace-nowrap text-center">{label}</span>
    </button>
  );
}

function SidebarLink({ label, icon, active = false }: SidebarItem) {
  return (
    <div className={`flex h-[42px] w-full items-center justify-end gap-[12px] rounded-[8px] px-[16px] py-[10px] ${active ? "bg-[#eaf5fd]" : "bg-transparent"}`}>
      <span dir="rtl" className={`min-w-0 flex-1 whitespace-nowrap text-right text-[14px] font-medium leading-[22px] ${active ? "text-[#2094e3]" : "text-[#60758a]"}`}>
        {label}
      </span>
      <img src={icon} alt="" className="size-[18px] shrink-0" />
    </div>
  );
}

function SidebarSection({ title, items }: { title: string; items: SidebarItem[] }) {
  return (
    <div className="flex w-full flex-col items-start gap-[6px]">
      <span dir="rtl" className="h-[19px] w-full text-right text-[12px] font-bold leading-[19px] text-[#60758a]">{title}</span>
      {items.map((item) => <SidebarLink key={item.label} {...item} />)}
    </div>
  );
}

export default function Main() {
  return (
    <div dir="ltr" className="main-container mx-auto flex h-[1100px] w-[1440px] flex-nowrap items-start bg-[#f4f6f8]">
      <main className="flex h-[1100px] min-w-0 flex-1 flex-col items-start gap-[24px] px-[40px] pb-[40px] pt-[24px]">
        <header className="flex h-[56px] w-full shrink-0 items-center justify-between border-b border-[#e4ebf1] pb-[16px]">
          <div className="flex h-[39px] w-[404px] shrink-0 items-center gap-[16px]">
            <div className="flex h-[39px] w-[106px] shrink-0 items-center gap-[10px]">
              <img src="/assets/mah/avatar.png" alt="" className="size-[36px] shrink-0 rounded-full object-cover" />
              <div className="flex w-[60px] shrink-0 flex-col items-start gap-[2px]">
                <span dir="rtl" className="h-[20px] w-[60px] whitespace-nowrap text-right text-[13px] font-bold leading-[20px] text-[#17324d]">نگار حسینی</span>
                <span dir="rtl" className="h-[17px] w-[48px] whitespace-nowrap text-right text-[11px] font-normal leading-[17px] text-[#60758a]">مدیر محتوا</span>
              </div>
            </div>
            <div className="h-[24px] w-px shrink-0 bg-[#e4ebf1]" />
            <div className="flex size-[34px] shrink-0 items-center justify-center rounded-[8px] border border-[#e4ebf1] bg-white">
              <img src="/assets/mah/media-help-circle.svg" alt="" className="size-[18px]" />
            </div>
            <div className="relative flex size-[34px] shrink-0 items-center justify-center rounded-[8px] border border-[#e4ebf1] bg-white">
              <img src="/assets/mah/media-bell.svg" alt="" className="size-[18px]" />
              <div className="absolute right-[-4px] top-[-4px] flex h-[20px] w-[19px] items-center justify-center rounded-[10px] bg-[#ef4444] px-[6px] py-[2px]">
                <span className="text-[10px] font-bold leading-[16px] text-white">۵</span>
              </div>
            </div>
            <div className="flex h-[36px] w-[165px] shrink-0 items-center gap-[8px] rounded-[8px] border border-[#e4ebf1] bg-white px-[12px] py-[8px]">
              <span dir="rtl" className="h-[20px] w-[117px] whitespace-nowrap text-right text-[13px] font-medium leading-[20px] text-[#17324d]">یکشنبه، ۲۶ مرداد ۱۴۰۵</span>
              <img src="/assets/mah/media-calendar.svg" alt="" className="size-[16px] shrink-0" />
            </div>
          </div>

          <div className="flex h-[40px] w-[380px] shrink-0 items-center justify-end gap-[8px] rounded-[12px] border border-[#e4ebf1] bg-white px-[16px] py-[10px]">
            <span dir="rtl" className="min-w-0 flex-1 whitespace-nowrap text-right text-[13px] font-normal leading-[20px] text-[#60758a]">جست‌وجوی عنوان، نویسنده یا نوع محتوا...</span>
            <img src="/assets/mah/media-search.svg" alt="" className="size-[16px] shrink-0" />
          </div>
        </header>

        <section className="flex h-[64px] w-full shrink-0 items-center justify-between">
          <div className="flex h-[44px] w-[232px] shrink-0 items-center gap-[12px]">
            <MahButton label="ایجاد پوشه" variant="secondary" />
            <MahButton label="بارگذاری رسانه" />
          </div>
          <div className="flex h-[64px] w-[399px] shrink-0 flex-col items-end gap-[6px] text-right">
            <h1 dir="rtl" className="h-[38px] whitespace-nowrap text-[24px] font-extrabold leading-[38px] text-[#17324d]">کتابخانه رسانه</h1>
            <p dir="rtl" className="h-[20px] w-full whitespace-nowrap text-[13px] font-normal leading-[20px] text-[#60758a]">مدیریت فایل‌های عمومی، حقوق انتشار، دسترس‌پذیری و محل استفاده رسانه‌ها</p>
          </div>
        </section>

        <section className="flex min-h-[500px] w-full min-w-0 flex-1 flex-col items-center justify-center gap-[20px] rounded-[20px] border border-[#e4ebf1] bg-white p-[48px]" style={{ boxShadow: "0 4px 16px rgba(23, 46, 71, 0.08)" }}>
          <div className="flex size-[80px] shrink-0 items-center justify-center rounded-full bg-[#fee2e2]">
            <img src="/assets/mah/media-alert-triangle.svg" alt="" className="size-[40px]" />
          </div>
          <h2 dir="rtl" className="whitespace-nowrap text-right text-[20px] font-bold leading-[31px] text-[#ef4444]">بارگذاری کتابخانه رسانه با مشکل مواجه شد</h2>
          <p dir="rtl" className="whitespace-nowrap text-center text-[14px] font-normal leading-[22px] text-[#60758a]">فایل‌های ذخیره‌شده تغییری نکرده‌اند. لطفاً دوباره تلاش کنید.</p>
          <div className="flex shrink-0 items-center gap-[12px]">
            <MahButton label="بازگشت به داشبورد CMS" variant="secondary" />
            <MahButton label="تلاش مجدد" />
          </div>
        </section>
      </main>

      <aside className="flex h-[1100px] w-[280px] shrink-0 flex-col items-end gap-[24px] border-l border-[#e4ebf1] bg-[#fcfbf8] px-[16px] py-[24px]">
        <div className="flex w-full shrink-0 flex-col items-end gap-[16px]">
          <img src="/assets/mah/logo.png" alt="ماه" className="h-[46px] w-[137px] shrink-0 object-cover" />
          <div className="flex h-[55px] w-full items-center justify-end gap-[12px] rounded-[12px] bg-[#f4f6f8] px-[12px] py-[8px]">
            <div className="flex h-[25px] w-[40px] shrink-0 items-start rounded-[8px] bg-[#eaf5fd] px-[8px] py-[4px]">
              <span className="text-[11px] font-bold leading-[17px] text-[#2094e3]">CMS</span>
            </div>
            <div className="flex h-[39px] w-[60px] shrink-0 flex-col items-end gap-[2px]">
              <span dir="rtl" className="h-[20px] w-[60px] whitespace-nowrap text-right text-[13px] font-bold leading-[20px] text-[#17324d]">نگار حسینی</span>
              <span dir="rtl" className="h-[17px] w-[48px] whitespace-nowrap text-right text-[11px] font-normal leading-[17px] text-[#60758a]">مدیر محتوا</span>
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
            <span dir="rtl" className="whitespace-nowrap text-[14px] font-bold leading-[22px] text-white">خروج از سیستم</span>
            <img src="/assets/mah/media-logout.svg" alt="" className="size-[16px]" />
          </button>
        </div>
      </aside>
    </div>
  );
}
