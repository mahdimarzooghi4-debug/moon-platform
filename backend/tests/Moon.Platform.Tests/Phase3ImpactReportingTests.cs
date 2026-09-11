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

public sealed class Phase3ImpactReportingTests : IAsyncLifetime
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
    public async Task Impact_report_requires_completed_stage_closed_risks_and_publishes_server_financial_snapshot()
    {
        await using var db = CreateDbContext();
        var seeded = await SeedScenarioAsync(db, "impact");
        var execution = CreateExecutionService(db);
        var controls = CreateControlService(db);
        var impact = CreateImpactService(db);
        await SeedAllocableBalanceAsync(db, seeded.Project.Id, 1_000_000, "IRR", seeded.Finance.ExternalSubject);

        var initialized = await execution.InitializeAsync(
            seeded.Project.Id,
            [new ExecutionStageDefinition("Stage 1", "Delivery", 500_000, "IRR")],
            seeded.Planner.ExternalSubject,
            "impact-init",
            "127.0.0.1");
        Assert.True(initialized.Succeeded);
        var stage = Assert.Single(initialized.Plan!.Stages);

        var release = await controls.ReleaseDisbursementAsync(
            seeded.Project.Id, stage.StageId, 300_000, "IRR", "impact-stage-release",
            seeded.Finance.ExternalSubject, "impact-release", "127.0.0.1");
        Assert.True(release.Succeeded);

        var expense = await controls.SubmitExpenseAsync(
            seeded.Project.Id, stage.StageId, 50_000, "IRR", "training", "Training delivery", "evidence://training",
            seeded.Member.ExternalSubject, "impact-expense", "127.0.0.1");
        var expenseView = Assert.Single(expense.State!.Expenses);
        var expenseReview = await controls.ReviewExpenseAsync(
            seeded.Project.Id, stage.StageId, expenseView.ExpenseId, "approve", "Verified",
            seeded.Finance.ExternalSubject, "impact-expense-review", "127.0.0.1");
        Assert.True(expenseReview.Succeeded);

        var risk = await controls.ReportRiskAsync(
            seeded.Project.Id, stage.StageId, ExecutionRiskSeverities.High, "Attendance", "Attendance may miss target.",
            seeded.Member.ExternalSubject, "impact-risk", "127.0.0.1");
        var riskView = Assert.Single(risk.State!.Risks);

        var progress = await execution.SubmitReportAsync(
            seeded.Project.Id, stage.StageId, "Stage work completed.", seeded.Member.ExternalSubject,
            "impact-progress", "127.0.0.1");
        var progressView = Assert.Single(progress.Plan!.Stages[0].Reports);
        var progressApproved = await execution.ReviewReportAsync(
            seeded.Project.Id, stage.StageId, progressView.ReportId, "approve", "Execution evidence accepted",
            seeded.Supervisor.ExternalSubject, "impact-progress-approve", "127.0.0.1");
        Assert.True(progressApproved.Succeeded);
        Assert.Equal(ExecutionStageStatuses.Completed, progressApproved.Plan!.Stages[0].Status);

        var outsider = await impact.SubmitAsync(
            seeded.Project.Id, stage.StageId, "Unauthorized", "Summary", "Method", null,
            [new ExecutionImpactMetricDefinition("people_trained", "People trained", "person", ExecutionImpactMetricAggregations.Sum, 100, 110)],
            seeded.Outsider.ExternalSubject, "impact-outsider", "127.0.0.1");
        Assert.False(outsider.Succeeded);
        Assert.Equal("execution_impact_forbidden", outsider.ErrorCode);

        var submitted = await impact.SubmitAsync(
            seeded.Project.Id, stage.StageId, "Stage 1 impact", "Impact summary", "Verified attendance records", "Golestan",
            [
                new ExecutionImpactMetricDefinition("people_trained", "People trained", "person", ExecutionImpactMetricAggregations.Sum, 100, 110),
                new ExecutionImpactMetricDefinition("satisfaction", "Participant satisfaction", "percent", ExecutionImpactMetricAggregations.Average, 80, 87)
            ],
            seeded.Member.ExternalSubject, "impact-submit", "127.0.0.1");
        Assert.True(submitted.Succeeded);
        var report = Assert.Single(submitted.State!.Reports);
        Assert.Equal(ExecutionImpactReportStatuses.Submitted, report.Status);
        Assert.Empty(await impact.GetPublicReportsAsync());

        var selfReview = await impact.ReviewAsync(
            seeded.Project.Id, stage.StageId, report.ImpactReportId, "approve", "Self review",
            seeded.Member.ExternalSubject, "impact-self-review", "127.0.0.1");
        Assert.False(selfReview.Succeeded);
        Assert.Equal("execution_impact_self_review_forbidden", selfReview.ErrorCode);

        var openRiskReview = await impact.ReviewAsync(
            seeded.Project.Id, stage.StageId, report.ImpactReportId, "approve", "Looks good",
            seeded.Supervisor.ExternalSubject, "impact-open-risk-review", "127.0.0.1");
        Assert.False(openRiskReview.Succeeded);
        Assert.Equal("execution_impact_open_risks", openRiskReview.ErrorCode);

        var riskClosed = await controls.TransitionRiskAsync(
            seeded.Project.Id, stage.StageId, riskView.RiskId, "close", "Attendance target was exceeded.",
            seeded.Supervisor.ExternalSubject, "impact-risk-close", "127.0.0.1");
        Assert.True(riskClosed.Succeeded);

        var approved = await impact.ReviewAsync(
            seeded.Project.Id, stage.StageId, report.ImpactReportId, "approve", "Impact evidence accepted",
            seeded.Supervisor.ExternalSubject, "impact-review", "127.0.0.1");
        Assert.True(approved.Succeeded);
        Assert.Equal(ExecutionImpactReportStatuses.Approved, Assert.Single(approved.State!.Reports).Status);
        Assert.Empty(await impact.GetPublicReportsAsync());

        var published = await impact.PublishAsync(
            seeded.Project.Id, stage.StageId, report.ImpactReportId,
            seeded.Planner.ExternalSubject, "impact-publish", "127.0.0.1");
        Assert.True(published.Succeeded);
        var publishedReport = Assert.Single(published.State!.Reports);
        Assert.Equal(ExecutionImpactReportStatuses.Published, publishedReport.Status);
        var financial = Assert.Single(publishedReport.FinancialSnapshots);
        Assert.Equal("IRR", financial.Currency);
        Assert.Equal(50_000, financial.ApprovedExpenseMinor);
        Assert.Equal(300_000, financial.ReleasedMinor);

        var publicReports = await impact.GetPublicReportsAsync();
        var publicReport = Assert.Single(publicReports);
        Assert.Equal(report.ImpactReportId, publicReport.ImpactReportId);
        Assert.Equal(2, publicReport.Metrics.Count);

        var overview = await impact.GetPublicOverviewAsync();
        Assert.Equal(1, overview.ProjectCount);
        Assert.Equal(1, overview.ReportCount);
        Assert.Equal(110m, overview.Metrics.Single(x => x.Key == "people_trained").ActualValue);
        Assert.Equal(87m, overview.Metrics.Single(x => x.Key == "satisfaction").ActualValue);
        Assert.Equal(1, await db.OutboxMessages.CountAsync(x => x.EventType == IntegrationEventTypes.ExecutionImpactPublished));
        Assert.Equal(1, await db.AuditEvents.CountAsync(x => x.Action == "execution.impact.published"));

        db.ChangeTracker.Clear();
        var stored = await db.Set<ExecutionImpactReport>().SingleAsync(x => x.Id == report.ImpactReportId);
        db.Entry(stored).Property(nameof(ExecutionImpactReport.Summary)).CurrentValue = "tampered";
        await Assert.ThrowsAsync<InvalidOperationException>(() => db.SaveChangesAsync());
        db.ChangeTracker.Clear();

        var correction = await impact.SubmitAsync(
            seeded.Project.Id, stage.StageId, "Stage 1 corrected impact", "Corrected summary", "Verified attendance records", "Golestan",
            [new ExecutionImpactMetricDefinition("people_trained", "People trained", "person", ExecutionImpactMetricAggregations.Sum, 100, 111)],
            seeded.Member.ExternalSubject, "impact-correction", "127.0.0.1");
        Assert.True(correction.Succeeded);
        var correctionReport = correction.State!.Reports.Single(x => x.AttemptNumber == 2);
        Assert.Equal(report.ImpactReportId, correctionReport.SupersedesImpactReportId);
        Assert.Equal(report.ImpactReportId, Assert.Single(await impact.GetPublicReportsAsync()).ImpactReportId);
    }

    [Fact]
    public async Task Closeout_requires_published_impact_and_is_append_only()
    {
        await using var db = CreateDbContext();
        var seeded = await SeedScenarioAsync(db, "closeout");
        var execution = CreateExecutionService(db);
        var impact = CreateImpactService(db);

        var initialized = await execution.InitializeAsync(
            seeded.Project.Id,
            [new ExecutionStageDefinition("Only stage", "Complete project")],
            seeded.Planner.ExternalSubject, "closeout-init", "127.0.0.1");
        var stage = Assert.Single(initialized.Plan!.Stages);
        var progress = await execution.SubmitReportAsync(
            seeded.Project.Id, stage.StageId, "Complete", seeded.Member.ExternalSubject,
            "closeout-progress", "127.0.0.1");
        var progressView = Assert.Single(progress.Plan!.Stages[0].Reports);
        var completed = await execution.ReviewReportAsync(
            seeded.Project.Id, stage.StageId, progressView.ReportId, "approve", "Accepted",
            seeded.Supervisor.ExternalSubject, "closeout-progress-review", "127.0.0.1");
        Assert.True(completed.Succeeded);

        var premature = await impact.CloseoutAsync(
            seeded.Project.Id, "Too early", seeded.Supervisor.ExternalSubject,
            "closeout-premature", "127.0.0.1");
        Assert.False(premature.Succeeded);
        Assert.Equal("execution_closeout_missing_impact", premature.ErrorCode);

        var submitted = await impact.SubmitAsync(
            seeded.Project.Id, stage.StageId, "Final impact", "Final summary", "Final methodology", null,
            [new ExecutionImpactMetricDefinition("beneficiaries", "Beneficiaries", "person", ExecutionImpactMetricAggregations.Sum, 10, 12)],
            seeded.Member.ExternalSubject, "closeout-impact", "127.0.0.1");
        var report = Assert.Single(submitted.State!.Reports);
        await impact.ReviewAsync(
            seeded.Project.Id, stage.StageId, report.ImpactReportId, "approve", "Approved",
            seeded.Supervisor.ExternalSubject, "closeout-impact-review", "127.0.0.1");
        await impact.PublishAsync(
            seeded.Project.Id, stage.StageId, report.ImpactReportId,
            seeded.Planner.ExternalSubject, "closeout-impact-publish", "127.0.0.1");

        var closed = await impact.CloseoutAsync(
            seeded.Project.Id, "All stages and public reporting are complete.", seeded.Supervisor.ExternalSubject,
            "closeout-final", "127.0.0.1");
        Assert.True(closed.Succeeded);
        Assert.NotNull(closed.State!.Closeout);
        Assert.Equal(1, await db.OutboxMessages.CountAsync(x => x.EventType == IntegrationEventTypes.ExecutionCompleted));
        Assert.Equal(1, await db.AuditEvents.CountAsync(x => x.Action == "execution.closed"));

        var duplicate = await impact.CloseoutAsync(
            seeded.Project.Id, "Duplicate", seeded.Supervisor.ExternalSubject,
            "closeout-duplicate", "127.0.0.1");
        Assert.False(duplicate.Succeeded);
        Assert.Equal("execution_already_closed", duplicate.ErrorCode);

        var postCloseoutImpact = await impact.SubmitAsync(
            seeded.Project.Id, stage.StageId, "After closeout", "No", "No", null,
            [new ExecutionImpactMetricDefinition("x", "X", "count", ExecutionImpactMetricAggregations.Sum, null, 1)],
            seeded.Member.ExternalSubject, "after-closeout", "127.0.0.1");
        Assert.False(postCloseoutImpact.Succeeded);
        Assert.Equal("execution_closed", postCloseoutImpact.ErrorCode);

        db.ChangeTracker.Clear();
        var stored = await db.Set<ExecutionCloseout>().SingleAsync(x => x.ProjectId == seeded.Project.Id);
        db.Entry(stored).Property(nameof(ExecutionCloseout.Note)).CurrentValue = "tampered";
        await Assert.ThrowsAsync<InvalidOperationException>(() => db.SaveChangesAsync());
    }

    private ExecutionService CreateExecutionService(MoonDbContext db) =>
        new(db, new AuditWriter(db), new OrganizationAccessService(db));

    private ExecutionControlService CreateControlService(MoonDbContext db) =>
        new(db, new AuditWriter(db), new OrganizationAccessService(db), new OutboxWriter(db));

    private ExecutionImpactService CreateImpactService(MoonDbContext db) =>
        new(db, new AuditWriter(db), new OrganizationAccessService(db), new OutboxWriter(db));

    private async Task<SeededScenario> SeedScenarioAsync(MoonDbContext db, string suffix)
    {
        var organization = new Organization { Name = $"Phase3 Impact {suffix}", Type = "startup" };
        var planner = new AppUser { ExternalSubject = $"impact-planner-{suffix}", DisplayName = "Planner" };
        var member = new AppUser { ExternalSubject = $"impact-member-{suffix}", DisplayName = "Member" };
        var finance = new AppUser { ExternalSubject = $"impact-finance-{suffix}", DisplayName = "Finance" };
        var supervisor = new AppUser { ExternalSubject = $"impact-supervisor-{suffix}", DisplayName = "Supervisor" };
        var outsider = new AppUser { ExternalSubject = $"impact-outsider-{suffix}", DisplayName = "Outsider" };
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
            IdempotencyKey = $"impact-opening-{Guid.NewGuid():N}",
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
