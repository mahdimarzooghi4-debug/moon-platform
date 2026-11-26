import { useEffect, useState, type FormEvent } from "react";
import { normalizeIranMobile } from "../../auth/oidc";
import { confirmStartupMobile, getStartupMobileVerification, sendStartupMobileCode } from "./api";
import { registrationMobileVerification } from "./draft";

export default function MobileVerification({ mobile: inputMobile }: { mobile: string }) {
  const [enabled, setEnabled] = useState(registrationMobileVerification.required);
  const [destination, setDestination] = useState("");
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const controller = new AbortController();
    getStartupMobileVerification(controller.signal).then(required => {
      registrationMobileVerification.required = required;
      setEnabled(required);
    }).catch(() => {});
    return () => controller.abort();
  }, []);

  async function send() {
    if (busy) return;
    const mobile = normalizeIranMobile(inputMobile);
    if (!/^09[0-9]{9}$/.test(mobile)) {
      setError("شماره موبایل را درست وارد کنید.");
      return;
    }
    setBusy(true);
    setError("");
    try {
      await sendStartupMobileCode(mobile);
      setDestination(mobile);
    } catch (cause) {
      setError(cause instanceof Error ? cause.message : "ارسال کد انجام نشد.");
    } finally {
      setBusy(false);
    }
  }

  async function verify(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (busy) return;
    const code = String(new FormData(event.currentTarget).get("code") ?? "").replace(
      /[۰-۹٠-٩]/g, digit => String(digit.charCodeAt(0) - (digit >= "۰" ? 1776 : 1632)),
    );
    setBusy(true);
    setError("");
    try {
      registrationMobileVerification.token = await confirmStartupMobile(destination, code);
      registrationMobileVerification.mobile = destination;
      setDestination("");
    } catch (cause) {
      setError(cause instanceof Error ? cause.message : "تأیید کد انجام نشد.");
    } finally {
      setBusy(false);
    }
  }

  if (!enabled) return null;
  const confirmed = Boolean(registrationMobileVerification.token)
    && registrationMobileVerification.mobile === normalizeIranMobile(inputMobile);

  return (
    <>
      <button type="button" onClick={() => void send()} disabled={busy}
        className="shrink-0 rounded-[8px] bg-[#eaf5fd] px-3 py-1.5 text-xs font-semibold text-[#2094e3]">
        {confirmed ? "تأیید شد" : "دریافت کد تأیید"}
      </button>
      {destination && (
        <dialog open aria-label="تأیید شماره موبایل"
          className="fixed inset-0 z-[200] m-auto rounded-xl border border-slate-200 bg-white p-6 shadow-xl">
          <form onSubmit={verify} className="flex flex-col gap-3">
            <label>کد پیامک‌شده
              <input name="code" required inputMode="numeric" autoComplete="one-time-code" maxLength={6}
                pattern="[0-9۰-۹٠-٩]{6}" className="block rounded border border-slate-300 p-2" />
            </label>
            {error && <p role="alert" className="text-sm text-red-700">{error}</p>}
            <button disabled={busy} className="rounded-lg bg-[#2094e3] p-2 text-white">تأیید شماره</button>
            <button type="button" onClick={() => { setDestination(""); setError(""); }}>بازگشت</button>
          </form>
        </dialog>
      )}
      {!destination && error && <p role="alert" className="text-xs text-red-700">{error}</p>}
    </>
  );
}
