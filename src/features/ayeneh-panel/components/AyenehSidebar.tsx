import { Link } from "react-router-dom";

const ASSET_ROOT = "/assets/ayeneh-panel";

export type AyenehSection =
  | "dashboard"
  | "startup-evaluations"
  | "project-evaluations"
  | "milestone-evaluations"
  | "reports"
  | "history"
  | "settings";

const items: Array<{ key: AyenehSection; label: string; to: string; icon: string }> = [
  { key: "dashboard", label: "داشبورد", to: "/panel/ayeneh", icon: "nav-dashboard.svg" },
  { key: "startup-evaluations", label: "ارزیابی استارتاپ‌ها", to: "/panel/ayeneh/startup-evaluations", icon: "nav-startups.svg" },
  { key: "project-evaluations", label: "ارزیابی پروژه‌ها", to: "/panel/ayeneh/project-evaluations", icon: "nav-projects.svg" },
  { key: "milestone-evaluations", label: "ارزیابی مراحل پروژه", to: "/panel/ayeneh/milestone-evaluations", icon: "nav-milestones.svg" },
  { key: "reports", label: "گزارش‌ها", to: "/panel/ayeneh/reports", icon: "nav-reports.svg" },
  { key: "history", label: "سوابق ارزیابی", to: "/panel/ayeneh/evaluation-history", icon: "nav-history.svg" },
  { key: "settings", label: "تنظیمات", to: "/panel/ayeneh/settings", icon: "nav-settings.svg" },
];

export function AyenehSidebar({ active }: { active: AyenehSection }) {
  return (
    <aside className="ayeneh-sidebar" dir="rtl">
      <div className="ayeneh-brand">
        <img src={`${ASSET_ROOT}/logo.png`} alt="ماه" />
      </div>
      <div className="ayeneh-identity">خانه خلاق و نوآوری آینه</div>
      <nav className="ayeneh-nav" aria-label="ناوبری پنل خانه خلاق">
        {items.map((item) => (
          <Link
            className={`ayeneh-nav-item${active === item.key ? " is-active" : ""}`}
            to={item.to}
            key={item.key}
          >
            <span>{item.label}</span>
            <img src={`${ASSET_ROOT}/${item.icon}`} alt="" />
          </Link>
        ))}
      </nav>
      <div className="ayeneh-sidebar-spacer" />
      <button className="ayeneh-logout" type="button" aria-disabled="true">
        <span>خروج از سیستم</span>
        <img src={`${ASSET_ROOT}/nav-logout.svg`} alt="" />
      </button>
    </aside>
  );
}
