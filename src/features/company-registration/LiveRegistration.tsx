import { useEffect, useRef, useState, type FormEvent } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { localizePersianNumericInput, normalizeIranMobile, toPersianLoginDigits } from "../../auth/oidc";
import { confirmStartupMobile, sendStartupMobileCode } from "../startup-registration/api";
import RegistrationStepper from "../startup-registration/RegistrationStepper";
import CompanyRegistrationUnavailable from "./Unavailable";
import { companyAvailability, submitCompanyApplication } from "./liveApi";

type Field = { key: string; label: string; max: number; optional?: boolean; digits?: number; type?: "email" | "url" | "tel"; multiline?: boolean; numericText?: boolean };
const groups: readonly Field[][] = [
  [
    {key:"nationalIdentifier",label:"شناسه ملی شرکت",max:11,digits:11},
    {key:"name",label:"نام رسمی شرکت",max:200},
    {key:"registrationNumber",label:"شماره ثبت",max:40,numericText:true},
    {key:"legalForm",label:"نوع شخصیت حقوقی",max:100},
    {key:"registrationDate",label:"تاریخ ثبت",max:40,numericText:true},
    {key:"activityField",label:"حوزه فعالیت",max:200},
    {key:"website",label:"وب‌سایت شرکت",max:254,optional:true},
    {key:"province",label:"استان",max:100},
    {key:"city",label:"شهر",max:100},
    {key:"address",label:"نشانی دفتر مرکزی",max:1000,multiline:true},
    {key:"postalCode",label:"کد پستی",max:10,digits:10},
  ], [
    {key:"representativeFirstName",label:"نام نماینده",max:100},
    {key:"representativeLastName",label:"نام خانوادگی نماینده",max:100},
    {key:"representativeNationalId",label:"کد ملی نماینده",max:10,digits:10},
    {key:"representativePosition",label:"سمت سازمانی",max:120},
    {key:"mobile",label:"شماره موبایل نماینده",max:11,digits:11,type:"tel"},
    {key:"email",label:"ایمیل سازمانی",max:254,type:"email"},
    {key:"telephone",label:"تلفن ثابت با کد شهر",max:40,type:"tel",numericText:true,optional:true},
  ], [
    {key:"economicCode",label:"کد اقتصادی",max:50,numericText:true},
    {key:"taxIdentifier",label:"شناسه یا کد مالیاتی",max:50,numericText:true},
    {key:"taxFileStatus",label:"وضعیت پرونده مالیاتی",max:100},
    {key:"taxOfficeCode",label:"کد اداره امور مالیاتی",max:50,numericText:true},
    {key:"taxOffice",label:"نام اداره امور مالیاتی",max:200,optional:true},
    {key:"notes",label:"توضیحات تکمیلی",max:4000,optional:true,multiline:true},
  ],
];
const documents = [
  ["representativeLetter","معرفی‌نامه رسمی نماینده"],
  ["establishmentNotice","آگهی تأسیس"],
  ["articlesOfAssociation","اساسنامه"],
  ["latestChangesNotice","آخرین آگهی تغییرات"],
] as const;
const labels = ["اطلاعات شرکت","نماینده سازمان","اطلاعات مالیاتی و مدارک","بازبینی و ارسال"];
const maxFile = 10 * 1024 * 1024;
const fieldStyle = "w-full min-w-0 rounded-xl border border-slate-300 bg-white p-3 text-sm outline-none focus:border-[#2094e3]";
const primary = "rounded-xl bg-[#2094e3] px-5 py-3 text-sm font-semibold text-white disabled:opacity-50";
function latin(value: string) {
  return value.replace(/[۰-۹٠-٩]/g, digit => String(digit.charCodeAt(0) - (digit >= "۰" ? 1776 : 1632)));
}
function canonical(field: Field, value: string) {
  return field.digits || field.numericText ? latin(value.trim()) : value.trim();
}

