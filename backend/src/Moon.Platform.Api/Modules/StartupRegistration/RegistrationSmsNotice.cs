using Moon.Platform.Api.Common.Messaging;

namespace Moon.Platform.Api.Modules.StartupRegistration;

public static class RegistrationSmsNotice
{
    public const string Submitted = "StartupRegistrationSmsSubmitted";
    public const string Approved = "StartupRegistrationSmsApproved";

    public static OutboxMessage Create(Guid applicationId, string eventType, string aggregateType = "startup_application")
    {
        if (applicationId == Guid.Empty || eventType is not (Submitted or Approved)
            || aggregateType is not ("startup_application" or "company_application"))
            throw new ArgumentException("Invalid registration notice");
        return new OutboxMessage
        {
            EventType = eventType,
            AggregateType = aggregateType,
            AggregateId = applicationId.ToString("D"),
            DeduplicationKey = aggregateType == "startup_application"
                ? $"{eventType}:{applicationId:D}" : $"{eventType}:{aggregateType}:{applicationId:D}",
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
