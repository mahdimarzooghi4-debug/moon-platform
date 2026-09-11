import { Link } from "react-router-dom";

const ASSET_ROOT = "/assets/startup-panel";

type StartupSidebarProps = {
  active: "dashboard" | "projects" | "stages" | "reports" | "profile" | "financing" | "settings";
};

const sidebarItems = [
  { key: "dashboard", label: "داشبورد", to: "/panel/startup", icon: "nav-dashboard.svg" },
  { key: "projects", label: "پروژه‌های من", to: "/panel/startup/projects", icon: "nav-projects.svg" },
  { key: "stages", label: "مراحل پروژه", to: "/panel/startup/stages", icon: "nav-stages.svg" },
  { key: "reports", label: "گزارش‌ها و مستندات", to: "/panel/startup/reports", icon: "nav-reports.svg" },
  { key: "profile", label: "پروفایل استارتاپ", to: "/panel/startup/profile", icon: "nav-profile.svg" },
  { key: "financing", label: "کارمزد تأمین مالی", to: "/panel/startup/financing-fee", icon: "nav-profile.svg" },
  { key: "settings", label: "تنظیمات", to: "/panel/startup/settings", icon: "nav-settings.svg" },
] as const;

export function StartupSidebar({ active }: StartupSidebarProps) {
  return (
    <aside className="startup-sidebar" aria-label="ناوبری پنل استارتاپ">
      <div className="startup-brand">
        <img src={`${ASSET_ROOT}/logo.png`} alt="سامانه ماه" />
      </div>

      <div className="startup-identity">
        <strong>سامانه ماه</strong>
        <span>حساب استارتاپی</span>
      </div>

      <nav className="startup-nav">
        {sidebarItems.map((item) => (
          <Link
            key={item.key}
            to={item.to}
            className={`startup-nav-item${item.key === active ? " is-active" : ""}`}
          >
            <span>{item.label}</span>
            <img src={`${ASSET_ROOT}/${item.icon}`} alt="" />
          </Link>
        ))}
      </nav>

      <div className="startup-sidebar-spacer" />

      <button className="startup-logout" type="button">
        <span>خروج از سیستم</span>
        <span className="startup-logout-icon" aria-hidden="true" />
      </button>
    </aside>
  );
}
