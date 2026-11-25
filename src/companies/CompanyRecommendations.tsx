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
  province: string;
  area: "employment" | "health";
};

const COMPANY_PROJECTS: CompanyProject[] = [
  { budget: 400, audience: "women", province: "گلستان", area: "employment" },
  { budget: 400, audience: "women", province: "گلستان", area: "employment" },
  { budget: 500, audience: "families", province: "فارس", area: "health" },
];

const PROVINCES = [
  "آذربایجان شرقی",
  "آذربایجان غربی",
  "اردبیل",
  "اصفهان",
  "البرز",
  "ایلام",
  "بوشهر",
  "تهران",
  "چهارمحال و بختیاری",
  "خراسان جنوبی",
  "خراسان رضوی",
  "خراسان شمالی",
  "خوزستان",
  "زنجان",
  "سمنان",
  "سیستان و بلوچستان",
  "فارس",
  "قزوین",
  "قم",
  "کردستان",
  "کرمان",
  "کرمانشاه",
  "کهگیلویه و بویراحمد",
  "گلستان",
  "گیلان",
  "لرستان",
  "مازندران",
  "مرکزی",
  "هرمزگان",
  "همدان",
  "یزد",
];

const BUDGET_RANGES = [
  { max: 100, label: "تا ۱۰۰ میلیون تومان" },
  { max: 250, label: "۱۰۰ تا ۲۵۰ میلیون تومان" },
  { max: 500, label: "۲۵۰ تا ۵۰۰ میلیون تومان" },
  { max: 1000, label: "۵۰۰ میلیون تا ۱ میلیارد تومان" },
  { max: Infinity, label: "بیش از ۱ میلیارد تومان" },
];

const selectClasses =
  "min-h-[44px] w-full min-w-0 cursor-pointer rounded-[8px] border border-[#e4ebf1] bg-[#fcfbf8] px-[12px] text-right text-[14px] text-[#17324d] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#2094e3]";

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

    const budgetIndex = filters.budget === "" ? -1 : Number(filters.budget);
    const minBudget = BUDGET_RANGES[budgetIndex - 1]?.max ?? 0;
    const maxBudget = BUDGET_RANGES[budgetIndex]?.max ?? Infinity;

    let firstMatch: HTMLElement | undefined;
    let total = 0;
    cards.forEach((card, index) => {
      const item = COMPANY_PROJECTS[index];
      const matches =
        (budgetIndex < 0 || (item.budget > minBudget && item.budget <= maxBudget)) &&
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
      <div dir="rtl" className="mah-company-recommendations grid grid-cols-[repeat(auto-fit,minmax(min(100%,240px),1fr))] items-stretch gap-[24px] self-stretch relative z-[221]">
        <label className="flex min-w-0 flex-col gap-[10px] rounded-[12px] border border-[#e4ebf1] bg-white p-[20px] text-right">
          <span className="text-[14px] font-semibold text-[#17324d]">براساس حوزه اثر</span>
          <select id="company-impact-area" aria-label="حوزه اثر" className={selectClasses} style={{ scrollMarginTop: "24px" }} value={filters.area} onChange={update("area")}>
            <option value="">همه حوزه‌ها</option>
            <option value="employment">اشتغال و معیشت</option>
            <option value="health">سلامت و بهداشت</option>
            <option value="education">آموزش و مهارت</option>
            <option value="environment">محیط زیست</option>
            <option value="social-support">حمایت اجتماعی</option>
          </select>
        </label>
        <label className="flex min-w-0 flex-col gap-[10px] rounded-[12px] border border-[#e4ebf1] bg-white p-[20px] text-right">
          <span className="text-[14px] font-semibold text-[#17324d]">براساس استان</span>
          <select aria-label="استان" className={selectClasses} value={filters.province} onChange={update("province")}>
            <option value="">تمام استان‌های کشور</option>
            {PROVINCES.map((province) => (
              <option key={province} value={province}>{province}</option>
            ))}
          </select>
        </label>
        <label className="flex min-w-0 flex-col gap-[10px] rounded-[12px] border border-[#e4ebf1] bg-white p-[20px] text-right">
          <span className="text-[14px] font-semibold text-[#17324d]">براساس جامعه هدف</span>
          <select aria-label="جامعه هدف" className={selectClasses} value={filters.audience} onChange={update("audience")}>
            <option value="">همه گروه‌ها</option>
            <option value="women">زنان روستایی</option>
            <option value="families">خانواده‌ها</option>
            <option value="children">کودکان و نوجوانان</option>
            <option value="youth">جوانان</option>
            <option value="elderly">سالمندان</option>
            <option value="disabilities">افراد دارای معلولیت</option>
          </select>
        </label>
        <label className="flex min-w-0 flex-col gap-[10px] rounded-[12px] border border-[#e4ebf1] bg-white p-[20px] text-right">
          <span className="text-[14px] font-semibold text-[#17324d]">براساس میزان منابع موردنیاز</span>
          <select aria-label="بازه بودجه" className={selectClasses} value={filters.budget} onChange={update("budget")}>
            <option value="">همه بازه‌های بودجه</option>
            {BUDGET_RANGES.map(({ label }, index) => (
              <option key={label} value={index}>{label}</option>
            ))}
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
