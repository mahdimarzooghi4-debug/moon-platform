import { Link } from "react-router-dom";
import { AyenehSidebar } from "./components/AyenehSidebar";
import "./index.css";

const ASSET_ROOT = "/assets/ayeneh-panel";

const kpis = [
  { key: "startups", label: "تعداد استارتاپ‌ها", value: "۱٬۲۵۰", unit: "استارتاپ", icon: "kpi-startups.svg" },
  { key: "projects", label: "پروژه‌های فعال", value: "۲۴", unit: "پروژه", icon: "kpi-projects.svg" },
  { key: "funds", label: "منابع جذب‌شده", value: "۱۸٫۴", unit: "میلیارد تومان", icon: "kpi-funds.svg" },
  { key: "beneficiaries", label: "افراد بهره‌مند", value: "۱۲٬۸۴۰", unit: "نفر", icon: "kpi-beneficiaries.svg" },
] as const;

const impactRows = [
  ["سلامت خانواده", "پوشش خدمات", "۷۴٪", "blue"],
  ["مهارت برای نوجوانان", "اشتغال‌پذیری", "۷۰٪ افزایش", "green"],
  ["اشتغال زنان روستایی", "توسعه درآمدی", "۳۰٪ افزایش", "orange"],
] as const;

const fundingRows = [
  ["سلامت خانواده", "سیستان و بلوچستان", 51],
  ["مهارت برای نوجوانان", "اصفهان", 74],
  ["اشتغال زنان روستایی", "گلستان", 58],
] as const;

const startups = [
  ["۱", "سلامت‌یار شرق", "پروژه: سلامت خانواده", "مریم احمدی", "سلامت و بهداشت", "در حال ارزیابی پروژه", "orange"],
  ["۲", "آینده‌ساز مهارت", "پروژه: مهارت برای نوجوانان", "علی رضایی", "آموزش و اشتغال", "در حال اجرای مرحله ۱", "blue"],
  ["۳", "روستابانوان گلستان", "پروژه: اشتغال زنان روستایی", "زهرا محمدی", "کسب‌وکار و اشتغال", "آماده آزادسازی وجه", "green"],
] as const;

export default function AyenehDashboard() {
  return (
    <div className="ayeneh-shell" data-node-id="1714:582">
      <main className="ayeneh-main">
        <header className="ayeneh-topbar">
          <div className="ayeneh-top-actions">
            <Link className="ayeneh-action secondary" to="/panel/ayeneh/reports">گزارش‌های آماری</Link>
            <Link className="ayeneh-action primary" to="/panel/ayeneh/evaluation-history">همه ارزیابی‌ها</Link>
          </div>
          <div className="ayeneh-page-title">
            <h1>داشبورد خانه خلاق و نوآوری آینه</h1>
            <p>ارزیابی استارتاپ‌ها، پروژه‌ها و مراحل اجرای طرح</p>
          </div>
        </header>

        <section className="ayeneh-kpis" aria-label="شاخص‌های کلیدی">
          {kpis.map((item) => (
            <article className={`ayeneh-kpi ${item.key}`} key={item.key}>
              <span className="ayeneh-kpi-label">{item.label}</span>
              <div className="ayeneh-kpi-value"><strong>{item.value}</strong><span>{item.unit}</span></div>
              <div className="ayeneh-kpi-accent" />
              <div className="ayeneh-kpi-icon"><img src={`${ASSET_ROOT}/${item.icon}`} alt="" /></div>
            </article>
          ))}
        </section>

        <section className="ayeneh-overview">
          <div className="ayeneh-overview-head">
            <span className="ayeneh-source-chip">داده‌های لندینگ</span>
            <h2 className="ayeneh-section-title">مرور آماری ارزیابی و اثر</h2>
          </div>
          <div className="ayeneh-overview-body">
            <article className="ayeneh-impact">
              <h3 className="ayeneh-card-title">شاخص‌های اثر منتخب</h3>
              {impactRows.map(([project, metric, value, tone]) => (
                <div className="ayeneh-impact-row" key={project}>
                  <strong>{project}</strong><span>{metric}</span><span className={`ayeneh-impact-chip ${tone}`}>{value}</span>
                </div>
              ))}
            </article>
            <article className="ayeneh-funding">
              <h3 className="ayeneh-card-title">وضعیت تأمین مالی پروژه‌های شاخص</h3>
              {fundingRows.map(([project, province, percent]) => (
                <div className="ayeneh-funding-row" key={project}>
                  <strong>{project}</strong><span>{province}</span><div className="ayeneh-progress"><i style={{ width: `${percent}%` }} /></div><span className="ayeneh-percent">{percent}٪</span>
                </div>
              ))}
            </article>
          </div>
          <div className="ayeneh-summary-strip">
            <div className="ayeneh-summary-stat blue"><strong>۳</strong><span>پروژه شاخص</span></div>
            <div className="ayeneh-summary-stat purple"><strong>۳</strong><span>استان در پروژه‌های شاخص</span></div>
            <div className="ayeneh-summary-stat green"><strong>۳</strong><span>حوزه اثر</span></div>
            <div className="ayeneh-summary-stat orange"><strong>۶۱٪</strong><span>میانگین تأمین پروژه‌های شاخص</span></div>
          </div>
        </section>

        <section className="ayeneh-startup-list">
          <div className="ayeneh-list-head"><span className="ayeneh-list-note" /><h2>فهرست استارتاپ‌ها</h2></div>
          <div className="ayeneh-table" role="table" aria-label="فهرست استارتاپ‌ها">
            <div className="ayeneh-table-head" role="row"><div className="ayeneh-cell">مرحله فعلی</div><div className="ayeneh-cell">حوزه فعالیت</div><div className="ayeneh-cell">مدیر استارتاپ</div><div className="ayeneh-cell">نام استارتاپ</div><div className="ayeneh-cell center">ردیف</div></div>
            {startups.map(([number, name, project, manager, domain, stage, tone]) => (
              <div className="ayeneh-table-row" role="row" key={name}>
                <div className="ayeneh-cell center"><span className={`ayeneh-stage ${tone}`}>{stage}</span></div>
                <div className="ayeneh-cell">{domain}</div>
                <div className="ayeneh-cell" style={{ color: "#60758a" }}>{manager}</div>
                <div className="ayeneh-cell ayeneh-startup-name"><strong>{name}</strong><small>{project}</small></div>
                <div className="ayeneh-cell center" style={{ color: "#60758a", fontSize: 12 }}>{number}</div>
              </div>
            ))}
          </div>
          <div className="ayeneh-pagination"><span>نمایش ۱ تا ۳ از ۳</span><span>صفحه ۱ از ۱</span></div>
        </section>
      </main>
      <AyenehSidebar active="dashboard" />
    </div>
  );
}
