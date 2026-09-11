using Microsoft.EntityFrameworkCore;
using Moon.Platform.Api.Common.Auditing;
using Moon.Platform.Api.Common.Authorization;
using Moon.Platform.Api.Infrastructure.Persistence;
using Moon.Platform.Api.Modules.Identity;

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

    private MoonDbContext CreateDbContext()
    {
        var options = new DbContextOptionsBuilder<MoonDbContext>()
            .UseNpgsql(_connectionString)
            .Options;

        return new MoonDbContext(options);
    }
}
