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
    public async Task Identity_sync_upserts_user_returns_memberships_and_does_not_reactivate_disabled_user()
    {
        await using var db = CreateDbContext();
        var writer = new AuditWriter(db);
        var sync = new IdentitySyncService(db, writer);

        var organization = new Organization { Name = "Identity Sync Org", Type = "startup" };
        db.Organizations.Add(organization);
        await db.SaveChangesAsync();

        var principal = TestPrincipal("sync-user-subject", "Sync User", SystemRoles.Startup);
        var first = await sync.SyncAsync(principal, "sync-create", "127.0.0.1");
        Assert.True(first.IsActive);
        Assert.Equal("Sync User", first.DisplayName);
        Assert.Single(await db.Users.Where(x => x.ExternalSubject == "sync-user-subject").ToListAsync());

        db.Memberships.Add(new Membership
        {
            UserId = first.UserId,
            OrganizationId = organization.Id,
            RoleId = SystemRoles.StartupId
        });
        await db.SaveChangesAsync();

        var current = await sync.GetCurrentAsync(principal);
        Assert.NotNull(current);
        Assert.Single(current!.Memberships);
        Assert.Equal(SystemRoles.Startup, current.Memberships[0].RoleCode);

        var stored = await db.Users.SingleAsync(x => x.Id == first.UserId);
        stored.IsActive = false;
        await db.SaveChangesAsync();

        var disabled = await sync.SyncAsync(principal, "sync-disabled", "127.0.0.1");
        Assert.False(disabled.IsActive);
        Assert.False((await db.Users.SingleAsync(x => x.Id == first.UserId)).IsActive);

        Assert.Contains(await db.AuditEvents.ToListAsync(), x => x.Action == "identity.user.created");
        Assert.Contains(await db.AuditEvents.ToListAsync(), x => x.Action == "identity.user.synced");
    }

    [Fact]
    public async Task System_admin_can_manage_organizations_memberships_and_user_status_with_audit()
    {
        await using var db = CreateDbContext();
        var writer = new AuditWriter(db);
        var admin = new AdminAccessService(db, writer);

        var actor = new AppUser
        {
            ExternalSubject = "admin-subject",
            DisplayName = "System Admin"
        };
        var target = new AppUser
        {
            ExternalSubject = "target-subject",
            DisplayName = "Target User"
        };
        db.Users.AddRange(actor, target);
        await db.SaveChangesAsync();

        var organization = await admin.CreateOrganizationAsync(
            "Admin Managed Startup",
            "startup",
            actor.ExternalSubject,
            "admin-create-org",
            "127.0.0.1");

        var membership = await admin.GrantMembershipAsync(
            target.Id,
            organization.OrganizationId,
            SystemRoles.Startup,
            actor.ExternalSubject,
            "admin-grant-membership",
            "127.0.0.1");

        Assert.NotNull(membership);
        Assert.True(membership!.IsActive);
        Assert.Equal(SystemRoles.Startup, membership.RoleCode);

        var users = await admin.ListUsersAsync();
        var listedTarget = Assert.Single(users.Where(x => x.UserId == target.Id));
        Assert.Single(listedTarget.Memberships);

        var roles = await admin.ListRolesAsync();
        Assert.Equal(8, roles.Count);
        Assert.Contains(roles, x => x.Code == SystemRoles.Startup && x.ActiveMemberCount == 1);

        Assert.True(await admin.SetMembershipActiveAsync(
            membership.MembershipId,
            false,
            actor.ExternalSubject,
            "admin-disable-membership",
            "127.0.0.1"));

        Assert.True(await admin.SetUserActiveAsync(
            target.Id,
            false,
            actor.ExternalSubject,
            "admin-disable-user",
            "127.0.0.1"));

        await Assert.ThrowsAsync<InvalidOperationException>(() => admin.SetUserActiveAsync(
            actor.Id,
            false,
            actor.ExternalSubject,
            "admin-self-disable",
            "127.0.0.1"));

        Assert.True(await admin.SetOrganizationStatusAsync(
            organization.OrganizationId,
            "inactive",
            actor.ExternalSubject,
            "admin-disable-org",
            "127.0.0.1"));

        var auditActions = await db.AuditEvents.Select(x => x.Action).ToListAsync();
        Assert.Contains("identity.organization.created", auditActions);
        Assert.Contains("identity.membership.created", auditActions);
        Assert.Contains("identity.membership.deactivated", auditActions);
        Assert.Contains("identity.user.deactivated", auditActions);
        Assert.Contains("identity.organization.deactivated", auditActions);
    }

    private static System.Security.Claims.ClaimsPrincipal TestPrincipal(
        string subject,
        string name,
        params string[] roles)
    {
        var claims = new List<System.Security.Claims.Claim>
        {
            new("sub", subject),
            new("name", name),
            new("preferred_username", name)
        };
        claims.AddRange(roles.Select(role => new System.Security.Claims.Claim("roles", role)));
        var identity = new System.Security.Claims.ClaimsIdentity(claims, "test", "preferred_username", "roles");
        return new System.Security.Claims.ClaimsPrincipal(identity);
    }

    private MoonDbContext CreateDbContext()
    {
        var options = new DbContextOptionsBuilder<MoonDbContext>()
            .UseNpgsql(_connectionString)
            .Options;

        return new MoonDbContext(options);
    }
}
