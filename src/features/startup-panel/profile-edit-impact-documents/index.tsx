import { FormEvent } from "react";
import { Link, useNavigate } from "react-router-dom";
import { StartupSidebar } from "../components/StartupSidebar";
import "../index.css";
import "./index.css";

const impactFields = [
  ["حوزه اصلی اثر اجتماعی استارتاپ", "آموزش و مهارت‌افزایی، اشتغال پایدار"],
  ["جامعه هدف طرح", "جوانان و نوجوانان، فارغ‌التحصیلان دانشگاهی"],
  ["محدوده جغرافیایی فعالیت", "چنداستانی (تهران، البرز و اصفهان)"],
  ["تجربه قبلی طرح‌های اثرگذار", "داریم"],
] as const;

export default function StartupProfileEditImpactDocuments() {
  const navigate = useNavigate();
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    navigate("/panel/startup/profile");
  };

  return (
    <div className="startup-panel-page startup-profile-impact-edit-page" data-node-id="2088:2" data-name="startup-profile-edit-impact-documents">
      <StartupSidebar active="profile" />
      <main className="startup-profile-impact-edit-content">
        <header className="startup-profile-impact-edit-topbar">
          <div><h1>ویرایش پروفایل استارتاپ</h1><p>اثر اجتماعی، محدوده فعالیت و مدارک استارتاپ</p></div>
          <Link to="/panel/startup/profile">بازگشت به پروفایل</Link>
        </header>

        <nav className="startup-profile-impact-edit-tabs" aria-label="بخش‌های ویرایش پروفایل">
          <Link to="/panel/startup/profile/edit">اطلاعات پایه و نماینده</Link>
          <Link to="/panel/startup/profile/edit/product-team">محصول و تیم</Link>
          <span aria-current="page">اثر اجتماعی و مدارک</span>
        </nav>

        <form onSubmit={handleSubmit}>
          <section className="startup-profile-impact-edit-card startup-profile-impact-edit-fields" data-name="impact-fields">
            <h2>حوزه اثر اجتماعی</h2>
            <p>اطلاعات این بخش از درخواست تأییدشده ثبت‌نام استارتاپ نمایش داده می‌شود.</p>
            <div className="startup-profile-impact-edit-grid">
              {impactFields.map(([label, value]) => (
                <label key={label}><span>{label}</span><input defaultValue={value} /></label>
              ))}
            </div>
          </section>

          <section className="startup-profile-impact-edit-card startup-profile-impact-edit-documents" data-name="documents-section">
            <h2>مدارک و مستندات</h2>
            <p>Pitch Deck معرفی استارتاپ و مدارک حقوقی/هویتی از این بخش قابل بروزرسانی هستند.</p>
            <div className="startup-profile-impact-edit-document-columns">
              <div className="startup-profile-impact-edit-upload" data-name="pitch-deck-upload">
                <div><strong>فایل Pitch Deck معرفی استارتاپ *</strong><span>فایل PDF، حداکثر حجم ۱۵ مگابایت</span></div>
                <button type="button" aria-disabled="true">انتخاب فایل جدید</button>
              </div>
              <div className="startup-profile-impact-edit-legal" data-name="legal-docs">
                <strong>مدارک حقوقی و هویتی</strong>
                <div><span>آگهی_تاسیس_سامانه_ماه.pdf</span><small>۳.۴ مگابایت</small></div>
                <div><span>کارت_ملی_نماینده_رسمی.jpg</span><small>۱.۲ مگابایت</small></div>
                <button type="button" aria-disabled="true">افزودن مدرک</button>
              </div>
            </div>
            <label className="startup-profile-impact-edit-notes"><span>توضیحات تکمیلی (اختیاری)</span><textarea placeholder="اگر نکته یا توضیح بیشتری لازم است در این بخش بنویسید..." /></label>
          </section>

          <div className="startup-profile-impact-edit-verification" data-name="verification-note">تغییر اطلاعات تأییدشده ممکن است برای بررسی مجدد به خانه خلاق و نوآوری آینه ارسال شود.</div>

          <section className="startup-profile-impact-edit-actions" data-name="actions">
            <div className="startup-profile-impact-edit-action-buttons"><Link to="/panel/startup/profile">انصراف</Link><button type="submit">ذخیره تغییرات</button></div>
            <p>اطلاعات ذخیره‌شده در پروفایل استارتاپ بروزرسانی می‌شود.</p>
          </section>
        </form>
      </main>
    </div>
  );
}
