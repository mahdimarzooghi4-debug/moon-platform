import { useState } from "react";
import { AdminSidebar } from "../components/AdminSidebar";
import "../index.css";
import "../final-flow.css";

const ASSET_ROOT = "/assets/admin-panel";
const SETTINGS_KEY = "mah.admin.settings.v1";

const generalRows = [
  ["نام سامانه", "سامانه ماه"],
  ["ثبت‌نام شرکت‌ها", "فعال — بدون نیاز به تأیید ادمین"],
  ["ثبت‌نام استارتاپ‌ها", "فعال — تکمیل اطلاعات و بررسی"],
  ["نمایش داده‌های عمومی لندینگ", "فعال"],
] as const;

const supportRows = [
  ["شماره تماس", "۰۲۱-۸۸۸۸۸۸۸۸"],
  ["ایمیل پشتیبانی", "support@mah.ir"],
  ["ساعات پاسخ‌گویی", "شنبه تا چهارشنبه، ۸ تا ۱۷"],
] as const;

const toggles = [
  "ورود با شماره موبایل و رمز یکبارمصرف",
  "ثبت رویدادهای مدیریتی",
  "مدیریت نشست‌های کاربران",
  "اعلان رویدادهای تأمین مالی",
  "اعلان ارزیابی‌ها و تغییر وضعیت پروژه",
  "اعلان‌های مدیریتی ادمین",
] as const;

function readSavedSettings() {
  try {
    const raw = localStorage.getItem(SETTINGS_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as { enabled?: unknown; updatedAt?: unknown };
    if (!Array.isArray(parsed.enabled) || parsed.enabled.length !== toggles.length || parsed.enabled.some((value) => typeof value !== "boolean")) return null;
    return {
      enabled: parsed.enabled as boolean[],
      updatedAt: typeof parsed.updatedAt === "string" ? parsed.updatedAt : "",
    };
  } catch {
    return null;
  }
}

function formatUpdatedAt(value: string) {
  if (!value) return "هنوز ذخیره نشده";
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return "ذخیره شده";
  return date.toLocaleString("fa-IR", { dateStyle: "short", timeStyle: "short" });
}

export default function AdminSettings() {
  const savedSettings = readSavedSettings();
  const [enabled, setEnabled] = useState<boolean[]>(() => savedSettings?.enabled ?? toggles.map(() => true));
  const [updatedAt, setUpdatedAt] = useState(() => savedSettings?.updatedAt ?? "");
  const [message, setMessage] = useState("");

  const toggle = (index: number) => {
    setEnabled((current) => current.map((value, itemIndex) => itemIndex === index ? !value : value));
    setMessage("");
  };

  const saveSettings = () => {
    const nextUpdatedAt = new Date().toISOString();
    localStorage.setItem(SETTINGS_KEY, JSON.stringify({ enabled, updatedAt: nextUpdatedAt }));
    setUpdatedAt(nextUpdatedAt);
    setMessage("تنظیمات مدیریتی در مرورگر ذخیره شد.");
  };

  const resetSettings = () => {
    const defaults = toggles.map(() => true);
    setEnabled(defaults);
    setUpdatedAt("");
    localStorage.removeItem(SETTINGS_KEY);
    setMessage("تنظیمات به حالت پیش‌فرض بازنشانی شد.");
  };

  return (
    <div className="admin-panel-shell" data-node-id="2266:2">
      <main className="admin-final-main" dir="rtl">
        <header className="admin-final-header">
          <div className="admin-final-heading">
            <h1>تنظیمات سامانه</h1>
            <p>مدیریت تنظیمات عمومی، امنیت، اعلان‌ها و اطلاعات پشتیبانی سامانه ماه</p>
          </div>
          <button className="admin-final-save" type="button" onClick={saveSettings}>ذخیره تغییرات</button>
        </header>

        <section className="admin-settings-layout">
          <article className="admin-settings-card admin-settings-general">
            <h2>تنظیمات عمومی سامانه</h2>
            <p>رفتارهای پایه ثبت‌نام و نمایش اطلاعات سامانه را مدیریت کنید</p>
            <div className="admin-settings-rows">
              {generalRows.map(([label, value]) => <div className="admin-setting-row" key={label}><label>{label}</label><div className="admin-setting-value">{value}</div></div>)}
            </div>
          </article>

          <article className="admin-settings-card admin-settings-security">
            <h2>امنیت و دسترسی</h2>
            <p>کنترل ورود و ثبت سوابق مدیریتی</p>
            <div className="admin-toggle-list">
              {toggles.slice(0, 3).map((label, index) => (
                <div className="admin-toggle-row" key={label}>
                  <span>{label}</span>
                  <button className={`admin-toggle-button${enabled[index] ? "" : " is-off"}`} type="button" aria-pressed={enabled[index]} onClick={() => toggle(index)}>
                    <img src={`${ASSET_ROOT}/settings-toggle-on.svg`} alt="" />
                  </button>
                </div>
              ))}
            </div>
          </article>

          <article className="admin-settings-card admin-settings-notifications">
            <h2>اعلان‌ها و پیام‌ها</h2>
            <p>اعلان‌های عملیاتی نقش‌ها و رویدادهای مهم سامانه</p>
            <div className="admin-toggle-list">
              {toggles.slice(3).map((label, offset) => {
                const index = offset + 3;
                return <div className="admin-toggle-row" key={label}><span>{label}</span><button className={`admin-toggle-button${enabled[index] ? "" : " is-off"}`} type="button" aria-pressed={enabled[index]} onClick={() => toggle(index)}><img src={`${ASSET_ROOT}/settings-toggle-on.svg`} alt="" /></button></div>;
              })}
            </div>
          </article>

          <article className="admin-settings-card admin-settings-support">
            <h2>اطلاعات پشتیبانی</h2>
            <p>اطلاعات تماس نمایش‌داده‌شده برای کاربران سامانه</p>
            <div className="admin-settings-rows">
              {supportRows.map(([label, value]) => <div className="admin-setting-row" key={label}><label>{label}</label><div className="admin-setting-value">{value}</div></div>)}
            </div>
          </article>
        </section>

        <aside className="admin-settings-note"><strong>قاعده تغییر تنظیمات</strong><span>تغییرات مهم باید با ثبت سابقه مدیریتی انجام شوند و نباید منطق عملیاتی نقش‌هایی مثل کمیته امداد، خانه خلاق یا مدیر صندوق را جایگزین کنند.</span></aside>

        <section className="admin-settings-footer">
          <span>{message || `آخرین ذخیره تنظیمات: ${formatUpdatedAt(updatedAt)}`}</span>
          <button type="button" onClick={resetSettings}>بازنشانی</button>
        </section>
      </main>
      <AdminSidebar active="settings" />
    </div>
  );
}
