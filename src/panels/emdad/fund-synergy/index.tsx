import { useEffect, useMemo, useState } from "react";
import EmdadSharedSidebar from "../SharedSidebar";
import "../index.css";

const REQUESTS_KEY = "mah.fundSynergyRequests.v2";
const SELECTED_KEY = "mah.fundSynergyRequests.selected.v2";
const RECORDED_PAYMENTS_KEY = "mah.emdad.recordedPayments.v1";

type SynergyStatus = "pending" | "allocated";

type SynergyRequest = {
  id: string;
  company: string;
  project: string;
  companyPayment: number;
  fundShare: number;
  note: string;
  status: SynergyStatus;
  createdAt: string;
  emdadApprovedAt?: string;
  allocatedAt?: string;
  receipt?: string;
};

type RecordedPayment = {
  contextType?: string;
  contextId?: string;
};

function readRecordedPayments(): RecordedPayment[] {
  try {
    const parsed = JSON.parse(localStorage.getItem(RECORDED_PAYMENTS_KEY) ?? "[]");
    return Array.isArray(parsed) ? parsed.filter((item) => item && typeof item === "object") : [];
  } catch {
    return [];
  }
}

function realSynergyPaymentIds() {
  return new Set(
    readRecordedPayments()
      .filter((payment) => payment.contextType === "synergy" && typeof payment.contextId === "string")
      .map((payment) => String(payment.contextId)),
  );
}

function normalizeRequest(item: unknown): SynergyRequest | null {
  if (!item || typeof item !== "object") return null;
  const value = item as Record<string, unknown>;
  if (
    typeof value.id !== "string" ||
    typeof value.company !== "string" ||
    typeof value.project !== "string" ||
    typeof value.companyPayment !== "number" ||
    typeof value.fundShare !== "number" ||
    typeof value.note !== "string" ||
    typeof value.createdAt !== "string" ||
    !["pending", "allocated"].includes(String(value.status))
  ) return null;

  return {
    id: value.id,
    company: value.company,
    project: value.project,
    companyPayment: value.companyPayment,
    fundShare: value.fundShare,
    note: value.note,
    status: value.status as SynergyStatus,
    createdAt: value.createdAt,
    emdadApprovedAt: typeof value.emdadApprovedAt === "string" ? value.emdadApprovedAt : undefined,
    allocatedAt: typeof value.allocatedAt === "string" ? value.allocatedAt : undefined,
    receipt: typeof value.receipt === "string" ? value.receipt : undefined,
  };
}

function readRequests(): SynergyRequest[] {
  try {
    const parsed = JSON.parse(localStorage.getItem(REQUESTS_KEY) ?? "[]");
    if (!Array.isArray(parsed)) return [];
    const paidIds = realSynergyPaymentIds();
    let migrated = false;
    const requests = parsed
      .map(normalizeRequest)
      .filter((item): item is SynergyRequest => Boolean(item))
      .map((request) => {
        if (request.status !== "allocated" || paidIds.has(request.id)) return request;
        migrated = true;
        return {
          ...request,
          status: "pending" as const,
          emdadApprovedAt: request.emdadApprovedAt ?? request.allocatedAt ?? request.createdAt,
          allocatedAt: undefined,
          receipt: undefined,
        };
      });

    if (migrated) localStorage.setItem(REQUESTS_KEY, JSON.stringify(requests));
    return requests;
  } catch {
    return [];
  }
}

function faNumber(value: number) {
  return new Intl.NumberFormat("fa-IR", { maximumFractionDigits: 0 }).format(value);
}

function formatAmount(value: number) {
  return `${faNumber(value)} تومان`;
}

function navigate(path: string) {
  if (window.location.pathname === path) return;
  window.history.pushState({}, "", path);
  window.dispatchEvent(new PopStateEvent("popstate"));
  window.scrollTo({ top: 0, left: 0, behavior: "auto" });
}

function openPaymentRegistration(request: SynergyRequest) {
  window.dispatchEvent(
    new CustomEvent("moon:emdad-open-payment-registration", {
      detail: {
        source: "company",
        project: request.project,
        stage: "واریز سهم ۱۰٪ هم‌افزایی به صندوق ماه",
        amount: request.fundShare,
        note: `شرکت: ${request.company}${request.note ? ` — ${request.note}` : ""}`,
        title: "ثبت پرداخت سهم هم‌افزایی صندوق",
        description:
          "تخصیص تأیید شده است؛ واریز واقعی سهم ۱۰٪ از حساب امداد به صندوق ماه و شماره رسید بانکی را ثبت کنید.",
        contextType: "synergy",
        contextId: request.id,
      },
    }),
  );
}

