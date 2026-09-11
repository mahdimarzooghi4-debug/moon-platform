import { AppProviders } from "./app/AppProviders";
import { AppRouter } from "./app/router";
import { AuthGate } from "./auth/AuthGate";

export default function App() {
  return (
    <AppProviders>
      <AuthGate>
        <AppRouter />
      </AuthGate>
    </AppProviders>
  );
}
