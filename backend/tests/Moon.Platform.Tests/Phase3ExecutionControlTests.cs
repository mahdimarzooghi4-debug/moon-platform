using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Moon.Platform.Api.Common.Auditing;
using Moon.Platform.Api.Common.Authorization;
using Moon.Platform.Api.Common.Messaging;
using Moon.Platform.Api.Infrastructure.Persistence;
using Moon.Platform.Api.Modules.Execution;
using Moon.Platform.Api.Modules.Funding;
using Moon.Platform.Api.Modules.Identity;
using Moon.Platform.Api.Modules.Projects;
using Xunit;

namespace Moon.Platform.Tests;

public sealed class Phase3ExecutionControlTests : IAsyncLifetime
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
    public async Task Expense_risk_freeze_and_staged_disbursement_controls_are_enforced()
    {
        await using var db = CreateDbContext();
        var seeded = await SeedScenarioAsync(db, "controls");
        var execution = CreateExecutionService(db);
        var controls = CreateControlService(db);
        await SeedAllocableBalanceAsync(db, seeded.Project.Id, 1_000_000, "IRR", seeded.Finance.ExternalSubject);

        var initialized = await execution.InitializeAsync(
            seeded.Project.Id,
            [
                new ExecutionStageDefinition("Stage 1", "Build", 400_000, "IRR"),
                new ExecutionStageDefinition("Stage 2", "Scale", 500_000, "IRR")
            ],
            seeded.Planner.ExternalSubject,
            "phase3-controls-init",
            "127.0.0.1");
        Assert.True(initialized.Succeeded);
        var stage1 = initialized.Plan!.Stages[0];
        var stage2 = initialized.Plan.Stages[1];

        var blockedRelease = await controls.ReleaseDisbursementAsync(
            seeded.Project.Id, stage2.StageId, 100_000, "IRR", "stage2-too-early",
            seeded.Finance.ExternalSubject, "stage2-too-early", "127.0.0.1");
        Assert.False(blockedRelease.Succeeded);
        Assert.Equal("execution_disbursement_stage_not_active", blockedRelease.ErrorCode);

        var outsiderExpense = await controls.SubmitExpenseAsync(
            seeded.Project.Id, stage1.StageId, 50_000, "IRR", "hosting", "Unauthorized expense", null,
            seeded.Outsider.ExternalSubject, "expense-outsider", "127.0.0.1");
        Assert.False(outsiderExpense.Succeeded);
        Assert.Equal("execution_member_forbidden", outsiderExpense.ErrorCode);

        var expense = await controls.SubmitExpenseAsync(
            seeded.Project.Id, stage1.StageId, 50_000, "irr", "hosting", "Stage one cloud cost", "evidence://stage1/hosting",
            seeded.Member.ExternalSubject, "expense-submit", "127.0.0.1");
        Assert.True(expense.Succeeded);
        var expenseView = Assert.Single(expense.State!.Expenses);
        Assert.Equal(ExecutionExpenseStatuses.Submitted, expenseView.Status);

        var report = await execution.SubmitReportAsync(
            seeded.Project.Id, stage1.StageId, "Stage one work complete.", seeded.Member.ExternalSubject,
            "stage1-report", "127.0.0.1");
        Assert.True(report.Succeeded);
        var reportView = Assert.Single(report.Plan!.Stages[0].Reports);

        var approvalWithPendingExpense = await execution.ReviewReportAsync(
            seeded.Project.Id, stage1.StageId, reportView.ReportId, "approve", "Ready",
            seeded.Supervisor.ExternalSubject, "approve-pending-expense", "127.0.0.1");
        Assert.False(approvalWithPendingExpense.Succeeded);
        Assert.Equal("execution_pending_expenses", approvalWithPendingExpense.ErrorCode);

        var expenseApproved = await controls.ReviewExpenseAsync(
            seeded.Project.Id, stage1.StageId, expenseView.ExpenseId, "approve", "Receipt verified",
            seeded.Finance.ExternalSubject, "expense-approve", "127.0.0.1");
        Assert.True(expenseApproved.Succeeded);
        Assert.Equal(ExecutionExpenseStatuses.Approved, Assert.Single(expenseApproved.State!.Expenses).Status);

        var frozen = await controls.FreezeAsync(
            seeded.Project.Id, "Critical delivery risk requires a controlled pause.", seeded.Supervisor.ExternalSubject,
            "freeze", "127.0.0.1");
        Assert.True(frozen.Succeeded);
        Assert.True(frozen.State!.IsFrozen);

        var reviewWhileFrozen = await execution.ReviewReportAsync(
            seeded.Project.Id, stage1.StageId, reportView.ReportId, "approve", "Blocked while frozen",
            seeded.Supervisor.ExternalSubject, "review-frozen", "127.0.0.1");
        Assert.False(reviewWhileFrozen.Succeeded);
        Assert.Equal("execution_frozen", reviewWhileFrozen.ErrorCode);

        var releaseWhileFrozen = await controls.ReleaseDisbursementAsync(
            seeded.Project.Id, stage1.StageId, 100_000, "IRR", "frozen-release",
            seeded.Finance.ExternalSubject, "frozen-release", "127.0.0.1");
        Assert.False(releaseWhileFrozen.Succeeded);
        Assert.Equal("execution_frozen", releaseWhileFrozen.ErrorCode);

        var risk = await controls.ReportRiskAsync(
            seeded.Project.Id, stage1.StageId, ExecutionRiskSeverities.Critical, "Supplier outage", "Primary supplier is unavailable.",
            seeded.Member.ExternalSubject, "risk-report", "127.0.0.1");
        Assert.True(risk.Succeeded);
        var riskView = Assert.Single(risk.State!.Risks);
        Assert.Equal(ExecutionRiskStatuses.Open, riskView.Status);

        var mitigated = await controls.TransitionRiskAsync(
            seeded.Project.Id, stage1.StageId, riskView.RiskId, "mitigate", "Fallback supplier contracted.",
            seeded.Supervisor.ExternalSubject, "risk-mitigate", "127.0.0.1");
        Assert.True(mitigated.Succeeded);
        Assert.Equal(ExecutionRiskStatuses.Mitigated, Assert.Single(mitigated.State!.Risks).Status);

        var unfrozen = await controls.UnfreezeAsync(
            seeded.Project.Id, "Fallback supplier is active.", seeded.Supervisor.ExternalSubject,
            "unfreeze", "127.0.0.1");
        Assert.True(unfrozen.Succeeded);
        Assert.False(unfrozen.State!.IsFrozen);
        Assert.Equal(2, unfrozen.State.FreezeHistory.Count);

        var approved = await execution.ReviewReportAsync(
            seeded.Project.Id, stage1.StageId, reportView.ReportId, "approve", "Evidence accepted",
            seeded.Supervisor.ExternalSubject, "stage1-approve", "127.0.0.1");
        Assert.True(approved.Succeeded);
        Assert.Equal(ExecutionStageStatuses.Completed, approved.Plan!.Stages[0].Status);
        Assert.Equal(ExecutionStageStatuses.Active, approved.Plan.Stages[1].Status);

        var completedStageRelease = await controls.ReleaseDisbursementAsync(
            seeded.Project.Id, stage1.StageId, 10_000, "IRR", "completed-stage-release",
            seeded.Finance.ExternalSubject, "completed-stage-release", "127.0.0.1");
        Assert.False(completedStageRelease.Succeeded);
        Assert.Equal("execution_disbursement_stage_not_active", completedStageRelease.ErrorCode);

        var released = await controls.ReleaseDisbursementAsync(
            seeded.Project.Id, stage2.StageId, 300_000, "IRR", "stage2-release-001",
            seeded.Finance.ExternalSubject, "stage2-release", "127.0.0.1");
        Assert.True(released.Succeeded);
        Assert.False(released.Replayed);
        var disbursement = Assert.Single(released.State!.Disbursements);
        Assert.False(disbursement.Reversed);
        Assert.NotNull(disbursement.LedgerJournalId);

        var replay = await controls.ReleaseDisbursementAsync(
            seeded.Project.Id, stage2.StageId, 300_000, "IRR", "stage2-release-001",
            seeded.Finance.ExternalSubject, "stage2-release-replay", "127.0.0.1");
        Assert.True(replay.Succeeded);
        Assert.True(replay.Replayed);
        Assert.Single(await db.Set<ExecutionDisbursement>().ToListAsync());

        var overLimit = await controls.ReleaseDisbursementAsync(
            seeded.Project.Id, stage2.StageId, 250_000, "IRR", "stage2-over-limit",
            seeded.Finance.ExternalSubject, "stage2-over-limit", "127.0.0.1");
        Assert.False(overLimit.Succeeded);
        Assert.Equal("execution_disbursement_stage_limit_exceeded", overLimit.ErrorCode);

        var balance = await new LedgerService(db, new AuditWriter(db)).GetProjectAllocableBalanceAsync(seeded.Project.Id, "IRR");
        Assert.True(balance.Succeeded);
        Assert.Equal(700_000, balance.Balance!.AmountMinor);

        var journal = await db.LedgerJournals.Include(x => x.Entries).SingleAsync(x => x.ExecutionDisbursementId == disbursement.DisbursementId);
        Assert.Equal(LedgerJournalKinds.StageDisbursement, journal.Kind);
        Assert.Equal(300_000, journal.Entries.Single(x => x.AccountCode == LedgerAccountCodes.ProjectFunds && x.Side == LedgerEntrySides.Debit).AmountMinor);
        Assert.Equal(journal.Entries.Where(x => x.Side == LedgerEntrySides.Debit).Sum(x => x.AmountMinor), journal.Entries.Where(x => x.Side == LedgerEntrySides.Credit).Sum(x => x.AmountMinor));
        Assert.Equal(1, await db.OutboxMessages.CountAsync(x => x.EventType == IntegrationEventTypes.ExecutionDisbursementReleased));
        Assert.Equal(1, await db.AuditEvents.CountAsync(x => x.Action == "execution.frozen"));
        Assert.Equal(1, await db.AuditEvents.CountAsync(x => x.Action == "execution.unfrozen"));
    }

    [Fact]
    public async Task Final_control_records_are_immutable_and_risk_history_is_preserved()
    {
        await using var db = CreateDbContext();
        var seeded = await SeedScenarioAsync(db, "immutability");
        var execution = CreateExecutionService(db);
        var controls = CreateControlService(db);
        await SeedAllocableBalanceAsync(db, seeded.Project.Id, 500_000, "IRR", seeded.Finance.ExternalSubject);

        var initialized = await execution.InitializeAsync(
            seeded.Project.Id,
            [new ExecutionStageDefinition("Stage", "Only stage", 400_000, "IRR")],
            seeded.Planner.ExternalSubject, "immutability-init", "127.0.0.1");
        var stage = Assert.Single(initialized.Plan!.Stages);

        var submitted = await controls.SubmitExpenseAsync(
            seeded.Project.Id, stage.StageId, 20_000, "IRR", "tools", "Developer tools", null,
            seeded.Member.ExternalSubject, "expense", "127.0.0.1");
        var expense = Assert.Single(submitted.State!.Expenses);
        await controls.ReviewExpenseAsync(
            seeded.Project.Id, stage.StageId, expense.ExpenseId, "approve", "Verified",
            seeded.Finance.ExternalSubject, "expense-review", "127.0.0.1");

        db.ChangeTracker.Clear();
        var storedExpense = await db.Set<ExecutionExpense>().SingleAsync(x => x.Id == expense.ExpenseId);
        db.Entry(storedExpense).Property(nameof(ExecutionExpense.Description)).CurrentValue = "tampered";
        await Assert.ThrowsAsync<InvalidOperationException>(() => db.SaveChangesAsync());
        db.ChangeTracker.Clear();

        var riskResult = await controls.ReportRiskAsync(
            seeded.Project.Id, stage.StageId, ExecutionRiskSeverities.High, "Capacity", "Capacity risk",
            seeded.Member.ExternalSubject, "risk", "127.0.0.1");
        var risk = Assert.Single(riskResult.State!.Risks);
        await controls.TransitionRiskAsync(
            seeded.Project.Id, stage.StageId, risk.RiskId, "mitigate", "Capacity doubled",
            seeded.Supervisor.ExternalSubject, "risk-mitigate", "127.0.0.1");
        await controls.TransitionRiskAsync(
            seeded.Project.Id, stage.StageId, risk.RiskId, "close", "Load test passed",
            seeded.Supervisor.ExternalSubject, "risk-close", "127.0.0.1");

        db.ChangeTracker.Clear();
        var storedRisk = await db.Set<ExecutionRisk>().SingleAsync(x => x.Id == risk.RiskId);
        Assert.NotNull(storedRisk.MitigatedAtUtc);
        Assert.NotNull(storedRisk.ClosedAtUtc);
        db.Entry(storedRisk).Property(nameof(ExecutionRisk.Title)).CurrentValue = "tampered";
        await Assert.ThrowsAsync<InvalidOperationException>(() => db.SaveChangesAsync());
        db.ChangeTracker.Clear();

        var frozen = await controls.FreezeAsync(
            seeded.Project.Id, "Audit append-only freeze", seeded.Supervisor.ExternalSubject,
            "freeze-immutable", "127.0.0.1");
        var freezeEvent = Assert.Single(frozen.State!.FreezeHistory);
        db.ChangeTracker.Clear();
        var storedFreeze = await db.Set<ExecutionFreezeEvent>().SingleAsync(x => x.Id == freezeEvent.EventId);
        db.Entry(storedFreeze).Property(nameof(ExecutionFreezeEvent.Reason)).CurrentValue = "tampered";
        await Assert.ThrowsAsync<InvalidOperationException>(() => db.SaveChangesAsync());
    }

    [Fact]
    public async Task Reversal_restores_allocable_balance_and_stage_release_capacity()
    {
        await using var db = CreateDbContext();
        var seeded = await SeedScenarioAsync(db, "reversal");
        var execution = CreateExecutionService(db);
        var controls = CreateControlService(db);
        var ledger = new LedgerService(db, new AuditWriter(db));
        await SeedAllocableBalanceAsync(db, seeded.Project.Id, 600_000, "IRR", seeded.Finance.ExternalSubject);

        var initialized = await execution.InitializeAsync(
            seeded.Project.Id,
            [new ExecutionStageDefinition("Stage", "Funded stage", 400_000, "IRR")],
            seeded.Planner.ExternalSubject, "reversal-init", "127.0.0.1");
        var stage = Assert.Single(initialized.Plan!.Stages);

        var first = await controls.ReleaseDisbursementAsync(
            seeded.Project.Id, stage.StageId, 300_000, "IRR", "release-before-reversal",
            seeded.Finance.ExternalSubject, "release-before-reversal", "127.0.0.1");
        var firstView = Assert.Single(first.State!.Disbursements);
        Assert.NotNull(firstView.LedgerJournalId);

        var reversed = await ledger.ReverseJournalAsync(
            firstView.LedgerJournalId!.Value, "reverse-stage-release", "Correction before settlement",
            seeded.Finance.ExternalSubject, "reverse-stage-release", "127.0.0.1");
        Assert.True(reversed.Succeeded);

        var restored = await ledger.GetProjectAllocableBalanceAsync(seeded.Project.Id, "IRR");
        Assert.Equal(600_000, restored.Balance!.AmountMinor);

        var second = await controls.ReleaseDisbursementAsync(
            seeded.Project.Id, stage.StageId, 400_000, "IRR", "release-after-reversal",
            seeded.Finance.ExternalSubject, "release-after-reversal", "127.0.0.1");
        Assert.True(second.Succeeded);
        Assert.Equal(2, second.State!.Disbursements.Count);
        Assert.Contains(second.State.Disbursements, x => x.DisbursementId == firstView.DisbursementId && x.Reversed);

        var finalBalance = await ledger.GetProjectAllocableBalanceAsync(seeded.Project.Id, "IRR");
        Assert.Equal(200_000, finalBalance.Balance!.AmountMinor);
    }

    private ExecutionService CreateExecutionService(MoonDbContext db) =>
        new(db, new AuditWriter(db), new OrganizationAccessService(db));

    private ExecutionControlService CreateControlService(MoonDbContext db) =>
        new(db, new AuditWriter(db), new OrganizationAccessService(db), new OutboxWriter(db));

    private async Task<SeededScenario> SeedScenarioAsync(MoonDbContext db, string suffix)
    {
        var organization = new Organization { Name = $"Phase3 Controls {suffix}", Type = "startup" };
        var planner = new AppUser { ExternalSubject = $"planner-{suffix}", DisplayName = "Planner" };
        var member = new AppUser { ExternalSubject = $"member-{suffix}", DisplayName = "Member" };
        var finance = new AppUser { ExternalSubject = $"finance-{suffix}", DisplayName = "Finance" };
        var supervisor = new AppUser { ExternalSubject = $"supervisor-{suffix}", DisplayName = "Supervisor" };
        var outsider = new AppUser { ExternalSubject = $"outsider-{suffix}", DisplayName = "Outsider" };
        var project = new Project
        {
            OrganizationId = organization.Id,
            CreatedBySubject = member.ExternalSubject,
            Status = ProjectStatuses.Published,
            SubmittedAtUtc = DateTimeOffset.UtcNow.AddDays(-3),
            ApprovedAtUtc = DateTimeOffset.UtcNow.AddDays(-2),
            PublishedAtUtc = DateTimeOffset.UtcNow.AddDays(-1),
            PublishedBySubject = planner.ExternalSubject
        };
        var membership = new Membership
        {
            UserId = member.Id,
            OrganizationId = organization.Id,
            RoleId = SystemRoles.StartupId,
            IsActive = true
        };
        db.AddRange(organization, planner, member, finance, supervisor, outsider, project, membership);
        await db.SaveChangesAsync();
        return new SeededScenario(project, planner, member, finance, supervisor, outsider);
    }

    private async Task SeedAllocableBalanceAsync(MoonDbContext db, Guid projectId, long amountMinor, string currency, string actor)
    {
        var journal = new LedgerJournal
        {
            ProjectId = projectId,
            Currency = currency,
            Kind = "test_opening_balance",
            IdempotencyKey = $"test-opening-{Guid.NewGuid():N}",
            CreatedBySubject = actor
        };
        journal.Entries.Add(new LedgerEntry
        {
            JournalId = journal.Id,
            ProjectId = projectId,
            AccountCode = LedgerAccountCodes.CashSettlement,
            Side = LedgerEntrySides.Debit,
            AmountMinor = amountMinor,
            Currency = currency,
            Journal = journal
        });
        journal.Entries.Add(new LedgerEntry
        {
            JournalId = journal.Id,
            ProjectId = projectId,
            AccountCode = LedgerAccountCodes.ProjectFunds,
            Side = LedgerEntrySides.Credit,
            AmountMinor = amountMinor,
            Currency = currency,
            Journal = journal
        });
        db.LedgerJournals.Add(journal);
        await db.SaveChangesAsync();
    }

    private MoonDbContext CreateDbContext()
    {
        var options = new DbContextOptionsBuilder<MoonDbContext>()
            .UseNpgsql(_connectionString)
            .ReplaceService<IModelCustomizer, MoonExecutionModelCustomizer>()
            .AddInterceptors(new LedgerIntegrityInterceptor(), new ExecutionIntegrityInterceptor())
            .Options;
        return new MoonDbContext(options);
    }

    private sealed record SeededScenario(
        Project Project,
        AppUser Planner,
        AppUser Member,
        AppUser Finance,
        AppUser Supervisor,
        AppUser Outsider);
}
