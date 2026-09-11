using System.Text.Json;
using Microsoft.EntityFrameworkCore;
using Moon.Platform.Api.Common.Auditing;
using Moon.Platform.Api.Infrastructure.Persistence;

namespace Moon.Platform.Api.Modules.Identity;

public sealed record AdminMembership(
    Guid MembershipId,
    Guid OrganizationId,
    string OrganizationName,
    string OrganizationType,
    Guid RoleId,
    string RoleCode,
    string RoleName,
    bool IsActive);

public sealed record AdminUser(
    Guid UserId,
    string ExternalSubject,
    string? DisplayName,
    bool IsActive,
    DateTimeOffset CreatedAtUtc,
    IReadOnlyList<AdminMembership> Memberships);

public sealed record AdminOrganization(
    Guid OrganizationId,
    string Name,
    string Type,
    string Status,
    DateTimeOffset CreatedAtUtc,
    int ActiveMemberCount);

public sealed record AdminRole(
    Guid RoleId,
    string Code,
    string Name,
    int ActiveMemberCount);

public interface IAdminAccessService
{
    Task<IReadOnlyList<AdminUser>> ListUsersAsync(CancellationToken cancellationToken = default);
    Task<AdminUser?> GetUserAsync(Guid userId, CancellationToken cancellationToken = default);
    Task<bool> SetUserActiveAsync(Guid userId, bool isActive, string actorSubject, string correlationId, string? ipAddress, CancellationToken cancellationToken = default);
    Task<IReadOnlyList<AdminOrganization>> ListOrganizationsAsync(CancellationToken cancellationToken = default);
    Task<AdminOrganization> CreateOrganizationAsync(string name, string type, string actorSubject, string correlationId, string? ipAddress, CancellationToken cancellationToken = default);
    Task<bool> SetOrganizationStatusAsync(Guid organizationId, string status, string actorSubject, string correlationId, string? ipAddress, CancellationToken cancellationToken = default);
    Task<IReadOnlyList<AdminRole>> ListRolesAsync(CancellationToken cancellationToken = default);
    Task<AdminMembership?> GrantMembershipAsync(Guid userId, Guid organizationId, string roleCode, string actorSubject, string correlationId, string? ipAddress, CancellationToken cancellationToken = default);
    Task<bool> SetMembershipActiveAsync(Guid membershipId, bool isActive, string actorSubject, string correlationId, string? ipAddress, CancellationToken cancellationToken = default);
}

public sealed class AdminAccessService(MoonDbContext dbContext, IAuditWriter auditWriter) : IAdminAccessService
{
    private static readonly HashSet<string> AllowedOrganizationTypes = new(StringComparer.Ordinal)
    {
        "company",
        "startup",
        "creative_house",
        "fund_manager",
        "supervisor",
        "platform"
    };

    public async Task<IReadOnlyList<AdminUser>> ListUsersAsync(CancellationToken cancellationToken = default)
    {
        var users = await dbContext.Users
            .AsNoTracking()
            .OrderByDescending(x => x.CreatedAtUtc)
            .ToListAsync(cancellationToken);

        if (users.Count == 0)
        {
            return [];
        }

        var userIds = users.Select(x => x.Id).ToArray();
        var memberships = await (
            from membership in dbContext.Memberships.AsNoTracking()
            where userIds.Contains(membership.UserId)
            join organization in dbContext.Organizations.AsNoTracking() on membership.OrganizationId equals organization.Id
            join role in dbContext.Roles.AsNoTracking() on membership.RoleId equals role.Id
            orderby organization.Name, role.Code
            select new MembershipProjection(
                membership.UserId,
                membership.Id,
                organization.Id,
                organization.Name,
                organization.Type,
                role.Id,
                role.Code,
                role.Name,
                membership.IsActive))
            .ToListAsync(cancellationToken);

        var grouped = memberships
            .GroupBy(x => x.UserId)
            .ToDictionary(group => group.Key, group => (IReadOnlyList<AdminMembership>)group.Select(ToAdminMembership).ToList());

        return users
            .Select(user => new AdminUser(
                user.Id,
                user.ExternalSubject,
                user.DisplayName,
                user.IsActive,
                user.CreatedAtUtc,
                grouped.GetValueOrDefault(user.Id) ?? []))
            .ToList();
    }

    public async Task<AdminUser?> GetUserAsync(Guid userId, CancellationToken cancellationToken = default)
    {
        var user = await dbContext.Users.AsNoTracking().SingleOrDefaultAsync(x => x.Id == userId, cancellationToken);
        if (user is null)
        {
            return null;
        }

        var memberships = await (
            from membership in dbContext.Memberships.AsNoTracking()
            where membership.UserId == userId
            join organization in dbContext.Organizations.AsNoTracking() on membership.OrganizationId equals organization.Id
            join role in dbContext.Roles.AsNoTracking() on membership.RoleId equals role.Id
            orderby organization.Name, role.Code
            select new MembershipProjection(
                membership.UserId,
                membership.Id,
                organization.Id,
                organization.Name,
                organization.Type,
                role.Id,
                role.Code,
                role.Name,
                membership.IsActive))
            .ToListAsync(cancellationToken);

        return new AdminUser(
            user.Id,
            user.ExternalSubject,
            user.DisplayName,
            user.IsActive,
            user.CreatedAtUtc,
            memberships.Select(ToAdminMembership).ToList());
    }

