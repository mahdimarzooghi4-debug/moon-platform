import { FormEvent, useEffect, useMemo, useState } from "react";
import "../index.css";
import "./index.css";

const SETTINGS_KEY = "mah.fundManager.profitSplit.settings.v1";
const PROFIT_RECORDS_KEY = "mah.fundManager.profitRecords.v1";
const SYNERGY_REQUESTS_KEY = "mah.fundSynergyRequests.v2";
const PROJECT_PAYMENTS_KEY = "mah.fundProjectPaymentRequests.v1";

const logo = "/assets/fund-manager/financial-history/logo.png";
const dashboardIcon = "/assets/fund-manager/financial-history/dashboard.svg";
const resourcesIcon = "/assets/fund-manager/financial-history/resources.svg";
const investmentsIcon = "/assets/fund-manager/financial-history/investments.svg";
const financialsIcon = "/assets/fund-manager/financial-history/profits.svg";
const reportsIcon = "/assets/fund-manager/financial-history/history.svg";
const logoutIcon = "/assets/fund-manager/financial-history/logout.svg";

type SplitSettings = {
  returnShare: number;
  incomeShare: number;
  updatedAt: string;
};

type ProfitRecord = {
  id: string;
  period: string;
  project: string;
  amount: number;
  date: string;
  reference: string;
  note: string;
  returnShare: number;
  incomeShare: number;
  returnAmount: number;
  incomeAmount: number;
  createdAt: string;
  source: "historical" | "registered";
};

type FinancialEvent = {
  id: string;
  title: string;
  meta: string;
  amount: number;
  type: "profit" | "resource" | "payment";
  date: string;
  reference: string;
};

const DEFAULT_SETTINGS: SplitSettings = { returnShare: 70, incomeShare: 30, updatedAt: "" };

const HISTORICAL_PROFITS: ProfitRecord[] = [
  {
    id: "HIST-PROFIT-1405-06",
    period: "۱۴۰۵/۰۶",
    project: "دوره مالی صندوق",
    amount: 120_000_000,
    date: "۱۴۰۵/۰۶/۳۰",
    reference: "PS-1405-006",
    note: "رکورد نهایی‌شده پیش از ایجاد مرکز مالی یکپارچه",
    returnShare: 70,
    incomeShare: 30,
    returnAmount: 84_000_000,
    incomeAmount: 36_000_000,
    createdAt: "2026-09-21T00:00:00.000Z",
    source: "historical",
  },
  {
    id: "HIST-PROFIT-1405-05",
    period: "۱۴۰۵/۰۵",
    project: "دوره مالی صندوق",
    amount: 90_000_000,
    date: "۱۴۰۵/۰۵/۳۱",
    reference: "PS-1405-005",
    note: "رکورد نهایی‌شده پیش از ایجاد مرکز مالی یکپارچه",
    returnShare: 70,
    incomeShare: 30,
    returnAmount: 63_000_000,
    incomeAmount: 27_000_000,
    createdAt: "2026-08-22T00:00:00.000Z",
    source: "historical",
  },
];

function readSettings(): SplitSettings {
  try {
    const raw = localStorage.getItem(SETTINGS_KEY);
    if (!raw) return DEFAULT_SETTINGS;
    const parsed = JSON.parse(raw) as Partial<SplitSettings>;
    const returnShare = Number(parsed.returnShare);
    const incomeShare = Number(parsed.incomeShare);
    if (!Number.isFinite(returnShare) || !Number.isFinite(incomeShare) || Math.abs(returnShare + incomeShare - 100) > 0.001) {
      return DEFAULT_SETTINGS;
    }
    return { returnShare, incomeShare, updatedAt: typeof parsed.updatedAt === "string" ? parsed.updatedAt : "" };
  } catch {
    return DEFAULT_SETTINGS;
  }
}

function readRegisteredProfits(): ProfitRecord[] {
  try {
    const raw = localStorage.getItem(PROFIT_RECORDS_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed)
      ? parsed.filter((item) => item && typeof item.id === "string" && typeof item.amount === "number")
      : [];
  } catch {
    return [];
  }
}

