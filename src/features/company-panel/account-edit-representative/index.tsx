import { Link } from "react-router-dom";
import { CompanySidebar } from "../components/CompanySidebar";
import "../index.css";
import "../account-edit.css";

export default function CompanyEditOrganizationRepresentative() {
  return (
    <div className="company-panel-shell" data-node-id="1969:195">
      <main className="company-account-edit-page" dir="rtl">
        <header className="company-topbar">
          <div className="company-page-title"><h1>ویرایش نماینده سازمان</h1><p>به‌روزرسانی اطلاعات تماس نماینده ثبت‌شده شرکت</p></div>
          <div className="company-top-actions"><Link className="company-account-back" to="/panel/company/account">بازگشت به حساب</Link></div>
        </header>
        <section className="company-account-edit-card is-representative">
          <div className="company-account-edit-heading"><h2>اطلاعات نماینده سازمان</h2><p>اطلاعات نماینده برای ارتباط و پیگیری حساب سازمانی</p></div>
          <div className="company-account-fields company-account-representative-fields">
            <div className="company-account-field"><label>نام و نام خانوادگی</label><input defaultValue="علیرضا سهرابی" /></div>
            <div className="company-account-field"><label>سمت سازمانی</label><input defaultValue="مدیر مسئولیت اجتماعی" /></div>
            <div className="company-account-field"><label>شماره موبایل</label><input defaultValue="۰۹۱۲۳۴۵۶۷۸۹" /></div>
            <div className="company-account-field"><label>تلفن ثابت</label><input defaultValue="۰۲۱۸۸۹۹۲۲۰۱" /></div>
            <div className="company-account-field"><label>ایمیل</label><input defaultValue="sohrabi@paydar-soft.ir" dir="ltr" /></div>
          </div>
          <div className="company-account-edit-note company-account-representative-note">اطلاعات تماس نماینده برای پیگیری‌های مربوط به حساب سازمانی، مشارکت‌ها و فرآیندهای مرتبط استفاده می‌شود.</div>
          <div className="company-account-edit-actions"><Link className="company-account-edit-cancel" to="/panel/company/account">انصراف</Link><Link className="company-account-edit-save" to="/panel/company/account">ذخیره تغییرات</Link></div>
        </section>
      </main>
      <CompanySidebar active="account" />
    </div>
  );
}
