import "../index.css";
import { Link } from "react-router-dom";

const imgChatGptImage1 = "/assets/creative-house/evaluation-history/logo.png";
const imgFrame = "/assets/creative-house/evaluation-history/asset-1.svg";
const imgFrame1 = "/assets/creative-house/evaluation-history/asset-2.svg";
const imgFrame2 = "/assets/creative-house/evaluation-history/asset-3.svg";
const imgFrame3 = "/assets/creative-house/evaluation-history/asset-4.svg";
const imgDashboardIcon = "/assets/creative-house/evaluation-history/asset-5.svg";
const imgUsersIcon = "/assets/creative-house/evaluation-history/asset-6.svg";
const imgProjectIcon = "/assets/creative-house/evaluation-history/asset-7.svg";
const imgMilestoneIcon = "/assets/creative-house/evaluation-history/asset-8.svg";
const imgReportsIcon = "/assets/creative-house/evaluation-history/asset-9.svg";
const imgHistoryIcon = "/assets/creative-house/evaluation-history/asset-10.svg";
const imgSettingsIcon = "/assets/creative-house/evaluation-history/asset-11.svg";
const imgLogoutIcon = "/assets/creative-house/evaluation-history/asset-12.svg";

export default function AyenehEvaluationHistory() {
  return (
    <div className="creative-house-dashboard bg-[#f5f8fb] relative w-full h-full" data-node-id="1801:2" data-name="ayeneh-evaluation-history">
      <div className="absolute bg-[#f5f8fb] h-[900px] left-0 overflow-clip top-0 w-[1216px]" data-node-id="1801:3" data-name="Main Content">
        <div className="absolute bg-[#f5f8fb] h-[62px] left-[28px] overflow-clip top-[22px] w-[1160px]" data-node-id="1801:4" data-name="project-evaluations-topbar">
          <div className="-translate-x-full -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-sans font-bold h-[30px] justify-center leading-[0] left-[1160px] text-[#17324d] text-[24px] text-right top-[15px] w-[460px]" data-node-id="1801:5">
            <p className="leading-[normal]" dir="auto">
              سوابق ارزیابی
            </p>
          </div>
          <div className="-translate-x-full -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-sans font-normal h-[24px] justify-center leading-[0] left-[1160px] text-[#60758a] text-[13px] text-right top-[44px] w-[550px]" data-node-id="1801:6">
            <p className="leading-[normal]" dir="auto">
              مرور تصمیم‌ها، بررسی‌ها و وضعیت ارزیابی‌های ثبت‌شده در مسیر پروژه‌ها و گزارش‌ها
            </p>
          </div>
          <div className="absolute bg-[#eaf6fe] h-[30px] left-0 overflow-clip rounded-[8px] top-[10px] w-[210px]" data-node-id="1801:7" data-name="status-chip">
            <div className="-translate-x-1/2 -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-sans font-medium h-[30px] justify-center leading-[0] left-[97px] text-[#2094e3] text-[12px] text-center top-[15px] w-[194px]" data-node-id="1801:8">
              <p className="leading-[normal]" dir="auto">
                سوابق استخراج‌شده از لندینگ
              </p>
            </div>
          </div>
        </div>
        <div className="absolute bg-white border border-[#e4ebf1] border-solid h-[104px] left-[28px] overflow-clip rounded-[14px] shadow-[0px_3px_10px_0px_rgba(23,46,71,0.06)] top-[100px] w-[281px]" data-node-id="1801:9" data-name="milestone-stat-kpi">
          <div className="absolute bg-[#eaf8f0] left-[17px] rounded-[12px] w-[40px] h-[40px] top-[13px]" data-node-id="1801:10" data-name="stat-icon">
            <div className="absolute left-[10px] w-[20px] h-[20px] top-[10px]" data-node-id="1801:11" data-name="Frame">
              <img alt="" className="absolute block inset-0 max-w-none w-full h-full" src={imgFrame} />
            </div>
          </div>
          <div className="-translate-x-full -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-sans font-medium h-[22px] justify-center leading-[0] left-[264px] text-[#60758a] text-[13px] text-right top-[23px] w-[193px]" data-node-id="1801:14">
            <p className="leading-[normal]" dir="auto">
              آخرین تاریخ ثبت
            </p>
          </div>
          <div className="-translate-x-full -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-sans font-bold h-[34px] justify-center leading-[0] left-[264px] text-[#c27a10] text-[24px] text-right top-[53px] w-[193px]" data-node-id="1801:15">
            <p className="leading-[normal]" dir="auto">
              ۲۴ مرداد ۱۴۰۵
            </p>
          </div>
          <div className="-translate-x-full -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-sans font-medium h-[18px] justify-center leading-[0] left-[262px] text-[#788ca1] text-[10px] text-right top-[86px] w-[245px]" data-node-id="1801:16">
            <p className="leading-[normal]" dir="auto">
              جدیدترین رکورد قابل مشاهده در لندینگ
            </p>
          </div>
          <div className="absolute bg-[#159455] h-[72px] left-[277px] rounded-[2px] top-[15px] w-[3px]" data-node-id="1801:17" data-name="status-accent" />
        </div>
        <div className="absolute bg-white border border-[#e4ebf1] border-solid h-[104px] left-[321px] overflow-clip rounded-[14px] shadow-[0px_3px_10px_0px_rgba(23,46,71,0.06)] top-[100px] w-[281px]" data-node-id="1801:18" data-name="milestone-stat-publish">
          <div className="absolute bg-[#eaf5fd] left-[17px] rounded-[12px] w-[40px] h-[40px] top-[13px]" data-node-id="1801:19" data-name="stat-icon">
            <div className="absolute left-[10px] w-[20px] h-[20px] top-[10px]" data-node-id="1801:20" data-name="Frame">
              <img alt="" className="absolute block inset-0 max-w-none w-full h-full" src={imgFrame1} />
            </div>
          </div>
          <div className="-translate-x-full -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-sans font-medium h-[22px] justify-center leading-[0] left-[264px] text-[#60758a] text-[13px] text-right top-[23px] w-[193px]" data-node-id="1801:25">
            <p className="leading-[normal]" dir="auto">
              پروژه‌های دارای سابقه
            </p>
          </div>
          <div className="-translate-x-full -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-sans font-bold h-[34px] justify-center leading-[0] left-[264px] text-[#7b61d1] text-[24px] text-right top-[53px] w-[193px]" data-node-id="1801:26">
            <p className="leading-[normal]" dir="auto">
              ۴ پروژه
            </p>
          </div>
          <div className="-translate-x-full -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-sans font-medium h-[18px] justify-center leading-[0] left-[262px] text-[#788ca1] text-[10px] text-right top-[86px] w-[245px]" data-node-id="1801:27">
            <p className="leading-[normal]" dir="auto">
              در رکوردهای قابل مشاهده این صفحه
            </p>
          </div>
          <div className="absolute bg-[#2094e3] h-[72px] left-[277px] rounded-[2px] top-[15px] w-[3px]" data-node-id="1801:28" data-name="status-accent" />
        </div>
        <div className="absolute bg-white border border-[#e4ebf1] border-solid h-[104px] left-[614px] overflow-clip rounded-[14px] shadow-[0px_3px_10px_0px_rgba(23,46,71,0.06)] top-[100px] w-[281px]" data-node-id="1801:29" data-name="milestone-stat-approved">
          <div className="absolute bg-[#eaf8f0] left-[17px] rounded-[12px] w-[40px] h-[40px] top-[13px]" data-node-id="1801:30" data-name="stat-icon">
            <div className="absolute left-[10px] w-[20px] h-[20px] top-[10px]" data-node-id="1801:31" data-name="Frame">
              <img alt="" className="absolute block inset-0 max-w-none w-full h-full" src={imgFrame2} />
            </div>
          </div>
          <div className="-translate-x-full -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-sans font-medium h-[22px] justify-center leading-[0] left-[264px] text-[#60758a] text-[13px] text-right top-[23px] w-[193px]" data-node-id="1801:34">
            <p className="leading-[normal]" dir="auto">
              در حال بررسی
            </p>
          </div>
          <div className="-translate-x-full -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-sans font-bold h-[34px] justify-center leading-[0] left-[264px] text-[#159455] text-[24px] text-right top-[53px] w-[193px]" data-node-id="1801:35">
            <p className="leading-[normal]" dir="auto">
              ۱ مورد
            </p>
          </div>
          <div className="-translate-x-full -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-sans font-medium h-[18px] justify-center leading-[0] left-[262px] text-[#788ca1] text-[10px] text-right top-[86px] w-[245px]" data-node-id="1801:36">
            <p className="leading-[normal]" dir="auto">
              رکوردی که هنوز نتیجه نهایی ندارد
            </p>
          </div>
          <div className="absolute bg-[#159455] h-[72px] left-[277px] rounded-[2px] top-[15px] w-[3px]" data-node-id="1801:37" data-name="status-accent" />
        </div>
        <div className="absolute bg-white border border-[#e4ebf1] border-solid h-[104px] left-[907px] overflow-clip rounded-[14px] shadow-[0px_3px_10px_0px_rgba(23,46,71,0.06)] top-[100px] w-[281px]" data-node-id="1801:38" data-name="milestone-stat-pending">
          <div className="absolute bg-[#fff3dd] left-[17px] rounded-[12px] w-[40px] h-[40px] top-[13px]" data-node-id="1801:39" data-name="stat-icon">
            <div className="absolute left-[10px] w-[20px] h-[20px] top-[10px]" data-node-id="1801:40" data-name="Frame">
              <img alt="" className="absolute block inset-0 max-w-none w-full h-full" src={imgFrame3} />
            </div>
          </div>
          <div className="-translate-x-full -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-sans font-medium h-[22px] justify-center leading-[0] left-[264px] text-[#60758a] text-[13px] text-right top-[23px] w-[193px]" data-node-id="1801:42">
            <p className="leading-[normal]" dir="auto">
              تصمیم‌های تأییدشده
            </p>
          </div>
          <div className="-translate-x-full -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-sans font-bold h-[34px] justify-center leading-[0] left-[264px] text-[#2094e3] text-[24px] text-right top-[53px] w-[193px]" data-node-id="1801:43">
            <p className="leading-[normal]" dir="auto">
              ۳ مورد
            </p>
          </div>
          <div className="-translate-x-full -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-sans font-medium h-[18px] justify-center leading-[0] left-[262px] text-[#788ca1] text-[10px] text-right top-[86px] w-[245px]" data-node-id="1801:44">
            <p className="leading-[normal]" dir="auto">
              در ۴ رکورد قابل مشاهده لندینگ
            </p>
          </div>
          <div className="absolute bg-[#c27a10] h-[72px] left-[277px] rounded-[2px] top-[15px] w-[3px]" data-node-id="1801:45" data-name="status-accent" />
        </div>
        <div className="absolute bg-white border border-[#e4ebf1] border-solid h-[650px] left-[28px] overflow-clip rounded-[14px] top-[220px] w-[1160px]" data-node-id="1801:46" data-name="reports-content">
          <div className="-translate-x-full -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-sans font-bold h-[32px] justify-center leading-[0] left-[1123px] text-[#17324d] text-[20px] text-right top-[31px] w-[394px]" data-node-id="1801:47">
            <p className="leading-[normal]" dir="auto">
              سوابق تصمیم‌ها و ارزیابی‌ها
            </p>
          </div>
          <div className="-translate-x-full -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-sans font-normal h-[24px] justify-center leading-[0] left-[1123px] text-[#60758a] text-[12px] text-right top-[59px] w-[744px]" data-node-id="1801:48">
            <p className="leading-[normal]" dir="auto">
              این صفحه فقط از رکوردها، وضعیت‌ها و تاریخ‌هایی استفاده می‌کند که در بخش‌های گزارش و اثر اجتماعی لندینگ دیده می‌شوند.
            </p>
          </div>
          <div className="absolute bg-white border border-[#e4ebf1] border-solid h-[232px] left-[17px] overflow-clip rounded-[14px] top-[83px] w-[716px]" data-node-id="1801:49" data-name="impact-by-domain">
            <div className="-translate-x-full -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-sans font-bold h-[28px] justify-center leading-[0] left-[691px] text-[#17324d] text-[16px] text-right top-[27px] w-[314px]" data-node-id="1801:50">
              <p className="leading-[normal]" dir="auto">
                نوع ارزیابی در رکوردهای قابل مشاهده
              </p>
            </div>
            <div className="-translate-x-full -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-sans font-medium h-[22px] justify-center leading-[0] left-[691px] text-[#17324d] text-[12px] text-right top-[62px] w-[266px]" data-node-id="1801:51">
              <p className="leading-[normal]" dir="auto">
                ارزیابی نهایی اثر
              </p>
            </div>
            <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Vazirmatn:SemiBold'] font-semibold h-[22px] justify-center leading-[0] left-[17px] text-[#60758a] text-[12px] top-[62px] w-[100px]" data-node-id="1801:52">
              <p className="leading-[normal]" dir="auto">
                ۱ رکورد
              </p>
            </div>
            <div className="absolute bg-[#edf3f7] h-[10px] left-[131px] overflow-clip rounded-[5px] top-[56px] w-[278px]" data-node-id="1801:53" data-name="Frame">
              <div className="absolute bg-[#2094e3] h-[10px] left-0 rounded-[5px] top-0 w-[278px]" data-node-id="1801:54" data-name="Frame" />
            </div>
            <div className="-translate-x-full -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-sans font-medium h-[22px] justify-center leading-[0] left-[691px] text-[#17324d] text-[12px] text-right top-[90px] w-[266px]" data-node-id="1801:55">
              <p className="leading-[normal]" dir="auto">
                پیشرفت دوره‌ای
              </p>
            </div>
            <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Vazirmatn:SemiBold'] font-semibold h-[22px] justify-center leading-[0] left-[17px] text-[#60758a] text-[12px] top-[90px] w-[100px]" data-node-id="1801:56">
              <p className="leading-[normal]" dir="auto">
                ۱ رکورد
              </p>
            </div>
            <div className="absolute bg-[#edf3f7] h-[10px] left-[131px] overflow-clip rounded-[5px] top-[84px] w-[278px]" data-node-id="1801:57" data-name="Frame">
              <div className="absolute bg-[#2094e3] h-[10px] right-[-0.19px] rounded-[5px] top-0 w-[205.19px]" data-node-id="1801:58" data-name="Frame" />
            </div>
            <div className="-translate-x-full -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-sans font-medium h-[22px] justify-center leading-[0] left-[691px] text-[#17324d] text-[12px] text-right top-[118px] w-[266px]" data-node-id="1801:59">
              <p className="leading-[normal]" dir="auto">
                راستی‌آزمایی ارزیاب
              </p>
            </div>
            <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Vazirmatn:SemiBold'] font-semibold h-[22px] justify-center leading-[0] left-[17px] text-[#60758a] text-[12px] top-[118px] w-[100px]" data-node-id="1801:60">
              <p className="leading-[normal]" dir="auto">
                ۱ رکورد
              </p>
            </div>
            <div className="absolute bg-[#edf3f7] h-[10px] left-[131px] overflow-clip rounded-[5px] top-[112px] w-[278px]" data-node-id="1801:61" data-name="Frame">
              <div className="absolute bg-[#2094e3] h-[10px] right-[-0.15px] rounded-[5px] top-0 w-[164.152px]" data-node-id="1801:62" data-name="Frame" />
            </div>
            <div className="-translate-x-full -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-sans font-medium h-[22px] justify-center leading-[0] left-[691px] text-[#17324d] text-[12px] text-right top-[146px] w-[266px]" data-node-id="1801:63">
              <p className="leading-[normal]" dir="auto">
                گزارش خوداظهاری
              </p>
            </div>
            <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Vazirmatn:SemiBold'] font-semibold h-[22px] justify-center leading-[0] left-[17px] text-[#60758a] text-[12px] top-[146px] w-[100px]" data-node-id="1801:64">
              <p className="leading-[normal]" dir="auto">
                ۱ رکورد
              </p>
            </div>
            <div className="absolute bg-[#edf3f7] h-[10px] left-[131px] overflow-clip rounded-[5px] top-[140px] w-[278px]" data-node-id="1801:65" data-name="Frame">
              <div className="absolute bg-[#2094e3] h-[10px] right-[-0.5px] rounded-[5px] top-0 w-[116.495px]" data-node-id="1801:66" data-name="Frame" />
            </div>
          </div>
          <div className="[word-break:break-word] absolute bg-white border border-[#e4ebf1] border-solid h-[232px] leading-[0] left-[749px] overflow-clip rounded-[14px] text-right top-[83px] w-[392px]" data-node-id="1801:75" data-name="cumulative-impact-summary">
            <div className="-translate-x-full -translate-y-1/2 absolute flex flex-col font-sans font-bold h-[28px] justify-center left-[367px] text-[#17324d] text-[16px] top-[27px] w-[198px]" data-node-id="1801:76">
              <p className="leading-[normal]" dir="auto">
                پروژه‌های دارای سابقه
              </p>
            </div>
            <div className="absolute bg-[#f8fbfd] border border-[#eaf0f4] border-solid h-[66px] left-[17px] overflow-clip rounded-[10px] top-[51px] w-[170px]" data-node-id="1801:77" data-name="impact-mini">
              <div className="-translate-x-full -translate-y-1/2 absolute flex flex-col font-sans font-medium h-[20px] justify-center left-[157px] text-[#60758a] text-[11px] top-[17px] w-[146px]" data-node-id="1801:78">
                <p className="leading-[normal]" dir="auto">
                  پروژه
                </p>
              </div>
              <div className="-translate-x-full -translate-y-1/2 absolute flex flex-col font-sans font-bold h-[28px] justify-center left-[157px] text-[#17324d] text-[13px] top-[41px] w-[146px]" data-node-id="1801:79">
                <p className="leading-[normal]" dir="auto">
                  اشتغال زنان روستایی
                </p>
              </div>
            </div>
            <div className="absolute bg-[#f8fbfd] border border-[#eaf0f4] border-solid h-[66px] left-[197px] overflow-clip rounded-[10px] top-[51px] w-[170px]" data-node-id="1801:80" data-name="impact-mini">
              <div className="-translate-x-full -translate-y-1/2 absolute flex flex-col font-sans font-medium h-[20px] justify-center left-[157px] text-[#60758a] text-[11px] top-[17px] w-[146px]" data-node-id="1801:81">
                <p className="leading-[normal]" dir="auto">
                  پروژه
                </p>
              </div>
              <div className="-translate-x-full -translate-y-1/2 absolute flex flex-col font-sans font-bold h-[28px] justify-center left-[157px] text-[#17324d] text-[13px] top-[41px] w-[146px]" data-node-id="1801:82">
                <p className="leading-[normal]" dir="auto">
                  مهارت برای نوجوانان
                </p>
              </div>
            </div>
            <div className="absolute bg-[#f8fbfd] border border-[#eaf0f4] border-solid h-[66px] left-[17px] overflow-clip rounded-[10px] top-[129px] w-[170px]" data-node-id="1801:83" data-name="impact-mini">
              <div className="-translate-x-full -translate-y-1/2 absolute flex flex-col font-sans font-medium h-[20px] justify-center left-[157px] text-[#60758a] text-[11px] top-[17px] w-[146px]" data-node-id="1801:84">
                <p className="leading-[normal]" dir="auto">
                  پروژه
                </p>
              </div>
              <div className="-translate-x-full -translate-y-1/2 absolute flex flex-col font-sans font-bold h-[28px] justify-center left-[157px] text-[#17324d] text-[13px] top-[41px] w-[146px]" data-node-id="1801:85">
                <p className="leading-[normal]" dir="auto">
                  سلامت خانواده
                </p>
              </div>
            </div>
            <div className="absolute bg-[#f8fbfd] border border-[#eaf0f4] border-solid h-[66px] left-[197px] overflow-clip rounded-[10px] top-[129px] w-[170px]" data-node-id="1801:86" data-name="impact-mini">
              <div className="-translate-x-full -translate-y-1/2 absolute flex flex-col font-sans font-medium h-[20px] justify-center left-[157px] text-[#60758a] text-[11px] top-[17px] w-[146px]" data-node-id="1801:87">
                <p className="leading-[normal]" dir="auto">
                  پروژه
                </p>
              </div>
              <div className="-translate-x-full -translate-y-1/2 absolute flex flex-col font-sans font-bold h-[28px] justify-center left-[157px] text-[#17324d] text-[13px] top-[41px] w-[146px]" data-node-id="1801:88">
                <p className="leading-[normal]" dir="auto">
                  صنایع دستی بومی
                </p>
              </div>
            </div>
          </div>
          <div className="absolute bg-white border border-[#e4ebf1] border-solid h-[318px] left-[17px] overflow-clip rounded-[14px] top-[331px] w-[1124px]" data-node-id="1801:89" data-name="reports-table">
            <div className="-translate-x-full -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-sans font-bold h-[30px] justify-center leading-[0] left-[1103px] text-[#17324d] text-[16px] text-right top-[26px] w-[280px]" data-node-id="1801:90">
              <p className="leading-[normal]" dir="auto">
                تاریخچه ارزیابی‌ها
              </p>
            </div>
            <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-sans font-normal h-[24px] justify-center leading-[0] left-[17px] text-[#60758a] text-[11px] top-[25px] w-[220px]" data-node-id="1801:91">
              <p className="leading-[normal]" dir="auto">
                ۴ رکورد در صفحه ۱
              </p>
            </div>
            <div className="[word-break:break-word] absolute bg-[#f4f7fa] font-['Vazirmatn:SemiBold'] font-semibold h-[38px] leading-[0] left-[13px] overflow-clip rounded-[8px] text-[#60758a] text-[11px] text-right top-[49px] w-[1096px]" data-node-id="1801:92" data-name="Frame">
              <div className="-translate-x-full -translate-y-1/2 absolute flex flex-col h-[38px] justify-center left-[100px] top-[19px] w-[100px]" data-node-id="1801:93">
                <p className="leading-[normal]" dir="auto">
                  جزئیات
                </p>
              </div>
              <div className="-translate-x-full -translate-y-1/2 absolute flex flex-col h-[38px] justify-center left-[210px] top-[19px] w-[110px]" data-node-id="1801:94">
                <p className="leading-[normal]" dir="auto">
                  نتیجه
                </p>
              </div>
              <div className="-translate-x-full -translate-y-1/2 absolute flex flex-col h-[38px] justify-center left-[335px] top-[19px] w-[125px]" data-node-id="1801:95">
                <p className="leading-[normal]" dir="auto">
                  تاریخ ثبت
                </p>
              </div>
              <div className="-translate-x-full -translate-y-1/2 absolute flex flex-col h-[38px] justify-center left-[455px] top-[19px] w-[120px]" data-node-id="1801:96">
                <p className="leading-[normal]" dir="auto">
                  مرحله / بازه
                </p>
              </div>
              <div className="-translate-x-full -translate-y-1/2 absolute flex flex-col h-[38px] justify-center left-[605px] top-[19px] w-[150px]" data-node-id="1801:97">
                <p className="leading-[normal]" dir="auto">
                  نوع ارزیابی
                </p>
              </div>
              <div className="-translate-x-full -translate-y-1/2 absolute flex flex-col h-[38px] justify-center left-[815px] top-[19px] w-[210px]" data-node-id="1801:98">
                <p className="leading-[normal]" dir="auto">
                  پروژه
                </p>
              </div>
              <div className="-translate-x-full -translate-y-1/2 absolute flex flex-col h-[38px] justify-center left-[1096px] top-[19px] w-[281px]" data-node-id="1801:99">
                <p className="leading-[normal]" dir="auto">
                  عنوان رکورد
                </p>
              </div>
            </div>
            <a className="[word-break:break-word] absolute bg-white block border border-[#edf1f4] border-solid cursor-pointer h-[38px] leading-[0] left-[13px] overflow-clip rounded-[8px] text-[10.5px] text-right top-[95px] w-[1096px]" data-node-id="1801:100" data-name="report-row-1">
              <div className="-translate-x-full -translate-y-1/2 absolute flex flex-col font-['Vazirmatn:SemiBold'] font-semibold h-[38px] justify-center left-[99px] text-[#2094e3] top-[18px] w-[100px]" data-node-id="1801:101">
                <p className="leading-[normal]" dir="auto">
                  مشاهده
                </p>
              </div>
              <div className="-translate-x-full -translate-y-1/2 absolute flex flex-col font-['Vazirmatn:SemiBold'] font-semibold h-[38px] justify-center left-[209px] text-[#159455] top-[18px] w-[110px]" data-node-id="1801:102">
                <p className="leading-[normal]" dir="auto">
                  تأییدشده
                </p>
              </div>
              <div className="-translate-x-full -translate-y-1/2 absolute flex flex-col font-sans font-medium h-[38px] justify-center left-[334px] text-[#17324d] top-[18px] w-[125px]" data-node-id="1801:103">
                <p className="leading-[normal]" dir="auto">
                  ۲۴ مرداد ۱۴۰۵
                </p>
              </div>
              <div className="-translate-x-full -translate-y-1/2 absolute flex flex-col font-sans font-medium h-[38px] justify-center left-[454px] text-[#17324d] top-[18px] w-[120px]" data-node-id="1801:104">
                <p className="leading-[normal]" dir="auto">
                  فاز پایانی
                </p>
              </div>
              <div className="-translate-x-full -translate-y-1/2 absolute flex flex-col font-sans font-medium h-[38px] justify-center left-[604px] text-[#17324d] top-[18px] w-[150px]" data-node-id="1801:105">
                <p className="leading-[normal]" dir="auto">
                  ارزیابی نهایی اثر
                </p>
              </div>
              <div className="-translate-x-full -translate-y-1/2 absolute flex flex-col font-sans font-medium h-[38px] justify-center left-[814px] text-[#17324d] top-[18px] w-[210px]" data-node-id="1801:106">
                <p className="leading-[normal]" dir="auto">
                  اشتغال زنان روستایی - گلستان
                </p>
              </div>
              <div className="-translate-x-full -translate-y-1/2 absolute flex flex-col font-sans font-medium h-[38px] justify-center left-[1095px] text-[#17324d] top-[18px] w-[281px]" data-node-id="1801:107">
                <p className="leading-[normal]" dir="auto">
                  گزارش ارزیابی نهایی طرح اشتغال زنان روستایی
                </p>
              </div>
            </a>
            <a className="[word-break:break-word] absolute bg-white block border border-[#edf1f4] border-solid cursor-pointer h-[38px] leading-[0] left-[13px] overflow-clip rounded-[8px] text-[10.5px] text-right top-[139px] w-[1096px]" data-node-id="1801:108" data-name="report-row-2">
              <div className="-translate-x-full -translate-y-1/2 absolute flex flex-col font-['Vazirmatn:SemiBold'] font-semibold h-[38px] justify-center left-[99px] text-[#2094e3] top-[18px] w-[100px]" data-node-id="1801:109">
                <p className="leading-[normal]" dir="auto">
                  مشاهده
                </p>
              </div>
              <div className="-translate-x-full -translate-y-1/2 absolute flex flex-col font-['Vazirmatn:SemiBold'] font-semibold h-[38px] justify-center left-[209px] text-[#159455] top-[18px] w-[110px]" data-node-id="1801:110">
                <p className="leading-[normal]" dir="auto">
                  تأییدشده
                </p>
              </div>
              <div className="-translate-x-full -translate-y-1/2 absolute flex flex-col font-sans font-medium h-[38px] justify-center left-[334px] text-[#17324d] top-[18px] w-[125px]" data-node-id="1801:111">
                <p className="leading-[normal]" dir="auto">
                  ۱۸ مرداد ۱۴۰۵
                </p>
              </div>
              <div className="-translate-x-full -translate-y-1/2 absolute flex flex-col font-sans font-medium h-[38px] justify-center left-[454px] text-[#17324d] top-[18px] w-[120px]" data-node-id="1801:112">
                <p className="leading-[normal]" dir="auto">
                  فاز ۲
                </p>
              </div>
              <div className="-translate-x-full -translate-y-1/2 absolute flex flex-col font-sans font-medium h-[38px] justify-center left-[604px] text-[#17324d] top-[18px] w-[150px]" data-node-id="1801:113">
                <p className="leading-[normal]" dir="auto">
                  پیشرفت دوره‌ای
                </p>
              </div>
              <div className="-translate-x-full -translate-y-1/2 absolute flex flex-col font-sans font-medium h-[38px] justify-center left-[814px] text-[#17324d] top-[18px] w-[210px]" data-node-id="1801:114">
                <p className="leading-[normal]" dir="auto">
                  مهارت برای نوجوانان - اصفهان
                </p>
              </div>
              <div className="-translate-x-full -translate-y-1/2 absolute flex flex-col font-sans font-medium h-[38px] justify-center left-[1095px] text-[#17324d] top-[18px] w-[281px]" data-node-id="1801:115">
                <p className="leading-[normal]" dir="auto">
                  گزارش پیشرفت فاز دوم توانمندسازی مهارت نوجوانان
                </p>
              </div>
            </a>
            <a className="[word-break:break-word] absolute bg-white block border border-[#edf1f4] border-solid cursor-pointer h-[38px] leading-[0] left-[13px] overflow-clip rounded-[8px] text-[10.5px] text-right top-[183px] w-[1096px]" data-node-id="1801:116" data-name="report-row-3">
              <div className="-translate-x-full -translate-y-1/2 absolute flex flex-col font-['Vazirmatn:SemiBold'] font-semibold h-[38px] justify-center left-[99px] text-[#2094e3] top-[18px] w-[100px]" data-node-id="1801:117">
                <p className="leading-[normal]" dir="auto">
                  مشاهده
                </p>
              </div>
              <div className="-translate-x-full -translate-y-1/2 absolute flex flex-col font-['Vazirmatn:SemiBold'] font-semibold h-[38px] justify-center left-[209px] text-[#159455] top-[18px] w-[110px]" data-node-id="1801:118">
                <p className="leading-[normal]" dir="auto">
                  تأییدشده
                </p>
              </div>
              <div className="-translate-x-full -translate-y-1/2 absolute flex flex-col font-sans font-medium h-[38px] justify-center left-[334px] text-[#17324d] top-[18px] w-[125px]" data-node-id="1801:119">
                <p className="leading-[normal]" dir="auto">
                  ۱۲ مرداد ۱۴۰۵
                </p>
              </div>
              <div className="-translate-x-full -translate-y-1/2 absolute flex flex-col font-sans font-medium h-[38px] justify-center left-[454px] text-[#17324d] top-[18px] w-[120px]" data-node-id="1801:120">
                <p className="leading-[normal]" dir="auto">
                  فاز ۱
                </p>
              </div>
              <div className="-translate-x-full -translate-y-1/2 absolute flex flex-col font-sans font-medium h-[38px] justify-center left-[604px] text-[#17324d] top-[18px] w-[150px]" data-node-id="1801:121">
                <p className="leading-[normal]" dir="auto">
                  راستی‌آزمایی ارزیاب
                </p>
              </div>
              <div className="-translate-x-full -translate-y-1/2 absolute flex flex-col font-sans font-medium h-[38px] justify-center left-[814px] text-[#17324d] top-[18px] w-[210px]" data-node-id="1801:122">
                <p className="leading-[normal]" dir="auto">
                  سلامت خانواده - سیستان و بلوچستان
                </p>
              </div>
              <div className="-translate-x-full -translate-y-1/2 absolute flex flex-col font-sans font-medium h-[38px] justify-center left-[1095px] text-[#17324d] top-[18px] w-[281px]" data-node-id="1801:123">
                <p className="leading-[normal]" dir="auto">
                  گواهی تأیید میدانی تجهیز مراکز درمانی سیستان
                </p>
              </div>
            </a>
            <a className="[word-break:break-word] absolute bg-white block border border-[#edf1f4] border-solid cursor-pointer h-[38px] leading-[0] left-[13px] overflow-clip rounded-[8px] text-[10.5px] text-right top-[227px] w-[1096px]" data-node-id="1801:124" data-name="report-row-4">
              <div className="-translate-x-full -translate-y-1/2 absolute flex flex-col font-['Vazirmatn:SemiBold'] font-semibold h-[38px] justify-center left-[99px] text-[#2094e3] top-[18px] w-[100px]" data-node-id="1801:125">
                <p className="leading-[normal]" dir="auto">
                  مشاهده
                </p>
              </div>
              <div className="-translate-x-full -translate-y-1/2 absolute flex flex-col font-['Vazirmatn:SemiBold'] font-semibold h-[38px] justify-center left-[209px] text-[#c27a10] top-[18px] w-[110px]" data-node-id="1801:126">
                <p className="leading-[normal]" dir="auto">
                  در حال بررسی
                </p>
              </div>
              <div className="-translate-x-full -translate-y-1/2 absolute flex flex-col font-sans font-medium h-[38px] justify-center left-[334px] text-[#17324d] top-[18px] w-[125px]" data-node-id="1801:127">
                <p className="leading-[normal]" dir="auto">
                  ۰۵ مرداد ۱۴۰۵
                </p>
              </div>
              <div className="-translate-x-full -translate-y-1/2 absolute flex flex-col font-sans font-medium h-[38px] justify-center left-[454px] text-[#17324d] top-[18px] w-[120px]" data-node-id="1801:128">
                <p className="leading-[normal]" dir="auto">
                  کل دوره
                </p>
              </div>
              <div className="-translate-x-full -translate-y-1/2 absolute flex flex-col font-sans font-medium h-[38px] justify-center left-[604px] text-[#17324d] top-[18px] w-[150px]" data-node-id="1801:129">
                <p className="leading-[normal]" dir="auto">
                  گزارش خوداظهاری
                </p>
              </div>
              <div className="-translate-x-full -translate-y-1/2 absolute flex flex-col font-sans font-medium h-[38px] justify-center left-[814px] text-[#17324d] top-[18px] w-[210px]" data-node-id="1801:130">
                <p className="leading-[normal]" dir="auto">
                  توسعه صنایع دستی بومی - هرمزگان
                </p>
              </div>
              <div className="-translate-x-full -translate-y-1/2 absolute flex flex-col font-sans font-medium h-[38px] justify-center left-[1095px] text-[#17324d] top-[18px] w-[281px]" data-node-id="1801:131">
                <p className="leading-[normal]" dir="auto">
                  گزارش مالی و پیشرفت کارگاه خیاطی هرمزگان
                </p>
              </div>
            </a>
            <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-sans font-normal h-[20px] justify-center leading-[0] left-[17px] text-[#60758a] text-[11px] top-[285px] w-[120px]" data-node-id="1801:132">
              <p className="leading-[normal]" dir="auto">
                صفحه ۱ از ۲
              </p>
            </div>
            <div className="absolute bg-[#2094e3] h-[28px] left-[513px] overflow-clip rounded-[7px] top-[267px] w-[30px]" data-node-id="1801:133" data-name="Frame">
              <div className="-translate-x-1/2 -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-sans font-bold h-[28px] justify-center leading-[0] left-[15px] text-[11px] text-center text-white top-[14px] w-[30px]" data-node-id="1801:134">
                <p className="leading-[normal]">۱</p>
              </div>
            </div>
            <button className="absolute bg-white block border border-[#dde6ed] border-solid cursor-pointer h-[28px] left-[475px] overflow-clip rounded-[7px] top-[267px] w-[30px]" data-node-id="1801:135" data-name="page-2">
              <div className="-translate-x-1/2 -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-sans font-medium h-[28px] justify-center leading-[0] left-[14px] text-[#60758a] text-[11px] text-center top-[13px] w-[30px]" data-node-id="1801:136">
                <p className="leading-[normal]">۲</p>
              </div>
            </button>
            <div className="absolute bg-white border border-[#dde6ed] border-solid h-[28px] left-[429px] opacity-35 overflow-clip rounded-[7px] top-[267px] w-[34px]" data-node-id="1801:137" data-name="prev-disabled">
              <div className="-translate-x-1/2 -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-sans font-medium h-[28px] justify-center leading-[0] left-[16px] text-[#60758a] text-[16px] text-center top-[13px] w-[34px]" data-node-id="1801:138">
                <p className="leading-[normal]">‹</p>
              </div>
            </div>
            <button className="absolute bg-white block border border-[#dde6ed] border-solid cursor-pointer h-[28px] left-[551px] overflow-clip rounded-[7px] top-[267px] w-[34px]" data-node-id="1801:139" data-name="next">
              <div className="-translate-x-1/2 -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-sans font-medium h-[28px] justify-center leading-[0] left-[16px] text-[#60758a] text-[16px] text-center top-[13px] w-[34px]" data-node-id="1801:140">
                <p className="leading-[normal]">›</p>
              </div>
            </button>
          </div>
        </div>
      </div>
      <div className="absolute bg-[#17324d] content-stretch flex flex-col gap-[10px] h-[900px] items-end left-[1216px] pb-[18px] pt-[20px] px-[16px] top-0 w-[224px]" data-node-id="1801:141" data-name="colored-sidebar">
        <div className="bg-white content-stretch flex h-[56px] items-center justify-end overflow-clip px-[10px] py-[8px] relative rounded-[12px] shrink-0 w-[192px]" data-node-id="1801:142" data-name="brand-logo">
          <div className="h-[40px] relative shrink-0 w-[118px]" data-node-id="1801:143" data-name="ChatGPT Image ۲۹ مرداد ۱۴۰۵، ۱۵_۱۶_۳۵ 1">
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <img alt="" className="absolute h-full left-[5.28%] max-w-none top-0 w-[100.73%]" src={imgChatGptImage1} />
            </div>
          </div>
        </div>
        <div className="content-stretch flex flex-col h-[64px] items-start justify-end overflow-clip px-[8px] py-[7px] relative shrink-0 w-[192px]" data-node-id="1801:144" data-name="panel-identity">
          <p className="[word-break:break-word] font-sans font-bold h-[39px] leading-[normal] relative shrink-0 text-[13px] text-center text-white w-[176px]" dir="auto" data-node-id="1801:145">
            خانه خلاق و نوآوری آینه
          </p>
        </div>
        <Link to="/panel/creative-house" className="content-stretch cursor-pointer flex gap-[10px] h-[38px] items-center justify-end overflow-clip px-[12px] relative rounded-[9px] shrink-0 w-[192px]" data-node-id="1801:146" data-name="dashboard-nav">
          <p className="[word-break:break-word] font-sans font-medium leading-[normal] relative shrink-0 text-[12px] text-right text-white w-[142px]" dir="auto" data-node-id="1801:147">
            داشبورد
          </p>
          <div className="relative shrink-0 w-[18px] h-[18px]" data-node-id="1801:148" data-name="dashboard-icon">
            <img alt="" className="absolute block inset-0 max-w-none w-full h-full" src={imgDashboardIcon} />
          </div>
        </Link>
        <Link to="/panel/creative-house/startup-evaluations" className="content-stretch cursor-pointer flex gap-[10px] h-[38px] items-center justify-end overflow-clip px-[12px] relative rounded-[9px] shrink-0 w-[192px]" data-node-id="1801:153" data-name="startup-evaluations-nav">
          <p className="[word-break:break-word] font-sans font-normal leading-[normal] relative shrink-0 text-[12px] text-right text-white w-[142px]" dir="auto" data-node-id="1801:154">
            ارزیابی استارتاپ‌ها
          </p>
          <div className="relative shrink-0 w-[18px] h-[18px]" data-node-id="1801:155" data-name="users-icon">
            <img alt="" className="absolute block inset-0 max-w-none w-full h-full" src={imgUsersIcon} />
          </div>
        </Link>
        <Link to="/panel/creative-house/project-evaluations" className="content-stretch cursor-pointer flex gap-[10px] h-[38px] items-center justify-end overflow-clip px-[12px] relative rounded-[9px] shrink-0 w-[192px]" data-node-id="1801:160" data-name="project-evaluations-nav">
          <p className="[word-break:break-word] font-sans font-normal leading-[normal] relative shrink-0 text-[12px] text-right text-white w-[142px]" dir="auto" data-node-id="1801:161">
            ارزیابی پروژه‌ها
          </p>
          <div className="relative shrink-0 w-[18px] h-[18px]" data-node-id="1801:162" data-name="project-icon">
            <img alt="" className="absolute block inset-0 max-w-none w-full h-full" src={imgProjectIcon} />
          </div>
        </Link>
        <Link to="/panel/creative-house/milestone-evaluations" className="content-stretch cursor-pointer flex gap-[10px] h-[38px] items-center justify-end overflow-clip px-[12px] relative rounded-[9px] shrink-0 w-[192px]" data-node-id="1802:2714" data-name="milestone-evaluations-nav">
          <p className="[word-break:break-word] font-sans font-normal leading-[normal] relative shrink-0 text-[12px] text-right text-white w-[142px]" dir="auto" data-node-id="1802:2715">
            ارزیابی مراحل پروژه
          </p>
          <div className="relative shrink-0 w-[18px] h-[18px]" data-node-id="1802:2716" data-name="milestone-icon">
            <img alt="" className="absolute block inset-0 max-w-none w-full h-full" src={imgMilestoneIcon} />
          </div>
        </Link>
        <Link to="/panel/creative-house/reports" className="content-stretch cursor-pointer flex gap-[10px] h-[38px] items-center justify-end overflow-clip px-[12px] relative rounded-[9px] shrink-0 w-[192px]" data-node-id="1802:2726" data-name="reports-nav">
          <p className="[word-break:break-word] font-sans font-normal leading-[normal] relative shrink-0 text-[12px] text-right text-white w-[142px]" dir="auto" data-node-id="1802:2727">
            گزارش‌ها
          </p>
          <div className="relative shrink-0 w-[18px] h-[18px]" data-node-id="1802:2728" data-name="reports-icon">
            <img alt="" className="absolute block inset-0 max-w-none w-full h-full" src={imgReportsIcon} />
          </div>
        </Link>
        <div className="bg-[#2094e3] content-stretch flex gap-[10px] h-[38px] items-center justify-end overflow-clip px-[12px] relative rounded-[9px] shrink-0 w-[192px]" data-node-id="1801:177" data-name="evaluation-history-nav">
          <p className="[word-break:break-word] font-sans font-normal leading-[normal] relative shrink-0 text-[12px] text-right text-white w-[142px]" dir="auto" data-node-id="1801:178">
            سوابق ارزیابی
          </p>
          <div className="relative shrink-0 w-[18px] h-[18px]" data-node-id="1801:179" data-name="history-icon">
            <img alt="" className="absolute block inset-0 max-w-none w-full h-full" src={imgHistoryIcon} />
          </div>
        </div>
        <Link to="/panel/creative-house/settings" className="content-stretch cursor-pointer flex gap-[10px] h-[38px] items-center justify-end overflow-clip px-[12px] relative rounded-[9px] shrink-0 w-[192px]" data-node-id="1801:183" data-name="settings-nav">
          <p className="[word-break:break-word] font-sans font-normal leading-[normal] relative shrink-0 text-[12px] text-right text-white w-[142px]" dir="auto" data-node-id="1801:184">
            تنظیمات
          </p>
          <div className="relative shrink-0 w-[18px] h-[18px]" data-node-id="1801:185" data-name="settings-icon">
            <img alt="" className="absolute block inset-0 max-w-none w-full h-full" src={imgSettingsIcon} />
          </div>
        </Link>
        <div className="flex-[1_0_0] min-h-px relative w-[192px]" data-node-id="1801:188" data-name="sidebar-spacer" />
        <button className="bg-white content-stretch cursor-pointer flex gap-[10px] h-[38px] items-center justify-end opacity-96 overflow-clip px-[12px] relative rounded-[9px] shrink-0 w-[192px]" data-node-id="1801:189" data-name="logout-nav">
          <p className="[word-break:break-word] font-sans font-medium leading-[normal] relative shrink-0 text-[#17324d] text-[12px] text-right w-[142px]" dir="auto" data-node-id="1801:190">
            خروج از سیستم
          </p>
          <div className="relative shrink-0 w-[18px] h-[18px]" data-node-id="1801:191" data-name="logout-icon">
            <img alt="" className="absolute block inset-0 max-w-none w-full h-full" src={imgLogoutIcon} />
          </div>
        </button>
      </div>
    </div>
  );
}