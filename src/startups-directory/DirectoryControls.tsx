import React, { useState } from "react";

export type StartupFilters = {
  query: string;
  impact: string;
  province: string;
  project: string;
  sort: string;
};

export type StartupSample = {
  name: string;
  region: string;
  impact: string[];
  active: boolean;
};

export const STARTUP_SAMPLES: StartupSample[] = [
  { name: "سلامت‌یار خانواده", region: "فارس", impact: ["سلامت", "فناوری اجتماعی"], active: true },
  { name: "مهارت‌نو", region: "خراسان رضوی", impact: ["آموزش", "اشتغال"], active: true },
  { name: "مهارت‌نو", region: "گلستان", impact: ["اشتغال", "توسعه روستایی"], active: true },
  { name: "بازار بومی", region: "مازندران", impact: ["فناوری اجتماعی", "توسعه روستایی"], active: true },
  { name: "روستاتک", region: "سیستان و بلوچستان", impact: ["توسعه روستایی", "اشتغال"], active: true },
  { name: "خانه‌کار", region: "تهران", impact: ["اشتغال"], active: true },
  { name: "آینده‌ساز", region: "خوزستان", impact: ["آموزش"], active: true },
  { name: "زیست‌پاک", region: "اصفهان", impact: ["فناوری اجتماعی"], active: true },
  { name: "همیار سلامت", region: "کرمان", impact: ["سلامت"], active: true },
];

export const EMPTY_FILTERS: StartupFilters = {
  query: "",
  impact: "",
  province: "",
  project: "",
  sort: "",
};

function canonical(value: string) {
  return value.replace(/ي/g, "ی").replace(/ك/g, "ک").replace(/\u200c/g, "").replace(/\s+/g, " ").trim().toLocaleLowerCase("fa-IR");
}

export function matchesStartup(item: StartupSample, filters: StartupFilters) {
  const query = canonical(filters.query);
  return (!query || canonical([item.name, item.region, ...item.impact].join(" ")).includes(query)) &&
    (!filters.impact || item.impact.includes(filters.impact)) &&
    (!filters.province || item.region === filters.province) &&
    (!filters.project || (filters.project === "active" ? item.active : !item.active));
}

const impactCategories = ["همه استارتاپ‌ها", "اشتغال", "آموزش", "سلامت", "توسعه روستایی", "فناوری اجتماعی"];

const selectClass = "min-w-0 flex-1 cursor-pointer border-0 bg-transparent text-right text-[13px] text-[#17324d] outline-none";

