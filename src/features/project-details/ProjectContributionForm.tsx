import { useState } from "react";
import { useParams } from "react-router-dom";

const PRESET_AMOUNTS = [
  { value: 1_000_000, label: "۱ میلیون تومان" },
  { value: 500_000, label: "۵۰۰ هزار تومان" },
  { value: 10_000_000, label: "۱۰ میلیون تومان" },
  { value: 5_000_000, label: "۵ میلیون تومان" },
] as const;

const persianNumber = new Intl.NumberFormat("fa-IR");

function parseToman(value: string) {
  const digits = value
    .replace(/[۰-۹]/g, (digit) => String(digit.charCodeAt(0) - 1776))
    .replace(/[٠-٩]/g, (digit) => String(digit.charCodeAt(0) - 1632))
    .replace(/[٬,\s]/g, "");

  return /^\d+$/.test(digits) ? Number(digits) : NaN;
}

export default function ProjectContributionForm() {
  const { projectId } = useParams<{ projectId: string }>();
  const [participantType, setParticipantType] = useState<"individual" | "organization">("individual");
  const [customAmount, setCustomAmount] = useState("");
  const [error, setError] = useState("");

  const setType = (type: "individual" | "organization") => {
    setParticipantType(type);
    setError("");
  };

  const selectAmount = (amount: number) => {
    setCustomAmount(persianNumber.format(amount));
    setError("");
  };

  const continueParticipation = () => {
    if (!projectId) {
      setError("شناسه پروژه در دسترس نیست. لطفاً دوباره از فهرست پروژه‌ها وارد شوید.");
      return;
    }

    if (participantType === "organization") {
      window.location.assign(`/panel/company/projects/${encodeURIComponent(projectId)}/participate`);
      return;
    }

    const amount = parseToman(customAmount);
    if (!Number.isSafeInteger(amount) || amount <= 0) {
      setError("لطفاً مبلغ مشارکت را انتخاب کنید یا به تومان وارد کنید.");
      return;
    }

    window.location.assign(
      `/projects/${encodeURIComponent(projectId)}/participate?type=individual&amount=${amount}`,
    );
  };

  return (
    <section data-mah-contribution-form="true" dir="rtl" className="flex w-full flex-col gap-[16px] text-right font-['Vazirmatn']">
      <div role="group" aria-label="نوع مشارکت" className="flex w-full gap-[4px] rounded-[12px] bg-[#fcfbf8] p-[4px]">
        <button
          type="button"
          aria-pressed={participantType === "individual"}
          onClick={() => setType("individual")}
          className={`min-h-[36px] flex-1 rounded-[8px] px-[8px] py-[8px] text-[13px] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#2094e3] ${participantType === "individual" ? "bg-white font-bold text-[#17324d] shadow-sm" : "bg-transparent font-normal text-[#60758a]"}`}
        >
          مشارکت فردی
        </button>
        <button
          type="button"
          aria-pressed={participantType === "organization"}
          onClick={() => setType("organization")}
          className={`min-h-[36px] flex-1 rounded-[8px] px-[8px] py-[8px] text-[13px] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#2094e3] ${participantType === "organization" ? "bg-white font-bold text-[#17324d] shadow-sm" : "bg-transparent font-normal text-[#60758a]"}`}
        >
          مشارکت سازمانی
        </button>
      </div>

      {participantType === "individual" ? (
        <>
          <div className="grid w-full grid-cols-2 gap-[8px]">
            {PRESET_AMOUNTS.map(({ value, label }) => (
              <button
                key={value}
                type="button"
                aria-pressed={parseToman(customAmount) === value}
                onClick={() => selectAmount(value)}
                className={`min-h-[38px] rounded-[10px] border px-[8px] py-[8px] text-center text-[13px] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#2094e3] ${parseToman(customAmount) === value ? "border-[#2094e3] bg-[#eaf5fd] font-bold text-[#176bac]" : "border-[#e4ebf1] bg-white font-normal text-[#17324d]"}`}
              >
                {label}
              </button>
            ))}
          </div>

          <div className="flex w-full flex-col gap-[6px]">
            <label htmlFor="mah-project-contribution-amount" className="text-[12px] text-[#60758a]">
              مبلغ دلخواه
            </label>
            <div dir="ltr" className="flex h-[46px] w-full items-center gap-[12px] rounded-[10px] border border-[#e4ebf1] bg-white px-[12px] focus-within:border-[#2094e3]">
              <span dir="rtl" className="shrink-0 text-[14px] text-[#60758a]">تومان</span>
              <input
                id="mah-project-contribution-amount"
                dir="rtl"
                type="text"
                inputMode="numeric"
                autoComplete="off"
                aria-invalid={Boolean(error)}
                aria-describedby={error ? "mah-project-contribution-error" : undefined}
                value={customAmount}
                onChange={(event) => {
                  setCustomAmount(event.target.value);
                  setError("");
                }}
                placeholder="مبلغ مورد نظر را وارد کنید"
                className="min-w-0 flex-1 border-0 bg-transparent p-0 text-right text-[14px] text-[#17324d] outline-none placeholder:text-[#60758a]"
                style={{ textAlign: "right", direction: "rtl" }}
              />
            </div>
          </div>
        </>
      ) : (
        <p className="m-0 w-full text-right text-[13px] leading-[24px] text-[#60758a]">
          برای مشارکت سازمانی به پنل شرکت منتقل می‌شوید.
        </p>
      )}

      <div className="flex w-full flex-col items-center gap-[10px]">
        <button
          type="button"
          onClick={continueParticipation}
          className="min-h-[42px] w-full rounded-[12px] bg-[#2094e3] px-[20px] py-[10px] text-center text-[14px] font-medium text-white hover:bg-[#167dca] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2094e3]"
        >
          ادامه مشارکت
        </button>
        {error ? (
          <p id="mah-project-contribution-error" role="alert" className="m-0 w-full text-right text-[12px] text-[#c53030]">
            {error}
          </p>
        ) : null}
        <a href="/how-it-works" className="text-[13px] text-[#2094e3] underline">
          مشارکت سازمانی چگونه انجام می‌شود؟
        </a>
      </div>

      <div className="h-px w-full bg-[#e4ebf1]" />
      {participantType === "individual" ? (
        <div className="flex flex-col gap-[6px] text-right text-[11px] leading-[18px] text-[#60758a]">
          <p className="m-0">• برای مشارکت فردی نیازی به ساخت حساب کاربری نیست.</p>
          <p className="m-0">• برای مشارکت فردی گواهی مالیاتی صادر نمی‌شود.</p>
        </div>
      ) : (
        <p className="m-0 text-right text-[11px] leading-[18px] text-[#60758a]">
          • مشارکت سازمانی از طریق حساب شرکت پیگیری می‌شود.
        </p>
      )}
    </section>
  );
}
