import { useMemo, useState } from "react";
import "../index.css";

const imgChatGptImage1 = "/assets/fund-manager/funding-flow-control/logo.png";
const imgGroup = "/assets/fund-manager/funding-flow-control/dashboard.svg";
const imgGroup1 = "/assets/fund-manager/funding-flow-control/resources.svg";
const imgGroup2 = "/assets/fund-manager/funding-flow-control/investments.svg";
const imgGroup3 = "/assets/fund-manager/funding-flow-control/profits.svg";
const imgGroup4 = "/assets/fund-manager/funding-flow-control/cycle.svg";
const imgGroup5 = "/assets/fund-manager/funding-flow-control/history.svg";
const imgSettingsIcon = "/assets/fund-manager/funding-flow-control/settings.svg";

const MATCHED_KEY = "mah.fundManager.flowControl.matched.v2";
const HISTORY_KEY = "mah.fundManager.financialHistory.dynamic.v1";

type FlowStatus = "pending" | "matched" | "review";

type Flow = {
  id: string;
  project: string;
  source: string;
  amount: string;
  reference: string;
  date: string;
  kind: string;
  route: string;
  status: FlowStatus;
};

type HistoryEvent = {
  id: string;
  flowId: string;
  title: string;
  project: string;
  source: string;
  amount: string;
  reference: string;
  date: string;
  type: string;
  finalizedAt: string;
};

const FLOWS: Flow[] = [
  {
    id: "FLOW-1405-021",
    project: "سلامت خانواده",
    source: "پایدار پرداز خلاق آریا",
    amount: "۲۰۰ میلیون تومان",
    reference: "PAY-1405-0021",
    date: "۱۴۰۵/۰۶/۲۵",
    kind: "واریز شرکت",
    route: "شرکت ← صندوق ← پروژه سلامت خانواده",
    status: "pending",
  },
  {
    id: "FLOW-1405-022",
    project: "اشتغال زنان روستایی",
    source: "گروه بهار",
    amount: "۳۵۰ میلیون تومان",
    reference: "PAY-1405-0022",
    date: "۱۴۰۵/۰۶/۲۶",
    kind: "واریز شرکت",
    route: "شرکت ← صندوق ← پروژه اشتغال زنان روستایی",
    status: "pending",
  },
  {
    id: "FLOW-1405-023",
    project: "مهارت برای نوجوانان",
    source: "منابع صندوق",
    amount: "۱۲۰ میلیون تومان",
    reference: "FUND-1405-0018",
    date: "۱۴۰۵/۰۶/۲۷",
    kind: "آزادسازی مرحله",
    route: "صندوق ← کمیته امداد ← استارتاپ",
    status: "matched",
  },
  {
    id: "FLOW-1405-024",
    project: "توانمندسازی محلی",
    source: "شرکت سپهر",
    amount: "۵۰۰ میلیون تومان",
    reference: "PAY-1405-0024",
    date: "۱۴۰۵/۰۶/۲۸",
    kind: "واریز شرکت",
    route: "شرکت ← صندوق ← پروژه توانمندسازی محلی",
    status: "review",
  },
];

function readStringArray(key: string) {
  try {
    const raw = localStorage.getItem(key);
    if (!raw) return [] as string[];
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed.filter((item): item is string => typeof item === "string") : [];
  } catch {
    return [] as string[];
  }
}

function readHistoryEvents() {
  try {
    const raw = localStorage.getItem(HISTORY_KEY);
    if (!raw) return [] as HistoryEvent[];
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? (parsed as HistoryEvent[]) : [];
  } catch {
    return [] as HistoryEvent[];
  }
}

function SidebarLink({ href, icon, label, active = false, dataName }: { href: string; icon: string; label: string; active?: boolean; dataName: string }) {
  return (
    <a
      href={href}
      data-name={dataName}
      className={`flex h-[38px] w-[192px] items-center justify-end gap-[10px] rounded-[9px] px-[12px] text-white ${active ? "bg-[#2094e3]" : "bg-transparent"}`}
    >
      <span className="w-[142px] text-right text-[12px] font-medium">{label}</span>
      <img alt="" src={icon} className="h-[18px] w-[18px] object-contain" />
    </a>
  );
}

