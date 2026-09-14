const FUND_REQUESTS_KEY = "mah.fundProjectPaymentRequests.v1";
const FUND_SYNERGY_REQUESTS_KEY = "mah.fundSynergyRequests.v2";

type DemoFundPaymentRequest = {
  id: string;
  project: string;
  executor: string;
  stage: string;
  investmentAmount: number;
  requestedAmount: number;
  note: string;
  status: "approved" | "paid";
  createdAt: string;
  approvedAt: string;
  paidAt?: string;
  receipt?: string;
};

type DemoSynergyRequest = {
  id: string;
  company: string;
  project: string;
  companyPayment: number;
  fundShare: number;
  note: string;
  status: "pending" | "allocated";
  createdAt: string;
  allocatedAt?: string;
  receipt?: string;
};

const demoFundPayments: DemoFundPaymentRequest[] = [
  {
    id: "demo-fund-payment-1",
    project: "توسعه زنجیره ارزش محصولات روستایی",
    executor: "تعاونی زنان آفتاب",
    stage: "توسعه بازار و فروش",
    investmentAmount: 650_000_000,
    requestedAmount: 180_000_000,
    note: "وجه صندوق به حساب امداد واریز شده و آماده پرداخت مرحله‌ای به پروژه است.",
    status: "approved",
    createdAt: "2026-09-11T08:30:00.000Z",
    approvedAt: "2026-09-12T09:15:00.000Z",
  },
  {
    id: "demo-fund-payment-2",
    project: "مهارت برای نوجوانان",
    executor: "مؤسسه مسیر فردا",
    stage: "اجرای دوره‌های مهارتی",
    investmentAmount: 420_000_000,
    requestedAmount: 120_000_000,
    note: "پرداخت از محل منابع صندوق و از طریق حساب امداد انجام شده است.",
    status: "paid",
    createdAt: "2026-09-07T07:45:00.000Z",
    approvedAt: "2026-09-08T10:20:00.000Z",
    paidAt: "2026-09-09T06:40:00.000Z",
    receipt: "FP-14050618-02",
  },
  {
    id: "demo-fund-payment-3",
    project: "اشتغال زنان روستایی",
    executor: "گروه توسعه کسب‌وکار گلستان",
    stage: "تأمین تجهیزات اولیه",
    investmentAmount: 780_000_000,
    requestedAmount: 210_000_000,
    note: "مبلغ تأییدشده صندوق در حساب امداد موجود و در انتظار پرداخت به مجری است.",
    status: "approved",
    createdAt: "2026-09-13T06:10:00.000Z",
    approvedAt: "2026-09-13T11:30:00.000Z",
  },
];

const demoSynergyRequests: DemoSynergyRequest[] = [
  {
    id: "demo-synergy-1",
    project: "پروژه ساخت مدرسه امید",
    company: "شرکت توسعه آینده",
    companyPayment: 200_000_000,
    fundShare: 20_000_000,
    note: "سهم ۱۰٪ پرداخت نقدی شرکت برای صندوق در انتظار تخصیص است.",
    status: "pending",
    createdAt: "2026-09-12T08:30:00.000Z",
  },
  {
    id: "demo-synergy-2",
    project: "تهیه تجهیزات درمانی",
    company: "شرکت سلامت گستر",
    companyPayment: 150_000_000,
    fundShare: 15_000_000,
    note: "سهم ۱۰٪ این پرداخت به صندوق تخصیص و ثبت شده است.",
    status: "allocated",
    createdAt: "2026-09-08T09:00:00.000Z",
    allocatedAt: "2026-09-10T10:20:00.000Z",
    receipt: "FSR-14050619-01",
  },
  {
    id: "demo-synergy-3",
    project: "احداث مرکز توانبخشی",
    company: "شرکت نیک‌اندیشان",
    companyPayment: 90_000_000,
    fundShare: 9_000_000,
    note: "سهم ۱۰٪ پرداخت نقدی شرکت برای صندوق در انتظار تخصیص است.",
    status: "pending",
    createdAt: "2026-09-13T07:15:00.000Z",
  },
];

function seedCollection<T extends { id: string }>(key: string, demoItems: T[]) {
  try {
    const raw = localStorage.getItem(key);
    const parsed = raw ? JSON.parse(raw) : [];
    const current = Array.isArray(parsed) ? parsed : [];
    if (current.length > 0) return false;

    localStorage.setItem(key, JSON.stringify(demoItems));
    return true;
  } catch {
    localStorage.setItem(key, JSON.stringify(demoItems));
    return true;
  }
}

function seedDemoData() {
  const fundPaymentsSeeded = seedCollection(FUND_REQUESTS_KEY, demoFundPayments);
  const synergySeeded = seedCollection(FUND_SYNERGY_REQUESTS_KEY, demoSynergyRequests);

  if (fundPaymentsSeeded) {
    window.dispatchEvent(new CustomEvent("moon:fund-project-payments-changed"));
  }
  if (synergySeeded) {
    window.dispatchEvent(new CustomEvent("moon:fund-synergy-requests-changed"));
  }
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", seedDemoData, { once: true });
} else {
  seedDemoData();
}
