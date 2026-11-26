import { useEffect, useState, type FormEvent } from "react";
import { Link } from "react-router-dom";
import "../index.css";
import {
  approveStartupApplication,
  downloadStartupAttachment,
  listStartupApplications,
  startupApplicationStatus,
  type StartupApplication,
  type StartupAttachment,
} from "../../../features/startup-registration/api";

const panelPath = "/panel/creative-house";
const sidebarAssets = "/assets/creative-house/startup-evaluations";
const navigation = [
  ["", "داشبورد", "dashboard", "dashboard-nav"],
  ["/startup-evaluations", "ارزیابی استارتاپ‌ها", "startups", "startup-evaluations-nav"],
  ["/project-evaluations", "ارزیابی پروژه‌ها", "projects", "project-evaluations-nav"],
  ["/milestone-evaluations", "ارزیابی مراحل پروژه", "milestones", "milestone-evaluations-nav"],
  ["/reports", "گزارش‌ها", "reports", "reports-nav"],
  ["/evaluation-history", "سوابق ارزیابی", "history", "evaluation-history-nav"],
  ["/settings", "تنظیمات", "settings", "settings-nav"],
] as const;

const attachments = [
  ["hasPitchDeck", "pitchDeck", "فایل معرفی"],
  ["hasLogo", "logo", "لوگو"],
  ["hasLegalDocument", "legalDocument", "مدرک حقوقی"],
  ["hasIdentityDocument", "identityDocument", "مدرک هویتی"],
] as const satisfies readonly (readonly [keyof StartupApplication, StartupAttachment | "pitchDeck", string])[];

