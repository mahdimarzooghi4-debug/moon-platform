import { useCallback, useEffect, useRef, useState } from "react";
import type { ChangeEvent } from "react";
import { Link, useLocation, useNavigate, useSearchParams } from "react-router-dom";
import { StartupSidebar } from "../components/StartupSidebar";
import {
  createStartupProject,
  getStartupOrganizationId,
  getStartupProject,
  saveStartupProjectVersion,
  submitStartupProject,
} from "../projects/api";
import type { ProjectDraftInput } from "../projects/api";
import "../index.css";
import "./index.css";

const steps = [
  { number: "۱", title: "اطلاعات پایه", subtitle: "مسئله و جامعه هدف", path: "/panel/startup/projects/new" },
  { number: "۲", title: "راهکار و زمان‌بندی", subtitle: "راهکار اجرایی و فازها", path: "/panel/startup/projects/new/step-2" },
  { number: "۳", title: "KPI و بودجه", subtitle: "شاخص و هزینه‌ها", path: "/panel/startup/projects/new/step-3" },
  { number: "۴", title: "ریسک و مستندات", subtitle: "ریسک و گزارش‌دهی", path: "/panel/startup/projects/new/step-4" },
] as const;

const nodeIds = ["1981:2", "2007:2", "2020:2", "2024:2"] as const;
const nodeNames = [
  "startup-project-create-step1",
  "startup-project-create-step2",
  "startup-project-create-step3",
  "startup-project-create-step4",
] as const;

function currentStep(pathname: string) {
  if (pathname.endsWith("/step-4")) return 4;
  if (pathname.endsWith("/step-3")) return 3;
  if (pathname.endsWith("/step-2")) return 2;
  return 1;
}

function ProjectStepper({ activeStep, onNavigate }: { activeStep: number; onNavigate: () => void }) {
  return (
    <section className="startup-create-stepper" data-name="project-registration-stepper">
      {steps.map((step, index) => {
        const stepNumber = index + 1;
        return (
          <Link
            key={step.path}
            to={step.path}
            onClick={onNavigate}
            className={`startup-create-step${activeStep === stepNumber ? " is-active" : ""}`}
          >
            <span className="startup-create-step-number">{step.number}</span>
            <span className="startup-create-step-copy">
              <strong>{step.title}</strong>
              <small>{step.subtitle}</small>
            </span>
          </Link>
        );
      })}
    </section>
  );
}

function Field({ label, placeholder }: { label: string; placeholder: string }) {
  return (
    <label className="startup-create-field">
      <span>{label}</span>
      <input type="text" name={label} placeholder={placeholder} />
    </label>
  );
}

