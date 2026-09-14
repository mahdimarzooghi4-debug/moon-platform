import { useEffect } from "react";
import { clearSession } from "../../auth/oidc";
import "./shared-sidebar.css";

const logo = "/assets/emdad/dashboard/logo.png";
const dashboardIcon = "/assets/emdad/dashboard/group.svg";
const releaseIcon = "/assets/emdad/dashboard/group1.svg";
const certificateIcon = "/assets/emdad/dashboard/certificate-icon.svg";
const synergyIcon = "/assets/emdad/dashboard/fund-synergy-icon.svg";
const historyIcon = "/assets/emdad/dashboard/group2.svg";
const reportsIcon = "/assets/emdad/dashboard/group3.svg";
const logoutIcon = "/assets/emdad/dashboard/group4.svg";

type Props = {
  pathname: string;
};

type Section =
  | "dashboard"
  | "release"
  | "fund-payments"
  | "article172"
  | "synergy"
  | "payment-history"
  | "reports";

function activeSection(pathname: string): Section {
  if (pathname.startsWith("/panel/emdad/release-requests")) return "release";
  if (pathname.startsWith("/panel/emdad/fund-payments")) return "fund-payments";
  if (pathname.startsWith("/panel/emdad/article172-approvals")) return "article172";
  if (pathname.startsWith("/panel/emdad/fund-synergy")) return "synergy";
  if (pathname.startsWith("/panel/emdad/fund-returns")) return "synergy";
  if (pathname.startsWith("/panel/emdad/payment-history")) return "payment-history";
  if (pathname.startsWith("/panel/emdad/financial-reports")) return "reports";
  return "dashboard";
}

function navigate(path: string) {
  if (window.location.pathname === path) return;
  window.history.pushState({}, "", path);
  window.dispatchEvent(new PopStateEvent("popstate"));
  window.scrollTo({ top: 0, left: 0, behavior: "auto" });
}

export default function EmdadSharedSidebar({ pathname }: Props) {
  const active = activeSection(pathname);

  useEffect(() => {
    document.documentElement.classList.add("emdad-shared-sidebar-active");
    return () => {
      window.setTimeout(() => {
        if (!document.querySelector(".emdad-shared-sidebar")) {
          document.documentElement.classList.remove("emdad-shared-sidebar-active");
        }
      }, 0);
    };
  }, []);

  const openCertificateIssuer = () => {
    const trigger = document.querySelector<HTMLButtonElement>(".emdad-certificate-issuer-trigger");
    if (trigger) {
      trigger.click();
      return;
    }
    navigate("/panel/emdad/article172-approvals");
  };

  const logout = () => {
    clearSession();
    sessionStorage.removeItem("moon.auth.dev-panel-preview");
    localStorage.removeItem("moon.auth.dev-panel-preview");
    window.location.assign("/auth");
  };

  return (
    <aside className="emdad-shared-sidebar" data-name="colored-sidebar" dir="rtl" aria-label="منوی کمیته امداد">
      <div className="emdad-shared-logo" data-name="brand-logo">
        <img src={logo} alt="ماه" />
      </div>

      <div className="emdad-shared-identity" data-name="panel-identity">
        <p>سامانه ماه</p>
        <span>پنل کمیته امداد</span>
      </div>

      <button type="button" data-name="dashboard-nav" className="emdad-shared-nav" data-active={active === "dashboard"} onClick={() => navigate("/panel/emdad")}>
        <span>داشبورد</span>
        <span className="emdad-shared-icon"><img src={dashboardIcon} alt="" /></span>
      </button>

      <button type="button" data-name="release-requests-nav" className="emdad-shared-nav" data-active={active === "release"} onClick={() => navigate("/panel/emdad/release-requests")}>
        <span>آزادسازی وجه</span>
        <span className="emdad-shared-icon"><img src={releaseIcon} alt="" /></span>
      </button>

      <button type="button" data-name="fund-payments-nav" className="emdad-shared-nav" data-active={active === "fund-payments"} onClick={() => navigate("/panel/emdad/fund-payments")}>
        <span>پرداخت از محل صندوق</span>
        <span className="emdad-shared-icon emdad-shared-inline-icon" aria-hidden="true">
          <svg viewBox="0 0 18 18" focusable="false">
            <path d="M3 9h10" />
            <path d="m10 5 4 4-4 4" />
            <path d="M3 4.5v9" />
          </svg>
        </span>
      </button>

      <button type="button" data-name="article-172-approvals-nav" className="emdad-shared-nav" data-active={active === "article172"} onClick={() => navigate("/panel/emdad/article172-approvals")}>
        <span>گواهی ماده ۱۷۲</span>
        <span className="emdad-shared-icon"><img src={certificateIcon} alt="" /></span>
      </button>

      <button type="button" data-name="fund-synergy-nav" className="emdad-shared-nav" data-active={active === "synergy"} onClick={() => navigate("/panel/emdad/fund-synergy")}>
        <span>هم‌افزایی صندوق</span>
        <span className="emdad-shared-icon"><img src={synergyIcon} alt="" /></span>
      </button>

      <button type="button" data-name="payment-history-nav" className="emdad-shared-nav" data-active={active === "payment-history"} onClick={() => navigate("/panel/emdad/payment-history")}>
        <span>سوابق پرداخت</span>
        <span className="emdad-shared-icon"><img src={historyIcon} alt="" /></span>
      </button>

      <button type="button" data-name="financial-reports-nav" className="emdad-shared-nav" data-active={active === "reports"} onClick={() => navigate("/panel/emdad/financial-reports")}>
        <span>گزارش‌های مالی</span>
        <span className="emdad-shared-icon"><img src={reportsIcon} alt="" /></span>
      </button>

      <button type="button" data-name="certificate-issuer-nav" className="emdad-shared-nav emdad-shared-issuer" onClick={openCertificateIssuer}>
        <span>تنظیم مسئول و امضای گواهی</span>
        <span className="emdad-shared-icon"><img src={certificateIcon} alt="" /></span>
      </button>

      <div className="emdad-shared-spacer" />

      <button
        type="button"
        data-name="logout-nav"
        className="emdad-shared-nav emdad-shared-logout"
        onClick={(event) => {
          event.stopPropagation();
          logout();
        }}
      >
        <span>خروج از سیستم</span>
        <span className="emdad-shared-icon"><img src={logoutIcon} alt="" /></span>
      </button>
    </aside>
  );
}
