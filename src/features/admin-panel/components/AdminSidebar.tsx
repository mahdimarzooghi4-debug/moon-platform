import { Link } from "react-router-dom";

const ASSET_ROOT = "/assets/admin-panel";

type AdminSidebarProps = {
  active:
    | "dashboard"
    | "users"
    | "organizations"
    | "projects"
    | "funding"
    | "revenues"
    | "reports"
    | "content"
    | "settings";
};

const sidebarItems = [
  { key: "dashboard", label: "داشبورد", to: "/panel/admin", icon: "nav-dashboard.svg" },
  { key: "users", label: "کاربران و نقش‌ها", to: "/panel/admin/users", icon: "nav-users.svg" },
  { key: "organizations", label: "شرکت‌ها و استارتاپ‌ها", to: "/panel/admin/organizations", icon: "nav-organizations.svg" },
  { key: "projects", label: "پروژه‌ها", to: "/panel/admin/projects", icon: "nav-projects.svg" },
  { key: "funding", label: "تأمین مالی", to: "/panel/admin/funding", icon: "nav-funding.svg" },
  { key: "revenues", label: "درآمدها", to: "/panel/admin/revenues", icon: "nav-history.svg" },
  { key: "reports", label: "گزارش‌ها", to: "/panel/admin/reports", icon: "nav-history.svg" },
  { key: "content", label: "مدیریت محتوا", to: "/panel/admin/content", icon: null },
  { key: "settings", label: "تنظیمات", to: "/panel/admin/settings", icon: "nav-settings.svg" },
] as const;

export function AdminSidebar({ active }: AdminSidebarProps) {
  return (
    <aside className="admin-sidebar" aria-label="ناوبری پنل ادمین">
      <div className="admin-brand">
        <img src={`${ASSET_ROOT}/logo.png`} alt="سامانه ماه" />
      </div>

      <div className="admin-identity">ادمین سامانه ماه</div>

      <nav className="admin-nav">
        {sidebarItems.map((item) => (
          <Link
            key={item.key}
            to={item.to}
            className={`admin-nav-item${item.key === active ? " is-active" : ""}`}
          >
            <span>{item.label}</span>
            {item.icon ? (
              <img src={`${ASSET_ROOT}/${item.icon}`} alt="" />
            ) : (
              <span className="admin-content-icon" aria-hidden="true">
                <i />
                <i />
              </span>
            )}
          </Link>
        ))}
      </nav>

      <div className="admin-sidebar-spacer" />

      <button className="admin-logout" type="button" aria-label="خروج از سیستم">
        <span>خروج از سیستم</span>
        <img src={`${ASSET_ROOT}/nav-logout.svg`} alt="" />
      </button>
    </aside>
  );
}