export default function FundManagerFundingFlowControl() {
  const [matchedIds, setMatchedIds] = useState<string[]>(() => readStringArray(MATCHED_KEY));
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const flows = useMemo(
    () =>
      FLOWS.map((flow) => ({
        ...flow,
        status: matchedIds.includes(flow.id) ? ("matched" as FlowStatus) : flow.status,
      })),
    [matchedIds],
  );

  const matchedCount = flows.filter((flow) => flow.status === "matched").length;
  const pendingCount = flows.filter((flow) => flow.status === "pending").length;
  const reviewCount = flows.filter((flow) => flow.status === "review").length;

  function finalizeFlow(flow: Flow) {
    if (matchedIds.includes(flow.id) || flow.status === "matched") return;

    const nextMatchedIds = [...matchedIds, flow.id];
    setMatchedIds(nextMatchedIds);
    localStorage.setItem(MATCHED_KEY, JSON.stringify(nextMatchedIds));

    const history = readHistoryEvents();
    const eventId = `match-${flow.id}`;
    if (!history.some((event) => event.id === eventId)) {
      const event: HistoryEvent = {
        id: eventId,
        flowId: flow.id,
        title: `تطبیق و ثبت نهایی ${flow.kind}`,
        project: flow.project,
        source: flow.source,
        amount: flow.amount,
        reference: flow.reference,
        date: flow.date,
        type: "تطبیق جریان مالی",
        finalizedAt: new Date().toISOString(),
      };
      localStorage.setItem(HISTORY_KEY, JSON.stringify([event, ...history]));
    }
  }

  const statusLabel = (status: FlowStatus) => {
    if (status === "matched") return "تطبیق‌شده";
    if (status === "review") return "نیازمند بررسی";
    return "در انتظار تطبیق";
  };

  const statusClass = (status: FlowStatus) => {
    if (status === "matched") return "bg-[#e8faf0] text-[#149e57] border-[#bfe8d0]";
    if (status === "review") return "bg-[#fff4e5] text-[#c77a0d] border-[#f1d7a6]";
    return "bg-[#e8f4fc] text-[#2094e3] border-[#bfdef5]";
  };

  return (
    <div className="fund-manager-panel flex h-[900px] w-[1440px] items-start bg-[#f5f8fb]" data-name="fund-manager-funding-flow-control">
      <main className="flex h-[900px] w-[1216px] flex-col gap-[16px] bg-[#f6f9fc] px-[28px] py-[22px]" data-name="Main Content" dir="rtl">
        <header className="flex h-[64px] w-[1160px] items-start justify-between">
          <div className="text-right">
            <h1 className="m-0 text-[22px] font-bold text-[#17324d]">کنترل جریان تأمین مالی</h1>
            <p className="mt-[7px] text-[11px] font-normal text-[#61758a]">
              تطبیق خودکار رخدادهای مالی و ثبت نهایی آن‌ها در سوابق صندوق
            </p>
          </div>
          <div className="rounded-[10px] border border-[#dbe5f0] bg-white px-[14px] py-[9px] text-[10px] text-[#60758a]">
            ثبت دستی حذف شده؛ فقط تطبیق و تأیید نهایی انجام می‌شود.
          </div>
        </header>

        <section className="grid h-[96px] w-[1160px] grid-cols-4 gap-[12px]" data-name="kpi-row">
          {[
            { value: `${pendingCount} مورد`, label: "در انتظار تطبیق", tone: "text-[#2094e3]" },
            { value: `${matchedCount} مورد`, label: "تطبیق‌شده", tone: "text-[#149e57]" },
            { value: `${reviewCount} مورد`, label: "نیازمند بررسی", tone: "text-[#d9592e]" },
            { value: `${flows.length} جریان`, label: "کل جریان‌های ورودی", tone: "text-[#17324d]" },
          ].map((item) => (
            <div key={item.label} className="flex flex-col items-center justify-center rounded-[12px] border border-[#dbe5f0] bg-white">
              <strong className={`text-[18px] ${item.tone}`}>{item.value}</strong>
              <span className="mt-[6px] text-[10px] text-[#61758a]">{item.label}</span>
            </div>
          ))}
        </section>

        <section className="flex h-[570px] w-[1160px] flex-col overflow-hidden rounded-[12px] border border-[#dbe5f0] bg-white" data-name="flow-control-table">
          <div className="flex items-center justify-between border-b border-[#edf2f7] px-[20px] py-[15px]">
            <div className="text-right">
              <h2 className="m-0 text-[18px] font-bold text-[#17324d]">جریان‌های در انتظار کنترل</h2>
              <p className="mt-[5px] text-[10px] text-[#61758a]">
                اطلاعات از رخدادهای پرداخت و آزادسازی وارد می‌شود؛ مدیر صندوق فقط تطبیق و ثبت نهایی را انجام می‌دهد.
              </p>
            </div>
            <div className="rounded-[8px] bg-[#f5f9fd] px-[12px] py-[7px] text-[10px] text-[#60758a]">
              {flows.length.toLocaleString("fa-IR")} جریان قابل مشاهده
            </div>
          </div>

          <div className="grid grid-cols-[1.25fr_1.1fr_.85fr_1fr_.9fr_1.65fr] gap-[8px] bg-[#f6f9fc] px-[18px] py-[11px] text-center text-[10px] font-medium text-[#61758a]">
            <span>پروژه</span>
            <span>شرکت / منبع</span>
            <span>مبلغ</span>
            <span>شناسه مرجع</span>
            <span>وضعیت</span>
            <span>اقدام</span>
          </div>

          <div className="flex-1 overflow-y-auto px-[14px] py-[10px]">
            {flows.map((flow) => {
              const isMatched = flow.status === "matched";
              const expanded = expandedId === flow.id;
              return (
                <div key={flow.id} className="mb-[9px] overflow-hidden rounded-[10px] border border-[#dbe5f0] bg-white">
                  <div className="grid min-h-[66px] grid-cols-[1.25fr_1.1fr_.85fr_1fr_.9fr_1.65fr] items-center gap-[8px] px-[10px] text-center text-[10px]">
                    <span className="font-medium text-[#17324d]">{flow.project}</span>
                    <span className="text-[#61758a]">{flow.source}</span>
                    <span className="font-medium text-[#17324d]">{flow.amount}</span>
                    <span className="text-[#61758a]">{flow.reference}</span>
                    <span className={`mx-auto rounded-[8px] border px-[10px] py-[5px] ${statusClass(flow.status)}`}>
                      {statusLabel(flow.status)}
                    </span>
                    <div className="flex items-center justify-center gap-[6px]">
                      <button
                        type="button"
                        onClick={() => setExpandedId(expanded ? null : flow.id)}
                        className="h-[32px] rounded-[8px] border border-[#dbe5f0] bg-white px-[10px] text-[10px] text-[#2094e3]"
                      >
                        {expanded ? "بستن جزئیات" : "مشاهده جزئیات"}
                      </button>
                      <button
                        type="button"
                        disabled={isMatched}
                        onClick={() => finalizeFlow(flow)}
                        className={`h-[32px] min-w-[118px] rounded-[8px] border px-[10px] text-[10px] font-medium ${
                          isMatched
                            ? "cursor-default border-[#bfe8d0] bg-[#e8faf0] text-[#149e57]"
                            : "cursor-pointer border-[#2094e3] bg-[#2094e3] text-white"
                        }`}
                      >
                        {isMatched ? "ثبت نهایی شد ✓" : "تطبیق و ثبت نهایی"}
                      </button>
                    </div>
                  </div>

                  {expanded && (
                    <div className="grid grid-cols-4 gap-[10px] border-t border-[#edf2f7] bg-[#f9fbfe] px-[16px] py-[12px] text-right">
                      <div>
                        <span className="block text-[9px] text-[#7b8da0]">نوع رخداد</span>
                        <strong className="mt-[3px] block text-[10px] text-[#17324d]">{flow.kind}</strong>
                      </div>
                      <div>
                        <span className="block text-[9px] text-[#7b8da0]">تاریخ ثبت رخداد</span>
                        <strong className="mt-[3px] block text-[10px] text-[#17324d]">{flow.date}</strong>
                      </div>
                      <div>
                        <span className="block text-[9px] text-[#7b8da0]">شناسه جریان</span>
                        <strong className="mt-[3px] block text-[10px] text-[#17324d]">{flow.id}</strong>
                      </div>
                      <div>
                        <span className="block text-[9px] text-[#7b8da0]">مسیر مالی</span>
                        <strong className="mt-[3px] block text-[10px] text-[#17324d]">{flow.route}</strong>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </section>

        <div className="flex h-[58px] w-[1160px] items-center justify-between rounded-[12px] border border-[#bfdef5] bg-[#e8f4fc] px-[18px] text-[10px] text-[#61758a]">
          <span>ثبت نهایی این صفحه فقط تطبیق مالی است؛ تأیید محتوایی پروژه در خانه خلاق و آزادسازی وجه در پنل کمیته امداد انجام می‌شود.</span>
          <a href="/panel/fund-manager/financial-history" className="font-medium text-[#2094e3]">مشاهده سوابق مالی ←</a>
        </div>
      </main>

      <aside className="flex h-[900px] w-[224px] flex-col items-end gap-[10px] bg-[#17324d] px-[16px] pb-[18px] pt-[20px]" data-name="colored-sidebar" dir="rtl">
        <div className="flex h-[56px] w-[192px] items-center justify-center rounded-[12px] bg-white px-[10px] py-[8px]" data-name="brand-logo">
          <img alt="ماه" src={imgChatGptImage1} className="h-[40px] w-[118px] object-contain" />
        </div>
        <div className="flex h-[64px] w-[192px] items-center justify-center px-[8px] text-center text-[13px] font-bold text-white">مدیر صندوق ماه</div>
        <SidebarLink href="/panel/fund-manager" icon={imgGroup} label="داشبورد" dataName="dashboard-nav" />
        <SidebarLink href="/panel/fund-manager/resources" icon={imgGroup1} label="منابع صندوق" dataName="startup-evaluations-nav" />
        <SidebarLink href="/panel/fund-manager/investments" icon={imgGroup2} label="سرمایه‌گذاری‌ها" dataName="project-evaluations-nav" />
        <SidebarLink href="/panel/fund-manager/profit-returns" icon={imgGroup3} label="سود و بازده" dataName="milestone-evaluations-nav" />
        <SidebarLink href="/panel/fund-manager/cycle-returns" icon={imgGroup4} label="بازگشت به چرخه" dataName="reports-nav" />
        <SidebarLink href="/panel/fund-manager/profit-split" icon={imgGroup5} label="تقسیم سود ۷۰/۳۰" dataName="revenues-nav" />
        <SidebarLink href="/panel/fund-manager/reports" icon={imgGroup5} label="گزارش‌های صندوق" dataName="evaluation-history-nav" />
        <SidebarLink href="/panel/fund-manager/financial-history" icon={imgSettingsIcon} label="سوابق مالی" dataName="settings-nav" />
        <SidebarLink href="/panel/fund-manager/funding-flow-control" icon={imgGroup1} label="کنترل جریان تأمین مالی" dataName="funding-flow-control-nav" active />
        <div className="flex-1" />
        <button type="button" data-name="logout-nav" className="h-[38px] w-[192px] cursor-pointer rounded-[9px] bg-white text-center text-[12px] font-medium text-[#17324d]">
          خروج از سیستم
        </button>
      </aside>
    </div>
  );
}