function StepOne() {
  const imageInputRef = useRef<HTMLInputElement>(null);
  const [imagePreview, setImagePreview] = useState("");
  const [imageName, setImageName] = useState("");
  const [imageError, setImageError] = useState("");

  const handleImageChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    const allowedTypes = new Set(["image/jpeg", "image/png", "image/webp"]);
    if (!allowedTypes.has(file.type)) {
      setImageError("فرمت تصویر باید JPG، PNG یا WebP باشد.");
      event.target.value = "";
      return;
    }

    if (file.size > 5 * 1024 * 1024) {
      setImageError("حجم تصویر نباید بیشتر از ۵ مگابایت باشد.");
      event.target.value = "";
      return;
    }

    const reader = new FileReader();
    reader.onload = () => {
      setImagePreview(typeof reader.result === "string" ? reader.result : "");
      setImageName(file.name);
      setImageError("");
    };
    reader.onerror = () => setImageError("خواندن تصویر انجام نشد. دوباره تلاش کنید.");
    reader.readAsDataURL(file);
  };

  const removeImage = () => {
    setImagePreview("");
    setImageName("");
    setImageError("");
    if (imageInputRef.current) imageInputRef.current.value = "";
  };

  return (
    <>
      <div className="startup-create-card-heading">
        <div>
          <h2>اطلاعات پایه پروژه</h2>
          <p>مرحله اول از تدوین پروژه؛ اطلاعات مسئله، جامعه هدف و موقعیت اجرای پروژه را مشخص کنید.</p>
        </div>
        <span className="startup-create-stage-badge">مرحله ۱ از ۴</span>
      </div>

      <div className="startup-create-two-column">
        <Field label="عنوان پروژه" placeholder="عنوان پروژه اثر اجتماعی" />
        <Field label="حوزه اثر اجتماعی" placeholder="انتخاب حوزه اثر" />
        <Field label="موقعیت / منطقه اجرا" placeholder="استان، شهر یا منطقه اجرای پروژه" />
        <Field label="جامعه هدف" placeholder="ذی‌نفعان اصلی پروژه" />
      </div>

      <div className="startup-create-step-one-media-row">
        <label className="startup-create-textarea startup-create-problem">
          <strong>مسئله مشخص</strong>
          <small>چالش اجتماعی واضح و ریشه‌دار در یک منطقه یا جامعه هدف مشخص را شرح دهید.</small>
          <textarea name="مسئله مشخص" placeholder="شرح مسئله اجتماعی، وضعیت موجود و نیازی که پروژه برای حل آن تعریف می‌شود…" />
        </label>

        <div className="startup-create-project-image" data-name="project-cover-image">
          <div className="startup-create-project-image-title">
            <strong>تصویر اصلی پروژه</strong>
            <small>JPG، PNG یا WebP · حداکثر ۵ مگابایت</small>
          </div>
          <div className={`startup-create-project-image-box${imagePreview ? " has-image" : ""}`}>
            {imagePreview ? (
              <img src={imagePreview} alt={imageName || "پیش‌نمایش تصویر پروژه"} />
            ) : (
              <div className="startup-create-project-image-placeholder" aria-hidden="true">
                <span>＋</span>
                <strong>تصویر کاور پروژه</strong>
              </div>
            )}
            <input
              ref={imageInputRef}
              type="file"
              accept="image/jpeg,image/png,image/webp"
              hidden
              onChange={handleImageChange}
            />
            <div className="startup-create-project-image-actions">
              <button type="button" onClick={() => imageInputRef.current?.click()}>
                {imagePreview ? "تعویض تصویر" : "انتخاب تصویر"}
              </button>
              {imagePreview ? <button type="button" className="is-remove" onClick={removeImage}>حذف</button> : null}
            </div>
          </div>
          <div className="startup-create-project-image-feedback" aria-live="polite">
            {imageError ? <small className="is-error">{imageError}</small> : imageName ? <small>{imageName}</small> : null}
          </div>
        </div>
      </div>

      <div className="startup-create-notice">
        <strong>پروژه قابل ارزیابی باید ۸ معیار اصلی را پوشش دهد.</strong>
        <span>مسئله مشخص، جامعه هدف، راهکار اجرایی، برنامه زمان‌بندی، بودجه شفاف، KPI قابل سنجش، مدیریت ریسک و گزارش‌دهی مداوم.</span>
      </div>
    </>
  );
}

function StepTwo() {
  return (
    <>
      <div className="startup-create-card-heading">
        <div>
          <h2>راهکار اجرایی و برنامه زمان‌بندی</h2>
          <p>راهکار اجرای پروژه و فازهای زمانی آن را به‌صورت روشن و مرحله‌به‌مرحله مشخص کنید.</p>
        </div>
        <span className="startup-create-stage-badge">مرحله ۲ از ۴</span>
      </div>

      <label className="startup-create-textarea startup-create-solution">
        <strong>راهکار اجرایی</strong>
        <small>نقشه مسیر شفاف برای اجرای گام‌به‌گام و تکرارپذیر راهکار را شرح دهید.</small>
        <textarea name="راهکار اجرایی" placeholder="شرح راهکار، مراحل اجرای آن و نحوه رسیدن از مسئله به نتیجه مورد انتظار…" />
      </label>

      <div className="startup-create-section-title">
        <h3>برنامه زمان‌بندی پروژه</h3>
        <p>پروژه را به فازهای اجرایی با تاریخ شروع و پایان مشخص تقسیم کنید.</p>
      </div>

      <div className="startup-create-phase-grid">
        <Field label="عنوان فاز" placeholder="عنوان فاز اجرایی" />
        <Field label="تاریخ شروع" placeholder="۱۴۰۵/۰۷/۰۱" />
        <Field label="تاریخ پایان" placeholder="۱۴۰۵/۰۸/۳۰" />
        <div className="startup-create-phase-number">فاز ۱</div>
      </div>

      <button className="startup-create-outline-action" type="button">افزودن فاز</button>

      <div className="startup-create-notice startup-create-notice-compact">
        <span>هر فاز باید زمان شروع و پایان مشخص داشته باشد و با راهکار اجرایی پروژه هم‌راستا باشد.</span>
      </div>
    </>
  );
}

