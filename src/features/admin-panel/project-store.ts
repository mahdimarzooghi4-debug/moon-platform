export type AdminProjectRecord = {
  id: string;
  name: string;
  province: string;
  track: string;
  fundingPercent: number;
  fundingTarget: string;
  status: "فعال" | "متوقف" | "در انتظار گزارش";
  stage: string;
};

export const ADMIN_PROJECT_STORE_KEY = "mah.admin.projects.v1";
export const ADMIN_PROJECT_STORE_CHANGED = "mah:admin-projects-changed";

const defaults: AdminProjectRecord[] = [
  { id: "1", name: "سلامت خانواده", province: "سیستان و بلوچستان", track: "سلامت و خدمات اجتماعی", fundingPercent: 51, fundingTarget: "۳۵۰ میلیون تومان", status: "فعال", stage: "در حال تأمین" },
  { id: "2", name: "مهارت برای نوجوانان", province: "اصفهان", track: "آموزش و مهارت", fundingPercent: 74, fundingTarget: "۴۰۰ میلیون تومان", status: "فعال", stage: "در حال تأمین" },
  { id: "3", name: "اشتغال زنان روستایی", province: "گلستان", track: "اشتغال و معیشت", fundingPercent: 58, fundingTarget: "۴۰۰ میلیون تومان", status: "در انتظار گزارش", stage: "در حال اجرا" },
];

function validRecord(value: unknown): value is AdminProjectRecord {
  if (!value || typeof value !== "object") return false;
  const item = value as Partial<AdminProjectRecord>;
  return Boolean(
    typeof item.id === "string" &&
      typeof item.name === "string" &&
      typeof item.province === "string" &&
      typeof item.track === "string" &&
      typeof item.fundingPercent === "number" &&
      typeof item.fundingTarget === "string" &&
      typeof item.status === "string" &&
      typeof item.stage === "string",
  );
}

export function readAdminProjects(): AdminProjectRecord[] {
  try {
    const raw = localStorage.getItem(ADMIN_PROJECT_STORE_KEY);
    if (!raw) return defaults;
    const parsed = JSON.parse(raw) as unknown;
    if (!Array.isArray(parsed)) return defaults;
    const valid = parsed.filter(validRecord);
    return valid.length ? valid : defaults;
  } catch {
    return defaults;
  }
}

export function getAdminProject(id: string) {
  return readAdminProjects().find((item) => item.id === id) ?? null;
}

export function updateAdminProject(id: string, patch: Partial<Omit<AdminProjectRecord, "id">>) {
  const current = readAdminProjects();
  const index = current.findIndex((item) => item.id === id);
  if (index < 0) return null;
  const next = [...current];
  next[index] = { ...next[index], ...patch, id };
  localStorage.setItem(ADMIN_PROJECT_STORE_KEY, JSON.stringify(next));
  window.dispatchEvent(new CustomEvent(ADMIN_PROJECT_STORE_CHANGED));
  return next[index];
}