export default function EmdadFundSynergy() {
  const [requests, setRequests] = useState<SynergyRequest[]>(() => readRequests());
  const [query, setQuery] = useState("");
  const [filter, setFilter] = useState<"all" | "pending" | "approved" | "paid">("all");
  const [paymentIds, setPaymentIds] = useState<Set<string>>(() => realSynergyPaymentIds());

  useEffect(() => {
    const sync = () => {
      setPaymentIds(realSynergyPaymentIds());
      setRequests(readRequests());
    };
    window.addEventListener("moon:fund-synergy-requests-changed", sync);
    window.addEventListener("moon:emdad-payment-recorded", sync);
    window.addEventListener("moon:emdad-payments-changed", sync);
    window.addEventListener("storage", sync);
    return () => {
      window.removeEventListener("moon:fund-synergy-requests-changed", sync);
      window.removeEventListener("moon:emdad-payment-recorded", sync);
      window.removeEventListener("moon:emdad-payments-changed", sync);
      window.removeEventListener("storage", sync);
    };
  }, []);

  const stateOf = (request: SynergyRequest) => {
    if (paymentIds.has(request.id)) return "paid" as const;
    if (typeof request.emdadApprovedAt === "string" || request.status === "allocated") return "approved" as const;
    return "pending" as const;
  };

  const pendingAllocation = requests
    .filter((request) => stateOf(request) === "pending")
    .reduce((sum, request) => sum + request.fundShare, 0);
  const awaitingTransfer = requests
    .filter((request) => stateOf(request) === "approved")
    .reduce((sum, request) => sum + request.fundShare, 0);
  const paidShare = requests
    .filter((request) => stateOf(request) === "paid")
    .reduce((sum, request) => sum + request.fundShare, 0);

  const visible = useMemo(() => {
    const normalizedQuery = query.trim();
    return [...requests]
      .filter((request) => {
        const state = paymentIds.has(request.id)
          ? "paid"
          : typeof request.emdadApprovedAt === "string" || request.status === "allocated"
            ? "approved"
            : "pending";
        if (filter !== "all" && state !== filter) return false;
        if (!normalizedQuery) return true;
        return `${request.project} ${request.company}`.includes(normalizedQuery);
      })
      .sort((a, b) => b.createdAt.localeCompare(a.createdAt));
  }, [requests, query, filter, paymentIds]);

  const review = (request: SynergyRequest) => {
    const state = stateOf(request);
    if (state === "paid") {
      navigate("/panel/emdad/payment-history");
      return;
    }
    if (state === "approved") {
      openPaymentRegistration(request);
      return;
    }
    localStorage.setItem(SELECTED_KEY, request.id);
    navigate("/panel/emdad/fund-synergy/allocation");
  };

  return (
    <div className="emdad-panel bg-[#f5f8fb] relative w-[1440px] min-w-[1440px] h-[900px] mx-auto font-sans text-[#17324d]" data-name="emdad-fund-synergy">
      <main className="absolute left-0 top-0 w-[1216px] h-[900px] overflow-y-auto px-[28px] py-[22px] flex flex-col gap-[14px]" data-name="Main Content" dir="rtl">
        <header className="bg-white border border-[#e4ebf1] rounded-[12px] min-h-[72px] px-[22px] py-[14px] text-right">
          <h1 className="m-0 text-[22px] font-bold">هم‌افزایی صندوق</h1>
          <p className="m-0 mt-[5px] text-[11px] text-[#60758a]">سهم ۱۰٪ پرداخت‌های نقدی شرکت‌ها پس از تأیید امداد، از حساب امداد به صندوق ماه واریز و با رسید واقعی ثبت می‌شود.</p>
        </header>

        <section className="grid grid-cols-4 gap-[12px]" aria-label="خلاصه هم‌افزایی صندوق">
          <div className="bg-white border border-[#e4ebf1] rounded-[12px] min-h-[94px] px-[16px] py-[13px]">
            <p className="m-0 text-[11px] text-[#60758a]">درخواست‌های هم‌افزایی صندوق</p>
            <strong className="block mt-[7px] text-[22px]">{faNumber(requests.length)}</strong>
            <span className="block mt-[3px] text-[9px] text-[#60758a]">{faNumber(requests.filter((request) => stateOf(request) === "pending").length)} مورد در انتظار بررسی</span>
          </div>
          <div className="bg-white border border-[#e4ebf1] rounded-[12px] min-h-[94px] px-[16px] py-[13px]">
            <p className="m-0 text-[11px] text-[#60758a]">سهم در انتظار تخصیص</p>
            <strong className="block mt-[7px] text-[20px] text-[#2094e3]">{formatAmount(pendingAllocation)}</strong>
            <span className="block mt-[3px] text-[9px] text-[#60758a]">هنوز توسط امداد تأیید نشده است</span>
          </div>
          <div className="bg-white border border-[#e4ebf1] rounded-[12px] min-h-[94px] px-[16px] py-[13px]">
            <p className="m-0 text-[11px] text-[#60758a]">تأییدشده، در انتظار واریز</p>
            <strong className="block mt-[7px] text-[20px] text-[#d88914]">{formatAmount(awaitingTransfer)}</strong>
            <span className="block mt-[3px] text-[9px] text-[#60758a]">تخصیص تأیید شده؛ رسید واقعی هنوز ثبت نشده</span>
          </div>
          <div className="bg-white border border-[#e4ebf1] rounded-[12px] min-h-[94px] px-[16px] py-[13px]">
            <p className="m-0 text-[11px] text-[#60758a]">سهم واریزشده به صندوق</p>
            <strong className="block mt-[7px] text-[20px] text-[#159455]">{formatAmount(paidShare)}</strong>
            <span className="block mt-[3px] text-[9px] text-[#60758a]">فقط پرداخت‌های ثبت‌شده در سوابق پرداخت</span>
          </div>
        </section>

        <section className="bg-white border border-[#e4ebf1] rounded-[12px] min-h-[68px] px-[16px] py-[12px] flex items-center gap-[12px]">
          <input
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="جستجو در شرکت یا پروژه"
            className="h-[42px] flex-1 border border-[#e4ebf1] rounded-[8px] bg-[#f8fafc] px-[14px] text-[11px] outline-none text-right"
          />
          <select
            value={filter}
            onChange={(event) => setFilter(event.target.value as typeof filter)}
            className="h-[42px] w-[220px] border border-[#e4ebf1] rounded-[8px] bg-white px-[12px] text-[11px] outline-none"
          >
            <option value="all">همه وضعیت‌ها</option>
            <option value="pending">در انتظار تخصیص</option>
            <option value="approved">در انتظار واریز</option>
            <option value="paid">واریزشده</option>
          </select>
          <div className="min-w-[92px] h-[30px] rounded-[15px] bg-[#ebf6fd] text-[#2094e3] flex items-center justify-center text-[10px] font-semibold">{faNumber(visible.length)} درخواست</div>
        </section>

        <section className="bg-white border border-[#e4ebf1] rounded-[12px] p-[18px] min-h-[500px]">
          <div className="mb-[15px]">
            <h2 className="m-0 text-[18px] font-bold">درخواست‌های هم‌افزایی صندوق</h2>
            <p className="m-0 mt-[4px] text-[10px] text-[#60758a]">تخصیص و پرداخت دو مرحله جدا هستند؛ پرداخت فقط با ثبت رسید واقعی تکمیل می‌شود.</p>
          </div>

          <div className="grid grid-cols-[60px_1.6fr_1fr_1fr_1.05fr_160px] gap-[8px] items-center min-h-[38px] px-[12px] rounded-[8px] bg-[#f5f8fb] text-[10px] text-[#60758a] text-center">
            <div>ردیف</div><div>پروژه / شرکت</div><div>پرداخت نقدی شرکت</div><div>سهم ۱۰٪ صندوق</div><div>وضعیت</div><div>اقدام</div>
          </div>

          <div className="pt-[8px]">
            {visible.length === 0 ? (
              <div className="h-[180px] flex items-center justify-center border border-dashed border-[#dbe5f0] rounded-[10px] text-[11px] text-[#60758a]">درخواستی با این فیلتر وجود ندارد.</div>
            ) : visible.map((request, index) => {
              const state = stateOf(request);
              return (
                <div key={request.id} className="grid grid-cols-[60px_1.6fr_1fr_1fr_1.05fr_160px] gap-[8px] items-center min-h-[66px] px-[12px] mb-[7px] border border-[#e4ebf1] rounded-[9px] bg-[#fff] text-[10px] text-center">
                  <div>{faNumber(index + 1)}</div>
                  <div className="text-right font-semibold">{request.project}<small className="block mt-[3px] text-[9px] font-normal text-[#60758a]">{request.company}</small></div>
                  <div>{formatAmount(request.companyPayment)}</div>
                  <div>{formatAmount(request.fundShare)}</div>
                  <div>
                    <span className={`inline-flex min-w-[128px] h-[28px] items-center justify-center rounded-[14px] px-[9px] font-semibold ${state === "paid" ? "bg-[#e8faf0] text-[#159455]" : state === "approved" ? "bg-[#fff4df] text-[#b8750c]" : "bg-[#edf7fe] text-[#2094e3]"}`}>
                      {state === "paid" ? "واریزشده به صندوق" : state === "approved" ? "تأییدشده؛ در انتظار واریز" : "در انتظار تخصیص"}
                    </span>
                  </div>
                  <div>
                    <button type="button" onClick={() => review(request)} className="w-[148px] h-[34px] rounded-[8px] border border-[#2094e3] bg-[#2094e3] text-white text-[10px] font-semibold cursor-pointer">
                      {state === "paid" ? "مشاهده سوابق پرداخت" : state === "approved" ? "ثبت پرداخت و رسید" : "بررسی درخواست"}
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      </main>

      <EmdadSharedSidebar pathname={window.location.pathname} />
    </div>
  );
}
