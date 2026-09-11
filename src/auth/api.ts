import type { AuthSession } from "./oidc";

export type CurrentMembership = {
  membershipId: string;
  organizationId: string;
  organizationName: string;
  organizationType: string;
  roleCode: string;
  roleName: string;
};

export type CurrentIdentity = {
  userId: string;
  externalSubject: string;
  displayName?: string | null;
  isActive: boolean;
  identityRoles: string[];
  memberships: CurrentMembership[];
};

export class IdentityApiError extends Error {
  constructor(
    public readonly status: number,
    message: string,
  ) {
    super(message);
    this.name = "IdentityApiError";
  }
}

const env = import.meta.env as Record<string, string | undefined>;
const apiBaseUrl = (env.VITE_API_BASE_URL ?? "").replace(/\/$/, "");

async function identityRequest(
  path: string,
  session: AuthSession,
  init?: RequestInit,
): Promise<CurrentIdentity> {
  const response = await fetch(`${apiBaseUrl}${path}`, {
    ...init,
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${session.accessToken}`,
      ...(init?.headers ?? {}),
    },
  });

  if (!response.ok) {
    throw new IdentityApiError(response.status, `identity_api_${response.status}`);
  }

  return (await response.json()) as CurrentIdentity;
}

export function syncIdentity(session: AuthSession) {
  return identityRequest("/api/v1/session/sync", session, { method: "POST" });
}

export function getCurrentIdentity(session: AuthSession) {
  return identityRequest("/api/v1/me", session);
}

const GLOBAL_PANEL_ROLES = new Set([
  "system_admin",
  "product_owner",
  "evaluator",
  "finance",
  "supervisor",
  "auditor",
]);

export function panelRolesFromIdentity(identity: CurrentIdentity) {
  const roles = new Set<string>();

  for (const membership of identity.memberships) {
    roles.add(membership.roleCode);
  }

  for (const role of identity.identityRoles) {
    if (GLOBAL_PANEL_ROLES.has(role)) {
      roles.add(role);
    }
  }

  return [...roles];
}
