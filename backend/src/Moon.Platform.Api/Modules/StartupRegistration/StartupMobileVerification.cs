using System.Globalization;
using System.Net;
using System.Security.Cryptography;
using System.Text;
using System.Text.RegularExpressions;
using Moon.Platform.Api.Integrations.Sms;

namespace Moon.Platform.Api.Modules.StartupRegistration;

internal sealed class StartupMobileVerification(IConfiguration configuration)
{
    private readonly object gate = new();
    private readonly Dictionary<string, Challenge> challenges = new();
    private readonly Queue<(DateTimeOffset Time, IPAddress Address)> requests = new();
    private readonly byte[] secret = RandomNumberGenerator.GetBytes(32);
    private readonly IPAddress? trustedProxy = IPAddress.TryParse(configuration["ReverseProxy:TrustedProxyIp"], out var proxy) ? proxy : null;
    private readonly string template = configuration["ExternalServices:Sms:StartupTemplateId"] ?? "";
    private readonly string parameter = configuration["ExternalServices:Sms:StartupCodeParameter"] ?? "Code";

    public bool Enabled { get; } = string.Equals(configuration["ExternalServices:Sms:Provider"], "SmsIr",
        StringComparison.OrdinalIgnoreCase);

    public static bool IsMobile(string? mobile) => mobile is not null && Regex.IsMatch(mobile, @"\A09[0-9]{9}\z");

    public async Task<IResult> SendAsync(string mobile, HttpContext context, ISmsProvider provider, CancellationToken ct)
    {
        if (!Enabled || !int.TryParse(template, out var templateId) || templateId <= 0)
            return Results.StatusCode(503);

        var address = GetClientAddress(context);
        var now = DateTimeOffset.UtcNow;
        var code = RandomNumberGenerator.GetInt32(0, 1_000_000).ToString("D6", CultureInfo.InvariantCulture);
        Challenge challenge;
        lock (gate)
        {
            foreach (var key in challenges.Where(item => item.Value.WindowEnds <= now && item.Value.TokenExpires <= now && !item.Value.Reserved)
                         .Select(item => item.Key).ToArray())
                challenges.Remove(key);
            while (requests.TryPeek(out var requestTime) && requestTime.Time <= now.AddMinutes(-10))
                requests.Dequeue();
            challenges.TryGetValue(mobile, out var previous);
            var recent = previous is not null && previous.WindowEnds > now ? previous : null;
            if (requests.Count >= 50 || requests.Count(request => request.Address.Equals(address)) >= 5
                || previous is { Reserved: true }
                || previous?.NextSend > now || recent?.SendCount >= 5)
                return Results.StatusCode(429);

            challenge = new Challenge(
                Digest(mobile, code), now.AddMinutes(2), now.AddMinutes(1),
                recent?.WindowEnds ?? now.AddHours(1), (recent?.SendCount ?? 0) + 1);
            challenges[mobile] = challenge;
            requests.Enqueue((now, address));
        }

        var result = await provider.SendOtpAsync(mobile, template, new Dictionary<string, string> { [parameter] = code }, ct);
        if (!result.Accepted)
            return Results.StatusCode(503);

        lock (gate) challenge.Sent = true;
        return Results.NoContent();
    }

    public string? Verify(string mobile, string code)
    {
        var digest = Digest(mobile, code);
        lock (gate)
        {
            if (!challenges.TryGetValue(mobile, out var challenge) || !challenge.Sent
                || challenge.CodeExpires <= DateTimeOffset.UtcNow || challenge.Attempts >= 5 || challenge.CodeUsed)
                return null;
            challenge.Attempts++;
            if (!CryptographicOperations.FixedTimeEquals(digest, challenge.Code))
                return null;

            var token = Convert.ToHexString(RandomNumberGenerator.GetBytes(32));
            challenge.CodeUsed = true;
            challenge.Token = Digest(mobile, token);
            challenge.TokenExpires = DateTimeOffset.UtcNow.AddMinutes(45);
            return token;
        }
    }

    public bool TryReserve(string mobile, string token)
    {
        if (token.Length != 64) return false;
        var digest = Digest(mobile, token);
        lock (gate)
        {
            if (!challenges.TryGetValue(mobile, out var challenge) || challenge.Token is null || challenge.Reserved
                || challenge.TokenExpires <= DateTimeOffset.UtcNow
                || !CryptographicOperations.FixedTimeEquals(digest, challenge.Token))
                return false;
            challenge.Reserved = true;
            return true;
        }
    }

    public void Complete(string mobile, bool submitted)
    {
        lock (gate)
        {
            if (!challenges.TryGetValue(mobile, out var challenge)) return;
            challenge.Reserved = false;
            if (submitted) challenge.Token = null;
        }
    }

    private IPAddress GetClientAddress(HttpContext context)
    {
        var remote = context.Connection.RemoteIpAddress ?? IPAddress.None;
        if (remote.IsIPv4MappedToIPv6) remote = remote.MapToIPv4();
        if (!remote.Equals(trustedProxy)) return remote;

        var forwarded = context.Request.Headers["X-Forwarded-For"].ToString().Split(',').Last().Trim();
        return IPAddress.TryParse(forwarded, out var address) ? address : remote;
    }

    private byte[] Digest(string mobile, string secretValue) =>
        HMACSHA256.HashData(secret, Encoding.UTF8.GetBytes($"{mobile}:{secretValue}"));

    private sealed record Challenge(byte[] Code, DateTimeOffset CodeExpires, DateTimeOffset NextSend,
        DateTimeOffset WindowEnds, int SendCount)
    {
        public bool Sent { get; set; }
        public int Attempts { get; set; }
        public byte[]? Token { get; set; }
        public DateTimeOffset TokenExpires { get; set; }
        public bool Reserved { get; set; }
        public bool CodeUsed { get; set; }
    }
}
