using System.Security.Claims;
using Microsoft.EntityFrameworkCore;
using Moon.Platform.Api.Common.Auditing;
using Moon.Platform.Api.Infrastructure.Persistence;
using Moon.Platform.Api.Modules.Identity;
using Moon.Platform.Api.Modules.StartupRegistration;

namespace Moon.Platform.Api.Modules.CompanyRegistration;

// Owner-confirmed authority: system_admin; production review remains opt-in.
public static class CompanyApplicationReviewEndpoints
{
    public static bool MayRead(CurrentIdentity? identity, IConfiguration config) =>
        identity is { IsActive: true }
        && identity.IdentityRoles.Contains(SystemRoles.SystemAdmin, StringComparer.Ordinal)
        && config.GetValue<bool>("CompanyRegistration:ReviewEnabled");

    public static void MapCompanyApplicationReviewEndpoints(this IEndpointRouteBuilder endpoints)
    {
        var group = endpoints.MapGroup("/api/v1/admin/company-applications")
            .RequireAuthorization(AdminAccessPolicies.SystemAdmin);

        group.MapGet("/", async Task<IResult> (int? page, ClaimsPrincipal principal, HttpContext context,
            IIdentitySyncService identity, IConfiguration config, MoonDbContext db, IAuditWriter audit, CancellationToken ct) =>
        {
            var actor = await identity.GetCurrentAsync(principal, ct);
            if (!MayRead(actor, config)) return Results.Forbid();
            const int size = 50;
            var index = Math.Clamp(page ?? 1, 1, int.MaxValue / size) - 1;
            var items = await db.CompanyApplications.AsNoTracking()
                .OrderByDescending(x => x.SubmittedAtUtc).ThenBy(x => x.Id).Skip(index * size).Take(size)
                .Select(x => new { x.Id, x.Name, x.Status, x.TrackingCode, x.SubmittedAtUtc }).ToListAsync(ct);
            await audit.AppendAsync(new AuditWriteRequest(actor!.ExternalSubject, "company_application.list_read",
                "company_application", "list", context.TraceIdentifier), ct);
            context.Response.Headers.CacheControl = "no-store";
            return Results.Ok(items);
        });

        group.MapGet("/{id:guid}", async Task<IResult> (Guid id, ClaimsPrincipal principal, HttpContext context,
            IIdentitySyncService identity, IConfiguration config, MoonDbContext db, IAuditWriter audit, CancellationToken ct) =>
        {
            var actor = await identity.GetCurrentAsync(principal, ct);
            if (!MayRead(actor, config)) return Results.Forbid();
            var item = await db.CompanyApplications.AsNoTracking().Where(x => x.Id == id)
                .Select(x => new {
                    x.Id, x.Name, x.NationalIdentifier, x.RegistrationNumber, x.LegalForm, x.RegistrationDate,
                    x.ActivityField, x.Website, x.Province, x.City, x.Address, x.PostalCode,
                    x.RepresentativeFirstName, x.RepresentativeLastName, x.RepresentativeNationalId,
                    x.RepresentativePosition, x.Mobile, x.Email, x.Telephone, x.EconomicCode,
                    x.TaxIdentifier, x.TaxFileStatus, x.TaxOffice, x.Notes, x.Status, x.TrackingCode, x.SubmittedAtUtc
                }).SingleOrDefaultAsync(ct);
            if (item is null) return Results.NotFound();
            await audit.AppendAsync(new AuditWriteRequest(actor!.ExternalSubject, "company_application.detail_read",
                "company_application", id.ToString("D"), context.TraceIdentifier), ct);
            context.Response.Headers.CacheControl = "no-store";
            return Results.Ok(item);
        });

        group.MapPost("/{id:guid}/approve", ApproveAsync);

        group.MapGet("/{id:guid}/documents/{kind}", async Task<IResult> (Guid id, string kind,
            ClaimsPrincipal principal, HttpContext context, IIdentitySyncService identity,
            IConfiguration config, MoonDbContext db, IAuditWriter audit, CancellationToken ct) =>
        {
            var actor = await identity.GetCurrentAsync(principal, ct);
            if (!MayRead(actor, config)) return Results.Forbid();
            var query = db.CompanyApplications.AsNoTracking().Where(x => x.Id == id);
            IQueryable<byte[]>? document = kind switch
            {
                "representativeLetter" => query.Select(x => x.RepresentativeLetter),
                "establishmentNotice" => query.Select(x => x.EstablishmentNotice),
                "articlesOfAssociation" => query.Select(x => x.ArticlesOfAssociation),
                "latestChangesNotice" => query.Select(x => x.LatestChangesNotice),
                _ => null
            };
            if (document is null) return Results.NotFound();
            var bytes = await document.SingleOrDefaultAsync(ct);
            if (bytes is null || !CompanyRegistrationValidation.IsSupportedDocument(bytes)) return Results.NotFound();
            var extension = bytes.AsSpan().StartsWith("%PDF-"u8) ? "pdf"
                : bytes.AsSpan().StartsWith(new byte[] { 0xff, 0xd8, 0xff }) ? "jpg" : "png";
            await audit.AppendAsync(new AuditWriteRequest(actor!.ExternalSubject, "company_application.document_read",
                "company_application", id.ToString("D"), context.TraceIdentifier,
                AfterJson: System.Text.Json.JsonSerializer.Serialize(new { document = kind })), ct);
            context.Response.Headers.CacheControl = "no-store";
            context.Response.Headers["X-Content-Type-Options"] = "nosniff";
            return Results.File(bytes, "application/octet-stream", fileDownloadName: $"{kind}.{extension}");
        });
    }

