using System.ComponentModel.DataAnnotations;
using System.Security.Claims;
using System.Security.Cryptography;
using Microsoft.EntityFrameworkCore;
using Moon.Platform.Api.Infrastructure.Persistence;
using Moon.Platform.Api.Integrations.Sms;
using Moon.Platform.Api.Modules.Identity;

namespace Moon.Platform.Api.Modules.StartupRegistration;

public sealed class StartupApplication
{
    public Guid Id { get; init; } = Guid.NewGuid();
    [MaxLength(48)] public required string TrackingCode { get; set; }
    [MaxLength(160)] public required string Name { get; init; }
    [MaxLength(120)] public required string ContactName { get; init; }
    [MaxLength(11)] public required string Mobile { get; init; }
    [MaxLength(254)] public required string Email { get; init; }
    [MaxLength(4000)] public required string Description { get; init; }
    [MaxLength(4000)] public string? Team { get; init; }
    [MaxLength(4000)] public string? Product { get; init; }
    [MaxLength(200)] public string? Audience { get; init; }
    public byte[]? PitchDeck { get; init; }
    [MaxLength(10)] public string? NationalId { get; init; }
    public byte[]? Logo { get; init; }
    public byte[]? LegalDocument { get; init; }
    public byte[]? IdentityDocument { get; init; }
    [MaxLength(32)] public string Status { get; set; } = "pending_review";
    [MaxLength(36)] public string? ActivationSubject { get; set; }
    public DateTimeOffset SubmittedAtUtc { get; init; } = DateTimeOffset.UtcNow;
}

public sealed record ApproveStartupApplicationRequest(string? TemporaryPassword);

internal sealed record StartupMobileRequest(string? Mobile, string? Code);
internal sealed record TrackStartupApplicationRequest(string? TrackingCode, string? Mobile, string? MobileVerification);