function StepThree() {
  return (
    <>
      <div className="startup-create-card-heading">
        <div>
          <h2>KPI و بودجه پروژه</h2>
          <p>شاخص‌های قابل سنجش و بودجه شفاف پروژه را متناسب با فازهای اجرایی ثبت کنید.</p>
        </div>
        <span className="startup-create-stage-badge">مرحله ۳ از ۴</span>
      </div>

      <div className="startup-create-section-title">
        <h3>شاخص‌های کلیدی عملکرد (KPI)</h3>
        <p>برای هر شاخص، مقدار هدف، واحد سنجش و روش اندازه‌گیری را مشخص کنید.</p>
      </div>

      <div className="startup-create-data-row startup-create-kpi-row">
        <Field label="عنوان شاخص" placeholder="مثلاً تعداد فرصت‌های شغلی ایجادشده" />
        <Field label="مقدار هدف" placeholder="مقدار هدف" />
        <Field label="واحد سنجش" placeholder="نفر / درصد / ..." />
        <Field label="روش سنجش" placeholder="روش جمع‌آوری و سنجش داده" />
        <button className="startup-create-outline-action" type="button">افزودن شاخص</button>
      </div>

      <div className="startup-create-section-title startup-create-budget-title">
        <h3>بودجه پروژه</h3>
        <p>اقلام هزینه را شفاف و با ارتباط مشخص به فازهای پروژه ثبت کنید.</p>
      </div>

      <div className="startup-create-budget-summary">
        <Field label="بودجه کل پروژه (تومان)" placeholder="مبلغ کل موردنیاز پروژه" />
        <Field label="توضیح بودجه" placeholder="مبنای برآورد هزینه‌ها" />
      </div>

      <div className="startup-create-data-row startup-create-cost-row">
        <Field label="شرح هزینه" placeholder="عنوان ردیف هزینه" />
        <Field label="مرحله مرتبط" placeholder="انتخاب فاز" />
        <Field label="مبلغ (تومان)" placeholder="مبلغ" />
        <button className="startup-create-outline-action" type="button">افزودن ردیف هزینه</button>
      </div>

      <div className="startup-create-notice startup-create-notice-compact">
        <span>بودجه و KPIها باید با فازهای اجرایی پروژه هم‌خوان باشند؛ آزادسازی وجه هر مرحله پس از تأیید ارزیابی انجام می‌شود. کارمزد تأمین مالی بر اساس مبلغ کل پروژه محاسبه می‌شود.</span>
      </div>
    </>
  );
}

