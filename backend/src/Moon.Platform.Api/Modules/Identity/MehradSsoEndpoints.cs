using Microsoft.IdentityModel.Tokens;
using Moon.Platform.Api.Integrations.Mehrad;

namespace Moon.Platform.Api.Modules.Identity;

/// <summary>
/// Mehrad-initiated callback and explicit *existing account* confirmation only.
/// This integration does not issue Moon tokens or create Keycloak sessions.
/// All routes fail closed until a real merchant configuration is supplied.
/// </summary>
public static class MehradSsoEndpoints
{
    public const string HandoffCookieName = "__Host-moon-mehrad-handoff";
    public const string ConfirmationHeaderName = "X-Moon-Mehrad-Confirm";

    public static IEndpointRouteBuilder MapMehradSsoEndpoints(this IEndpointRouteBuilder app)
    {
        var group = app.MapGroup("/api/v1/integrations/mehrad/sso");
        group.MapGet("/callback", CallbackAsync);
        group.MapGet("/handoff-preview", HandoffPreviewAsync).RequireAuthorization();
        group.MapPost("/link-existing", LinkExistingAsync).RequireAuthorization();
        return app;
    }

    private static async Task<IResult> CallbackAsync(
        HttpContext context,
        IConfiguration config,
        MehradSsoTokenClient tokenClient,
        MehradIdTokenValidator idValidator,
        MehradSsoHandoffService handoffs,
        CancellationToken cancellationToken)
    {
        ApplyNoStoreHeaders(context.Response);
        if (!config.GetValue<bool>("MehradSso:Enabled")) return Results.NotFound();
        if (!MehradSsoRequestGuard.TryReadConfiguration(config, out var settings))
            return Results.StatusCode(StatusCodes.Status503ServiceUnavailable);

        // Do not trust Host/Forwarded headers to determine where to redirect.
        // Proxy deployments must independently pin/trust forwarded origins.
        if (!MehradSsoRequestGuard.IsExpectedHttpsOrigin(context.Request, settings.PublicOrigin))
            return Results.StatusCode(StatusCodes.Status403Forbidden);
        if (!MehradSsoRequestGuard.TryReadAuthorizationCode(context.Request, out var code))
            return Results.BadRequest(new { code = "invalid_authorization_code" });

        try
        {
            var exchange = await tokenClient.ExchangeCodeAsync(
                settings.MerchantId, settings.ClientSecret, code, cancellationToken);
            var identity = await idValidator.ValidateAsync(exchange, settings.MerchantId, cancellationToken);
            var ticket = await handoffs.IssueAsync(identity, settings.MerchantId, cancellationToken);
            var maxAge = ticket.ExpiresAtUtc - DateTimeOffset.UtcNow;
            if (maxAge <= TimeSpan.Zero)
                return Results.BadRequest(new { code = "expired_identity" });

            context.Response.Cookies.Append(
                HandoffCookieName,
                MehradSsoRequestGuard.EncodeTicket(ticket),
                new CookieOptions
                {
                    HttpOnly = true,
                    Secure = true,
                    SameSite = SameSiteMode.Strict,
                    Path = "/",
                    MaxAge = maxAge,
                    IsEssential = true
                });
            // No token, authorization code, or proof in the redirect URL.
            context.Response.Headers.Location = "/mehrad/confirm";
            context.Response.StatusCode = StatusCodes.Status303SeeOther;
            return Results.Empty;
        }
        catch (HttpRequestException)
        {
            // Never return upstream response bodies or sensitive codes to the browser.
            return Results.StatusCode(StatusCodes.Status502BadGateway);
        }
        catch (SecurityTokenException)
        {
            return Results.BadRequest(new { code = "invalid_mehrad_identity" });
        }
    }

