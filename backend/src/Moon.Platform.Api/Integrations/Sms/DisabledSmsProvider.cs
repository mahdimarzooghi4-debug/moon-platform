namespace Moon.Platform.Api.Integrations.Sms;

public sealed class DisabledSmsProvider : ISmsProvider
{
    public Task<SmsSendResult> SendOtpAsync(
        string destination,
        string template,
        IReadOnlyDictionary<string, string> tokens,
        CancellationToken cancellationToken = default)
        => Task.FromResult(SmsSendResult.NotConfigured());
}