export default function LiveRegistration() {
  const location = useLocation();
  const navigate = useNavigate();
  const [available,setAvailable] = useState<boolean|null>(null);
  const [step,setStep] = useState<1|2|3|4>(1);
  const [values,setValues] = useState<Record<string,string>>({});
  const [files,setFiles] = useState<Record<string,File>>({});
  const [destination,setDestination] = useState("");
  const [proof,setProof] = useState("");
  const [verifiedMobile,setVerifiedMobile] = useState("");
  const [otp,setOtp] = useState("");
  const [consent,setConsent] = useState([false,false,false]);
  const [busy,setBusy] = useState(false);
  const [error,setError] = useState("");
  const [copyStatus,setCopyStatus] = useState("");
  const lock = useRef(false);
  const success = location.pathname.endsWith("/states/success");
  const receipt = success ? sessionStorage.getItem("moon-company-tracking-code") : null;
  useEffect(() => {
    const controller = new AbortController();
    companyAvailability(controller.signal).then(setAvailable).catch(() => { if (!controller.signal.aborted) setAvailable(false); });
    return () => controller.abort();
  }, []);
  const mobile = normalizeIranMobile(values.mobile ?? "");
  const confirmed = !!proof && verifiedMobile === mobile;

  function update(field: Field, value: string) {
    setValues(old => ({...old,[field.key]:value}));
    if (field.key === "mobile" && normalizeIranMobile(value) !== verifiedMobile) {
      setProof(""); setVerifiedMobile(""); setDestination(""); setOtp("");
    }
    setError("");
  }
  function setFile(key: string, file?: File) {
    if (file && (file.size < 1 || file.size > maxFile || !/\.(pdf|png|jpe?g)$/i.test(file.name))) {
      setError("فایل PDF، JPG یا PNG با حجم مجاز انتخاب کنید."); return;
    }
    setFiles(old => { const next = {...old}; if (file) next[key] = file; else delete next[key]; return next; });
    setError("");
  }
  async function verifyMobile() {
    if (lock.current) return;
    if (!/^09[0-9]{9}$/.test(mobile)) { setError("شماره موبایل معتبر وارد کنید."); return; }
    lock.current = true; setBusy(true); setError("");
    try {
      if (!destination) {
        await sendStartupMobileCode(mobile); setDestination(mobile); setOtp("");
      } else {
        if (!/^[0-9]{6}$/.test(latin(otp))) throw new Error("کد تأیید شش رقمی را وارد کنید.");
        const token = await confirmStartupMobile(destination,latin(otp));
        setProof(token); setVerifiedMobile(destination); setDestination(""); setOtp("");
      }
    } catch (cause) { setError(cause instanceof Error ? cause.message : "تأیید موبایل انجام نشد."); }
    finally { lock.current = false; setBusy(false); }
  }
  function validate(index: number) {
    for (const field of groups[index]) {
      const value = canonical(field,values[field.key] ?? "");
      if ((!field.optional && !value) || value.length > field.max || (field.digits && !new RegExp("^[0-9]{"+field.digits+"}$").test(value)))
        return field.label + " را درست وارد کنید.";
    }
    if (index === 1 && (!confirmed || !files.representativeLetter)) return "شماره موبایل را تأیید و معرفی‌نامه نماینده را بارگذاری کنید.";
    if (index === 2 && (documents.slice(1).some(([key]) => !files[key]) || documents.slice(1).reduce((sum,[key])=>sum+(files[key]?.size??0),0)>maxFile))
      return "هر سه مدرک شرکت را بارگذاری کنید؛ مجموع حجم حداکثر ۱۰ مگابایت.";
    return "";
  }
  async function next(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (lock.current) return;
    if (step < 4) {
      const invalid = validate(step-1); if (invalid) { setError(invalid); return; }
      setStep((step+1) as 2|3|4); setError(""); return;
    }
    for (let i=0;i<3;i++) { const invalid=validate(i); if(invalid){setStep((i+1) as 1|2|3);setError(invalid);return;} }
    if (!consent.every(Boolean)) { setError("هر سه تأییدیه الزامی را مطالعه و تأیید کنید."); return; }
    lock.current=true; setBusy(true); setError("");
    try {
      const data=new FormData();
      for(const field of groups.flat()) data.set(field.key,canonical(field,values[field.key]??""));
      for(const [key] of documents) data.set(key,files[key]);
      data.set("mobileVerification",proof);
      for(const key of ["confirmAccuracy","acceptTerms","acknowledgeArticle172"]) data.set(key,"true");
      const result=await submitCompanyApplication(data);
      sessionStorage.setItem("moon-company-tracking-code",result.trackingCode);
      setValues({});setFiles({});setProof("");setVerifiedMobile("");setConsent([false,false,false]);
      navigate("/register/company/states/success",{replace:true});
    } catch(cause) { setError(cause instanceof Error?cause.message:"ثبت درخواست تأیید نشد.");setProof("");setVerifiedMobile("");setStep(2); }
    finally {lock.current=false;setBusy(false);}
  }
  function upload(key:string,label:string){
    return <div key={key} className="flex flex-wrap items-center justify-between gap-3 rounded-xl border border-slate-200 p-4"><div className="min-w-0"><strong className="block text-sm">{label}</strong><small className="block text-slate-500">PDF، JPG، PNG</small>{files[key]&&<bdi className="block break-all text-sm">{files[key].name}</bdi>}</div><div className="flex flex-wrap items-center gap-2"><label className="cursor-pointer rounded-lg bg-sky-50 px-4 py-2 text-sm font-semibold text-[#1476b9] focus-within:ring-2">{files[key]?"تغییر فایل":"انتخاب فایل"}<input type="file" aria-label={label} className="sr-only" accept=".pdf,.png,.jpg,.jpeg" disabled={busy} onChange={e=>{setFile(key,e.currentTarget.files?.[0]);e.currentTarget.value="";}}/></label>{files[key]&&<button type="button" disabled={busy} onClick={()=>setFile(key)} className="text-sm text-red-700">حذف</button>}</div></div>;
  }
  if(available===null) return <main dir="rtl" className="p-8 text-center" role="status">در حال بررسی وضعیت ثبت‌نام...</main>;
  if(!available) return <CompanyRegistrationUnavailable/>;
  if(success) return <main dir="rtl" className="mx-auto max-w-xl p-6 py-20"><section className="rounded-2xl border bg-white p-8 text-center">{receipt&&/^[0-9]{10}$/.test(receipt)?<><h1 className="text-xl font-bold">درخواست ثبت‌نام شرکت ارسال شد</h1><p className="my-4 text-sm">پرونده در انتظار بررسی است. حساب هنوز فعال نشده است.</p><div className="rounded-xl bg-slate-50 p-5"><p>کد پیگیری درخواست</p><bdi dir="ltr" className="my-3 block text-2xl font-bold text-[#1476b9]">{toPersianLoginDigits(receipt)}</bdi><button type="button" onClick={async()=>{try{await navigator.clipboard.writeText(toPersianLoginDigits(receipt));setCopyStatus("کد کپی شد.");}catch{setCopyStatus("کد را دستی کپی کنید.");}}} className="rounded-lg border px-4 py-2">کپی کد پیگیری</button><p role="status">{copyStatus}</p></div></>:<h1 className="text-xl font-bold">کد پیگیری در دسترس نیست</h1>}<Link to="/register/company/status" className="my-5 block rounded-xl bg-[#2094e3] p-3 text-white">پیگیری درخواست</Link><Link to="/">بازگشت به صفحه اصلی</Link></section></main>;
  return <main dir="rtl" className="mah-company-registration min-h-screen bg-[#f7fafc] text-slate-800"><header className="border-b bg-white"><div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-4"><img src="/assets/codia/qreWA0b9ix.png" alt="سامانه ماه" className="h-12 w-auto"/><Link to="/auth" className="text-sm text-[#1476b9]">بازگشت به ورود</Link></div></header><div className="mx-auto max-w-5xl p-4 py-10"><section className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-9"><h1 className="text-xl font-bold">ایجاد حساب سازمانی</h1><p className="my-4 text-sm text-slate-600">اطلاعات شرکت و نماینده را برای بررسی وارد کنید.</p><RegistrationStepper current={step} stepLabels={labels}/><h2 className="my-6 border-b pb-4 font-bold">{labels[step-1]}</h2><form onSubmit={next} className="grid gap-5">
  {step<4&&<div className="grid gap-5 sm:grid-cols-2">{groups[step-1].map(field=><label key={field.key} className={"grid gap-2 text-sm font-semibold "+(field.multiline?"sm:col-span-2":"")}>{field.label}{field.optional?" (اختیاری)":" *"}{field.multiline?<textarea className={fieldStyle} rows={4} maxLength={field.max} required={!field.optional} value={values[field.key]??""} disabled={busy} onChange={e=>update(field,e.target.value)}/>:<input className={fieldStyle} dir={field.digits||field.numericText||field.type?"ltr":"rtl"} style={{textAlign:"right"}} type={field.type??"text"} inputMode={field.digits?"numeric":undefined} pattern={field.digits?"[0-9۰-۹٠-٩]{"+field.digits+"}":undefined} maxLength={field.max} required={!field.optional} value={values[field.key]??""} disabled={busy} onChange={e=>update(field,field.digits||field.numericText?localizePersianNumericInput(e.currentTarget):e.currentTarget.value)}/>}</label>)}</div>}
  {step===2&&<><div className="rounded-xl border p-4"><button type="button" disabled={busy||confirmed} onClick={()=>void verifyMobile()} className={primary}>{confirmed?"شماره موبایل تأیید شد":destination?"تأیید کد پیامکی":"دریافت کد تأیید"}</button>{destination&&<label className="mt-3 block text-sm">کد تأیید پیامکی<input className={fieldStyle} dir="ltr" inputMode="numeric" autoComplete="one-time-code" maxLength={6} value={otp} disabled={busy} onChange={e=>setOtp(localizePersianNumericInput(e.currentTarget))}/></label>}</div>{upload(...documents[0])}<small>معرفی‌نامه دارای سربرگ، مهر و امضا؛ حداکثر ۱۰ مگابایت.</small></>}
  {step===3&&<><p className="text-sm text-slate-600">مجموع حجم مدارک شرکت حداکثر ۱۰ مگابایت است.</p>{documents.slice(1).map(([key,label])=>upload(key,label))}</>}
  {step===4&&<><div className="grid gap-4">{groups.map((fields,i)=><section key={i} className="rounded-xl border p-4"><div className="mb-3 flex justify-between"><strong>{labels[i]}</strong><button type="button" disabled={busy} onClick={()=>setStep((i+1) as 1|2|3)} className="text-sm text-[#1476b9]">ویرایش</button></div><dl className="grid gap-3 sm:grid-cols-2">{fields.map(field=><div key={field.key} className="min-w-0"><dt className="text-xs text-slate-500">{field.label}</dt><dd className="break-words text-sm">{values[field.key]||"—"}</dd></div>)}</dl></section>)}</div><section className="rounded-xl border p-4"><strong>مدارک بارگذاری‌شده</strong>{documents.map(([key,label])=><p key={key} className="break-all text-sm">{label}: {files[key]?.name??"—"}</p>)}</section>{["صحت اطلاعات و مدارک واردشده را تأیید می‌کنم.","قوانین و مقررات و سیاست حریم خصوصی سامانه ماه را مطالعه کرده و می‌پذیرم.","صدور گواهی ماده ۱۷۲ منوط به تأیید اطلاعات، واریز به حساب کمیته امداد و رعایت ضوابط قانونی است؛ ثبت حساب تضمین صدور گواهی نیست."].map((label,i)=><label key={i} className="flex items-start gap-2 text-sm leading-7"><input type="checkbox" required disabled={busy} checked={consent[i]} onChange={e=>setConsent(old=>old.map((v,j)=>j===i?e.target.checked:v))}/>{label}</label>)}<div className="flex gap-4 text-sm text-[#1476b9]"><Link to="/terms" target="_blank">قوانین و مقررات</Link><Link to="/privacy-policy" target="_blank">حریم خصوصی</Link></div></>}
  {error&&<p role="alert" className="rounded-lg bg-red-50 p-3 text-sm text-red-700">{error}</p>}<div className="flex flex-wrap justify-between gap-3 border-t pt-5">{step>1?<button type="button" disabled={busy} onClick={()=>{setStep((step-1) as 1|2|3);setError("");}} className="rounded-xl border px-5 py-3 text-sm">مرحله قبل</button>:<span/>}<button disabled={busy} className={primary}>{busy?"در حال انجام...":step===4?"ارسال درخواست ثبت‌نام":"ذخیره و ادامه"}</button></div></form></section><footer className="py-6 text-center text-xs text-slate-500">اطلاعات شما مطابق سیاست حریم خصوصی سامانه ماه محافظت می‌شود.</footer></div></main>;
}
