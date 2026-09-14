import type { ReactNode } from "react";
import { useEffect, useState } from "react";
import {
  getCurrentIdentity,
  panelRolesFromIdentity,
  syncIdentity,
} from "./api";
import {
  type AccountType,
  canAccessPanelPath,
  clearSession,
  completeLogin,
  defaultPanelForRoles,
  getSession,
  setSessionPanelRoles,
} from "./oidc";

const DEV_PANEL_PREVIEW_KEY = "moon.auth.dev-panel-preview";

function rolesForAccountType(roles: string[], accountType: AccountType) {
  if (accountType === "company") {
    return roles.filter((role) => role === "company");
  }

  if (accountType === "startup") {
    return roles.filter((role) => role === "startup");
  }

  return roles.filter((role) => role !== "company" && role !== "startup");
}

function canUseDevPanelPreview(pathname: string) {
  if (!import.meta.env.DEV) return false;

  const accountType = sessionStorage.getItem(DEV_PANEL_PREVIEW_KEY) as AccountType | null;
  if (accountType === "company") {
    return pathname === "/panel/company" || pathname.startsWith("/panel/company/");
  }
  if (accountType === "startup") {
    return pathname === "/panel/startup" || pathname.startsWith("/panel/startup/");
  }
  if (accountType === "internal") {
    return [
      "/panel/admin",
      "/panel/creative-house",
      "/panel/fund-manager",
      "/panel/emdad",
    ].some((prefix) => pathname === prefix || pathname.startsWith(`${prefix}/`));
  }
  return false;
}

function LoadingScreen({ failed = false }: { failed?: boolean }) {
  return (
    <main
      dir="rtl"
      className="min-h-screen flex items-center justify-center bg-[#F6F9FB] text-[#4D5A6D]"
      style={{ fontFamily: "'Vazirmatn', sans-serif" }}
    >
      <p>{failed ? "ورود کامل نشد؛ در حال بازگشت..." : "در حال بررسی دسترسی امن..."}</p>
    </main>
  );
}

function CallbackScreen() {
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    let active = true;

    completeLogin(window.location.search)
      .then(async ({ session, pending }) => {
        const identity = await syncIdentity(session);
        if (!active) return;

        const panelRoles = panelRolesFromIdentity(identity);
        setSessionPanelRoles(panelRoles);

        const accountRoles = rolesForAccountType(panelRoles, pending.accountType);
        const requested = pending.returnTo;
        const destination =
          requested && canAccessPanelPath(accountRoles, requested)
            ? requested
            : defaultPanelForRoles(accountRoles);

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

  return <LoadingScreen failed={failed} />;
}

function ProtectedPanelGate({ children, pathname }: { children: ReactNode; pathname: string }) {
  const [allowed, setAllowed] = useState(false);

  useEffect(() => {
    let active = true;
    const session = getSession();

    if (!session) {
      const returnTo = `${window.location.pathname}${window.location.search}`;
      window.location.replace(`/auth?returnTo=${encodeURIComponent(returnTo)}`);
      return () => {
        active = false;
      };
    }

    getCurrentIdentity(session)
      .then((identity) => {
        if (!active) return;

        const panelRoles = panelRolesFromIdentity(identity);
        setSessionPanelRoles(panelRoles);

        if (!canAccessPanelPath(panelRoles, pathname)) {
          window.location.replace("/auth?error=forbidden");
          return;
        }

        setAllowed(true);
      })
      .catch(() => {
        if (!active) return;
        clearSession();
        const returnTo = `${window.location.pathname}${window.location.search}`;
        window.location.replace(`/auth?error=session&returnTo=${encodeURIComponent(returnTo)}`);
      });

    return () => {
      active = false;
    };
  }, [pathname]);

  return allowed ? <>{children}</> : <LoadingScreen />;
}

export function AuthGate({ children }: { children: ReactNode }) {
  const pathname = window.location.pathname;

  if (pathname === "/auth/callback") {
    return <CallbackScreen />;
  }

  if (!pathname.startsWith("/panel/")) {
    return <>{children}</>;
  }

  if (canUseDevPanelPreview(pathname)) {
    return <>{children}</>;
  }

  return <ProtectedPanelGate pathname={pathname}>{children}</ProtectedPanelGate>;
}
