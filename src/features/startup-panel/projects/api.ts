import { getCurrentIdentity } from "../../../auth/api";
import { getValidSession } from "../../../auth/oidc";
import { apiRequest } from "../../../lib/api/client";

export type ProjectProposalData = Record<string, unknown>;

export type ProjectVersion = {
  versionId: string;
  versionNumber: number;
  title: string;
  description: string;
  proposalData?: ProjectProposalData | null;
  fundingTargetMinor?: number | null;
  fundingTargetCurrency?: string | null;
  isLocked: boolean;
  createdAtUtc: string;
};

export type StartupProject = {
  projectId: string;
  organizationId: string;
  status: "draft" | "submitted" | "approved" | "rejected" | "published" | string;
  currentVersionNumber: number;
  createdAtUtc: string;
  submittedAtUtc?: string | null;
  versions: ProjectVersion[];
};

export type ProjectDraftInput = {
  title: string;
  description: string;
  fundingTargetMinor: number | null;
  fundingTargetCurrency: "IRR" | null;
  proposalData: ProjectProposalData;
};

export async function getStartupOrganizationId() {
  const session = await getValidSession();
  if (!session) throw new Error("missing_session");

  const identity = await getCurrentIdentity(session);
  const membership = identity.memberships.find(
    (item) => item.organizationType.toLowerCase() === "startup" && item.roleCode.toLowerCase() === "startup",
  ) ?? identity.memberships.find((item) => item.organizationType.toLowerCase() === "startup");

  if (!membership) throw new Error("startup_organization_membership_required");
  return { organizationId: membership.organizationId, accessToken: session.accessToken };
}

export function listStartupProjects(organizationId: string, accessToken: string) {
  return apiRequest<StartupProject[]>(`/api/v1/projects/organization/${encodeURIComponent(organizationId)}`, {
    accessToken,
  });
}

export function getStartupProject(projectId: string, accessToken: string) {
  return apiRequest<StartupProject>(`/api/v1/projects/${encodeURIComponent(projectId)}`, { accessToken });
}

export function createStartupProject(organizationId: string, input: ProjectDraftInput, accessToken: string) {
  return apiRequest<StartupProject>("/api/v1/projects", {
    method: "POST",
    accessToken,
    body: { organizationId, ...input },
  });
}

export function saveStartupProjectVersion(projectId: string, input: ProjectDraftInput, accessToken: string) {
  return apiRequest<StartupProject>(`/api/v1/projects/${encodeURIComponent(projectId)}/versions`, {
    method: "POST",
    accessToken,
    body: input,
  });
}

export function submitStartupProject(projectId: string, accessToken: string) {
  return apiRequest<StartupProject>(`/api/v1/projects/${encodeURIComponent(projectId)}/submit`, {
    method: "POST",
    accessToken,
  });
}

export function currentProjectVersion(project: StartupProject) {
  const current = project.versions.find((version) => version.versionNumber === project.currentVersionNumber);
  return current ?? (project.versions.length ? project.versions[project.versions.length - 1] : null);
}

export function formatProjectStatus(status: StartupProject["status"]) {
  const labels: Record<string, string> = {
    draft: "پیش‌نویس",
    submitted: "در انتظار ارزیابی",
    approved: "تأییدشده",
    rejected: "نیازمند اصلاح",
    published: "منتشرشده",
  };
  return labels[status] ?? "در حال بررسی";
}
