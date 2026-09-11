import { Link } from "react-router-dom";
import { CompanySidebar } from "../components/CompanySidebar";
import "../index.css";
import "./index.css";

const OFFICIAL_LOGO = "/assets/company-panel/emdad-logo-official.png";
const CORNER = "/assets/company-panel/certificate-corner.svg";
const STAMP = "/assets/company-panel/emdad-stamp.svg";

export default function CompanyArticle172CertificateIssued() {
  return (
    <div className="company-panel-shell" data-node-id="1928:2">
      <main className="company-certificate-issued-page" dir="rtl">
        <header className="company-topbar">
          <div className="company-page-title"><h1>گواهی ماده ۱۷۲ صادرشده</h1><p>گواهی تأییدشده مشارکت سازمانی و اطلاعات رسمی صدور</p></div>
          <div className="company-top-actions"><button type="button" className="company-action company-action-primary company-certificate-download" title="دانلود گواهی در محصول نهایی فعال می‌شود">دانلود گواهی PDF</button><Link className="company-action company-action-secondary" to="/panel/company/certificates">بازگشت به گواهی‌ها</Link></div>
        </header>

        <section className="company-issued-summary"><div><span>پروژه</span><strong>سلامت خانواده</strong></div><div><span>مبلغ گواهی‌شده</span><strong>۵۰٬۰۰۰٬۰۰۰ تومان</strong></div><div><span>وضعیت</span><strong className="is-success">صادرشده</strong></div><div><span>شماره گواهی</span><strong dir="ltr">CE-172-1405-0041</strong></div><div><span>تاریخ صدور</span><strong>۱۴۰۵/۰۶/۰۵</strong></div></section>

        <section className="company-official-certificate">
          <img className="company-certificate-corner corner-tr" src={CORNER} alt="" /><img className="company-certificate-corner corner-tl" src={CORNER} alt="" /><img className="company-certificate-corner corner-br" src={CORNER} alt="" /><img className="company-certificate-corner corner-bl" src={CORNER} alt="" />
          <div className="company-official-certificate-header"><img src={OFFICIAL_LOGO} alt="نشان کمیته امداد امام خمینی" /><div><span>جمهوری اسلامی ایران</span><strong>کمیته امداد امام خمینی (ره)</strong></div><div><small>شماره گواهی</small><b dir="ltr">CE-172-1405-0041</b><small>تاریخ صدور: ۱۴۰۵/۰۶/۰۵</small></div></div>
          <h2>گواهی موضوع ماده ۱۷۲ قانون مالیات‌های مستقیم</h2>
          <p className="company-official-intro">بدین‌وسیله گواهی می‌شود شرکت <strong>پایدار پرداز خلاق آریا</strong> در چارچوب مشارکت سازمانی پروژه اثر اجتماعی «سلامت خانواده» مبلغ زیر را به‌صورت مستقیم و مطابق ضوابط ثبت‌شده به حساب کمیته امداد امام خمینی (ره) واریز نموده است.</p>
          <div className="company-official-fields"><div><span>نام شرکت</span><strong>پایدار پرداز خلاق آریا</strong></div><div><span>شناسه ملی</span><strong>۱۰۱۰۴۵۸۶۹۲۱</strong></div><div><span>عنوان پروژه</span><strong>سلامت خانواده</strong></div><div><span>مبلغ مورد تأیید</span><strong>۵۰٬۰۰۰٬۰۰۰ تومان</strong></div></div>
          <p className="company-official-note">این گواهی پس از بررسی اطلاعات حقوقی و مالیاتی شرکت، تأیید پرداخت واجد شرایط و احراز ضوابط مرتبط با ماده ۱۷۲ صادر شده و برای ارائه به مراجع ذی‌ربط قابل استناد است.</p>
          <div className="company-official-signature"><div><span>مهر و تأیید</span><img src={STAMP} alt="مهر کمیته امداد" /></div><div><span>واحد مسئول</span><strong>اداره مشارکت‌های مردمی و امور مؤدیان</strong><small>کمیته امداد امام خمینی (ره)</small></div></div>
        </section>
      </main>
      <CompanySidebar active="certificates" />
    </div>
  );
}
