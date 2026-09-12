import { AppProviders } from "./app/AppProviders";
import { AppRouter } from "./app/router";
import { AuthGate } from "./auth/AuthGate";
import PublicFooter from "./shared/PublicFooter";
import StartupTeamMemberAddPage from "./features/startup-registration/states/step2/team-member";

const STARTUP_TEAM_MEMBER_PATH = "/register/startup/states/step2/team-member/new";

export default function App() {
  const isStartupTeamMemberPage = window.location.pathname === STARTUP_TEAM_MEMBER_PATH;

  return (
    <AppProviders>
      <AuthGate>
        {isStartupTeamMemberPage ? <StartupTeamMemberAddPage /> : <AppRouter />}
        <PublicFooter />
      </AuthGate>
    </AppProviders>
  );
}
