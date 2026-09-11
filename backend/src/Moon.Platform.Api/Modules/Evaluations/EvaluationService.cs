using System.Text.Json;
using Microsoft.EntityFrameworkCore;
using Moon.Platform.Api.Common.Auditing;
using Moon.Platform.Api.Infrastructure.Persistence;
using Moon.Platform.Api.Modules.Projects;

namespace Moon.Platform.Api.Modules.Evaluations;

public interface IEvaluationService
{
    Task<EvaluationOperationResult> AssignAsync(
        Guid projectId,
        string evaluatorSubject,
        string actorSubject,
        string correlationId,
        string? ipAddress,
        CancellationToken cancellationToken = default);

    Task<EvaluationOperationResult> DeclareConflictAsync(
        Guid evaluationId,
        bool hasConflict,
        string? reason,
        string actorSubject,
        string correlationId,
        string? ipAddress,
        CancellationToken cancellationToken = default);

    Task<EvaluationOperationResult> CompleteAsync(
        Guid evaluationId,
        string recommendation,
        string rationale,
        string actorSubject,
        string correlationId,
        string? ipAddress,
        CancellationToken cancellationToken = default);

    Task<EvaluationOperationResult> DecideAsync(
        Guid evaluationId,
        string outcome,
        string reason,
        string actorSubject,
        string correlationId,
        string? ipAddress,
        CancellationToken cancellationToken = default);
}

public sealed class EvaluationService(MoonDbContext dbContext, IAuditWriter auditWriter) : IEvaluationService
{
    public async Task<EvaluationOperationResult> AssignAsync(
        Guid projectId,
        string evaluatorSubject,
        string actorSubject,
        string correlationId,
        string? ipAddress,
        CancellationToken cancellationToken = default)
    {
        evaluatorSubject = evaluatorSubject.Trim();
        if (string.IsNullOrWhiteSpace(evaluatorSubject))
        {
            return EvaluationOperationResult.Failure("evaluation_invalid_evaluator", "Evaluator subject is required.");
        }

        var project = await dbContext.Projects.SingleOrDefaultAsync(x => x.Id == projectId, cancellationToken);
        if (project is null)
        {
            return EvaluationOperationResult.Failure("project_not_found", "Project was not found.");
        }

        if (!string.Equals(project.Status, ProjectStatuses.Submitted, StringComparison.Ordinal))
        {
            return EvaluationOperationResult.Failure("evaluation_invalid_project_state", "Only submitted projects can enter evaluation.");
        }

        var evaluatorExists = await dbContext.Users.AsNoTracking()
            .AnyAsync(x => x.ExternalSubject == evaluatorSubject && x.IsActive, cancellationToken);
        if (!evaluatorExists)
        {
            return EvaluationOperationResult.Failure("evaluation_evaluator_not_found", "Evaluator must be an active synchronized user.");
        }

        var currentVersion = await dbContext.ProjectVersions.AsNoTracking().SingleAsync(
            x => x.ProjectId == project.Id && x.VersionNumber == project.CurrentVersionNumber,
            cancellationToken);
        if (!currentVersion.IsLocked)
        {
            return EvaluationOperationResult.Failure("evaluation_version_not_locked", "Submitted project version must be locked before evaluation.");
        }

        var activeEvaluationExists = await dbContext.ProjectEvaluations.AsNoTracking()
            .AnyAsync(x => x.ProjectId == project.Id && x.Status != EvaluationStatuses.ConflictDeclared, cancellationToken);
        if (activeEvaluationExists)
        {
            return EvaluationOperationResult.Failure("evaluation_already_assigned", "Project already has an active or completed evaluation.");
        }

        var evaluation = new ProjectEvaluation
        {
            ProjectId = project.Id,
            ProjectVersionId = currentVersion.Id,
            EvaluatorSubject = evaluatorSubject,
            AssignedBySubject = actorSubject
        };

        dbContext.ProjectEvaluations.Add(evaluation);
        await dbContext.SaveChangesAsync(cancellationToken);

        await auditWriter.AppendAsync(new AuditWriteRequest(
            actorSubject,
            "evaluation.assigned",
            "project_evaluation",
            evaluation.Id.ToString(),
            correlationId,
            project.OrganizationId.ToString(),
            project.Id.ToString(),
            AfterJson: JsonSerializer.Serialize(new
            {
                EvaluationId = evaluation.Id,
                evaluation.ProjectId,
                evaluation.ProjectVersionId,
                evaluation.EvaluatorSubject,
                evaluation.AssignedBySubject,
                evaluation.AssignedAtUtc
            }),
            IpAddress: ipAddress), cancellationToken);

        return EvaluationOperationResult.EvaluationSuccess(ToView(evaluation));
    }

