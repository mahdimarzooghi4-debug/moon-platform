import React from "react";
import "./index.css";

type SidebarItem = { label: string; icon: string; active?: boolean };

const contentItems: SidebarItem[] = [
  { label: "داشبورد", icon: "/assets/mah/grid.svg" },
  { label: "همه محتواها", icon: "/assets/mah/file-text.svg" },
  { label: "اخبار", icon: "/assets/mah/book-open.svg" },
  { label: "صفحات سایت", icon: "/assets/mah/layout.svg" },
  { label: "صفحه اصلی", icon: "/assets/mah/home.svg" },
  { label: "سوالات متداول", icon: "/assets/mah/help-circle-sidebar.svg" },
];

const publishItems: SidebarItem[] = [
  { label: "رسانه‌ها", icon: "/assets/mah/image.svg" },
  { label: "منو و Footer", icon: "/assets/mah/menu.svg" },
  { label: "بازبینی و پیش‌نمایش", icon: "/assets/mah/eye.svg" },
];

const manageItems: SidebarItem[] = [
  { label: "کاربران و نقش‌ها", icon: "/assets/mah/users-roles.svg" },
  { label: "گزارش فعالیت‌ها", icon: "/assets/mah/activity-active.svg", active: true },
];

function SidebarLink({ label, icon, active = false }: SidebarItem) {
  return (
    <div
      className={`flex h-[42px] w-full items-center justify-end gap-[12px] rounded-[8px] px-[16px] py-[10px] ${
        active ? "bg-[#eaf5fd]" : "bg-transparent"
      }`}
    >
      <span
        dir="rtl"
        className={`min-w-0 flex-1 whitespace-nowrap text-right text-[14px] leading-[22px] ${
          active ? "font-bold text-[#2094e3]" : "font-medium text-[#60758a]"
        }`}
      >
        {label}
      </span>
      <img src={icon} alt="" className="size-[18px] shrink-0" />
    </div>
  );
}

function SidebarSection({ title, items }: { title: string; items: SidebarItem[] }) {
  return (
    <section className="flex w-full flex-col items-start gap-[6px]">
      <span dir="rtl" className="w-full text-right text-[12px] font-bold leading-[19px] text-[#60758a]">
        {title}
      </span>
      {items.map((item) => (
        <SidebarLink key={item.label} {...item} />
      ))}
    </section>
  );
}

