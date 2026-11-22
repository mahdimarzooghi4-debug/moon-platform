using System.IdentityModel.Tokens.Jwt;
using System.Net;
using System.Security.Claims;
using System.Security.Cryptography;
using System.Text;
using System.Text.Json;
using Microsoft.IdentityModel.Tokens;
using Moon.Platform.Api.Integrations.Mehrad;
using Xunit;

namespace Moon.Platform.Tests;

public sealed class MehradSsoTests
{
    private static readonly Guid MerchantId = Guid.Parse("6c6a2d61-63f1-44a9-9a5e-2b2d9a51f0c7");
    private static readonly Guid UserId = Guid.Parse("3f1a9c22-58b4-4f6e-9d77-1b2c3d4e5f60");

    [Fact]
    public void Client_signature_is_lowercase_HMAC_SHA256_of_exact_code()
    {
        const string secret = "unit-test-secret";
        const string code = "unit-test-code";
        var expected = Convert.ToHexStringLower(HMACSHA256.HashData(
            Encoding.UTF8.GetBytes(secret), Encoding.UTF8.GetBytes(code)));
        Assert.Equal(expected, MehradSsoTokenClient.CreateClientSignature(secret, code));
        Assert.Equal(64, expected.Length);
    }

    [Fact]
    public async Task Token_exchange_uses_server_side_signed_request_contract()
    {
        using var handler = new StubHttpHandler(async request =>
        {
            Assert.Equal(HttpMethod.Post, request.Method);
            Assert.Equal("https://dev-api.mehrad.app/gateway/sso/token", request.RequestUri!.ToString());
            using var body = JsonDocument.Parse(await request.Content!.ReadAsStringAsync());
            var root = body.RootElement;
            Assert.Equal("authorization_code", root.GetProperty("grant_type").GetString());
            Assert.Equal(MerchantId.ToString("D"), root.GetProperty("merchant_id").GetString());
            Assert.Equal("temporary-code", root.GetProperty("code").GetString());
            Assert.Equal(
                MehradSsoTokenClient.CreateClientSignature("secret", "temporary-code"),
                root.GetProperty("client_signature").GetString());
            return new HttpResponseMessage(HttpStatusCode.OK)
            {
                Content = new StringContent(
                    """{"access_token":"opaque-test-token","token_type":"Bearer","expires_in":43200,"scope":"openid profile","id_token":"signed-id-token"}""",
                    Encoding.UTF8, "application/json")
            };
        });
        using var client = new HttpClient(handler) { BaseAddress = new Uri("https://api.mehrad.app") };
        var response = await new MehradSsoTokenClient(client)
            .ExchangeCodeAsync(MerchantId, "secret", "temporary-code", MehradProviderEndpoints.Staging);
        Assert.Equal("opaque-test-token", response.AccessToken);
        Assert.Equal("signed-id-token", response.IdToken);
        Assert.Equal(43200, response.ExpiresIn);
    }

    [Fact]
    public async Task Valid_id_token_returns_unprivileged_provider_identity()
    {
        using var rsa = RSA.Create(2048);
        using var http = JwksClient(rsa);
        var identity = await new MehradIdTokenValidator(http).ValidateAsync(
            Exchange(CreateJwt(rsa)), MerchantId, MehradProviderEndpoints.Production);

        Assert.Equal(UserId.ToString("D"), identity.MehradSubject);
        Assert.Equal("Test User", identity.Name);
        Assert.True(identity.TokenExpiresAtUtc > DateTimeOffset.UtcNow);
    }

    [Fact]
    public async Task Missing_openid_scope_is_rejected()
    {
        using var rsa = RSA.Create(2048);
        using var http = JwksClient(rsa);
        await Assert.ThrowsAnyAsync<SecurityTokenException>(() =>
            new MehradIdTokenValidator(http).ValidateAsync(
                Exchange(CreateJwt(rsa)) with { Scope = "profile" }, MerchantId, MehradProviderEndpoints.Production));
    }

    [Fact]
    public async Task Different_merchant_audience_is_rejected()
    {
        using var rsa = RSA.Create(2048);
        using var http = JwksClient(rsa);
        await Assert.ThrowsAnyAsync<SecurityTokenException>(() =>
            new MehradIdTokenValidator(http).ValidateAsync(
                Exchange(CreateJwt(rsa, audience: Guid.NewGuid())), MerchantId, MehradProviderEndpoints.Production));
    }

    [Fact]
    public async Task Wrong_issuer_is_rejected()
    {
        using var rsa = RSA.Create(2048);
        using var http = JwksClient(rsa);
        await Assert.ThrowsAnyAsync<SecurityTokenException>(() =>
            new MehradIdTokenValidator(http).ValidateAsync(
                Exchange(CreateJwt(rsa, issuer: "https://untrusted.example")), MerchantId, MehradProviderEndpoints.Production));
    }

    [Fact]
    public async Task Expired_token_is_rejected()
    {
        using var rsa = RSA.Create(2048);
        using var http = JwksClient(rsa);
        await Assert.ThrowsAnyAsync<SecurityTokenException>(() =>
            new MehradIdTokenValidator(http).ValidateAsync(
                Exchange(CreateJwt(rsa, expires: DateTime.UtcNow.AddMinutes(-5))), MerchantId, MehradProviderEndpoints.Production));
    }

