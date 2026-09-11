import { Link } from "react-router-dom";
import { CompanySidebar } from "../components/CompanySidebar";
import "../index.css";
import "./index.css";

export default function CompanyArticle172Certificates() {
  return (
    <div className="company-panel-shell" data-node-id="1916:2">
      <main className="company-certificates-page" dir="rtl">
        <header className="company-topbar">
          <div className="company-page-title"><h1>گواهی ماده ۱۷۲</h1><p>پیگیری شرایط قانونی، پرداخت‌های واجد شرایط و وضعیت صدور گواهی</p></div>
          <div className="company-top-actions"><Link className="company-action company-action-primary" to="/panel/company/participations">مشارکت‌های سازمانی</Link></div>
        </header>

        <section className="company-certificate-status-card">
          <div><span>اطلاعات حقوقی و مالیاتی</span><strong>پرونده مالیاتی: فعال</strong><small>شناسه ملی و اطلاعات ثبتی سازمان در حساب ثبت شده است.</small></div>
          <div><span>پرداخت واجد شرایط</span><strong>۵۰٬۰۰۰٬۰۰۰ تومان · پرداخت مستقیم ثبت شد</strong><small>واریز مستقیم به حساب کمیته امداد ثبت و قابل پیگیری است.</small></div>
          <div><span>وضعیت صدور گواهی</span><strong className="is-warning">در انتظار بررسی شرایط قانونی</strong><small>صدور گواهی پس از بررسی و تأیید نهایی انجام می‌شود.</small></div>
        </section>

        <section className="company-certificate-requests">
          <div className="company-certificate-heading"><div><h2>درخواست‌های گواهی</h2><p>وضعیت گواهی برای مشارکت‌های ثبت‌شده سازمان</p></div><span>۱ درخواست</span></div>
          <div className="company-certificate-table-head"><span>پروژه</span><span>مبلغ مشارکت</span><span>وضعیت پرداخت</span><span>بررسی شرایط</span><span>وضعیت گواهی</span><span>اقدام</span></div>
          <article className="company-certificate-row"><strong>سلامت خانواده</strong><span>۵۰٬۰۰۰٬۰۰۰ تومان</span><b className="is-success">پرداخت موفق</b><b className="is-info">در حال بررسی</b><b className="is-warning">در انتظار صدور</b><Link to="/panel/company/certificates/family-health">مشاهده جزئیات</Link></article>
          <aside>پرداخت موفق به‌تنهایی به معنی صدور قطعی گواهی ماده ۱۷۲ نیست؛ احراز شرایط قانونی و مالیاتی الزامی است.</aside>
        </section>

        <section className="company-certificate-conditions"><h2>شرایط بررسی گواهی</h2><div><article><b>۱</b><strong>اطلاعات ثبتی شرکت</strong><span>شناسه ملی و اطلاعات حقوقی سازمان باید کامل و قابل بررسی باشد.</span></article><article><b>۲</b><strong>پرداخت مستقیم</strong><span>پرداخت واجد شرایط باید مستقیماً به حساب کمیته امداد ثبت شده باشد.</span></article><article><b>۳</b><strong>بررسی شرایط قانونی</strong><span>پرونده مالیاتی و شرایط مرتبط با ماده ۱۷۲ توسط مراجع مربوط بررسی می‌شود.</span></article></div></section>
      </main>
      <CompanySidebar active="certificates" />
    </div>
  );
}
