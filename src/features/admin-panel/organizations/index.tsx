import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { AdminSidebar } from "../components/AdminSidebar";
import { listAdminOrganizations, type AdminOrganization } from "../api";
import {
  ADMIN_PROVISIONING_CHANGED,
  ADMIN_PROVISIONING_STORE_KEY,
  readAdminProvisioningRecords,
  type AdminProvisioningRecord,
} from "../provisioning-store";
import {
  APPROVED_STARTUP_ACCESS_QUEUE_CHANGED,
  APPROVED_STARTUP_ACCESS_QUEUE_KEY,
  readApprovedStartupAccessQueue,
  type ApprovedStartupAccessQueueItem,
} from "../../../shared/approved-startup-access-queue";
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
  fund: "مدیریت صندوق",
  emdad: "کمیته امداد",
  supervisor: "نهاد ناظر",
  platform: "سامانه ماه",
};

function normalize(value: string) {
  return value.replace(/\s+/g, " ").trim().toLocaleLowerCase("fa");
}

function uniquePendingStartups(records: AdminProvisioningRecord[]) {
  const byName = new Map<string, AdminProvisioningRecord>();
  records
    .filter((record) => record.organizationType === "startup" && record.startupName)
    .forEach((record) => {
      const key = normalize(record.startupName);
      if (!byName.has(key)) byName.set(key, record);
    });
  return Array.from(byName.values());
}

