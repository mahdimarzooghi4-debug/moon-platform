import "../company-panel/certificate-issued/index.css";
import "./draft-letter.css";

// Presentation-only component. No official status, signature or letter number
// is accepted by this draft renderer. Callers must supply authoritative data.
export type Article172DraftData = Readonly<{
  companyName: string;
  nationalIdentifier: string;
  projectTitle: string;
  participationAmountText: string;
}>;

export default function Article172DraftLetter({ data }: { data: Article172DraftData }) {
  const { companyName, nationalIdentifier, projectTitle, participationAmountText } = data;
  const complete = [companyName, nationalIdentifier, projectTitle, participationAmountText]
    .every(value => typeof value === "string" && value.trim().length > 0);
  if (!complete) return <p dir="rtl" role="alert">اطلاعات لازم برای تهیه پیش‌نویس کامل نیست.</p>;

  return (
    <section dir="rtl" className="company-official-certificate mah-article172-draft" aria-label="پیش‌نویس غیررسمی گواهی ماده ۱۷۲">
      <div className="mah-article172-draft-banner">پیش‌نویس — صادر نشده — فاقد اعتبار رسمی</div>
      <div className="company-official-certificate-header">
        <div className="company-official-logo-frame"><img src="/assets/company-panel/emdad-logo-official.png" alt="نشان کمیته امداد امام خمینی" /></div>
        <div><span>جمهوری اسلامی ایران</span><strong>کمیته امداد امام خمینی (ره)</strong></div>
        <div><small>شماره رسمی نامه</small><b>هنوز صادر نشده</b><small>تاریخ صدور: —</small></div>
      </div>
      <h2>پیش‌نویس گواهی موضوع ماده ۱۷۲ قانون مالیات‌های مستقیم</h2>
      <p className="company-official-intro">اطلاعات زیر صرفاً برای بررسی توسط مرجع مجاز صدور گردآوری شده است. این پیش‌نویس به معنی تأیید پرداخت، احراز شرایط قانونی یا صدور گواهی نیست.</p>
      <div className="company-official-fields">
        <div><span>نام شرکت</span><strong>{companyName}</strong></div>
        <div><span>شناسه ملی</span><strong dir="ltr">{nationalIdentifier}</strong></div>
        <div><span>عنوان پروژه</span><strong>{projectTitle}</strong></div>
        <div><span>مبلغ مشارکت جهت بررسی</span><strong>{participationAmountText}</strong></div>
      </div>
      <p className="company-official-note">شماره رسمی، تاریخ صدور و تأیید مسئول مجاز تنها پس از صدور رسمی توسط کمیته امداد ثبت می‌شوند.</p>
      <div className="company-official-signature">
        <div className="company-official-signature-mark"><em>بدون امضای رسمی</em></div>
        <div className="company-official-stamp"><span>بدون مهر رسمی</span></div>
        <div className="company-official-signer"><span>مسئول صدور گواهی</span><small>در انتظار تأیید مرجع مجاز</small></div>
      </div>
      <p className="mah-article172-draft-banner mah-article172-draft-footer">این پیش‌نویس قابل استناد به‌عنوان گواهی رسمی نیست.</p>
    </section>
  );
}
