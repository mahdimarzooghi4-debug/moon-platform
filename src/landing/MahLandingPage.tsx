import {PublicProjectHighlights} from "../features/projects/PublicProjectCatalog";
import TrustedCompanyCarousel from "../shared/TrustedCompanyCarousel";
import React from "react";
import "./index.css";
import MoonIntroDialog from "./MoonIntroDialog";
import { getPublicLandingKpis } from "../impact/api";
import { listPublicNews, publicNewsImageUrl } from "../features/admin-panel/management-api";

const integerFormatter = new Intl.NumberFormat("fa-IR", { maximumFractionDigits: 0 });
const decimalFormatter = new Intl.NumberFormat("fa-IR", { maximumFractionDigits: 1 });
const newsDateFormatter = new Intl.DateTimeFormat("fa-IR", { year: "numeric", month: "long", day: "numeric" });

type LandingKpiView = {
  startupCount: number;
  activeProjectCount: number;
  beneficiaryCount: number;
  jobsCreated: number;
  fundingBillionToman: number;
};

export default function Main() {
  const [introOpen, setIntroOpen] = React.useState(false);
  const [landingKpis, setLandingKpis] = React.useState<LandingKpiView | null>(null);
  const [news, setNews] = React.useState<Awaited<ReturnType<typeof listPublicNews>> | null>(null);
  const [newsFailed,setNewsFailed] = React.useState(false);

  React.useEffect(() => {
    let cancelled = false;

    getPublicLandingKpis()
      .then((data) => {
        if (cancelled) return;
        const irrFundingMinor = data.funding
          .filter((item) => item.currency.toUpperCase() === "IRR")
          .reduce((sum, item) => sum + item.amountMinor, 0);

        setLandingKpis({
          startupCount: data.startupCount,
          activeProjectCount: data.activeProjectCount,
          beneficiaryCount: data.beneficiaryCount,
          jobsCreated: data.jobsCreated,
          fundingBillionToman: irrFundingMinor / 10_000_000_000,
        });
      })
      .catch(() => {
        if (!cancelled) setLandingKpis(null);
      });

    return () => {
      cancelled = true;
    };
  }, []);


  React.useEffect(() => {
    let cancelled = false;
    listPublicNews()
      .then((items) => { if (!cancelled) setNews(items); })
      .catch(() => { if (!cancelled) setNewsFailed(true); });
    return () => { cancelled = true; };
  }, []);
  return (
    <>
    <div className="main-container flex w-[1440px] flex-col items-center flex-nowrap bg-[#fcfbf8] relative overflow-hidden mx-auto my-0">
      <div className="flex pt-[16px] pr-[120px] pb-[16px] pl-[120px] justify-between items-center self-stretch shrink-0 flex-nowrap bg-[#fff] border-solid border-t border-t-[#e4ebf1] relative">
        <div className="flex w-[384px] gap-[12px] justify-end items-center shrink-0 flex-nowrap relative z-[1]">
          <div className="flex w-[120px] h-[44px] pt-[11px] pr-[20px] pb-[11px] pl-[20px] justify-center items-center shrink-0 flex-nowrap bg-[#fff] rounded-[12px] border-solid border-[1.5px] border-[#2094e3] relative overflow-hidden z-[2]">
            <span className="flex w-[65px] h-[22px] justify-center items-start shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-medium leading-[22px] text-[#2094e3] relative text-center whitespace-nowrap z-[3]">
              ورود کاربران
            </span>
          </div>
          <div className="flex w-[120px] h-[44px] pt-[11px] pr-[20px] pb-[11px] pl-[20px] justify-center items-center shrink-0 flex-nowrap bg-[#fff] rounded-[12px] border-solid border-[1.5px] border-[#2094e3] relative overflow-hidden z-[4]">
            <span className="flex w-[89px] h-[22px] justify-center items-start shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-medium leading-[22px] text-[#2094e3] relative text-center whitespace-nowrap z-[5]">
              پیگیری مشارکت
            </span>
          </div>
          <div className="flex w-[120px] pt-[11px] pr-[20px] pb-[11px] pl-[20px] gap-[8px] justify-center items-center shrink-0 flex-nowrap bg-[#2094e3] rounded-[12px] relative z-[6]">
            <span className="flex w-[82px] h-[22px] justify-center items-start shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-medium leading-[22px] text-[#fff] relative text-center whitespace-nowrap z-[7]">
              شروع مشارکت
            </span>
          </div>
        </div>
        <div className="flex w-[630px] gap-[40px] justify-end items-center shrink-0 flex-nowrap relative z-[8]">
          <div className="flex w-[453px] gap-[24px] justify-end items-center shrink-0 flex-nowrap relative z-[9]">
            <span className="flex w-[45px] h-[22px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-medium leading-[21.875px] text-[#17324d] relative text-right whitespace-nowrap z-10">
              درباره ما
            </span>
            <span className="flex w-[60px] h-[22px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-medium leading-[21.875px] text-[#17324d] relative text-right whitespace-nowrap z-[11]">
              تماس با ما
            </span>
            <span className="flex w-[52px] h-[22px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-medium leading-[21.875px] text-[#17324d] relative text-right whitespace-nowrap z-[12]">
              {" "}
              شرکت‌ها
            </span>
            <span className="flex w-[66px] h-[22px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-medium leading-[21.875px] text-[#17324d] relative text-right whitespace-nowrap z-[13]">
              {" "}
              استارتاپ‌ها
            </span>
            <span className="flex w-[41px] h-[22px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-medium leading-[21.875px] text-[#17324d] relative text-right whitespace-nowrap z-[14]">
              پروژه‌ها
            </span>
            <span className="flex w-[69px] h-[22px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-medium leading-[21.875px] text-[#17324d] relative text-right whitespace-nowrap z-[15]">
              صفحه اصلی
            </span>
          </div>
          <div className="w-[137px] h-[46px] shrink-0 bg-[url(/assets/codia/4T7A4AiY30.png)] bg-cover bg-no-repeat relative z-[16]" />
        </div>
      </div>
      <div className="flex pt-[96px] pr-[120px] pb-[96px] pl-[120px] flex-col gap-[64px] items-center self-stretch shrink-0 flex-nowrap bg-[#fcfbf8] relative overflow-hidden z-[17]">
        <div className="flex gap-[64px] items-center self-stretch shrink-0 flex-nowrap relative z-[18]">
          <div className="flex flex-col items-center grow shrink-0 basis-0 flex-nowrap relative z-[19]">
            <div className="flex h-[380px] flex-col justify-center items-center self-stretch shrink-0 flex-nowrap bg-[rgba(17,30,48,0.06)] bg-[url(/assets/codia/rO73Py6N6q.png)] bg-cover bg-no-repeat rounded-[24px] relative overflow-hidden z-20">
              <div className="flex h-[71px] pt-0 pr-0 pb-0 pl-0 justify-between items-start shrink-0 flex-nowrap absolute top-[19px] left-[19px] right-[19px] z-[21]" />
              <button
                type="button"
                aria-label="نمایش معرفی ماه و وضعیت ویدئوی ۹۰ ثانیه‌ای"
                onClick={() => setIntroOpen(true)}
                className="flex w-[72px] h-[72px] flex-col justify-center items-center shrink-0 flex-nowrap bg-[#2094e3] rounded-[36px] relative z-[22] cursor-pointer hover:bg-[#167dca] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#2094e3]"
              >
                <div className="flex w-[24px] h-[24px] flex-col justify-center items-center shrink-0 flex-nowrap relative overflow-hidden z-[23]">
                  <div className="w-[24px] h-[24px] shrink-0 bg-[url(/assets/codia/Nn6705XhfS.png)] bg-cover bg-no-repeat relative overflow-hidden z-[24]" />
                </div>
              </button>
            </div>
          </div>
          <div className="flex flex-col gap-[24px] items-end grow shrink-0 basis-0 flex-nowrap relative z-[25]">
            <div className="flex flex-col gap-[16px] items-end self-stretch shrink-0 flex-nowrap relative z-[26]">
              <span className="flex w-[568px] h-[204px] justify-end items-start self-stretch shrink-0 font-['Vazirmatn'] text-[48px] font-extrabold leading-[68px] text-[#17324d] relative text-right z-[27]">
                تغییر یک سرنوشت، از انتخاب ساده امروز ما شروع می‌شود
              </span>
              <span className="flex w-[568px] justify-end items-start self-stretch shrink-0 font-['Vazirmatn'] text-[16px] font-normal leading-[28px] text-[#60758a] relative text-right">
                ماه، حامیان، شرکت‌ها و استارتاپ‌ها را برای ساخت اثر اجتماعی قابل‌اندازه‌گیری به هم متصل می‌کند.
              </span>
            </div>
            <div className="flex w-[301px] gap-[12px] items-center shrink-0 flex-nowrap relative z-[28]">
              <button
                type="button"
                onClick={() => setIntroOpen(true)}
                className="flex w-[167px] pt-[11px] pr-[20px] pb-[11px] pl-[20px] gap-[8px] justify-center items-center shrink-0 flex-nowrap bg-[#fff] rounded-[12px] border-solid border border-[#e4ebf1] relative z-[29] cursor-pointer hover:bg-[#f2f8ff] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#2094e3]"
              >
                <span className="flex w-[119px] h-[22px] justify-center items-start shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-medium leading-[22px] text-[#2094e3] relative text-center whitespace-nowrap z-30">
                  معرفی ماه در ۹۰ ثانیه
                </span>
              </button>
              <div className="flex w-[122px] pt-[11px] pr-[20px] pb-[11px] pl-[20px] gap-[8px] justify-center items-center shrink-0 flex-nowrap bg-[#2094e3] rounded-[12px] relative z-[31]">
                <span className="flex w-[82px] h-[22px] justify-center items-start shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-medium leading-[22px] text-[#fff] relative text-center whitespace-nowrap z-[32]">
                  شروع مشارکت
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex pt-[56px] pr-[120px] pb-[56px] pl-[120px] flex-col gap-[28px] items-end self-stretch shrink-0 flex-nowrap bg-[#fff] relative overflow-hidden z-[33]">
        <div className="flex justify-center items-center self-stretch shrink-0 flex-nowrap relative overflow-hidden z-[34]">
          <div className="flex w-[339px] flex-col gap-[6px] items-center shrink-0 flex-nowrap relative overflow-hidden z-[35]">
            <span className="flex w-[182px] h-[50px] justify-center items-start shrink-0 basis-auto font-['Vazirmatn'] text-[32px] font-bold leading-[50px] text-[#17324d] relative text-center whitespace-nowrap z-[36]">
              اثر ماه تا امروز
            </span>
            <span className="flex w-[339px] h-[22px] justify-center items-start shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-normal leading-[21.875px] text-[#60758a] relative text-center whitespace-nowrap z-[37]">
              آمار پروژه‌های تأییدشده و مشارکت‌های ثبت‌شده در سامانه ماه
            </span>
          </div>
        </div>
        <div className="flex pt-[28px] pr-[40px] pb-[28px] pl-[40px] gap-[16px] justify-end items-center self-stretch shrink-0 flex-nowrap relative overflow-hidden z-[38]">
          <div className="flex w-[211px] pt-[18px] pr-[18px] pb-[18px] pl-[18px] flex-col gap-[6px] items-end shrink-0 flex-nowrap rounded-[16px] border-solid border border-[#e5edf7] relative overflow-hidden shadow-[0_4px_12px_0_rgba(12,30,63,0.05)] z-[39]">
            <div className="flex w-[36px] h-[36px] flex-col justify-center items-center shrink-0 flex-nowrap bg-[#fcecdb] rounded-[18px] relative overflow-hidden z-40">
              <div className="w-[18px] h-[18px] shrink-0 bg-[url(/assets/codia/cxdojLhODQ.png)] bg-cover bg-no-repeat relative overflow-hidden z-[41]" />
            </div>
            <div className="flex w-[141px] gap-[6px] items-baseline shrink-0 flex-nowrap relative overflow-hidden z-[42]">
              <span className="flex w-[72px] h-[22px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-medium leading-[21.875px] text-[#60758a] relative text-right whitespace-nowrap z-[43]">
                میلیارد تومان
              </span>
              <span className="flex w-[63px] h-[50px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[32px] font-bold leading-[50px] text-[#17324d] relative text-right whitespace-nowrap z-[44]">
                {landingKpis ? decimalFormatter.format(landingKpis.fundingBillionToman) : "—"}
              </span>
            </div>
            <span className="flex w-[87px] h-[22px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-normal leading-[21.875px] text-[#e9811b] relative text-right whitespace-nowrap z-[45]">
              منابع جذب‌شده
            </span>
          </div>
          <div className="flex w-[211px] pt-[18px] pr-[18px] pb-[18px] pl-[18px] flex-col gap-[6px] items-end shrink-0 flex-nowrap rounded-[16px] border-solid border border-[#e5edf7] relative overflow-hidden shadow-[0_4px_12px_0_rgba(12,30,63,0.05)] z-[46]">
            <div className="flex w-[36px] h-[36px] flex-col justify-center items-center shrink-0 flex-nowrap bg-[#f5f0e3] rounded-[18px] relative overflow-hidden z-[47]">
              <div className="w-[18px] h-[18px] shrink-0 bg-[url(/assets/codia/m3qsgpUX3g.png)] bg-cover bg-no-repeat relative overflow-hidden z-[48]" />
            </div>
            <div className="flex w-[71px] gap-[6px] items-baseline shrink-0 flex-nowrap relative overflow-hidden z-[49]">
              <span className="flex w-[28px] h-[22px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-medium leading-[21.875px] text-[#60758a] relative text-right whitespace-nowrap z-50">
                پروژه
              </span>
              <span className="flex w-[37px] h-[50px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[32px] font-bold leading-[50px] text-[#17324d] relative text-right whitespace-nowrap z-[51]">
                {landingKpis ? integerFormatter.format(landingKpis.activeProjectCount) : "—"}
              </span>
            </div>
            <span className="flex w-[81px] h-[22px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-normal leading-[21.875px] text-[#c5a056] relative text-right whitespace-nowrap z-[52]">
              پروژه‌های فعال
            </span>
          </div>
          <div className="flex w-[211px] pt-[18px] pr-[18px] pb-[18px] pl-[18px] flex-col gap-[6px] items-end shrink-0 flex-nowrap rounded-[16px] border-solid border border-[#e5edf7] relative overflow-hidden shadow-[0_4px_12px_0_rgba(12,30,63,0.05)] z-[53]">
            <div className="flex w-[36px] h-[36px] flex-col justify-center items-center shrink-0 flex-nowrap bg-[#eaf8f0] rounded-[18px] relative overflow-hidden z-[54]">
              <div className="w-[18px] h-[18px] shrink-0 bg-[url(/assets/codia/i7rWP6OzWu.png)] bg-cover bg-no-repeat relative overflow-hidden z-[55]" />
            </div>
            <div className="flex w-[136px] gap-[6px] items-baseline shrink-0 flex-nowrap relative overflow-hidden z-[56]">
              <span className="flex w-[73px] h-[22px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-medium leading-[21.875px] text-[#60758a] relative text-right whitespace-nowrap z-[57]">
                فرصت شغلی
              </span>
              <span className="flex w-[57px] h-[50px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[32px] font-bold leading-[50px] text-[#17324d] relative text-right whitespace-nowrap z-[58]">
                {landingKpis ? integerFormatter.format(landingKpis.jobsCreated) : "—"}
              </span>
            </div>
            <span className="flex w-[97px] h-[22px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-normal leading-[21.875px] text-[#159455] relative text-right whitespace-nowrap z-[59]">
              اشتغال ایجادشده
            </span>
          </div>
          <div className="flex w-[211px] pt-[18px] pr-[18px] pb-[18px] pl-[18px] flex-col gap-[6px] items-end shrink-0 flex-nowrap rounded-[16px] border-solid border border-[#e5edf7] relative overflow-hidden shadow-[0_4px_12px_0_rgba(12,30,63,0.05)] z-[60]">
            <div className="flex w-[36px] h-[36px] flex-col justify-center items-center shrink-0 flex-nowrap bg-[#fff6e5] rounded-[18px] relative overflow-hidden z-[61]">
              <div className="w-[18px] h-[18px] shrink-0 bg-[url(/assets/codia/N1ctvrtnG3.png)] bg-cover bg-no-repeat relative overflow-hidden z-[62]" />
            </div>
            <div className="flex w-[112px] gap-[6px] items-baseline shrink-0 flex-nowrap relative overflow-hidden z-[63]">
              <span className="flex w-[17px] h-[22px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-medium leading-[21.875px] text-[#60758a] relative text-right whitespace-nowrap z-[64]">
                نفر
              </span>
              <span className="flex w-[89px] h-[50px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[32px] font-bold leading-[50px] text-[#17324d] relative text-right whitespace-nowrap z-[65]">
                {landingKpis ? integerFormatter.format(landingKpis.beneficiaryCount) : "—"}
              </span>
            </div>
            <span className="flex w-[70px] h-[22px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-normal leading-[21.875px] text-[#c27a10] relative text-right whitespace-nowrap z-[66]">
              افراد بهره‌مند
            </span>
          </div>
          <div className="flex w-[211px] pt-[18px] pr-[18px] pb-[18px] pl-[18px] flex-col gap-[6px] items-end shrink-0 flex-nowrap rounded-[16px] border-solid border border-[#e5edf7] relative overflow-hidden shadow-[0_4px_12px_0_rgba(12,30,63,0.05)] z-[67]">
            <div className="flex w-[36px] h-[36px] flex-col justify-center items-center shrink-0 flex-nowrap bg-[#eaf5fd] rounded-[18px] relative overflow-hidden z-[68]">
              <div className="w-[21.171px] h-[22.271px] shrink-0 bg-[url(/assets/codia/ZuP4QiPSK8.png)] bg-[length:100%_100%] bg-no-repeat relative z-[69]" />
            </div>
            <div className="flex w-[125px] gap-[6px] items-baseline shrink-0 flex-nowrap relative overflow-hidden z-[70]">
              <span className="flex w-[49px] h-[22px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-medium leading-[21.875px] text-[#60758a] relative text-right whitespace-nowrap z-[71]">
                استارتاپ
              </span>
              <span className="flex w-[70px] h-[50px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[32px] font-bold leading-[50px] text-[#17324d] relative text-right whitespace-nowrap z-[72]">
                {landingKpis ? integerFormatter.format(landingKpis.startupCount) : "—"}
              </span>
            </div>
            <span className="flex w-[99px] h-[22px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-normal leading-[21.875px] text-[#2094e3] relative text-right whitespace-nowrap z-[73]">
              تعداد استارتاپ ها
            </span>
          </div>
        </div>
      </div>
      <div className="flex pt-[96px] pr-[120px] pb-[96px] pl-[120px] flex-col gap-[40px] items-center self-stretch shrink-0 flex-nowrap relative z-[74]">
        <div className="flex flex-col gap-[12px] items-center self-stretch shrink-0 flex-nowrap relative z-[75]">
          <span className="h-[38px] self-stretch shrink-0 basis-auto font-['Vazirmatn'] text-[24px] font-extrabold leading-[37.5px] text-[#17324d] relative text-center whitespace-nowrap z-[76]">
            مسیرهای ورود و مشارکت در ماه
          </span>
          <span className="h-[22px] self-stretch shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-normal leading-[21.875px] text-[#60758a] relative text-center whitespace-nowrap z-[77]">
            متناسب با نقش خود، مسیر مناسب را انتخاب کنید.
          </span>
        </div>
        <div className="flex h-[432px] gap-[24px] justify-end items-start self-stretch shrink-0 flex-nowrap relative z-[78]">
          <div className="flex w-[384px] pt-[32px] pr-[32px] pb-[32px] pl-[32px] flex-col gap-[24px] items-end self-stretch shrink-0 flex-nowrap bg-[#fff] rounded-[24px] border-solid border border-[#e4ebf1] relative overflow-hidden z-[79]">
            <div className="flex flex-col gap-[12px] items-end self-stretch shrink-0 flex-nowrap relative overflow-hidden z-[80]">
              <div className="flex w-[48px] h-[48px] flex-col justify-center items-center shrink-0 flex-nowrap bg-[#e0f2fe] rounded-[16px] relative z-[81]">
                <div className="w-[24px] h-[24px] shrink-0 rounded-[4px] relative overflow-hidden z-[82]">
                  <div className="w-[18px] h-[18px] bg-[url(/assets/codia/MtRTcVQGjH.png)] bg-cover bg-no-repeat relative overflow-hidden z-[83] mt-[3px] mr-0 mb-0 ml-[3px]" />
                </div>
              </div>
              <span className="h-[31px] self-stretch shrink-0 basis-auto font-['Vazirmatn'] text-[20px] font-bold leading-[31px] text-[#17324d] relative text-right whitespace-nowrap z-[84]">
                برای استارتاپ‌ها
              </span>
              <span className="flex w-[320px] h-[44px] justify-end items-start self-stretch shrink-0 font-['Vazirmatn'] text-[14px] font-normal leading-[21.875px] text-[#60758a] relative text-right z-[85]">
                پروژه دارای اثر اجتماعی خود را ثبت کنید و پس از ارزیابی برای جذب
                سرمایه آماده شوید.
              </span>
            </div>
            <div className="flex flex-col gap-[12px] items-end self-stretch shrink-0 flex-nowrap relative overflow-hidden z-[86]">
              <span className="h-[22px] self-stretch shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-normal leading-[21.875px] text-[#60758a] relative text-right whitespace-nowrap z-[87]">
                ✔ ثبت پروژه و شاخص‌های اثر اجتماعی
              </span>
              <span className="h-[22px] self-stretch shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-normal leading-[21.875px] text-[#60758a] relative text-right whitespace-nowrap z-[88]">
                ✔ ارزیابی توسط خانه خلاق و نوآوری آینه
              </span>
              <span className="h-[22px] self-stretch shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-normal leading-[21.875px] text-[#60758a] relative text-right whitespace-nowrap z-[89]">
                ✔ تعریف KPI و امکان تأمین مالی مرحله‌ای
              </span>
            </div>
            <div className="self-stretch grow shrink-0 basis-0 relative overflow-hidden z-[90]" />
            <div className="flex flex-col justify-end items-start self-stretch shrink-0 flex-nowrap relative z-[91]">
              <div className="flex h-[44px] pt-[11px] pr-[20px] pb-[11px] pl-[20px] justify-center items-center self-stretch shrink-0 flex-nowrap rounded-[12px] relative overflow-hidden z-[92]">
                <span className="h-[22px] grow shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-medium leading-[21.875px] text-[#fff] relative text-center whitespace-nowrap z-[93]">
                  ثبت‌نام استارتاپ
                </span>
              </div>
            </div>
          </div>
          <div className="flex w-[384px] pt-[32px] pr-[32px] pb-[32px] pl-[32px] flex-col gap-[24px] items-end self-stretch shrink-0 flex-nowrap bg-[#fff] rounded-[24px] border-solid border-2 border-[#2094e3] relative overflow-hidden shadow-[0_8px_20px_0_rgba(12,51,114,0.12)] z-[94]">
            <div className="flex flex-col gap-[12px] items-end self-stretch shrink-0 flex-nowrap relative z-[95]">
              <div className="flex w-[48px] h-[48px] flex-col justify-center items-center shrink-0 flex-nowrap bg-[#e0f2fe] rounded-[16px] relative z-[96]">
                <div className="flex w-[24px] h-[24px] flex-col justify-center items-center shrink-0 flex-nowrap relative overflow-hidden z-[97]">
                  <div className="w-[24px] h-[24px] shrink-0 bg-[url(/assets/codia/HfESrrAcfV.png)] bg-cover bg-no-repeat relative overflow-hidden z-[98]" />
                </div>
              </div>
              <span className="h-[31px] self-stretch shrink-0 basis-auto font-['Vazirmatn'] text-[20px] font-bold leading-[31px] text-[#17324d] relative text-right whitespace-nowrap z-[99]">
                برای شرکت‌ها و سازمان‌ها
              </span>
              <span className="flex w-[320px] h-[44px] justify-end items-start self-stretch shrink-0 font-['Vazirmatn'] text-[14px] font-normal leading-[21.875px] text-[#60758a] relative text-right z-[100]">
                سرمایه‌گذاری اجتماعی سازمان خود را شفاف، قابل‌اندازه‌گیری و
                قابل‌گزارش مدیریت کنید.
              </span>
            </div>
            <div className="flex flex-col gap-[12px] items-end self-stretch shrink-0 flex-nowrap relative z-[101]">
              <span className="h-[22px] self-stretch shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-normal leading-[21.875px] text-[#60758a] relative text-right whitespace-nowrap z-[102]">
                ✔ حساب سازمانی
              </span>
              <span className="h-[22px] self-stretch shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-normal leading-[21.875px] text-[#60758a] relative text-right whitespace-nowrap z-[103]">
                ✔ گزارش مالی و اثر اجتماعی
              </span>
              <span className="h-[22px] self-stretch shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-normal leading-[21.875px] text-[#60758a] relative text-right whitespace-nowrap z-[104]">
                ✔ امکان دریافت گواهی ماده ۱۷۲
              </span>
            </div>
            <div className="self-stretch grow shrink-0 basis-0 relative overflow-hidden z-[105]" />
            <div className="flex flex-col justify-end items-start self-stretch shrink-0 flex-nowrap relative z-[106]">
              <div className="flex h-[44px] pt-[11px] pr-[20px] pb-[11px] pl-[20px] justify-center items-center self-stretch shrink-0 flex-nowrap rounded-[12px] relative overflow-hidden z-[107]">
                <span className="h-[22px] grow shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-medium leading-[21.875px] text-[#fff] relative text-center whitespace-nowrap z-[108]">
                  ورود شرکت‌ها
                </span>
              </div>
            </div>
          </div>
          <div className="flex pt-[32px] pr-[32px] pb-[32px] pl-[32px] flex-col gap-[24px] items-end self-stretch grow shrink-0 basis-0 flex-nowrap bg-[#fff] rounded-[24px] border-solid border-2 border-[#e4ebf1] relative overflow-hidden z-[109]">
            <div className="flex flex-col gap-[12px] items-end self-stretch shrink-0 flex-nowrap relative z-[110]">
              <div className="flex w-[48px] h-[48px] flex-col justify-center items-center shrink-0 flex-nowrap bg-[#e0f2fe] rounded-[16px] relative z-[111]">
                <div className="flex w-[24px] h-[24px] flex-col justify-center items-center shrink-0 flex-nowrap relative overflow-hidden z-[112]">
                  <div className="w-[24px] h-[24px] shrink-0 bg-[url(/assets/codia/hEyKrXaGAW.png)] bg-cover bg-no-repeat relative overflow-hidden z-[113]" />
                </div>
              </div>
              <span className="h-[31px] self-stretch shrink-0 basis-auto font-['Vazirmatn'] text-[20px] font-bold leading-[31px] text-[#17324d] relative text-right whitespace-nowrap z-[114]">
                برای افراد حقیقی
              </span>
              <span className="flex w-[320px] h-[44px] justify-end items-start self-stretch shrink-0 font-['Vazirmatn'] text-[14px] font-normal leading-[21.875px] text-[#60758a] relative text-right z-[115]">
                سریع و بدون ساخت حساب کاربری در پروژه‌های دارای اثر اجتماعی مشارکت
                کنید.
              </span>
            </div>
            <div className="flex flex-col gap-[12px] items-end self-stretch shrink-0 flex-nowrap relative z-[116]">
              <span className="h-[22px] self-stretch shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-normal leading-[21.875px] text-[#60758a] relative text-right whitespace-nowrap z-[117]">
                ✔ بدون ثبت‌نام
              </span>
              <span className="h-[22px] self-stretch shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-normal leading-[21.875px] text-[#60758a] relative text-right whitespace-nowrap z-[118]">
                ✔ فقط شماره موبایل و کد تأیید
              </span>
              <span className="h-[22px] self-stretch shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-normal leading-[21.875px] text-[#60758a] relative text-right whitespace-nowrap z-[119]">
                ✔ بدون گواهی مالیاتی
              </span>
            </div>
            <div className="self-stretch grow shrink-0 basis-0 relative overflow-hidden z-[120]" />
            <div className="flex flex-col justify-end items-start self-stretch shrink-0 flex-nowrap relative z-[121]">
              <div className="flex h-[44px] pt-[11px] pr-[20px] pb-[11px] pl-[20px] justify-center items-center self-stretch shrink-0 flex-nowrap rounded-[12px] relative overflow-hidden z-[122]">
                <span className="h-[22px] grow shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-medium leading-[21.875px] text-[#fff] relative text-center whitespace-nowrap z-[123]">
                  مشارکت فردی
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex pt-[96px] pr-[120px] pb-[96px] pl-[120px] flex-col gap-[40px] items-center self-stretch shrink-0 flex-nowrap bg-[#fff] relative z-[124]">
        <div className="flex flex-col gap-[12px] items-end self-stretch shrink-0 flex-nowrap relative z-[125]">
          <span className="h-[44px] self-stretch shrink-0 basis-auto font-['Vazirmatn'] text-[28px] font-extrabold leading-[43.75px] text-[#17324d] relative text-center whitespace-nowrap z-[126]">
            یک پروژه را انتخاب کن
          </span>
          <span className="h-[23px] self-stretch shrink-0 basis-auto font-['Vazirmatn'] text-[15px] font-normal leading-[23px] text-[#60758a] relative text-center whitespace-nowrap z-[127]">
            اثر اجتماعی هر پروژه از قبل مشخص، تأییدشده و قابل‌اندازه‌گیری است
          </span>
        </div>
        <PublicProjectHighlights />
        <div className="flex w-[146px] pt-[20px] pr-0 pb-0 pl-0 gap-[8px] items-center shrink-0 flex-nowrap relative z-[231]">
          <div className="flex w-[16px] h-[16px] flex-col justify-center items-center shrink-0 flex-nowrap relative overflow-hidden z-[232]">
            <div className="w-[16px] h-[16px] shrink-0 bg-[url(/assets/codia/E97ur6XkVG.png)] bg-cover bg-no-repeat relative overflow-hidden z-[233]" />
          </div>
          <span className="flex w-[122px] h-[22px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-bold leading-[21.875px] text-[#2094e3] relative text-right whitespace-nowrap z-[234]">
            مشاهده همه پروژه‌ها
          </span>
        </div>
      </div>
      <div className="flex pt-[64px] pr-[120px] pb-[64px] pl-[120px] flex-col gap-[32px] items-center self-stretch shrink-0 flex-nowrap relative z-[235]">
        <div className="flex flex-col gap-[8px] items-center self-stretch shrink-0 flex-nowrap relative z-[236]">
          <span className="h-[50px] self-stretch shrink-0 basis-auto font-['Vazirmatn'] text-[32px] font-bold leading-[50px] text-[#17324d] relative text-center whitespace-nowrap z-[237]">
            شرکت‌هایی که به ماه اعتماد کرده‌اند
          </span>
          <span className="h-[22px] self-stretch shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-normal leading-[21.875px] text-[#60758a] relative text-center whitespace-nowrap z-[238]">
            همراهان سازمانی در مسیر سرمایه‌گذاری اجتماعی شفاف و اثرگذار
          </span>
        </div>
        <TrustedCompanyCarousel />
      </div>
      <div className="flex pt-[96px] pr-[120px] pb-[96px] pl-[120px] flex-col gap-[40px] items-center self-stretch shrink-0 flex-nowrap bg-[#fff] relative z-[264]">
        <div className="flex justify-center items-center self-stretch shrink-0 flex-nowrap relative z-[265]">
          <div className="flex flex-col gap-[12px] items-center grow shrink-0 basis-0 flex-nowrap relative z-[266]">
            <span className="h-[50px] self-stretch shrink-0 basis-auto font-['Vazirmatn'] text-[32px] font-extrabold leading-[50px] text-[#17324d] relative text-center whitespace-nowrap z-[267]">
              آخرین اخبار و روایت‌های اثر
            </span>
            <span className="h-[25px] self-stretch shrink-0 basis-auto font-['Vazirmatn'] text-[16px] font-normal leading-[25px] text-[#60758a] relative text-center whitespace-nowrap z-[268]">
              تازه‌ترین خبرها، گزارش‌ها و نتایج پروژه‌های دارای اثر اجتماعی ماه
            </span>
          </div>
        </div>
        <div className="mah-home-news-grid" aria-live="polite">
          {(news ?? []).slice(0, 3).map((item) => (
            <article className="mah-home-news-card" key={item.id}>
              <div className="mah-home-news-image">
                <img src={publicNewsImageUrl(item.id)} alt="" onError={(event) => { event.currentTarget.style.display = "none"; }} />
              </div>
              <div className="mah-home-news-content">
                <div className="mah-home-news-meta">
                  <span>{newsDateFormatter.format(new Date(item.updatedAtUtc))}</span>
                  <span className="mah-home-news-category">خبر</span>
                </div>
                <h3>{item.title}</h3>
                <p>{item.summary}</p>
                <a href={"/news/"+encodeURIComponent(item.id)} aria-label={"مطالعه خبر: " + item.title}>مطالعه خبر</a>
              </div>
            </article>
          ))}
          {!news?.length ? <p className="mah-home-news-empty" role="status">{newsFailed?"دریافت اخبار امکان‌پذیر نیست.":news?"هنوز خبری برای انتشار ثبت نشده است.":"در حال دریافت اخبار…"}</p> : null}
        </div>
        <div className="flex w-[155px] gap-[8px] items-center shrink-0 flex-nowrap relative z-[306]">
          <div className="w-[16px] h-[16px] shrink-0 bg-[url(/assets/codia/6mrr4HWzfu.png)] bg-cover bg-no-repeat relative overflow-hidden z-[307]" />
          <span className="flex w-[107px] h-[22px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-bold leading-[21.875px] text-[#2094e3] relative text-right whitespace-nowrap z-[308]">
            مشاهده همه اخبار
          </span>
          <div className="flex w-[16px] h-[16px] flex-col justify-center items-center shrink-0 flex-nowrap relative overflow-hidden z-[309]" />
        </div>
      </div>
      <div className="flex pt-[80px] pr-[120px] pb-[80px] pl-[120px] flex-col gap-[24px] items-center self-stretch shrink-0 flex-nowrap bg-[#fcfbf8] border-solid border-t border-t-[#e4ebf1] border-solid border-b border-b-[#e4ebf1] relative z-[310]">
        <span className="h-[50px] self-stretch shrink-0 basis-auto font-['Vazirmatn'] text-[32px] font-extrabold leading-[50px] text-[#17324d] relative text-center whitespace-nowrap z-[311]">
          کمتر از یک دقیقه تا شروع یک اثر
        </span>
        <span className="h-[20px] self-stretch shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-normal leading-[20px] text-[#60758a] relative text-center whitespace-nowrap z-[312]">
          پرداخت امن به حساب کمیته امداد و امکان پیگیری نتیجه مشارکت
        </span>
        <div className="flex w-[122px] pt-[11px] pr-[20px] pb-[11px] pl-[20px] gap-[8px] justify-center items-center shrink-0 flex-nowrap bg-[#2094e3] rounded-[12px] relative z-[313]">
          <span className="flex w-[82px] h-[22px] justify-center items-start shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-medium leading-[22px] text-[#fff] relative text-center whitespace-nowrap z-[314]">
            شروع مشارکت{" "}
          </span>
        </div>
      </div>
      <div className="flex pt-[80px] pr-[120px] pb-[40px] pl-[120px] flex-col gap-[64px] items-end self-stretch shrink-0 flex-nowrap bg-[#111e30] relative z-[315]">
        <div className="flex gap-[48px] justify-end items-start self-stretch shrink-0 flex-nowrap relative z-[316]">
          <div className="flex w-[220px] h-[182px] flex-col gap-[12px] items-end shrink-0 flex-nowrap relative z-[317]">
            <span className="flex w-[59px] h-[22px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-bold leading-[21.875px] text-[#fff] relative text-right whitespace-nowrap z-[318]">
              ارتباط با ما
            </span>
            <span className="flex w-[115px] h-[20px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[13px] font-normal leading-[20px] text-[#e4ebf1] relative text-right whitespace-nowrap z-[319]">
              تلفن: ۰۲۱-۸۸۸۸۸۸۸۸
            </span>
            <span className="flex w-[156px] h-[20px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[13px] font-normal leading-[20px] text-[#e4ebf1] relative text-right whitespace-nowrap z-[320]">
              ایمیل: info@mahplatform.ir
            </span>
            <div className="flex w-[108px] pt-[8px] pr-0 pb-0 pl-0 gap-[12px] items-center shrink-0 flex-nowrap relative z-[321]" aria-label="شبکه‌های اجتماعی">
              <div className="flex w-[18px] h-[18px] flex-col justify-center items-center shrink-0 flex-nowrap relative overflow-hidden z-[322]">
                <div className="w-[18px] h-[18px] shrink-0 bg-[url(/assets/codia/NQaXAcuYaN.png)] bg-cover bg-no-repeat relative overflow-hidden z-[323]" />
              </div>
              <div className="flex w-[18px] h-[18px] flex-col justify-center items-center shrink-0 flex-nowrap relative overflow-hidden z-[324]">
                <div className="w-[18px] h-[18px] shrink-0 bg-[url(/assets/codia/0ryT0zMK7e.png)] bg-cover bg-no-repeat relative overflow-hidden z-[325]" />
              </div>
              <img src="/assets/telegram.png" alt="تلگرام" className="w-[18px] h-[18px] shrink-0 object-contain" />
              <img src="/assets/bale.svg" alt="بله" className="w-[18px] h-[18px] shrink-0 object-contain" />
            </div>
          </div>
          <div className="flex w-[150px] h-[182px] flex-col gap-[12px] items-end shrink-0 flex-nowrap relative z-[326]">
            <span className="flex w-[39px] h-[22px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-bold leading-[21.875px] text-[#fff] relative text-right whitespace-nowrap z-[327]">
              حقوقی
            </span>
            <span className="flex w-[82px] h-[20px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[13px] font-normal leading-[20px] text-[#e4ebf1] relative text-right whitespace-nowrap z-[328]">
              قوانین و مقررات
            </span>
            <span className="flex w-[75px] h-[20px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[13px] font-normal leading-[20px] text-[#e4ebf1] relative text-right whitespace-nowrap z-[329]">
              حریم خصوصی
            </span>
          </div>
          <div className="flex w-[160px] h-[182px] flex-col gap-[12px] items-end shrink-0 flex-nowrap relative z-[330]">
            <span className="flex w-[49px] h-[22px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-bold leading-[21.875px] text-[#fff] relative text-right whitespace-nowrap z-[331]">
              پشتیبانی
            </span>
            <span className="flex w-[55px] h-[20px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[13px] font-normal leading-[20px] text-[#e4ebf1] relative text-right whitespace-nowrap z-[332]">
              تماس با ما
            </span>
            <span className="flex w-[77px] h-[20px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[13px] font-normal leading-[20px] text-[#e4ebf1] relative text-right whitespace-nowrap z-[333]">
              سؤالات متداول
            </span>
            <span className="flex w-[82px] h-[20px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[13px] font-normal leading-[20px] text-[#e4ebf1] relative text-right whitespace-nowrap z-[334]">
              پیگیری مشارکت
            </span>
          </div>
          <div className="flex w-[180px] flex-col gap-[12px] items-end shrink-0 flex-nowrap relative z-[335]">
            <span className="flex w-[83px] h-[22px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-bold leading-[21.875px] text-[#fff] relative text-right whitespace-nowrap z-[336]">
              دسترسی سریع
            </span>
            <span className="flex w-[38px] h-[20px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[13px] font-normal leading-[20px] text-[#e4ebf1] relative text-right whitespace-nowrap z-[337]">
              پروژه‌ها
            </span>
            <span className="flex w-[69px] h-[20px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[13px] font-normal leading-[20px] text-[#e4ebf1] relative text-right whitespace-nowrap z-[338]">
              برای شرکت‌ها
            </span>
            <span className="flex w-[71px] h-[20px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[13px] font-normal leading-[20px] text-[#e4ebf1] relative text-right whitespace-nowrap z-[339]">
              نحوه مشارکت
            </span>
            <span className="flex w-[84px] h-[20px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[13px] font-normal leading-[20px] text-[#e4ebf1] relative text-right whitespace-nowrap z-[340]">
              ثبت‌نام استارتاپ
            </span>
            <span className="flex w-[80px] h-[20px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[13px] font-normal leading-[20px] text-[#e4ebf1] relative text-right whitespace-nowrap z-[341]">
              اخبار و رویدادها
            </span>
          </div>
          <div className="flex w-[298px] h-[182px] flex-col gap-[14px] items-end shrink-0 flex-nowrap relative z-[342]">
            <div className="w-[210px] h-[70px] shrink-0 bg-[url(/assets/codia/4T7A4AiY30.png)] bg-cover bg-no-repeat relative z-[343]">
              <span className="absolute right-[72px] bottom-[2px] z-[2] flex w-[96px] h-[9px] items-center justify-center bg-[#111e30] font-['Vazirmatn'] text-[6.5px] font-medium leading-[9px] text-white whitespace-nowrap">
                مسئولیت اجتماعی هوشمند
              </span>
            </div>
            <span className="flex w-[298px] h-[44px] justify-end items-start self-stretch shrink-0 font-['Vazirmatn'] text-[13px] font-normal leading-[22px] text-[#e4ebf1] relative text-right z-[344]">
              سامانه مشارکت در پروژه‌های دارای اثر اجتماعی با مسیر مالی شفاف و اثر
              قابل‌اندازه‌گیری.
            </span>
          </div>
        </div>
        <div className="flex pt-[20px] pr-0 pb-0 pl-0 flex-col gap-[4px] items-center self-stretch shrink-0 flex-nowrap border-solid border-b border-b-[rgba(255,255,255,0.12)] relative z-[345]">
          <span className="flex w-[219px] h-[19px] justify-center items-start shrink-0 basis-auto font-['Vazirmatn'] text-[12px] font-normal leading-[18.75px] text-[#e4ebf1] relative text-center whitespace-nowrap z-[346]">
            طراحی و توسعه با هدف ارتقای عدالت اجتماعی
          </span>
          <span className="flex w-[203px] h-[19px] justify-center items-start shrink-0 basis-auto font-['Vazirmatn'] text-[12px] font-normal leading-[18.75px] text-[#e4ebf1] relative text-center whitespace-nowrap z-[347]">
            تمامی حقوق برای سامانه ماه محفوظ است.
          </span>
        </div>
      </div>
    </div>
    {introOpen && <MoonIntroDialog onClose={() => setIntroOpen(false)} />}
    </>
  );
}
