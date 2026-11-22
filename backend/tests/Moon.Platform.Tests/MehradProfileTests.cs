using System.Net;
using System.Text;
using Microsoft.IdentityModel.Tokens;
using Moon.Platform.Api.Integrations.Mehrad;
using Xunit;

namespace Moon.Platform.Tests;

public sealed class MehradProfileTests
{
    private const string Subject = "3f1a9c22-58b4-4f6e-9d77-1b2c3d4e5f60";

    [Fact]
    public async Task Scoped_request_sends_bearer_token_and_returns_optional_profile_fields()
    {
        using var handler = new FakeHttpHandler(request =>
        {
            Assert.Equal(HttpMethod.Get, request.Method);
            Assert.Equal("https://api.mehrad.app/gateway/sso/profile", request.RequestUri!.ToString());
            Assert.Equal("Bearer", request.Headers.Authorization!.Scheme);
            Assert.Equal("access-token", request.Headers.Authorization.Parameter);
            return new HttpResponseMessage(HttpStatusCode.OK)
            {
                Content = new StringContent(
                    """{"sub":"3f1a9c22-58b4-4f6e-9d77-1b2c3d4e5f60","name":"Example User","mobile":null,"national_code":null}""",
                    Encoding.UTF8, "application/json")
            };
        });
        using var http = new HttpClient(handler);
        var result = await new MehradProfileClient(http).FetchProfileAsync(
            Exchange("profile openid"), Verified());
        Assert.Equal(Subject, result.Sub);
        Assert.Equal("Example User", result.Name);
        Assert.Null(result.Mobile);
        Assert.Null(result.NationalCode);
    }

    [Fact]
    public async Task Scope_not_granted_rejects_before_network_request()
    {
        using var handler = new FakeHttpHandler(_ =>
            throw new InvalidOperationException("Network should not be called."));
        using var http = new HttpClient(handler);
        await Assert.ThrowsAnyAsync<SecurityTokenException>(() =>
            new MehradProfileClient(http).FetchProfileAsync(Exchange("openid"), Verified()));
    }

    [Fact]
    public async Task Profile_subject_mismatch_is_rejected()
    {
        using var handler = new FakeHttpHandler(_ =>
            new HttpResponseMessage(HttpStatusCode.OK)
            {
                Content = new StringContent(
                    """{"sub":"6c6a2d61-63f1-44a9-9a5e-2b2d9a51f0c7","name":"Another User"}""",
                    Encoding.UTF8, "application/json")
            });
        using var http = new HttpClient(handler);
        await Assert.ThrowsAnyAsync<SecurityTokenException>(() =>
            new MehradProfileClient(http).FetchProfileAsync(Exchange("openid profile"), Verified()));
    }

    [Fact]
    public async Task Provider_unauthorized_response_is_not_interpreted_as_profile()
    {
        using var handler = new FakeHttpHandler(_ =>
            new HttpResponseMessage(HttpStatusCode.Unauthorized));
        using var http = new HttpClient(handler);
        await Assert.ThrowsAsync<HttpRequestException>(() =>
            new MehradProfileClient(http).FetchProfileAsync(Exchange("profile"), Verified()));
    }

    private static MehradTokenResponse Exchange(string scope) =>
        new("access-token", "Bearer", 43200, scope, "not-used-here");

    private static MehradVerifiedIdentity Verified() =>
        new(Subject, "Example User", DateTimeOffset.UtcNow.AddMinutes(5));

    private sealed class FakeHttpHandler(Func<HttpRequestMessage, HttpResponseMessage> respond)
        : HttpMessageHandler
    {
        protected override Task<HttpResponseMessage> SendAsync(
            HttpRequestMessage request, CancellationToken cancellationToken) =>
            Task.FromResult(respond(request));
    }
}
