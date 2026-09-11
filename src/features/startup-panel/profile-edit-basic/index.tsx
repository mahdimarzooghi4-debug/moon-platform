import { FormEvent } from "react";
import { Link, useNavigate } from "react-router-dom";
import { StartupSidebar } from "../components/StartupSidebar";
import "../index.css";
import "./index.css";

const basicFields = [
  ["نام فارسی استارتاپ", "سامانه ماه"],
  ["سال شروع فعالیت", "۱۴۰۰"],
  ["وضعیت حقوقی", "شرکت ثبت‌شده"],
  ["مرحله رشد استارتاپ", "MVP (محصول اولیه فعال)"],
  ["استان", "تهران"],
  ["شهر", "تهران"],
] as const;

const representativeFields = [
  ["نام نماینده", "علی"],
  ["نام خانوادگی", "علوی"],
  ["سمت در استارتاپ", "مدیر عامل و هم‌بنیان‌گذار"],
  ["کد ملی نماینده", "۰۰۲•••••••"],
  ["شماره موبایل", "۰۹۱۲•••••••"],
  ["ایمیل مکاتبات رسمی", "info@mahsystem.ir"],
] as const;

export default function StartupProfileEditBasic() {
  const navigate = useNavigate();

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    navigate("/panel/startup/profile");
  };

  return (
    <div className="startup-panel-page startup-profile-edit-basic-page" data-node-id="2082:2" data-name="startup-profile-edit-basic">
      <StartupSidebar active="profile" />
      <main className="startup-profile-edit-basic-content">
        <header className="startup-profile-edit-basic-topbar">
          <div><h1>ویرایش پروفایل استارتاپ</h1><p>اطلاعات ثبت‌شده حساب استارتاپی را به‌روزرسانی کنید.</p></div>
          <Link to="/panel/startup/profile">بازگشت به پروفایل</Link>
        </header>

        <nav className="startup-profile-edit-basic-tabs" aria-label="بخش‌های ویرایش پروفایل">
          <span aria-current="page">اطلاعات پایه و نماینده</span>
          <Link to="/panel/startup/profile/edit/product-team">محصول و تیم</Link>
          <Link to="/panel/startup/profile/edit/impact-documents">اثر اجتماعی و مدارک</Link>
        </nav>

        <form className="startup-profile-edit-basic-form" onSubmit={handleSubmit}>
          <section className="startup-profile-edit-basic-card" data-name="startup-basic-form">
            <h2>اطلاعات پایه استارتاپ</h2>
            <p className="startup-profile-edit-basic-card-lead">فیلدهای این بخش از اطلاعات ثبت‌نام اولیه حساب استارتاپی هستند.</p>
            <div className="startup-profile-edit-basic-grid">
              {basicFields.map(([label, value]) => <label key={label}><span>{label}</span><input defaultValue={value} /></label>)}
            </div>
            <label className="is-wide"><span>حوزه فعالیت استارتاپ</span><input defaultValue="خدمات دیجیتال، صنایع خلاق، فناوری مالی" /></label>
            <div className="startup-profile-edit-basic-grid">
              <label><span>وب‌سایت</span><input defaultValue="https://mahsystem.ir" dir="ltr" /></label>
              <label><span>شبکه اجتماعی / لینکدین</span><input defaultValue="linkedin.com/company/startup" dir="ltr" /></label>
            </div>
            <label className="is-wide"><span>شعار کوتاه</span><input defaultValue="سامانه هوشمند مدیریت و شتابدهی طرح‌های فناورانه خلاق" /></label>
          </section>

          <section className="startup-profile-edit-basic-card" data-name="startup-representative-form">
            <h2>نماینده اصلی حساب</h2>
            <p className="startup-profile-edit-basic-card-lead">تغییر شماره موبایل ورود از بخش تنظیمات و پس از تأیید کد یک‌بارمصرف انجام می‌شود.</p>
            <div className="startup-profile-edit-basic-grid">
              {representativeFields.map(([label, value]) => <label key={label}><span>{label}</span><input defaultValue={value} readOnly={label === "شماره موبایل" || label === "کد ملی نماینده"} /></label>)}
            </div>
            <div className="startup-profile-edit-basic-verified">حساب استارتاپی تأیید شده است. تغییر اطلاعات اصلی ممکن است دوباره توسط خانه خلاق بررسی شود.</div>
            <div className="startup-profile-edit-basic-actions"><Link to="/panel/startup/profile">انصراف</Link><button type="submit">ذخیره تغییرات</button></div>
          </section>
        </form>

        <section className="startup-profile-edit-basic-note" data-name="edit-info-note">
          <div><h2>بخش‌های دیگر پروفایل</h2><p>اطلاعات محصول و تیم و همچنین حوزه اثر اجتماعی و مدارک در بخش‌های جداگانه ویرایش می‌شوند.</p></div>
          <p>پس از ذخیره، اطلاعات جدید در صفحه پروفایل نمایش داده می‌شود.</p>
        </section>
      </main>
    </div>
  );
}
