import { Link } from "react-router-dom";
import { AdminSidebar } from "../components/AdminSidebar";
import "../index.css";
import "../users-flow.css";
import "../list-flow.css";

const ASSET_ROOT = "/assets/admin-panel";

const revenues = [
  { title: "پروژه سلامت خانواده", meta: "کارمزد تأمین مالی", source: "استارتاپ", rate: "۴٪", base: "۴۰۰ میلیون تومان", income: "۱۶ میلیون" },
  { title: "پروژه توسعه بازار", meta: "کارمزد تأمین مالی", source: "استارتاپ", rate: "۳٫۵٪", base: "۲٫۴ میلیارد تومان", income: "۸۴ میلیون" },
  { title: "دوره مالی صندوق", meta: "سهم سود صندوق", source: "صندوق", rate: "۳۰٪", base: "سود دوره: —", income: "در انتظار ثبت" },
];

const tiers = ["۰ تا ۲ میلیارد — ۴٪", "بیش از ۲ تا ۵ میلیارد — ۳٫۵٪", "بیش از ۵ تا ۱۰ میلیارد — ۳٪", "بیش از ۱۰ تا ۲۰ میلیارد — ۲٫۵٪", "بیش از ۲۰ میلیارد — ۲٪"];

export default function AdminRevenues() {
  return (
    <div className="admin-panel-shell" data-node-id="2279:2">
      <main className="admin-users-main" dir="rtl">
        <header className="admin-users-header">
          <div className="admin-users-heading"><h1>درآمدها</h1><p>پایش درآمدهای ماه از کارمزد تأمین مالی استارتاپ‌ها و سهم سود صندوق</p></div>
          <div className="admin-users-actions"><button className="admin-users-button admin-list-static-control" type="button" aria-disabled="true">خروجی درآمدها</button></div>
        </header>

        <section className="admin-users-kpis" aria-label="شاخص‌های درآمد">
          <article className="admin-users-kpi"><img src={`${ASSET_ROOT}/users-active.svg`} alt="" /><span>کل درآمد ثبت‌شده</span><strong>—</strong><small>مجموع درآمدهای قطعی دوره</small></article>
          <article className="admin-users-kpi"><img src={`${ASSET_ROOT}/users-roles.svg`} alt="" /><span>درآمد از استارتاپ‌ها</span><strong>۲٪ تا ۴٪</strong><small>کارمزد پلکانی تأمین مالی پروژه</small></article>
          <article className="admin-users-kpi"><img src={`${ASSET_ROOT}/users-review.svg`} alt="" /><span>درآمد از صندوق</span><strong>۳۰٪</strong><small>سهم ماه از سود صندوق</small></article>
          <article className="admin-users-kpi"><img src={`${ASSET_ROOT}/users-blocked.svg`} alt="" /><span>منابع درآمد</span><strong>۲</strong><small>کارمزد تأمین مالی + سهم سود صندوق</small></article>
        </section>

        <section className="admin-users-toolbar">
          <div className="admin-users-control admin-list-static-control">جستجو در پروژه، استارتاپ یا شناسه درآمد</div>
          <div className="admin-users-control admin-list-static-control">همه منابع درآمد</div>
          <div className="admin-users-control admin-list-static-control">همه بازه‌ها</div>
          <div className="admin-users-count">۳ جریان</div>
        </section>

        <section className="admin-users-table-card admin-list-table-compact">
          <h2>جریان‌های درآمدی</h2><p>درآمدهای ماه را بر اساس منبع، مبلغ مبنا، نرخ و وضعیت ثبت پایش کنید</p>
          <div className="admin-users-table">
            <div className="admin-users-row admin-users-table-head"><span>مبنا / پروژه</span><span>منبع درآمد</span><span>نرخ</span><span>مبلغ مبنا</span><span>درآمد ماه</span><span>اقدام</span></div>
            {revenues.map((item, index) => (
              <div className="admin-users-row" key={item.title}>
                <div className="admin-user-cell"><strong>{item.title}</strong><small>{item.meta}</small></div>
                <span>{item.source}</span>
                <span className="admin-status-pill admin-status-active">{item.rate}</span>
                <span>{item.base}</span>
                <span className="admin-access-pill admin-access-full">{item.income}</span>
                <Link className="admin-user-action" to={`/panel/admin/revenues/${index + 1}`}>مشاهده</Link>
              </div>
            ))}
            <div className="admin-pagination"><span>نمایش ۱ تا ۳ از ۳ جریان</span><div className="admin-pagination-controls"><button className="admin-page-control admin-list-static-control" type="button" aria-disabled="true">بعدی</button><span className="admin-page-number">۱</span><button className="admin-page-control" type="button" disabled>قبلی</button></div></div>
          </div>
        </section>

        <section className="admin-revenue-schedule">
          <h2>نرخ کارمزد تأمین مالی استارتاپ‌ها</h2><p>نرخ بر اساس مبلغ کل تأمین مالی پروژه محاسبه می‌شود.</p>
          <div className="admin-revenue-tiers">{tiers.map((tier) => <div className="admin-revenue-tier" key={tier}>{tier}</div>)}</div>
        </section>
      </main>
      <AdminSidebar active="revenues" />
    </div>
  );
}
