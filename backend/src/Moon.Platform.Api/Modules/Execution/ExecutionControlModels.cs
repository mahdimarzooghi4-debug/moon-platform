using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.EntityFrameworkCore;
using Moon.Platform.Api.Modules.Funding;
using Moon.Platform.Api.Modules.Projects;

namespace Moon.Platform.Api.Modules.Execution;

public static class ExecutionExpenseStatuses
{
    public const string Submitted = "submitted";
    public const string Approved = "approved";
    public const string Rejected = "rejected";
}

public static class ExecutionRiskStatuses
{
    public const string Open = "open";
    public const string Mitigated = "mitigated";
    public const string Closed = "closed";
}

public static class ExecutionRiskSeverities
{
    public const string Low = "low";
    public const string Medium = "medium";
    public const string High = "high";
    public const string Critical = "critical";

    public static bool IsValid(string value) => value is Low or Medium or High or Critical;
}

public static class ExecutionFreezeActions
{
    public const string Freeze = "freeze";
    public const string Unfreeze = "unfreeze";
}

[Table("execution_expenses", Schema = "moon")]
[Index(nameof(ProjectId), nameof(StageId), nameof(Status))]
public sealed class ExecutionExpense
{
    public Guid Id { get; init; } = Guid.NewGuid();
    public Guid ProjectId { get; init; }
    public Guid StageId { get; init; }
    public long AmountMinor { get; init; }

    [MaxLength(3)]
    public string Currency { get; init; } = string.Empty;

    [MaxLength(120)]
    public string Category { get; init; } = string.Empty;

    [MaxLength(4000)]
    public string Description { get; init; } = string.Empty;

    [MaxLength(2000)]
    public string? EvidenceReference { get; init; }

    [MaxLength(32)]
    public string Status { get; set; } = ExecutionExpenseStatuses.Submitted;

    [MaxLength(200)]
    public string SubmittedBySubject { get; init; } = string.Empty;

    public DateTimeOffset SubmittedAtUtc { get; init; } = DateTimeOffset.UtcNow;

    [MaxLength(200)]
    public string? ReviewedBySubject { get; set; }

    public DateTimeOffset? ReviewedAtUtc { get; set; }

    [MaxLength(4000)]
    public string? ReviewNote { get; set; }

    [ForeignKey(nameof(ProjectId))]
    public Project Project { get; set; } = null!;

    [ForeignKey(nameof(StageId))]
    public ExecutionStage Stage { get; set; } = null!;
}

[Table("execution_risks", Schema = "moon")]
[Index(nameof(ProjectId), nameof(StageId), nameof(Status))]
[Index(nameof(ProjectId), nameof(Severity), nameof(Status))]
public sealed class ExecutionRisk
{
    public Guid Id { get; init; } = Guid.NewGuid();
    public Guid ProjectId { get; init; }
    public Guid StageId { get; init; }

    [MaxLength(32)]
    public string Severity { get; init; } = string.Empty;

    [MaxLength(200)]
    public string Title { get; init; } = string.Empty;

    [MaxLength(4000)]
    public string Description { get; init; } = string.Empty;

    [MaxLength(32)]
    public string Status { get; set; } = ExecutionRiskStatuses.Open;

    [MaxLength(200)]
    public string ReportedBySubject { get; init; } = string.Empty;

    public DateTimeOffset ReportedAtUtc { get; init; } = DateTimeOffset.UtcNow;

    [MaxLength(200)]
    public string? MitigatedBySubject { get; set; }

    public DateTimeOffset? MitigatedAtUtc { get; set; }

    [MaxLength(4000)]
    public string? MitigationNote { get; set; }

    [MaxLength(200)]
    public string? ClosedBySubject { get; set; }

    public DateTimeOffset? ClosedAtUtc { get; set; }

    [MaxLength(4000)]
    public string? CloseNote { get; set; }

    [ForeignKey(nameof(ProjectId))]
    public Project Project { get; set; } = null!;

    [ForeignKey(nameof(StageId))]
    public ExecutionStage Stage { get; set; } = null!;
}

