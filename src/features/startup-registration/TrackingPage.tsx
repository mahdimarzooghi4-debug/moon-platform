import { useRef, useState, type FormEvent } from "react";
import { Link } from "react-router-dom";
import { localizePersianNumericInput, normalizeIranMobile, toPersianLoginDigits } from "../../auth/oidc";
import { confirmStartupMobile, sendStartupMobileCode, startupApplicationStatus, trackStartupApplicationWithMobile } from "./api";

export default function TrackingPage() {
  const [reference, setReference] = useState(() => (() => { const code = sessionStorage.getItem("moon-startup-tracking-code") ?? ""; return /^[0-9]{10}$/.test(code) ? toPersianLoginDigits(code) : code; })());
  const [mobile, setMobile] = useState("");
  const [otp, setOtp] = useState("");
  const [destination, setDestination] = useState("");
  const [status, setStatus] = useState("");
  const [error, setError] = useState("");
  const [busy, setBusy] = useState(false);
  const lock = useRef(false);
  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (lock.current) return;
    lock.current = true;
    setBusy(true); setError(""); setStatus("");
    try {
      const canonicalMobile = normalizeIranMobile(mobile);
      if (!/^09[0-9]{9}$/.test(canonicalMobile)) throw new Error("شماره موبایل را درست وارد کنید.");
      if (!destination) {
        await sendStartupMobileCode(canonicalMobile);
        setDestination(canonicalMobile);
      } else {
        const token = await confirmStartupMobile(destination, normalizeIranMobile(otp));
        setDestination(""); setOtp("");
        const result = await trackStartupApplicationWithMobile(reference.trim(), destination, token);
        setStatus(result ? startupApplicationStatus(result.status) : "درخواستی با این کد و شماره موبایل پیدا نشد.");
      }
    } catch (cause) {
      setError(cause instanceof Error ? cause.message : "پیگیری انجام نشد.");
    } finally {
      lock.current = false;
      setBusy(false);
    }
  }
  return (
    <main dir="rtl" className="mx-auto flex min-h-screen max-w-xl flex-col justify-center px-4 py-12">
      <section className="rounded-2xl border border-slate-200 bg-white p-6 text-right sm:p-8">
        <h1 className="mb-3 text-xl font-bold text-slate-800">پیگیری درخواست ثبت‌نام استارتاپ</h1>
        <p className="mb-6 text-sm leading-7 text-slate-600">کد پیگیری و شماره موبایل ثبت‌شده را وارد کنید. وضعیت درخواست پس از تأیید پیامکی نمایش داده می‌شود.</p>
        <form onSubmit={submit} className="grid gap-4">
          <label className="grid gap-2 text-sm font-semibold">کد پیگیری
            <input dir="ltr" required maxLength={48} value={reference} disabled={busy || !!destination} onChange={e => setReference(e.currentTarget.value)} className="w-full rounded-xl border border-slate-300 p-3 text-right" />
          </label>
          <label className="grid gap-2 text-sm font-semibold">شماره موبایل
            <input dir="ltr" type="tel" required inputMode="numeric" maxLength={16} value={mobile} disabled={busy || !!destination} onChange={e => setMobile(localizePersianNumericInput(e.currentTarget))} className="w-full rounded-xl border border-slate-300 p-3 text-right" />
          </label>
          {destination && <label className="grid gap-2 text-sm font-semibold">کد تأیید پیامکی
            <input dir="ltr" required inputMode="numeric" autoComplete="one-time-code" maxLength={6} pattern="[0-9۰-۹٠-٩]{6}" value={otp} disabled={busy} onChange={e => setOtp(localizePersianNumericInput(e.currentTarget))} className="w-full rounded-xl border border-slate-300 p-3 text-center" />
          </label>}
          <button disabled={busy} className="rounded-xl bg-[#1476b9] p-3 font-semibold text-white disabled:opacity-50">{busy ? "در حال بررسی..." : destination ? "تأیید و مشاهده وضعیت" : "دریافت کد تأیید"}</button>
          {destination && <button type="button" disabled={busy} onClick={() => { setDestination(""); setOtp(""); setError(""); }} className="text-sm text-[#1476b9]">ویرایش اطلاعات</button>}
        </form>
        {error && <p role="alert" className="mt-4 text-sm text-red-700">{error}</p>}
        {status && <p role="status" className="mt-4 rounded-xl bg-slate-100 p-4 text-sm">{status}</p>}
        <p className="mt-5 text-xs text-slate-500">پیگیری ثبت‌نام شرکت‌ها هنوز فعال نیست.</p>
        <Link to="/" className="mt-4 inline-block text-sm text-[#1476b9]">بازگشت به صفحه اصلی</Link>
      </section>
    </main>
  );
}
