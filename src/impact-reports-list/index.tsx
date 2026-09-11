import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import {
  listPublicImpactReports,
  type PublicImpactReport,
} from "../impact/api";
import "./index.css";

const numberFormatter = new Intl.NumberFormat("fa-IR", {
  maximumFractionDigits: 2,
});

const dateFormatter = new Intl.DateTimeFormat("fa-IR", {
  dateStyle: "medium",
  timeStyle: "short",
});

function formatDate(value: string) {
  const date = new Date(value);
  return Number.isNaN(date.getTime()) ? value : dateFormatter.format(date);
}

export default function Main() {
  const [reports, setReports] = useState<PublicImpactReport[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    let active = true;

    listPublicImpactReports()
      .then((result) => {
        if (!active) return;
        setReports(result);
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

  const orderedReports = useMemo(
    () =>
      [...reports].sort(
        (left, right) =>
          new Date(right.publishedAtUtc).getTime() -
          new Date(left.publishedAtUtc).getTime(),
      ),
    [reports],
  );

  return (
    <main
      dir="rtl"
      className="min-h-screen bg-[#fcfbf8] px-6 py-10 font-['Vazirmatn'] text-[#17324d] md:px-12 lg:px-[120px]"
    >
      <div className="mx-auto flex w-full max-w-[1200px] flex-col gap-8">
        <header className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="mb-2 text-sm text-[#60758a]">اثر اجتماعی / گزارش‌ها</p>
            <h1 className="text-3xl font-extrabold md:text-[36px]">
              گزارش‌های عمومی اثر اجتماعی
            </h1>
            <p className="mt-3 max-w-3xl text-sm leading-7 text-[#60758a] md:text-base">
              فقط گزارش‌هایی نمایش داده می‌شوند که در backend با وضعیت عمومی
              منتشر شده‌اند.
            </p>
          </div>
          <Link
            to="/impact"
            className="inline-flex min-h-11 items-center justify-center rounded-xl border border-[#2094e3] bg-white px-5 py-3 text-sm font-bold text-[#2094e3] no-underline"
          >
            بازگشت به نمای کلی
          </Link>
        </header>

        {loading ? (
          <section className="rounded-2xl border border-[#e4ebf1] bg-white p-6 text-sm text-[#60758a]">
            در حال دریافت گزارش‌های عمومی…
          </section>
        ) : error ? (
          <section className="rounded-2xl border border-[#f0c8c8] bg-white p-6">
            <h2 className="font-bold text-[#9f2f2f]">دریافت گزارش‌ها ناموفق بود</h2>
            <p className="mt-2 text-sm leading-7 text-[#60758a]">
              فهرست گزارش‌ها از API عمومی دریافت نشد. برای جلوگیری از نمایش
              اطلاعات نادرست، داده نمونه جایگزین نمی‌شود.
            </p>
          </section>
        ) : orderedReports.length === 0 ? (
          <section className="rounded-2xl border border-[#e4ebf1] bg-white p-8 text-center">
            <h2 className="text-lg font-extrabold">هنوز گزارش عمومی منتشر نشده است</h2>
            <p className="mt-2 text-sm leading-7 text-[#60758a]">
              پس از انتشار اولین گزارش تأییدشده، آن گزارش به‌صورت خودکار در این
              صفحه ظاهر می‌شود.
            </p>
          </section>
        ) : (
          <section className="grid gap-5 lg:grid-cols-2">
            {orderedReports.map((report) => (
              <article
                key={report.impactReportId}
                className="flex flex-col rounded-2xl border border-[#e4ebf1] bg-white p-6"
              >
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <span className="rounded-lg bg-[#eaf5fd] px-3 py-1 text-xs font-bold text-[#2094e3]">
                    مرحله {numberFormatter.format(report.stageSequenceNumber)} · {report.stageTitle}
                  </span>
                  <time className="text-xs text-[#60758a]">
                    {formatDate(report.publishedAtUtc)}
                  </time>
                </div>

                <h2 className="mt-5 text-xl font-extrabold leading-8">{report.title}</h2>
                <p className="mt-3 line-clamp-4 text-sm leading-7 text-[#60758a]">
                  {report.summary}
                </p>

                <dl className="mt-5 grid gap-3 border-t border-[#eef2f5] pt-4 text-sm sm:grid-cols-2">
                  <div>
                    <dt className="text-xs text-[#60758a]">موقعیت جغرافیایی ثبت‌شده</dt>
                    <dd className="mt-1 font-medium">{report.geography || "ثبت نشده"}</dd>
                  </div>
                  <div>
                    <dt className="text-xs text-[#60758a]">تعداد شاخص‌ها</dt>
                    <dd className="mt-1 font-medium">
                      {numberFormatter.format(report.metrics.length)}
                    </dd>
                  </div>
                  <div>
                    <dt className="text-xs text-[#60758a]">ثبت‌های مالی</dt>
                    <dd className="mt-1 font-medium">
                      {numberFormatter.format(report.financialSnapshots.length)}
                    </dd>
                  </div>
                  <div>
                    <dt className="text-xs text-[#60758a]">شناسه گزارش</dt>
                    <dd className="mt-1 truncate font-mono text-xs" dir="ltr">
                      {report.impactReportId}
                    </dd>
                  </div>
                </dl>

                {report.financialSnapshots.length > 0 ? (
                  <div className="mt-4 rounded-xl bg-[#f7f9fb] p-4">
                    <p className="mb-2 text-xs font-bold text-[#60758a]">
                      snapshot مالی منتشرشده
                    </p>
                    <div className="space-y-2 text-xs leading-6">
                      {report.financialSnapshots.map((snapshot) => (
                        <p key={snapshot.currency}>
                          {snapshot.currency}: مصوب {numberFormatter.format(snapshot.approvedExpenseMinor)} · آزادشده {numberFormatter.format(snapshot.releasedMinor)}
                          <span className="text-[#60758a]"> (واحد خرد ثبت‌شده)</span>
                        </p>
                      ))}
                    </div>
                  </div>
                ) : null}

                <Link
                  to={`/projects/${encodeURIComponent(report.projectId)}/impact-report?reportId=${encodeURIComponent(report.impactReportId)}`}
                  className="mt-6 inline-flex min-h-11 items-center justify-center rounded-xl bg-[#2094e3] px-5 py-3 text-sm font-bold text-white no-underline"
                >
                  مشاهده گزارش
                </Link>
              </article>
            ))}
          </section>
        )}
      </div>
    </main>
  );
}
