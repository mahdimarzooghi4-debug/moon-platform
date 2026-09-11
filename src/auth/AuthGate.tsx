import type { ReactNode } from "react";
import { useEffect, useState } from "react";
import {
  canAccessPanelPath,
  clearSession,
  completeLogin,
  defaultPanelForRoles,
  getSession,
} from "./oidc";

function CallbackScreen() {
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    let active = true;

    completeLogin(window.location.search)
      .then(({ session, pending }) => {
        if (!active) return;
        const requested = pending.returnTo;
        const destination =
          requested && canAccessPanelPath(session.roles, requested)
            ? requested
            : defaultPanelForRoles(session.roles);

        if (!destination) {
          clearSession();
          window.location.replace("/auth?error=no-panel-access");
          return;
        }

        window.location.replace(destination);
      })
      .catch(() => {
        if (!active) return;
        clearSession();
        setFailed(true);
        window.setTimeout(() => window.location.replace("/auth?error=callback"), 800);
      });

    return () => {
      active = false;
    };
  }, []);

  return (
    <main
      dir="rtl"
      className="min-h-screen flex items-center justify-center bg-[#F6F9FB] text-[#4D5A6D]"
      style={{ fontFamily: "'Vazirmatn', sans-serif" }}
    >
      <p>{failed ? "ورود کامل نشد؛ در حال بازگشت..." : "در حال تکمیل ورود امن..."}</p>
    </main>
  );
}

export function AuthGate({ children }: { children: ReactNode }) {
  const pathname = window.location.pathname;

  if (pathname === "/auth/callback") {
    return <CallbackScreen />;
  }

  if (!pathname.startsWith("/panel/")) {
    return <>{children}</>;
  }

  const session = getSession();
  if (!session) {
    const returnTo = `${window.location.pathname}${window.location.search}`;
    window.location.replace(`/auth?returnTo=${encodeURIComponent(returnTo)}`);
    return null;
  }

  if (!canAccessPanelPath(session.roles, pathname)) {
    window.location.replace("/auth?error=forbidden");
    return null;
  }

  return <>{children}</>;
}
