using Microsoft.EntityFrameworkCore;
using Microsoft.IdentityModel.Tokens;
using Moon.Platform.Api.Infrastructure.Persistence;
using Moon.Platform.Api.Integrations.Mehrad;
using Moon.Platform.Api.Modules.Identity;
using Xunit;

namespace Moon.Platform.Tests;

public sealed class MehradSsoHandoffTests : IAsyncLifetime
{
    private readonly string _connectionString = Environment.GetEnvironmentVariable("TEST_POSTGRES")
        ?? "Host=localhost;Port=5432;Database=moon;Username=moon;Password=moon-local-only";
    private readonly Guid _merchantId = Guid.NewGuid();
    private readonly Guid _subject = Guid.NewGuid();

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
    public async Task Proof_is_hashed_at_rest_and_consumed_exactly_once()
    {
        await using var db = CreateDb();
        var service = new MehradSsoHandoffService(db);
        var ticket = await service.IssueAsync(Verified(), _merchantId);

        Assert.Equal(64, ticket.Proof.Length);
        var stored = await db.MehradSsoHandoffs.AsNoTracking().SingleAsync();
        Assert.NotEqual(ticket.Proof, stored.ProofSha256);
        Assert.Equal(64, stored.ProofSha256.Length);
        Assert.True(ticket.ExpiresAtUtc <= DateTimeOffset.UtcNow.AddMinutes(5));

        var first = await service.ConsumeAsync(ticket.Id, _merchantId, ticket.Proof);
        Assert.NotNull(first);
        Assert.Equal(_subject, first!.MehradSubject);
        Assert.Equal(_merchantId, first.MerchantId);
        Assert.Null(await service.ConsumeAsync(ticket.Id, _merchantId, ticket.Proof));
    }

    [Fact]
    public async Task Wrong_proof_or_merchant_does_not_consume_valid_handoff()
    {
        await using var db = CreateDb();
        var service = new MehradSsoHandoffService(db);
        var ticket = await service.IssueAsync(Verified(), _merchantId);
        Assert.Null(await service.ConsumeAsync(ticket.Id, _merchantId, new string('a', 64)));
        Assert.Null(await service.ConsumeAsync(ticket.Id, Guid.NewGuid(), ticket.Proof));
        Assert.Null(await service.ConsumeAsync(ticket.Id, _merchantId, "not-a-proof"));
        Assert.NotNull(await service.ConsumeAsync(ticket.Id, _merchantId, ticket.Proof));
    }

    [Fact]
    public async Task Expired_handoff_is_rejected_without_consumption()
    {
        await using var db = CreateDb();
        var service = new MehradSsoHandoffService(db);
        var ticket = await service.IssueAsync(Verified(), _merchantId);
        await db.MehradSsoHandoffs
            .Where(x => x.Id == ticket.Id)
            .ExecuteUpdateAsync(s => s.SetProperty(
                x => x.ExpiresAtUtc, DateTimeOffset.UtcNow.AddSeconds(-2)));
        Assert.Null(await service.ConsumeAsync(ticket.Id, _merchantId, ticket.Proof));
        var row = await db.MehradSsoHandoffs.AsNoTracking().SingleAsync();
        Assert.Null(row.ConsumedAtUtc);
    }

    [Fact]
    public async Task Parallel_attempts_cannot_both_consume_proof()
    {
        await using var createDb = CreateDb();
        var ticket = await new MehradSsoHandoffService(createDb).IssueAsync(Verified(), _merchantId);
        async Task<MehradHandoffIdentity?> ConsumeAsync()
        {
            await using var db = CreateDb();
            return await new MehradSsoHandoffService(db)
                .ConsumeAsync(ticket.Id, _merchantId, ticket.Proof);
        }
        var attempts = await Task.WhenAll(ConsumeAsync(), ConsumeAsync());
        Assert.Single(attempts, x => x is not null);
    }

