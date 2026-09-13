import { useState } from "react";
import { Link } from "react-router-dom";
import { StartupSidebar } from "../components/StartupSidebar";
import "../index.css";
import "./index.css";

type FeeBand = {
  max: number | null;
  label: string;
  rate: number;
};

type ProjectStage = {
  id: number;
  title: string;
  share: number;
};

const PAYMENT_STORAGE_KEY = "mah.startup.financingFee.paidStages.v1";

const feeBands: FeeBand[] = [
  { max: 2_000_000_000, label: "تا ۲ میلیارد تومان", rate: 0.04 },
  { max: 5_000_000_000, label: "بیش از ۲ تا ۵ میلیارد", rate: 0.035 },
  { max: 10_000_000_000, label: "بیش از ۵ تا ۱۰ میلیارد", rate: 0.03 },
  { max: 20_000_000_000, label: "بیش از ۱۰ تا ۲۰ میلیارد", rate: 0.025 },
  { max: null, label: "بیش از ۲۰ میلیارد", rate: 0.02 },
];

const project = {
  id: "rural-women",
  title: "اشتغال زنان روستایی",
  category: "کسب‌وکار و اشتغال · گلستان",
  totalFunding: 400_000_000,
  currentFundingStage: 2,
  stages: [
    { id: 1, title: "شناسایی و ارزیابی", share: 20 },
    { id: 2, title: "آموزش مهارتی", share: 25 },
    { id: 3, title: "تجهیز و توسعه", share: 25 },
    { id: 4, title: "اتصال به بازار", share: 20 },
    { id: 5, title: "پایش و گزارش اثر", share: 10 },
  ] satisfies ProjectStage[],
} as const;

function getFeeRate(amount: number) {
  return feeBands.find((band) => band.max === null || amount <= band.max)?.rate ?? 0.02;
}

function formatToman(amount: number) {
  return `${new Intl.NumberFormat("fa-IR").format(Math.round(amount))} تومان`;
}

function formatRate(rate: number) {
  return `${new Intl.NumberFormat("fa-IR", { maximumFractionDigits: 1 }).format(rate * 100)}٪`;
}

const projectRate = getFeeRate(project.totalFunding);
const stageFees = project.stages.map((stage) => {
  const fundingAmount = project.totalFunding * (stage.share / 100);
  return {
    ...stage,
    fundingAmount,
    feeAmount: fundingAmount * projectRate,
  };
});
const totalFee = stageFees.reduce((sum, stage) => sum + stage.feeAmount, 0);

function readPaidStages() {
  if (typeof window === "undefined") return [1];
  try {
    const saved = JSON.parse(localStorage.getItem(PAYMENT_STORAGE_KEY) ?? "null");
    if (!Array.isArray(saved)) return [1];
    const ids = saved.filter((value): value is number => typeof value === "number");
    return ids.includes(1) ? ids : [1, ...ids];
  } catch {
    return [1];
  }
}

