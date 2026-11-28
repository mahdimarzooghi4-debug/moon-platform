import { useEffect, useRef, useState } from "react";
import { listPublicTrustedCompanies, publicTrustedCompanyLogoUrl, type PublicTrustedCompany } from "../features/admin-panel/management-api";
import "./public-corrections.css";

function CompanyTile({ company }: { company: PublicTrustedCompany }) {
  const [failed, setFailed] = useState(false);
  return (
    <li className="mah-trusted-carousel-tile">
      {company.hasLogo && !failed
        ? <img src={publicTrustedCompanyLogoUrl(company.id)} alt={company.name} loading="lazy" onError={() => setFailed(true)} />
        : <span>{company.name}</span>}
    </li>
  );
}

function Chevron({ direction }: { direction: "left" | "right" }) {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">
      <path d={direction === "left" ? "M15 6l-6 6 6 6" : "M9 6l6 6-6 6"} />
    </svg>
  );
}

export default function TrustedCompanyCarousel() {
  const [items, setItems] = useState<PublicTrustedCompany[] | null>(null);
  const [failed, setFailed] = useState(false);
  const track = useRef<HTMLUListElement>(null);

  useEffect(() => {
    let active = true;
    listPublicTrustedCompanies().then(x => { if (active) setItems(x); }).catch(() => { if (active) setFailed(true); });
    return () => { active = false; };
  }, []);

  if (!items?.length) return <p role="status" className="w-full text-center text-sm text-[#60758a]">{failed ? "فهرست همراهان در دسترس نیست." : items ? "هنوز شرکتی برای نمایش منتشر نشده است." : "در حال دریافت همراهان سازمانی…"}</p>;

  const move = (direction: number) => track.current?.scrollBy({
    left: direction * 190,
    behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth"
  });

  return (
    <div className="mah-trusted-carousel">
      <button className="mah-trusted-carousel-arrow" type="button" aria-label="حرکت به چپ" onClick={() => move(-1)}><Chevron direction="left" /></button>
      <ul ref={track} dir="rtl" className="mah-trusted-carousel-track" aria-label="همراهان سازمانی" tabIndex={0}>
        {items.map(x => <CompanyTile key={x.id} company={x} />)}
      </ul>
      <button className="mah-trusted-carousel-arrow" type="button" aria-label="حرکت به راست" onClick={() => move(1)}><Chevron direction="right" /></button>
    </div>
  );
}
