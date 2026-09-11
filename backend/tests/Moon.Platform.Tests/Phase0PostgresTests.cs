using System.Security.Claims;
using Microsoft.EntityFrameworkCore;
using Moon.Platform.Api.Common.Auditing;
using Moon.Platform.Api.Common.Authorization;
using Moon.Platform.Api.Infrastructure.Persistence;
using Moon.Platform.Api.Modules.Identity;
using Xunit;

namespace Moon.Platform.Tests;

public sealed class Phase0PostgresTests : IAsyncLifetime
{
    private readonly string _connectionString = Environment.GetEnvironmentVariable("TEST_POSTGRES")
        ?? "Host=localhost;Port=5432;Database=moon;Username=moon;Password=moon-local-only";

    public async Task InitializeAsync()
    {
        await using var db = CreateDbContext();
        await db.Database.EnsureDeletedAsync();
        await db.Database.MigrateAsync();
    }

    public async Task DisposeAsync()
    {
        await using var db = CreateDbContext();
        await db.Database.EnsureDeletedAsync();
    }

    [Fact]
    public async Task Migration_roles_organization_access_and_append_only_audit_are_enforced()
    {
        await using var db = CreateDbContext();

        Assert.Empty(await db.Database.GetPendingMigrationsAsync());
        Assert.NotEmpty(await db.Database.GetAppliedMigrationsAsync());
        Assert.Equal(8, await db.Roles.CountAsync());

        var organization = new Organization
        {
            Name = "Moon Test Organization",
            Type = "company"
        };
        var user = new AppUser
        {
            ExternalSubject = "phase0-test-subject",
            DisplayName = "Phase 0 Test User"
        };
        var membership = new Membership
        {
            UserId = user.Id,
            OrganizationId = organization.Id,
            RoleId = SystemRoles.CompanyId
        };

        db.Organizations.Add(organization);
        db.Users.Add(user);
        db.Memberships.Add(membership);
        await db.SaveChangesAsync();

        var access = new OrganizationAccessService(db);
        Assert.True(await access.IsMemberAsync(user.ExternalSubject, organization.Id));
        Assert.False(await access.IsMemberAsync(user.ExternalSubject, Guid.NewGuid()));

        var writer = new AuditWriter(db);
        var auditId = await writer.AppendAsync(new AuditWriteRequest(
            user.ExternalSubject,
            "organization.access.tested",
            "organization",
            organization.Id.ToString(),
            "phase0-integration-test",
            organization.Id.ToString()));

        var auditEvent = await db.AuditEvents.SingleAsync(x => x.Id == auditId);
        auditEvent.Action = "mutated";

        await Assert.ThrowsAsync<InvalidOperationException>(() => db.SaveChangesAsync());
    }

    [Fact]
    public async Task Identity_sync_upserts_user_audits_and_returns_database_memberships()
    {
        await using var db = CreateDbContext();
        var writer = new AuditWriter(db);
        var identitySync = new IdentitySyncService(db, writer);

        var firstPrincipal = Principal(
            "kc-user-123",
            "کاربر آزمایشی",
            SystemRoles.Company,
            SystemRoles.SystemAdmin);

        var first = await identitySync.SyncAsync(
            firstPrincipal,
            "identity-sync-1",
            "127.0.0.1");

        Assert.True(first.IsActive);
        Assert.Empty(first.Memberships);
        Assert.Contains(SystemRoles.Company, first.IdentityRoles);
        Assert.Contains(SystemRoles.SystemAdmin, first.IdentityRoles);
        Assert.Equal(1, await db.Users.CountAsync());
        Assert.Equal(1, await db.AuditEvents.CountAsync());
        Assert.Equal("identity.user.created", (await db.AuditEvents.SingleAsync()).Action);

        var secondPrincipal = Principal(
            "kc-user-123",
            "نام به‌روزشده",
            SystemRoles.Company);

        var second = await identitySync.SyncAsync(
            secondPrincipal,
            "identity-sync-2",
            "127.0.0.1");

        Assert.Equal(first.UserId, second.UserId);
        Assert.Equal("نام به‌روزشده", second.DisplayName);
        Assert.Equal(1, await db.Users.CountAsync());
        Assert.Equal(2, await db.AuditEvents.CountAsync());
        Assert.Contains(await db.AuditEvents.ToListAsync(), x => x.Action == "identity.user.synced");

        var organization = new Organization
        {
            Name = "شرکت آزمایشی",
            Type = "company"
        };
        db.Organizations.Add(organization);
        db.Memberships.Add(new Membership
        {
            UserId = second.UserId,
            OrganizationId = organization.Id,
            RoleId = SystemRoles.CompanyId
        });
        await db.SaveChangesAsync();

        var current = await identitySync.GetCurrentAsync(secondPrincipal);
        Assert.NotNull(current);
        var membership = Assert.Single(current!.Memberships);
        Assert.Equal(organization.Id, membership.OrganizationId);
        Assert.Equal(SystemRoles.Company, membership.RoleCode);

        var storedUser = await db.Users.SingleAsync();
        storedUser.IsActive = false;
        await db.SaveChangesAsync();

        var disabled = await identitySync.SyncAsync(
            secondPrincipal,
            "identity-sync-disabled",
            "127.0.0.1");

        Assert.False(disabled.IsActive);
        Assert.False((await db.Users.SingleAsync()).IsActive);
    }

    private MoonDbContext CreateDbContext()
    {
        var options = new DbContextOptionsBuilder<MoonDbContext>()
            .UseNpgsql(_connectionString)
            .Options;

        return new MoonDbContext(options);
    }

    private static ClaimsPrincipal Principal(string subject, string displayName, params string[] roles)
    {
        var claims = new List<Claim>
        {
            new("sub", subject),
            new("name", displayName),
            new("preferred_username", subject)
        };
        claims.AddRange(roles.Select(role => new Claim("roles", role)));

        return new ClaimsPrincipal(new ClaimsIdentity(claims, "test", "name", "roles"));
    }
}
