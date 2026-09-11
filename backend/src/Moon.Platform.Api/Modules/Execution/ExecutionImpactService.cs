using System.Text.Json;
using Microsoft.EntityFrameworkCore;
using Moon.Platform.Api.Common.Auditing;
using Moon.Platform.Api.Common.Authorization;
using Moon.Platform.Api.Common.Messaging;
using Moon.Platform.Api.Infrastructure.Persistence;
using Moon.Platform.Api.Modules.Projects;

namespace Moon.Platform.Api.Modules.Execution;

public interface IExecutionImpactService
{
    Task<ExecutionImpactOperationResult> GetStateAsync(Guid projectId, CancellationToken cancellationToken = default);
    Task<ExecutionImpactOperationResult> SubmitAsync(Guid projectId, Guid stageId, string title, string summary, string methodology, string? geography, IReadOnlyList<ExecutionImpactMetricDefinition> metrics, string actorSubject, string correlationId, string? ipAddress, CancellationToken cancellationToken = default);
    Task<ExecutionImpactOperationResult> ReviewAsync(Guid projectId, Guid stageId, Guid impactReportId, string decision, string? note, string actorSubject, string correlationId, string? ipAddress, CancellationToken cancellationToken = default);
    Task<ExecutionImpactOperationResult> PublishAsync(Guid projectId, Guid stageId, Guid impactReportId, string actorSubject, string correlationId, string? ipAddress, CancellationToken cancellationToken = default);
    Task<ExecutionImpactOperationResult> CloseoutAsync(Guid projectId, string note, string actorSubject, string correlationId, string? ipAddress, CancellationToken cancellationToken = default);
    Task<IReadOnlyList<PublicImpactReportView>> GetPublicReportsAsync(CancellationToken cancellationToken = default);
    Task<PublicImpactReportView?> GetPublicReportAsync(Guid impactReportId, CancellationToken cancellationToken = default);
    Task<PublicImpactOverviewView> GetPublicOverviewAsync(CancellationToken cancellationToken = default);
}

