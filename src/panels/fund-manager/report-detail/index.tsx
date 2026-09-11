import "../index.css";

const imgChatGptImage1 = "/assets/fund-manager/report-detail/logo.png";
const imgGroup = "/assets/fund-manager/report-detail/dashboard.svg";
const imgGroup1 = "/assets/fund-manager/report-detail/resources.svg";
const imgGroup2 = "/assets/fund-manager/report-detail/investments.svg";
const imgGroup3 = "/assets/fund-manager/report-detail/profits.svg";
const imgGroup4 = "/assets/fund-manager/report-detail/cycle.svg";
const imgGroup5 = "/assets/fund-manager/report-detail/history.svg";
const imgSettingsIcon = "/assets/fund-manager/report-detail/settings.svg";
const imgGroup6 = "/assets/fund-manager/report-detail/logout.svg";

export default function FundManagerReportDetail() {
  return (
    <div className="fund-manager-panel bg-[#f5f8fb] content-stretch flex items-start relative w-full h-full" data-node-id="2321:169" data-name="fund-manager-report-detail">
      <div className="bg-[#f5f8fb] content-stretch flex flex-col gap-[16px] h-[900px] items-start px-[28px] py-[22px] relative shrink-0 w-[1216px]" data-node-id="2321:170" data-name="Main Content">
        <div className="h-[58px] overflow-clip relative shrink-0 w-[1160px]" data-node-id="2321:171" data-name="header">
          <p className="-translate-x-full [word-break:break-word] absolute font-sans font-bold h-[32px] leading-[normal] left-[1160px] text-[#17324d] text-[23px] text-right top-0 w-[560px]" dir="auto" data-node-id="2321:172">
            جزئیات گزارش صندوق
          </p>
          <p className="-translate-x-full [word-break:break-word] absolute font-sans font-normal h-[20px] leading-[normal] left-[1160px] text-[#60758a] text-[12px] text-right top-[34px] w-[640px]" dir="auto" data-node-id="2321:173">
            مشاهده خلاصه مدیریتی، شاخص‌های کلیدی و وضعیت مالی یک گزارش صندوق
          </p>
          <a href="/panel/fund-manager/reports" className="absolute bg-white block border border-[#dbe5f0] border-solid cursor-pointer h-[34px] left-[20px] overflow-clip rounded-[8px] top-[10px] w-[154px]" data-node-id="2321:174" data-name="action">
            <p className="-translate-x-1/2 [word-break:break-word] absolute font-sans font-normal h-[20px] leading-[normal] left-[76px] text-[#2094e3] text-[11px] text-center top-[5px] w-[142px]" dir="auto" data-node-id="2321:175">
              بازگشت به گزارش‌های صندوق
            </p>
          </a>
        </div>
        <div className="bg-white border border-[#dbe5f0] border-solid h-[126px] overflow-clip relative rounded-[12px] shrink-0 w-[1160px]" data-node-id="2321:176" data-name="resource-summary">
          <p className="-translate-x-full [word-break:break-word] absolute font-sans font-bold leading-[normal] left-[1119px] text-[#17324d] text-[19px] text-right top-[15px] w-[440px]" dir="auto" data-node-id="2321:177">
            گزارش جامع عملکرد صندوق — ۱۴۰۵/۰۶
          </p>
          <p className="-translate-x-full [word-break:break-word] absolute font-sans font-normal h-[22px] leading-[normal] left-[1119px] text-[#60758a] text-[12px] text-right top-[47px] w-[560px]" dir="auto" data-node-id="2321:178">
            خلاصه مدیریتی منابع، سرمایه‌گذاری، سود و جریان بازگشتی صندوق
          </p>
          <div className="absolute bg-[#e8faf0] h-[26px] left-[27px] overflow-clip rounded-[8px] top-[19px] w-[108px]" data-node-id="2321:179" data-name="chip">
            <p className="-translate-x-1/2 [word-break:break-word] absolute font-sans font-normal h-[20px] leading-[normal] left-[54px] text-[#149e57] text-[11px] text-center top-[3px] w-[96px]" dir="auto" data-node-id="2321:180">
              آماده
            </p>
          </div>
          <div className="[word-break:break-word] absolute bg-[#f5f9fd] font-sans font-normal h-[34px] leading-[normal] left-[27px] overflow-clip rounded-[8px] text-right top-[77px] w-[260px]" data-node-id="2321:181" data-name="summary-field">
            <p className="-translate-x-full absolute h-[20px] left-[248px] text-[#60758a] text-[10px] top-[7px] w-[108px]" dir="auto" data-node-id="2321:182">
              کل منابع ثبت‌شده
            </p>
            <p className="-translate-x-full absolute h-[20px] left-[136px] text-[#17324d] text-[11px] top-[7px] w-[128px]" dir="auto" data-node-id="2321:183">
              ۱٫۱۹۷ میلیارد تومان
            </p>
          </div>
          <div className="[word-break:break-word] absolute bg-[#f5f9fd] font-sans font-normal h-[34px] leading-[normal] left-[305px] overflow-clip rounded-[8px] text-right top-[77px] w-[260px]" data-node-id="2321:184" data-name="summary-field">
            <p className="-translate-x-full absolute h-[20px] left-[248px] text-[#60758a] text-[10px] top-[7px] w-[108px]" dir="auto" data-node-id="2321:185">
              سرمایه‌گذاری فعال
            </p>
            <p className="-translate-x-full absolute h-[20px] left-[136px] text-[#17324d] text-[11px] top-[7px] w-[128px]" dir="auto" data-node-id="2321:186">
              ۶۵۰ میلیون تومان
            </p>
          </div>
          <div className="[word-break:break-word] absolute bg-[#f5f9fd] font-sans font-normal h-[34px] leading-[normal] left-[583px] overflow-clip rounded-[8px] text-right top-[77px] w-[260px]" data-node-id="2321:187" data-name="summary-field">
            <p className="-translate-x-full absolute h-[20px] left-[248px] text-[#60758a] text-[10px] top-[7px] w-[108px]" dir="auto" data-node-id="2321:188">
              سود نهایی‌شده
            </p>
            <p className="-translate-x-full absolute h-[20px] left-[136px] text-[#17324d] text-[11px] top-[7px] w-[128px]" dir="auto" data-node-id="2321:189">
              ۱۲۰ میلیون تومان
            </p>
          </div>
          <div className="[word-break:break-word] absolute bg-[#f5f9fd] font-sans font-normal h-[34px] leading-[normal] left-[861px] overflow-clip rounded-[8px] text-right top-[77px] w-[260px]" data-node-id="2321:190" data-name="summary-field">
            <p className="-translate-x-full absolute h-[20px] left-[248px] text-[#60758a] text-[10px] top-[7px] w-[108px]" dir="auto" data-node-id="2321:191">
              تاریخ گزارش
            </p>
            <p className="-translate-x-full absolute h-[20px] left-[136px] text-[#17324d] text-[11px] top-[7px] w-[128px]" data-node-id="2321:192">
              ۱۴۰۵/۰۶/۳۰
            </p>
          </div>
        </div>
        <div className="content-stretch flex gap-[20px] h-[360px] items-start overflow-clip relative shrink-0 w-[1160px]" data-node-id="2321:193" data-name="detail-main-row">
          <div className="[word-break:break-word] bg-white border border-[#dbe5f0] border-solid h-[360px] leading-[normal] overflow-clip relative rounded-[12px] shrink-0 text-right w-[760px]" data-node-id="2321:194" data-name="source-info">
            <p className="-translate-x-full absolute font-sans font-bold left-[735px] text-[#17324d] text-[18px] top-[15px] w-[306px]" dir="auto" data-node-id="2321:195">
              اطلاعات گزارش
            </p>
            <p className="-translate-x-full absolute font-sans font-normal h-[20px] left-[735px] text-[#60758a] text-[11px] top-[45px] w-[406px]" dir="auto" data-node-id="2321:196">
              خلاصه شاخص‌های مالی و عملیاتی صندوق در دوره گزارش
            </p>
            <div className="absolute bg-[#f5f9fd] font-sans font-normal h-[50px] left-[19px] overflow-clip rounded-[8px] top-[83px] w-[340px]" data-node-id="2321:197" data-name="detail-field">
              <p className="-translate-x-full absolute h-[20px] left-[324px] text-[#60758a] text-[10px] top-[4px] w-[134px]" dir="auto" data-node-id="2321:198">
                دوره گزارش
              </p>
              <p className="-translate-x-full absolute h-[18px] left-[324px] text-[#17324d] text-[11px] top-[25px] w-[310px]" dir="auto" data-node-id="2321:199">
                ۱۴۰۵/۰۶
              </p>
            </div>
            <div className="absolute bg-[#f5f9fd] font-sans font-normal h-[50px] left-[375px] overflow-clip rounded-[8px] top-[83px] w-[340px]" data-node-id="2321:200" data-name="detail-field">
              <p className="-translate-x-full absolute h-[20px] left-[324px] text-[#60758a] text-[10px] top-[4px] w-[134px]" dir="auto" data-node-id="2321:201">
                کل منابع ثبت‌شده
              </p>
              <p className="-translate-x-full absolute h-[18px] left-[324px] text-[#17324d] text-[11px] top-[25px] w-[310px]" dir="auto" data-node-id="2321:202">
                ۱٫۱۹۷ میلیارد تومان
              </p>
            </div>
            <div className="absolute bg-[#f5f9fd] font-sans font-normal h-[50px] left-[19px] overflow-clip rounded-[8px] top-[145px] w-[340px]" data-node-id="2321:203" data-name="detail-field">
              <p className="-translate-x-full absolute h-[20px] left-[324px] text-[#60758a] text-[10px] top-[4px] w-[134px]" dir="auto" data-node-id="2321:204">
                سرمایه‌گذاری فعال
              </p>
              <p className="-translate-x-full absolute h-[18px] left-[324px] text-[#17324d] text-[11px] top-[25px] w-[310px]" dir="auto" data-node-id="2321:205">
                ۶۵۰ میلیون تومان
              </p>
            </div>
            <div className="absolute bg-[#f5f9fd] font-sans font-normal h-[50px] left-[375px] overflow-clip rounded-[8px] top-[145px] w-[340px]" data-node-id="2321:206" data-name="detail-field">
              <p className="-translate-x-full absolute h-[20px] left-[324px] text-[#60758a] text-[10px] top-[4px] w-[134px]" dir="auto" data-node-id="2321:207">
                سود نهایی‌شده
              </p>
              <p className="-translate-x-full absolute h-[18px] left-[324px] text-[#17324d] text-[11px] top-[25px] w-[310px]" dir="auto" data-node-id="2321:208">
                ۱۲۰ میلیون تومان
              </p>
            </div>
            <div className="absolute bg-[#f5f9fd] font-sans font-normal h-[50px] left-[19px] overflow-clip rounded-[8px] top-[207px] w-[340px]" data-node-id="2321:209" data-name="detail-field">
              <p className="-translate-x-full absolute h-[20px] left-[324px] text-[#60758a] text-[10px] top-[4px] w-[134px]" dir="auto" data-node-id="2321:210">
                سهم درآمد ماه
              </p>
              <p className="-translate-x-full absolute h-[18px] left-[324px] text-[#17324d] text-[11px] top-[25px] w-[310px]" dir="auto" data-node-id="2321:211">
                ۳۶ میلیون تومان
              </p>
            </div>
            <div className="absolute bg-[#f5f9fd] font-sans font-normal h-[50px] left-[375px] overflow-clip rounded-[8px] top-[207px] w-[340px]" data-node-id="2321:212" data-name="detail-field">
              <p className="-translate-x-full absolute h-[20px] left-[324px] text-[#60758a] text-[10px] top-[4px] w-[134px]" dir="auto" data-node-id="2321:213">
                بازگشت به چرخه
              </p>
              <p className="-translate-x-full absolute h-[18px] left-[324px] text-[#17324d] text-[11px] top-[25px] w-[310px]" dir="auto" data-node-id="2321:214">
                ۸۴ میلیون تومان
              </p>
            </div>
            <div className="absolute bg-[#f5f9fd] font-sans font-normal h-[50px] left-[19px] overflow-clip rounded-[8px] top-[269px] w-[340px]" data-node-id="2321:215" data-name="detail-field">
              <p className="-translate-x-full absolute h-[20px] left-[324px] text-[#60758a] text-[10px] top-[4px] w-[134px]" dir="auto" data-node-id="2321:216">
                نوع گزارش
              </p>
              <p className="-translate-x-full absolute h-[18px] left-[324px] text-[#17324d] text-[11px] top-[25px] w-[310px]" dir="auto" data-node-id="2321:217">
                جامع عملکرد صندوق
              </p>
            </div>
            <div className="absolute bg-[#f5f9fd] font-sans font-normal h-[50px] left-[375px] overflow-clip rounded-[8px] top-[269px] w-[340px]" data-node-id="2321:218" data-name="detail-field">
              <p className="-translate-x-full absolute h-[20px] left-[324px] text-[#60758a] text-[10px] top-[4px] w-[134px]" dir="auto" data-node-id="2321:219">
                شناسه گزارش
              </p>
              <p className="-translate-x-full absolute h-[18px] left-[324px] text-[#17324d] text-[11px] top-[25px] w-[310px]" data-node-id="2321:220">
                RPT-1405-06
              </p>
            </div>
          </div>
          <div className="bg-white border border-[#dbe5f0] border-solid h-[360px] overflow-clip relative rounded-[12px] shrink-0 w-[380px]" data-node-id="2321:221" data-name="calculation-flow">
            <p className="-translate-x-full [word-break:break-word] absolute font-sans font-bold leading-[normal] left-[355px] text-[#17324d] text-[18px] text-right top-[15px] w-[196px]" dir="auto" data-node-id="2321:222">
              ساختار گزارش صندوق
            </p>
            <p className="-translate-x-full [word-break:break-word] absolute font-sans font-normal h-[20px] leading-[normal] left-[355px] text-[#60758a] text-[11px] text-right top-[47px] w-[276px]" dir="auto" data-node-id="2321:223">
              جمع‌بندی منابع، سرمایه‌گذاری و نتیجه مالی دوره
            </p>
            <div className="absolute bg-[#e8f5fc] h-[26px] left-[307px] overflow-clip rounded-[8px] top-[93px] w-[40px]" data-node-id="2321:224" data-name="chip">
              <p className="-translate-x-1/2 [word-break:break-word] absolute font-sans font-normal h-[20px] leading-[normal] left-[20px] text-[#2094e3] text-[11px] text-center top-[3px] w-[28px]" data-node-id="2321:225">
                ۱
              </p>
            </div>
            <p className="-translate-x-full [word-break:break-word] absolute font-sans font-normal h-[24px] leading-[normal] left-[293px] text-[#17324d] text-[12px] text-right top-[85px] w-[184px]" dir="auto" data-node-id="2321:226">
              منابع صندوق
            </p>
            <p className="-translate-x-full [word-break:break-word] absolute font-sans font-normal h-[22px] leading-[normal] left-[293px] text-[#60758a] text-[11px] text-right top-[113px] w-[184px]" dir="auto" data-node-id="2321:227">
              ۱٫۱۹۷ میلیارد تومان
            </p>
            <div className="absolute bg-[#dbe5f0] h-[24px] left-[326px] rounded-[1px] top-[135px] w-[2px]" data-node-id="2321:228" data-name="connector" />
            <div className="absolute bg-[#e8f5fc] h-[26px] left-[307px] overflow-clip rounded-[8px] top-[169px] w-[40px]" data-node-id="2321:229" data-name="chip">
              <p className="-translate-x-1/2 [word-break:break-word] absolute font-sans font-normal h-[20px] leading-[normal] left-[20px] text-[#2094e3] text-[11px] text-center top-[3px] w-[28px]" data-node-id="2321:230">
                ۲
              </p>
            </div>
            <p className="-translate-x-full [word-break:break-word] absolute font-sans font-normal h-[24px] leading-[normal] left-[293px] text-[#17324d] text-[12px] text-right top-[161px] w-[184px]" dir="auto" data-node-id="2321:231">
              سرمایه‌گذاری
            </p>
            <p className="-translate-x-full [word-break:break-word] absolute font-sans font-normal h-[22px] leading-[normal] left-[293px] text-[#60758a] text-[11px] text-right top-[189px] w-[184px]" dir="auto" data-node-id="2321:232">
              ۶۵۰ میلیون تومان
            </p>
            <div className="absolute bg-[#dbe5f0] h-[24px] left-[326px] rounded-[1px] top-[211px] w-[2px]" data-node-id="2321:233" data-name="connector" />
            <div className="absolute bg-[#e8f5fc] h-[26px] left-[307px] overflow-clip rounded-[8px] top-[245px] w-[40px]" data-node-id="2321:234" data-name="chip">
              <p className="-translate-x-1/2 [word-break:break-word] absolute font-sans font-normal h-[20px] leading-[normal] left-[20px] text-[#2094e3] text-[11px] text-center top-[3px] w-[28px]" data-node-id="2321:235">
                ۳
              </p>
            </div>
            <p className="-translate-x-full [word-break:break-word] absolute font-sans font-normal h-[24px] leading-[normal] left-[293px] text-[#17324d] text-[12px] text-right top-[237px] w-[184px]" dir="auto" data-node-id="2321:236">
              سود و تقسیم
            </p>
            <p className="-translate-x-full [word-break:break-word] absolute font-sans font-normal h-[22px] leading-[normal] left-[293px] text-[#60758a] text-[11px] text-right top-[265px] w-[184px]" dir="auto" data-node-id="2321:237">
              ۱۲۰ / ۸۴ / ۳۶ میلیون تومان
            </p>
          </div>
        </div>
        <div className="bg-[#e8f5fc] h-[112px] overflow-clip relative rounded-[12px] shrink-0 w-[1160px]" data-node-id="2321:238" data-name="audit-note">
          <p className="-translate-x-full [word-break:break-word] absolute font-sans font-bold h-[26px] leading-[normal] left-[1136px] text-[#17324d] text-[16px] text-right top-[14px] w-[316px]" dir="auto" data-node-id="2321:239">
            ماهیت گزارش
          </p>
          <p className="-translate-x-full [word-break:break-word] absolute font-sans font-normal h-[44px] leading-[normal] left-[1136px] text-[#60758a] text-[12px] text-right top-[44px] w-[1096px]" dir="auto" data-node-id="2321:240">
            این صفحه یک خروجی مدیریتی از داده‌های ثبت‌شده صندوق است و جایگزین دفاتر رسمی، اسناد حسابداری یا مستندات حقوقی و مالی مصوب نیست.
          </p>
          <div className="absolute bg-[#e8faf0] h-[26px] left-[40px] overflow-clip rounded-[8px] top-[78px] w-[168px]" data-node-id="2321:241" data-name="chip">
            <p className="-translate-x-1/2 [word-break:break-word] absolute font-sans font-normal h-[20px] leading-[normal] left-[84px] text-[#149e57] text-[11px] text-center top-[3px] w-[156px]" dir="auto" data-node-id="2321:242">
              گزارش آماده
            </p>
          </div>
        </div>
        <div className="bg-white border border-[#dbe5f0] border-solid h-[110px] overflow-clip relative rounded-[12px] shrink-0 w-[1160px]" data-node-id="2321:243" data-name="registration-history">
          <p className="-translate-x-full [word-break:break-word] absolute font-sans font-bold h-[26px] leading-[normal] left-[1135px] text-[#17324d] text-[16px] text-right top-[13px] w-[236px]" dir="auto" data-node-id="2321:244">
            سوابق گزارش
          </p>
          <p className="-translate-x-full [word-break:break-word] absolute font-sans font-normal h-[22px] leading-[normal] left-[1135px] text-[#60758a] text-[11px] text-right top-[47px] w-[596px]" dir="auto" data-node-id="2321:245">
            ۱۴۰۵/۰۶/۳۰ — تولید گزارش جامع عملکرد صندوق
          </p>
          <p className="-translate-x-full [word-break:break-word] absolute font-sans font-normal h-[22px] leading-[normal] left-[1135px] text-[#60758a] text-[11px] text-right top-[73px] w-[596px]" dir="auto" data-node-id="2321:246">
            امروز — به‌روزرسانی شاخص‌های منابع، سرمایه‌گذاری و سود
          </p>
          <div className="absolute bg-[#e8faf0] h-[26px] left-[29px] overflow-clip rounded-[8px] top-[41px] w-[120px]" data-node-id="2321:247" data-name="chip">
            <p className="-translate-x-1/2 [word-break:break-word] absolute font-sans font-normal h-[20px] leading-[normal] left-[60px] text-[#149e57] text-[11px] text-center top-[3px] w-[108px]" dir="auto" data-node-id="2321:248">
              آماده
            </p>
          </div>
        </div>
      </div>
      <div className="bg-[#17324d] content-stretch flex flex-col gap-[10px] h-[900px] items-end pb-[18px] pt-[20px] px-[16px] relative shrink-0 w-[224px]" data-node-id="2321:249" data-name="colored-sidebar">
        <div className="bg-white content-stretch flex h-[56px] items-center justify-end overflow-clip px-[10px] py-[8px] relative rounded-[12px] shrink-0 w-[192px]" data-node-id="2321:250" data-name="brand-logo">
          <div className="h-[40px] relative shrink-0 w-[118px]" data-node-id="2321:251" data-name="ChatGPT Image ۲۹ مرداد ۱۴۰۵، ۱۵_۱۶_۳۵ 1">
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <img alt="" className="absolute h-full left-[5.28%] max-w-none top-0 w-[100.73%]" src={imgChatGptImage1} />
            </div>
          </div>
        </div>
        <div className="content-stretch flex flex-col h-[64px] items-start justify-end overflow-clip px-[8px] py-[7px] relative shrink-0 w-[192px]" data-node-id="2321:252" data-name="panel-identity">
          <p className="[word-break:break-word] font-sans font-bold h-[39px] leading-[normal] relative shrink-0 text-[13px] text-center text-white w-[176px]" dir="auto" data-node-id="2321:253">
            مدیر صندوق ماه
          </p>
        </div>
        <a href="/panel/fund-manager" className="content-stretch cursor-pointer flex gap-[10px] h-[38px] items-center justify-end overflow-clip px-[12px] relative rounded-[9px] shrink-0 w-[192px]" data-node-id="2321:254" data-name="dashboard-nav">
          <p className="[word-break:break-word] font-sans font-medium leading-[normal] relative shrink-0 text-[12px] text-right text-white w-[142px]" dir="auto" data-node-id="2321:255">
            داشبورد
          </p>
          <div className="overflow-clip relative shrink-0 w-[18px] h-[18px]" data-node-id="2321:256" data-name="dashboard-icon">
            <div className="absolute left-0 overflow-clip w-[18px] h-[18px] top-0" data-node-id="2321:257" data-name="Frame">
              <div className="absolute inset-[11.11%]" data-node-id="2321:258" data-name="Group">
                <div className="absolute inset-[-5.71%]">
                  <img alt="" className="block max-w-none w-full h-full" src={imgGroup} />
                </div>
              </div>
            </div>
          </div>
        </a>
        <a href="/panel/fund-manager/resources" className="content-stretch cursor-pointer flex gap-[10px] h-[38px] items-center justify-end overflow-clip px-[12px] relative rounded-[9px] shrink-0 w-[192px]" data-node-id="2321:263" data-name="startup-evaluations-nav">
          <p className="[word-break:break-word] font-sans font-normal leading-[normal] relative shrink-0 text-[12px] text-right text-white w-[142px]" dir="auto" data-node-id="2321:264">
            منابع صندوق
          </p>
          <div className="overflow-clip relative shrink-0 w-[18px] h-[18px]" data-node-id="2321:265" data-name="users-icon">
            <div className="absolute left-0 overflow-clip w-[18px] h-[18px] top-0" data-node-id="2321:266" data-name="Frame">
              <div className="absolute inset-[22.22%_13.89%_19.44%_13.89%]" data-node-id="2321:267" data-name="Group">
                <div className="absolute inset-[-7.62%_-6.15%]">
                  <img alt="" className="block max-w-none w-full h-full" src={imgGroup1} />
                </div>
              </div>
            </div>
          </div>
        </a>
        <a href="/panel/fund-manager/investments" className="content-stretch cursor-pointer flex gap-[10px] h-[38px] items-center justify-end overflow-clip px-[12px] relative rounded-[9px] shrink-0 w-[192px]" data-node-id="2321:270" data-name="project-evaluations-nav">
          <p className="[word-break:break-word] font-sans font-normal leading-[normal] relative shrink-0 text-[12px] text-right text-white w-[142px]" dir="auto" data-node-id="2321:271">
            سرمایه‌گذاری‌ها
          </p>
          <div className="overflow-clip relative shrink-0 w-[18px] h-[18px]" data-node-id="2321:272" data-name="project-icon">
            <div className="absolute left-0 overflow-clip w-[18px] h-[18px] top-0" data-node-id="2321:273" data-name="Frame">
              <div className="absolute inset-[27.78%_19.44%_22.22%_16.67%]" data-node-id="2321:274" data-name="Group">
                <div className="absolute inset-[-8.89%_-6.96%]">
                  <img alt="" className="block max-w-none w-full h-full" src={imgGroup2} />
                </div>
              </div>
            </div>
          </div>
        </a>
        <a href="/panel/fund-manager/profit-returns" className="content-stretch cursor-pointer flex gap-[10px] h-[38px] items-center justify-end overflow-clip px-[12px] relative rounded-[9px] shrink-0 w-[192px]" data-node-id="2321:278" data-name="milestone-evaluations-nav">
          <p className="[word-break:break-word] font-sans font-normal leading-[normal] relative shrink-0 text-[12px] text-right text-white w-[142px]" dir="auto" data-node-id="2321:279">
            سود و بازده
          </p>
          <div className="overflow-clip relative shrink-0 w-[18px] h-[18px]" data-node-id="2321:280" data-name="milestone-icon">
            <div className="absolute left-0 overflow-clip w-[18px] h-[18px] top-0" data-node-id="2321:281" data-name="Frame">
              <div className="absolute inset-[13.89%_11.11%]" data-node-id="2321:282" data-name="Group">
                <div className="absolute inset-[-6.15%_-5.71%]">
                  <img alt="" className="block max-w-none w-full h-full" src={imgGroup3} />
                </div>
              </div>
            </div>
          </div>
        </a>
        <a href="/panel/fund-manager/cycle-returns" className="content-stretch cursor-pointer flex gap-[10px] h-[38px] items-center justify-end overflow-clip px-[12px] relative rounded-[9px] shrink-0 w-[192px]" data-node-id="2321:287" data-name="reports-nav">
          <p className="[word-break:break-word] font-sans font-normal leading-[normal] relative shrink-0 text-[12px] text-right text-white w-[142px]" dir="auto" data-node-id="2321:288">
            بازگشت به چرخه
          </p>
          <div className="overflow-clip relative shrink-0 w-[18px] h-[18px]" data-node-id="2321:289" data-name="reports-icon">
            <div className="absolute left-0 overflow-clip w-[18px] h-[18px] top-0" data-node-id="2321:290" data-name="Frame">
              <div className="absolute inset-[13.89%_22.22%_16.67%_22.22%]" data-node-id="2321:291" data-name="Group">
                <div className="absolute inset-[-6.4%_-8%]">
                  <img alt="" className="block max-w-none w-full h-full" src={imgGroup4} />
                </div>
              </div>
            </div>
          </div>
        </a>
        <a href="/panel/fund-manager/profit-split" className="content-stretch cursor-pointer flex gap-[10px] h-[38px] items-center justify-end overflow-clip px-[12px] relative rounded-[9px] shrink-0 w-[192px]" data-node-id="2321:295" data-name="revenues-nav">
          <p className="[word-break:break-word] font-sans font-normal leading-[normal] relative shrink-0 text-[12px] text-right text-white w-[142px]" dir="auto" data-node-id="2321:296">
            تقسیم سود ۷۰/۳۰
          </p>
          <div className="overflow-clip relative shrink-0 w-[18px] h-[18px]" data-node-id="2321:297" data-name="history-icon">
            <div className="absolute left-0 overflow-clip w-[18px] h-[18px] top-0" data-node-id="2321:298" data-name="Frame">
              <div className="absolute inset-[13.89%_16.67%]" data-node-id="2321:299" data-name="Group">
                <div className="absolute inset-[-6.15%_-6.67%]">
                  <img alt="" className="block max-w-none w-full h-full" src={imgGroup5} />
                </div>
              </div>
            </div>
          </div>
        </a>
        <a className="bg-[#2094e3] content-stretch cursor-pointer flex gap-[10px] h-[38px] items-center justify-end overflow-clip px-[12px] relative rounded-[9px] shrink-0 w-[192px]" data-node-id="2321:302" data-name="evaluation-history-nav">
          <p className="[word-break:break-word] font-sans font-normal leading-[normal] relative shrink-0 text-[12px] text-right text-white w-[142px]" dir="auto" data-node-id="2321:303">
            گزارش‌های صندوق
          </p>
          <div className="overflow-clip relative shrink-0 w-[18px] h-[18px]" data-node-id="2321:304" data-name="history-icon">
            <div className="absolute left-0 overflow-clip w-[18px] h-[18px] top-0" data-node-id="2321:305" data-name="Frame">
              <div className="absolute inset-[13.89%_16.67%]" data-node-id="2321:306" data-name="Group">
                <div className="absolute inset-[-6.15%_-6.67%]">
                  <img alt="" className="block max-w-none w-full h-full" src={imgGroup5} />
                </div>
              </div>
            </div>
          </div>
        </a>
        <a href="/panel/fund-manager/financial-history" className="content-stretch cursor-pointer flex gap-[10px] h-[38px] items-center justify-end overflow-clip px-[12px] relative rounded-[9px] shrink-0 w-[192px]" data-node-id="2321:309" data-name="settings-nav">
          <p className="[word-break:break-word] font-sans font-normal leading-[normal] relative shrink-0 text-[12px] text-right text-white w-[142px]" dir="auto" data-node-id="2321:310">
            سوابق مالی
          </p>
          <div className="relative shrink-0 w-[18px] h-[18px]" data-node-id="2321:311" data-name="settings-icon">
            <img alt="" className="absolute block inset-0 max-w-none w-full h-full" src={imgSettingsIcon} />
          </div>
        </a>
        <a href="/panel/fund-manager/funding-flow-control" className="content-stretch cursor-pointer flex gap-[10px] h-[38px] items-center justify-end overflow-clip px-[12px] relative rounded-[9px] shrink-0 w-[192px]" data-node-id="2384:334" data-name="funding-flow-control-nav">
          <p className="[word-break:break-word] font-sans font-normal leading-[normal] relative shrink-0 text-[12px] text-right text-white w-[142px]" dir="auto" data-node-id="2384:335">
            کنترل جریان تأمین مالی
          </p>
          <div className="overflow-clip relative shrink-0 w-[18px] h-[18px]" data-node-id="2384:336" data-name="users-icon">
            <div className="absolute left-0 overflow-clip w-[18px] h-[18px] top-0" data-node-id="2384:337" data-name="Frame">
              <div className="absolute inset-[22.22%_13.89%_19.44%_13.89%]" data-node-id="2384:338" data-name="Group">
                <div className="absolute inset-[-7.62%_-6.15%]">
                  <img alt="" className="block max-w-none w-full h-full" src={imgGroup1} />
                </div>
              </div>
            </div>
          </div>
        </a>
        <div className="flex-[1_0_0] min-h-px relative w-[192px]" data-node-id="2321:314" data-name="sidebar-spacer" />
        <button className="bg-white content-stretch cursor-pointer flex gap-[10px] h-[38px] items-center justify-end opacity-96 overflow-clip px-[12px] relative rounded-[9px] shrink-0 w-[192px]" data-node-id="2321:315" data-name="logout-nav">
          <p className="[word-break:break-word] font-sans font-medium leading-[normal] relative shrink-0 text-[#17324d] text-[12px] text-right w-[142px]" dir="auto" data-node-id="2321:316">
            خروج از سیستم
          </p>
          <div className="overflow-clip relative shrink-0 w-[18px] h-[18px]" data-node-id="2321:317" data-name="logout-icon">
            <div className="absolute left-0 overflow-clip w-[18px] h-[18px] top-0" data-node-id="2321:318" data-name="Frame">
              <div className="absolute inset-[16.67%_11.11%_16.67%_19.44%]" data-node-id="2321:319" data-name="Group">
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