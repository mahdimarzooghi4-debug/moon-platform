using Microsoft.EntityFrameworkCore;
using Moon.Platform.Api.Common.Auditing;
using Moon.Platform.Api.Infrastructure.Persistence;
using Moon.Platform.Api.Modules.Funding;
using Moon.Platform.Api.Modules.Identity;
using Moon.Platform.Api.Modules.Projects;
using Xunit;

namespace Moon.Platform.Tests;

public sealed class Phase2LedgerTests : IAsyncLifetime
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
    public async Task Reconciled_payment_posts_one_balanced_journal_and_allocable_balance_comes_from_ledger()
    {
        await using var db = CreateDbContext();
        var seeded = await SeedPaymentAsync(db, PaymentStatuses.Reconciled);
        var service = new LedgerService(db, new AuditWriter(db));

        var before = await service.GetProjectAllocableBalanceAsync(seeded.Project.Id, "irr");
        Assert.True(before.Succeeded);
        Assert.Equal(0, before.Balance!.AmountMinor);

        var posted = await service.PostReconciledPaymentAsync(
            seeded.Payment.Id,
            "ledger-post-001",
            seeded.Finance.ExternalSubject,
            "ledger-post",
            "127.0.0.1");

        Assert.True(posted.Succeeded);
        Assert.False(posted.Replayed);
        Assert.Equal(LedgerJournalKinds.PaymentReconciliation, posted.Journal!.Kind);
        Assert.Equal(2, posted.Journal.Entries.Count);
        Assert.Equal(
            posted.Journal.Entries.Where(x => x.Side == LedgerEntrySides.Debit).Sum(x => x.AmountMinor),
            posted.Journal.Entries.Where(x => x.Side == LedgerEntrySides.Credit).Sum(x => x.AmountMinor));
        Assert.Equal(seeded.Payment.AmountMinor, posted.Journal.Entries.Sum(x =>
            x.AccountCode == LedgerAccountCodes.ProjectFunds && x.Side == LedgerEntrySides.Credit
                ? x.AmountMinor
                : 0));

        var balance = await service.GetProjectAllocableBalanceAsync(seeded.Project.Id, "IRR");
        Assert.True(balance.Succeeded);
        Assert.Equal(seeded.Payment.AmountMinor, balance.Balance!.AmountMinor);

        var replay = await service.PostReconciledPaymentAsync(
            seeded.Payment.Id,
            "ledger-post-001",
            seeded.Finance.ExternalSubject,
            "ledger-post-replay",
            "127.0.0.1");
        Assert.True(replay.Succeeded);
        Assert.True(replay.Replayed);
        Assert.Equal(posted.Journal.JournalId, replay.Journal!.JournalId);

        var secondKey = await service.PostReconciledPaymentAsync(
            seeded.Payment.Id,
            "ledger-post-002",
            seeded.Finance.ExternalSubject,
            "ledger-post-conflict",
            "127.0.0.1");
        Assert.False(secondKey.Succeeded);
        Assert.Equal("ledger_payment_already_posted", secondKey.ErrorCode);

        Assert.Equal(1, await db.Set<LedgerJournal>().CountAsync());
        Assert.Equal(2, await db.Set<LedgerEntry>().CountAsync());
        Assert.Equal(1, await db.AuditEvents.CountAsync(x =>
            x.Action == "ledger.payment.posted" && x.SubjectId == posted.Journal.JournalId.ToString()));

        var stored = await db.Set<LedgerJournal>().SingleAsync();
        db.Entry(stored).Property(nameof(LedgerJournal.Reason)).CurrentValue = "tamper";
        await Assert.ThrowsAsync<InvalidOperationException>(() => db.SaveChangesAsync());
    }

    [Fact]
    public async Task Reversal_is_append_only_idempotent_and_negates_project_allocable_balance()
    {
        await using var db = CreateDbContext();
        var seeded = await SeedPaymentAsync(db, PaymentStatuses.Reconciled);
        var service = new LedgerService(db, new AuditWriter(db));

        var posted = await service.PostReconciledPaymentAsync(
            seeded.Payment.Id,
            "ledger-original",
            seeded.Finance.ExternalSubject,
            "ledger-original",
            "127.0.0.1");
        Assert.True(posted.Succeeded);

        var reversed = await service.ReverseJournalAsync(
            posted.Journal!.JournalId,
            "ledger-reversal-001",
            "اصلاح ثبت مالی آزمایشی",
            seeded.Finance.ExternalSubject,
            "ledger-reversal",
            "127.0.0.1");

        Assert.True(reversed.Succeeded);
        Assert.False(reversed.Replayed);
        Assert.Equal(LedgerJournalKinds.Reversal, reversed.Journal!.Kind);
        Assert.Equal(posted.Journal.JournalId, reversed.Journal.ReversesJournalId);

        var balance = await service.GetProjectAllocableBalanceAsync(seeded.Project.Id, "IRR");
        Assert.True(balance.Succeeded);
        Assert.Equal(0, balance.Balance!.AmountMinor);
        Assert.Equal(2, await db.Set<LedgerJournal>().CountAsync());
        Assert.Equal(4, await db.Set<LedgerEntry>().CountAsync());

        var replay = await service.ReverseJournalAsync(
            posted.Journal.JournalId,
            "ledger-reversal-001",
            "اصلاح ثبت مالی آزمایشی",
            seeded.Finance.ExternalSubject,
            "ledger-reversal-replay",
            "127.0.0.1");
        Assert.True(replay.Succeeded);
        Assert.True(replay.Replayed);
        Assert.Equal(reversed.Journal.JournalId, replay.Journal!.JournalId);

        var conflictingSecondReversal = await service.ReverseJournalAsync(
            posted.Journal.JournalId,
            "ledger-reversal-002",
            "دلیل متفاوت",
            seeded.Finance.ExternalSubject,
            "ledger-reversal-conflict",
            "127.0.0.1");
        Assert.False(conflictingSecondReversal.Succeeded);
        Assert.Equal("ledger_journal_already_reversed", conflictingSecondReversal.ErrorCode);

        var reverseAReversal = await service.ReverseJournalAsync(
            reversed.Journal.JournalId,
            "ledger-reversal-of-reversal",
            "نباید مجاز باشد",
            seeded.Finance.ExternalSubject,
            "ledger-reversal-of-reversal",
            "127.0.0.1");
        Assert.False(reverseAReversal.Succeeded);
        Assert.Equal("ledger_reversal_of_reversal_not_allowed", reverseAReversal.ErrorCode);

        Assert.Equal(1, await db.AuditEvents.CountAsync(x =>
            x.Action == "ledger.journal.reversed" && x.SubjectId == reversed.Journal.JournalId.ToString()));
    }

    [Fact]
    public async Task Unreconciled_payment_and_unbalanced_manual_journal_are_rejected()
    {
        await using var db = CreateDbContext();
        var seeded = await SeedPaymentAsync(db, PaymentStatuses.Verified);
        var service = new LedgerService(db, new AuditWriter(db));

        var result = await service.PostReconciledPaymentAsync(
            seeded.Payment.Id,
            "ledger-unreconciled",
            seeded.Finance.ExternalSubject,
            "ledger-unreconciled",
            "127.0.0.1");
        Assert.False(result.Succeeded);
        Assert.Equal("ledger_payment_not_reconciled", result.ErrorCode);
        Assert.Empty(await db.Set<LedgerJournal>().ToListAsync());

        var invalid = new LedgerJournal
        {
            PaymentId = seeded.Payment.Id,
            ProjectId = seeded.Project.Id,
            Currency = "IRR",
            Kind = LedgerJournalKinds.PaymentReconciliation,
            IdempotencyKey = "manual-unbalanced",
            CreatedBySubject = seeded.Finance.ExternalSubject,
            Payment = seeded.Payment
        };
        invalid.Entries.Add(new LedgerEntry
        {
            JournalId = invalid.Id,
            ProjectId = invalid.ProjectId,
            AccountCode = LedgerAccountCodes.CashSettlement,
            Side = LedgerEntrySides.Debit,
            AmountMinor = seeded.Payment.AmountMinor,
            Currency = invalid.Currency,
            Journal = invalid
        });
        db.Set<LedgerJournal>().Add(invalid);

        var exception = await Assert.ThrowsAsync<InvalidOperationException>(() => db.SaveChangesAsync());
        Assert.Contains("at least two entries", exception.Message, StringComparison.Ordinal);
    }

    private async Task<SeededLedgerScenario> SeedPaymentAsync(MoonDbContext db, string paymentStatus)
    {
        var organization = new Organization { Name = "Ledger Org", Type = "startup" };
        var finance = new AppUser { ExternalSubject = $"finance-{Guid.NewGuid():N}", DisplayName = "Finance" };
        var project = new Project
        {
            OrganizationId = organization.Id,
            Status = ProjectStatuses.Published,
            CreatedBySubject = "project-owner",
            SubmittedAtUtc = DateTimeOffset.UtcNow.AddHours(-4),
            ApprovedAtUtc = DateTimeOffset.UtcNow.AddHours(-3),
            PublishedAtUtc = DateTimeOffset.UtcNow.AddHours(-2),
            PublishedBySubject = "product-owner"
        };
        var commitment = new FundingCommitment
        {
            ProjectId = project.Id,
            CommittedBySubject = "funder",
            AmountMinor = 4_200_000,
            Currency = "IRR",
            Status = paymentStatus == PaymentStatuses.Reconciled
                ? CommitmentStatuses.Reconciled
                : CommitmentStatuses.AwaitingPayment,
            IdempotencyKey = $"commitment-{Guid.NewGuid():N}",
            ReconciledAtUtc = paymentStatus == PaymentStatuses.Reconciled ? DateTimeOffset.UtcNow.AddMinutes(-5) : null
        };
        var payment = new FundingPayment
        {
            CommitmentId = commitment.Id,
            InitiatedBySubject = "funder",
            AmountMinor = commitment.AmountMinor,
            Currency = commitment.Currency,
            Status = paymentStatus,
            IdempotencyKey = $"payment-{Guid.NewGuid():N}",
            Provider = "test-gateway",
            ProviderReference = $"ref-{Guid.NewGuid():N}",
            ProviderNotifiedAtUtc = DateTimeOffset.UtcNow.AddMinutes(-10),
            VerifiedAtUtc = DateTimeOffset.UtcNow.AddMinutes(-8),
            ReconciledAtUtc = paymentStatus == PaymentStatuses.Reconciled ? DateTimeOffset.UtcNow.AddMinutes(-5) : null,
            ReconciliationIdempotencyKey = paymentStatus == PaymentStatuses.Reconciled ? $"reconcile-{Guid.NewGuid():N}" : null,
            ReconciledBySubject = paymentStatus == PaymentStatuses.Reconciled ? finance.ExternalSubject : null
        };

        db.AddRange(organization, finance, project, commitment, payment);
        await db.SaveChangesAsync();
        return new SeededLedgerScenario(organization, finance, project, commitment, payment);
    }

    private MoonDbContext CreateDbContext()
    {
        var options = new DbContextOptionsBuilder<MoonDbContext>()
            .UseNpgsql(_connectionString)
            .AddInterceptors(new LedgerIntegrityInterceptor())
            .Options;
        return new MoonDbContext(options);
    }

    private sealed record SeededLedgerScenario(
        Organization Organization,
        AppUser Finance,
        Project Project,
        FundingCommitment Commitment,
        FundingPayment Payment);
}
