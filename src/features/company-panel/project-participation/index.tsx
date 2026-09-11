import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { CompanySidebar } from "../components/CompanySidebar";
import "../index.css";
import "./index.css";

const PROJECT_IMAGE = "/assets/company-panel/project-family-health.png";

export default function CompanyProjectParticipation() {
  const { projectId = "family-health" } = useParams();
  const [amount, setAmount] = useState("۵۰٬۰۰۰٬۰۰۰");

  return (
    <div className="company-panel-shell" data-node-id="1890:2">
      <main className="company-participation-page" dir="rtl">
        <header className="company-topbar">
          <div className="company-page-title">
            <h1>مشارکت در پروژه</h1>
            <p>ثبت مبلغ مشارکت سازمانی و بررسی اطلاعات پیش از پرداخت</p>
          </div>
          <div className="company-top-actions">
            <Link className="company-action company-action-primary" to="/panel/company/participations">
              مشارکت‌های سازمانی
            </Link>
            <Link className="company-action company-action-secondary company-detail-back" to={`/panel/company/projects/${projectId}`}>
              بازگشت به پروژه
            </Link>
          </div>
        </header>

        <section className="company-participation-project company-detail-card">
          <img src={PROJECT_IMAGE} alt="" />
          <div>
            <span>پروژه انتخاب‌شده</span>
            <h2>سلامت خانواده</h2>
            <p>سلامت و بهداشت · سیستان و بلوچستان</p>
            <b>قابل مشارکت</b>
          </div>
        </section>

        <div className="company-participation-grid">
          <section className="company-detail-card company-participation-form-card">
            <h2>اطلاعات مشارکت</h2>
            <p>مبلغ و نماینده سازمان را برای ثبت مشارکت بررسی کنید.</p>

            <label className="company-form-field">
              <span>مبلغ مشارکت (تومان)</span>
              <input value={amount} onChange={(event) => setAmount(event.target.value)} inputMode="numeric" />
              <small>حداقل مبلغ مشارکت مطابق ضوابط پروژه تعیین می‌شود.</small>
            </label>

            <div className="company-representative-box">
              <div><span>نماینده سازمان</span><strong>علیرضا سهرابی</strong></div>
              <div><span>شماره همراه</span><strong>۰۹۱۲•••۶۷۸۹</strong></div>
            </div>

            <div className="company-payment-route-box">
              <span>مسیر پرداخت</span>
              <strong>واریز مستقیم به حساب کمیته امداد</strong>
              <small>سامانه ماه اطلاعات مشارکت را برای پیگیری سازمانی ثبت می‌کند.</small>
            </div>
          </section>

          <aside className="company-detail-card company-participation-summary-card">
            <h2>خلاصه مشارکت</h2>
            <div className="company-summary-line"><span>پروژه</span><strong>سلامت خانواده</strong></div>
            <div className="company-summary-line"><span>مبلغ مشارکت</span><strong>{amount || "—"} تومان</strong></div>
            <div className="company-summary-line"><span>روش پرداخت</span><strong>واریز مستقیم</strong></div>

            <Link className="company-certificate-note" to="/panel/company/certificates">
              <span>گواهی ماده ۱۷۲</span>
              <strong>صدور گواهی منوط به احراز شرایط قانونی است.</strong>
            </Link>

            <Link className="company-confirm-payment" to={`/panel/company/projects/${projectId}/participate/success`}>
              تأیید و پرداخت نهایی
            </Link>
          </aside>
        </div>

        <section className="company-detail-card company-payment-followup-card">
          <h2>پس از پرداخت</h2>
          <p>مشارکت و گزارش‌های پروژه از بخش‌های پنل سازمانی قابل پیگیری است.</p>
          <div>
            <article><b>۱</b><span>ثبت مشارکت</span></article>
            <article><b>۲</b><span>پیگیری پروژه</span></article>
            <Link to="/panel/company/reports"><b>۳</b><span>گزارش مالی و اثر</span></Link>
          </div>
        </section>
      </main>

      <CompanySidebar active="projects" />
    </div>
  );
}
