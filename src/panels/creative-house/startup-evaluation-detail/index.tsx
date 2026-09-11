import "../index.css";
import { Link, useNavigate } from "react-router-dom";

const imgChatGptImage1 = "/assets/creative-house/startup-evaluation-detail/logo.png";
const imgRadio = "/assets/creative-house/startup-evaluation-detail/radio-1.svg";
const imgRadio1 = "/assets/creative-house/startup-evaluation-detail/radio-2.svg";
const imgRadio2 = "/assets/creative-house/startup-evaluation-detail/radio-3.svg";
const imgDashboardIcon = "/assets/creative-house/startup-evaluation-detail/nav-dashboard.svg";
const imgUsersIcon = "/assets/creative-house/startup-evaluation-detail/nav-startups.svg";
const imgProjectIcon = "/assets/creative-house/startup-evaluation-detail/nav-projects.svg";
const imgMilestoneIcon = "/assets/creative-house/startup-evaluation-detail/nav-milestones.svg";
const imgReportsIcon = "/assets/creative-house/startup-evaluation-detail/nav-reports.svg";
const imgHistoryIcon = "/assets/creative-house/startup-evaluation-detail/nav-history.svg";
const imgSettingsIcon = "/assets/creative-house/startup-evaluation-detail/nav-settings.svg";
const imgLogoutIcon = "/assets/creative-house/startup-evaluation-detail/nav-logout.svg";

