using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Moon.Platform.Api.Common.Auditing;
using Moon.Platform.Api.Common.Authorization;
using Moon.Platform.Api.Infrastructure.Persistence;
using Moon.Platform.Api.Modules.Execution;
using Moon.Platform.Api.Modules.Funding;
using Moon.Platform.Api.Modules.Identity;
using Moon.Platform.Api.Modules.Projects;
using Xunit;

namespace Moon.Platform.Tests;

public sealed class Phase3ExecutionReportingTests : IAsyncLifetime
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
    public async Task Approved_report_is_required_before_next_stage_can_accept_work()
    {
        await using var db = CreateDbContext();
        var service = CreateService(db);
        var seeded = await SeedPublishedProjectAsync(db);

        var initialized = await service.InitializeAsync(
            seeded.Project.Id,
            [
                new ExecutionStageDefinition("Stage 1", "First delivery milestone"),
                new ExecutionStageDefinition("Stage 2", "Second delivery milestone"),
                new ExecutionStageDefinition("Stage 3", "Final delivery milestone")
            ],
            seeded.Planner.ExternalSubject,
            "execution-init",
            "127.0.0.1");

        Assert.True(initialized.Succeeded);
        Assert.Collection(
            initialized.Plan!.Stages,
            stage => Assert.Equal(ExecutionStageStatuses.Active, stage.Status),
            stage => Assert.Equal(ExecutionStageStatuses.Blocked, stage.Status),
            stage => Assert.Equal(ExecutionStageStatuses.Blocked, stage.Status));

        var stage1 = initialized.Plan.Stages[0];
        var stage2 = initialized.Plan.Stages[1];
        var stage3 = initialized.Plan.Stages[2];

        var outsiderReport = await service.SubmitReportAsync(
            seeded.Project.Id,
            stage1.StageId,
            "Outsider must not be able to report.",
            seeded.Outsider.ExternalSubject,
            "execution-outsider",
            "127.0.0.1");
        Assert.False(outsiderReport.Succeeded);
        Assert.Equal("execution_report_forbidden", outsiderReport.ErrorCode);

        var blockedReport = await service.SubmitReportAsync(
            seeded.Project.Id,
            stage2.StageId,
            "This must remain blocked until stage one is approved.",
            seeded.Member.ExternalSubject,
            "execution-blocked",
            "127.0.0.1");
        Assert.False(blockedReport.Succeeded);
        Assert.Equal("execution_stage_blocked", blockedReport.ErrorCode);

        var submitted1 = await service.SubmitReportAsync(
            seeded.Project.Id,
            stage1.StageId,
            "Stage one delivery completed; evidence is ready for review.",
            seeded.Member.ExternalSubject,
            "execution-report-1",
            "127.0.0.1");
        Assert.True(submitted1.Succeeded);
        Assert.Equal(ExecutionStageStatuses.ReportSubmitted, submitted1.Plan!.Stages[0].Status);
        Assert.Equal(ExecutionStageStatuses.Blocked, submitted1.Plan.Stages[1].Status);
        var report1 = Assert.Single(submitted1.Plan.Stages[0].Reports);
        Assert.Equal(1, report1.AttemptNumber);
        Assert.Equal(ProgressReportStatuses.Submitted, report1.Status);

        var rejected = await service.ReviewReportAsync(
            seeded.Project.Id,
            stage1.StageId,
            report1.ReportId,
            "reject",
            "Evidence is incomplete and must be resubmitted.",
            seeded.Supervisor.ExternalSubject,
            "execution-review-reject",
            "127.0.0.1");
        Assert.True(rejected.Succeeded);
        Assert.Equal(ExecutionStageStatuses.Active, rejected.Plan!.Stages[0].Status);
        Assert.Equal(ExecutionStageStatuses.Blocked, rejected.Plan.Stages[1].Status);
        Assert.Equal(ProgressReportStatuses.Rejected, rejected.Plan.Stages[0].Reports[0].Status);

        db.ChangeTracker.Clear();
        var immutableRejected = await db.Set<ProgressReport>().SingleAsync(x => x.Id == report1.ReportId);
        db.Entry(immutableRejected).Property(nameof(ProgressReport.Summary)).CurrentValue = "tampered";
        await Assert.ThrowsAsync<InvalidOperationException>(() => db.SaveChangesAsync());
        db.ChangeTracker.Clear();

        var submitted2 = await service.SubmitReportAsync(
            seeded.Project.Id,
            stage1.StageId,
            "Stage one evidence has been corrected and resubmitted.",
            seeded.Member.ExternalSubject,
            "execution-report-2",
            "127.0.0.1");
        Assert.True(submitted2.Succeeded);
        var report2 = submitted2.Plan!.Stages[0].Reports.Single(x => x.AttemptNumber == 2);

        var approved1 = await service.ReviewReportAsync(
            seeded.Project.Id,
            stage1.StageId,
            report2.ReportId,
            "approve",
            "Evidence verified.",
            seeded.Supervisor.ExternalSubject,
            "execution-review-approve-1",
            "127.0.0.1");
        Assert.True(approved1.Succeeded);
        Assert.Equal(ExecutionStageStatuses.Completed, approved1.Plan!.Stages[0].Status);
        Assert.Equal(ExecutionStageStatuses.Active, approved1.Plan.Stages[1].Status);
        Assert.Equal(ExecutionStageStatuses.Blocked, approved1.Plan.Stages[2].Status);

        var prematureStage3 = await service.SubmitReportAsync(
            seeded.Project.Id,
            stage3.StageId,
            "Stage three cannot report while stage two is still active.",
            seeded.Member.ExternalSubject,
            "execution-stage3-blocked",
            "127.0.0.1");
        Assert.False(prematureStage3.Succeeded);
        Assert.Equal("execution_stage_blocked", prematureStage3.ErrorCode);

        var submittedStage2 = await service.SubmitReportAsync(
            seeded.Project.Id,
            stage2.StageId,
            "Stage two milestone is complete.",
            seeded.Member.ExternalSubject,
            "execution-stage2-report",
            "127.0.0.1");
        Assert.True(submittedStage2.Succeeded);
        var stage2Report = Assert.Single(submittedStage2.Plan!.Stages[1].Reports);

        var approvedStage2 = await service.ReviewReportAsync(
            seeded.Project.Id,
            stage2.StageId,
            stage2Report.ReportId,
            "approve",
            "Stage two verified.",
            seeded.Supervisor.ExternalSubject,
            "execution-stage2-approve",
            "127.0.0.1");
        Assert.True(approvedStage2.Succeeded);
        Assert.Equal(ExecutionStageStatuses.Completed, approvedStage2.Plan!.Stages[1].Status);
        Assert.Equal(ExecutionStageStatuses.Active, approvedStage2.Plan.Stages[2].Status);

        db.ChangeTracker.Clear();
        var completedStage = await db.Set<ExecutionStage>().SingleAsync(x => x.Id == stage1.StageId);
        completedStage.Status = ExecutionStageStatuses.Active;
        await Assert.ThrowsAsync<InvalidOperationException>(() => db.SaveChangesAsync());
        db.ChangeTracker.Clear();

        Assert.Equal(1, await db.AuditEvents.CountAsync(x => x.Action == "execution.initialized"));
        Assert.Equal(3, await db.AuditEvents.CountAsync(x => x.Action == "execution.report.submitted"));
        Assert.Equal(1, await db.AuditEvents.CountAsync(x => x.Action == "execution.report.rejected"));
        Assert.Equal(2, await db.AuditEvents.CountAsync(x => x.Action == "execution.report.approved"));
        Assert.Equal(3, await db.AuditEvents.CountAsync(x => x.Action == "execution.stage.activated"));
    }

    [Fact]
    public async Task Execution_cannot_initialize_before_project_publication_or_twice()
    {
        await using var db = CreateDbContext();
        var service = CreateService(db);
        var organization = new Organization { Name = "Execution Draft Org", Type = "startup" };
        var planner = new AppUser { ExternalSubject = "execution-draft-planner", DisplayName = "Planner" };
        var draft = new Project
        {
            OrganizationId = organization.Id,
            CreatedBySubject = planner.ExternalSubject,
            Status = ProjectStatuses.Draft
        };
        db.AddRange(organization, planner, draft);
        await db.SaveChangesAsync();

        var beforePublish = await service.InitializeAsync(
            draft.Id,
            [new ExecutionStageDefinition("Stage", "Blocked before publish")],
            planner.ExternalSubject,
            "execution-before-publish",
            "127.0.0.1");
        Assert.False(beforePublish.Succeeded);
        Assert.Equal("execution_project_not_published", beforePublish.ErrorCode);

        var seeded = await SeedPublishedProjectAsync(db, "second");
        var first = await service.InitializeAsync(
            seeded.Project.Id,
            [new ExecutionStageDefinition("Stage", "One-time plan")],
            seeded.Planner.ExternalSubject,
            "execution-first-init",
            "127.0.0.1");
        Assert.True(first.Succeeded);

        var duplicate = await service.InitializeAsync(
            seeded.Project.Id,
            [new ExecutionStageDefinition("Replacement", "Must not replace the locked plan")],
            seeded.Planner.ExternalSubject,
            "execution-duplicate-init",
            "127.0.0.1");
        Assert.False(duplicate.Succeeded);
        Assert.Equal("execution_already_initialized", duplicate.ErrorCode);
    }

    private ExecutionService CreateService(MoonDbContext db)
        => new(db, new AuditWriter(db), new OrganizationAccessService(db));

    private async Task<SeededExecution> SeedPublishedProjectAsync(MoonDbContext db, string suffix = "primary")
    {
        var organization = new Organization { Name = $"Execution Org {suffix}", Type = "startup" };
        var planner = new AppUser { ExternalSubject = $"execution-planner-{suffix}", DisplayName = "Planner" };
        var member = new AppUser { ExternalSubject = $"execution-member-{suffix}", DisplayName = "Executor" };
        var supervisor = new AppUser { ExternalSubject = $"execution-supervisor-{suffix}", DisplayName = "Supervisor" };
        var outsider = new AppUser { ExternalSubject = $"execution-outsider-{suffix}", DisplayName = "Outsider" };
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

        db.AddRange(organization, planner, member, supervisor, outsider, project, membership);
        await db.SaveChangesAsync();
        return new SeededExecution(project, planner, member, supervisor, outsider);
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

    private sealed record SeededExecution(
        Project Project,
        AppUser Planner,
        AppUser Member,
        AppUser Supervisor,
        AppUser Outsider);
}
