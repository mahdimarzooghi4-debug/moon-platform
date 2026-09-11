using System.Text.Json;
using Microsoft.EntityFrameworkCore;
using Moon.Platform.Api.Common.Auditing;
using Moon.Platform.Api.Common.Messaging;
using Moon.Platform.Api.Infrastructure.Persistence;
using Moon.Platform.Api.Modules.Funding;
using Moon.Platform.Api.Modules.Identity;
using Moon.Platform.Api.Modules.Projects;
using Xunit;

namespace Moon.Platform.Tests;

public sealed class Phase2OutboxThresholdTests : IAsyncLifetime
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
    public async Task Funding_threshold_is_emitted_once_only_after_ledger_balance_crosses_locked_project_target()
    {
        await using var db = CreateDbContext();
        var seeded = await SeedThresholdScenarioAsync(db);
        var service = new LedgerService(db, new AuditWriter(db), new OutboxWriter(db));

        var first = await service.PostReconciledPaymentAsync(
            seeded.FirstPayment.Id,
            "threshold-ledger-1",
            seeded.Finance.ExternalSubject,
            "threshold-first",
            "127.0.0.1");
        Assert.True(first.Succeeded);
        Assert.Empty(await db.OutboxMessages
            .Where(x => x.EventType == IntegrationEventTypes.FundingThresholdReached)
            .ToListAsync());

        var second = await service.PostReconciledPaymentAsync(
            seeded.SecondPayment.Id,
            "threshold-ledger-2",
            seeded.Finance.ExternalSubject,
            "threshold-second",
            "127.0.0.1");
        Assert.True(second.Succeeded);

        var message = await db.OutboxMessages.SingleAsync(
            x => x.EventType == IntegrationEventTypes.FundingThresholdReached);
        Assert.Equal($"funding-threshold-reached:{seeded.Project.Id:N}", message.DeduplicationKey);
        Assert.Null(message.PublishedAtUtc);
        Assert.Null(message.DeadLetteredAtUtc);

        var payload = JsonSerializer.Deserialize<FundingThresholdReachedEvent>(message.PayloadJson);
        Assert.NotNull(payload);
        Assert.Equal(seeded.Project.Id, payload.ProjectId);
        Assert.Equal(seeded.Version.Id, payload.ProjectVersionId);
        Assert.Equal(7_000_000, payload.FundingTargetMinor);
        Assert.Equal(8_000_000, payload.AllocableAmountMinor);
        Assert.Equal("IRR", payload.Currency);

        var replay = await service.PostReconciledPaymentAsync(
            seeded.SecondPayment.Id,
            "threshold-ledger-2",
            seeded.Finance.ExternalSubject,
            "threshold-second-replay",
            "127.0.0.1");
        Assert.True(replay.Succeeded);
        Assert.True(replay.Replayed);
        Assert.Equal(1, await db.OutboxMessages.CountAsync(
            x => x.EventType == IntegrationEventTypes.FundingThresholdReached));

        var reversal = await service.ReverseJournalAsync(
            second.Journal!.JournalId,
            "threshold-reversal",
            "correction after threshold",
            seeded.Finance.ExternalSubject,
            "threshold-reversal",
            "127.0.0.1");
        Assert.True(reversal.Succeeded);
        Assert.Equal(1, await db.OutboxMessages.CountAsync(
            x => x.EventType == IntegrationEventTypes.FundingThresholdReached));
        Assert.Equal(1, await db.AuditEvents.CountAsync(x =>
            x.Action == "funding.threshold.reached" && x.SubjectId == seeded.Project.Id.ToString()));
    }

    [Fact]
    public async Task Funding_commitment_and_its_integration_event_share_the_same_idempotent_transaction_boundary()
    {
        await using var db = CreateDbContext();
        var organization = new Organization { Name = "Outbox Org", Type = "company" };
        var funder = new AppUser { ExternalSubject = $"funder-{Guid.NewGuid():N}", DisplayName = "Funder" };
        var project = new Project
        {
            OrganizationId = organization.Id,
            Status = ProjectStatuses.Published,
            CreatedBySubject = "project-owner",
            SubmittedAtUtc = DateTimeOffset.UtcNow.AddHours(-3),
            ApprovedAtUtc = DateTimeOffset.UtcNow.AddHours(-2),
            PublishedAtUtc = DateTimeOffset.UtcNow.AddHours(-1),
            PublishedBySubject = "product-owner"
        };
        db.AddRange(organization, funder, project);
        await db.SaveChangesAsync();

        var service = new FundingService(db, new AuditWriter(db), new OutboxWriter(db));
        var created = await service.CreateCommitmentAsync(
            project.Id,
            1_500_000,
            "IRR",
            "commit-outbox-1",
            funder.ExternalSubject,
            "commit-outbox",
            "127.0.0.1");
        Assert.True(created.Succeeded);

        var message = await db.OutboxMessages.SingleAsync(
            x => x.EventType == IntegrationEventTypes.FundingCommitted);
        Assert.Equal(created.Commitment!.CommitmentId.ToString(), message.AggregateId);

        var replay = await service.CreateCommitmentAsync(
            project.Id,
            1_500_000,
            "IRR",
            "commit-outbox-1",
            funder.ExternalSubject,
            "commit-outbox-replay",
            "127.0.0.1");
        Assert.True(replay.Succeeded);
        Assert.True(replay.Replayed);
        Assert.Equal(1, await db.OutboxMessages.CountAsync(
            x => x.EventType == IntegrationEventTypes.FundingCommitted));
    }

    private async Task<SeededThresholdScenario> SeedThresholdScenarioAsync(MoonDbContext db)
    {
        var organization = new Organization { Name = "Threshold Org", Type = "startup" };
        var finance = new AppUser { ExternalSubject = $"finance-{Guid.NewGuid():N}", DisplayName = "Finance" };
        var project = new Project
        {
            OrganizationId = organization.Id,
            Status = ProjectStatuses.Published,
            CurrentVersionNumber = 1,
            CreatedBySubject = "project-owner",
            SubmittedAtUtc = DateTimeOffset.UtcNow.AddHours(-4),
            ApprovedAtUtc = DateTimeOffset.UtcNow.AddHours(-3),
            PublishedAtUtc = DateTimeOffset.UtcNow.AddHours(-2),
            PublishedBySubject = "product-owner"
        };
        var version = new ProjectVersion
        {
            ProjectId = project.Id,
            VersionNumber = 1,
            Title = "Threshold Project",
            Description = "Locked funding target",
            FundingTargetMinor = 7_000_000,
            FundingTargetCurrency = "IRR",
            IsLocked = true,
            LockedAtUtc = DateTimeOffset.UtcNow.AddHours(-3),
            CreatedBySubject = "project-owner"
        };

        var firstCommitment = NewReconciledCommitment(project.Id, 4_000_000);
        var secondCommitment = NewReconciledCommitment(project.Id, 4_000_000);
        var firstPayment = NewReconciledPayment(firstCommitment, finance.ExternalSubject);
        var secondPayment = NewReconciledPayment(secondCommitment, finance.ExternalSubject);

        db.AddRange(
            organization,
            finance,
            project,
            version,
            firstCommitment,
            secondCommitment,
            firstPayment,
            secondPayment);
        await db.SaveChangesAsync();

        return new SeededThresholdScenario(project, version, finance, firstPayment, secondPayment);
    }

    private static FundingCommitment NewReconciledCommitment(Guid projectId, long amountMinor) => new()
    {
        ProjectId = projectId,
        CommittedBySubject = $"funder-{Guid.NewGuid():N}",
        AmountMinor = amountMinor,
        Currency = "IRR",
        Status = CommitmentStatuses.Reconciled,
        IdempotencyKey = $"commitment-{Guid.NewGuid():N}",
        ReconciledAtUtc = DateTimeOffset.UtcNow.AddMinutes(-5)
    };

    private static FundingPayment NewReconciledPayment(FundingCommitment commitment, string financeSubject) => new()
    {
        CommitmentId = commitment.Id,
        InitiatedBySubject = commitment.CommittedBySubject,
        AmountMinor = commitment.AmountMinor,
        Currency = commitment.Currency,
        Status = PaymentStatuses.Reconciled,
        IdempotencyKey = $"payment-{Guid.NewGuid():N}",
        Provider = "test-gateway",
        ProviderReference = $"ref-{Guid.NewGuid():N}",
        ProviderNotifiedAtUtc = DateTimeOffset.UtcNow.AddMinutes(-10),
        VerifiedAtUtc = DateTimeOffset.UtcNow.AddMinutes(-8),
        ReconciledAtUtc = DateTimeOffset.UtcNow.AddMinutes(-5),
        ReconciliationIdempotencyKey = $"reconcile-{Guid.NewGuid():N}",
        ReconciledBySubject = financeSubject
    };

    private MoonDbContext CreateDbContext()
    {
        var options = new DbContextOptionsBuilder<MoonDbContext>()
            .UseNpgsql(_connectionString)
            .AddInterceptors(new LedgerIntegrityInterceptor())
            .Options;
        return new MoonDbContext(options);
    }

    private sealed record SeededThresholdScenario(
        Project Project,
        ProjectVersion Version,
        AppUser Finance,
        FundingPayment FirstPayment,
        FundingPayment SecondPayment);
}
