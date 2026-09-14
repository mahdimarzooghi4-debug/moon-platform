import { getSession } from "../../auth/oidc";

const env = import.meta.env as Record<string, string | undefined>;
const apiBaseUrl = (env.VITE_API_BASE_URL ?? "").replace(/\/$/, "");

export type AdminOrganizationProfile = {
  organizationId: string;
  name: string;
  manager: string;
  mobile: string;
  activityArea: string;
  updatedAtUtc: string;
};

export type AdminManagedProject = {
  id: string;
  name: string;
  province: string;
  track: string;
  fundingPercent: number;
  fundingTarget: string;
  status: "فعال" | "متوقف" | "در انتظار گزارش";
  stage: string;
  updatedAtUtc: string;
};

export type AdminManagedNews = {
  id: string;
  title: string;
  summary: string;
  status: "published" | "draft";
  updatedAtUtc: string;
};

export type AdminNewsImageMeta = {
  newsId: string;
  fileName: string;
  contentType: string;
  size: number;
  updatedAtUtc: string;
};

export type AdminHeroVideoMeta = {
  fileName: string;
  contentType: string;
  size: number;
  updatedAtUtc: string;
};

async function authorizedRequest<T>(path: string, init?: RequestInit): Promise<T> {
  const session = getSession();
  if (!session) throw new Error("missing_session");

  const isFormData = init?.body instanceof FormData;
  const response = await fetch(`${apiBaseUrl}${path}`, {
    ...init,
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${session.accessToken}`,
      ...(!isFormData && init?.body ? { "Content-Type": "application/json" } : {}),
      ...(init?.headers ?? {}),
    },
  });

  if (!response.ok) {
    let message = `admin_management_api_${response.status}`;
    try {
      const body = (await response.json()) as { code?: string; message?: string };
      message = body.code ?? body.message ?? message;
    } catch {
      // Keep stable fallback message.
    }
    throw new Error(message);
  }

  if (response.status === 204) return null as T;
  return (await response.json()) as T;
}

async function authorizedBlobRequest(path: string): Promise<Blob | null> {
  const session = getSession();
  if (!session) throw new Error("missing_session");

  const response = await fetch(`${apiBaseUrl}${path}`, {
    headers: {
      Accept: "image/*",
      Authorization: `Bearer ${session.accessToken}`,
    },
  });
  if (response.status === 404 || response.status === 204) return null;
  if (!response.ok) throw new Error(`admin_management_blob_${response.status}`);
  return response.blob();
}

export function listAdminOrganizationProfiles() {
  return authorizedRequest<AdminOrganizationProfile[]>("/api/v1/admin/management/organization-profiles");
}

export function getAdminOrganizationProfile(organizationId: string) {
  return authorizedRequest<AdminOrganizationProfile>(`/api/v1/admin/management/organization-profiles/${encodeURIComponent(organizationId)}`);
}

export function saveAdminOrganizationProfile(
  organizationId: string,
  input: Pick<AdminOrganizationProfile, "name" | "manager" | "mobile" | "activityArea">,
) {
  return authorizedRequest<AdminOrganizationProfile>(`/api/v1/admin/management/organization-profiles/${encodeURIComponent(organizationId)}`, {
    method: "PUT",
    body: JSON.stringify(input),
  });
}

export function listAdminManagedProjects() {
  return authorizedRequest<AdminManagedProject[]>("/api/v1/admin/management/projects");
}

export function getAdminManagedProject(id: string) {
  return authorizedRequest<AdminManagedProject>(`/api/v1/admin/management/projects/${encodeURIComponent(id)}`);
}

export function saveAdminManagedProject(
  id: string,
  input: Omit<AdminManagedProject, "id" | "updatedAtUtc">,
) {
  return authorizedRequest<AdminManagedProject>(`/api/v1/admin/management/projects/${encodeURIComponent(id)}`, {
    method: "PUT",
    body: JSON.stringify(input),
  });
}

export function listAdminManagedNews() {
  return authorizedRequest<AdminManagedNews[]>("/api/v1/admin/management/content/news");
}

export function saveAdminManagedNews(input: Omit<AdminManagedNews, "updatedAtUtc">) {
  return authorizedRequest<AdminManagedNews>("/api/v1/admin/management/content/news", {
    method: "PUT",
    body: JSON.stringify(input),
  });
}

export function deleteAdminManagedNews(id: string) {
  return authorizedRequest<void>(`/api/v1/admin/management/content/news/${encodeURIComponent(id)}`, { method: "DELETE" });
}

export function loadAdminNewsImage(id: string) {
  return authorizedBlobRequest(`/api/v1/admin/management/content/news/${encodeURIComponent(id)}/image`);
}

export function saveAdminNewsImage(id: string, file: File) {
  const body = new FormData();
  body.append("file", file, file.name);
  return authorizedRequest<AdminNewsImageMeta>(`/api/v1/admin/management/content/news/${encodeURIComponent(id)}/image`, {
    method: "PUT",
    body,
  });
}

export function deleteAdminNewsImage(id: string) {
  return authorizedRequest<void>(`/api/v1/admin/management/content/news/${encodeURIComponent(id)}/image`, { method: "DELETE" });
}

export function publicNewsImageUrl(id: string) {
  return `${apiBaseUrl}/api/v1/public/content/news/${encodeURIComponent(id)}/image`;
}

export async function loadPublicNewsImage(id: string): Promise<Blob | null> {
  const response = await fetch(publicNewsImageUrl(id), { headers: { Accept: "image/*" } });
  if (response.status === 404 || response.status === 204) return null;
  if (!response.ok) throw new Error(`public_news_image_${response.status}`);
  return response.blob();
}

export function getAdminHeroVideoMeta() {
  return authorizedRequest<AdminHeroVideoMeta | null>("/api/v1/admin/management/content/hero/meta");
}

export function saveAdminHeroVideo(file: File) {
  const body = new FormData();
  body.append("file", file, file.name);
  return authorizedRequest<AdminHeroVideoMeta>("/api/v1/admin/management/content/hero", { method: "PUT", body });
}

export function deleteAdminHeroVideo() {
  return authorizedRequest<void>("/api/v1/admin/management/content/hero", { method: "DELETE" });
}

export async function loadPublicHeroVideo(): Promise<Blob | null> {
  const response = await fetch(`${apiBaseUrl}/api/v1/public/content/hero`, { headers: { Accept: "video/*" } });
  if (response.status === 404 || response.status === 204) return null;
  if (!response.ok) throw new Error(`public_hero_${response.status}`);
  return response.blob();
}

export async function listPublicNews(): Promise<AdminManagedNews[]> {
  const response = await fetch(`${apiBaseUrl}/api/v1/public/content/news`, { headers: { Accept: "application/json" } });
  if (!response.ok) throw new Error(`public_news_${response.status}`);
  return response.json() as Promise<AdminManagedNews[]>;
}