    [Fact]
    public async Task Untrusted_signature_is_rejected()
    {
        using var trustedRsa = RSA.Create(2048);
        using var untrustedRsa = RSA.Create(2048);
        using var http = JwksClient(trustedRsa);
        await Assert.ThrowsAnyAsync<SecurityTokenException>(() =>
            new MehradIdTokenValidator(http).ValidateAsync(
                Exchange(CreateJwt(untrustedRsa)), MerchantId, MehradProviderEndpoints.Production));
    }

    [Fact]
    public async Task Incorrect_token_type_is_rejected()
    {
        using var rsa = RSA.Create(2048);
        using var http = JwksClient(rsa);
        await Assert.ThrowsAnyAsync<SecurityTokenException>(() =>
            new MehradIdTokenValidator(http).ValidateAsync(
                Exchange(CreateJwt(rsa, tokenType: "access")), MerchantId, MehradProviderEndpoints.Production));
    }

    [Theory]
    [InlineData("Staging", "https://dev-api.mehrad.app/")]
    [InlineData("Production", "https://api.mehrad.app/")]
    public void Provider_selection_is_exact_and_pinned(string name, string expectedOrigin)
    {
        Assert.True(MehradProviderEndpoints.TryResolve(name, out var endpoints));
        Assert.Equal(expectedOrigin, endpoints.ApiOrigin.ToString());
        Assert.False(MehradProviderEndpoints.TryResolve(null, out _));
        Assert.False(MehradProviderEndpoints.TryResolve("staging", out _));
        Assert.False(MehradProviderEndpoints.TryResolve("https://evil.example", out _));
    }

    [Fact]
    public async Task Staging_id_token_uses_staging_jwks_and_staging_issuer()
    {
        using var rsa = RSA.Create(2048);
        using var http = JwksClient(rsa, MehradProviderEndpoints.Staging);
        var identity = await new MehradIdTokenValidator(http).ValidateAsync(
            Exchange(CreateJwt(rsa, issuer: MehradProviderEndpoints.Staging.ExpectedIssuer)),
            MerchantId, MehradProviderEndpoints.Staging);
        Assert.Equal(UserId.ToString("D"), identity.MehradSubject);
    }

    [Fact]
    public async Task Production_issuer_is_not_accepted_in_staging_even_with_staging_signing_key()
    {
        using var rsa = RSA.Create(2048);
        using var http = JwksClient(rsa, MehradProviderEndpoints.Staging);
        await Assert.ThrowsAnyAsync<SecurityTokenException>(() =>
            new MehradIdTokenValidator(http).ValidateAsync(
                Exchange(CreateJwt(rsa, issuer: MehradProviderEndpoints.Production.ExpectedIssuer)),
                MerchantId, MehradProviderEndpoints.Staging));
    }

    private static MehradTokenResponse Exchange(string jwt) =>
        new("access-token", "Bearer", 43200, "openid profile", jwt);

    private static string CreateJwt(
        RSA rsa,
        Guid? audience = null,
        string issuer = "https://api.mehrad.app",
        DateTime? expires = null,
        string tokenType = "sso_id")
    {
        var now = DateTime.UtcNow;
        var descriptor = new SecurityTokenDescriptor
        {
            Issuer = issuer,
            Audience = (audience ?? MerchantId).ToString("D"),
            Subject = new ClaimsIdentity(
            [
                new Claim("sub", UserId.ToString("D")),
                new Claim("name", "Test User"),
                new Claim("token_type", tokenType)
            ]),
            IssuedAt = now.AddMinutes(-20),
            NotBefore = now.AddMinutes(-20),
            Expires = expires ?? now.AddMinutes(5),
            SigningCredentials = new SigningCredentials(
                new RsaSecurityKey(rsa) { KeyId = "test-key" },
                SecurityAlgorithms.RsaSha256)
        };
        var handler = new JwtSecurityTokenHandler();
        return handler.WriteToken(handler.CreateToken(descriptor));
    }

    private static HttpClient JwksClient(RSA rsa, MehradProviderEndpoints? provider = null)
    {
        provider ??= MehradProviderEndpoints.Production;
        var publicKey = rsa.ExportParameters(false);
        var jwks = JsonSerializer.Serialize(new
        {
            keys = new[]
            {
                new
                {
                    kty = "RSA",
                    kid = "test-key",
                    use = "sig",
                    alg = "RS256",
                    n = Base64UrlEncoder.Encode(publicKey.Modulus!),
                    e = Base64UrlEncoder.Encode(publicKey.Exponent!)
                }
            }
        });
        return new HttpClient(new StubHttpHandler(request =>
        {
            Assert.Equal(
                provider.JwksUrl.ToString(),
                request.RequestUri!.ToString());
            return Task.FromResult(new HttpResponseMessage(HttpStatusCode.OK)
            {
                Content = new StringContent(jwks, Encoding.UTF8, "application/json")
            });
        }));
    }

    private sealed class StubHttpHandler(
        Func<HttpRequestMessage, Task<HttpResponseMessage>> respond) : HttpMessageHandler
    {
        protected override Task<HttpResponseMessage> SendAsync(
            HttpRequestMessage request, CancellationToken cancellationToken) => respond(request);
    }
}
