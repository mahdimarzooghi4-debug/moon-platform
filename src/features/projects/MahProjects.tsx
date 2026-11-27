import {getPublicLandingKpis,type PublicLandingKpis} from "../../impact/api";
import React, { useState } from "react";
import {PublicProjectResults} from "./PublicProjectCatalog";
import { Link } from "react-router-dom";
import "./index.css";

const icon = (name: string) => `/assets/codia/projects-${name}.svg`;

function Header() {
  return (
    <header className="flex w-full items-center justify-between border-b border-[#e4ebf1] bg-white px-[120px] py-[16px]" dir="ltr">
      <div className="flex w-[384px] items-center gap-[12px]">
        <Link to="/auth" className="flex h-[44px] w-[120px] items-center justify-center rounded-[12px] border-[1.5px] border-[#2094e3] bg-white text-[14px] font-medium text-[#2094e3] no-underline" dir="rtl">ورود کاربران</Link>
        <Link to="/participation/track" className="flex h-[44px] w-[120px] items-center justify-center rounded-[12px] border-[1.5px] border-[#2094e3] bg-white text-[14px] font-medium text-[#2094e3] no-underline" dir="rtl">پیگیری مشارکت</Link>
        <a href="#projects-grid" className="flex h-[44px] w-[120px] items-center justify-center rounded-[12px] bg-[#2094e3] text-[14px] font-medium text-white no-underline" dir="rtl">شروع مشارکت</a>
      </div>
      <div className="flex items-center gap-[40px]">
        <nav className="flex items-center gap-[24px] text-[14px] font-medium" dir="ltr">
          <Link to="/about" className="text-[#17324d] no-underline" dir="rtl">درباره ما</Link>
          <Link to="/contact" className="text-[#17324d] no-underline" dir="rtl">تماس با ما</Link>
          <Link to="/companies" className="text-[#17324d] no-underline" dir="rtl">شرکت‌ها</Link>
          <Link to="/startups" className="text-[#17324d] no-underline" dir="rtl">استارتاپ‌ها</Link>
          <Link to="/projects" className="text-[#2094e3] no-underline" dir="rtl">پروژه‌ها</Link>
          <Link to="/" className="text-[#17324d] no-underline" dir="rtl">صفحه اصلی</Link>
        </nav>
        <Link to="/" aria-label="صفحه اصلی" className="block h-[46px] w-[137px] bg-[url('/assets/codia/4T7A4AiY30.png')] bg-cover bg-no-repeat" />
      </div>
    </header>
  );
}

function InternalHero() {
  const [kpis,setKpis]=useState<PublicLandingKpis|null>(null);
  React.useEffect(()=>{let active=true;getPublicLandingKpis().then(x=>{if(active)setKpis(x)}).catch(()=>undefined);return()=>{active=false}},[]);
  const fmt=(n:number|undefined)=>n===undefined?"—":new Intl.NumberFormat("fa-IR").format(n);
  const stats = [
    [fmt(kpis?.activeProjectCount), "پروژه فعال"],
    [fmt(kpis?.beneficiaryCount), "فرد بهره‌مند"],
    [fmt(kpis?.jobsCreated), "فرصت شغلی"],
  ];
  return (
    <section className="flex w-full flex-col items-end gap-[20px] border-b border-[#e4ebf1] bg-[#fcfbf8] px-[120px] py-[48px]">
      <div className="flex w-full justify-end"><p className="text-[12px] font-normal text-[#60758a]" dir="rtl">صفحه اصلی / پروژه‌ها</p></div>
      <div className="flex w-full items-center justify-between" dir="ltr">
        <div className="flex items-center gap-[24px]">
          {stats.map(([value, label], index) => (
            <React.Fragment key={label}>
              <div className="flex flex-col items-center gap-[4px] whitespace-nowrap" dir="rtl">
                <p className="text-[20px] font-bold text-[#17324d]">{value}</p>
                <p className="text-[12px] font-normal text-[#60758a]">{label}</p>
              </div>
              {index < stats.length - 1 && <div className="h-[40px] w-px bg-[#e4ebf1]" />}
            </React.Fragment>
          ))}
        </div>
        <div className="flex flex-col items-end gap-[8px] text-right" dir="rtl">
          <h1 className="text-[32px] font-extrabold leading-normal text-[#17324d]">پروژه‌های دارای اثر اجتماعی</h1>
          <p className="text-[15px] font-normal text-[#60758a]">پروژه‌ای را انتخاب کنید که اثر آن از قبل مشخص، تأیید و قابل‌اندازه‌گیری است.</p>
        </div>
      </div>
    </section>
  );
}

function TrustBar() {
  const items = [
    { text: "نتایج پروژه قابل پیگیری و گزارش‌گیری است", icon: icon("chart-column") },
    { text: "پرداخت مستقیم به حساب کمیته امداد", icon: icon("credit-card") },
    { text: "اثر پروژه توسط خانه خلاق و نوآوری آینه تأیید شده است", icon: icon("shield-check") },
  ];
  return (
    <section className="flex w-full items-center justify-between border-b border-[#e4ebf1] bg-[#eaf5fd] px-[120px] py-[20px]" dir="ltr">
      {items.map((item) => (
        <div key={item.text} className="flex items-center gap-[8px]" dir="ltr">
          <p className="whitespace-nowrap text-right text-[13px] font-medium text-[#2094e3]" dir="rtl">{item.text}</p>
          <img src={item.icon} alt="" className="h-[16px] w-[16px]" />
        </div>
      ))}
    </section>
  );
}

