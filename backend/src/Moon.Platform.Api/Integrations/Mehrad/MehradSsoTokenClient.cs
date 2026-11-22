using System.Net.Http.Json;
using System.Security.Cryptography;
using System.Text;
using System.Text.Json.Serialization;

namespace Moon.Platform.Api.Integrations.Mehrad;

/// <summary>
/// Server-only implementation of the documented Mehrad authorization-code exchange.
/// This client does not authenticate a Moon user or create a session.
/// </summary>
public sealed class MehradSsoTokenClient(HttpClient httpClient)
{
    public static string CreateClientSignature(string clientSecret, string authorizationCode)
    {
        ArgumentException.ThrowIfNullOrWhiteSpace(clientSecret);
        ArgumentException.ThrowIfNullOrWhiteSpace(authorizationCode);
        var digest = HMACSHA256.HashData(
            Encoding.UTF8.GetBytes(clientSecret),
            Encoding.UTF8.GetBytes(authorizationCode));
        return Convert.ToHexStringLower(digest);
    }

    public async Task<MehradTokenResponse> ExchangeCodeAsync(
        Guid merchantId,
        string clientSecret,
        string authorizationCode,
        CancellationToken cancellationToken = default)
    {
        if (merchantId == Guid.Empty) throw new ArgumentException("Merchant ID is required.", nameof(merchantId));
        var signature = CreateClientSignature(clientSecret, authorizationCode);
        using var response = await httpClient.PostAsJsonAsync(
            "/gateway/sso/token",
            new
            {
                grant_type = "authorization_code",
                merchant_id = merchantId,
                code = authorizationCode,
                client_signature = signature
            },
            cancellationToken);

        response.EnsureSuccessStatusCode();
        var token = await response.Content.ReadFromJsonAsync<MehradTokenResponse>(cancellationToken);
        if (token is null || string.IsNullOrWhiteSpace(token.AccessToken)
            || !string.Equals(token.TokenType, "Bearer", StringComparison.Ordinal)
            || token.ExpiresIn <= 0)
        {
            throw new InvalidOperationException("Mehrad returned an invalid token response.");
        }
        return token;
    }
}

public sealed record MehradTokenResponse(
    [property: JsonPropertyName("access_token")] string AccessToken,
    [property: JsonPropertyName("token_type")] string TokenType,
    [property: JsonPropertyName("expires_in")] int ExpiresIn,
    [property: JsonPropertyName("scope")] string Scope,
    [property: JsonPropertyName("id_token")] string? IdToken);
