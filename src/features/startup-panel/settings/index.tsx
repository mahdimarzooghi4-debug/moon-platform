import { useState } from "react";
import { Link } from "react-router-dom";
import { StartupSidebar } from "../components/StartupSidebar";
import "../index.css";
import "./index.css";

const notificationItems = [
  ["نتیجه ارزیابی پروژه", "اعلام نتیجه بررسی پروژه توسط خانه خلاق و نوآوری آینه"],
  ["وضعیت گزارش و ارزیابی مرحله", "ارسال، بررسی و اعلام نتیجه گزارش مرحله‌ای پروژه"],
  ["آزادسازی وجه مرحله", "اعلام آزادسازی وجه مرحله توسط کمیته امداد پس از تأیید ارزیابی"],
  ["به‌روزرسانی وضعیت پروژه", "تغییر مرحله اجرایی و فعال‌شدن مرحله بعدی پروژه"],
] as const;

const SETTINGS_KEY = "mah.startup.notificationSettings.v1";
const MOBILE_KEY = "mah.startup.loginMobile.v1";

function normalizeDigits(value: string) {
  const persian = "۰۱۲۳۴۵۶۷۸۹";
  const arabic = "٠١٢٣٤٥٦٧٨٩";
  return value
    .trim()
    .split("")
    .map((char) => {
      const p = persian.indexOf(char);
      if (p >= 0) return String(p);
      const a = arabic.indexOf(char);
      return a >= 0 ? String(a) : char;
    })
    .join("")
    .replace(/[\s-]/g, "");
}

function toPersianDigits(value: string) {
  return value.replace(/\d/g, (digit) => "۰۱۲۳۴۵۶۷۸۹"[Number(digit)]);
}

function maskMobile(value: string) {
  const normalized = normalizeDigits(value);
  if (!/^09\d{9}$/.test(normalized)) return "۰۹۱۲•••••••";
  return `${toPersianDigits(normalized.slice(0, 4))}••••${toPersianDigits(normalized.slice(-3))}`;
}

function loadNotifications() {
  try {
    const saved = JSON.parse(localStorage.getItem(SETTINGS_KEY) ?? "null");
    if (Array.isArray(saved) && saved.length === notificationItems.length && saved.every((value) => typeof value === "boolean")) {
      return saved as boolean[];
    }
  } catch {
    // Ignore malformed prototype data and use defaults.
  }
  return [true, true, true, true];
}

