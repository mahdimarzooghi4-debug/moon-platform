import { getSession } from "../../auth/oidc";

export type AdminMembership = {
  membershipId: string;
  organizationId: string;
  organizationName: string;
  organizationType: string;
  roleId: string;
  roleCode: string;
  roleName: string;
  isActive: boolean;
};

export type AdminUser = {
  userId: string;
  externalSubject: string;
  displayName?: string | null;
  isActive: boolean;
  createdAtUtc: string;
  memberships: AdminMembership[];
};

export type AdminOrganization = {
  organizationId: string;
  name: string;
  type: string;
  status: string;
  createdAtUtc: string;
  activeMemberCount: number;
};

export type AdminRole = {
  roleId: string;
  code: string;
  name: string;
  activeMemberCount: number;
};

class AdminApiError extends Error {
  constructor(public readonly status: number, message: string) {
    super(message);
    this.name = "AdminApiError";
  }
}

const env = import.meta.env as Record<string, string | undefined>;
const apiBaseUrl = (env.VITE_API_BASE_URL ?? "").replace(/\/$/, "");

async function adminRequest<T>(path: string, init?: RequestInit): Promise<T> {
  const session = getSession();
  if (!session) {
    throw new AdminApiError(401, "missing_session");
  }

  const response = await fetch(`${apiBaseUrl}${path}`, {
    ...init,
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${session.accessToken}`,
      ...(init?.body ? { "Content-Type": "application/json" } : {}),
      ...(init?.headers ?? {}),
    },
  });

  if (!response.ok) {
    let message = `admin_api_${response.status}`;
    try {
      const body = (await response.json()) as { code?: string; message?: string };
      message = body.code ?? body.message ?? message;
    } catch {
      // Keep stable error code when response has no JSON body.
    }
    throw new AdminApiError(response.status, message);
  }

  if (response.status === 204) {
    return undefined as T;
  }

  return (await response.json()) as T;
}

export function listAdminUsers() {
  return adminRequest<AdminUser[]>("/api/v1/admin/users");
}

export function getAdminUser(userId: string) {
  return adminRequest<AdminUser>(`/api/v1/admin/users/${encodeURIComponent(userId)}`);
}

export function setAdminUserActive(userId: string, isActive: boolean) {
  return adminRequest<void>(`/api/v1/admin/users/${encodeURIComponent(userId)}/status`, {
    method: "PATCH",
    body: JSON.stringify({ isActive }),
  });
}

export function listAdminOrganizations() {
  return adminRequest<AdminOrganization[]>("/api/v1/admin/organizations");
}

export function createAdminOrganization(input: { name: string; type: string }) {
  return adminRequest<AdminOrganization>("/api/v1/admin/organizations", {
    method: "POST",
    body: JSON.stringify(input),
  });
}

export function setAdminOrganizationStatus(organizationId: string, status: "active" | "inactive") {
  return adminRequest<void>(`/api/v1/admin/organizations/${encodeURIComponent(organizationId)}/status`, {
    method: "PATCH",
    body: JSON.stringify({ status }),
  });
}

export function listAdminRoles() {
  return adminRequest<AdminRole[]>("/api/v1/admin/roles");
}

export function grantAdminMembership(input: { userId: string; organizationId: string; roleCode: string }) {
  return adminRequest<AdminMembership>("/api/v1/admin/memberships", {
    method: "POST",
    body: JSON.stringify(input),
  });
}

export function setAdminMembershipActive(membershipId: string, isActive: boolean) {
  return adminRequest<void>(`/api/v1/admin/memberships/${encodeURIComponent(membershipId)}/status`, {
    method: "PATCH",
    body: JSON.stringify({ isActive }),
  });
}
