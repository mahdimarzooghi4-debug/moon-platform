import { Link } from "react-router-dom";
import { StartupSidebar } from "../components/StartupSidebar";
import "../index.css";
import "./index.css";

const resourceRows = [
  ["بودجه مصوب مرحله", "۲۰۰ میلیون تومان"],
  ["هزینه‌کرد ثبت‌شده", "۱۸۰ میلیون تومان"],
  ["مانده قابل مصرف", "۲۰ میلیون تومان"],
] as const;

const documentRows = ["فهرست بهره‌مندان", "اسناد هزینه‌کرد", "گزارش تصویری مرحله"] as const;

export default function StartupReportDetail() {
  return (
    <div className="startup-panel-page startup-report-detail-page" data-node-id="2381:2" data-name="startup-report-detail">
      <StartupSidebar active="reports" />

      <main className="startup-report-detail-content">
        <header className="startup-report-detail-header" data-name="report-detail-header">
          <div>
            <h1>جزئیات گزارش پروژه</h1>
            <p>عملکرد، مصرف منابع، اثر اجتماعی و مستندات گزارش ثبت‌شده</p>
          </div>
          <Link to="/panel/startup/reports">بازگشت به گزارش‌ها</Link>
        </header>

        <section className="startup-report-detail-summary" data-name="summary">
          <div className="startup-report-detail-summary-project">
            <h2>اشتغال زنان روستایی</h2>
            <p>گزارش میان‌دوره‌ای مرحله اول</p>
          </div>
          <dl>
            <div><dt>دوره گزارش</dt><dd>شهریور تا آبان ۱۴۰۵</dd></div>
            <div><dt className="sr-only">وضعیت</dt><dd className="is-status">منتشر شده</dd></div>
          </dl>
        </section>

        <div className="startup-report-detail-two-column">
          <section className="startup-report-detail-performance" data-name="performance-card">
            <h2>عملکرد و تحقق KPI</h2>
            <strong>هدف مصوب: شناسایی ۴۵۰ بهره‌مند واجد شرایط</strong>
            <strong className="is-blue">مقدار تحقق‌یافته: ۴۲۰ نفر — ۹۳٪</strong>
            <p>اقدامات مرحله شامل شناسایی جامعه هدف، اعتبارسنجی اطلاعات و تشکیل پرونده اولیه بوده است. مستندات KPI همراه گزارش ثبت و تأیید شده‌اند.</p>
          </section>

          <section className="startup-report-detail-resources" data-name="resource-card">
            <h2>مصرف منابع مرحله</h2>
            <dl>
              {resourceRows.map(([label, value]) => (
                <div key={label}>
                  <dt>{label}</dt>
                  <dd>{value}</dd>
                </div>
              ))}
            </dl>
          </section>
        </div>

        <div className="startup-report-detail-two-column is-lower">
          <section className="startup-report-detail-impact" data-name="impact-card">
            <h2>اثر اجتماعی ثبت‌شده</h2>
            <strong>۴۲۰ بهره‌مند مستقیم</strong>
            <p>افزایش دسترسی جامعه هدف به آموزش و آماده‌سازی اولیه برای ورود به مسیر درآمدزایی. اثر گزارش‌شده با فهرست بهره‌مندان و مستندات میدانی پشتیبانی شده است.</p>
          </section>

          <section className="startup-report-detail-documents" data-name="documents-card">
            <h2>مستندات</h2>
            <div className="startup-report-detail-document-rows">
              {documentRows.map((name) => (
                <div key={name}>
                  <strong>{name}</strong>
                  <span>مشاهده</span>
                </div>
              ))}
            </div>
          </section>
        </div>

        <section className="startup-report-detail-note" data-name="evaluation-note">
          این گزارش پس از ارزیابی خانه خلاق در سوابق پروژه ثبت می‌شود. نسخه تأییدشده می‌تواند در گزارش‌های عمومی سامانه و پنل شرکت تأمین‌کننده منابع نمایش داده شود.
        </section>
      </main>
    </div>
  );
}
