import {useState} from "react";
import {type PublicProject} from "../features/projects/public-api";

type Filters={area:string;region:string;audience:string;budget:string};
const empty:Filters={area:"",region:"",audience:"",budget:""};
const ranges=[
  {label:"تا ۱۰۰ میلیون تومان", min:0n,max:1000000000n},
  {label:"۱۰۰ تا ۲۵۰ میلیون تومان",min:1000000000n,max:2500000000n},
  {label:"۲۵۰ تا ۵۰۰ میلیون تومان",min:2500000000n,max:5000000000n},
  {label:"۵۰۰ میلیون تا ۱ میلیارد تومان",min:5000000000n,max:10000000000n},
  {label:"بیش از ۱ میلیارد تومان",min:10000000000n,max:null},
];
function matchesBudget(p:PublicProject,value:string){
  if(!value)return true;
  const range=ranges[Number(value)];
  if(!range||p.fundingCurrency!=="IRR"||!p.targetMinor||!/^\d+(?:\.0+)?$/.test(p.targetMinor))return false;
  const target=BigInt(p.targetMinor.split(".")[0]);
  return target>range.min&&(range.max===null||target<=range.max);
}
const selectClasses="min-h-[44px] w-full min-w-0 cursor-pointer rounded-[8px] border border-[#e4ebf1] bg-[#fcfbf8] px-[12px] text-right text-[14px] text-[#17324d] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#2094e3]";
export default function CompanyRecommendations({projects,onApply}:{projects:PublicProject[];onApply:(items:PublicProject[]|null)=>void}){
  const [filters,setFilters]=useState<Filters>(empty);
  const [message,setMessage]=useState("");
  const options=(key:"impactArea"|"region"|"targetGroup")=>Array.from(new Set(projects.flatMap(p=>p[key]?[p[key]!]:[]))).sort((a,b)=>a.localeCompare(b,"fa"));
  const change=(key:keyof Filters,value:string)=>{setFilters(old=>({...old,[key]:value}));setMessage("")};
  const apply=()=>{
    const matching=projects.filter(p=>(!filters.area||p.impactArea===filters.area)&&(!filters.region||p.region===filters.region)&&(!filters.audience||p.targetGroup===filters.audience)&&matchesBudget(p,filters.budget));
    onApply(matching);
    setMessage(matching.length?new Intl.NumberFormat("fa-IR").format(matching.length)+" پروژه متناسب نمایش داده شد.":"پروژه‌ای مطابق فیلترها پیدا نشد.");
    requestAnimationFrame(()=>document.getElementById("company-live-projects")?.scrollIntoView({behavior:window.matchMedia("(prefers-reduced-motion: reduce)").matches?"auto":"smooth",block:"start"}));
  };
  const field=(key:keyof Filters,label:string,values:{value:string;label:string}[],all:string)=><label className="flex min-w-0 flex-col gap-[10px] rounded-[12px] border border-[#e4ebf1] bg-white p-[20px] text-right"><span className="text-[14px] font-semibold text-[#17324d]">{label}</span><select className={selectClasses} value={filters[key]} onChange={e=>change(key,e.target.value)}><option value="">{all}</option>{values.map(v=><option key={v.value} value={v.value}>{v.label}</option>)}</select></label>;
  const choices=(key:"impactArea"|"region"|"targetGroup")=>options(key).map(value=>({value,label:value}));
  return <form dir="rtl" className="flex flex-col gap-6" onSubmit={e=>{e.preventDefault();apply()}}>
    <div className="mah-company-recommendations grid grid-cols-[repeat(auto-fit,minmax(min(100%,240px),1fr))] items-stretch gap-[24px] self-stretch">
      {field("area","براساس حوزه اثر",choices("impactArea"),"همه حوزه‌ها")}
      {field("region","براساس منطقه اجرا",choices("region"),"همه مناطق")}
      {field("audience","براساس جامعه هدف",choices("targetGroup"),"همه گروه‌ها")}
      {field("budget","براساس بودجه هدف پروژه",ranges.map((r,i)=>({value:String(i),label:r.label})),"همه بازه‌های بودجه")}
    </div>
    <div className="flex flex-wrap items-center justify-center gap-3">
      <button type="submit" className="mah-public-project-primary">مشاهده پیشنهادها</button>
      <button type="button" className="rounded-[12px] border border-[#e4ebf1] bg-white px-5 py-3 text-[#17324d]" onClick={()=>{setFilters(empty);onApply(null);setMessage("")}}>پاک کردن فیلترها</button>
    </div>
    {message&&<p role="status" className="text-center text-[#17324d]">{message}</p>}
  </form>;
}
