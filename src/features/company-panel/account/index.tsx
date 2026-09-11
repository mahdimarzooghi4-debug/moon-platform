import { Link } from "react-router-dom";
import { CompanySidebar } from "../components/CompanySidebar";
import "../index.css";
import "./index.css";

const documents = [
  "Establishment_Announcement.pdf",
  "Latest_Changes_Doc.jpg",
  "Company_Statutes.pdf",
  "Representative_ID_Card.png",
] as const;

export default function CompanyOrganizationAccount() {
  return (
    <div className="company-panel-shell" data-node-id="1924:137">
      <main className="company-account-page" dir="rtl">
        <header className="company-topbar">
          <div className="company-page-title">
            <h1>حساب سازمانی</h1>
            <p>اطلاعات ثبتی شرکت، نماینده سازمان، پرونده مالیاتی و مدارک</p>
          </div>
          <div className="company-top-actions">
            <Link className="company-action company-action-primary" to="/panel/company/participations">مشارکت‌های سازمانی</Link>
            <Link className="company-action company-action-secondary company-account-certificate-action" to="/panel/company/certificates">گواهی ماده ۱۷۲</Link>
          </div>
        </header>

        <section className="company-account-summary" data-node-id="1926:2">
          <div className="company-account-summary-heading">
            <div><h2>پایدار پرداز خلاق آریا</h2><p>فناوری اطلاعات و نرم‌افزار · تهران</p></div>
            <div className="company-account-summary-chips"><span>اطلاعات ثبت‌شده</span><span>حساب سازمانی</span></div>
          </div>
          <div className="company-account-summary-metrics">
            <div><span>شناسه ملی</span><strong>۱۰۱۰۴۵۸۶۹۲۱</strong></div>
            <div><span>شماره ثبت</span><strong>۴۵۸۶۹۲</strong></div>
            <div><span>نوع شخصیت حقوقی</span><strong>سهامی خاص</strong></div>
            <div><span>تاریخ ثبت</span><strong>۱۳۹۸/۰۵/۱۲</strong></div>
          </div>
        </section>

        <div className="company-account-columns">
          <section className="company-account-card company-account-registration" data-node-id="1926:21">
            <div className="company-account-card-heading"><div><h2>اطلاعات ثبتی و تماس</h2><p>اطلاعات ثبت‌شده در مرحله اول ایجاد حساب سازمانی</p></div><Link to="/panel/company/account/edit/organization">ویرایش</Link></div>
            <dl>
              <div><dt>حوزه فعالیت</dt><dd>فناوری اطلاعات و نرم‌افزار</dd></div>
              <div><dt>وب‌سایت</dt><dd dir="ltr">https://paydar-soft.ir</dd></div>
              <div><dt>استان / شهر</dt><dd>تهران / تهران</dd></div>
              <div><dt>کد پستی</dt><dd>۱۴۳۹۵۱۵۶۱۷</dd></div>
            </dl>
            <div className="company-account-address"><span>نشانی دفتر مرکزی</span><p>خیابان کارگر شمالی، نرسیده به بزرگراه جلال آل احمد، دانشکده فنی دانشگاه تهران، ساختمان پارک علم و فناوری، واحد ۴۰۵</p></div>
          </section>

          <section className="company-account-card company-account-representative" data-node-id="1926:35">
            <div className="company-account-card-heading"><div><h2>نماینده سازمان</h2><p>اطلاعات تماس نماینده ثبت‌شده شرکت</p></div><Link to="/panel/company/account/edit/representative">ویرایش</Link></div>
            <dl>
              <div><dt>نام نماینده</dt><dd>علیرضا سهرابی</dd></div>
              <div><dt>سمت سازمانی</dt><dd>مدیر مسئولیت اجتماعی</dd></div>
              <div><dt>شماره موبایل</dt><dd>۰۹۱۲۳۴۵۶۷۸۹</dd></div>
              <div><dt>تلفن ثابت</dt><dd>۰۲۱۸۸۹۹۲۲۰۱</dd></div>
              <div><dt>ایمیل</dt><dd dir="ltr">sohrabi@paydar-soft.ir</dd></div>
            </dl>
          </section>
        </div>

        <section className="company-account-tax" data-node-id="1926:49">
          <div className="company-account-card-heading"><div><h2>اطلاعات مالیاتی و مدارک</h2><p>اطلاعات مرحله سوم ثبت‌نام سازمانی</p></div><Link to="/panel/company/account/edit/tax-documents">ویرایش</Link></div>
          <div className="company-account-tax-content">
            <div className="company-account-tax-data"><h3>پرونده مالیاتی</h3><dl><div><dt>کد اقتصادی</dt><dd>۴۱۱۶۸۵۹۳۲۱۴۵</dd></div><div><dt>شناسه مالیاتی</dt><dd>۴۱۱۵۸۹۶۲۳۷</dd></div><div><dt>وضعیت پرونده</dt><dd>فعال</dd></div></dl></div>
            <div className="company-account-documents"><h3>مدارک ثبت‌شده</h3>{documents.map((document) => <div key={document}>{document}</div>)}</div>
          </div>
        </section>
      </main>
      <CompanySidebar active="account" />
    </div>
  );
}
