import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./index.css";

type Metric = { label: string; value: string };
type Project = {
  title: string;
  startup: string;
  province: string;
  area: string;
  image: string;
  status: string;
  metrics: Metric[];
  goal: string;
  raised: string;
  progress: number;
  href: string;
};

const projects: Project[] = [
  {
    title: "اشتغال زنان روستایی",
    startup: "راهکار سبز",
    province: "گلستان",
    area: "اشتغال و توانمندسازی زنان",
    image: "/assets/codia/ojK6X1VFPh.png",
    status: "در حال جذب سرمایه",
    metrics: [
      { label: "فرصت شغلی", value: "۱۲۰ فرصت" },
      { label: "افراد بهره‌مند", value: "۴۵۰ فرد" },
      { label: "پوشش روستایی", value: "۲۵ روستا" },
      { label: "توسعه درآمدی", value: "۳۰٪ افزایش" },
    ],
    goal: "هدف: ۴۰۰ میلیون",
    raised: "۲۳۲ میلیون تومان",
    progress: 58,
    href: "/projects/variants/rural-women",
  },
  {
    title: "مهارت برای نوجوانان",
    startup: "آینده‌ساز",
    province: "اصفهان",
    area: "آموزش و اشتغال",
    image: "/assets/codia/udJSnUQToA.png",
    status: "نزدیک به تکمیل",
    metrics: [
      { label: "نوجوان آموزش‌دیده", value: "۳۵۰ نوجوان" },
      { label: "فرصت شغلی", value: "۹۰ فرصت" },
      { label: "مراکز علمی", value: "۱۲ مدرسه" },
      { label: "اشتغال‌پذیری", value: "۷۰٪ افزایش" },
    ],
    goal: "هدف: ۴۰۰ میلیون",
    raised: "۲۹۶ میلیون تومان",
    progress: 74,
    href: "/projects/youth-skills",
  },
  {
    title: "سلامت خانواده",
    startup: "همراه سلامت",
    province: "سیستان و بلوچستان",
    area: "سلامت و بهداشت",
    image: "/assets/codia/LfY7LFAiEe.png",
    status: "در حال جذب سرمایه",
    metrics: [
      { label: "افراد بهره‌مند", value: "۲٬۵۰۰ فرد" },
      { label: "پوشش روستایی", value: "۴۲ روستا" },
      { label: "مراکز سلامت", value: "۸ مرکز" },
      { label: "پوشش خدمات", value: "۷۴٪ کل" },
    ],
    goal: "هدف: ۳۵۰ میلیون",
    raised: "۱۷۸٫۵ میلیون تومان",
    progress: 51,
    href: "/projects/family-health",
  },
  {
    title: "زنجیره تأمین مشاغل خانگی",
    startup: "بازار بومی",
    province: "فارس",
    area: "معیشت و درآمد پایدار",
    image: "/assets/codia/rO73Py6N6q.png",
    status: "در حال جذب سرمایه",
    metrics: [
      { label: "فرصت شغلی", value: "۱۸۰ فرصت" },
      { label: "خانوار تحت پوشش", value: "۶۲۰ خانوار" },
      { label: "پوشش جغرافیایی", value: "۱۵ شهر" },
      { label: "کاهش هزینه فروش", value: "۲۵٪ کاهش" },
    ],
    goal: "هدف: ۸۰۰ میلیون",
    raised: "۵۲۰ میلیون تومان",
    progress: 65,
    href: "/projects/home-business-supply",
  },
  {
    title: "آموزش دیجیتال مناطق روستایی",
    startup: "دانش‌راه",
    province: "خراسان جنوبی",
    area: "آموزش و مهارت",
    image: "/assets/codia/udJSnUQToA.png",
    status: "در حال جذب سرمایه",
    metrics: [
      { label: "دانش‌آموز", value: "۱٬۲۰۰ نفر" },
      { label: "روستای تحت پوشش", value: "۳۵ روستا" },
      { label: "مربی محلی", value: "۶۰ مربی" },
      { label: "تکمیل دوره", value: "۸۲٪ تکمیل" },
    ],
    goal: "هدف: ۶۰۰ میلیون",
    raised: "۴۱۰ میلیون تومان",
    progress: 68,
    href: "/projects/rural-digital-education",
  },
  {
    title: "کشاورزی کم‌آب و پایدار",
    startup: "کشت‌یار",
    province: "کرمان",
    area: "کشاورزی و محیط‌زیست",
    image: "/assets/codia/LfY7LFAiEe.png",
    status: "نزدیک به تکمیل",
    metrics: [
      { label: "مزرعه تحت پوشش", value: "۸۵ مزرعه" },
      { label: "کشاورز فعال", value: "۲۴۰ کشاورز" },
      { label: "روستای بهره‌مند", value: "۱۸ روستا" },
      { label: "صرفه‌جویی آب", value: "۳۰٪ صرفه‌جویی" },
    ],
    goal: "هدف: ۹۰۰ میلیون",
    raised: "۳۶۰ میلیون تومان",
    progress: 40,
    href: "/projects/sustainable-agriculture",
  },
];

