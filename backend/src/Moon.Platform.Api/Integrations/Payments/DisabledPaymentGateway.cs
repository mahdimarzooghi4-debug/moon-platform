namespace Moon.Platform.Api.Integrations.Payments;

public sealed class DisabledPaymentGateway : IPaymentGateway
{
    public Task<PaymentIntentResult> CreateIntentAsync(PaymentIntentRequest request, CancellationToken cancellationToken = default)
        => Task.FromResult(PaymentIntentResult.NotConfigured());

    public Task<PaymentVerificationResult> VerifyAsync(string providerReference, CancellationToken cancellationToken = default)
        => Task.FromResult(PaymentVerificationResult.NotConfigured(providerReference));
}