    private static async Task<IResult> HandoffPreviewAsync(
        HttpContext context,
        IConfiguration config,
        MehradSsoHandoffService handoffs,
        CancellationToken cancellationToken)
    {
        ApplyNoStoreHeaders(context.Response);
        if (!config.GetValue<bool>("MehradSso:Enabled")) return Results.NotFound();
        if (!MehradSsoRequestGuard.TryReadConfiguration(config, out var settings))
            return Results.StatusCode(StatusCodes.Status503ServiceUnavailable);
        if (!MehradSsoRequestGuard.IsExpectedHttpsOrigin(context.Request, settings.PublicOrigin))
            return Results.StatusCode(StatusCodes.Status403Forbidden);

        // A Keycloak bearer token and a host-only HttpOnly cookie are both needed.
        // Proof, provider tokens and unverified profile data never enter the response.
        if (!context.Request.Cookies.TryGetValue(HandoffCookieName, out var cookie) ||
            !MehradSsoRequestGuard.TryDecodeTicket(cookie, out var handoffId, out var proof))
            return Results.BadRequest(new { code = "missing_handoff" });

        var preview = await handoffs.PreviewAsync(
            handoffId, settings.MerchantId, proof, cancellationToken);
        if (preview is null)
            return Results.StatusCode(StatusCodes.Status410Gone);

        return Results.Ok(new
        {
            mehradSubject = preview.MehradSubject.ToString("D"),
            expiresAtUtc = preview.ExpiresAtUtc
        });
    }

    private static async Task<IResult> LinkExistingAsync(
        HttpContext context,
        IConfiguration config,
        MehradSsoHandoffService handoffs,
        MehradAccountLinkService linker,
        CancellationToken cancellationToken)
    {
        ApplyNoStoreHeaders(context.Response);
        if (!config.GetValue<bool>("MehradSso:Enabled")) return Results.NotFound();
        if (!MehradSsoRequestGuard.TryReadConfiguration(config, out var settings))
            return Results.StatusCode(StatusCodes.Status503ServiceUnavailable);
        if (!MehradSsoRequestGuard.IsExpectedHttpsOrigin(context.Request, settings.PublicOrigin) ||
            !MehradSsoRequestGuard.IsExplicitSameOriginConfirmation(context.Request, settings.PublicOrigin))
            return Results.StatusCode(StatusCodes.Status403Forbidden);

        // An authenticated Keycloak bearer token is REQUIRED by RequireAuthorization.
        // Cookie alone never authorizes an action.
        if (!context.Request.Cookies.TryGetValue(HandoffCookieName, out var cookie) ||
            !MehradSsoRequestGuard.TryDecodeTicket(cookie, out var handoffId, out var proof))
            return Results.BadRequest(new { code = "missing_handoff" });

        var verified = await handoffs.ConsumeAsync(
            handoffId, settings.MerchantId, proof, cancellationToken);
        // Clear even after failed proof; a new handoff requires re-entry from Mehrad.
        context.Response.Cookies.Delete(HandoffCookieName, new CookieOptions
        {
            Path = "/",
            Secure = true,
            HttpOnly = true,
            SameSite = SameSiteMode.Strict
        });
        if (verified is null)
            return Results.BadRequest(new { code = "expired_or_consumed_handoff" });

        var outcome = await linker.LinkFromConsumedHandoffAsync(
            context.User, verified, context.TraceIdentifier, cancellationToken);
        return outcome switch
        {
            MehradAccountLinkOutcome.Linked or MehradAccountLinkOutcome.AlreadyLinked =>
                Results.Ok(new { linked = true }),
            MehradAccountLinkOutcome.Conflict =>
                Results.Conflict(new { code = "account_link_conflict" }),
            MehradAccountLinkOutcome.MoonUserInactive =>
                Results.StatusCode(StatusCodes.Status403Forbidden),
            MehradAccountLinkOutcome.MoonUserNotFound =>
                Results.BadRequest(new { code = "moon_account_not_synced" }),
            _ => Results.BadRequest(new { code = "invalid_identity" })
        };
    }

