import { useState, type FormEvent } from "react";
import { Link } from "react-router-dom";
import { normalizeIranMobile } from "../../auth/oidc";
import { startupApplicationStatus, submitStartupApplication, trackStartupApplication } from "./api";

const fieldClass = "w-full rounded-lg border border-slate-300 bg-white px-3 py-2";

export default function LiveStartupRegistration() {
  const [trackingCode, setTrackingCode] = useState("");
  const [status, setStatus] = useState("");
  const [error, setError] = useState("");
  const [busy, setBusy] = useState(false);

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (busy || trackingCode) return;
    const fields = new FormData(event.currentTarget);
    const pitchDeck = fields.get("pitchDeck");
    if (!(pitchDeck instanceof File) || pitchDeck.size === 0 || pitchDeck.size > 15 * 1024 * 1024) {
      setError("فایل معرفی را به صورت PDF با حجم حداکثر ۱۵ مگابایت انتخاب کنید.");
      return;
    }
    fields.set("mobile", normalizeIranMobile(String(fields.get("mobile") ?? "")));
    setBusy(true);
    setError("");
    try {
      const result = await submitStartupApplication(fields);
      setTrackingCode(result.trackingCode);
    } catch (cause) {
      setError(cause instanceof Error ? cause.message : "ثبت درخواست انجام نشد.");
    } finally {
      setBusy(false);
    }
  }

  async function track(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const code = String(new FormData(event.currentTarget).get("code") ?? "").trim();
    setStatus("در حال دریافت وضعیت…");
    try {
      const result = await trackStartupApplication(code);
      setStatus(result ? startupApplicationStatus(result.status) : "درخواستی با این کد پیدا نشد.");
    } catch {
      setStatus("دریافت وضعیت درخواست انجام نشد. دوباره تلاش کنید.");
    }
  }

  return (
    <main dir="rtl" className="mx-auto max-w-3xl space-y-6 px-4 py-10 text-[#17324d]">
      <Link to="/startups" className="text-[#167dca]">بازگشت به صفحه استارتاپ‌ها</Link>
      <section className="space-y-4 rounded-xl bg-white p-6 shadow-sm">
        <h1 className="text-2xl font-bold">ثبت‌نام استارتاپ</h1>
        {trackingCode ? (
          <div role="status" className="space-y-2">
            <p>درخواست ثبت شد و در صف بررسی خانهٔ خلاق قرار گرفت. کد پیگیری را نگه دارید.</p>
            <output dir="ltr" className="block break-all rounded-lg bg-slate-100 p-3">{trackingCode}</output>
          </div>
        ) : (
          <form onSubmit={submit} className="grid gap-4 sm:grid-cols-2">
            <label className="space-y-1">نام استارتاپ<input className={fieldClass} name="name" maxLength={160} required /></label>
            <label className="space-y-1">نام و نام خانوادگی نماینده<input className={fieldClass} name="contactName" maxLength={120} required /></label>
            <label className="space-y-1">شماره موبایل<input className={fieldClass} name="mobile" type="tel" dir="ltr" maxLength={16} required /></label>
            <label className="space-y-1">ایمیل<input className={fieldClass} name="email" type="email" dir="ltr" maxLength={254} required /></label>
            <label className="space-y-1 sm:col-span-2">معرفی استارتاپ و راهکار اجتماعی<textarea className={fieldClass} name="description" rows={5} maxLength={4000} required /></label>
            <label className="space-y-1">جامعهٔ هدف<input className={fieldClass} name="audience" maxLength={200} required /></label>
            <label className="space-y-1">معرفی محصول و وضعیت فعلی<textarea className={fieldClass} name="product" rows={3} maxLength={4000} required /></label>
            <label className="space-y-1 sm:col-span-2">اعضای اصلی تیم و مسئولیت‌ها<textarea className={fieldClass} name="team" rows={3} maxLength={4000} required /></label>
            <label className="space-y-1 sm:col-span-2">فایل معرفی استارتاپ (PDF، حداکثر ۱۵ مگابایت)<input className={fieldClass} name="pitchDeck" type="file" accept=".pdf,application/pdf" required /></label>
            <button type="submit" disabled={busy} className="rounded-lg bg-[#167dca] px-4 py-2 font-bold text-white disabled:opacity-50">
              {busy ? "در حال ارسال…" : "ارسال پرونده"}
            </button>
          </form>
        )}
        {error && <p role="alert" className="text-red-700">{error}</p>}
      </section>
      <section className="space-y-3 rounded-xl bg-white p-6 shadow-sm">
        <h2 className="text-lg font-bold">پیگیری ثبت‌نام استارتاپ</h2>
        <form onSubmit={track} className="flex flex-wrap items-end gap-3">
          <label className="min-w-0 flex-1 space-y-1">کد پیگیری<input className={fieldClass} name="code" dir="ltr" maxLength={48} defaultValue={trackingCode} key={trackingCode} required /></label>
          <button className="rounded-lg border border-[#167dca] px-4 py-2 text-[#167dca]">پیگیری</button>
        </form>
        {status && <p role="status">{status}</p>}
      </section>
    </main>
  );
}
