import { Link } from "react-router-dom";
import "../index.css";

const imgChatGptImage1 = "/assets/emdad/dashboard/logo.png";
const imgEllipse = "/assets/emdad/financial-reports/kpi-release.svg";
const imgEllipse1 = "/assets/emdad/financial-reports/kpi-certificate.svg";
const imgEllipse2 = "/assets/emdad/financial-reports/kpi-projects.svg";
const imgEllipse3 = "/assets/emdad/financial-reports/kpi-amount.svg";
const imgGroup = "/assets/emdad/dashboard/group.svg";
const imgGroup1 = "/assets/emdad/dashboard/group1.svg";
const imgCertificateIcon = "/assets/emdad/dashboard/certificate-icon.svg";
const imgFundSynergyIcon = "/assets/emdad/dashboard/fund-synergy-icon.svg";
const imgGroup2 = "/assets/emdad/dashboard/group2.svg";
const imgGroup3 = "/assets/emdad/dashboard/group3.svg";
const imgGroup4 = "/assets/emdad/dashboard/group4.svg";

const kpis = [
  { id: "2170:127", dotId: "2170:128", left: 28, dot: imgEllipse, label: "آزادسازی ثبت‌شده", value: "۱", valueColor: "#159455", note: "رکورد ثبت‌شده در سوابق پرداخت" },
  { id: "2170:132", dotId: "2170:133", left: 323, dot: imgEllipse1, label: "گواهی ماده ۱۷۲ صادرشده", value: "۱", valueColor: "#2094e3", note: "پرونده با تأیید نهایی" },
  { id: "2170:137", dotId: "2170:138", left: 618, dot: imgEllipse2, label: "پروژه‌های دارای جریان مالی", value: "۳", valueColor: "#17324d", note: "پروژه فعال در جریان‌های مالی" },
  { id: "2170:142", dotId: "2170:143", left: 913, dot: imgEllipse3, label: "مبلغ تجمیعی", value: "—", valueColor: "#c27a0f", note: "پس از ثبت داده رسمی قابل نمایش است" },
];

function Pagination({ baseId }: { baseId: number }) {
  return (
    <div className="absolute bg-[#f5f8fb] content-stretch flex h-[28px] items-center justify-between left-[19px] overflow-clip px-[10px] rounded-[8px] top-[193px] w-[1120px]" data-node-id={`2202:${baseId}`} data-name="pagination-footer">
      <div className="content-stretch flex gap-[8px] h-[26px] items-center overflow-clip relative shrink-0">
        <button type="button" className="bg-white border border-[#e4ebf1] border-solid content-stretch cursor-pointer flex h-[26px] items-center justify-center opacity-50 overflow-clip relative rounded-[7px] shrink-0 w-[52px]"><span className="font-sans font-medium text-[#17324d] text-[10px]">بعدی</span></button>
        <div className="bg-[#2094e3] content-stretch flex h-[26px] items-center justify-center overflow-clip relative rounded-[7px] shrink-0 w-[30px]"><span className="font-sans font-medium text-[10px] text-white">۱</span></div>
        <button type="button" className="bg-white border border-[#e4ebf1] border-solid content-stretch cursor-pointer flex h-[26px] items-center justify-center opacity-50 overflow-clip relative rounded-[7px] shrink-0 w-[52px]"><span className="font-sans font-medium text-[#17324d] text-[10px]">قبلی</span></button>
      </div>
      <div className="font-sans font-normal text-[#60758a] text-[10px] text-right w-[240px]">نمایش ۱ تا ۱ از ۱</div>
    </div>
  );
}

function SidebarLink({ to, label, icon, active = false, certificate = false }: { to: string; label: string; icon: string; active?: boolean; certificate?: boolean }) {
  return (
    <Link to={to} className={`${active ? "bg-[#2094e3]" : ""} content-stretch flex gap-[10px] h-[38px] items-center justify-end overflow-clip px-[12px] relative rounded-[10px] shrink-0 w-[192px]`}>
      <p className="font-sans font-normal leading-[normal] opacity-90 relative shrink-0 text-[12px] text-right text-white w-[142px]" dir="auto">{label}</p>
      {certificate ? (
        <div className="relative shrink-0 size-[18px]"><img alt="" className="absolute block inset-0 max-w-none size-full" src={icon} /></div>
      ) : (
        <div className="overflow-clip relative shrink-0 size-[18px]"><div className="absolute left-0 overflow-clip size-[18px] top-0"><div className="absolute inset-[16.67%]"><img alt="" className="block max-w-none size-full" src={icon} /></div></div></div>
      )}
    </Link>
  );
}