    private static void ApplyNoStoreHeaders(HttpResponse response)
    {
        response.Headers.CacheControl = "no-store, no-cache, max-age=0";
        response.Headers.Pragma = "no-cache";
        response.Headers["Referrer-Policy"] = "no-referrer";
        response.Headers["X-Content-Type-Options"] = "nosniff";
    }
}

public sealed record MehradSsoRuntimeSettings(
    Guid MerchantId, string ClientSecret, Uri PublicOrigin);

/// <summary>Pure HTTP/config boundary policy; unit-testable without real merchant secrets.</summary>
public static class MehradSsoRequestGuard
{
    public static bool TryReadConfiguration(IConfiguration config, out MehradSsoRuntimeSettings settings)
    {
        settings = default!;
        var idText = config["MehradSso:MerchantId"];
        var secret = config["MehradSso:ClientSecret"];
        var origin = config["MehradSso:PublicOrigin"];
        if (!Guid.TryParse(idText, out var id) || id == Guid.Empty ||
            string.IsNullOrWhiteSpace(secret) ||
            !Uri.TryCreate(origin, UriKind.Absolute, out var uri) ||
            uri.Scheme != Uri.UriSchemeHttps ||
            uri.AbsolutePath != "/" ||
            uri.Query.Length != 0 ||
            uri.Fragment.Length != 0 ||
            uri.UserInfo.Length != 0)
            return false;
        settings = new MehradSsoRuntimeSettings(id, secret, uri);
        return true;
    }

    public static bool IsExpectedHttpsOrigin(HttpRequest request, Uri publicOrigin)
    {
        if (!request.IsHttps) return false;
        if (!Uri.TryCreate($"{request.Scheme}://{request.Host.Value}/", UriKind.Absolute, out var actual))
            return false;
        return string.Equals(
            actual.GetLeftPart(UriPartial.Authority),
            publicOrigin.GetLeftPart(UriPartial.Authority),
            StringComparison.OrdinalIgnoreCase);
    }

    public static bool IsExplicitSameOriginConfirmation(HttpRequest request, Uri publicOrigin)
    {
        var origin = request.Headers.Origin.ToString();
        if (!Uri.TryCreate(origin, UriKind.Absolute, out var submitted) ||
            submitted.AbsolutePath != "/" || submitted.Query.Length != 0 ||
            submitted.Fragment.Length != 0 || submitted.UserInfo.Length != 0 ||
            !string.Equals(submitted.GetLeftPart(UriPartial.Authority),
                publicOrigin.GetLeftPart(UriPartial.Authority), StringComparison.OrdinalIgnoreCase))
            return false;

        var confirm = request.Headers[MehradSsoEndpoints.ConfirmationHeaderName];
        return confirm.Count == 1 && confirm[0] == "link-account";
    }

    public static bool TryReadAuthorizationCode(HttpRequest request, out string code)
    {
        code = "";
        var values = request.Query["code"];
        if (values.Count != 1 || string.IsNullOrWhiteSpace(values[0]) ||
            values[0]!.Length > 512)
            return false;
        code = values[0]!;
        return true;
    }

    public static string EncodeTicket(MehradHandoffTicket ticket) =>
        ticket.Id.ToString("N") + "." + ticket.Proof;

    public static bool TryDecodeTicket(string? cookie, out Guid id, out string proof)
    {
        id = Guid.Empty;
        proof = "";
        if (cookie is null || cookie.Length != 97 || cookie[32] != '.' ||
            !Guid.TryParseExact(cookie[..32], "N", out id))
            return false;

        var candidate = cookie[33..];
        if (candidate.Length != 64 || !candidate.All(c =>
            c is >= '0' and <= '9' or >= 'a' and <= 'f'))
        {
            id = Guid.Empty;
            return false;
        }

        proof = candidate;
        return true;
    }
}