export default function Main() {
  return (
    <div dir="ltr" className="main-container mx-auto flex h-[1584px] w-[1440px] flex-nowrap items-start bg-[#f4f6f8]">
      <main className="flex h-[1584px] min-w-0 flex-1 flex-col items-end gap-[24px] px-[40px] pb-[40px] pt-[24px]">
        <header className="flex h-[56px] w-full shrink-0 items-center justify-between border-b border-[#e4ebf1] pb-[16px]">
          <div className="flex h-[39px] w-[399px] shrink-0 items-center gap-[16px]">
            <div className="flex h-[39px] w-[101px] shrink-0 items-center gap-[10px]">
              <img src="/assets/mah/avatar.png" alt="" className="size-[36px] shrink-0 rounded-full object-cover" />
              <div className="flex w-[55px] shrink-0 flex-col items-start gap-[2px]">
                <span dir="rtl" className="w-[55px] whitespace-nowrap text-right text-[13px] font-bold leading-[20px] text-[#17324d]">
                  نگار رضایی
                </span>
                <span dir="rtl" className="w-[48px] whitespace-nowrap text-right text-[11px] font-normal leading-[17px] text-[#60758a]">
                  مدیر محتوا
                </span>
              </div>
            </div>
            <div className="h-[24px] w-px shrink-0 bg-[#e4ebf1]" />
            <button type="button" aria-label="راهنما" className="flex size-[34px] shrink-0 items-center justify-center rounded-[8px] border border-[#e4ebf1] bg-white">
              <img src="/assets/mah/help-circle.svg" alt="" className="size-[18px]" />
            </button>
            <div className="relative flex size-[34px] shrink-0 items-center justify-center rounded-[8px] border border-[#e4ebf1] bg-white">
              <img src="/assets/mah/bell.svg" alt="" className="size-[18px]" />
              <div className="absolute right-[-4px] top-[-4px] flex h-[20px] min-w-[19px] items-center justify-center rounded-[10px] bg-[#ef4444] px-[6px] py-[2px]">
                <span className="text-[10px] font-bold leading-[16px] text-white">۵</span>
              </div>
            </div>
            <div className="flex h-[36px] w-[165px] shrink-0 items-center gap-[8px] rounded-[8px] border border-[#e4ebf1] bg-white px-[12px] py-[8px]">
              <span dir="rtl" className="w-[117px] whitespace-nowrap text-right text-[13px] font-medium leading-[20px] text-[#17324d]">
                یکشنبه، ۲۶ مرداد ۱۴۰۵
              </span>
              <img src="/assets/mah/calendar.svg" alt="" className="size-[16px] shrink-0" />
            </div>
          </div>

          <div className="flex h-[40px] w-[380px] shrink-0 items-center justify-end gap-[8px] rounded-[12px] border border-[#e4ebf1] bg-white px-[16px] py-[10px]">
            <span dir="rtl" className="min-w-0 flex-1 whitespace-nowrap text-right text-[13px] font-normal leading-[20px] text-[#60758a]">
              جست‌وجو در محتوای CMS...
            </span>
            <img src="/assets/mah/search.svg" alt="" className="size-[16px] shrink-0" />
          </div>
        </header>

        <section className="flex h-[64px] w-full shrink-0 items-center justify-between">
          <div className="h-[44px] w-px shrink-0" />
          <div className="flex shrink-0 flex-col items-end gap-[6px] text-right">
            <h1 dir="rtl" className="whitespace-nowrap text-[24px] font-extrabold leading-[38px] text-[#17324d]">
              گزارش فعالیت‌ها
            </h1>
            <p dir="rtl" className="whitespace-nowrap text-[13px] font-normal leading-[20px] text-[#60758a]">
              محدودیت دسترسی امنیتی
            </p>
          </div>
        </section>

        <section
          className="flex w-full shrink-0 flex-col items-start rounded-[20px] border border-[#e4ebf1] bg-white p-[24px]"
          style={{ boxShadow: "0 4px 16px rgba(23, 46, 71, 0.08)" }}
        >
          <div className="flex w-full shrink-0 flex-col items-center justify-center gap-[24px] py-[120px]">
            <div className="flex size-[100px] shrink-0 items-center justify-center rounded-full bg-[#fef3c7]">
              <img src="/assets/mah/audit-lock.svg" alt="" className="size-[40px]" />
            </div>
            <div className="flex w-[480px] shrink-0 flex-col items-center gap-[8px] text-center">
              <h2 dir="rtl" className="whitespace-nowrap text-[20px] font-bold leading-[31px] text-[#17324d]">
                به گزارش فعالیت‌ها دسترسی ندارید
              </h2>
              <p dir="rtl" className="max-w-[480px] text-center text-[14px] font-normal leading-[22px] text-[#60758a]">
                این بخش فقط برای مدیران مجاز و بازرسان ارشد CMS قابل دسترسی است. حساب کاربری شما فاقد مجوز امنیتی لازم برای مشاهده لاگ سیستم می‌باشد.
              </p>
            </div>
            <button
              type="button"
              className="flex min-h-[46px] shrink-0 items-center justify-center rounded-[12px] bg-[#2094e3] px-[24px] py-[12px] text-[14px] font-semibold leading-[22px] text-white"
            >
              <span dir="rtl" className="whitespace-nowrap">بازگشت به داشبورد CMS</span>
            </button>
          </div>
        </section>
      </main>

      <aside className="flex h-[1584px] w-[280px] shrink-0 flex-col items-start gap-[24px] border-l border-[#e4ebf1] bg-[#fcfbf8] px-[16px] py-[24px]">
        <div className="flex w-full shrink-0 flex-col items-end gap-[16px]">
          <img src="/assets/mah/logo.png" alt="ماه" className="h-[46px] w-[137px] shrink-0 object-cover" />
          <div className="flex h-[55px] w-full items-center justify-end gap-[12px] rounded-[12px] bg-[#f4f6f8] px-[12px] py-[8px]">
            <div className="flex h-[25px] shrink-0 items-center rounded-[8px] bg-[#eaf5fd] px-[8px] py-[4px]">
              <span className="text-[11px] font-bold leading-[17px] text-[#2094e3]">CMS</span>
            </div>
            <div className="flex shrink-0 flex-col items-end gap-[2px]">
              <span dir="rtl" className="whitespace-nowrap text-right text-[13px] font-bold leading-[20px] text-[#17324d]">نگار حسینی</span>
              <span dir="rtl" className="whitespace-nowrap text-right text-[11px] font-normal leading-[17px] text-[#60758a]">مدیر محتوا</span>
            </div>
          </div>
        </div>
        <div className="h-px w-full shrink-0 bg-[#e4ebf1]" />
        <nav className="flex w-full shrink-0 flex-col items-start gap-[20px]">
          <SidebarSection title="محتوا" items={contentItems} />
          <SidebarSection title="انتشار" items={publishItems} />
          <SidebarSection title="مدیریت" items={manageItems} />
        </nav>
        <div className="min-h-0 w-full flex-1" />
        <div className="flex h-[59px] w-full shrink-0 flex-col items-start gap-[12px] bg-white">
          <div className="h-px w-full shrink-0 bg-[#e4ebf1]" />
          <button type="button" className="flex h-[46px] w-full items-center justify-center gap-[10px] rounded-[12px] bg-[#2094e3] p-[12px]">
            <span dir="rtl" className="whitespace-nowrap text-[14px] font-bold leading-[22px] text-white">خروج از سیستم</span>
            <img src="/assets/mah/logout.svg" alt="" className="size-[16px]" />
          </button>
        </div>
      </aside>
    </div>
  );
}
