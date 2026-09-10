import { lazy, Suspense } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import CompanyRegistrationPage from "../features/company-registration";
import StartupRegistrationPage from "../features/startup-registration";
import AuthEntryPage from "../page";

const LandingPage = lazy(() => import("../landing/MahLandingPage"));
const AboutPage = lazy(() => import("../about/MahAbout"));
const ForCompaniesPage = lazy(() => import("../companies/MahForCompanies"));
const ForStartupsPage = lazy(() => import("../startups/MahForStartups"));
const HowItWorksPage = lazy(() => import("../how-it-works/MahHowItWorks"));
const ImpactOverviewPage = lazy(() => import("../impact-overview"));
const FaqPage = lazy(() => import("../faq"));
const ContactSupportPage = lazy(() => import("../contact-support"));
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
const faqElement = lazyElement(FaqPage);
const contactSupportElement = lazyElement(ContactSupportPage);
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
        <Route path="/how-it-works" element={howItWorksElement} />
        <Route path="/impact" element={impactOverviewElement} />
        <Route path="/impact-overview" element={impactOverviewElement} />
        <Route path="/faq" element={faqElement} />
        <Route path="/contact" element={contactSupportElement} />
        <Route path="/contact-support" element={contactSupportElement} />
        <Route path="/auth" element={<AuthEntryPage />} />
        <Route path="/register/company" element={<CompanyRegistrationPage />} />
        <Route path="/register/startup" element={<StartupRegistrationPage />} />
        <Route path="/projects" element={projectsElement} />
        <Route path="/projects/:projectId" element={projectDetailsElement} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}