function readOtherFinancialEvents(): FinancialEvent[] {
  const events: FinancialEvent[] = [];
  try {
    const synergy = JSON.parse(localStorage.getItem(SYNERGY_REQUESTS_KEY) || "[]");
    if (Array.isArray(synergy)) {
      synergy.forEach((item) => {
        if (!item || item.status !== "allocated" || !Number.isFinite(item.fundShare)) return;
        events.push({
          id: `synergy-${item.id}`,
          title: "ورود سهم ۱۰٪ صندوق",
          meta: `${item.project || "پروژه"} · ${item.company || "شرکت"}`,
          amount: Number(item.fundShare),
          type: "resource",
          date: item.allocatedAt || item.createdAt || "",
          reference: item.receipt || item.id || "—",
        });
      });
    }
  } catch {
    // Frontend prototype: ignore malformed local data.
  }

  try {
    const payments = JSON.parse(localStorage.getItem(PROJECT_PAYMENTS_KEY) || "[]");
    if (Array.isArray(payments)) {
      payments.forEach((item) => {
        if (!item || item.status !== "paid" || !Number.isFinite(item.requestedAmount)) return;
        events.push({
          id: `payment-${item.id}`,
          title: "پرداخت از منابع صندوق",
          meta: `${item.project || "پروژه"} · ${item.stage || "پرداخت پروژه"}`,
          amount: -Number(item.requestedAmount),
          type: "payment",
          date: item.paidAt || item.createdAt || "",
          reference: item.receipt || item.id || "—",
        });
      });
    }
  } catch {
    // Frontend prototype: ignore malformed local data.
  }

  return events;
}

function faNumber(value: number) {
  return new Intl.NumberFormat("fa-IR", { maximumFractionDigits: 1 }).format(value);
}

function formatAmount(value: number) {
  const sign = value > 0 ? "+" : value < 0 ? "−" : "";
  return `${sign}${faNumber(Math.abs(value))} تومان`;
}

function clampShare(value: number) {
  return Math.min(100, Math.max(0, Math.round(value * 10) / 10));
}

function formatEventDate(value: string) {
  if (!value) return "—";
  if (/^[۰-۹\d]{4}\/[۰-۹\d]{2}\/[۰-۹\d]{2}$/.test(value)) return value;
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return value;
  try {
    return new Intl.DateTimeFormat("fa-IR-u-ca-persian", { year: "numeric", month: "2-digit", day: "2-digit" }).format(date);
  } catch {
    return new Intl.DateTimeFormat("fa-IR").format(date);
  }
}

