import React, { useState } from "react";

type Filters = {
  budget: string;
  audience: string;
  province: string;
  area: string;
};

type CompanyProject = {
  budget: number;
  audience: "women" | "families";
  province: "golestan" | "fars";
  area: "employment" | "health";
};

const COMPANY_PROJECTS: CompanyProject[] = [
  { budget: 400, audience: "women", province: "golestan", area: "employment" },
  { budget: 400, audience: "women", province: "golestan", area: "employment" },
  { budget: 500, audience: "families", province: "fars", area: "health" },
];

const selectClasses =
  "h-[44px] w-full cursor-pointer rounded-[8px] border border-[#e4ebf1] bg-[#fcfbf8] px-[12px] text-right text-[14px] text-[#17324d] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#2094e3]";

export default function CompanyRecommendations() {
  const [filters, setFilters] = useState<Filters>({
    budget: "",
    audience: "",
    province: "",
    area: "",
  });
  const [message, setMessage] = useState("");

  const update = (key: keyof Filters) => (event: React.ChangeEvent<HTMLSelectElement>) => {
    setFilters((current) => ({ ...current, [key]: event.target.value }));
    setMessage("");
  };

  const showRecommendations = () => {
    const cards = Array.from(document.querySelectorAll<HTMLElement>(".mah-company-projects-row > .mah-company-project-card"));
    if (cards.length !== COMPANY_PROJECTS.length) {
      setMessage("فهرست پروژه‌ها هنوز آماده نشده است. لطفاً دوباره تلاش کنید.");
      return;
    }

    let firstMatch: HTMLElement | undefined;
    let total = 0;
    cards.forEach((card, index) => {
      const item = COMPANY_PROJECTS[index];
      const matches =
        (!filters.budget || item.budget <= Number(filters.budget)) &&
        (!filters.audience || item.audience === filters.audience) &&
        (!filters.province || item.province === filters.province) &&
        (!filters.area || item.area === filters.area);

      card.hidden = !matches;
      if (matches) {
        total++;
        firstMatch ??= card;
      }
    });

    setMessage(total ? `${new Intl.NumberFormat("fa-IR").format(total)} پروژه متناسب نمایش داده شد.` : "در میان پروژه‌های معرفی‌شده در این صفحه، موردی با این ترکیب پیدا نشد. فیلترها را تغییر دهید.");
    firstMatch?.scrollIntoView({ behavior: "smooth", block: "center" });
  };

  return (
    <>
      <div dir="rtl" className="mah-company-recommendations flex flex-wrap items-start justify-between gap-[24px] self-stretch relative z-[221]">
        <label className="flex w-[282px] flex-col gap-[10px] rounded-[12px] border border-[#e4ebf1] bg-white p-[20px] text-right">
          <span className="text-[14px] font-semibold text-[#17324d]">براساس حوزه اثر</span>
          <select id="company-impact-area" aria-label="حوزه اثر" className={selectClasses} style={{ scrollMarginTop: "24px" }} value={filters.area} onChange={update("area")}>
            <option value="">همه حوزه‌ها</option>
            <option value="employment">اشتغال و معیشت</option>
            <option value="health">سلامت</option>
          </select>
        </label>
        <label className="flex w-[282px] flex-col gap-[10px] rounded-[12px] border border-[#e4ebf1] bg-white p-[20px] text-right">
          <span className="text-[14px] font-semibold text-[#17324d]">براساس استان</span>
          <select aria-label="استان" className={selectClasses} value={filters.province} onChange={update("province")}>
            <option value="">تمام استان‌های کشور</option>
            <option value="golestan">گلستان</option>
            <option value="fars">فارس</option>
          </select>
        </label>
        <label className="flex w-[282px] flex-col gap-[10px] rounded-[12px] border border-[#e4ebf1] bg-white p-[20px] text-right">
          <span className="text-[14px] font-semibold text-[#17324d]">براساس جامعه هدف</span>
          <select aria-label="جامعه هدف" className={selectClasses} value={filters.audience} onChange={update("audience")}>
            <option value="">همه گروه‌ها</option>
            <option value="women">زنان روستایی</option>
            <option value="families">خانواده‌ها</option>
          </select>
        </label>
        <label className="flex w-[282px] flex-col gap-[10px] rounded-[12px] border border-[#e4ebf1] bg-white p-[20px] text-right">
          <span className="text-[14px] font-semibold text-[#17324d]">براساس میزان منابع موردنیاز</span>
          <select aria-label="بازه بودجه" className={selectClasses} value={filters.budget} onChange={update("budget")}>
            <option value="">همه بازه‌های بودجه</option>
            <option value="400">تا ۴۰۰ میلیون تومان</option>
            <option value="500">تا ۵۰۰ میلیون تومان</option>
          </select>
        </label>
      </div>
      <div dir="rtl" className="flex flex-col items-center gap-[8px] self-stretch relative z-[242]">
        <button
          type="button"
          onClick={showRecommendations}
          className="min-h-[40px] rounded-[12px] bg-[#2094e3] px-[20px] py-[11px] text-center text-[14px] font-medium text-white hover:bg-[#167dca] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2094e3]"
        >
          مشاهده پیشنهادها
        </button>
        {message && (
          <p role="status" aria-live="polite" className="m-0 text-center text-[13px] leading-[24px] text-[#17324d]">
            {message}
          </p>
        )}
      </div>
    </>
  );
}
