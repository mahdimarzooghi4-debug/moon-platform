import { useEffect, useState } from "react";
import { getCurrentIdentity, type CurrentIdentity } from "./api";
import { getSession, type AuthSession } from "./oidc";

type Status = "login-required" | "loading" | "ready" | "submitting"
  | "linked" | "account-error" | "expired" | "conflict" | "request-error";

const LOGIN_URL = "/auth?returnTo=%2Fmehrad%2Fconfirm";
const LINK_URL = "/api/v1/integrations/mehrad/sso/link-existing";

/** Existing-account linkage only. No Mehrad secrets or handoff proofs are read in JS. */
export default function MehradConfirmPage() {
  const [session] = useState<AuthSession | null>(() => getSession());
  const [identity, setIdentity] = useState<CurrentIdentity | null>(null);
  const [agreed, setAgreed] = useState(false);
  const [status, setStatus] = useState<Status>(() => session ? "loading" : "login-required");

  useEffect(() => {
    if (!session) return;
    let active = true;
    getCurrentIdentity(session).then((current) => {
      if (!active) return;
      if (!current.isActive) { setStatus("account-error"); return; }
      setIdentity(current);
      setStatus("ready");
    }).catch(() => { if (active) setStatus("account-error"); });
    return () => { active = false; };
  }, [session]);

  async function submit() {
    if (!session || !identity?.isActive || !agreed || status !== "ready") return;
    setStatus("submitting");
    try {
      // The API and web must share an HTTPS origin. Origin and proof are verified server-side.
      const response = await fetch(LINK_URL, {
        method: "POST",
        credentials: "same-origin",
        cache: "no-store",
        headers: {
          Accept: "application/json",
          Authorization: "Bearer " + session.accessToken,
          "X-Moon-Mehrad-Confirm": "link-account",
        },
      });
      if (response.ok) setStatus("linked");
      else if (response.status === 409) setStatus("conflict");
      else if (response.status === 400 || response.status === 404) setStatus("expired");
      else if (response.status === 401 || response.status === 403) setStatus("account-error");
      else setStatus("request-error");
    } catch {
      // A lost acknowledgment may have consumed the one-use proof; never auto-retry.
      setStatus("request-error");
    }
  }

  const messages: Record<Status, string> = {
    "login-required": "برای اتصال حساب موجود، ابتدا از مسیر مستقل ماه وارد شوید.",
    loading: "در حال بررسی حساب فعلی شما در ماه…",
    ready: "حساب نمایش‌داده‌شده را بررسی کنید. اتصال فقط پس از تأیید شما انجام می‌شود.",
    submitting: "در حال ثبت اتصال امن حساب‌ها…",
    linked: "اتصال حساب‌ها ثبت شد. ورود مستقل ماه همچنان در دسترس است.",
    "account-error": "حساب فعلی ماه شناسایی نشد یا فعال نیست. لطفاً دوباره وارد شوید.",
    expired: "درخواست اتصال منقضی یا استفاده‌شده است. لطفاً دوباره از مهراد آغاز کنید.",
    conflict: "یکی از این حساب‌ها به حساب دیگری متصل شده است. با پشتیبانی ماه تماس بگیرید.",
    "request-error": "نتیجه درخواست قطعی نیست. برای پیشگیری از ثبت تکراری، آن را خودکار تکرار نمی‌کنیم.",
  };

  const busy = status === "loading" || status === "submitting";
  return (
    <main dir="rtl" className="min-h-screen bg-[#f6f9fb] px-4 py-12 text-[#243247]"
      style={{ fontFamily: "'Vazirmatn', sans-serif" }}>
      <section className="mx-auto max-w-lg rounded-2xl border border-[#dce7ef] bg-white p-7 shadow-sm"
        aria-labelledby="mehrad-confirm-title">
        <header className="mb-5 flex items-center justify-between gap-3">
          <span className="text-sm font-semibold text-[#217bc7]">سامانه ماه</span>
          <span className="rounded-full bg-[#eff6fc] px-3 py-1 text-xs text-[#315e88]">اتصال امن مهراد</span>
        </header>
        <h1 id="mehrad-confirm-title" className="mb-3 text-2xl font-bold">تأیید اتصال حساب</h1>
        <p className="mb-5 text-sm leading-7 text-[#546579]">
          این صفحه صرفاً حساب موجود ماه را به مهراد متصل می‌کند.
          ورود بدون نشست مستقل ماه هنوز فعال نشده است.
        </p>
        {identity && (
          <div className="mb-5 rounded-xl border border-[#d7e5ef] bg-[#f8fbfe] p-4 text-sm leading-7">
            <p className="font-semibold">حساب شناسایی‌شده در ماه</p>
            <p>{identity.displayName?.trim() || "بدون نام نمایشی"}</p>
            <p dir="ltr" className="break-all text-xs text-[#64758a]">{identity.userId}</p>
          </div>
        )}
        <p role="status" aria-live="polite" className="mb-5 text-sm leading-7 text-[#43566b]">
          {messages[status]}
        </p>
        {status === "ready" && (
          <>
            <label className="mb-4 flex cursor-pointer items-start gap-3 text-sm leading-7">
              <input type="checkbox" checked={agreed} onChange={(e) => setAgreed(e.target.checked)}
                className="mt-2 h-4 w-4 shrink-0" />
              <span>تأیید می‌کنم این حساب ماه متعلق به من است و می‌خواهم آن را به حساب مهرادم متصل کنم.</span>
            </label>
            <button type="button" onClick={() => void submit()} disabled={!agreed}
              className="w-full rounded-xl bg-[#117ac2] px-4 py-3 font-semibold text-white disabled:cursor-not-allowed disabled:opacity-40">
              تأیید و اتصال حساب‌ها
            </button>
          </>
        )}
        {(status === "login-required" || status === "account-error") && (
          <a href={LOGIN_URL} className="inline-block rounded-xl bg-[#117ac2] px-5 py-3 text-sm font-semibold text-white">
            ورود به حساب موجود ماه
          </a>
        )}
        {busy && <p className="text-xs text-[#64758a]">در حال بررسی؛ درخواست تکراری ارسال نمی‌شود.</p>}
        <div className="mt-6 border-t border-[#e8eef3] pt-5">
          <a href="/" className="text-sm font-semibold text-[#217bc7]">بازگشت به صفحه اصلی ماه</a>
        </div>
        <p className="mt-4 text-xs leading-6 text-[#718096]">
          ماه در این صفحه رمز یا کد ورود مهراد را درخواست نمی‌کند و اتصال حساب، نقش مدیریتی ایجاد نمی‌کند.
        </p>
      </section>
    </main>
  );
}
