using System.Text.Json;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Options;
using Moon.Platform.Api.Common.Auditing;
using Moon.Platform.Api.Common.Messaging;
using Moon.Platform.Api.Infrastructure.Persistence;
using Moon.Platform.Api.Integrations.Payments;
using Moon.Platform.Api.Modules.Funding;
using Moon.Platform.Api.Modules.Identity;
using Moon.Platform.Api.Modules.Projects;
using Xunit;

namespace Moon.Platform.Tests;

public sealed class Phase2PaymentReconciledOutboxTests : IAsyncLifetime
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
    public async Task Payment_reconciliation_enqueues_exactly_one_transactional_integration_event()
    {
        await using var db = CreateDbContext();
        var organization = new Organization { Name = "Reconcile Outbox Org", Type = "startup" };
        var finance = new AppUser { ExternalSubject = $"finance-{Guid.NewGuid():N}", DisplayName = "Finance" };
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
        var commitment = new FundingCommitment
        {
            ProjectId = project.Id,
            CommittedBySubject = "payer-subject",
            AmountMinor = 2_750_000,
            Currency = "IRR",
            Status = CommitmentStatuses.AwaitingPayment,
            IdempotencyKey = $"commitment-{Guid.NewGuid():N}"
        };
        var payment = new FundingPayment
        {
            CommitmentId = commitment.Id,
            InitiatedBySubject = commitment.CommittedBySubject,
            AmountMinor = commitment.AmountMinor,
            Currency = commitment.Currency,
            Status = PaymentStatuses.Verified,
            IdempotencyKey = $"payment-{Guid.NewGuid():N}",
            Provider = "test-gateway",
            ProviderReference = $"provider-{Guid.NewGuid():N}",
            ProviderNotifiedAtUtc = DateTimeOffset.UtcNow.AddMinutes(-5),
            VerifiedAtUtc = DateTimeOffset.UtcNow.AddMinutes(-2)
        };

        db.AddRange(organization, finance, project, commitment, payment);
        await db.SaveChangesAsync();

        var service = new PaymentService(
            db,
            new AuditWriter(db),
            new DisabledPaymentGateway(),
            Options.Create(new PaymentOptions
            {
                CallbackUrl = "https://moon.example.test/api/v1/payments/webhook"
            }),
            new OutboxWriter(db));

        var reconciled = await service.ReconcileAsync(
            payment.Id,
            "reconcile-outbox-key",
            finance.ExternalSubject,
            "reconcile-outbox-correlation",
            "127.0.0.1");

        Assert.True(reconciled.Succeeded);
        Assert.False(reconciled.Replayed);

        var message = await db.OutboxMessages.SingleAsync(
            x => x.EventType == IntegrationEventTypes.PaymentReconciled);
        Assert.Equal($"payment-reconciled:{payment.Id:N}", message.DeduplicationKey);
        Assert.Equal("reconcile-outbox-correlation", message.CorrelationId);
        Assert.Null(message.PublishedAtUtc);

        var payload = JsonSerializer.Deserialize<PaymentReconciledEvent>(message.PayloadJson);
        Assert.NotNull(payload);
        Assert.Equal(payment.Id, payload.PaymentId);
        Assert.Equal(commitment.Id, payload.CommitmentId);
        Assert.Equal(project.Id, payload.ProjectId);
        Assert.Equal(payment.AmountMinor, payload.AmountMinor);
        Assert.Equal(payment.Currency, payload.Currency);
        Assert.Equal(payment.ProviderReference, payload.ProviderReference);

        var replay = await service.ReconcileAsync(
            payment.Id,
            "reconcile-outbox-key",
            finance.ExternalSubject,
            "reconcile-outbox-replay",
            "127.0.0.1");
        Assert.True(replay.Succeeded);
        Assert.True(replay.Replayed);
        Assert.Equal(1, await db.OutboxMessages.CountAsync(
            x => x.EventType == IntegrationEventTypes.PaymentReconciled));
    }

    private MoonDbContext CreateDbContext()
    {
        var options = new DbContextOptionsBuilder<MoonDbContext>()
            .UseNpgsql(_connectionString)
            .AddInterceptors(new LedgerIntegrityInterceptor())
            .Options;
        return new MoonDbContext(options);
    }
}
