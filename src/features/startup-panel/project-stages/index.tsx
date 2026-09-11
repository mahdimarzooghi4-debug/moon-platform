import { Link, useParams } from "react-router-dom";
import { StartupSidebar } from "../components/StartupSidebar";
import "../index.css";
import "./index.css";

type StageRow = {
  number: string;
  title: string;
  subtitle: string;
  time: string;
  kpi: string;
  share: string;
  active?: boolean;
};

const stages: StageRow[] = [
  {
    number: "۱",
    title: "شناسایی و ارزیابی",
    subtitle: "مرحله فعلی پروژه",
    time: "ماه اول",
    kpi: "شناسایی ۴۵۰ بهره‌مند واجد شرایط",
    share: "۲۰٪",
    active: true,
  },
  {
    number: "۲",
    title: "آموزش مهارتی",
    subtitle: "پس از تأیید مرحله قبل",
    time: "ماه ۲ تا ۴",
    kpi: "تکمیل آموزش ۹۰٪ افراد انتخاب‌شده",
    share: "۲۵٪",
  },
  {
    number: "۳",
    title: "تجهیز و توسعه",
    subtitle: "پس از تأیید مرحله قبل",
    time: "ماه ۵ تا ۷",
    kpi: "تجهیز کارگاهی ۳۶۰ بهره‌مند واجد شرایط",
    share: "۲۵٪",
  },
  {
    number: "۴",
    title: "اتصال به بازار",
    subtitle: "پس از تأیید مرحله قبل",
    time: "ماه ۸ تا ۱۰",
    kpi: "اتصال ۳۰۰ تولیدکننده به زنجیره فروش",
    share: "۲۰٪",
  },
  {
    number: "۵",
    title: "پایش و گزارش اثر",
    subtitle: "پس از تأیید مرحله قبل",
    time: "ماه ۱۱ و ۱۲",
    kpi: "تأیید نتایج اشتغال پایدار پس از ۶ ماه",
    share: "۱۰٪",
  },
];

export default function StartupProjectStages() {
  const { projectId = "rural-women" } = useParams();
  const projectPath = `/panel/startup/projects/${projectId}`;
  const stageDetailPath = `${projectPath}/stages/1`;

  return (
    <div className="startup-panel-page" data-node-id="2033:2" data-name="startup-project-stages">
      <StartupSidebar active="stages" />

      <main className="startup-dashboard-content startup-project-stages-content">
        <header className="startup-project-stages-topbar">
          <div className="startup-project-stages-title">
            <h1>مراحل پروژه</h1>
            <p>مدیریت مراحل اجرای پروژه، KPIها و گزارش‌های مرحله‌ای</p>
          </div>
          <Link className="startup-project-stages-back" to={projectPath}>
            بازگشت به جزئیات پروژه
          </Link>
        </header>

        <section className="startup-project-stages-summary" data-name="project-stage-summary">
          <div className="startup-project-stages-summary-copy">
            <h2>اشتغال زنان روستایی</h2>
            <p>گلستان&nbsp;&nbsp;•&nbsp;&nbsp;اشتغال و توانمندسازی&nbsp;&nbsp;•&nbsp;&nbsp;۱۲ ماه اجرا</p>
            <span className="startup-project-stages-current-chip">مرحله اجرایی فعلی: شناسایی و ارزیابی</span>
            <small>وضعیت مرحله: آماده شروع</small>
          </div>

          <div className="startup-project-stages-funding">
            <div className="startup-project-stages-funding-heading">
              <strong>پیشرفت تأمین مالی</strong>
              <span>۵۸٪</span>
            </div>
            <div className="startup-project-stages-funding-track" aria-label="پیشرفت تأمین مالی ۵۸ درصد">
              <span />
            </div>
            <div className="startup-project-stages-funding-values">
              <strong>۲۳۲ میلیون تومان</strong>
              <span>هدف: ۴۰۰ میلیون تومان</span>
              <small>باقی‌مانده: ۱۶۸ میلیون تومان</small>
            </div>
          </div>
        </section>

        <section className="startup-project-stages-list" data-name="project-stages-list">
          <div className="startup-project-stages-list-heading">
            <div>
              <h2>مراحل اجرای پروژه</h2>
              <p>هر مرحله پس از تحقق KPI و ارزیابی گزارش مرحله‌ای وارد مرحله بعد می‌شود.</p>
            </div>
            <span>۵ مرحله</span>
          </div>

          <div className="startup-project-stages-table-header" aria-hidden="true">
            <span>مرحله</span>
            <span>بازه زمانی</span>
            <span>KPI آزادسازی مرحله</span>
            <span>سهم مرحله</span>
            <span>وضعیت</span>
            <span>اقدام</span>
          </div>

          <div className="startup-project-stages-rows">
            {stages.map((stage, index) => (
              <div
                className={`startup-project-stages-row${stage.active ? " is-active" : ""}`}
                data-name={`stage-row-${stage.number}`}
                key={stage.number}
              >
                <div className="startup-project-stages-stage-cell">
                  <span className="startup-project-stages-number">{stage.number}</span>
                  <div>
                    <strong>{stage.title}</strong>
                    <small>{stage.subtitle}</small>
                  </div>
                </div>
                <div className="startup-project-stages-time">{stage.time}</div>
                <div className="startup-project-stages-kpi">{stage.kpi}</div>
                <div className="startup-project-stages-share">{stage.share}</div>
                <div className={`startup-project-stages-status${stage.active ? " is-ready" : ""}`}>
                  {stage.active ? "آماده شروع" : "قفل‌شده"}
                </div>
                {index === 0 ? (
                  <Link className="startup-project-stages-action" to={stageDetailPath}>
                    مشاهده جزئیات
                  </Link>
                ) : (
                  <span className="startup-project-stages-action is-disabled" aria-disabled="true">
                    قفل‌شده
                  </span>
                )}
              </div>
            ))}
          </div>

          <div className="startup-project-stages-note" data-name="stage-process-note">
            پس از پایان هر مرحله، گزارش و مستندات برای ارزیابی خانه خلاق و نوآوری آینه ارسال می‌شود؛ تأیید مرحله مبنای آزادسازی وجه همان مرحله توسط کمیته امداد است.
          </div>
        </section>
      </main>
    </div>
  );
}
