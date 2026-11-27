import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { getValidSession, toPersianLoginDigits } from "../../../auth/oidc";
import { AdminSidebar } from "../components/AdminSidebar";
import "../index.css";

const path = (import.meta.env.VITE_API_BASE_URL ?? "").replace(/\/$/, "") + "/api/v1/admin/company-applications";
type Summary = { id: string; name: string; trackingCode: string; status: string; submittedAtUtc: string };
type Detail = Summary & Record<string,string|null>;
const labels: Record<string,string> = {
 name:"نام شرکت",nationalIdentifier:"شناسه ملی",registrationNumber:"شماره ثبت",legalForm:"نوع شخصیت حقوقی",
 registrationDate:"تاریخ ثبت",activityField:"حوزه فعالیت",website:"وب‌سایت",province:"استان",city:"شهر",address:"نشانی",postalCode:"کد پستی",
 representativeFirstName:"نام نماینده",representativeLastName:"نام خانوادگی نماینده",representativeNationalId:"کد ملی نماینده",
 representativePosition:"سمت",mobile:"موبایل",email:"ایمیل",telephone:"تلفن",economicCode:"کد اقتصادی",
 taxIdentifier:"شناسه مالیاتی",taxFileStatus:"وضعیت پرونده مالیاتی",taxOffice:"اداره مالیاتی",notes:"توضیحات",trackingCode:"کد پیگیری"
};
const numeric = new Set(["nationalIdentifier","registrationNumber","registrationDate","postalCode","representativeNationalId","mobile","telephone","economicCode","taxIdentifier","trackingCode"]);
const docs = { representativeLetter:"معرفی‌نامه نماینده",establishmentNotice:"آگهی تأسیس",articlesOfAssociation:"اساسنامه",latestChangesNotice:"آخرین آگهی تغییرات" };
async function request(suffix:string, signal?:AbortSignal) {
 const session=await getValidSession();
 if(!session) throw new Error("ابتدا وارد حساب مجاز شوید.");
 const res=await fetch(path+suffix,{headers:{Authorization:"Bearer "+session.accessToken},cache:"no-store",signal});
 if(!res.ok) throw new Error(res.status===403?"دسترسی بررسی پرونده شرکت‌ها فعال یا مجاز نیست.":"دریافت اطلاعات انجام نشد.");
 return res;
}
export default function CompanyApplications() {
 const [items,setItems]=useState<Summary[]>([]);
 const [detail,setDetail]=useState<Detail|null>(null);
 const [selected,setSelected]=useState("");
 const [page,setPage]=useState(1);
 const [loading,setLoading]=useState(true);
 const [error,setError]=useState("");
 const [busy,setBusy]=useState(false);
 const [confirmed,setConfirmed]=useState(false);
 const approvalLock=useRef(false);
 useEffect(()=>setConfirmed(false),[selected]);
 useEffect(()=>{
   const controller=new AbortController();
   setItems([]);setDetail(null);setSelected("");setLoading(true);setError("");
   request("?page="+page,controller.signal).then(r=>r.json()).then(data=>{if(!controller.signal.aborted)setItems(data);})
     .catch(e=>{if(!controller.signal.aborted)setError(e.message);}).finally(()=>{if(!controller.signal.aborted)setLoading(false);});
   return()=>controller.abort();
 },[page]);
 useEffect(()=>{
   if(!selected)return;
   const controller=new AbortController();setDetail(null);setError("");
   request("/"+encodeURIComponent(selected),controller.signal).then(r=>r.json()).then(data=>{if(!controller.signal.aborted)setDetail(data);})
      .catch(e=>{if(!controller.signal.aborted)setError(e.message);});
   return()=>controller.abort();
 },[selected]);
 async function approve(){
   if(!detail||busy||!confirmed||approvalLock.current)return;
   const id=detail.id; approvalLock.current=true;setBusy(true);setError("");
   try {
     const session=await getValidSession();
     if(!session)throw new Error("ابتدا وارد حساب مجاز شوید.");
     const response=await fetch(path+"/"+encodeURIComponent(id)+"/approve",{method:"POST",headers:{Authorization:"Bearer "+session.accessToken,"Content-Type":"application/json"},body:JSON.stringify({confirmReview:true})});
     const refreshed=await request("/"+encodeURIComponent(id)).then(r=>r.json()) as Detail;
     setDetail(current=>current?.id===id?refreshed:current);
     setItems(old=>old.map(item=>item.id===id?{...item,status:refreshed.status}:item));
     if(!response.ok)throw new Error(response.status===403?"اختیار فعال‌سازی یا تنظیمات انتشار مجاز نیست.":response.status===409?"تعارض هویت یا فعال‌سازی؛ نیازمند بررسی مدیر سامانه.":"فعال‌سازی تأیید نشد. وضعیت پرونده را دوباره بررسی کنید.");
     if(refreshed.status!=="approved")throw new Error("فعال‌سازی هنوز تأیید نشده است.");
   }catch(e){setError(e instanceof Error?e.message:"فعال‌سازی تأیید نشد.");}
   finally{approvalLock.current=false;setBusy(false);setConfirmed(false);}
 }
 async function download(kind:string){
   if(!detail||busy)return;setBusy(true);setError("");
   try {
     const res=await request("/"+encodeURIComponent(detail.id)+"/documents/"+encodeURIComponent(kind));
     const name=res.headers.get("Content-Disposition")?.match(/filename="?([a-zA-Z0-9.]+)"?/)?.[1]??kind;
     const url=URL.createObjectURL(await res.blob());const anchor=document.createElement("a");
     anchor.href=url;anchor.download=name;anchor.click();setTimeout(()=>URL.revokeObjectURL(url),1000);
   } catch(e){setError(e instanceof Error?e.message:"دریافت مدرک انجام نشد.");}finally{setBusy(false);}
 }
 return <div dir="rtl" className="min-h-screen bg-[#f5f8fb]"><AdminSidebar active="organizations"/><main className="mx-auto max-w-5xl px-4 py-8 lg:mr-[250px]"><Link to="/panel/admin/organizations" className="text-sm text-[#1476b9]">بازگشت به سازمان‌ها</Link><h1 className="my-5 text-xl font-bold text-[#17324d]">درخواست‌های ثبت‌نام شرکت‌ها</h1><p className="mb-5 text-sm text-slate-600">بررسی پرونده و فعال‌سازی حساب فقط توسط مدیر سامانه ماه؛ این تأیید به معنی صدور گواهی ماده ۱۷۲ نیست.</p>
 {error&&<p role="alert" className="my-4 rounded-lg bg-red-50 p-3 text-red-700">{error}</p>}
 <section className="rounded-xl border bg-white p-5">{loading?<p role="status">در حال دریافت...</p>:!items.length?<p>{error?"فهرست در دسترس نیست.":"در این صفحه پرونده‌ای وجود ندارد."}</p>:<div className="grid gap-3">{items.map(item=><button key={item.id} type="button" disabled={busy} onClick={()=>setSelected(item.id)} className="flex flex-wrap justify-between gap-3 rounded-lg border p-4 text-right"><strong>{item.name}</strong><bdi>{toPersianLoginDigits(item.trackingCode)}</bdi><span>{item.status==="pending_review"?"در انتظار بررسی":item.status}</span><span className="text-[#1476b9]">مشاهده پرونده</span></button>)}</div>}
 <div className="mt-4 flex gap-4"><button disabled={page===1||loading||busy} onClick={()=>setPage(x=>x-1)}>صفحه قبل</button><span>{toPersianLoginDigits(String(page))}</span><button disabled={loading||busy||items.length<50} onClick={()=>setPage(x=>x+1)}>صفحه بعد</button></div></section>
 {selected&&!detail&&!error&&<p role="status" className="mt-4">در حال دریافت پرونده...</p>}
 {detail&&<section className="mt-5 rounded-xl border bg-white p-5"><div className="flex justify-between"><h2 className="font-bold">{detail.name}</h2><button disabled={busy} onClick={()=>{setSelected("");setDetail(null);}}>بستن پرونده</button></div><dl className="my-5 grid gap-4 sm:grid-cols-2">{Object.entries(labels).map(([key,label])=><div key={key} className="min-w-0"><dt className="text-xs text-slate-500">{label}</dt><dd className="break-words">{numeric.has(key)?toPersianLoginDigits(detail[key]??"—"):detail[key]||"—"}</dd></div>)}</dl><h3 className="font-bold">مدارک ثبت‌شده</h3><div className="mt-3 grid gap-3 sm:grid-cols-2">{Object.entries(docs).map(([key,label])=><button key={key} disabled={busy} onClick={()=>void download(key)} className="rounded-lg border p-3 text-[#1476b9]">دریافت {label}</button>)}</div>{(detail.status==="pending_review"||detail.status==="pending_activation")&&<div className="mt-6 border-t pt-4"><label className="flex items-start gap-2 text-sm"><input type="checkbox" disabled={busy} checked={confirmed} onChange={e=>setConfirmed(e.target.checked)}/>بررسی اطلاعات و مدارک انجام شده و فعال‌سازی حساب سازمانی را تأیید می‌کنم.</label><button type="button" disabled={busy||!confirmed} onClick={()=>void approve()} className="mt-3 rounded-xl bg-[#1476b9] px-5 py-3 text-white disabled:opacity-50">{detail.status==="pending_activation"?"تکمیل فعال‌سازی":"تأیید و فعال‌سازی حساب"}</button></div>}{detail.status==="approved"&&<p role="status" className="mt-4 text-green-700">حساب سازمانی فعال شده است.</p>}</section>}
 </main></div>;
}
