import "../index.css";
import { Link, useNavigate } from "react-router-dom";

const imgChatGptImage1 = "/assets/creative-house/startup-evaluations/logo.png";
const imgWaitingClockIcon = "/assets/creative-house/startup-evaluations/waiting-clock.svg";
const imgEvaluationSearchIcon = "/assets/creative-house/startup-evaluations/evaluation-search.svg";
const imgNeedsCompletionIcon = "/assets/creative-house/startup-evaluations/needs-completion.svg";
const imgApprovedCheckIcon = "/assets/creative-house/startup-evaluations/approved-check.svg";
const imgDashboardIcon = "/assets/creative-house/startup-evaluations/nav-dashboard.svg";
const imgUsersIcon = "/assets/creative-house/startup-evaluations/nav-startups.svg";
const imgProjectIcon = "/assets/creative-house/startup-evaluations/nav-projects.svg";
const imgMilestoneIcon = "/assets/creative-house/startup-evaluations/nav-milestones.svg";
const imgReportsIcon = "/assets/creative-house/startup-evaluations/nav-reports.svg";
const imgHistoryIcon = "/assets/creative-house/startup-evaluations/nav-history.svg";
const imgSettingsIcon = "/assets/creative-house/startup-evaluations/nav-settings.svg";
const imgLogoutIcon = "/assets/creative-house/startup-evaluations/nav-logout.svg";

