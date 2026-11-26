using System.Net.Http.Json;

namespace Moon.Platform.Api.Integrations.Sms;

internal sealed class SmsIrProvider(HttpClient client, IConfiguration configuration) : ISmsProvider
{
    public async Task<SmsSendResult> SendOtpAsync(
        string destination, string template, IReadOnlyDictionary<string, string> tokens,
        CancellationToken cancellationToken = default)
    {
        var apiKey = configuration["ExternalServices:Sms:ApiKey"];
        if (string.IsNullOrWhiteSpace(apiKey) || !int.TryParse(template, out var templateId) || templateId <= 0)
            return SmsSendResult.NotConfigured();

        using var request = new HttpRequestMessage(HttpMethod.Post, "https://api.sms.ir/v1/send/verify");
        request.Headers.Add("X-API-KEY", apiKey);
        request.Content = JsonContent.Create(new
        {
            mobile = destination,
            templateId,
            parameters = tokens.Select(token => new { name = token.Key, value = token.Value })
        });

        try
        {
            using var response = await client.SendAsync(request, cancellationToken);
            var result = response.IsSuccessStatusCode
                ? await response.Content.ReadFromJsonAsync<ProviderResponse>(cancellationToken)
                : null;
            return new SmsSendResult(result?.Status == 1, "sms.ir", null,
                result?.Status == 1 ? null : "sms_send_failed");
        }
        catch (Exception error) when (error is HttpRequestException or System.Text.Json.JsonException
            || error is OperationCanceledException && !cancellationToken.IsCancellationRequested)
        {
            return new SmsSendResult(false, "sms.ir", null, "sms_send_failed");
        }
    }

    private sealed record ProviderResponse(int Status);
}