    public static async Task<IResult> ApproveAsync(Guid id, CompanyApprovalRequest request,
            ClaimsPrincipal principal, HttpContext context, IIdentitySyncService identity, IConfiguration config,
            MoonDbContext db, IAuditWriter audit, KeycloakAccountClient keycloak, CancellationToken ct)
        {
            var actor = await identity.GetCurrentAsync(principal, ct);
            if (!MayRead(actor, config) || !config.GetValue<bool>("CompanyRegistration:ApprovalEnabled"))
                return Results.Forbid();
            if (!request.ConfirmReview)
                return Results.BadRequest(new { code = "explicit_review_required" });

            await using var transaction = await db.Database.BeginTransactionAsync(ct);
            // Serialize this operation across company applications, including duplicate
            // national identifiers. No automatic merger into existing organizations.
            await db.Database.ExecuteSqlRawAsync("SELECT pg_advisory_xact_lock(27112026, 324)", ct);
            var application = (await db.CompanyApplications
                .FromSqlInterpolated($"SELECT * FROM moon.company_applications WHERE \"Id\" = {id} FOR UPDATE")
                .ToListAsync(ct)).SingleOrDefault();
            if (application is null) return Results.NotFound();
            if (application.Status == "approved") return Results.NoContent();
            if (application.Status is not ("pending_review" or "pending_activation"))
                return Results.Conflict();
            if (await db.CompanyApplications.AnyAsync(x => x.Id != id
                && x.NationalIdentifier == application.NationalIdentifier
                && (x.Status == "approved" || x.Status == "pending_activation"), ct))
                return Results.Conflict(new { code = "company_identity_conflict" });

            if (application.Status == "pending_review")
            {
                if (application.ActivationSubject is not null || application.ActivatedOrganizationId is not null)
                    return Results.Conflict(new { code = "activation_lineage_conflict" });
                if ($"{application.RepresentativeFirstName} {application.RepresentativeLastName}".Length > 200)
                    return Results.Conflict(new { code = "representative_name_too_long" });
                var role = await db.Roles.SingleAsync(x => x.Code == SystemRoles.Company, ct);
                var subject = await keycloak.CreateSmsOnlyDisabledAsync(application.Mobile,
                    application.RepresentativeFirstName, application.RepresentativeLastName, application.Email, ct);
                if (subject is null)
                    return Results.Conflict(new { code = "account_exists_or_pending" });

                var organization = new Organization { Name = application.Name, Type = "company", Status = "pending_activation" };
                var user = new AppUser { ExternalSubject = subject, IsActive = false,
                    DisplayName = $"{application.RepresentativeFirstName} {application.RepresentativeLastName}" };
                db.Organizations.Add(organization);
                db.Users.Add(user);
                db.Memberships.Add(new Membership { UserId = user.Id, OrganizationId = organization.Id, RoleId = role.Id, IsActive = false });
                application.ActivationSubject = subject;
                application.ActivatedOrganizationId = organization.Id;
                application.Status = "pending_activation";
                await audit.AppendAsync(new AuditWriteRequest(actor!.ExternalSubject, "company_application.approval_requested",
                    "company_application", id.ToString("D"), context.TraceIdentifier,
                    OrganizationId: organization.Id.ToString("D")), ct);
                await transaction.CommitAsync(ct);
            }
            else
            {
                // Finish the original activation only, never attach an arbitrary user.
                if (application.ActivationSubject is null || application.ActivatedOrganizationId is null)
                    return Results.Conflict(new { code = "activation_lineage_conflict" });
                await transaction.CommitAsync(ct);
            }

            var activationSubject = application.ActivationSubject!;
            var organizationId = application.ActivatedOrganizationId!.Value;
            await transaction.DisposeAsync();
            db.ChangeTracker.Clear();

            // A retry can resume a committed pending activation. Recheck the
            // organization, membership and exact user before enabling the account.
            await using var finish = await db.Database.BeginTransactionAsync(ct);
            var current = (await db.CompanyApplications
                .FromSqlInterpolated($"SELECT * FROM moon.company_applications WHERE \"Id\" = {id} FOR UPDATE")
                .ToListAsync(ct)).SingleOrDefault();
            if (current is null || current.ActivationSubject != activationSubject
                || current.ActivatedOrganizationId != organizationId) return Results.Conflict();
            if (current.Status == "approved") return Results.NoContent();
            if (current.Status != "pending_activation") return Results.Conflict();
            // Keep Moon access disabled until the same transaction records approval.
            // Keycloak enable can succeed even when the acknowledgement or DB commit fails.
            var pendingUser = (await db.Users.FromSqlInterpolated(
                $"SELECT * FROM moon.users WHERE \"ExternalSubject\" = {activationSubject} FOR UPDATE")
                .ToListAsync(ct)).SingleOrDefault();
            var pendingOrganization = (await db.Organizations.FromSqlInterpolated(
                $"SELECT * FROM moon.organizations WHERE \"Id\" = {organizationId} FOR UPDATE")
                .ToListAsync(ct)).SingleOrDefault();
            if (pendingUser is null || pendingUser.IsActive || pendingOrganization is null || pendingOrganization.Type != "company"
                || pendingOrganization.Status != "pending_activation")
                return Results.Conflict(new { code = "activation_lineage_conflict" });
            var membership = (await db.Memberships.FromSqlInterpolated(
                $"SELECT * FROM moon.memberships WHERE \"UserId\" = {pendingUser.Id} AND \"OrganizationId\" = {organizationId} AND \"RoleId\" = {SystemRoles.CompanyId} FOR UPDATE")
                .ToListAsync(ct)).SingleOrDefault();
            if (membership is null || membership.IsActive)
                return Results.Conflict(new { code = "activation_lineage_conflict" });

            await keycloak.EnableAsync(activationSubject, ct);
            pendingUser.IsActive = true;
            pendingOrganization.Status = "active";
            membership.IsActive = true;
            current.Status = "approved";
            db.OutboxMessages.Add(RegistrationSmsNotice.Create(id, RegistrationSmsNotice.Approved, "company_application"));
            await audit.AppendAsync(new AuditWriteRequest(actor!.ExternalSubject, "company_application.account_activated",
                "company_application", id.ToString("D"), context.TraceIdentifier,
                OrganizationId: organizationId.ToString("D")), ct);
            await finish.CommitAsync(ct);
            return Results.NoContent();
    }
}

public sealed record CompanyApprovalRequest(bool ConfirmReview);