export default function AyenehStartupEvaluationDetail() {
  const navigate = useNavigate();

  return (
    <div className="creative-house-dashboard bg-[#f5f8fb] relative w-full h-full" data-node-id="1742:2" data-name="ayeneh-startup-evaluation-detail">
      <div className="absolute bg-[#f5f9fc] h-[1630px] left-0 overflow-clip top-0 w-[1216px]" data-node-id="1742:3" data-name="Main Content">
        <p className="-translate-x-full [word-break:break-word] absolute font-sans font-bold h-[24px] leading-[normal] left-[1188px] text-[#17324d] text-[26px] text-right top-[20px] w-[538px]" dir="auto" data-node-id="1743:2">
          ارزیابی اولیه استارتاپ
        </p>
        <p className="-translate-x-full [word-break:break-word] absolute font-sans font-normal h-[24px] leading-[normal] left-[1188px] text-[#60758a] text-[12px] text-right top-[54px] w-[568px]" dir="auto" data-node-id="1743:3">
          بررسی صلاحیت استارتاپ پیش از فعال شدن پنل و امکان تعریف پروژه
        </p>
        <Link to="/panel/creative-house/startup-evaluations" className="absolute bg-white block border border-[#e4ebf1] border-solid cursor-pointer h-[34px] left-[28px] overflow-clip rounded-[9px] top-[64px] w-[142px]" data-node-id="1743:6" data-name="back-to-list">
          <p className="-translate-x-1/2 [word-break:break-word] absolute font-sans font-bold h-[24px] leading-[normal] left-[70px] text-[#17324d] text-[13px] text-center top-[4px] w-[126px]" dir="auto" data-node-id="1743:7">
            بازگشت به لیست
          </p>
        </Link>
        <div className="absolute bg-white border border-[#e4ebf1] border-solid h-[90px] left-[28px] overflow-clip rounded-[12px] top-[96px] w-[1160px]" data-node-id="1743:8" data-name="startup-summary">
          <div className="absolute bg-[#fff6e2] h-[30px] left-[17px] overflow-clip rounded-[8px] top-[17px] w-[130px]" data-node-id="1743:9" data-name="status-chip">
            <p className="-translate-x-1/2 [word-break:break-word] absolute font-sans font-medium h-[24px] leading-[normal] left-[65px] text-[#c27a10] text-[12px] text-center top-[4px] w-[114px]" dir="auto" data-node-id="1743:10">
              در انتظار بررسی
            </p>
          </div>
          <p className="-translate-x-full [word-break:break-word] absolute font-sans font-medium h-[24px] leading-[normal] left-[319px] text-[#60758a] text-[11px] text-right top-[15px] w-[150px]" dir="auto" data-node-id="1743:11">
            تاریخ ثبت
          </p>
          <p className="-translate-x-full [word-break:break-word] absolute font-sans font-bold h-[24px] leading-[normal] left-[319px] text-[#17324d] text-[14px] text-right top-[37px] w-[150px]" data-node-id="1743:12">
            ۱۴۰۵/۰۶/۲۸
          </p>
          <p className="-translate-x-full [word-break:break-word] absolute font-sans font-medium h-[24px] leading-[normal] left-[529px] text-[#60758a] text-[11px] text-right top-[15px] w-[190px]" dir="auto" data-node-id="1743:13">
            حوزه فعالیت
          </p>
          <p className="-translate-x-full [word-break:break-word] absolute font-sans font-bold h-[24px] leading-[normal] left-[529px] text-[#17324d] text-[14px] text-right top-[37px] w-[190px]" dir="auto" data-node-id="1743:14">
            خدمات دیجیتال، صنایع خلاق، فناوری مالی
          </p>
          <p className="-translate-x-full [word-break:break-word] absolute font-sans font-medium h-[24px] leading-[normal] left-[739px] text-[#60758a] text-[11px] text-right top-[15px] w-[190px]" dir="auto" data-node-id="1743:15">
            مدیر استارتاپ
          </p>
          <p className="-translate-x-full [word-break:break-word] absolute font-sans font-bold h-[24px] leading-[normal] left-[739px] text-[#17324d] text-[14px] text-right top-[37px] w-[190px]" dir="auto" data-node-id="1743:16">
            علی علوی
          </p>
          <p className="-translate-x-full [word-break:break-word] absolute font-sans font-medium h-[24px] leading-[normal] left-[1129px] text-[#60758a] text-[11px] text-right top-[15px] w-[360px]" dir="auto" data-node-id="1743:17">
            نام استارتاپ
          </p>
          <p className="-translate-x-full [word-break:break-word] absolute font-sans font-bold h-[24px] leading-[normal] left-[1129px] text-[#17324d] text-[14px] text-right top-[37px] w-[360px]" dir="auto" data-node-id="1743:18">
            سامانه ماه
          </p>
        </div>
        <div className="absolute bg-white border border-[#e4ebf1] border-solid h-[1405px] left-[400px] overflow-clip rounded-[12px] top-[202px] w-[760px]" data-node-id="1743:19" data-name="startup-registration-data">
          <div className="absolute bg-[#eaf5fd] h-[26px] left-[13px] overflow-clip rounded-[7px] top-[15px] w-[130px]" data-node-id="1749:2" data-name="source-chip">
            <p className="-translate-x-1/2 [word-break:break-word] absolute font-sans font-medium h-[20px] leading-[17px] left-[65px] text-[#2094e3] text-[10.5px] text-center top-[3px] w-[114px]" dir="auto" data-node-id="1749:3">
              مطابق فرم لندینگ
            </p>
          </div>
          <p className="-translate-x-full [word-break:break-word] absolute font-sans font-bold leading-[26px] left-[745px] text-[#17324d] text-[18px] text-right top-[13px] w-[336px]" dir="auto" data-node-id="1749:4">
            اطلاعات ثبت‌نام استارتاپ
          </p>
          <p className="-translate-x-full [word-break:break-word] absolute font-sans font-normal h-[20px] leading-[18px] left-[745px] text-[#60758a] text-[11.5px] text-right top-[41px] w-[456px]" dir="auto" data-node-id="1749:5">
            داده‌های ثبت‌شده توسط استارتاپ در فرایند عمومی ثبت‌نام ماه
          </p>
          <div className="absolute bg-white border border-[#dde7f0] border-solid h-[66px] left-[13px] overflow-clip rounded-[12px] top-[71px] w-[732px]" data-node-id="1749:6" data-name="startup-identity">
            <div className="absolute bg-[#eaf5fd] border border-[#eaf5fd] border-solid left-[655px] overflow-clip rounded-[14px] w-[46px] h-[46px] top-[9px]" data-node-id="1749:7" data-name="startup-logo">
              <p className="-translate-x-1/2 [word-break:break-word] absolute font-sans font-bold h-[21px] leading-[20px] left-[22px] text-[#2094e3] text-[13px] text-center top-[7px] w-[36px]" dir="auto" data-node-id="1749:8">
                ماه
              </p>
            </div>
            <p className="-translate-x-full [word-break:break-word] absolute font-sans font-bold h-[23px] leading-[22px] left-[641px] text-[#17324d] text-[15px] text-right top-[9px] w-[212px]" dir="auto" data-node-id="1749:9">
              سامانه ماه
            </p>
            <p className="-translate-x-full [word-break:break-word] absolute font-sans font-normal h-[20px] leading-[16px] left-[641px] text-[#60758a] text-[10.5px] text-right top-[33px] w-[404px]" dir="auto" data-node-id="1749:10">
              سامانه هوشمند مدیریت و شتابدهی طرح‌های فناورانه خلاق
            </p>
            <div className="absolute bg-[#fff6e5] h-[26px] left-[11px] overflow-clip rounded-[7px] top-[19px] w-[124px]" data-node-id="1749:11" data-name="request-status">
              <p className="-translate-x-1/2 [word-break:break-word] absolute font-sans font-medium h-[20px] leading-[17px] left-[62px] text-[#c27a10] text-[10.5px] text-center top-[3px] w-[108px]" dir="auto" data-node-id="1749:12">
                در انتظار بررسی
              </p>
            </div>
          </div>
          <p className="-translate-x-full [word-break:break-word] absolute font-sans font-bold h-[22px] leading-[20px] left-[745px] text-[#17324d] text-[14px] text-right top-[150px] w-[336px]" dir="auto" data-node-id="1749:13">
            ۱. اطلاعات پایه
          </p>
          <div className="absolute bg-[#e4ebf1] h-px left-[13px] top-[175px] w-[732px]" data-node-id="1749:14" data-name="section-divider" />
          <div className="[word-break:break-word] absolute bg-[#f8fafc] border border-[#e2e8f0] border-solid h-[46px] left-[509px] overflow-clip rounded-[10px] text-right top-[180px] w-[236px]" data-node-id="1749:15" data-name="registration-field">
            <p className="-translate-x-full absolute font-sans font-normal h-[20px] leading-[15px] left-[227px] text-[#60758a] text-[10.5px] top-[4px] w-[220px]" dir="auto" data-node-id="1749:16">
              نام فارسی استارتاپ
            </p>
            <p className="-translate-x-full absolute font-sans font-bold h-[20px] leading-[16px] left-[227px] text-[#17324d] text-[12px] top-[19px] w-[220px]" dir="auto" data-node-id="1749:17">
              سامانه ماه
            </p>
          </div>
          <div className="[word-break:break-word] absolute bg-[#f8fafc] border border-[#e2e8f0] border-solid h-[46px] left-[263px] overflow-clip rounded-[10px] text-right top-[180px] w-[236px]" data-node-id="1749:18" data-name="registration-field">
            <p className="-translate-x-full absolute font-sans font-normal h-[20px] leading-[15px] left-[227px] text-[#60758a] text-[10.5px] top-[4px] w-[220px]" dir="auto" data-node-id="1749:19">
              نام انگلیسی (اختیاری)
            </p>
            <p className="-translate-x-full absolute font-sans font-bold h-[20px] leading-[16px] left-[227px] text-[#17324d] text-[12px] top-[19px] w-[220px]" data-node-id="1749:20">
              —
            </p>
          </div>
          <div className="[word-break:break-word] absolute bg-[#f8fafc] border border-[#e2e8f0] border-solid h-[46px] left-[13px] overflow-clip rounded-[10px] text-right top-[180px] w-[240px]" data-node-id="1749:21" data-name="registration-field">
            <p className="-translate-x-full absolute font-sans font-normal h-[20px] leading-[15px] left-[231px] text-[#60758a] text-[10.5px] top-[4px] w-[224px]" dir="auto" data-node-id="1749:22">
              سال شروع فعالیت
            </p>
            <p className="-translate-x-full absolute font-sans font-bold h-[20px] leading-[16px] left-[231px] text-[#17324d] text-[12px] top-[19px] w-[224px]" data-node-id="1749:23">
              ۱۴۰۰
            </p>
          </div>
          <div className="[word-break:break-word] absolute bg-[#f8fafc] border border-[#e2e8f0] border-solid h-[46px] left-[509px] overflow-clip rounded-[10px] text-right top-[232px] w-[236px]" data-node-id="1749:24" data-name="registration-field">
            <p className="-translate-x-full absolute font-sans font-normal h-[20px] leading-[15px] left-[227px] text-[#60758a] text-[10.5px] top-[4px] w-[220px]" dir="auto" data-node-id="1749:25">
              وضعیت حقوقی
            </p>
            <p className="-translate-x-full absolute font-sans font-bold h-[20px] leading-[16px] left-[227px] text-[#17324d] text-[12px] top-[19px] w-[220px]" dir="auto" data-node-id="1749:26">
              شرکت ثبت‌شده
            </p>
          </div>
          <div className="[word-break:break-word] absolute bg-[#f8fafc] border border-[#e2e8f0] border-solid h-[46px] left-[263px] overflow-clip rounded-[10px] text-right top-[232px] w-[236px]" data-node-id="1749:27" data-name="registration-field">
            <p className="-translate-x-full absolute font-sans font-normal h-[20px] leading-[15px] left-[227px] text-[#60758a] text-[10.5px] top-[4px] w-[220px]" dir="auto" data-node-id="1749:28">
              استان
            </p>
            <p className="-translate-x-full absolute font-sans font-bold h-[20px] leading-[16px] left-[227px] text-[#17324d] text-[12px] top-[19px] w-[220px]" dir="auto" data-node-id="1749:29">
              تهران
            </p>
          </div>
          <div className="[word-break:break-word] absolute bg-[#f8fafc] border border-[#e2e8f0] border-solid h-[46px] left-[13px] overflow-clip rounded-[10px] text-right top-[232px] w-[240px]" data-node-id="1749:30" data-name="registration-field">
            <p className="-translate-x-full absolute font-sans font-normal h-[20px] leading-[15px] left-[231px] text-[#60758a] text-[10.5px] top-[4px] w-[224px]" dir="auto" data-node-id="1749:31">
              شهر
            </p>
            <p className="-translate-x-full absolute font-sans font-bold h-[20px] leading-[16px] left-[231px] text-[#17324d] text-[12px] top-[19px] w-[224px]" dir="auto" data-node-id="1749:32">
              تهران
            </p>
          </div>
          <div className="[word-break:break-word] absolute bg-[#f8fafc] border border-[#e2e8f0] border-solid h-[46px] left-[509px] overflow-clip rounded-[10px] text-[10.5px] text-right top-[284px] w-[236px]" data-node-id="1749:33" data-name="registration-field">
            <p className="-translate-x-full absolute font-sans font-normal h-[20px] leading-[15px] left-[227px] text-[#60758a] top-[4px] w-[220px]" dir="auto" data-node-id="1749:34">
              مرحله رشد استارتاپ
            </p>
            <p className="-translate-x-full absolute font-sans font-bold h-[20px] leading-[16px] left-[227px] text-[#17324d] top-[19px] w-[220px]" dir="auto" data-node-id="1749:35">
              MVP (محصول اولیه فعال)
            </p>
          </div>
          <div className="[word-break:break-word] absolute bg-[#f8fafc] border border-[#e2e8f0] border-solid h-[46px] left-[13px] overflow-clip rounded-[10px] text-[10.5px] text-right top-[284px] w-[486px]" data-node-id="1749:36" data-name="registration-field">
            <p className="-translate-x-full absolute font-sans font-normal h-[20px] leading-[15px] left-[477px] text-[#60758a] top-[4px] w-[470px]" dir="auto" data-node-id="1749:37">
              حوزه فعالیت استارتاپ
            </p>
            <p className="-translate-x-full absolute font-sans font-bold h-[20px] leading-[16px] left-[477px] text-[#17324d] top-[19px] w-[470px]" dir="auto" data-node-id="1749:38">
              خدمات دیجیتال، صنایع خلاق، فناوری مالی
            </p>
          </div>
          <div className="[word-break:break-word] absolute bg-[#f8fafc] border border-[#e2e8f0] border-solid h-[46px] left-[509px] overflow-clip rounded-[10px] text-[10.5px] text-right top-[336px] w-[236px]" data-node-id="1749:39" data-name="registration-field">
            <p className="-translate-x-full absolute font-sans font-normal h-[20px] leading-[15px] left-[227px] text-[#60758a] top-[4px] w-[220px]" dir="auto" data-node-id="1749:40">
              وب‌سایت
            </p>
            <p className="-translate-x-full absolute font-sans font-bold h-[20px] leading-[16px] left-[227px] text-[#17324d] top-[19px] w-[220px]" data-node-id="1749:41">{`https://mahsystem.ir`}</p>
          </div>
          <div className="[word-break:break-word] absolute bg-[#f8fafc] border border-[#e2e8f0] border-solid h-[46px] left-[263px] overflow-clip rounded-[10px] text-right top-[336px] w-[236px]" data-node-id="1749:42" data-name="registration-field">
            <p className="-translate-x-full absolute font-sans font-normal h-[20px] leading-[15px] left-[227px] text-[#60758a] text-[10.5px] top-[4px] w-[220px]" dir="auto" data-node-id="1749:43">
              شبکه اجتماعی یا لینکداین
            </p>
            <p className="-translate-x-full absolute font-sans font-bold h-[20px] leading-[16px] left-[227px] text-[#17324d] text-[12px] top-[19px] w-[220px]" data-node-id="1749:44">
              —
            </p>
          </div>
          <div className="[word-break:break-word] absolute bg-[#f8fafc] border border-[#e2e8f0] border-solid h-[46px] left-[13px] overflow-clip rounded-[10px] text-[10.5px] text-right top-[336px] w-[240px]" data-node-id="1749:45" data-name="registration-field">
            <p className="-translate-x-full absolute font-sans font-normal h-[20px] leading-[15px] left-[231px] text-[#60758a] top-[4px] w-[224px]" dir="auto" data-node-id="1749:46">
              شعار کوتاه
            </p>
            <p className="-translate-x-full absolute font-sans font-bold h-[20px] leading-[16px] left-[231px] text-[#17324d] top-[19px] w-[224px]" dir="auto" data-node-id="1749:47">
              سامانه هوشمند مدیریت و شتابدهی طرح‌های فناورانه خلاق
            </p>
          </div>
          <p className="-translate-x-full [word-break:break-word] absolute font-sans font-bold h-[22px] leading-[20px] left-[745px] text-[#17324d] text-[14px] text-right top-[396px] w-[336px]" dir="auto" data-node-id="1749:48">
            اطلاعات نماینده اصلی
          </p>
          <div className="absolute bg-[#e4ebf1] h-px left-[13px] top-[421px] w-[732px]" data-node-id="1749:49" data-name="section-divider" />
          <div className="[word-break:break-word] absolute bg-[#f8fafc] border border-[#e2e8f0] border-solid h-[46px] left-[509px] overflow-clip rounded-[10px] text-right top-[426px] w-[236px]" data-node-id="1749:50" data-name="registration-field">
            <p className="-translate-x-full absolute font-sans font-normal h-[20px] leading-[15px] left-[227px] text-[#60758a] text-[10.5px] top-[4px] w-[220px]" dir="auto" data-node-id="1749:51">
              نام نماینده
            </p>
            <p className="-translate-x-full absolute font-sans font-bold h-[20px] leading-[16px] left-[227px] text-[#17324d] text-[12px] top-[19px] w-[220px]" dir="auto" data-node-id="1749:52">
              علی
            </p>
          </div>
          <div className="[word-break:break-word] absolute bg-[#f8fafc] border border-[#e2e8f0] border-solid h-[46px] left-[263px] overflow-clip rounded-[10px] text-right top-[426px] w-[236px]" data-node-id="1749:53" data-name="registration-field">
            <p className="-translate-x-full absolute font-sans font-normal h-[20px] leading-[15px] left-[227px] text-[#60758a] text-[10.5px] top-[4px] w-[220px]" dir="auto" data-node-id="1749:54">
              نام خانوادگی نماینده
            </p>
            <p className="-translate-x-full absolute font-sans font-bold h-[20px] leading-[16px] left-[227px] text-[#17324d] text-[12px] top-[19px] w-[220px]" dir="auto" data-node-id="1749:55">
              علوی
            </p>
          </div>
          <div className="[word-break:break-word] absolute bg-[#f8fafc] border border-[#e2e8f0] border-solid h-[46px] left-[13px] overflow-clip rounded-[10px] text-right top-[426px] w-[240px]" data-node-id="1749:56" data-name="registration-field">
            <p className="-translate-x-full absolute font-sans font-normal h-[20px] leading-[15px] left-[231px] text-[#60758a] text-[10.5px] top-[4px] w-[224px]" dir="auto" data-node-id="1749:57">
              کد ملی نماینده
            </p>
            <p className="-translate-x-full absolute font-sans font-bold h-[20px] leading-[16px] left-[231px] text-[#17324d] text-[12px] top-[19px] w-[224px]" data-node-id="1749:58">
              ۰۰۲۴۵۶۷۸۹۱
            </p>
          </div>
          <div className="[word-break:break-word] absolute bg-[#f8fafc] border border-[#e2e8f0] border-solid h-[46px] left-[509px] overflow-clip rounded-[10px] text-[10.5px] text-right top-[478px] w-[236px]" data-node-id="1749:59" data-name="registration-field">
            <p className="-translate-x-full absolute font-sans font-normal h-[20px] leading-[15px] left-[227px] text-[#60758a] top-[4px] w-[220px]" dir="auto" data-node-id="1749:60">
              سمت در استارتاپ
            </p>
            <p className="-translate-x-full absolute font-sans font-bold h-[20px] leading-[16px] left-[227px] text-[#17324d] top-[19px] w-[220px]" dir="auto" data-node-id="1749:61">
              مدیر عامل و هم‌بنیان‌گذار
            </p>
          </div>
          <div className="[word-break:break-word] absolute bg-[#f8fafc] border border-[#e2e8f0] border-solid h-[46px] left-[263px] overflow-clip rounded-[10px] text-right top-[478px] w-[236px]" data-node-id="1749:62" data-name="registration-field">
            <p className="-translate-x-full absolute font-sans font-normal h-[20px] leading-[15px] left-[227px] text-[#60758a] text-[10.5px] top-[4px] w-[220px]" dir="auto" data-node-id="1749:63">
              شماره موبایل
            </p>
            <p className="-translate-x-full absolute font-sans font-bold h-[20px] leading-[16px] left-[227px] text-[#17324d] text-[12px] top-[19px] w-[220px]" data-node-id="1749:64">
              ۰۹۱۲۳۴۵۶۷۸۹
            </p>
          </div>
          <div className="[word-break:break-word] absolute bg-[#f8fafc] border border-[#e2e8f0] border-solid h-[46px] left-[13px] overflow-clip rounded-[10px] text-[10.5px] text-right top-[478px] w-[240px]" data-node-id="1749:65" data-name="registration-field">
            <p className="-translate-x-full absolute font-sans font-normal h-[20px] leading-[15px] left-[231px] text-[#60758a] top-[4px] w-[224px]" dir="auto" data-node-id="1749:66">
              ایمیل مکاتبات رسمی
            </p>
            <p className="-translate-x-full absolute font-sans font-bold h-[20px] leading-[16px] left-[231px] text-[#17324d] top-[19px] w-[224px]" data-node-id="1749:67">
              info@mahsystem.ir
            </p>
          </div>
          <p className="-translate-x-full [word-break:break-word] absolute font-sans font-bold h-[22px] leading-[20px] left-[745px] text-[#17324d] text-[14px] text-right top-[538px] w-[336px]" dir="auto" data-node-id="1749:68">
            ۲. محصول و تیم
          </p>
          <div className="absolute bg-[#e4ebf1] h-px left-[13px] top-[563px] w-[732px]" data-node-id="1749:69" data-name="section-divider" />
          <div className="[word-break:break-word] absolute bg-[#f8fafc] border border-[#e2e8f0] border-solid h-[68px] left-[385px] overflow-clip rounded-[10px] text-right top-[568px] w-[360px]" data-node-id="1749:70" data-name="registration-text-block">
            <p className="-translate-x-full absolute font-sans font-normal h-[20px] leading-[15px] left-[349px] text-[#60758a] text-[10.5px] top-[6px] w-[340px]" dir="auto" data-node-id="1749:71">
              معرفی کوتاه استارتاپ
            </p>
            <p className="-translate-x-full absolute font-sans font-medium h-[20px] leading-[16px] left-[349px] text-[#17324d] text-[11px] top-[24px] w-[340px]" dir="auto" data-node-id="1749:72">
              سامانه ماه، پلتفرم یکپارچه مدیریت شتابدهی برای مراکز نوآوری و خانه‌های خلاق.
            </p>
          </div>
          <div className="[word-break:break-word] absolute bg-[#f8fafc] border border-[#e2e8f0] border-solid h-[68px] left-[13px] overflow-clip rounded-[10px] text-right top-[568px] w-[360px]" data-node-id="1749:73" data-name="registration-text-block">
            <p className="-translate-x-full absolute font-sans font-normal h-[20px] leading-[15px] left-[349px] text-[#60758a] text-[10.5px] top-[6px] w-[340px]" dir="auto" data-node-id="1749:74">
              مسئله اصلی
            </p>
            <p className="-translate-x-full absolute font-sans font-medium h-[20px] leading-[16px] left-[349px] text-[#17324d] text-[11px] top-[24px] w-[340px]" dir="auto" data-node-id="1749:75">
              فرآیندهای ارزیابی و نظارت بر پیشرفت تیم‌ها دستی، نامنظم و پراکنده است.
            </p>
          </div>
          <div className="[word-break:break-word] absolute bg-[#f8fafc] border border-[#e2e8f0] border-solid h-[68px] left-[385px] overflow-clip rounded-[10px] text-right top-[642px] w-[360px]" data-node-id="1749:76" data-name="registration-text-block">
            <p className="-translate-x-full absolute font-sans font-normal h-[20px] leading-[15px] left-[349px] text-[#60758a] text-[10.5px] top-[6px] w-[340px]" dir="auto" data-node-id="1749:77">
              راهکار
            </p>
            <p className="-translate-x-full absolute font-sans font-medium h-[20px] leading-[16px] left-[349px] text-[#17324d] text-[11px] top-[24px] w-[340px]" dir="auto" data-node-id="1749:78">
              داشبورد KPI، ارزیابی چندبعدی، رصد پروژه‌ها و پنل سرمایه‌گذاران برای چرخه شفاف و داده‌محور.
            </p>
          </div>
          <div className="[word-break:break-word] absolute bg-[#f8fafc] border border-[#e2e8f0] border-solid h-[68px] left-[13px] overflow-clip rounded-[10px] text-right top-[642px] w-[360px]" data-node-id="1749:79" data-name="registration-text-block">
            <p className="-translate-x-full absolute font-sans font-normal h-[20px] leading-[15px] left-[349px] text-[#60758a] text-[10.5px] top-[6px] w-[340px]" dir="auto" data-node-id="1749:80">
              مشتریان یا کاربران هدف
            </p>
            <p className="-translate-x-full absolute font-sans font-medium h-[20px] leading-[16px] left-[349px] text-[#17324d] text-[11px] top-[24px] w-[340px]" dir="auto" data-node-id="1749:81">
              شتابدهنده‌ها، خانه‌های خلاق، پارک‌های علم و فناوری، VCها و صندوق‌های پژوهش و فناوری.
            </p>
          </div>
          <div className="[word-break:break-word] absolute bg-[#f8fafc] border border-[#e2e8f0] border-solid h-[46px] left-[385px] overflow-clip rounded-[10px] text-right top-[716px] w-[360px]" data-node-id="1749:82" data-name="registration-field">
            <p className="-translate-x-full absolute font-sans font-normal h-[20px] leading-[15px] left-[345px] text-[#60758a] text-[10.5px] top-[4px] w-[338px]" dir="auto" data-node-id="1749:83">
              وضعیت فعلی محصول
            </p>
            <p className="-translate-x-full absolute font-sans font-bold h-[20px] leading-[16px] left-[345px] text-[#17324d] text-[12px] top-[19px] w-[338px]" dir="auto" data-node-id="1749:84">
              دارای درآمد
            </p>
          </div>
          <div className="[word-break:break-word] absolute bg-[#f8fafc] border border-[#e2e8f0] border-solid h-[46px] left-[13px] overflow-clip rounded-[10px] text-[10.5px] text-right top-[716px] w-[360px]" data-node-id="1749:85" data-name="registration-field">
            <p className="-translate-x-full absolute font-sans font-normal h-[20px] leading-[15px] left-[345px] text-[#60758a] top-[4px] w-[338px]" dir="auto" data-node-id="1749:86">
              مدل درآمدی استارتاپ
            </p>
            <p className="-translate-x-full absolute font-sans font-bold h-[20px] leading-[16px] left-[345px] text-[#17324d] top-[19px] w-[338px]" dir="auto" data-node-id="1749:87">
              فروش اشتراک (SaaS) / کارمزد از سرمایه‌گذاری
            </p>
          </div>
          <div className="[word-break:break-word] absolute bg-[#f8fafc] border border-[#e2e8f0] border-solid h-[46px] left-[385px] overflow-clip rounded-[10px] text-right top-[768px] w-[360px]" data-node-id="1749:88" data-name="registration-field">
            <p className="-translate-x-full absolute font-sans font-normal h-[20px] leading-[15px] left-[345px] text-[#60758a] text-[10.5px] top-[4px] w-[338px]" dir="auto" data-node-id="1749:89">
              مشتریان پرداخت‌کننده
            </p>
            <p className="-translate-x-full absolute font-sans font-bold h-[20px] leading-[16px] left-[345px] text-[#17324d] text-[12px] top-[19px] w-[338px]" dir="auto" data-node-id="1749:90">
              ۱۲ مرکز نوآوری
            </p>
          </div>
          <div className="[word-break:break-word] absolute bg-[#f8fafc] border border-[#e2e8f0] border-solid h-[46px] left-[13px] overflow-clip rounded-[10px] text-right top-[768px] w-[360px]" data-node-id="1749:91" data-name="registration-field">
            <p className="-translate-x-full absolute font-sans font-normal h-[20px] leading-[15px] left-[345px] text-[#60758a] text-[10.5px] top-[4px] w-[338px]" dir="auto" data-node-id="1749:92">
              کاربران فعال سیستم
            </p>
            <p className="-translate-x-full absolute font-sans font-bold h-[20px] leading-[16px] left-[345px] text-[#17324d] text-[12px] top-[19px] w-[338px]" dir="auto" data-node-id="1749:93">
              ۱۵۰ مدیر و مربی
            </p>
          </div>
          <div className="[word-break:break-word] absolute bg-[#f8fafc] border border-[#e2e8f0] border-solid h-[46px] left-[385px] overflow-clip rounded-[10px] text-right top-[820px] w-[360px]" data-node-id="1749:94" data-name="registration-field">
            <p className="-translate-x-full absolute font-sans font-normal h-[20px] leading-[15px] left-[345px] text-[#60758a] text-[10.5px] top-[4px] w-[338px]" dir="auto" data-node-id="1749:95">
              نرخ رشد سه‌ماهه اخیر
            </p>
            <p className="-translate-x-full absolute font-sans font-bold h-[20px] leading-[16px] left-[345px] text-[#17324d] text-[12px] top-[19px] w-[338px]" data-node-id="1749:96">
              ۲۵٪
            </p>
          </div>
          <div className="[word-break:break-word] absolute bg-[#f8fafc] border border-[#e2e8f0] border-solid h-[46px] left-[13px] overflow-clip rounded-[10px] text-[10.5px] text-right top-[820px] w-[360px]" data-node-id="1749:97" data-name="registration-field">
            <p className="-translate-x-full absolute font-sans font-normal h-[20px] leading-[15px] left-[345px] text-[#60758a] top-[4px] w-[338px]" dir="auto" data-node-id="1749:98">
              درآمد میانگین ماهانه
            </p>
            <p className="-translate-x-full absolute font-sans font-bold h-[20px] leading-[16px] left-[345px] text-[#17324d] top-[19px] w-[338px]" dir="auto" data-node-id="1749:99">
              ۸۰٬۰۰۰٬۰۰۰ تومان
            </p>
          </div>
          <p className="-translate-x-full [word-break:break-word] absolute font-sans font-bold h-[21px] leading-[20px] left-[745px] text-[#17324d] text-[13px] text-right top-[875px] w-[246px]" dir="auto" data-node-id="1749:100">
            اعضای اصلی تیم استارتاپ
          </p>
          <div className="absolute bg-[#f8fafc] border border-[#e2e8f0] border-solid h-[56px] left-[385px] overflow-clip rounded-[10px] top-[901px] w-[360px]" data-node-id="1749:101" data-name="team-member">
            <p className="-translate-x-full [word-break:break-word] absolute font-sans font-bold h-[20px] leading-[18px] left-[343px] text-[#17324d] text-[12px] text-right top-[6px] w-[154px]" dir="auto" data-node-id="1749:102">
              علی علوی
            </p>
            <p className="-translate-x-full [word-break:break-word] absolute font-sans font-normal h-[20px] leading-[16px] left-[343px] text-[#60758a] text-[10.5px] text-right top-[25px] w-[262px]" dir="auto" data-node-id="1749:103">
              هم‌بنیان‌گذار و مدیر فنی (CTO)
            </p>
            <div className="absolute bg-[#eaf8f0] h-[26px] left-[9px] overflow-clip rounded-[7px] top-[14px] w-[64px]" data-node-id="1749:104" data-name="employment">
              <p className="-translate-x-1/2 [word-break:break-word] absolute font-sans font-medium h-[20px] leading-[17px] left-[32px] text-[#159455] text-[10.5px] text-center top-[3px] w-[48px]" dir="auto" data-node-id="1749:105">
                تمام‌وقت
              </p>
            </div>
          </div>
          <div className="absolute bg-[#f8fafc] border border-[#e2e8f0] border-solid h-[56px] left-[13px] overflow-clip rounded-[10px] top-[901px] w-[360px]" data-node-id="1749:106" data-name="team-member">
            <p className="-translate-x-full [word-break:break-word] absolute font-sans font-bold h-[20px] leading-[18px] left-[343px] text-[#17324d] text-[12px] text-right top-[6px] w-[154px]" dir="auto" data-node-id="1749:107">
              سارا حسینی
            </p>
            <p className="-translate-x-full [word-break:break-word] absolute font-sans font-normal h-[20px] leading-[16px] left-[343px] text-[#60758a] text-[10.5px] text-right top-[25px] w-[262px]" dir="auto" data-node-id="1749:108">
              مدیر محصول و طراح تجربه کاربری
            </p>
            <div className="absolute bg-[#eaf5fd] h-[26px] left-[9px] overflow-clip rounded-[7px] top-[14px] w-[64px]" data-node-id="1749:109" data-name="employment">
              <p className="-translate-x-1/2 [word-break:break-word] absolute font-sans font-medium h-[20px] leading-[17px] left-[32px] text-[#2094e3] text-[10.5px] text-center top-[3px] w-[48px]" dir="auto" data-node-id="1749:110">
                پاره‌وقت
              </p>
            </div>
          </div>
          <p className="-translate-x-full [word-break:break-word] absolute font-sans font-bold h-[22px] leading-[20px] left-[745px] text-[#17324d] text-[14px] text-right top-[977px] w-[336px]" dir="auto" data-node-id="1749:111">
            ۳. اثر اجتماعی و مدارک
          </p>
          <div className="absolute bg-[#e4ebf1] h-px left-[13px] top-[1002px] w-[732px]" data-node-id="1749:112" data-name="section-divider" />
          <div className="[word-break:break-word] absolute bg-[#f8fafc] border border-[#e2e8f0] border-solid h-[46px] left-[509px] overflow-clip rounded-[10px] text-right top-[1007px] w-[236px]" data-node-id="1749:113" data-name="registration-field">
            <p className="-translate-x-full absolute font-sans font-normal h-[20px] leading-[15px] left-[227px] text-[#60758a] text-[10.5px] top-[4px] w-[220px]" dir="auto" data-node-id="1749:114">
              تجربه قبلی طرح‌های اثرگذار
            </p>
            <p className="-translate-x-full absolute font-sans font-bold h-[20px] leading-[16px] left-[227px] text-[#17324d] text-[12px] top-[19px] w-[220px]" dir="auto" data-node-id="1749:115">
              داریم
            </p>
          </div>
          <div className="[word-break:break-word] absolute bg-[#f8fafc] border border-[#e2e8f0] border-solid h-[46px] left-[13px] overflow-clip rounded-[10px] text-[10.5px] text-right top-[1007px] w-[486px]" data-node-id="1749:116" data-name="registration-field">
            <p className="-translate-x-full absolute font-sans font-normal h-[20px] leading-[15px] left-[477px] text-[#60758a] top-[4px] w-[470px]" dir="auto" data-node-id="1749:117">
              محدوده جغرافیایی فعالیت
            </p>
            <p className="-translate-x-full absolute font-sans font-bold h-[20px] leading-[16px] left-[477px] text-[#17324d] top-[19px] w-[470px]" dir="auto" data-node-id="1749:118">
              چنداستانی (تهران، البرز و اصفهان)
            </p>
          </div>
          <div className="[word-break:break-word] absolute bg-[#f8fafc] border border-[#e2e8f0] border-solid h-[46px] left-[385px] overflow-clip rounded-[10px] text-[10.5px] text-right top-[1059px] w-[360px]" data-node-id="1749:119" data-name="registration-field">
            <p className="-translate-x-full absolute font-sans font-normal h-[20px] leading-[15px] left-[351px] text-[#60758a] top-[4px] w-[344px]" dir="auto" data-node-id="1749:120">
              حوزه اصلی اثر اجتماعی
            </p>
            <p className="-translate-x-full absolute font-sans font-bold h-[20px] leading-[16px] left-[351px] text-[#17324d] top-[19px] w-[344px]" dir="auto" data-node-id="1749:121">
              آموزش و مهارت‌افزایی، اشتغال پایدار
            </p>
          </div>
          <div className="[word-break:break-word] absolute bg-[#f8fafc] border border-[#e2e8f0] border-solid h-[46px] left-[13px] overflow-clip rounded-[10px] text-[10.5px] text-right top-[1059px] w-[360px]" data-node-id="1749:122" data-name="registration-field">
            <p className="-translate-x-full absolute font-sans font-normal h-[20px] leading-[15px] left-[351px] text-[#60758a] top-[4px] w-[344px]" dir="auto" data-node-id="1749:123">
              جامعه هدف طرح
            </p>
            <p className="-translate-x-full absolute font-sans font-bold h-[20px] leading-[16px] left-[351px] text-[#17324d] top-[19px] w-[344px]" dir="auto" data-node-id="1749:124">
              جوانان و نوجوانان، فارغ‌التحصیلان دانشگاهی
            </p>
          </div>
          <p className="-translate-x-full [word-break:break-word] absolute font-sans font-bold h-[21px] leading-[20px] left-[745px] text-[#17324d] text-[13px] text-right top-[1116px] w-[246px]" dir="auto" data-node-id="1749:125">
            فایل‌ها و مدارک استارتاپ
          </p>
          <button onClick={() => navigate("/panel/creative-house/overlays/file-preview")} className="absolute bg-white block border border-[#e2e8f0] border-solid cursor-pointer h-[34px] left-[13px] overflow-clip rounded-[8px] top-[1142px] w-[732px]" data-node-id="1749:126" data-name="document-row">
            <p className="-translate-x-full [word-break:break-word] absolute font-sans font-medium h-[20px] leading-[18px] left-[715px] text-[#17324d] text-[11.5px] text-right top-[6px] w-[296px]" dir="auto" data-node-id="1749:127">
              Pitch Deck معرفی استارتاپ
            </p>
            <p className="-translate-x-full [word-break:break-word] absolute font-sans font-normal h-[20px] leading-[18px] left-[409px] text-[#60758a] text-[10.5px] text-right top-[6px] w-[260px]" dir="auto" data-node-id="1749:128">
              فایل نهایی نمایش داده نشده
            </p>
            <div className="absolute bg-[#fff6e5] h-[26px] left-[9px] overflow-clip rounded-[7px] top-[3px] w-[128px]" data-node-id="1749:129" data-name="document-status">
              <p className="-translate-x-1/2 [word-break:break-word] absolute font-sans font-medium h-[20px] leading-[17px] left-[64px] text-[#c27a10] text-[10.5px] text-center top-[3px] w-[112px]" dir="auto" data-node-id="1749:130">
                نیازمند بررسی
              </p>
            </div>
          </button>
          <button onClick={() => navigate("/panel/creative-house/overlays/file-preview")} className="absolute bg-white block border border-[#e2e8f0] border-solid cursor-pointer h-[34px] left-[13px] overflow-clip rounded-[8px] top-[1182px] w-[732px]" data-node-id="1749:131" data-name="document-row">
            <p className="-translate-x-full [word-break:break-word] absolute font-sans font-medium h-[20px] leading-[18px] left-[715px] text-[#17324d] text-[11.5px] text-right top-[6px] w-[296px]" dir="auto" data-node-id="1749:132">
              مدرک حقوقی
            </p>
            <p className="-translate-x-full [word-break:break-word] absolute font-sans font-normal h-[20px] leading-[18px] left-[409px] text-[#60758a] text-[10.5px] text-right top-[6px] w-[260px]" dir="auto" data-node-id="1749:133">
              آگهی_تاسیس_سامانه_ماه.pdf
            </p>
            <div className="absolute bg-[#eaf8f0] h-[26px] left-[9px] overflow-clip rounded-[7px] top-[3px] w-[128px]" data-node-id="1749:134" data-name="document-status">
              <p className="-translate-x-1/2 [word-break:break-word] absolute font-sans font-medium h-[20px] leading-[17px] left-[64px] text-[#159455] text-[10.5px] text-center top-[3px] w-[112px]" dir="auto" data-node-id="1749:135">
                بارگذاری شده
              </p>
            </div>
          </button>
          <button onClick={() => navigate("/panel/creative-house/overlays/file-preview")} className="absolute bg-white block border border-[#e2e8f0] border-solid cursor-pointer h-[34px] left-[13px] overflow-clip rounded-[8px] top-[1222px] w-[732px]" data-node-id="1749:136" data-name="document-row">
            <p className="-translate-x-full [word-break:break-word] absolute font-sans font-medium h-[20px] leading-[18px] left-[715px] text-[#17324d] text-[11.5px] text-right top-[6px] w-[296px]" dir="auto" data-node-id="1749:137">
              مدرک هویتی نماینده
            </p>
            <p className="-translate-x-full [word-break:break-word] absolute font-sans font-normal h-[20px] leading-[18px] left-[409px] text-[#60758a] text-[10.5px] text-right top-[6px] w-[260px]" dir="auto" data-node-id="1749:138">
              کارت_ملی_نماینده_رسمی.jpg
            </p>
            <div className="absolute bg-[#eaf8f0] h-[26px] left-[9px] overflow-clip rounded-[7px] top-[3px] w-[128px]" data-node-id="1749:139" data-name="document-status">
              <p className="-translate-x-1/2 [word-break:break-word] absolute font-sans font-medium h-[20px] leading-[17px] left-[64px] text-[#159455] text-[10.5px] text-center top-[3px] w-[112px]" dir="auto" data-node-id="1749:140">
                بارگذاری شده
              </p>
            </div>
          </button>
          <p className="-translate-x-full [word-break:break-word] absolute font-sans font-bold h-[22px] leading-[20px] left-[745px] text-[#17324d] text-[14px] text-right top-[1271px] w-[336px]" dir="auto" data-node-id="1749:141">
            ۴. تأییدیه‌های ارسال درخواست
          </p>
          <div className="absolute bg-[#e4ebf1] h-px left-[13px] top-[1296px] w-[732px]" data-node-id="1749:142" data-name="section-divider" />
          <div className="absolute bg-[#f8fafc] border border-[#e2e8f0] border-solid h-[28px] left-[13px] overflow-clip rounded-[7px] top-[1300px] w-[732px]" data-node-id="1749:143" data-name="submission-confirmation">
            <div className="absolute bg-[#eaf8f0] h-[26px] left-[9px] overflow-clip rounded-[7px] top-px w-[28px]" data-node-id="1749:144" data-name="checked">
              <p className="-translate-x-1/2 [word-break:break-word] absolute font-sans font-medium h-[20px] leading-[17px] left-[14px] text-[#159455] text-[10.5px] text-center top-[3px] w-[12px]" data-node-id="1749:145">
                ✓
              </p>
            </div>
            <p className="-translate-x-full [word-break:break-word] absolute font-sans font-medium h-[20px] leading-[17px] left-[715px] text-[#17324d] text-[10.5px] text-right top-[3px] w-[662px]" dir="auto" data-node-id="1749:146">
              صحت اطلاعات و مدارک واردشده تأیید شده است.
            </p>
          </div>
          <div className="absolute bg-[#f8fafc] border border-[#e2e8f0] border-solid h-[28px] left-[13px] overflow-clip rounded-[7px] top-[1332px] w-[732px]" data-node-id="1749:147" data-name="submission-confirmation">
            <div className="absolute bg-[#eaf8f0] h-[26px] left-[9px] overflow-clip rounded-[7px] top-px w-[28px]" data-node-id="1749:148" data-name="checked">
              <p className="-translate-x-1/2 [word-break:break-word] absolute font-sans font-medium h-[20px] leading-[17px] left-[14px] text-[#159455] text-[10.5px] text-center top-[3px] w-[12px]" data-node-id="1749:149">
                ✓
              </p>
            </div>
            <p className="-translate-x-full [word-break:break-word] absolute font-sans font-medium h-[20px] leading-[17px] left-[715px] text-[#17324d] text-[10.5px] text-right top-[3px] w-[662px]" dir="auto" data-node-id="1749:150">
              اجازه بررسی اطلاعات توسط خانه خلاق و فرآیند پایش سامانه ماه داده شده است.
            </p>
          </div>
          <div className="absolute bg-[#f8fafc] border border-[#e2e8f0] border-solid h-[28px] left-[13px] overflow-clip rounded-[7px] top-[1364px] w-[732px]" data-node-id="1750:2" data-name="submission-confirmation">
            <div className="absolute bg-[#eaf8f0] h-[24px] left-[9px] overflow-clip rounded-[7px] top-px w-[28px]" data-node-id="1750:3" data-name="checked">
              <p className="-translate-x-1/2 [word-break:break-word] absolute font-sans font-medium h-[18px] leading-[normal] left-[14px] text-[#159455] text-[10.5px] text-center top-[3px] w-[16px]" data-node-id="1750:4">
                ✓
              </p>
            </div>
            <p className="-translate-x-full [word-break:break-word] absolute font-sans font-medium h-[20px] leading-[17px] left-[715px] text-[#17324d] text-[10.5px] text-right top-[3px] w-[662px]" dir="auto" data-node-id="1750:5">
              قوانین و مقررات عمومی و سیاست حریم خصوصی سامانه ماه پذیرفته شده است.
            </p>
          </div>
        </div>
        <div className="absolute bg-white border border-[#e4ebf1] border-solid h-[670px] left-[28px] overflow-clip rounded-[12px] top-[202px] w-[356px]" data-node-id="1743:60" data-name="evaluation-decision-panel">
          <p className="-translate-x-full [word-break:break-word] absolute font-sans font-bold h-[24px] leading-[normal] left-[327px] text-[#17324d] text-[18px] text-right top-[17px] w-[158px]" dir="auto" data-node-id="1743:61">
            جمع‌بندی ارزیابی
          </p>
          <p className="-translate-x-full [word-break:break-word] absolute font-sans font-normal h-[24px] leading-[normal] left-[327px] text-[#60758a] text-[11px] text-right top-[47px] w-[304px]" dir="auto" data-node-id="1743:62">
            نتیجه باید مستدل و قابل پیگیری ثبت شود.
          </p>
          <div className="absolute bg-[#e4ebf1] h-px left-[15px] top-[77px] w-[324px]" data-node-id="1743:63" data-name="separator" />
          <p className="-translate-x-full [word-break:break-word] absolute font-sans font-bold h-[24px] leading-[normal] left-[327px] text-[#17324d] text-[14px] text-right top-[93px] w-[138px]" dir="auto" data-node-id="1743:64">
            چک‌لیست صلاحیت
          </p>
          <div className="absolute bg-[#e8f9f0] h-[30px] left-[17px] overflow-clip rounded-[8px] top-[125px] w-[112px]" data-node-id="1743:65" data-name="check-1">
            <p className="-translate-x-1/2 [word-break:break-word] absolute font-sans font-medium h-[24px] leading-[normal] left-[56px] text-[#159455] text-[12px] text-center top-[4px] w-[96px]" dir="auto" data-node-id="1743:66">
              تکمیل
            </p>
          </div>
          <p className="-translate-x-full [word-break:break-word] absolute font-sans font-medium h-[24px] leading-[normal] left-[327px] text-[#17324d] text-[12px] text-right top-[128px] w-[182px]" dir="auto" data-node-id="1743:67">
            اطلاعات پایه
          </p>
          <div className="absolute bg-[#e8f9f0] h-[30px] left-[17px] overflow-clip rounded-[8px] top-[169px] w-[112px]" data-node-id="1743:68" data-name="check-2">
            <p className="-translate-x-1/2 [word-break:break-word] absolute font-sans font-medium h-[24px] leading-[normal] left-[56px] text-[#159455] text-[12px] text-center top-[4px] w-[96px]" dir="auto" data-node-id="1743:69">
              تکمیل
            </p>
          </div>
          <p className="-translate-x-full [word-break:break-word] absolute font-sans font-medium h-[24px] leading-[normal] left-[327px] text-[#17324d] text-[12px] text-right top-[172px] w-[182px]" dir="auto" data-node-id="1743:70">
            محصول و تیم
          </p>
          <div className="absolute bg-[#fff6e2] h-[30px] left-[17px] overflow-clip rounded-[8px] top-[213px] w-[112px]" data-node-id="1743:71" data-name="check-3">
            <p className="-translate-x-1/2 [word-break:break-word] absolute font-sans font-medium h-[24px] leading-[normal] left-[56px] text-[#c27a10] text-[12px] text-center top-[4px] w-[96px]" dir="auto" data-node-id="1743:72">
              نیازمند بررسی
            </p>
          </div>
          <p className="-translate-x-full [word-break:break-word] absolute font-sans font-medium h-[24px] leading-[normal] left-[327px] text-[#17324d] text-[12px] text-right top-[216px] w-[182px]" dir="auto" data-node-id="1743:73">
            اثر اجتماعی و مدارک
          </p>
          <div className="absolute bg-[#eaf8f0] h-[30px] left-[17px] overflow-clip rounded-[8px] top-[257px] w-[112px]" data-node-id="1743:74" data-name="check-4">
            <p className="-translate-x-1/2 [word-break:break-word] absolute font-sans font-medium h-[24px] leading-[normal] left-[56px] text-[#159455] text-[12px] text-center top-[4px] w-[96px]" dir="auto" data-node-id="1743:75">
              تکمیل
            </p>
          </div>
          <p className="-translate-x-full [word-break:break-word] absolute font-sans font-medium h-[24px] leading-[normal] left-[327px] text-[#17324d] text-[12px] text-right top-[260px] w-[182px]" dir="auto" data-node-id="1743:76">
            تأییدیه‌های ارسال
          </p>
          <div className="absolute bg-[#e4ebf1] h-px left-[15px] top-[309px] w-[324px]" data-node-id="1743:77" data-name="separator" />
          <p className="-translate-x-full [word-break:break-word] absolute font-sans font-bold h-[24px] leading-[normal] left-[327px] text-[#17324d] text-[14px] text-right top-[325px] w-[108px]" dir="auto" data-node-id="1743:78">
            تصمیم نهایی
          </p>
          <button onClick={() => navigate("/panel/creative-house/overlays/decision")} className="absolute bg-[#e8f9f0] block cursor-pointer h-[42px] left-[17px] overflow-clip rounded-[9px] top-[357px] w-[320px]" data-node-id="1743:79" data-name="decision-option-1">
            <div className="absolute left-[18px] w-[16px] h-[16px] top-[13px]" data-node-id="1743:80" data-name="radio">
              <img alt="" className="absolute block inset-0 max-w-none w-full h-full" src={imgRadio} />
            </div>
            <p className="-translate-x-full [word-break:break-word] absolute font-sans font-bold h-[24px] leading-[normal] left-[302px] text-[#159455] text-[13px] text-right top-[8px] w-[256px]" dir="auto" data-node-id="1743:81">
              تأیید و فعال‌سازی پنل
            </p>
          </button>
          <button onClick={() => navigate("/panel/creative-house/overlays/decision")} className="absolute bg-[#fff6e2] block cursor-pointer h-[42px] left-[17px] overflow-clip rounded-[9px] top-[409px] w-[320px]" data-node-id="1743:82" data-name="decision-option-2">
            <div className="absolute left-[18px] w-[16px] h-[16px] top-[13px]" data-node-id="1743:83" data-name="radio">
              <img alt="" className="absolute block inset-0 max-w-none w-full h-full" src={imgRadio1} />
            </div>
            <p className="-translate-x-full [word-break:break-word] absolute font-sans font-bold h-[24px] leading-[normal] left-[302px] text-[#c27a10] text-[13px] text-right top-[8px] w-[256px]" dir="auto" data-node-id="1743:84">
              درخواست تکمیل اطلاعات
            </p>
          </button>
          <button onClick={() => navigate("/panel/creative-house/overlays/decision")} className="absolute bg-[#fcebeb] block cursor-pointer h-[42px] left-[17px] overflow-clip rounded-[9px] top-[461px] w-[320px]" data-node-id="1743:85" data-name="decision-option-3">
            <div className="absolute left-[18px] w-[16px] h-[16px] top-[13px]" data-node-id="1743:86" data-name="radio">
              <img alt="" className="absolute block inset-0 max-w-none w-full h-full" src={imgRadio2} />
            </div>
            <p className="-translate-x-full [word-break:break-word] absolute font-sans font-bold h-[24px] leading-[normal] left-[302px] text-[#c72929] text-[13px] text-right top-[8px] w-[256px]" dir="auto" data-node-id="1743:87">
              رد درخواست
            </p>
          </button>
          <p className="-translate-x-full [word-break:break-word] absolute font-sans font-medium h-[24px] leading-[normal] left-[327px] text-[#60758a] text-[12px] text-right top-[521px] w-[120px]" dir="auto" data-node-id="1743:88">
            دلیل و توضیحات
          </p>
          <div className="absolute bg-[#f6f9fb] border border-[#e4ebf1] border-solid h-[62px] left-[17px] overflow-clip rounded-[9px] top-[547px] w-[320px]" data-node-id="1743:89" data-name="decision-reason-input">
            <p className="-translate-x-full [word-break:break-word] absolute font-sans font-normal h-[24px] leading-[normal] left-[307px] text-[#60758a] text-[11px] text-right top-[11px] w-[296px]" dir="auto" data-node-id="1743:90">
              جمع‌بندی، دلیل تصمیم یا موارد موردنیاز برای تکمیل...
            </p>
          </div>
          <Link to="/panel/creative-house/overlays/decision" className="absolute bg-[#2094e3] block cursor-pointer h-[38px] left-[17px] overflow-clip rounded-[9px] top-[621px] w-[320px]" data-node-id="1743:91" data-name="save-decision">
            <p className="-translate-x-1/2 [word-break:break-word] absolute font-sans font-bold h-[24px] leading-[normal] left-[160px] text-[13px] text-center text-white top-[7px] w-[304px]" dir="auto" data-node-id="1743:92">
              ثبت تصمیم
            </p>
          </Link>
          <div className="absolute h-0 left-[17px] top-[613px] w-[320px]" data-node-id="1743:93" data-name="decision-impact-note" />
        </div>
      </div>
      <div className="absolute bg-[#17324d] content-stretch flex flex-col gap-[10px] h-[1630px] items-end left-[1216px] pb-[18px] pt-[20px] px-[16px] top-0 w-[224px]" data-node-id="1742:97" data-name="colored-sidebar">
        <div className="bg-white content-stretch flex h-[56px] items-center justify-end overflow-clip px-[10px] py-[8px] relative rounded-[12px] shrink-0 w-[192px]" data-node-id="1742:98" data-name="brand-logo">
          <div className="h-[40px] relative shrink-0 w-[118px]" data-node-id="1742:99" data-name="ChatGPT Image ۲۹ مرداد ۱۴۰۵، ۱۵_۱۶_۳۵ 1">
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <img alt="" className="absolute h-full left-[5.28%] max-w-none top-0 w-[100.73%]" src={imgChatGptImage1} />
            </div>
          </div>
        </div>
        <div className="content-stretch flex flex-col h-[64px] items-start justify-end overflow-clip px-[8px] py-[7px] relative shrink-0 w-[192px]" data-node-id="1742:100" data-name="panel-identity">
          <p className="[word-break:break-word] font-sans font-bold h-[39px] leading-[normal] relative shrink-0 text-[13px] text-center text-white w-[176px]" dir="auto" data-node-id="1742:101">
            خانه خلاق و نوآوری آینه
          </p>
        </div>
        <Link to="/panel/creative-house" className="content-stretch cursor-pointer flex gap-[10px] h-[38px] items-center justify-end overflow-clip px-[12px] relative rounded-[9px] shrink-0 w-[192px]" data-node-id="1742:102" data-name="dashboard-nav">
          <p className="[word-break:break-word] font-sans font-medium leading-[normal] relative shrink-0 text-[12px] text-right text-white w-[142px]" dir="auto" data-node-id="1742:103">
            داشبورد
          </p>
          <div className="relative shrink-0 w-[18px] h-[18px]" data-node-id="1742:104" data-name="dashboard-icon">
            <img alt="" className="absolute block inset-0 max-w-none w-full h-full" src={imgDashboardIcon} />
          </div>
        </Link>
        <div className="bg-[#2094e3] content-stretch flex gap-[10px] h-[38px] items-center justify-end overflow-clip px-[12px] relative rounded-[9px] shrink-0 w-[192px]" data-node-id="1742:109" data-name="startup-evaluations-nav">
          <p className="[word-break:break-word] font-sans font-normal leading-[normal] relative shrink-0 text-[12px] text-right text-white w-[142px]" dir="auto" data-node-id="1742:110">
            ارزیابی استارتاپ‌ها
          </p>
          <div className="relative shrink-0 w-[18px] h-[18px]" data-node-id="1742:111" data-name="users-icon">
            <img alt="" className="absolute block inset-0 max-w-none w-full h-full" src={imgUsersIcon} />
          </div>
        </div>
        <Link to="/panel/creative-house/project-evaluations" className="content-stretch cursor-pointer flex gap-[10px] h-[38px] items-center justify-end overflow-clip px-[12px] relative rounded-[9px] shrink-0 w-[192px]" data-node-id="1742:116" data-name="project-evaluations-nav">
          <p className="[word-break:break-word] font-sans font-normal leading-[normal] relative shrink-0 text-[12px] text-right text-white w-[142px]" dir="auto" data-node-id="1742:117">
            ارزیابی پروژه‌ها
          </p>
          <div className="relative shrink-0 w-[18px] h-[18px]" data-node-id="1742:118" data-name="project-icon">
            <img alt="" className="absolute block inset-0 max-w-none w-full h-full" src={imgProjectIcon} />
          </div>
        </Link>
        <Link to="/panel/creative-house/milestone-evaluations" className="content-stretch cursor-pointer flex gap-[10px] h-[38px] items-center justify-end overflow-clip px-[12px] relative rounded-[9px] shrink-0 w-[192px]" data-node-id="1742:121" data-name="milestone-evaluations-nav">
          <p className="[word-break:break-word] font-sans font-normal leading-[normal] relative shrink-0 text-[12px] text-right text-white w-[142px]" dir="auto" data-node-id="1742:122">
            ارزیابی مراحل پروژه
          </p>
          <div className="relative shrink-0 w-[18px] h-[18px]" data-node-id="1742:123" data-name="milestone-icon">
            <img alt="" className="absolute block inset-0 max-w-none w-full h-full" src={imgMilestoneIcon} />
          </div>
        </Link>
        <Link to="/panel/creative-house/reports" className="content-stretch cursor-pointer flex gap-[10px] h-[38px] items-center justify-end overflow-clip px-[12px] relative rounded-[9px] shrink-0 w-[192px]" data-node-id="1742:126" data-name="reports-nav">
          <p className="[word-break:break-word] font-sans font-normal leading-[normal] relative shrink-0 text-[12px] text-right text-white w-[142px]" dir="auto" data-node-id="1742:127">
            گزارش‌ها
          </p>
          <div className="relative shrink-0 w-[18px] h-[18px]" data-node-id="1742:128" data-name="reports-icon">
            <img alt="" className="absolute block inset-0 max-w-none w-full h-full" src={imgReportsIcon} />
          </div>
        </Link>
        <Link to="/panel/creative-house/evaluation-history" className="content-stretch cursor-pointer flex gap-[10px] h-[38px] items-center justify-end overflow-clip px-[12px] relative rounded-[9px] shrink-0 w-[192px]" data-node-id="1742:133" data-name="evaluation-history-nav">
          <p className="[word-break:break-word] font-sans font-normal leading-[normal] relative shrink-0 text-[12px] text-right text-white w-[142px]" dir="auto" data-node-id="1742:134">
            سوابق ارزیابی
          </p>
          <div className="relative shrink-0 w-[18px] h-[18px]" data-node-id="1742:135" data-name="history-icon">
            <img alt="" className="absolute block inset-0 max-w-none w-full h-full" src={imgHistoryIcon} />
          </div>
        </Link>
        <Link to="/panel/creative-house/settings" className="content-stretch cursor-pointer flex gap-[10px] h-[38px] items-center justify-end overflow-clip px-[12px] relative rounded-[9px] shrink-0 w-[192px]" data-node-id="1742:139" data-name="settings-nav">
          <p className="[word-break:break-word] font-sans font-normal leading-[normal] relative shrink-0 text-[12px] text-right text-white w-[142px]" dir="auto" data-node-id="1742:140">
            تنظیمات
          </p>
          <div className="relative shrink-0 w-[18px] h-[18px]" data-node-id="1742:141" data-name="settings-icon">
            <img alt="" className="absolute block inset-0 max-w-none w-full h-full" src={imgSettingsIcon} />
          </div>
        </Link>
        <div className="flex-[1_0_0] min-h-px relative w-[192px]" data-node-id="1742:144" data-name="sidebar-spacer" />
        <Link to="/panel/creative-house/overlays/logout" className="bg-white content-stretch cursor-pointer flex gap-[10px] h-[38px] items-center justify-end opacity-96 overflow-clip px-[12px] relative rounded-[9px] shrink-0 w-[192px]" data-node-id="1742:145" data-name="logout-nav">
          <p className="[word-break:break-word] font-sans font-medium leading-[normal] relative shrink-0 text-[#17324d] text-[12px] text-right w-[142px]" dir="auto" data-node-id="1742:146">
            خروج از سیستم
          </p>
          <div className="relative shrink-0 w-[18px] h-[18px]" data-node-id="1742:147" data-name="logout-icon">
            <img alt="" className="absolute block inset-0 max-w-none w-full h-full" src={imgLogoutIcon} />
          </div>
        </Link>
      </div>
    </div>
  );
}