import "../index.css";
import { Link } from "react-router-dom";

const imgChatGptImage1 = "/assets/creative-house/project-evaluations/logo.png";
const imgStatIcon = "/assets/creative-house/project-evaluations/stat-1.svg";
const imgStatIcon1 = "/assets/creative-house/project-evaluations/stat-2.svg";
const imgStatIcon2 = "/assets/creative-house/project-evaluations/stat-3.svg";
const imgStatIcon3 = "/assets/creative-house/project-evaluations/stat-4.svg";
const imgDashboardIcon = "/assets/creative-house/project-evaluations/nav-dashboard.svg";
const imgUsersIcon = "/assets/creative-house/project-evaluations/nav-startups.svg";
const imgProjectIcon = "/assets/creative-house/project-evaluations/nav-projects.svg";
const imgMilestoneIcon = "/assets/creative-house/project-evaluations/nav-milestones.svg";
const imgReportsIcon = "/assets/creative-house/project-evaluations/nav-reports.svg";
const imgHistoryIcon = "/assets/creative-house/project-evaluations/nav-history.svg";
const imgSettingsIcon = "/assets/creative-house/project-evaluations/nav-settings.svg";
const imgLogoutIcon = "/assets/creative-house/project-evaluations/nav-logout.svg";

export default function AyenehProjectEvaluations() {
  return (
    <div className="creative-house-dashboard bg-[#f5f8fb] relative w-full h-full" data-node-id="1759:2" data-name="ayeneh-project-evaluations">
      <div className="absolute bg-[#f5f8fb] h-[900px] left-0 overflow-clip top-0 w-[1216px]" data-node-id="1759:3" data-name="Main Content">
        <div className="absolute bg-[#f5f8fb] h-[62px] left-[28px] overflow-clip top-[22px] w-[1160px]" data-node-id="1759:4" data-name="project-evaluations-topbar">
          <div className="-translate-x-full -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-sans font-bold h-[30px] justify-center leading-[0] left-[1160px] text-[#17324d] text-[24px] text-right top-[15px] w-[460px]" data-node-id="1759:5">
            <p className="leading-[normal]" dir="auto">
              ارزیابی پروژه‌ها
            </p>
          </div>
          <div className="-translate-x-full -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-sans font-normal h-[24px] justify-center leading-[0] left-[1160px] text-[#60758a] text-[13px] text-right top-[44px] w-[550px]" data-node-id="1759:6">
            <p className="leading-[normal]" dir="auto">
              بررسی پروژه‌های ثبت‌شده استارتاپ‌های تأییدشده پیش از انتشار و اجرا
            </p>
          </div>
          <div className="absolute bg-[#eaf6fe] h-[30px] left-0 overflow-clip rounded-[8px] top-[10px] w-[220px]" data-node-id="1759:7" data-name="status-chip">
            <div className="-translate-x-1/2 -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-sans font-medium h-[30px] justify-center leading-[0] left-[110px] text-[#2094e3] text-[12px] text-center top-[15px] w-[220px]" data-node-id="1759:8">
              <p className="leading-[normal]" dir="auto">
                پروژه‌ها بر اساس اطلاعات ثبت‌شده سامانه
              </p>
            </div>
          </div>
        </div>
        <div className="absolute bg-white border border-[#e4ebf1] border-solid h-[104px] left-[28px] overflow-clip rounded-[12px] top-[100px] w-[281px]" data-node-id="1759:9" data-name="project-stat-card-1">
          <div className="absolute left-[17px] w-[40px] h-[40px] top-[17px]" data-node-id="1759:10" data-name="stat-icon">
            <img alt="" className="absolute block inset-0 max-w-none w-full h-full" src={imgStatIcon} />
          </div>
          <div className="-translate-x-full -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-sans font-medium h-[24px] justify-center leading-[0] left-[262px] text-[#60758a] text-[13px] text-right top-[29px] w-[191px]" data-node-id="1759:11">
            <p className="leading-[normal]" dir="auto">
              پروژه‌های در صف ارزیابی
            </p>
          </div>
          <div className="-translate-x-full -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-sans font-bold h-[36px] justify-center leading-[0] left-[262px] text-[#c27a10] text-[28px] text-right top-[65px] w-[191px]" data-node-id="1759:12">
            <p className="leading-[normal]" dir="auto">
              ۵ پروژه
            </p>
          </div>
        </div>
        <div className="absolute bg-white border border-[#e4ebf1] border-solid h-[104px] left-[321px] overflow-clip rounded-[12px] top-[100px] w-[281px]" data-node-id="1759:13" data-name="project-stat-card-2">
          <div className="absolute left-[17px] w-[40px] h-[40px] top-[17px]" data-node-id="1759:14" data-name="stat-icon">
            <img alt="" className="absolute block inset-0 max-w-none w-full h-full" src={imgStatIcon1} />
          </div>
          <div className="-translate-x-full -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-sans font-medium h-[24px] justify-center leading-[0] left-[262px] text-[#60758a] text-[13px] text-right top-[29px] w-[191px]" data-node-id="1759:15">
            <p className="leading-[normal]" dir="auto">
              مجموع بودجه هدف
            </p>
          </div>
          <div className="-translate-x-full -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-sans font-bold h-[36px] justify-center leading-[0] left-[262px] text-[#2094e3] text-[28px] text-right top-[65px] w-[191px]" data-node-id="1759:16">
            <p className="leading-[normal]" dir="auto">
              ۱٫۸۵ میلیارد
            </p>
          </div>
        </div>
        <div className="absolute bg-white border border-[#e4ebf1] border-solid h-[104px] left-[614px] overflow-clip rounded-[12px] top-[100px] w-[281px]" data-node-id="1759:17" data-name="project-stat-card-3">
          <div className="absolute left-[17px] w-[40px] h-[40px] top-[17px]" data-node-id="1759:18" data-name="stat-icon">
            <img alt="" className="absolute block inset-0 max-w-none w-full h-full" src={imgStatIcon2} />
          </div>
          <div className="-translate-x-full -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-sans font-medium h-[24px] justify-center leading-[0] left-[262px] text-[#60758a] text-[13px] text-right top-[29px] w-[191px]" data-node-id="1759:19">
            <p className="leading-[normal]" dir="auto">
              استان‌های تحت پوشش
            </p>
          </div>
          <div className="-translate-x-full -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-sans font-bold h-[36px] justify-center leading-[0] left-[262px] text-[#be4040] text-[28px] text-right top-[65px] w-[191px]" data-node-id="1759:20">
            <p className="leading-[normal]" dir="auto">
              ۴ استان
            </p>
          </div>
        </div>
        <div className="absolute bg-white border border-[#e4ebf1] border-solid h-[104px] left-[907px] overflow-clip rounded-[12px] top-[100px] w-[281px]" data-node-id="1759:21" data-name="project-stat-card-4">
          <div className="absolute left-[17px] w-[40px] h-[40px] top-[17px]" data-node-id="1759:22" data-name="stat-icon">
            <img alt="" className="absolute block inset-0 max-w-none w-full h-full" src={imgStatIcon3} />
          </div>
          <div className="-translate-x-full -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-sans font-medium h-[24px] justify-center leading-[0] left-[262px] text-[#60758a] text-[13px] text-right top-[29px] w-[191px]" data-node-id="1759:23">
            <p className="leading-[normal]" dir="auto">
              پروژه‌های دارای KPI
            </p>
          </div>
          <div className="-translate-x-full -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-sans font-bold h-[36px] justify-center leading-[0] left-[262px] text-[#159455] text-[28px] text-right top-[65px] w-[191px]" data-node-id="1759:24">
            <p className="leading-[normal]" dir="auto">
              ۵ پروژه
            </p>
          </div>
        </div>
        <div className="absolute bg-white border border-[#e4ebf1] border-solid h-[650px] left-[28px] overflow-clip rounded-[14px] top-[220px] w-[1160px]" data-node-id="1759:25" data-name="project-evaluation-list">
          <div className="-translate-x-full -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-sans font-bold h-[30px] justify-center leading-[0] left-[1131px] text-[#17324d] text-[20px] text-right top-[34px] w-[372px]" data-node-id="1759:26">
            <p className="leading-[normal]" dir="auto">
              پروژه‌های در صف ارزیابی
            </p>
          </div>
          <div className="-translate-x-full -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-sans font-normal h-[24px] justify-center leading-[0] left-[1131px] text-[#60758a] text-[12px] text-right top-[63px] w-[612px]" data-node-id="1759:27">
            <p className="leading-[normal]" dir="auto">
              بررسی مسئله، جامعه هدف، KPIها، بودجه و مراحل اجرا پیش از تأیید پروژه
            </p>
          </div>
          <button className="absolute bg-[#f5f8fb] block border border-[#e4ebf1] border-solid cursor-pointer h-[38px] left-[17px] overflow-clip rounded-[10px] top-[19px] w-[290px]" data-node-id="1759:28" data-name="search-box">
            <div className="-translate-x-full -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-sans font-normal h-[38px] justify-center leading-[0] left-[273px] text-[#60758a] text-[12px] text-right top-[18px] w-[260px]" data-node-id="1759:29">
              <p className="leading-[normal]" dir="auto">
                جست‌وجوی نام پروژه یا استارتاپ
              </p>
            </div>
          </button>
          <div className="absolute bg-[#eaf6fe] h-[30px] left-[17px] overflow-clip rounded-[8px] top-[75px] w-[58px]" data-node-id="1759:30" data-name="status-chip">
            <div className="-translate-x-1/2 -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-sans font-medium h-[30px] justify-center leading-[0] left-[29px] text-[#2094e3] text-[12px] text-center top-[15px] w-[58px]" data-node-id="1759:31">
              <p className="leading-[normal]" dir="auto">
                همه
              </p>
            </div>
          </div>
          <div className="absolute bg-[#fff7e6] h-[30px] left-[83px] opacity-80 overflow-clip rounded-[8px] top-[75px] w-[82px]" data-node-id="1759:32" data-name="status-chip">
            <div className="-translate-x-1/2 -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-sans font-medium h-[30px] justify-center leading-[0] left-[41px] text-[#c27a10] text-[12px] text-center top-[15px] w-[82px]" data-node-id="1759:33">
              <p className="leading-[normal]" dir="auto">
                در انتظار
              </p>
            </div>
          </div>
          <div className="absolute bg-[#eaf6fe] h-[30px] left-[173px] opacity-80 overflow-clip rounded-[8px] top-[75px] w-[102px]" data-node-id="1759:34" data-name="status-chip">
            <div className="-translate-x-1/2 -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-sans font-medium h-[30px] justify-center leading-[0] left-[51px] text-[#2094e3] text-[12px] text-center top-[15px] w-[102px]" data-node-id="1759:35">
              <p className="leading-[normal]" dir="auto">
                در حال بررسی
              </p>
            </div>
          </div>
          <div className="absolute bg-[#fdeeee] h-[30px] left-[283px] opacity-80 overflow-clip rounded-[8px] top-[75px] w-[112px]" data-node-id="1759:36" data-name="status-chip">
            <div className="-translate-x-1/2 -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-sans font-medium h-[30px] justify-center leading-[0] left-[56px] text-[#be4040] text-[12px] text-center top-[15px] w-[112px]" data-node-id="1759:37">
              <p className="leading-[normal]" dir="auto">
                نیازمند تکمیل
              </p>
            </div>
          </div>
          <div className="absolute bg-[#eaf8f0] h-[30px] left-[403px] opacity-80 overflow-clip rounded-[8px] top-[75px] w-[90px]" data-node-id="1759:38" data-name="status-chip">
            <div className="-translate-x-1/2 -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-sans font-medium h-[30px] justify-center leading-[0] left-[45px] text-[#159455] text-[12px] text-center top-[15px] w-[90px]" data-node-id="1759:39">
              <p className="leading-[normal]" dir="auto">
                تأییدشده
              </p>
            </div>
          </div>
          <div className="[word-break:break-word] absolute bg-[#f5f8fb] font-sans font-bold h-[44px] leading-[0] left-[17px] overflow-clip rounded-[8px] text-[#60758a] text-[12px] text-right top-[123px] w-[1124px]" data-node-id="1759:40" data-name="table-header">
            <div className="-translate-x-full -translate-y-1/2 absolute flex flex-col h-[44px] justify-center left-[138px] top-[22px] w-[120px]" data-node-id="1759:41">
              <p className="leading-[normal]" dir="auto">
                اقدام
              </p>
            </div>
            <div className="-translate-x-full -translate-y-1/2 absolute flex flex-col h-[44px] justify-center left-[288px] top-[22px] w-[150px]" data-node-id="1759:42">
              <p className="leading-[normal]" dir="auto">
                وضعیت
              </p>
            </div>
            <div className="-translate-x-full -translate-y-1/2 absolute flex flex-col h-[44px] justify-center left-[438px] top-[22px] w-[150px]" data-node-id="1759:43">
              <p className="leading-[normal]" dir="auto">
                بودجه هدف
              </p>
            </div>
            <div className="-translate-x-full -translate-y-1/2 absolute flex flex-col h-[44px] justify-center left-[638px] top-[22px] w-[200px]" data-node-id="1759:44">
              <p className="leading-[normal]" dir="auto">
                استان
              </p>
            </div>
            <div className="-translate-x-full -translate-y-1/2 absolute flex flex-col h-[44px] justify-center left-[828px] top-[22px] w-[190px]" data-node-id="1759:45">
              <p className="leading-[normal]" dir="auto">
                استارتاپ مجری
              </p>
            </div>
            <div className="-translate-x-full -translate-y-1/2 absolute flex flex-col h-[44px] justify-center left-[1106px] top-[22px] w-[278px]" data-node-id="1759:46">
              <p className="leading-[normal]" dir="auto">
                نام پروژه
              </p>
            </div>
          </div>
          <div className="absolute bg-white border border-[#e4ebf1] border-solid h-[70px] left-[17px] overflow-clip rounded-[10px] top-[175px] w-[1124px]" data-node-id="1759:47" data-name="project-row-1">
            <a className="absolute bg-[#2094e3] block cursor-pointer h-[36px] left-[17px] overflow-clip rounded-[9px] top-[16px] w-[104px]" data-node-id="1759:48" data-name="action-button">
              <div className="-translate-x-1/2 -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-sans font-medium h-[36px] justify-center leading-[0] left-[52px] text-[12px] text-center text-white top-[18px] w-[104px]" data-node-id="1759:49">
                <p className="leading-[normal]" dir="auto">
                  شروع ارزیابی
                </p>
              </div>
            </a>
            <div className="absolute bg-[#fff7e6] h-[30px] left-[145px] overflow-clip rounded-[8px] top-[19px] w-[126px]" data-node-id="1759:50" data-name="status-chip">
              <div className="-translate-x-1/2 -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-sans font-medium h-[30px] justify-center leading-[0] left-[63px] text-[#c27a10] text-[12px] text-center top-[15px] w-[126px]" data-node-id="1759:51">
                <p className="leading-[normal]" dir="auto">
                  در انتظار بررسی
                </p>
              </div>
            </div>
            <div className="-translate-x-full -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-sans font-medium h-[42px] justify-center leading-[0] left-[427px] text-[#17324d] text-[13px] text-right top-[34px] w-[136px]" data-node-id="1759:52">
              <p className="leading-[normal]" dir="auto">
                ۴۰۰ میلیون
              </p>
            </div>
            <div className="-translate-x-full -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-sans font-medium h-[42px] justify-center leading-[0] left-[619px] text-[#17324d] text-[13px] text-right top-[34px] w-[174px]" data-node-id="1759:53">
              <p className="leading-[normal]" dir="auto">
                گلستان
              </p>
            </div>
            <div className="-translate-x-full -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-sans font-medium h-[42px] justify-center leading-[0] left-[809px] text-[#17324d] text-[13px] text-right top-[34px] w-[166px]" data-node-id="1759:54">
              <p className="leading-[normal]" dir="auto">
                راهکار سبز
              </p>
            </div>
            <div className="-translate-x-full -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-sans font-bold h-[26px] justify-center leading-[0] left-[1103px] text-[#17324d] text-[14px] text-right top-[22px] w-[270px]" data-node-id="1759:55">
              <p className="leading-[normal]" dir="auto">
                اشتغال زنان روستایی
              </p>
            </div>
            <div className="-translate-x-full -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-sans font-normal h-[22px] justify-center leading-[0] left-[1103px] text-[#60758a] text-[11px] text-right top-[46px] w-[270px]" data-node-id="1759:56">
              <p className="leading-[normal]" dir="auto">
                جامعه هدف: زنان سرپرست خانوار | مدت اجرا: ۱۲ ماه
              </p>
            </div>
          </div>
          <div className="absolute bg-white border border-[#e4ebf1] border-solid h-[70px] left-[17px] overflow-clip rounded-[10px] top-[257px] w-[1124px]" data-node-id="1759:57" data-name="project-row-2">
            <a className="absolute bg-[#2094e3] block cursor-pointer h-[36px] left-[17px] overflow-clip rounded-[9px] top-[16px] w-[104px]" data-node-id="1759:58" data-name="action-button">
              <div className="-translate-x-1/2 -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-sans font-medium h-[36px] justify-center leading-[0] left-[52px] text-[12px] text-center text-white top-[18px] w-[104px]" data-node-id="1759:59">
                <p className="leading-[normal]" dir="auto">
                  شروع ارزیابی
                </p>
              </div>
            </a>
            <div className="absolute bg-[#fff7e6] h-[30px] left-[145px] overflow-clip rounded-[8px] top-[19px] w-[126px]" data-node-id="1759:60" data-name="status-chip">
              <div className="-translate-x-1/2 -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-sans font-medium h-[30px] justify-center leading-[0] left-[63px] text-[#c27a10] text-[12px] text-center top-[15px] w-[126px]" data-node-id="1759:61">
                <p className="leading-[normal]" dir="auto">
                  در انتظار بررسی
                </p>
              </div>
            </div>
            <div className="-translate-x-full -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-sans font-medium h-[42px] justify-center leading-[0] left-[427px] text-[#17324d] text-[13px] text-right top-[34px] w-[136px]" data-node-id="1759:62">
              <p className="leading-[normal]" dir="auto">
                ۳۵۰ میلیون
              </p>
            </div>
            <div className="-translate-x-full -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-sans font-medium h-[42px] justify-center leading-[0] left-[619px] text-[#17324d] text-[13px] text-right top-[34px] w-[174px]" data-node-id="1759:63">
              <p className="leading-[normal]" dir="auto">
                سیستان و بلوچستان
              </p>
            </div>
            <div className="-translate-x-full -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-sans font-medium h-[42px] justify-center leading-[0] left-[809px] text-[#17324d] text-[13px] text-right top-[34px] w-[166px]" data-node-id="1759:64">
              <p className="leading-[normal]" dir="auto">
                سلامت‌یار شرق
              </p>
            </div>
            <div className="-translate-x-full -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-sans font-bold h-[26px] justify-center leading-[0] left-[1103px] text-[#17324d] text-[14px] text-right top-[22px] w-[270px]" data-node-id="1759:65">
              <p className="leading-[normal]" dir="auto">
                سلامت خانواده
              </p>
            </div>
            <div className="-translate-x-full -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-sans font-normal h-[22px] justify-center leading-[0] left-[1103px] text-[#60758a] text-[11px] text-right top-[46px] w-[270px]" data-node-id="1759:66">
              <p className="leading-[normal]" dir="auto">
                ۲٬۵۰۰ بهره‌مند | ۴۲ روستا
              </p>
            </div>
          </div>
          <div className="absolute bg-white border border-[#e4ebf1] border-solid h-[70px] left-[17px] overflow-clip rounded-[10px] top-[339px] w-[1124px]" data-node-id="1759:67" data-name="project-row-3">
            <a className="absolute bg-[#2094e3] block cursor-pointer h-[36px] left-[17px] overflow-clip rounded-[9px] top-[16px] w-[104px]" data-node-id="1759:68" data-name="action-button">
              <div className="-translate-x-1/2 -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-sans font-medium h-[36px] justify-center leading-[0] left-[52px] text-[12px] text-center text-white top-[18px] w-[104px]" data-node-id="1759:69">
                <p className="leading-[normal]" dir="auto">
                  شروع ارزیابی
                </p>
              </div>
            </a>
            <div className="absolute bg-[#fff7e6] h-[30px] left-[145px] overflow-clip rounded-[8px] top-[19px] w-[126px]" data-node-id="1759:70" data-name="status-chip">
              <div className="-translate-x-1/2 -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-sans font-medium h-[30px] justify-center leading-[0] left-[63px] text-[#c27a10] text-[12px] text-center top-[15px] w-[126px]" data-node-id="1759:71">
                <p className="leading-[normal]" dir="auto">
                  در انتظار بررسی
                </p>
              </div>
            </div>
            <div className="-translate-x-full -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-sans font-medium h-[42px] justify-center leading-[0] left-[427px] text-[#17324d] text-[13px] text-right top-[34px] w-[136px]" data-node-id="1759:72">
              <p className="leading-[normal]" dir="auto">
                ۴۰۰ میلیون
              </p>
            </div>
            <div className="-translate-x-full -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-sans font-medium h-[42px] justify-center leading-[0] left-[619px] text-[#17324d] text-[13px] text-right top-[34px] w-[174px]" data-node-id="1759:73">
              <p className="leading-[normal]" dir="auto">
                اصفهان
              </p>
            </div>
            <div className="-translate-x-full -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-sans font-medium h-[42px] justify-center leading-[0] left-[809px] text-[#17324d] text-[13px] text-right top-[34px] w-[166px]" data-node-id="1759:74">
              <p className="leading-[normal]" dir="auto">
                آینده‌ساز مهارت
              </p>
            </div>
            <div className="-translate-x-full -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-sans font-bold h-[26px] justify-center leading-[0] left-[1103px] text-[#17324d] text-[14px] text-right top-[22px] w-[270px]" data-node-id="1759:75">
              <p className="leading-[normal]" dir="auto">
                مهارت برای نوجوانان
              </p>
            </div>
            <div className="-translate-x-full -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-sans font-normal h-[22px] justify-center leading-[0] left-[1103px] text-[#60758a] text-[11px] text-right top-[46px] w-[270px]" data-node-id="1759:76">
              <p className="leading-[normal]" dir="auto">
                ۳۵۰ نوجوان | ۹۰ فرصت شغلی
              </p>
            </div>
          </div>
          <div className="absolute bg-white border border-[#e4ebf1] border-solid h-[70px] left-[17px] overflow-clip rounded-[10px] top-[421px] w-[1124px]" data-node-id="1759:77" data-name="project-row-4">
            <a className="absolute bg-[#2094e3] block cursor-pointer h-[36px] left-[17px] overflow-clip rounded-[9px] top-[16px] w-[104px]" data-node-id="1759:78" data-name="action-button">
              <div className="-translate-x-1/2 -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-sans font-medium h-[36px] justify-center leading-[0] left-[52px] text-[12px] text-center text-white top-[18px] w-[104px]" data-node-id="1759:79">
                <p className="leading-[normal]" dir="auto">
                  شروع ارزیابی
                </p>
              </div>
            </a>
            <div className="absolute bg-[#fff7e6] h-[30px] left-[145px] overflow-clip rounded-[8px] top-[19px] w-[126px]" data-node-id="1759:80" data-name="status-chip">
              <div className="-translate-x-1/2 -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-sans font-medium h-[30px] justify-center leading-[0] left-[63px] text-[#c27a10] text-[12px] text-center top-[15px] w-[126px]" data-node-id="1759:81">
                <p className="leading-[normal]" dir="auto">
                  در انتظار بررسی
                </p>
              </div>
            </div>
            <div className="-translate-x-full -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-sans font-medium h-[42px] justify-center leading-[0] left-[427px] text-[#17324d] text-[13px] text-right top-[34px] w-[136px]" data-node-id="1759:82">
              <p className="leading-[normal]" dir="auto">
                ۳۵۰ میلیون
              </p>
            </div>
            <div className="-translate-x-full -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-sans font-medium h-[42px] justify-center leading-[0] left-[619px] text-[#17324d] text-[13px] text-right top-[34px] w-[174px]" data-node-id="1759:83">
              <p className="leading-[normal]" dir="auto">
                سیستان و بلوچستان
              </p>
            </div>
            <div className="-translate-x-full -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-sans font-medium h-[42px] justify-center leading-[0] left-[809px] text-[#17324d] text-[13px] text-right top-[34px] w-[166px]" data-node-id="1759:84">
              <p className="leading-[normal]" dir="auto">
                بازارچه روستا
              </p>
            </div>
            <div className="-translate-x-full -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-sans font-bold h-[26px] justify-center leading-[0] left-[1103px] text-[#17324d] text-[14px] text-right top-[22px] w-[270px]" data-node-id="1759:85">
              <p className="leading-[normal]" dir="auto">
                توسعه فروش صنایع‌دستی روستایی
              </p>
            </div>
            <div className="-translate-x-full -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-sans font-normal h-[22px] justify-center leading-[0] left-[1103px] text-[#60758a] text-[11px] text-right top-[46px] w-[270px]" data-node-id="1759:86">
              <p className="leading-[normal]" dir="auto">
                ۶۰ فرصت | ۲۵۰ بهره‌مند | ۱۸ روستا
              </p>
            </div>
          </div>
          <div className="absolute bg-white border border-[#e4ebf1] border-solid h-[70px] left-[17px] overflow-clip rounded-[10px] top-[503px] w-[1124px]" data-node-id="1759:87" data-name="project-row-5">
            <a className="absolute bg-[#2094e3] block cursor-pointer h-[36px] left-[17px] overflow-clip rounded-[9px] top-[16px] w-[104px]" data-node-id="1759:88" data-name="action-button">
              <div className="-translate-x-1/2 -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-sans font-medium h-[36px] justify-center leading-[0] left-[52px] text-[12px] text-center text-white top-[18px] w-[104px]" data-node-id="1759:89">
                <p className="leading-[normal]" dir="auto">
                  شروع ارزیابی
                </p>
              </div>
            </a>
            <div className="absolute bg-[#fff7e6] h-[30px] left-[145px] overflow-clip rounded-[8px] top-[19px] w-[126px]" data-node-id="1759:90" data-name="status-chip">
              <div className="-translate-x-1/2 -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-sans font-medium h-[30px] justify-center leading-[0] left-[63px] text-[#c27a10] text-[12px] text-center top-[15px] w-[126px]" data-node-id="1759:91">
                <p className="leading-[normal]" dir="auto">
                  در انتظار بررسی
                </p>
              </div>
            </div>
            <div className="-translate-x-full -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-sans font-medium h-[42px] justify-center leading-[0] left-[427px] text-[#17324d] text-[13px] text-right top-[34px] w-[136px]" data-node-id="1759:92">
              <p className="leading-[normal]" dir="auto">
                ۳۵۰ میلیون
              </p>
            </div>
            <div className="-translate-x-full -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-sans font-medium h-[42px] justify-center leading-[0] left-[619px] text-[#17324d] text-[13px] text-right top-[34px] w-[174px]" data-node-id="1759:93">
              <p className="leading-[normal]" dir="auto">
                فارس
              </p>
            </div>
            <div className="-translate-x-full -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-sans font-medium h-[42px] justify-center leading-[0] left-[809px] text-[#17324d] text-[13px] text-right top-[34px] w-[166px]" data-node-id="1759:94">
              <p className="leading-[normal]" dir="auto">
                خانه‌کار فارس
              </p>
            </div>
            <div className="-translate-x-full -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-sans font-bold h-[26px] justify-center leading-[0] left-[1103px] text-[#17324d] text-[14px] text-right top-[22px] w-[270px]" data-node-id="1759:95">
              <p className="leading-[normal]" dir="auto">
                زنجیره تأمین مشاغل خانگی
              </p>
            </div>
            <div className="-translate-x-full -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-sans font-normal h-[22px] justify-center leading-[0] left-[1103px] text-[#60758a] text-[11px] text-right top-[46px] w-[270px]" data-node-id="1759:96">
              <p className="leading-[normal]" dir="auto">
                ۱۸۰ فرصت | ۶۲۰ خانوار | ۱۵ شهر
              </p>
            </div>
          </div>
          <div className="absolute h-[38px] left-[17px] overflow-clip top-[595px] w-[1124px]" data-node-id="1785:34" data-name="pagination-footer">
            <div className="-translate-x-full -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-sans font-normal h-[24px] justify-center leading-[0] left-[1106px] text-[#60758a] text-[12px] text-right top-[19px] w-[160px]" data-node-id="1785:35">
              <p className="leading-[normal]" dir="auto">
                صفحه ۱ از ۳
              </p>
            </div>
            <button className="absolute bg-white block border border-[#dde7f0] border-solid cursor-pointer left-[432px] overflow-clip rounded-[8px] w-[34px] h-[34px] top-[2px]" data-node-id="1816:2780" data-name="page-button">
              <div className="-translate-x-1/2 -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-sans font-normal justify-center leading-[0] left-[16px] w-[34px] h-[34px] text-[#60758a] text-[13px] text-center top-[16px]" data-node-id="1816:2781">
                <p className="leading-[normal]" dir="auto">
                  ‹
                </p>
              </div>
            </button>
            <div className="absolute bg-[#2094e3] border border-[#2094e3] border-solid left-[474px] overflow-clip rounded-[8px] w-[34px] h-[34px] top-[2px]" data-node-id="1816:2768" data-name="page-active">
              <div className="-translate-x-1/2 -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-sans font-normal justify-center leading-[0] left-[16px] w-[34px] h-[34px] text-[13px] text-center text-white top-[16px]" data-node-id="1816:2769">
                <p className="leading-[normal]" dir="auto">
                  ۱
                </p>
              </div>
            </div>
            <button className="absolute bg-white block border border-[#dde7f0] border-solid cursor-pointer left-[516px] overflow-clip rounded-[8px] w-[34px] h-[34px] top-[2px]" data-node-id="1816:2771" data-name="page-button">
              <div className="-translate-x-1/2 -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-sans font-normal justify-center leading-[0] left-[16px] w-[34px] h-[34px] text-[#60758a] text-[13px] text-center top-[16px]" data-node-id="1816:2772">
                <p className="leading-[normal]" dir="auto">
                  ۲
                </p>
              </div>
            </button>
            <button className="absolute bg-white block border border-[#dde7f0] border-solid cursor-pointer left-[558px] overflow-clip rounded-[8px] w-[34px] h-[34px] top-[2px]" data-node-id="1816:2774" data-name="page-button">
              <div className="-translate-x-1/2 -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-sans font-normal justify-center leading-[0] left-[16px] w-[34px] h-[34px] text-[#60758a] text-[13px] text-center top-[16px]" data-node-id="1816:2775">
                <p className="leading-[normal]" dir="auto">
                  ۳
                </p>
              </div>
            </button>
            <button className="absolute bg-white block border border-[#dde7f0] border-solid cursor-pointer left-[600px] overflow-clip rounded-[8px] w-[34px] h-[34px] top-[2px]" data-node-id="1816:2777" data-name="page-button">
              <div className="-translate-x-1/2 -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-sans font-normal justify-center leading-[0] left-[16px] w-[34px] h-[34px] text-[#60758a] text-[13px] text-center top-[16px]" data-node-id="1816:2778">
                <p className="leading-[normal]" dir="auto">
                  ›
                </p>
              </div>
            </button>
          </div>
        </div>
      </div>
      <div className="absolute bg-[#17324d] content-stretch flex flex-col gap-[10px] h-[900px] items-end left-[1216px] pb-[18px] pt-[20px] px-[16px] top-0 w-[224px]" data-node-id="1759:97" data-name="colored-sidebar">
        <div className="bg-white content-stretch flex h-[56px] items-center justify-end overflow-clip px-[10px] py-[8px] relative rounded-[12px] shrink-0 w-[192px]" data-node-id="1759:98" data-name="brand-logo">
          <div className="h-[40px] relative shrink-0 w-[118px]" data-node-id="1759:99" data-name="ChatGPT Image ۲۹ مرداد ۱۴۰۵، ۱۵_۱۶_۳۵ 1">
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <img alt="" className="absolute h-full left-[5.28%] max-w-none top-0 w-[100.73%]" src={imgChatGptImage1} />
            </div>
          </div>
        </div>
        <div className="content-stretch flex flex-col h-[64px] items-start justify-end overflow-clip px-[8px] py-[7px] relative shrink-0 w-[192px]" data-node-id="1759:100" data-name="panel-identity">
          <p className="[word-break:break-word] font-sans font-bold h-[39px] leading-[normal] relative shrink-0 text-[13px] text-center text-white w-[176px]" dir="auto" data-node-id="1759:101">
            خانه خلاق و نوآوری آینه
          </p>
        </div>
        <Link to="/panel/creative-house" className="content-stretch cursor-pointer flex gap-[10px] h-[38px] items-center justify-end overflow-clip px-[12px] relative rounded-[9px] shrink-0 w-[192px]" data-node-id="1759:102" data-name="dashboard-nav">
          <p className="[word-break:break-word] font-sans font-medium leading-[normal] relative shrink-0 text-[12px] text-right text-white w-[142px]" dir="auto" data-node-id="1759:103">
            داشبورد
          </p>
          <div className="relative shrink-0 w-[18px] h-[18px]" data-node-id="1759:104" data-name="dashboard-icon">
            <img alt="" className="absolute block inset-0 max-w-none w-full h-full" src={imgDashboardIcon} />
          </div>
        </Link>
        <Link to="/panel/creative-house/startup-evaluations" className="content-stretch cursor-pointer flex gap-[10px] h-[38px] items-center justify-end overflow-clip px-[12px] relative rounded-[9px] shrink-0 w-[192px]" data-node-id="1759:109" data-name="startup-evaluations-nav">
          <p className="[word-break:break-word] font-sans font-normal leading-[normal] relative shrink-0 text-[12px] text-right text-white w-[142px]" dir="auto" data-node-id="1759:110">
            ارزیابی استارتاپ‌ها
          </p>
          <div className="relative shrink-0 w-[18px] h-[18px]" data-node-id="1759:111" data-name="users-icon">
            <img alt="" className="absolute block inset-0 max-w-none w-full h-full" src={imgUsersIcon} />
          </div>
        </Link>
        <div className="bg-[#2094e3] content-stretch flex gap-[10px] h-[38px] items-center justify-end overflow-clip px-[12px] relative rounded-[9px] shrink-0 w-[192px]" data-node-id="1759:116" data-name="project-evaluations-nav">
          <p className="[word-break:break-word] font-sans font-normal leading-[normal] relative shrink-0 text-[12px] text-right text-white w-[142px]" dir="auto" data-node-id="1759:117">
            ارزیابی پروژه‌ها
          </p>
          <div className="relative shrink-0 w-[18px] h-[18px]" data-node-id="1759:118" data-name="project-icon">
            <img alt="" className="absolute block inset-0 max-w-none w-full h-full" src={imgProjectIcon} />
          </div>
        </div>
        <Link to="/panel/creative-house/milestone-evaluations" className="content-stretch cursor-pointer flex gap-[10px] h-[38px] items-center justify-end overflow-clip px-[12px] relative rounded-[9px] shrink-0 w-[192px]" data-node-id="1759:121" data-name="milestone-evaluations-nav">
          <p className="[word-break:break-word] font-sans font-normal leading-[normal] relative shrink-0 text-[12px] text-right text-white w-[142px]" dir="auto" data-node-id="1759:122">
            ارزیابی مراحل پروژه
          </p>
          <div className="relative shrink-0 w-[18px] h-[18px]" data-node-id="1759:123" data-name="milestone-icon">
            <img alt="" className="absolute block inset-0 max-w-none w-full h-full" src={imgMilestoneIcon} />
          </div>
        </Link>
        <Link to="/panel/creative-house/reports" className="content-stretch cursor-pointer flex gap-[10px] h-[38px] items-center justify-end overflow-clip px-[12px] relative rounded-[9px] shrink-0 w-[192px]" data-node-id="1759:126" data-name="reports-nav">
          <p className="[word-break:break-word] font-sans font-normal leading-[normal] relative shrink-0 text-[12px] text-right text-white w-[142px]" dir="auto" data-node-id="1759:127">
            گزارش‌ها
          </p>
          <div className="relative shrink-0 w-[18px] h-[18px]" data-node-id="1759:128" data-name="reports-icon">
            <img alt="" className="absolute block inset-0 max-w-none w-full h-full" src={imgReportsIcon} />
          </div>
        </Link>
        <Link to="/panel/creative-house/evaluation-history" className="content-stretch cursor-pointer flex gap-[10px] h-[38px] items-center justify-end overflow-clip px-[12px] relative rounded-[9px] shrink-0 w-[192px]" data-node-id="1759:133" data-name="evaluation-history-nav">
          <p className="[word-break:break-word] font-sans font-normal leading-[normal] relative shrink-0 text-[12px] text-right text-white w-[142px]" dir="auto" data-node-id="1759:134">
            سوابق ارزیابی
          </p>
          <div className="relative shrink-0 w-[18px] h-[18px]" data-node-id="1759:135" data-name="history-icon">
            <img alt="" className="absolute block inset-0 max-w-none w-full h-full" src={imgHistoryIcon} />
          </div>
        </Link>
        <Link to="/panel/creative-house/settings" className="content-stretch cursor-pointer flex gap-[10px] h-[38px] items-center justify-end overflow-clip px-[12px] relative rounded-[9px] shrink-0 w-[192px]" data-node-id="1759:139" data-name="settings-nav">
          <p className="[word-break:break-word] font-sans font-normal leading-[normal] relative shrink-0 text-[12px] text-right text-white w-[142px]" dir="auto" data-node-id="1759:140">
            تنظیمات
          </p>
          <div className="relative shrink-0 w-[18px] h-[18px]" data-node-id="1759:141" data-name="settings-icon">
            <img alt="" className="absolute block inset-0 max-w-none w-full h-full" src={imgSettingsIcon} />
          </div>
        </Link>
        <div className="flex-[1_0_0] min-h-px relative w-[192px]" data-node-id="1759:144" data-name="sidebar-spacer" />
        <button className="bg-white content-stretch cursor-pointer flex gap-[10px] h-[38px] items-center justify-end opacity-96 overflow-clip px-[12px] relative rounded-[9px] shrink-0 w-[192px]" data-node-id="1759:145" data-name="logout-nav">
          <p className="[word-break:break-word] font-sans font-medium leading-[normal] relative shrink-0 text-[#17324d] text-[12px] text-right w-[142px]" dir="auto" data-node-id="1759:146">
            خروج از سیستم
          </p>
          <div className="relative shrink-0 w-[18px] h-[18px]" data-node-id="1759:147" data-name="logout-icon">
            <img alt="" className="absolute block inset-0 max-w-none w-full h-full" src={imgLogoutIcon} />
          </div>
        </button>
      </div>
    </div>
  );
}