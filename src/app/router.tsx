import { lazy, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CompanyRegistrationPage from "../features/company-registration";
import StartupRegistrationPage from "../features/startup-registration";
import AuthEntryPage from "../page";

const LandingPage = lazy(() => import("../landing/MahLandingPage"));
const AboutPage = lazy(() => import("../about/MahAbout"));
const ForCompaniesPage = lazy(() => import("../companies/MahForCompanies"));
const ForStartupsPage = lazy(() => import("../startups/MahForStartups"));
const HowItWorksPage = lazy(() => import("../how-it-works/MahHowItWorks"));
const ImpactOverviewPage = lazy(() => import("../impact-overview"));
const ImpactReportsListPage = lazy(() => import("../impact-reports-list"));
const ImpactReportsListLoadingPage = lazy(() => import("../impact-reports-list/states/loading"));
const ImpactReportsListEmptyPage = lazy(() => import("../impact-reports-list/states/empty"));
const ImpactReportsListNoResultsPage = lazy(() => import("../impact-reports-list/states/no-results"));
const ImpactReportsListErrorPage = lazy(() => import("../impact-reports-list/states/error"));
const ProjectImpactReportPage = lazy(() => import("../project-impact-report"));
const ProjectImpactReportFinalPage = lazy(() => import("../project-impact-report/states/final"));
const ProjectImpactReportPendingPage = lazy(() => import("../project-impact-report/states/pending"));
const ProjectImpactReportPrintPage = lazy(() => import("../project-impact-report/print"));
const ParticipationCheckoutPage = lazy(() => import("../participation-checkout"));
const ParticipationCheckoutFundedPage = lazy(() => import("../participation-checkout/funded"));
const ParticipationCheckoutLoadingPage = lazy(() => import("../participation-checkout/loading"));
const ParticipationCheckoutRedirectingPage = lazy(() => import("../participation-checkout/redirecting"));
const ParticipationCheckoutPaymentErrorPage = lazy(() => import("../participation-checkout/payment-error"));
const ParticipationCheckoutUnavailablePage = lazy(() => import("../participation-checkout/unavailable"));
const ParticipationModalPage = lazy(() => import("../participation-modal"));
const ParticipationTrackFormPage = lazy(() => import("../participation-track/form"));
const ParticipationTrackOtpPage = lazy(() => import("../participation-track/otp"));
const ParticipationTrackListPage = lazy(() => import("../participation-track/list"));
const ParticipationTrackDetailsPage = lazy(() => import("../participation-track/details"));
const ParticipationTrackPendingPage = lazy(() => import("../participation-track/pending"));
const ParticipationTrackCompletedPage = lazy(() => import("../participation-track/completed"));
const ParticipationTrackFailedPage = lazy(() => import("../participation-track/failed"));
const ParticipationTrackEmptyPage = lazy(() => import("../participation-track/empty"));
const PaymentResultSuccessPage = lazy(() => import("../payment-result/success"));
const PaymentResultFailedPage = lazy(() => import("../payment-result/failed"));
const PaymentResultPendingPage = lazy(() => import("../payment-result/pending"));
const PaymentResultCanceledPage = lazy(() => import("../payment-result/canceled"));
const PaymentResultErrorsPage = lazy(() => import("../payment-result/errors"));
const FaqPage = lazy(() => import("../faq"));
const ContactSupportPage = lazy(() => import("../contact-support"));
const NewsListPage = lazy(() => import("../news-list"));
const NewsDetailsPage = lazy(() => import("../news-details"));
const PrivacyPolicyPage = lazy(() => import("../privacy-policy"));
const TermsPage = lazy(() => import("../terms"));
const Article172GuidePage = lazy(() => import("../article-172-guide"));
const SearchResultsPage = lazy(() => import("../search-results"));
const SearchResultsInitialPage = lazy(() => import("../search-results/states/initial"));
const SearchResultsLoadingPage = lazy(() => import("../search-results/states/loading"));
const SearchResultsErrorPage = lazy(() => import("../search-results/states/error"));
const SearchResultsEmptyPage = lazy(() => import("../search-results/states/empty"));
const RegistrationTrackPage = lazy(() => import("../registration-track"));
const RegistrationTrackApprovedPage = lazy(() => import("../registration-track/states/approved"));
const RegistrationTrackNotFoundPage = lazy(() => import("../registration-track/states/not-found"));
const RegistrationTrackErrorPage = lazy(() => import("../registration-track/states/error"));
const RegistrationTrackNeedsEditPage = lazy(() => import("../registration-track/states/needs-edit"));
const RegistrationTrackRejectedPage = lazy(() => import("../registration-track/states/rejected"));
const StartupRegistrationStep2Page = lazy(() => import("../features/startup-registration/states/step2"));
const StartupRegistrationStep3Page = lazy(() => import("../features/startup-registration/states/step3"));
const StartupRegistrationStep4Page = lazy(() => import("../features/startup-registration/states/step4"));
const CompanyRegistrationStep2Page = lazy(() => import("../features/company-registration/states/step2"));
const CompanyRegistrationStatusPage = lazy(() => import("../features/company-registration/status"));
const NotFoundPage = lazy(() => import("../not-found"));
const StartupsDirectoryPage = lazy(() => import("../startups-directory"));
const StartupPublicProfilePage = lazy(() => import("../startup-public-profile"));
const StartupPublicProfileNoProjectsPage = lazy(() => import("../startup-public-profile/states/no-projects"));
const StartupShareSheetPage = lazy(() => import("../startup-share-sheet"));
const ProjectsPage = lazy(() => import("../features/projects/MahProjects"));
const ProjectsLoadingPage = lazy(() => import("../features/projects/states/loading"));
const ProjectsEmptyPage = lazy(() => import("../features/projects/states/empty"));
const ProjectsErrorPage = lazy(() => import("../features/projects/states/error"));
const ProjectDetailsPage = lazy(() => import("../features/project-details"));
const ProjectRuralWomenPage = lazy(() => import("../features/project-details/variants/rural-women"));

const StartupPanelDashboardPage = lazy(() => import("../features/startup-panel"));
const StartupPanelProjectsPage = lazy(() => import("../features/startup-panel/projects"));
const StartupProjectCreatePage = lazy(() => import("../features/startup-panel/project-create"));
const StartupProjectSubmittedPage = lazy(() => import("../features/startup-panel/project-submitted"));
const StartupProjectDetailPage = lazy(() => import("../features/startup-panel/project-detail"));
const StartupProjectStagesPage = lazy(() => import("../features/startup-panel/project-stages"));
const StartupProjectStageDetailPage = lazy(() => import("../features/startup-panel/project-stage-detail"));
const StartupProjectStageReportPage = lazy(() => import("../features/startup-panel/project-stage-report"));
const StartupProjectStageReportSubmittedPage = lazy(() => import("../features/startup-panel/project-stage-report-submitted"));
const StartupProjectStageEvaluationPage = lazy(() => import("../features/startup-panel/project-stage-evaluation"));
const StartupProjectStageFundReleasedPage = lazy(() => import("../features/startup-panel/project-stage-fund-released"));
const StartupReportsPage = lazy(() => import("../features/startup-panel/reports"));
const StartupReportDetailPage = lazy(() => import("../features/startup-panel/report-detail"));
const StartupProfilePage = lazy(() => import("../features/startup-panel/profile"));
const StartupProfileEditBasicPage = lazy(() => import("../features/startup-panel/profile-edit-basic"));
const StartupProfileEditProductTeamPage = lazy(() => import("../features/startup-panel/profile-edit-product-team"));
const StartupProfileEditImpactDocumentsPage = lazy(() => import("../features/startup-panel/profile-edit-impact-documents"));
const StartupFinancingFeePage = lazy(() => import("../features/startup-panel/financing-fee"));
const StartupSettingsPage = lazy(() => import("../features/startup-panel/settings"));

const CompanyPanelDashboardPage = lazy(() => import("../features/company-panel"));
const CompanyProjectsPage = lazy(() => import("../features/company-panel/projects"));
const CompanyProjectDetailPage = lazy(() => import("../features/company-panel/project-detail"));
const CompanyProjectParticipationPage = lazy(() => import("../features/company-panel/project-participation"));
const CompanyPaymentSuccessPage = lazy(() => import("../features/company-panel/payment-success"));
const CompanyParticipationsPage = lazy(() => import("../features/company-panel/participations"));
const CompanyParticipationDetailPage = lazy(() => import("../features/company-panel/participation-detail"));
const CompanyReportsPage = lazy(() => import("../features/company-panel/reports"));
const CompanyReportDetailPage = lazy(() => import("../features/company-panel/report-detail"));
const CompanyArticle172CertificatesPage = lazy(() => import("../features/company-panel/certificates"));
const CompanyArticle172CertificateDetailPage = lazy(() => import("../features/company-panel/certificate-detail"));
const CompanyArticle172CertificateIssuedPage = lazy(() => import("../features/company-panel/certificate-issued"));
const CompanyOrganizationAccountPage = lazy(() => import("../features/company-panel/account"));
const CompanyEditOrganizationInfoPage = lazy(() => import("../features/company-panel/account-edit-organization"));
const CompanyEditOrganizationRepresentativePage = lazy(() => import("../features/company-panel/account-edit-representative"));
const CompanyEditTaxAndDocumentsPage = lazy(() => import("../features/company-panel/account-edit-tax-documents"));

const AdminPanelDashboardPage = lazy(() => import("../features/admin-panel"));
const AdminUsersRolesPage = lazy(() => import("../features/admin-panel/users"));
const AdminAddUserPage = lazy(() => import("../features/admin-panel/users-new"));
const AdminRoleManagementPage = lazy(() => import("../features/admin-panel/roles"));
const AdminUserDetailPage = lazy(() => import("../features/admin-panel/user-detail"));
const AdminOrganizationsPage = lazy(() => import("../features/admin-panel/organizations"));
const AdminOrganizationDetailPage = lazy(() => import("../features/admin-panel/organization-detail"));
const AdminProjectsPage = lazy(() => import("../features/admin-panel/projects"));
const AdminProjectDetailPage = lazy(() => import("../features/admin-panel/project-detail"));
const AdminFundingPage = lazy(() => import("../features/admin-panel/funding"));
const AdminFundingDetailPage = lazy(() => import("../features/admin-panel/funding-detail"));
const AdminRevenuesPage = lazy(() => import("../features/admin-panel/revenues"));
const AdminRevenueDetailPage = lazy(() => import("../features/admin-panel/revenue-detail"));
const AdminReportsPage = lazy(() => import("../features/admin-panel/reports"));
const AdminReportDetailPage = lazy(() => import("../features/admin-panel/report-detail"));
const AdminContentManagementPage = lazy(() => import("../features/admin-panel/content"));
const AdminSettingsPage = lazy(() => import("../features/admin-panel/settings"));
const AdminAccessPolicyPage = lazy(() => import("../features/admin-panel/access-policy"));

const CreativeHouseDashboardPage = lazy(() => import("../panels/creative-house"));
const CreativeHouseStartupEvaluationsPage = lazy(() => import("../panels/creative-house/startup-evaluations"));
const CreativeHouseStartupEvaluationDetailPage = lazy(() => import("../panels/creative-house/startup-evaluation-detail"));
const CreativeHouseProjectEvaluationsPage = lazy(() => import("../panels/creative-house/project-evaluations"));
const CreativeHouseProjectEvaluationDetailPage = lazy(() => import("../panels/creative-house/project-evaluation-detail"));
const CreativeHouseMilestoneEvaluationsPage = lazy(() => import("../panels/creative-house/milestone-evaluations"));
const CreativeHouseMilestoneEvaluationDetailPage = lazy(() => import("../panels/creative-house/milestone-evaluation-detail"));
const CreativeHouseReportsPage = lazy(() => import("../panels/creative-house/reports"));
const CreativeHouseEvaluationHistoryPage = lazy(() => import("../panels/creative-house/evaluation-history"));
const CreativeHouseSettingsPage = lazy(() => import("../panels/creative-house/settings"));
const CreativeHouseReportDetailPage = lazy(() => import("../panels/creative-house/report-detail"));

const FundManagerDashboardPage = lazy(() => import("../panels/fund-manager"));
const FundManagerResourcesPage = lazy(() => import("../panels/fund-manager/resources"));
const FundManagerResourceDetailPage = lazy(() => import("../panels/fund-manager/resource-detail"));
const FundManagerInvestmentsPage = lazy(() => import("../panels/fund-manager/investments"));
const FundManagerInvestmentDetailPage = lazy(() => import("../panels/fund-manager/investment-detail"));
const FundManagerProfitReturnsPage = lazy(() => import("../panels/fund-manager/profit-returns"));
const FundManagerProfitReturnDetailPage = lazy(() => import("../panels/fund-manager/profit-return-detail"));
const FundManagerCycleReturnsPage = lazy(() => import("../panels/fund-manager/cycle-returns"));
const FundManagerCycleReturnDetailPage = lazy(() => import("../panels/fund-manager/cycle-return-detail"));
const FundManagerProfitSplitPage = lazy(() => import("../panels/fund-manager/profit-split"));
const FundManagerProfitSplitDetailPage = lazy(() => import("../panels/fund-manager/profit-split-detail"));
const FundManagerReportsPage = lazy(() => import("../panels/fund-manager/reports"));

const EmdadDashboardPage = lazy(() => import("../panels/emdad"));
const EmdadReleaseRequestsPage = lazy(() => import("../panels/emdad/release-requests"));
const EmdadReleaseRequestDetailPage = lazy(() => import("../panels/emdad/release-requests/detail"));
const EmdadReleaseSuccessPage = lazy(() => import("../panels/emdad/release-requests/success"));
const EmdadArticle172ApprovalsPage = lazy(() => import("../panels/emdad/article172-approvals"));
const EmdadArticle172RequestDetailPage = lazy(() => import("../panels/emdad/article172-approvals/detail"));
const EmdadArticle172SuccessPage = lazy(() => import("../panels/emdad/article172-approvals/success"));
const EmdadPaymentHistoryPage = lazy(() => import("../panels/emdad/payment-history"));
const EmdadPaymentDetailPage = lazy(() => import("../panels/emdad/payment-history/detail"));
const EmdadFinancialReportsPage = lazy(() => import("../panels/emdad/financial-reports"));
const EmdadFundSynergyPage = lazy(() => import("../panels/emdad/fund-synergy"));
const EmdadFundSynergyAllocationPage = lazy(() => import("../panels/emdad/fund-synergy/allocation"));
const EmdadFundSynergySuccessPage = lazy(() => import("../panels/emdad/fund-synergy/success"));
const EmdadFundSynergyHistoryPage = lazy(() => import("../panels/emdad/fund-synergy-history"));
const EmdadFundReturnsPage = lazy(() => import("../panels/emdad/fund-returns"));

function lazyElement(Page: React.LazyExoticComponent<React.ComponentType>) {
  return (
    <Suspense fallback={null}>
      <Page />
    </Suspense>
  );
}

export function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={lazyElement(LandingPage)} />
        <Route path="/about" element={lazyElement(AboutPage)} />
        <Route path="/companies" element={lazyElement(ForCompaniesPage)} />
        <Route path="/for-companies" element={lazyElement(ForCompaniesPage)} />
        <Route path="/startups" element={lazyElement(ForStartupsPage)} />
        <Route path="/for-startups" element={lazyElement(ForStartupsPage)} />
        <Route path="/startups-directory" element={lazyElement(StartupsDirectoryPage)} />
        <Route path="/startups/directory" element={lazyElement(StartupsDirectoryPage)} />
        <Route path="/startups/profile/states/no-projects" element={lazyElement(StartupPublicProfileNoProjectsPage)} />
        <Route path="/startups/profile/share" element={lazyElement(StartupShareSheetPage)} />
        <Route path="/startups/:startupId" element={lazyElement(StartupPublicProfilePage)} />
        <Route path="/how-it-works" element={lazyElement(HowItWorksPage)} />
        <Route path="/impact" element={lazyElement(ImpactOverviewPage)} />
        <Route path="/impact-overview" element={lazyElement(ImpactOverviewPage)} />
        <Route path="/impact-reports/states/loading" element={lazyElement(ImpactReportsListLoadingPage)} />
        <Route path="/impact-reports/states/empty" element={lazyElement(ImpactReportsListEmptyPage)} />
        <Route path="/impact-reports/states/no-results" element={lazyElement(ImpactReportsListNoResultsPage)} />
        <Route path="/impact-reports/states/error" element={lazyElement(ImpactReportsListErrorPage)} />
        <Route path="/impact-reports" element={lazyElement(ImpactReportsListPage)} />
        <Route path="/projects/impact-report/states/final" element={lazyElement(ProjectImpactReportFinalPage)} />
        <Route path="/projects/impact-report/states/pending" element={lazyElement(ProjectImpactReportPendingPage)} />
        <Route path="/projects/impact-report/print" element={lazyElement(ProjectImpactReportPrintPage)} />
        <Route path="/projects/:projectId/impact-report" element={lazyElement(ProjectImpactReportPage)} />
        <Route path="/participation/checkout" element={lazyElement(ParticipationCheckoutPage)} />
        <Route path="/projects/:projectId/participate" element={lazyElement(ParticipationCheckoutPage)} />
        <Route path="/participation/checkout/funded" element={lazyElement(ParticipationCheckoutFundedPage)} />
        <Route path="/projects/:projectId/participate/funded" element={lazyElement(ParticipationCheckoutFundedPage)} />
        <Route path="/participation/checkout/loading" element={lazyElement(ParticipationCheckoutLoadingPage)} />
        <Route path="/projects/:projectId/participate/loading" element={lazyElement(ParticipationCheckoutLoadingPage)} />
        <Route path="/participation/checkout/redirecting" element={lazyElement(ParticipationCheckoutRedirectingPage)} />
        <Route path="/projects/:projectId/participate/redirecting" element={lazyElement(ParticipationCheckoutRedirectingPage)} />
        <Route path="/participation/checkout/payment-error" element={lazyElement(ParticipationCheckoutPaymentErrorPage)} />
        <Route path="/projects/:projectId/participate/payment-error" element={lazyElement(ParticipationCheckoutPaymentErrorPage)} />
        <Route path="/participation/checkout/unavailable" element={lazyElement(ParticipationCheckoutUnavailablePage)} />
        <Route path="/projects/:projectId/participate/unavailable" element={lazyElement(ParticipationCheckoutUnavailablePage)} />
        <Route path="/participation/modal" element={lazyElement(ParticipationModalPage)} />
        <Route path="/participation/track" element={lazyElement(ParticipationTrackFormPage)} />
        <Route path="/participation/track/form" element={lazyElement(ParticipationTrackFormPage)} />
        <Route path="/participation/track/otp" element={lazyElement(ParticipationTrackOtpPage)} />
        <Route path="/participation/track/list" element={lazyElement(ParticipationTrackListPage)} />
        <Route path="/participation/track/details" element={lazyElement(ParticipationTrackDetailsPage)} />
        <Route path="/participation/track/pending" element={lazyElement(ParticipationTrackPendingPage)} />
        <Route path="/participation/track/completed" element={lazyElement(ParticipationTrackCompletedPage)} />
        <Route path="/participation/track/failed" element={lazyElement(ParticipationTrackFailedPage)} />
        <Route path="/participation/track/empty" element={lazyElement(ParticipationTrackEmptyPage)} />
        <Route path="/participation/track/:participationId" element={lazyElement(ParticipationTrackDetailsPage)} />
        <Route path="/payment/result/success" element={lazyElement(PaymentResultSuccessPage)} />
        <Route path="/payment/result/failed" element={lazyElement(PaymentResultFailedPage)} />
        <Route path="/payment/result/pending" element={lazyElement(PaymentResultPendingPage)} />
        <Route path="/payment/result/canceled" element={lazyElement(PaymentResultCanceledPage)} />
        <Route path="/payment/result/errors" element={lazyElement(PaymentResultErrorsPage)} />
        <Route path="/faq" element={lazyElement(FaqPage)} />
        <Route path="/contact" element={lazyElement(ContactSupportPage)} />
        <Route path="/contact-support" element={lazyElement(ContactSupportPage)} />
        <Route path="/news" element={lazyElement(NewsListPage)} />
        <Route path="/news/:newsId" element={lazyElement(NewsDetailsPage)} />
        <Route path="/privacy-policy" element={lazyElement(PrivacyPolicyPage)} />
        <Route path="/terms" element={lazyElement(TermsPage)} />
        <Route path="/article-172-guide" element={lazyElement(Article172GuidePage)} />
        <Route path="/search/states/initial" element={lazyElement(SearchResultsInitialPage)} />
        <Route path="/search/states/loading" element={lazyElement(SearchResultsLoadingPage)} />
        <Route path="/search/states/error" element={lazyElement(SearchResultsErrorPage)} />
        <Route path="/search/states/empty" element={lazyElement(SearchResultsEmptyPage)} />
        <Route path="/search" element={lazyElement(SearchResultsPage)} />
        <Route path="/404" element={lazyElement(NotFoundPage)} />
        <Route path="/registration/track" element={lazyElement(RegistrationTrackPage)} />
        <Route path="/registration/track/states/approved" element={lazyElement(RegistrationTrackApprovedPage)} />
        <Route path="/registration/track/states/not-found" element={lazyElement(RegistrationTrackNotFoundPage)} />
        <Route path="/registration/track/states/error" element={lazyElement(RegistrationTrackErrorPage)} />
        <Route path="/registration/track/states/needs-edit" element={lazyElement(RegistrationTrackNeedsEditPage)} />
        <Route path="/registration/track/states/rejected" element={lazyElement(RegistrationTrackRejectedPage)} />

        <Route path="/auth" element={<AuthEntryPage />} />
        <Route path="/register/company/states/step2" element={lazyElement(CompanyRegistrationStep2Page)} />
        <Route path="/register/company/status" element={lazyElement(CompanyRegistrationStatusPage)} />
        <Route path="/register/company" element={<CompanyRegistrationPage />} />
        <Route path="/register/startup/states/step2" element={lazyElement(StartupRegistrationStep2Page)} />
        <Route path="/register/startup/states/step3" element={lazyElement(StartupRegistrationStep3Page)} />
        <Route path="/register/startup/states/step4" element={lazyElement(StartupRegistrationStep4Page)} />
        <Route path="/register/startup" element={<StartupRegistrationPage />} />

        <Route path="/panel/startup" element={lazyElement(StartupPanelDashboardPage)} />
        <Route path="/panel/startup/projects" element={lazyElement(StartupPanelProjectsPage)} />
        <Route path="/panel/startup/projects/new" element={lazyElement(StartupProjectCreatePage)} />
        <Route path="/panel/startup/projects/new/step-2" element={lazyElement(StartupProjectCreatePage)} />
        <Route path="/panel/startup/projects/new/step-3" element={lazyElement(StartupProjectCreatePage)} />
        <Route path="/panel/startup/projects/new/step-4" element={lazyElement(StartupProjectCreatePage)} />
        <Route path="/panel/startup/projects/submitted" element={lazyElement(StartupProjectSubmittedPage)} />
        <Route path="/panel/startup/stages" element={lazyElement(StartupProjectStagesPage)} />
        <Route path="/panel/startup/reports/:reportId" element={lazyElement(StartupReportDetailPage)} />
        <Route path="/panel/startup/reports" element={lazyElement(StartupReportsPage)} />
        <Route path="/panel/startup/profile/edit/impact-documents" element={lazyElement(StartupProfileEditImpactDocumentsPage)} />
        <Route path="/panel/startup/profile/edit/product-team" element={lazyElement(StartupProfileEditProductTeamPage)} />
        <Route path="/panel/startup/profile/edit" element={lazyElement(StartupProfileEditBasicPage)} />
        <Route path="/panel/startup/profile" element={lazyElement(StartupProfilePage)} />
        <Route path="/panel/startup/financing-fee" element={lazyElement(StartupFinancingFeePage)} />
        <Route path="/panel/startup/settings" element={lazyElement(StartupSettingsPage)} />

        <Route path="/panel/company" element={lazyElement(CompanyPanelDashboardPage)} />
        <Route path="/panel/company/projects" element={lazyElement(CompanyProjectsPage)} />
        <Route path="/panel/company/projects/:projectId" element={lazyElement(CompanyProjectDetailPage)} />
        <Route path="/panel/company/projects/:projectId/participate" element={lazyElement(CompanyProjectParticipationPage)} />
        <Route path="/panel/company/projects/:projectId/participate/success" element={lazyElement(CompanyPaymentSuccessPage)} />
        <Route path="/panel/company/participations" element={lazyElement(CompanyParticipationsPage)} />
        <Route path="/panel/company/participations/:participationId" element={lazyElement(CompanyParticipationDetailPage)} />
        <Route path="/panel/company/reports" element={lazyElement(CompanyReportsPage)} />
        <Route path="/panel/company/reports/:reportId" element={lazyElement(CompanyReportDetailPage)} />
        <Route path="/panel/company/certificates" element={lazyElement(CompanyArticle172CertificatesPage)} />
        <Route path="/panel/company/certificates/:certificateId/issued" element={lazyElement(CompanyArticle172CertificateIssuedPage)} />
        <Route path="/panel/company/certificates/:certificateId" element={lazyElement(CompanyArticle172CertificateDetailPage)} />
        <Route path="/panel/company/account" element={lazyElement(CompanyOrganizationAccountPage)} />
        <Route path="/panel/company/account/edit/organization" element={lazyElement(CompanyEditOrganizationInfoPage)} />
        <Route path="/panel/company/account/edit/representative" element={lazyElement(CompanyEditOrganizationRepresentativePage)} />
        <Route path="/panel/company/account/edit/tax-documents" element={lazyElement(CompanyEditTaxAndDocumentsPage)} />

        <Route path="/panel/admin" element={lazyElement(AdminPanelDashboardPage)} />
        <Route path="/panel/admin/users/new" element={lazyElement(AdminAddUserPage)} />
        <Route path="/panel/admin/roles" element={lazyElement(AdminRoleManagementPage)} />
        <Route path="/panel/admin/users/:userId" element={lazyElement(AdminUserDetailPage)} />
        <Route path="/panel/admin/users" element={lazyElement(AdminUsersRolesPage)} />
        <Route path="/panel/admin/organizations/:organizationId" element={lazyElement(AdminOrganizationDetailPage)} />
        <Route path="/panel/admin/organizations" element={lazyElement(AdminOrganizationsPage)} />
        <Route path="/panel/admin/projects/:projectId" element={lazyElement(AdminProjectDetailPage)} />
        <Route path="/panel/admin/projects" element={lazyElement(AdminProjectsPage)} />
        <Route path="/panel/admin/funding/:fundingId" element={lazyElement(AdminFundingDetailPage)} />
        <Route path="/panel/admin/funding" element={lazyElement(AdminFundingPage)} />
        <Route path="/panel/admin/revenues/:revenueId" element={lazyElement(AdminRevenueDetailPage)} />
        <Route path="/panel/admin/revenues" element={lazyElement(AdminRevenuesPage)} />
        <Route path="/panel/admin/reports/:reportId" element={lazyElement(AdminReportDetailPage)} />
        <Route path="/panel/admin/reports" element={lazyElement(AdminReportsPage)} />
        <Route path="/panel/admin/content" element={lazyElement(AdminContentManagementPage)} />
        <Route path="/panel/admin/settings/access-policy" element={lazyElement(AdminAccessPolicyPage)} />
        <Route path="/panel/admin/settings" element={lazyElement(AdminSettingsPage)} />

        <Route path="/panel/creative-house" element={lazyElement(CreativeHouseDashboardPage)} />
        <Route path="/panel/creative-house/startup-evaluations" element={lazyElement(CreativeHouseStartupEvaluationsPage)} />
        <Route path="/panel/creative-house/startup-evaluations/detail" element={lazyElement(CreativeHouseStartupEvaluationDetailPage)} />
        <Route path="/panel/creative-house/project-evaluations" element={lazyElement(CreativeHouseProjectEvaluationsPage)} />
        <Route path="/panel/creative-house/project-evaluations/detail" element={lazyElement(CreativeHouseProjectEvaluationDetailPage)} />
        <Route path="/panel/creative-house/milestone-evaluations" element={lazyElement(CreativeHouseMilestoneEvaluationsPage)} />
        <Route path="/panel/creative-house/milestone-evaluations/detail" element={lazyElement(CreativeHouseMilestoneEvaluationDetailPage)} />
        <Route path="/panel/creative-house/reports" element={lazyElement(CreativeHouseReportsPage)} />
        <Route path="/panel/creative-house/evaluation-history" element={lazyElement(CreativeHouseEvaluationHistoryPage)} />
        <Route path="/panel/creative-house/settings" element={lazyElement(CreativeHouseSettingsPage)} />
        <Route path="/panel/creative-house/reports/detail" element={lazyElement(CreativeHouseReportDetailPage)} />

        <Route path="/panel/fund-manager" element={lazyElement(FundManagerDashboardPage)} />
        <Route path="/panel/fund-manager/resources" element={lazyElement(FundManagerResourcesPage)} />
        <Route path="/panel/fund-manager/resources/detail" element={lazyElement(FundManagerResourceDetailPage)} />
        <Route path="/panel/fund-manager/investments" element={lazyElement(FundManagerInvestmentsPage)} />
        <Route path="/panel/fund-manager/investments/detail" element={lazyElement(FundManagerInvestmentDetailPage)} />
        <Route path="/panel/fund-manager/profit-returns" element={lazyElement(FundManagerProfitReturnsPage)} />
        <Route path="/panel/fund-manager/profit-returns/detail" element={lazyElement(FundManagerProfitReturnDetailPage)} />
        <Route path="/panel/fund-manager/cycle-returns" element={lazyElement(FundManagerCycleReturnsPage)} />
        <Route path="/panel/fund-manager/cycle-returns/detail" element={lazyElement(FundManagerCycleReturnDetailPage)} />
        <Route path="/panel/fund-manager/profit-split" element={lazyElement(FundManagerProfitSplitPage)} />
        <Route path="/panel/fund-manager/profit-split/detail" element={lazyElement(FundManagerProfitSplitDetailPage)} />
        <Route path="/panel/fund-manager/reports" element={lazyElement(FundManagerReportsPage)} />

        <Route path="/panel/emdad" element={lazyElement(EmdadDashboardPage)} />
        <Route path="/panel/emdad/release-requests" element={lazyElement(EmdadReleaseRequestsPage)} />
        <Route path="/panel/emdad/release-requests/detail" element={lazyElement(EmdadReleaseRequestDetailPage)} />
        <Route path="/panel/emdad/release-requests/success" element={lazyElement(EmdadReleaseSuccessPage)} />
        <Route path="/panel/emdad/article172-approvals" element={lazyElement(EmdadArticle172ApprovalsPage)} />
        <Route path="/panel/emdad/article172-approvals/detail" element={lazyElement(EmdadArticle172RequestDetailPage)} />
        <Route path="/panel/emdad/article172-approvals/success" element={lazyElement(EmdadArticle172SuccessPage)} />
        <Route path="/panel/emdad/payment-history" element={lazyElement(EmdadPaymentHistoryPage)} />
        <Route path="/panel/emdad/payment-history/detail" element={lazyElement(EmdadPaymentDetailPage)} />
        <Route path="/panel/emdad/financial-reports" element={lazyElement(EmdadFinancialReportsPage)} />
        <Route path="/panel/emdad/fund-synergy" element={lazyElement(EmdadFundSynergyPage)} />
        <Route path="/panel/emdad/fund-synergy/allocation" element={lazyElement(EmdadFundSynergyAllocationPage)} />
        <Route path="/panel/emdad/fund-synergy/success" element={lazyElement(EmdadFundSynergySuccessPage)} />
        <Route path="/panel/emdad/fund-synergy/history" element={lazyElement(EmdadFundSynergyHistoryPage)} />
        <Route path="/panel/emdad/fund-returns" element={lazyElement(EmdadFundReturnsPage)} />

        <Route path="/panel/startup/projects/:projectId/stages/:stageId/report/fund-released" element={lazyElement(StartupProjectStageFundReleasedPage)} />
        <Route path="/panel/startup/projects/:projectId/stages/:stageId/report/evaluation/approved" element={lazyElement(StartupProjectStageEvaluationPage)} />
        <Route path="/panel/startup/projects/:projectId/stages/:stageId/report/submitted" element={lazyElement(StartupProjectStageReportSubmittedPage)} />
        <Route path="/panel/startup/projects/:projectId/stages/:stageId/report" element={lazyElement(StartupProjectStageReportPage)} />
        <Route path="/panel/startup/projects/:projectId/stages/:stageId/in-progress" element={lazyElement(StartupProjectStageDetailPage)} />
        <Route path="/panel/startup/projects/:projectId/stages/:stageId" element={lazyElement(StartupProjectStageDetailPage)} />
        <Route path="/panel/startup/projects/:projectId/stages" element={lazyElement(StartupProjectStagesPage)} />
        <Route path="/panel/startup/projects/:projectId" element={lazyElement(StartupProjectDetailPage)} />

        <Route path="/projects" element={lazyElement(ProjectsPage)} />
        <Route path="/projects/states/loading" element={lazyElement(ProjectsLoadingPage)} />
        <Route path="/projects/states/empty" element={lazyElement(ProjectsEmptyPage)} />
        <Route path="/projects/states/error" element={lazyElement(ProjectsErrorPage)} />
        <Route path="/projects/variants/rural-women" element={lazyElement(ProjectRuralWomenPage)} />
        <Route path="/projects/:projectId" element={lazyElement(ProjectDetailsPage)} />
        <Route path="*" element={lazyElement(NotFoundPage)} />
      </Routes>
    </BrowserRouter>
  );
}
