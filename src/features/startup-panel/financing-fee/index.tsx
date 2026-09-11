import { Link } from "react-router-dom";
import { StartupSidebar } from "../components/StartupSidebar";
import "../index.css";
import "./index.css";

const feeRows = [
  ["۰ تا ۲ میلیارد تومان", "۴٪"],
  ["بیش از ۲ تا ۵ میلیارد تومان", "۳٫۵٪"],
  ["بیش از ۵ تا ۱۰ میلیارد تومان", "۳٪"],
  ["بیش از ۱۰ تا ۲۰ میلیارد تومان", "۲٫۵٪"],
  ["بیش از ۲۰ میلیارد تومان", "۲٪"],
] as const;

const notes = [
  "کارمزد متعلق به ماه است و از مبلغ تأمین مالی پروژه محاسبه می‌شود.",
  "نرخ بر اساس بازه مبلغ کل پروژه تعیین می‌شود و هر پروژه فقط یک نرخ دارد.",
  "مبلغ کارمزد قبل از نهایی شدن تأمین مالی در جزئیات پروژه قابل مشاهده خواهد بود.",
] as const;

export default function StartupFinancingFee() {
  return (
    <div className="startup-panel-page startup-financing-fee-page" data-node-id="2280:372" data-name="startup-financing-fee">
      <StartupSidebar active="financing" />
      <main className="startup-financing-fee-content">
        <header className="startup-financing-fee-topbar">
          <div className="startup-financing-fee-title">
            <h1>کارمزد تأمین مالی</h1>
            <p>مشاهده نرخ کارمزد پروژه بر اساس مبلغ کل تأمین مالی</p>
          </div>
          <div className="startup-financing-fee-actions">
            <Link to="/panel/startup/projects/new" className="is-primary">ثبت پروژه جدید</Link>
            <Link to="/panel/startup/profile">پروفایل استارتاپ</Link>
          </div>
        </header>

        <section className="startup-financing-fee-card startup-financing-fee-summary" data-name="fee-summary">
          <h2>کارمزد پروژه شما چگونه محاسبه می‌شود؟</h2>
          <p>کارمزد بر اساس مبلغ کل تأمین مالی پروژه تعیین می‌شود و قبل از نهایی شدن تأمین برای استارتاپ شفاف است.</p>
          <div className="startup-financing-fee-summary-grid">
            <div><span>کارمزد نمونه</span><strong>۱۶ میلیون تومان</strong></div>
            <div><span>نرخ این بازه</span><strong>۴٪</strong></div>
            <div><span>نمونه پروژه</span><strong>۴۰۰ میلیون تومان</strong></div>
          </div>
        </section>

        <section className="startup-financing-fee-card startup-financing-fee-table-card" data-name="fee-rate-table">
          <h2>جدول نرخ کارمزد تأمین مالی</h2>
          <p>نرخ به مبلغ کل تأمین مالی پروژه اعمال می‌شود.</p>
          <div className="startup-financing-fee-table" role="table" aria-label="جدول نرخ کارمزد تأمین مالی">
            <div className="startup-financing-fee-table-row is-head" role="row">
              <span role="columnheader">بازه مبلغ تأمین مالی</span><span role="columnheader">نرخ کارمزد</span>
            </div>
            {feeRows.map(([range, rate]) => (
              <div className="startup-financing-fee-table-row" role="row" key={range}>
                <span role="cell">{range}</span><strong role="cell">{rate}</strong>
              </div>
            ))}
          </div>
        </section>

        <section className="startup-financing-fee-card startup-financing-fee-notes" data-name="fee-calculation-note">
          <h2>نکات محاسبه</h2>
          <ul>{notes.map((note) => <li key={note}>{note}</li>)}</ul>
        </section>
      </main>
    </div>
  );
}
