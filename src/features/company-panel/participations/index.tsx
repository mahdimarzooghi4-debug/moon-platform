import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { CompanySidebar } from "../components/CompanySidebar";
import "../index.css";
import "./index.css";

type Participation = {
  id: string;
  project: string;
  amount: string;
  payment: string;
  projectStatus: string;
  certificate: string;
};

const PAGE_SIZE = 5;

const participations: Participation[] = [
  { id: "MAH-C-1405-0061", project: "سلامت خانواده", amount: "۵۰٬۰۰۰٬۰۰۰ تومان", payment: "پرداخت موفق", projectStatus: "در حال اجرا", certificate: "در انتظار بررسی" },
];

export default function CompanyOrganizationalParticipations() {
  const [query, setQuery] = useState("");
  const [paymentFilter, setPaymentFilter] = useState("همه");
  const [projectFilter, setProjectFilter] = useState("همه");
  const [currentPage, setCurrentPage] = useState(1);

  const rows = useMemo(() => participations.filter((item) => {
    const q = query.trim();
    const matchesQuery = !q || item.project.includes(q) || item.id.toLowerCase().includes(q.toLowerCase());
    const matchesPayment = paymentFilter === "همه" || item.payment === paymentFilter;
    const matchesProject = projectFilter === "همه" || item.projectStatus === projectFilter;
    return matchesQuery && matchesPayment && matchesProject;
  }), [query, paymentFilter, projectFilter]);

  const totalPages = Math.max(1, Math.ceil(rows.length / PAGE_SIZE));
  const visibleRows = useMemo(() => {
    const start = (currentPage - 1) * PAGE_SIZE;
    return rows.slice(start, start + PAGE_SIZE);
  }, [rows, currentPage]);

  useEffect(() => {
    setCurrentPage(1);
  }, [query, paymentFilter, projectFilter]);

  useEffect(() => {
    if (currentPage > totalPages) setCurrentPage(totalPages);
  }, [currentPage, totalPages]);

  return (
    <div className="company-panel-shell" data-node-id="1897:2">
      <main className="company-participations-page" dir="rtl">
        <header className="company-topbar">
          <div className="company-page-title"><h1>مشارکت‌های سازمانی</h1><p>پیگیری پرداخت‌ها، پیشرفت پروژه‌ها و وضعیت گواهی ماده ۱۷۲</p></div>
          <div className="company-top-actions">
            <Link className="company-action company-action-primary" to="/panel/company/projects">پروژه‌های جدید</Link>
            <Link className="company-action company-action-secondary" to="/panel/company/certificates">گواهی ماده ۱۷۲</Link>
          </div>
        </header>

        <section className="company-participation-filters">
          <strong>جست‌وجو و فیلتر</strong>
          <div className="company-participation-filter-row">
            <input aria-label="جست‌وجوی مشارکت" value={query} onChange={(event) => setQuery(event.target.value)} placeholder="جست‌وجوی نام پروژه یا کد پیگیری..." />
            <select aria-label="وضعیت پرداخت" value={paymentFilter} onChange={(event) => setPaymentFilter(event.target.value)}><option>همه</option><option>پرداخت موفق</option></select>
            <select aria-label="وضعیت پروژه" value={projectFilter} onChange={(event) => setProjectFilter(event.target.value)}><option>همه</option><option>در حال اجرا</option></select>
            <button type="button" onClick={() => { setQuery(""); setPaymentFilter("همه"); setProjectFilter("همه"); }}>فیلترهای بیشتر</button>
          </div>
        </section>

        <section className="company-participations-list">
          <div className="company-participations-heading"><div><h2>فهرست مشارکت‌های سازمانی</h2><p>ساختار پیگیری مشارکت‌ها در پنل شرکت</p></div></div>
          <div className="company-participation-table-header"><span>پروژه</span><span>مبلغ مشارکت</span><span>وضعیت پرداخت</span><span>وضعیت پروژه</span><span>گواهی ماده ۱۷۲</span><span>اقدام</span></div>
          <div className="company-participation-table-body">
            {visibleRows.map((item) => (
              <article className="company-participation-table-row" key={item.id}>
                <div><strong>{item.project}</strong><small>پیگیری پرداخت، پیشرفت و گزارش اثر از همین مشارکت</small></div>
                <b>{item.amount}</b>
                <span className="company-status company-status-success">{item.payment}</span>
                <span className="company-status company-status-info">{item.projectStatus}</span>
                <span className="company-status company-status-info">{item.certificate}</span>
                <Link to={`/panel/company/participations/${item.id}`}>مشاهده جزئیات</Link>
              </article>
            ))}
            {!rows.length && <div className="company-participations-empty">مشارکتی با فیلترهای فعلی پیدا نشد.</div>}
          </div>
          <footer className="company-participations-footer">
            <span className="company-participations-count">{rows.length.toLocaleString("fa-IR")} مشارکت</span>
            <div className="company-participations-pagination">
              <button type="button" disabled={currentPage === 1} onClick={() => setCurrentPage((page) => Math.max(1, page - 1))}>قبلی</button>
              {Array.from({ length: totalPages }, (_, index) => index + 1).map((page) => (
                <button className={page === currentPage ? "is-active" : ""} type="button" key={page} onClick={() => setCurrentPage(page)}>{page.toLocaleString("fa-IR")}</button>
              ))}
              <button type="button" disabled={currentPage === totalPages} onClick={() => setCurrentPage((page) => Math.min(totalPages, page + 1))}>بعدی</button>
              <span>صفحه {currentPage.toLocaleString("fa-IR")} از {totalPages.toLocaleString("fa-IR")}</span>
            </div>
          </footer>
        </section>
      </main>
      <CompanySidebar active="participations" />
    </div>
  );
}
