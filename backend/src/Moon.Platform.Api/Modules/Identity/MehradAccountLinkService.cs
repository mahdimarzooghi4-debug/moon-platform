using System.Security.Claims;
using System.Text.Json;
using Microsoft.EntityFrameworkCore;
using Npgsql;
using Moon.Platform.Api.Common.Auditing;
using Moon.Platform.Api.Infrastructure.Persistence;
using Moon.Platform.Api.Integrations.Mehrad;

namespace Moon.Platform.Api.Modules.Identity;

public enum MehradAccountLinkOutcome
{
    Linked,
    AlreadyLinked,
    Conflict,
    MoonUserNotFound,
    MoonUserInactive,
    InvalidIdentity
}

/// <summary>
/// Domain operation only. A future route must first authenticate the Moon caller
/// through Keycloak and verify Mehrad's ID token; this service never issues sessions.
/// </summary>
public sealed class MehradAccountLinkService(MoonDbContext db, IAuditWriter audit)
{
    public async Task<MehradAccountLinkOutcome> LinkExistingMoonUserAsync(
        ClaimsPrincipal authenticatedMoonPrincipal,
        MehradVerifiedIdentity verifiedMehradIdentity,
        Guid merchantId,
        string correlationId,
        CancellationToken cancellationToken = default)
    {
        ArgumentNullException.ThrowIfNull(authenticatedMoonPrincipal);
        ArgumentNullException.ThrowIfNull(verifiedMehradIdentity);
        ArgumentException.ThrowIfNullOrWhiteSpace(correlationId);

        // The caller must already have completed the existing Moon/Keycloak login.
        var keycloakSubject = authenticatedMoonPrincipal.FindFirst("sub")?.Value;
        if (authenticatedMoonPrincipal.Identity?.IsAuthenticated != true ||
            string.IsNullOrWhiteSpace(keycloakSubject) ||
            merchantId == Guid.Empty ||
            verifiedMehradIdentity.TokenExpiresAtUtc <= DateTimeOffset.UtcNow ||
            !Guid.TryParse(verifiedMehradIdentity.MehradSubject, out var mehradSubject) ||
            mehradSubject == Guid.Empty)
            return MehradAccountLinkOutcome.InvalidIdentity;

        var user = await db.Users.SingleOrDefaultAsync(
            x => x.ExternalSubject == keycloakSubject, cancellationToken);
        if (user is null) return MehradAccountLinkOutcome.MoonUserNotFound;
        if (!user.IsActive) return MehradAccountLinkOutcome.MoonUserInactive;

        var linkedSubject = await db.MehradIdentityLinks.AsNoTracking()
            .SingleOrDefaultAsync(x => x.MerchantId == merchantId &&
                x.MehradSubject == mehradSubject, cancellationToken);
        if (linkedSubject is not null)
            return linkedSubject.UserId == user.Id
                ? MehradAccountLinkOutcome.AlreadyLinked
                : MehradAccountLinkOutcome.Conflict;

        var linkedUser = await db.MehradIdentityLinks.AsNoTracking()
            .AnyAsync(x => x.MerchantId == merchantId && x.UserId == user.Id, cancellationToken);
        if (linkedUser) return MehradAccountLinkOutcome.Conflict;

        var link = new MehradIdentityLink
        {
            MerchantId = merchantId,
            MehradSubject = mehradSubject,
            UserId = user.Id
        };
        await using var transaction = await db.Database.BeginTransactionAsync(cancellationToken);
        try
        {
            db.MehradIdentityLinks.Add(link);
            await db.SaveChangesAsync(cancellationToken);
            await audit.AppendAsync(new AuditWriteRequest(
                keycloakSubject,
                "identity.mehrad.linked",
                "mehrad_identity_link",
                link.Id.ToString("D"),
                correlationId,
                AfterJson: JsonSerializer.Serialize(new { link.Id, link.MerchantId, link.UserId })),
                cancellationToken);
            await transaction.CommitAsync(cancellationToken);
            return MehradAccountLinkOutcome.Linked;
        }
        catch (DbUpdateException ex) when
            (ex.InnerException is PostgresException pg && pg.SqlState == PostgresErrorCodes.UniqueViolation)
        {
            // DB unique constraints win races; never move an existing link.
            await transaction.RollbackAsync(cancellationToken);
            db.ChangeTracker.Clear();
            return MehradAccountLinkOutcome.Conflict;
        }
    }

    public async Task<Guid?> ResolveActiveMoonUserIdAsync(
        Guid merchantId, Guid mehradSubject, CancellationToken cancellationToken = default)
    {
        if (merchantId == Guid.Empty || mehradSubject == Guid.Empty) return null;

        // Resolution is not authorization or a Moon session.
        return await (
            from link in db.MehradIdentityLinks.AsNoTracking()
            join user in db.Users.AsNoTracking() on link.UserId equals user.Id
            where link.MerchantId == merchantId &&
                  link.MehradSubject == mehradSubject && user.IsActive
            select (Guid?)user.Id).SingleOrDefaultAsync(cancellationToken);
    }
}