export default function StartupFinancingFee() {
  const [paidStageIds, setPaidStageIds] = useState<number[]>(readPaidStages);
  const paidFee = stageFees
    .filter((stage) => paidStageIds.includes(stage.id))
    .reduce((sum, stage) => sum + stage.feeAmount, 0);
  const currentStage = stageFees.find((stage) => stage.id === project.currentFundingStage);
  const currentStagePaid = currentStage ? paidStageIds.includes(currentStage.id) : false;

  const handleStagePayment = (stageId: number) => {
    const stage = stageFees.find((item) => item.id === stageId);
    if (!stage || stageId !== project.currentFundingStage || paidStageIds.includes(stageId)) return;

    const approved = window.confirm(
      `کارمزد ${formatToman(stage.feeAmount)} برای مرحله «${stage.title}» به‌عنوان پرداخت‌شده ثبت شود؟`,
    );
    if (!approved) return;

    const next = [...paidStageIds, stageId].sort((a, b) => a - b);
    localStorage.setItem(PAYMENT_STORAGE_KEY, JSON.stringify(next));
    setPaidStageIds(next);
  };

  return (
    <div className="startup-panel-page startup-financing-fee-page" data-node-id="2280:372" data-name="startup-financing-fee">
      <StartupSidebar active="financing" />
      <main className="startup-financing-fee-content">
        <header className="startup-financing-fee-topbar">
          <div className="startup-financing-fee-title">
            <h1>کارمزد تأمین مالی پروژه‌ها</h1>
            <p>محاسبه کارمزد هر پروژه و تسویه مرحله‌ای هم‌زمان با مراحل تأمین مالی</p>
          </div>
          <div className="startup-financing-fee-actions">
            <Link to="/panel/startup/projects" className="is-primary">پروژه‌های من</Link>
            <Link to={`/panel/startup/projects/${project.id}`}>جزئیات پروژه</Link>
          </div>
        </header>

        <section className="startup-financing-fee-card startup-financing-fee-summary" data-name="fee-summary">
          <div className="startup-financing-fee-summary-heading">
            <div>
              <h2>محاسبه کارمزد پروژه</h2>
              <p>نرخ از مبلغ کل پروژه تعیین می‌شود؛ مبلغ قابل پرداخت در هر مرحله فقط بر مبنای سهم تأمین مالی همان مرحله محاسبه می‌شود.</p>
            </div>
            <span>۱ پروژه فعال</span>
          </div>
          <div className="startup-financing-fee-summary-grid">
            <div><span>پروژه</span><strong>{project.title}</strong></div>
            <div><span>کل تأمین مالی</span><strong>{formatToman(project.totalFunding)}</strong></div>
            <div><span>نرخ کارمزد پروژه</span><strong>{formatRate(projectRate)}</strong></div>
            <div><span>کل کارمزد پروژه</span><strong>{formatToman(totalFee)}</strong></div>
          </div>
        </section>

        <section className="startup-financing-fee-card startup-financing-fee-project" data-name="project-stage-fees">
          <div className="startup-financing-fee-project-head">
            <div>
              <h2>{project.title}</h2>
              <p>{project.category}</p>
            </div>
            <div className="startup-financing-fee-project-status">
              <span>مرحله جاری تأمین مالی</span>
              <strong>مرحله {project.currentFundingStage.toLocaleString("fa-IR")} — {currentStage?.title}</strong>
            </div>
          </div>

          <div className="startup-financing-fee-stage-table" role="table" aria-label="کارمزد مرحله‌ای پروژه">
            <div className="startup-financing-fee-stage-row is-head" role="row">
              <span role="columnheader">مرحله</span>
              <span role="columnheader">سهم</span>
              <span role="columnheader">مبلغ تأمین مرحله</span>
              <span role="columnheader">نرخ</span>
              <span role="columnheader">کارمزد مرحله</span>
              <span role="columnheader">وضعیت</span>
              <span role="columnheader">اقدام</span>
            </div>

            {stageFees.map((stage) => {
              const isPaid = paidStageIds.includes(stage.id);
              const isCurrent = stage.id === project.currentFundingStage;
              const status = isPaid ? "پرداخت شده" : isCurrent ? "سررسید پرداخت" : "در انتظار مرحله";

              return (
                <div className={`startup-financing-fee-stage-row${isCurrent ? " is-current" : ""}`} role="row" key={stage.id}>
                  <div className="startup-financing-fee-stage-name" role="cell">
                    <strong>مرحله {stage.id.toLocaleString("fa-IR")}</strong>
                    <small>{stage.title}</small>
                  </div>
                  <span role="cell">{stage.share.toLocaleString("fa-IR")}٪</span>
                  <span role="cell">{formatToman(stage.fundingAmount)}</span>
                  <span role="cell">{formatRate(projectRate)}</span>
                  <strong className="startup-financing-fee-stage-amount" role="cell">{formatToman(stage.feeAmount)}</strong>
                  <span className={`startup-financing-fee-payment-state${isPaid ? " is-paid" : isCurrent ? " is-due" : ""}`} role="cell">{status}</span>
                  <div className="startup-financing-fee-stage-action" role="cell">
                    {isCurrent && !isPaid ? (
                      <button type="button" onClick={() => handleStagePayment(stage.id)}>پرداخت کارمزد مرحله</button>
                    ) : isPaid ? (
                      <span className="is-complete">تسویه شد</span>
                    ) : (
                      <span>پس از فعال‌شدن مرحله</span>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          <div className="startup-financing-fee-project-totals">
            <div><span>کارمزد پرداخت‌شده</span><strong>{formatToman(paidFee)}</strong></div>
            <div><span>کارمزد مرحله جاری</span><strong>{currentStage ? formatToman(currentStage.feeAmount) : "—"}</strong></div>
            <div><span>وضعیت مرحله جاری</span><strong className={currentStagePaid ? "is-paid" : "is-due"}>{currentStagePaid ? "تسویه شده" : "نیازمند پرداخت"}</strong></div>
          </div>
        </section>

        <section className="startup-financing-fee-card startup-financing-fee-policy" data-name="fee-policy">
          <div>
            <h2>قاعده پرداخت کارمزد</h2>
            <p>کارمزد هر مرحله باید هم‌زمان با تأمین مالی همان مرحله تسویه شود. مراحل آینده تا زمان فعال‌شدن، سررسید پرداخت ندارند.</p>
          </div>
          <div className="startup-financing-fee-bands" aria-label="نرخ‌های کارمزد">
            {feeBands.map((band) => (
              <span key={band.label}><small>{band.label}</small><strong>{formatRate(band.rate)}</strong></span>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
