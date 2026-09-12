import { AppProviders } from "./app/AppProviders";
import { AppRouter } from "./app/router";
import { AuthGate } from "./auth/AuthGate";
import PublicFooter from "./shared/PublicFooter";
import StartupTeamMemberAddPage from "./features/startup-registration/states/step2/team-member";
import ProjectImpactDocumentsPage from "./project-impact-report/documents";

const STARTUP_TEAM_MEMBER_PATH = "/register/startup/states/step2/team-member/new";
const PROJECT_IMPACT_DOCUMENTS_PATH = "/projects/impact-report/documents";

export default function App() {
  const isStartupTeamMemberPage = window.location.pathname === STARTUP_TEAM_MEMBER_PATH;
  const isProjectImpactDocumentsPage = window.location.pathname === PROJECT_IMPACT_DOCUMENTS_PATH;

  return (
    <AppProviders>
      <AuthGate>
        {isStartupTeamMemberPage ? (
          <StartupTeamMemberAddPage />
        ) : isProjectImpactDocumentsPage ? (
          <ProjectImpactDocumentsPage />
        ) : (
          <AppRouter />
        )}
        <PublicFooter />
      </AuthGate>
    </AppProviders>
  );
}
