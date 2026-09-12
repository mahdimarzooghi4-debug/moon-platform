import React, { useEffect, useState } from "react";
import "./PublicFooter.css";

const HIDDEN_PREFIXES = ["/panel/", "/auth"];

function usePathname() {
  const [pathname, setPathname] = useState(() => window.location.pathname);

  useEffect(() => {
    const sync = () => setPathname(window.location.pathname);
    const onClick = () => window.setTimeout(sync, 0);

    window.addEventListener("popstate", sync);
    window.addEventListener("hashchange", sync);
    window.addEventListener("click", onClick);
    const timer = window.setInterval(sync, 750);

    return () => {
      window.removeEventListener("popstate", sync);
      window.removeEventListener("hashchange", sync);
      window.removeEventListener("click", onClick);
      window.clearInterval(timer);
    };
  }, []);

  return pathname;
}

function shouldShowFooter(pathname: string) {
  if (pathname.includes("/print")) return false;
  return !HIDDEN_PREFIXES.some((prefix) => pathname === prefix || pathname.startsWith(prefix));
}

const FooterLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <a className="moon-footer-link" href={href}>{children}</a>
);

export default function PublicFooter() {
  const pathname = usePathname();
  const visible = shouldShowFooter(pathname);

  useEffect(() => {
    document.documentElement.classList.toggle("moon-public-footer-active", visible);
    return () => document.documentElement.classList.remove("moon-public-footer-active");
  }, [visible]);

  if (!visible) return null;

  return (
    <footer className="moon-shared-footer" dir="rtl">
      <div className="moon-shared-footer__inner">
        <div className="moon-shared-footer__grid">
          <section className="moon-footer-brand">
            <img className="moon-footer-logo" src="/assets/codia/2u7HsAp67E.png" alt="سامانه ماه" />
            <p>سامانه مشارکت در پروژه‌های اثر اجتماعی با مسیر مالی شفاف و اثر قابل‌اندازه‌گیری.</p>
          </section>

          <nav className="moon-footer-column" aria-label="دسترسی سریع">
            <strong>دسترسی سریع</strong>
            <FooterLink href="/projects">پروژه‌ها</FooterLink>
            <FooterLink href="/companies">برای شرکت‌ها</FooterLink>
            <FooterLink href="/how-it-works">نحوه مشارکت</FooterLink>
            <FooterLink href="/register/startup">ثبت‌نام استارتاپ</FooterLink>
            <FooterLink href="/news">اخبار و رویدادها</FooterLink>
          </nav>

          <nav className="moon-footer-column" aria-label="پشتیبانی">
            <strong>پشتیبانی</strong>
            <FooterLink href="/contact">تماس با ما</FooterLink>
            <FooterLink href="/faq">سؤالات متداول</FooterLink>
            <FooterLink href="/participation/track">پیگیری مشارکت</FooterLink>
          </nav>

          <nav className="moon-footer-column" aria-label="حقوقی">
            <strong>حقوقی</strong>
            <FooterLink href="/terms">قوانین و مقررات</FooterLink>
            <FooterLink href="/privacy-policy">حریم خصوصی</FooterLink>
          </nav>

          <section className="moon-footer-contact">
            <strong>ارتباط با ما</strong>
            <div className="moon-footer-contact-row">
              <span>تلفن:</span>
              <bdi dir="ltr">۰۲۱-۶۶۴۸۵۳۷۴</bdi>
            </div>
            <div className="moon-footer-contact-row">
              <span>ایمیل:</span>
              <bdi dir="ltr">info@mahcsr.ir</bdi>
            </div>
            <p className="moon-footer-address">آدرس: تهران، خیابان انقلاب، خیابان رازی، کوچه شهبازیان، پلاک ۲۲</p>
            <div className="moon-footer-socials" aria-label="شبکه‌های اجتماعی">
              <img src="/assets/startups/icons/instagram.svg" alt="اینستاگرام" />
              <img src="/assets/startups/icons/linkedin.svg" alt="لینکدین" />
            </div>
          </section>
        </div>

        <div className="moon-footer-bottom">
          <span>طراحی و توسعه با هدف ارتقای عدالت اجتماعی</span>
          <span>تمامی حقوق برای سامانه ماه محفوظ است.</span>
        </div>
      </div>
    </footer>
  );
}
