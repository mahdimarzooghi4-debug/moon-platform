import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { AdminSidebar } from "../components/AdminSidebar";
import { listAdminOrganizations, type AdminOrganization } from "../api";
import { downloadCsv } from "../export-csv";
import { listAdminOrganizationProfiles, type AdminOrganizationProfile } from "../management-api";
import {
  ADMIN_ORGANIZATION_OVERRIDES_CHANGED,
  ADMIN_ORGANIZATION_OVERRIDES_KEY,
  readOrganizationOverrides,
  type AdminOrganizationOverride,
} from "../organization-overrides";
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
const typeLabel: Record<string, string> = { company: "شرکت", startup: "استارتاپ" };

function normalize(value: string) { return value.replace(/\s+/g, " ").trim().toLocaleLowerCase("fa"); }

function uniquePendingStartups(records: AdminProvisioningRecord[]) {
  const byName = new Map<string, AdminProvisioningRecord>();
  records.filter((record) => record.organizationType === "startup" && record.startupName).forEach((record) => {
    const key = normalize(record.startupName);
    if (!byName.has(key)) byName.set(key, record);
  });
  return Array.from(byName.values());
}

function organizationStatusMatches(item: AdminOrganization, statusFilter: string) {
  if (!statusFilter) return true;
  if (item.type === "company") return statusFilter === "active";
  return item.status === statusFilter;
}

