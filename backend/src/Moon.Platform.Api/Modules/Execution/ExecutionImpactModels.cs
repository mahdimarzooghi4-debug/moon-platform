using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.EntityFrameworkCore;
using Moon.Platform.Api.Modules.Projects;

namespace Moon.Platform.Api.Modules.Execution;

public static class ExecutionImpactReportStatuses
{
    public const string Submitted = "submitted";
    public const string Approved = "approved";
    public const string Rejected = "rejected";
    public const string Published = "published";
}

public static class ExecutionImpactMetricAggregations
{
    public const string Sum = "sum";
    public const string Average = "average";
    public const string Latest = "latest";
    public const string None = "none";

    public static bool IsValid(string value) => value is Sum or Average or Latest or None;
}

[Table("execution_impact_reports", Schema = "moon")]
[Index(nameof(StageId), nameof(AttemptNumber), IsUnique = true)]
[Index(nameof(ProjectId), nameof(Status))]
[Index(nameof(PublishedAtUtc))]
public sealed class ExecutionImpactReport
{
    public Guid Id { get; init; } = Guid.NewGuid();
    public Guid ProjectId { get; init; }
    public Guid StageId { get; init; }
    public Guid ProgressReportId { get; init; }
    public int AttemptNumber { get; init; }
    public Guid? SupersedesImpactReportId { get; init; }

    [MaxLength(300)]
    public string Title { get; init; } = string.Empty;

    [MaxLength(8000)]
    public string Summary { get; init; } = string.Empty;

    [MaxLength(8000)]
    public string Methodology { get; init; } = string.Empty;

    [MaxLength(4000)]
    public string? Geography { get; init; }

    [MaxLength(32)]
    public string Status { get; set; } = ExecutionImpactReportStatuses.Submitted;

    [MaxLength(200)]
    public string SubmittedBySubject { get; init; } = string.Empty;
    public DateTimeOffset SubmittedAtUtc { get; init; } = DateTimeOffset.UtcNow;

    [MaxLength(200)]
    public string? ReviewedBySubject { get; set; }
    public DateTimeOffset? ReviewedAtUtc { get; set; }

    [MaxLength(4000)]
    public string? ReviewNote { get; set; }

    [MaxLength(200)]
    public string? PublishedBySubject { get; set; }
    public DateTimeOffset? PublishedAtUtc { get; set; }

    [ForeignKey(nameof(ProjectId))]
    public Project Project { get; set; } = null!;

    [ForeignKey(nameof(StageId))]
    public ExecutionStage Stage { get; set; } = null!;

    [ForeignKey(nameof(ProgressReportId))]
    public ProgressReport ProgressReport { get; set; } = null!;

    public ICollection<ExecutionImpactMetric> Metrics { get; } = new List<ExecutionImpactMetric>();
    public ICollection<ExecutionImpactFinancialSnapshot> FinancialSnapshots { get; } = new List<ExecutionImpactFinancialSnapshot>();
}

[Table("execution_impact_metrics", Schema = "moon")]
[Index(nameof(ImpactReportId), nameof(Key), IsUnique = true)]
public sealed class ExecutionImpactMetric
{
    public Guid Id { get; init; } = Guid.NewGuid();
    public Guid ImpactReportId { get; init; }

    [MaxLength(120)]
    public string Key { get; init; } = string.Empty;

    [MaxLength(200)]
    public string Label { get; init; } = string.Empty;

    [MaxLength(80)]
    public string Unit { get; init; } = string.Empty;

    [MaxLength(16)]
    public string Aggregation { get; init; } = ExecutionImpactMetricAggregations.None;

    public decimal? TargetValue { get; init; }
    public decimal ActualValue { get; init; }
    public int SortOrder { get; init; }

    [ForeignKey(nameof(ImpactReportId))]
    public ExecutionImpactReport ImpactReport { get; set; } = null!;
}

[Table("execution_impact_financial_snapshots", Schema = "moon")]
[Index(nameof(ImpactReportId), nameof(Currency), IsUnique = true)]
public sealed class ExecutionImpactFinancialSnapshot
{
    public Guid Id { get; init; } = Guid.NewGuid();
    public Guid ImpactReportId { get; init; }

