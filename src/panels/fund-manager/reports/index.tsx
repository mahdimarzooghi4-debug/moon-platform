import "../index.css";

const imgChatGptImage1 = "/assets/fund-manager/reports/logo.png";
const imgGroup = "/assets/fund-manager/reports/dashboard.svg";
const imgGroup1 = "/assets/fund-manager/reports/resources.svg";
const imgGroup2 = "/assets/fund-manager/reports/investments.svg";
const imgGroup3 = "/assets/fund-manager/reports/profits.svg";
const imgGroup4 = "/assets/fund-manager/reports/cycle.svg";
const imgGroup5 = "/assets/fund-manager/reports/history.svg";
const imgSettingsIcon = "/assets/fund-manager/reports/settings.svg";
const imgGroup6 = "/assets/fund-manager/reports/logout.svg";

export default function FundManagerReports() {
  return (
    <div className="fund-manager-panel bg-[#f5f8fb] content-stretch flex items-start relative w-full h-full" data-node-id="2321:2" data-name="fund-manager-reports">
      <div className="bg-[#f5f8fb] content-stretch flex flex-col gap-[16px] h-[900px] items-start px-[28px] py-[22px] relative shrink-0 w-[1216px]" data-node-id="2321:3" data-name="Main Content">
        <div className="[word-break:break-word] h-[58px] leading-[normal] overflow-clip relative shrink-0 text-right w-[1160px]" data-node-id="2321:4" data-name="header">
          <p className="-translate-x-full absolute font-sans font-bold h-[32px] left-[1160px] text-[#17324d] text-[23px] top-0 w-[560px]" dir="auto" data-node-id="2321:5">
            گزارش‌های صندوق
          </p>
          <p className="-translate-x-full absolute font-sans font-normal h-[20px] left-[1160px] text-[#60758a] text-[12px] top-[34px] w-[700px]" dir="auto" data-node-id="2321:6">
            گزارش‌های مدیریتی منابع، سرمایه‌گذاری، سود، بازگشت به چرخه و تقسیم سود صندوق
          </p>
        </div>
        <div className="[word-break:break-word] content-stretch flex gap-[16px] h-[94px] items-start leading-[normal] overflow-clip relative shrink-0 text-right w-[1160px]" data-node-id="2321:7" data-name="resources-kpi-row">
          <div className="bg-white border border-[#dbe5f0] border-solid h-[94px] overflow-clip relative rounded-[12px] shrink-0 w-[278px]" data-node-id="2321:8" data-name="kpi-card">
            <p className="-translate-x-full absolute font-sans font-normal h-[20px] left-[261px] text-[#60758a] text-[11px] top-[9px] w-[246px]" dir="auto" data-node-id="2321:9">
              گزارش‌های آماده
            </p>
            <p className="-translate-x-full absolute font-sans font-bold h-[32px] left-[261px] text-[#17324d] text-[19px] top-[33px] w-[246px]" dir="auto" data-node-id="2321:10">
              ۵ گزارش
            </p>
          </div>
          <div className="bg-white border border-[#dbe5f0] border-solid h-[94px] overflow-clip relative rounded-[12px] shrink-0 w-[278px]" data-node-id="2321:11" data-name="kpi-card">
            <p className="-translate-x-full absolute font-sans font-normal h-[20px] left-[261px] text-[#60758a] text-[11px] top-[9px] w-[246px]" dir="auto" data-node-id="2321:12">
              کل منابع ثبت‌شده
            </p>
            <p className="-translate-x-full absolute font-sans font-bold h-[32px] left-[261px] text-[#17324d] text-[19px] top-[33px] w-[246px]" dir="auto" data-node-id="2321:13">
              ۱٫۱۹۷ میلیارد تومان
            </p>
          </div>
          <div className="bg-white border border-[#dbe5f0] border-solid h-[94px] overflow-clip relative rounded-[12px] shrink-0 w-[278px]" data-node-id="2321:14" data-name="kpi-card">
            <p className="-translate-x-full absolute font-sans font-normal h-[20px] left-[261px] text-[#60758a] text-[11px] top-[9px] w-[246px]" dir="auto" data-node-id="2321:15">
              سود نهایی‌شده
            </p>
            <p className="-translate-x-full absolute font-sans font-bold h-[32px] left-[261px] text-[#17324d] text-[19px] top-[33px] w-[246px]" dir="auto" data-node-id="2321:16">
              ۲۱۰ میلیون تومان
            </p>
          </div>
          <div className="bg-white border border-[#dbe5f0] border-solid h-[94px] overflow-clip relative rounded-[12px] shrink-0 w-[278px]" data-node-id="2321:17" data-name="kpi-card">
            <p className="-translate-x-full absolute font-sans font-normal h-[20px] left-[261px] text-[#60758a] text-[11px] top-[9px] w-[246px]" dir="auto" data-node-id="2321:18">
              بازگشت به چرخه
            </p>
            <p className="-translate-x-full absolute font-sans font-bold h-[32px] left-[261px] text-[#17324d] text-[19px] top-[33px] w-[246px]" dir="auto" data-node-id="2321:19">
              ۱۴۷ میلیون تومان
            </p>
          </div>
        </div>
        <div className="bg-white border border-[#dbe5f0] border-solid h-[72px] overflow-clip relative rounded-[12px] shrink-0 w-[1160px]" data-node-id="2321:20" data-name="filters">
          <button className="absolute bg-[#f5f9fd] block border border-[#dbe5f0] border-solid cursor-pointer h-[42px] left-[605px] overflow-clip rounded-[8px] top-[13px] w-[520px]" data-node-id="2321:21" data-name="search-box">
            <p className="-translate-x-full [word-break:break-word] absolute font-sans font-normal h-[20px] leading-[normal] left-[505px] text-[#60758a] text-[12px] text-right top-[9px] w-[492px]" dir="auto" data-node-id="2321:22">
              جستجو در عنوان گزارش، دوره یا شناسه
            </p>
          </button>
          <button className="absolute bg-white block border border-[#dbe5f0] border-solid cursor-pointer h-[42px] left-[375px] overflow-clip rounded-[8px] top-[13px] w-[210px]" data-node-id="2321:23" data-name="filter-source">
            <p className="-translate-x-1/2 [word-break:break-word] absolute font-sans font-normal h-[20px] leading-[normal] left-[104px] text-[#17324d] text-[12px] text-center top-[9px] w-[186px]" dir="auto" data-node-id="2321:24">
              همه دوره‌ها
            </p>
          </button>
          <button className="absolute bg-white block border border-[#dbe5f0] border-solid cursor-pointer h-[42px] left-[145px] overflow-clip rounded-[8px] top-[13px] w-[210px]" data-node-id="2321:25" data-name="filter-status">
            <p className="-translate-x-1/2 [word-break:break-word] absolute font-sans font-normal h-[20px] leading-[normal] left-[104px] text-[#17324d] text-[12px] text-center top-[9px] w-[186px]" dir="auto" data-node-id="2321:26">
              همه نوع گزارش‌ها
            </p>
          </button>
          <div className="absolute bg-[#e8f5fc] h-[26px] left-[15px] overflow-clip rounded-[8px] top-[21px] w-[112px]" data-node-id="2321:27" data-name="chip">
            <p className="-translate-x-1/2 [word-break:break-word] absolute font-sans font-normal h-[20px] leading-[normal] left-[56px] text-[#2094e3] text-[11px] text-center top-[3px] w-[100px]" dir="auto" data-node-id="2321:28">
              ۵ گزارش
            </p>
          </div>
        </div>
        <div className="bg-white border border-[#dbe5f0] border-solid h-[470px] overflow-clip relative rounded-[12px] shrink-0 w-[1160px]" data-node-id="2321:29" data-name="resources-table">
          <p className="-translate-x-full [word-break:break-word] absolute font-sans font-bold leading-[normal] left-[1135px] text-[#17324d] text-[18px] text-right top-[13px] w-[416px]" dir="auto" data-node-id="2321:30">
            گزارش‌های صندوق
          </p>
          <p className="-translate-x-full [word-break:break-word] absolute font-sans font-normal h-[20px] leading-[normal] left-[1135px] text-[#60758a] text-[11px] text-right top-[43px] w-[616px]" dir="auto" data-node-id="2321:31">
            خروجی‌های مدیریتی صندوق با آخرین وضعیت منابع، سرمایه‌گذاری، سود و جریان بازگشتی قابل مشاهده است.
          </p>
          <div className="[word-break:break-word] absolute bg-[#f5f9fd] font-sans font-normal h-[38px] leading-[normal] left-[15px] overflow-clip rounded-[8px] text-[#60758a] text-[11px] text-center top-[79px] w-[1128px]" data-node-id="2321:32" data-name="table-header">
            <p className="-translate-x-1/2 absolute h-[20px] left-[968px] top-[9px] w-[272px]" dir="auto" data-node-id="2321:33">
              گزارش
            </p>
            <p className="-translate-x-1/2 absolute h-[20px] left-[732px] top-[9px] w-[160px]" dir="auto" data-node-id="2321:34">
              سود نهایی‌شده
            </p>
            <p className="-translate-x-1/2 absolute h-[20px] left-[566px] top-[9px] w-[132px]" dir="auto" data-node-id="2321:35">
              دوره
            </p>
            <p className="-translate-x-1/2 absolute h-[20px] left-[420px] top-[9px] w-[120px]" dir="auto" data-node-id="2321:36">
              آخرین به‌روزرسانی
            </p>
            <p className="-translate-x-1/2 absolute h-[20px] left-[268px] top-[9px] w-[144px]" dir="auto" data-node-id="2321:37">
              وضعیت
            </p>
            <p className="-translate-x-1/2 absolute h-[20px] left-[98px] top-[9px] w-[148px]" dir="auto" data-node-id="2321:38">
              اقدام
            </p>
          </div>
          <div className="absolute bg-white border border-[#dbe5f0] border-solid h-[52px] left-[15px] overflow-clip rounded-[8px] top-[125px] w-[1128px]" data-node-id="2321:39" data-name="resource-row">
            <p className="-translate-x-full [word-break:break-word] absolute font-sans font-normal h-[22px] leading-[normal] left-[1103px] text-[#17324d] text-[12px] text-right top-[13px] w-[272px]" dir="auto" data-node-id="2321:40">
              گزارش منابع صندوق
            </p>
            <p className="-translate-x-1/2 [word-break:break-word] absolute font-sans font-normal h-[22px] leading-[normal] left-[731px] text-[#60758a] text-[11px] text-center top-[13px] w-[160px]" dir="auto" data-node-id="2321:41">
              ۱٫۱۹۷ میلیارد تومان
            </p>
            <p className="-translate-x-1/2 [word-break:break-word] absolute font-sans font-normal h-[22px] leading-[normal] left-[565px] text-[#17324d] text-[11px] text-center top-[13px] w-[132px]" dir="auto" data-node-id="2321:42">
              تا ۱۴۰۵/۰۶
            </p>
            <p className="-translate-x-1/2 [word-break:break-word] absolute font-sans font-normal h-[22px] leading-[normal] left-[419px] text-[#60758a] text-[11px] text-center top-[13px] w-[120px]" dir="auto" data-node-id="2321:43">
              امروز
            </p>
            <div className="absolute bg-[#e8faf0] h-[26px] left-[204px] overflow-clip rounded-[8px] top-[12px] w-[126px]" data-node-id="2321:44" data-name="chip">
              <p className="-translate-x-1/2 [word-break:break-word] absolute font-sans font-normal h-[20px] leading-[normal] left-[63px] text-[#159e57] text-[11px] text-center top-[3px] w-[114px]" dir="auto" data-node-id="2321:45">
                آماده
              </p>
            </div>
            <a href="/panel/fund-manager/reports/detail" className="absolute bg-white block border border-[#dbe5f0] border-solid cursor-pointer h-[34px] left-[35px] overflow-clip rounded-[8px] top-[8px] w-[132px]" data-node-id="2321:46" data-name="action">
              <p className="-translate-x-1/2 [word-break:break-word] absolute font-sans font-normal h-[20px] leading-[normal] left-[65px] text-[#2094e3] text-[11px] text-center top-[5px] w-[120px]" dir="auto" data-node-id="2321:47">
                مشاهده
              </p>
            </a>
          </div>
          <div className="absolute bg-[#f5f9fd] border border-[#dbe5f0] border-solid h-[52px] left-[15px] overflow-clip rounded-[8px] top-[185px] w-[1128px]" data-node-id="2321:48" data-name="resource-row">
            <p className="-translate-x-full [word-break:break-word] absolute font-sans font-normal h-[22px] leading-[normal] left-[1103px] text-[#17324d] text-[12px] text-right top-[13px] w-[272px]" dir="auto" data-node-id="2321:49">
              گزارش سرمایه‌گذاری‌ها
            </p>
            <p className="-translate-x-1/2 [word-break:break-word] absolute font-sans font-normal h-[22px] leading-[normal] left-[731px] text-[#60758a] text-[11px] text-center top-[13px] w-[160px]" dir="auto" data-node-id="2321:50">
              ۶۵۰ میلیون تومان
            </p>
            <p className="-translate-x-1/2 [word-break:break-word] absolute font-sans font-normal h-[22px] leading-[normal] left-[565px] text-[#17324d] text-[11px] text-center top-[13px] w-[132px]" dir="auto" data-node-id="2321:51">
              ۱۴۰۵/۰۶
            </p>
            <p className="-translate-x-1/2 [word-break:break-word] absolute font-sans font-normal h-[22px] leading-[normal] left-[419px] text-[#60758a] text-[11px] text-center top-[13px] w-[120px]" dir="auto" data-node-id="2321:52">
              امروز
            </p>
            <div className="absolute bg-[#e8faf0] h-[26px] left-[204px] overflow-clip rounded-[8px] top-[12px] w-[126px]" data-node-id="2321:53" data-name="chip">
              <p className="-translate-x-1/2 [word-break:break-word] absolute font-sans font-normal h-[20px] leading-[normal] left-[63px] text-[#159e57] text-[11px] text-center top-[3px] w-[114px]" dir="auto" data-node-id="2321:54">
                آماده
              </p>
            </div>
            <a href="/panel/fund-manager/reports/detail" className="absolute bg-white block border border-[#dbe5f0] border-solid cursor-pointer h-[34px] left-[35px] overflow-clip rounded-[8px] top-[8px] w-[132px]" data-node-id="2321:55" data-name="action">
              <p className="-translate-x-1/2 [word-break:break-word] absolute font-sans font-normal h-[20px] leading-[normal] left-[65px] text-[#2094e3] text-[11px] text-center top-[5px] w-[120px]" dir="auto" data-node-id="2321:56">
                مشاهده
              </p>
            </a>
          </div>
          <div className="absolute bg-white border border-[#dbe5f0] border-solid h-[52px] left-[15px] overflow-clip rounded-[8px] top-[245px] w-[1128px]" data-node-id="2321:57" data-name="resource-row">
            <p className="-translate-x-full [word-break:break-word] absolute font-sans font-normal h-[22px] leading-[normal] left-[1103px] text-[#17324d] text-[12px] text-right top-[13px] w-[272px]" dir="auto" data-node-id="2321:58">
              گزارش سود و بازده
            </p>
            <p className="-translate-x-1/2 [word-break:break-word] absolute font-sans font-normal h-[22px] leading-[normal] left-[731px] text-[#60758a] text-[11px] text-center top-[13px] w-[160px]" dir="auto" data-node-id="2321:59">
              ۲۱۰ میلیون تومان
            </p>
            <p className="-translate-x-1/2 [word-break:break-word] absolute font-sans font-normal h-[22px] leading-[normal] left-[565px] text-[#17324d] text-[11px] text-center top-[13px] w-[132px]" dir="auto" data-node-id="2321:60">
              ۱۴۰۵/۰۶
            </p>
            <p className="-translate-x-1/2 [word-break:break-word] absolute font-sans font-normal h-[22px] leading-[normal] left-[419px] text-[#60758a] text-[11px] text-center top-[13px] w-[120px]" dir="auto" data-node-id="2321:61">
              ۱۴۰۵/۰۶/۳۰
            </p>
            <div className="absolute bg-[#e8faf0] h-[26px] left-[204px] overflow-clip rounded-[8px] top-[12px] w-[126px]" data-node-id="2321:62" data-name="chip">
              <p className="-translate-x-1/2 [word-break:break-word] absolute font-sans font-normal h-[20px] leading-[normal] left-[63px] text-[#159e57] text-[11px] text-center top-[3px] w-[114px]" dir="auto" data-node-id="2321:63">
                نهایی
              </p>
            </div>
            <a href="/panel/fund-manager/reports/detail" className="absolute bg-white block border border-[#dbe5f0] border-solid cursor-pointer h-[34px] left-[35px] overflow-clip rounded-[8px] top-[8px] w-[132px]" data-node-id="2321:64" data-name="action">
              <p className="-translate-x-1/2 [word-break:break-word] absolute font-sans font-normal h-[20px] leading-[normal] left-[65px] text-[#2094e3] text-[11px] text-center top-[5px] w-[120px]" dir="auto" data-node-id="2321:65">
                مشاهده
              </p>
            </a>
          </div>
          <div className="absolute bg-[#f5f9fd] border border-[#dbe5f0] border-solid h-[52px] left-[15px] overflow-clip rounded-[8px] top-[305px] w-[1128px]" data-node-id="2321:66" data-name="resource-row">
            <p className="-translate-x-full [word-break:break-word] absolute font-sans font-normal h-[22px] leading-[normal] left-[1103px] text-[#17324d] text-[12px] text-right top-[13px] w-[272px]" dir="auto" data-node-id="2321:67">
              گزارش بازگشت به چرخه
            </p>
            <p className="-translate-x-1/2 [word-break:break-word] absolute font-sans font-normal h-[22px] leading-[normal] left-[731px] text-[#60758a] text-[11px] text-center top-[13px] w-[160px]" dir="auto" data-node-id="2321:68">
              ۱۴۷ میلیون تومان
            </p>
            <p className="-translate-x-1/2 [word-break:break-word] absolute font-sans font-normal h-[22px] leading-[normal] left-[565px] text-[#17324d] text-[11px] text-center top-[13px] w-[132px]" dir="auto" data-node-id="2321:69">
              ۱۴۰۵/۰۶
            </p>
            <p className="-translate-x-1/2 [word-break:break-word] absolute font-sans font-normal h-[22px] leading-[normal] left-[419px] text-[#60758a] text-[11px] text-center top-[13px] w-[120px]" dir="auto" data-node-id="2321:70">
              امروز
            </p>
            <div className="absolute bg-[#e8faf0] h-[26px] left-[204px] overflow-clip rounded-[8px] top-[12px] w-[126px]" data-node-id="2321:71" data-name="chip">
              <p className="-translate-x-1/2 [word-break:break-word] absolute font-sans font-normal h-[20px] leading-[normal] left-[63px] text-[#159e57] text-[11px] text-center top-[3px] w-[114px]" dir="auto" data-node-id="2321:72">
                آماده
              </p>
            </div>
            <a href="/panel/fund-manager/reports/detail" className="absolute bg-white block border border-[#dbe5f0] border-solid cursor-pointer h-[34px] left-[35px] overflow-clip rounded-[8px] top-[8px] w-[132px]" data-node-id="2321:73" data-name="action">
              <p className="-translate-x-1/2 [word-break:break-word] absolute font-sans font-normal h-[20px] leading-[normal] left-[65px] text-[#2094e3] text-[11px] text-center top-[5px] w-[120px]" dir="auto" data-node-id="2321:74">
                مشاهده
              </p>
            </a>
          </div>
          <div className="absolute bg-white border border-[#dbe5f0] border-solid h-[52px] left-[15px] overflow-clip rounded-[8px] top-[365px] w-[1128px]" data-node-id="2321:75" data-name="resource-row">
            <p className="-translate-x-full [word-break:break-word] absolute font-sans font-normal h-[22px] leading-[normal] left-[1103px] text-[#17324d] text-[12px] text-right top-[13px] w-[272px]" dir="auto" data-node-id="2321:76">
              گزارش تقسیم سود ۷۰/۳۰
            </p>
            <p className="-translate-x-1/2 [word-break:break-word] absolute font-sans font-normal h-[22px] leading-[normal] left-[731px] text-[#60758a] text-[11px] text-center top-[13px] w-[160px]" dir="auto" data-node-id="2321:77">
              ۱۴۷ / ۶۳ میلیون
            </p>
            <p className="-translate-x-1/2 [word-break:break-word] absolute font-sans font-normal h-[22px] leading-[normal] left-[565px] text-[#17324d] text-[11px] text-center top-[13px] w-[132px]" dir="auto" data-node-id="2321:78">
              ۱۴۰۵/۰۵ تا ۱۴۰۵/۰۶
            </p>
            <p className="-translate-x-1/2 [word-break:break-word] absolute font-sans font-normal h-[22px] leading-[normal] left-[419px] text-[#60758a] text-[11px] text-center top-[13px] w-[120px]" dir="auto" data-node-id="2321:79">
              امروز
            </p>
            <div className="absolute bg-[#e8faf0] h-[26px] left-[204px] overflow-clip rounded-[8px] top-[12px] w-[126px]" data-node-id="2321:80" data-name="chip">
              <p className="-translate-x-1/2 [word-break:break-word] absolute font-sans font-normal h-[20px] leading-[normal] left-[63px] text-[#159e57] text-[11px] text-center top-[3px] w-[114px]" dir="auto" data-node-id="2321:81">
                آماده
              </p>
            </div>
            <a href="/panel/fund-manager/reports/detail" className="absolute bg-white block border border-[#dbe5f0] border-solid cursor-pointer h-[34px] left-[35px] overflow-clip rounded-[8px] top-[8px] w-[132px]" data-node-id="2321:82" data-name="action">
              <p className="-translate-x-1/2 [word-break:break-word] absolute font-sans font-normal h-[20px] leading-[normal] left-[65px] text-[#2094e3] text-[11px] text-center top-[5px] w-[120px]" dir="auto" data-node-id="2321:83">
                مشاهده
              </p>
            </a>
          </div>
          <div className="absolute bg-[#f5f9fd] h-[30px] left-[15px] overflow-clip rounded-[8px] top-[429px] w-[1128px]" data-node-id="2321:84" data-name="pagination">
            <p className="-translate-x-full [word-break:break-word] absolute font-sans font-normal h-[20px] leading-[normal] left-[1108px] text-[#60758a] text-[11px] text-right top-[5px] w-[268px]" dir="auto" data-node-id="2321:85">
              نمایش ۱ تا ۵ از ۵
            </p>
            <div className="absolute bg-white border border-[#dbe5f0] border-solid h-[34px] left-[24px] opacity-35 overflow-clip rounded-[8px] top-0 w-[84px]" data-node-id="2321:86" data-name="action-disabled">
              <p className="-translate-x-1/2 [word-break:break-word] absolute font-sans font-normal h-[20px] leading-[normal] left-[41px] text-[#2094e3] text-[11px] text-center top-[5px] w-[72px]" dir="auto" data-node-id="2321:87">
                قبلی
              </p>
            </div>
            <div className="absolute bg-[#2094e3] h-[26px] left-[116px] overflow-clip rounded-[8px] top-[2px] w-[40px]" data-node-id="2321:88" data-name="chip">
              <p className="-translate-x-1/2 [word-break:break-word] absolute font-sans font-normal h-[20px] leading-[normal] left-[20px] text-[11px] text-center text-white top-[3px] w-[28px]" data-node-id="2321:89">
                ۱
              </p>
            </div>
            <div className="absolute bg-white border border-[#dbe5f0] border-solid h-[34px] left-[164px] opacity-35 overflow-clip rounded-[8px] top-0 w-[84px]" data-node-id="2321:90" data-name="action-disabled">
              <p className="-translate-x-1/2 [word-break:break-word] absolute font-sans font-normal h-[20px] leading-[normal] left-[41px] text-[#2094e3] text-[11px] text-center top-[5px] w-[72px]" dir="auto" data-node-id="2321:91">
                بعدی
              </p>
            </div>
          </div>
        </div>
        <div className="[word-break:break-word] bg-[#e8f5fc] h-[84px] leading-[normal] overflow-clip relative rounded-[12px] shrink-0 text-right w-[1160px]" data-node-id="2321:92" data-name="scope-note">
          <p className="-translate-x-full absolute font-sans font-bold h-[26px] left-[1136px] text-[#17324d] text-[16px] top-[10px] w-[316px]" dir="auto" data-node-id="2321:93">
            دامنه گزارش‌های صندوق
          </p>
          <p className="-translate-x-full absolute font-sans font-normal h-[24px] left-[1136px] text-[#60758a] text-[12px] top-[40px] w-[1096px]" dir="auto" data-node-id="2321:94">
            این بخش خروجی‌های مدیریتی صندوق را یکجا تجمیع می‌کند؛ اسناد رسمی حسابداری، حقوقی و مالی همچنان در سوابق و مستندات مالی نگهداری می‌شوند.
          </p>
        </div>
      </div>
      <div className="bg-[#17324d] content-stretch flex flex-col gap-[10px] h-[900px] items-end pb-[18px] pt-[20px] px-[16px] relative shrink-0 w-[224px]" data-node-id="2321:95" data-name="colored-sidebar">
        <div className="bg-white content-stretch flex h-[56px] items-center justify-end overflow-clip px-[10px] py-[8px] relative rounded-[12px] shrink-0 w-[192px]" data-node-id="2321:96" data-name="brand-logo">
          <div className="h-[40px] relative shrink-0 w-[118px]" data-node-id="2321:97" data-name="ChatGPT Image ۲۹ مرداد ۱۴۰۵، ۱۵_۱۶_۳۵ 1">
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <img alt="" className="absolute h-full left-[5.28%] max-w-none top-0 w-[100.73%]" src={imgChatGptImage1} />
            </div>
          </div>
        </div>
        <div className="content-stretch flex flex-col h-[64px] items-start justify-end overflow-clip px-[8px] py-[7px] relative shrink-0 w-[192px]" data-node-id="2321:98" data-name="panel-identity">
          <p className="[word-break:break-word] font-sans font-bold h-[39px] leading-[normal] relative shrink-0 text-[13px] text-center text-white w-[176px]" dir="auto" data-node-id="2321:99">
            مدیر صندوق ماه
          </p>
        </div>
        <a href="/panel/fund-manager" className="content-stretch cursor-pointer flex gap-[10px] h-[38px] items-center justify-end overflow-clip px-[12px] relative rounded-[9px] shrink-0 w-[192px]" data-node-id="2321:100" data-name="dashboard-nav">
          <p className="[word-break:break-word] font-sans font-medium leading-[normal] relative shrink-0 text-[12px] text-right text-white w-[142px]" dir="auto" data-node-id="2321:101">
            داشبورد
          </p>
          <div className="overflow-clip relative shrink-0 w-[18px] h-[18px]" data-node-id="2321:102" data-name="dashboard-icon">
            <div className="absolute left-0 overflow-clip w-[18px] h-[18px] top-0" data-node-id="2321:103" data-name="Frame">
              <div className="absolute inset-[11.11%]" data-node-id="2321:104" data-name="Group">
                <div className="absolute inset-[-5.71%]">
                  <img alt="" className="block max-w-none w-full h-full" src={imgGroup} />
                </div>
              </div>
            </div>
          </div>
        </a>
        <a href="/panel/fund-manager/resources" className="content-stretch cursor-pointer flex gap-[10px] h-[38px] items-center justify-end overflow-clip px-[12px] relative rounded-[9px] shrink-0 w-[192px]" data-node-id="2321:109" data-name="startup-evaluations-nav">
          <p className="[word-break:break-word] font-sans font-normal leading-[normal] relative shrink-0 text-[12px] text-right text-white w-[142px]" dir="auto" data-node-id="2321:110">
            منابع صندوق
          </p>
          <div className="overflow-clip relative shrink-0 w-[18px] h-[18px]" data-node-id="2321:111" data-name="users-icon">
            <div className="absolute left-0 overflow-clip w-[18px] h-[18px] top-0" data-node-id="2321:112" data-name="Frame">
              <div className="absolute inset-[22.22%_13.89%_19.44%_13.89%]" data-node-id="2321:113" data-name="Group">
                <div className="absolute inset-[-7.62%_-6.15%]">
                  <img alt="" className="block max-w-none w-full h-full" src={imgGroup1} />
                </div>
              </div>
            </div>
          </div>
        </a>
        <a href="/panel/fund-manager/investments" className="content-stretch cursor-pointer flex gap-[10px] h-[38px] items-center justify-end overflow-clip px-[12px] relative rounded-[9px] shrink-0 w-[192px]" data-node-id="2321:116" data-name="project-evaluations-nav">
          <p className="[word-break:break-word] font-sans font-normal leading-[normal] relative shrink-0 text-[12px] text-right text-white w-[142px]" dir="auto" data-node-id="2321:117">
            سرمایه‌گذاری‌ها
          </p>
          <div className="overflow-clip relative shrink-0 w-[18px] h-[18px]" data-node-id="2321:118" data-name="project-icon">
            <div className="absolute left-0 overflow-clip w-[18px] h-[18px] top-0" data-node-id="2321:119" data-name="Frame">
              <div className="absolute inset-[27.78%_19.44%_22.22%_16.67%]" data-node-id="2321:120" data-name="Group">
                <div className="absolute inset-[-8.89%_-6.96%]">
                  <img alt="" className="block max-w-none w-full h-full" src={imgGroup2} />
                </div>
              </div>
            </div>
          </div>
        </a>
        <a href="/panel/fund-manager/profit-returns" className="content-stretch cursor-pointer flex gap-[10px] h-[38px] items-center justify-end overflow-clip px-[12px] relative rounded-[9px] shrink-0 w-[192px]" data-node-id="2321:124" data-name="milestone-evaluations-nav">
          <p className="[word-break:break-word] font-sans font-normal leading-[normal] relative shrink-0 text-[12px] text-right text-white w-[142px]" dir="auto" data-node-id="2321:125">
            سود و بازده
          </p>
          <div className="overflow-clip relative shrink-0 w-[18px] h-[18px]" data-node-id="2321:126" data-name="milestone-icon">
            <div className="absolute left-0 overflow-clip w-[18px] h-[18px] top-0" data-node-id="2321:127" data-name="Frame">
              <div className="absolute inset-[13.89%_11.11%]" data-node-id="2321:128" data-name="Group">
                <div className="absolute inset-[-6.15%_-5.71%]">
                  <img alt="" className="block max-w-none w-full h-full" src={imgGroup3} />
                </div>
              </div>
            </div>
          </div>
        </a>
        <a href="/panel/fund-manager/cycle-returns" className="content-stretch cursor-pointer flex gap-[10px] h-[38px] items-center justify-end overflow-clip px-[12px] relative rounded-[9px] shrink-0 w-[192px]" data-node-id="2321:133" data-name="reports-nav">
          <p className="[word-break:break-word] font-sans font-normal leading-[normal] relative shrink-0 text-[12px] text-right text-white w-[142px]" dir="auto" data-node-id="2321:134">
            بازگشت به چرخه
          </p>
          <div className="overflow-clip relative shrink-0 w-[18px] h-[18px]" data-node-id="2321:135" data-name="reports-icon">
            <div className="absolute left-0 overflow-clip w-[18px] h-[18px] top-0" data-node-id="2321:136" data-name="Frame">
              <div className="absolute inset-[13.89%_22.22%_16.67%_22.22%]" data-node-id="2321:137" data-name="Group">
                <div className="absolute inset-[-6.4%_-8%]">
                  <img alt="" className="block max-w-none w-full h-full" src={imgGroup4} />
                </div>
              </div>
            </div>
          </div>
        </a>
        <a href="/panel/fund-manager/profit-split" className="content-stretch cursor-pointer flex gap-[10px] h-[38px] items-center justify-end overflow-clip px-[12px] relative rounded-[9px] shrink-0 w-[192px]" data-node-id="2321:141" data-name="revenues-nav">
          <p className="[word-break:break-word] font-sans font-normal leading-[normal] relative shrink-0 text-[12px] text-right text-white w-[142px]" dir="auto" data-node-id="2321:142">
            تقسیم سود ۷۰/۳۰
          </p>
          <div className="overflow-clip relative shrink-0 w-[18px] h-[18px]" data-node-id="2321:143" data-name="history-icon">
            <div className="absolute left-0 overflow-clip w-[18px] h-[18px] top-0" data-node-id="2321:144" data-name="Frame">
              <div className="absolute inset-[13.89%_16.67%]" data-node-id="2321:145" data-name="Group">
                <div className="absolute inset-[-6.15%_-6.67%]">
                  <img alt="" className="block max-w-none w-full h-full" src={imgGroup5} />
                </div>
              </div>
            </div>
          </div>
        </a>
        <div className="bg-[#2094e3] content-stretch flex gap-[10px] h-[38px] items-center justify-end overflow-clip px-[12px] relative rounded-[9px] shrink-0 w-[192px]" data-node-id="2321:148" data-name="evaluation-history-nav">
          <p className="[word-break:break-word] font-sans font-normal leading-[normal] relative shrink-0 text-[12px] text-right text-white w-[142px]" dir="auto" data-node-id="2321:149">
            گزارش‌های صندوق
          </p>
          <div className="overflow-clip relative shrink-0 w-[18px] h-[18px]" data-node-id="2321:150" data-name="history-icon">
            <div className="absolute left-0 overflow-clip w-[18px] h-[18px] top-0" data-node-id="2321:151" data-name="Frame">
              <div className="absolute inset-[13.89%_16.67%]" data-node-id="2321:152" data-name="Group">
                <div className="absolute inset-[-6.15%_-6.67%]">
                  <img alt="" className="block max-w-none w-full h-full" src={imgGroup5} />
                </div>
              </div>
            </div>
          </div>
        </div>
        <a href="/panel/fund-manager/financial-history" className="content-stretch cursor-pointer flex gap-[10px] h-[38px] items-center justify-end overflow-clip px-[12px] relative rounded-[9px] shrink-0 w-[192px]" data-node-id="2321:155" data-name="settings-nav">
          <p className="[word-break:break-word] font-sans font-normal leading-[normal] relative shrink-0 text-[12px] text-right text-white w-[142px]" dir="auto" data-node-id="2321:156">
            سوابق مالی
          </p>
          <div className="relative shrink-0 w-[18px] h-[18px]" data-node-id="2321:157" data-name="settings-icon">
            <img alt="" className="absolute block inset-0 max-w-none w-full h-full" src={imgSettingsIcon} />
          </div>
        </a>
        <a href="/panel/fund-manager/funding-flow-control" className="content-stretch cursor-pointer flex gap-[10px] h-[38px] items-center justify-end overflow-clip px-[12px] relative rounded-[9px] shrink-0 w-[192px]" data-node-id="2384:327" data-name="funding-flow-control-nav">
          <p className="[word-break:break-word] font-sans font-normal leading-[normal] relative shrink-0 text-[12px] text-right text-white w-[142px]" dir="auto" data-node-id="2384:328">
            کنترل جریان تأمین مالی
          </p>
          <div className="overflow-clip relative shrink-0 w-[18px] h-[18px]" data-node-id="2384:329" data-name="users-icon">
            <div className="absolute left-0 overflow-clip w-[18px] h-[18px] top-0" data-node-id="2384:330" data-name="Frame">
              <div className="absolute inset-[22.22%_13.89%_19.44%_13.89%]" data-node-id="2384:331" data-name="Group">
                <div className="absolute inset-[-7.62%_-6.15%]">
                  <img alt="" className="block max-w-none w-full h-full" src={imgGroup1} />
                </div>
              </div>
            </div>
          </div>
        </a>
        <div className="flex-[1_0_0] min-h-px relative w-[192px]" data-node-id="2321:160" data-name="sidebar-spacer" />
        <button className="bg-white content-stretch cursor-pointer flex gap-[10px] h-[38px] items-center justify-end opacity-96 overflow-clip px-[12px] relative rounded-[9px] shrink-0 w-[192px]" data-node-id="2321:161" data-name="logout-nav">
          <p className="[word-break:break-word] font-sans font-medium leading-[normal] relative shrink-0 text-[#17324d] text-[12px] text-right w-[142px]" dir="auto" data-node-id="2321:162">
            خروج از سیستم
          </p>
          <div className="overflow-clip relative shrink-0 w-[18px] h-[18px]" data-node-id="2321:163" data-name="logout-icon">
            <div className="absolute left-0 overflow-clip w-[18px] h-[18px] top-0" data-node-id="2321:164" data-name="Frame">
              <div className="absolute inset-[16.67%_11.11%_16.67%_19.44%]" data-node-id="2321:165" data-name="Group">
                <div className="absolute inset-[-6.67%_-6.4%]">
                  <img alt="" className="block max-w-none w-full h-full" src={imgGroup6} />
                </div>
              </div>
            </div>
          </div>
        </button>
      </div>
    </div>
  );
}
