import { useEffect, useState, type ChangeEvent } from "react";
import {
  DEFAULT_CERTIFICATE_ISSUER,
  readCertificateIssuerSettings,
  writeCertificateIssuerSettings,
  type CertificateIssuerSettings,
} from "../../shared/certificateIssuerSettings";
import "./index.css";

const MAX_SIGNATURE_SIZE = 1_500_000;

export default function EmdadCertificateIssuerSettings() {
  const [pathname, setPathname] = useState(() => window.location.pathname);
  const [isOpen, setIsOpen] = useState(false);
  const [saved, setSaved] = useState(false);
  const [error, setError] = useState("");
  const [form, setForm] = useState<CertificateIssuerSettings>(() => readCertificateIssuerSettings());

  useEffect(() => {
    const timer = window.setInterval(() => {
      if (window.location.pathname !== pathname) setPathname(window.location.pathname);
    }, 300);
    return () => window.clearInterval(timer);
  }, [pathname]);

  if (!pathname.startsWith("/panel/emdad")) return null;

  const setField = (field: keyof CertificateIssuerSettings, value: string) => {
    setSaved(false);
    setError("");
    setForm((current) => ({ ...current, [field]: value }));
  };

  const handleSignature = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    if (!file.type.startsWith("image/")) {
      setError("فایل امضا باید تصویر باشد.");
      return;
    }
    if (file.size > MAX_SIGNATURE_SIZE) {
      setError("حجم تصویر امضا باید کمتر از ۱.۵ مگابایت باشد.");
      return;
    }

    const reader = new FileReader();
    reader.onload = () => {
      if (typeof reader.result === "string") setField("signatureDataUrl", reader.result);
    };
    reader.onerror = () => setError("خواندن تصویر امضا انجام نشد.");
    reader.readAsDataURL(file);
  };

  const handleSave = () => {
    if (!form.managerName.trim() || !form.managerTitle.trim() || !form.unitName.trim()) {
      setError("نام مسئول، سمت و واحد مسئول را کامل کنید.");
      return;
    }
    writeCertificateIssuerSettings({
      ...form,
      managerName: form.managerName.trim(),
      managerTitle: form.managerTitle.trim(),
      unitName: form.unitName.trim(),
    });
    setSaved(true);
    setError("");
  };

  const handleReset = () => {
    setForm(DEFAULT_CERTIFICATE_ISSUER);
    setSaved(false);
    setError("");
  };

  return (
    <>
      <button
        className="emdad-certificate-issuer-trigger"
        type="button"
        onClick={() => {
          setForm(readCertificateIssuerSettings());
          setIsOpen(true);
          setSaved(false);
          setError("");
        }}
      >
        تنظیم مسئول و امضای گواهی
      </button>

      {isOpen ? (
        <div className="emdad-certificate-issuer-backdrop" role="presentation" onMouseDown={() => setIsOpen(false)}>
          <section
            className="emdad-certificate-issuer-modal"
            dir="rtl"
            role="dialog"
            aria-modal="true"
            aria-labelledby="emdad-certificate-issuer-title"
            onMouseDown={(event) => event.stopPropagation()}
          >
            <header>
              <div>
                <h2 id="emdad-certificate-issuer-title">مشخصات مسئول صدور گواهی</h2>
                <p>این اطلاعات در گواهی ماده ۱۷۲ پنل شرکت نمایش داده می‌شود.</p>
              </div>
              <button type="button" onClick={() => setIsOpen(false)} aria-label="بستن">×</button>
            </header>

            <div className="emdad-certificate-issuer-fields">
              <label>
                <span>نام و نام خانوادگی مسئول</span>
                <input value={form.managerName} onChange={(event) => setField("managerName", event.target.value)} />
              </label>
              <label>
                <span>سمت مسئول</span>
                <input value={form.managerTitle} onChange={(event) => setField("managerTitle", event.target.value)} />
              </label>
              <label>
                <span>واحد مسئول</span>
                <input value={form.unitName} onChange={(event) => setField("unitName", event.target.value)} />
              </label>
              <label className="emdad-certificate-signature-upload">
                <span>تصویر امضا</span>
                <input type="file" accept="image/png,image/jpeg,image/webp,image/svg+xml" onChange={handleSignature} />
              </label>
            </div>

            <div className="emdad-certificate-signature-preview">
              {form.signatureDataUrl ? (
                <img src={form.signatureDataUrl} alt="پیش‌نمایش امضای مسئول" />
              ) : (
                <span>هنوز تصویری برای امضا تعریف نشده است.</span>
              )}
              {form.signatureDataUrl ? (
                <button type="button" onClick={() => setField("signatureDataUrl", "")}>حذف امضا</button>
              ) : null}
            </div>

            {error ? <p className="emdad-certificate-issuer-error">{error}</p> : null}
            {saved ? <p className="emdad-certificate-issuer-success">تنظیمات ذخیره شد و در گواهی شرکت اعمال می‌شود.</p> : null}

            <footer>
              <button type="button" className="secondary" onClick={handleReset}>بازنشانی</button>
              <button type="button" className="primary" onClick={handleSave}>ذخیره تنظیمات</button>
            </footer>
          </section>
        </div>
      ) : null}
    </>
  );
}
