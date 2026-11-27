import {useState} from "react";
import {useParams} from "react-router-dom";
import {NewsFrame,NewsImage,NewsStatus,usePublishedNews,faDate} from "../news-list/live-news";
export default function LiveNewsDetails(){
 const {newsId}=useParams();const {items,failed}=usePublishedNews();const item=items?.find(x=>x.id===newsId);const [message,setMessage]=useState("");
 async function share(){try{if(navigator.share){await navigator.share({title:item?.title,url:window.location.href});return}await navigator.clipboard.writeText(window.location.href);setMessage("لینک خبر کپی شد.")}catch{setMessage("اشتراک‌گذاری انجام نشد.")}}
 return <NewsFrame><section className="mah-live-news-wrap"><nav aria-label="مسیر صفحه"><a href="/">صفحه اصلی</a> / <a href="/news">اخبار</a>{item?" / "+item.title:""}</nav>{item?<article className="mah-live-news-article"><h1>{item.title}</h1><p>{item.summary}</p><small>آخرین به‌روزرسانی: {faDate.format(new Date(item.updatedAtUtc))}</small><div className="mah-live-news-actions"><button type="button" onClick={share}>اشتراک‌گذاری</button><a href="/contact">گزارش مشکل</a></div><p role="status">{message}</p><NewsImage key={item.id} item={item}/></article>:<NewsStatus failed={failed} loading={items===null} empty="خبر موردنظر منتشر نشده یا در دسترس نیست."/>}</section><section className="mah-live-news-cta"><h2>آخرین اخبار اثر اجتماعی را دنبال کنید</h2><a href="/news" className="mah-live-news-primary">مشاهده همه اخبار</a></section></NewsFrame>
}
