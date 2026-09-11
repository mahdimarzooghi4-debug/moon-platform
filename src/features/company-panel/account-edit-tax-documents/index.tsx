import { Link } from "react-router-dom";
import { CompanySidebar } from "../components/CompanySidebar";
import "../index.css";
import "../account-edit.css";

const documents = [
  ["آگهی تأسیس", "Establishment_Announcement.pdf"],
  ["آخرین تغییرات", "Latest_Changes_Doc.jpg"],
  ["اساسنامه شرکت", "Company_Statutes.pdf"],
  ["کارت شناسایی نماینده", "Representative_ID_Card.png"],
] as const;

export default function CompanyEditTaxAndDocuments() {
  return (
    <div className="company-panel-shell" data-node-id="1969:373">
      <main className="company-account-edit-page" dir="rtl">
        <header className="company-topbar">
          <div className="company-page-title"><h1>ویرایش مالیات و مدارک</h1><p>به‌روزرسانی اطلاعات مالیاتی و فایل‌های ثبت‌شده سازمان</p></div>
          <div className="company-top-actions"><Link className="company-account-back" to="/panel/company/account">بازگشت به حساب</Link></div>
        </header>
        <section className="company-account-edit-card is-tall">
          <div className="company-account-edit-heading company-account-tax-heading"><h2>اطلاعات مالیاتی</h2><p>اطلاعات پرونده مالیاتی ثبت‌شده در حساب سازمانی</p></div>
          <div className="company-account-fields company-account-tax-fields">
            <div className="company-account-field"><label>کد اقتصادی</label><input defaultValue="۴۱۱۶۸۵۹۳۲۱۴۵" /></div>
            <div className="company-account-field"><label>شناسه مالیاتی</label><input defaultValue="۴۱۱۵۸۹۶۲۳۷" /></div>
            <div className="company-account-field"><label>وضعیت پرونده مالیاتی</label><input defaultValue="فعال" /></div>
            <div className="company-account-field"><label>اداره مالیاتی</label><input defaultValue="اداره کل امور مالیاتی مودیان بزرگ" /></div>
          </div>
          <div className="company-account-documents-edit"><h3>مدارک ثبت‌شده</h3><p>برای هر مدرک می‌توانید فایل ثبت‌شده را جایگزین کنید.</p>{documents.map(([title,file]) => <div className="company-account-document-edit-row" key={file}><button type="button" disabled>جایگزینی</button><span>{file}</span><strong>{title}</strong></div>)}</div>
          <div className="company-account-tax-note">اطلاعات حقوقی و مالیاتی تأییدشده از شرایط بررسی گواهی ماده ۱۷۲ هستند.</div>
          <div className="company-account-edit-actions company-account-tax-actions"><Link className="company-account-edit-cancel" to="/panel/company/account">انصراف</Link><Link className="company-account-edit-save" to="/panel/company/account">ذخیره تغییرات</Link></div>
        </section>
      </main>
      <CompanySidebar active="account" />
    </div>
  );
}
