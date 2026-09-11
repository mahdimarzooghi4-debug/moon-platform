import { Link, useLocation } from "react-router-dom";
import { StartupSidebar } from "../components/StartupSidebar";
import "../index.css";
import "./index.css";

const steps = [
  { number: "۱", title: "اطلاعات پایه", subtitle: "مسئله و جامعه هدف", path: "/panel/startup/projects/new" },
  { number: "۲", title: "راهکار و زمان‌بندی", subtitle: "راهکار اجرایی و فازها", path: "/panel/startup/projects/new/step-2" },
  { number: "۳", title: "KPI و بودجه", subtitle: "شاخص و هزینه‌ها", path: "/panel/startup/projects/new/step-3" },
  { number: "۴", title: "ریسک و مستندات", subtitle: "ریسک و گزارش‌دهی", path: "/panel/startup/projects/new/step-4" },
] as const;

const nodeIds = ["1981:2", "2007:2", "2020:2", "2024:2"] as const;
const nodeNames = [
  "startup-project-create-step1",
  "startup-project-create-step2",
  "startup-project-create-step3",
  "startup-project-create-step4",
] as const;

function currentStep(pathname: string) {
  if (pathname.endsWith("/step-4")) return 4;
  if (pathname.endsWith("/step-3")) return 3;
  if (pathname.endsWith("/step-2")) return 2;
  return 1;
}

function ProjectStepper({ activeStep }: { activeStep: number }) {
  return (
    <section className="startup-create-stepper" data-name="project-registration-stepper">
      {steps.map((step, index) => {
        const stepNumber = index + 1;
        return (
          <Link
            key={step.path}
            to={step.path}
            className={`startup-create-step${activeStep === stepNumber ? " is-active" : ""}`}
          >
            <span className="startup-create-step-number">{step.number}</span>
            <span className="startup-create-step-copy">
              <strong>{step.title}</strong>
              <small>{step.subtitle}</small>
            </span>
          </Link>
        );
      })}
    </section>
  );
}

function Field({ label, placeholder }: { label: string; placeholder: string }) {
  return (
    <label className="startup-create-field">
      <span>{label}</span>
      <input type="text" placeholder={placeholder} />
    </label>
  );
}

function StepOne() {
  return (
    <>
      <div className="startup-create-card-heading">
        <div>
          <h2>اطلاعات پایه پروژه</h2>
          <p>مرحله اول از تدوین پروژه؛ اطلاعات مسئله، جامعه هدف و موقعیت اجرای پروژه را مشخص کنید.</p>
        </div>
        <span className="startup-create-stage-badge">مرحله ۱ از ۴</span>
      </div>

      <div className="startup-create-two-column">
        <Field label="عنوان پروژه" placeholder="عنوان پروژه اثر اجتماعی" />
        <Field label="حوزه اثر اجتماعی" placeholder="انتخاب حوزه اثر" />
        <Field label="موقعیت / منطقه اجرا" placeholder="استان، شهر یا منطقه اجرای پروژه" />
        <Field label="جامعه هدف" placeholder="ذی‌نفعان اصلی پروژه" />
      </div>

      <label className="startup-create-textarea">
        <strong>مسئله مشخص</strong>
        <small>چالش اجتماعی واضح و ریشه‌دار در یک منطقه یا جامعه هدف مشخص را شرح دهید.</small>
        <textarea placeholder="شرح مسئله اجتماعی، وضعیت موجود و نیازی که پروژه برای حل آن تعریف می‌شود…" />
      </label>

      <div className="startup-create-notice">
        <strong>پروژه قابل ارزیابی باید ۸ معیار اصلی را پوشش دهد.</strong>
        <span>مسئله مشخص، جامعه هدف، راهکار اجرایی، برنامه زمان‌بندی، بودجه شفاف، KPI قابل سنجش، مدیریت ریسک و گزارش‌دهی مداوم.</span>
      </div>
    </>
  );
}

