export type AdminOrganizationOverride = {
  organizationId: string;
  name?: string;
  manager?: string;
  mobile?: string;
  activityArea?: string;
  updatedAt: string;
};

export const ADMIN_ORGANIZATION_OVERRIDES_KEY = "mah.admin.organizationOverrides.v1";
export const ADMIN_ORGANIZATION_OVERRIDES_CHANGED = "mah:admin-organization-overrides-changed";

export function readOrganizationOverrides(): AdminOrganizationOverride[] {
  try {
    const raw = localStorage.getItem(ADMIN_ORGANIZATION_OVERRIDES_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw) as unknown;
    if (!Array.isArray(parsed)) return [];
    return parsed.filter((item): item is AdminOrganizationOverride => Boolean(item && typeof item === "object" && typeof (item as AdminOrganizationOverride).organizationId === "string"));
  } catch {
    return [];
  }
}

export function getOrganizationOverride(organizationId: string) {
  return readOrganizationOverrides().find((item) => item.organizationId === organizationId) ?? null;
}

export function saveOrganizationOverride(input: Omit<AdminOrganizationOverride, "updatedAt">) {
  const current = readOrganizationOverrides();
  const nextItem: AdminOrganizationOverride = { ...input, updatedAt: new Date().toISOString() };
  const index = current.findIndex((item) => item.organizationId === input.organizationId);
  const next = [...current];
  if (index >= 0) next[index] = nextItem;
  else next.push(nextItem);
  localStorage.setItem(ADMIN_ORGANIZATION_OVERRIDES_KEY, JSON.stringify(next));
  window.dispatchEvent(new CustomEvent(ADMIN_ORGANIZATION_OVERRIDES_CHANGED));
  return nextItem;
}
