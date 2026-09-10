import { lazy, Suspense } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import CompanyRegistrationPage from "../features/company-registration";
import StartupRegistrationPage from "../features/startup-registration";
import AuthEntryPage from "../page";

const LandingPage = lazy(() => import("../landing/MahLandingPage"));
const ProjectsPage = lazy(() => import("../features/projects/MahProjects"));
const ProjectDetailsPage = lazy(() => import("../features/project-details"));

const landingElement = (
  <Suspense fallback={null}>
    <LandingPage />
  </Suspense>
);

const projectsElement = (
  <Suspense fallback={null}>
    <ProjectsPage />
  </Suspense>
);

const projectDetailsElement = (
  <Suspense fallback={null}>
    <ProjectDetailsPage />
  </Suspense>
);

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
