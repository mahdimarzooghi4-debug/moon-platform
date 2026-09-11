using Microsoft.EntityFrameworkCore;
using Moon.Platform.Api.Common.Auditing;
using Moon.Platform.Api.Infrastructure.Persistence;
using Moon.Platform.Api.Modules.Evaluations;
using Moon.Platform.Api.Modules.Identity;
using Moon.Platform.Api.Modules.Projects;
using Xunit;

namespace Moon.Platform.Tests;

public sealed class Phase1EvaluationTests : IAsyncLifetime
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
    public async Task Conflict_blocks_completion_reassignment_is_allowed_and_final_decision_is_auditable_and_immutable()
    {
        await using var db = CreateDbContext();
        var audit = new AuditWriter(db);
        var projects = new ProjectService(db, audit);
        var evaluations = new EvaluationService(db, audit);

        var organization = new Organization { Name = "Phase 1 Evaluation Startup", Type = "startup" };
        var creator = new AppUser { ExternalSubject = "startup-owner", DisplayName = "Startup Owner" };
        var evaluatorOne = new AppUser { ExternalSubject = "evaluator-one", DisplayName = "Evaluator One" };
        var evaluatorTwo = new AppUser { ExternalSubject = "evaluator-two", DisplayName = "Evaluator Two" };
        var decisionMaker = new AppUser { ExternalSubject = "product-owner", DisplayName = "Product Owner" };
        db.AddRange(organization, creator, evaluatorOne, evaluatorTwo, decisionMaker);
        db.Memberships.Add(new Membership
        {
            UserId = creator.Id,
            OrganizationId = organization.Id,
            RoleId = SystemRoles.StartupId
        });
        await db.SaveChangesAsync();

        var created = await projects.CreateAsync(
            organization.Id,
            "Project for evaluation",
            "A submitted project must pass conflict-aware evaluation before decision.",
            creator.ExternalSubject,
            "eval-project-create",
            "127.0.0.1");
        Assert.True(created.Succeeded);

        var submitted = await projects.SubmitAsync(
            created.Project!.ProjectId,
            creator.ExternalSubject,
            "eval-project-submit",
            "127.0.0.1");
        Assert.True(submitted.Succeeded);
        Assert.Equal(ProjectStatuses.Submitted, submitted.Project!.Status);

        var firstAssignment = await evaluations.AssignAsync(
            submitted.Project.ProjectId,
            evaluatorOne.ExternalSubject,
            decisionMaker.ExternalSubject,
            "eval-assign-one",
            "127.0.0.1");
        Assert.True(firstAssignment.Succeeded);

        var incompleteDecision = await evaluations.DecideAsync(
            firstAssignment.Evaluation!.EvaluationId,
            ProjectDecisionOutcomes.Approve,
            "Should not be accepted yet.",
            decisionMaker.ExternalSubject,
            "eval-early-decision",
            "127.0.0.1");
        Assert.Equal("decision_evaluation_incomplete", incompleteDecision.ErrorCode);

        var conflict = await evaluations.DeclareConflictAsync(
            firstAssignment.Evaluation.EvaluationId,
            true,
            "Prior advisory relationship with the applicant.",
            evaluatorOne.ExternalSubject,
            "eval-conflict",
            "127.0.0.1");
        Assert.True(conflict.Succeeded);
        Assert.Equal(EvaluationStatuses.ConflictDeclared, conflict.Evaluation!.Status);

        var blockedCompletion = await evaluations.CompleteAsync(
            conflict.Evaluation.EvaluationId,
            EvaluationRecommendations.Approve,
            "This completion must be blocked.",
            evaluatorOne.ExternalSubject,
            "eval-blocked-complete",
            "127.0.0.1");
        Assert.Equal("evaluation_conflict_blocks_completion", blockedCompletion.ErrorCode);

        var secondAssignment = await evaluations.AssignAsync(
            submitted.Project.ProjectId,
            evaluatorTwo.ExternalSubject,
            decisionMaker.ExternalSubject,
            "eval-assign-two",
            "127.0.0.1");
        Assert.True(secondAssignment.Succeeded);
        Assert.NotEqual(firstAssignment.Evaluation.EvaluationId, secondAssignment.Evaluation!.EvaluationId);

        var cleared = await evaluations.DeclareConflictAsync(
            secondAssignment.Evaluation.EvaluationId,
            false,
            null,
            evaluatorTwo.ExternalSubject,
            "eval-no-conflict",
            "127.0.0.1");
        Assert.True(cleared.Succeeded);
        Assert.False(cleared.Evaluation!.HasConflict);

        var completed = await evaluations.CompleteAsync(
            secondAssignment.Evaluation.EvaluationId,
            EvaluationRecommendations.Approve,
            "Eligibility and submitted evidence satisfy the evaluation criteria.",
            evaluatorTwo.ExternalSubject,
            "eval-complete",
            "127.0.0.1");
        Assert.True(completed.Succeeded);
        Assert.Equal(EvaluationStatuses.Completed, completed.Evaluation!.Status);

        var selfDecision = await evaluations.DecideAsync(
            completed.Evaluation.EvaluationId,
            ProjectDecisionOutcomes.Approve,
            "Evaluator must not decide their own evaluation.",
            evaluatorTwo.ExternalSubject,
            "eval-self-decision",
            "127.0.0.1");
        Assert.Equal("decision_separation_of_duties", selfDecision.ErrorCode);

        var finalDecision = await evaluations.DecideAsync(
            completed.Evaluation.EvaluationId,
            ProjectDecisionOutcomes.Approve,
            "Approved after completed conflict-free evaluation.",
            decisionMaker.ExternalSubject,
            "eval-final-decision",
            "127.0.0.1");
        Assert.True(finalDecision.Succeeded);
        Assert.Equal(ProjectDecisionOutcomes.Approve, finalDecision.Decision!.Outcome);
        Assert.Equal(decisionMaker.ExternalSubject, finalDecision.Decision.DecidedBySubject);
        Assert.False(string.IsNullOrWhiteSpace(finalDecision.Decision.Reason));

        var storedProject = await db.Projects.SingleAsync(x => x.Id == submitted.Project.ProjectId);
        Assert.Equal(ProjectStatuses.Approved, storedProject.Status);
        Assert.NotNull(storedProject.ApprovedAtUtc);

        var storedDecision = await db.ProjectDecisions.SingleAsync(x => x.ProjectId == storedProject.Id);
        Assert.Equal(finalDecision.Decision.DecisionId, storedDecision.Id);
        Assert.NotEqual(default, storedDecision.DecidedAtUtc);

        var auditActions = await db.AuditEvents.Select(x => x.Action).ToListAsync();
        Assert.Contains("evaluation.assigned", auditActions);
        Assert.Contains("evaluation.conflict.declared", auditActions);
        Assert.Contains("evaluation.conflict.cleared", auditActions);
        Assert.Contains("evaluation.completed", auditActions);
        Assert.Contains("project.decision.recorded", auditActions);

        storedDecision.Reason = "mutated";
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