const icon = (name: string) => `/assets/codia/projects-${name}.svg`;

function Header() {
  return (
    <header className="flex w-full items-center justify-between border-b border-[#e4ebf1] bg-white px-[120px] py-[16px]" dir="ltr">
      <div className="flex w-[384px] items-center gap-[12px]">
        <Link to="/auth" className="flex h-[44px] w-[120px] items-center justify-center rounded-[12px] border-[1.5px] border-[#2094e3] bg-white text-[14px] font-medium text-[#2094e3] no-underline" dir="rtl">ورود کاربران</Link>
        <Link to="/participation/track" className="flex h-[44px] w-[120px] items-center justify-center rounded-[12px] border-[1.5px] border-[#2094e3] bg-white text-[14px] font-medium text-[#2094e3] no-underline" dir="rtl">پیگیری مشارکت</Link>
        <a href="#projects-grid" className="flex h-[44px] w-[120px] items-center justify-center rounded-[12px] bg-[#2094e3] text-[14px] font-medium text-white no-underline" dir="rtl">شروع مشارکت</a>
      </div>
      <div className="flex items-center gap-[40px]">
        <nav className="flex items-center gap-[24px] text-[14px] font-medium" dir="ltr">
          <Link to="/about" className="text-[#17324d] no-underline" dir="rtl">درباره ما</Link>
          <Link to="/contact" className="text-[#17324d] no-underline" dir="rtl">تماس با ما</Link>
          <Link to="/companies" className="text-[#17324d] no-underline" dir="rtl">شرکت‌ها</Link>
          <Link to="/startups" className="text-[#17324d] no-underline" dir="rtl">استارتاپ‌ها</Link>
          <Link to="/projects" className="text-[#2094e3] no-underline" dir="rtl">پروژه‌ها</Link>
          <Link to="/" className="text-[#17324d] no-underline" dir="rtl">صفحه اصلی</Link>
        </nav>
        <Link to="/" aria-label="صفحه اصلی" className="block h-[46px] w-[137px] bg-[url('/assets/codia/4T7A4AiY30.png')] bg-cover bg-no-repeat" />
      </div>
    </header>
  );
}

function InternalHero() {
  const stats = [
    ["۲۴", "پروژه فعال"],
    ["۱۲٬۸۴۰", "فرد بهره‌مند"],
    ["۳۴۶", "فرصت شغلی"],
  ];
  return (
    <section className="flex w-full flex-col items-end gap-[20px] border-b border-[#e4ebf1] bg-[#fcfbf8] px-[120px] py-[48px]">
      <div className="flex w-full justify-end"><p className="text-[12px] font-normal text-[#60758a]" dir="rtl">صفحه اصلی / پروژه‌ها</p></div>
      <div className="flex w-full items-center justify-between" dir="ltr">
        <div className="flex items-center gap-[24px]">
          {stats.map(([value, label], index) => (
            <React.Fragment key={value}>
              <div className="flex flex-col items-center gap-[4px] whitespace-nowrap" dir="rtl">
                <p className="text-[20px] font-bold text-[#17324d]">{value}</p>
                <p className="text-[12px] font-normal text-[#60758a]">{label}</p>
              </div>
              {index < stats.length - 1 && <div className="h-[40px] w-px bg-[#e4ebf1]" />}
            </React.Fragment>
          ))}
        </div>
        <div className="flex flex-col items-end gap-[8px] text-right" dir="rtl">
          <h1 className="text-[32px] font-extrabold leading-normal text-[#17324d]">پروژه‌های اثر اجتماعی</h1>
          <p className="text-[15px] font-normal text-[#60758a]">پروژه‌ای را انتخاب کنید که اثر آن از قبل مشخص، تأیید و قابل‌اندازه‌گیری است.</p>
        </div>
      </div>
    </section>
  );
}

