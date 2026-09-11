import { useEffect, useState } from "react";
import { Link, useParams, useSearchParams } from "react-router-dom";
import {
  getPublicImpactReport,
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

async function resolveReport(projectId: string | undefined, reportId: string | null) {
  if (reportId) {
    const report = await getPublicImpactReport(reportId);
    if (projectId && report.projectId !== projectId) {
      throw new Error("impact_report_project_mismatch");
    }
    return report;
  }

  if (!projectId) {
    throw new Error("impact_report_route_missing_project");
  }

  const reports = await listPublicImpactReports();
  const projectReports = reports
    .filter((report) => report.projectId === projectId)
    .sort(
      (left, right) =>
        new Date(right.publishedAtUtc).getTime() -
        new Date(left.publishedAtUtc).getTime(),
    );

  if (projectReports.length === 0) {
    throw new Error("impact_report_not_found");
  }

  return projectReports[0];
}

export default function Main() {
  const { projectId } = useParams<{ projectId: string }>();
  const [searchParams] = useSearchParams();
  const reportId = searchParams.get("reportId");
  const [report, setReport] = useState<PublicImpactReport | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    let active = true;
    setLoading(true);
    setError(false);
    setReport(null);

    resolveReport(projectId, reportId)
      .then((result) => {
        if (active) setReport(result);
      })
      .catch(() => {
        if (active) setError(true);
      })
      .finally(() => {
        if (active) setLoading(false);
      });

    return () => {
      active = false;
    };
  }, [projectId, reportId]);

  return (
    <main
      dir="rtl"
      className="min-h-screen bg-[#fcfbf8] px-6 py-10 font-['Vazirmatn'] text-[#17324d] md:px-12 lg:px-[120px]"
    >
      <div className="mx-auto flex w-full max-w-[1100px] flex-col gap-7">
        <nav className="flex flex-wrap items-center justify-between gap-3 text-sm">
          <Link to="/impact-reports" className="font-bold text-[#2094e3] no-underline">
            بازگشت به گزارش‌های عمومی
          </Link>
          {projectId ? (
            <span className="text-xs text-[#60758a]">
              پروژه: <span dir="ltr" className="font-mono">{projectId}</span>
            </span>
          ) : null}
        </nav>

        {loading ? (
          <section className="rounded-2xl border border-[#e4ebf1] bg-white p-6 text-sm text-[#60758a]">
            در حال دریافت گزارش عمومی اثر اجتماعی…
          </section>
        ) : error || !report ? (
          <section className="rounded-2xl border border-[#f0c8c8] bg-white p-7">
            <h1 className="text-xl font-extrabold text-[#9f2f2f]">
              گزارش عمومی قابل نمایش نیست
            </h1>
            <p className="mt-3 text-sm leading-7 text-[#60758a]">
              گزارش در API عمومی پیدا نشد یا با پروژه این صفحه تطابق ندارد. هیچ
              داده نمونه‌ای به‌جای گزارش واقعی نمایش داده نمی‌شود.
            </p>
          </section>
        ) : (
          <>
            <header className="rounded-2xl border border-[#e4ebf1] bg-white p-6 md:p-8">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <span className="rounded-lg bg-[#eaf5fd] px-3 py-1 text-xs font-bold text-[#2094e3]">
                  مرحله {numberFormatter.format(report.stageSequenceNumber)} · {report.stageTitle}
                </span>
                <time className="text-xs text-[#60758a]">
                  انتشار: {formatDate(report.publishedAtUtc)}
                </time>
              </div>
              <h1 className="mt-5 text-3xl font-extrabold leading-[1.6] md:text-[36px]">
                {report.title}
              </h1>
              <p className="mt-4 whitespace-pre-line text-sm leading-8 text-[#60758a] md:text-base">
                {report.summary}
              </p>
              <dl className="mt-6 grid gap-4 border-t border-[#eef2f5] pt-5 text-sm md:grid-cols-2">
                <div>
                  <dt className="text-xs text-[#60758a]">موقعیت جغرافیایی ثبت‌شده</dt>
                  <dd className="mt-1 font-bold">{report.geography || "ثبت نشده"}</dd>
                </div>
                <div>
                  <dt className="text-xs text-[#60758a]">شناسه گزارش</dt>
                  <dd className="mt-1 break-all font-mono text-xs" dir="ltr">
                    {report.impactReportId}
                  </dd>
                </div>
                <div>
                  <dt className="text-xs text-[#60758a]">شناسه مرحله</dt>
                  <dd className="mt-1 break-all font-mono text-xs" dir="ltr">
                    {report.stageId}
                  </dd>
                </div>
                <div>
                  <dt className="text-xs text-[#60758a]">شناسه پروژه</dt>
                  <dd className="mt-1 break-all font-mono text-xs" dir="ltr">
                    {report.projectId}
                  </dd>
                </div>
              </dl>
            </header>

            <section className="rounded-2xl border border-[#e4ebf1] bg-white p-6 md:p-8">
              <h2 className="text-xl font-extrabold">شاخص‌های اثر</h2>
              {report.metrics.length === 0 ? (
                <p className="mt-4 rounded-xl bg-[#f7f9fb] p-4 text-sm text-[#60758a]">
                  برای این گزارش شاخصی منتشر نشده است.
                </p>
              ) : (
                <div className="mt-5 grid gap-4 md:grid-cols-2">
                  {[...report.metrics]
                    .sort((left, right) => left.sortOrder - right.sortOrder)
                    .map((metric) => (
                      <article
                        key={metric.metricId}
                        className="rounded-xl border border-[#e4ebf1] p-5"
                      >
                        <div className="flex items-start justify-between gap-4">
                          <div>
                            <h3 className="font-bold">{metric.label || metric.key}</h3>
                            <p className="mt-1 text-xs text-[#60758a]">{metric.key}</p>
                          </div>
                          <span className="rounded-lg bg-[#f7f9fb] px-2 py-1 text-xs text-[#60758a]">
                            {metric.aggregation}
                          </span>
                        </div>
                        <p className="mt-5 text-2xl font-extrabold">
                          {numberFormatter.format(metric.actualValue)}{" "}
                          <span className="text-sm font-medium text-[#60758a]">
                            {metric.unit}
                          </span>
                        </p>
                        {metric.targetValue !== null ? (
                          <p className="mt-2 text-xs text-[#60758a]">
                            هدف ثبت‌شده: {numberFormatter.format(metric.targetValue)} {metric.unit}
                          </p>
                        ) : null}
                      </article>
                    ))}
                </div>
              )}
            </section>

            <section className="rounded-2xl border border-[#e4ebf1] bg-white p-6 md:p-8">
              <h2 className="text-xl font-extrabold">روش‌شناسی</h2>
              <p className="mt-4 whitespace-pre-line text-sm leading-8 text-[#60758a]">
                {report.methodology || "روش‌شناسی عمومی برای این گزارش ثبت نشده است."}
              </p>
            </section>

            <section className="rounded-2xl border border-[#e4ebf1] bg-white p-6 md:p-8">
              <h2 className="text-xl font-extrabold">snapshot مالی منتشرشده</h2>
              <p className="mt-2 text-xs leading-6 text-[#60758a]">
                backend مبالغ را به‌صورت واحد خرد ذخیره می‌کند؛ چون exponent ارز در
                contract عمومی ارائه نشده، این صفحه تبدیل ارزی حدسی انجام نمی‌دهد.
              </p>
              {report.financialSnapshots.length === 0 ? (
                <p className="mt-4 rounded-xl bg-[#f7f9fb] p-4 text-sm text-[#60758a]">
                  snapshot مالی عمومی برای این گزارش وجود ندارد.
                </p>
              ) : (
                <div className="mt-5 grid gap-4 md:grid-cols-2">
                  {report.financialSnapshots.map((snapshot) => (
                    <article
                      key={snapshot.currency}
                      className="rounded-xl border border-[#e4ebf1] p-5"
                    >
                      <div className="flex items-center justify-between gap-3">
                        <strong>{snapshot.currency}</strong>
                        <time className="text-xs text-[#60758a]">
                          {formatDate(snapshot.capturedAtUtc)}
                        </time>
                      </div>
                      <dl className="mt-4 space-y-3 text-sm">
                        <div className="flex justify-between gap-4">
                          <dt className="text-[#60758a]">هزینه مصوب</dt>
                          <dd className="font-bold">
                            {numberFormatter.format(snapshot.approvedExpenseMinor)}
                          </dd>
                        </div>
                        <div className="flex justify-between gap-4">
                          <dt className="text-[#60758a]">مبلغ آزادشده</dt>
                          <dd className="font-bold">
                            {numberFormatter.format(snapshot.releasedMinor)}
                          </dd>
                        </div>
                      </dl>
                    </article>
                  ))}
                </div>
              )}
            </section>
          </>
        )}
      </div>
    </main>
  );
}