function FinalCta() {
  return (
    <section className="flex w-full flex-col items-center gap-[24px] border-y border-[#e4ebf1] bg-[#fcfbf8] px-[120px] py-[80px]" dir="rtl">
      <h2 className="text-center text-[32px] font-extrabold text-[#17324d]">پروژه مناسب خود را پیدا نکردید؟</h2>
      <p className="text-center text-[14px] font-normal text-[#60758a]">با مشاهده همه حوزه‌های اثر یا تماس با تیم ماه، مسیر مشارکت مناسب را پیدا کنید.</p>
      <div className="flex items-start gap-[16px]" dir="ltr">
        <Link to="/contact" className="flex min-h-[44px] items-center justify-center rounded-[12px] border border-[#e4ebf1] bg-white px-[20px] py-[11px] text-[14px] font-medium text-[#2094e3] no-underline">تماس با ما</Link>
        <a href="#projects-grid" className="flex min-h-[44px] items-center justify-center rounded-[12px] bg-[#2094e3] px-[20px] py-[11px] text-[14px] font-medium text-white no-underline">شروع مشارکت</a>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="flex w-full flex-col items-start gap-[64px] bg-[#111e30] px-[120px] pb-[40px] pt-[80px] text-[#e4ebf1]" dir="ltr">
      <div className="flex w-full items-start gap-[48px]">
        <div className="flex h-[182px] w-[220px] flex-col items-end gap-[12px] text-right" dir="rtl">
          <strong className="text-[14px] font-bold text-white">ارتباط با ما</strong>
          <p className="text-[13px] font-normal"><span>تلفن: </span><bdi dir="ltr">۰۲۱-۶۶۴۸۵۳۷۴</bdi></p>
          <a href="mailto:info@mahcsr.ir" className="text-[13px] font-normal text-[#e4ebf1] no-underline">ایمیل: info@mahcsr.ir</a>
          <div className="flex items-center gap-[12px] pt-[8px]" dir="ltr">
            <img src={icon("telegram")} alt="Telegram" className="h-[18px] w-[18px]" />
            <img src={icon("eitaa")} alt="Eitaa" className="h-[18px] w-[18px]" />
          </div>
        </div>
        <div className="flex h-[182px] w-[150px] flex-col items-end gap-[12px] text-right" dir="rtl">
          <strong className="text-[14px] font-bold text-white">حقوقی</strong>
          <Link to="/terms" className="text-[13px] text-[#e4ebf1] no-underline">قوانین و مقررات</Link>
          <Link to="/privacy-policy" className="text-[13px] text-[#e4ebf1] no-underline">حریم خصوصی</Link>
        </div>
        <div className="flex h-[182px] w-[160px] flex-col items-end gap-[12px] text-right" dir="rtl">
          <strong className="text-[14px] font-bold text-white">پشتیبانی</strong>
          <Link to="/contact" className="text-[13px] text-[#e4ebf1] no-underline">تماس با ما</Link>
          <Link to="/faq" className="text-[13px] text-[#e4ebf1] no-underline">سؤالات متداول</Link>
          <Link to="/participation/track" className="text-[13px] text-[#e4ebf1] no-underline">پیگیری مشارکت</Link>
        </div>
        <div className="flex w-[180px] flex-col items-end gap-[12px] text-right" dir="rtl">
          <strong className="text-[14px] font-bold text-white">دسترسی سریع</strong>
          <Link to="/projects" className="text-[13px] text-[#e4ebf1] no-underline">پروژه‌ها</Link>
          <Link to="/companies" className="text-[13px] text-[#e4ebf1] no-underline">برای شرکت‌ها</Link>
          <Link to="/how-it-works" className="text-[13px] text-[#e4ebf1] no-underline">نحوه مشارکت</Link>
          <Link to="/register/startup" className="text-[13px] text-[#e4ebf1] no-underline">ثبت‌نام استارتاپ</Link>
          <Link to="/news" className="text-[13px] text-[#e4ebf1] no-underline">اخبار و رویدادها</Link>
        </div>
        <div className="flex h-[182px] w-[298px] flex-col items-end gap-[14px] text-right" dir="rtl">
          <Link to="/" className="block h-[70px] w-[210px] bg-[url('/assets/codia/4T7A4AiY30.png')] bg-cover bg-no-repeat" aria-label="سامانه ماه" />
          <p className="w-full text-[13px] font-normal leading-[22px] text-[#e4ebf1]">سامانه مشارکت در پروژه‌های دارای اثر اجتماعی با مسیر مالی شفاف و اثر قابل‌اندازه‌گیری.</p>
        </div>
      </div>
      <div className="flex w-full flex-col items-center gap-[4px] border-t border-[rgba(255,255,255,0.12)] pt-[20px] text-center text-[12px] font-normal text-[#e4ebf1]" dir="rtl">
        <p>طراحی و توسعه با هدف ارتقای عدالت اجتماعی</p>
        <p>تمامی حقوق برای سامانه ماه محفوظ است.</p>
      </div>
    </footer>
  );
}

export default function MahProjects() {
  return (
    <main className="mah-projects-page mx-auto flex w-[1440px] flex-col items-center overflow-hidden bg-[#fcfbf8]" dir="ltr">
      <Header />
      <InternalHero />
      <TrustBar />
      <PublicProjectResults />
      <FinalCta />
      <Footer />
    </main>
  );
}