public static class StartupRegistrationEndpoints
{
    public static void MapStartupRegistrationEndpoints(this IEndpointRouteBuilder endpoints)
    {
        var registration = endpoints.MapGroup("/api/v1/public/startup-applications").AllowAnonymous();

        registration.MapGet("/mobile-verification", (StartupMobileVerification verification) =>
            Results.Ok(new { required = verification.Enabled }));
        registration.MapPost("/mobile-verification/send", async Task<IResult> (
            StartupMobileRequest request, HttpContext context, StartupMobileVerification verification, ISmsProvider sms, CancellationToken ct) =>
            StartupMobileVerification.IsMobile(request.Mobile)
                ? await verification.SendAsync(request.Mobile!, context, sms, ct)
                : Results.BadRequest());
        registration.MapPost("/mobile-verification/confirm", IResult (
            StartupMobileRequest request, StartupMobileVerification verification) =>
        {
            if (!verification.Enabled || !StartupMobileVerification.IsMobile(request.Mobile)
                || request.Code is not { Length: 6 } || !request.Code.All(char.IsAsciiDigit))
                return Results.BadRequest();
            var token = verification.Verify(request.Mobile!, request.Code);
            return token is null ? Results.BadRequest() : Results.Ok(new { token });
        });

        registration.MapPost("/", async Task<IResult> (
            HttpRequest request, MoonDbContext db, StartupMobileVerification verification, CancellationToken ct) =>
        {
            const int maxDocumentSize = 15 * 1024 * 1024;
            if (!request.HasFormContentType || request.ContentLength > 28 * 1024 * 1024 + 64 * 1024)
                return Results.BadRequest(new { code = "invalid_startup_application" });

            var form = await request.ReadFormAsync(ct);
            var name = form["name"].ToString().Trim();
            var contact = form["contactName"].ToString().Trim();
            var mobile = form["mobile"].ToString().Trim();
            var email = form["email"].ToString().Trim();
            var description = form["description"].ToString().Trim();
            var team = form["team"].ToString().Trim();
            var product = form["product"].ToString().Trim();
            var audience = form["audience"].ToString().Trim();
            var pitchDeck = form.Files.GetFile("pitchDeck");
            var nationalId = form["nationalId"].ToString().Trim();
            var logo = form.Files.GetFile("logo");
            var legal = form.Files.GetFile("legalDocument");
            var identity = form.Files.GetFile("identityDocument");
            if (name is not { Length: > 0 and <= 160 }
                || contact is not { Length: > 0 and <= 120 }
                || !StartupMobileVerification.IsMobile(mobile)
                || email is not { Length: > 0 and <= 254 }
                || !System.Net.Mail.MailAddress.TryCreate(email, out var address)
                || address.Address != email
                || description is not { Length: > 0 and <= 4000 }
                || team is not { Length: > 0 and <= 4000 }
                || product is not { Length: > 0 and <= 4000 }
                || audience is not { Length: > 0 and <= 200 }
                || pitchDeck is null || pitchDeck.Length is < 5 or > maxDocumentSize
                || (nationalId.Length != 0 && !System.Text.RegularExpressions.Regex.IsMatch(nationalId, @"\A[0-9]{10}\z"))
                || logo is { Length: < 1 or > 5 * 1024 * 1024 }
                || legal is { Length: < 1 or > 4 * 1024 * 1024 }
                || identity is { Length: < 1 or > 4 * 1024 * 1024 }
                || form.Files.Count != 1 + (logo is null ? 0 : 1) + (legal is null ? 0 : 1) + (identity is null ? 0 : 1))
                return Results.BadRequest(new { code = "invalid_startup_application" });

            var document = await ReadFileAsync(pitchDeck, ct);
            if (document is null || !document.AsSpan().StartsWith("%PDF-"u8))
                return Results.BadRequest(new { code = "invalid_pitch_deck" });

            var logoContent = await ReadFileAsync(logo, ct);
            var legalContent = await ReadFileAsync(legal, ct);
            var identityContent = await ReadFileAsync(identity, ct);
            if ((logoContent is not null && !IsImage(logoContent) && !IsSvg(logoContent))
                || !IsSupportingDocument(legalContent) || !IsSupportingDocument(identityContent))
                return Results.BadRequest(new { code = "invalid_startup_attachment" });

            var application = new StartupApplication
            {
                Name = name,
                ContactName = contact,
                Mobile = mobile,
                Email = email,
                Description = description,
                Team = team,
                Product = product,
                Audience = audience,
                PitchDeck = document,
                NationalId = nationalId.Length == 0 ? null : nationalId,
                Logo = logoContent,
                LegalDocument = legalContent,
                IdentityDocument = identityContent,
                TrackingCode = StartupTrackingCode.Create()
            };
            var submitted = false;
            if (verification.Enabled && !verification.TryReserve(mobile, form["mobileVerification"].ToString()))
                return Results.BadRequest(new { code = "mobile_verification_required" });
            try
            {
                db.StartupApplications.Add(application);
                // The database unique index is the authoritative concurrency guard.
                // Retry only a collision on that exact index, never other failures.
                var indexName = db.Model.FindEntityType(typeof(StartupApplication))!
                    .GetIndexes().Single(index => index.Properties.Count == 1
                        && index.Properties[0].Name == nameof(StartupApplication.TrackingCode))
                    .GetDatabaseName();
                for (var attempt = 0; ; attempt++)
                {
                    try
                    {
                        await db.SaveChangesAsync(ct);
                        break;
                    }
                    catch (DbUpdateException error) when (error.InnerException is Npgsql.PostgresException pg
                        && pg.SqlState == Npgsql.PostgresErrorCodes.UniqueViolation
                        && indexName is not null && pg.ConstraintName == indexName)
                    {
                        if (attempt >= 4)
                            return Results.StatusCode(StatusCodes.Status503ServiceUnavailable);
                        application.TrackingCode = StartupTrackingCode.Create();
                    }
                }
                submitted = true;
            }
            finally
            {
                if (verification.Enabled) verification.Complete(mobile, submitted);
            }
            return Results.Created(
                $"/api/v1/public/startup-applications/{application.TrackingCode}",
                new { application.TrackingCode, application.Status });
        });

        registration.MapGet("/{trackingCode}", async Task<IResult> (
            string trackingCode, MoonDbContext db, CancellationToken ct) =>
        {
            var code = StartupTrackingCode.Normalize(trackingCode);
            if (!StartupTrackingCode.IsLegacyBearerCode(code)) return Results.NotFound();
            var result = await db.StartupApplications.AsNoTracking()
                .Where(application => application.TrackingCode == code)
                .Select(application => new { application.Status, application.SubmittedAtUtc })
                .SingleOrDefaultAsync(ct);
            return result is null ? Results.NotFound() : Results.Ok(result);
        });

        // A ten-digit reference alone is never an authorization credential.
        // The existing SMS challenge must be verified for the submitted mobile.
        // Consume the proof even on a miss so it cannot enumerate references.
        registration.MapPost("/track", async Task<IResult> (
            TrackStartupApplicationRequest request, MoonDbContext db,
            StartupMobileVerification verification, CancellationToken ct) =>
        {
            var code = StartupTrackingCode.Normalize(request.TrackingCode);
            if (code is null || !StartupMobileVerification.IsMobile(request.Mobile))
                return Results.NotFound();
            if (!verification.Enabled) return Results.StatusCode(StatusCodes.Status503ServiceUnavailable);
            var mobile = request.Mobile!;
            if (!verification.TryReserve(mobile, request.MobileVerification ?? ""))
                return Results.BadRequest(new { code = "mobile_verification_required" });
            try
            {
                var result = await db.StartupApplications.AsNoTracking()
                    .Where(application => application.TrackingCode == code && application.Mobile == mobile)
                    .Select(application => new { application.Status, application.SubmittedAtUtc })
                    .SingleOrDefaultAsync(ct);
                return result is null ? Results.NotFound() : Results.Ok(result);
            }
            finally
            {
                verification.Complete(mobile, submitted: true);
            }
        });

        endpoints.MapGet("/api/v1/creative-house/startup-applications", async Task<IResult> (
            ClaimsPrincipal principal, IIdentitySyncService identity, MoonDbContext db,
            int? page, CancellationToken ct) =>
        {
            var current = await identity.GetCurrentAsync(principal, ct);
            if (current is not { IsActive: true }
                || !current.Memberships.Any(membership =>
                    membership.OrganizationType == "creative_house"
                    && membership.RoleCode is SystemRoles.ProductOwner or SystemRoles.Evaluator))
                return Results.Forbid();

            const int pageSize = 50;
            var pageIndex = Math.Clamp(page ?? 1, 1, int.MaxValue / pageSize) - 1;
            var applications = await db.StartupApplications.AsNoTracking()
                .OrderByDescending(application => application.SubmittedAtUtc)
                .ThenBy(application => application.Id)
                .Skip(pageIndex * pageSize)
                .Take(pageSize)
                .Select(application => new
                {
                    application.Id,
                    application.Name,
                    application.ContactName,
                    application.Mobile,
                    application.Email,
                    application.Description,
                    application.Team,
                    application.Product,
                    application.Audience,
                    HasPitchDeck = application.PitchDeck != null,
                    application.NationalId,
                    HasLogo = application.Logo != null,
                    HasLegalDocument = application.LegalDocument != null,
                    HasIdentityDocument = application.IdentityDocument != null,
                    application.Status,
                    application.SubmittedAtUtc
                })
                .ToListAsync(ct);
            return Results.Ok(applications);
        }).RequireAuthorization();
        endpoints.MapGet("/api/v1/creative-house/startup-applications/{id:guid}/pitch-deck", async Task<IResult> (
            Guid id, ClaimsPrincipal principal, IIdentitySyncService identity, MoonDbContext db, CancellationToken ct) =>
        {
            var current = await identity.GetCurrentAsync(principal, ct);
            if (current is not { IsActive: true }
                || !current.Memberships.Any(membership =>
                    membership.OrganizationType == "creative_house"
                    && membership.RoleCode is SystemRoles.ProductOwner or SystemRoles.Evaluator))
                return Results.Forbid();

            var content = await db.StartupApplications.AsNoTracking()
                .Where(application => application.Id == id)
                .Select(application => application.PitchDeck)
                .SingleOrDefaultAsync(ct);
            return content is null ? Results.NotFound() : Results.File(content, "application/pdf", "pitch-deck.pdf");
        }).RequireAuthorization();

        endpoints.MapGet("/api/v1/creative-house/startup-applications/{id:guid}/attachments/{kind}", async Task<IResult> (
            Guid id, string kind, ClaimsPrincipal principal, IIdentitySyncService identity, MoonDbContext db, CancellationToken ct) =>
        {
            var current = await identity.GetCurrentAsync(principal, ct);
            if (current is not { IsActive: true }
                || !current.Memberships.Any(membership =>
                    membership.OrganizationType == "creative_house"
                    && membership.RoleCode is SystemRoles.ProductOwner or SystemRoles.Evaluator))
                return Results.Forbid();

            var application = db.StartupApplications.AsNoTracking().Where(item => item.Id == id);
            var query = kind switch
            {
                "logo" => application.Select(item => item.Logo),
                "legalDocument" => application.Select(item => item.LegalDocument),
                "identityDocument" => application.Select(item => item.IdentityDocument),
                _ => null
            };
            var content = query is null ? null : await query.SingleOrDefaultAsync(ct);
            if (content is null) return Results.NotFound();

            var extension = content.AsSpan().StartsWith("%PDF-"u8) ? "pdf"
                : content.AsSpan().StartsWith(new byte[] { 0x89, 0x50, 0x4e, 0x47 }) ? "png"
                : IsImage(content) ? "jpg" : "svg";
            return Results.File(content, "application/octet-stream", $"{kind}.{extension}");
        }).RequireAuthorization();

        endpoints.MapPost("/api/v1/creative-house/startup-applications/{id:guid}/approve", async Task<IResult> (
            Guid id, ApproveStartupApplicationRequest request, ClaimsPrincipal principal,
            IIdentitySyncService identity, MoonDbContext db, KeycloakAccountClient keycloak, CancellationToken ct) =>
        {
            var current = await identity.GetCurrentAsync(principal, ct);
            if (current is not { IsActive: true }
                || !current.Memberships.Any(membership =>
                    membership.OrganizationType == "creative_house" && membership.RoleCode == SystemRoles.ProductOwner))
                return Results.Forbid();

            await using var transaction = await db.Database.BeginTransactionAsync(ct);
            var application = (await db.StartupApplications
                .FromSqlInterpolated($"SELECT * FROM moon.startup_applications WHERE \"Id\" = {id} FOR UPDATE")
                .ToListAsync(ct)).SingleOrDefault();
            if (application is null) return Results.NotFound();
            if (application.Status == "approved") return Results.NoContent();
            if (application.ActivationSubject is { } pendingSubject)
            {
                await keycloak.EnableAsync(pendingSubject, ct);
                application.Status = "approved";
                await db.SaveChangesAsync(ct);
                await transaction.CommitAsync(ct);
                return Results.NoContent();
            }
            if (application.Status != "pending_review") return Results.Conflict();

            if (request.TemporaryPassword is not { Length: >= 12 and <= 128 })
                return Results.BadRequest(new { code = "invalid_temporary_password" });

            var role = await db.Roles.SingleAsync(item => item.Code == SystemRoles.Startup, ct);
            var names = application.ContactName.Split(' ', 2, StringSplitOptions.RemoveEmptyEntries);
            if (names.Length != 2) return Results.BadRequest(new { code = "full_name_required" });
            var subject = await keycloak.CreateDisabledAsync(application.Mobile, names[0], names[1],
                application.Email, request.TemporaryPassword, ct);
            if (subject is null) return Results.Conflict(new { code = "account_exists_or_pending" });

            var organization = new Organization { Name = application.Name, Type = "startup" };
            var user = new AppUser { ExternalSubject = subject, DisplayName = application.ContactName };
            db.Organizations.Add(organization);
            db.Users.Add(user);
            db.Memberships.Add(new Membership
            {
                OrganizationId = organization.Id,
                UserId = user.Id,
                RoleId = role.Id
            });
            application.ActivationSubject = subject;
            application.Status = "pending_activation";
            await db.SaveChangesAsync(ct);
            await transaction.CommitAsync(ct);

            await keycloak.EnableAsync(subject, ct);
            application.Status = "approved";
            await db.SaveChangesAsync(ct);
            return Results.NoContent();
        }).RequireAuthorization();
    }
    private static async Task<byte[]?> ReadFileAsync(IFormFile? file, CancellationToken ct)
    {
        if (file is null) return null;
        using var buffer = new MemoryStream((int)file.Length);
        await file.CopyToAsync(buffer, ct);
        return buffer.ToArray();
    }

    private static bool IsImage(byte[] file) =>
        file.AsSpan().StartsWith(new byte[] { 0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a })
        || file.AsSpan().StartsWith(new byte[] { 0xff, 0xd8, 0xff });

    private static bool IsSvg(byte[] file)
    {
        try
        {
            using var stream = new MemoryStream(file);
            using var reader = System.Xml.XmlReader.Create(stream, new System.Xml.XmlReaderSettings
            {
                DtdProcessing = System.Xml.DtdProcessing.Prohibit,
                XmlResolver = null
            });
            return reader.MoveToContent() == System.Xml.XmlNodeType.Element
                && reader.LocalName == "svg" && reader.NamespaceURI == "http://www.w3.org/2000/svg";
        }
        catch (System.Xml.XmlException)
        {
            return false;
        }
    }

    private static bool IsSupportingDocument(byte[]? file) =>
        file is null || IsImage(file) || file.AsSpan().StartsWith("%PDF-"u8);

}
