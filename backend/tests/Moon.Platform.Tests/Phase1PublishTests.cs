using Microsoft.EntityFrameworkCore;
using Moon.Platform.Api.Common.Auditing;
using Moon.Platform.Api.Infrastructure.Persistence;
using Moon.Platform.Api.Modules.Evaluations;
using Moon.Platform.Api.Modules.Identity;
using Moon.Platform.Api.Modules.Projects;
using Xunit;

namespace Moon.Platform.Tests;

public sealed class Phase1PublishTests : IAsyncLifetime
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
    public async Task Only_approved_locked_and_validly_evaluated_project_can_be_published_once_and_then_becomes_immutable()
    {
        await using var db = CreateDbContext();
        var audit = new AuditWriter(db);
        var projects = new ProjectService(db, audit);
        var evaluations = new EvaluationService(db, audit);

        var organization = new Organization { Name = "Phase 1 Publish Startup", Type = "startup" };
        var creator = new AppUser { ExternalSubject = "publish-startup-owner", DisplayName = "Startup Owner" };
        var evaluator = new AppUser { ExternalSubject = "publish-evaluator", DisplayName = "Evaluator" };
        var publisher = new AppUser { ExternalSubject = "publish-product-owner", DisplayName = "Product Owner" };
        db.AddRange(organization, creator, evaluator, publisher);
        db.Memberships.Add(new Membership
        {
            UserId = creator.Id,
            OrganizationId = organization.Id,
            RoleId = SystemRoles.StartupId
        });
        await db.SaveChangesAsync();

        var created = await projects.CreateAsync(
            organization.Id,
            "Publishable project",
            "A project must pass the full controlled approval chain before publication.",
            creator.ExternalSubject,
            "publish-create",
            "127.0.0.1");
        Assert.True(created.Succeeded);

        var submitted = await projects.SubmitAsync(
            created.Project!.ProjectId,
            creator.ExternalSubject,
            "publish-submit",
            "127.0.0.1");
        Assert.True(submitted.Succeeded);

        var premature = await projects.PublishAsync(
            submitted.Project!.ProjectId,
            publisher.ExternalSubject,
            "publish-premature",
            "127.0.0.1");
        Assert.Equal("project_publish_invalid_state", premature.ErrorCode);

        var assigned = await evaluations.AssignAsync(
            submitted.Project.ProjectId,
            evaluator.ExternalSubject,
            publisher.ExternalSubject,
            "publish-eval-assign",
            "127.0.0.1");
        Assert.True(assigned.Succeeded);

        var conflict = await evaluations.DeclareConflictAsync(
            assigned.Evaluation!.EvaluationId,
            false,
            null,
            evaluator.ExternalSubject,
            "publish-eval-conflict",
            "127.0.0.1");
        Assert.True(conflict.Succeeded);

        var completed = await evaluations.CompleteAsync(
            assigned.Evaluation.EvaluationId,
            EvaluationRecommendations.Approve,
            "The submitted locked version meets the evaluation criteria.",
            evaluator.ExternalSubject,
            "publish-eval-complete",
            "127.0.0.1");
        Assert.True(completed.Succeeded);

        var decision = await evaluations.DecideAsync(
            completed.Evaluation!.EvaluationId,
            ProjectDecisionOutcomes.Approve,
            "Approved for publication after completed conflict-free evaluation.",
            publisher.ExternalSubject,
            "publish-decision",
            "127.0.0.1");
        Assert.True(decision.Succeeded);

        var published = await projects.PublishAsync(
            submitted.Project.ProjectId,
            publisher.ExternalSubject,
            "publish-final",
            "127.0.0.1");
        Assert.True(published.Succeeded);
        Assert.Equal(ProjectStatuses.Published, published.Project!.Status);
        Assert.Equal(publisher.ExternalSubject, published.Project.PublishedBySubject);
        Assert.NotNull(published.Project.PublishedAtUtc);

        var currentVersion = await db.ProjectVersions.SingleAsync(
            x => x.ProjectId == submitted.Project.ProjectId && x.VersionNumber == submitted.Project.CurrentVersionNumber);
        Assert.True(currentVersion.IsLocked);
        Assert.NotNull(currentVersion.LockedAtUtc);

        var storedEvaluation = await db.ProjectEvaluations.SingleAsync(x => x.Id == decision.Decision!.EvaluationId);
        Assert.Equal(EvaluationStatuses.Completed, storedEvaluation.Status);
        Assert.False(storedEvaluation.HasConflict);
        Assert.Equal(currentVersion.Id, storedEvaluation.ProjectVersionId);

        var storedDecision = await db.ProjectDecisions.SingleAsync(x => x.ProjectId == submitted.Project.ProjectId);
        Assert.Equal(ProjectDecisionOutcomes.Approve, storedDecision.Outcome);

        var secondPublish = await projects.PublishAsync(
            submitted.Project.ProjectId,
            publisher.ExternalSubject,
            "publish-second",
            "127.0.0.1");
        Assert.Equal("project_already_published", secondPublish.ErrorCode);

        var publishAudit = await db.AuditEvents.SingleAsync(x => x.Action == "project.published");
        Assert.Equal(publisher.ExternalSubject, publishAudit.ActorSubject);
        Assert.Equal(submitted.Project.ProjectId.ToString(), publishAudit.ProjectId);

        var storedProject = await db.Projects.SingleAsync(x => x.Id == submitted.Project.ProjectId);
        Assert.Equal(ProjectStatuses.Published, storedProject.Status);
        Assert.Equal(publisher.ExternalSubject, storedProject.PublishedBySubject);
        Assert.NotNull(storedProject.PublishedAtUtc);

        storedProject.Status = ProjectStatuses.Approved;
        await Assert.ThrowsAsync<InvalidOperationException>(() => db.SaveChangesAsync());
    }

    private MoonDbContext CreateDbContext()
    {
        var options = new DbContextOptionsBuilder<MoonDbContext>()
            .UseNpgsql(_connectionString)
            .Options;
        return new MoonDbContext(options);
    }
}
