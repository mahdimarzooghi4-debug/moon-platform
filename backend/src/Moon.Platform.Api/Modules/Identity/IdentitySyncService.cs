using System.Security.Claims;
using System.Text.Json;
using Microsoft.EntityFrameworkCore;
using Moon.Platform.Api.Common.Auditing;
using Moon.Platform.Api.Infrastructure.Persistence;

namespace Moon.Platform.Api.Modules.Identity;

public sealed record CurrentMembership(
    Guid MembershipId,
    Guid OrganizationId,
    string OrganizationName,
    string OrganizationType,
    string RoleCode,
    string RoleName);

public sealed record CurrentIdentity(
    Guid UserId,
    string ExternalSubject,
    string? DisplayName,
    bool IsActive,
    IReadOnlyList<string> IdentityRoles,
    IReadOnlyList<CurrentMembership> Memberships);

public interface IIdentitySyncService
{
    Task<CurrentIdentity> SyncAsync(
        ClaimsPrincipal principal,
        string correlationId,
        string? ipAddress,
        CancellationToken cancellationToken = default);

    Task<CurrentIdentity?> GetCurrentAsync(
        ClaimsPrincipal principal,
        CancellationToken cancellationToken = default);
}

public sealed class IdentitySyncService(MoonDbContext dbContext, IAuditWriter auditWriter)
    : IIdentitySyncService
{
    public async Task<CurrentIdentity> SyncAsync(
        ClaimsPrincipal principal,
        string correlationId,
        string? ipAddress,
        CancellationToken cancellationToken = default)
    {
        var subject = RequireSubject(principal);
        ArgumentException.ThrowIfNullOrWhiteSpace(correlationId);

        var displayName = ResolveDisplayName(principal);
        var identityRoles = ResolveIdentityRoles(principal);

        await using var transaction = await dbContext.Database.BeginTransactionAsync(cancellationToken);

        var user = await dbContext.Users
            .SingleOrDefaultAsync(x => x.ExternalSubject == subject, cancellationToken);

        var created = user is null;
        if (created)
        {
            user = new AppUser
            {
                ExternalSubject = subject,
                DisplayName = displayName
            };
            dbContext.Users.Add(user);
        }
        else if (!string.Equals(user!.DisplayName, displayName, StringComparison.Ordinal))
        {
            user.DisplayName = displayName;
        }

        await dbContext.SaveChangesAsync(cancellationToken);

        await auditWriter.AppendAsync(new AuditWriteRequest(
            subject,
            created ? "identity.user.created" : "identity.user.synced",
            "user",
            user!.Id.ToString(),
            correlationId,
            AfterJson: JsonSerializer.Serialize(new
            {
                user.Id,
                user.DisplayName,
                user.IsActive,
                identityRoles
            }),
            IpAddress: ipAddress), cancellationToken);

        await transaction.CommitAsync(cancellationToken);

        return await BuildCurrentIdentityAsync(user, principal, cancellationToken);
    }

    public async Task<CurrentIdentity?> GetCurrentAsync(
        ClaimsPrincipal principal,
        CancellationToken cancellationToken = default)
    {
        var subject = RequireSubject(principal);
        var user = await dbContext.Users
            .AsNoTracking()
            .SingleOrDefaultAsync(x => x.ExternalSubject == subject, cancellationToken);

        return user is null
            ? null
            : await BuildCurrentIdentityAsync(user, principal, cancellationToken);
    }

    private async Task<CurrentIdentity> BuildCurrentIdentityAsync(
        AppUser user,
        ClaimsPrincipal principal,
        CancellationToken cancellationToken)
    {
        var memberships = await (
            from membership in dbContext.Memberships.AsNoTracking()
            join organization in dbContext.Organizations.AsNoTracking()
                on membership.OrganizationId equals organization.Id
            join role in dbContext.Roles.AsNoTracking()
                on membership.RoleId equals role.Id
            where membership.UserId == user.Id
                  && membership.IsActive
                  && organization.Status == "active"
            orderby organization.Name, role.Code
            select new CurrentMembership(
                membership.Id,
                organization.Id,
                organization.Name,
                organization.Type,
                role.Code,
                role.Name))
            .ToListAsync(cancellationToken);

        return new CurrentIdentity(
            user.Id,
            user.ExternalSubject,
            user.DisplayName,
            user.IsActive,
            ResolveIdentityRoles(principal),
            memberships);
    }

    private static string RequireSubject(ClaimsPrincipal principal)
    {
        var subject = principal.FindFirstValue("sub");
        if (string.IsNullOrWhiteSpace(subject))
        {
            throw new InvalidOperationException("Authenticated identity is missing the required 'sub' claim.");
        }

        return subject;
    }

    private static string? ResolveDisplayName(ClaimsPrincipal principal)
    {
        return principal.FindFirstValue("name")
            ?? principal.FindFirstValue("preferred_username")
            ?? principal.Identity?.Name;
    }

    private static string[] ResolveIdentityRoles(ClaimsPrincipal principal)
    {
        return principal.FindAll("roles")
            .Select(claim => claim.Value)
            .Where(value => !string.IsNullOrWhiteSpace(value))
            .Distinct(StringComparer.Ordinal)
            .Order(StringComparer.Ordinal)
            .ToArray();
    }
}
