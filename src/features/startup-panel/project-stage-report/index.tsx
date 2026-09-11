import { FormEvent, useRef, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { StartupSidebar } from "../components/StartupSidebar";
import "../index.css";
import "./index.css";

type UploadControlProps = {
  title: string;
  description: string;
  name: string;
};

function UploadControl({ title, description, name }: UploadControlProps) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [fileName, setFileName] = useState("");

  return (
    <div className="startup-stage-report-upload-card">
      <strong>{title}</strong>
      <span>{description}</span>
      {fileName && <small title={fileName}>{fileName}</small>}
      <input
        ref={inputRef}
        className="startup-stage-report-file-input"
        name={name}
        type="file"
        onChange={(event) => setFileName(event.target.files?.[0]?.name ?? "")}
      />
      <button type="button" onClick={() => inputRef.current?.click()}>
        انتخاب فایل
      </button>
    </div>
  );
}

export default function StartupStageReportSubmit() {
  const { projectId = "rural-women", stageId = "1" } = useParams();
  const navigate = useNavigate();
  const stagePath = `/panel/startup/projects/${projectId}/stages/${stageId}`;
  const submittedPath = `${stagePath}/report/submitted`;

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    navigate(submittedPath);
  };

  return (
    <div className="startup-panel-page startup-stage-report-page" data-node-id="2052:2" data-name="startup-stage-report-submit">
      <StartupSidebar active="reports" />

      <main className="startup-stage-report-content">
        <header className="startup-stage-report-topbar">
          <div className="startup-stage-report-title">
            <h1>ثبت گزارش و مستندات مرحله</h1>
            <p>ارسال گزارش اجرای مرحله برای ارزیابی خانه خلاق و نوآوری آینه</p>
          </div>
          <Link className="startup-stage-report-back" to={`${stagePath}/in-progress`}>بازگشت به مرحله</Link>
        </header>

        <section className="startup-stage-report-summary" data-name="stage-report-summary">
          <div className="startup-stage-report-summary-copy">
            <h2>شناسایی و ارزیابی</h2>
            <p>پروژه: اشتغال زنان روستایی</p>
            <span className="startup-stage-report-status">در حال اجرا</span>
          </div>
          <dl>
            <div><dt>بازه زمانی</dt><dd>ماه اول</dd></div>
            <div><dt>سهم مرحله از منابع</dt><dd>۲۰٪</dd></div>
            <div className="is-wide"><dt>KPI مرحله</dt><dd>شناسایی ۴۵۰ بهره‌مند واجد شرایط</dd></div>
          </dl>
          <p className="startup-stage-report-summary-note">گزارش و مستندات ارسالی مبنای ارزیابی مرحله و تصمیم برای آزادسازی مرحله‌ای منابع است.</p>
        </section>

        <form className="startup-stage-report-form" onSubmit={handleSubmit}>
          <div className="startup-stage-report-form-row">
            <section className="startup-stage-report-description" data-name="stage-report-form">
              <h2>گزارش اجرای مرحله</h2>
              <p>شرح اقدامات انجام‌شده، نتایج و چالش‌های اجرای مرحله را ثبت کنید.</p>
              <label htmlFor="stage-report-description">شرح گزارش مرحله</label>
              <textarea id="stage-report-description" name="description" placeholder="شرح اقدامات انجام‌شده و نتایج مرحله را وارد کنید…" />
              <small>گزارش باید با مستندات بارگذاری‌شده و مقدار تحقق KPI هم‌خوان باشد.</small>
            </section>

            <section className="startup-stage-report-kpi" data-name="stage-kpi-result">
              <h2>تحقق KPI مرحله</h2>
              <div className="startup-stage-report-kpi-target">
                <span>هدف مصوب</span>
                <strong>۴۵۰ بهره‌مند واجد شرایط</strong>
              </div>
              <label className="startup-stage-report-kpi-value">
                <span>مقدار تحقق‌یافته</span>
                <input name="achieved" inputMode="numeric" placeholder="تعداد" />
              </label>
              <label className="startup-stage-report-kpi-evidence">
                <span>توضیح تحقق شاخص</span>
                <textarea name="evidence" placeholder="نحوه محاسبه و شواهد تحقق KPI را بنویسید…" />
              </label>
              <small>فهرست بهره‌مندان باید به‌عنوان مستند KPI بارگذاری شود.</small>
            </section>
          </div>

          <section className="startup-stage-report-documents" data-name="stage-documents-upload">
            <h2>مستندات مرحله</h2>
            <p>فایل‌های مرتبط با اجرای مرحله و شواهد تحقق KPI را اضافه کنید.</p>
            <div className="startup-stage-report-upload-grid">
              <UploadControl title="فهرست بهره‌مندان" description="فهرست افراد شناسایی‌شده مرتبط با KPI مرحله" name="beneficiaries" />
              <UploadControl title="مستندات پشتیبان" description="اسناد و شواهد مرتبط با اجرای مرحله" name="supportingDocuments" />
            </div>
          </section>

          <div className="startup-stage-report-metrics-row">
            <section className="startup-stage-report-impact" data-name="social-impact-report-card">
              <h2>گزارش اثر اجتماعی</h2>
              <p>تغییر ایجادشده برای جامعه هدف را با شاخص قابل سنجش ثبت کنید.</p>
              <div>
                <label>بهره‌مند مستقیم: <input name="directBeneficiaries" defaultValue="۴۵۰" /> نفر</label>
                <input name="impactNote" placeholder="شرح اثر و شواهد قابل اندازه‌گیری" />
              </div>
            </section>

            <section className="startup-stage-report-resources" data-name="resource-usage-card">
              <h2>گزارش مصرف منابع</h2>
              <p>هزینه‌کرد واقعی این مرحله را در برابر بودجه مصوب ثبت کنید.</p>
              <div>
                <label>مبلغ مصرف‌شده: <input name="spent" defaultValue="۱۸۰" /> میلیون تومان</label>
                <label>مانده مرحله: <input name="remaining" defaultValue="۲۰" /> میلیون تومان</label>
              </div>
            </section>
          </div>

          <section className="startup-stage-report-completeness" data-name="report-completeness-note">
            <h2>گزارش کامل مرحله</h2>
            <p>ارسال گزارش مرحله زمانی کامل است که عملکرد و KPI، مصرف منابع و اثر اجتماعی همراه با مستندات پشتیبان ثبت شده باشند. این سه بخش مبنای ارزیابی خانه خلاق و تصمیم برای ادامه آزادسازی منابع هستند.</p>
          </section>

          <section className="startup-stage-report-actions" data-name="stage-report-actions">
            <div>
              <h2>آماده ارسال برای ارزیابی</h2>
              <p>پس از ارسال، گزارش و مستندات توسط خانه خلاق و نوآوری آینه ارزیابی می‌شود.</p>
            </div>
            <div className="startup-stage-report-action-buttons">
              <button className="startup-stage-report-submit" type="submit">ارسال برای ارزیابی</button>
              <button className="startup-stage-report-draft" type="button">ذخیره پیش‌نویس</button>
            </div>
          </section>
        </form>
      </main>
    </div>
  );
}
