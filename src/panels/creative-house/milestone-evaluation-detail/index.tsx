import "../index.css";
import { Link, useNavigate } from "react-router-dom";

const imgChatGptImage1 = "/assets/creative-house/milestone-evaluation-detail/logo.png";
const imgIcon = "/assets/creative-house/milestone-evaluation-detail/asset-1.svg";
const imgIcon1 = "/assets/creative-house/milestone-evaluation-detail/asset-2.svg";
const imgIcon2 = "/assets/creative-house/milestone-evaluation-detail/asset-3.svg";
const imgDashboardIcon = "/assets/creative-house/milestone-evaluation-detail/asset-4.svg";
const imgUsersIcon = "/assets/creative-house/milestone-evaluation-detail/asset-5.svg";
const imgProjectIcon = "/assets/creative-house/milestone-evaluation-detail/asset-6.svg";
const imgMilestoneIcon = "/assets/creative-house/milestone-evaluation-detail/asset-7.svg";
const imgReportsIcon = "/assets/creative-house/milestone-evaluation-detail/asset-8.svg";
const imgHistoryIcon = "/assets/creative-house/milestone-evaluation-detail/asset-9.svg";
const imgSettingsIcon = "/assets/creative-house/milestone-evaluation-detail/asset-10.svg";
const imgLogoutIcon = "/assets/creative-house/milestone-evaluation-detail/asset-11.svg";

