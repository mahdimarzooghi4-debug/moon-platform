import {useEffect,useState} from "react";
import {listPublicNews,publicNewsImageUrl,type AdminManagedNews} from "../features/admin-panel/management-api";
import PublicSiteHeader from "../shared/PublicSiteHeader";
import "./live-news.css";
export const faNumber=new Intl.NumberFormat("fa-IR");
export const faDate=new Intl.DateTimeFormat("fa-IR",{year:"numeric",month:"long",day:"numeric"});
export const faYear=new Intl.DateTimeFormat("fa-IR",{year:"numeric"});
export const newsHref=(id:string)=>"/news/"+encodeURIComponent(id);
export function usePublishedNews(){
 const [items,setItems]=useState<AdminManagedNews[]|null>(null),[failed,setFailed]=useState(false);
 useEffect(()=>{let active=true;listPublicNews().then(x=>{if(active)setItems(x.filter(n=>n.status==="published"))}).catch(()=>{if(active)setFailed(true)});return()=>{active=false}},[]);
 return {items,failed};
}
export function NewsFrame({children}:{children:React.ReactNode}){return <div className="main-container mah-live-news" dir="rtl"><PublicSiteHeader/>{children}</div>}
export function NewsImage({item}:{item:AdminManagedNews}){return <div className="mah-live-news-image"><img src={publicNewsImageUrl(item.id)} alt="" loading="lazy" onError={e=>{e.currentTarget.hidden=true}}/></div>}
export function NewsCard({item}:{item:AdminManagedNews}){return <article className="mah-live-news-card"><NewsImage item={item}/><small>آخرین به‌روزرسانی: {faDate.format(new Date(item.updatedAtUtc))}</small><h3>{item.title}</h3><p>{item.summary}</p><a href={newsHref(item.id)}>مطالعه خبر ←</a></article>}
export function NewsStatus({failed,loading,empty}:{failed:boolean;loading:boolean;empty:string}){return <p role={failed?"alert":"status"} className="mah-live-news-state">{failed?"دریافت اطلاعات از سرور انجام نشد. دوباره تلاش کنید.":loading?"در حال دریافت اطلاعات…":empty}</p>}