export default function FundManagerFinancials() {
  const [settings, setSettings] = useState<SplitSettings>(() => readSettings());
  const [registeredProfits, setRegisteredProfits] = useState<ProfitRecord[]>(() => readRegisteredProfits());
  const [otherEvents, setOtherEvents] = useState<FinancialEvent[]>(() => readOtherFinancialEvents());
  const [profitDialogOpen, setProfitDialogOpen] = useState(false);
  const [ratioDialogOpen, setRatioDialogOpen] = useState(false);
  const [returnShareDraft, setReturnShareDraft] = useState(settings.returnShare);
  const [incomeShareDraft, setIncomeShareDraft] = useState(settings.incomeShare);
  const [formError, setFormError] = useState("");

  useEffect(() => {
    const sync = () => {
      setRegisteredProfits(readRegisteredProfits());
      setOtherEvents(readOtherFinancialEvents());
      setSettings(readSettings());
    };
    window.addEventListener("storage", sync);
    window.addEventListener("moon:fund-project-payments-changed", sync);
    window.addEventListener("moon:fund-synergy-requests-changed", sync);
    return () => {
      window.removeEventListener("storage", sync);
      window.removeEventListener("moon:fund-project-payments-changed", sync);
      window.removeEventListener("moon:fund-synergy-requests-changed", sync);
    };
  }, []);

  const profits = useMemo(
    () => [...registeredProfits, ...HISTORICAL_PROFITS].sort((a, b) => b.createdAt.localeCompare(a.createdAt)),
    [registeredProfits],
  );

  const totals = useMemo(
    () => profits.reduce(
      (acc, item) => ({
        profit: acc.profit + item.amount,
        returned: acc.returned + item.returnAmount,
        income: acc.income + item.incomeAmount,
      }),
      { profit: 0, returned: 0, income: 0 },
    ),
    [profits],
  );

  const events = useMemo<FinancialEvent[]>(() => {
    const profitEvents = profits.map((item) => ({
      id: `profit-${item.id}`,
      title: "ثبت سود صندوق",
      meta: `${item.period} · ${item.project}`,
      amount: item.amount,
      type: "profit" as const,
      date: item.date,
      reference: item.reference,
    }));
    return [...profitEvents, ...otherEvents].sort((a, b) => String(b.date).localeCompare(String(a.date))).slice(0, 8);
  }, [profits, otherEvents]);

  const submitProfit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setFormError("");
    const data = new FormData(event.currentTarget);
    const period = String(data.get("period") || "").trim();
    const project = String(data.get("project") || "").trim();
    const amount = Number(data.get("amount"));
    const date = String(data.get("date") || "").trim();
    const referenceInput = String(data.get("reference") || "").trim();
    const note = String(data.get("note") || "").trim();

    if (!period || !project || !date || !Number.isFinite(amount) || amount <= 0) {
      setFormError("دوره مالی، پروژه/سرمایه‌گذاری، مبلغ سود و تاریخ را کامل وارد کنید.");
      return;
    }

    const activeSettings = readSettings();
    const returnAmount = Math.round((amount * activeSettings.returnShare) / 100);
    const incomeAmount = amount - returnAmount;
    const record: ProfitRecord = {
      id: `PROFIT-${Date.now()}`,
      period,
      project,
      amount,
      date,
      reference: referenceInput || `PR-${Date.now().toString().slice(-8)}`,
      note,
      returnShare: activeSettings.returnShare,
      incomeShare: activeSettings.incomeShare,
      returnAmount,
      incomeAmount,
      createdAt: new Date().toISOString(),
      source: "registered",
    };

    const next = [record, ...readRegisteredProfits()];
    localStorage.setItem(PROFIT_RECORDS_KEY, JSON.stringify(next));
    setRegisteredProfits(next);
    setProfitDialogOpen(false);
    event.currentTarget.reset();
    window.dispatchEvent(new CustomEvent("moon:fund-profit-records-changed"));
  };

  const saveRatio = () => {
    const returnShare = clampShare(returnShareDraft);
    const incomeShare = clampShare(incomeShareDraft);
    if (Math.abs(returnShare + incomeShare - 100) > 0.001) return;
    const next = { returnShare, incomeShare, updatedAt: new Date().toISOString() };
    localStorage.setItem(SETTINGS_KEY, JSON.stringify(next));
    setSettings(next);
    setRatioDialogOpen(false);
    window.dispatchEvent(new CustomEvent("moon:profit-split-settings-changed"));
  };

  const openRatioDialog = () => {
    const active = readSettings();
    setReturnShareDraft(active.returnShare);
    setIncomeShareDraft(active.incomeShare);
    setRatioDialogOpen(true);
  };

  return (
    <div className="fund-manager-panel fund-financials-page" data-name="fund-manager-financials">
      <main className="fund-financials-main" data-name="Main Content" dir="rtl">
        <header className="fund-financials-header">
          <div className="fund-financials-heading">
            <h1>مالی صندوق</h1>
            <p>ثبت سود، تقسیم سود، بازگشت به منابع صندوق و مشاهده گردش‌های مالی در یک صفحه</p>
          </div>
          <div className="fund-financials-header-actions">
            <button type="button" className="fund-financials-secondary" onClick={openRatioDialog}>تنظیم نسبت</button>
            <button type="button" className="fund-financials-primary" onClick={() => { setFormError(""); setProfitDialogOpen(true); }}>ثبت سود صندوق</button>
          </div>
        </header>

        <section className="fund-financials-kpis" aria-label="خلاصه مالی صندوق">
          <article><span>سود ثبت‌شده</span><strong>{formatAmount(totals.profit).replace(/^\+/, "")}</strong><small>{faNumber(profits.length)} دوره سود</small></article>
          <article><span>بازگشت به منابع صندوق</span><strong>{formatAmount(totals.returned).replace(/^\+/, "")}</strong><small>قابل استفاده برای سرمایه‌گذاری‌های بعدی</small></article>
          <article><span>درآمد ماه</span><strong>{formatAmount(totals.income).replace(/^\+/, "")}</strong><small>سهم درآمد ثبت‌شده</small></article>
          <article><span>نسبت فعال</span><strong>{faNumber(settings.returnShare)}٪ / {faNumber(settings.incomeShare)}٪</strong><small>منابع صندوق / درآمد ماه</small></article>
        </section>

        <section className="fund-financials-section">
          <div className="fund-financials-section-title">
            <div><h2>سوابق سود صندوق</h2><p>هر ثبت سود با نسبت فعال همان زمان ذخیره می‌شود و نسبت دوره‌های قبلی تغییر نمی‌کند.</p></div>
            <span>{faNumber(profits.length)} رکورد</span>
          </div>
          <div className="fund-financials-profit-head">
            <span>دوره / پروژه</span><span>سود نهایی</span><span>منابع صندوق</span><span>درآمد ماه</span><span>نسبت ثبت‌شده</span><span>مرجع</span>
          </div>
          <div className="fund-financials-profit-list">
            {profits.map((record) => (
              <div className="fund-financials-profit-row" key={record.id}>
                <div className="fund-financials-primary-cell"><strong>{record.period}</strong><small>{record.project}</small></div>
                <span>{formatAmount(record.amount).replace(/^\+/, "")}</span>
                <span>{formatAmount(record.returnAmount).replace(/^\+/, "")}</span>
                <span>{formatAmount(record.incomeAmount).replace(/^\+/, "")}</span>
                <span>{faNumber(record.returnShare)}٪ / {faNumber(record.incomeShare)}٪</span>
                <span>{record.reference}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="fund-financials-section fund-financials-events-section">
          <div className="fund-financials-section-title">
            <div><h2>گردش‌های مالی اخیر</h2><p>ورودی ۱۰٪، پرداخت‌های صندوق و سودهای ثبت‌شده در یک نمای واحد</p></div>
          </div>
          <div className="fund-financials-events-list">
            {events.map((item) => (
              <div className="fund-financials-event" key={item.id}>
                <div className="fund-financials-event-main"><strong>{item.title}</strong><small>{item.meta}</small></div>
                <span className="fund-financials-event-type" data-type={item.type}>{item.type === "payment" ? "خروجی" : "ورودی"}</span>
                <span className="fund-financials-event-amount" data-negative={item.amount < 0}>{formatAmount(item.amount)}</span>
                <span>{formatEventDate(item.date)}</span>
                <span>{item.reference}</span>
              </div>
            ))}
          </div>
        </section>
      </main>

      <aside className="fund-financials-sidebar" data-name="colored-sidebar" dir="rtl">
        <div className="fund-financials-logo" data-name="brand-logo"><img src={logo} alt="ماه" /></div>
        <div className="fund-financials-profile"><strong>مدیر صندوق</strong><small>پنل مدیریت صندوق</small></div>
        <button type="button" data-name="dashboard-nav" className="fund-financials-nav"><span>داشبورد</span><img src={dashboardIcon} alt="" /></button>
        <button type="button" data-name="startup-evaluations-nav" className="fund-financials-nav"><span>منابع صندوق</span><img src={resourcesIcon} alt="" /></button>
        <button type="button" data-name="project-evaluations-nav" className="fund-financials-nav"><span>سرمایه‌گذاری‌ها</span><img src={investmentsIcon} alt="" /></button>
        <button type="button" data-name="revenues-nav" className="fund-financials-nav" data-active="true"><span>مالی صندوق</span><img src={financialsIcon} alt="" /></button>
        <button type="button" data-name="evaluation-history-nav" className="fund-financials-nav"><span>گزارش‌ها</span><img src={reportsIcon} alt="" /></button>
        <div className="fund-financials-sidebar-spacer" />
        <button type="button" data-name="logout-nav" className="fund-financials-nav fund-financials-logout"><span>خروج</span><img src={logoutIcon} alt="" /></button>
      </aside>

      {profitDialogOpen ? (
        <div className="fund-financials-modal-backdrop" onMouseDown={(event) => event.target === event.currentTarget && setProfitDialogOpen(false)}>
          <form className="fund-financials-modal" onSubmit={submitProfit}>
            <h2>ثبت سود صندوق</h2>
            <p>پس از ثبت، سود با نسبت فعال فعلی تقسیم می‌شود و سهم منابع صندوق و درآمد ماه به‌صورت مستقل ذخیره می‌شوند.</p>
            <div className="fund-financials-form-grid">
              <label><span>دوره مالی</span><input name="period" placeholder="مثلاً ۱۴۰۵/۰۷" autoComplete="off" /></label>
              <label><span>پروژه / سرمایه‌گذاری</span><input name="project" placeholder="نام پروژه یا سرمایه‌گذاری" autoComplete="off" /></label>
              <label><span>مبلغ سود (تومان)</span><input name="amount" type="number" min="1" step="1000" placeholder="مبلغ سود نهایی" /></label>
              <label><span>تاریخ ثبت</span><input name="date" placeholder="مثلاً ۱۴۰۵/۰۷/۳۰" autoComplete="off" /></label>
              <label><span>شماره رسید / مرجع</span><input name="reference" placeholder="اختیاری؛ در صورت خالی بودن خودکار ساخته می‌شود" autoComplete="off" /></label>
              <label><span>نسبت فعال</span><input value={`${faNumber(settings.returnShare)}٪ منابع / ${faNumber(settings.incomeShare)}٪ درآمد`} readOnly /></label>
              <label className="fund-financials-wide"><span>توضیحات</span><textarea name="note" placeholder="توضیح اختیاری درباره سود ثبت‌شده" /></label>
            </div>
            {formError ? <div className="fund-financials-error">{formError}</div> : null}
            <div className="fund-financials-modal-actions">
              <button type="button" className="fund-financials-modal-cancel" onClick={() => setProfitDialogOpen(false)}>انصراف</button>
              <button type="submit" className="fund-financials-modal-save">ثبت و تقسیم سود</button>
            </div>
          </form>
        </div>
      ) : null}

      {ratioDialogOpen ? (
        <div className="fund-financials-modal-backdrop" onMouseDown={(event) => event.target === event.currentTarget && setRatioDialogOpen(false)}>
          <div className="fund-financials-modal fund-financials-ratio-modal">
            <h2>تنظیم نسبت تقسیم سود</h2>
            <p>این نسبت فقط برای سودهایی که بعد از ذخیره این تنظیم ثبت می‌شوند استفاده خواهد شد.</p>
            <div className="fund-financials-ratio-fields">
              <label><span>بازگشت به منابع صندوق</span><div><input type="number" min="0" max="100" step="0.1" value={returnShareDraft} onChange={(event) => { const value = clampShare(Number(event.target.value)); setReturnShareDraft(value); setIncomeShareDraft(clampShare(100 - value)); }} /><b>٪</b></div></label>
              <label><span>درآمد ماه</span><div><input type="number" min="0" max="100" step="0.1" value={incomeShareDraft} onChange={(event) => { const value = clampShare(Number(event.target.value)); setIncomeShareDraft(value); setReturnShareDraft(clampShare(100 - value)); }} /><b>٪</b></div></label>
            </div>
            <div className="fund-financials-ratio-total">مجموع: {faNumber(returnShareDraft + incomeShareDraft)}٪</div>
            <div className="fund-financials-modal-actions">
              <button type="button" className="fund-financials-modal-cancel" onClick={() => setRatioDialogOpen(false)}>انصراف</button>
              <button type="button" className="fund-financials-modal-save" onClick={saveRatio}>ذخیره نسبت</button>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}
