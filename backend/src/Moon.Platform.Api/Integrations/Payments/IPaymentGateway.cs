namespace Moon.Platform.Api.Integrations.Payments;

public interface IPaymentGateway
{
    Task<PaymentIntentResult> CreateIntentAsync(PaymentIntentRequest request, CancellationToken cancellationToken = default);
    Task<PaymentVerificationResult> VerifyAsync(string providerReference, CancellationToken cancellationToken = default);
    Task<PaymentWebhookValidationResult> ValidateWebhookAsync(PaymentWebhookRequest request, CancellationToken cancellationToken = default);
}

public sealed record PaymentIntentRequest(long AmountMinor, string Currency, string CallbackUrl, string IdempotencyKey);

public sealed record PaymentIntentResult(bool Accepted, string Provider, string? ProviderReference, string? RedirectUrl, string? ErrorCode)
{
    public static PaymentIntentResult NotConfigured() => new(false, "disabled", null, null, "payment_not_configured");
}

public sealed record PaymentVerificationResult(
    bool Verified,
    string Provider,
    string? ProviderReference,
    long? AmountMinor,
    string? Currency,
    string? ErrorCode)
{
    public static PaymentVerificationResult NotConfigured(string providerReference) =>
        new(false, "disabled", providerReference, null, null, "payment_not_configured");
}

public sealed record PaymentWebhookRequest(
    string EventId,
    DateTimeOffset TimestampUtc,
    string Signature,
    string PayloadVersion,
    string Payload);

public sealed record PaymentWebhookValidationResult(
    bool Valid,
    string Provider,
    string? ProviderReference,
    string? ErrorCode)
{
    public static PaymentWebhookValidationResult NotConfigured() =>
        new(false, "disabled", null, "payment_not_configured");
}
