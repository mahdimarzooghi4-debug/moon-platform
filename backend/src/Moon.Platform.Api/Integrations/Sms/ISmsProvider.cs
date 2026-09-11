namespace Moon.Platform.Api.Integrations.Sms;

public interface ISmsProvider
{
    Task<SmsSendResult> SendOtpAsync(
        string destination,
        string template,
        IReadOnlyDictionary<string, string> tokens,
        CancellationToken cancellationToken = default);
}

public sealed record SmsSendResult(bool Accepted, string Provider, string? ProviderReference, string? ErrorCode)
{
    public static SmsSendResult NotConfigured() => new(false, "disabled", null, "sms_not_configured");
}
