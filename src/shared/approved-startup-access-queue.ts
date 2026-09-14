export const APPROVED_STARTUP_ACCESS_QUEUE_KEY = "mah.creativeHouse.approvedStartupAccessQueue.v1";
export const APPROVED_STARTUP_ACCESS_QUEUE_CHANGED = "mah:approved-startup-access-queue-changed";

export type ApprovedStartupAccessQueueItem = {
  id: string;
  startupName: string;
  managerName: string;
  activityArea: string;
  approvedAt: string;
  source: "creative-house";
};

type ApprovedStartupQueueInput = Omit<ApprovedStartupAccessQueueItem, "id" | "source">;

function normalize(value: string) {
  return value.replace(/\s+/g, " ").trim();
}

function makeQueueId(startupName: string, managerName: string) {
  return `${normalize(startupName).toLocaleLowerCase("fa")}|${normalize(managerName).toLocaleLowerCase("fa")}`;
}

function isQueueItem(value: unknown): value is ApprovedStartupAccessQueueItem {
  if (!value || typeof value !== "object") return false;
  const item = value as Partial<ApprovedStartupAccessQueueItem>;
  return (
    typeof item.id === "string" &&
    typeof item.startupName === "string" &&
    typeof item.managerName === "string" &&
    typeof item.activityArea === "string" &&
    typeof item.approvedAt === "string" &&
    item.source === "creative-house"
  );
}

export function readApprovedStartupAccessQueue(): ApprovedStartupAccessQueueItem[] {
  try {
    const raw = localStorage.getItem(APPROVED_STARTUP_ACCESS_QUEUE_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw) as unknown;
    if (!Array.isArray(parsed)) return [];
    return parsed.filter(isQueueItem);
  } catch {
    return [];
  }
}

function writeQueue(items: ApprovedStartupAccessQueueItem[]) {
  localStorage.setItem(APPROVED_STARTUP_ACCESS_QUEUE_KEY, JSON.stringify(items));
  window.dispatchEvent(new CustomEvent(APPROVED_STARTUP_ACCESS_QUEUE_CHANGED));
}

export function enqueueApprovedStartupAccess(input: ApprovedStartupQueueInput) {
  const startupName = normalize(input.startupName);
  const managerName = normalize(input.managerName);
  if (!startupName) return;

  const item: ApprovedStartupAccessQueueItem = {
    id: makeQueueId(startupName, managerName),
    startupName,
    managerName,
    activityArea: normalize(input.activityArea),
    approvedAt: input.approvedAt,
    source: "creative-house",
  };

  const current = readApprovedStartupAccessQueue().filter((existing) => existing.id !== item.id);
  writeQueue([item, ...current]);
}

export function removeApprovedStartupAccess(startupName: string, managerName: string) {
  const id = makeQueueId(startupName, managerName);
  const current = readApprovedStartupAccessQueue();
  const next = current.filter((item) => item.id !== id);
  if (next.length !== current.length) writeQueue(next);
}
