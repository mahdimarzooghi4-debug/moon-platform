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
const RegistrationTrackNeedsEditPage = lazy(() => import("../registration-track/states/needs-edit"));
const RegistrationTrackRejectedPage = lazy(() => import("../registration-track/states/rejected"));
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

const CreativeHouseDashboardPage = lazy(() => import("../panels/creative-house"));
const CreativeHouseStartupEvaluationsPage = lazy(() => import("../panels/creative-house/startup-evaluations"));
const CreativeHouseStartupEvaluationDetailPage = lazy(() => import("../panels/creative-house/startup-evaluation-detail"));
const CreativeHouseProjectEvaluationsPage = lazy(() => import("../panels/creative-house/project-evaluations"));

function lazyElement(Page: React.LazyExoticComponent<React.ComponentType>) {
  return (
    <Suspense fallback={null}>
      <Page />
    </Suspense>
  );
}

const creativeHouseDashboardElement = lazyElement(CreativeHouseDashboardPage);
const creativeHouseStartupEvaluationsElement = lazyElement(CreativeHouseStartupEvaluationsPage);
const creativeHouseStartupEvaluationDetailElement = lazyElement(CreativeHouseStartupEvaluationDetailPage);
const creativeHouseProjectEvaluationsElement = lazyElement(CreativeHouseProjectEvaluationsPage);

const landingElement = lazyElement(LandingPage);
const aboutElement = lazyElement(AboutPage);
const companiesElement = lazyElement(ForCompaniesPage);
const startupsElement = lazyElement(ForStartupsPage);
const howItWorksElement = lazyElement(HowItWorksPage);
const impactOverviewElement = lazyElement(ImpactOverviewPage);
const impactReportsListElement = lazyElement(ImpactReportsListPage);
const impactReportsListLoadingElement = lazyElement(ImpactReportsListLoadingPage);
const impactReportsListEmptyElement = lazyElement(ImpactReportsListEmptyPage);
const impactReportsListNoResultsElement = lazyElement(ImpactReportsListNoResultsPage);
const projectImpactReportElement = lazyElement(ProjectImpactReportPage);
const projectImpactReportFinalElement = lazyElement(ProjectImpactReportFinalPage);
const projectImpactReportPendingElement = lazyElement(ProjectImpactReportPendingPage);
const projectImpactReportPrintElement = lazyElement(ProjectImpactReportPrintPage);
const participationCheckoutElement = lazyElement(ParticipationCheckoutPage);
const participationCheckoutFundedElement = lazyElement(ParticipationCheckoutFundedPage);
const participationCheckoutLoadingElement = lazyElement(ParticipationCheckoutLoadingPage);
const participationCheckoutRedirectingElement = lazyElement(ParticipationCheckoutRedirectingPage);
const participationCheckoutPaymentErrorElement = lazyElement(ParticipationCheckoutPaymentErrorPage);
const participationCheckoutUnavailableElement = lazyElement(ParticipationCheckoutUnavailablePage);
const participationModalElement = lazyElement(ParticipationModalPage);
const participationTrackFormElement = lazyElement(ParticipationTrackFormPage);
const participationTrackOtpElement = lazyElement(ParticipationTrackOtpPage);
const participationTrackListElement = lazyElement(ParticipationTrackListPage);
const participationTrackDetailsElement = lazyElement(ParticipationTrackDetailsPage);
const participationTrackPendingElement = lazyElement(ParticipationTrackPendingPage);
const participationTrackCompletedElement = lazyElement(ParticipationTrackCompletedPage);
const participationTrackFailedElement = lazyElement(ParticipationTrackFailedPage);
const participationTrackEmptyElement = lazyElement(ParticipationTrackEmptyPage);
const paymentResultSuccessElement = lazyElement(PaymentResultSuccessPage);
const paymentResultFailedElement = lazyElement(PaymentResultFailedPage);
const paymentResultPendingElement = lazyElement(PaymentResultPendingPage);
const paymentResultCanceledElement = lazyElement(PaymentResultCanceledPage);
const paymentResultErrorsElement = lazyElement(PaymentResultErrorsPage);
const faqElement = lazyElement(FaqPage);
const contactSupportElement = lazyElement(ContactSupportPage);
const newsListElement = lazyElement(NewsListPage);
const newsDetailsElement = lazyElement(NewsDetailsPage);
const privacyPolicyElement = lazyElement(PrivacyPolicyPage);
const termsElement = lazyElement(TermsPage);
const article172GuideElement = lazyElement(Article172GuidePage);
const searchResultsElement = lazyElement(SearchResultsPage);
const searchResultsInitialElement = lazyElement(SearchResultsInitialPage);
const searchResultsLoadingElement = lazyElement(SearchResultsLoadingPage);
const searchResultsErrorElement = lazyElement(SearchResultsErrorPage);
const registrationTrackNeedsEditElement = lazyElement(RegistrationTrackNeedsEditPage);
const registrationTrackRejectedElement = lazyElement(RegistrationTrackRejectedPage);
const startupRegistrationStep3Element = lazyElement(StartupRegistrationStep3Page);
const startupRegistrationStep4Element = lazyElement(StartupRegistrationStep4Page);
const companyRegistrationStep2Element = lazyElement(CompanyRegistrationStep2Page);
const companyRegistrationStatusElement = lazyElement(CompanyRegistrationStatusPage);
const notFoundElement = lazyElement(NotFoundPage);
const startupsDirectoryElement = lazyElement(StartupsDirectoryPage);
const startupPublicProfileElement = lazyElement(StartupPublicProfilePage);
const startupPublicProfileNoProjectsElement = lazyElement(StartupPublicProfileNoProjectsPage);
const startupShareSheetElement = lazyElement(StartupShareSheetPage);
const projectsElement = lazyElement(ProjectsPage);
const projectsLoadingElement = lazyElement(ProjectsLoadingPage);
const projectsEmptyElement = lazyElement(ProjectsEmptyPage);
const projectsErrorElement = lazyElement(ProjectsErrorPage);
const projectDetailsElement = lazyElement(ProjectDetailsPage);
const projectRuralWomenElement = lazyElement(ProjectRuralWomenPage);

