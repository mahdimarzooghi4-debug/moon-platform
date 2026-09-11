using Microsoft.EntityFrameworkCore;
using Moon.Platform.Api.Common.Auditing;
using Moon.Platform.Api.Infrastructure.Persistence;
using Moon.Platform.Api.Modules.Funding;
using Moon.Platform.Api.Modules.Identity;
using Moon.Platform.Api.Modules.Projects;
using Xunit;

namespace Moon.Platform.Tests;

public sealed class Phase2CommitmentTests : IAsyncLifetime
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
    public async Task Commitment_is_idempotent_auditable_and_terms_are_immutable()
    {
        await using var db = CreateDbContext();
        var service = new FundingService(db, new AuditWriter(db));

        var organization = new Organization { Name = "Published Project Org", Type = "startup" };
        var funder = new AppUser { ExternalSubject = "funding-user", DisplayName = "Funding User" };
        var published = new Project
        {
            OrganizationId = organization.Id,
            Status = ProjectStatuses.Published,
            CreatedBySubject = "project-owner",
            SubmittedAtUtc = DateTimeOffset.UtcNow.AddHours(-3),
            ApprovedAtUtc = DateTimeOffset.UtcNow.AddHours(-2),
            PublishedAtUtc = DateTimeOffset.UtcNow.AddHours(-1),
            PublishedBySubject = "product-owner"
        };
        db.AddRange(organization, funder, published);
        await db.SaveChangesAsync();

        var first = await service.CreateCommitmentAsync(
            published.Id,
            2_500_000,
            "irr",
            "commitment-key-001",
            funder.ExternalSubject,
            "commitment-create",
            "127.0.0.1");

        Assert.True(first.Succeeded);
        Assert.False(first.Replayed);
        Assert.Equal("IRR", first.Commitment!.Currency);
        Assert.Equal(CommitmentStatuses.AwaitingPayment, first.Commitment.Status);

        var retry = await service.CreateCommitmentAsync(
            published.Id,
            2_500_000,
            "IRR",
            "commitment-key-001",
            funder.ExternalSubject,
            "commitment-retry",
            "127.0.0.1");

        Assert.True(retry.Succeeded);
        Assert.True(retry.Replayed);
        Assert.Equal(first.Commitment.CommitmentId, retry.Commitment!.CommitmentId);
        Assert.Equal(1, await db.FundingCommitments.CountAsync());

        var conflictingRetry = await service.CreateCommitmentAsync(
            published.Id,
            3_000_000,
            "IRR",
            "commitment-key-001",
            funder.ExternalSubject,
            "commitment-conflict",
            "127.0.0.1");

        Assert.False(conflictingRetry.Succeeded);
        Assert.Equal("commitment_idempotency_conflict", conflictingRetry.ErrorCode);
        Assert.Equal(1, await db.FundingCommitments.CountAsync());

        var auditCount = await db.AuditEvents.CountAsync(x =>
            x.Action == "funding.committed" && x.SubjectId == first.Commitment.CommitmentId.ToString());
        Assert.Equal(1, auditCount);

        var stored = await db.FundingCommitments.SingleAsync();
        db.Entry(stored).Property(nameof(FundingCommitment.AmountMinor)).CurrentValue = 3_000_000L;
        await Assert.ThrowsAsync<InvalidOperationException>(() => db.SaveChangesAsync());
    }

    [Fact]
    public async Task Commitment_requires_published_project_and_active_synchronized_actor()
    {
        await using var db = CreateDbContext();
        var service = new FundingService(db, new AuditWriter(db));

        var organization = new Organization { Name = "Draft Project Org", Type = "startup" };
        var funder = new AppUser { ExternalSubject = "active-funder", DisplayName = "Active Funder" };
        var draft = new Project
        {
            OrganizationId = organization.Id,
            Status = ProjectStatuses.Draft,
            CreatedBySubject = "project-owner"
        };
        db.AddRange(organization, funder, draft);
        await db.SaveChangesAsync();

        var draftResult = await service.CreateCommitmentAsync(
            draft.Id,
            100_000,
            "IRR",
            "draft-key",
            funder.ExternalSubject,
            "draft-commitment",
            "127.0.0.1");
        Assert.Equal("commitment_project_not_published", draftResult.ErrorCode);

        var missingActorResult = await service.CreateCommitmentAsync(
            draft.Id,
            100_000,
            "IRR",
            "missing-actor-key",
            "unknown-user",
            "missing-actor",
            "127.0.0.1");
        Assert.Equal("commitment_actor_inactive", missingActorResult.ErrorCode);

        Assert.Empty(await db.FundingCommitments.ToListAsync());
    }

    private MoonDbContext CreateDbContext()
    {
        var options = new DbContextOptionsBuilder<MoonDbContext>()
            .UseNpgsql(_connectionString)
            .Options;
        return new MoonDbContext(options);
    }
}
