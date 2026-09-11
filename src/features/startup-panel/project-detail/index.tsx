import { Link, useParams } from "react-router-dom";
import { StartupSidebar } from "../components/StartupSidebar";
import "../index.css";
import "./index.css";

const projectFacts = [
  ["مدت اجرا", "۱۲ ماه"],
  ["جامعه هدف", "زنان سرپرست خانوار"],
  ["استان", "گلستان"],
  ["حوزه اثر", "اشتغال و توانمندسازی"],
] as const;

const impactMetrics = [
  ["۱۲۰", "فرصت شغلی"],
  ["۴۵۰", "فرد بهره‌مند"],
  ["۲۵", "روستا"],
  ["۳۰٪", "افزایش درآمد"],
] as const;

const executionSteps = [
  ["۱", "شناسایی و ارزیابی", "ماه اول"],
  ["۲", "آموزش مهارتی", "ماه ۲ تا ۴"],
  ["۳", "تجهیز و توسعه", "ماه ۵ تا ۷"],
  ["۴", "اتصال به بازار", "ماه ۸ تا ۱۰"],
  ["۵", "پایش و گزارش اثر", "ماه ۱۱ و ۱۲"],
] as const;

export default function StartupProjectDetail() {
  const { projectId = "rural-women" } = useParams();
  const stagesPath = `/panel/startup/projects/${projectId}/stages`;

  return (
    <div className="startup-panel-page" data-node-id="2028:2" data-name="startup-project-detail">
      <StartupSidebar active="projects" />

      <main className="startup-dashboard-content startup-project-detail-content">
        <header className="startup-topbar">
          <div className="startup-page-title">
            <h1>جزئیات پروژه</h1>
            <p>وضعیت ارزیابی، تأمین مالی و برنامه اجرای پروژه</p>
          </div>
          <div className="startup-top-actions">
            <Link className="startup-button startup-button-secondary" to="/panel/startup/projects">
              بازگشت به پروژه‌ها
            </Link>
            <Link className="startup-button startup-button-primary" to={stagesPath}>
              مراحل پروژه
            </Link>
          </div>
        </header>

        <section className="startup-project-detail-summary" data-name="project-summary">
          <div className="startup-project-detail-main-copy">
            <h2>اشتغال زنان روستایی</h2>
            <p>توانمندسازی زنان روستایی استان گلستان از طریق آموزش، تجهیز، توسعه محصول و اتصال پایدار به بازار فروش.</p>
            <div className="startup-project-detail-chips">
              <span className="is-approved">تأیید شده توسط خانه خلاق و نوآوری آینه</span>
              <span className="is-funding">مرحله دوم تأمین مالی</span>
            </div>
            <dl className="startup-project-detail-facts">
              {projectFacts.map(([label, value]) => (
                <div key={label}>
                  <dt>{label}</dt>
                  <dd>{value}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="startup-project-detail-funding">
            <div className="startup-project-detail-funding-heading">
              <strong>پیشرفت تأمین مالی</strong>
              <span>۵۸٪</span>
            </div>
            <div className="startup-project-detail-funding-track" aria-label="پیشرفت تأمین مالی ۵۸ درصد">
              <span />
            </div>
            <div className="startup-project-detail-funding-numbers">
              <strong>۲۳۲ میلیون تومان</strong>
              <span>هدف: ۴۰۰ میلیون تومان</span>
              <span>باقی‌مانده: ۱۶۸ میلیون تومان</span>
            </div>
          </div>
        </section>

        <div className="startup-project-detail-row">
          <section className="startup-project-detail-evaluation" data-name="evaluation-status">
            <h2>وضعیت ارزیابی پروژه</h2>
            <div className="startup-project-detail-evaluation-grid">
              <div>
                <span>نتیجه ارزیابی</span>
                <strong className="is-approved">تأیید شده</strong>
              </div>
              <div>
                <span>مرجع ارزیابی</span>
                <strong>خانه خلاق و نوآوری آینه</strong>
              </div>
            </div>
            <p>پروژه پس از تأیید وارد تأمین مالی و سپس اجرای مرحله‌ای می‌شود.</p>
          </section>

          <section className="startup-project-detail-impact" data-name="target-impact">
            <h2>اثر اجتماعی هدف</h2>
            <div className="startup-project-detail-impact-grid">
              {impactMetrics.map(([value, label]) => (
                <div key={label}>
                  <strong>{value}</strong>
                  <span>{label}</span>
                </div>
              ))}
            </div>
          </section>
        </div>

        <section className="startup-project-detail-execution" data-name="execution-plan">
          <div className="startup-project-detail-section-heading">
            <h2>برنامه اجرای پروژه</h2>
            <p>برنامه مصوب اجرای پروژه در پنج بازه زمانی</p>
          </div>
          <div className="startup-project-detail-steps">
            {executionSteps.map(([number, title, period], index) => (
              <div className={`startup-project-detail-step${index === 0 ? " is-active" : ""}`} key={number}>
                <span className="startup-project-detail-step-number">{number}</span>
                <div>
                  <strong>{title}</strong>
                  <small>{period}</small>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="startup-project-detail-problem" data-name="problem-solution">
          <h2>مسئله و راهکار پروژه</h2>
          <div className="startup-project-detail-problem-grid">
            <div>
              <strong>مسئله</strong>
              <p>عدم دسترسی زنان سرپرست خانوار روستایی به آموزش شغلی پایدار، تجهیزات تولید و مسیرهای پایدار حضور در بازار.</p>
            </div>
            <div>
              <strong>راهکار</strong>
              <p>شناسایی و ارزیابی، آموزش تولید و فروش، تأمین تجهیزات، توسعه محصول و بسته‌بندی، اتصال به بازار و پایش مستمر اثر اجتماعی.</p>
            </div>
          </div>
          <Link className="startup-project-detail-stages-button" to={stagesPath}>مشاهده مراحل پروژه</Link>
        </section>
      </main>
    </div>
  );
}