function StepFour() {
  return (
    <>
      <div className="startup-create-card-heading">
        <div>
          <h2>ریسک، مستندات و بازبینی نهایی</h2>
          <p>ریسک‌های پروژه، برنامه گزارش‌دهی و مستندات را تکمیل و پروژه را برای ارزیابی ارسال کنید.</p>
        </div>
        <span className="startup-create-stage-badge">مرحله ۴ از ۴</span>
      </div>

      <label className="startup-create-textarea startup-create-risk">
        <strong>ریسک‌های اصلی و راهکار کاهش</strong>
        <small>ریسک‌های مهم اجرای پروژه و اقدام پیشگیرانه یا اصلاحی برای هرکدام را شرح دهید.</small>
        <textarea name="ریسک‌های اصلی و راهکار کاهش" placeholder="ریسک‌های اجرایی، عملیاتی یا مرتبط با جامعه هدف و نحوه مدیریت آن‌ها…" />
      </label>

      <div className="startup-create-section-title">
        <h3>برنامه گزارش‌دهی و مستندات</h3>
        <p>پس از هر مرحله اجرا، گزارش و مستندات همان مرحله برای ارزیابی ارسال می‌شود.</p>
      </div>

      <div className="startup-create-two-column startup-create-report-fields">
        <Field label="زمان ارسال گزارش" placeholder="پس از پایان هر مرحله" />
        <Field label="نوع مستندات" placeholder="گزارش اجرا، اسناد و شواهد مرتبط با مرحله" />
      </div>

      <div className="startup-create-upload">
        <div>
          <strong>مستندات پشتیبان پروژه</strong>
          <h3>فایل‌های مرتبط با برنامه اجرا و مستندات پشتیبان پروژه</h3>
          <p>در حال حاضر بارگذاری فایل در سرور فعال نیست و فایل انتخاب‌شده ذخیره نمی‌شود؛ اتصال فضای ذخیره‌سازی در مرحله بعد انجام می‌شود.</p>
        </div>
        <label className="startup-create-outline-action startup-create-file-action">
          افزودن فایل
          <input type="file" hidden />
        </label>
      </div>

      <div className="startup-create-final-review">
        <strong>آماده ارسال برای ارزیابی</strong>
        <p>با ارسال پروژه، اطلاعات برای ارزیابی خانه خلاق و نوآوری آینه ثبت می‌شود. اجرای پروژه پس از تأیید پروژه وارد مراحل اجرایی خواهد شد.</p>
      </div>
    </>
  );
}

function StepContent({ step }: { step: number }) {
  if (step === 2) return <StepTwo />;
  if (step === 3) return <StepThree />;
  if (step === 4) return <StepFour />;
  return <StepOne />;
}

