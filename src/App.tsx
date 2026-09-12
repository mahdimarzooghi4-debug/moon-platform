import { AppProviders } from "./app/AppProviders";
import { AppRouter } from "./app/router";
import { AuthGate } from "./auth/AuthGate";
import PublicFooter from "./shared/PublicFooter";

export default function App() {
  return (
    <AppProviders>
      <AuthGate>
        <AppRouter />
        <PublicFooter />
      </AuthGate>
    </AppProviders>
  );
}
