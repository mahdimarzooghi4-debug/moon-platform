import { useEffect, useState, type FormEvent } from "react";
import { Link } from "react-router-dom";
import {
  approveStartupApplication,
  downloadStartupPitchDeck,
  listStartupApplications,
  startupApplicationStatus,
  type StartupApplication,
} from "../../../features/startup-registration/api";

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
    <main dir="rtl" className="mx-auto max-w-5xl space-y-5 px-4 py-8 text-[#17324d]">
      <Link className="text-[#167dca]" to="/panel/creative-house">بازگشت به داشبورد خانهٔ خلاق</Link>
      <h1 className="text-2xl font-bold">پرونده‌های ثبت‌نام استارتاپ‌ها</h1>
      {loadingError && <p role="alert">{loadingError}</p>}
      {approvalError && <p role="alert">{approvalError}</p>}
      {!items && !loadingError && <p role="status">در حال دریافت پرونده‌ها…</p>}
      {items?.length === 0 && <p>در این صفحه پرونده‌ای وجود ندارد.</p>}
      {items?.map((item) => (
        <details key={item.id} className="space-y-3 rounded-xl border border-slate-200 bg-white p-4">
          <summary className="cursor-pointer font-bold">{item.name} — {startupApplicationStatus(item.status)}</summary>
          <p>{item.contactName} · <bdi>{item.mobile}</bdi> · <bdi>{item.email}</bdi></p>
          <p className="whitespace-pre-wrap break-words">{item.description}</p>
          {item.product && <p className="whitespace-pre-wrap break-words">محصول: {item.product}</p>}
          {item.team && <p className="whitespace-pre-wrap break-words">تیم: {item.team}</p>}
          {item.audience && <p className="break-words">جامعهٔ هدف: {item.audience}</p>}
          {item.hasPitchDeck && (
            <button type="button" className="text-[#167dca]" onClick={() => {
              setApprovalError("");
              void downloadStartupPitchDeck(item.id).catch((cause: Error) => setApprovalError(cause.message));
            }}>دریافت فایل معرفی</button>
          )}
          {item.status !== "approved" && (
            <form onSubmit={(event) => approve(event, item)} className="flex flex-wrap items-end gap-3">
              {item.status === "pending_review" && <label>رمز موقت حساب<input name="temporaryPassword" type="password" autoComplete="new-password" dir="ltr" minLength={12} maxLength={128} required className="block rounded-lg border border-slate-300 p-2" /></label>}
              <button disabled={Boolean(pending)} className="rounded-lg bg-[#167dca] px-4 py-2 text-white disabled:opacity-50">
                {item.status === "pending_activation" ? "ادامهٔ فعال‌سازی" : "تأیید نهایی و ساخت حساب"}
              </button>
            </form>
          )}
        </details>
      ))}
      <nav aria-label="صفحه‌بندی پرونده‌ها" className="flex gap-4">
        {page > 1 && <button onClick={() => setPage(page - 1)}>صفحهٔ قبل</button>}
        {items?.length === 50 && <button onClick={() => setPage(page + 1)}>صفحهٔ بعد</button>}
      </nav>
    </main>
  );
}