export default function EmdadFinancialReports() {
  return (
    <div className="emdad-panel bg-[#f5f8fb] relative w-full h-full" data-node-id="2170:2" data-name="emdad-financial-reports">
      <div className="absolute bg-[#f5f8fb] h-[900px] left-0 overflow-clip top-0 w-[1216px]" data-node-id="2170:3" data-name="Main Content">
        <div className="[word-break:break-word] absolute bg-white border border-[#e4ebf1] border-solid h-[64px] leading-[0] left-[28px] overflow-clip rounded-[12px] text-right top-[22px] w-[1160px]" data-node-id="2170:124" data-name="header">
          <div className="-translate-x-full -translate-y-1/2 absolute flex flex-col font-sans font-medium h-[30px] justify-center left-[1139px] text-[#17324d] text-[22px] top-[20px] w-[500px]"><p className="leading-[normal]" dir="auto">گزارش‌های مالی</p></div>
          <div className="-translate-x-full -translate-y-1/2 absolute flex flex-col font-sans font-normal h-[18px] justify-center left-[1139px] text-[#60758a] text-[11px] top-[44px] w-[700px]"><p className="leading-[normal]" dir="auto">نمای تجمیعی آزادسازی وجه مراحل و وضعیت پرونده‌های ماده ۱۷۲</p></div>
        </div>

        {kpis.map((kpi) => (
          <div key={kpi.id} className="absolute bg-white border border-[#e4ebf1] border-solid h-[96px] overflow-clip rounded-[12px] top-[106px] w-[275px]" style={{ left: kpi.left }} data-node-id={kpi.id} data-name="kpi-card">
            <div className="absolute left-[15px] size-[8px] top-[17px]" data-node-id={kpi.dotId} data-name="Ellipse"><img alt="" className="absolute block inset-0 max-w-none size-full" src={kpi.dot} /></div>
            <div className="-translate-x-full -translate-y-1/2 absolute flex flex-col font-sans font-normal h-[22px] justify-center left-[258px] text-[#60758a] text-[11px] text-right top-[20px] w-[225px]"><p className="leading-[normal]" dir="auto">{kpi.label}</p></div>
            <div className="-translate-x-full -translate-y-1/2 absolute flex flex-col font-sans font-medium h-[32px] justify-center left-[258px] text-[24px] text-right top-[51px] w-[243px]" style={{ color: kpi.valueColor }}><p className="leading-[normal]">{kpi.value}</p></div>
            <div className="-translate-x-full -translate-y-1/2 absolute flex flex-col font-sans font-normal h-[18px] justify-center left-[258px] text-[#60758a] text-[10px] text-right top-[78px] w-[243px]"><p className="leading-[normal]" dir="auto">{kpi.note}</p></div>
          </div>
        ))}

        <div className="absolute bg-white border border-[#e4ebf1] border-solid h-[70px] left-[28px] overflow-clip rounded-[12px] top-[222px] w-[1160px]" data-node-id="2170:147" data-name="toolbar">
          <button type="button" className="absolute bg-[#f8fafc] block border border-[#e4ebf1] border-solid cursor-pointer h-[42px] left-[715px] overflow-clip rounded-[8px] top-[13px] w-[424px]" data-node-id="2170:148" data-name="search"><div className="-translate-x-full -translate-y-1/2 absolute flex flex-col font-sans font-normal h-[24px] justify-center left-[407px] text-[#60758a] text-[11px] text-right top-[20px] w-[392px]"><p className="leading-[normal]" dir="auto">جستجو در پروژه یا شرکت</p></div></button>
          <button type="button" className="absolute bg-white block border border-[#e4ebf1] border-solid cursor-pointer h-[42px] left-[499px] overflow-clip rounded-[8px] top-[13px] w-[196px]" data-node-id="2170:150" data-name="filter"><div className="-translate-x-full -translate-y-1/2 absolute flex flex-col font-sans font-normal h-[24px] justify-center left-[179px] text-[#17324d] text-[11px] text-right top-[20px] w-[164px]"><p className="leading-[normal]" dir="auto">همه جریان‌ها</p></div></button>
          <div className="absolute bg-[#ebf6fc] h-[28px] left-[19px] overflow-clip rounded-[14px] top-[20px] w-[128px]" data-node-id="2170:152" data-name="count"><div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-sans font-medium h-[20px] justify-center left-[64px] text-[#2094e3] text-[11px] text-center top-[14px] w-[112px]"><p className="leading-[normal]" dir="auto">۲ گزارش فعال</p></div></div>
        </div>

        <div className="absolute bg-white border border-[#e4ebf1] border-solid h-[234px] left-[28px] overflow-clip rounded-[12px] top-[312px] w-[1160px]" data-node-id="2170:154" data-name="release-report">
          <div className="-translate-x-full -translate-y-1/2 absolute flex flex-col font-sans font-medium h-[30px] justify-center left-[1139px] text-[#17324d] text-[17px] text-right top-[26px] w-[490px]"><p className="leading-[normal]" dir="auto">گزارش آزادسازی وجه مراحل</p></div>
          <div className="-translate-x-full -translate-y-1/2 absolute flex flex-col font-sans font-normal h-[18px] justify-center left-[1139px] text-[#60758a] text-[10px] text-right top-[50px] w-[710px]"><p className="leading-[normal]" dir="auto">رکوردهای آزادسازی ثبت‌شده پس از تأیید آینه و اقدام کمیته امداد</p></div>
          <div className="absolute bg-[#f8fafc] font-sans font-medium h-[28px] left-[19px] overflow-clip rounded-[6px] text-[#60758a] text-[10px] text-right top-[77px] w-[1120px]">
            <div className="-translate-x-full -translate-y-1/2 absolute left-[1110px] top-[14px] w-[40px]">ردیف</div><div className="-translate-x-full -translate-y-1/2 absolute left-[1060px] top-[14px] w-[280px]">پروژه</div><div className="-translate-x-full -translate-y-1/2 absolute left-[770px] top-[14px] w-[200px]">مرحله</div><div className="-translate-x-full -translate-y-1/2 absolute left-[560px] top-[14px] w-[120px]">سهم مرحله</div><div className="-translate-x-full -translate-y-1/2 absolute left-[362px] top-[14px] w-[102px]">وضعیت</div><div className="-translate-x-full -translate-y-1/2 absolute left-[123px] top-[14px] w-[103px]">اقدام</div>
          </div>
          <div className="absolute bg-[#f8fafc] border border-[#e4ebf1] border-solid h-[52px] left-[19px] overflow-clip rounded-[8px] top-[113px] w-[1120px]" data-node-id="2170:164" data-name="row">
            <div className="-translate-x-full -translate-y-1/2 absolute flex flex-col font-sans font-medium h-[22px] justify-center left-[1109px] text-[#17324d] text-[11px] text-right top-[24px] w-[40px]">۱</div>
            <div className="-translate-x-full -translate-y-1/2 absolute flex flex-col font-sans font-medium h-[20px] justify-center left-[1059px] text-[#17324d] text-[12px] text-right top-[13px] w-[280px]">اشتغال زنان روستایی</div>
            <div className="-translate-x-full -translate-y-1/2 absolute flex flex-col font-sans font-normal left-[1059px] text-[#60758a] text-[10px] text-right top-[33px] w-[280px]">گلستان · کسب‌وکار و اشتغال</div>
            <div className="-translate-x-full -translate-y-1/2 absolute flex flex-col font-sans font-medium h-[22px] justify-center left-[769px] text-[#17324d] text-[11px] text-right top-[24px] w-[200px]">شناسایی و ارزیابی</div>
            <div className="-translate-x-full -translate-y-1/2 absolute flex flex-col font-sans font-medium h-[22px] justify-center left-[559px] text-[#17324d] text-[11px] text-right top-[24px] w-[120px]">۲۰٪</div>
            <div className="absolute bg-[#ebf9f1] h-[28px] left-[271px] overflow-clip rounded-[14px] top-[11px] w-[146px]"><div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-sans font-medium h-[20px] justify-center left-[73px] text-[#159455] text-[11px] text-center top-[14px] w-[130px]">ثبت آزادسازی</div></div>
            <Link to="/panel/emdad/payment-history" className="absolute bg-[#2094e3] block h-[38px] left-[19px] overflow-clip rounded-[8px] top-[6px] w-[160px]" data-node-id="2170:172" data-name="details"><div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-sans font-medium h-[24px] justify-center left-[80px] text-[12px] text-center text-white top-[19px] w-[140px]">مشاهده سوابق</div></Link>
          </div>
          <div className="-translate-x-full -translate-y-1/2 absolute flex flex-col font-sans font-normal h-[24px] justify-center left-[1139px] text-[#60758a] text-[10px] text-right top-[181px] w-[1120px]">این بخش فقط رکوردهای ثبت‌شده را نشان می‌دهد؛ درخواست‌های در انتظار در صف آزادسازی هستند.</div>
          <Pagination baseId={2} />
        </div>

        <div className="absolute bg-white border border-[#e4ebf1] border-solid h-[234px] left-[28px] overflow-clip rounded-[12px] top-[556px] w-[1160px]" data-node-id="2170:175" data-name="article172-report">
          <div className="-translate-x-full -translate-y-1/2 absolute flex flex-col font-sans font-medium h-[30px] justify-center left-[1139px] text-[#17324d] text-[17px] text-right top-[26px] w-[490px]">گزارش پرونده‌های ماده ۱۷۲</div>
          <div className="-translate-x-full -translate-y-1/2 absolute flex flex-col font-sans font-normal h-[18px] justify-center left-[1139px] text-[#60758a] text-[10px] text-right top-[50px] w-[710px]">پرونده‌هایی که پرداخت واجد شرایط و تأیید نهایی کمیته امداد را طی کرده‌اند</div>
          <div className="absolute bg-[#f8fafc] font-sans font-medium h-[28px] left-[19px] overflow-clip rounded-[6px] text-[#60758a] text-[10px] text-right top-[77px] w-[1120px]">
            <div className="-translate-x-full -translate-y-1/2 absolute left-[1110px] top-[14px] w-[40px]">ردیف</div><div className="-translate-x-full -translate-y-1/2 absolute left-[1060px] top-[14px] w-[300px]">پروژه / شرکت</div><div className="-translate-x-full -translate-y-1/2 absolute left-[692px] top-[14px] w-[152px]">پرداخت واجد شرایط</div><div className="-translate-x-full -translate-y-1/2 absolute left-[465px] top-[14px] w-[145px]">وضعیت گواهی</div><div className="-translate-x-full -translate-y-1/2 absolute left-[127px] top-[14px] w-[107px]">اقدام</div>
          </div>
          <div className="absolute bg-[#f8fafc] border border-[#e4ebf1] border-solid h-[52px] left-[19px] overflow-clip rounded-[8px] top-[113px] w-[1120px]" data-node-id="2170:184" data-name="row">
            <div className="-translate-x-full -translate-y-1/2 absolute flex flex-col font-sans font-medium h-[22px] justify-center left-[1109px] text-[#17324d] text-[11px] text-right top-[24px] w-[40px]">۱</div>
            <div className="-translate-x-full -translate-y-1/2 absolute flex flex-col font-sans font-medium h-[20px] justify-center left-[1059px] text-[#17324d] text-[12px] text-right top-[13px] w-[300px]">سلامت خانواده</div>
            <div className="-translate-x-full -translate-y-1/2 absolute flex flex-col font-sans font-normal left-[1059px] text-[#60758a] text-[10px] text-right top-[33px] w-[300px]">پایدار پرداز خلاق آریا</div>
            <div className="absolute bg-[#ebf9f1] h-[28px] left-[589px] overflow-clip rounded-[14px] top-[11px] w-[140px]"><div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-sans font-medium h-[20px] justify-center left-[70px] text-[#159455] text-[11px] text-center top-[14px] w-[124px]">ثبت شده</div></div>
            <div className="absolute bg-[#ebf6fc] h-[28px] left-[369px] overflow-clip rounded-[14px] top-[11px] w-[140px]"><div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-sans font-medium h-[20px] justify-center left-[70px] text-[#2094e3] text-[11px] text-center top-[14px] w-[124px]">صادر شده</div></div>
            <Link to="/panel/emdad/article172-approvals/detail" className="absolute bg-[#2094e3] block h-[38px] left-[19px] overflow-clip rounded-[8px] top-[6px] w-[180px]" data-node-id="2170:192" data-name="details"><div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-sans font-medium h-[24px] justify-center left-[90px] text-[12px] text-center text-white top-[19px] w-[160px]">مشاهده پرونده</div></Link>
          </div>
          <div className="-translate-x-full -translate-y-1/2 absolute flex flex-col font-sans font-normal h-[24px] justify-center left-[1139px] text-[#60758a] text-[10px] text-right top-[181px] w-[1120px]">شماره گواهی، تاریخ صدور و مبلغ فقط پس از ثبت داده رسمی در رکورد مالی نمایش داده می‌شوند.</div>
          <Pagination baseId={11} />
        </div>

        <div className="absolute bg-[#ebf6fc] border border-[#c4e3f7] border-solid h-[72px] left-[28px] overflow-clip rounded-[12px] top-[800px] w-[1160px]" data-node-id="2170:195" data-name="report-rule">
          <div className="-translate-x-full -translate-y-1/2 absolute flex flex-col font-sans font-medium h-[24px] justify-center left-[1139px] text-[#17324d] text-[13px] text-right top-[20px] w-[280px]">مبنای گزارش مالی</div>
          <div className="-translate-x-full -translate-y-1/2 absolute flex flex-col font-sans font-normal h-[22px] justify-center left-[1139px] text-[#60758a] text-[10px] text-right top-[43px] w-[800px]">این صفحه دو جریان «آزادسازی وجه» و «ماده ۱۷۲» را تجمیع می‌کند و مبلغ بدون رکورد رسمی نمایش داده نمی‌شود.</div>
          <Link to="/panel/emdad/payment-history" className="absolute bg-white block border border-[#e4ebf1] border-solid h-[38px] left-[19px] overflow-clip rounded-[8px] top-[16px] w-[150px]" data-node-id="2170:198" data-name="payment-history"><div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-sans font-medium h-[24px] justify-center left-[74px] text-[#17324d] text-[12px] text-center top-[18px] w-[130px]">سوابق پرداخت</div></Link>
          <Link to="/panel/emdad/article172-approvals" className="absolute bg-white block border border-[#e4ebf1] border-solid h-[38px] left-[181px] overflow-clip rounded-[8px] top-[16px] w-[180px]" data-node-id="2170:200" data-name="article172-list"><div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-sans font-medium h-[24px] justify-center left-[89px] text-[#17324d] text-[12px] text-center top-[18px] w-[160px]">پرونده‌های ماده ۱۷۲</div></Link>
        </div>
      </div>

      <div className="absolute bg-[#17324d] content-stretch flex flex-col gap-[10px] h-[900px] items-end left-[1216px] pb-[18px] pt-[20px] px-[16px] top-0 w-[224px]" data-node-id="2170:62" data-name="colored-sidebar">
        <div className="bg-white content-stretch flex h-[56px] items-center justify-end overflow-clip px-[10px] py-[8px] relative rounded-[12px] shrink-0 w-[192px]" data-node-id="2170:63" data-name="brand-logo"><div className="h-[40px] relative shrink-0 w-[118px]"><div className="absolute inset-0 overflow-hidden pointer-events-none"><img alt="" className="absolute h-full left-[5.28%] max-w-none top-0 w-[100.73%]" src={imgChatGptImage1} /></div></div></div>
        <div className="content-stretch flex flex-col gap-[3px] h-[64px] items-start justify-end overflow-clip px-[8px] py-[7px] relative shrink-0 text-center w-[192px]"><p className="font-sans font-medium h-[24px] leading-[normal] relative shrink-0 text-[13px] text-white w-[176px]" dir="auto">سامانه ماه</p><div className="flex flex-col font-sans font-normal h-[18px] justify-center relative shrink-0 text-[#d8e7f3] text-[10px] w-[176px]">پنل کمیته امداد</div></div>
        <SidebarLink to="/panel/emdad" label="داشبورد" icon={imgGroup} />
        <SidebarLink to="/panel/emdad/release-requests" label="درخواست‌های آزادسازی" icon={imgGroup1} />
        <SidebarLink to="/panel/emdad/article172-approvals" label="تأیید گواهی ماده ۱۷۲" icon={imgCertificateIcon} certificate />
        <SidebarLink to="/panel/emdad/fund-synergy" label="هم‌افزایی صندوق" icon={imgFundSynergyIcon} certificate />
        <SidebarLink to="/panel/emdad/fund-synergy/history" label="سوابق هم‌افزایی صندوق" icon={imgGroup2} />
        <SidebarLink to="/panel/emdad/payment-history" label="سوابق پرداخت" icon={imgGroup2} />
        <SidebarLink to="/panel/emdad/financial-reports" label="گزارش‌های مالی" icon={imgGroup3} active />
        <SidebarLink to="/panel/emdad/fund-returns" label="منابع برگشتی صندوق" icon={imgGroup2} />
        <div className="flex-[1_0_0] min-h-px relative w-[192px]" />
        <button type="button" className="bg-white content-stretch cursor-pointer flex gap-[10px] h-[38px] items-center justify-end opacity-96 overflow-clip px-[12px] relative rounded-[9px] shrink-0 w-[192px]" data-node-id="2170:116" data-name="logout-nav"><p className="font-sans font-medium leading-[normal] relative shrink-0 text-[#17324d] text-[12px] text-right w-[142px]" dir="auto">خروج از سیستم</p><div className="overflow-clip relative shrink-0 size-[18px]"><div className="absolute left-0 overflow-clip size-[18px] top-0"><div className="absolute inset-[16.67%_11.11%_16.67%_19.44%]"><img alt="" className="block max-w-none size-full" src={imgGroup4} /></div></div></div></button>
      </div>
    </div>
  );
}
