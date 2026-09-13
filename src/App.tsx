import { AppProviders } from "./app/AppProviders";
import { AppRouter } from "./app/router";
import { AuthGate } from "./auth/AuthGate";
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

const STARTUP_TEAM_MEMBER_PATH = "/register/startup/states/step2/team-member/new";
const PROJECT_IMPACT_DOCUMENTS_PATH = "/projects/impact-report/documents";
const FUND_MANAGER_REPORT_DETAIL_PATH = "/panel/fund-manager/reports/detail";
const FUND_MANAGER_FINANCIAL_HISTORY_PATH = "/panel/fund-manager/financial-history";
const FUND_MANAGER_FINANCIAL_HISTORY_DETAIL_PATH = "/panel/fund-manager/financial-history/detail";

export default function App() {
  const pathname = window.location.pathname;
  const isStartupTeamMemberPage = pathname === STARTUP_TEAM_MEMBER_PATH;
  const isProjectImpactDocumentsPage = pathname === PROJECT_IMPACT_DOCUMENTS_PATH;

  const standalonePage = isStartupTeamMemberPage ? (
    <StartupTeamMemberAddPage />
  ) : isProjectImpactDocumentsPage ? (
    <ProjectImpactDocumentsPage />
  ) : pathname === FUND_MANAGER_REPORT_DETAIL_PATH ? (
    <FundManagerReportDetailPage />
  ) : pathname === FUND_MANAGER_FINANCIAL_HISTORY_PATH ? (
    <FundManagerFinancialHistoryPage />
  ) : pathname === FUND_MANAGER_FINANCIAL_HISTORY_DETAIL_PATH ? (
    <FundManagerFinancialHistoryDetailPage />
  ) : null;

  return (
    <AppProviders>
      <AuthGate>
        <PublicPageInteractions />
        <HowItWorksInteractions />
        <NewsListInteractions />
        <NewsDetailsInteractions />
        <FaqInteractions />
        <ProjectDetailsInteractions />
        <EmdadCertificateIssuerSettings />
        {standalonePage ?? <AppRouter />}
        <PublicFooter />
      </AuthGate>
    </AppProviders>
  );
}
