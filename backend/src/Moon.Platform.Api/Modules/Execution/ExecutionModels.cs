namespace Moon.Platform.Api.Modules.Execution;

public static class ExecutionStageStatuses
{
    public const string Blocked = "blocked";
    public const string Active = "active";
    public const string ReportSubmitted = "report_submitted";
    public const string Completed = "completed";
}

public static class ProgressReportStatuses
{
    public const string Submitted = "submitted";
    public const string Approved = "approved";
    public const string Rejected = "rejected";
}

public static class ExecutionPolicies
{
    public const string Planner = "phase3-execution-planner";
    public const string Reviewer = "phase3-execution-reviewer";
}

public sealed class ExecutionStage
{
    public Guid Id { get; init; } = Guid.NewGuid();
    public Guid ProjectId { get; init; }
    public int SequenceNumber { get; init; }
    public string Title { get; init; } = string.Empty;
    public string Description { get; init; } = string.Empty;
    public string Status { get; set; } = ExecutionStageStatuses.Blocked;
    public string CreatedBySubject { get; init; } = string.Empty;
    public DateTimeOffset CreatedAtUtc { get; init; } = DateTimeOffset.UtcNow;
    public DateTimeOffset? ActivatedAtUtc { get; set; }
    public DateTimeOffset? CompletedAtUtc { get; set; }
}

public sealed class ProgressReport
{
    public Guid Id { get; init; } = Guid.NewGuid();
    public Guid ProjectId { get; init; }
    public Guid StageId { get; init; }
    public int AttemptNumber { get; init; }
    public string SubmittedBySubject { get; init; } = string.Empty;
    public string Summary { get; init; } = string.Empty;
    public string Status { get; set; } = ProgressReportStatuses.Submitted;
    public DateTimeOffset SubmittedAtUtc { get; init; } = DateTimeOffset.UtcNow;
    public string? ReviewedBySubject { get; set; }
    public DateTimeOffset? ReviewedAtUtc { get; set; }
    public string? ReviewNote { get; set; }
}

public sealed record ExecutionStageDefinition(string Title, string Description);

public sealed record ProgressReportView(
    Guid ReportId,
    int AttemptNumber,
    string SubmittedBySubject,
    string Summary,
    string Status,
    DateTimeOffset SubmittedAtUtc,
    string? ReviewedBySubject,
    DateTimeOffset? ReviewedAtUtc,
    string? ReviewNote);

public sealed record ExecutionStageView(
    Guid StageId,
    int SequenceNumber,
    string Title,
    string Description,
    string Status,
    DateTimeOffset? ActivatedAtUtc,
    DateTimeOffset? CompletedAtUtc,
    IReadOnlyList<ProgressReportView> Reports);

public sealed record ExecutionPlanView(
    Guid ProjectId,
    Guid OrganizationId,
    IReadOnlyList<ExecutionStageView> Stages);

public sealed record ExecutionOperationResult(
    ExecutionPlanView? Plan,
    string? ErrorCode,
    string? ErrorMessage)
{
    public bool Succeeded => Plan is not null && ErrorCode is null;

    public static ExecutionOperationResult Success(ExecutionPlanView plan) => new(plan, null, null);
    public static ExecutionOperationResult Failure(string code, string message) => new(null, code, message);
}
