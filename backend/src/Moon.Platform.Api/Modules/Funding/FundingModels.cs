namespace Moon.Platform.Api.Modules.Funding;

public static class CommitmentStatuses
{
    public const string AwaitingPayment = "awaiting_payment";
    public const string Reconciled = "reconciled";
    public const string Cancelled = "cancelled";
}

public sealed class FundingCommitment
{
    public Guid Id { get; init; } = Guid.NewGuid();
    public Guid ProjectId { get; init; }
    public string CommittedBySubject { get; init; } = string.Empty;
    public long AmountMinor { get; init; }
    public string Currency { get; init; } = string.Empty;
    public string Status { get; set; } = CommitmentStatuses.AwaitingPayment;
    public string IdempotencyKey { get; init; } = string.Empty;
    public DateTimeOffset CreatedAtUtc { get; init; } = DateTimeOffset.UtcNow;
    public DateTimeOffset? ReconciledAtUtc { get; set; }
}

public sealed record FundingCommitmentView(
    Guid CommitmentId,
    Guid ProjectId,
    string CommittedBySubject,
    long AmountMinor,
    string Currency,
    string Status,
    DateTimeOffset CreatedAtUtc,
    DateTimeOffset? ReconciledAtUtc);

public sealed record CommitmentOperationResult(
    FundingCommitmentView? Commitment,
    bool Replayed,
    string? ErrorCode,
    string? ErrorMessage)
{
    public bool Succeeded => Commitment is not null && ErrorCode is null;

    public static CommitmentOperationResult Success(FundingCommitmentView commitment, bool replayed = false) =>
        new(commitment, replayed, null, null);

    public static CommitmentOperationResult Failure(string code, string message) =>
        new(null, false, code, message);
}
