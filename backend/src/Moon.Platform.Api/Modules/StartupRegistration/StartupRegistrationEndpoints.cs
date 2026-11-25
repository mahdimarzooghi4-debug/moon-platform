using System.ComponentModel.DataAnnotations;
using System.Security.Claims;
using System.Security.Cryptography;
using Microsoft.EntityFrameworkCore;
using Moon.Platform.Api.Infrastructure.Persistence;
using Moon.Platform.Api.Modules.Identity;

namespace Moon.Platform.Api.Modules.StartupRegistration;

public sealed class StartupApplication
{
    public Guid Id { get; init; } = Guid.NewGuid();
    [MaxLength(48)] public required string TrackingCode { get; init; }
    [MaxLength(160)] public required string Name { get; init; }
    [MaxLength(120)] public required string ContactName { get; init; }
    [MaxLength(11)] public required string Mobile { get; init; }
    [MaxLength(254)] public required string Email { get; init; }
    [MaxLength(4000)] public required string Description { get; init; }
    [MaxLength(4000)] public string? Team { get; init; }
    [MaxLength(4000)] public string? Product { get; init; }
    [MaxLength(200)] public string? Audience { get; init; }
    public byte[]? PitchDeck { get; init; }
    [MaxLength(32)] public string Status { get; set; } = "pending_review";
    [MaxLength(36)] public string? ActivationSubject { get; set; }
    public DateTimeOffset SubmittedAtUtc { get; init; } = DateTimeOffset.UtcNow;
}

public sealed record ApproveStartupApplicationRequest(string? TemporaryPassword);

public static class StartupRegistrationEndpoints
{
    public static void MapStartupRegistrationEndpoints(this IEndpointRouteBuilder endpoints)
    {
        var registration = endpoints.MapGroup("/api/v1/public/startup-applications").AllowAnonymous();

        registration.MapPost("/", async Task<IResult> (
            HttpRequest request, MoonDbContext db, CancellationToken ct) =>
        {
            const int maxDocumentSize = 15 * 1024 * 1024;
            if (!request.HasFormContentType || request.ContentLength > maxDocumentSize + 64 * 1024)
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
            if (name is not { Length: > 0 and <= 160 }
                || contact is not { Length: > 0 and <= 120 }
                || !System.Text.RegularExpressions.Regex.IsMatch(mobile, @"\A09[0-9]{9}\z")
                || email is not { Length: > 0 and <= 254 }
                || !System.Net.Mail.MailAddress.TryCreate(email, out var address)
                || address.Address != email
                || description is not { Length: > 0 and <= 4000 }
                || team is not { Length: > 0 and <= 4000 }
                || product is not { Length: > 0 and <= 4000 }
                || audience is not { Length: > 0 and <= 200 }
                || pitchDeck is null || pitchDeck.Length is < 5 or > maxDocumentSize
                || form.Files.Count != 1)
                return Results.BadRequest(new { code = "invalid_startup_application" });

            using var upload = pitchDeck.OpenReadStream();
            using var buffer = new MemoryStream((int)pitchDeck.Length);
            await upload.CopyToAsync(buffer, ct);
            var document = buffer.ToArray();
            if (!document.AsSpan().StartsWith("%PDF-"u8))
                return Results.BadRequest(new { code = "invalid_pitch_deck" });

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
                TrackingCode = Convert.ToHexString(RandomNumberGenerator.GetBytes(24))
            };
            db.StartupApplications.Add(application);
            await db.SaveChangesAsync(ct);
            return Results.Created(
                $"/api/v1/public/startup-applications/{application.TrackingCode}",
                new { application.TrackingCode, application.Status });
        });

        registration.MapGet("/{trackingCode}", async Task<IResult> (
            string trackingCode, MoonDbContext db, CancellationToken ct) =>
        {
            if (trackingCode.Length != 48 || !trackingCode.All(Uri.IsHexDigit))
                return Results.NotFound();

            var code = trackingCode.ToUpperInvariant();
            var result = await db.StartupApplications.AsNoTracking()
                .Where(application => application.TrackingCode == code)
                .Select(application => new { application.Status, application.SubmittedAtUtc })
                .SingleOrDefaultAsync(ct);
            return result is null ? Results.NotFound() : Results.Ok(result);
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
}
