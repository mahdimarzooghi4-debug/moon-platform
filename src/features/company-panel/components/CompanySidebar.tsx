import { Link } from "react-router-dom";

const ASSET_ROOT = "/assets/company-panel";

type CompanySidebarProps = {
  active: "dashboard" | "projects" | "participations" | "reports" | "certificates" | "account";
};

const sidebarItems = [
  { key: "dashboard", label: "داشبورد", to: "/panel/company", icon: "nav-dashboard.svg" },
  { key: "projects", label: "پروژه‌های اثر اجتماعی", to: "/panel/company/projects", icon: "nav-social-projects.svg" },
  { key: "participations", label: "مشارکت‌های سازمانی", to: "/panel/company/participations", icon: "nav-participations.svg" },
  { key: "reports", label: "گزارش مالی و اثر", to: "/panel/company/reports", icon: "nav-reports.svg" },
  { key: "certificates", label: "گواهی ماده ۱۷۲", to: "/panel/company/certificates", icon: "nav-certificate.svg" },
  { key: "account", label: "حساب سازمانی", to: "/panel/company/account", icon: "nav-account.svg" },
] as const;

export function CompanySidebar({ active }: CompanySidebarProps) {
  return (
    <aside className="company-sidebar" aria-label="ناوبری پنل شرکت">
      <div className="company-brand">
        <img src={`${ASSET_ROOT}/logo.png`} alt="سامانه ماه" />
      </div>

      <div className="company-identity">پایدار پرداز خلاق آریا</div>

      <nav className="company-nav">
        {sidebarItems.map((item) => (
          <Link
            key={item.key}
            to={item.to}
            className={`company-nav-item${item.key === active ? " is-active" : ""}`}
          >
            <span>{item.label}</span>
            <img src={`${ASSET_ROOT}/${item.icon}`} alt="" />
          </Link>
        ))}
      </nav>

      <div className="company-sidebar-spacer" />

      <button className="company-logout" type="button">
        <span>خروج از سیستم</span>
        <img src={`${ASSET_ROOT}/nav-logout.svg`} alt="" />
      </button>
    </aside>
  );
}
