using System.Net.Http.Headers;
using System.Net.Http.Json;
using System.Text.Json;

namespace Moon.Platform.Api.Modules.Identity;

public sealed class KeycloakAccountClient(HttpClient client, IConfiguration configuration)
{
    public async Task<string?> CreateDisabledAsync(
        string username, string firstName, string lastName, string email, string temporaryPassword,
        CancellationToken cancellationToken)
    {
        var (usersUrl, token) = await AuthenticateAsync(cancellationToken);
        using var request = new HttpRequestMessage(HttpMethod.Post, usersUrl);
        request.Headers.Authorization = new AuthenticationHeaderValue("Bearer", token);
        request.Content = JsonContent.Create(new
        {
            username,
            firstName,
            lastName,
            email,
            enabled = false,
            credentials = new[] { new { type = "password", value = temporaryPassword, temporary = true } }
        });
        using var response = await client.SendAsync(request, cancellationToken);
        if (response.StatusCode == System.Net.HttpStatusCode.Conflict)
            return null;

        response.EnsureSuccessStatusCode();
        var location = response.Headers.Location?.OriginalString.TrimEnd('/');
        var subject = location?.Split('/').Last();
        return Guid.TryParse(subject, out _)
            ? subject
            : throw new InvalidOperationException("Keycloak did not return the new user ID.");
    }

    public async Task EnableAsync(string subject, CancellationToken cancellationToken)
    {
        var (usersUrl, token) = await AuthenticateAsync(cancellationToken);
        using var request = new HttpRequestMessage(HttpMethod.Put, $"{usersUrl}/{subject}");
        request.Headers.Authorization = new AuthenticationHeaderValue("Bearer", token);
        request.Content = JsonContent.Create(new { enabled = true });
        using var response = await client.SendAsync(request, cancellationToken);
        response.EnsureSuccessStatusCode();
    }

    private async Task<(string UsersUrl, string Token)> AuthenticateAsync(CancellationToken cancellationToken)
    {
        var authority = configuration["KeycloakProvisioning:Authority"]?.TrimEnd('/')
            ?? throw new InvalidOperationException("Keycloak authority is required.");
        const string realmSuffix = "/realms/moon";
        if (!authority.EndsWith(realmSuffix, StringComparison.Ordinal))
            throw new InvalidOperationException("The provisioning client requires the moon realm.");

        var secret = configuration["KeycloakProvisioning:ClientSecret"];
        if (string.IsNullOrWhiteSpace(secret))
            throw new InvalidOperationException("Keycloak provisioning is not configured.");

        using var credentials = new FormUrlEncodedContent(new Dictionary<string, string>
        {
            ["grant_type"] = "client_credentials",
            ["client_id"] = "moon-account-provisioner",
            ["client_secret"] = secret
        });
        using var tokenResponse = await client.PostAsync(
            authority + "/protocol/openid-connect/token", credentials, cancellationToken);
        tokenResponse.EnsureSuccessStatusCode();
        using var token = await tokenResponse.Content.ReadFromJsonAsync<JsonDocument>(cancellationToken)
            ?? throw new InvalidOperationException("Keycloak did not return a token.");
        var accessToken = token.RootElement.GetProperty("access_token").GetString()
            ?? throw new InvalidOperationException("Keycloak did not return an access token.");
        return (authority[..^realmSuffix.Length] + "/admin/realms/moon/users", accessToken);
    }
}
