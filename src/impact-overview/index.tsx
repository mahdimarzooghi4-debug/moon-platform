import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  getPublicImpactOverview,
  type PublicImpactOverview,
} from "../impact/api";
import "./index.css";

const numberFormatter = new Intl.NumberFormat("fa-IR", {
  maximumFractionDigits: 2,
});

const dateFormatter = new Intl.DateTimeFormat("fa-IR", {
  dateStyle: "medium",
  timeStyle: "short",
});

function formatNumber(value: number) {
  return numberFormatter.format(value);
}

function formatPublishedAt(value: string | null) {
  if (!value) return "هنوز گزارشی منتشر نشده است";
  const date = new Date(value);
  return Number.isNaN(date.getTime()) ? value : dateFormatter.format(date);
}

export default function Main() {
  const [overview, setOverview] = useState<PublicImpactOverview | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    let active = true;

    getPublicImpactOverview()
      .then((result) => {
        if (!active) return;
        setOverview(result);
        setError(false);
      })
      .catch(() => {
        if (!active) return;
        setError(true);
      })
      .finally(() => {
        if (active) setLoading(false);
      });

    return () => {
      active = false;
    };
  }, []);

  return (
    <main
      dir="rtl"
      className="min-h-screen bg-[#fcfbf8] px-6 py-10 font-['Vazirmatn'] text-[#17324d] md:px-12 lg:px-[120px]"
    >
      <div className="mx-auto flex w-full max-w-[1200px] flex-col gap-8">
        <header className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="mb-2 text-sm text-[#60758a]">اثر اجتماعی / نمای کلی</p>
            <h1 className="text-3xl font-extrabold md:text-[36px]">
              نمای کلی اثر اجتماعی ماه
            </h1>
            <p className="mt-3 max-w-3xl text-sm leading-7 text-[#60758a] md:text-base">
              این صفحه فقط داده‌های گزارش‌های اثر اجتماعی منتشرشده و عمومی را از
              سامانه نمایش می‌دهد.
            </p>
          </div>
          <Link
            to="/impact-reports"
            className="inline-flex min-h-11 items-center justify-center rounded-xl bg-[#2094e3] px-5 py-3 text-sm font-bold text-white no-underline"
          >
            مشاهده گزارش‌های عمومی
          </Link>
        </header>

        {loading ? (
          <section className="rounded-2xl border border-[#e4ebf1] bg-white p-6 text-sm text-[#60758a]">
            در حال دریافت داده‌های عمومی اثر اجتماعی…
          </section>
        ) : error ? (
          <section className="rounded-2xl border border-[#f0c8c8] bg-white p-6">
            <h2 className="font-bold text-[#9f2f2f]">دریافت داده‌ها ناموفق بود</h2>
            <p className="mt-2 text-sm leading-7 text-[#60758a]">
              در حال حاضر امکان دریافت نمای کلی اثر اجتماعی از API عمومی وجود
              ندارد. این صفحه داده جایگزین یا تخمینی نمایش نمی‌دهد.
            </p>
          </section>
        ) : overview ? (
          <>
            <section className="grid gap-4 md:grid-cols-3">
              <article className="rounded-2xl border border-[#e4ebf1] bg-white p-6">
                <p className="text-sm text-[#60758a]">پروژه‌های دارای گزارش عمومی</p>
                <strong className="mt-3 block text-3xl font-extrabold text-[#2094e3]">
                  {formatNumber(overview.projectCount)}
                </strong>
              </article>
              <article className="rounded-2xl border border-[#e4ebf1] bg-white p-6">
                <p className="text-sm text-[#60758a]">گزارش‌های منتشرشده</p>
                <strong className="mt-3 block text-3xl font-extrabold text-[#2094e3]">
                  {formatNumber(overview.reportCount)}
                </strong>
              </article>
              <article className="rounded-2xl border border-[#e4ebf1] bg-white p-6">
                <p className="text-sm text-[#60758a]">آخرین انتشار</p>
                <strong className="mt-3 block text-base font-bold leading-8">
                  {formatPublishedAt(overview.lastPublishedAtUtc)}
                </strong>
              </article>
            </section>

            <section className="rounded-2xl border border-[#e4ebf1] bg-white p-6">
              <div className="mb-5 flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
                <div>
                  <h2 className="text-xl font-extrabold">شاخص‌های تجمیعی منتشرشده</h2>
                  <p className="mt-1 text-sm leading-7 text-[#60758a]">
                    مقدار و روش تجمیع دقیقاً مطابق داده API عمومی نمایش داده می‌شود.
                  </p>
                </div>
              </div>

              {overview.metrics.length === 0 ? (
                <p className="rounded-xl bg-[#f7f9fb] p-4 text-sm text-[#60758a]">
                  هنوز شاخص عمومی منتشرشده‌ای وجود ندارد.
                </p>
              ) : (
                <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                  {overview.metrics.map((metric) => (
                    <article
                      key={`${metric.key}-${metric.aggregation}`}
                      className="rounded-xl border border-[#e4ebf1] p-5"
                    >
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <h3 className="font-bold">{metric.label || metric.key}</h3>
                          <p className="mt-1 text-xs text-[#60758a]">{metric.key}</p>
                        </div>
                        <span className="rounded-lg bg-[#eaf5fd] px-2 py-1 text-xs font-bold text-[#2094e3]">
                          {metric.aggregation}
                        </span>
                      </div>
                      <p className="mt-5 text-2xl font-extrabold">
                        {formatNumber(metric.actualValue)}{" "}
                        <span className="text-sm font-medium text-[#60758a]">
                          {metric.unit}
                        </span>
                      </p>
                      <div className="mt-4 flex flex-wrap gap-x-4 gap-y-2 text-xs text-[#60758a]">
                        <span>تعداد گزارش: {formatNumber(metric.reportCount)}</span>
                        {metric.targetValue !== null ? (
                          <span>
                            هدف ثبت‌شده: {formatNumber(metric.targetValue)} {metric.unit}
                          </span>
                        ) : null}
                      </div>
                    </article>
                  ))}
                </div>
              )}
            </section>

            <aside className="rounded-2xl border border-[#cfe6f7] bg-[#eaf5fd] p-5 text-sm leading-7 text-[#17324d]">
              داده‌های مالی، دسته‌بندی جغرافیایی و سایر ابعادی که API نمای کلی
              منتشر نمی‌کند، در این صفحه حدس زده یا از داده‌های ثابت جایگزین
              نمی‌شوند.
            </aside>
          </>
        ) : null}
      </div>
    </main>
  );
}
