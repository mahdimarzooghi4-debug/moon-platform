namespace Moon.Platform.Api.Modules.Evaluations;

public static class EvaluationStatuses
{
    public const string Assigned = "assigned";
    public const string InProgress = "in_progress";
    public const string ConflictDeclared = "conflict_declared";
    public const string Completed = "completed";
}

public static class EvaluationRecommendations
{
    public const string Approve = "approve";
    public const string Reject = "reject";
}

public static class ProjectDecisionOutcomes
{
    public const string Approve = "approve";
    public const string Reject = "reject";
}

public sealed class ProjectEvaluation
{
    public Guid Id { get; init; } = Guid.NewGuid();
    public Guid ProjectId { get; init; }
    public Guid ProjectVersionId { get; init; }
    public string EvaluatorSubject { get; init; } = string.Empty;
    public string AssignedBySubject { get; init; } = string.Empty;
    public string Status { get; set; } = EvaluationStatuses.Assigned;
    public bool? HasConflict { get; set; }
    public string? ConflictReason { get; set; }
    public DateTimeOffset? ConflictDeclaredAtUtc { get; set; }
    public string? Recommendation { get; set; }
    public string? Rationale { get; set; }
    public DateTimeOffset AssignedAtUtc { get; init; } = DateTimeOffset.UtcNow;
    public DateTimeOffset? CompletedAtUtc { get; set; }
}

public sealed class ProjectDecision
{
    public Guid Id { get; init; } = Guid.NewGuid();
    public Guid ProjectId { get; init; }
    public Guid EvaluationId { get; init; }
    public string Outcome { get; init; } = string.Empty;
    public string Reason { get; init; } = string.Empty;
    public string DecidedBySubject { get; init; } = string.Empty;
    public DateTimeOffset DecidedAtUtc { get; init; } = DateTimeOffset.UtcNow;
}

public sealed record EvaluationView(
    Guid EvaluationId,
    Guid ProjectId,
    Guid ProjectVersionId,
    string EvaluatorSubject,
    string AssignedBySubject,
    string Status,
    bool? HasConflict,
    string? ConflictReason,
    DateTimeOffset? ConflictDeclaredAtUtc,
    string? Recommendation,
    string? Rationale,
    DateTimeOffset AssignedAtUtc,
    DateTimeOffset? CompletedAtUtc);

public sealed record DecisionView(
    Guid DecisionId,
    Guid ProjectId,
    Guid EvaluationId,
    string Outcome,
    string Reason,
    string DecidedBySubject,
    DateTimeOffset DecidedAtUtc);

public sealed record EvaluationOperationResult(
    EvaluationView? Evaluation,
    DecisionView? Decision,
    string? ErrorCode,
    string? ErrorMessage)
{
    public bool Succeeded => ErrorCode is null && (Evaluation is not null || Decision is not null);

    public static EvaluationOperationResult EvaluationSuccess(EvaluationView evaluation) => new(evaluation, null, null, null);
    public static EvaluationOperationResult DecisionSuccess(DecisionView decision) => new(null, decision, null, null);
    public static EvaluationOperationResult Failure(string code, string message) => new(null, null, code, message);
}
