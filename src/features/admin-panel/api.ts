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
const useDevelopmentFallback = Boolean(import.meta.env.DEV);

const demoRoles: AdminRole[] = [
  { roleId: "role-system-admin", code: "system_admin", name: "مدیر سامانه", activeMemberCount: 1 },
  { roleId: "role-creative-house", code: "creative_house", name: "کارشناس خانه خلاق", activeMemberCount: 1 },
  { roleId: "role-emdad", code: "emdad", name: "کارشناس کمیته امداد", activeMemberCount: 1 },
  { roleId: "role-fund-manager", code: "fund_manager", name: "مدیر صندوق ماه", activeMemberCount: 1 },
  { roleId: "role-company", code: "company_manager", name: "نماینده شرکت", activeMemberCount: 2 },
  { roleId: "role-startup", code: "startup_manager", name: "مدیر استارتاپ", activeMemberCount: 1 },
  { roleId: "role-auditor", code: "auditor", name: "ناظر و گزارش‌گیر", activeMemberCount: 1 },
];

const demoUsers: AdminUser[] = [
  {
    userId: "demo-user-001",
    externalSubject: "demo-system-admin-001",
    displayName: "مدیر سامانه ماه",
    isActive: true,
    createdAtUtc: "2026-08-20T08:30:00Z",
    memberships: [
      {
        membershipId: "demo-membership-001",
        organizationId: "org-mah",
        organizationName: "سامانه ماه",
        organizationType: "platform",
        roleId: "role-system-admin",
        roleCode: "system_admin",
        roleName: "مدیر سامانه",
        isActive: true,
      },
    ],
  },
  {
    userId: "demo-user-002",
    externalSubject: "demo-creative-house-002",
    displayName: "نگار رضایی",
    isActive: true,
    createdAtUtc: "2026-08-22T10:15:00Z",
    memberships: [
      {
        membershipId: "demo-membership-002",
        organizationId: "org-creative-house",
        organizationName: "خانه خلاق و نوآوری ماه",
        organizationType: "creative_house",
        roleId: "role-creative-house",
        roleCode: "creative_house",
        roleName: "کارشناس خانه خلاق",
        isActive: true,
      },
    ],
  },
  {
    userId: "demo-user-003",
    externalSubject: "demo-emdad-003",
    displayName: "علی مرادی",
    isActive: true,
    createdAtUtc: "2026-08-24T09:20:00Z",
    memberships: [
      {
        membershipId: "demo-membership-003",
        organizationId: "org-emdad",
        organizationName: "کمیته امداد",
        organizationType: "emdad",
        roleId: "role-emdad",
        roleCode: "emdad",
        roleName: "کارشناس کمیته امداد",
        isActive: true,
      },
    ],
  },
  {
    userId: "demo-user-004",
    externalSubject: "demo-fund-004",
    displayName: "سارا احمدی",
    isActive: true,
    createdAtUtc: "2026-08-26T11:45:00Z",
    memberships: [
      {
        membershipId: "demo-membership-004",
        organizationId: "org-mah-fund",
        organizationName: "صندوق ماه",
        organizationType: "fund",
        roleId: "role-fund-manager",
        roleCode: "fund_manager",
        roleName: "مدیر صندوق ماه",
        isActive: true,
      },
    ],
  },
  {
    userId: "demo-user-005",
    externalSubject: "demo-company-005",
    displayName: "مریم کریمی",
    isActive: true,
    createdAtUtc: "2026-08-28T07:50:00Z",
    memberships: [
      {
        membershipId: "demo-membership-005",
        organizationId: "org-company-a",
        organizationName: "شرکت توسعه پایدار آفتاب",
        organizationType: "company",
        roleId: "role-company",
        roleCode: "company_manager",
        roleName: "نماینده شرکت",
        isActive: true,
      },
    ],
  },
  {
    userId: "demo-user-006",
    externalSubject: "demo-company-006",
    displayName: "رضا نادری",
    isActive: true,
    createdAtUtc: "2026-08-29T13:10:00Z",
    memberships: [
      {
        membershipId: "demo-membership-006",
        organizationId: "org-company-b",
        organizationName: "شرکت راهکار نوین فردا",
        organizationType: "company",
        roleId: "role-company",
        roleCode: "company_manager",
        roleName: "نماینده شرکت",
        isActive: true,
      },
    ],
  },
  {
    userId: "demo-user-007",
    externalSubject: "demo-startup-007",
    displayName: "الهام موسوی",
    isActive: true,
    createdAtUtc: "2026-09-01T08:40:00Z",
    memberships: [
      {
        membershipId: "demo-membership-007",
        organizationId: "org-startup-a",
        organizationName: "استارتاپ مسیر سبز",
        organizationType: "startup",
        roleId: "role-startup",
        roleCode: "startup_manager",
        roleName: "مدیر استارتاپ",
        isActive: true,
      },
      {
        membershipId: "demo-membership-008",
        organizationId: "org-mah",
        organizationName: "سامانه ماه",
        organizationType: "platform",
        roleId: "role-auditor",
        roleCode: "auditor",
        roleName: "ناظر و گزارش‌گیر",
        isActive: true,
      },
    ],
  },
  {
    userId: "demo-user-008",
    externalSubject: "demo-pending-008",
    displayName: "کاربر در انتظار تخصیص",
    isActive: true,
    createdAtUtc: "2026-09-03T12:00:00Z",
    memberships: [],
  },
  {
    userId: "demo-user-009",
    externalSubject: "demo-blocked-009",
    displayName: "کاربر غیرفعال نمونه",
    isActive: false,
    createdAtUtc: "2026-09-04T14:25:00Z",
    memberships: [],
  },
];

function developmentFallback<T>(request: Promise<T>, fallback: T): Promise<T> {
  if (!useDevelopmentFallback) return request;
  return request.catch(() => fallback);
}

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
  return developmentFallback(adminRequest<AdminUser[]>("/api/v1/admin/users"), demoUsers);
}

export function getAdminUser(userId: string) {
  const fallback = demoUsers.find((user) => user.userId === userId);
  if (!fallback) return adminRequest<AdminUser>(`/api/v1/admin/users/${encodeURIComponent(userId)}`);
  return developmentFallback(adminRequest<AdminUser>(`/api/v1/admin/users/${encodeURIComponent(userId)}`), fallback);
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
  return developmentFallback(adminRequest<AdminRole[]>("/api/v1/admin/roles"), demoRoles);
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
