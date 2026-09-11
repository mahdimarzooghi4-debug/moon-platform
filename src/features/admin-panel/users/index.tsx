import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { AdminSidebar } from "../components/AdminSidebar";
import { listAdminRoles, listAdminUsers, type AdminRole, type AdminUser } from "../api";
import "../index.css";
import "../users-flow.css";

const ASSET_ROOT = "/assets/admin-panel";
const numberFa = new Intl.NumberFormat("fa-IR");

function primaryMembership(user: AdminUser) {
  return user.memberships.find((membership) => membership.isActive) ?? user.memberships[0];
}

export default function AdminUsersRoles() {
  const [users, setUsers] = useState<AdminUser[]>([]);
  const [roles, setRoles] = useState<AdminRole[]>([]);
  const [loading, setLoading] = useState(true);
  const [failed, setFailed] = useState(false);
  const [query, setQuery] = useState("");
  const [roleFilter, setRoleFilter] = useState("");
  const [statusFilter, setStatusFilter] = useState("");

  useEffect(() => {
    let active = true;
    Promise.all([listAdminUsers(), listAdminRoles()])
      .then(([nextUsers, nextRoles]) => {
        if (!active) return;
        setUsers(nextUsers);
        setRoles(nextRoles);
        setFailed(false);
      })
      .catch(() => {
        if (!active) return;
        setFailed(true);
      })
      .finally(() => {
        if (active) setLoading(false);
      });

    return () => {
      active = false;
    };
  }, []);

  const filteredUsers = useMemo(() => {
    const normalized = query.trim().toLocaleLowerCase("fa");
    return users.filter((user) => {
      const memberships = user.memberships.filter((membership) => membership.isActive);
      const matchesQuery =
        !normalized ||
        (user.displayName ?? "").toLocaleLowerCase("fa").includes(normalized) ||
        user.externalSubject.toLocaleLowerCase("fa").includes(normalized) ||
        memberships.some((membership) => membership.organizationName.toLocaleLowerCase("fa").includes(normalized));
      const matchesRole = !roleFilter || memberships.some((membership) => membership.roleCode === roleFilter);
      const matchesStatus = !statusFilter || (statusFilter === "active" ? user.isActive : !user.isActive);
      return matchesQuery && matchesRole && matchesStatus;
    });
  }, [query, roleFilter, statusFilter, users]);

  const activeCount = users.filter((user) => user.isActive).length;
  const blockedCount = users.filter((user) => !user.isActive).length;
  const withoutAccessCount = users.filter((user) => !user.memberships.some((membership) => membership.isActive)).length;

  const kpis = [
    { label: "کاربران فعال", value: numberFa.format(activeCount), detail: "حساب فعال در سامانه", icon: "users-active.svg" },
    { label: "نقش‌های سامانه", value: numberFa.format(roles.length), detail: "نقش‌های تعریف‌شده در هسته دسترسی", icon: "users-roles.svg" },
    { label: "بدون دسترسی سازمانی", value: numberFa.format(withoutAccessCount), detail: "کاربر همگام‌شده بدون عضویت فعال", icon: "users-review.svg" },
    { label: "کاربران مسدود", value: numberFa.format(blockedCount), detail: "دسترسی غیرفعال", icon: "users-blocked.svg" },
  ] as const;

  return (
    <div className="admin-panel-shell" data-node-id="2240:2">
      <main className="admin-users-main" dir="rtl">
        <header className="admin-users-header">
          <div className="admin-users-heading">
            <h1>کاربران و نقش‌ها</h1>
            <p>مدیریت حساب‌های همگام‌شده و دسترسی نقش‌های سامانه ماه</p>
          </div>
          <div className="admin-users-actions">
            <Link className="admin-users-button" to="/panel/admin/roles">مدیریت نقش‌ها</Link>
            <Link className="admin-users-button admin-users-button-primary" to="/panel/admin/users/new">افزودن دسترسی</Link>
          </div>
        </header>

        <section className="admin-users-kpis" aria-label="شاخص‌های کاربران">
          {kpis.map((kpi) => (
            <article className="admin-users-kpi" key={kpi.label}>
              <img src={`${ASSET_ROOT}/${kpi.icon}`} alt="" />
              <span>{kpi.label}</span>
              <strong>{loading ? "…" : kpi.value}</strong>
              <small>{kpi.detail}</small>
            </article>
          ))}
        </section>

        <section className="admin-users-toolbar" aria-label="فیلتر کاربران">
          <input
            className="admin-users-control"
            aria-label="جستجو"
            placeholder="جستجو در نام، سازمان یا شناسه هویتی"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
          />
          <select className="admin-users-control" aria-label="نقش" value={roleFilter} onChange={(event) => setRoleFilter(event.target.value)}>
            <option value="">همه نقش‌ها</option>
            {roles.map((role) => <option value={role.code} key={role.roleId}>{role.name}</option>)}
          </select>
          <select className="admin-users-control" aria-label="وضعیت" value={statusFilter} onChange={(event) => setStatusFilter(event.target.value)}>
            <option value="">همه وضعیت‌ها</option>
            <option value="active">فعال</option>
            <option value="inactive">غیرفعال</option>
          </select>
          <span className="admin-users-count">{numberFa.format(filteredUsers.length)} کاربر</span>
        </section>

        <section className="admin-users-table-card">
          <h2>فهرست کاربران سامانه</h2>
          <p>دسترسی سازمانی و نقش هر کاربر از Backend و PostgreSQL خوانده می‌شود.</p>
          {failed ? <p className="admin-form-actions-note">دریافت کاربران از سرور ناموفق بود.</p> : null}
          <div className="admin-users-table" role="table" aria-label="فهرست کاربران سامانه">
            <div className="admin-users-row admin-users-table-head" role="row">
              <span>کاربر / سازمان</span><span>نقش</span><span>وضعیت</span><span>شناسه هویتی</span><span>دسترسی</span><span>اقدام</span>
            </div>
            {!loading && filteredUsers.map((user) => {
              const membership = primaryMembership(user);
              const hasAccess = Boolean(membership?.isActive);
              return (
                <div className="admin-users-row" role="row" key={user.userId}>
                  <span className="admin-user-cell"><strong>{user.displayName || "کاربر بدون نام"}</strong><small>{membership?.organizationName ?? "بدون سازمان"}</small></span>
                  <span>{membership?.roleName ?? "بدون نقش"}</span>
                  <span className={`admin-status-pill ${user.isActive ? "admin-status-active" : "admin-status-review"}`}>{user.isActive ? "فعال" : "غیرفعال"}</span>
                  <span title={user.externalSubject}>{user.externalSubject.slice(0, 12)}…</span>
                  <span className={`admin-access-pill ${hasAccess ? "admin-access-full" : "admin-access-limited"}`}>{hasAccess ? "فعال" : "بدون عضویت"}</span>
                  <Link className="admin-user-action" to={`/panel/admin/users/${user.userId}`}>مشاهده</Link>
                </div>
              );
            })}
          </div>
          <div className="admin-pagination">
            <span>{loading ? "در حال دریافت…" : `نمایش ${numberFa.format(filteredUsers.length)} کاربر`}</span>
            <div className="admin-pagination-controls"><span className="admin-page-number">۱</span></div>
          </div>
        </section>

        <aside className="admin-info-note">تغییر نقش یا سطح دسترسی از طریق Membership انجام می‌شود و هر تغییر در Audit ثبت می‌شود. ایجاد هویت جدید در Keycloak بخشی جدا از این صفحه است.</aside>
      </main>
      <AdminSidebar active="users" />
    </div>
  );
}