    public async Task<EvaluationOperationResult> DeclareConflictAsync(
        Guid evaluationId,
        bool hasConflict,
        string? reason,
        string actorSubject,
        string correlationId,
        string? ipAddress,
        CancellationToken cancellationToken = default)
    {
        var evaluation = await dbContext.ProjectEvaluations.SingleOrDefaultAsync(x => x.Id == evaluationId, cancellationToken);
        if (evaluation is null)
        {
            return EvaluationOperationResult.Failure("evaluation_not_found", "Evaluation was not found.");
        }

        if (!string.Equals(evaluation.EvaluatorSubject, actorSubject, StringComparison.Ordinal))
        {
            return EvaluationOperationResult.Failure("evaluation_access_denied", "Only the assigned evaluator can declare conflict of interest.");
        }

        if (evaluation.ConflictDeclaredAtUtc is not null || evaluation.Status == EvaluationStatuses.Completed)
        {
            return EvaluationOperationResult.Failure("evaluation_conflict_already_declared", "Conflict of interest can be declared only once per evaluation assignment.");
        }

        reason = reason?.Trim();
        if (hasConflict && string.IsNullOrWhiteSpace(reason))
        {
            return EvaluationOperationResult.Failure("evaluation_conflict_reason_required", "A reason is required when conflict of interest exists.");
        }

        if (reason is { Length: > 2000 })
        {
            return EvaluationOperationResult.Failure("evaluation_conflict_reason_too_long", "Conflict reason must be at most 2000 characters.");
        }

        var project = await dbContext.Projects.AsNoTracking().SingleAsync(x => x.Id == evaluation.ProjectId, cancellationToken);
        evaluation.HasConflict = hasConflict;
        evaluation.ConflictReason = string.IsNullOrWhiteSpace(reason) ? null : reason;
        evaluation.ConflictDeclaredAtUtc = DateTimeOffset.UtcNow;
        evaluation.Status = hasConflict ? EvaluationStatuses.ConflictDeclared : EvaluationStatuses.InProgress;
        await dbContext.SaveChangesAsync(cancellationToken);

        await auditWriter.AppendAsync(new AuditWriteRequest(
            actorSubject,
            hasConflict ? "evaluation.conflict.declared" : "evaluation.conflict.cleared",
            "project_evaluation",
            evaluation.Id.ToString(),
            correlationId,
            project.OrganizationId.ToString(),
            project.Id.ToString(),
            AfterJson: JsonSerializer.Serialize(new
            {
                evaluation.HasConflict,
                evaluation.ConflictReason,
                evaluation.ConflictDeclaredAtUtc,
                evaluation.Status
            }),
            IpAddress: ipAddress), cancellationToken);

        return EvaluationOperationResult.EvaluationSuccess(ToView(evaluation));
    }

    public async Task<EvaluationOperationResult> CompleteAsync(
        Guid evaluationId,
        string recommendation,
        string rationale,
        string actorSubject,
        string correlationId,
        string? ipAddress,
        CancellationToken cancellationToken = default)
    {
        var evaluation = await dbContext.ProjectEvaluations.SingleOrDefaultAsync(x => x.Id == evaluationId, cancellationToken);
        if (evaluation is null)
        {
            return EvaluationOperationResult.Failure("evaluation_not_found", "Evaluation was not found.");
        }

        if (!string.Equals(evaluation.EvaluatorSubject, actorSubject, StringComparison.Ordinal))
        {
            return EvaluationOperationResult.Failure("evaluation_access_denied", "Only the assigned evaluator can complete the evaluation.");
        }

        if (evaluation.Status == EvaluationStatuses.ConflictDeclared || evaluation.HasConflict == true)
        {
            return EvaluationOperationResult.Failure("evaluation_conflict_blocks_completion", "An evaluation with declared conflict of interest cannot be completed.");
        }

        if (evaluation.ConflictDeclaredAtUtc is null || evaluation.HasConflict != false)
        {
            return EvaluationOperationResult.Failure("evaluation_conflict_declaration_required", "Conflict-of-interest declaration is required before completion.");
        }

        if (evaluation.Status == EvaluationStatuses.Completed)
        {
            return EvaluationOperationResult.Failure("evaluation_already_completed", "Evaluation is already completed.");
        }

        recommendation = recommendation.Trim().ToLowerInvariant();
        if (recommendation is not (EvaluationRecommendations.Approve or EvaluationRecommendations.Reject))
        {
            return EvaluationOperationResult.Failure("evaluation_invalid_recommendation", "Recommendation must be approve or reject.");
        }

        rationale = rationale.Trim();
        if (string.IsNullOrWhiteSpace(rationale) || rationale.Length > 4000)
        {
            return EvaluationOperationResult.Failure("evaluation_invalid_rationale", "Rationale is required and must be at most 4000 characters.");
        }

        var project = await dbContext.Projects.AsNoTracking().SingleAsync(x => x.Id == evaluation.ProjectId, cancellationToken);
        evaluation.Recommendation = recommendation;
        evaluation.Rationale = rationale;
        evaluation.Status = EvaluationStatuses.Completed;
        evaluation.CompletedAtUtc = DateTimeOffset.UtcNow;
        await dbContext.SaveChangesAsync(cancellationToken);

        await auditWriter.AppendAsync(new AuditWriteRequest(
            actorSubject,
            "evaluation.completed",
            "project_evaluation",
            evaluation.Id.ToString(),
            correlationId,
            project.OrganizationId.ToString(),
            project.Id.ToString(),
            AfterJson: JsonSerializer.Serialize(new
            {
                evaluation.Recommendation,
                evaluation.Rationale,
                evaluation.CompletedAtUtc,
                evaluation.Status
            }),
            IpAddress: ipAddress), cancellationToken);

        return EvaluationOperationResult.EvaluationSuccess(ToView(evaluation));
    }

