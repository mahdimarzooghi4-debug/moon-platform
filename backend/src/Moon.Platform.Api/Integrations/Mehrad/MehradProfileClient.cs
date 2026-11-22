using System.Net.Http.Headers;
using System.Net.Http.Json;
using System.Text.Json.Serialization;
using Microsoft.IdentityModel.Tokens;

namespace Moon.Platform.Api.Integrations.Mehrad;

/// <summary>
/// Server-side retrieval of already consented/scoped Mehrad profile information.
/// Profile data is not authentication evidence and must never be used to assign Moon roles.
/// </summary>
public sealed class MehradProfileClient(HttpClient httpClient)
{
    private const string ProfileUrl = "https://api.mehrad.app/gateway/sso/profile";

    public async Task<MehradProfile> FetchProfileAsync(
        MehradTokenResponse exchange,
        MehradVerifiedIdentity verifiedIdentity,
        CancellationToken cancellationToken = default)
    {
        ArgumentNullException.ThrowIfNull(exchange);
        ArgumentNullException.ThrowIfNull(verifiedIdentity);

        if (string.IsNullOrWhiteSpace(exchange.AccessToken) ||
            !exchange.Scope.Split(' ', StringSplitOptions.RemoveEmptyEntries)
                .Contains("profile", StringComparer.Ordinal))
            throw new SecurityTokenException("Mehrad profile scope and Access Token are required.");

        using var request = new HttpRequestMessage(HttpMethod.Get, ProfileUrl);
        request.Headers.Authorization = new AuthenticationHeaderValue("Bearer", exchange.AccessToken);
        using var response = await httpClient.SendAsync(request, cancellationToken);
        response.EnsureSuccessStatusCode();
        var profile = await response.Content.ReadFromJsonAsync<MehradProfile>(
            cancellationToken: cancellationToken);

        if (profile is null ||
            !Guid.TryParse(profile.Sub, out var profileSubject) ||
            !Guid.TryParse(verifiedIdentity.MehradSubject, out var verifiedSubject) ||
            profileSubject != verifiedSubject)
            throw new SecurityTokenException("Mehrad profile subject does not match validated identity.");

        // Do not persist fields automatically. The consumer must explicitly choose permitted fields.
        return profile;
    }
}

public sealed record MehradProfile(
    [property: JsonPropertyName("sub")] string Sub,
    [property: JsonPropertyName("name")] string? Name,
    [property: JsonPropertyName("first_name")] string? FirstName,
    [property: JsonPropertyName("last_name")] string? LastName,
    [property: JsonPropertyName("mobile")] string? Mobile,
    [property: JsonPropertyName("national_code")] string? NationalCode,
    [property: JsonPropertyName("birth_date")] string? BirthDate);
