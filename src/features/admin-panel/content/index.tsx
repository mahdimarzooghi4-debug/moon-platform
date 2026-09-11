import { AdminSidebar } from "../components/AdminSidebar";
import "../index.css";
import "../final-flow.css";

const summary = [
  ["اخبار منتشرشده", "۱۲"],
  ["بنرهای فعال", "۳"],
  ["سوالات متداول", "۸"],
  ["محتوای ثابت", "۴ بخش"],
] as const;

const news = [
  ["همکاری جدید برای توسعه سرمایه‌گذاری اجتماعی", "منتشرشده", "۱۴۰۵/۰۶/۲۸", "green"],
  ["گزارش تازه از پروژه سلامت خانواده", "پیش‌نویس", "—", "blue"],
  ["رویداد معرفی استارتاپ‌های منتخب ماه", "زمان‌بندی‌شده", "۱۴۰۵/۰۷/۰۵", "blue"],
] as const;

export default function AdminContentManagement() {
  return (
    <div className="admin-panel-shell" data-node-id="2357:2">
      <main className="admin-final-main" dir="rtl">
        <header className="admin-final-header">
          <div className="admin-final-heading">
            <h1>مدیریت محتوا</h1>
            <p>مدیریت محتوای دستی لندینگ؛ آمار و شاخص‌ها به‌صورت خودکار از داده‌های سامانه محاسبه می‌شوند.</p>
          </div>
        </header>

        <section className="admin-content-summary">
          {summary.map(([label, value]) => (
            <article className="admin-final-card" key={label}>
              <span>{label}</span>
              <strong>{value}</strong>
            </article>
          ))}
        </section>

        <section className="admin-content-tabs admin-final-card" aria-label="بخش‌های محتوا">
          <button className="admin-content-tab is-active" type="button" aria-current="page">اخبار و رویدادها</button>
          <button className="admin-content-tab" type="button" aria-disabled="true">بنرها</button>
          <button className="admin-content-tab" type="button" aria-disabled="true">سوالات متداول</button>
          <button className="admin-content-tab" type="button" aria-disabled="true">محتوای ثابت</button>
          <span className="admin-content-auto">آمار لندینگ: خودکار</span>
        </section>

        <section className="admin-content-row">
          <article className="admin-content-editor admin-final-card">
            <h2>ویرایش سریع خبر</h2>
            <p>بدون خروج از همین صفحه</p>
            <div className="admin-mini-field"><label>عنوان خبر</label><div className="admin-mini-value">همکاری جدید برای توسعه سرمایه‌گذاری اجتماعی</div></div>
            <div className="admin-mini-field"><label>وضعیت</label><div className="admin-mini-value">منتشرشده</div></div>
            <div className="admin-mini-field"><label>تاریخ انتشار</label><div className="admin-mini-value">۱۴۰۵/۰۶/۲۸</div></div>
            <div className="admin-mini-field"><label>خلاصه</label><div className="admin-mini-value is-tall">متن کوتاه معرفی خبر برای کارت لندینگ…</div></div>
            <div className="admin-content-editor-actions">
              <button className="primary" type="button" aria-disabled="true">ذخیره تغییرات</button>
              <button type="button" aria-disabled="true">لغو</button>
            </div>
          </article>

          <article className="admin-content-list admin-final-card">
            <div className="admin-content-list-head">
              <div><h2>اخبار و رویدادها</h2><p>انتشار، زمان‌بندی و ویرایش محتوای خبری لندینگ</p></div>
              <button className="admin-content-new" type="button" aria-disabled="true">خبر جدید</button>
            </div>
            <div className="admin-content-table" role="table" aria-label="اخبار و رویدادها">
              <div className="admin-content-table-row head" role="row"><span>عنوان خبر</span><span>وضعیت</span><span>تاریخ انتشار</span><span>اقدام</span></div>
              {news.map(([title, status, date, tone]) => (
                <div className="admin-content-table-row" role="row" key={title}>
                  <span className="admin-content-title">{title}</span>
                  <span className={`admin-content-status ${tone}`}>{status}</span>
                  <span>{date}</span>
                  <span className="admin-content-action">ویرایش سریع</span>
                </div>
              ))}
            </div>
            <div className="admin-content-footer">نمایش ۱ تا ۳ از ۱۲ خبر</div>
          </article>
        </section>

        <aside className="admin-content-note">
          <strong>مدیریت محتوا در یک صفحه</strong>
          <span>تب‌ها محتوای همین صفحه را تغییر می‌دهند و برای هر نوع محتوا صفحه CMS جدا ساخته نمی‌شود. آمار و شاخص‌های عددی لندینگ نیز از داده‌های واقعی سامانه محاسبه شده و قابل ویرایش دستی نیستند.</span>
        </aside>
      </main>
      <AdminSidebar active="content" />
    </div>
  );
}
