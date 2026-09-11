export type PublicImpactMetric = {
  metricId: string;
  key: string;
  label: string;
  unit: string;
  aggregation: string;
  targetValue: number | null;
  actualValue: number;
  sortOrder: number;
};

export type PublicImpactFinancialSnapshot = {
  currency: string;
  approvedExpenseMinor: number;
  releasedMinor: number;
  capturedAtUtc: string;
};

export type PublicImpactReport = {
  impactReportId: string;
  projectId: string;
  stageId: string;
  stageSequenceNumber: number;
  stageTitle: string;
  title: string;
  summary: string;
  methodology: string;
  geography: string | null;
  publishedAtUtc: string;
  metrics: PublicImpactMetric[];
  financialSnapshots: PublicImpactFinancialSnapshot[];
};

export type PublicImpactMetricAggregate = {
  key: string;
  label: string;
  unit: string;
  aggregation: string;
  targetValue: number | null;
  actualValue: number;
  reportCount: number;
};

export type PublicImpactOverview = {
  projectCount: number;
  reportCount: number;
  lastPublishedAtUtc: string | null;
  metrics: PublicImpactMetricAggregate[];
};

export class PublicImpactApiError extends Error {
  constructor(
    public readonly status: number,
    message: string,
  ) {
    super(message);
    this.name = "PublicImpactApiError";
  }
}

const env = import.meta.env as Record<string, string | undefined>;
const apiBaseUrl = (env.VITE_API_BASE_URL ?? "").replace(/\/$/, "");

async function publicImpactRequest<T>(path: string): Promise<T> {
  const response = await fetch(`${apiBaseUrl}${path}`, {
    headers: { Accept: "application/json" },
  });

  if (!response.ok) {
    throw new PublicImpactApiError(response.status, `public_impact_api_${response.status}`);
  }

  return (await response.json()) as T;
}

export function getPublicImpactOverview() {
  return publicImpactRequest<PublicImpactOverview>("/api/v1/public/impact-overview");
}

export function listPublicImpactReports() {
  return publicImpactRequest<PublicImpactReport[]>("/api/v1/public/impact-reports");
}

export function getPublicImpactReport(impactReportId: string) {
  return publicImpactRequest<PublicImpactReport>(
    `/api/v1/public/impact-reports/${encodeURIComponent(impactReportId)}`,
  );
}