public sealed class ExecutionImpactService(
    MoonDbContext dbContext,
    IAuditWriter auditWriter,
    IOrganizationAccessService organizationAccess,
    IOutboxWriter? outboxWriter = null) : IExecutionImpactService
{
    private readonly IOutboxWriter _outboxWriter = outboxWriter ?? new OutboxWriter(dbContext);
    private DbSet<ExecutionImpactReport> Reports => dbContext.Set<ExecutionImpactReport>();
    private DbSet<ExecutionImpactFinancialSnapshot> FinancialSnapshots => dbContext.Set<ExecutionImpactFinancialSnapshot>();
    private DbSet<ExecutionCloseout> Closeouts => dbContext.Set<ExecutionCloseout>();

    public async Task<ExecutionImpactOperationResult> GetStateAsync(Guid projectId, CancellationToken cancellationToken = default)
    {
        var project = await dbContext.Projects.AsNoTracking().SingleOrDefaultAsync(x => x.Id == projectId, cancellationToken);
        return project is null
            ? Failure("project_not_found", "Project was not found.")
            : ExecutionImpactOperationResult.Success(await BuildStateAsync(project, cancellationToken));
    }

    public async Task<ExecutionImpactOperationResult> SubmitAsync(
        Guid projectId,
        Guid stageId,
        string title,
        string summary,
        string methodology,
        string? geography,
        IReadOnlyList<ExecutionImpactMetricDefinition> metrics,
        string actorSubject,
        string correlationId,
        string? ipAddress,
        CancellationToken cancellationToken = default)
    {
        title = title?.Trim() ?? string.Empty;
        summary = summary?.Trim() ?? string.Empty;
        methodology = methodology?.Trim() ?? string.Empty;
        geography = string.IsNullOrWhiteSpace(geography) ? null : geography.Trim();
        if (title.Length is < 1 or > 300 || summary.Length is < 1 or > 8000 || methodology.Length is < 1 or > 8000 || geography?.Length > 4000)
            return Failure("execution_impact_invalid", "Impact title, summary, methodology, or geography is invalid.");
        if (metrics is null || metrics.Count is < 1 or > 50)
            return Failure("execution_impact_metrics_invalid", "Impact report must contain between 1 and 50 metrics.");

        var normalizedMetrics = new List<ExecutionImpactMetricDefinition>(metrics.Count);
        var keys = new HashSet<string>(StringComparer.Ordinal);
        foreach (var metric in metrics)
        {
            var key = metric.Key?.Trim().ToLowerInvariant() ?? string.Empty;
            var label = metric.Label?.Trim() ?? string.Empty;
            var unit = metric.Unit?.Trim() ?? string.Empty;
            var aggregation = metric.Aggregation?.Trim().ToLowerInvariant() ?? string.Empty;
            if (key.Length is < 1 or > 120 || label.Length is < 1 or > 200 || unit.Length is < 1 or > 80 || !ExecutionImpactMetricAggregations.IsValid(aggregation) || !keys.Add(key))
                return Failure("execution_impact_metrics_invalid", "Metric keys must be unique and metric metadata/aggregation must be valid.");
            normalizedMetrics.Add(new ExecutionImpactMetricDefinition(key, label, unit, aggregation, metric.TargetValue, metric.ActualValue));
        }

        if (!await IsActiveUserAsync(actorSubject, cancellationToken))
            return Failure("execution_actor_inactive", "Impact report submitter must be an active synchronized user.");
        var accessProject = await dbContext.Projects.AsNoTracking().SingleOrDefaultAsync(x => x.Id == projectId, cancellationToken);
        if (accessProject is null)
            return Failure("project_not_found", "Project was not found.");
        if (!await organizationAccess.IsMemberAsync(actorSubject, accessProject.OrganizationId, cancellationToken))
            return Failure("execution_impact_forbidden", "Only an active member of the project organization may submit an impact report.");

        await using var transaction = await dbContext.Database.BeginTransactionAsync(cancellationToken);
        var project = await LockProjectAsync(projectId, cancellationToken);
        if (project is null)
        {
            await transaction.RollbackAsync(cancellationToken);
            return Failure("project_not_found", "Project was not found.");
        }
        if (await Closeouts.AsNoTracking().AnyAsync(x => x.ProjectId == projectId, cancellationToken))
        {
            await transaction.RollbackAsync(cancellationToken);
            return Failure("execution_closed", "Execution has been closed out and cannot accept new impact reports.");
        }
        if (await IsFrozenAsync(projectId, cancellationToken))
        {
            await transaction.RollbackAsync(cancellationToken);
            return Failure("execution_frozen", "Execution is frozen; impact reports cannot be submitted.");
        }

        var stage = await dbContext.Set<ExecutionStage>()
            .FromSqlInterpolated($"SELECT * FROM moon.execution_stages WHERE \"Id\" = {stageId} FOR UPDATE")
            .SingleOrDefaultAsync(cancellationToken);
        if (stage is null || stage.ProjectId != projectId)
        {
            await transaction.RollbackAsync(cancellationToken);
            return Failure("execution_stage_not_found", "Execution stage was not found.");
        }
        if (stage.Status != ExecutionStageStatuses.Completed)
        {
            await transaction.RollbackAsync(cancellationToken);
            return Failure("execution_impact_stage_not_completed", "Impact reports can be submitted only after the stage is completed.");
        }

        var progress = await dbContext.Set<ProgressReport>().AsNoTracking()
            .SingleOrDefaultAsync(x => x.StageId == stageId && x.Status == ProgressReportStatuses.Approved, cancellationToken);
        if (progress is null)
        {
            await transaction.RollbackAsync(cancellationToken);
            return Failure("execution_impact_progress_not_approved", "A completed stage must have an approved progress report before impact reporting.");
        }
        if (await Reports.AsNoTracking().AnyAsync(x => x.StageId == stageId && (x.Status == ExecutionImpactReportStatuses.Submitted || x.Status == ExecutionImpactReportStatuses.Approved), cancellationToken))
        {
            await transaction.RollbackAsync(cancellationToken);
            return Failure("execution_impact_pending", "This stage already has an impact report waiting for review or publication.");
        }

        var attempt = (await Reports.Where(x => x.StageId == stageId).Select(x => (int?)x.AttemptNumber).MaxAsync(cancellationToken) ?? 0) + 1;
        var supersedes = await Reports.AsNoTracking()
            .Where(x => x.StageId == stageId && x.Status == ExecutionImpactReportStatuses.Published)
            .OrderByDescending(x => x.PublishedAtUtc)
            .Select(x => (Guid?)x.Id)
            .FirstOrDefaultAsync(cancellationToken);
        var report = new ExecutionImpactReport
        {
            ProjectId = projectId,
            StageId = stageId,
            ProgressReportId = progress.Id,
            AttemptNumber = attempt,
            SupersedesImpactReportId = supersedes,
            Title = title,
            Summary = summary,
            Methodology = methodology,
            Geography = geography,
            SubmittedBySubject = actorSubject
        };
        for (var index = 0; index < normalizedMetrics.Count; index++)
        {
            var metric = normalizedMetrics[index];
            report.Metrics.Add(new ExecutionImpactMetric
            {
                ImpactReportId = report.Id,
                Key = metric.Key,
                Label = metric.Label,
                Unit = metric.Unit,
                Aggregation = metric.Aggregation,
                TargetValue = metric.TargetValue,
                ActualValue = metric.ActualValue,
                SortOrder = index + 1
            });
        }
        Reports.Add(report);
        await dbContext.SaveChangesAsync(cancellationToken);
        await AppendAuditAsync(actorSubject, "execution.impact.submitted", "execution_impact_report", report.Id, project, correlationId, ipAddress,
            new { report.StageId, report.ProgressReportId, report.AttemptNumber, report.SupersedesImpactReportId, report.Status, MetricCount = report.Metrics.Count }, cancellationToken);
        await transaction.CommitAsync(cancellationToken);
        return ExecutionImpactOperationResult.Success(await BuildStateAsync(project, cancellationToken));
    }

    public async Task<ExecutionImpactOperationResult> ReviewAsync(
        Guid projectId,
        Guid stageId,
        Guid impactReportId,
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
            return Failure("execution_impact_review_invalid", "Impact review decision must be either 'approve' or 'reject'.");
        if (note?.Length > 4000 || decision == "reject" && string.IsNullOrWhiteSpace(note))
            return Failure("execution_impact_review_note_invalid", "A rejection requires a note; review notes must be at most 4000 characters.");
        if (!await IsActiveUserAsync(actorSubject, cancellationToken))
            return Failure("execution_actor_inactive", "Impact reviewer must be an active synchronized user.");

        await using var transaction = await dbContext.Database.BeginTransactionAsync(cancellationToken);
        var project = await LockProjectAsync(projectId, cancellationToken);
        if (project is null)
        {
            await transaction.RollbackAsync(cancellationToken);
            return Failure("project_not_found", "Project was not found.");
        }
        if (await Closeouts.AsNoTracking().AnyAsync(x => x.ProjectId == projectId, cancellationToken))
        {
            await transaction.RollbackAsync(cancellationToken);
            return Failure("execution_closed", "Execution has been closed out.");
        }
        if (await IsFrozenAsync(projectId, cancellationToken))
        {
            await transaction.RollbackAsync(cancellationToken);
            return Failure("execution_frozen", "Execution is frozen; impact reports cannot be reviewed.");
        }

        var report = await Reports
            .FromSqlInterpolated($"SELECT * FROM moon.execution_impact_reports WHERE \"Id\" = {impactReportId} FOR UPDATE")
            .SingleOrDefaultAsync(cancellationToken);
        if (report is null || report.ProjectId != projectId || report.StageId != stageId)
        {
            await transaction.RollbackAsync(cancellationToken);
            return Failure("execution_impact_not_found", "Impact report was not found.");
        }
        if (report.Status != ExecutionImpactReportStatuses.Submitted)
        {
            await transaction.RollbackAsync(cancellationToken);
            return Failure("execution_impact_already_reviewed", "Only a submitted impact report may be reviewed.");
        }
        if (string.Equals(report.SubmittedBySubject, actorSubject, StringComparison.Ordinal))
        {
            await transaction.RollbackAsync(cancellationToken);
            return Failure("execution_impact_self_review_forbidden", "The impact report submitter cannot review the same report.");
        }
        if (decision == "approve" && await dbContext.Set<ExecutionRisk>().AsNoTracking()
                .AnyAsync(x => x.StageId == stageId && x.Status != ExecutionRiskStatuses.Closed, cancellationToken))
        {
            await transaction.RollbackAsync(cancellationToken);
            return Failure("execution_impact_open_risks", "Impact report approval requires all risks for the stage to be closed.");
        }

        report.Status = decision == "approve" ? ExecutionImpactReportStatuses.Approved : ExecutionImpactReportStatuses.Rejected;
        report.ReviewedBySubject = actorSubject;
        report.ReviewedAtUtc = DateTimeOffset.UtcNow;
        report.ReviewNote = note;
        await dbContext.SaveChangesAsync(cancellationToken);
        await AppendAuditAsync(actorSubject, decision == "approve" ? "execution.impact.approved" : "execution.impact.rejected", "execution_impact_report", report.Id, project, correlationId, ipAddress,
            new { report.StageId, report.AttemptNumber, report.Status, report.ReviewedBySubject, report.ReviewedAtUtc, report.ReviewNote }, cancellationToken);
        await transaction.CommitAsync(cancellationToken);
        return ExecutionImpactOperationResult.Success(await BuildStateAsync(project, cancellationToken));
    }

    public async Task<ExecutionImpactOperationResult> PublishAsync(
        Guid projectId,
        Guid stageId,
        Guid impactReportId,
        string actorSubject,
        string correlationId,
        string? ipAddress,
        CancellationToken cancellationToken = default)
    {
        if (!await IsActiveUserAsync(actorSubject, cancellationToken))
            return Failure("execution_actor_inactive", "Impact publisher must be an active synchronized user.");

        await using var transaction = await dbContext.Database.BeginTransactionAsync(cancellationToken);
        var project = await LockProjectAsync(projectId, cancellationToken);
        if (project is null)
        {
            await transaction.RollbackAsync(cancellationToken);
            return Failure("project_not_found", "Project was not found.");
        }
        if (await Closeouts.AsNoTracking().AnyAsync(x => x.ProjectId == projectId, cancellationToken))
        {
            await transaction.RollbackAsync(cancellationToken);
            return Failure("execution_closed", "Execution has been closed out.");
        }
        if (await IsFrozenAsync(projectId, cancellationToken))
        {
            await transaction.RollbackAsync(cancellationToken);
            return Failure("execution_frozen", "Execution is frozen; impact reports cannot be published.");
        }

        var report = await Reports
            .FromSqlInterpolated($"SELECT * FROM moon.execution_impact_reports WHERE \"Id\" = {impactReportId} FOR UPDATE")
            .Include(x => x.Metrics)
            .SingleOrDefaultAsync(cancellationToken);
        if (report is null || report.ProjectId != projectId || report.StageId != stageId)
        {
            await transaction.RollbackAsync(cancellationToken);
            return Failure("execution_impact_not_found", "Impact report was not found.");
        }
        if (report.Status != ExecutionImpactReportStatuses.Approved)
        {
            await transaction.RollbackAsync(cancellationToken);
            return Failure("execution_impact_not_approved", "Only an approved impact report may be published.");
        }
        if (await dbContext.Set<ExecutionRisk>().AsNoTracking().AnyAsync(x => x.StageId == stageId && x.Status != ExecutionRiskStatuses.Closed, cancellationToken))
        {
            await transaction.RollbackAsync(cancellationToken);
            return Failure("execution_impact_open_risks", "Impact publication requires all risks for the stage to be closed.");
        }

        var now = DateTimeOffset.UtcNow;
        var approvedExpenseByCurrency = await dbContext.Set<ExecutionExpense>().AsNoTracking()
            .Where(x => x.StageId == stageId && x.Status == ExecutionExpenseStatuses.Approved)
            .GroupBy(x => x.Currency)
            .Select(x => new { Currency = x.Key, Amount = x.Sum(v => v.AmountMinor) })
            .ToDictionaryAsync(x => x.Currency, x => x.Amount, StringComparer.Ordinal, cancellationToken);
        var releasedByCurrency = await GetActiveReleasedAmountsAsync(stageId, cancellationToken);
        foreach (var currency in approvedExpenseByCurrency.Keys.Union(releasedByCurrency.Keys, StringComparer.Ordinal).OrderBy(x => x, StringComparer.Ordinal))
        {
            report.FinancialSnapshots.Add(new ExecutionImpactFinancialSnapshot
            {
                ImpactReportId = report.Id,
                Currency = currency,
                ApprovedExpenseMinor = approvedExpenseByCurrency.GetValueOrDefault(currency),
                ReleasedMinor = releasedByCurrency.GetValueOrDefault(currency),
                CapturedAtUtc = now
            });
        }

        report.Status = ExecutionImpactReportStatuses.Published;
        report.PublishedBySubject = actorSubject;
        report.PublishedAtUtc = now;
        await dbContext.SaveChangesAsync(cancellationToken);
        await AppendAuditAsync(actorSubject, "execution.impact.published", "execution_impact_report", report.Id, project, correlationId, ipAddress,
            new { report.StageId, report.AttemptNumber, report.SupersedesImpactReportId, report.PublishedBySubject, report.PublishedAtUtc, FinancialSnapshotCount = report.FinancialSnapshots.Count }, cancellationToken);
        var integrationEvent = new ExecutionImpactPublishedEvent(report.Id, projectId, stageId, report.AttemptNumber, report.SupersedesImpactReportId, now);
        await _outboxWriter.EnqueueAsync(new OutboxWriteRequest(
            IntegrationEventTypes.ExecutionImpactPublished,
            "execution_impact_report",
            report.Id.ToString(),
            $"execution-impact-published:{report.Id:N}",
            IntegrationEventSerialization.ToJson(integrationEvent),
            correlationId,
            now), cancellationToken);
        await transaction.CommitAsync(cancellationToken);
        return ExecutionImpactOperationResult.Success(await BuildStateAsync(project, cancellationToken));
    }

    public async Task<ExecutionImpactOperationResult> CloseoutAsync(
        Guid projectId,
        string note,
        string actorSubject,
        string correlationId,
        string? ipAddress,
        CancellationToken cancellationToken = default)
    {
        note = note?.Trim() ?? string.Empty;
        if (note.Length is < 1 or > 4000)
            return Failure("execution_closeout_note_invalid", "Closeout note is required and must be at most 4000 characters.");
        if (!await IsActiveUserAsync(actorSubject, cancellationToken))
            return Failure("execution_actor_inactive", "Closeout manager must be an active synchronized user.");

        await using var transaction = await dbContext.Database.BeginTransactionAsync(cancellationToken);
        var project = await LockProjectAsync(projectId, cancellationToken);
        if (project is null)
        {
            await transaction.RollbackAsync(cancellationToken);
            return Failure("project_not_found", "Project was not found.");
        }
        if (await Closeouts.AsNoTracking().AnyAsync(x => x.ProjectId == projectId, cancellationToken))
        {
            await transaction.RollbackAsync(cancellationToken);
            return Failure("execution_already_closed", "Execution has already been closed out.");
        }
        if (await IsFrozenAsync(projectId, cancellationToken))
        {
            await transaction.RollbackAsync(cancellationToken);
            return Failure("execution_frozen", "Frozen execution cannot be closed out.");
        }

        var stages = await dbContext.Set<ExecutionStage>().AsNoTracking().Where(x => x.ProjectId == projectId).ToListAsync(cancellationToken);
        if (stages.Count == 0)
        {
            await transaction.RollbackAsync(cancellationToken);
            return Failure("execution_not_initialized", "Execution must be initialized before closeout.");
        }
        if (stages.Any(x => x.Status != ExecutionStageStatuses.Completed))
        {
            await transaction.RollbackAsync(cancellationToken);
            return Failure("execution_closeout_stages_incomplete", "All execution stages must be completed before closeout.");
        }
        if (await dbContext.Set<ExecutionRisk>().AsNoTracking().AnyAsync(x => x.ProjectId == projectId && x.Status != ExecutionRiskStatuses.Closed, cancellationToken))
        {
            await transaction.RollbackAsync(cancellationToken);
            return Failure("execution_closeout_open_risks", "All execution risks must be closed before closeout.");
        }
        if (await dbContext.Set<ExecutionExpense>().AsNoTracking().AnyAsync(x => x.ProjectId == projectId && x.Status == ExecutionExpenseStatuses.Submitted, cancellationToken))
        {
            await transaction.RollbackAsync(cancellationToken);
            return Failure("execution_closeout_pending_expenses", "All submitted expenses must receive a final review before closeout.");
        }
        if (await Reports.AsNoTracking().AnyAsync(x => x.ProjectId == projectId && (x.Status == ExecutionImpactReportStatuses.Submitted || x.Status == ExecutionImpactReportStatuses.Approved), cancellationToken))
        {
            await transaction.RollbackAsync(cancellationToken);
            return Failure("execution_closeout_pending_impact", "Impact reports awaiting review or publication must be finalized before closeout.");
        }
        var publishedStageIds = await Reports.AsNoTracking()
            .Where(x => x.ProjectId == projectId && x.Status == ExecutionImpactReportStatuses.Published)
            .Select(x => x.StageId)
            .Distinct()
            .ToListAsync(cancellationToken);
        if (stages.Any(x => !publishedStageIds.Contains(x.Id)))
        {
            await transaction.RollbackAsync(cancellationToken);
            return Failure("execution_closeout_missing_impact", "Every completed stage must have a published impact report before closeout.");
        }

        var closeout = new ExecutionCloseout
        {
            ProjectId = projectId,
            ClosedBySubject = actorSubject,
            Note = note
        };
        Closeouts.Add(closeout);
        await dbContext.SaveChangesAsync(cancellationToken);
        await AppendAuditAsync(actorSubject, "execution.closed", "execution_closeout", closeout.Id, project, correlationId, ipAddress,
            new { closeout.ProjectId, closeout.ClosedBySubject, closeout.ClosedAtUtc, closeout.Note }, cancellationToken);
        var integrationEvent = new ExecutionCompletedEvent(projectId, closeout.Id, closeout.ClosedBySubject, closeout.ClosedAtUtc);
        await _outboxWriter.EnqueueAsync(new OutboxWriteRequest(
            IntegrationEventTypes.ExecutionCompleted,
            "project_execution",
            projectId.ToString(),
            $"execution-completed:{projectId:N}",
            IntegrationEventSerialization.ToJson(integrationEvent),
            correlationId,
            closeout.ClosedAtUtc), cancellationToken);
        await transaction.CommitAsync(cancellationToken);
        return ExecutionImpactOperationResult.Success(await BuildStateAsync(project, cancellationToken));
    }

    public async Task<IReadOnlyList<PublicImpactReportView>> GetPublicReportsAsync(CancellationToken cancellationToken = default)
    {
        var current = await GetCurrentPublishedReportsAsync(cancellationToken);
        return current.Select(ToPublicView).OrderByDescending(x => x.PublishedAtUtc).ToArray();
    }

    public async Task<PublicImpactReportView?> GetPublicReportAsync(Guid impactReportId, CancellationToken cancellationToken = default)
    {
        var current = await GetCurrentPublishedReportsAsync(cancellationToken);
        var report = current.SingleOrDefault(x => x.Id == impactReportId);
        return report is null ? null : ToPublicView(report);
    }

    public async Task<PublicImpactOverviewView> GetPublicOverviewAsync(CancellationToken cancellationToken = default)
    {
        var current = await GetCurrentPublishedReportsAsync(cancellationToken);
        var aggregateRows = current
            .SelectMany(report => report.Metrics.Select(metric => new { Report = report, Metric = metric }))
            .Where(x => x.Metric.Aggregation != ExecutionImpactMetricAggregations.None)
            .GroupBy(x => new { x.Metric.Key, x.Metric.Label, x.Metric.Unit, x.Metric.Aggregation })
            .Select(group =>
            {
                decimal? target;
                decimal actual;
                if (group.Key.Aggregation == ExecutionImpactMetricAggregations.Average)
                {
                    target = group.Where(x => x.Metric.TargetValue.HasValue).Select(x => x.Metric.TargetValue!.Value).DefaultIfEmpty().Average();
                    if (!group.Any(x => x.Metric.TargetValue.HasValue)) target = null;
                    actual = group.Average(x => x.Metric.ActualValue);
                }
                else if (group.Key.Aggregation == ExecutionImpactMetricAggregations.Latest)
                {
                    var latest = group.OrderByDescending(x => x.Report.PublishedAtUtc).First();
                    target = latest.Metric.TargetValue;
                    actual = latest.Metric.ActualValue;
                }
                else
                {
                    target = group.Any(x => x.Metric.TargetValue.HasValue)
                        ? group.Where(x => x.Metric.TargetValue.HasValue).Sum(x => x.Metric.TargetValue!.Value)
                        : null;
                    actual = group.Sum(x => x.Metric.ActualValue);
                }
                return new PublicImpactMetricAggregateView(group.Key.Key, group.Key.Label, group.Key.Unit, group.Key.Aggregation, target, actual, group.Count());
            })
            .OrderBy(x => x.Key, StringComparer.Ordinal)
            .ToArray();

        return new PublicImpactOverviewView(
            current.Select(x => x.ProjectId).Distinct().Count(),
            current.Count,
            current.Count == 0 ? null : current.Max(x => x.PublishedAtUtc),
            aggregateRows);
    }

    private async Task<List<ExecutionImpactReport>> GetCurrentPublishedReportsAsync(CancellationToken cancellationToken)
    {
        var published = await Reports.AsNoTracking()
            .Where(x => x.Status == ExecutionImpactReportStatuses.Published)
            .Include(x => x.Stage)
            .Include(x => x.Metrics)
            .Include(x => x.FinancialSnapshots)
            .OrderByDescending(x => x.PublishedAtUtc)
            .ToListAsync(cancellationToken);
        return published.GroupBy(x => x.StageId).Select(x => x.First()).ToList();
    }

    private async Task<Dictionary<string, long>> GetActiveReleasedAmountsAsync(Guid stageId, CancellationToken cancellationToken)
    {
        var disbursements = await dbContext.Set<ExecutionDisbursement>().AsNoTracking()
            .Where(x => x.StageId == stageId)
            .Select(x => new { x.Id, x.Currency, x.AmountMinor })
            .ToListAsync(cancellationToken);
        if (disbursements.Count == 0)
            return new Dictionary<string, long>(StringComparer.Ordinal);
        var ids = disbursements.Select(x => x.Id).ToArray();
        var journals = await dbContext.LedgerJournals.AsNoTracking()
            .Where(x => x.ExecutionDisbursementId.HasValue && ids.Contains(x.ExecutionDisbursementId.Value))
            .Select(x => new { x.Id, DisbursementId = x.ExecutionDisbursementId!.Value })
            .ToListAsync(cancellationToken);
        var journalIds = journals.Select(x => x.Id).ToArray();
        var reversed = journalIds.Length == 0
            ? new List<Guid>()
            : await dbContext.LedgerJournals.AsNoTracking()
                .Where(x => x.ReversesJournalId.HasValue && journalIds.Contains(x.ReversesJournalId.Value))
                .Select(x => x.ReversesJournalId!.Value)
                .ToListAsync(cancellationToken);
        var reversedSet = reversed.ToHashSet();
        var journalByDisbursement = journals.ToDictionary(x => x.DisbursementId, x => x.Id);
        return disbursements
            .Where(x => journalByDisbursement.TryGetValue(x.Id, out var journalId) && !reversedSet.Contains(journalId))
            .GroupBy(x => x.Currency)
            .ToDictionary(x => x.Key, x => x.Sum(v => v.AmountMinor), StringComparer.Ordinal);
    }

    private async Task<ExecutionImpactStateView> BuildStateAsync(Project project, CancellationToken cancellationToken)
    {
        var reports = await Reports.AsNoTracking()
            .Where(x => x.ProjectId == project.Id)
            .Include(x => x.Metrics)
            .Include(x => x.FinancialSnapshots)
            .OrderBy(x => x.StageId)
            .ThenBy(x => x.AttemptNumber)
            .ToListAsync(cancellationToken);
        var closeout = await Closeouts.AsNoTracking().SingleOrDefaultAsync(x => x.ProjectId == project.Id, cancellationToken);
        return new ExecutionImpactStateView(
            project.Id,
            project.OrganizationId,
            reports.Select(ToView).ToArray(),
            closeout is null ? null : new ExecutionCloseoutView(closeout.Id, closeout.ProjectId, closeout.ClosedBySubject, closeout.ClosedAtUtc, closeout.Note));
    }

    private static ExecutionImpactReportView ToView(ExecutionImpactReport report) => new(
        report.Id,
        report.ProjectId,
        report.StageId,
        report.ProgressReportId,
        report.AttemptNumber,
        report.SupersedesImpactReportId,
        report.Title,
        report.Summary,
        report.Methodology,
        report.Geography,
        report.Status,
        report.SubmittedBySubject,
        report.SubmittedAtUtc,
        report.ReviewedBySubject,
        report.ReviewedAtUtc,
        report.ReviewNote,
        report.PublishedBySubject,
        report.PublishedAtUtc,
        report.Metrics.OrderBy(x => x.SortOrder).Select(ToMetricView).ToArray(),
        report.FinancialSnapshots.OrderBy(x => x.Currency, StringComparer.Ordinal).Select(ToFinancialView).ToArray());

    private static PublicImpactReportView ToPublicView(ExecutionImpactReport report) => new(
        report.Id,
        report.ProjectId,
        report.StageId,
        report.Stage.SequenceNumber,
        report.Stage.Title,
        report.Title,
        report.Summary,
        report.Methodology,
        report.Geography,
        report.PublishedAtUtc!.Value,
        report.Metrics.OrderBy(x => x.SortOrder).Select(ToMetricView).ToArray(),
        report.FinancialSnapshots.OrderBy(x => x.Currency, StringComparer.Ordinal).Select(ToFinancialView).ToArray());

    private static ExecutionImpactMetricView ToMetricView(ExecutionImpactMetric metric) =>
        new(metric.Id, metric.Key, metric.Label, metric.Unit, metric.Aggregation, metric.TargetValue, metric.ActualValue, metric.SortOrder);

    private static ExecutionImpactFinancialSnapshotView ToFinancialView(ExecutionImpactFinancialSnapshot snapshot) =>
        new(snapshot.Currency, snapshot.ApprovedExpenseMinor, snapshot.ReleasedMinor, snapshot.CapturedAtUtc);

    private Task<Project?> LockProjectAsync(Guid projectId, CancellationToken cancellationToken) =>
        dbContext.Projects.FromSqlInterpolated($"SELECT * FROM moon.projects WHERE \"Id\" = {projectId} FOR UPDATE").SingleOrDefaultAsync(cancellationToken);

    private async Task<bool> IsFrozenAsync(Guid projectId, CancellationToken cancellationToken)
    {
        var action = await dbContext.Set<ExecutionFreezeEvent>().AsNoTracking()
            .Where(x => x.ProjectId == projectId)
            .OrderByDescending(x => x.SequenceNumber)
            .Select(x => x.Action)
            .FirstOrDefaultAsync(cancellationToken);
        return action == ExecutionFreezeActions.Freeze;
    }

    private Task<bool> IsActiveUserAsync(string subject, CancellationToken cancellationToken) =>
        dbContext.Users.AsNoTracking().AnyAsync(x => x.ExternalSubject == subject && x.IsActive, cancellationToken);

    private async Task AppendAuditAsync(string actorSubject, string action, string subjectType, Guid subjectId, Project project, string correlationId, string? ipAddress, object after, CancellationToken cancellationToken)
    {
        await auditWriter.AppendAsync(new AuditWriteRequest(
            actorSubject,
            action,
            subjectType,
            subjectId.ToString(),
            correlationId,
            project.OrganizationId.ToString(),
            project.Id.ToString(),
            AfterJson: JsonSerializer.Serialize(after),
            IpAddress: ipAddress), cancellationToken);
    }

    private static ExecutionImpactOperationResult Failure(string code, string message) => ExecutionImpactOperationResult.Failure(code, message);
}