export default function AdminOrganizations() {
  const [organizations, setOrganizations] = useState<AdminOrganization[]>([]);
  const [serverProfiles, setServerProfiles] = useState<AdminOrganizationProfile[]>([]);
  const [overrides, setOverrides] = useState<AdminOrganizationOverride[]>(() => readOrganizationOverrides());
  const [provisioned, setProvisioned] = useState<AdminProvisioningRecord[]>([]);
  const [approvedStartups, setApprovedStartups] = useState<ApprovedStartupAccessQueueItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [failed, setFailed] = useState(false);
  const [query, setQuery] = useState("");
  const [typeFilter, setTypeFilter] = useState("");
  const [statusFilter, setStatusFilter] = useState("");

  useEffect(() => {
    let active = true;
    const refreshProvisioned = () => { if (active) setProvisioned(readAdminProvisioningRecords()); };
    const refreshApprovedStartups = () => { if (active) setApprovedStartups(readApprovedStartupAccessQueue()); };
    const refreshOverrides = () => { if (active) setOverrides(readOrganizationOverrides()); };
    const handleStorage = (event: StorageEvent) => {
      if (event.key === ADMIN_PROVISIONING_STORE_KEY) refreshProvisioned();
      if (event.key === APPROVED_STARTUP_ACCESS_QUEUE_KEY) refreshApprovedStartups();
      if (event.key === ADMIN_ORGANIZATION_OVERRIDES_KEY) refreshOverrides();
    };

    refreshProvisioned();
    refreshApprovedStartups();
    refreshOverrides();
    window.addEventListener(ADMIN_PROVISIONING_CHANGED, refreshProvisioned);
    window.addEventListener(APPROVED_STARTUP_ACCESS_QUEUE_CHANGED, refreshApprovedStartups);
    window.addEventListener(ADMIN_ORGANIZATION_OVERRIDES_CHANGED, refreshOverrides);
    window.addEventListener("storage", handleStorage);

    Promise.allSettled([listAdminOrganizations(), listAdminOrganizationProfiles()])
      .then(([organizationsResult, profilesResult]) => {
        if (!active) return;
        if (organizationsResult.status === "fulfilled") {
          setOrganizations(organizationsResult.value);
          setFailed(false);
        } else {
          setFailed(true);
        }
        if (profilesResult.status === "fulfilled") setServerProfiles(profilesResult.value);
      })
      .finally(() => { if (active) setLoading(false); });

    return () => {
      active = false;
      window.removeEventListener(ADMIN_PROVISIONING_CHANGED, refreshProvisioned);
      window.removeEventListener(APPROVED_STARTUP_ACCESS_QUEUE_CHANGED, refreshApprovedStartups);
      window.removeEventListener(ADMIN_ORGANIZATION_OVERRIDES_CHANGED, refreshOverrides);
      window.removeEventListener("storage", handleStorage);
    };
  }, []);

  const profileMap = useMemo(() => {
    const map = new Map<string, { name?: string; manager?: string; mobile?: string; activityArea?: string }>();
    overrides.forEach((item) => map.set(item.organizationId, item));
    serverProfiles.forEach((item) => map.set(item.organizationId, item));
    return map;
  }, [overrides, serverProfiles]);

  const visibleOrganizations = useMemo(
    () => organizations
      .filter((item) => item.type === "company" || item.type === "startup")
      .map((item) => ({ ...item, name: profileMap.get(item.organizationId)?.name || item.name })),
    [organizations, profileMap],
  );
  const pendingStartups = useMemo(() => uniquePendingStartups(provisioned), [provisioned]);

  const awaitingAccessStartups = useMemo(() => {
    const knownStartupNames = new Set<string>();
    visibleOrganizations.filter((organization) => organization.type === "startup").forEach((organization) => knownStartupNames.add(normalize(organization.name)));
    pendingStartups.forEach((record) => knownStartupNames.add(normalize(record.startupName)));
    return approvedStartups.filter((item) => !knownStartupNames.has(normalize(item.startupName)));
  }, [approvedStartups, pendingStartups, visibleOrganizations]);

  const filtered = useMemo(() => {
    const normalized = normalize(query);
    return visibleOrganizations.filter((item) => {
      const profile = profileMap.get(item.organizationId);
      const matchesQuery = !normalized || normalize(item.name).includes(normalized) || item.organizationId.includes(normalized) || normalize(profile?.manager ?? "").includes(normalized) || normalize(profile?.activityArea ?? "").includes(normalized);
      return matchesQuery && (!typeFilter || item.type === typeFilter) && organizationStatusMatches(item, statusFilter);
    });
  }, [profileMap, query, statusFilter, typeFilter, visibleOrganizations]);

  const filteredPendingStartups = useMemo(() => {
    const normalized = normalize(query);
    return pendingStartups.filter((record) => (!normalized || normalize(record.startupName).includes(normalized) || normalize(record.displayName).includes(normalized) || record.mobile.includes(normalized)) && (!typeFilter || typeFilter === "startup") && (!statusFilter || statusFilter === "pending"));
  }, [pendingStartups, query, statusFilter, typeFilter]);

  const filteredAwaitingAccess = useMemo(() => {
    const normalized = normalize(query);
    return awaitingAccessStartups.filter((item) => (!normalized || normalize(item.startupName).includes(normalized) || normalize(item.managerName).includes(normalized) || normalize(item.activityArea).includes(normalized)) && (!typeFilter || typeFilter === "startup") && (!statusFilter || statusFilter === "awaiting_access"));
  }, [awaitingAccessStartups, query, statusFilter, typeFilter]);

  const companyCount = visibleOrganizations.filter((item) => item.type === "company").length;
  const activeStartups = visibleOrganizations.filter((item) => item.type === "startup" && item.status === "active").length;
  const totalFiltered = filtered.length + filteredPendingStartups.length + filteredAwaitingAccess.length;

  const exportOrganizations = () => {
    const rows = [
      ...filtered.map((item) => ({ name: item.name, type: typeLabel[item.type] ?? item.type, status: item.type === "company" ? "فعال" : item.status === "active" ? "فعال" : "غیرفعال", manager: profileMap.get(item.organizationId)?.manager ?? "", id: item.organizationId })),
      ...filteredPendingStartups.map((item) => ({ name: item.startupName, type: "استارتاپ", status: "در انتظار فعال‌سازی", manager: item.displayName, id: item.id })),
      ...filteredAwaitingAccess.map((item) => ({ name: item.startupName, type: "استارتاپ", status: "منتظر ایجاد دسترسی", manager: item.managerName, id: item.id })),
    ];
    downloadCsv("admin-organizations", [
      { label: "نام", value: (item) => item.name },
      { label: "نوع", value: (item) => item.type },
      { label: "وضعیت", value: (item) => item.status },
      { label: "مسئول", value: (item) => item.manager },
      { label: "شناسه", value: (item) => item.id },
    ], rows);
  };

  return (
    <div className="admin-panel-shell" data-node-id="2243:2">
      <main className="admin-users-main" dir="rtl">
        <header className="admin-users-header">
          <div className="admin-users-heading"><h1>شرکت‌ها و استارتاپ‌ها</h1><p>شرکت‌ها برای مشاهده مدیریتی و استارتاپ‌ها برای مشاهده، ویرایش و مدیریت دسترسی در یک فهرست مشترک هستند.</p></div>
          <div className="admin-users-actions"><button className="admin-users-button" type="button" onClick={exportOrganizations}>خروجی فهرست</button></div>
        </header>

        <section className="admin-users-kpis" aria-label="شاخص‌های حساب‌ها" style={{ direction: "rtl" }}>
          <article className="admin-users-kpi"><img src={`${ASSET_ROOT}/users-active.svg`} alt="" /><span>شرکت‌ها</span><strong>{loading ? "…" : numberFa.format(companyCount)}</strong><small>بدون نیاز به فعال‌سازی</small></article>
          <article className="admin-users-kpi"><img src={`${ASSET_ROOT}/users-roles.svg`} alt="" /><span>استارتاپ‌های فعال</span><strong>{loading ? "…" : numberFa.format(activeStartups)}</strong><small>همگام‌شده و فعال</small></article>
          <article className="admin-users-kpi"><img src={`${ASSET_ROOT}/users-review.svg`} alt="" /><span>منتظر ایجاد دسترسی</span><strong>{numberFa.format(awaitingAccessStartups.length)}</strong><small>تأییدشده توسط خانه خلاق</small></article>
          <article className="admin-users-kpi"><img src={`${ASSET_ROOT}/users-blocked.svg`} alt="" /><span>منتظر فعال‌سازی</span><strong>{numberFa.format(pendingStartups.length)}</strong><small>فقط استارتاپ‌ها</small></article>
        </section>

        <section className="admin-users-toolbar" aria-label="ابزارهای فهرست">
          <input className="admin-users-control" placeholder="جستجو در نام، مدیر، موبایل یا شناسه" value={query} onChange={(event) => setQuery(event.target.value)} />
          <select className="admin-users-control" value={typeFilter} onChange={(event) => setTypeFilter(event.target.value)}><option value="">همه نوع‌ها</option><option value="company">شرکت</option><option value="startup">استارتاپ</option></select>
          <select className="admin-users-control" value={statusFilter} onChange={(event) => setStatusFilter(event.target.value)}><option value="">همه وضعیت‌ها</option><option value="active">فعال</option><option value="awaiting_access">منتظر ایجاد دسترسی</option><option value="pending">در انتظار فعال‌سازی</option><option value="inactive">استارتاپ غیرفعال</option></select>
          <div className="admin-users-count">{numberFa.format(totalFiltered)} حساب</div>
        </section>

        <section className="admin-users-table-card">
          <h2>فهرست شرکت‌ها و استارتاپ‌ها</h2><p>شرکت قابل مشاهده است؛ استارتاپ از همین فهرست وارد مشاهده/ویرایش یا فرایند ایجاد دسترسی می‌شود.</p>
          {failed ? <p className="admin-form-actions-note">دریافت داده Backend ناموفق بود؛ داده‌های نمونه توسعه و صف استارتاپ‌ها نمایش داده می‌شوند.</p> : null}
          <div className="admin-users-table">
            <div className="admin-users-row admin-users-table-head"><span>شرکت / استارتاپ</span><span>نوع حساب</span><span>وضعیت</span><span>اعضای فعال</span><span>شناسه / مدیر</span><span>اقدام</span></div>
            {filteredAwaitingAccess.map((item) => <div className="admin-users-row" key={`approved-${item.id}`}><div className="admin-user-cell"><strong>{item.startupName}</strong><small>{item.activityArea || "حوزه فعالیت ثبت نشده"}</small></div><span>استارتاپ</span><span className="admin-status-pill admin-status-review">تأیید خانه خلاق؛ منتظر دسترسی</span><span>۰</span><span className="admin-access-pill admin-access-limited">{item.managerName || "مدیر تعیین نشده"}</span><Link className="admin-user-action" to={`/panel/admin/users/new?approvedStartupId=${encodeURIComponent(item.id)}`}>ایجاد دسترسی</Link></div>)}
            {filteredPendingStartups.map((record) => <div className="admin-users-row" key={record.id}><div className="admin-user-cell"><strong>{record.startupName}</strong><small>{record.activityArea || "حوزه فعالیت ثبت نشده"}</small></div><span>استارتاپ</span><span className="admin-status-pill admin-status-review">در انتظار فعال‌سازی</span><span>۰</span><span className="admin-access-pill admin-access-limited">{record.displayName}</span><Link className="admin-user-action" to="/panel/admin/users">مشاهده دعوت</Link></div>)}
            {!loading && filtered.map((item) => {
              const isCompany = item.type === "company";
              const isActive = isCompany || item.status === "active";
              const profile = profileMap.get(item.organizationId);
              return <div className="admin-users-row" key={item.organizationId}><div className="admin-user-cell"><strong>{item.name}</strong><small>{profile?.activityArea || item.organizationId}</small></div><span>{typeLabel[item.type] ?? item.type}</span><span className={`admin-status-pill ${isActive ? "admin-status-active" : "admin-status-review"}`}>{isCompany ? "فعال؛ بدون نیاز به فعال‌سازی" : item.status === "active" ? "فعال" : "غیرفعال"}</span><span>{numberFa.format(item.activeMemberCount)}</span><span className="admin-access-pill admin-access-full">{profile?.manager || `${item.organizationId.slice(0, 8)}…`}</span><Link className="admin-user-action" to={`/panel/admin/organizations/${item.organizationId}`}>{isCompany ? "مشاهده" : "مشاهده / ویرایش"}</Link></div>;
            })}
            <div className="admin-pagination"><span>{loading ? "در حال دریافت…" : `نمایش ${numberFa.format(totalFiltered)} حساب`}</span><div className="admin-pagination-controls"><button className="admin-page-control" type="button" disabled>‹</button><span className="admin-page-number">۱</span><button className="admin-page-control" type="button" disabled>›</button></div></div>
          </div>
        </section>
        <aside className="admin-info-note">شرکت‌ها فقط برای مشاهده مدیریتی هستند. استارتاپ‌ها علاوه بر وضعیت و دسترسی، پروفایل مدیریتی قابل ویرایش دارند و اطلاعات ذخیره‌شده Backend در همین فهرست نمایش داده می‌شود.</aside>
      </main>
      <AdminSidebar active="organizations" />
    </div>
  );
}