export default function StartupProjectCreate() {
  const location = useLocation();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const requestedProjectId = searchParams.get("projectId") ?? "";
  const formRef = useRef<HTMLElement>(null);
  const [organizationId, setOrganizationId] = useState("");
  const [accessToken, setAccessToken] = useState("");
  const [projectId, setProjectId] = useState("");
  const [draftSteps, setDraftSteps] = useState<Record<string, Record<string, string[]>>>({});
  const [statusMessage, setStatusMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [busy, setBusy] = useState(false);
  const step = currentStep(location.pathname);
  const previous = step > 1 ? steps[step - 2].path : "/panel/startup/projects";
  const next = step < 4 ? steps[step].path : null;

  const storageKey = organizationId ? `moon.startup.projectDraft.v1:${organizationId}` : "";

  useEffect(() => {
    let cancelled = false;
    getStartupOrganizationId()
      .then(({ organizationId: orgId, accessToken: token }) => {
        if (cancelled) return;
        setOrganizationId(orgId);
        setAccessToken(token);
      })
      .catch(() => {
        if (!cancelled) setErrorMessage("برای ثبت پروژه، با حساب استارتاپ وارد شوید و عضویت فعال استارتاپ داشته باشید.");
      });
    return () => { cancelled = true; };
  }, []);

  const readDraft = useCallback(() => {
    if (!storageKey) return { projectId: "", steps: {} as Record<string, Record<string, string[]>> };
    try {
      const parsed = JSON.parse(sessionStorage.getItem(storageKey) ?? "{}") as {
        projectId?: string;
        steps?: Record<string, Record<string, string[]>>;
      };
      return { projectId: parsed.projectId ?? "", steps: parsed.steps ?? {} };
    } catch {
      return { projectId: "", steps: {} as Record<string, Record<string, string[]>> };
    }
  }, [storageKey]);

  useEffect(() => {
    if (!storageKey) return;
    const saved = readDraft();
    const resumeProjectId = requestedProjectId || saved.projectId;
    setDraftSteps(saved.steps);
    setProjectId(resumeProjectId);
    if (resumeProjectId && accessToken) {
      getStartupProject(resumeProjectId, accessToken).then((project) => {
        const version = project.versions.find((item) => item.versionNumber === project.currentVersionNumber);
        const stepsData = version?.proposalData?.steps;
        if (stepsData && typeof stepsData === "object") {
          const merged = stepsData as Record<string, Record<string, string[]>>;
          setDraftSteps(merged);
          sessionStorage.setItem(storageKey, JSON.stringify({ projectId: resumeProjectId, steps: merged }));
        }
      }).catch(() => {
        setErrorMessage("بازیابی پیش‌نویس از سرور انجام نشد. اطلاعات محلی این مرورگر حفظ شده است.");
      });
    }
  }, [storageKey, accessToken, readDraft, requestedProjectId]);

  const collectStep = useCallback((stepNumber: number) => {
    const root = formRef.current;
    const values: Record<string, string[]> = {};
    root?.querySelectorAll<HTMLInputElement | HTMLTextAreaElement>("input[name], textarea[name]").forEach((field) => {
      if (field instanceof HTMLInputElement && field.type === "file") return;
      (values[field.name] ??= []).push(field.value.trim());
    });
    return values;
  }, []);

  const storeCurrentStep = useCallback(() => {
    if (!storageKey) return draftSteps;
    const nextSteps = { ...draftSteps, [String(step)]: collectStep(step) };
    setDraftSteps(nextSteps);
    sessionStorage.setItem(storageKey, JSON.stringify({ projectId, steps: nextSteps }));
    return nextSteps;
  }, [storageKey, draftSteps, step, collectStep, projectId]);

  useEffect(() => {
    const values = draftSteps[String(step)];
    const root = formRef.current;
    if (!values || !root) return;
    const getNamedFields = (name: string) => Array.from(root.querySelectorAll<HTMLInputElement | HTMLTextAreaElement>("input[name], textarea[name]")).filter((field) => field.name === name && !(field instanceof HTMLInputElement && field.type === "file"));
    const ensureRows = (name: string, count: number) => {
      const fields = getNamedFields(name);
      if (fields.length >= count || !fields.length) return;
      const addLabel = step === 2 ? "افزودن فاز" : name.startsWith("عنوان شاخص") ? "افزودن شاخص" : "افزودن ردیف هزینه";
      const addButton = Array.from(root.querySelectorAll<HTMLButtonElement>("button.startup-create-outline-action")).find((button) => button.textContent?.trim() === addLabel);
      for (let i = fields.length; i < count; i += 1) addButton?.click();
    };
    Object.entries(values).forEach(([name, entries]) => ensureRows(name, entries.length));
    requestAnimationFrame(() => {
      Object.entries(values).forEach(([name, entries]) => {
        getNamedFields(name).forEach((field, index) => { field.value = entries[index] ?? ""; });
      });
    });
  }, [step, draftSteps]);

  const makeInput = (allSteps: Record<string, Record<string, string[]>>): ProjectDraftInput => {
    const first = allSteps["1"] ?? {};
    const title = first["عنوان پروژه"]?.[0]?.trim() ?? "";
    const problem = first["مسئله مشخص"]?.[0]?.trim() ?? "";
    const solution = allSteps["2"]?.["راهکار اجرایی"]?.[0]?.trim() ?? "";
    const description = [problem && `مسئله: ${problem}`, solution && `راهکار: ${solution}`].filter(Boolean).join("\n\n");
    const rawBudget = (allSteps["3"]?.["بودجه کل پروژه (تومان)"]?.[0] ?? "").replace(/[۰-۹٠-٩,٬\s]/g, (digit) => {
      const persian = "۰۱۲۳۴۵۶۷۸۹".indexOf(digit);
      const arabic = "٠١٢٣٤٥٦٧٨٩".indexOf(digit);
      if (persian >= 0) return String(persian);
      if (arabic >= 0) return String(arabic);
      return "";
    });
    const toman = Number(rawBudget);
    return {
      title,
      description,
      fundingTargetMinor: Number.isFinite(toman) && toman > 0 ? Math.round(toman * 10) : null,
      fundingTargetCurrency: Number.isFinite(toman) && toman > 0 ? "IRR" : null,
      proposalData: { steps: allSteps },
    };
  };

  const persistDraft = async (allSteps: Record<string, Record<string, string[]>>) => {
    if (!organizationId || !accessToken) throw new Error("startup_organization_membership_required");
    const input = makeInput(allSteps);
    if (!input.title || !input.description) throw new Error("required_project_fields");
    const project = projectId
      ? await saveStartupProjectVersion(projectId, input, accessToken)
      : await createStartupProject(organizationId, input, accessToken);
    setProjectId(project.projectId);
    sessionStorage.setItem(storageKey, JSON.stringify({ projectId: project.projectId, steps: allSteps }));
    return project.projectId;
  };

  const handleSave = async () => {
    setErrorMessage(""); setStatusMessage("");
    const allSteps = storeCurrentStep();
    setBusy(true);
    try {
      await persistDraft(allSteps);
      setStatusMessage("پیش‌نویس پروژه در سرور ذخیره شد.");
    } catch (error) {
      setErrorMessage(error instanceof Error && error.message === "required_project_fields"
        ? "برای ذخیره در سرور، عنوان پروژه و شرح مسئله یا راهکار را وارد کنید. سایر اطلاعات این مرحله در همین مرورگر نگه داشته شد."
        : "ذخیره پروژه انجام نشد. اتصال و دسترسی حساب استارتاپ را بررسی کنید و دوباره تلاش کنید.");
    } finally { setBusy(false); }
  };

  const handleSubmit = async () => {
    setErrorMessage(""); setStatusMessage("");
    const allSteps = storeCurrentStep();
    setBusy(true);
    try {
      const id = await persistDraft(allSteps);
      await submitStartupProject(id, accessToken);
      sessionStorage.removeItem(storageKey);
      navigate("/panel/startup/projects/submitted");
    } catch (error) {
      setErrorMessage(error instanceof Error && error.message === "required_project_fields"
        ? "عنوان پروژه و شرح مسئله یا راهکار را کامل کنید؛ سپس پروژه را ارسال کنید."
        : "ارسال پروژه انجام نشد. اگر پروژه قبلاً ارسال شده، از فهرست پروژه‌ها وضعیت آن را ببینید.");
    } finally { setBusy(false); }
  };

  return (
    <div className="startup-panel-page" data-node-id={nodeIds[step - 1]} data-name={nodeNames[step - 1]}>
      <StartupSidebar active="projects" />

      <main className="startup-dashboard-content startup-create-content">
        <header className="startup-topbar">
          <div className="startup-page-title">
            <h1>{projectId ? "ویرایش پیش‌نویس پروژه" : "ثبت پروژه جدید"}</h1>
            <p>تدوین پروژه بر اساس معیارهای ارزیابی اثر اجتماعی</p>
          </div>
          <div className="startup-top-actions startup-create-actions">
            <Link className="startup-button startup-button-secondary startup-create-back-projects" to="/panel/startup/projects" onClick={storeCurrentStep}>
              بازگشت به پروژه‌ها
            </Link>
            <button className="startup-button startup-button-primary startup-create-save" type="button" onClick={handleSave} disabled={busy}>{busy ? "در حال ذخیره…" : projectId ? "ذخیره تغییرات" : "ذخیره پیش‌نویس"}</button>
          </div>
        </header>

        {statusMessage ? <p role="status" className="startup-create-feedback is-success">{statusMessage}</p> : null}
        {errorMessage ? <p role="alert" className="startup-create-feedback is-error">{errorMessage}</p> : null}
        <ProjectStepper activeStep={step} onNavigate={storeCurrentStep} />

        <section ref={formRef} className={`startup-create-card is-step-${step}`}>
          <StepContent step={step} />
          <div className="startup-create-footer">
            <Link className="startup-create-footer-secondary" to={previous} onClick={storeCurrentStep}>{step === 1 ? "انصراف" : "مرحله قبل"}</Link>
            {next ? (
              <Link className="startup-create-footer-primary" to={next} onClick={storeCurrentStep}>
                {step === 1 ? "ادامه: راهکار و زمان‌بندی" : step === 2 ? "ادامه: KPI و بودجه" : "ادامه: ریسک و مستندات"}
              </Link>
            ) : (
              <button className="startup-create-footer-primary startup-create-submit" type="button" onClick={handleSubmit} disabled={busy}>{busy ? "در حال ارسال…" : "ارسال پروژه برای ارزیابی"}</button>
            )}
          </div>
        </section>
      </main>
    </div>
  );
}
