import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { AdminSidebar } from "../components/AdminSidebar";
import { listAdminOrganizations, type AdminOrganization } from "../api";
import "../index.css";
import "../users-flow.css";
import "../list-flow.css";

const ASSET_ROOT = "/assets/admin-panel";
const numberFa = new Intl.NumberFormat("fa-IR");

const typeLabel: Record<string, string> = {
  company: "شرکت",
  startup: "استارتاپ",
  creative_house: "خانه خلاق",
  fund_manager: "مدیریت صندوق",
  supervisor: "نهاد ناظر",
  platform: "سامانه ماه",
};

export default function AdminOrganizations() {
  const [organizations, setOrganizations] = useState<AdminOrganization[]>([]);
  const [loading, setLoading] = useState(true);
  const [failed, setFailed] = useState(false);
  const [query, setQuery] = useState("");
  const [typeFilter, setTypeFilter] = useState("");
  const [statusFilter, setStatusFilter] = useState("");

  useEffect(() => {
    let active = true;
    listAdminOrganizations()
      .then((items) => {
        if (!active) return;
        setOrganizations(items);
        setFailed(false);
      })
      .catch(() => {
        if (active) setFailed(true);
      })
      .finally(() => {
        if (active) setLoading(false);
      });
    return () => {
      active = false;
    };
  }, []);

  const filtered = useMemo(() => {
    const normalized = query.trim().toLocaleLowerCase("fa");
    return organizations.filter((item) => {
      const matchesQuery = !normalized || item.name.toLocaleLowerCase("fa").includes(normalized) || item.organizationId.includes(normalized);
      const matchesType = !typeFilter || item.type === typeFilter;
      const matchesStatus = !statusFilter || item.status === statusFilter;
      return matchesQuery && matchesType && matchesStatus;
    });
  }, [organizations, query, statusFilter, typeFilter]);

  const activeCompanies = organizations.filter((item) => item.type === "company" && item.status === "active").length;
  const activeStartups = organizations.filter((item) => item.type === "startup" && item.status === "active").length;
  const activeInternal = organizations.filter((item) => !["company", "startup"].includes(item.type) && item.status === "active").length;
  const inactive = organizations.filter((item) => item.status !== "active").length;

  return (
    <div className="admin-panel-shell" data-node-id="2243:2">
      <main className="admin-users-main" dir="rtl">
        <header className="admin-users-header">
          <div className="admin-users-heading">
            <h1>شرکت‌ها و استارتاپ‌ها</h1>
            <p>مدیریت سازمان‌ها و وضعیت فعالیت آن‌ها در سامانه ماه</p>
          </div>
        </header>

        <section className="admin-users-kpis" aria-label="شاخص‌های حساب‌ها">
          <article className="admin-users-kpi"><img src={`${ASSET_ROOT}/users-active.svg`} alt="" /><span>شرکت‌های فعال</span><strong>{loading ? "…" : numberFa.format(activeCompanies)}</strong><small>سازمان نوع شرکت</small></article>
          <article className="admin-users-kpi"><img src={`${ASSET_ROOT}/users-roles.svg`} alt="" /><span>استارتاپ‌های فعال</span><strong>{loading ? "…" : numberFa.format(activeStartups)}</strong><small>سازمان نوع استارتاپ</small></article>
          <article className="admin-users-kpi"><img src={`${ASSET_ROOT}/users-review.svg`} alt="" /><span>سازمان‌های داخلی فعال</span><strong>{loading ? "…" : numberFa.format(activeInternal)}</strong><small>خانه خلاق، صندوق و نهاد ناظر</small></article>
          <article className="admin-users-kpi"><img src={`${ASSET_ROOT}/users-blocked.svg`} alt="" /><span>حساب‌های غیرفعال</span><strong>{loading ? "…" : numberFa.format(inactive)}</strong><small>سازمان غیرفعال</small></article>
        </section>

        <section className="admin-users-toolbar" aria-label="ابزارهای فهرست">
          <input className="admin-users-control" placeholder="جستجو در نام یا شناسه سازمان" value={query} onChange={(event) => setQuery(event.target.value)} />
          <select className="admin-users-control" value={typeFilter} onChange={(event) => setTypeFilter(event.target.value)} aria-label="نوع سازمان">
            <option value="">همه نوع‌ها</option>
            <option value="company">شرکت</option>
            <option value="startup">استارتاپ</option>
            <option value="creative_house">خانه خلاق</option>
            <option value="fund_manager">مدیریت صندوق</option>
            <option value="supervisor">نهاد ناظر</option>
            <option value="platform">سامانه ماه</option>
          </select>
          <select className="admin-users-control" value={statusFilter} onChange={(event) => setStatusFilter(event.target.value)} aria-label="وضعیت سازمان">
            <option value="">همه وضعیت‌ها</option>
            <option value="active">فعال</option>
            <option value="inactive">غیرفعال</option>
          </select>
          <div className="admin-users-count">{numberFa.format(filtered.length)} حساب</div>
        </section>

        <section className="admin-users-table-card">
          <h2>فهرست سازمان‌ها</h2>
          <p>وضعیت سازمان و تعداد اعضای فعال مستقیماً از Backend خوانده می‌شود.</p>
          {failed ? <p className="admin-form-actions-note">دریافت سازمان‌ها از سرور ناموفق بود.</p> : null}
          <div className="admin-users-table">
            <div className="admin-users-row admin-users-table-head"><span>سازمان / استارتاپ</span><span>نوع حساب</span><span>وضعیت</span><span>اعضای فعال</span><span>شناسه</span><span>اقدام</span></div>
            {!loading && filtered.map((item) => (
              <div className="admin-users-row" key={item.organizationId}>
                <div className="admin-user-cell"><strong>{item.name}</strong><small>{item.organizationId}</small></div>
                <span>{typeLabel[item.type] ?? item.type}</span>
                <span className={`admin-status-pill ${item.status === "active" ? "admin-status-active" : "admin-status-review"}`}>{item.status === "active" ? "فعال" : "غیرفعال"}</span>
                <span>{numberFa.format(item.activeMemberCount)}</span>
                <span className="admin-access-pill admin-access-full">{item.organizationId.slice(0, 8)}…</span>
                <Link className="admin-user-action" to={`/panel/admin/organizations/${item.organizationId}`}>مشاهده</Link>
              </div>
            ))}
            <div className="admin-pagination">
              <span>{loading ? "در حال دریافت…" : `نمایش ${numberFa.format(filtered.length)} سازمان`}</span>
              <div className="admin-pagination-controls"><span className="admin-page-number">۱</span></div>
            </div>
          </div>
        </section>

        <aside className="admin-info-note">فعال یا غیرفعال‌کردن سازمان یک عملیات مدیریتی Audit‌شده است؛ غیرفعال‌شدن سازمان باعث می‌شود Membership آن در دسترسی جاری معتبر نباشد.</aside>
      </main>
      <AdminSidebar active="organizations" />
    </div>
  );
}