    public async Task<bool> SetUserActiveAsync(
        Guid userId,
        bool isActive,
        string actorSubject,
        string correlationId,
        string? ipAddress,
        CancellationToken cancellationToken = default)
    {
        var user = await dbContext.Users.SingleOrDefaultAsync(x => x.Id == userId, cancellationToken);
        if (user is null)
        {
            return false;
        }

        if (!isActive && string.Equals(user.ExternalSubject, actorSubject, StringComparison.Ordinal))
        {
            throw new InvalidOperationException("A system administrator cannot deactivate their own account.");
        }

        if (user.IsActive == isActive)
        {
            return true;
        }

        var before = user.IsActive;
        await using var transaction = await dbContext.Database.BeginTransactionAsync(cancellationToken);
        user.IsActive = isActive;
        await dbContext.SaveChangesAsync(cancellationToken);
        await auditWriter.AppendAsync(new AuditWriteRequest(
            actorSubject,
            isActive ? "identity.user.activated" : "identity.user.deactivated",
            "user",
            user.Id.ToString(),
            correlationId,
            BeforeJson: JsonSerializer.Serialize(new { isActive = before }),
            AfterJson: JsonSerializer.Serialize(new { isActive }),
            IpAddress: ipAddress), cancellationToken);
        await transaction.CommitAsync(cancellationToken);
        return true;
    }

    public async Task<IReadOnlyList<AdminOrganization>> ListOrganizationsAsync(CancellationToken cancellationToken = default)
    {
        return await dbContext.Organizations
            .AsNoTracking()
            .OrderBy(x => x.Name)
            .Select(organization => new AdminOrganization(
                organization.Id,
                organization.Name,
                organization.Type,
                organization.Status,
                organization.CreatedAtUtc,
                dbContext.Memberships.Count(membership => membership.OrganizationId == organization.Id && membership.IsActive)))
            .ToListAsync(cancellationToken);
    }

    public async Task<AdminOrganization> CreateOrganizationAsync(
        string name,
        string type,
        string actorSubject,
        string correlationId,
        string? ipAddress,
        CancellationToken cancellationToken = default)
    {
        name = name.Trim();
        type = type.Trim().ToLowerInvariant();
        ArgumentException.ThrowIfNullOrWhiteSpace(name);

        if (name.Length > 200)
        {
            throw new ArgumentException("Organization name must be 200 characters or fewer.", nameof(name));
        }

        if (!AllowedOrganizationTypes.Contains(type))
        {
            throw new ArgumentException("Unsupported organization type.", nameof(type));
        }

        var organization = new Organization
        {
            Name = name,
            Type = type,
            Status = "active"
        };

        await using var transaction = await dbContext.Database.BeginTransactionAsync(cancellationToken);
        dbContext.Organizations.Add(organization);
        await dbContext.SaveChangesAsync(cancellationToken);
        await auditWriter.AppendAsync(new AuditWriteRequest(
            actorSubject,
            "identity.organization.created",
            "organization",
            organization.Id.ToString(),
            correlationId,
            OrganizationId: organization.Id.ToString(),
            AfterJson: JsonSerializer.Serialize(new { organization.Name, organization.Type, organization.Status }),
            IpAddress: ipAddress), cancellationToken);
        await transaction.CommitAsync(cancellationToken);

        return new AdminOrganization(
            organization.Id,
            organization.Name,
            organization.Type,
            organization.Status,
            organization.CreatedAtUtc,
            0);
    }

    public async Task<bool> SetOrganizationStatusAsync(
        Guid organizationId,
        string status,
        string actorSubject,
        string correlationId,
        string? ipAddress,
        CancellationToken cancellationToken = default)
    {
        status = status.Trim().ToLowerInvariant();
        if (status is not ("active" or "inactive"))
        {
            throw new ArgumentException("Organization status must be 'active' or 'inactive'.", nameof(status));
        }

        var organization = await dbContext.Organizations.SingleOrDefaultAsync(x => x.Id == organizationId, cancellationToken);
        if (organization is null)
        {
            return false;
        }

        if (organization.Status == status)
        {
            return true;
        }

        var before = organization.Status;
        await using var transaction = await dbContext.Database.BeginTransactionAsync(cancellationToken);
        organization.Status = status;
        await dbContext.SaveChangesAsync(cancellationToken);
        await auditWriter.AppendAsync(new AuditWriteRequest(
            actorSubject,
            status == "active" ? "identity.organization.activated" : "identity.organization.deactivated",
            "organization",
            organization.Id.ToString(),
            correlationId,
            OrganizationId: organization.Id.ToString(),
            BeforeJson: JsonSerializer.Serialize(new { status = before }),
            AfterJson: JsonSerializer.Serialize(new { status }),
            IpAddress: ipAddress), cancellationToken);
        await transaction.CommitAsync(cancellationToken);
        return true;
    }

