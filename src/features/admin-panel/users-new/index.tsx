import type { FormEvent } from "react";
import { useEffect, useMemo, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AdminSidebar } from "../components/AdminSidebar";
import {
  listAdminOrganizations,
  listAdminRoles,
  type AdminOrganization,
  type AdminRole,
} from "../api";
import {
  APPROVED_STARTUP_ACCESS_QUEUE_CHANGED,
  APPROVED_STARTUP_ACCESS_QUEUE_KEY,
  readApprovedStartupAccessQueue,
  removeApprovedStartupAccess,
  type ApprovedStartupAccessQueueItem,
} from "../../../shared/approved-startup-access-queue";
import { createAdminProvisioningRecord } from "../provisioning-store";
import "../index.css";
import "../users-flow.css";
import "./index.css";

function toLatinDigits(value: string) {
  return value
    .replace(/[۰-۹]/g, (digit) => String("۰۱۲۳۴۵۶۷۸۹".indexOf(digit)))
    .replace(/[٠-٩]/g, (digit) => String("٠١٢٣٤٥٦٧٨٩".indexOf(digit)));
}

function normalizeMobile(value: string) {
  return toLatinDigits(value).replace(/\D/g, "").slice(0, 11);
}

export default function AdminAddUser() {
  const navigate = useNavigate();
  const [organizations, setOrganizations] = useState<AdminOrganization[]>([]);
  const [roles, setRoles] = useState<AdminRole[]>([]);
  const [approvedStartups, setApprovedStartups] = useState<ApprovedStartupAccessQueueItem[]>([]);
  const [selectedQueueId, setSelectedQueueId] = useState("");
  const [displayName, setDisplayName] = useState("");
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");
  const [roleCode, setRoleCode] = useState("");
  const [organizationId, setOrganizationId] = useState("");
  const [startupName, setStartupName] = useState("");
  const [activityArea, setActivityArea] = useState("");
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    let active = true;

    const refreshQueue = () => {
      if (active) setApprovedStartups(readApprovedStartupAccessQueue());
    };

    const handleStorage = (event: StorageEvent) => {
      if (event.key === APPROVED_STARTUP_ACCESS_QUEUE_KEY) refreshQueue();
    };

    refreshQueue();
    window.addEventListener(APPROVED_STARTUP_ACCESS_QUEUE_CHANGED, refreshQueue);
    window.addEventListener("storage", handleStorage);

    Promise.allSettled([listAdminOrganizations(), listAdminRoles()])
      .then(([organizationsResult, rolesResult]) => {
        if (!active) return;
        if (organizationsResult.status === "fulfilled") {
          setOrganizations(organizationsResult.value.filter((item) => item.status === "active"));
        }
        if (rolesResult.status === "fulfilled") {
          setRoles(rolesResult.value);
        }
        if (rolesResult.status === "rejected") {
          setError("دریافت نقش‌های سامانه ناموفق بود.");
        }
      })
      .finally(() => {
        if (active) setLoading(false);
      });

    return () => {
      active = false;
      window.removeEventListener(APPROVED_STARTUP_ACCESS_QUEUE_CHANGED, refreshQueue);
      window.removeEventListener("storage", handleStorage);
    };
  }, []);

  const selectedRole = useMemo(
    () => roles.find((role) => role.code === roleCode),
    [roleCode, roles],
  );
  const isStartupRole = roleCode === "startup_manager";
  const selectedQueueItem = useMemo(
    () => approvedStartups.find((item) => item.id === selectedQueueId),
    [approvedStartups, selectedQueueId],
  );
  const selectedOrganization = useMemo(
    () => organizations.find((organization) => organization.organizationId === organizationId),
    [organizationId, organizations],
  );
  const mobileIsValid = /^09\d{9}$/.test(mobile);
  const formIsValid = Boolean(
    displayName.trim() &&
      mobileIsValid &&
      selectedRole &&
      (isStartupRole ? startupName.trim() : selectedOrganization),
  );

  const chooseApprovedStartup = (item: ApprovedStartupAccessQueueItem) => {
    setSelectedQueueId(item.id);
    setStartupName(item.startupName);
    setDisplayName(item.managerName);
    setActivityArea(item.activityArea);
    setRoleCode("startup_manager");
    setOrganizationId("");
    setError("");
  };

  const submitUser = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!formIsValid || !selectedRole || saving) return;

    setSaving(true);
    setError("");

    const organizationName = isStartupRole ? startupName.trim() : selectedOrganization?.name ?? "";
    const organizationType = isStartupRole ? "startup" : selectedOrganization?.type ?? "";
    const finalOrganizationId = isStartupRole
      ? `pending-startup:${startupName.trim().replace(/\s+/g, "-").toLocaleLowerCase("fa")}`
      : selectedOrganization?.organizationId ?? "";

    createAdminProvisioningRecord({
      displayName: displayName.trim(),
      mobile,
      email: email.trim(),
      roleCode: selectedRole.code,
      roleName: selectedRole.name,
      organizationId: finalOrganizationId,
      organizationName,
      organizationType,
      startupName: isStartupRole ? startupName.trim() : "",
      activityArea: isStartupRole ? activityArea.trim() : "",
    });

    if (selectedQueueItem) {
      removeApprovedStartupAccess(selectedQueueItem.startupName, selectedQueueItem.managerName);
    }

    navigate("/panel/admin/users?provisioned=1");
  };

  return (
    <div className="admin-panel-shell" data-node-id="2249:2">
      <main className="admin-users-main" dir="rtl">
        <header className="admin-users-header">
          <div className="admin-users-heading">
            <h1>تعریف کاربر و نقش</h1>
            <p>مدیر سامانه ابتدا شخص را تعریف می‌کند، سپس نقش و مجموعه مرتبط را مشخص می‌کند.</p>
          </div>
          <div className="admin-users-actions">
            <Link className="admin-users-button admin-users-button-wide" to="/panel/admin/users">بازگشت به کاربران</Link>
          </div>
        </header>

        <form className="admin-users-create-form" onSubmit={submitUser}>
          <section className="admin-form-card admin-access-assignment-card">
            <div className="admin-provisioning-heading">
              <div>
                <h2>۱. مشخصات شخص</h2>
                <p>برای نقش‌های سامانه نیازی نیست شخص از قبل Login کرده باشد؛ مدیر مشخصات اولیه را ثبت می‌کند.</p>
              </div>
              <span>تعریف هویت اولیه</span>
            </div>

            <div className="admin-form-grid">
              <div className="admin-form-field">
                <label htmlFor="admin-person-name">نام و نام خانوادگی</label>
                <input id="admin-person-name" className="admin-form-input" value={displayName} onChange={(event) => setDisplayName(event.target.value)} placeholder="مثلاً علی رضایی" disabled={saving} required />
              </div>
              <div className="admin-form-field">
                <label htmlFor="admin-person-mobile">شماره موبایل</label>
                <input id="admin-person-mobile" className="admin-form-input" value={mobile} onChange={(event) => setMobile(normalizeMobile(event.target.value))} placeholder="09xxxxxxxxx" inputMode="numeric" dir="ltr" disabled={saving} required />
                {mobile && !mobileIsValid ? <small className="admin-field-error">شماره موبایل باید ۱۱ رقم و با 09 شروع شود.</small> : null}
              </div>
              <div className="admin-form-field">
                <label htmlFor="admin-person-email">ایمیل (اختیاری)</label>
                <input id="admin-person-email" className="admin-form-input" value={email} onChange={(event) => setEmail(event.target.value)} placeholder="name@example.com" type="email" dir="ltr" disabled={saving} />
              </div>
              <div className="admin-form-field">
                <label>وضعیت دعوت</label>
                <div className="admin-detail-value">پس از ثبت، حساب در وضعیت دعوت‌شده قرار می‌گیرد و اعلان برای ارسال آماده می‌شود.</div>
              </div>
            </div>

            <div className="admin-provisioning-divider" />

            <div className="admin-provisioning-heading">
              <div>
                <h2>۲. نقش و مجموعه</h2>
                <p>شرکت نیاز به تأیید مدیر سامانه ندارد؛ فقط نماینده و نقش او به شرکت موجود متصل می‌شود.</p>
              </div>
              <span>تخصیص دسترسی</span>
            </div>

            <div className="admin-form-grid">
              <div className="admin-form-field">
                <label htmlFor="admin-user-role">نقش کاربری</label>
                <select id="admin-user-role" className="admin-form-input" value={roleCode} onChange={(event) => {
                  setRoleCode(event.target.value);
                  setOrganizationId("");
                  if (event.target.value !== "startup_manager") setSelectedQueueId("");
                }} disabled={loading || saving || roles.length === 0} required>
                  <option value="">انتخاب نقش</option>
                  {roles.map((role) => <option value={role.code} key={role.roleId}>{role.name}</option>)}
                </select>
              </div>

              {!isStartupRole ? (
                <div className="admin-form-field">
                  <label htmlFor="admin-user-org">سازمان / مجموعه</label>
                  <select id="admin-user-org" className="admin-form-input" value={organizationId} onChange={(event) => setOrganizationId(event.target.value)} disabled={loading || saving} required>
                    <option value="">انتخاب سازمان فعال</option>
                    {organizations.map((organization) => (
                      <option value={organization.organizationId} key={organization.organizationId}>{organization.name}</option>
                    ))}
                  </select>
                </div>
              ) : (
                <>
                  <div className="admin-form-field">
                    <label htmlFor="admin-startup-name">نام استارتاپ</label>
                    <input id="admin-startup-name" className="admin-form-input" value={startupName} onChange={(event) => {
                      setStartupName(event.target.value);
                      setSelectedQueueId("");
                    }} placeholder="نام استارتاپ" disabled={saving} required />
                  </div>
                  <div className="admin-form-field">
                    <label htmlFor="admin-startup-area">حوزه فعالیت</label>
                    <input id="admin-startup-area" className="admin-form-input" value={activityArea} onChange={(event) => setActivityArea(event.target.value)} placeholder="مثلاً سلامت و بهداشت" disabled={saving} />
                  </div>
                </>
              )}
            </div>

            {isStartupRole ? (
              <div className="admin-approved-startup-queue" aria-label="استارتاپ‌های تأییدشده خانه خلاق">
                <div className="admin-approved-startup-queue-head">
                  <div>
                    <strong>استارتاپ‌های تأییدشده خانه خلاق</strong>
                    <span>انتخاب از این فهرست فقط مشخصات استارتاپ و مدیر را پر می‌کند؛ مدیر سامانه همچنان می‌تواند اطلاعات را دستی وارد کند.</span>
                  </div>
                  <span className="admin-approved-startup-count">{approvedStartups.length.toLocaleString("fa-IR")} مورد</span>
                </div>
                {approvedStartups.length ? (
                  <div className="admin-approved-startup-list">
                    {approvedStartups.map((item) => (
                      <div className={`admin-approved-startup-row admin-approved-startup-row-simple${selectedQueueId === item.id ? " is-selected" : ""}`} key={item.id}>
                        <div className="admin-approved-startup-name">
                          <strong>{item.startupName}</strong>
                          <span>{item.managerName || "مدیر ثبت نشده"}{item.activityArea ? ` · ${item.activityArea}` : ""}</span>
                        </div>
                        <span className="admin-approved-startup-state is-ready">تأیید خانه خلاق</span>
                        <button className="admin-approved-startup-select" type="button" disabled={saving} onClick={() => chooseApprovedStartup(item)}>
                          {selectedQueueId === item.id ? "انتخاب‌شده" : "استفاده از مشخصات"}
                        </button>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="admin-approved-startup-empty">موردی در صف تأیید خانه خلاق نیست؛ مشخصات استارتاپ را می‌توانی مستقیم وارد کنی.</div>
                )}
              </div>
            ) : null}

            {error ? <p className="admin-form-actions-note">{error}</p> : null}
          </section>

          <aside className="admin-info-note admin-info-note-tall">ثبت این فرم، شخص را در فهرست کاربران به حالت «دعوت‌شده» اضافه می‌کند. Backend فعلی فقط کاربران Sync‌شده با Keycloak را می‌شناسد و سرویس SMS هنوز provider واقعی ندارد؛ بنابراین ارسال واقعی دعوت پس از اتصال سرویس هویت/پیامک فعال می‌شود.</aside>

          <section className="admin-form-actions">
            <button className="admin-users-button admin-users-button-primary" type="submit" disabled={loading || saving || !formIsValid}>{saving ? "در حال ثبت…" : "ساخت حساب و ثبت نقش"}</button>
            <Link className="admin-users-button" to="/panel/admin/users">انصراف</Link>
            <p className="admin-form-actions-note">برای استارتاپ، نام استارتاپ و مدیر آن همین‌جا ثبت می‌شود؛ برای شرکت، سازمان موجود مستقیماً انتخاب می‌شود و مرحله تأیید جداگانه ندارد.</p>
          </section>
        </form>
      </main>
      <AdminSidebar active="users" />
    </div>
  );
}