function TrustBar() {
  const items = [
    { text: "نتایج پروژه قابل پیگیری و گزارش‌گیری است", icon: icon("chart-column") },
    { text: "پرداخت مستقیم به حساب کمیته امداد", icon: icon("credit-card") },
    { text: "اثر پروژه توسط خانه خلاق و نوآوری آینه تأیید شده است", icon: icon("shield-check") },
  ];
  return (
    <section className="flex w-full items-center justify-between border-b border-[#e4ebf1] bg-[#eaf5fd] px-[120px] py-[20px]" dir="ltr">
      {items.map((item) => (
        <div key={item.text} className="flex items-center gap-[8px]" dir="ltr">
          <p className="whitespace-nowrap text-right text-[13px] font-medium text-[#2094e3]" dir="rtl">{item.text}</p>
          <img src={item.icon} alt="" className="h-[16px] w-[16px]" />
        </div>
      ))}
    </section>
  );
}

function Dropdown({ label, options, value, onChange }: { label: string; options: string[]; value: string; onChange: (value: string) => void }) {
  return (
    <label className="relative min-w-0 flex-1" dir="rtl">
      <select value={value} onChange={(event) => onChange(event.target.value)} className="h-[40px] w-full appearance-none rounded-[10px] border border-[#e4ebf1] bg-white px-[14px] pl-[36px] text-right text-[12px] font-normal text-[#17324d]">
        <option value="">{label}</option>
        {options.map((option) => <option value={option} key={option}>{option}</option>)}
      </select>
      <img src={icon("chevron-down")} alt="" className="pointer-events-none absolute left-[14px] top-1/2 h-[14px] w-[14px] -translate-y-1/2" />
    </label>
  );
}

