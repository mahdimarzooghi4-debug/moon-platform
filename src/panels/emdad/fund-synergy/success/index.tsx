import { Link } from "react-router-dom";
import "../../index.css";

const imgLogo = "/assets/emdad/dashboard/logo.png";
const imgSuccessIcon = "/assets/emdad/fund-synergy-success/success-icon.svg";
const imgProcessStep = "/assets/emdad/fund-synergy-success/process-step.svg";
const imgDashboard = "/assets/emdad/dashboard/group.svg";
const imgUsers = "/assets/emdad/dashboard/group1.svg";
const imgCertificate = "/assets/emdad/dashboard/certificate-icon.svg";
const imgFundSynergy = "/assets/emdad/dashboard/fund-synergy-icon.svg";
const imgProject = "/assets/emdad/dashboard/group2.svg";
const imgReports = "/assets/emdad/dashboard/group3.svg";
const imgLogout = "/assets/emdad/dashboard/group4.svg";

const summaryCells = [
  { id: "2234:223", labelId: "2234:224", valueId: "2234:225", left: 809, top: 69, label: "شرکت", value: "پایدار پرداز خلاق آریا", color: "#17324d" },
  { id: "2234:226", labelId: "2234:227", valueId: "2234:228", left: 435, top: 69, label: "پروژه", value: "سلامت خانواده", color: "#17324d" },
  { id: "2234:229", labelId: "2234:230", valueId: "2234:231", left: 61, top: 69, label: "مبلغ پرداخت شرکت", value: "۲۰۰ میلیون تومان", color: "#159455" },
  { id: "2234:232", labelId: "2234:233", valueId: "2234:234", left: 809, top: 125, label: "سهم ۱۰٪ صندوق", value: "۲۰ میلیون تومان", color: "#17324d" },
  { id: "2234:235", labelId: "2234:236", valueId: "2234:237", left: 435, top: 125, label: "تاریخ ثبت", value: "—", color: "#17324d" },
  { id: "2234:238", labelId: "2234:239", valueId: "2234:240", left: 61, top: 125, label: "شماره رسید", value: "—", color: "#17324d" },
];

const processSteps = [
  { id: "2234:244", badgeId: "2234:245", numberId: "2234:246", titleId: "2234:247", noteId: "2234:248", left: 863, n: "۱", title: "ثبت پرداخت شرکت", note: "پرداخت نقدی ۲۰۰ میلیون تومان ثبت شده" },
  { id: "2234:249", badgeId: "2234:250", numberId: "2234:251", titleId: "2234:252", noteId: "2234:253", left: 583, n: "۲", title: "محاسبه سهم", note: "۱۰٪ پرداخت برابر ۲۰ میلیون تومان محاسبه شده" },
  { id: "2234:254", badgeId: "2234:255", numberId: "2234:256", titleId: "2234:257", noteId: "2234:258", left: 303, n: "۳", title: "ثبت تخصیص", note: "سهم صندوق توسط کمیته امداد ثبت شده" },
  { id: "2234:259", badgeId: "2234:260", numberId: "2234:261", titleId: "2234:262", noteId: "2234:263", left: 23, n: "۴", title: "ثبت رسید", note: "رسید مالی برای پیگیری در سوابق ایجاد شده" },
];

function SidebarLink({
  to,
  label,
  icon,
  active = false,
}: {
  to: string;
  label: string;
  icon: string;
  active?: boolean;
}) {
  return (
    <Link
      to={to}
      className={`${active ? "bg-[#2094e3]" : ""} content-stretch flex gap-[10px] h-[38px] items-center justify-end overflow-clip px-[12px] relative rounded-[10px] shrink-0 w-[192px]`}
    >
      <p className="font-sans font-normal leading-[normal] opacity-90 relative shrink-0 text-[12px] text-right text-white w-[142px]" dir="auto">
        {label}
      </p>
      <div className="overflow-clip relative shrink-0 size-[18px]">
        <img alt="" className="absolute block inset-0 max-w-none size-full" src={icon} />
      </div>
    </Link>
  );
}