function StepTwo() {
  return (
    <>
      <div className="startup-create-card-heading">
        <div>
          <h2>راهکار اجرایی و برنامه زمان‌بندی</h2>
          <p>راهکار اجرای پروژه و فازهای زمانی آن را به‌صورت روشن و مرحله‌به‌مرحله مشخص کنید.</p>
        </div>
        <span className="startup-create-stage-badge">مرحله ۲ از ۴</span>
      </div>

      <label className="startup-create-textarea startup-create-solution">
        <strong>راهکار اجرایی</strong>
        <small>نقشه مسیر شفاف برای اجرای گام‌به‌گام و تکرارپذیر راهکار را شرح دهید.</small>
        <textarea placeholder="شرح راهکار، مراحل اجرای آن و نحوه رسیدن از مسئله به نتیجه مورد انتظار…" />
      </label>

      <div className="startup-create-section-title">
        <h3>برنامه زمان‌بندی پروژه</h3>
        <p>پروژه را به فازهای اجرایی با تاریخ شروع و پایان مشخص تقسیم کنید.</p>
      </div>

      <div className="startup-create-phase-grid">
        <Field label="عنوان فاز" placeholder="عنوان فاز اجرایی" />
        <Field label="تاریخ شروع" placeholder="۱۴۰۵/۰۷/۰۱" />
        <Field label="تاریخ پایان" placeholder="۱۴۰۵/۰۸/۳۰" />
        <div className="startup-create-phase-number">فاز ۱</div>
      </div>

      <button className="startup-create-outline-action" type="button">افزودن فاز</button>

      <div className="startup-create-notice startup-create-notice-compact">
        <span>هر فاز باید زمان شروع و پایان مشخص داشته باشد و با راهکار اجرایی پروژه هم‌راستا باشد.</span>
      </div>
    </>
  );
}

function StepThree() {
  return (
    <>
      <div className="startup-create-card-heading">
        <div>
          <h2>KPI و بودجه پروژه</h2>
          <p>شاخص‌های قابل سنجش و بودجه شفاف پروژه را متناسب با فازهای اجرایی ثبت کنید.</p>
        </div>
        <span className="startup-create-stage-badge">مرحله ۳ از ۴</span>
      </div>

      <div className="startup-create-section-title">
        <h3>شاخص‌های کلیدی عملکرد (KPI)</h3>
        <p>برای هر شاخص، مقدار هدف، واحد سنجش و روش اندازه‌گیری را مشخص کنید.</p>
      </div>

      <div className="startup-create-data-row startup-create-kpi-row">
        <Field label="عنوان شاخص" placeholder="مثلاً تعداد فرصت‌های شغلی ایجادشده" />
        <Field label="مقدار هدف" placeholder="مقدار هدف" />
        <Field label="واحد سنجش" placeholder="نفر / درصد / ..." />
        <Field label="روش سنجش" placeholder="روش جمع‌آوری و سنجش داده" />
        <button className="startup-create-outline-action" type="button">افزودن شاخص</button>
      </div>

      <div className="startup-create-section-title startup-create-budget-title">
        <h3>بودجه پروژه</h3>
        <p>اقلام هزینه را شفاف و با ارتباط مشخص به فازهای پروژه ثبت کنید.</p>
      </div>

      <div className="startup-create-budget-summary">
        <Field label="بودجه کل پروژه (تومان)" placeholder="مبلغ کل موردنیاز پروژه" />
        <Field label="توضیح بودجه" placeholder="مبنای برآورد هزینه‌ها" />
      </div>

      <div className="startup-create-data-row startup-create-cost-row">
        <Field label="شرح هزینه" placeholder="عنوان ردیف هزینه" />
        <Field label="مرحله مرتبط" placeholder="انتخاب فاز" />
        <Field label="مبلغ (تومان)" placeholder="مبلغ" />
        <button className="startup-create-outline-action" type="button">افزودن ردیف هزینه</button>
      </div>

      <div className="startup-create-notice startup-create-notice-compact">
        <span>بودجه و KPIها باید با فازهای اجرایی پروژه هم‌خوان باشند؛ آزادسازی وجه هر مرحله پس از تأیید ارزیابی انجام می‌شود. کارمزد تأمین مالی بر اساس مبلغ کل پروژه محاسبه می‌شود.</span>
      </div>
    </>
  );
}

