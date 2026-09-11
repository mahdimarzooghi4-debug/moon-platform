namespace Moon.Platform.Api.Integrations.Payments;

public interface IPaymentGateway
{
    Task<PaymentIntentResult> CreateIntentAsync(PaymentIntentRequest request, CancellationToken cancellationToken = default);
    Task<PaymentVerificationResult> VerifyAsync(string providerReference, CancellationToken cancellationToken = default);
}

public sealed record PaymentIntentRequest(long AmountMinor, string Currency, string CallbackUrl, string IdempotencyKey);

public sealed record PaymentIntentResult(bool Accepted, string Provider, string? ProviderReference, string? RedirectUrl, string? ErrorCode)
{
    public static PaymentIntentResult NotConfigured() => new(false, "disabled", null, null, "payment_not_configured");
}

public sealed record PaymentVerificationResult(bool Verified, string Provider, string? ProviderReference, string? ErrorCode)
{
    public static PaymentVerificationResult NotConfigured(string providerReference) =>
        new(false, "disabled", providerReference, "payment_not_configured");
}
