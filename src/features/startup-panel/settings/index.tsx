import { useState } from "react";
import { StartupSidebar } from "../components/StartupSidebar";
import "../index.css";
import "./index.css";

const notificationItems = [
  ["نتیجه ارزیابی پروژه", "اعلام نتیجه بررسی پروژه توسط خانه خلاق و نوآوری آینه"],
  ["وضعیت گزارش و ارزیابی مرحله", "ارسال، بررسی و اعلام نتیجه گزارش مرحله‌ای پروژه"],
  ["آزادسازی وجه مرحله", "اعلام آزادسازی وجه مرحله توسط کمیته امداد پس از تأیید ارزیابی"],
  ["به‌روزرسانی وضعیت پروژه", "تغییر مرحله اجرایی و فعال‌شدن مرحله بعدی پروژه"],
] as const;

export default function StartupSettings() {
  const [notifications, setNotifications] = useState([true, true, true, true]);

  const toggleNotification = (index: number) => {
    setNotifications((current) => current.map((value, itemIndex) => itemIndex === index ? !value : value));
  };

  return (
    <div className="startup-panel-page startup-settings-page" data-node-id="2080:2" data-name="startup-settings">
      <StartupSidebar active="settings" />
      <main className="startup-settings-content">
        <header className="startup-settings-topbar">
          <h1>تنظیمات</h1>
          <p>مدیریت اطلاعات ورود، اعلان‌ها و حریم خصوصی حساب استارتاپی</p>
        </header>

        <section className="startup-settings-card startup-settings-account" data-name="account-settings">
          <h2>اطلاعات حساب و ورود</h2>
          <p>ورود به سامانه ماه با کد یک‌بارمصرف انجام می‌شود و رمز عبور ثابت ندارید.</p>
          <div className="startup-settings-account-fields">
            <label><span>شماره موبایل ورود</span><input value="۰۹۱۲•••••••" readOnly /></label>
            <label><span>ایمیل مکاتبات رسمی</span><input value="info@mahsystem.ir" readOnly dir="ltr" /></label>
          </div>
          <div className="startup-settings-account-action">
            <button type="button" aria-disabled="true">تغییر شماره موبایل و دریافت کد تأیید</button>
            <span>تغییر شماره موبایل فقط پس از تأیید کد یک‌بارمصرف شماره جدید ثبت می‌شود.</span>
          </div>
        </section>

        <section className="startup-settings-card startup-settings-notifications" data-name="notification-settings">
          <h2>اعلان‌ها</h2>
          <p>اعلان‌های مرتبط با چرخه پروژه و گزارش‌ها را برای این حساب مدیریت کنید.</p>
          <div className="startup-settings-notification-grid">
            {notificationItems.map(([title, description], index) => (
              <div className="startup-settings-notification" key={title}>
                <div><strong>{title}</strong><span>{description}</span></div>
                <button
                  type="button"
                  className={`startup-settings-toggle${notifications[index] ? " is-on" : ""}`}
                  role="switch"
                  aria-checked={notifications[index]}
                  aria-label={`${title}: ${notifications[index] ? "فعال" : "غیرفعال"}`}
                  onClick={() => toggleNotification(index)}
                ><span /></button>
              </div>
            ))}
          </div>
          <button className="startup-settings-save" type="button" aria-disabled="true">ذخیره تنظیمات اعلان‌ها</button>
        </section>

        <section className="startup-settings-card startup-settings-privacy" data-name="privacy-settings">
          <h2>حریم خصوصی و بررسی اطلاعات</h2>
          <p>اطلاعات و مدارک ثبت‌شده حساب برای فرآیند بررسی و پایش پروژه توسط خانه خلاق و نوآوری آینه استفاده می‌شود و مطابق سیاست حریم خصوصی سامانه ماه نگهداری می‌شود.</p>
          <div className="startup-settings-privacy-actions">
            <span>تأیید دسترسی بررسی اطلاعات ثبت شده</span>
            <button type="button" aria-disabled="true">مشاهده سیاست حریم خصوصی</button>
          </div>
        </section>
      </main>
    </div>
  );
}
