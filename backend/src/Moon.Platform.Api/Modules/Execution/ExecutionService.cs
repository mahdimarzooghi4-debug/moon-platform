using System.Text.Json;
using Microsoft.EntityFrameworkCore;
using Moon.Platform.Api.Common.Auditing;
using Moon.Platform.Api.Common.Authorization;
using Moon.Platform.Api.Infrastructure.Persistence;
using Moon.Platform.Api.Modules.Projects;

namespace Moon.Platform.Api.Modules.Execution;

public interface IExecutionService
{
    Task<ExecutionOperationResult> InitializeAsync(
        Guid projectId,
        IReadOnlyList<ExecutionStageDefinition> stages,
        string actorSubject,
        string correlationId,
        string? ipAddress,
        CancellationToken cancellationToken = default);

    Task<ExecutionOperationResult> SubmitReportAsync(
        Guid projectId,
        Guid stageId,
        string summary,
        string actorSubject,
        string correlationId,
        string? ipAddress,
        CancellationToken cancellationToken = default);

    Task<ExecutionOperationResult> ReviewReportAsync(
        Guid projectId,
        Guid stageId,
        Guid reportId,
        string decision,
        string? note,
        string actorSubject,
        string correlationId,
        string? ipAddress,
        CancellationToken cancellationToken = default);
}

