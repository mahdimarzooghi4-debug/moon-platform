import React from "react";
import "./index.css";

type SidebarItem = {
  label: string;
  icon: string;
  active?: boolean;
};

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
  { label: "مدیریت SEO", icon: "/assets/mah/search-sidebar.svg" },
  { label: "بازبینی و پیش‌نمایش", icon: "/assets/mah/eye.svg" },
];

const manageItems: SidebarItem[] = [
  { label: "کاربران و نقش‌ها", icon: "/assets/mah/users-roles.svg", active: true },
  { label: "گزارش فعالیت‌ها", icon: "/assets/mah/activity.svg" },
];

function SidebarLink({ label, icon, active = false }: SidebarItem) {
  return (
    <div
      className={`flex w-full items-center justify-end gap-[12px] rounded-[8px] px-[16px] py-[10px] ${
        active ? "bg-[#eaf5fd]" : "bg-transparent"
      }`}
    >
      <span
        dir="auto"
        className={`min-w-0 flex-1 text-right font-['Vazirmatn'] ${
          active
            ? "text-[13px] font-bold leading-[20px] text-[#2094e3]"
            : "text-[14px] font-medium leading-[22px] text-[#60758a]"
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
    <div className="flex w-full flex-col items-end gap-[6px]">
      <span
        dir="auto"
        className="w-full text-right font-['Vazirmatn'] text-[12px] font-bold leading-[19px] text-[#60758a]"
      >
        {title}
      </span>
      {items.map((item) => (
        <SidebarLink key={item.label} {...item} />
      ))}
    </div>
  );
}

function KpiSkeleton() {
  return (
    <div className="flex min-w-0 flex-1 flex-col items-end gap-[12px] rounded-[20px] border border-[#e4ebf1] bg-white p-[18px]">
      <div className="h-[6px] w-[36px] rounded-[3px] bg-[#e4ebf1]" />
      <div className="h-[14px] w-[120px] rounded-[4px] bg-[#e4ebf1]" />
      <div className="h-[28px] w-[60px] rounded-[4px] bg-[#e4ebf1]" />
      <div className="h-[12px] w-[140px] rounded-[3px] bg-[#e4ebf1]" />
    </div>
  );
}

const headerWidths = [60, 110, 110, 110, 90, 140, 160];
const rowWidths = [60, 110, 110, 110, 90, 140, 160];

function TableHeaderSkeleton() {
  return (
    <div className="flex w-full items-start justify-end gap-[16px] border-b border-[#e4ebf1] bg-[#fcfbf8] px-[12px] py-[8px]">
      {headerWidths.map((width, index) => (
        <div
          key={`${width}-${index}`}
          className="h-[16px] shrink-0 rounded-[4px] bg-[#e4ebf1]"
          style={{ width }}
        />
      ))}
      <div className="h-[16px] min-w-0 flex-1 rounded-[4px] bg-[#e4ebf1]" />
    </div>
  );
}

function TableRowSkeleton() {
  return (
    <div className="flex w-full items-center justify-end gap-[16px] border-b border-[#e4ebf1] p-[12px]">
      {rowWidths.map((width, index) => (
        <div
          key={`${width}-${index}`}
          className={`${index === 3 ? "h-[24px] rounded-[12px]" : "h-[14px] rounded-[4px]"} shrink-0 bg-[#e4ebf1]`}
          style={{ width }}
        />
      ))}
      <div className="h-[16px] min-w-0 flex-1 rounded-[4px] bg-[#e4ebf1]" />
    </div>
  );
}

