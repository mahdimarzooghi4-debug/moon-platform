namespace Moon.Platform.Api.Modules.Funding;

public static class PaymentStatuses
{
    public const string CreatingIntent = "creating_intent";
    public const string AwaitingVerification = "awaiting_verification";
    public const string IntentFailed = "intent_failed";
    public const string Verified = "verified";
    public const string Reconciled = "reconciled";
}

public static class PaymentPolicies
{
    public const string Finance = "phase2-payment-finance";
}

public sealed class FundingPayment
{
    public Guid Id { get; init; } = Guid.NewGuid();
    public Guid CommitmentId { get; init; }
    public string InitiatedBySubject { get; init; } = string.Empty;
    public long AmountMinor { get; init; }
    public string Currency { get; init; } = string.Empty;
    public string Status { get; set; } = PaymentStatuses.CreatingIntent;
    public string IdempotencyKey { get; init; } = string.Empty;
    public string Provider { get; set; } = string.Empty;
    public string? ProviderReference { get; set; }
    public string? RedirectUrl { get; set; }
    public string? IntentFailureCode { get; set; }
    public DateTimeOffset CreatedAtUtc { get; init; } = DateTimeOffset.UtcNow;
    public DateTimeOffset? ProviderNotifiedAtUtc { get; set; }
    public DateTimeOffset? VerifiedAtUtc { get; set; }
    public DateTimeOffset? ReconciledAtUtc { get; set; }
    public string? ReconciliationIdempotencyKey { get; set; }
    public string? ReconciledBySubject { get; set; }
    public ICollection<LedgerJournal> LedgerJournals { get; } = new List<LedgerJournal>();
}

public sealed class PaymentWebhookReceipt
{
    public Guid Id { get; init; } = Guid.NewGuid();
    public Guid PaymentId { get; init; }
    public string Provider { get; init; } = string.Empty;
    public string EventId { get; init; } = string.Empty;
    public string ProviderReference { get; init; } = string.Empty;
    public string PayloadVersion { get; init; } = string.Empty;
    public string PayloadSha256 { get; init; } = string.Empty;
    public DateTimeOffset ProviderTimestampUtc { get; init; }
    public DateTimeOffset ReceivedAtUtc { get; init; } = DateTimeOffset.UtcNow;
}

public sealed class PaymentOptions
{
    public const string SectionName = "Payment";
    public string CallbackUrl { get; set; } = string.Empty;
    public int WebhookMaxAgeSeconds { get; set; } = 300;
    public int WebhookFutureSkewSeconds { get; set; } = 60;
}

public sealed record FundingPaymentView(
    Guid PaymentId,
    Guid CommitmentId,
    string InitiatedBySubject,
    long AmountMinor,
    string Currency,
    string Status,
    string Provider,
    string? ProviderReference,
    string? RedirectUrl,
    DateTimeOffset CreatedAtUtc,
    DateTimeOffset? ProviderNotifiedAtUtc,
    DateTimeOffset? VerifiedAtUtc,
    DateTimeOffset? ReconciledAtUtc);

public sealed record PaymentOperationResult(
    FundingPaymentView? Payment,
    bool Replayed,
    string? ErrorCode,
    string? ErrorMessage)
{
    public bool Succeeded => Payment is not null && ErrorCode is null;

    public static PaymentOperationResult Success(FundingPaymentView payment, bool replayed = false) =>
        new(payment, replayed, null, null);

    public static PaymentOperationResult Failure(string code, string message) =>
        new(null, false, code, message);
}

public sealed record PaymentWebhookOperationResult(
    Guid? PaymentId,
    bool Replayed,
    string? ErrorCode,
    string? ErrorMessage)
{
    public bool Succeeded => PaymentId is not null && ErrorCode is null;

    public static PaymentWebhookOperationResult Success(Guid paymentId, bool replayed = false) =>
        new(paymentId, replayed, null, null);

    public static PaymentWebhookOperationResult Failure(string code, string message) =>
        new(null, false, code, message);
}
