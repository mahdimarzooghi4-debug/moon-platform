using System.Security.Claims;
using Microsoft.EntityFrameworkCore;
using Moon.Platform.Api.Common.Auditing;
using Moon.Platform.Api.Infrastructure.Persistence;
using Moon.Platform.Api.Modules.Identity;

namespace Moon.Platform.Api.Modules.CompanyRegistration;

// Read-only management. The existing admin policy is necessary but not
// sufficient: an explicit review grant is required before accessing PII.
public static class CompanyApplicationReviewEndpoints
{
    public static bool MayRead(CurrentIdentity? identity, IConfiguration config) =>
        identity is { IsActive: true }
        && config.GetValue<bool>("CompanyRegistration:ReviewEnabled")
        && config.GetSection("CompanyRegistration:ReviewerSubjects").Get<string[]>() is { } allowed
        && allowed.Contains(identity.ExternalSubject, StringComparer.Ordinal);

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
}
