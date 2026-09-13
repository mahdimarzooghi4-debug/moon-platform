import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { CompanySidebar } from "../components/CompanySidebar";
import {
  CERTIFICATE_ISSUER_UPDATED_EVENT,
  readCertificateIssuerSettings,
} from "../../../shared/certificateIssuerSettings";
import "../index.css";
import "./index.css";

const OFFICIAL_LOGO = "/assets/company-panel/emdad-logo-official.png";
const STAMP = "/assets/company-panel/emdad-stamp.svg";
const ISSUER_LABEL = "مسئول صدور گواهی";
const LEGACY_ISSUER_TITLES = new Set([
  "مدیر مسئول ماده ۱۷۲",
  "مدیر مسئول صدور گواهی ماده ۱۷۲",
]);

export default function CompanyArticle172CertificateIssued() {
  const [issuer, setIssuer] = useState(() => readCertificateIssuerSettings());

  useEffect(() => {
    const syncIssuer = () => setIssuer(readCertificateIssuerSettings());
    window.addEventListener("storage", syncIssuer);
    window.addEventListener(CERTIFICATE_ISSUER_UPDATED_EVENT, syncIssuer);
    return () => {
      window.removeEventListener("storage", syncIssuer);
      window.removeEventListener(CERTIFICATE_ISSUER_UPDATED_EVENT, syncIssuer);
    };
  }, []);

  const managerName = issuer.managerName.trim();
  const managerTitle = issuer.managerTitle.trim();
  const showManagerName = Boolean(managerName && managerName !== ISSUER_LABEL);
  const showManagerTitle = Boolean(managerTitle && !LEGACY_ISSUER_TITLES.has(managerTitle));

  return (
    <div className="company-panel-shell company-certificate-issued-shell" data-node-id="1928:2">
      <main className="company-certificate-issued-page" dir="rtl">
        <header className="company-topbar company-certificate-issued-topbar">
          <div className="company-page-title"><h1>گواهی ماده ۱۷۲ صادرشده</h1><p>گواهی تأییدشده مشارکت سازمانی و اطلاعات رسمی صدور</p></div>
          <div className="company-top-actions"><button type="button" className="company-action company-action-primary company-certificate-download" onClick={() => window.print()}>چاپ / ذخیره PDF</button><Link className="company-action company-action-secondary" to="/panel/company/certificates">بازگشت به گواهی‌ها</Link></div>
        </header>

        <section className="company-issued-summary"><div><span>پروژه</span><strong>سلامت خانواده</strong></div><div><span>مبلغ گواهی‌شده</span><strong>۵۰٬۰۰۰٬۰۰۰ تومان</strong></div><div><span>وضعیت</span><strong className="is-success">صادرشده</strong></div><div><span>شماره گواهی</span><strong dir="ltr">CE-172-1405-0041</strong></div><div><span>تاریخ صدور</span><strong>۱۴۰۵/۰۶/۰۵</strong></div></section>

        <section className="company-official-certificate">
          <div className="company-official-certificate-header"><div className="company-official-logo-frame"><img src={OFFICIAL_LOGO} alt="نشان کمیته امداد امام خمینی" /></div><div><span>جمهوری اسلامی ایران</span><strong>کمیته امداد امام خمینی (ره)</strong></div><div><small>شماره گواهی</small><b dir="ltr">CE-172-1405-0041</b><small>تاریخ صدور: ۱۴۰۵/۰۶/۰۵</small></div></div>
          <h2>گواهی موضوع ماده ۱۷۲ قانون مالیات‌های مستقیم</h2>
          <p className="company-official-intro">بدین‌وسیله گواهی می‌شود شرکت <strong>پایدار پرداز خلاق آریا</strong> در چارچوب مشارکت سازمانی پروژه اثر اجتماعی «سلامت خانواده» مبلغ زیر را به‌صورت مستقیم و مطابق ضوابط ثبت‌شده به حساب کمیته امداد امام خمینی (ره) واریز نموده است.</p>
          <div className="company-official-fields"><div><span>نام شرکت</span><strong>پایدار پرداز خلاق آریا</strong></div><div><span>شناسه ملی</span><strong>۱۰۱۰۴۵۸۶۹۲۱</strong></div><div><span>عنوان پروژه</span><strong>سلامت خانواده</strong></div><div><span>مبلغ مورد تأیید</span><strong>۵۰٬۰۰۰٬۰۰۰ تومان</strong></div></div>
          <p className="company-official-note">این گواهی پس از بررسی اطلاعات حقوقی و مالیاتی شرکت، تأیید پرداخت واجد شرایط و احراز ضوابط مرتبط با ماده ۱۷۲ صادر شده و برای ارائه به مراجع ذی‌ربط قابل استناد است.</p>
          <div className="company-official-signature">
            <div className="company-official-signature-mark">
              {issuer.signatureDataUrl ? <img className="company-official-signer-image" src={issuer.signatureDataUrl} alt={`امضای ${managerName || ISSUER_LABEL}`} /> : <em>امضا از پنل امداد تعریف نشده است</em>}
            </div>
            <div className="company-official-stamp"><span>مهر و تأیید</span><img src={STAMP} alt="مهر کمیته امداد" /></div>
            <div className="company-official-signer">
              <span>{ISSUER_LABEL}</span>
              {showManagerName ? <strong>{managerName}</strong> : null}
              {showManagerTitle ? <small>{managerTitle}</small> : null}
              <small>{issuer.unitName}</small>
            </div>
          </div>
        </section>
      </main>
      <CompanySidebar active="certificates" />
    </div>
  );
}