export default function AyenehStartupEvaluations() {
  const navigate = useNavigate();

  return (
    <div className="creative-house-dashboard bg-[#f5f8fb] relative w-full h-full" data-node-id="1739:2" data-name="ayeneh-startup-evaluations">
      <div className="absolute bg-[#f5f8fb] h-[900px] left-0 overflow-clip top-0 w-[1216px]" data-node-id="1739:3" data-name="Main Content">
        <div className="[word-break:break-word] absolute bg-[#f5f8fb] h-[62px] leading-[0] left-[28px] overflow-clip text-right top-[22px] w-[1160px]" data-node-id="1740:2" data-name="startup-evaluations-topbar">
          <div className="-translate-x-full -translate-y-1/2 absolute flex flex-col font-sans font-bold h-[30px] justify-center left-[1160px] text-[#17324d] text-[24px] top-[15px] w-[460px]" data-node-id="1740:3">
            <p className="leading-[normal]" dir="auto">
              ارزیابی استارتاپ‌ها
            </p>
          </div>
          <div className="-translate-x-full -translate-y-1/2 absolute flex flex-col font-sans font-normal h-[24px] justify-center left-[1160px] text-[#60758a] text-[13px] top-[44px] w-[550px]" data-node-id="1740:4">
            <p className="leading-[normal]" dir="auto">
              بررسی اولیه صلاحیت استارتاپ پیش از فعال شدن پنل
            </p>
          </div>
        </div>
        <div className="absolute bg-white border border-[#e4ebf1] border-solid h-[104px] left-[28px] overflow-clip rounded-[12px] top-[100px] w-[281px]" data-node-id="1740:7" data-name="startup-stat-card-1">
          <div className="absolute bg-[#fff7e6] left-[17px] overflow-clip rounded-[10px] w-[40px] h-[40px] top-[17px]" data-node-id="1740:8" data-name="stat-icon">
            <div className="absolute left-[8px] w-[24px] h-[24px] top-[8px]" data-node-id="1769:2" data-name="waiting-clock-icon">
              <img alt="" className="absolute block inset-0 max-w-none w-full h-full" src={imgWaitingClockIcon} />
            </div>
          </div>
          <div className="-translate-x-full -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-sans font-medium h-[24px] justify-center leading-[0] left-[262px] text-[#60758a] text-[13px] text-right top-[29px] w-[191px]" data-node-id="1740:9">
            <p className="leading-[normal]" dir="auto">
              در انتظار بررسی
            </p>
          </div>
          <div className="-translate-x-full -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-sans font-bold h-[36px] justify-center leading-[0] left-[262px] text-[#c27a10] text-[28px] text-right top-[65px] w-[191px]" data-node-id="1740:10">
            <p className="leading-[normal]">۸</p>
          </div>
        </div>
        <div className="absolute bg-white border border-[#e4ebf1] border-solid h-[104px] left-[321px] overflow-clip rounded-[12px] top-[100px] w-[281px]" data-node-id="1740:11" data-name="startup-stat-card-2">
          <div className="absolute bg-[#eaf6fe] left-[17px] overflow-clip rounded-[10px] w-[40px] h-[40px] top-[17px]" data-node-id="1740:12" data-name="stat-icon">
            <div className="absolute left-[8px] w-[24px] h-[24px] top-[8px]" data-node-id="1769:5" data-name="evaluation-search-icon">
              <img alt="" className="absolute block inset-0 max-w-none w-full h-full" src={imgEvaluationSearchIcon} />
            </div>
          </div>
          <div className="-translate-x-full -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-sans font-medium h-[24px] justify-center leading-[0] left-[262px] text-[#60758a] text-[13px] text-right top-[29px] w-[191px]" data-node-id="1740:13">
            <p className="leading-[normal]" dir="auto">
              در حال ارزیابی
            </p>
          </div>
          <div className="-translate-x-full -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-sans font-bold h-[36px] justify-center leading-[0] left-[262px] text-[#2094e3] text-[28px] text-right top-[65px] w-[191px]" data-node-id="1740:14">
            <p className="leading-[normal]">۵</p>
          </div>
        </div>
        <div className="absolute bg-white border border-[#e4ebf1] border-solid h-[104px] left-[614px] overflow-clip rounded-[12px] top-[100px] w-[281px]" data-node-id="1740:15" data-name="startup-stat-card-3">
          <div className="absolute bg-[#fdeeee] left-[17px] overflow-clip rounded-[10px] w-[40px] h-[40px] top-[17px]" data-node-id="1740:16" data-name="stat-icon">
            <div className="absolute left-[8px] w-[24px] h-[24px] top-[8px]" data-node-id="1769:9" data-name="needs-completion-icon">
              <img alt="" className="absolute block inset-0 max-w-none w-full h-full" src={imgNeedsCompletionIcon} />
            </div>
          </div>
          <div className="-translate-x-full -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-sans font-medium h-[24px] justify-center leading-[0] left-[262px] text-[#60758a] text-[13px] text-right top-[29px] w-[191px]" data-node-id="1740:17">
            <p className="leading-[normal]" dir="auto">
              نیازمند تکمیل
            </p>
          </div>
          <div className="-translate-x-full -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-sans font-bold h-[36px] justify-center leading-[0] left-[262px] text-[#be4040] text-[28px] text-right top-[65px] w-[191px]" data-node-id="1740:18">
            <p className="leading-[normal]">۳</p>
          </div>
        </div>
        <div className="absolute bg-white border border-[#e4ebf1] border-solid h-[104px] left-[907px] overflow-clip rounded-[12px] top-[100px] w-[281px]" data-node-id="1740:19" data-name="startup-stat-card-4">
          <div className="absolute bg-[#eaf8f0] left-[17px] overflow-clip rounded-[10px] w-[40px] h-[40px] top-[17px]" data-node-id="1740:20" data-name="stat-icon">
            <div className="absolute left-[8px] w-[24px] h-[24px] top-[8px]" data-node-id="1769:14" data-name="approved-check-icon">
              <img alt="" className="absolute block inset-0 max-w-none w-full h-full" src={imgApprovedCheckIcon} />
            </div>
          </div>
          <div className="-translate-x-full -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-sans font-medium h-[24px] justify-center leading-[0] left-[262px] text-[#60758a] text-[13px] text-right top-[29px] w-[191px]" data-node-id="1740:21">
            <p className="leading-[normal]" dir="auto">
              تأییدشده
            </p>
          </div>
          <div className="-translate-x-full -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-sans font-bold h-[36px] justify-center leading-[0] left-[262px] text-[#159455] text-[28px] text-right top-[65px] w-[191px]" data-node-id="1740:22">
            <p className="leading-[normal]">۲۴</p>
          </div>
        </div>
        <div className="absolute bg-white border border-[#e4ebf1] border-solid h-[650px] left-[28px] overflow-clip rounded-[14px] top-[220px] w-[1160px]" data-node-id="1740:23" data-name="startup-evaluation-list">
          <div className="-translate-x-full -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-sans font-bold h-[30px] justify-center leading-[0] left-[1131px] text-[#17324d] text-[20px] text-right top-[34px] w-[372px]" data-node-id="1740:24">
            <p className="leading-[normal]" dir="auto">
              درخواست‌های ارزیابی اولیه
            </p>
          </div>
          <div className="-translate-x-full -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-sans font-normal h-[24px] justify-center leading-[0] left-[1131px] text-[#60758a] text-[12px] text-right top-[63px] w-[612px]" data-node-id="1740:25">
            <p className="leading-[normal]" dir="auto">
              تأیید این مرحله باعث فعال شدن پنل استارتاپ می‌شود.
            </p>
          </div>
          <button onClick={() => navigate("/panel/creative-house/overlays/search")} className="absolute bg-[#f5f8fb] block border border-[#e4ebf1] border-solid cursor-pointer h-[38px] left-[17px] overflow-clip rounded-[10px] top-[19px] w-[290px]" data-node-id="1740:26" data-name="search-box">
            <div className="-translate-x-full -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-sans font-normal h-[38px] justify-center leading-[0] left-[273px] text-[#60758a] text-[12px] text-right top-[18px] w-[260px]" data-node-id="1740:27">
              <p className="leading-[normal]" dir="auto">
                جست‌وجوی نام استارتاپ یا مدیر
              </p>
            </div>
          </button>
          <div className="absolute bg-[#eaf6fe] h-[30px] left-[17px] overflow-clip rounded-[8px] top-[75px] w-[58px]" data-node-id="1740:28" data-name="status-chip">
            <div className="-translate-x-1/2 -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-sans font-medium h-[30px] justify-center leading-[0] left-[29px] text-[#2094e3] text-[12px] text-center top-[15px] w-[58px]" data-node-id="1740:29">
              <p className="leading-[normal]" dir="auto">
                همه
              </p>
            </div>
          </div>
          <div className="absolute bg-[#fff7e6] h-[30px] left-[83px] opacity-80 overflow-clip rounded-[8px] top-[75px] w-[82px]" data-node-id="1740:30" data-name="status-chip">
            <div className="-translate-x-1/2 -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-sans font-medium h-[30px] justify-center leading-[0] left-[41px] text-[#c27a10] text-[12px] text-center top-[15px] w-[82px]" data-node-id="1740:31">
              <p className="leading-[normal]" dir="auto">
                در انتظار
              </p>
            </div>
          </div>
          <div className="absolute bg-[#eaf6fe] h-[30px] left-[173px] opacity-80 overflow-clip rounded-[8px] top-[75px] w-[102px]" data-node-id="1740:32" data-name="status-chip">
            <div className="-translate-x-1/2 -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-sans font-medium h-[30px] justify-center leading-[0] left-[51px] text-[#2094e3] text-[12px] text-center top-[15px] w-[102px]" data-node-id="1740:33">
              <p className="leading-[normal]" dir="auto">
                در حال بررسی
              </p>
            </div>
          </div>
          <div className="absolute bg-[#fdeeee] h-[30px] left-[283px] opacity-80 overflow-clip rounded-[8px] top-[75px] w-[112px]" data-node-id="1740:34" data-name="status-chip">
            <div className="-translate-x-1/2 -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-sans font-medium h-[30px] justify-center leading-[0] left-[56px] text-[#be4040] text-[12px] text-center top-[15px] w-[112px]" data-node-id="1740:35">
              <p className="leading-[normal]" dir="auto">
                نیازمند تکمیل
              </p>
            </div>
          </div>
          <div className="absolute bg-[#eaf8f0] h-[30px] left-[403px] opacity-80 overflow-clip rounded-[8px] top-[75px] w-[90px]" data-node-id="1740:36" data-name="status-chip">
            <div className="-translate-x-1/2 -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-sans font-medium h-[30px] justify-center leading-[0] left-[45px] text-[#159455] text-[12px] text-center top-[15px] w-[90px]" data-node-id="1740:37">
              <p className="leading-[normal]" dir="auto">
                تأییدشده
              </p>
            </div>
          </div>
          <div className="[word-break:break-word] absolute bg-[#f5f8fb] font-sans font-bold h-[44px] leading-[0] left-[17px] overflow-clip rounded-[8px] text-[#60758a] text-[12px] text-right top-[123px] w-[1124px]" data-node-id="1740:38" data-name="table-header">
            <div className="-translate-x-full -translate-y-1/2 absolute flex flex-col h-[44px] justify-center left-[138px] top-[22px] w-[120px]" data-node-id="1740:39">
              <p className="leading-[normal]" dir="auto">
                اقدام
              </p>
            </div>
            <div className="-translate-x-full -translate-y-1/2 absolute flex flex-col h-[44px] justify-center left-[288px] top-[22px] w-[150px]" data-node-id="1740:40">
              <p className="leading-[normal]" dir="auto">
                وضعیت
              </p>
            </div>
            <div className="-translate-x-full -translate-y-1/2 absolute flex flex-col h-[44px] justify-center left-[438px] top-[22px] w-[150px]" data-node-id="1740:41">
              <p className="leading-[normal]" dir="auto">
                تاریخ ثبت
              </p>
            </div>
            <div className="-translate-x-full -translate-y-1/2 absolute flex flex-col h-[44px] justify-center left-[638px] top-[22px] w-[200px]" data-node-id="1740:42">
              <p className="leading-[normal]" dir="auto">
                حوزه فعالیت
              </p>
            </div>
            <div className="-translate-x-full -translate-y-1/2 absolute flex flex-col h-[44px] justify-center left-[828px] top-[22px] w-[190px]" data-node-id="1740:43">
              <p className="leading-[normal]" dir="auto">
                مدیر
              </p>
            </div>
            <div className="-translate-x-full -translate-y-1/2 absolute flex flex-col h-[44px] justify-center left-[1106px] top-[22px] w-[278px]" data-node-id="1740:44">
              <p className="leading-[normal]" dir="auto">
                نام استارتاپ
              </p>
            </div>
          </div>
          <div className="absolute bg-white border border-[#e4ebf1] border-solid h-[70px] left-[17px] overflow-clip rounded-[10px] top-[175px] w-[1124px]" data-node-id="1740:45" data-name="startup-row-1">
            <Link to="/panel/creative-house/startup-evaluations/detail" className="absolute bg-[#2094e3] block cursor-pointer h-[36px] left-[17px] overflow-clip rounded-[9px] top-[16px] w-[104px]" data-node-id="1740:46" data-name="action-button">
              <div className="-translate-x-1/2 -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-sans font-medium h-[36px] justify-center leading-[0] left-[52px] text-[12px] text-center text-white top-[18px] w-[104px]" data-node-id="1740:47">
                <p className="leading-[normal]" dir="auto">
                  شروع ارزیابی
                </p>
              </div>
            </Link>
            <div className="absolute bg-[#fff7e6] h-[30px] left-[145px] overflow-clip rounded-[8px] top-[19px] w-[126px]" data-node-id="1740:48" data-name="status-chip">
              <div className="-translate-x-1/2 -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-sans font-medium h-[30px] justify-center leading-[0] left-[63px] text-[#c27a10] text-[12px] text-center top-[15px] w-[126px]" data-node-id="1740:49">
                <p className="leading-[normal]" dir="auto">
                  در انتظار بررسی
                </p>
              </div>
            </div>
            <div className="-translate-x-full -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-sans font-medium h-[42px] justify-center leading-[0] left-[427px] text-[#17324d] text-[13px] text-right top-[34px] w-[136px]" data-node-id="1740:50">
              <p className="leading-[normal]">۱۴۰۵/۰۶/۲۸</p>
            </div>
            <div className="-translate-x-full -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-sans font-medium h-[42px] justify-center leading-[0] left-[619px] text-[#17324d] text-[13px] text-right top-[34px] w-[174px]" data-node-id="1740:51">
              <p className="leading-[normal]" dir="auto">
                سلامت و بهداشت
              </p>
            </div>
            <div className="-translate-x-full -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-sans font-medium h-[42px] justify-center leading-[0] left-[809px] text-[#17324d] text-[13px] text-right top-[34px] w-[166px]" data-node-id="1740:52">
              <p className="leading-[normal]" dir="auto">
                مریم احمدی
              </p>
            </div>
            <div className="-translate-x-full -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-sans font-bold h-[26px] justify-center leading-[0] left-[1103px] text-[#17324d] text-[14px] text-right top-[22px] w-[270px]" data-node-id="1740:53">
              <p className="leading-[normal]" dir="auto">
                سلامت‌یار شرق
              </p>
            </div>
            <div className="-translate-x-full -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-sans font-normal h-[22px] justify-center leading-[0] left-[1103px] text-[#60758a] text-[11px] text-right top-[46px] w-[270px]" data-node-id="1740:54">
              <p className="leading-[normal]" dir="auto">
                درخواست ارزیابی اولیه
              </p>
            </div>
          </div>
          <div className="absolute bg-white border border-[#e4ebf1] border-solid h-[70px] left-[17px] overflow-clip rounded-[10px] top-[257px] w-[1124px]" data-node-id="1740:55" data-name="startup-row-2">
            <Link to="/panel/creative-house/startup-evaluations/detail" className="absolute bg-[#2094e3] block cursor-pointer h-[36px] left-[17px] overflow-clip rounded-[9px] top-[16px] w-[104px]" data-node-id="1740:56" data-name="action-button">
              <div className="-translate-x-1/2 -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-sans font-medium h-[36px] justify-center leading-[0] left-[52px] text-[12px] text-center text-white top-[18px] w-[104px]" data-node-id="1740:57">
                <p className="leading-[normal]" dir="auto">
                  ادامه ارزیابی
                </p>
              </div>
            </Link>
            <div className="absolute bg-[#eaf6fe] h-[30px] left-[145px] overflow-clip rounded-[8px] top-[19px] w-[126px]" data-node-id="1740:58" data-name="status-chip">
              <div className="-translate-x-1/2 -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-sans font-medium h-[30px] justify-center leading-[0] left-[63px] text-[#2094e3] text-[12px] text-center top-[15px] w-[126px]" data-node-id="1740:59">
                <p className="leading-[normal]" dir="auto">
                  در حال ارزیابی
                </p>
              </div>
            </div>
            <div className="-translate-x-full -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-sans font-medium h-[42px] justify-center leading-[0] left-[427px] text-[#17324d] text-[13px] text-right top-[34px] w-[136px]" data-node-id="1740:60">
              <p className="leading-[normal]">۱۴۰۵/۰۶/۲۷</p>
            </div>
            <div className="-translate-x-full -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-sans font-medium h-[42px] justify-center leading-[0] left-[619px] text-[#17324d] text-[13px] text-right top-[34px] w-[174px]" data-node-id="1740:61">
              <p className="leading-[normal]" dir="auto">
                آموزش و اشتغال
              </p>
            </div>
            <div className="-translate-x-full -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-sans font-medium h-[42px] justify-center leading-[0] left-[809px] text-[#17324d] text-[13px] text-right top-[34px] w-[166px]" data-node-id="1740:62">
              <p className="leading-[normal]" dir="auto">
                علی رضایی
              </p>
            </div>
            <div className="-translate-x-full -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-sans font-bold h-[26px] justify-center leading-[0] left-[1103px] text-[#17324d] text-[14px] text-right top-[22px] w-[270px]" data-node-id="1740:63">
              <p className="leading-[normal]" dir="auto">
                آینده‌ساز مهارت
              </p>
            </div>
            <div className="-translate-x-full -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-sans font-normal h-[22px] justify-center leading-[0] left-[1103px] text-[#60758a] text-[11px] text-right top-[46px] w-[270px]" data-node-id="1740:64">
              <p className="leading-[normal]" dir="auto">
                درخواست ارزیابی اولیه
              </p>
            </div>
          </div>
          <div className="absolute bg-white border border-[#e4ebf1] border-solid h-[70px] left-[17px] overflow-clip rounded-[10px] top-[339px] w-[1124px]" data-node-id="1740:65" data-name="startup-row-3">
            <Link to="/panel/creative-house/startup-evaluations/detail" className="absolute bg-[#f5f8fb] block border border-[#e4ebf1] border-solid cursor-pointer h-[36px] left-[17px] overflow-clip rounded-[9px] top-[16px] w-[104px]" data-node-id="1740:66" data-name="action-button">
              <div className="-translate-x-1/2 -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-sans font-medium h-[36px] justify-center leading-[0] left-[51px] text-[#17324d] text-[12px] text-center top-[17px] w-[104px]" data-node-id="1740:67">
                <p className="leading-[normal]" dir="auto">
                  مشاهده
                </p>
              </div>
            </Link>
            <div className="absolute bg-[#fdeeee] h-[30px] left-[145px] overflow-clip rounded-[8px] top-[19px] w-[126px]" data-node-id="1740:68" data-name="status-chip">
              <div className="-translate-x-1/2 -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-sans font-medium h-[30px] justify-center leading-[0] left-[63px] text-[#be4040] text-[12px] text-center top-[15px] w-[126px]" data-node-id="1740:69">
                <p className="leading-[normal]" dir="auto">
                  نیازمند تکمیل
                </p>
              </div>
            </div>
            <div className="-translate-x-full -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-sans font-medium h-[42px] justify-center leading-[0] left-[427px] text-[#17324d] text-[13px] text-right top-[34px] w-[136px]" data-node-id="1740:70">
              <p className="leading-[normal]">۱۴۰۵/۰۶/۲۵</p>
            </div>
            <div className="-translate-x-full -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-sans font-medium h-[42px] justify-center leading-[0] left-[619px] text-[#17324d] text-[13px] text-right top-[34px] w-[174px]" data-node-id="1740:71">
              <p className="leading-[normal]" dir="auto">
                کسب‌وکار و اشتغال
              </p>
            </div>
            <div className="-translate-x-full -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-sans font-medium h-[42px] justify-center leading-[0] left-[809px] text-[#17324d] text-[13px] text-right top-[34px] w-[166px]" data-node-id="1740:72">
              <p className="leading-[normal]" dir="auto">
                زهرا محمدی
              </p>
            </div>
            <div className="-translate-x-full -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-sans font-bold h-[26px] justify-center leading-[0] left-[1103px] text-[#17324d] text-[14px] text-right top-[22px] w-[270px]" data-node-id="1740:73">
              <p className="leading-[normal]" dir="auto">
                روستابانوان گلستان
              </p>
            </div>
            <div className="-translate-x-full -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-sans font-normal h-[22px] justify-center leading-[0] left-[1103px] text-[#60758a] text-[11px] text-right top-[46px] w-[270px]" data-node-id="1740:74">
              <p className="leading-[normal]" dir="auto">
                درخواست ارزیابی اولیه
              </p>
            </div>
          </div>
          <div className="absolute bg-white border border-[#e4ebf1] border-solid h-[70px] left-[17px] overflow-clip rounded-[10px] top-[421px] w-[1124px]" data-node-id="1740:75" data-name="startup-row-4">
            <Link to="/panel/creative-house/startup-evaluations/detail" className="absolute bg-[#f5f8fb] block border border-[#e4ebf1] border-solid cursor-pointer h-[36px] left-[17px] overflow-clip rounded-[9px] top-[16px] w-[104px]" data-node-id="1740:76" data-name="action-button">
              <div className="-translate-x-1/2 -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-sans font-medium h-[36px] justify-center leading-[0] left-[51px] text-[#17324d] text-[12px] text-center top-[17px] w-[104px]" data-node-id="1740:77">
                <p className="leading-[normal]" dir="auto">
                  مشاهده
                </p>
              </div>
            </Link>
            <div className="absolute bg-[#eaf8f0] h-[30px] left-[145px] overflow-clip rounded-[8px] top-[19px] w-[126px]" data-node-id="1740:78" data-name="status-chip">
              <div className="-translate-x-1/2 -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-sans font-medium h-[30px] justify-center leading-[0] left-[63px] text-[#159455] text-[12px] text-center top-[15px] w-[126px]" data-node-id="1740:79">
                <p className="leading-[normal]" dir="auto">
                  تأییدشده
                </p>
              </div>
            </div>
            <div className="-translate-x-full -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-sans font-medium h-[42px] justify-center leading-[0] left-[427px] text-[#17324d] text-[13px] text-right top-[34px] w-[136px]" data-node-id="1740:80">
              <p className="leading-[normal]">۱۴۰۵/۰۶/۲۳</p>
            </div>
            <div className="-translate-x-full -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-sans font-medium h-[42px] justify-center leading-[0] left-[619px] text-[#17324d] text-[13px] text-right top-[34px] w-[174px]" data-node-id="1740:81">
              <p className="leading-[normal]" dir="auto">
                فناوری اجتماعی
              </p>
            </div>
            <div className="-translate-x-full -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-sans font-medium h-[42px] justify-center leading-[0] left-[809px] text-[#17324d] text-[13px] text-right top-[34px] w-[166px]" data-node-id="1740:82">
              <p className="leading-[normal]" dir="auto">
                سارا کریمی
              </p>
            </div>
            <div className="-translate-x-full -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-sans font-bold h-[26px] justify-center leading-[0] left-[1103px] text-[#17324d] text-[14px] text-right top-[22px] w-[270px]" data-node-id="1740:83">
              <p className="leading-[normal]" dir="auto">
                نوآوران فردا
              </p>
            </div>
            <div className="-translate-x-full -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-sans font-normal h-[22px] justify-center leading-[0] left-[1103px] text-[#60758a] text-[11px] text-right top-[46px] w-[270px]" data-node-id="1740:84">
              <p className="leading-[normal]" dir="auto">
                درخواست ارزیابی اولیه
              </p>
            </div>
          </div>
          <div className="absolute bg-white border border-[#e4ebf1] border-solid h-[70px] left-[17px] overflow-clip rounded-[10px] top-[503px] w-[1124px]" data-node-id="1740:85" data-name="startup-row-5">
            <Link to="/panel/creative-house/startup-evaluations/detail" className="absolute bg-[#f5f8fb] block border border-[#e4ebf1] border-solid cursor-pointer h-[36px] left-[17px] overflow-clip rounded-[9px] top-[16px] w-[104px]" data-node-id="1740:86" data-name="action-button">
              <div className="-translate-x-1/2 -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-sans font-medium h-[36px] justify-center leading-[0] left-[51px] text-[#17324d] text-[12px] text-center top-[17px] w-[104px]" data-node-id="1740:87">
                <p className="leading-[normal]" dir="auto">
                  مشاهده
                </p>
              </div>
            </Link>
            <div className="absolute bg-[#fdeeee] h-[30px] left-[145px] overflow-clip rounded-[8px] top-[19px] w-[126px]" data-node-id="1740:88" data-name="status-chip">
              <div className="-translate-x-1/2 -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-sans font-medium h-[30px] justify-center leading-[0] left-[63px] text-[#be4040] text-[12px] text-center top-[15px] w-[126px]" data-node-id="1740:89">
                <p className="leading-[normal]" dir="auto">
                  ردشده
                </p>
              </div>
            </div>
            <div className="-translate-x-full -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-sans font-medium h-[42px] justify-center leading-[0] left-[427px] text-[#17324d] text-[13px] text-right top-[34px] w-[136px]" data-node-id="1740:90">
              <p className="leading-[normal]">۱۴۰۵/۰۶/۲۰</p>
            </div>
            <div className="-translate-x-full -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-sans font-medium h-[42px] justify-center leading-[0] left-[619px] text-[#17324d] text-[13px] text-right top-[34px] w-[174px]" data-node-id="1740:91">
              <p className="leading-[normal]" dir="auto">
                سلامت دیجیتال
              </p>
            </div>
            <div className="-translate-x-full -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-sans font-medium h-[42px] justify-center leading-[0] left-[809px] text-[#17324d] text-[13px] text-right top-[34px] w-[166px]" data-node-id="1740:92">
              <p className="leading-[normal]" dir="auto">
                امیر حسینی
              </p>
            </div>
            <div className="-translate-x-full -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-sans font-bold h-[26px] justify-center leading-[0] left-[1103px] text-[#17324d] text-[14px] text-right top-[22px] w-[270px]" data-node-id="1740:93">
              <p className="leading-[normal]" dir="auto">
                همیار سلامت
              </p>
            </div>
            <div className="-translate-x-full -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-sans font-normal h-[22px] justify-center leading-[0] left-[1103px] text-[#60758a] text-[11px] text-right top-[46px] w-[270px]" data-node-id="1740:94">
              <p className="leading-[normal]" dir="auto">
                درخواست ارزیابی اولیه
              </p>
            </div>
          </div>
          <div className="absolute h-[38px] left-[17px] overflow-clip top-[595px] w-[1124px]" data-node-id="1816:2796" data-name="pagination-footer">
            <div className="-translate-x-full -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-sans font-normal h-[24px] justify-center leading-[0] left-[1106px] text-[#60758a] text-[12px] text-right top-[19px] w-[160px]" data-node-id="1816:2797">
              <p className="leading-[normal]" dir="auto">
                صفحه ۱ از ۳
              </p>
            </div>
            <button onClick={() => navigate("/panel/creative-house/overlays/pagination")} className="absolute bg-white block border border-[#dde7f0] border-solid cursor-pointer left-[432px] overflow-clip rounded-[8px] w-[34px] h-[34px] top-[2px]" data-node-id="1816:2798" data-name="page-button">
              <div className="-translate-x-1/2 -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-sans font-normal justify-center leading-[0] left-[16px] w-[34px] h-[34px] text-[#60758a] text-[13px] text-center top-[16px]" data-node-id="1816:2799">
                <p className="leading-[normal]" dir="auto">
                  ‹
                </p>
              </div>
            </button>
            <div className="absolute bg-[#2094e3] border border-[#2094e3] border-solid left-[474px] overflow-clip rounded-[8px] w-[34px] h-[34px] top-[2px]" data-node-id="1816:2800" data-name="page-active">
              <div className="-translate-x-1/2 -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-sans font-normal justify-center leading-[0] left-[16px] w-[34px] h-[34px] text-[13px] text-center text-white top-[16px]" data-node-id="1816:2801">
                <p className="leading-[normal]" dir="auto">
                  ۱
                </p>
              </div>
            </div>
            <button onClick={() => navigate("/panel/creative-house/overlays/pagination")} className="absolute bg-white block border border-[#dde7f0] border-solid cursor-pointer left-[516px] overflow-clip rounded-[8px] w-[34px] h-[34px] top-[2px]" data-node-id="1816:2802" data-name="page-button">
              <div className="-translate-x-1/2 -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-sans font-normal justify-center leading-[0] left-[16px] w-[34px] h-[34px] text-[#60758a] text-[13px] text-center top-[16px]" data-node-id="1816:2803">
                <p className="leading-[normal]" dir="auto">
                  ۲
                </p>
              </div>
            </button>
            <button onClick={() => navigate("/panel/creative-house/overlays/pagination")} className="absolute bg-white block border border-[#dde7f0] border-solid cursor-pointer left-[558px] overflow-clip rounded-[8px] w-[34px] h-[34px] top-[2px]" data-node-id="1816:2804" data-name="page-button">
              <div className="-translate-x-1/2 -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-sans font-normal justify-center leading-[0] left-[16px] w-[34px] h-[34px] text-[#60758a] text-[13px] text-center top-[16px]" data-node-id="1816:2805">
                <p className="leading-[normal]" dir="auto">
                  ۳
                </p>
              </div>
            </button>
            <button onClick={() => navigate("/panel/creative-house/overlays/pagination")} className="absolute bg-white block border border-[#dde7f0] border-solid cursor-pointer left-[600px] overflow-clip rounded-[8px] w-[34px] h-[34px] top-[2px]" data-node-id="1816:2806" data-name="page-button">
              <div className="-translate-x-1/2 -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-sans font-normal justify-center leading-[0] left-[16px] w-[34px] h-[34px] text-[#60758a] text-[13px] text-center top-[16px]" data-node-id="1816:2807">
                <p className="leading-[normal]" dir="auto">
                  ›
                </p>
              </div>
            </button>
          </div>
        </div>
      </div>
      <div className="absolute bg-[#17324d] content-stretch flex flex-col gap-[10px] h-[900px] items-end left-[1216px] pb-[18px] pt-[20px] px-[16px] top-0 w-[224px]" data-node-id="1739:161" data-name="colored-sidebar">
        <div className="bg-white content-stretch flex h-[56px] items-center justify-end overflow-clip px-[10px] py-[8px] relative rounded-[12px] shrink-0 w-[192px]" data-node-id="1739:162" data-name="brand-logo">
          <div className="h-[40px] relative shrink-0 w-[118px]" data-node-id="1739:163" data-name="ChatGPT Image ۲۹ مرداد ۱۴۰۵، ۱۵_۱۶_۳۵ 1">
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <img alt="" className="absolute h-full left-[5.28%] max-w-none top-0 w-[100.73%]" src={imgChatGptImage1} />
            </div>
          </div>
        </div>
        <div className="content-stretch flex flex-col h-[64px] items-start justify-end overflow-clip px-[8px] py-[7px] relative shrink-0 w-[192px]" data-node-id="1738:2705" data-name="panel-identity">
          <p className="[word-break:break-word] font-sans font-bold h-[39px] leading-[normal] relative shrink-0 text-[13px] text-center text-white w-[176px]" dir="auto" data-node-id="1738:2706">
            خانه خلاق و نوآوری آینه
          </p>
        </div>
        <Link to="/panel/creative-house" className="content-stretch cursor-pointer flex gap-[10px] h-[38px] items-center justify-end overflow-clip px-[12px] relative rounded-[9px] shrink-0 w-[192px]" data-node-id="1739:167" data-name="dashboard-nav">
          <p className="[word-break:break-word] font-sans font-medium leading-[normal] relative shrink-0 text-[12px] text-right text-white w-[142px]" dir="auto" data-node-id="1739:168">
            داشبورد
          </p>
          <div className="relative shrink-0 w-[18px] h-[18px]" data-node-id="1739:169" data-name="dashboard-icon">
            <img alt="" className="absolute block inset-0 max-w-none w-full h-full" src={imgDashboardIcon} />
          </div>
        </Link>
        <div className="bg-[#2094e3] content-stretch flex gap-[10px] h-[38px] items-center justify-end overflow-clip px-[12px] relative rounded-[9px] shrink-0 w-[192px]" data-node-id="1739:174" data-name="startup-evaluations-nav">
          <p className="[word-break:break-word] font-sans font-normal leading-[normal] relative shrink-0 text-[12px] text-right text-white w-[142px]" dir="auto" data-node-id="1739:175">
            ارزیابی استارتاپ‌ها
          </p>
          <div className="relative shrink-0 w-[18px] h-[18px]" data-node-id="1739:176" data-name="users-icon">
            <img alt="" className="absolute block inset-0 max-w-none w-full h-full" src={imgUsersIcon} />
          </div>
        </div>
        <Link to="/panel/creative-house/project-evaluations" className="content-stretch cursor-pointer flex gap-[10px] h-[38px] items-center justify-end overflow-clip px-[12px] relative rounded-[9px] shrink-0 w-[192px]" data-node-id="1739:181" data-name="project-evaluations-nav">
          <p className="[word-break:break-word] font-sans font-normal leading-[normal] relative shrink-0 text-[12px] text-right text-white w-[142px]" dir="auto" data-node-id="1739:182">
            ارزیابی پروژه‌ها
          </p>
          <div className="relative shrink-0 w-[18px] h-[18px]" data-node-id="1739:183" data-name="project-icon">
            <img alt="" className="absolute block inset-0 max-w-none w-full h-full" src={imgProjectIcon} />
          </div>
        </Link>
        <Link to="/panel/creative-house/milestone-evaluations" className="content-stretch cursor-pointer flex gap-[10px] h-[38px] items-center justify-end overflow-clip px-[12px] relative rounded-[9px] shrink-0 w-[192px]" data-node-id="1739:186" data-name="milestone-evaluations-nav">
          <p className="[word-break:break-word] font-sans font-normal leading-[normal] relative shrink-0 text-[12px] text-right text-white w-[142px]" dir="auto" data-node-id="1739:187">
            ارزیابی مراحل پروژه
          </p>
          <div className="relative shrink-0 w-[18px] h-[18px]" data-node-id="1739:188" data-name="milestone-icon">
            <img alt="" className="absolute block inset-0 max-w-none w-full h-full" src={imgMilestoneIcon} />
          </div>
        </Link>
        <Link to="/panel/creative-house/reports" className="content-stretch cursor-pointer flex gap-[10px] h-[38px] items-center justify-end overflow-clip px-[12px] relative rounded-[9px] shrink-0 w-[192px]" data-node-id="1739:191" data-name="reports-nav">
          <p className="[word-break:break-word] font-sans font-normal leading-[normal] relative shrink-0 text-[12px] text-right text-white w-[142px]" dir="auto" data-node-id="1739:192">
            گزارش‌ها
          </p>
          <div className="relative shrink-0 w-[18px] h-[18px]" data-node-id="1739:193" data-name="reports-icon">
            <img alt="" className="absolute block inset-0 max-w-none w-full h-full" src={imgReportsIcon} />
          </div>
        </Link>
        <Link to="/panel/creative-house/evaluation-history" className="content-stretch cursor-pointer flex gap-[10px] h-[38px] items-center justify-end overflow-clip px-[12px] relative rounded-[9px] shrink-0 w-[192px]" data-node-id="1739:198" data-name="evaluation-history-nav">
          <p className="[word-break:break-word] font-sans font-normal leading-[normal] relative shrink-0 text-[12px] text-right text-white w-[142px]" dir="auto" data-node-id="1739:199">
            سوابق ارزیابی
          </p>
          <div className="relative shrink-0 w-[18px] h-[18px]" data-node-id="1739:200" data-name="history-icon">
            <img alt="" className="absolute block inset-0 max-w-none w-full h-full" src={imgHistoryIcon} />
          </div>
        </Link>
        <Link to="/panel/creative-house/settings" className="content-stretch cursor-pointer flex gap-[10px] h-[38px] items-center justify-end overflow-clip px-[12px] relative rounded-[9px] shrink-0 w-[192px]" data-node-id="1739:204" data-name="settings-nav">
          <p className="[word-break:break-word] font-sans font-normal leading-[normal] relative shrink-0 text-[12px] text-right text-white w-[142px]" dir="auto" data-node-id="1739:205">
            تنظیمات
          </p>
          <div className="relative shrink-0 w-[18px] h-[18px]" data-node-id="1739:206" data-name="settings-icon">
            <img alt="" className="absolute block inset-0 max-w-none w-full h-full" src={imgSettingsIcon} />
          </div>
        </Link>
        <div className="flex-[1_0_0] min-h-px relative w-[192px]" data-node-id="1739:209" data-name="sidebar-spacer" />
        <Link to="/panel/creative-house/overlays/logout" className="bg-white content-stretch cursor-pointer flex gap-[10px] h-[38px] items-center justify-end opacity-96 overflow-clip px-[12px] relative rounded-[9px] shrink-0 w-[192px]" data-node-id="1739:210" data-name="logout-nav">
          <p className="[word-break:break-word] font-sans font-medium leading-[normal] relative shrink-0 text-[#17324d] text-[12px] text-right w-[142px]" dir="auto" data-node-id="1739:211">
            خروج از سیستم
          </p>
          <div className="relative shrink-0 w-[18px] h-[18px]" data-node-id="1739:212" data-name="logout-icon">
            <img alt="" className="absolute block inset-0 max-w-none w-full h-full" src={imgLogoutIcon} />
          </div>
        </Link>
      </div>
    </div>
  );
}