export default function AyenehMilestoneEvaluationDetail() {
  const navigate = useNavigate();

  return (
    <div className="creative-house-dashboard bg-[#f5f8fb] relative w-full h-full" data-node-id="1788:2" data-name="ayeneh-milestone-evaluation-detail">
      <div className="absolute bg-[#f5f8fb] h-[1900px] left-0 overflow-clip top-0 w-[1216px]" data-node-id="1788:232" data-name="Main Content">
        <Link to="/panel/creative-house/milestone-evaluations" className="absolute bg-white block border border-[#e4ebf1] border-solid cursor-pointer h-[36px] left-[28px] overflow-clip rounded-[10px] top-[24px] w-[142px]" data-node-id="1788:287" data-name="back-to-list">
          <div className="-translate-x-1/2 -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-sans font-medium h-[36px] justify-center leading-[0] left-[70px] text-[#2094e3] text-[12px] text-center top-[17px] w-[142px]" data-node-id="1788:288">
            <p className="leading-[normal]" dir="auto">
              بازگشت به لیست
            </p>
          </div>
        </Link>
        <div className="-translate-x-full -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-sans font-bold h-[30px] justify-center leading-[0] left-[1188px] text-[#17324d] text-[24px] text-right top-[33px] w-[618px]" data-node-id="1788:289">
          <p className="leading-[normal]" dir="auto">
            ارزیابی گزارش مرحله
          </p>
        </div>
        <div className="-translate-x-full -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-sans font-normal h-[24px] justify-center leading-[0] left-[1188px] text-[#60758a] text-[13px] text-right top-[64px] w-[668px]" data-node-id="1788:290">
          <p className="leading-[normal]" dir="auto">
            بررسی KPIها، هزینه‌ها و مستندات مرحله پیش از ثبت نتیجه ارزیابی
          </p>
        </div>
        <div className="absolute bg-white border border-[#e4ebf1] border-solid h-[94px] left-[28px] overflow-clip rounded-[16px] shadow-[0px_4px_16px_0px_rgba(23,46,71,0.08)] top-[96px] w-[1160px]" data-node-id="1788:291" data-name="milestone-summary">
          <div className="absolute bg-[#fff7e8] h-[30px] left-[17px] overflow-clip rounded-[999px] top-[17px] w-[128px]" data-node-id="1788:292" data-name="status">
            <div className="-translate-x-1/2 -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-sans font-medium h-[30px] justify-center leading-[0] left-[64px] text-[#c27a10] text-[12px] text-center top-[15px] w-[128px]" data-node-id="1788:293">
              <p className="leading-[normal]" dir="auto">
                در انتظار بررسی
              </p>
            </div>
          </div>
          <div className="[word-break:break-word] absolute bg-[#f9fbfd] border border-[#e4ebf1] border-solid h-[58px] leading-[0] left-[161px] overflow-clip rounded-[10px] text-right top-[17px] w-[170px]" data-node-id="1788:294" data-name="field">
            <div className="-translate-x-full -translate-y-1/2 absolute flex flex-col font-sans font-normal h-[20px] justify-center left-[157px] text-[#60758a] text-[11px] top-[15px] w-[146px]" data-node-id="1788:295">
              <p className="leading-[normal]" dir="auto">
                تاریخ ارسال
              </p>
            </div>
            <div className="-translate-x-full -translate-y-1/2 absolute flex flex-col font-['Vazirmatn:SemiBold'] font-semibold h-[24px] justify-center left-[157px] text-[#17324d] text-[14px] top-[38px] w-[146px]" data-node-id="1788:296">
              <p className="leading-[normal]" dir="auto">
                ۱۵ آذر ۱۴۰۵
              </p>
            </div>
          </div>
          <div className="[word-break:break-word] absolute bg-[#f9fbfd] border border-[#e4ebf1] border-solid h-[58px] leading-[0] left-[343px] overflow-clip rounded-[10px] text-right top-[17px] w-[190px]" data-node-id="1788:297" data-name="field">
            <div className="-translate-x-full -translate-y-1/2 absolute flex flex-col font-sans font-normal h-[20px] justify-center left-[177px] text-[#60758a] text-[11px] top-[15px] w-[166px]" data-node-id="1788:298">
              <p className="leading-[normal]" dir="auto">
                بودجه مرحله
              </p>
            </div>
            <div className="-translate-x-full -translate-y-1/2 absolute flex flex-col font-['Vazirmatn:SemiBold'] font-semibold h-[24px] justify-center left-[177px] text-[#17324d] text-[14px] top-[38px] w-[166px]" data-node-id="1788:299">
              <p className="leading-[normal]" dir="auto">
                ۱۲۰ میلیون تومان
              </p>
            </div>
          </div>
          <div className="[word-break:break-word] absolute bg-[#f9fbfd] border border-[#e4ebf1] border-solid h-[58px] leading-[0] left-[545px] overflow-clip rounded-[10px] text-right top-[17px] w-[190px]" data-node-id="1788:300" data-name="field">
            <div className="-translate-x-full -translate-y-1/2 absolute flex flex-col font-sans font-normal h-[20px] justify-center left-[177px] text-[#60758a] text-[11px] top-[15px] w-[166px]" data-node-id="1788:301">
              <p className="leading-[normal]" dir="auto">
                استارتاپ مجری
              </p>
            </div>
            <div className="-translate-x-full -translate-y-1/2 absolute flex flex-col font-['Vazirmatn:SemiBold'] font-semibold h-[24px] justify-center left-[177px] text-[#17324d] text-[14px] top-[38px] w-[166px]" data-node-id="1788:302">
              <p className="leading-[normal]" dir="auto">
                راهکار سبز
              </p>
            </div>
          </div>
          <div className="[word-break:break-word] absolute bg-[#f9fbfd] border border-[#e4ebf1] border-solid h-[58px] leading-[0] left-[747px] overflow-clip rounded-[10px] text-right top-[17px] w-[394px]" data-node-id="1788:303" data-name="field">
            <div className="-translate-x-full -translate-y-1/2 absolute flex flex-col font-sans font-normal h-[20px] justify-center left-[381px] text-[#60758a] text-[11px] top-[15px] w-[370px]" data-node-id="1788:304">
              <p className="leading-[normal]" dir="auto">
                پروژه / مرحله
              </p>
            </div>
            <div className="-translate-x-full -translate-y-1/2 absolute flex flex-col font-['Vazirmatn:SemiBold'] font-semibold h-[24px] justify-center left-[381px] text-[#17324d] text-[14px] top-[38px] w-[370px]" data-node-id="1788:305">
              <p className="leading-[normal]" dir="auto">
                اشتغال زنان روستایی — مرحله اول
              </p>
            </div>
          </div>
        </div>
        <div className="absolute bg-white border border-[#e4ebf1] border-solid h-[720px] left-[28px] overflow-clip rounded-[16px] shadow-[0px_4px_16px_0px_rgba(23,46,71,0.08)] top-[208px] w-[356px]" data-node-id="1788:306" data-name="milestone-evaluation-decision">
          <div className="-translate-x-full -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-sans font-bold justify-center leading-[0] left-[327px] text-[#17324d] text-[18px] text-right top-[31px] w-[304px]" data-node-id="1788:307">
            <p className="leading-[normal]" dir="auto">
              جمع‌بندی ارزیابی مرحله
            </p>
          </div>
          <div className="-translate-x-full -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-sans font-normal h-[42px] justify-center leading-[0] left-[327px] text-[#60758a] text-[11px] text-right top-[68px] w-[304px]" data-node-id="1788:308">
            <p className="leading-[normal]" dir="auto">
              تصمیم بر اساس گزارش و شواهد ثبت‌شده در لندینگ انجام می‌شود.
            </p>
          </div>
          <div className="absolute bg-[#e4ebf1] h-px left-[15px] top-[99px] w-[324px]" data-node-id="1788:309" data-name="Rectangle" />
          <div className="-translate-x-full -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-sans font-bold h-[24px] justify-center leading-[0] left-[327px] text-[#17324d] text-[14px] text-right top-[123px] w-[158px]" data-node-id="1788:310">
            <p className="leading-[normal]" dir="auto">
              چک‌لیست بررسی
            </p>
          </div>
          <div className="absolute bg-[#eaf8f0] h-[30px] left-[17px] overflow-clip rounded-[999px] top-[145px] w-[100px]" data-node-id="1788:311" data-name="check">
            <div className="-translate-x-1/2 -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-sans font-medium h-[30px] justify-center leading-[0] left-[50px] text-[#159455] text-[12px] text-center top-[15px] w-[100px]" data-node-id="1788:312">
              <p className="leading-[normal]" dir="auto">
                ۴ شاخص
              </p>
            </div>
          </div>
          <div className="-translate-x-full -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-sans font-medium h-[30px] justify-center leading-[0] left-[327px] text-[#17324d] text-[13px] text-right top-[160px] w-[198px]" data-node-id="1788:313">
            <p className="leading-[normal]" dir="auto">
              تحقق KPIهای مرحله
            </p>
          </div>
          <div className="absolute bg-[#eaf8f0] h-[30px] left-[17px] overflow-clip rounded-[999px] top-[193px] w-[100px]" data-node-id="1788:314" data-name="check">
            <div className="-translate-x-1/2 -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-sans font-medium h-[30px] justify-center leading-[0] left-[50px] text-[#159455] text-[12px] text-center top-[15px] w-[100px]" data-node-id="1788:315">
              <p className="leading-[normal]" dir="auto">
                ۱۲۰ م.ت
              </p>
            </div>
          </div>
          <div className="-translate-x-full -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-sans font-medium h-[30px] justify-center leading-[0] left-[327px] text-[#17324d] text-[13px] text-right top-[208px] w-[198px]" data-node-id="1788:316">
            <p className="leading-[normal]" dir="auto">
              تطابق هزینه‌ها
            </p>
          </div>
          <div className="absolute bg-[#eaf8f0] h-[30px] left-[17px] overflow-clip rounded-[999px] top-[241px] w-[100px]" data-node-id="1788:317" data-name="check">
            <div className="-translate-x-1/2 -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-sans font-medium h-[30px] justify-center leading-[0] left-[50px] text-[#159455] text-[12px] text-center top-[15px] w-[100px]" data-node-id="1788:318">
              <p className="leading-[normal]" dir="auto">
                ۴ فایل اصلی
              </p>
            </div>
          </div>
          <div className="-translate-x-full -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-sans font-medium h-[30px] justify-center leading-[0] left-[327px] text-[#17324d] text-[13px] text-right top-[256px] w-[198px]" data-node-id="1788:319">
            <p className="leading-[normal]" dir="auto">
              کامل بودن مستندات
            </p>
          </div>
          <div className="absolute bg-[#eaf8f0] h-[30px] left-[17px] overflow-clip rounded-[999px] top-[289px] w-[100px]" data-node-id="1788:320" data-name="check">
            <div className="-translate-x-1/2 -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-sans font-medium h-[30px] justify-center leading-[0] left-[50px] text-[#159455] text-[12px] text-center top-[15px] w-[100px]" data-node-id="1788:321">
              <p className="leading-[normal]" dir="auto">
                مرحله اول
              </p>
            </div>
          </div>
          <div className="-translate-x-full -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-sans font-medium h-[30px] justify-center leading-[0] left-[327px] text-[#17324d] text-[13px] text-right top-[304px] w-[198px]" data-node-id="1788:322">
            <p className="leading-[normal]" dir="auto">
              تطابق گزارش اجرایی
            </p>
          </div>
          <div className="absolute bg-[#e4ebf1] h-px left-[15px] top-[347px] w-[324px]" data-node-id="1788:323" data-name="Rectangle" />
          <div className="-translate-x-full -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-sans font-bold h-[24px] justify-center leading-[0] left-[327px] text-[#17324d] text-[14px] text-right top-[371px] w-[122px]" data-node-id="1788:324">
            <p className="leading-[normal]" dir="auto">
              تصمیم نهایی
            </p>
          </div>
          <button onClick={() => navigate("/panel/creative-house/overlays/decision")} className="absolute bg-[#eaf8f0] block cursor-pointer h-[40px] left-[17px] overflow-clip rounded-[10px] top-[393px] w-[320px]" data-node-id="1788:325" data-name="decision-option">
            <div className="-translate-x-full -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Vazirmatn:SemiBold'] font-semibold h-[40px] justify-center leading-[0] left-[306px] text-[#159455] text-[13px] text-right top-[20px] w-[292px]" data-node-id="1788:326">
              <p className="leading-[normal]" dir="auto">
                تأیید مرحله
              </p>
            </div>
          </button>
          <button onClick={() => navigate("/panel/creative-house/overlays/decision")} className="absolute bg-[#fff7e8] block cursor-pointer h-[40px] left-[17px] overflow-clip rounded-[10px] top-[443px] w-[320px]" data-node-id="1788:327" data-name="decision-option">
            <div className="-translate-x-full -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Vazirmatn:SemiBold'] font-semibold h-[40px] justify-center leading-[0] left-[306px] text-[#c27a10] text-[13px] text-right top-[20px] w-[292px]" data-node-id="1788:328">
              <p className="leading-[normal]" dir="auto">
                درخواست اصلاح گزارش
              </p>
            </div>
          </button>
          <button onClick={() => navigate("/panel/creative-house/overlays/decision")} className="absolute bg-[#fdeeee] block cursor-pointer h-[40px] left-[17px] overflow-clip rounded-[10px] top-[493px] w-[320px]" data-node-id="1788:329" data-name="decision-option">
            <div className="-translate-x-full -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Vazirmatn:SemiBold'] font-semibold h-[40px] justify-center leading-[0] left-[306px] text-[#c94b4b] text-[13px] text-right top-[20px] w-[292px]" data-node-id="1788:330">
              <p className="leading-[normal]" dir="auto">
                رد گزارش
              </p>
            </div>
          </button>
          <div className="-translate-x-full -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-sans font-bold h-[24px] justify-center leading-[0] left-[327px] text-[#17324d] text-[13px] text-right top-[561px] w-[126px]" data-node-id="1788:331">
            <p className="leading-[normal]" dir="auto">
              دلیل و توضیحات
            </p>
          </div>
          <div className="absolute bg-[#fafcfe] border border-[#e4ebf1] border-solid h-[76px] left-[17px] overflow-clip rounded-[10px] top-[579px] w-[320px]" data-node-id="1788:332" data-name="decision-reason-input">
            <div className="-translate-x-full -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-sans font-normal h-[60px] justify-center leading-[0] left-[307px] text-[#60758a] text-[11px] text-right top-[37px] w-[296px]" data-node-id="1788:333">
              <p className="leading-[normal]" dir="auto">
                یادداشت ارزیاب درباره KPI، هزینه یا مستندات...
              </p>
            </div>
          </div>
          <Link to="/panel/creative-house/overlays/decision" className="absolute bg-[#2094e3] block cursor-pointer h-[38px] left-[17px] overflow-clip rounded-[10px] top-[667px] w-[320px]" data-node-id="1788:334" data-name="save-decision">
            <div className="-translate-x-1/2 -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-sans font-bold h-[38px] justify-center leading-[0] left-[160px] text-[13px] text-center text-white top-[19px] w-[320px]" data-node-id="1788:335">
              <p className="leading-[normal]" dir="auto">
                ثبت نتیجه ارزیابی
              </p>
            </div>
          </Link>
        </div>
        <div className="[word-break:break-word] absolute bg-[#eaf5fd] h-[104px] leading-[0] left-[28px] overflow-clip rounded-[14px] text-right top-[944px] w-[356px]" data-node-id="1788:336" data-name="release-note">
          <div className="-translate-x-full -translate-y-1/2 absolute flex flex-col font-sans font-bold h-[24px] justify-center left-[338px] text-[#2094e3] text-[13px] top-[24px] w-[320px]" data-node-id="1788:337">
            <p className="leading-[normal]" dir="auto">
              پس از تأیید مرحله
            </p>
          </div>
          <div className="-translate-x-full -translate-y-1/2 absolute flex flex-col font-sans font-normal h-[54px] justify-center left-[338px] text-[#17324d] text-[11px] top-[65px] w-[320px]" data-node-id="1788:338">
            <p className="leading-[normal]" dir="auto">
              نتیجه تأیید برای آزادسازی وجه همین مرحله به کمیته امداد ارسال می‌شود.
            </p>
          </div>
        </div>
        <div className="absolute bg-white border border-[#e4ebf1] border-solid h-[1650px] left-[400px] overflow-clip rounded-[16px] shadow-[0px_4px_16px_0px_rgba(23,46,71,0.08)] top-[208px] w-[760px]" data-node-id="1788:339" data-name="milestone-report-data">
          <div className="-translate-x-full -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-sans font-bold h-[30px] justify-center leading-[0] left-[735px] text-[#17324d] text-[18px] text-right top-[30px] w-[344px]" data-node-id="1788:340">
            <p className="leading-[normal]" dir="auto">
              گزارش مرحله اول از لندینگ
            </p>
          </div>
          <div className="-translate-x-full -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-sans font-normal h-[24px] justify-center leading-[0] left-[735px] text-[#60758a] text-[11px] text-right top-[59px] w-[620px]" data-node-id="1788:341">
            <p className="leading-[normal]" dir="auto">
              اطلاعات زیر مستقیماً از گزارش عملکرد مرحله اول پروژه استخراج شده‌اند.
            </p>
          </div>
          <div className="absolute bg-[#eaf5fd] h-[30px] left-[17px] overflow-clip rounded-[999px] top-[17px] w-[116px]" data-node-id="1788:342" data-name="source">
            <div className="-translate-x-1/2 -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-sans font-medium h-[30px] justify-center leading-[0] left-[58px] text-[#2094e3] text-[12px] text-center top-[15px] w-[116px]" data-node-id="1788:343">
              <p className="leading-[normal]">Landing report</p>
            </div>
          </div>
          <div className="-translate-x-full -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-sans font-bold h-[26px] justify-center leading-[0] left-[735px] text-[#17324d] text-[16px] text-right top-[100px] w-[306px]" data-node-id="1788:344">
            <p className="leading-[normal]" dir="auto">
              ۱. خلاصه گزارش مرحله
            </p>
          </div>
          <div className="absolute bg-[#e4ebf1] h-px left-[13px] top-[119px] w-[732px]" data-node-id="1788:345" data-name="Rectangle" />
          <div className="[word-break:break-word] absolute bg-[#f9fbfd] border border-[#e4ebf1] border-solid h-[126px] leading-[0] left-[13px] overflow-clip rounded-[12px] text-right top-[131px] w-[732px]" data-node-id="1788:346" data-name="report-overview">
            <div className="absolute bg-[#f9fbfd] border border-[#e4ebf1] border-solid h-[58px] left-[383px] overflow-clip rounded-[10px] top-[13px] w-[334px]" data-node-id="1788:347" data-name="field">
              <div className="-translate-x-full -translate-y-1/2 absolute flex flex-col font-sans font-normal h-[20px] justify-center left-[321px] text-[#60758a] text-[11px] top-[15px] w-[310px]" data-node-id="1788:348">
                <p className="leading-[normal]" dir="auto">
                  عنوان گزارش
                </p>
              </div>
              <div className="-translate-x-full -translate-y-1/2 absolute flex flex-col font-['Vazirmatn:SemiBold'] font-semibold h-[24px] justify-center left-[321px] text-[#17324d] text-[14px] top-[38px] w-[310px]" data-node-id="1788:349">
                <p className="leading-[normal]" dir="auto">
                  گزارش عملکرد مرحله اول پروژه اشتغال زنان روستایی
                </p>
              </div>
            </div>
            <div className="absolute bg-[#f9fbfd] border border-[#e4ebf1] border-solid h-[58px] left-[195px] overflow-clip rounded-[10px] top-[13px] w-[176px]" data-node-id="1788:350" data-name="field">
              <div className="-translate-x-full -translate-y-1/2 absolute flex flex-col font-sans font-normal h-[20px] justify-center left-[163px] text-[#60758a] text-[11px] top-[15px] w-[152px]" data-node-id="1788:351">
                <p className="leading-[normal]" dir="auto">
                  دوره گزارش
                </p>
              </div>
              <div className="-translate-x-full -translate-y-1/2 absolute flex flex-col font-['Vazirmatn:SemiBold'] font-semibold h-[24px] justify-center left-[163px] text-[#17324d] text-[14px] top-[38px] w-[152px]" data-node-id="1788:352">
                <p className="leading-[normal]" dir="auto">
                  شهریور تا آبان ۱۴۰۵
                </p>
              </div>
            </div>
            <div className="absolute bg-[#f9fbfd] border border-[#e4ebf1] border-solid h-[58px] left-[13px] overflow-clip rounded-[10px] top-[13px] w-[170px]" data-node-id="1788:353" data-name="field">
              <div className="-translate-x-full -translate-y-1/2 absolute flex flex-col font-sans font-normal h-[20px] justify-center left-[157px] text-[#60758a] text-[11px] top-[15px] w-[146px]" data-node-id="1788:354">
                <p className="leading-[normal]" dir="auto">
                  شماره گزارش
                </p>
              </div>
              <div className="-translate-x-full -translate-y-1/2 absolute flex flex-col font-['Vazirmatn:SemiBold'] font-semibold h-[24px] justify-center left-[157px] text-[#17324d] text-[14px] top-[38px] w-[146px]" data-node-id="1788:355">
                <p className="leading-[normal]">MAH-R-۱۴۰۵-۰۰۱۸</p>
              </div>
            </div>
            <div className="-translate-x-full -translate-y-1/2 absolute flex flex-col font-sans font-normal h-[34px] justify-center left-[717px] text-[#60758a] text-[12px] top-[92px] w-[704px]" data-node-id="1788:356">
              <p className="leading-[normal]" dir="auto">
                در این مرحله شناسایی، ثبت‌نام، ارزیابی مهارت و آموزش اولیه بهره‌مندان انجام شده است.
              </p>
            </div>
          </div>
          <div className="-translate-x-full -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-sans font-bold h-[26px] justify-center leading-[0] left-[735px] text-[#17324d] text-[16px] text-right top-[290px] w-[306px]" data-node-id="1788:357">
            <p className="leading-[normal]" dir="auto">
              ۲. وضعیت شاخص‌های مرحله
            </p>
          </div>
          <div className="absolute bg-[#e4ebf1] h-px left-[13px] top-[309px] w-[732px]" data-node-id="1788:358" data-name="Rectangle" />
          <div className="absolute bg-white border border-[#e4ebf1] border-solid h-[92px] left-[13px] overflow-clip rounded-[14px] shadow-[0px_4px_16px_0px_rgba(23,46,71,0.08)] top-[323px] w-[352px]" data-node-id="1788:359" data-name="kpi1">
            <div className="absolute left-[13px] w-[40px] h-[40px] top-[13px]" data-node-id="1788:360" data-name="icon">
              <img alt="" className="absolute block inset-0 max-w-none w-full h-full" src={imgIcon} />
            </div>
            <div className="-translate-x-full -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-sans font-medium h-[22px] justify-center leading-[0] left-[335px] text-[#60758a] text-[12px] text-right top-[20px] w-[270px]" data-node-id="1788:362">
              <p className="leading-[normal]" dir="auto">
                آموزش بهره‌مندان
              </p>
            </div>
            <div className="-translate-x-full -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-sans font-bold h-[30px] justify-center leading-[0] left-[335px] text-[#17324d] text-[20px] text-right top-[45px] w-[270px]" data-node-id="1788:363">
              <p className="leading-[normal]" dir="auto">
                ۱۲۴ نفر
              </p>
            </div>
            <div className="-translate-x-full -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-sans font-normal h-[18px] justify-center leading-[0] left-[337px] text-[#60758a] text-[10px] text-right top-[74px] w-[324px]" data-node-id="1788:364">
              <p className="leading-[normal]" dir="auto">
                هدف: ۱۲۰ نفر — تحقق ۱۰۳٪
              </p>
            </div>
          </div>
          <div className="absolute bg-white border border-[#e4ebf1] border-solid h-[92px] left-[393px] overflow-clip rounded-[14px] shadow-[0px_4px_16px_0px_rgba(23,46,71,0.08)] top-[323px] w-[352px]" data-node-id="1788:365" data-name="kpi2">
            <div className="absolute left-[13px] w-[40px] h-[40px] top-[13px]" data-node-id="1788:366" data-name="icon">
              <img alt="" className="absolute block inset-0 max-w-none w-full h-full" src={imgIcon1} />
            </div>
            <div className="-translate-x-full -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-sans font-medium h-[22px] justify-center leading-[0] left-[335px] text-[#60758a] text-[12px] text-right top-[20px] w-[270px]" data-node-id="1788:368">
              <p className="leading-[normal]" dir="auto">
                ارزیابی مهارت
              </p>
            </div>
            <div className="-translate-x-full -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-sans font-bold h-[30px] justify-center leading-[0] left-[335px] text-[#17324d] text-[20px] text-right top-[45px] w-[270px]" data-node-id="1788:369">
              <p className="leading-[normal]" dir="auto">
                ۱۲۰ نفر
              </p>
            </div>
            <div className="-translate-x-full -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-sans font-normal h-[18px] justify-center leading-[0] left-[337px] text-[#60758a] text-[10px] text-right top-[74px] w-[324px]" data-node-id="1788:370">
              <p className="leading-[normal]" dir="auto">
                هدف: ۱۲۰ نفر — تحقق ۱۰۰٪
              </p>
            </div>
          </div>
          <div className="absolute bg-white border border-[#e4ebf1] border-solid h-[92px] left-[13px] overflow-clip rounded-[14px] shadow-[0px_4px_16px_0px_rgba(23,46,71,0.08)] top-[427px] w-[352px]" data-node-id="1788:371" data-name="kpi3">
            <div className="absolute left-[13px] w-[40px] h-[40px] top-[13px]" data-node-id="1788:372" data-name="icon">
              <img alt="" className="absolute block inset-0 max-w-none w-full h-full" src={imgIcon1} />
            </div>
            <div className="-translate-x-full -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-sans font-medium h-[22px] justify-center leading-[0] left-[335px] text-[#60758a] text-[12px] text-right top-[20px] w-[270px]" data-node-id="1788:374">
              <p className="leading-[normal]" dir="auto">
                پوشش روستاها
              </p>
            </div>
            <div className="-translate-x-full -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-sans font-bold h-[30px] justify-center leading-[0] left-[335px] text-[#17324d] text-[20px] text-right top-[45px] w-[270px]" data-node-id="1788:375">
              <p className="leading-[normal]" dir="auto">
                ۱۵ روستا
              </p>
            </div>
            <div className="-translate-x-full -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-sans font-normal h-[18px] justify-center leading-[0] left-[337px] text-[#60758a] text-[10px] text-right top-[74px] w-[324px]" data-node-id="1788:376">
              <p className="leading-[normal]" dir="auto">
                هدف: ۱۵ روستا — تحقق ۱۰۰٪
              </p>
            </div>
          </div>
          <div className="absolute bg-white border border-[#e4ebf1] border-solid h-[92px] left-[393px] overflow-clip rounded-[14px] shadow-[0px_4px_16px_0px_rgba(23,46,71,0.08)] top-[427px] w-[352px]" data-node-id="1788:377" data-name="kpi4">
            <div className="absolute left-[13px] w-[40px] h-[40px] top-[13px]" data-node-id="1788:378" data-name="icon">
              <img alt="" className="absolute block inset-0 max-w-none w-full h-full" src={imgIcon} />
            </div>
            <div className="-translate-x-full -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-sans font-medium h-[22px] justify-center leading-[0] left-[335px] text-[#60758a] text-[12px] text-right top-[20px] w-[270px]" data-node-id="1788:380">
              <p className="leading-[normal]" dir="auto">
                رضایت از آموزش
              </p>
            </div>
            <div className="-translate-x-full -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-sans font-bold h-[30px] justify-center leading-[0] left-[335px] text-[#17324d] text-[20px] text-right top-[45px] w-[270px]" data-node-id="1788:381">
              <p className="leading-[normal]">۸۷٪</p>
            </div>
            <div className="-translate-x-full -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-sans font-normal h-[18px] justify-center leading-[0] left-[337px] text-[#60758a] text-[10px] text-right top-[74px] w-[324px]" data-node-id="1788:382">
              <p className="leading-[normal]" dir="auto">
                هدف: ۸۰٪ — تحقق ۱۰۹٪
              </p>
            </div>
          </div>
          <div className="-translate-x-full -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-sans font-bold h-[26px] justify-center leading-[0] left-[735px] text-[#17324d] text-[16px] text-right top-[554px] w-[306px]" data-node-id="1788:383">
            <p className="leading-[normal]" dir="auto">
              ۳. خلاصه مالی و هزینه‌ها
            </p>
          </div>
          <div className="absolute bg-[#e4ebf1] h-px left-[13px] top-[573px] w-[732px]" data-node-id="1788:384" data-name="Rectangle" />
          <div className="[word-break:break-word] absolute bg-[#f9fbfd] border border-[#e4ebf1] border-solid h-[88px] leading-[0] left-[13px] overflow-clip rounded-[12px] text-right top-[587px] w-[732px]" data-node-id="1788:385" data-name="financial-summary">
            <div className="absolute bg-[#f9fbfd] border border-[#e4ebf1] border-solid h-[58px] left-[495px] overflow-clip rounded-[10px] top-[13px] w-[222px]" data-node-id="1788:386" data-name="field">
              <div className="-translate-x-full -translate-y-1/2 absolute flex flex-col font-sans font-normal h-[20px] justify-center left-[209px] text-[#60758a] text-[11px] top-[15px] w-[198px]" data-node-id="1788:387">
                <p className="leading-[normal]" dir="auto">
                  بودجه مصوب مرحله
                </p>
              </div>
              <div className="-translate-x-full -translate-y-1/2 absolute flex flex-col font-['Vazirmatn:SemiBold'] font-semibold h-[24px] justify-center left-[209px] text-[#17324d] text-[14px] top-[38px] w-[198px]" data-node-id="1788:388">
                <p className="leading-[normal]" dir="auto">
                  ۱۲۰ میلیون تومان
                </p>
              </div>
            </div>
            <div className="absolute bg-[#f9fbfd] border border-[#e4ebf1] border-solid h-[58px] left-[255px] overflow-clip rounded-[10px] top-[13px] w-[226px]" data-node-id="1788:389" data-name="field">
              <div className="-translate-x-full -translate-y-1/2 absolute flex flex-col font-sans font-normal h-[20px] justify-center left-[213px] text-[#60758a] text-[11px] top-[15px] w-[202px]" data-node-id="1788:390">
                <p className="leading-[normal]" dir="auto">
                  مبلغ گزارش‌شده
                </p>
              </div>
              <div className="-translate-x-full -translate-y-1/2 absolute flex flex-col font-['Vazirmatn:SemiBold'] font-semibold h-[24px] justify-center left-[213px] text-[#17324d] text-[14px] top-[38px] w-[202px]" data-node-id="1788:391">
                <p className="leading-[normal]" dir="auto">
                  ۱۲۰ میلیون تومان
                </p>
              </div>
            </div>
            <div className="absolute bg-[#f9fbfd] border border-[#e4ebf1] border-solid h-[58px] left-[13px] overflow-clip rounded-[10px] top-[13px] w-[226px]" data-node-id="1788:392" data-name="field">
              <div className="-translate-x-full -translate-y-1/2 absolute flex flex-col font-sans font-normal h-[20px] justify-center left-[213px] text-[#60758a] text-[11px] top-[15px] w-[202px]" data-node-id="1788:393">
                <p className="leading-[normal]" dir="auto">
                  اختلاف کل
                </p>
              </div>
              <div className="-translate-x-full -translate-y-1/2 absolute flex flex-col font-['Vazirmatn:SemiBold'] font-semibold h-[24px] justify-center left-[213px] text-[#17324d] text-[14px] top-[38px] w-[202px]" data-node-id="1788:394">
                <p className="leading-[normal]" dir="auto">
                  صفر
                </p>
              </div>
            </div>
          </div>
          <div className="[word-break:break-word] absolute bg-[#f6f9fc] border border-[#e4ebf1] border-solid font-sans font-bold h-[48px] leading-[0] left-[13px] overflow-clip rounded-[10px] text-[#60758a] text-[13px] top-[689px] w-[732px]" data-node-id="1788:395" data-name="expense-header">
            <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col h-[48px] justify-center left-[68px] text-center top-[23px] w-[110px]" data-node-id="1788:396">
              <p className="leading-[normal]" dir="auto">
                وضعیت
              </p>
            </div>
            <div className="-translate-x-full -translate-y-1/2 absolute flex flex-col h-[48px] justify-center left-[263px] text-right top-[23px] w-[130px]" data-node-id="1788:397">
              <p className="leading-[normal]" dir="auto">
                گزارش‌شده
              </p>
            </div>
            <div className="-translate-x-full -translate-y-1/2 absolute flex flex-col h-[48px] justify-center left-[403px] text-right top-[23px] w-[130px]" data-node-id="1788:398">
              <p className="leading-[normal]" dir="auto">
                مصوب
              </p>
            </div>
            <div className="-translate-x-full -translate-y-1/2 absolute flex flex-col h-[48px] justify-center left-[717px] text-right top-[23px] w-[304px]" data-node-id="1788:399">
              <p className="leading-[normal]" dir="auto">
                عنوان هزینه
              </p>
            </div>
          </div>
          <div className="[word-break:break-word] absolute bg-white border border-[#e4ebf1] border-solid h-[48px] leading-[0] left-[13px] overflow-clip rounded-[10px] text-[13px] top-[743px] w-[732px]" data-node-id="1788:400" data-name="expense-row">
            <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-sans font-medium h-[48px] justify-center left-[68px] text-[#159455] text-center top-[23px] w-[110px]" data-node-id="1788:401">
              <p className="leading-[normal]" dir="auto">
                تأیید
              </p>
            </div>
            <div className="-translate-x-full -translate-y-1/2 absolute flex flex-col font-['Vazirmatn:SemiBold'] font-semibold h-[48px] justify-center left-[263px] text-[#17324d] text-right top-[23px] w-[130px]" data-node-id="1788:402">
              <p className="leading-[normal]" dir="auto">
                ۵۸ م.ت
              </p>
            </div>
            <div className="-translate-x-full -translate-y-1/2 absolute flex flex-col font-sans font-normal h-[48px] justify-center left-[403px] text-[#60758a] text-right top-[23px] w-[130px]" data-node-id="1788:403">
              <p className="leading-[normal]" dir="auto">
                ۶۰ م.ت
              </p>
            </div>
            <div className="-translate-x-full -translate-y-1/2 absolute flex flex-col font-sans font-normal h-[48px] justify-center left-[717px] text-[#17324d] text-right top-[23px] w-[304px]" data-node-id="1788:404">
              <p className="leading-[normal]" dir="auto">
                طراحی و اجرای آموزش
              </p>
            </div>
          </div>
          <div className="[word-break:break-word] absolute bg-white border border-[#e4ebf1] border-solid h-[48px] leading-[0] left-[13px] overflow-clip rounded-[10px] text-[13px] top-[797px] w-[732px]" data-node-id="1788:405" data-name="expense-row">
            <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-sans font-medium h-[48px] justify-center left-[68px] text-[#159455] text-center top-[23px] w-[110px]" data-node-id="1788:406">
              <p className="leading-[normal]" dir="auto">
                تأیید
              </p>
            </div>
            <div className="-translate-x-full -translate-y-1/2 absolute flex flex-col font-['Vazirmatn:SemiBold'] font-semibold h-[48px] justify-center left-[263px] text-[#17324d] text-right top-[23px] w-[130px]" data-node-id="1788:407">
              <p className="leading-[normal]" dir="auto">
                ۲۰ م.ت
              </p>
            </div>
            <div className="-translate-x-full -translate-y-1/2 absolute flex flex-col font-sans font-normal h-[48px] justify-center left-[403px] text-[#60758a] text-right top-[23px] w-[130px]" data-node-id="1788:408">
              <p className="leading-[normal]" dir="auto">
                ۲۰ م.ت
              </p>
            </div>
            <div className="-translate-x-full -translate-y-1/2 absolute flex flex-col font-sans font-normal h-[48px] justify-center left-[717px] text-[#17324d] text-right top-[23px] w-[304px]" data-node-id="1788:409">
              <p className="leading-[normal]" dir="auto">
                ارزیابی مهارت
              </p>
            </div>
          </div>
          <div className="[word-break:break-word] absolute bg-white border border-[#e4ebf1] border-solid h-[48px] leading-[0] left-[13px] overflow-clip rounded-[10px] text-[13px] top-[851px] w-[732px]" data-node-id="1788:410" data-name="expense-row">
            <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-sans font-medium h-[48px] justify-center left-[68px] text-[#c27a10] text-center top-[23px] w-[110px]" data-node-id="1788:411">
              <p className="leading-[normal]" dir="auto">
                نیازمند توضیح
              </p>
            </div>
            <div className="-translate-x-full -translate-y-1/2 absolute flex flex-col font-['Vazirmatn:SemiBold'] font-semibold h-[48px] justify-center left-[263px] text-[#17324d] text-right top-[23px] w-[130px]" data-node-id="1788:412">
              <p className="leading-[normal]" dir="auto">
                ۲۷ م.ت
              </p>
            </div>
            <div className="-translate-x-full -translate-y-1/2 absolute flex flex-col font-sans font-normal h-[48px] justify-center left-[403px] text-[#60758a] text-right top-[23px] w-[130px]" data-node-id="1788:413">
              <p className="leading-[normal]" dir="auto">
                ۲۵ م.ت
              </p>
            </div>
            <div className="-translate-x-full -translate-y-1/2 absolute flex flex-col font-sans font-normal h-[48px] justify-center left-[717px] text-[#17324d] text-right top-[23px] w-[304px]" data-node-id="1788:414">
              <p className="leading-[normal]" dir="auto">
                اجرای میدانی
              </p>
            </div>
          </div>
          <div className="[word-break:break-word] absolute bg-white border border-[#e4ebf1] border-solid h-[48px] leading-[0] left-[13px] overflow-clip rounded-[10px] text-[13px] top-[905px] w-[732px]" data-node-id="1788:415" data-name="expense-row">
            <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-sans font-medium h-[48px] justify-center left-[68px] text-[#159455] text-center top-[23px] w-[110px]" data-node-id="1788:416">
              <p className="leading-[normal]" dir="auto">
                تأیید
              </p>
            </div>
            <div className="-translate-x-full -translate-y-1/2 absolute flex flex-col font-['Vazirmatn:SemiBold'] font-semibold h-[48px] justify-center left-[263px] text-[#17324d] text-right top-[23px] w-[130px]" data-node-id="1788:417">
              <p className="leading-[normal]" dir="auto">
                ۱۵ م.ت
              </p>
            </div>
            <div className="-translate-x-full -translate-y-1/2 absolute flex flex-col font-sans font-normal h-[48px] justify-center left-[403px] text-[#60758a] text-right top-[23px] w-[130px]" data-node-id="1788:418">
              <p className="leading-[normal]" dir="auto">
                ۱۵ م.ت
              </p>
            </div>
            <div className="-translate-x-full -translate-y-1/2 absolute flex flex-col font-sans font-normal h-[48px] justify-center left-[717px] text-[#17324d] text-right top-[23px] w-[304px]" data-node-id="1788:419">
              <p className="leading-[normal]" dir="auto">
                سنجش و گزارش‌دهی
              </p>
            </div>
          </div>
          <div className="-translate-x-full -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-sans font-bold h-[26px] justify-center leading-[0] left-[735px] text-[#17324d] text-[16px] text-right top-[994px] w-[306px]" data-node-id="1788:420">
            <p className="leading-[normal]" dir="auto">
              ۴. مستندات و شواهد
            </p>
          </div>
          <div className="absolute bg-[#e4ebf1] h-px left-[13px] top-[1013px] w-[732px]" data-node-id="1788:421" data-name="Rectangle" />
          <button onClick={() => navigate("/panel/creative-house/overlays/file-preview")} className="absolute bg-white block border border-[#e4ebf1] border-solid cursor-pointer h-[52px] left-[13px] overflow-clip rounded-[10px] top-[1027px] w-[732px]" data-node-id="1788:422" data-name="document-row">
            <div className="absolute bg-[#eaf5fd] h-[30px] left-[13px] overflow-clip rounded-[999px] top-[10px] w-[76px]" data-node-id="1788:423" role="button" tabIndex="0" data-name="doc-type">
              <div className="-translate-x-1/2 -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-sans font-medium h-[30px] justify-center leading-[0] left-[38px] text-[#2094e3] text-[12px] text-center top-[15px] w-[76px]" data-node-id="1788:424">
                <p className="leading-[normal]" dir="auto">
                  مشاهده
                </p>
              </div>
            </div>
            <div className="-translate-x-full -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-sans font-normal h-[52px] justify-center leading-[0] left-[249px] text-[#60758a] text-[11px] text-right top-[25px] w-[150px]" data-node-id="1788:425">
              <p className="leading-[normal]" dir="auto">
                ۲۰ آذر ۱۴۰۵
              </p>
            </div>
            <div className="-translate-x-full -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-sans font-normal h-[52px] justify-center leading-[0] left-[409px] text-[#60758a] text-[11px] text-right top-[25px] w-[150px]" data-node-id="1788:426">
              <p className="leading-[normal]" dir="auto">
                PDF — ۲.۴ مگابایت
              </p>
            </div>
            <div className="-translate-x-full -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Vazirmatn:SemiBold'] font-semibold h-[52px] justify-center leading-[0] left-[717px] text-[#17324d] text-[12px] text-right top-[25px] w-[296px]" data-node-id="1788:427">
              <p className="leading-[normal]" dir="auto">
                خلاصه گزارش عملکرد مرحله اول
              </p>
            </div>
          </button>
          <button onClick={() => navigate("/panel/creative-house/overlays/file-preview")} className="absolute bg-white block border border-[#e4ebf1] border-solid cursor-pointer h-[52px] left-[13px] overflow-clip rounded-[10px] top-[1089px] w-[732px]" data-node-id="1788:428" data-name="document-row">
            <div className="absolute bg-[#eaf5fd] h-[30px] left-[13px] overflow-clip rounded-[999px] top-[10px] w-[76px]" data-node-id="1788:429" role="button" tabIndex="0" data-name="doc-type">
              <div className="-translate-x-1/2 -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-sans font-medium h-[30px] justify-center leading-[0] left-[38px] text-[#2094e3] text-[12px] text-center top-[15px] w-[76px]" data-node-id="1788:430">
                <p className="leading-[normal]" dir="auto">
                  مشاهده
                </p>
              </div>
            </div>
            <div className="-translate-x-full -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-sans font-normal h-[52px] justify-center leading-[0] left-[249px] text-[#60758a] text-[11px] text-right top-[25px] w-[150px]" data-node-id="1788:431">
              <p className="leading-[normal]" dir="auto">
                ۱۸ آذر ۱۴۰۵
              </p>
            </div>
            <div className="-translate-x-full -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-sans font-normal h-[52px] justify-center leading-[0] left-[409px] text-[#60758a] text-[11px] text-right top-[25px] w-[150px]" data-node-id="1788:432">
              <p className="leading-[normal]" dir="auto">
                PDF — ۸۴۰ کیلوبایت
              </p>
            </div>
            <div className="-translate-x-full -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Vazirmatn:SemiBold'] font-semibold h-[52px] justify-center leading-[0] left-[717px] text-[#17324d] text-[12px] text-right top-[25px] w-[296px]" data-node-id="1788:433">
              <p className="leading-[normal]" dir="auto">
                جدول شاخص‌های کلیدی عملکرد
              </p>
            </div>
          </button>
          <button onClick={() => navigate("/panel/creative-house/overlays/file-preview")} className="absolute bg-white block border border-[#e4ebf1] border-solid cursor-pointer h-[52px] left-[13px] overflow-clip rounded-[10px] top-[1151px] w-[732px]" data-node-id="1788:434" data-name="document-row">
            <div className="absolute bg-[#eaf5fd] h-[30px] left-[13px] overflow-clip rounded-[999px] top-[10px] w-[76px]" data-node-id="1788:435" role="button" tabIndex="0" data-name="doc-type">
              <div className="-translate-x-1/2 -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-sans font-medium h-[30px] justify-center leading-[0] left-[38px] text-[#2094e3] text-[12px] text-center top-[15px] w-[76px]" data-node-id="1788:436">
                <p className="leading-[normal]" dir="auto">
                  مشاهده
                </p>
              </div>
            </div>
            <div className="-translate-x-full -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-sans font-normal h-[52px] justify-center leading-[0] left-[249px] text-[#60758a] text-[11px] text-right top-[25px] w-[150px]" data-node-id="1788:437">
              <p className="leading-[normal]" dir="auto">
                ۱۴ آذر ۱۴۰۵
              </p>
            </div>
            <div className="-translate-x-full -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-sans font-normal h-[52px] justify-center leading-[0] left-[409px] text-[#60758a] text-[11px] text-right top-[25px] w-[150px]" data-node-id="1788:438">
              <p className="leading-[normal]" dir="auto">
                PDF — ۱.۲ مگابایت
              </p>
            </div>
            <div className="-translate-x-full -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Vazirmatn:SemiBold'] font-semibold h-[52px] justify-center leading-[0] left-[717px] text-[#17324d] text-[12px] text-right top-[25px] w-[296px]" data-node-id="1788:439">
              <p className="leading-[normal]" dir="auto">
                برنامه آموزشی و سرفصل دوره‌ها
              </p>
            </div>
          </button>
          <button onClick={() => navigate("/panel/creative-house/overlays/file-preview")} className="absolute bg-white block border border-[#e4ebf1] border-solid cursor-pointer h-[52px] left-[13px] overflow-clip rounded-[10px] top-[1213px] w-[732px]" data-node-id="1788:440" data-name="document-row">
            <div className="absolute bg-[#eaf5fd] h-[30px] left-[13px] overflow-clip rounded-[999px] top-[10px] w-[76px]" data-node-id="1788:441" role="button" tabIndex="0" data-name="doc-type">
              <div className="-translate-x-1/2 -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-sans font-medium h-[30px] justify-center leading-[0] left-[38px] text-[#2094e3] text-[12px] text-center top-[15px] w-[76px]" data-node-id="1788:442">
                <p className="leading-[normal]" dir="auto">
                  مشاهده
                </p>
              </div>
            </div>
            <div className="-translate-x-full -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-sans font-normal h-[52px] justify-center leading-[0] left-[249px] text-[#60758a] text-[11px] text-right top-[25px] w-[150px]" data-node-id="1788:443">
              <p className="leading-[normal]" dir="auto">
                ۱۰ آذر ۱۴۰۵
              </p>
            </div>
            <div className="-translate-x-full -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-sans font-normal h-[52px] justify-center leading-[0] left-[409px] text-[#60758a] text-[11px] text-right top-[25px] w-[150px]" data-node-id="1788:444">
              <p className="leading-[normal]" dir="auto">
                PDF — ۱.۷ مگابایت
              </p>
            </div>
            <div className="-translate-x-full -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Vazirmatn:SemiBold'] font-semibold h-[52px] justify-center leading-[0] left-[717px] text-[#17324d] text-[12px] text-right top-[25px] w-[296px]" data-node-id="1788:445">
              <p className="leading-[normal]" dir="auto">
                گزارش جامع ارزیابی اولیه بهره‌مندان
              </p>
            </div>
          </button>
          <div className="-translate-x-full -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-sans font-bold h-[26px] justify-center leading-[0] left-[735px] text-[#17324d] text-[16px] text-right top-[1306px] w-[306px]" data-node-id="1788:446">
            <p className="leading-[normal]" dir="auto">
              ۵. مسیر اعتبارسنجی گزارش
            </p>
          </div>
          <div className="absolute bg-[#e4ebf1] h-px left-[13px] top-[1325px] w-[732px]" data-node-id="1788:447" data-name="Rectangle" />
          <div className="absolute bg-[#f9fbfd] border border-[#e4ebf1] border-solid h-[82px] left-[13px] overflow-clip rounded-[12px] top-[1339px] w-[170px]" data-node-id="1788:448" data-name="validation-step">
            <div className="absolute bg-[#eaf5fd] left-[111px] overflow-clip rounded-[21px] w-[42px] h-[42px] top-[11px]" data-node-id="1788:449" data-name="num">
              <div className="-translate-x-1/2 -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-sans font-bold justify-center leading-[0] left-[21px] w-[42px] h-[42px] text-[#2094e3] text-[14px] text-center top-[21px]" data-node-id="1788:450">
                <p className="leading-[normal]">۱</p>
              </div>
            </div>
            <div className="-translate-x-1/2 -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-sans font-medium h-[22px] justify-center leading-[0] left-[84px] text-[#17324d] text-[10px] text-center top-[64px] w-[146px]" data-node-id="1788:451">
              <p className="leading-[normal]" dir="auto">
                ثبت اطلاعات توسط استارتاپ
              </p>
            </div>
          </div>
          <div className="absolute bg-[#f9fbfd] border border-[#e4ebf1] border-solid h-[82px] left-[197px] overflow-clip rounded-[12px] top-[1339px] w-[170px]" data-node-id="1788:452" data-name="validation-step">
            <div className="absolute bg-[#eaf5fd] left-[111px] overflow-clip rounded-[21px] w-[42px] h-[42px] top-[11px]" data-node-id="1788:453" data-name="num">
              <div className="-translate-x-1/2 -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-sans font-bold justify-center leading-[0] left-[21px] w-[42px] h-[42px] text-[#2094e3] text-[14px] text-center top-[21px]" data-node-id="1788:454">
                <p className="leading-[normal]">۲</p>
              </div>
            </div>
            <div className="-translate-x-1/2 -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-sans font-medium h-[22px] justify-center leading-[0] left-[84px] text-[#17324d] text-[10px] text-center top-[64px] w-[146px]" data-node-id="1788:455">
              <p className="leading-[normal]" dir="auto">
                بارگذاری شواهد و مستندات
              </p>
            </div>
          </div>
          <div className="absolute bg-[#f9fbfd] border border-[#e4ebf1] border-solid h-[82px] left-[381px] overflow-clip rounded-[12px] top-[1339px] w-[170px]" data-node-id="1788:456" data-name="validation-step">
            <div className="absolute bg-[#eaf5fd] left-[111px] overflow-clip rounded-[21px] w-[42px] h-[42px] top-[11px]" data-node-id="1788:457" data-name="num">
              <div className="-translate-x-1/2 -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-sans font-bold justify-center leading-[0] left-[21px] w-[42px] h-[42px] text-[#2094e3] text-[14px] text-center top-[21px]" data-node-id="1788:458">
                <p className="leading-[normal]">۳</p>
              </div>
            </div>
            <div className="-translate-x-1/2 -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-sans font-medium h-[22px] justify-center leading-[0] left-[84px] text-[#17324d] text-[10px] text-center top-[64px] w-[146px]" data-node-id="1788:459">
              <p className="leading-[normal]" dir="auto">
                بررسی خانه خلاق و نوآوری آینه
              </p>
            </div>
          </div>
          <div className="absolute bg-[#f9fbfd] border border-[#e4ebf1] border-solid h-[82px] left-[565px] overflow-clip rounded-[12px] top-[1339px] w-[170px]" data-node-id="1788:460" data-name="validation-step">
            <div className="absolute bg-[#eaf8f0] left-[111px] overflow-clip rounded-[21px] w-[42px] h-[42px] top-[11px]" data-node-id="1788:461" data-name="num">
              <div className="-translate-x-1/2 -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-sans font-bold justify-center leading-[0] left-[21px] w-[42px] h-[42px] text-[#159455] text-[14px] text-center top-[21px]" data-node-id="1788:462">
                <p className="leading-[normal]">۴</p>
              </div>
            </div>
            <div className="-translate-x-1/2 -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-sans font-medium h-[22px] justify-center leading-[0] left-[84px] text-[#17324d] text-[10px] text-center top-[64px] w-[146px]" data-node-id="1788:463">
              <p className="leading-[normal]" dir="auto">
                ثبت نتیجه ارزیابی مرحله
              </p>
            </div>
          </div>
          <div className="-translate-x-full -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-sans font-bold h-[26px] justify-center leading-[0] left-[735px] text-[#17324d] text-[16px] text-right top-[1458px] w-[336px]" data-node-id="1788:464">
            <p className="leading-[normal]" dir="auto">
              ۶. داده‌های تجمیعی بهره‌مندان
            </p>
          </div>
          <div className="absolute bg-[#e4ebf1] h-px left-[13px] top-[1477px] w-[732px]" data-node-id="1788:465" data-name="Rectangle" />
          <div className="absolute bg-white border border-[#e4ebf1] border-solid h-[92px] left-[13px] overflow-clip rounded-[14px] shadow-[0px_4px_16px_0px_rgba(23,46,71,0.08)] top-[1491px] w-[170px]" data-node-id="1788:466" data-name="b1">
            <div className="absolute left-[13px] w-[40px] h-[40px] top-[13px]" data-node-id="1788:467" data-name="icon">
              <img alt="" className="absolute block inset-0 max-w-none w-full h-full" src={imgIcon1} />
            </div>
            <div className="-translate-x-full -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-sans font-medium h-[22px] justify-center leading-[0] left-[153px] text-[#60758a] text-[12px] text-right top-[20px] w-[88px]" data-node-id="1788:469">
              <p className="leading-[normal]" dir="auto">
                شرکت‌کنندگان
              </p>
            </div>
            <div className="-translate-x-full -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-sans font-bold h-[30px] justify-center leading-[0] left-[153px] text-[#17324d] text-[20px] text-right top-[45px] w-[88px]" data-node-id="1788:470">
              <p className="leading-[normal]" dir="auto">
                ۱۲۴ نفر
              </p>
            </div>
            <div className="-translate-x-full -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-sans font-normal h-[18px] justify-center leading-[0] left-[155px] text-[#60758a] text-[10px] text-right top-[74px] w-[142px]" data-node-id="1788:471">
              <p className="leading-[normal]" dir="auto">
                کل افراد شرکت‌کننده در مرحله
              </p>
            </div>
          </div>
          <div className="absolute bg-white border border-[#e4ebf1] border-solid h-[92px] left-[199px] overflow-clip rounded-[14px] shadow-[0px_4px_16px_0px_rgba(23,46,71,0.08)] top-[1491px] w-[170px]" data-node-id="1788:472" data-name="b2">
            <div className="absolute left-[13px] w-[40px] h-[40px] top-[13px]" data-node-id="1788:473" data-name="icon">
              <img alt="" className="absolute block inset-0 max-w-none w-full h-full" src={imgIcon} />
            </div>
            <div className="-translate-x-full -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-sans font-medium h-[22px] justify-center leading-[0] left-[153px] text-[#60758a] text-[12px] text-right top-[20px] w-[88px]" data-node-id="1788:475">
              <p className="leading-[normal]" dir="auto">
                زنان سرپرست خانوار
              </p>
            </div>
            <div className="-translate-x-full -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-sans font-bold h-[30px] justify-center leading-[0] left-[153px] text-[#17324d] text-[20px] text-right top-[45px] w-[88px]" data-node-id="1788:476">
              <p className="leading-[normal]" dir="auto">
                ۷۸ نفر
              </p>
            </div>
            <div className="-translate-x-full -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-sans font-normal h-[18px] justify-center leading-[0] left-[155px] text-[#60758a] text-[10px] text-right top-[74px] w-[142px]" data-node-id="1788:477">
              <p className="leading-[normal]" dir="auto">
                داده تجمیعی گزارش عمومی
              </p>
            </div>
          </div>
          <div className="absolute bg-white border border-[#e4ebf1] border-solid h-[92px] left-[385px] overflow-clip rounded-[14px] shadow-[0px_4px_16px_0px_rgba(23,46,71,0.08)] top-[1491px] w-[170px]" data-node-id="1788:478" data-name="b3">
            <div className="absolute left-[13px] w-[40px] h-[40px] top-[13px]" data-node-id="1788:479" data-name="icon">
              <img alt="" className="absolute block inset-0 max-w-none w-full h-full" src={imgIcon2} />
            </div>
            <div className="-translate-x-full -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-sans font-medium h-[22px] justify-center leading-[0] left-[153px] text-[#60758a] text-[12px] text-right top-[20px] w-[88px]" data-node-id="1788:481">
              <p className="leading-[normal]" dir="auto">
                سایر زنان روستایی
              </p>
            </div>
            <div className="-translate-x-full -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-sans font-bold h-[30px] justify-center leading-[0] left-[153px] text-[#17324d] text-[20px] text-right top-[45px] w-[88px]" data-node-id="1788:482">
              <p className="leading-[normal]" dir="auto">
                ۴۶ نفر
              </p>
            </div>
            <div className="-translate-x-full -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-sans font-normal h-[18px] justify-center leading-[0] left-[155px] text-[#60758a] text-[10px] text-right top-[74px] w-[142px]" data-node-id="1788:483">
              <p className="leading-[normal]" dir="auto">
                داده تجمیعی گزارش عمومی
              </p>
            </div>
          </div>
          <div className="absolute bg-white border border-[#e4ebf1] border-solid h-[92px] left-[571px] overflow-clip rounded-[14px] shadow-[0px_4px_16px_0px_rgba(23,46,71,0.08)] top-[1491px] w-[174px]" data-node-id="1788:484" data-name="b4">
            <div className="absolute left-[13px] w-[40px] h-[40px] top-[13px]" data-node-id="1788:485" data-name="icon">
              <img alt="" className="absolute block inset-0 max-w-none w-full h-full" src={imgIcon1} />
            </div>
            <div className="-translate-x-full -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-sans font-medium h-[22px] justify-center leading-[0] left-[157px] text-[#60758a] text-[12px] text-right top-[20px] w-[92px]" data-node-id="1788:487">
              <p className="leading-[normal]" dir="auto">
                پوشش جغرافیایی
              </p>
            </div>
            <div className="-translate-x-full -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-sans font-bold h-[30px] justify-center leading-[0] left-[157px] text-[#17324d] text-[20px] text-right top-[45px] w-[92px]" data-node-id="1788:488">
              <p className="leading-[normal]" dir="auto">
                ۱۵ روستا
              </p>
            </div>
            <div className="-translate-x-full -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-sans font-normal h-[18px] justify-center leading-[0] left-[159px] text-[#60758a] text-[10px] text-right top-[74px] w-[146px]" data-node-id="1788:489">
              <p className="leading-[normal]" dir="auto">
                استان گلستان
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bg-[#17324d] content-stretch flex flex-col gap-[10px] h-[1900px] items-end left-[1216px] pb-[18px] pt-[20px] px-[16px] top-0 w-[224px]" data-node-id="1788:233" data-name="colored-sidebar">
        <div className="bg-white content-stretch flex h-[56px] items-center justify-end overflow-clip px-[10px] py-[8px] relative rounded-[12px] shrink-0 w-[192px]" data-node-id="1788:234" data-name="brand-logo">
          <div className="h-[40px] relative shrink-0 w-[118px]" data-node-id="1788:235" data-name="ChatGPT Image ۲۹ مرداد ۱۴۰۵، ۱۵_۱۶_۳۵ 1">
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <img alt="" className="absolute h-full left-[5.28%] max-w-none top-0 w-[100.73%]" src={imgChatGptImage1} />
            </div>
          </div>
        </div>
        <div className="content-stretch flex flex-col h-[64px] items-start justify-end overflow-clip px-[8px] py-[7px] relative shrink-0 w-[192px]" data-node-id="1788:236" data-name="panel-identity">
          <p className="[word-break:break-word] font-sans font-bold h-[39px] leading-[normal] relative shrink-0 text-[13px] text-center text-white w-[176px]" dir="auto" data-node-id="1788:237">
            خانه خلاق و نوآوری آینه
          </p>
        </div>
        <Link to="/panel/creative-house" className="content-stretch cursor-pointer flex gap-[10px] h-[38px] items-center justify-end overflow-clip px-[12px] relative rounded-[9px] shrink-0 w-[192px]" data-node-id="1788:238" data-name="dashboard-nav">
          <p className="[word-break:break-word] font-sans font-medium leading-[normal] relative shrink-0 text-[12px] text-right text-white w-[142px]" dir="auto" data-node-id="1788:239">
            داشبورد
          </p>
          <div className="relative shrink-0 w-[18px] h-[18px]" data-node-id="1788:240" data-name="dashboard-icon">
            <img alt="" className="absolute block inset-0 max-w-none w-full h-full" src={imgDashboardIcon} />
          </div>
        </Link>
        <Link to="/panel/creative-house/startup-evaluations" className="content-stretch cursor-pointer flex gap-[10px] h-[38px] items-center justify-end overflow-clip px-[12px] relative rounded-[9px] shrink-0 w-[192px]" data-node-id="1788:245" data-name="startup-evaluations-nav">
          <p className="[word-break:break-word] font-sans font-normal leading-[normal] relative shrink-0 text-[12px] text-right text-white w-[142px]" dir="auto" data-node-id="1788:246">
            ارزیابی استارتاپ‌ها
          </p>
          <div className="relative shrink-0 w-[18px] h-[18px]" data-node-id="1788:247" data-name="users-icon">
            <img alt="" className="absolute block inset-0 max-w-none w-full h-full" src={imgUsersIcon} />
          </div>
        </Link>
        <Link to="/panel/creative-house/project-evaluations" className="content-stretch cursor-pointer flex gap-[10px] h-[38px] items-center justify-end overflow-clip px-[12px] relative rounded-[9px] shrink-0 w-[192px]" data-node-id="1788:252" data-name="project-evaluations-nav">
          <p className="[word-break:break-word] font-sans font-normal leading-[normal] relative shrink-0 text-[12px] text-right text-white w-[142px]" dir="auto" data-node-id="1788:253">
            ارزیابی پروژه‌ها
          </p>
          <div className="relative shrink-0 w-[18px] h-[18px]" data-node-id="1788:254" data-name="project-icon">
            <img alt="" className="absolute block inset-0 max-w-none w-full h-full" src={imgProjectIcon} />
          </div>
        </Link>
        <div className="bg-[#2094e3] content-stretch flex gap-[10px] h-[38px] items-center justify-end overflow-clip px-[12px] relative rounded-[9px] shrink-0 w-[192px]" data-node-id="1788:257" data-name="milestone-evaluations-nav">
          <p className="[word-break:break-word] font-sans font-normal leading-[normal] relative shrink-0 text-[12px] text-right text-white w-[142px]" dir="auto" data-node-id="1788:258">
            ارزیابی مراحل پروژه
          </p>
          <div className="relative shrink-0 w-[18px] h-[18px]" data-node-id="1788:259" data-name="milestone-icon">
            <img alt="" className="absolute block inset-0 max-w-none w-full h-full" src={imgMilestoneIcon} />
          </div>
        </div>
        <Link to="/panel/creative-house/reports" className="content-stretch cursor-pointer flex gap-[10px] h-[38px] items-center justify-end overflow-clip px-[12px] relative rounded-[9px] shrink-0 w-[192px]" data-node-id="1788:262" data-name="reports-nav">
          <p className="[word-break:break-word] font-sans font-normal leading-[normal] relative shrink-0 text-[12px] text-right text-white w-[142px]" dir="auto" data-node-id="1788:263">
            گزارش‌ها
          </p>
          <div className="relative shrink-0 w-[18px] h-[18px]" data-node-id="1788:264" data-name="reports-icon">
            <img alt="" className="absolute block inset-0 max-w-none w-full h-full" src={imgReportsIcon} />
          </div>
        </Link>
        <Link to="/panel/creative-house/evaluation-history" className="content-stretch cursor-pointer flex gap-[10px] h-[38px] items-center justify-end overflow-clip px-[12px] relative rounded-[9px] shrink-0 w-[192px]" data-node-id="1788:269" data-name="evaluation-history-nav">
          <p className="[word-break:break-word] font-sans font-normal leading-[normal] relative shrink-0 text-[12px] text-right text-white w-[142px]" dir="auto" data-node-id="1788:270">
            سوابق ارزیابی
          </p>
          <div className="relative shrink-0 w-[18px] h-[18px]" data-node-id="1788:271" data-name="history-icon">
            <img alt="" className="absolute block inset-0 max-w-none w-full h-full" src={imgHistoryIcon} />
          </div>
        </Link>
        <Link to="/panel/creative-house/settings" className="content-stretch cursor-pointer flex gap-[10px] h-[38px] items-center justify-end overflow-clip px-[12px] relative rounded-[9px] shrink-0 w-[192px]" data-node-id="1788:275" data-name="settings-nav">
          <p className="[word-break:break-word] font-sans font-normal leading-[normal] relative shrink-0 text-[12px] text-right text-white w-[142px]" dir="auto" data-node-id="1788:276">
            تنظیمات
          </p>
          <div className="relative shrink-0 w-[18px] h-[18px]" data-node-id="1788:277" data-name="settings-icon">
            <img alt="" className="absolute block inset-0 max-w-none w-full h-full" src={imgSettingsIcon} />
          </div>
        </Link>
        <div className="flex-[1_0_0] min-h-px relative w-[192px]" data-node-id="1788:280" data-name="sidebar-spacer" />
        <Link to="/panel/creative-house/overlays/logout" className="bg-white content-stretch cursor-pointer flex gap-[10px] h-[38px] items-center justify-end opacity-96 overflow-clip px-[12px] relative rounded-[9px] shrink-0 w-[192px]" data-node-id="1788:281" data-name="logout-nav">
          <p className="[word-break:break-word] font-sans font-medium leading-[normal] relative shrink-0 text-[#17324d] text-[12px] text-right w-[142px]" dir="auto" data-node-id="1788:282">
            خروج از سیستم
          </p>
          <div className="relative shrink-0 w-[18px] h-[18px]" data-node-id="1788:283" data-name="logout-icon">
            <img alt="" className="absolute block inset-0 max-w-none w-full h-full" src={imgLogoutIcon} />
          </div>
        </Link>
      </div>
    </div>
  );
}