export default function EmdadFundSynergySuccess() {
  return (
    <div className="emdad-panel bg-[#f5f8fb] relative w-full h-full" data-node-id="2234:206" data-name="emdad-fund-synergy-success">
      <div className="absolute bg-[#f5f8fb] content-stretch flex flex-col gap-[16px] h-[900px] items-start left-0 overflow-clip px-[28px] py-[22px] top-0 w-[1216px]" data-node-id="2234:207" data-name="Main Content">
        <div className="bg-white border border-[#e4ebf1] border-solid h-[64px] overflow-clip relative rounded-[12px] shrink-0 w-full" data-node-id="2234:208" data-name="header">
          <div className="-translate-x-full -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-sans font-medium h-[30px] justify-center leading-[0] left-[1131px] text-[#17324d] text-[22px] text-right top-[22px] w-[572px]" data-node-id="2234:209">
            <p className="leading-[normal]" dir="auto">تخصیص هم‌افزایی ثبت شد</p>
          </div>
          <div className="-translate-x-full -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-sans font-normal h-[18px] justify-center leading-[0] left-[1131px] text-[#60758a] text-[12px] text-right top-[44px] w-[672px]" data-node-id="2234:210">
            <p className="leading-[normal]" dir="auto">سهم ۱۰٪ پرداخت نقدی شرکت با موفقیت برای صندوق ثبت شد.</p>
          </div>
          <div className="absolute bg-[#eaf8f0] h-[30px] left-[19px] overflow-clip rounded-[15px] top-[16px] w-[122px]" data-node-id="2234:211" data-name="status">
            <div className="-translate-x-1/2 -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-sans font-medium h-[24px] justify-center leading-[0] left-[61px] text-[#159455] text-[12px] text-center top-[15px] w-[106px]" data-node-id="2234:212">
              <p className="leading-[normal]" dir="auto">ثبت شد</p>
            </div>
          </div>
        </div>

        <div className="bg-[#eaf8f0] border border-[#bee5d0] border-solid h-[138px] overflow-clip relative rounded-[12px] shrink-0 w-full" data-node-id="2234:213" data-name="success-banner">
          <div className="absolute left-[1081px] size-[54px] top-[33px]" data-node-id="2234:214" data-name="success-icon">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgSuccessIcon} />
          </div>
          <div className="-translate-x-1/2 -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-sans font-medium h-[40px] justify-center leading-[0] left-[1108px] text-[28px] text-center text-white top-[59px] w-[38px]" data-node-id="2234:215">
            <p className="leading-[normal]">✓</p>
          </div>
          <div className="-translate-x-full -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-sans font-medium justify-center leading-[0] left-[1049px] text-[#17324d] text-[19px] text-right top-[38px] w-[660px]" data-node-id="2234:216">
            <p className="leading-[normal]" dir="auto">تخصیص به صندوق با موفقیت ثبت شد</p>
          </div>
          <div className="-translate-x-full -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-sans font-normal h-[42px] justify-center leading-[0] left-[1049px] text-[#60758a] text-[13px] text-right top-[80px] w-[840px]" data-node-id="2234:217">
            <p className="leading-[normal]" dir="auto">مبلغ ۲۰ میلیون تومان به‌عنوان سهم هم‌افزایی این پرداخت ثبت و رسید مالی آن ایجاد شد.</p>
          </div>
          <div className="absolute bg-white h-[30px] left-[19px] overflow-clip rounded-[15px] top-[85px] w-[128px]" data-node-id="2234:218" data-name="active-pill">
            <div className="-translate-x-1/2 -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-sans font-medium h-[24px] justify-center leading-[0] left-[64px] text-[#159455] text-[12px] text-center top-[15px] w-[112px]" data-node-id="2234:219">
              <p className="leading-[normal]" dir="auto">رسید ثبت شد</p>
            </div>
          </div>
        </div>

        <div className="[word-break:break-word] bg-white border border-[#e4ebf1] border-solid h-[178px] leading-[0] overflow-clip relative rounded-[12px] shrink-0 text-right w-full" data-node-id="2234:220" data-name="certificate-summary">
          <div className="-translate-x-full -translate-y-1/2 absolute flex flex-col font-sans font-medium justify-center left-[1131px] text-[#17324d] text-[18px] top-[27px] w-[372px]" data-node-id="2234:221">
            <p className="leading-[normal]" dir="auto">خلاصه تخصیص ثبت‌شده</p>
          </div>
          <div className="-translate-x-full -translate-y-1/2 absolute flex flex-col font-sans font-normal h-[18px] justify-center left-[1131px] text-[#60758a] text-[12px] top-[50px] w-[532px]" data-node-id="2234:222">
            <p className="leading-[normal]" dir="auto">​</p>
          </div>
          {summaryCells.map((cell) => (
            <div key={cell.id} className="absolute bg-[#f5f8fb] h-[52px] overflow-clip rounded-[8px] w-[350px]" style={{ left: cell.left, top: cell.top }} data-node-id={cell.id} data-name="summary-cell">
              <div className="-translate-x-full -translate-y-1/2 absolute flex flex-col font-sans font-normal h-[16px] justify-center left-[334px] text-[#60758a] text-[11px] top-[13px] w-[144px]" data-node-id={cell.labelId}>
                <p className="leading-[normal]" dir="auto">{cell.label}</p>
              </div>
              <div className="-translate-x-full -translate-y-1/2 absolute flex flex-col font-sans font-medium h-[24px] justify-center left-[334px] text-[14px] top-[34px] w-[318px]" style={{ color: cell.color }} data-node-id={cell.valueId}>
                <p className="leading-[normal]" dir="auto">{cell.value}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-white border border-[#e4ebf1] border-solid h-[184px] overflow-clip relative rounded-[12px] shrink-0 w-full" data-node-id="2234:241" data-name="process-state">
          <div className="-translate-x-full -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-sans font-medium justify-center leading-[0] left-[1131px] text-[#17324d] text-[18px] text-right top-[27px] w-[312px]" data-node-id="2234:242">
            <p className="leading-[normal]" dir="auto">وضعیت فرایند تخصیص</p>
          </div>
          <div className="-translate-x-full -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-sans font-normal h-[18px] justify-center leading-[0] left-[1131px] text-[#60758a] text-[12px] text-right top-[50px] w-[482px]" data-node-id="2234:243">
            <p className="leading-[normal]" dir="auto">​</p>
          </div>
          {processSteps.map((step) => (
            <div key={step.id} className="absolute bg-[#f5f8fb] h-[82px] overflow-clip rounded-[10px] top-[77px] w-[264px]" style={{ left: step.left }} data-node-id={step.id} data-name="process-step">
              <div className="absolute left-[208px] size-[36px] top-[14px]" data-node-id={step.badgeId} data-name="Ellipse">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgProcessStep} />
              </div>
              <div className="-translate-x-1/2 -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-sans font-medium justify-center leading-[0] left-[226px] size-[24px] text-[13px] text-center text-white top-[31px]" data-node-id={step.numberId}>
                <p className="leading-[normal]">{step.n}</p>
              </div>
              <div className="-translate-x-full -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-sans font-medium h-[22px] justify-center leading-[0] left-[196px] text-[#17324d] text-[13px] text-right top-[23px] w-[176px]" data-node-id={step.titleId}>
                <p className="leading-[normal]" dir="auto">{step.title}</p>
              </div>
              <div className="-translate-x-full -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-sans font-normal h-[34px] justify-center leading-[0] left-[196px] text-[#60758a] text-[11px] text-right top-[55px] w-[176px]" data-node-id={step.noteId}>
                <p className="leading-[normal]" dir="auto">{step.note}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="[word-break:break-word] bg-[#ebf6fd] border border-[#cae4f6] border-solid h-[86px] leading-[0] overflow-clip relative rounded-[12px] shrink-0 text-right w-full" data-node-id="2234:264" data-name="company-availability-note">
          <div className="-translate-x-full -translate-y-1/2 absolute flex flex-col font-sans font-medium h-[26px] justify-center left-[1131px] text-[#17324d] text-[15px] top-[24px] w-[272px]" data-node-id="2234:265">
            <p className="leading-[normal]" dir="auto">پیگیری در سوابق مالی</p>
          </div>
          <div className="-translate-x-full -translate-y-1/2 absolute flex flex-col font-sans font-normal h-[26px] justify-center left-[1131px] text-[#60758a] text-[12px] top-[52px] w-[972px]" data-node-id="2234:266">
            <p className="leading-[normal]" dir="auto">این تخصیص در سوابق پرداخت و گزارش‌های مالی کمیته امداد ثبت می‌شود و از همان بخش قابل پیگیری است.</p>
          </div>
        </div>

        <div className="bg-white border border-[#e4ebf1] border-solid h-[102px] overflow-clip relative rounded-[12px] shrink-0 w-full" data-node-id="2234:267" data-name="actions">
          <div className="-translate-x-full -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-sans font-medium h-[24px] justify-center leading-[0] left-[1131px] text-[#17324d] text-[15px] text-right top-[23px] w-[342px]" data-node-id="2234:268">
            <p className="leading-[normal]" dir="auto">این مورد از صف تخصیص خارج شد</p>
          </div>
          <div className="-translate-x-full -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-sans font-normal h-[20px] justify-center leading-[0] left-[1131px] text-[#60758a] text-[12px] text-right top-[47px] w-[652px]" data-node-id="2234:269">
            <p className="leading-[normal]" dir="auto">وضعیت این ردیف در «هم‌افزایی صندوق» به «تخصیص ثبت شد» تغییر می‌کند.</p>
          </div>
          <Link to="/panel/emdad/fund-synergy" className="absolute bg-white block border border-[#e4ebf1] border-solid cursor-pointer h-[42px] left-[19px] overflow-clip rounded-[8px] top-[49px] w-[220px]" data-node-id="2234:270" data-name="back-to-article172-list">
            <div className="-translate-x-1/2 -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-sans font-medium h-[26px] justify-center leading-[0] left-[109px] text-[#17324d] text-[13px] text-center top-[20px] w-[200px]" data-node-id="2234:271">
              <p className="leading-[normal]" dir="auto">بازگشت به هم‌افزایی صندوق</p>
            </div>
          </Link>
          <Link to="/panel/emdad" className="absolute bg-[#2094e3] block cursor-pointer h-[42px] left-[251px] overflow-clip rounded-[8px] top-[49px] w-[190px]" data-node-id="2234:272" data-name="back-to-dashboard">
            <div className="-translate-x-1/2 -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-sans font-medium h-[26px] justify-center leading-[0] left-[95px] text-[13px] text-center text-white top-[21px] w-[170px]" data-node-id="2234:273">
              <p className="leading-[normal]" dir="auto">بازگشت به داشبورد</p>
            </div>
          </Link>
        </div>
      </div>

      <div className="absolute bg-[#17324d] content-stretch flex flex-col gap-[10px] h-[900px] items-end left-[1216px] pb-[18px] pt-[20px] px-[16px] top-0 w-[224px]" data-node-id="2234:334" data-name="colored-sidebar">
        <div className="bg-white content-stretch flex h-[56px] items-center justify-end overflow-clip px-[10px] py-[8px] relative rounded-[12px] shrink-0 w-[192px]" data-node-id="2234:335" data-name="brand-logo">
          <div className="h-[40px] relative shrink-0 w-[118px]" data-node-id="2234:336" data-name="ChatGPT Image ۲۹ مرداد ۱۴۰۵، ۱۵_۱۶_۳۵ 1">
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <img alt="" className="absolute h-full left-[5.28%] max-w-none top-0 w-[100.73%]" src={imgLogo} />
            </div>
          </div>
        </div>
        <div className="[word-break:break-word] content-stretch flex flex-col gap-[3px] h-[64px] items-start justify-end overflow-clip px-[8px] py-[7px] relative shrink-0 text-center w-[192px]" data-node-id="2234:337" data-name="panel-identity">
          <p className="font-sans font-medium h-[24px] leading-[normal] relative shrink-0 text-[13px] text-white w-[176px]" dir="auto" data-node-id="2234:338">سامانه ماه</p>
          <div className="flex flex-col font-sans font-normal h-[18px] justify-center leading-[0] relative shrink-0 text-[#d8e7f3] text-[10px] w-[176px]" data-node-id="2234:339">
            <p className="leading-[normal]" dir="auto">پنل کمیته امداد</p>
          </div>
        </div>

        <SidebarLink to="/panel/emdad" label="داشبورد" icon={imgDashboard} />
        <SidebarLink to="/panel/emdad/release-requests" label="درخواست‌های آزادسازی" icon={imgUsers} />
        <SidebarLink to="/panel/emdad/article172-approvals" label="تأیید گواهی ماده ۱۷۲" icon={imgCertificate} />
        <SidebarLink to="/panel/emdad/fund-synergy" label="هم‌افزایی صندوق" icon={imgFundSynergy} active />
        <SidebarLink to="/panel/emdad/fund-synergy/history" label="سوابق هم‌افزایی صندوق" icon={imgProject} />
        <SidebarLink to="/panel/emdad/payment-history" label="سوابق پرداخت" icon={imgProject} />
        <SidebarLink to="/panel/emdad/financial-reports" label="گزارش‌های مالی" icon={imgReports} />
        <SidebarLink to="/panel/emdad/fund-returns" label="منابع برگشتی صندوق" icon={imgProject} />

        <div className="flex-[1_0_0] min-h-px relative w-[192px]" data-node-id="2234:385" data-name="sidebar-spacer" />
        <button type="button" className="bg-white content-stretch cursor-pointer flex gap-[10px] h-[38px] items-center justify-end opacity-96 overflow-clip px-[12px] relative rounded-[9px] shrink-0 w-[192px]" data-node-id="2234:386" data-name="logout-nav">
          <p className="font-sans font-medium leading-[normal] relative shrink-0 text-[#17324d] text-[12px] text-right w-[142px]" dir="auto" data-node-id="2234:387">خروج از سیستم</p>
          <div className="overflow-clip relative shrink-0 size-[18px]" data-node-id="2234:388" data-name="logout-icon">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgLogout} />
          </div>
        </button>
      </div>
    </div>
  );
}
