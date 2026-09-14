export const ADMIN_PROVISIONING_STORE_KEY = "mah.admin.pendingIdentityProvisioning.v1";
export const ADMIN_PROVISIONING_CHANGED = "mah:admin-provisioning-changed";

export type AdminProvisioningRecord = {
  id: string;
  displayName: string;
  mobile: string;
  email: string;
  roleCode: string;
  roleName: string;
  organizationId: string;
  organizationName: string;
  organizationType: string;
  startupName: string;
  activityArea: string;
  status: "invited";
  notificationStatus: "queued" | "not-configured";
  createdAt: string;
};

type ProvisioningInput = Omit<AdminProvisioningRecord, "id" | "status" | "notificationStatus" | "createdAt">;

function normalize(value: string) {
  return value.replace(/\s+/g, " ").trim();
}

function normalizeMobile(value: string) {
  return value
    .replace(/[۰-۹]/g, (digit) => String("۰۱۲۳۴۵۶۷۸۹".indexOf(digit)))
    .replace(/[٠-٩]/g, (digit) => String("٠١٢٣٤٥٦٧٨٩".indexOf(digit)))
    .replace(/\D/g, "")
    .slice(0, 11);
}

function isRecord(value: unknown): value is AdminProvisioningRecord {
  if (!value || typeof value !== "object") return false;
  const item = value as Partial<AdminProvisioningRecord>;
  return (
    typeof item.id === "string" &&
    typeof item.displayName === "string" &&
    typeof item.mobile === "string" &&
    typeof item.roleCode === "string" &&
    typeof item.roleName === "string" &&
    typeof item.organizationName === "string" &&
    typeof item.organizationType === "string" &&
    item.status === "invited" &&
    (item.notificationStatus === "queued" || item.notificationStatus === "not-configured") &&
    typeof item.createdAt === "string"
  );
}

export function readAdminProvisioningRecords(): AdminProvisioningRecord[] {
  try {
    const raw = localStorage.getItem(ADMIN_PROVISIONING_STORE_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw) as unknown;
    if (!Array.isArray(parsed)) return [];
    return parsed.filter(isRecord);
  } catch {
    return [];
  }
}

function writeRecords(records: AdminProvisioningRecord[]) {
  localStorage.setItem(ADMIN_PROVISIONING_STORE_KEY, JSON.stringify(records));
  window.dispatchEvent(new CustomEvent(ADMIN_PROVISIONING_CHANGED));
}

export function createAdminProvisioningRecord(input: ProvisioningInput) {
  const mobile = normalizeMobile(input.mobile);
  const record: AdminProvisioningRecord = {
    ...input,
    id: `invite-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
    displayName: normalize(input.displayName),
    mobile,
    email: normalize(input.email),
    roleCode: normalize(input.roleCode),
    roleName: normalize(input.roleName),
    organizationId: normalize(input.organizationId),
    organizationName: normalize(input.organizationName),
    organizationType: normalize(input.organizationType),
    startupName: normalize(input.startupName),
    activityArea: normalize(input.activityArea),
    status: "invited",
    notificationStatus: "not-configured",
    createdAt: new Date().toISOString(),
  };

  const current = readAdminProvisioningRecords().filter(
    (item) => !(item.mobile === record.mobile && item.roleCode === record.roleCode && item.organizationName === record.organizationName),
  );
  writeRecords([record, ...current]);
  return record;
}