    public async Task<IReadOnlyList<AdminRole>> ListRolesAsync(CancellationToken cancellationToken = default)
    {
        return await dbContext.Roles
            .AsNoTracking()
            .OrderBy(x => x.Code)
            .Select(role => new AdminRole(
                role.Id,
                role.Code,
                role.Name,
                dbContext.Memberships.Count(membership => membership.RoleId == role.Id && membership.IsActive)))
            .ToListAsync(cancellationToken);
    }

    public async Task<AdminMembership?> GrantMembershipAsync(
        Guid userId,
        Guid organizationId,
        string roleCode,
        string actorSubject,
        string correlationId,
        string? ipAddress,
        CancellationToken cancellationToken = default)
    {
        roleCode = roleCode.Trim();
        var userExists = await dbContext.Users.AnyAsync(x => x.Id == userId, cancellationToken);
        var organizationExists = await dbContext.Organizations.AnyAsync(x => x.Id == organizationId && x.Status == "active", cancellationToken);
        var role = await dbContext.Roles.SingleOrDefaultAsync(x => x.Code == roleCode, cancellationToken);

        if (!userExists || !organizationExists || role is null)
        {
            return null;
        }

        var membership = await dbContext.Memberships.SingleOrDefaultAsync(
            x => x.UserId == userId && x.OrganizationId == organizationId && x.RoleId == role.Id,
            cancellationToken);

        var created = membership is null;
        if (created)
        {
            membership = new Membership
            {
                UserId = userId,
                OrganizationId = organizationId,
                RoleId = role.Id,
                IsActive = true
            };
            dbContext.Memberships.Add(membership);
        }
        else
        {
            membership!.IsActive = true;
        }

        await using var transaction = await dbContext.Database.BeginTransactionAsync(cancellationToken);
        await dbContext.SaveChangesAsync(cancellationToken);
        await auditWriter.AppendAsync(new AuditWriteRequest(
            actorSubject,
            created ? "identity.membership.created" : "identity.membership.activated",
            "membership",
            membership!.Id.ToString(),
            correlationId,
            OrganizationId: organizationId.ToString(),
            AfterJson: JsonSerializer.Serialize(new { userId, organizationId, roleCode, isActive = true }),
            IpAddress: ipAddress), cancellationToken);
        await transaction.CommitAsync(cancellationToken);

        var organization = await dbContext.Organizations.AsNoTracking().SingleAsync(x => x.Id == organizationId, cancellationToken);
        return new AdminMembership(
            membership.Id,
            organization.Id,
            organization.Name,
            organization.Type,
            role.Id,
            role.Code,
            role.Name,
            membership.IsActive);
    }

    public async Task<bool> SetMembershipActiveAsync(
        Guid membershipId,
        bool isActive,
        string actorSubject,
        string correlationId,
        string? ipAddress,
        CancellationToken cancellationToken = default)
    {
        var membership = await dbContext.Memberships.SingleOrDefaultAsync(x => x.Id == membershipId, cancellationToken);
        if (membership is null)
        {
            return false;
        }

        if (membership.IsActive == isActive)
        {
            return true;
        }

        var before = membership.IsActive;
        await using var transaction = await dbContext.Database.BeginTransactionAsync(cancellationToken);
        membership.IsActive = isActive;
        await dbContext.SaveChangesAsync(cancellationToken);
        await auditWriter.AppendAsync(new AuditWriteRequest(
            actorSubject,
            isActive ? "identity.membership.activated" : "identity.membership.deactivated",
            "membership",
            membership.Id.ToString(),
            correlationId,
            OrganizationId: membership.OrganizationId.ToString(),
            BeforeJson: JsonSerializer.Serialize(new { isActive = before }),
            AfterJson: JsonSerializer.Serialize(new { isActive }),
            IpAddress: ipAddress), cancellationToken);
        await transaction.CommitAsync(cancellationToken);
        return true;
    }

    private static AdminMembership ToAdminMembership(MembershipProjection projection) => new(
        projection.MembershipId,
        projection.OrganizationId,
        projection.OrganizationName,
        projection.OrganizationType,
        projection.RoleId,
        projection.RoleCode,
        projection.RoleName,
        projection.IsActive);

    private sealed record MembershipProjection(
        Guid UserId,
        Guid MembershipId,
        Guid OrganizationId,
        string OrganizationName,
        string OrganizationType,
        Guid RoleId,
        string RoleCode,
        string RoleName,
        bool IsActive);
}
