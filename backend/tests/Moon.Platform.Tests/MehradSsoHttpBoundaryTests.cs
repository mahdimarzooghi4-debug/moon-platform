using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.Configuration;
using Moon.Platform.Api.Modules.Identity;
using Xunit;

namespace Moon.Platform.Tests;

public sealed class MehradSsoHttpBoundaryTests
{
    private static readonly Guid MerchantId = Guid.Parse("6c6a2d61-63f1-44a9-9a5e-2b2d9a51f0c7");

    [Fact]
    public void Missing_merchant_configuration_fails_closed()
    {
        IConfiguration config = new ConfigurationBuilder().AddInMemoryCollection(
            new Dictionary<string, string?> { ["MehradSso:Enabled"] = "true" }).Build();
        Assert.False(MehradSsoRequestGuard.TryReadConfiguration(config, out _));
    }

    [Fact]
    public void Valid_configuration_requires_https_origin_without_paths_or_query()
    {
        IConfiguration Valid(string origin) => new ConfigurationBuilder().AddInMemoryCollection(
            new Dictionary<string, string?>
            {
                ["MehradSso:MerchantId"] = MerchantId.ToString("D"),
                ["MehradSso:ClientSecret"] = "unit-test-secret",
                ["MehradSso:PublicOrigin"] = origin
            }).Build();

        Assert.True(MehradSsoRequestGuard.TryReadConfiguration(
            Valid("https://moon.example"), out var valid));
        Assert.Equal(MerchantId, valid.MerchantId);
        Assert.Equal("https://moon.example/", valid.PublicOrigin.ToString());
        Assert.False(MehradSsoRequestGuard.TryReadConfiguration(Valid("http://moon.example"), out _));
        Assert.False(MehradSsoRequestGuard.TryReadConfiguration(Valid("https://moon.example/path"), out _));
        Assert.False(MehradSsoRequestGuard.TryReadConfiguration(Valid("https://moon.example/?redirect=evil"), out _));
    }

    [Fact]
    public void Callback_requires_pinned_https_public_origin()
    {
        var http = Context();
        var expected = new Uri("https://moon.example");
        Assert.True(MehradSsoRequestGuard.IsExpectedHttpsOrigin(http.Request, expected));

        http.Request.Scheme = "http";
        Assert.False(MehradSsoRequestGuard.IsExpectedHttpsOrigin(http.Request, expected));
        http.Request.Scheme = "https";
        http.Request.Host = new HostString("evil.example");
        Assert.False(MehradSsoRequestGuard.IsExpectedHttpsOrigin(http.Request, expected));
    }

    [Fact]
    public void Confirmation_requires_same_origin_and_explicit_custom_header()
    {
        var http = Context();
        var expected = new Uri("https://moon.example");
        Assert.False(MehradSsoRequestGuard.IsExplicitSameOriginConfirmation(http.Request, expected));

        http.Request.Headers["Origin"] = "https://moon.example";
        http.Request.Headers[MehradSsoEndpoints.ConfirmationHeaderName] = "link-account";
        Assert.True(MehradSsoRequestGuard.IsExplicitSameOriginConfirmation(http.Request, expected));

        http.Request.Headers["Origin"] = "https://evil.example";
        Assert.False(MehradSsoRequestGuard.IsExplicitSameOriginConfirmation(http.Request, expected));

        http.Request.Headers["Origin"] = "https://moon.example";
        http.Request.Headers[MehradSsoEndpoints.ConfirmationHeaderName] = "other";
        Assert.False(MehradSsoRequestGuard.IsExplicitSameOriginConfirmation(http.Request, expected));
    }

    [Fact]
    public void Callback_code_must_be_single_bounded_value()
    {
        var http = Context();
        http.Request.QueryString = new QueryString("?code=abc-123");
        Assert.True(MehradSsoRequestGuard.TryReadAuthorizationCode(http.Request, out var code));
        Assert.Equal("abc-123", code);

        http.Request.QueryString = new QueryString("?code=a&code=b");
        Assert.False(MehradSsoRequestGuard.TryReadAuthorizationCode(http.Request, out _));
        http.Request.QueryString = new QueryString("?code=");
        Assert.False(MehradSsoRequestGuard.TryReadAuthorizationCode(http.Request, out _));
        http.Request.QueryString = new QueryString("?code=" + new string('x', 513));
        Assert.False(MehradSsoRequestGuard.TryReadAuthorizationCode(http.Request, out _));
    }

    [Fact]
    public void Handoff_cookie_roundtrips_but_rejects_malformed_proofs()
    {
        var ticket = new MehradHandoffTicket(
            Guid.NewGuid(), new string('a', 64), DateTimeOffset.UtcNow.AddMinutes(5));
        var value = MehradSsoRequestGuard.EncodeTicket(ticket);
        Assert.True(MehradSsoRequestGuard.TryDecodeTicket(value, out var id, out var proof));
        Assert.Equal(ticket.Id, id);
        Assert.Equal(ticket.Proof, proof);
        Assert.False(MehradSsoRequestGuard.TryDecodeTicket(value + "x", out _, out _));
        Assert.False(MehradSsoRequestGuard.TryDecodeTicket("not-a-ticket", out _, out _));
        Assert.False(MehradSsoRequestGuard.TryDecodeTicket(
            ticket.Id.ToString("N") + "." + new string('g', 64), out _, out _));
    }

    private static DefaultHttpContext Context()
    {
        var ctx = new DefaultHttpContext();
        ctx.Request.Scheme = "https";
        ctx.Request.Host = new HostString("moon.example");
        return ctx;
    }
}
