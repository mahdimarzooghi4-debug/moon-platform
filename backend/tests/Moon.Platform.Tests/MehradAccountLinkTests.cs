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

    [Fact]
    public async Task Bridge_candidate_requires_consumed_one_time_handoff_and_exact_link()
    {
        await using var db = CreateDb();
        const string keycloakSubject = "existing-keycloak-user-sub";
        var moonUser = new AppUser { ExternalSubject = keycloakSubject };
        db.Users.Add(moonUser);
        await db.SaveChangesAsync();

        var linker = new MehradAccountLinkService(db, new AuditWriter(db));
        Assert.Equal(MehradAccountLinkOutcome.Linked,
            await linker.LinkExistingMoonUserAsync(
                Principal(keycloakSubject), Verified(_mehradId), _merchantId, "candidate-link"));

        var handoffs = new MehradSsoHandoffService(db);
        var ticket = await handoffs.IssueAsync(Verified(_mehradId), _merchantId);
        var resolver = new MehradKeycloakCandidateResolver(db, handoffs);

        var initialLinks = await db.MehradIdentityLinks.CountAsync();
        var initialAudits = await db.AuditEvents.CountAsync();
        var candidate = await resolver.ResolveFromOneTimeProofAsync(
            ticket.Id, _merchantId, ticket.Proof);

        Assert.NotNull(candidate);
        Assert.Equal(moonUser.Id, candidate!.MoonUserId);
        Assert.Equal(keycloakSubject, candidate.KeycloakSubject);
        Assert.Null(await resolver.ResolveFromOneTimeProofAsync(
            ticket.Id, _merchantId, ticket.Proof));
        Assert.Equal(initialLinks, await db.MehradIdentityLinks.CountAsync());
        Assert.Equal(initialAudits, await db.AuditEvents.CountAsync());
        Assert.Empty(await db.Memberships.ToListAsync());
        Assert.Single(await db.Users.ToListAsync());
    }

    [Fact]
    public async Task Bridge_candidate_rejects_wrong_merchant_and_proof_before_valid_redemption()
    {
        await using var db = CreateDb();
        var moonUser = new AppUser { ExternalSubject = "keycloak-exact-sub" };
        db.Users.Add(moonUser);
        await db.SaveChangesAsync();

        var linker = new MehradAccountLinkService(db, new AuditWriter(db));
        Assert.Equal(MehradAccountLinkOutcome.Linked,
            await linker.LinkExistingMoonUserAsync(
                Principal(moonUser.ExternalSubject), Verified(_mehradId), _merchantId, "link"));

        var handoffs = new MehradSsoHandoffService(db);
        var ticket = await handoffs.IssueAsync(Verified(_mehradId), _merchantId);
        var resolver = new MehradKeycloakCandidateResolver(db, handoffs);

        Assert.Null(await resolver.ResolveFromOneTimeProofAsync(
            ticket.Id, Guid.NewGuid(), ticket.Proof));
        Assert.Null(await resolver.ResolveFromOneTimeProofAsync(
            ticket.Id, _merchantId, new string('a', 64)));
        Assert.Null(await resolver.ResolveFromOneTimeProofAsync(
            Guid.NewGuid(), _merchantId, ticket.Proof));

        // Invalid attempts never use the legitimate proof.
        Assert.Equal(moonUser.ExternalSubject,
            (await resolver.ResolveFromOneTimeProofAsync(
                ticket.Id, _merchantId, ticket.Proof))?.KeycloakSubject);
        Assert.Null(await resolver.ResolveFromOneTimeProofAsync(
            ticket.Id, _merchantId, ticket.Proof));
    }

    [Fact]
    public async Task Bridge_candidate_rejects_deactivated_user_without_reactivation()
    {
        await using var db = CreateDb();
        var moonUser = new AppUser { ExternalSubject = "disabled-keycloak-sub" };
        db.Users.Add(moonUser);
        await db.SaveChangesAsync();

        var linker = new MehradAccountLinkService(db, new AuditWriter(db));
        Assert.Equal(MehradAccountLinkOutcome.Linked,
            await linker.LinkExistingMoonUserAsync(
                Principal(moonUser.ExternalSubject), Verified(_mehradId), _merchantId, "link"));

        moonUser.IsActive = false;
        await db.SaveChangesAsync();
        var handoffs = new MehradSsoHandoffService(db);
        var ticket = await handoffs.IssueAsync(Verified(_mehradId), _merchantId);
        var resolver = new MehradKeycloakCandidateResolver(db, handoffs);

        Assert.Null(await resolver.ResolveFromOneTimeProofAsync(
            ticket.Id, _merchantId, ticket.Proof));
        Assert.Null(await resolver.ResolveFromOneTimeProofAsync(
            ticket.Id, _merchantId, ticket.Proof));
        Assert.False((await db.Users.SingleAsync()).IsActive);
        Assert.Single(await db.MehradIdentityLinks.ToListAsync());
    }

    [Fact]
    public async Task Bridge_candidate_never_provisions_unknown_user_or_guesses_from_provider()
    {
        await using var db = CreateDb();
        var handoffs = new MehradSsoHandoffService(db);
        var ticket = await handoffs.IssueAsync(Verified(_mehradId), _merchantId);
        var resolver = new MehradKeycloakCandidateResolver(db, handoffs);

        Assert.Null(await resolver.ResolveFromOneTimeProofAsync(
            Guid.Empty, _merchantId, ticket.Proof));
        Assert.Null(await resolver.ResolveFromOneTimeProofAsync(
            ticket.Id, Guid.Empty, ticket.Proof));
        Assert.Null(await resolver.ResolveFromOneTimeProofAsync(
            ticket.Id, _merchantId, null));

        // A valid, verified provider identity without an existing link gets NO account.
        Assert.Null(await resolver.ResolveFromOneTimeProofAsync(
            ticket.Id, _merchantId, ticket.Proof));
        Assert.Null(await resolver.ResolveFromOneTimeProofAsync(
            ticket.Id, _merchantId, ticket.Proof));

        Assert.Empty(await db.Users.ToListAsync());
        Assert.Empty(await db.MehradIdentityLinks.ToListAsync());
        Assert.Empty(await db.Memberships.ToListAsync());
        Assert.Empty(await db.AuditEvents.ToListAsync());
    }

    private static ClaimsPrincipal Principal(string subject) =>
        new(new ClaimsIdentity(new[] { new Claim("sub", subject) }, "unit-test-oidc"));

    private static MehradVerifiedIdentity Verified(Guid id) =>
        new(id.ToString("D"), null, DateTimeOffset.UtcNow.AddMinutes(5));

    private MoonDbContext CreateDb() =>
        new(new DbContextOptionsBuilder<MoonDbContext>().UseNpgsql(_connectionString).Options);
}
