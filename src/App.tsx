import { useEffect, useState } from "react";
import { AppProviders } from "./app/AppProviders";
import { AppRouter } from "./app/router";
import { AuthGate } from "./auth/AuthGate";
import ManagedPublicContent from "./shared/ManagedPublicContent";
import PublicFooter from "./shared/PublicFooter";
import PublicPageInteractions from "./shared/PublicPageInteractions";
import StartupTeamMemberAddPage from "./features/startup-registration/states/step2/team-member";
import ProjectImpactDocumentsPage from "./project-impact-report/documents";
import HowItWorksInteractions from "./how-it-works/HowItWorksInteractions";
import NewsListInteractions from "./news-list/NewsListInteractions";
import NewsDetailsInteractions from "./news-details/NewsDetailsInteractions";
import FaqInteractions from "./faq/FaqInteractions";
import ProjectDetailsInteractions from "./features/project-details/ProjectDetailsInteractions";
import EmdadCertificateIssuerSettings from "./features/emdad-certificate-issuer-settings";
import FundManagerReportDetailPage from "./panels/fund-manager/report-detail";
import FundManagerFinancialHistoryPage from "./panels/fund-manager/financial-history";
import FundManagerFinancialHistoryDetailPage from "./panels/fund-manager/financial-history-detail";
import FundManagerFinancialsPage from "./panels/fund-manager/financials";
import FundManagerSharedSidebar from "./panels/fund-manager/SharedSidebar";
import EmdadFundPaymentsPage from "./panels/emdad/fund-payments";
import EmdadSharedSidebar from "./panels/emdad/SharedSidebar";

const STARTUP_TEAM_MEMBER_PATH = "/register/startup/states/step2/team-member/new";
const PROJECT_IMPACT_DOCUMENTS_PATH = "/projects/impact-report/documents";
const FUND_MANAGER_PREFIX = "/panel/fund-manager";
const EMDAD_PREFIX = "/panel/emdad";
const FUND_MANAGER_REPORT_DETAIL_PATH = "/panel/fund-manager/reports/detail";
const FUND_MANAGER_FINANCIAL_HISTORY_PATH = "/panel/fund-manager/financial-history";
const FUND_MANAGER_FINANCIAL_HISTORY_DETAIL_PATH = "/panel/fund-manager/financial-history/detail";
const FUND_MANAGER_FINANCIALS_PATH = "/panel/fund-manager/financials";
const EMDAD_FUND_PAYMENTS_PATH = "/panel/emdad/fund-payments";

export default function App() {
  const demoPathname = () =>
    import.meta.env.VITE_GITHUB_PAGES === "true"
      ? window.location.hash.slice(1).split("?")[0] || "/"
      : window.location.pathname;
  const [pathname, setPathname] = useState(demoPathname);

  useEffect(() => {
    const syncPathname = () => setPathname(demoPathname());
    window.addEventListener("popstate", syncPathname);
    window.addEventListener("hashchange", syncPathname);
    return () => {
      window.removeEventListener("popstate", syncPathname);
      window.removeEventListener("hashchange", syncPathname);
    };
  }, []);

  const isStartupTeamMemberPage = pathname === STARTUP_TEAM_MEMBER_PATH;
  const isProjectImpactDocumentsPage = pathname === PROJECT_IMPACT_DOCUMENTS_PATH;
  const isFundManagerPage = pathname.startsWith(FUND_MANAGER_PREFIX);
  const isEmdadPage = pathname.startsWith(EMDAD_PREFIX);

  const standalonePage = isStartupTeamMemberPage ? (
    <StartupTeamMemberAddPage />
  ) : isProjectImpactDocumentsPage ? (
    <ProjectImpactDocumentsPage />
  ) : pathname === FUND_MANAGER_REPORT_DETAIL_PATH ? (
    <FundManagerReportDetailPage />
  ) : pathname === FUND_MANAGER_FINANCIALS_PATH ? (
    <FundManagerFinancialsPage />
  ) : pathname === FUND_MANAGER_FINANCIAL_HISTORY_PATH ? (
    <FundManagerFinancialHistoryPage />
  ) : pathname === FUND_MANAGER_FINANCIAL_HISTORY_DETAIL_PATH ? (
    <FundManagerFinancialHistoryDetailPage />
  ) : pathname === EMDAD_FUND_PAYMENTS_PATH ? (
    <EmdadFundPaymentsPage />
  ) : null;

  return (
    <AppProviders>
      <AuthGate>
        <ManagedPublicContent />
        <PublicPageInteractions />
        <HowItWorksInteractions />
        <NewsListInteractions />
        <NewsDetailsInteractions />
        <FaqInteractions />
        <ProjectDetailsInteractions />
        <EmdadCertificateIssuerSettings />
        {standalonePage ?? <AppRouter />}
        {isFundManagerPage ? <FundManagerSharedSidebar pathname={pathname} /> : null}
        {isEmdadPage ? <EmdadSharedSidebar pathname={pathname} /> : null}
        <PublicFooter />
      </AuthGate>
    </AppProviders>
  );
}