/**
 * Routes are introduced around the existing Figma-derived screens so their
 * visual markup stays unchanged. Future feature branches should be integrated
 * here instead of replacing App.tsx.
 */
export function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={landingElement} />
        <Route path="/about" element={aboutElement} />
        <Route path="/companies" element={companiesElement} />
        <Route path="/for-companies" element={companiesElement} />
        <Route path="/startups" element={startupsElement} />
        <Route path="/for-startups" element={startupsElement} />
        <Route path="/startups-directory" element={startupsDirectoryElement} />
        <Route path="/startups/directory" element={startupsDirectoryElement} />
        <Route path="/startups/profile/states/no-projects" element={startupPublicProfileNoProjectsElement} />
        <Route path="/startups/profile/share" element={startupShareSheetElement} />
        <Route path="/startups/:startupId" element={startupPublicProfileElement} />
        <Route path="/how-it-works" element={howItWorksElement} />
        <Route path="/impact" element={impactOverviewElement} />
        <Route path="/impact-overview" element={impactOverviewElement} />
        <Route path="/impact-reports/states/loading" element={impactReportsListLoadingElement} />
        <Route path="/impact-reports/states/empty" element={impactReportsListEmptyElement} />
        <Route path="/impact-reports/states/no-results" element={impactReportsListNoResultsElement} />
        <Route path="/impact-reports" element={impactReportsListElement} />
        <Route path="/projects/impact-report/states/final" element={projectImpactReportFinalElement} />
        <Route path="/projects/impact-report/states/pending" element={projectImpactReportPendingElement} />
        <Route path="/projects/impact-report/print" element={projectImpactReportPrintElement} />
        <Route path="/projects/:projectId/impact-report" element={projectImpactReportElement} />
        <Route path="/participation/checkout" element={participationCheckoutElement} />
        <Route path="/projects/:projectId/participate" element={participationCheckoutElement} />
        <Route path="/participation/checkout/funded" element={participationCheckoutFundedElement} />
        <Route path="/projects/:projectId/participate/funded" element={participationCheckoutFundedElement} />
        <Route path="/participation/checkout/loading" element={participationCheckoutLoadingElement} />
        <Route path="/projects/:projectId/participate/loading" element={participationCheckoutLoadingElement} />
        <Route path="/participation/checkout/redirecting" element={participationCheckoutRedirectingElement} />
        <Route path="/projects/:projectId/participate/redirecting" element={participationCheckoutRedirectingElement} />
        <Route path="/participation/checkout/payment-error" element={participationCheckoutPaymentErrorElement} />
        <Route path="/projects/:projectId/participate/payment-error" element={participationCheckoutPaymentErrorElement} />
        <Route path="/participation/checkout/unavailable" element={participationCheckoutUnavailableElement} />
        <Route path="/projects/:projectId/participate/unavailable" element={participationCheckoutUnavailableElement} />
        <Route path="/participation/modal" element={participationModalElement} />
        <Route path="/participation/track" element={participationTrackFormElement} />
        <Route path="/participation/track/form" element={participationTrackFormElement} />
        <Route path="/participation/track/otp" element={participationTrackOtpElement} />
        <Route path="/participation/track/list" element={participationTrackListElement} />
        <Route path="/participation/track/details" element={participationTrackDetailsElement} />
        <Route path="/participation/track/pending" element={participationTrackPendingElement} />
        <Route path="/participation/track/completed" element={participationTrackCompletedElement} />
        <Route path="/participation/track/failed" element={participationTrackFailedElement} />
        <Route path="/participation/track/empty" element={participationTrackEmptyElement} />
        <Route path="/participation/track/:participationId" element={participationTrackDetailsElement} />
        <Route path="/payment/result/success" element={paymentResultSuccessElement} />
        <Route path="/payment/result/failed" element={paymentResultFailedElement} />
        <Route path="/payment/result/pending" element={paymentResultPendingElement} />
        <Route path="/payment/result/canceled" element={paymentResultCanceledElement} />
        <Route path="/payment/result/errors" element={paymentResultErrorsElement} />
        <Route path="/faq" element={faqElement} />
        <Route path="/contact" element={contactSupportElement} />
        <Route path="/contact-support" element={contactSupportElement} />
        <Route path="/news" element={newsListElement} />
        <Route path="/news/:newsId" element={newsDetailsElement} />
        <Route path="/privacy-policy" element={privacyPolicyElement} />
        <Route path="/terms" element={termsElement} />
        <Route path="/article-172-guide" element={article172GuideElement} />
        <Route path="/search/states/initial" element={searchResultsInitialElement} />
        <Route path="/search/states/loading" element={searchResultsLoadingElement} />
        <Route path="/search/states/error" element={searchResultsErrorElement} />
        <Route path="/search" element={searchResultsElement} />
        <Route path="/404" element={notFoundElement} />
        <Route path="/registration/track/states/needs-edit" element={registrationTrackNeedsEditElement} />
        <Route path="/registration/track/states/rejected" element={registrationTrackRejectedElement} />
        <Route path="/panel/creative-house" element={creativeHouseDashboardElement} />
        <Route path="/panel/creative-house/startup-evaluations" element={creativeHouseStartupEvaluationsElement} />
        <Route path="/panel/creative-house/startup-evaluations/detail" element={creativeHouseStartupEvaluationDetailElement} />
        <Route path="/panel/creative-house/project-evaluations" element={creativeHouseProjectEvaluationsElement} />
        <Route path="/auth" element={<AuthEntryPage />} />
        <Route path="/register/company/states/step2" element={companyRegistrationStep2Element} />
        <Route path="/register/company/status" element={companyRegistrationStatusElement} />
        <Route path="/register/company" element={<CompanyRegistrationPage />} />
        <Route path="/register/startup/states/step3" element={startupRegistrationStep3Element} />
        <Route path="/register/startup/states/step4" element={startupRegistrationStep4Element} />
        <Route path="/register/startup" element={<StartupRegistrationPage />} />
        <Route path="/projects" element={projectsElement} />
        <Route path="/projects/states/loading" element={projectsLoadingElement} />
        <Route path="/projects/states/empty" element={projectsEmptyElement} />
        <Route path="/projects/states/error" element={projectsErrorElement} />
        <Route path="/projects/variants/rural-women" element={projectRuralWomenElement} />
        <Route path="/projects/:projectId" element={projectDetailsElement} />
        <Route path="*" element={notFoundElement} />
      </Routes>
    </BrowserRouter>
  );
}
