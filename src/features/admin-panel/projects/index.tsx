import { Link } from "react-router-dom";
import { AdminSidebar } from "../components/AdminSidebar";
import "../index.css";
import "../users-flow.css";
import "../list-flow.css";

const ASSET_ROOT = "/assets/admin-panel";

const projects = [
  { name: "سلامت خانواده", meta: "حوزه: سلامت و خدمات اجتماعی", province: "سیستان و بلوچستان", funding: "۵۱٪" },
  { name: "مهارت برای نوجوانان", meta: "حوزه: آموزش و مهارت", province: "اصفهان", funding: "۷۴٪" },
  { name: "اشتغال زنان روستایی", meta: "حوزه: اشتغال و معیشت", province: "گلستان", funding: "۵۸٪" },
];

export default function AdminProjects() {
  return (
    <div className="admin-panel-shell" data-node-id="2252:185">
      <main className="admin-users-main" dir="rtl">
        <header className="admin-users-header">
          <div className="admin-users-heading"><h1>پروژه‌ها</h1><p>پایش وضعیت پروژه‌ها، تأمین مالی و روند اجرای طرح‌ها در سامانه ماه</p></div>
          <div className="admin-users-actions"><button className="admin-users-button admin-list-static-control" type="button" aria-disabled="true">خروجی پروژه‌ها</button></div>
        </header>

        <section className="admin-users-kpis" aria-label="شاخص‌های پروژه‌ها">
          <article className="admin-users-kpi"><img src={`${ASSET_ROOT}/users-active.svg`} alt="" /><span>پروژه‌های فعال</span><strong>۲۴</strong><small>پروژه فعال در سامانه</small></article>
          <article className="admin-users-kpi"><img src={`${ASSET_ROOT}/users-roles.svg`} alt="" /><span>پروژه‌های شاخص</span><strong>۳</strong><small>نمایش‌داده‌شده در لندینگ</small></article>
          <article className="admin-users-kpi"><img src={`${ASSET_ROOT}/users-review.svg`} alt="" /><span>استان‌های شاخص</span><strong>۳</strong><small>سیستان و بلوچستان، اصفهان، گلستان</small></article>
          <article className="admin-users-kpi"><img src={`${ASSET_ROOT}/users-blocked.svg`} alt="" /><span>میانگین تأمین</span><strong>۶۱٪</strong><small>پروژه‌های شاخص لندینگ</small></article>
        </section>

        <section className="admin-users-toolbar">
          <div className="admin-users-control admin-list-static-control">جستجو در نام پروژه یا حوزه</div>
          <div className="admin-users-control admin-list-static-control">همه استان‌ها</div>
          <div className="admin-users-control admin-list-static-control">همه وضعیت‌ها</div>
          <div className="admin-users-count">۲۴ پروژه</div>
        </section>

        <section className="admin-users-table-card admin-list-table-compact">
          <h2>فهرست پروژه‌ها</h2><p>پروژه‌ها را بر اساس استان، وضعیت و میزان تأمین مالی پایش کنید</p>
          <div className="admin-users-table">
            <div className="admin-users-row admin-users-table-head"><span>پروژه / حوزه</span><span>استان</span><span>وضعیت</span><span>تأمین مالی</span><span>مرحله</span><span>اقدام</span></div>
            {projects.map((project, index) => (
              <div className="admin-users-row" key={project.name}>
                <div className="admin-user-cell"><strong>{project.name}</strong><small>{project.meta}</small></div>
                <span>{project.province}</span>
                <span className="admin-status-pill admin-status-active">فعال</span>
                <span>{project.funding}</span>
                <span className="admin-access-pill admin-access-full">در حال تأمین</span>
                <Link className="admin-user-action" to={`/panel/admin/projects/${index + 1}`}>مشاهده</Link>
              </div>
            ))}
            <div className="admin-pagination"><span>نمایش ۱ تا ۳ از ۲۴</span><div className="admin-pagination-controls"><button className="admin-page-control admin-list-static-control" type="button" aria-disabled="true">بعدی</button><span className="admin-page-number">۱</span><button className="admin-page-control" type="button" disabled>قبلی</button></div></div>
          </div>
        </section>
        <aside className="admin-info-note">ادمین وضعیت پروژه‌ها را پایش می‌کند؛ ارزیابی و تصمیم‌گیری درباره پروژه‌ها در نقش خانه خلاق انجام می‌شود.</aside>
      </main>
      <AdminSidebar active="projects" />
    </div>
  );
}
