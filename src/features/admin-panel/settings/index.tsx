import { useState } from "react";
import { Link } from "react-router-dom";
import { AdminSidebar } from "../components/AdminSidebar";
import "../index.css";
import "../final-flow.css";

const ASSET_ROOT = "/assets/admin-panel";

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

export default function AdminSettings() {
  const [enabled, setEnabled] = useState(() => toggles.map(() => true));
  const toggle = (index: number) => setEnabled((current) => current.map((value, itemIndex) => itemIndex === index ? !value : value));

  return (
    <div className="admin-panel-shell" data-node-id="2266:2">
      <main className="admin-final-main" dir="rtl">
        <header className="admin-final-header">
          <div className="admin-final-heading">
            <h1>تنظیمات سامانه</h1>
            <p>مدیریت تنظیمات عمومی، امنیت، اعلان‌ها و اطلاعات پشتیبانی سامانه ماه</p>
          </div>
          <button className="admin-final-save" type="button" aria-disabled="true">ذخیره تغییرات</button>
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
            <Link className="admin-policy-link" to="/panel/admin/settings/access-policy">مشاهده سیاست سطح دسترسی</Link>
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

        <section className="admin-settings-footer"><span>آخرین به‌روزرسانی تنظیمات: امروز، ۱۶:۴۰</span><button type="button" aria-disabled="true">بازنشانی</button></section>
      </main>
      <AdminSidebar active="settings" />
    </div>
  );
}