[Table("execution_freeze_events", Schema = "moon")]
[Index(nameof(ProjectId), nameof(SequenceNumber), IsUnique = true)]
[Index(nameof(ProjectId), nameof(OccurredAtUtc))]
public sealed class ExecutionFreezeEvent
{
    public Guid Id { get; init; } = Guid.NewGuid();
    public Guid ProjectId { get; init; }
    public int SequenceNumber { get; init; }

    [MaxLength(16)]
    public string Action { get; init; } = string.Empty;

    [MaxLength(4000)]
    public string Reason { get; init; } = string.Empty;

    [MaxLength(200)]
    public string ActorSubject { get; init; } = string.Empty;

    public DateTimeOffset OccurredAtUtc { get; init; } = DateTimeOffset.UtcNow;

    [ForeignKey(nameof(ProjectId))]
    public Project Project { get; set; } = null!;
}

[Table("execution_disbursements", Schema = "moon")]
[Index(nameof(ReleasedBySubject), nameof(IdempotencyKey), IsUnique = true)]
[Index(nameof(ProjectId), nameof(StageId), nameof(Currency))]
public sealed class ExecutionDisbursement
{
    public Guid Id { get; init; } = Guid.NewGuid();
    public Guid ProjectId { get; init; }
    public Guid StageId { get; init; }
    public long AmountMinor { get; init; }

    [MaxLength(3)]
    public string Currency { get; init; } = string.Empty;

    [MaxLength(128)]
    public string IdempotencyKey { get; init; } = string.Empty;

    [MaxLength(200)]
    public string ReleasedBySubject { get; init; } = string.Empty;

    public DateTimeOffset ReleasedAtUtc { get; init; } = DateTimeOffset.UtcNow;

    [ForeignKey(nameof(ProjectId))]
    public Project Project { get; set; } = null!;

    [ForeignKey(nameof(StageId))]
    public ExecutionStage Stage { get; set; } = null!;
}

public sealed record ExecutionExpenseView(
    Guid ExpenseId,
    Guid StageId,
    long AmountMinor,
    string Currency,
    string Category,
    string Description,
    string? EvidenceReference,
    string Status,
    string SubmittedBySubject,
    DateTimeOffset SubmittedAtUtc,
    string? ReviewedBySubject,
    DateTimeOffset? ReviewedAtUtc,
    string? ReviewNote);

public sealed record ExecutionRiskView(
    Guid RiskId,
    Guid StageId,
    string Severity,
    string Title,
    string Description,
    string Status,
    string ReportedBySubject,
    DateTimeOffset ReportedAtUtc,
    string? MitigatedBySubject,
    DateTimeOffset? MitigatedAtUtc,
    string? MitigationNote,
    string? ClosedBySubject,
    DateTimeOffset? ClosedAtUtc,
    string? CloseNote);

public sealed record ExecutionFreezeEventView(
    Guid EventId,
    int SequenceNumber,
    string Action,
    string Reason,
    string ActorSubject,
    DateTimeOffset OccurredAtUtc);

public sealed record ExecutionDisbursementView(
    Guid DisbursementId,
    Guid StageId,
    long AmountMinor,
    string Currency,
    string ReleasedBySubject,
    DateTimeOffset ReleasedAtUtc,
    Guid? LedgerJournalId,
    bool Reversed);

public sealed record ExecutionControlView(
    Guid ProjectId,
    Guid OrganizationId,
    bool IsFrozen,
    IReadOnlyList<ExecutionExpenseView> Expenses,
    IReadOnlyList<ExecutionRiskView> Risks,
    IReadOnlyList<ExecutionFreezeEventView> FreezeHistory,
    IReadOnlyList<ExecutionDisbursementView> Disbursements);

public sealed record ExecutionControlOperationResult(
    ExecutionControlView? State,
    bool Replayed,
    string? ErrorCode,
    string? ErrorMessage)
{
    public bool Succeeded => State is not null && ErrorCode is null;

    public static ExecutionControlOperationResult Success(ExecutionControlView state, bool replayed = false) =>
        new(state, replayed, null, null);

    public static ExecutionControlOperationResult Failure(string code, string message) =>
        new(null, false, code, message);
}
