import { useEffect } from "react";
import { clearSession } from "../../auth/oidc";
import "./shared-sidebar.css";

const logo = "/assets/fund-manager/investments/logo.png";
const dashboardIcon = "/assets/fund-manager/investments/dashboard.svg";
const resourcesIcon = "/assets/fund-manager/investments/resources.svg";
const investmentsIcon = "/assets/fund-manager/investments/investments.svg";
const logoutIcon = "/assets/fund-manager/investments/logout.svg";

type FundManagerSection = "dashboard" | "resources" | "investments" | "financials" | "reports";

type Props = {
  pathname: string;
};

function activeSection(pathname: string): FundManagerSection {
  if (pathname.startsWith("/panel/fund-manager/resources")) return "resources";
  if (pathname.startsWith("/panel/fund-manager/investments")) return "investments";
  if (
    pathname.startsWith("/panel/fund-manager/financials") ||
    pathname.startsWith("/panel/fund-manager/profit-returns") ||
    pathname.startsWith("/panel/fund-manager/cycle-returns") ||
    pathname.startsWith("/panel/fund-manager/profit-split") ||
    pathname.startsWith("/panel/fund-manager/financial-history")
  ) {
    return "financials";
  }
  if (pathname.startsWith("/panel/fund-manager/reports")) return "reports";
  return "dashboard";
}

export default function FundManagerSharedSidebar({ pathname }: Props) {
  const active = activeSection(pathname);

  useEffect(() => {
    document.documentElement.classList.add("fund-manager-shared-sidebar-active");
    return () => document.documentElement.classList.remove("fund-manager-shared-sidebar-active");
  }, []);

  const logout = () => {
    clearSession();
    sessionStorage.removeItem("moon.auth.dev-panel-preview");
    localStorage.removeItem("moon.auth.dev-panel-preview");
    window.location.assign("/auth");
  };

  return (
    <aside className="fund-manager-shared-sidebar" data-name="colored-sidebar" dir="rtl" aria-label="منوی مدیر صندوق">
      <div className="fund-manager-shared-logo" data-name="brand-logo">
        <img src={logo} alt="ماه" />
      </div>

      <div className="fund-manager-shared-identity" data-name="panel-identity">
        <p>مدیر صندوق ماه</p>
      </div>

      <button type="button" data-name="dashboard-nav" className="fund-manager-shared-nav" data-active={active === "dashboard"}>
        <span>داشبورد</span>
        <span className="fund-manager-shared-icon"><img src={dashboardIcon} alt="" /></span>
      </button>

      <button type="button" data-name="startup-evaluations-nav" className="fund-manager-shared-nav" data-active={active === "resources"}>
        <span>منابع صندوق</span>
        <span className="fund-manager-shared-icon"><img src={resourcesIcon} alt="" /></span>
      </button>

      <button type="button" data-name="project-evaluations-nav" className="fund-manager-shared-nav" data-active={active === "investments"}>
        <span>سرمایه‌گذاری‌ها</span>
        <span className="fund-manager-shared-icon"><img src={investmentsIcon} alt="" /></span>
      </button>

      <button type="button" data-name="revenues-nav" className="fund-manager-shared-nav" data-active={active === "financials"}>
        <span>مالی صندوق</span>
        <span className="fund-manager-shared-icon fund-manager-shared-percent" aria-hidden="true">٪</span>
      </button>

      <button type="button" data-name="evaluation-history-nav" className="fund-manager-shared-nav" data-active={active === "reports"}>
        <span>گزارش‌ها</span>
        <span className="fund-manager-shared-icon fund-manager-shared-report-icon" aria-hidden="true">
          <svg viewBox="0 0 18 18" focusable="false">
            <path d="M3.5 14.5V4.5c0-.55.45-1 1-1h9c.55 0 1 .45 1 1v10H3.5Z" />
            <path d="M6 11.5v-2M9 11.5v-4M12 11.5v-6" />
            <path d="M2.5 14.5h13" />
          </svg>
        </span>
      </button>

      <div className="fund-manager-shared-spacer" />

      <button
        type="button"
        data-name="logout-nav"
        className="fund-manager-shared-nav fund-manager-shared-logout"
        onClick={(event) => {
          event.stopPropagation();
          logout();
        }}
      >
        <span>خروج از سیستم</span>
        <span className="fund-manager-shared-icon"><img src={logoutIcon} alt="" /></span>
      </button>
    </aside>
  );
}
