using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Options;
using Moon.Platform.Api.Common.Auditing;
using Moon.Platform.Api.Infrastructure.Persistence;
using Moon.Platform.Api.Integrations.Payments;
using Moon.Platform.Api.Modules.Funding;
using Moon.Platform.Api.Modules.Identity;
using Moon.Platform.Api.Modules.Projects;
using Xunit;

namespace Moon.Platform.Tests;

public sealed class Phase2PaymentTests : IAsyncLifetime
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
    public async Task Provider_success_has_no_financial_effect_until_verified_and_reconciled_once()
    {
        await using var db = CreateDbContext();
        var gateway = new FakePaymentGateway();
        var service = CreateService(db, gateway);
        var seeded = await SeedCommitmentAsync(db, "payer-subject", 4_200_000, "IRR");
        db.Users.Add(new AppUser { ExternalSubject = "finance-subject", DisplayName = "Finance" });
        await db.SaveChangesAsync();

        var intent = await service.CreateIntentAsync(
            seeded.Commitment.Id,
            "payment-intent-key-001",
            "payer-subject",
            "payment-intent",
            "127.0.0.1");

        Assert.True(intent.Succeeded);
        Assert.False(intent.Replayed);
        Assert.Equal(PaymentStatuses.AwaitingVerification, intent.Payment!.Status);
        Assert.Equal(1, gateway.CreateIntentCalls);

        var intentRetry = await service.CreateIntentAsync(
            seeded.Commitment.Id,
            "payment-intent-key-001",
            "payer-subject",
            "payment-intent-retry",
            "127.0.0.1");
        Assert.True(intentRetry.Succeeded);
        Assert.True(intentRetry.Replayed);
        Assert.Equal(intent.Payment.PaymentId, intentRetry.Payment!.PaymentId);
        Assert.Equal(1, gateway.CreateIntentCalls);
        Assert.Equal(1, await db.FundingPayments.CountAsync());

        var timestamp = DateTimeOffset.UtcNow;
        const string payload = "{\"status\":\"success\",\"reference\":\"fake-ref-001\"}";
        var webhook = await service.HandleWebhookAsync(
            "event-001",
            timestamp,
            "valid-signature",
            "1",
            payload,
            "payment-webhook",
            "127.0.0.1");

        Assert.True(webhook.Succeeded);
        Assert.False(webhook.Replayed);
        Assert.Equal(intent.Payment.PaymentId, webhook.PaymentId);

        var afterWebhookCommitment = await db.FundingCommitments.AsNoTracking().SingleAsync();
        var afterWebhookPayment = await db.FundingPayments.AsNoTracking().SingleAsync();
        Assert.Equal(CommitmentStatuses.AwaitingPayment, afterWebhookCommitment.Status);
        Assert.Equal(PaymentStatuses.AwaitingVerification, afterWebhookPayment.Status);
        Assert.NotNull(afterWebhookPayment.ProviderNotifiedAtUtc);
        Assert.Null(afterWebhookPayment.VerifiedAtUtc);
        Assert.Null(afterWebhookPayment.ReconciledAtUtc);

        var webhookReplay = await service.HandleWebhookAsync(
            "event-001",
            timestamp,
            "valid-signature",
            "1",
            payload,
            "payment-webhook-replay",
            "127.0.0.1");
        Assert.True(webhookReplay.Succeeded);
        Assert.True(webhookReplay.Replayed);
        Assert.Equal(1, await db.PaymentWebhookReceipts.CountAsync());

        var conflictingReplay = await service.HandleWebhookAsync(
            "event-001",
            timestamp,
            "valid-signature",
            "1",
            "{\"status\":\"success\",\"reference\":\"changed\"}",
            "payment-webhook-conflict",
            "127.0.0.1");
        Assert.False(conflictingReplay.Succeeded);
        Assert.Equal("payment_webhook_replay_conflict", conflictingReplay.ErrorCode);
        Assert.Equal(1, await db.PaymentWebhookReceipts.CountAsync());

        var staleWebhook = await service.HandleWebhookAsync(
            "event-stale",
            DateTimeOffset.UtcNow.AddMinutes(-20),
            "valid-signature",
            "1",
            payload,
            "payment-webhook-stale",
            "127.0.0.1");
        Assert.False(staleWebhook.Succeeded);
        Assert.Equal("payment_webhook_timestamp_invalid", staleWebhook.ErrorCode);

        var verified = await service.VerifyAsync(
            intent.Payment.PaymentId,
            "finance-subject",
            "payment-verify",
            "127.0.0.1");
        Assert.True(verified.Succeeded);
        Assert.Equal(PaymentStatuses.Verified, verified.Payment!.Status);

        var afterVerifyCommitment = await db.FundingCommitments.AsNoTracking().SingleAsync();
        Assert.Equal(CommitmentStatuses.AwaitingPayment, afterVerifyCommitment.Status);
        Assert.Null(afterVerifyCommitment.ReconciledAtUtc);

        var reconciled = await service.ReconcileAsync(
            intent.Payment.PaymentId,
            "reconcile-key-001",
            "finance-subject",
            "payment-reconcile",
            "127.0.0.1");
        Assert.True(reconciled.Succeeded);
        Assert.False(reconciled.Replayed);
        Assert.Equal(PaymentStatuses.Reconciled, reconciled.Payment!.Status);

        var finalCommitment = await db.FundingCommitments.AsNoTracking().SingleAsync();
        Assert.Equal(CommitmentStatuses.Reconciled, finalCommitment.Status);
        Assert.NotNull(finalCommitment.ReconciledAtUtc);

        var reconcileRetry = await service.ReconcileAsync(
            intent.Payment.PaymentId,
            "reconcile-key-001",
            "finance-subject",
            "payment-reconcile-retry",
            "127.0.0.1");
        Assert.True(reconcileRetry.Succeeded);
        Assert.True(reconcileRetry.Replayed);

        var reconcileDifferentKey = await service.ReconcileAsync(
            intent.Payment.PaymentId,
            "reconcile-key-002",
            "finance-subject",
            "payment-reconcile-conflict",
            "127.0.0.1");
        Assert.False(reconcileDifferentKey.Succeeded);
        Assert.Equal("payment_reconciliation_already_completed", reconcileDifferentKey.ErrorCode);

        Assert.Equal(1, await db.AuditEvents.CountAsync(x => x.Action == "payment.intent.created"));
        Assert.Equal(1, await db.AuditEvents.CountAsync(x => x.Action == "payment.webhook.received"));
        Assert.Equal(1, await db.AuditEvents.CountAsync(x => x.Action == "payment.verified"));
        Assert.Equal(1, await db.AuditEvents.CountAsync(x => x.Action == "payment.reconciled"));

        var stored = await db.FundingPayments.SingleAsync();
        db.Entry(stored).Property(nameof(FundingPayment.AmountMinor)).CurrentValue = 1L;
        await Assert.ThrowsAsync<InvalidOperationException>(() => db.SaveChangesAsync());
    }

    [Fact]
    public async Task Verification_mismatch_is_fail_closed_and_commitment_remains_unreconciled()
    {
        await using var db = CreateDbContext();
        var gateway = new FakePaymentGateway { VerificationAmountOverride = 999L };
        var service = CreateService(db, gateway);
        var seeded = await SeedCommitmentAsync(db, "mismatch-payer", 700_000, "IRR");
        db.Users.Add(new AppUser { ExternalSubject = "mismatch-finance", DisplayName = "Finance" });
        await db.SaveChangesAsync();

        var intent = await service.CreateIntentAsync(
            seeded.Commitment.Id,
            "mismatch-intent-key",
            "mismatch-payer",
            "mismatch-intent",
            "127.0.0.1");
        Assert.True(intent.Succeeded);

        var webhook = await service.HandleWebhookAsync(
            "mismatch-event",
            DateTimeOffset.UtcNow,
            "valid-signature",
            "1",
            "{\"status\":\"success\"}",
            "mismatch-webhook",
            "127.0.0.1");
        Assert.True(webhook.Succeeded);

        var verification = await service.VerifyAsync(
            intent.Payment!.PaymentId,
            "mismatch-finance",
            "mismatch-verify",
            "127.0.0.1");
        Assert.False(verification.Succeeded);
        Assert.Equal("payment_verification_mismatch", verification.ErrorCode);

        var payment = await db.FundingPayments.AsNoTracking().SingleAsync();
        var commitment = await db.FundingCommitments.AsNoTracking().SingleAsync();
        Assert.Equal(PaymentStatuses.AwaitingVerification, payment.Status);
        Assert.Equal(CommitmentStatuses.AwaitingPayment, commitment.Status);
        Assert.Null(payment.VerifiedAtUtc);
        Assert.Null(commitment.ReconciledAtUtc);
    }

    private PaymentService CreateService(MoonDbContext db, FakePaymentGateway gateway) =>
        new(
            db,
            new AuditWriter(db),
            gateway,
            Options.Create(new PaymentOptions
            {
                CallbackUrl = "https://moon.example.test/api/v1/payments/webhook",
                WebhookMaxAgeSeconds = 300,
                WebhookFutureSkewSeconds = 60
            }));

    private static async Task<(Project Project, FundingCommitment Commitment)> SeedCommitmentAsync(
        MoonDbContext db,
        string payerSubject,
        long amountMinor,
        string currency)
    {
        var organization = new Organization { Name = "Payment Project Org", Type = "startup" };
        var payer = new AppUser { ExternalSubject = payerSubject, DisplayName = "Payer" };
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
            CommittedBySubject = payerSubject,
            AmountMinor = amountMinor,
            Currency = currency,
            IdempotencyKey = $"seed-{Guid.NewGuid():N}"
        };

        db.AddRange(organization, payer, project, commitment);
        await db.SaveChangesAsync();
        return (project, commitment);
    }

    private MoonDbContext CreateDbContext()
    {
        var options = new DbContextOptionsBuilder<MoonDbContext>()
            .UseNpgsql(_connectionString)
            .Options;
        return new MoonDbContext(options);
    }

    private sealed class FakePaymentGateway : IPaymentGateway
    {
        public int CreateIntentCalls { get; private set; }
        public long? VerificationAmountOverride { get; init; }

        public Task<PaymentIntentResult> CreateIntentAsync(
            PaymentIntentRequest request,
            CancellationToken cancellationToken = default)
        {
            CreateIntentCalls++;
            return Task.FromResult(new PaymentIntentResult(
                true,
                "fake",
                "fake-ref-001",
                "https://pay.example.test/fake-ref-001",
                null));
        }

        public Task<PaymentVerificationResult> VerifyAsync(
            string providerReference,
            CancellationToken cancellationToken = default)
        {
            return Task.FromResult(new PaymentVerificationResult(
                true,
                "fake",
                providerReference,
                VerificationAmountOverride ?? 4_200_000,
                "IRR",
                null));
        }

        public Task<PaymentWebhookValidationResult> ValidateWebhookAsync(
            PaymentWebhookRequest request,
            CancellationToken cancellationToken = default)
        {
            return Task.FromResult(request.Signature == "valid-signature"
                ? new PaymentWebhookValidationResult(true, "fake", "fake-ref-001", null)
                : new PaymentWebhookValidationResult(false, "fake", null, "payment_webhook_signature_invalid"));
        }
    }
}