export default function LiveStartupEvaluations() {
  const [page, setPage] = useState(1);
  const [revision, setRevision] = useState(0);
  const [items, setItems] = useState<StartupApplication[] | null>(null);
  const [loadingError, setLoadingError] = useState("");
  const [approvalError, setApprovalError] = useState("");
  const [pending, setPending] = useState("");

  useEffect(() => {
    const controller = new AbortController();
    setItems(null);
    setLoadingError("");
    listStartupApplications(page, controller.signal)
      .then((result) => { if (!controller.signal.aborted) setItems(result); })
      .catch((cause: Error) => { if (!controller.signal.aborted) setLoadingError(cause.message); });
    return () => controller.abort();
  }, [page, revision]);

  async function approve(event: FormEvent<HTMLFormElement>, application: StartupApplication) {
    event.preventDefault();
    if (pending) return;
    const form = event.currentTarget;
    const password = String(new FormData(form).get("temporaryPassword") ?? "");
    setPending(application.id);
    setApprovalError("");
    try {
      await approveStartupApplication(application.id, password);
      form.reset();
      setRevision((value) => value + 1);
    } catch (cause) {
      setApprovalError(cause instanceof Error ? cause.message : "تأیید انجام نشد.");
    } finally {
      setPending("");
    }
  }

  return (
    <div dir="rtl" className="creative-house-dashboard flex bg-[#f5f8fb] text-[#17324d]">
      <main data-name="Main Content" className="min-w-0 flex-1 space-y-5 px-4 py-6 lg:px-8">
        <header className="border-b border-[#dde7f0] pb-4">
          <h1 className="text-2xl font-bold">ارزیابی استارتاپ‌ها</h1>
        </header>
        <section aria-labelledby="startup-applications-title" className="rounded-xl border border-[#dde7f0] bg-white">
          <h2 id="startup-applications-title" className="border-b border-[#dde7f0] px-5 py-4 text-base font-bold">
            پرونده‌های ثبت‌نام
          </h2>
          {loadingError && <p className="px-5 py-4 text-red-700" role="alert">{loadingError}</p>}
          {approvalError && <p className="px-5 py-4 text-red-700" role="alert">{approvalError}</p>}
          {!items && !loadingError && <p className="px-5 py-4" role="status">در حال دریافت پرونده‌ها…</p>}
          {items?.length === 0 && <p className="px-5 py-4">در این صفحه پرونده‌ای وجود ندارد.</p>}
          {items?.map((item) => (
            <details key={item.id} className="group border-b border-[#dde7f0] last:border-b-0">
              <summary className="flex cursor-pointer list-none flex-wrap items-center justify-between gap-3 px-5 py-4 hover:bg-[#f5f8fb]">
                <div className="flex min-w-0 items-center gap-3">
                  <span aria-hidden="true" className="transition-transform group-open:-rotate-90">‹</span>
                  <span className="break-words font-semibold">{item.name}</span>
                </div>
                <span className="rounded-full bg-[#eaf5fd] px-3 py-1 text-xs font-medium text-[#17324d]">
                  {startupApplicationStatus(item.status)}
                </span>
              </summary>
              <div className="space-y-5 border-t border-[#dde7f0] bg-[#f8fafc] p-5">
                <dl className="grid gap-4 text-sm sm:grid-cols-2 lg:grid-cols-4">
                  <ReviewField label="نماینده" value={item.contactName} />
                  <ReviewField label="شماره موبایل" value={item.mobile} />
                  <ReviewField label="ایمیل" value={item.email} />
                  <ReviewField label="کد ملی نماینده" value={item.nationalId} />
                </dl>
                <dl className="grid gap-4 border-t border-[#dde7f0] pt-4 text-sm lg:grid-cols-2">
                  <ReviewField label="راهکار و اطلاعات تکمیلی" value={item.description} />
                  <ReviewField label="محصول" value={item.product} />
                  <ReviewField label="تیم" value={item.team} />
                  <ReviewField label="جامعهٔ هدف" value={item.audience} />
                </dl>
                {attachments.some(([flag]) => item[flag]) && (
                  <section className="space-y-2">
                    <h3 className="text-sm font-semibold">مدارک پرونده</h3>
                    <div className="flex flex-wrap gap-2">
                      {attachments.map(([flag, kind, label]) => item[flag] && (
                        <button key={kind} type="button"
                          className="rounded-lg border border-[#c6dcea] bg-white px-3 py-2 text-sm text-[#1267a5] hover:bg-[#eaf5fd]"
                          onClick={() => {
                            setApprovalError("");
                            void downloadStartupAttachment(item.id, kind).catch((cause: Error) => setApprovalError(cause.message));
                          }}>دریافت {label}</button>
                      ))}
                    </div>
                  </section>
                )}
                {item.status !== "approved" && (
                  <form onSubmit={(event) => approve(event, item)} className="flex flex-wrap items-end gap-3 border-t border-[#dde7f0] pt-4">
                    {item.status === "pending_review" && (
                      <label className="text-sm font-semibold">رمز موقت حساب
                        <input name="temporaryPassword" type="password" autoComplete="new-password" dir="ltr"
                          minLength={12} maxLength={128} required className="mt-1 block rounded-lg border border-slate-300 bg-white p-2" />
                      </label>
                    )}
                    <button disabled={Boolean(pending)}
                      className="rounded-lg bg-[#167dca] px-4 py-2 text-sm font-semibold text-white disabled:opacity-50">
                      {item.status === "pending_activation" ? "ادامهٔ فعال‌سازی" : "تأیید نهایی و ساخت حساب"}
                    </button>
                  </form>
                )}
              </div>
            </details>
          ))}
        </section>
        {(page > 1 || items?.length === 50) && (
          <nav aria-label="صفحه‌بندی پرونده‌ها" className="flex gap-4 text-sm text-[#1267a5]">
            {page > 1 && <button type="button" onClick={() => setPage(page - 1)}>صفحهٔ قبل</button>}
            {items?.length === 50 && <button type="button" onClick={() => setPage(page + 1)}>صفحهٔ بعد</button>}
          </nav>
        )}
      </main>
      <aside data-name="colored-sidebar" className="flex flex-col gap-3 bg-[#17324d] px-4 py-5 text-white">
        <Link to={panelPath} data-name="brand-logo" className="flex h-14 items-center justify-center rounded-xl bg-white px-3 py-2">
          <img src={sidebarAssets + "/logo.png"} alt="سامانه ماه" className="h-10 max-w-full object-contain" />
        </Link>
        <div data-name="panel-identity" className="flex min-h-12 items-center justify-center">
          <p className="text-sm font-bold">خانه خلاق و نوآوری آینه</p>
        </div>
        <nav aria-label="پنل خانهٔ خلاق" className="flex flex-col gap-2">
          {navigation.map(([path, label, icon, marker]) => (
            <Link key={path} to={panelPath + path} data-name={marker}
              aria-current={path === "/startup-evaluations" ? "page" : undefined}
              className="flex min-h-9 items-center gap-2 rounded-lg px-3 text-sm hover:bg-white/10 aria-[current=page]:bg-[#2094e3]">
              <img src={sidebarAssets + "/nav-" + icon + ".svg"} alt="" className="h-[18px] w-[18px] shrink-0" />
              {label}
            </Link>
          ))}
        </nav>
        <button type="button" data-name="logout-nav" className="mt-auto min-h-9 rounded-lg bg-white px-3 text-sm font-medium text-[#17324d]">
          خروج از سیستم
        </button>
      </aside>
    </div>
  );
}

function ReviewField({ label, value }: { label: string; value?: string }) {
  if (!value) return null;
  return (
    <div className="min-w-0">
      <dt className="mb-1 font-semibold text-[#60758a]">{label}</dt>
      <dd className="whitespace-pre-wrap break-words"><bdi>{value}</bdi></dd>
    </div>
  );
}
