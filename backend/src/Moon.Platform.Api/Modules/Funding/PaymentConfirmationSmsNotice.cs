using Moon.Platform.Api.Common.Messaging;

namespace Moon.Platform.Api.Modules.Funding;

// Durable notification obligation only; no recipient or bank reference is
// fabricated or published to the generic integration-event broker.
public static class PaymentConfirmationSmsNotice
{
    public const string EventType = "PaymentConfirmationSmsRequested";
    public const string TemplateConfigurationKey = "ExternalServices:Sms:PaymentConfirmationTemplateId";

    public static OutboxWriteRequest Create(FundingPayment payment, string correlationId)
    {
        if (payment.Id == Guid.Empty || payment.Status != PaymentStatuses.Verified
            || payment.VerifiedAtUtc is null)
            throw new ArgumentException("Only a verified payment can request a confirmation SMS.", nameof(payment));

        return new OutboxWriteRequest(
            EventType, "funding_payment", payment.Id.ToString("D"),
            $"{EventType}:{payment.Id:D}", "{}", correlationId, payment.VerifiedAtUtc);
    }
}
