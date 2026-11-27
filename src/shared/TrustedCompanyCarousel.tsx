import {useEffect,useRef,useState} from "react";
import {listPublicTrustedCompanies,publicTrustedCompanyLogoUrl,type PublicTrustedCompany} from "../features/admin-panel/management-api";
import "./public-corrections.css";
export default function TrustedCompanyCarousel(){
 const [items,setItems]=useState<PublicTrustedCompany[]|null>(null);const [failed,setFailed]=useState(false);const track=useRef<HTMLUListElement>(null);
 useEffect(()=>{let active=true;listPublicTrustedCompanies().then(x=>{if(active)setItems(x)}).catch(()=>{if(active)setFailed(true)});return()=>{active=false}},[]);
 if(!items?.length)return <p role="status" className="w-full text-center text-sm text-[#60758a]">{failed?"فهرست همراهان در دسترس نیست.":items?"هنوز شرکتی برای نمایش منتشر نشده است.":"در حال دریافت همراهان سازمانی…"}</p>;
 const move=(direction:number)=>track.current?.scrollBy({left:direction*190,behavior:window.matchMedia("(prefers-reduced-motion: reduce)").matches?"auto":"smooth"});
 return <div className="mah-trusted-carousel"><button className="mah-trusted-carousel-arrow" type="button" aria-label="حرکت به چپ" onClick={()=>move(-1)}>‹</button><ul ref={track} dir="rtl" className="mah-trusted-carousel-track" aria-label="همراهان سازمانی" tabIndex={0}>{items.map(x=><li key={x.id} className="mah-trusted-carousel-tile">{x.hasLogo&&<img src={publicTrustedCompanyLogoUrl(x.id)} alt="" loading="lazy"/>}<span>{x.name}</span></li>)}</ul><button type="button" className="mah-trusted-carousel-arrow" aria-label="حرکت به راست" onClick={()=>move(1)}>›</button></div>;
}
