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

public sealed class Phase3FinalizationTests : IAsyncLifetime
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
    public async Task Closeout_seals_execution_and_published_impact_children()
    {
        await using var db = CreateDbContext();
        var seeded = await SeedScenarioAsync(db);
        var execution = new ExecutionService(db, new AuditWriter(db), new OrganizationAccessService(db));
        var controls = new ExecutionControlService(db, new AuditWriter(db), new OrganizationAccessService(db), new OutboxWriter(db));
        var impact = new ExecutionImpactService(db, new AuditWriter(db), new OrganizationAccessService(db), new OutboxWriter(db));

        var initialized = await execution.InitializeAsync(
            seeded.Project.Id,
            [new ExecutionStageDefinition("Final stage", "Complete execution")],
            seeded.Planner.ExternalSubject,
            "finalize-init",
            "127.0.0.1");
        Assert.True(initialized.Succeeded);
        var stage = Assert.Single(initialized.Plan!.Stages);

        var progress = await execution.SubmitReportAsync(
            seeded.Project.Id,
            stage.StageId,
            "Execution complete.",
            seeded.Member.ExternalSubject,
            "finalize-progress",
            "127.0.0.1");
        var progressReport = Assert.Single(progress.Plan!.Stages[0].Reports);
        var completed = await execution.ReviewReportAsync(
            seeded.Project.Id,
            stage.StageId,
            progressReport.ReportId,
            "approve",
            "Accepted",
            seeded.Supervisor.ExternalSubject,
            "finalize-progress-review",
            "127.0.0.1");
        Assert.True(completed.Succeeded);

        var submitted = await impact.SubmitAsync(
            seeded.Project.Id,
            stage.StageId,
            "Final impact",
            "Final public impact summary",
            "Verified final records",
            null,
            [new ExecutionImpactMetricDefinition("beneficiaries", "Beneficiaries", "person", ExecutionImpactMetricAggregations.Sum, 10, 12)],
            seeded.Member.ExternalSubject,
            "finalize-impact-submit",
            "127.0.0.1");
        Assert.True(submitted.Succeeded);
        var impactReport = Assert.Single(submitted.State!.Reports);

        var approved = await impact.ReviewAsync(
            seeded.Project.Id,
            stage.StageId,
            impactReport.ImpactReportId,
            "approve",
            "Evidence accepted",
            seeded.Supervisor.ExternalSubject,
            "finalize-impact-review",
            "127.0.0.1");
        Assert.True(approved.Succeeded);

        var published = await impact.PublishAsync(
            seeded.Project.Id,
            stage.StageId,
            impactReport.ImpactReportId,
            seeded.Planner.ExternalSubject,
            "finalize-impact-publish",
            "127.0.0.1");
        Assert.True(published.Succeeded);

        var closed = await impact.CloseoutAsync(
            seeded.Project.Id,
            "Execution and public impact reporting are final.",
            seeded.Supervisor.ExternalSubject,
            "finalize-closeout",
            "127.0.0.1");
        Assert.True(closed.Succeeded);
        Assert.NotNull(closed.State!.Closeout);
        Assert.Equal(1, await db.Set<ExecutionCloseout>().CountAsync(x => x.ProjectId == seeded.Project.Id));
        Assert.Equal(1, await db.OutboxMessages.CountAsync(x => x.EventType == IntegrationEventTypes.ExecutionCompleted));

        db.ChangeTracker.Clear();
        var postCloseoutImpact = await impact.SubmitAsync(
            seeded.Project.Id,
            stage.StageId,
            "Late impact",
            "Must not be accepted",
            "None",
            null,
            [new ExecutionImpactMetricDefinition("late", "Late", "count", ExecutionImpactMetricAggregations.Sum, null, 1)],
            seeded.Member.ExternalSubject,
            "finalize-late-impact",
            "127.0.0.1");
        Assert.False(postCloseoutImpact.Succeeded);
        Assert.Equal("execution_closed", postCloseoutImpact.ErrorCode);

        await Assert.ThrowsAsync<InvalidOperationException>(() => controls.FreezeAsync(
            seeded.Project.Id,
            "Must remain sealed",
            seeded.Supervisor.ExternalSubject,
            "finalize-late-freeze",
            "127.0.0.1"));
        db.ChangeTracker.Clear();
        Assert.Equal(0, await db.Set<ExecutionFreezeEvent>().CountAsync(x => x.ProjectId == seeded.Project.Id));

        db.Set<ExecutionExpense>().Add(new ExecutionExpense
        {
            ProjectId = seeded.Project.Id,
            StageId = stage.StageId,
            AmountMinor = 1,
            Currency = "IRR",
            Category = "late",
            Description = "Must not persist",
            SubmittedBySubject = seeded.Member.ExternalSubject
        });
        await Assert.ThrowsAsync<InvalidOperationException>(() => db.SaveChangesAsync());
        db.ChangeTracker.Clear();
        Assert.Equal(0, await db.Set<ExecutionExpense>().CountAsync(x => x.ProjectId == seeded.Project.Id));

        db.Set<ExecutionImpactMetric>().Add(new ExecutionImpactMetric
        {
            ImpactReportId = impactReport.ImpactReportId,
            Key = "late_metric",
            Label = "Late metric",
            Unit = "count",
            Aggregation = ExecutionImpactMetricAggregations.Sum,
            ActualValue = 1,
            SortOrder = 2
        });
        await Assert.ThrowsAsync<InvalidOperationException>(() => db.SaveChangesAsync());
        db.ChangeTracker.Clear();

        db.Set<ExecutionImpactFinancialSnapshot>().Add(new ExecutionImpactFinancialSnapshot
        {
            ImpactReportId = impactReport.ImpactReportId,
            Currency = "IRR",
            ApprovedExpenseMinor = 1,
            ReleasedMinor = 1
        });
        await Assert.ThrowsAsync<InvalidOperationException>(() => db.SaveChangesAsync());
        db.ChangeTracker.Clear();

        var publicReport = Assert.Single(await impact.GetPublicReportsAsync());
        Assert.Equal(impactReport.ImpactReportId, publicReport.ImpactReportId);
        Assert.Single(publicReport.Metrics);
        Assert.Empty(publicReport.FinancialSnapshots);
        Assert.Equal(1, await db.AuditEvents.CountAsync(x => x.Action == "execution.closed"));
    }

    private async Task<SeededScenario> SeedScenarioAsync(MoonDbContext db)
    {
        var organization = new Organization { Name = "Phase 3 Finalization", Type = "startup" };
        var planner = new AppUser { ExternalSubject = "phase3-final-planner", DisplayName = "Planner" };
        var member = new AppUser { ExternalSubject = "phase3-final-member", DisplayName = "Member" };
        var supervisor = new AppUser { ExternalSubject = "phase3-final-supervisor", DisplayName = "Supervisor" };
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

        db.AddRange(organization, planner, member, supervisor, project, membership);
        await db.SaveChangesAsync();
        return new SeededScenario(project, planner, member, supervisor);
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

    private sealed record SeededScenario(Project Project, AppUser Planner, AppUser Member, AppUser Supervisor);
}