    [Fact]
    public async Task Invalid_or_expired_provider_identity_is_rejected_without_row()
    {
        await using var db = CreateDb();
        var service = new MehradSsoHandoffService(db);
        await Assert.ThrowsAsync<SecurityTokenException>(() =>
            service.IssueAsync(Verified() with { TokenExpiresAtUtc = DateTimeOffset.UtcNow.AddMinutes(-1) }, _merchantId));
        await Assert.ThrowsAsync<SecurityTokenException>(() =>
            service.IssueAsync(Verified() with { MehradSubject = "not-a-uuid" }, _merchantId));
        await Assert.ThrowsAsync<SecurityTokenException>(() =>
            service.IssueAsync(Verified(), Guid.Empty));
        Assert.Empty(await db.MehradSsoHandoffs.ToListAsync());
    }

    [Fact]
    public async Task Preview_returns_verified_subject_without_consuming_proof()
    {
        await using var db = CreateDb();
        var service = new MehradSsoHandoffService(db);
        var ticket = await service.IssueAsync(Verified(), _merchantId);

        var first = await service.PreviewAsync(ticket.Id, _merchantId, ticket.Proof);
        var second = await service.PreviewAsync(ticket.Id, _merchantId, ticket.Proof);
        Assert.NotNull(first);
        Assert.Equal(_subject, first!.MehradSubject);
        // PostgreSQL timestamps have microsecond precision; .NET adds 100ns ticks.
        Assert.True((ticket.ExpiresAtUtc - first.ExpiresAtUtc).Duration()
            < TimeSpan.FromMilliseconds(1));
        Assert.Equal(first, second);
        Assert.Null((await db.MehradSsoHandoffs.AsNoTracking().SingleAsync()).ConsumedAtUtc);

        Assert.NotNull(await service.ConsumeAsync(ticket.Id, _merchantId, ticket.Proof));
        Assert.Null(await service.PreviewAsync(ticket.Id, _merchantId, ticket.Proof));
    }

    [Fact]
    public async Task Preview_rejects_wrong_proof_or_merchant_without_consuming_ticket()
    {
        await using var db = CreateDb();
        var service = new MehradSsoHandoffService(db);
        var ticket = await service.IssueAsync(Verified(), _merchantId);
        Assert.Null(await service.PreviewAsync(ticket.Id, Guid.NewGuid(), ticket.Proof));
        Assert.Null(await service.PreviewAsync(ticket.Id, _merchantId, new string('a', 64)));
        Assert.Null(await service.PreviewAsync(ticket.Id, _merchantId, "invalid"));
        Assert.Null(await service.PreviewAsync(Guid.NewGuid(), _merchantId, ticket.Proof));
        Assert.NotNull(await service.PreviewAsync(ticket.Id, _merchantId, ticket.Proof));
        Assert.NotNull(await service.ConsumeAsync(ticket.Id, _merchantId, ticket.Proof));
    }

    [Fact]
    public async Task Expired_handoff_cannot_be_previewed_or_consumed()
    {
        await using var db = CreateDb();
        var service = new MehradSsoHandoffService(db);
        var ticket = await service.IssueAsync(Verified(), _merchantId);
        await db.MehradSsoHandoffs
            .Where(x => x.Id == ticket.Id)
            .ExecuteUpdateAsync(s => s.SetProperty(
                x => x.ExpiresAtUtc, DateTimeOffset.UtcNow.AddSeconds(-1)));

        Assert.Null(await service.PreviewAsync(ticket.Id, _merchantId, ticket.Proof));
        Assert.Null(await service.ConsumeAsync(ticket.Id, _merchantId, ticket.Proof));
        Assert.Null((await db.MehradSsoHandoffs.AsNoTracking().SingleAsync()).ConsumedAtUtc);
    }

    private MehradVerifiedIdentity Verified() =>
        new(_subject.ToString("D"), "Test User", DateTimeOffset.UtcNow.AddMinutes(10));

    private MoonDbContext CreateDb() =>
        new(new DbContextOptionsBuilder<MoonDbContext>().UseNpgsql(_connectionString).Options);
}
