import { useEffect, useRef } from "react";

const links = [
  ["/", "صفحه اصلی"],
  ["/projects", "پروژه‌ها"],
  ["/startups", "استارتاپ‌ها"],
  ["/companies", "شرکت‌ها"],
  ["/contact", "تماس با ما"],
  ["/about", "درباره ما"],
] as const;

const supported = new Set(["/", "/startups", "/for-startups", "/companies", "/for-companies", "/about", "/projects", "/projects/variants/rural-women", "/contact", "/contact-support", "/news", "/faq", "/privacy-policy", "/terms"]);
const isLiveDetail = (path: string) => /^\/(projects|news)\/[^/]+$/.test(path);

export default function MobilePublicHeader({ pathname }: { pathname: string }) {
  const details = useRef<HTMLDetailsElement>(null);
  const path = pathname.replace(/\/+$/, "") || "/";
  useEffect(() => {
    if (details.current) details.current.open = false;
  }, [path]);
  if (!supported.has(path) && !isLiveDetail(path)) return null;
  const active = path === "/contact-support" ? "/contact" : path.startsWith("/projects/") ? "/projects" : path.replace(/^\/for-/, "/");
  return (
    <header className="mah-mobile-public-header" dir="rtl" aria-label="سربرگ موبایل ماه">
      <div className="mah-mobile-header-top">
        <a href="/" aria-label="سامانه ماه، صفحه اصلی"><img src="/assets/codia/4T7A4AiY30.png" alt="ماه" width="137" height="46" /></a>
        <details ref={details} className="mah-mobile-menu" onKeyDown={event => {
          if (event.key === "Escape" && details.current?.open) {
            details.current.open = false;
            details.current.querySelector("summary")?.focus();
          }
        }}>
          <summary aria-label="منوی اصلی">
            <svg aria-hidden="true" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M4 6h16M4 12h16M4 18h16" /></svg>
            <span>منو</span>
          </summary>
          <nav aria-label="ناوبری موبایل">
            {links.map(([href, label]) => <a key={href} href={href} aria-current={active === href ? "page" : undefined}>{label}</a>)}
          </nav>
        </details>
      </div>
      <div className="mah-mobile-header-actions">
        <a href="/auth">ورود کاربران</a>
        <a href="/projects">شروع مشارکت</a>
      </div>
    </header>
  );
}