export default function AdminOrganizations() {
  const [organizations, setOrganizations] = useState<AdminOrganization[]>([]);
  const [provisioned, setProvisioned] = useState<AdminProvisioningRecord[]>([]);
  const [approvedStartups, setApprovedStartups] = useState<ApprovedStartupAccessQueueItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [failed, setFailed] = useState(false);
  const [query, setQuery] = useState("");
  const [typeFilter, setTypeFilter] = useState("");
  const [statusFilter, setStatusFilter] = useState("");

  useEffect(() => {
    let active = true;
    const refreshProvisioned = () => {
      if (active) setProvisioned(readAdminProvisioningRecords());
    };
    const refreshApprovedStartups = () => {
      if (active) setApprovedStartups(readApprovedStartupAccessQueue());
    };
    const handleStorage = (event: StorageEvent) => {
      if (event.key === ADMIN_PROVISIONING_STORE_KEY) refreshProvisioned();
      if (event.key === APPROVED_STARTUP_ACCESS_QUEUE_KEY) refreshApprovedStartups();
    };

    refreshProvisioned();
    refreshApprovedStartups();
    window.addEventListener(ADMIN_PROVISIONING_CHANGED, refreshProvisioned);
    window.addEventListener(APPROVED_STARTUP_ACCESS_QUEUE_CHANGED, refreshApprovedStartups);
    window.addEventListener("storage", handleStorage);

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
      window.removeEventListener(ADMIN_PROVISIONING_CHANGED, refreshProvisioned);
      window.removeEventListener(APPROVED_STARTUP_ACCESS_QUEUE_CHANGED, refreshApprovedStartups);
      window.removeEventListener("storage", handleStorage);
    };
  }, []);

  const pendingStartups = useMemo(() => uniquePendingStartups(provisioned), [provisioned]);

  const awaitingAccessStartups = useMemo(() => {
    const knownStartupNames = new Set<string>();
    organizations
      .filter((organization) => organization.type === "startup")
      .forEach((organization) => knownStartupNames.add(normalize(organization.name)));
    pendingStartups.forEach((record) => knownStartupNames.add(normalize(record.startupName)));
    return approvedStartups.filter((item) => !knownStartupNames.has(normalize(item.startupName)));
  }, [approvedStartups, organizations, pendingStartups]);

  const filtered = useMemo(() => {
    const normalized = normalize(query);
    return organizations.filter((item) => {
      const matchesQuery = !normalized || normalize(item.name).includes(normalized) || item.organizationId.includes(normalized);
      const matchesType = !typeFilter || item.type === typeFilter;
      const matchesStatus = !statusFilter || item.status === statusFilter;
      return matchesQuery && matchesType && matchesStatus;
    });
  }, [organizations, query, statusFilter, typeFilter]);

  const filteredPendingStartups = useMemo(() => {
    const normalized = normalize(query);
    return pendingStartups.filter((record) => {
      const matchesQuery =
        !normalized ||
        normalize(record.startupName).includes(normalized) ||
        normalize(record.displayName).includes(normalized) ||
        record.mobile.includes(normalized);
      const matchesType = !typeFilter || typeFilter === "startup";
      const matchesStatus = !statusFilter || statusFilter === "pending";
      return matchesQuery && matchesType && matchesStatus;
    });
  }, [pendingStartups, query, statusFilter, typeFilter]);

  const filteredAwaitingAccess = useMemo(() => {
    const normalized = normalize(query);
    return awaitingAccessStartups.filter((item) => {
      const matchesQuery =
        !normalized ||
        normalize(item.startupName).includes(normalized) ||
        normalize(item.managerName).includes(normalized) ||
        normalize(item.activityArea).includes(normalized);
      const matchesType = !typeFilter || typeFilter === "startup";
      const matchesStatus = !statusFilter || statusFilter === "awaiting_access";
      return matchesQuery && matchesType && matchesStatus;
    });
  }, [awaitingAccessStartups, query, statusFilter, typeFilter]);

  const activeCompanies = organizations.filter((item) => item.type === "company" && item.status === "active").length;
  const activeStartups = organizations.filter((item) => item.type === "startup" && item.status === "active").length;
  const totalFiltered = filtered.length + filteredPendingStartups.length + filteredAwaitingAccess.length;

  return (
    <div className="admin-panel-shell" data-node-id="2243:2">
      <main className="admin-users-main" dir="rtl">
        <header className="admin-users-header">
          <div className="admin-users-heading">
            <h1>شرکت‌ها و استارتاپ‌ها</h1>
            <p>شرکت‌ها مستقیم فعال می‌شوند؛ استارتاپ تأییدشده خانه خلاق ابتدا منتظر ایجاد دسترسی مدیر می‌ماند.</p>
          </div>
        </header>

        <section className="admin-users-kpis" aria-label="شاخص‌های حساب‌ها">
          <article className="admin-users-kpi"><img src={`${ASSET_ROOT}/users-active.svg`} alt="" /><span>شرکت‌های فعال</span><strong>{loading ? "…" : numberFa.format(activeCompanies)}</strong><small>بدون مرحله تأیید مدیر</small></article>
          <article className="admin-users-kpi"><img src={`${ASSET_ROOT}/users-roles.svg`} alt="" /><span>استارتاپ‌های فعال</span><strong>{loading ? "…" : numberFa.format(activeStartups)}</strong><small>همگام‌شده و فعال</small></article>
          <article className="admin-users-kpi"><img src={`${ASSET_ROOT}/users-review.svg`} alt="" /><span>منتظر ایجاد دسترسی</span><strong>{numberFa.format(awaitingAccessStartups.length)}</strong><small>تأییدشده توسط خانه خلاق</small></article>
          <article className="admin-users-kpi"><img src={`${ASSET_ROOT}/users-blocked.svg`} alt="" /><span>منتظر فعال‌سازی</span><strong>{numberFa.format(pendingStartups.length)}</strong><small>شخص و نقش توسط مدیر ثبت شده</small></article>
        </section>

        <section className="admin-users-toolbar" aria-label="ابزارهای فهرست">
          <input className="admin-users-control" placeholder="جستجو در نام، مدیر، موبایل یا شناسه" value={query} onChange={(event) => setQuery(event.target.value)} />
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
            <option value="awaiting_access">منتظر ایجاد دسترسی</option>
            <option value="pending">در انتظار فعال‌سازی</option>
            <option value="inactive">غیرفعال</option>
          </select>
          <div className="admin-users-count">{numberFa.format(totalFiltered)} حساب</div>
        </section>

        <section className="admin-users-table-card">
          <h2>فهرست سازمان‌ها</h2>
          <p>استارتاپ تأییدشده خانه خلاق در همین فهرست وارد صف ایجاد دسترسی می‌شود و پس از تعریف شخص و نقش به مرحله فعال‌سازی می‌رود.</p>
          {failed ? <p className="admin-form-actions-note">دریافت سازمان‌های Backend ناموفق بود؛ صف استارتاپ‌ها و دعوت‌های محلی همچنان نمایش داده می‌شوند.</p> : null}
          <div className="admin-users-table">
            <div className="admin-users-row admin-users-table-head"><span>سازمان / استارتاپ</span><span>نوع حساب</span><span>وضعیت</span><span>اعضای فعال</span><span>شناسه / مدیر</span><span>اقدام</span></div>
            {filteredAwaitingAccess.map((item) => (
              <div className="admin-users-row" key={`approved-${item.id}`}>
                <div className="admin-user-cell"><strong>{item.startupName}</strong><small>{item.activityArea || "حوزه فعالیت ثبت نشده"}</small></div>
                <span>استارتاپ</span>
                <span className="admin-status-pill admin-status-review">تأیید خانه خلاق؛ منتظر دسترسی</span>
                <span>۰</span>
                <span className="admin-access-pill admin-access-limited" title={item.managerName || "مدیر تعیین نشده"}>{item.managerName || "مدیر تعیین نشده"}</span>
                <Link className="admin-user-action" to={`/panel/admin/users/new?approvedStartupId=${encodeURIComponent(item.id)}`}>ایجاد دسترسی</Link>
              </div>
            ))}
            {filteredPendingStartups.map((record) => (
              <div className="admin-users-row" key={record.id}>
                <div className="admin-user-cell"><strong>{record.startupName}</strong><small>{record.activityArea || "حوزه فعالیت ثبت نشده"}</small></div>
                <span>استارتاپ</span>
                <span className="admin-status-pill admin-status-review">در انتظار فعال‌سازی</span>
                <span>۰</span>
                <span className="admin-access-pill admin-access-limited" title={record.displayName}>{record.displayName}</span>
                <Link className="admin-user-action" to="/panel/admin/users">مشاهده دعوت</Link>
              </div>
            ))}
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
              <span>{loading ? "در حال دریافت…" : `نمایش ${numberFa.format(totalFiltered)} سازمان`}</span>
              <div className="admin-pagination-controls"><span className="admin-page-number">۱</span></div>
            </div>
          </div>
        </section>

        <aside className="admin-info-note">شرکت نیاز به تأیید مدیر سامانه ندارد. استارتاپ پس از تأیید خانه خلاق اینجا وارد صف «ایجاد دسترسی» می‌شود؛ مدیر شخص و نقش را می‌سازد و بعد رکورد به «در انتظار فعال‌سازی» منتقل می‌شود.</aside>
      </main>
      <AdminSidebar active="organizations" />
    </div>
  );
}