public sealed class ExecutionService(
    MoonDbContext dbContext,
    IAuditWriter auditWriter,
    IOrganizationAccessService organizationAccess) : IExecutionService
{
    public async Task<ExecutionOperationResult> InitializeAsync(
        Guid projectId,
        IReadOnlyList<ExecutionStageDefinition> stages,
        string actorSubject,
        string correlationId,
        string? ipAddress,
        CancellationToken cancellationToken = default)
    {
        if (!await IsActiveUserAsync(actorSubject, cancellationToken))
        {
            return ExecutionOperationResult.Failure(
                "execution_actor_inactive",
                "Execution planner must be an active synchronized user.");
        }

        if (stages is null || stages.Count is < 1 or > 50)
        {
            return ExecutionOperationResult.Failure(
                "execution_invalid_stages",
                "Execution plan must contain between 1 and 50 stages.");
        }

        var normalized = new List<ExecutionStageDefinition>(stages.Count);
        foreach (var stage in stages)
        {
            var title = stage.Title?.Trim() ?? string.Empty;
            var description = stage.Description?.Trim() ?? string.Empty;
            if (title.Length is < 1 or > 200 || description.Length > 4000)
            {
                return ExecutionOperationResult.Failure(
                    "execution_invalid_stage",
                    "Each stage requires a title up to 200 characters and a description up to 4000 characters.");
            }

            normalized.Add(new ExecutionStageDefinition(title, description));
        }

        await using var transaction = await dbContext.Database.BeginTransactionAsync(cancellationToken);
        var project = await dbContext.Projects
            .FromSqlInterpolated($"SELECT * FROM moon.projects WHERE \"Id\" = {projectId} FOR UPDATE")
            .SingleOrDefaultAsync(cancellationToken);

        if (project is null)
        {
            await transaction.RollbackAsync(cancellationToken);
            return ExecutionOperationResult.Failure("project_not_found", "Project was not found.");
        }

        if (project.Status != ProjectStatuses.Published || project.PublishedAtUtc is null)
        {
            await transaction.RollbackAsync(cancellationToken);
            return ExecutionOperationResult.Failure(
                "execution_project_not_published",
                "Execution can be initialized only for a published project.");
        }

        var stageSet = dbContext.Set<ExecutionStage>();
        if (await stageSet.AnyAsync(x => x.ProjectId == projectId, cancellationToken))
        {
            await transaction.RollbackAsync(cancellationToken);
            return ExecutionOperationResult.Failure(
                "execution_already_initialized",
                "Execution stages have already been initialized for this project.");
        }

        var now = DateTimeOffset.UtcNow;
        var entities = normalized.Select((definition, index) => new ExecutionStage
        {
            ProjectId = projectId,
            SequenceNumber = index + 1,
            Title = definition.Title,
            Description = definition.Description,
            Status = index == 0 ? ExecutionStageStatuses.Active : ExecutionStageStatuses.Blocked,
            CreatedBySubject = actorSubject,
            CreatedAtUtc = now,
            ActivatedAtUtc = index == 0 ? now : null
        }).ToArray();

        stageSet.AddRange(entities);
        await dbContext.SaveChangesAsync(cancellationToken);

        await auditWriter.AppendAsync(new AuditWriteRequest(
            actorSubject,
            "execution.initialized",
            "project_execution",
            projectId.ToString(),
            correlationId,
            project.OrganizationId.ToString(),
            projectId.ToString(),
            AfterJson: JsonSerializer.Serialize(new
            {
                ProjectId = projectId,
                StageCount = entities.Length,
                FirstStageId = entities[0].Id
            }),
            IpAddress: ipAddress), cancellationToken);

        await auditWriter.AppendAsync(new AuditWriteRequest(
            actorSubject,
            "execution.stage.activated",
            "execution_stage",
            entities[0].Id.ToString(),
            correlationId,
            project.OrganizationId.ToString(),
            projectId.ToString(),
            AfterJson: JsonSerializer.Serialize(new
            {
                entities[0].SequenceNumber,
                entities[0].Status,
                entities[0].ActivatedAtUtc
            }),
            IpAddress: ipAddress), cancellationToken);

        await transaction.CommitAsync(cancellationToken);
        return ExecutionOperationResult.Success(await BuildPlanAsync(project, cancellationToken));
    }

    public async Task<ExecutionOperationResult> SubmitReportAsync(
        Guid projectId,
        Guid stageId,
        string summary,
        string actorSubject,
        string correlationId,
        string? ipAddress,
        CancellationToken cancellationToken = default)
    {
        summary = summary?.Trim() ?? string.Empty;
        if (summary.Length is < 1 or > 8000)
        {
            return ExecutionOperationResult.Failure(
                "execution_invalid_report",
                "Progress report summary is required and must be at most 8000 characters.");
        }

        if (!await IsActiveUserAsync(actorSubject, cancellationToken))
        {
            return ExecutionOperationResult.Failure(
                "execution_actor_inactive",
                "Report submitter must be an active synchronized user.");
        }

        var project = await dbContext.Projects.AsNoTracking()
            .SingleOrDefaultAsync(x => x.Id == projectId, cancellationToken);
        if (project is null)
        {
            return ExecutionOperationResult.Failure("project_not_found", "Project was not found.");
        }

        if (!await organizationAccess.IsMemberAsync(actorSubject, project.OrganizationId, cancellationToken))
        {
            return ExecutionOperationResult.Failure(
                "execution_report_forbidden",
                "Only an active member of the project organization may submit progress reports.");
        }

        await using var transaction = await dbContext.Database.BeginTransactionAsync(cancellationToken);
        var stage = await dbContext.Set<ExecutionStage>()
            .FromSqlInterpolated($"SELECT * FROM moon.execution_stages WHERE \"Id\" = {stageId} FOR UPDATE")
            .SingleOrDefaultAsync(cancellationToken);

        if (stage is null || stage.ProjectId != projectId)
        {
            await transaction.RollbackAsync(cancellationToken);
            return ExecutionOperationResult.Failure("execution_stage_not_found", "Execution stage was not found.");
        }

        if (stage.Status == ExecutionStageStatuses.Blocked)
        {
            await transaction.RollbackAsync(cancellationToken);
            return ExecutionOperationResult.Failure(
                "execution_stage_blocked",
                "This stage cannot accept a report until the previous stage report is approved.");
        }

        if (stage.Status == ExecutionStageStatuses.ReportSubmitted)
        {
            await transaction.RollbackAsync(cancellationToken);
            return ExecutionOperationResult.Failure(
                "execution_report_pending_review",
                "This stage already has a report waiting for review.");
        }

        if (stage.Status == ExecutionStageStatuses.Completed)
        {
            await transaction.RollbackAsync(cancellationToken);
            return ExecutionOperationResult.Failure(
                "execution_stage_completed",
                "Completed stages cannot accept another report.");
        }

        var reportSet = dbContext.Set<ProgressReport>();
        var lastAttempt = await reportSet
            .Where(x => x.StageId == stageId)
            .Select(x => (int?)x.AttemptNumber)
            .MaxAsync(cancellationToken) ?? 0;

        var report = new ProgressReport
        {
            ProjectId = projectId,
            StageId = stageId,
            AttemptNumber = lastAttempt + 1,
            SubmittedBySubject = actorSubject,
            Summary = summary
        };

        stage.Status = ExecutionStageStatuses.ReportSubmitted;
        reportSet.Add(report);
        await dbContext.SaveChangesAsync(cancellationToken);

        await auditWriter.AppendAsync(new AuditWriteRequest(
            actorSubject,
            "execution.report.submitted",
            "progress_report",
            report.Id.ToString(),
            correlationId,
            project.OrganizationId.ToString(),
            projectId.ToString(),
            AfterJson: JsonSerializer.Serialize(new
            {
                report.StageId,
                report.AttemptNumber,
                report.Status,
                report.SubmittedAtUtc
            }),
            IpAddress: ipAddress), cancellationToken);

        await transaction.CommitAsync(cancellationToken);
        return ExecutionOperationResult.Success(await BuildPlanAsync(project, cancellationToken));
    }

    public async Task<ExecutionOperationResult> ReviewReportAsync(
        Guid projectId,
        Guid stageId,
        Guid reportId,
        string decision,
        string? note,
        string actorSubject,
        string correlationId,
        string? ipAddress,
        CancellationToken cancellationToken = default)
    {
        decision = decision?.Trim().ToLowerInvariant() ?? string.Empty;
        note = string.IsNullOrWhiteSpace(note) ? null : note.Trim();
        if (decision is not ("approve" or "reject"))
        {
            return ExecutionOperationResult.Failure(
                "execution_invalid_review_decision",
                "Review decision must be either 'approve' or 'reject'.");
        }

        if (note?.Length > 4000 || decision == "reject" && string.IsNullOrWhiteSpace(note))
        {
            return ExecutionOperationResult.Failure(
                "execution_invalid_review_note",
                "A rejection requires a review note; review notes must be at most 4000 characters.");
        }

        if (!await IsActiveUserAsync(actorSubject, cancellationToken))
        {
            return ExecutionOperationResult.Failure(
                "execution_actor_inactive",
                "Report reviewer must be an active synchronized user.");
        }

        var project = await dbContext.Projects.AsNoTracking()
            .SingleOrDefaultAsync(x => x.Id == projectId, cancellationToken);
        if (project is null)
        {
            return ExecutionOperationResult.Failure("project_not_found", "Project was not found.");
        }

        await using var transaction = await dbContext.Database.BeginTransactionAsync(cancellationToken);
        var stage = await dbContext.Set<ExecutionStage>()
            .FromSqlInterpolated($"SELECT * FROM moon.execution_stages WHERE \"Id\" = {stageId} FOR UPDATE")
            .SingleOrDefaultAsync(cancellationToken);
        if (stage is null || stage.ProjectId != projectId)
        {
            await transaction.RollbackAsync(cancellationToken);
            return ExecutionOperationResult.Failure("execution_stage_not_found", "Execution stage was not found.");
        }

        var report = await dbContext.Set<ProgressReport>()
            .FromSqlInterpolated($"SELECT * FROM moon.progress_reports WHERE \"Id\" = {reportId} FOR UPDATE")
            .SingleOrDefaultAsync(cancellationToken);
        if (report is null || report.ProjectId != projectId || report.StageId != stageId)
        {
            await transaction.RollbackAsync(cancellationToken);
            return ExecutionOperationResult.Failure("execution_report_not_found", "Progress report was not found.");
        }

        if (report.Status != ProgressReportStatuses.Submitted || stage.Status != ExecutionStageStatuses.ReportSubmitted)
        {
            await transaction.RollbackAsync(cancellationToken);
            return ExecutionOperationResult.Failure(
                "execution_report_already_reviewed",
                "Only the currently submitted report may be reviewed.");
        }

        var now = DateTimeOffset.UtcNow;
        report.Status = decision == "approve"
            ? ProgressReportStatuses.Approved
            : ProgressReportStatuses.Rejected;
        report.ReviewedBySubject = actorSubject;
        report.ReviewedAtUtc = now;
        report.ReviewNote = note;

        ExecutionStage? activatedStage = null;
        if (decision == "approve")
        {
            stage.Status = ExecutionStageStatuses.Completed;
            stage.CompletedAtUtc = now;

            activatedStage = await dbContext.Set<ExecutionStage>()
                .SingleOrDefaultAsync(
                    x => x.ProjectId == projectId
                         && x.SequenceNumber == stage.SequenceNumber + 1,
                    cancellationToken);
            if (activatedStage is not null)
            {
                if (activatedStage.Status != ExecutionStageStatuses.Blocked)
                {
                    throw new InvalidOperationException("Next execution stage was expected to be blocked before activation.");
                }

                activatedStage.Status = ExecutionStageStatuses.Active;
                activatedStage.ActivatedAtUtc = now;
            }
        }
        else
        {
            stage.Status = ExecutionStageStatuses.Active;
        }

        await dbContext.SaveChangesAsync(cancellationToken);

        var reviewAction = decision == "approve"
            ? "execution.report.approved"
            : "execution.report.rejected";
        await auditWriter.AppendAsync(new AuditWriteRequest(
            actorSubject,
            reviewAction,
            "progress_report",
            report.Id.ToString(),
            correlationId,
            project.OrganizationId.ToString(),
            projectId.ToString(),
            AfterJson: JsonSerializer.Serialize(new
            {
                report.StageId,
                report.AttemptNumber,
                report.Status,
                report.ReviewedBySubject,
                report.ReviewedAtUtc,
                report.ReviewNote
            }),
            IpAddress: ipAddress), cancellationToken);

        if (activatedStage is not null)
        {
            await auditWriter.AppendAsync(new AuditWriteRequest(
                actorSubject,
                "execution.stage.activated",
                "execution_stage",
                activatedStage.Id.ToString(),
                correlationId,
                project.OrganizationId.ToString(),
                projectId.ToString(),
                AfterJson: JsonSerializer.Serialize(new
                {
                    activatedStage.SequenceNumber,
                    activatedStage.Status,
                    activatedStage.ActivatedAtUtc
                }),
                IpAddress: ipAddress), cancellationToken);
        }

        await transaction.CommitAsync(cancellationToken);
        return ExecutionOperationResult.Success(await BuildPlanAsync(project, cancellationToken));
    }

    private Task<bool> IsActiveUserAsync(string subject, CancellationToken cancellationToken)
        => dbContext.Users.AsNoTracking()
            .AnyAsync(x => x.ExternalSubject == subject && x.IsActive, cancellationToken);

    private async Task<ExecutionPlanView> BuildPlanAsync(Project project, CancellationToken cancellationToken)
    {
        var stages = await dbContext.Set<ExecutionStage>().AsNoTracking()
            .Where(x => x.ProjectId == project.Id)
            .OrderBy(x => x.SequenceNumber)
            .ToListAsync(cancellationToken);
        var reports = await dbContext.Set<ProgressReport>().AsNoTracking()
            .Where(x => x.ProjectId == project.Id)
            .OrderBy(x => x.StageId)
            .ThenBy(x => x.AttemptNumber)
            .ToListAsync(cancellationToken);
        var byStage = reports.ToLookup(x => x.StageId);

        return new ExecutionPlanView(
            project.Id,
            project.OrganizationId,
            stages.Select(stage => new ExecutionStageView(
                stage.Id,
                stage.SequenceNumber,
                stage.Title,
                stage.Description,
                stage.Status,
                stage.ActivatedAtUtc,
                stage.CompletedAtUtc,
                byStage[stage.Id]
                    .Select(report => new ProgressReportView(
                        report.Id,
                        report.AttemptNumber,
                        report.SubmittedBySubject,
                        report.Summary,
                        report.Status,
                        report.SubmittedAtUtc,
                        report.ReviewedBySubject,
                        report.ReviewedAtUtc,
                        report.ReviewNote))
                    .ToArray()))
                .ToArray());
    }
}
