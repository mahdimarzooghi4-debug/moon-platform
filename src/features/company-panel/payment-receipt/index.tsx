import { Link, useParams } from "react-router-dom";
import { CompanySidebar } from "../components/CompanySidebar";
import "../index.css";
import "./index.css";

const ASSET_ROOT = "/assets/company-panel";

const receiptRows = [
  ["مبلغ مشارکت", "۵۰٬۰۰۰٬۰۰۰ تومان"],
  ["تاریخ و ساعت", "۱۴۰۵/۰۶/۰۲، ۱۴:۳۲"],
  ["کد پیگیری ماه", "MAH-C-1405-0061"],
  ["شماره مرجع بانکی", "938410257631"],
  ["روش پرداخت", "واریز مستقیم به حساب کمیته امداد"],
] as const;

export default function CompanyPaymentReceipt() {
  const { projectId = "family-health" } = useParams();

  return (
    <div className="company-panel-shell company-receipt-shell">
      <main className="company-receipt-page" dir="rtl">
        <header className="company-topbar company-receipt-topbar">
          <div className="company-page-title">
            <h1>رسید مشارکت سازمانی</h1>
            <p>نسخه قابل چاپ رسید پرداخت و ثبت مشارکت شرکت</p>
          </div>
          <div className="company-top-actions">
            <button className="company-action company-action-primary company-receipt-print" type="button" onClick={() => window.print()}>
              چاپ / ذخیره PDF
            </button>
            <Link className="company-action company-action-secondary" to={`/panel/company/projects/${projectId}/participate/success`}>
              بازگشت
            </Link>
          </div>
        </header>

        <article className="company-receipt-paper" aria-label="رسید مشارکت سازمانی">
          <div className="company-receipt-head">
            <div className="company-receipt-logo-wrap">
              <img src={`${ASSET_ROOT}/logo.png`} alt="سامانه ماه" />
            </div>
            <div className="company-receipt-title">
              <span className="company-receipt-success">پرداخت موفق</span>
              <h2>رسید مشارکت سازمانی</h2>
              <p>سامانه ماه — مشارکت در پروژه‌های اثر اجتماعی</p>
            </div>
          </div>

          <section className="company-receipt-project">
            <div>
              <span>پروژه</span>
              <strong>سلامت خانواده</strong>
              <small>سلامت و بهداشت · سیستان و بلوچستان</small>
            </div>
            <div>
              <span>سازمان مشارکت‌کننده</span>
              <strong>پایدار پرداز خلاق آریا</strong>
              <small>نماینده: علیرضا سهرابی</small>
            </div>
          </section>

          <section className="company-receipt-details">
            <h3>جزئیات پرداخت</h3>
            {receiptRows.map(([label, value]) => {
              const ltr = value.startsWith("MAH") || /^\d/.test(value);
              return (
                <div className="company-receipt-row" key={label}>
                  <span>{label}</span>
                  <strong dir={ltr ? "ltr" : undefined}>{value}</strong>
                </div>
              );
            })}
            <div className="company-receipt-row">
              <span>نماینده سازمان</span>
              <strong>علیرضا سهرابی</strong>
            </div>
            <div className="company-receipt-row">
              <span>شماره همراه</span>
              <strong className="company-receipt-phone" dir="ltr">۰۹۱۲•••۶۷۸۹</strong>
            </div>
          </section>

          <section className="company-receipt-note">
            <div>
              <span>وضعیت تراکنش</span>
              <strong>موفق و ثبت‌شده</strong>
            </div>
            <p>این رسید نشان‌دهنده ثبت موفق مشارکت در سامانه ماه است. وضعیت پروژه، گزارش‌های اثر و شرایط گواهی ماده ۱۷۲ از پنل سازمانی قابل پیگیری است.</p>
          </section>

          <footer className="company-receipt-footer">
            <span>کد رسید: MAH-C-1405-0061</span>
            <span>سامانه ماه</span>
          </footer>
        </article>
      </main>
      <CompanySidebar active="participations" />
    </div>
  );
}
