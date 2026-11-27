using Moon.Platform.Api.Common.Messaging;

namespace Moon.Platform.Api.Modules.StartupRegistration;

public static class RegistrationSmsNotice
{
    public const string Submitted = "StartupRegistrationSmsSubmitted";
    public const string Approved = "StartupRegistrationSmsApproved";

    public static OutboxMessage Create(Guid applicationId, string eventType)
    {
        if (applicationId == Guid.Empty || eventType is not (Submitted or Approved))
            throw new ArgumentException("Invalid registration notice");
        return new OutboxMessage
        {
            EventType = eventType,
            AggregateType = "startup_application",
            AggregateId = applicationId.ToString("D"),
            DeduplicationKey = $"{eventType}:{applicationId:D}",
            PayloadJson = "{}",
            CorrelationId = applicationId.ToString("D")
        };
    }

    public static string? TemplateKey(string eventType) => eventType switch
    {
        Submitted => "ExternalServices:Sms:RegistrationSubmittedTemplateId",
        Approved => "ExternalServices:Sms:RegistrationApprovedTemplateId",
        _ => null
    };
}
