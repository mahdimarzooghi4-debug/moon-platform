using System.Security.Claims;
using System.Text.Json;
using Microsoft.EntityFrameworkCore;
using Moon.Platform.Api.Common.Auditing;
using Moon.Platform.Api.Infrastructure.Persistence;
using Moon.Platform.Api.Modules.Identity;
using Moon.Platform.Api.Modules.StartupRegistration;

namespace Moon.Platform.Api.Modules.Support;

public static class SupportEndpoints
{
    public static bool MayManage(CurrentIdentity? actor) =>
        actor is { IsActive: true } && actor.IdentityRoles.Contains(SystemRoles.SystemAdmin, StringComparer.Ordinal);

    public static void MapSupportEndpoints(this IEndpointRouteBuilder endpoints)
    {
        endpoints.MapPost("/api/v1/public/support-requests", async Task<IResult> (SubmitSupportRequest request,
            StartupMobileVerification verification, MoonDbContext db, IAuditWriter audit, HttpContext context, CancellationToken ct) =>
        {
            context.Response.Headers.CacheControl = "no-store";
            if (!verification.Enabled) return Results.StatusCode(503);
            if (!SupportValidation.TryCreate(request, out var ticket)) return Results.BadRequest(new { code = "invalid_support_request" });
            if (!verification.TryReserve(ticket.Mobile, request.MobileVerification ?? "")) return Results.BadRequest(new { code = "mobile_verification_required" });
            var committed = false;
            try
            {
                var existing = await db.Set<SupportTicket>().AsNoTracking().SingleOrDefaultAsync(x => x.Id == ticket.Id, ct);
                if (existing is not null)
                {
                    if (!SupportValidation.SameSubmission(existing, ticket)) return Results.Conflict(new { code = "support_request_conflict" });
                    committed = true;
                    return Results.Ok(new { existing.TrackingCode, status = "received" });
                }
                await using var tx = await db.Database.BeginTransactionAsync(ct);
                db.Set<SupportTicket>().Add(ticket);
                await audit.AppendAsync(new AuditWriteRequest("verified_public_contact", "support.received", "support_ticket",
                    ticket.Id.ToString("D"), context.TraceIdentifier), ct);
                await tx.CommitAsync(ct);
                committed = true;
                return Results.Json(new { ticket.TrackingCode, status = "received" }, statusCode: 201);
            }
            finally { verification.Complete(ticket.Mobile, committed); }
        });
        var admin = endpoints.MapGroup("/api/v1/admin/support-requests").RequireAuthorization(AdminAccessPolicies.SystemAdmin);
        admin.MapGet("", async Task<IResult> (int? page, ClaimsPrincipal principal, IIdentitySyncService identity, MoonDbContext db, IAuditWriter audit, HttpContext context, CancellationToken ct) =>
        {
            var actor = await identity.GetCurrentAsync(principal, ct);
            if (!MayManage(actor)) return Results.Forbid();
            var index = Math.Clamp(page ?? 1, 1, int.MaxValue / 50) - 1;
            var items = await db.Set<SupportTicket>().AsNoTracking().OrderByDescending(x => x.SubmittedAtUtc).ThenBy(x => x.Id)
                .Skip(index * 50).Take(50).Select(x => new { x.Id, x.TrackingCode, x.Title, x.Topic, x.Audience, x.Status, x.SubmittedAtUtc }).ToListAsync(ct);
            await audit.AppendAsync(new AuditWriteRequest(actor!.ExternalSubject, "support.list_read", "support_ticket", "list", context.TraceIdentifier), ct);
            context.Response.Headers.CacheControl = "no-store";
            return Results.Ok(items);
        });
        admin.MapGet("/{id:guid}", async Task<IResult> (Guid id, ClaimsPrincipal principal, IIdentitySyncService identity, MoonDbContext db, IAuditWriter audit, HttpContext context, CancellationToken ct) =>
        {
            var actor = await identity.GetCurrentAsync(principal, ct);
            if (!MayManage(actor)) return Results.Forbid();
            var ticket = await db.Set<SupportTicket>().AsNoTracking().SingleOrDefaultAsync(x => x.Id == id, ct);
            if (ticket is null) return Results.NotFound();
            await audit.AppendAsync(new AuditWriteRequest(actor!.ExternalSubject, "support.detail_read", "support_ticket", id.ToString("D"), context.TraceIdentifier), ct);
            context.Response.Headers.CacheControl = "no-store";
            return Results.Ok(ticket);
        });
        admin.MapPut("/{id:guid}", async Task<IResult> (Guid id, UpdateSupportRequest request, ClaimsPrincipal principal,
            IIdentitySyncService identity, MoonDbContext db, IAuditWriter audit, HttpContext context, CancellationToken ct) =>
        {
            var actor = await identity.GetCurrentAsync(principal, ct);
            if (!MayManage(actor)) return Results.Forbid();
            if (!SupportValidation.ValidUpdate(request)) return Results.BadRequest(new { code = "invalid_support_update" });
            await using var tx = await db.Database.BeginTransactionAsync(ct);
            var ticket = await db.Set<SupportTicket>().SingleOrDefaultAsync(x => x.Id == id, ct);
            if (ticket is null) return Results.NotFound();
            if (ticket.Revision != request.Revision) return Results.Conflict(new { code = "support_revision_conflict" });
            var before = JsonSerializer.Serialize(new { ticket.Status, ticket.Revision, ticket.AssignedToSubject });
            ticket.Status = request.Status!;
            ticket.ResponseNote = string.IsNullOrWhiteSpace(request.ResponseNote) ? null : request.ResponseNote.Trim();
            if (request.AssignToSelf) ticket.AssignedToSubject = actor!.ExternalSubject;
            ticket.Revision++;
            ticket.UpdatedAtUtc = DateTimeOffset.UtcNow;
            try
            {
                await audit.AppendAsync(new AuditWriteRequest(actor!.ExternalSubject, "support.updated", "support_ticket", id.ToString("D"), context.TraceIdentifier,
                    BeforeJson: before, AfterJson: JsonSerializer.Serialize(new { ticket.Status, ticket.Revision, ticket.AssignedToSubject })), ct);
                await tx.CommitAsync(ct);
            }
            catch (DbUpdateConcurrencyException) { return Results.Conflict(new { code = "support_revision_conflict" }); }
            context.Response.Headers.CacheControl = "no-store";
            return Results.Ok(ticket);
        });
    }
}