function StepFour() {
  return (
    <>
      <div className="startup-create-card-heading">
        <div>
          <h2>ریسک، مستندات و بازبینی نهایی</h2>
          <p>ریسک‌های پروژه، برنامه گزارش‌دهی و مستندات را تکمیل و پروژه را برای ارزیابی ارسال کنید.</p>
        </div>
        <span className="startup-create-stage-badge">مرحله ۴ از ۴</span>
      </div>

      <label className="startup-create-textarea startup-create-risk">
        <strong>ریسک‌های اصلی و راهکار کاهش</strong>
        <small>ریسک‌های مهم اجرای پروژه و اقدام پیشگیرانه یا اصلاحی برای هرکدام را شرح دهید.</small>
        <textarea placeholder="ریسک‌های اجرایی، عملیاتی یا مرتبط با جامعه هدف و نحوه مدیریت آن‌ها…" />
      </label>

      <div className="startup-create-section-title">
        <h3>برنامه گزارش‌دهی و مستندات</h3>
        <p>پس از هر مرحله اجرا، گزارش و مستندات همان مرحله برای ارزیابی ارسال می‌شود.</p>
      </div>

      <div className="startup-create-two-column startup-create-report-fields">
        <Field label="زمان ارسال گزارش" placeholder="پس از پایان هر مرحله" />
        <Field label="نوع مستندات" placeholder="گزارش اجرا، اسناد و شواهد مرتبط با مرحله" />
      </div>

      <div className="startup-create-upload">
        <div>
          <strong>مستندات پشتیبان پروژه</strong>
          <h3>فایل‌های مرتبط با برنامه اجرا و مستندات پشتیبان پروژه</h3>
          <p>فایل‌های بارگذاری‌شده همراه پروژه برای بررسی در دسترس ارزیاب قرار می‌گیرند.</p>
        </div>
        <label className="startup-create-outline-action startup-create-file-action">
          افزودن فایل
          <input type="file" hidden />
        </label>
      </div>

      <div className="startup-create-final-review">
        <strong>آماده ارسال برای ارزیابی</strong>
        <p>با ارسال پروژه، اطلاعات برای ارزیابی خانه خلاق و نوآوری آینه ثبت می‌شود. اجرای پروژه پس از تأیید پروژه وارد مراحل اجرایی خواهد شد.</p>
      </div>
    </>
  );
}

function StepContent({ step }: { step: number }) {
  if (step === 2) return <StepTwo />;
  if (step === 3) return <StepThree />;
  if (step === 4) return <StepFour />;
  return <StepOne />;
}

export default function StartupProjectCreate() {
  const location = useLocation();
  const step = currentStep(location.pathname);
  const previous = step > 1 ? steps[step - 2].path : "/panel/startup/projects";
  const next = step < 4 ? steps[step].path : null;

  return (
    <div className="startup-panel-page" data-node-id={nodeIds[step - 1]} data-name={nodeNames[step - 1]}>
      <StartupSidebar active="projects" />

      <main className="startup-dashboard-content startup-create-content">
        <header className="startup-topbar">
          <div className="startup-page-title">
            <h1>ثبت پروژه جدید</h1>
            <p>تدوین پروژه بر اساس معیارهای ارزیابی اثر اجتماعی</p>
          </div>
          <div className="startup-top-actions startup-create-actions">
            <Link className="startup-button startup-button-secondary startup-create-back-projects" to="/panel/startup/projects">
              بازگشت به پروژه‌ها
            </Link>
            <button className="startup-button startup-button-primary startup-create-save" type="button">ذخیره پیش‌نویس</button>
          </div>
        </header>

        <ProjectStepper activeStep={step} />

        <section className={`startup-create-card is-step-${step}`}>
          <StepContent step={step} />
          <div className="startup-create-footer">
            <Link className="startup-create-footer-secondary" to={previous}>{step === 1 ? "انصراف" : "مرحله قبل"}</Link>
            {next ? (
              <Link className="startup-create-footer-primary" to={next}>
                {step === 1 ? "ادامه: راهکار و زمان‌بندی" : step === 2 ? "ادامه: KPI و بودجه" : "ادامه: ریسک و مستندات"}
              </Link>
            ) : (
              <button className="startup-create-footer-primary startup-create-submit" type="button">ارسال پروژه برای ارزیابی</button>
            )}
          </div>
        </section>
      </main>
    </div>
  );
}