export default function StartupDirectoryControls({
  applied,
  onApply,
}: {
  applied: StartupFilters;
  onApply: (filters: StartupFilters) => void;
}) {
  const [draft, setDraft] = useState<StartupFilters>(applied);
  const [message, setMessage] = useState("");

  const setField = (field: keyof StartupFilters, value: string) =>
    setDraft((current) => ({ ...current, [field]: value }));

  const apply = (filters: StartupFilters) => {
    onApply(filters);
    const count = STARTUP_SAMPLES.filter((item) => matchesStartup(item, filters)).length;
    setMessage(count ? `${new Intl.NumberFormat("fa-IR").format(count)} استارتاپ نمایشی مطابق فیلترها پیدا شد.` : "در میان استارتاپ‌های نمایشی این صفحه موردی مطابق فیلترها پیدا نشد.");
  };

  const clear = () => {
    setDraft(EMPTY_FILTERS);
    onApply(EMPTY_FILTERS);
    setMessage("همه فیلترها پاک شدند.");
  };

  return (
    <>
      <form
        dir="rtl"
        onSubmit={(event) => { event.preventDefault(); apply(draft); }}
        className="flex w-full flex-col gap-[16px] rounded-[16px] border border-[#e4ebf1] bg-white p-[24px] text-right"
        aria-label="جست‌وجو و فیلتر استارتاپ‌ها"
      >
        <div className="flex min-h-[44px] items-center gap-[12px] rounded-[12px] border border-[#e4ebf1] bg-[#fcfbf8] px-[12px]">
          <input
            dir="rtl"
            type="search"
            aria-label="جست‌وجوی نام یا حوزه فعالیت استارتاپ"
            placeholder="جست‌وجوی نام یا حوزه فعالیت استارتاپ..."
            value={draft.query}
            onChange={(event) => setField("query", event.target.value)}
            className="w-full min-w-0 flex-1 border-0 bg-transparent text-right text-[14px] text-[#17324d] outline-none placeholder:text-[#60758a]"
          />
          <img src="/assets/search.png" alt="" className="h-[18px] w-[18px] shrink-0" />
        </div>

        <div className="grid w-full grid-cols-1 gap-[12px] md:grid-cols-3 lg:grid-cols-5">
          <label className="flex min-h-[42px] items-center rounded-[10px] border border-[#e4ebf1] bg-white px-[12px]">
            <span className="sr-only">حوزه اثر</span>
            <select dir="rtl" value={draft.impact} onChange={(event) => setField("impact", event.target.value)} className={selectClass}>
              <option value="">همه حوزه‌های اثر</option>
              {impactCategories.slice(1).map((area) => <option key={area} value={area}>{area}</option>)}
            </select>
          </label>
          <label className="flex min-h-[42px] items-center rounded-[10px] border border-[#e4ebf1] bg-white px-[12px]">
            <span className="sr-only">استان محل فعالیت</span>
            <select dir="rtl" value={draft.province} onChange={(event) => setField("province", event.target.value)} className={selectClass}>
              <option value="">تمام استان‌ها</option>
              {[...new Set(STARTUP_SAMPLES.map((item) => item.region))].sort((a, b) => a.localeCompare(b, "fa")).map((region) => <option key={region} value={region}>{region}</option>)}
            </select>
          </label>
          <label className="flex min-h-[42px] items-center rounded-[10px] border border-[#e4ebf1] bg-white px-[12px]">
            <span className="sr-only">وضعیت پروژه</span>
            <select dir="rtl" value={draft.project} onChange={(event) => setField("project", event.target.value)} className={selectClass}>
              <option value="">همه وضعیت‌های پروژه</option>
              <option value="active">دارای پروژه فعال</option>
              <option value="inactive">بدون پروژه فعال</option>
            </select>
          </label>
          <label className="flex min-h-[42px] items-center rounded-[10px] border border-[#e4ebf1] bg-white px-[12px]">
            <span className="sr-only">مرحله رشد</span>
            <select dir="rtl" className={selectClass} disabled title="اطلاعات مرحله رشد هنوز برای استارتاپ‌های نمایشی ثبت نشده است.">
              <option>مرحله رشد (اطلاعات موجود نیست)</option>
            </select>
          </label>
          <label className="flex min-h-[42px] items-center rounded-[10px] border border-[#e4ebf1] bg-white px-[12px]">
            <span className="sr-only">مرتب‌سازی</span>
            <select dir="rtl" value={draft.sort} onChange={(event) => setField("sort", event.target.value)} className={selectClass}>
              <option value="">مرتب‌سازی پیش‌فرض</option>
              <option value="name">نام استارتاپ (الفبایی)</option>
              <option value="province">استان (الفبایی)</option>
            </select>
          </label>
        </div>

        <div className="flex flex-wrap items-center gap-[12px]">
          <button type="submit" className="min-h-[40px] rounded-[12px] bg-[#2094e3] px-[20px] py-[10px] text-[14px] text-white hover:bg-[#167dca] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#2094e3]">
            اعمال فیلتر
          </button>
          <button type="button" onClick={clear} className="min-h-[40px] rounded-[10px] border border-[#e4ebf1] bg-white px-[14px] py-[10px] text-[13px] text-[#495468] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#2094e3]">
            پاک کردن فیلترها
          </button>
          {message ? <span role="status" aria-live="polite" className="text-right text-[12px] text-[#60758a]">{message}</span> : null}
        </div>
      </form>
      <div dir="rtl" className="flex w-full flex-wrap items-center gap-[8px]">
        {impactCategories.map((name, index) => {
          const impact = index === 0 ? "" : name;
          const active = applied.impact === impact;
          return (
            <button
              key={name}
              type="button"
              aria-pressed={active}
              onClick={() => {
                const next = { ...draft, impact };
                setDraft(next);
                apply(next);
              }}
              className={`min-h-[32px] rounded-[10px] px-[14px] py-[7px] text-[13px] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#2094e3] ${active ? "bg-[#2094e3] font-bold text-white" : "bg-[#eaf5fd] text-[#2094e3] hover:bg-[#dceefd]"}`}
            >
              {name}
            </button>
          );
        })}
      </div>
    </>
  );
}
