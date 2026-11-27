import {useEffect,useState} from "react";
import {useParams} from "react-router-dom";
import PublicSiteHeader from "../../shared/PublicSiteHeader";
import {fetchPublicProject,type PublicProject} from "./public-api";
import {FundingView} from "./PublicProjectCatalog";
export default function PublicProjectDetail(){const {projectId}=useParams();const [item,setItem]=useState<PublicProject|null|undefined>(undefined),[failed,setFailed]=useState(false);
 useEffect(()=>{const c=new AbortController();setItem(undefined);setFailed(false);if(!projectId){setItem(null);return}fetchPublicProject(projectId,c.signal).then(setItem).catch(()=>{if(!c.signal.aborted)setFailed(true)});return()=>c.abort()},[projectId]);
 return <div className="main-container mah-live-project-detail" dir="rtl"><PublicSiteHeader/><section className="mah-public-project-results"><nav><a href="/">صفحه اصلی</a> / <a href="/projects">پروژه‌ها</a>{item?" / "+item.title:""}</nav>{item?<article className="mah-public-project-card"><h1>{item.title}</h1><p>استارتاپ: {item.startup}</p><p>وضعیت: {item.isClosed?"خاتمه‌یافته":"فعال"}</p>{item.impactArea&&<p>حوزه اثر: {item.impactArea}</p>}{item.region&&<p>منطقه اجرا: {item.region}</p>}{item.targetGroup&&<p>جامعه هدف: {item.targetGroup}</p>}<p className="mah-project-description">{item.description}</p><FundingView project={item}/><a href="/impact-reports">مشاهده گزارش‌های منتشرشده اثر</a>{!item.isClosed&&<p>برای مشارکت سازمانی وارد حساب سازمانی خود شوید. پرداخت آنلاین هنوز فعال نشده است.</p>}{!item.isClosed&&<a className="mah-public-project-primary" href="/auth">ورود کاربران</a>}</article>:<p role={failed?"alert":"status"}>{failed?"دریافت اطلاعات پروژه انجام نشد.":item===null?"پروژه موردنظر منتشر نشده یا در دسترس نیست.":"در حال دریافت پروژه…"}</p>}</section></div>
}