export default function StartupSettings() {
  const [notifications, setNotifications] = useState<boolean[]>(loadNotifications);
  const [settingsSaved, setSettingsSaved] = useState(false);
  const [mobile, setMobile] = useState(() => localStorage.getItem(MOBILE_KEY) ?? "09121234567");
  const [isChangingMobile, setIsChangingMobile] = useState(false);
  const [newMobile, setNewMobile] = useState("");
  const [otp, setOtp] = useState("");
  const [otpSent, setOtpSent] = useState(false);
  const [mobileMessage, setMobileMessage] = useState("");

  const toggleNotification = (index: number) => {
    setNotifications((current) => current.map((value, itemIndex) => itemIndex === index ? !value : value));
    setSettingsSaved(false);
  };

  const saveNotifications = () => {
    localStorage.setItem(SETTINGS_KEY, JSON.stringify(notifications));
    setSettingsSaved(true);
  };

  const resetMobileFlow = () => {
    setIsChangingMobile(false);
    setNewMobile("");
    setOtp("");
    setOtpSent(false);
    setMobileMessage("");
  };

  const requestOtp = () => {
    const normalized = normalizeDigits(newMobile);
    if (!/^09\d{9}$/.test(normalized)) {
      setMobileMessage("شماره موبایل معتبر با فرمت ۰۹xxxxxxxxx وارد کنید.");
      setOtpSent(false);
      return;
    }

    setNewMobile(normalized);
    setOtpSent(true);
    setOtp("");
    setMobileMessage("درخواست کد ثبت شد؛ کد ۶ رقمی دریافتی را وارد کنید.");
  };

  const confirmMobile = () => {
    const normalizedOtp = normalizeDigits(otp);
    if (!/^\d{6}$/.test(normalizedOtp)) {
      setMobileMessage("کد تأیید باید ۶ رقم باشد.");
      return;
    }

    const normalizedMobile = normalizeDigits(newMobile);
    localStorage.setItem(MOBILE_KEY, normalizedMobile);
    setMobile(normalizedMobile);
    setMobileMessage("شماره موبایل جدید ثبت شد.");
    window.setTimeout(resetMobileFlow, 900);
  };

  return (
    <div className="startup-panel-page startup-settings-page" data-node-id="2080:2" data-name="startup-settings">
      <StartupSidebar active="settings" />
      <main className="startup-settings-content">
        <header className="startup-settings-topbar">
          <h1>تنظیمات</h1>
          <p>مدیریت اطلاعات ورود، اعلان‌ها و حریم خصوصی حساب استارتاپی</p>
        </header>

        <section className={`startup-settings-card startup-settings-account${isChangingMobile ? " is-changing-mobile" : ""}`} data-name="account-settings">
          <h2>اطلاعات حساب و ورود</h2>
          <p>ورود به سامانه ماه با کد یک‌بارمصرف انجام می‌شود و رمز عبور ثابت ندارید.</p>
          <div className="startup-settings-account-fields">
            <label><span>شماره موبایل ورود</span><input value={maskMobile(mobile)} readOnly /></label>
            <label><span>ایمیل مکاتبات رسمی</span><input value="info@mahsystem.ir" readOnly dir="ltr" /></label>
          </div>
          <div className="startup-settings-account-action">
            <button type="button" onClick={() => {
              if (isChangingMobile) resetMobileFlow();
              else setIsChangingMobile(true);
            }}>
              {isChangingMobile ? "بستن تغییر شماره موبایل" : "تغییر شماره موبایل و دریافت کد تأیید"}
            </button>
            <span>تغییر شماره موبایل فقط پس از تأیید کد یک‌بارمصرف شماره جدید ثبت می‌شود.</span>
          </div>

          {isChangingMobile && (
            <div className="startup-settings-mobile-change" data-name="mobile-change-flow">
              <label>
                <span>شماره موبایل جدید</span>
                <input
                  inputMode="numeric"
                  value={toPersianDigits(newMobile)}
                  onChange={(event) => {
                    setNewMobile(normalizeDigits(event.target.value));
                    setMobileMessage("");
                    setOtpSent(false);
                  }}
                  placeholder="۰۹۱۲۱۲۳۴۵۶۷"
                />
              </label>
              <button type="button" onClick={requestOtp}>ارسال کد تأیید</button>

              {otpSent && (
                <>
                  <label>
                    <span>کد تأیید ۶ رقمی</span>
                    <input
                      inputMode="numeric"
                      value={toPersianDigits(otp)}
                      onChange={(event) => setOtp(normalizeDigits(event.target.value).slice(0, 6))}
                      placeholder="۱۲۳۴۵۶"
                    />
                  </label>
                  <button className="is-primary" type="button" onClick={confirmMobile}>تأیید و ثبت شماره</button>
                </>
              )}

              <button type="button" onClick={resetMobileFlow}>لغو</button>
              {mobileMessage && <p className="startup-settings-mobile-message" role="status">{mobileMessage}</p>}
            </div>
          )}
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
          <button className="startup-settings-save" type="button" onClick={saveNotifications}>
            {settingsSaved ? "تنظیمات ذخیره شد" : "ذخیره تنظیمات اعلان‌ها"}
          </button>
        </section>

        <section className="startup-settings-card startup-settings-privacy" data-name="privacy-settings">
          <h2>حریم خصوصی و بررسی اطلاعات</h2>
          <p>اطلاعات و مدارک ثبت‌شده حساب برای فرآیند بررسی و پایش پروژه توسط خانه خلاق و نوآوری آینه استفاده می‌شود و مطابق سیاست حریم خصوصی سامانه ماه نگهداری می‌شود.</p>
          <div className="startup-settings-privacy-actions">
            <span>تأیید دسترسی بررسی اطلاعات ثبت شده</span>
            <Link to="/privacy-policy">مشاهده سیاست حریم خصوصی</Link>
          </div>
        </section>
      </main>
    </div>
  );
}
