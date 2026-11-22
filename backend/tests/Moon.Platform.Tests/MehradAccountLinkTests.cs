using System.Security.Claims;
using Microsoft.EntityFrameworkCore;
using Moon.Platform.Api.Common.Auditing;
using Moon.Platform.Api.Infrastructure.Persistence;
using Moon.Platform.Api.Integrations.Mehrad;
using Moon.Platform.Api.Modules.Identity;
using Xunit;

namespace Moon.Platform.Tests;

public sealed class MehradAccountLinkTests : IAsyncLifetime
{
    private readonly string _connectionString = Environment.GetEnvironmentVariable("TEST_POSTGRES")
        ?? "Host=localhost;Port=5432;Database=moon;Username=moon;Password=moon-local-only";
    private readonly Guid _merchantId = Guid.NewGuid();
    private readonly Guid _mehradId = Guid.NewGuid();

    public async Task InitializeAsync()
    {
        await using var db = CreateDb();
        await db.Database.EnsureDeletedAsync();
        await db.Database.MigrateAsync();
    }

    public async Task DisposeAsync()
    {
        await using var db = CreateDb();
        await db.Database.EnsureDeletedAsync();
    }

    [Fact]
    public async Task Link_is_idempotent_and_audited_without_granting_roles()
    {
        await using var db = CreateDb();
        db.Users.Add(new AppUser { ExternalSubject = "moon-sub", DisplayName = "Existing User" });
        await db.SaveChangesAsync();
        var service = new MehradAccountLinkService(db, new AuditWriter(db));

        var first = await service.LinkExistingMoonUserAsync(
            Principal("moon-sub"), Verified(_mehradId), _merchantId, "test-link-1");
        var second = await service.LinkExistingMoonUserAsync(
            Principal("moon-sub"), Verified(_mehradId), _merchantId, "test-link-2");

        Assert.Equal(MehradAccountLinkOutcome.Linked, first);
        Assert.Equal(MehradAccountLinkOutcome.AlreadyLinked, second);
        Assert.Single(await db.MehradIdentityLinks.ToListAsync());
        Assert.Equal(1, await db.AuditEvents.CountAsync(x => x.Action == "identity.mehrad.linked"));
        Assert.Empty(await db.Memberships.ToListAsync());
        Assert.Equal(
            (await db.Users.SingleAsync()).Id,
            await service.ResolveActiveMoonUserIdAsync(_merchantId, _mehradId));
    }

    [Fact]
    public async Task Provider_identity_cannot_be_moved_to_another_user()
    {
        await using var db = CreateDb();
        db.Users.AddRange(
            new AppUser { ExternalSubject = "a" },
            new AppUser { ExternalSubject = "b" });
        await db.SaveChangesAsync();
        var service = new MehradAccountLinkService(db, new AuditWriter(db));
        Assert.Equal(MehradAccountLinkOutcome.Linked,
            await service.LinkExistingMoonUserAsync(Principal("a"), Verified(_mehradId), _merchantId, "one"));
        Assert.Equal(MehradAccountLinkOutcome.Conflict,
            await service.LinkExistingMoonUserAsync(Principal("b"), Verified(_mehradId), _merchantId, "two"));
        Assert.Single(await db.MehradIdentityLinks.ToListAsync());
    }

    [Fact]
    public async Task Existing_user_cannot_link_a_second_mehrad_identity_for_same_merchant()
    {
        await using var db = CreateDb();
        db.Users.Add(new AppUser { ExternalSubject = "a" });
        await db.SaveChangesAsync();
        var service = new MehradAccountLinkService(db, new AuditWriter(db));
        Assert.Equal(MehradAccountLinkOutcome.Linked,
            await service.LinkExistingMoonUserAsync(Principal("a"), Verified(_mehradId), _merchantId, "one"));
        Assert.Equal(MehradAccountLinkOutcome.Conflict,
            await service.LinkExistingMoonUserAsync(Principal("a"), Verified(Guid.NewGuid()), _merchantId, "two"));
    }

    [Fact]
    public async Task Inactive_or_unknown_user_is_never_auto_provisioned_or_reactivated()
    {
        await using var db = CreateDb();
        db.Users.Add(new AppUser { ExternalSubject = "disabled", IsActive = false });
        await db.SaveChangesAsync();
        var service = new MehradAccountLinkService(db, new AuditWriter(db));
        Assert.Equal(MehradAccountLinkOutcome.MoonUserInactive,
            await service.LinkExistingMoonUserAsync(Principal("disabled"), Verified(_mehradId), _merchantId, "disabled"));
        Assert.Equal(MehradAccountLinkOutcome.MoonUserNotFound,
            await service.LinkExistingMoonUserAsync(Principal("unknown"), Verified(_mehradId), _merchantId, "unknown"));
        Assert.Empty(await db.MehradIdentityLinks.ToListAsync());
    }

    [Fact]
    public async Task Expired_or_unauthenticated_identity_is_rejected()
    {
        await using var db = CreateDb();
        db.Users.Add(new AppUser { ExternalSubject = "a" });
        await db.SaveChangesAsync();
        var service = new MehradAccountLinkService(db, new AuditWriter(db));
        Assert.Equal(MehradAccountLinkOutcome.InvalidIdentity,
            await service.LinkExistingMoonUserAsync(
                new ClaimsPrincipal(new ClaimsIdentity(new[] { new Claim("sub", "a") })),
                Verified(_mehradId), _merchantId, "unauthenticated"));
        Assert.Equal(MehradAccountLinkOutcome.InvalidIdentity,
            await service.LinkExistingMoonUserAsync(
                Principal("a"),
                new MehradVerifiedIdentity(_mehradId.ToString("D"), null, DateTimeOffset.UtcNow.AddSeconds(-1)),
                _merchantId, "expired"));
        Assert.Empty(await db.MehradIdentityLinks.ToListAsync());
    }

    [Fact]
    public async Task Mapping_is_append_only_and_inactive_users_cannot_resolve()
    {
        await using var db = CreateDb();
        var user = new AppUser { ExternalSubject = "a" };
        db.Users.Add(user);
        await db.SaveChangesAsync();
        var service = new MehradAccountLinkService(db, new AuditWriter(db));
        Assert.Equal(MehradAccountLinkOutcome.Linked,
            await service.LinkExistingMoonUserAsync(Principal("a"), Verified(_mehradId), _merchantId, "link"));
        var link = await db.MehradIdentityLinks.SingleAsync();
        link.MerchantId = Guid.NewGuid();
        await Assert.ThrowsAsync<InvalidOperationException>(() => db.SaveChangesAsync());
        db.ChangeTracker.Clear();
        var inactive = await db.Users.SingleAsync();
        inactive.IsActive = false;
        await db.SaveChangesAsync();
        Assert.Null(await service.ResolveActiveMoonUserIdAsync(_merchantId, _mehradId));
    }

    private static ClaimsPrincipal Principal(string subject) =>
        new(new ClaimsIdentity(new[] { new Claim("sub", subject) }, "unit-test-oidc"));

    private static MehradVerifiedIdentity Verified(Guid id) =>
        new(id.ToString("D"), null, DateTimeOffset.UtcNow.AddMinutes(5));

    private MoonDbContext CreateDb() =>
        new(new DbContextOptionsBuilder<MoonDbContext>().UseNpgsql(_connectionString).Options);
}
