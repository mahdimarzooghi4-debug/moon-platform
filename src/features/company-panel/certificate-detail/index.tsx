import { Link, useParams } from "react-router-dom";
import { CompanySidebar } from "../components/CompanySidebar";
import "../index.css";
import "./index.css";

const eligibility = [
  ["اطلاعات حقوقی", "شناسه ملی ۱۰۱۰۴۵۸۶۹۲۱ ثبت‌شده", "تکمیل‌شده"],
  ["پرونده مالیاتی", "پرونده فعال و در حال بررسی", "در حال بررسی"],
  ["پرداخت مستقیم", "پرداخت به حساب کمیته امداد تأیید شده", "تأییدشده"],
  ["بررسی شرایط قانونی", "بررسی نهایی شرایط ماده ۱۷۲", "در انتظار"],
] as const;

export default function CompanyArticle172CertificateDetail() {
  const { certificateId = "family-health" } = useParams();
  void certificateId;
  return (
    <div className="company-panel-shell" data-node-id="1918:141">
      <main className="company-certificate-detail-page" dir="rtl">
        <header className="company-topbar">
          <div className="company-page-title"><h1>جزئیات گواهی ماده ۱۷۲</h1><p>بررسی وضعیت درخواست، شرایط قانونی و اطلاعات پرداخت مشارکت</p></div>
          <div className="company-top-actions"><Link className="company-action company-action-primary" to="/panel/company/participations">مشارکت‌های سازمانی</Link><Link className="company-action company-action-secondary" to="/panel/company/certificates">بازگشت به گواهی‌ها</Link></div>
        </header>

        <section className="company-certificate-detail-summary"><div><span>پروژه</span><h2>سلامت خانواده</h2><p>سلامت و بهداشت · سیستان و بلوچستان</p></div><div><span>مبلغ واجد شرایط</span><strong>۵۰٬۰۰۰٬۰۰۰ تومان</strong></div><div><span>وضعیت درخواست</span><strong className="is-warning">در حال بررسی</strong></div><div><span>شماره گواهی</span><strong>—</strong><small>تاریخ صدور: —</small></div></section>

        <section className="company-certificate-eligibility"><h2>بررسی شرایط احراز</h2><p>وضعیت هر یک از پیش‌نیازهای قانونی صدور گواهی</p><div>{eligibility.map(([title,description,status]) => <article key={title}><div><strong>{title}</strong><span>{description}</span></div><b className={status === "در انتظار" ? "is-warning" : status === "در حال بررسی" ? "is-info" : "is-success"}>{status}</b></article>)}</div></section>

        <div className="company-certificate-detail-columns">
          <section className="company-certificate-payment-info"><h2>اطلاعات پرداخت</h2><dl><div><dt>پروژه</dt><dd>سلامت خانواده</dd></div><div><dt>مبلغ مشارکت</dt><dd>۵۰٬۰۰۰٬۰۰۰ تومان</dd></div><div><dt>روش پرداخت</dt><dd>واریز مستقیم به حساب کمیته امداد</dd></div><div><dt>کد پیگیری ماه</dt><dd dir="ltr">MAH-C-1405-0061</dd></div><div><dt>وضعیت پرداخت</dt><dd className="is-success">پرداخت موفق</dd></div></dl></section>
          <section className="company-certificate-legal-note"><h2>وضعیت حقوقی گواهی</h2><div><strong>صدور گواهی هنوز نهایی نشده است</strong><p>درخواست پس از تطبیق اطلاعات شرکت، پرونده مالیاتی و پرداخت واجد شرایط با ضوابط ماده ۱۷۲ نهایی خواهد شد.</p></div><Link to="/panel/company/account">مشاهده اطلاعات حساب سازمانی</Link></section>
        </div>

        <section className="company-certificate-timeline"><h2>روند بررسی درخواست</h2><div><article className="done"><b>۱</b><strong>ثبت مشارکت</strong><span>پرداخت سازمانی با موفقیت ثبت شد.</span></article><article className="done"><b>۲</b><strong>تأیید پرداخت</strong><span>واریز مستقیم به حساب کمیته امداد تأیید شد.</span></article><article className="active"><b>۳</b><strong>بررسی قانونی</strong><span>اطلاعات مالیاتی و شرایط ماده ۱۷۲ در حال بررسی است.</span></article><article><b>۴</b><strong>صدور گواهی</strong><span>پس از تأیید نهایی، گواهی صادر و قابل دریافت می‌شود.</span></article></div></section>
      </main>
      <CompanySidebar active="certificates" />
    </div>
  );
}
