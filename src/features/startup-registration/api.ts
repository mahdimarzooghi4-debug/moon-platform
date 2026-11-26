import { getValidSession } from "../../auth/oidc";

const baseUrl = (import.meta.env.VITE_API_BASE_URL ?? "").replace(/\/$/, "");
const publicPath = "/api/v1/public/startup-applications";

const mobileVerificationPath = baseUrl + publicPath + "/mobile-verification";

export async function getStartupMobileVerification(signal: AbortSignal): Promise<boolean> {
  const response = await fetch(mobileVerificationPath, { signal });
  if (!response.ok) throw new Error("دریافت وضعیت تأیید موبایل انجام نشد.");
  return Boolean((await response.json()).required);
}

export async function sendStartupMobileCode(mobile: string) {
  const response = await fetch(mobileVerificationPath + "/send", {
    method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ mobile }),
  });
  if (response.status === 429) throw new Error("برای درخواست کد جدید کمی صبر کنید.");
  if (!response.ok) throw new Error("ارسال پیامک انجام نشد. دوباره تلاش کنید.");
}

export async function confirmStartupMobile(mobile: string, code: string): Promise<string> {
  const response = await fetch(mobileVerificationPath + "/confirm", {
    method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ mobile, code }),
  });
  if (!response.ok) throw new Error("کد پیامکی معتبر نیست یا منقضی شده است.");
  return (await response.json()).token;
}

export type StartupApplicationInput = {
  name: string;
  contactName: string;
  mobile: string;
  email: string;
  description: string;
  team?: string;
  product?: string;
  audience?: string;
  hasPitchDeck?: boolean;
  nationalId?: string;
  hasLogo?: boolean;
  hasLegalDocument?: boolean;
  hasIdentityDocument?: boolean;
};

export type StartupApplicationStatus = {
  status: string;
  submittedAtUtc: string;
};

export type StartupApplication = StartupApplicationInput & StartupApplicationStatus & { id: string };

export async function submitStartupApplication(input: FormData) {
  const response = await fetch(baseUrl + publicPath, {
    method: "POST",
    body: input,
  });
  if (response.status === 400) {
    const error = await response.json().catch(() => null);
    if (error?.code === "mobile_verification_required") throw new Error("برای تأیید دوبارهٔ شماره موبایل، به مرحلهٔ اول برگردید.");
    throw new Error("اطلاعات ثبت‌نام معتبر نیست.");
  }
  if (!response.ok) throw new Error("ثبت درخواست انجام نشد.");
  return response.json() as Promise<{ trackingCode: string }>;
}

export async function trackStartupApplication(code: string) {
  const response = await fetch(baseUrl + publicPath + "/" + encodeURIComponent(code));
  if (response.status === 404) return null;
  if (!response.ok) throw new Error("دریافت وضعیت درخواست انجام نشد.");
  return response.json() as Promise<StartupApplicationStatus>;
}

export async function listStartupApplications(page: number, signal: AbortSignal) {
  const session = await getValidSession();
  if (!session) throw new Error("نشست شما پایان یافته است. دوباره وارد شوید.");
  const response = await fetch(baseUrl + "/api/v1/creative-house/startup-applications?page=" + page, {
    headers: { Authorization: `Bearer ${session.accessToken}` },
    signal,
  });
  if (!response.ok) throw new Error("دریافت پرونده‌های ثبت‌نام انجام نشد.");
  return response.json() as Promise<StartupApplication[]>;
}

export async function approveStartupApplication(id: string, temporaryPassword: string) {
  const session = await getValidSession();
  if (!session) throw new Error("نشست شما پایان یافته است.");
  const response = await fetch(baseUrl + "/api/v1/creative-house/startup-applications/" + encodeURIComponent(id) + "/approve", {
    method: "POST",
    headers: { Authorization: `Bearer ${session.accessToken}`, "Content-Type": "application/json" },
    body: JSON.stringify({ temporaryPassword }),
  });
  if (!response.ok) throw new Error(response.status === 403 ? "تأیید نهایی فقط با دسترسی مدیر محصول امکان‌پذیر است." : "فعال‌سازی انجام نشد. وضعیت پرونده را دوباره بررسی کنید.");
}

export function startupApplicationStatus(status: string) {
  if (status === "approved") return "تأیید و فعال شده";
  if (status === "pending_activation") return "در انتظار فعال‌سازی حساب";
  return "در صف بررسی خانهٔ خلاق";
}

export type StartupAttachment = "logo" | "legalDocument" | "identityDocument";

export async function downloadStartupAttachment(id: string, kind: StartupAttachment | "pitchDeck") {
  const session = await getValidSession();
  if (!session) throw new Error("نشست شما پایان یافته است.");
  const path = kind === "pitchDeck" ? "/pitch-deck" : "/attachments/" + kind;
  const response = await fetch(baseUrl + "/api/v1/creative-house/startup-applications/" + encodeURIComponent(id) + path, {
    headers: { Authorization: `Bearer ${session.accessToken}` },
  });
  if (!response.ok) throw new Error("دریافت فایل معرفی انجام نشد.");
  const url = URL.createObjectURL(await response.blob());
  const link = document.createElement("a");
  link.href = url;
  const disposition = response.headers.get("Content-Disposition") ?? "";
  link.download = disposition.match(/filename="?([a-zA-Z0-9.-]+)/)?.[1] ?? (kind === "pitchDeck" ? "pitch-deck.pdf" : kind);
  link.click();
  window.setTimeout(() => URL.revokeObjectURL(url), 1000);
}