export default function Main() {
  return (
    <div
      dir="ltr"
      className="main-container mx-auto flex h-[1024px] w-[1440px] flex-nowrap items-start bg-[#f4f6f8]"
    >
      <main className="flex min-w-0 flex-1 self-stretch flex-col items-end gap-[24px] px-[40px] pb-[40px] pt-[24px]">
        <header className="flex w-full shrink-0 items-center justify-between border-b border-[#e4ebf1] pb-[16px]">
          <div className="flex w-[415px] shrink-0 items-center justify-end gap-[16px]">
            <div className="flex w-[117px] shrink-0 items-center justify-end gap-[10px]">
              <img
                src="/assets/mah/avatar.png"
                alt=""
                className="size-[36px] shrink-0 rounded-full object-cover"
              />
              <div className="flex w-[71px] shrink-0 flex-col items-end gap-[2px]">
                <span dir="auto" className="font-['Vazirmatn'] text-[13px] font-bold leading-[20px] text-[#17324d]">
                  مریم احمدی
                </span>
                <span dir="auto" className="whitespace-nowrap font-['Vazirmatn'] text-[11px] font-normal leading-[17px] text-[#60758a]">
                  مدیر ارشد محتوا
                </span>
              </div>
            </div>

            <div className="h-[24px] w-px shrink-0 bg-[#e4ebf1]" />

            <div className="flex size-[34px] shrink-0 items-center justify-center rounded-[8px] border border-[#e4ebf1] bg-white">
              <img src="/assets/mah/help-circle.svg" alt="" className="size-[18px]" />
            </div>

            <div className="relative flex size-[34px] shrink-0 items-center justify-center rounded-[8px] border border-[#e4ebf1] bg-white">
              <img src="/assets/mah/bell.svg" alt="" className="size-[18px]" />
              <div className="absolute right-[-4px] top-[-4px] flex h-[20px] min-w-[19px] items-center justify-center rounded-[10px] bg-[#ef4444] px-[6px] py-[2px]">
                <span dir="auto" className="font-['Vazirmatn'] text-[10px] font-bold leading-[16px] text-white">
                  ۳
                </span>
              </div>
            </div>

            <div className="flex w-[165px] shrink-0 items-center justify-end gap-[8px] rounded-[8px] border border-[#e4ebf1] bg-white px-[12px] py-[8px]">
              <span dir="auto" className="whitespace-nowrap text-right font-['Vazirmatn'] text-[13px] font-medium leading-[20px] text-[#17324d]">
                یکشنبه، ۲۶ مرداد ۱۴۰۵
              </span>
              <img src="/assets/mah/calendar.svg" alt="" className="size-[16px] shrink-0" />
            </div>
          </div>

          <div className="flex w-[380px] shrink-0 items-center justify-end gap-[8px] rounded-[12px] border border-[#e4ebf1] bg-white px-[16px] py-[10px]">
            <span dir="auto" className="min-w-0 flex-1 text-right font-['Vazirmatn'] text-[13px] font-normal leading-[20px] text-[#60758a]">
              جست‌وجو در محتوای CMS...
            </span>
            <img src="/assets/mah/search.svg" alt="" className="size-[16px] shrink-0" />
          </div>
        </header>

        <section className="flex w-full shrink-0 items-center justify-between">
          <div className="flex w-[322px] shrink-0 items-center gap-[12px]">
            <div className="h-[40px] w-[180px] rounded-[10px] bg-[#e4ebf1]" />
            <div className="h-[40px] w-[130px] rounded-[10px] bg-[#e4ebf1]" />
          </div>
          <div className="flex w-[340px] shrink-0 flex-col items-end gap-[8px]">
            <div className="h-[28px] w-[200px] rounded-[6px] bg-[#e4ebf1]" />
            <div className="h-[16px] w-[340px] rounded-[4px] bg-[#e4ebf1]" />
          </div>
        </section>

        <section className="flex w-full shrink-0 items-start justify-end gap-[16px]">
          <KpiSkeleton />
          <KpiSkeleton />
          <KpiSkeleton />
        </section>

        <section className="flex w-full shrink-0 items-start justify-end gap-[8px]">
          {Array.from({ length: 5 }).map((_, index) => (
            <div key={index} className="h-[36px] w-[100px] shrink-0 rounded-[10px] bg-[#e4ebf1]" />
          ))}
        </section>

        <section
          className="flex w-full shrink-0 flex-col items-end gap-[16px] rounded-[20px] border border-[#e4ebf1] bg-white p-[24px]"
          style={{ boxShadow: "0 4px 16px rgba(23, 46, 71, 0.08)" }}
        >
          <div className="flex w-full items-center justify-between">
            <div className="h-[28px] w-[100px] rounded-[6px] bg-[#e4ebf1]" />
            <div className="h-[24px] w-[140px] rounded-[6px] bg-[#e4ebf1]" />
          </div>
          <TableHeaderSkeleton />
          <TableRowSkeleton />
          <TableRowSkeleton />
          <TableRowSkeleton />
        </section>
      </main>

      <aside className="flex w-[280px] shrink-0 self-stretch flex-col items-end gap-[24px] border-l border-[#e4ebf1] bg-[#fcfbf8] px-[16px] py-[24px]">
        <div className="flex w-full shrink-0 flex-col items-end gap-[16px]">
          <img src="/assets/mah/logo.png" alt="ماه" className="h-[46px] w-[137px] object-contain" />
          <div className="flex w-full items-center justify-end gap-[12px] rounded-[12px] bg-[#f4f6f8] px-[12px] py-[8px]">
            <div className="shrink-0 rounded-[8px] bg-[#eaf5fd] px-[8px] py-[4px]">
              <span dir="auto" className="font-['Vazirmatn'] text-[11px] font-bold leading-[17px] text-[#2094e3]">
                CMS
              </span>
            </div>
            <div className="flex w-[60px] shrink-0 flex-col items-end gap-[2px]">
              <span dir="auto" className="whitespace-nowrap font-['Vazirmatn'] text-[13px] font-bold leading-[20px] text-[#17324d]">
                نگار حسینی
              </span>
              <span dir="auto" className="whitespace-nowrap font-['Vazirmatn'] text-[11px] font-normal leading-[17px] text-[#60758a]">
                مدیر محتوا
              </span>
            </div>
          </div>
        </div>

        <div className="h-px w-full shrink-0 bg-[#e4ebf1]" />

        <nav className="flex w-full shrink-0 flex-col items-end gap-[20px]">
          <SidebarSection title="محتوا" items={contentItems} />
          <SidebarSection title="انتشار" items={publishItems} />
          <SidebarSection title="مدیریت" items={manageItems} />
        </nav>

        <div className="min-h-0 w-full flex-1" />

        <div className="flex w-full shrink-0 flex-col items-end gap-[12px] bg-white">
          <div className="h-px w-full bg-[#e4ebf1]" />
          <button className="flex w-full items-center justify-center gap-[10px] rounded-[12px] bg-[#2094e3] p-[12px]">
            <span dir="auto" className="font-['Vazirmatn'] text-[14px] font-bold leading-[22px] text-white">
              خروج از سیستم
            </span>
            <img src="/assets/mah/logout.svg" alt="" className="size-[16px]" />
          </button>
        </div>
      </aside>
    </div>
  );
}
