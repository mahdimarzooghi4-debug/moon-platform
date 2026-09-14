import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { AdminSidebar } from "../components/AdminSidebar";
import { listAdminRoles, listAdminUsers, type AdminRole, type AdminUser } from "../api";
import {
  ADMIN_PROVISIONING_CHANGED,
  ADMIN_PROVISIONING_STORE_KEY,
  readAdminProvisioningRecords,
  type AdminProvisioningRecord,
} from "../provisioning-store";
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
  const [provisioned, setProvisioned] = useState<AdminProvisioningRecord[]>([]);
  const [loading, setLoading] = useState(true);
  const [failed, setFailed] = useState(false);
  const [query, setQuery] = useState("");
  const [roleFilter, setRoleFilter] = useState("");
  const [statusFilter, setStatusFilter] = useState("");

  useEffect(() => {
    let active = true;
    const refreshProvisioned = () => {
      if (active) setProvisioned(readAdminProvisioningRecords());
    };
    const handleStorage = (event: StorageEvent) => {
      if (event.key === ADMIN_PROVISIONING_STORE_KEY) refreshProvisioned();
    };

    refreshProvisioned();
    window.addEventListener(ADMIN_PROVISIONING_CHANGED, refreshProvisioned);
    window.addEventListener("storage", handleStorage);

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
      window.removeEventListener(ADMIN_PROVISIONING_CHANGED, refreshProvisioned);
      window.removeEventListener("storage", handleStorage);
    };
  }, []);

  const normalizedQuery = query.trim().toLocaleLowerCase("fa");

  const filteredUsers = useMemo(() => {
    return users.filter((user) => {
      const memberships = user.memberships.filter((membership) => membership.isActive);
      const matchesQuery =
        !normalizedQuery ||
        (user.displayName ?? "").toLocaleLowerCase("fa").includes(normalizedQuery) ||
        user.externalSubject.toLocaleLowerCase("fa").includes(normalizedQuery) ||
        memberships.some((membership) => membership.organizationName.toLocaleLowerCase("fa").includes(normalizedQuery));
      const matchesRole = !roleFilter || memberships.some((membership) => membership.roleCode === roleFilter);
      const matchesStatus = !statusFilter || (statusFilter === "active" ? user.isActive : statusFilter === "inactive" ? !user.isActive : false);
      return matchesQuery && matchesRole && matchesStatus;
    });
  }, [normalizedQuery, roleFilter, statusFilter, users]);

  const filteredProvisioned = useMemo(() => {
    return provisioned.filter((record) => {
      const matchesQuery =
        !normalizedQuery ||
        record.displayName.toLocaleLowerCase("fa").includes(normalizedQuery) ||
        record.mobile.includes(normalizedQuery) ||
        record.organizationName.toLocaleLowerCase("fa").includes(normalizedQuery);
      const matchesRole = !roleFilter || record.roleCode === roleFilter;
      const matchesStatus = !statusFilter || statusFilter === "invited";
      return matchesQuery && matchesRole && matchesStatus;
    });
  }, [normalizedQuery, provisioned, roleFilter, statusFilter]);

  const activeCount = users.filter((user) => user.isActive).length;
  const blockedCount = users.filter((user) => !user.isActive).length;
  const totalFiltered = filteredUsers.length + filteredProvisioned.length;

  const kpis = [
    { label: "کاربران فعال", value: numberFa.format(activeCount), detail: "حساب همگام‌شده و فعال", icon: "users-active.svg" },
    { label: "نقش‌های سامانه", value: numberFa.format(roles.length), detail: "نقش‌های قابل تخصیص", icon: "users-roles.svg" },
    { label: "دعوت‌شده", value: numberFa.format(provisioned.length), detail: "تعریف‌شده توسط مدیر؛ در انتظار اولین ورود", icon: "users-review.svg" },
    { label: "کاربران مسدود", value: numberFa.format(blockedCount), detail: "دسترسی غیرفعال", icon: "users-blocked.svg" },
  ] as const;

  return (
    <div className="admin-panel-shell" data-node-id="2240:2">
      <main className="admin-users-main" dir="rtl">
        <header className="admin-users-header">
          <div className="admin-users-heading">
            <h1>کاربران و نقش‌ها</h1>
            <p>تعریف اشخاص، تخصیص نقش و مدیریت حساب‌های همگام‌شده سامانه ماه</p>
          </div>
          <div className="admin-users-actions">
            <Link className="admin-users-button" to="/panel/admin/roles">مدیریت نقش‌ها</Link>
            <Link className="admin-users-button admin-users-button-primary" to="/panel/admin/users/new">تعریف کاربر و نقش</Link>
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
          <input className="admin-users-control" aria-label="جستجو" placeholder="جستجو در نام، موبایل، سازمان یا شناسه" value={query} onChange={(event) => setQuery(event.target.value)} />
          <select className="admin-users-control" aria-label="نقش" value={roleFilter} onChange={(event) => setRoleFilter(event.target.value)}>
            <option value="">همه نقش‌ها</option>
            {roles.map((role) => <option value={role.code} key={role.roleId}>{role.name}</option>)}
          </select>
          <select className="admin-users-control" aria-label="وضعیت" value={statusFilter} onChange={(event) => setStatusFilter(event.target.value)}>
            <option value="">همه وضعیت‌ها</option>
            <option value="active">فعال</option>
            <option value="invited">دعوت‌شده</option>
            <option value="inactive">غیرفعال</option>
          </select>
          <span className="admin-users-count">{numberFa.format(totalFiltered)} کاربر</span>
        </section>

        <section className="admin-users-table-card">
          <h2>فهرست کاربران سامانه</h2>
          <p>افراد تعریف‌شده توسط مدیر بلافاصله در فهرست دیده می‌شوند و پس از اولین ورود، حساب Backend آن‌ها همگام می‌شود.</p>
          <span className="admin-users-table-count">{loading ? "…" : `${numberFa.format(totalFiltered)} کاربر`}</span>
          {failed ? <p className="admin-form-actions-note">دریافت کاربران همگام‌شده از سرور ناموفق بود؛ دعوت‌های ثبت‌شده محلی همچنان نمایش داده می‌شوند.</p> : null}
          <div className="admin-users-table" role="table" aria-label="فهرست کاربران سامانه">
            <div className="admin-users-row admin-users-table-head" role="row">
              <span>کاربر / سازمان</span><span>نقش</span><span>وضعیت</span><span>شناسه / موبایل</span><span>دسترسی</span><span>اقدام</span>
            </div>
            {!loading && filteredProvisioned.map((record) => (
              <div className="admin-users-row" role="row" key={record.id}>
                <span className="admin-user-cell"><strong>{record.displayName}</strong><small>{record.organizationName || "بدون سازمان"}</small></span>
                <span title={record.roleName}>{record.roleName}</span>
                <span className="admin-status-pill admin-status-review">دعوت‌شده</span>
                <span dir="ltr">{record.mobile}</span>
                <span className="admin-access-pill admin-access-limited">در انتظار ورود</span>
                <span className="admin-user-action">{record.notificationStatus === "queued" ? "اعلان در صف" : "پیامک متصل نیست"}</span>
              </div>
            ))}
            {!loading && filteredUsers.map((user) => {
              const membership = primaryMembership(user);
              const hasAccess = Boolean(membership?.isActive);
              return (
                <div className="admin-users-row" role="row" key={user.userId}>
                  <span className="admin-user-cell"><strong>{user.displayName || "کاربر بدون نام"}</strong><small>{membership?.organizationName ?? "بدون سازمان"}</small></span>
                  <span title={membership?.roleName ?? "بدون نقش"}>{membership?.roleName ?? "بدون نقش"}</span>
                  <span className={`admin-status-pill ${user.isActive ? "admin-status-active" : "admin-status-review"}`}>{user.isActive ? "فعال" : "غیرفعال"}</span>
                  <span title={user.externalSubject}>{user.externalSubject.slice(0, 12)}…</span>
                  <span className={`admin-access-pill ${hasAccess ? "admin-access-full" : "admin-access-limited"}`}>{hasAccess ? "فعال" : "بدون عضویت"}</span>
                  <Link className="admin-user-action" to={`/panel/admin/users/${user.userId}`}>مشاهده</Link>
                </div>
              );
            })}
          </div>
          <div className="admin-pagination">
            <span>{loading ? "در حال دریافت…" : `نمایش ${numberFa.format(totalFiltered)} کاربر`}</span>
            <div className="admin-pagination-controls" aria-label="صفحه‌بندی کاربران">
              <button className="admin-page-control" type="button" aria-label="صفحه قبل" disabled>‹</button>
              <span className="admin-page-number">۱</span>
              <button className="admin-page-control" type="button" aria-label="صفحه بعد" disabled>›</button>
            </div>
          </div>
        </section>

        <aside className="admin-info-note">شرکت‌ها مرحله تأیید مدیر سامانه ندارند. مدیر فقط شخص و نقش را تعریف می‌کند و او را به شرکت موجود متصل می‌کند. دعوت پیامکی واقعی بعد از اتصال provider پیامک فعال خواهد شد.</aside>
      </main>
      <AdminSidebar active="users" />
    </div>
  );
}
