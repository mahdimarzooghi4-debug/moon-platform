import { Link } from "react-router-dom";
import { StartupSidebar } from "../components/StartupSidebar";
import "../index.css";
import "./index.css";

const summaryItems = [
  ["مرحله رشد", "MVP (محصول اولیه فعال)"],
  ["وضعیت حقوقی", "شرکت ثبت‌شده"],
  ["استان / شهر", "تهران / تهران"],
  ["سال شروع فعالیت", "۱۴۰۰"],
] as const;

const basicInfo = [
  ["حوزه فعالیت", "خدمات دیجیتال، صنایع خلاق، فناوری مالی"],
  ["شبکه اجتماعی / لینکدین", "linkedin.com/company/startup"],
  ["وب‌سایت", "https://mahsystem.ir"],
  ["نام فارسی استارتاپ", "سامانه ماه"],
] as const;

const representativeInfo = [
  ["نام و نام خانوادگی", "علی علوی"],
  ["شماره موبایل", "۰۹۱۲۳۴۵۶۷۸۹"],
  ["سمت در استارتاپ", "مدیر عامل و هم‌بنیان‌گذار"],
  ["ایمیل مکاتبات رسمی", "info@mahsystem.ir"],
] as const;

const productInfo = [
  ["وضعیت فعلی محصول", "محصول فعال · دارای مشتری · دارای درآمد"],
  ["مدل درآمدی", "فروش اشتراک (SaaS) / کارمزد از سرمایه‌گذاری"],
  ["مشتریان پرداخت‌کننده", "۱۲ مرکز نوآوری"],
  ["کاربران فعال سیستم", "۱۵۰ مدیر و مربی"],
] as const;

const impactInfo = [
  ["حوزه اصلی اثر", "آموزش و مهارت‌افزایی، اشتغال پایدار"],
  ["جامعه هدف", "جوانان و نوجوانان، فارغ‌التحصیلان دانشگاهی"],
  ["محدوده جغرافیایی", "چنداستانی (تهران، البرز و اصفهان)"],
  ["تجربه قبلی طرح‌های اثرگذار", "داریم"],
] as const;

export default function StartupProfile() {
  return (
    <div className="startup-panel-page startup-profile-page" data-node-id="2078:2" data-name="startup-profile">
      <StartupSidebar active="profile" />

      <main className="startup-profile-content">
        <header className="startup-profile-topbar" data-name="Top Bar">
          <div>
            <h1>پروفایل استارتاپ</h1>
            <p>اطلاعات ثبت‌نام، نماینده اصلی، محصول، تیم و حوزه اثر اجتماعی</p>
          </div>
          <Link className="startup-profile-edit-link" to="/panel/startup/profile/edit">ویرایش اطلاعات</Link>
        </header>

        <section className="startup-profile-summary" data-name="profile-summary">
          <div className="startup-profile-summary-heading">
            <div>
              <h2>سامانه ماه</h2>
              <p>سامانه هوشمند مدیریت و شتابدهی طرح‌های فناورانه خلاق</p>
            </div>
            <span>حساب تأیید شده</span>
          </div>
          <dl className="startup-profile-summary-grid">
            {summaryItems.map(([label, value]) => (
              <div key={label}><dt>{label}</dt><dd>{value}</dd></div>
            ))}
          </dl>
        </section>

        <div className="startup-profile-two-column">
          <section className="startup-profile-card" data-name="startup-basic-info">
            <h2>اطلاعات پایه استارتاپ</h2>
            <dl className="startup-profile-info-grid">
              {basicInfo.map(([label, value]) => (
                <div key={label}><dt>{label}</dt><dd>{value}</dd></div>
              ))}
            </dl>
            <p className="startup-profile-card-note">اطلاعات این بخش از درخواست ثبت‌نام تأییدشده نمایش داده می‌شود.</p>
          </section>

          <section className="startup-profile-card" data-name="primary-representative">
            <h2>نماینده اصلی</h2>
            <dl className="startup-profile-info-grid">
              {representativeInfo.map(([label, value]) => (
                <div key={label}><dt>{label}</dt><dd>{value}</dd></div>
              ))}
            </dl>
            <p className="startup-profile-card-note">نماینده اصلی، مدیر حساب استارتاپ در سامانه ماه است.</p>
          </section>
        </div>

        <section className="startup-profile-card startup-profile-product" data-name="product-and-team">
          <h2>محصول و تیم</h2>
          <dl className="startup-profile-product-grid">
            {productInfo.map(([label, value]) => (
              <div key={label}><dt>{label}</dt><dd>{value}</dd></div>
            ))}
          </dl>
          <div className="startup-profile-team-line">
            <span>اعضای اصلی تیم</span>
            <strong>علی علوی — هم‌بنیان‌گذار و مدیر فنی (تمام‌وقت) &nbsp;&nbsp; | &nbsp;&nbsp; سارا حسینی — مدیر محصول و طراح تجربه کاربری (پاره‌وقت)</strong>
          </div>
        </section>

        <div className="startup-profile-two-column is-bottom">
          <section className="startup-profile-card startup-profile-impact" data-name="social-impact">
            <h2>حوزه اثر اجتماعی</h2>
            <dl className="startup-profile-info-grid compact">
              {impactInfo.map(([label, value]) => (
                <div key={label}><dt>{label}</dt><dd>{value}</dd></div>
              ))}
            </dl>
          </section>

          <section className="startup-profile-card startup-profile-documents" data-name="startup-documents">
            <h2>مدارک استارتاپ</h2>
            <div className="startup-profile-document-row"><strong>آگهی_تاسیس_سامانه_ماه.pdf</strong><span>۳.۴ مگابایت</span></div>
            <div className="startup-profile-document-row"><strong>کارت_ملی_نماینده_رسمی.jpg</strong><span>۱.۲ مگابایت</span></div>
          </section>
        </div>
      </main>
    </div>
  );
}
