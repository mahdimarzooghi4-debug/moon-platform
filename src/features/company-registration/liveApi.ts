import type { StartupApplicationStatus } from "../startup-registration/api";
const base = (import.meta.env.VITE_API_BASE_URL ?? "").replace(/\/$/, "") + "/api/v1/public/company-applications";

export async function companyAvailability(signal?: AbortSignal) {
  const response = await fetch(base + "/availability", { signal, cache: "no-store" });
  if (!response.ok) return false;
  return (await response.json()).enabled === true;
}

export async function submitCompanyApplication(form: FormData) {
  const response = await fetch(base, { method: "POST", body: form });
  if (!response.ok) {
    const body = await response.json().catch(() => null);
    if (body?.code === "mobile_verification_required") throw new Error("تأیید شماره موبایل منقضی شده است. در مرحله دوم دوباره تأیید کنید.");
    if (body?.code === "invalid_company_documents") throw new Error("مدارک و حجم فایل‌ها را بررسی کنید.");
    if (body?.code === "invalid_company_application") throw new Error("اطلاعات و تأییدیه‌های فرم را بررسی کنید.");
    throw new Error("ثبت درخواست تأیید نشد. پیش از ارسال دوباره وضعیت را بررسی کنید.");
  }
  const result = await response.json();
  if (typeof result.trackingCode !== "string" || !/^[0-9]{10}$/.test(result.trackingCode) || result.status !== "pending_review")
    throw new Error("پاسخ ثبت درخواست قابل تأیید نیست.");
  return result as { trackingCode: string; status: "pending_review" };
}

export async function trackCompanyApplication(trackingCode: string, mobile: string, mobileVerification: string) {
  const response = await fetch(base + "/track", {
    method: "POST", headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ trackingCode, mobile, mobileVerification }),
  });
  if (response.status === 404) return null;
  if (!response.ok) throw new Error("پیگیری شرکت انجام نشد. شماره موبایل را دوباره تأیید کنید.");
  return response.json() as Promise<StartupApplicationStatus>;
}
