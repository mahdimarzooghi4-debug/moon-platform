export const INDIVIDUAL_PARTICIPATIONS_KEY = "mah.individualParticipations.v1";
export const INDIVIDUAL_PARTICIPATIONS_CHANGED = "mah:individual-participations-changed";

export type IndividualParticipation = {
  id: string;
  participantName: string;
  mobile: string;
  projectId: string;
  projectTitle: string;
  startupName: string;
  amount: number;
  status: "pending" | "successful" | "failed";
  trackingCode: string;
  bankReference: string;
  createdAt: string;
};

type NewParticipationInput = Pick<
  IndividualParticipation,
  "participantName" | "mobile" | "projectId" | "projectTitle" | "startupName" | "amount"
>;

const demoParticipations: IndividualParticipation[] = [
  {
    id: "demo-individual-001",
    participantName: "مریم احمدی",
    mobile: "09123456789",
    projectId: "rural-women-employment",
    projectTitle: "اشتغال زنان روستایی",
    startupName: "راهکار سبز",
    amount: 300000,
    status: "successful",
    trackingCode: "MAH-P-1405-002846",
    bankReference: "8374921056",
    createdAt: "2026-08-24T11:02:00Z",
  },
  {
    id: "demo-individual-002",
    participantName: "علی رضایی",
    mobile: "09351234567",
    projectId: "health-family",
    projectTitle: "سلامت خانواده",
    startupName: "همیار سلامت",
    amount: 750000,
    status: "successful",
    trackingCode: "MAH-P-1405-002901",
    bankReference: "8421057741",
    createdAt: "2026-08-27T08:20:00Z",
  },
  {
    id: "demo-individual-003",
    participantName: "بدون نام",
    mobile: "09901239876",
    projectId: "skills-future",
    projectTitle: "مهارت برای نوجوانان",
    startupName: "آینده‌ساز مهارت",
    amount: 500000,
    status: "pending",
    trackingCode: "MAH-P-1405-002944",
    bankReference: "",
    createdAt: "2026-09-12T09:15:00Z",
  },
];

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

function isParticipation(value: unknown): value is IndividualParticipation {
  if (!value || typeof value !== "object") return false;
  const item = value as Partial<IndividualParticipation>;
  return (
    typeof item.id === "string" &&
    typeof item.mobile === "string" &&
    typeof item.projectTitle === "string" &&
    typeof item.amount === "number" &&
    (item.status === "pending" || item.status === "successful" || item.status === "failed") &&
    typeof item.createdAt === "string"
  );
}

function readStored(): IndividualParticipation[] {
  try {
    const raw = localStorage.getItem(INDIVIDUAL_PARTICIPATIONS_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw) as unknown;
    return Array.isArray(parsed) ? parsed.filter(isParticipation) : [];
  } catch {
    return [];
  }
}

function writeStored(items: IndividualParticipation[]) {
  localStorage.setItem(INDIVIDUAL_PARTICIPATIONS_KEY, JSON.stringify(items));
  window.dispatchEvent(new CustomEvent(INDIVIDUAL_PARTICIPATIONS_CHANGED));
}

export function readIndividualParticipations() {
  const stored = readStored();
  return [...stored, ...demoParticipations.filter((demo) => !stored.some((item) => item.id === demo.id))];
}

export function createIndividualParticipation(input: NewParticipationInput) {
  const now = new Date();
  const id = `individual-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;
  const trackingCode = `MAH-P-${String(now.getFullYear()).slice(-2)}-${String(Date.now()).slice(-6)}`;
  const item: IndividualParticipation = {
    id,
    participantName: normalize(input.participantName) || "بدون نام",
    mobile: normalizeMobile(input.mobile),
    projectId: normalize(input.projectId),
    projectTitle: normalize(input.projectTitle),
    startupName: normalize(input.startupName),
    amount: Math.max(0, Math.round(input.amount)),
    status: "pending",
    trackingCode,
    bankReference: "",
    createdAt: now.toISOString(),
  };
  writeStored([item, ...readStored()]);
  return item;
}

export function updateIndividualParticipationStatus(
  id: string,
  status: IndividualParticipation["status"],
  bankReference = "",
) {
  const current = readStored();
  const next = current.map((item) =>
    item.id === id ? { ...item, status, bankReference: normalize(bankReference) || item.bankReference } : item,
  );
  if (next.some((item, index) => item !== current[index])) writeStored(next);
}
