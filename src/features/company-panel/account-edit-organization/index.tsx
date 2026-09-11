import { Link } from "react-router-dom";
import { CompanySidebar } from "../components/CompanySidebar";
import "../index.css";
import "../account-edit.css";

export default function CompanyEditOrganizationInfo() {
  return (
    <div className="company-panel-shell" data-node-id="1969:2">
      <main className="company-account-edit-page" dir="rtl">
        <header className="company-topbar">
          <div className="company-page-title"><h1>ویرایش اطلاعات سازمان</h1><p>ویرایش اطلاعات ثبتی، تماس و نشانی شرکت</p></div>
          <div className="company-top-actions"><Link className="company-account-back" to="/panel/company/account">بازگشت به حساب</Link></div>
        </header>
        <section className="company-account-edit-card is-tall">
          <div className="company-account-edit-heading"><h2>اطلاعات ثبتی شرکت</h2><p>اطلاعات ثبت‌شده هنگام ایجاد حساب سازمانی</p></div>
          <div className="company-account-fields">
            <div className="company-account-field"><label>نام رسمی شرکت</label><input defaultValue="پایدار پرداز خلاق آریا" /></div>
            <div className="company-account-field"><label>شناسه ملی</label><input defaultValue="۱۰۱۰۴۵۸۶۹۲۱" /></div>
            <div className="company-account-field"><label>شماره ثبت</label><input defaultValue="۴۵۸۶۹۲" /></div>
            <div className="company-account-field"><label>نوع شخصیت حقوقی</label><input defaultValue="سهامی خاص" /></div>
            <div className="company-account-field"><label>تاریخ ثبت</label><input defaultValue="۱۳۹۸/۰۵/۱۲" /></div>
            <div className="company-account-field"><label>حوزه فعالیت</label><input defaultValue="فناوری اطلاعات و نرم‌افزار" /></div>
            <div className="company-account-field"><label>وب‌سایت</label><input defaultValue="https://paydar-soft.ir" dir="ltr" /></div>
            <div className="company-account-field"><label>استان / شهر</label><input defaultValue="تهران / تهران" /></div>
            <div className="company-account-field"><label>کد پستی</label><input defaultValue="۱۴۳۹۵۱۵۶۱۷" /></div>
            <div className="company-account-field"><label>نشانی دفتر مرکزی</label><textarea defaultValue="خیابان کارگر شمالی، نرسیده به بزرگراه جلال آل احمد، دانشکده فنی دانشگاه تهران، ساختمان پارک علم و فناوری، واحد ۴۰۵" /></div>
          </div>
          <div className="company-account-edit-note">این اطلاعات برای تکمیل سوابق سازمانی و بررسی شرایط مرتبط با ماده ۱۷۲ استفاده می‌شود؛ دسترسی به پنل شرکت وابسته به تأیید اولیه حساب نیست.</div>
          <div className="company-account-edit-actions"><Link className="company-account-edit-cancel" to="/panel/company/account">انصراف</Link><Link className="company-account-edit-save" to="/panel/company/account">ذخیره تغییرات</Link></div>
        </section>
      </main>
      <CompanySidebar active="account" />
    </div>
  );
}
