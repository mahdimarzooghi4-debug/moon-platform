using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using Microsoft.IdentityModel.Tokens;

namespace Moon.Platform.Api.Integrations.Mehrad;

/// <summary>
/// Verifies Mehrad identity claims independently of Moon's Keycloak authentication.
/// This validator never creates a Moon session or grants Moon roles.
/// </summary>
public sealed class MehradIdTokenValidator(HttpClient httpClient)
{
    private const string Issuer = "https://api.mehrad.app";
    private const string JwksUrl = "https://api.mehrad.app/gateway/sso/.well-known/jwks.json";

    public async Task<MehradVerifiedIdentity> ValidateAsync(
        MehradTokenResponse exchange,
        Guid merchantId,
        CancellationToken cancellationToken = default)
    {
        ArgumentNullException.ThrowIfNull(exchange);
        if (merchantId == Guid.Empty)
            throw new ArgumentException("Mehrad merchant ID must be configured.", nameof(merchantId));

        // Access tokens do not establish identity. Require the explicitly granted openid scope.
        if (string.IsNullOrWhiteSpace(exchange.IdToken) ||
            !exchange.Scope.Split(' ', StringSplitOptions.RemoveEmptyEntries)
                .Contains("openid", StringComparer.Ordinal))
            throw new SecurityTokenException("Mehrad openid scope and ID Token are required.");

        // Provider URL is pinned: never accept a JWKS URL from a request or token.
        using var response = await httpClient.GetAsync(JwksUrl, cancellationToken);
        response.EnsureSuccessStatusCode();
        var signingKeys = new JsonWebKeySet(
            await response.Content.ReadAsStringAsync(cancellationToken)).GetSigningKeys();
        if (signingKeys.Count == 0)
            throw new SecurityTokenException("Mehrad JWKS does not contain signing keys.");

        var handler = new JwtSecurityTokenHandler { MapInboundClaims = false };
        var parameters = new TokenValidationParameters
        {
            ValidateIssuer = true,
            ValidIssuer = Issuer,
            ValidateAudience = true,
            ValidAudience = merchantId.ToString("D"),
            ValidateIssuerSigningKey = true,
            IssuerSigningKeys = signingKeys,
            RequireSignedTokens = true,
            RequireExpirationTime = true,
            ValidateLifetime = true,
            ClockSkew = TimeSpan.FromMinutes(1),
            ValidAlgorithms = [SecurityAlgorithms.RsaSha256]
        };

        ClaimsPrincipal principal = handler.ValidateToken(exchange.IdToken, parameters, out var token);
        if (token is not JwtSecurityToken jwt ||
            jwt.Header.Alg != SecurityAlgorithms.RsaSha256)
            throw new SecurityTokenException("Mehrad ID Token must be signed with RS256.");

        var now = DateTime.UtcNow;
        if (jwt.IssuedAt == DateTime.MinValue ||
            jwt.IssuedAt > now.AddMinutes(1) ||
            jwt.IssuedAt >= jwt.ValidTo)
            throw new SecurityTokenException("Mehrad ID Token has invalid issued-at time.");

        if (principal.FindFirst("token_type")?.Value != "sso_id")
            throw new SecurityTokenException("Unexpected Mehrad ID Token type.");

        var subject = principal.FindFirst("sub")?.Value;
        if (!Guid.TryParse(subject, out var userId) || userId == Guid.Empty)
            throw new SecurityTokenException("Mehrad ID Token has no valid subject.");

        // Provider identity is data, not a Moon JWT/ClaimsPrincipal.
        return new MehradVerifiedIdentity(
            userId.ToString("D"),
            principal.FindFirst("name")?.Value,
            new DateTimeOffset(jwt.ValidTo, TimeSpan.Zero));
    }
}

public sealed record MehradVerifiedIdentity(
    string MehradSubject, string? Name, DateTimeOffset TokenExpiresAtUtc);