function Filters() {
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("");
  const [progress, setProgress] = useState("");
  const [status, setStatus] = useState("");
  const [province, setProvince] = useState("");
  const [target, setTarget] = useState("");
  const [area, setArea] = useState("");
  const [chips, setChips] = useState(["اشتغال", "زنان سرپرست خانوار", "گلستان"]);

  const clear = () => {
    setSearch(""); setSort(""); setProgress(""); setStatus(""); setProvince(""); setTarget(""); setArea(""); setChips([]);
  };
  const apply = () => {
    const selected = [province, target, area].filter(Boolean);
    if (selected.length) setChips(selected);
  };

  return (
    <>
      <section className="flex w-full flex-col items-end gap-[16px] border-b border-[#e4ebf1] bg-white px-[120px] pb-[16px] pt-[24px]">
        <label className="relative w-full" dir="rtl">
          <input value={search} onChange={(event) => setSearch(event.target.value)} placeholder="جست‌وجوی نام پروژه یا استارتاپ..." className="h-[44px] w-full rounded-[12px] border border-[#e4ebf1] bg-[#fcfbf8] px-[44px] text-right text-[14px] font-normal text-[#17324d] placeholder:text-[#60758a]" />
          <img src={icon("search")} alt="" className="pointer-events-none absolute right-[14px] top-1/2 h-[18px] w-[18px] -translate-y-1/2" />
        </label>
        <div className="flex w-full items-start gap-[12px]" dir="ltr">
          <Dropdown label="جدیدترین" value={sort} onChange={setSort} options={["بیشترین تأمین مالی", "کمترین تأمین مالی"]} />
          <Dropdown label="پیشرفت تأمین مالی" value={progress} onChange={setProgress} options={["کمتر از ۵۰٪", "۵۰٪ تا ۷۵٪", "بیش از ۷۵٪"]} />
          <Dropdown label="وضعیت پروژه" value={status} onChange={setStatus} options={["در حال جذب سرمایه", "نزدیک به تکمیل"]} />
          <Dropdown label="استان" value={province} onChange={setProvince} options={["گلستان", "اصفهان", "سیستان و بلوچستان", "فارس", "خراسان جنوبی", "کرمان"]} />
          <Dropdown label="جامعه هدف" value={target} onChange={setTarget} options={["زنان سرپرست خانوار", "نوجوانان", "خانواده‌ها", "روستاییان", "کشاورزان"]} />
          <Dropdown label="حوزه اثر" value={area} onChange={setArea} options={["اشتغال", "آموزش", "سلامت", "معیشت", "کشاورزی"]} />
        </div>
        <div className="flex w-full justify-end gap-[12px]" dir="ltr">
          <button type="button" onClick={apply} className="flex min-h-[44px] items-center justify-center rounded-[12px] bg-[#2094e3] px-[20px] py-[11px] text-[14px] font-medium text-white">اعمال فیلتر</button>
          <button type="button" onClick={clear} className="flex items-center justify-center rounded-[8px] border border-[#dbe0e8] bg-white px-[14px] py-[10px] text-[13px] font-medium text-[#4a5469]">پاک کردن فیلترها</button>
        </div>
      </section>
      <div className="flex w-full items-center justify-end gap-[12px] px-[120px] py-[12px]" dir="ltr">
        <button type="button" onClick={() => setChips([])} className="bg-transparent text-[13px] font-normal text-[#2094e3]">پاک‌کردن همه</button>
        {chips.map((chip) => (
          <button type="button" key={chip} onClick={() => setChips((current) => current.filter((item) => item !== chip))} className="flex items-center gap-[6px] rounded-[8px] bg-[#eaf5fd] px-[10px] py-[6px] text-[12px] font-normal text-[#2094e3]" dir="ltr">
            <img src={icon("x-circle")} alt="" className="h-[10px] w-[10px]" />
            <span dir="rtl">{chip}</span>
          </button>
        ))}
        <span className="text-[13px] font-normal text-[#60758a]" dir="rtl">فیلترهای فعال:</span>
      </div>
    </>
  );
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="flex w-[384px] shrink-0 flex-col items-end gap-[20px] rounded-[24px] border border-[#e4ebf1] bg-[#fcfbf8] p-[24px] shadow-[0_4px_16px_rgba(22,45,71,0.08)]" dir="rtl">
      <div className="relative h-[180px] w-full overflow-hidden rounded-[16px]">
        <img src={project.image} alt="" className="absolute inset-0 h-full w-full object-cover" />
        <div className="relative flex w-full items-start justify-between p-[12px]">
          <span className="rounded-[8px] bg-[#159455] px-[10px] py-[4px] text-[11px] font-bold text-white">اثر تأییدشده</span>
          <span className="rounded-[8px] bg-[rgba(0,0,0,0.7)] px-[10px] py-[4px] text-[11px] font-bold text-white">{project.status}</span>
        </div>
      </div>
      <div className="flex w-full flex-col items-end gap-[8px]">
        <div className="flex w-full items-center justify-end gap-[8px] whitespace-nowrap text-[12px] font-normal">
          <span className="text-[#60758a]">استان: {project.province}</span><span className="text-[#60758a]">|</span><span className="text-[#2094e3]">حوزه: {project.area}</span>
        </div>
        <h2 className="w-full text-right text-[18px] font-bold leading-normal text-[#17324d]">{project.title}</h2>
        <p className="w-full text-right text-[13px] font-normal text-[#60758a]">استارتاپ: {project.startup}</p>
      </div>
      <div className="flex w-full flex-col items-end gap-[12px]">
        <div className="grid w-full grid-cols-2 gap-x-[16px] gap-y-[12px]">
          {project.metrics.map((metric) => (
            <div key={metric.label} className="flex flex-col items-end gap-[2px] text-right">
              <span className="text-[11px] font-normal text-[#60758a]">{metric.label}</span>
              <span className="text-[14px] font-bold text-[#17324d]">{metric.value}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="flex w-full flex-col items-end gap-[8px]">
        <div className="flex w-full items-center justify-between text-[12px]" dir="ltr">
          <span className="font-normal text-[#60758a]" dir="rtl">{project.goal}</span>
          <span className="font-bold text-[#17324d]" dir="rtl">{project.raised}</span>
        </div>
        <div className="flex h-[8px] w-full items-start justify-end overflow-hidden rounded-[4px] bg-[#e4ebf1]" dir="rtl">
          <div className="h-full bg-[#2094e3]" style={{ width: `${project.progress}%` }} />
        </div>
        <span className="text-right text-[12px] font-bold text-[#2094e3]">{project.progress.toLocaleString("fa-IR")}٪ تأمین شده</span>
      </div>
      <Link to={project.href} className="flex min-h-[44px] w-full items-center justify-center rounded-[12px] bg-[#2094e3] px-[20px] py-[11px] text-[14px] font-medium text-white no-underline">مشاهده و مشارکت</Link>
    </article>
  );
}

function ProjectsGrid() {
  return (
    <section id="projects-grid" className="flex w-full items-start justify-end px-[120px]">
      <div className="flex w-full flex-wrap items-start gap-[24px]" dir="ltr">
        {projects.map((project) => <ProjectCard key={project.title} project={project} />)}
      </div>
    </section>
  );
}

function Pagination() {
  return (
    <div className="flex w-full items-center justify-between px-[120px] pb-[48px] pt-[32px]" dir="ltr">
      <p className="text-[13px] font-normal text-[#60758a]" dir="rtl">نمایش ۱ تا ۶ از ۲۴ پروژه</p>
      <div className="flex items-center gap-[8px]">
        <button className="rounded-[8px] border border-[#e4ebf1] bg-white px-[12px] py-[6px] text-[13px] text-[#60758a]">بعدی</button>
        {["۴", "۳", "۲"].map((page) => <button key={page} className="rounded-[8px] border border-[#e4ebf1] bg-white px-[12px] py-[6px] text-[13px] text-[#60758a]">{page}</button>)}
        <button className="rounded-[8px] border border-[#2094e3] bg-[#eaf5fd] px-[12px] py-[6px] text-[13px] font-bold text-[#2094e3]">۱</button>
        <button className="rounded-[8px] border border-[#e4ebf1] bg-white px-[12px] py-[6px] text-[13px] text-[#60758a]">قبلی</button>
      </div>
    </div>
  );
}

function FinalCta() {
  return (
    <section className="flex w-full flex-col items-center gap-[24px] border-y border-[#e4ebf1] bg-[#fcfbf8] px-[120px] py-[80px]" dir="rtl">
      <h2 className="text-center text-[32px] font-extrabold text-[#17324d]">پروژه مناسب خود را پیدا نکردید؟</h2>
      <p className="text-center text-[14px] font-normal text-[#60758a]">با مشاهده همه حوزه‌های اثر یا تماس با تیم ماه، مسیر مشارکت مناسب را پیدا کنید.</p>
      <div className="flex items-start gap-[16px]" dir="ltr">
        <Link to="/contact" className="flex min-h-[44px] items-center justify-center rounded-[12px] border border-[#e4ebf1] bg-white px-[20px] py-[11px] text-[14px] font-medium text-[#2094e3] no-underline">تماس با ما</Link>
        <a href="#projects-grid" className="flex min-h-[44px] items-center justify-center rounded-[12px] bg-[#2094e3] px-[20px] py-[11px] text-[14px] font-medium text-white no-underline">شروع مشارکت</a>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="flex w-full flex-col items-start gap-[64px] bg-[#111e30] px-[120px] pb-[40px] pt-[80px] text-[#e4ebf1]" dir="ltr">
      <div className="flex w-full items-start gap-[48px]">
        <div className="flex h-[182px] w-[220px] flex-col items-end gap-[12px] text-right" dir="rtl">
          <strong className="text-[14px] font-bold text-white">ارتباط با ما</strong>
          <p className="text-[13px] font-normal"><span>تلفن: </span><bdi dir="ltr">۰۲۱-۶۶۴۸۵۳۷۴</bdi></p>
          <a href="mailto:info@mahcsr.ir" className="text-[13px] font-normal text-[#e4ebf1] no-underline">ایمیل: info@mahcsr.ir</a>
          <div className="flex items-center gap-[12px] pt-[8px]" dir="ltr">
            <img src={icon("telegram")} alt="Telegram" className="h-[18px] w-[18px]" />
            <img src={icon("eitaa")} alt="Eitaa" className="h-[18px] w-[18px]" />
          </div>
        </div>
        <div className="flex h-[182px] w-[150px] flex-col items-end gap-[12px] text-right" dir="rtl">
          <strong className="text-[14px] font-bold text-white">حقوقی</strong>
          <Link to="/terms" className="text-[13px] text-[#e4ebf1] no-underline">قوانین و مقررات</Link>
          <Link to="/privacy-policy" className="text-[13px] text-[#e4ebf1] no-underline">حریم خصوصی</Link>
        </div>
        <div className="flex h-[182px] w-[160px] flex-col items-end gap-[12px] text-right" dir="rtl">
          <strong className="text-[14px] font-bold text-white">پشتیبانی</strong>
          <Link to="/contact" className="text-[13px] text-[#e4ebf1] no-underline">تماس با ما</Link>
          <Link to="/faq" className="text-[13px] text-[#e4ebf1] no-underline">سؤالات متداول</Link>
          <Link to="/participation/track" className="text-[13px] text-[#e4ebf1] no-underline">پیگیری مشارکت</Link>
        </div>
        <div className="flex w-[180px] flex-col items-end gap-[12px] text-right" dir="rtl">
          <strong className="text-[14px] font-bold text-white">دسترسی سریع</strong>
          <Link to="/projects" className="text-[13px] text-[#e4ebf1] no-underline">پروژه‌ها</Link>
          <Link to="/companies" className="text-[13px] text-[#e4ebf1] no-underline">برای شرکت‌ها</Link>
          <Link to="/how-it-works" className="text-[13px] text-[#e4ebf1] no-underline">نحوه مشارکت</Link>
          <Link to="/register/startup" className="text-[13px] text-[#e4ebf1] no-underline">ثبت‌نام استارتاپ</Link>
          <Link to="/news" className="text-[13px] text-[#e4ebf1] no-underline">اخبار و رویدادها</Link>
        </div>
        <div className="flex h-[182px] w-[298px] flex-col items-end gap-[14px] text-right" dir="rtl">
          <Link to="/" className="block h-[70px] w-[210px] bg-[url('/assets/codia/4T7A4AiY30.png')] bg-cover bg-no-repeat" aria-label="سامانه ماه" />
          <p className="w-full text-[13px] font-normal leading-[22px] text-[#e4ebf1]">سامانه مشارکت در پروژه‌های اثر اجتماعی با مسیر مالی شفاف و اثر قابل‌اندازه‌گیری.</p>
        </div>
      </div>
      <div className="flex w-full flex-col items-center gap-[4px] border-t border-[rgba(255,255,255,0.12)] pt-[20px] text-center text-[12px] font-normal text-[#e4ebf1]" dir="rtl">
        <p>طراحی و توسعه با هدف ارتقای عدالت اجتماعی</p>
        <p>تمامی حقوق برای سامانه ماه محفوظ است.</p>
      </div>
    </footer>
  );
}

export default function MahProjects() {
  return (
    <main className="mah-projects-page mx-auto flex w-[1440px] flex-col items-center overflow-hidden bg-[#fcfbf8]" dir="ltr">
      <Header />
      <InternalHero />
      <TrustBar />
      <Filters />
      <ProjectsGrid />
      <Pagination />
      <FinalCta />
      <Footer />
    </main>
  );
}