    public async Task<EvaluationOperationResult> DecideAsync(
        Guid evaluationId,
        string outcome,
        string reason,
        string actorSubject,
        string correlationId,
        string? ipAddress,
        CancellationToken cancellationToken = default)
    {
        var evaluation = await dbContext.ProjectEvaluations.AsNoTracking()
            .SingleOrDefaultAsync(x => x.Id == evaluationId, cancellationToken);
        if (evaluation is null)
        {
            return EvaluationOperationResult.Failure("evaluation_not_found", "Evaluation was not found.");
        }

        if (evaluation.Status != EvaluationStatuses.Completed || evaluation.HasConflict != false)
        {
            return EvaluationOperationResult.Failure("decision_evaluation_incomplete", "Decision requires a completed conflict-free evaluation.");
        }

        if (string.Equals(evaluation.EvaluatorSubject, actorSubject, StringComparison.Ordinal))
        {
            return EvaluationOperationResult.Failure("decision_separation_of_duties", "Evaluator cannot record the final decision for the same evaluation.");
        }

        outcome = outcome.Trim().ToLowerInvariant();
        if (outcome is not (ProjectDecisionOutcomes.Approve or ProjectDecisionOutcomes.Reject))
        {
            return EvaluationOperationResult.Failure("decision_invalid_outcome", "Decision outcome must be approve or reject.");
        }

        reason = reason.Trim();
        if (string.IsNullOrWhiteSpace(reason) || reason.Length > 4000)
        {
            return EvaluationOperationResult.Failure("decision_invalid_reason", "Decision reason is required and must be at most 4000 characters.");
        }

        var project = await dbContext.Projects.SingleAsync(x => x.Id == evaluation.ProjectId, cancellationToken);
        if (!string.Equals(project.Status, ProjectStatuses.Submitted, StringComparison.Ordinal))
        {
            return EvaluationOperationResult.Failure("decision_invalid_project_state", "Only submitted projects can receive an evaluation decision.");
        }

        if (await dbContext.ProjectDecisions.AsNoTracking().AnyAsync(x => x.ProjectId == project.Id, cancellationToken))
        {
            return EvaluationOperationResult.Failure("decision_already_recorded", "Project already has a final decision.");
        }

        await using var transaction = await dbContext.Database.BeginTransactionAsync(cancellationToken);

        var decision = new ProjectDecision
        {
            ProjectId = project.Id,
            EvaluationId = evaluation.Id,
            Outcome = outcome,
            Reason = reason,
            DecidedBySubject = actorSubject
        };
        dbContext.ProjectDecisions.Add(decision);
        project.Status = outcome == ProjectDecisionOutcomes.Approve ? ProjectStatuses.Approved : ProjectStatuses.Rejected;
        project.ApprovedAtUtc = outcome == ProjectDecisionOutcomes.Approve ? decision.DecidedAtUtc : null;
        await dbContext.SaveChangesAsync(cancellationToken);

        await auditWriter.AppendAsync(new AuditWriteRequest(
            actorSubject,
            "project.decision.recorded",
            "project_decision",
            decision.Id.ToString(),
            correlationId,
            project.OrganizationId.ToString(),
            project.Id.ToString(),
            BeforeJson: JsonSerializer.Serialize(new { status = ProjectStatuses.Submitted }),
            AfterJson: JsonSerializer.Serialize(new
            {
                DecisionId = decision.Id,
                decision.EvaluationId,
                decision.Outcome,
                decision.Reason,
                decision.DecidedBySubject,
                decision.DecidedAtUtc,
                ProjectStatus = project.Status
            }),
            IpAddress: ipAddress), cancellationToken);

        await transaction.CommitAsync(cancellationToken);
        return EvaluationOperationResult.DecisionSuccess(ToView(decision));
    }

    private static EvaluationView ToView(ProjectEvaluation evaluation) => new(
        evaluation.Id,
        evaluation.ProjectId,
        evaluation.ProjectVersionId,
        evaluation.EvaluatorSubject,
        evaluation.AssignedBySubject,
        evaluation.Status,
        evaluation.HasConflict,
        evaluation.ConflictReason,
        evaluation.ConflictDeclaredAtUtc,
        evaluation.Recommendation,
        evaluation.Rationale,
        evaluation.AssignedAtUtc,
        evaluation.CompletedAtUtc);

    private static DecisionView ToView(ProjectDecision decision) => new(
        decision.Id,
        decision.ProjectId,
        decision.EvaluationId,
        decision.Outcome,
        decision.Reason,
        decision.DecidedBySubject,
        decision.DecidedAtUtc);
}