    [MaxLength(3)]
    public string Currency { get; init; } = string.Empty;

    public long ApprovedExpenseMinor { get; init; }
    public long ReleasedMinor { get; init; }
    public DateTimeOffset CapturedAtUtc { get; init; } = DateTimeOffset.UtcNow;

    [ForeignKey(nameof(ImpactReportId))]
    public ExecutionImpactReport ImpactReport { get; set; } = null!;
}

[Table("execution_closeouts", Schema = "moon")]
[Index(nameof(ProjectId), IsUnique = true)]
public sealed class ExecutionCloseout
{
    public Guid Id { get; init; } = Guid.NewGuid();
    public Guid ProjectId { get; init; }

    [MaxLength(200)]
    public string ClosedBySubject { get; init; } = string.Empty;

    public DateTimeOffset ClosedAtUtc { get; init; } = DateTimeOffset.UtcNow;

    [MaxLength(4000)]
    public string Note { get; init; } = string.Empty;

    [ForeignKey(nameof(ProjectId))]
    public Project Project { get; set; } = null!;
}

public sealed record ExecutionImpactMetricDefinition(
    string Key,
    string Label,
    string Unit,
    string Aggregation,
    decimal? TargetValue,
    decimal ActualValue);

public sealed record ExecutionImpactMetricView(
    Guid MetricId,
    string Key,
    string Label,
    string Unit,
    string Aggregation,
    decimal? TargetValue,
    decimal ActualValue,
    int SortOrder);

public sealed record ExecutionImpactFinancialSnapshotView(
    string Currency,
    long ApprovedExpenseMinor,
    long ReleasedMinor,
    DateTimeOffset CapturedAtUtc);

public sealed record ExecutionImpactReportView(
    Guid ImpactReportId,
    Guid ProjectId,
    Guid StageId,
    Guid ProgressReportId,
    int AttemptNumber,
    Guid? SupersedesImpactReportId,
    string Title,
    string Summary,
    string Methodology,
    string? Geography,
    string Status,
    string SubmittedBySubject,
    DateTimeOffset SubmittedAtUtc,
    string? ReviewedBySubject,
    DateTimeOffset? ReviewedAtUtc,
    string? ReviewNote,
    string? PublishedBySubject,
    DateTimeOffset? PublishedAtUtc,
    IReadOnlyList<ExecutionImpactMetricView> Metrics,
    IReadOnlyList<ExecutionImpactFinancialSnapshotView> FinancialSnapshots);

public sealed record ExecutionCloseoutView(
    Guid CloseoutId,
    Guid ProjectId,
    string ClosedBySubject,
    DateTimeOffset ClosedAtUtc,
    string Note);

public sealed record ExecutionImpactStateView(
    Guid ProjectId,
    Guid OrganizationId,
    IReadOnlyList<ExecutionImpactReportView> Reports,
    ExecutionCloseoutView? Closeout);

public sealed record ExecutionImpactOperationResult(
    ExecutionImpactStateView? State,
    string? ErrorCode,
    string? ErrorMessage)
{
    public bool Succeeded => State is not null && ErrorCode is null;
    public static ExecutionImpactOperationResult Success(ExecutionImpactStateView state) => new(state, null, null);
    public static ExecutionImpactOperationResult Failure(string code, string message) => new(null, code, message);
}

public sealed record PublicImpactReportView(
    Guid ImpactReportId,
    Guid ProjectId,
    Guid StageId,
    int StageSequenceNumber,
    string StageTitle,
    string Title,
    string Summary,
    string Methodology,
    string? Geography,
    DateTimeOffset PublishedAtUtc,
    IReadOnlyList<ExecutionImpactMetricView> Metrics,
    IReadOnlyList<ExecutionImpactFinancialSnapshotView> FinancialSnapshots);

public sealed record PublicImpactMetricAggregateView(
    string Key,
    string Label,
    string Unit,
    string Aggregation,
    decimal? TargetValue,
    decimal ActualValue,
    int ReportCount);

public sealed record PublicImpactOverviewView(
    int ProjectCount,
    int ReportCount,
    DateTimeOffset? LastPublishedAtUtc,
    IReadOnlyList<PublicImpactMetricAggregateView> Metrics);
