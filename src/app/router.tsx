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
const ProjectImpactReportPage = lazy(() => import("../project-impact-report"));
const ParticipationCheckoutPage = lazy(() => import("../participation-checkout"));
const ParticipationCheckoutFundedPage = lazy(() => import("../participation-checkout/funded"));
const ParticipationCheckoutLoadingPage = lazy(() => import("../participation-checkout/loading"));
const ParticipationCheckoutRedirectingPage = lazy(() => import("../participation-checkout/redirecting"));
const ParticipationCheckoutPaymentErrorPage = lazy(() => import("../participation-checkout/payment-error"));
const ParticipationCheckoutUnavailablePage = lazy(() => import("../participation-checkout/unavailable"));
const ParticipationModalPage = lazy(() => import("../participation-modal"));
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
const NotFoundPage = lazy(() => import("../not-found"));
const StartupsDirectoryPage = lazy(() => import("../startups-directory"));
const StartupPublicProfilePage = lazy(() => import("../startup-public-profile"));
const ProjectsPage = lazy(() => import("../features/projects/MahProjects"));
const ProjectDetailsPage = lazy(() => import("../features/project-details"));

function lazyElement(Page: React.LazyExoticComponent<React.ComponentType>) {
  return (
    <Suspense fallback={null}>
      <Page />
    </Suspense>
  );
}

const landingElement = lazyElement(LandingPage);
const aboutElement = lazyElement(AboutPage);
const companiesElement = lazyElement(ForCompaniesPage);
const startupsElement = lazyElement(ForStartupsPage);
const howItWorksElement = lazyElement(HowItWorksPage);
const impactOverviewElement = lazyElement(ImpactOverviewPage);
const impactReportsListElement = lazyElement(ImpactReportsListPage);
const projectImpactReportElement = lazyElement(ProjectImpactReportPage);
const participationCheckoutElement = lazyElement(ParticipationCheckoutPage);
const participationCheckoutFundedElement = lazyElement(ParticipationCheckoutFundedPage);
const participationCheckoutLoadingElement = lazyElement(ParticipationCheckoutLoadingPage);
const participationCheckoutRedirectingElement = lazyElement(ParticipationCheckoutRedirectingPage);
const participationCheckoutPaymentErrorElement = lazyElement(ParticipationCheckoutPaymentErrorPage);
const participationCheckoutUnavailableElement = lazyElement(ParticipationCheckoutUnavailablePage);
const participationModalElement = lazyElement(ParticipationModalPage);
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
const notFoundElement = lazyElement(NotFoundPage);
const startupsDirectoryElement = lazyElement(StartupsDirectoryPage);
const startupPublicProfileElement = lazyElement(StartupPublicProfilePage);
const projectsElement = lazyElement(ProjectsPage);
const projectDetailsElement = lazyElement(ProjectDetailsPage);

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
        <Route path="/startups/:startupId" element={startupPublicProfileElement} />
        <Route path="/how-it-works" element={howItWorksElement} />
        <Route path="/impact" element={impactOverviewElement} />
        <Route path="/impact-overview" element={impactOverviewElement} />
        <Route path="/impact-reports" element={impactReportsListElement} />
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
        <Route path="/search" element={searchResultsElement} />
        <Route path="/404" element={notFoundElement} />
        <Route path="/auth" element={<AuthEntryPage />} />
        <Route path="/register/company" element={<CompanyRegistrationPage />} />
        <Route path="/register/startup" element={<StartupRegistrationPage />} />
        <Route path="/projects" element={projectsElement} />
        <Route path="/projects/:projectId" element={projectDetailsElement} />
        <Route path="*" element={notFoundElement} />
      </Routes>
    </BrowserRouter>
  );
}
