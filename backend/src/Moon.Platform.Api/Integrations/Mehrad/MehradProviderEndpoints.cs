namespace Moon.Platform.Api.Integrations.Mehrad;

/// <summary>
/// Pinned, separately trusted Mehrad SSO environments. Never form URLs from
/// a callback, ID Token, or merchant-controlled input. An unknown environment
/// must fail closed before any credential or authorization code is sent.
/// </summary>
public sealed class MehradProviderEndpoints
{
    private MehradProviderEndpoints(string origin)
    {
        ApiOrigin = new Uri(origin, UriKind.Absolute);
        ExpectedIssuer = origin;
    }

    public Uri ApiOrigin { get; }
    public string ExpectedIssuer { get; }
    public Uri TokenUrl => new(ApiOrigin, "/gateway/sso/token");
    public Uri JwksUrl => new(ApiOrigin, "/gateway/sso/.well-known/jwks.json");
    public Uri ProfileUrl => new(ApiOrigin, "/gateway/sso/profile");

    public static MehradProviderEndpoints Staging { get; } =
        new("https://dev-api.mehrad.app");
    public static MehradProviderEndpoints Production { get; } =
        new("https://api.mehrad.app");

    public static bool TryResolve(string? environment, out MehradProviderEndpoints provider)
    {
        provider = environment switch
        {
            "Staging" => Staging,
            "Production" => Production,
            _ => null!
        };
        return provider is not null;
    }
}
