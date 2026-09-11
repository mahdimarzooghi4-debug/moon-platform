using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.ChangeTracking;
using Microsoft.EntityFrameworkCore.Diagnostics;

namespace Moon.Platform.Api.Modules.Execution;

public sealed class ExecutionIntegrityInterceptor : SaveChangesInterceptor
{
    public override InterceptionResult<int> SavingChanges(DbContextEventData eventData, InterceptionResult<int> result)
    {
        Guard(eventData.Context);
        return result;
    }

    public override ValueTask<InterceptionResult<int>> SavingChangesAsync(DbContextEventData eventData, InterceptionResult<int> result, CancellationToken cancellationToken = default)
    {
        Guard(eventData.Context);
        return ValueTask.FromResult(result);
    }

    private static void Guard(DbContext? dbContext)
    {
        if (dbContext is null) return;

        GuardClosedExecution(dbContext);
        GuardImpactChildren(dbContext);

        foreach (var entry in dbContext.ChangeTracker.Entries<ExecutionStage>()) GuardStage(entry);
        foreach (var entry in dbContext.ChangeTracker.Entries<ProgressReport>()) GuardReport(entry);
        foreach (var entry in dbContext.ChangeTracker.Entries<ExecutionExpense>()) GuardExpense(entry);
        foreach (var entry in dbContext.ChangeTracker.Entries<ExecutionRisk>()) GuardRisk(entry);
        foreach (var entry in dbContext.ChangeTracker.Entries<ExecutionImpactReport>()) GuardImpactReport(entry);

        GuardAppendOnly(dbContext.ChangeTracker.Entries<ExecutionFreezeEvent>(), "Execution freeze history is append-only.");
        GuardAppendOnly(dbContext.ChangeTracker.Entries<ExecutionDisbursement>(), "Execution disbursements are append-only; corrections must use ledger reversals.");
        GuardAppendOnly(dbContext.ChangeTracker.Entries<ExecutionImpactMetric>(), "Impact metrics are immutable once submitted.");
        GuardAppendOnly(dbContext.ChangeTracker.Entries<ExecutionImpactFinancialSnapshot>(), "Published impact financial snapshots are append-only.");
        GuardAppendOnly(dbContext.ChangeTracker.Entries<ExecutionCloseout>(), "Execution closeout is append-only.");
    }

    private static void GuardClosedExecution(DbContext dbContext)
    {
        var projectIds = new HashSet<Guid>();
        CollectMutationProjectIds(dbContext.ChangeTracker.Entries<ExecutionStage>(), x => x.ProjectId, projectIds);
        CollectMutationProjectIds(dbContext.ChangeTracker.Entries<ProgressReport>(), x => x.ProjectId, projectIds);
        CollectMutationProjectIds(dbContext.ChangeTracker.Entries<ExecutionExpense>(), x => x.ProjectId, projectIds);
        CollectMutationProjectIds(dbContext.ChangeTracker.Entries<ExecutionRisk>(), x => x.ProjectId, projectIds);
        CollectMutationProjectIds(dbContext.ChangeTracker.Entries<ExecutionFreezeEvent>(), x => x.ProjectId, projectIds);
        CollectMutationProjectIds(dbContext.ChangeTracker.Entries<ExecutionDisbursement>(), x => x.ProjectId, projectIds);
        CollectMutationProjectIds(dbContext.ChangeTracker.Entries<ExecutionImpactReport>(), x => x.ProjectId, projectIds);

        if (projectIds.Count == 0) return;

        var closedProjectId = dbContext.Set<ExecutionCloseout>()
            .AsNoTracking()
            .Where(x => projectIds.Contains(x.ProjectId))
            .Select(x => (Guid?)x.ProjectId)
            .FirstOrDefault();
        if (closedProjectId is not null)
            throw new InvalidOperationException($"Execution is closed for project {closedProjectId}; no further execution mutation is allowed.");
    }

    private static void GuardImpactChildren(DbContext dbContext)
    {
        var reportEntries = dbContext.ChangeTracker.Entries<ExecutionImpactReport>()
            .ToDictionary(x => x.Entity.Id);

        foreach (var metric in dbContext.ChangeTracker.Entries<ExecutionImpactMetric>().Where(x => x.State == EntityState.Added))
        {
            if (!reportEntries.TryGetValue(metric.Entity.ImpactReportId, out var report)
                || report.State != EntityState.Added
                || report.Entity.Status != ExecutionImpactReportStatuses.Submitted)
                throw new InvalidOperationException("Impact metrics may be added only with the initial submitted impact report.");
        }

        foreach (var snapshot in dbContext.ChangeTracker.Entries<ExecutionImpactFinancialSnapshot>().Where(x => x.State == EntityState.Added))
        {
            if (!reportEntries.TryGetValue(snapshot.Entity.ImpactReportId, out var report)
                || report.State != EntityState.Modified
                || report.OriginalValues.GetValue<string>(nameof(ExecutionImpactReport.Status)) != ExecutionImpactReportStatuses.Approved
                || report.Entity.Status != ExecutionImpactReportStatuses.Published)
                throw new InvalidOperationException("Impact financial snapshots may be added only while an approved impact report is being published.");
        }
    }

    private static void CollectMutationProjectIds<TEntity>(IEnumerable<EntityEntry<TEntity>> entries, Func<TEntity, Guid> projectId, ISet<Guid> target) where TEntity : class
    {
        foreach (var entry in entries)
        {
            if (entry.State is EntityState.Added or EntityState.Modified or EntityState.Deleted)
                target.Add(projectId(entry.Entity));
        }
    }

    private static void GuardStage(EntityEntry<ExecutionStage> entry)
    {
        if (entry.State == EntityState.Deleted) throw new InvalidOperationException("Execution stages are append-only and cannot be deleted.");
        if (entry.State != EntityState.Modified) return;

        if (Changed(entry, nameof(ExecutionStage.ProjectId))
            || Changed(entry, nameof(ExecutionStage.SequenceNumber))
            || Changed(entry, nameof(ExecutionStage.Title))
            || Changed(entry, nameof(ExecutionStage.Description))
            || Changed(entry, nameof(ExecutionStage.DisbursementLimitMinor))
            || Changed(entry, nameof(ExecutionStage.DisbursementCurrency))
            || Changed(entry, nameof(ExecutionStage.CreatedBySubject))
            || Changed(entry, nameof(ExecutionStage.CreatedAtUtc)))
            throw new InvalidOperationException("Execution stage identity and terms are immutable.");

        var before = entry.OriginalValues.GetValue<string>(nameof(ExecutionStage.Status));
        var after = entry.CurrentValues.GetValue<string>(nameof(ExecutionStage.Status));
        var allowed = (before, after) switch
        {
            (ExecutionStageStatuses.Blocked, ExecutionStageStatuses.Active) => true,
            (ExecutionStageStatuses.Active, ExecutionStageStatuses.ReportSubmitted) => true,
            (ExecutionStageStatuses.ReportSubmitted, ExecutionStageStatuses.Active) => true,
            (ExecutionStageStatuses.ReportSubmitted, ExecutionStageStatuses.Completed) => true,
            _ => false
        };
        if (!allowed) throw new InvalidOperationException($"Illegal execution stage transition: {before} -> {after}.");
        if (after == ExecutionStageStatuses.Active && entry.CurrentValues.GetValue<DateTimeOffset?>(nameof(ExecutionStage.ActivatedAtUtc)) is null)
            throw new InvalidOperationException("An active execution stage must have an activation time.");
        if (after == ExecutionStageStatuses.Completed && entry.CurrentValues.GetValue<DateTimeOffset?>(nameof(ExecutionStage.CompletedAtUtc)) is null)
            throw new InvalidOperationException("A completed execution stage must have a completion time.");
    }

    private static void GuardReport(EntityEntry<ProgressReport> entry)
    {
        if (entry.State == EntityState.Deleted) throw new InvalidOperationException("Progress reports are append-only and cannot be deleted.");
        if (entry.State != EntityState.Modified) return;

        if (Changed(entry, nameof(ProgressReport.ProjectId))
            || Changed(entry, nameof(ProgressReport.StageId))
            || Changed(entry, nameof(ProgressReport.AttemptNumber))
            || Changed(entry, nameof(ProgressReport.SubmittedBySubject))
            || Changed(entry, nameof(ProgressReport.Summary))
            || Changed(entry, nameof(ProgressReport.SubmittedAtUtc)))
            throw new InvalidOperationException("Submitted progress report content and identity are immutable.");

        var before = entry.OriginalValues.GetValue<string>(nameof(ProgressReport.Status));
        var after = entry.CurrentValues.GetValue<string>(nameof(ProgressReport.Status));
        if (before != ProgressReportStatuses.Submitted || after is not (ProgressReportStatuses.Approved or ProgressReportStatuses.Rejected))
            throw new InvalidOperationException($"Illegal progress report transition: {before} -> {after}.");
        RequireReviewEvidence(entry, nameof(ProgressReport.ReviewedBySubject), nameof(ProgressReport.ReviewedAtUtc), "A reviewed progress report must record reviewer identity and time.");
    }

    private static void GuardExpense(EntityEntry<ExecutionExpense> entry)
    {
        if (entry.State == EntityState.Deleted) throw new InvalidOperationException("Execution expenses are append-only and cannot be deleted.");
        if (entry.State != EntityState.Modified) return;

        if (Changed(entry, nameof(ExecutionExpense.ProjectId))
            || Changed(entry, nameof(ExecutionExpense.StageId))
            || Changed(entry, nameof(ExecutionExpense.AmountMinor))
            || Changed(entry, nameof(ExecutionExpense.Currency))
            || Changed(entry, nameof(ExecutionExpense.Category))
            || Changed(entry, nameof(ExecutionExpense.Description))
            || Changed(entry, nameof(ExecutionExpense.EvidenceReference))
            || Changed(entry, nameof(ExecutionExpense.SubmittedBySubject))
            || Changed(entry, nameof(ExecutionExpense.SubmittedAtUtc)))
            throw new InvalidOperationException("Submitted execution expense content and identity are immutable.");

        var before = entry.OriginalValues.GetValue<string>(nameof(ExecutionExpense.Status));
        var after = entry.CurrentValues.GetValue<string>(nameof(ExecutionExpense.Status));
        if (before != ExecutionExpenseStatuses.Submitted || after is not (ExecutionExpenseStatuses.Approved or ExecutionExpenseStatuses.Rejected))
            throw new InvalidOperationException($"Illegal execution expense transition: {before} -> {after}.");
        RequireReviewEvidence(entry, nameof(ExecutionExpense.ReviewedBySubject), nameof(ExecutionExpense.ReviewedAtUtc), "A reviewed expense must record reviewer identity and time.");
    }

    private static void GuardRisk(EntityEntry<ExecutionRisk> entry)
    {
        if (entry.State == EntityState.Deleted) throw new InvalidOperationException("Execution risks cannot be deleted.");
        if (entry.State != EntityState.Modified) return;

        if (Changed(entry, nameof(ExecutionRisk.ProjectId))
            || Changed(entry, nameof(ExecutionRisk.StageId))
            || Changed(entry, nameof(ExecutionRisk.Severity))
            || Changed(entry, nameof(ExecutionRisk.Title))
            || Changed(entry, nameof(ExecutionRisk.Description))
            || Changed(entry, nameof(ExecutionRisk.ReportedBySubject))
            || Changed(entry, nameof(ExecutionRisk.ReportedAtUtc)))
            throw new InvalidOperationException("Reported risk identity and content are immutable.");

        var before = entry.OriginalValues.GetValue<string>(nameof(ExecutionRisk.Status));
        var after = entry.CurrentValues.GetValue<string>(nameof(ExecutionRisk.Status));
        var allowed = (before, after) switch
        {
            (ExecutionRiskStatuses.Open, ExecutionRiskStatuses.Mitigated) => true,
            (ExecutionRiskStatuses.Open, ExecutionRiskStatuses.Closed) => true,
            (ExecutionRiskStatuses.Mitigated, ExecutionRiskStatuses.Closed) => true,
            _ => false
        };
        if (!allowed) throw new InvalidOperationException($"Illegal execution risk transition: {before} -> {after}.");

        if (before == ExecutionRiskStatuses.Mitigated
            && (Changed(entry, nameof(ExecutionRisk.MitigatedBySubject)) || Changed(entry, nameof(ExecutionRisk.MitigatedAtUtc)) || Changed(entry, nameof(ExecutionRisk.MitigationNote))))
            throw new InvalidOperationException("Recorded risk mitigation evidence is immutable.");

        if (after == ExecutionRiskStatuses.Mitigated
            && (string.IsNullOrWhiteSpace(entry.CurrentValues.GetValue<string?>(nameof(ExecutionRisk.MitigatedBySubject)))
                || entry.CurrentValues.GetValue<DateTimeOffset?>(nameof(ExecutionRisk.MitigatedAtUtc)) is null
                || string.IsNullOrWhiteSpace(entry.CurrentValues.GetValue<string?>(nameof(ExecutionRisk.MitigationNote)))))
            throw new InvalidOperationException("A mitigated risk must record actor, time, and mitigation note.");

        if (after == ExecutionRiskStatuses.Closed
            && (string.IsNullOrWhiteSpace(entry.CurrentValues.GetValue<string?>(nameof(ExecutionRisk.ClosedBySubject)))
                || entry.CurrentValues.GetValue<DateTimeOffset?>(nameof(ExecutionRisk.ClosedAtUtc)) is null
                || string.IsNullOrWhiteSpace(entry.CurrentValues.GetValue<string?>(nameof(ExecutionRisk.CloseNote)))))
            throw new InvalidOperationException("A closed risk must record actor, time, and close note.");
    }

    private static void GuardImpactReport(EntityEntry<ExecutionImpactReport> entry)
    {
        if (entry.State == EntityState.Deleted) throw new InvalidOperationException("Impact reports are append-only and cannot be deleted.");
        if (entry.State != EntityState.Modified) return;

        if (Changed(entry, nameof(ExecutionImpactReport.ProjectId))
            || Changed(entry, nameof(ExecutionImpactReport.StageId))
            || Changed(entry, nameof(ExecutionImpactReport.ProgressReportId))
            || Changed(entry, nameof(ExecutionImpactReport.AttemptNumber))
            || Changed(entry, nameof(ExecutionImpactReport.SupersedesImpactReportId))
            || Changed(entry, nameof(ExecutionImpactReport.Title))
            || Changed(entry, nameof(ExecutionImpactReport.Summary))
            || Changed(entry, nameof(ExecutionImpactReport.Methodology))
            || Changed(entry, nameof(ExecutionImpactReport.Geography))
            || Changed(entry, nameof(ExecutionImpactReport.SubmittedBySubject))
            || Changed(entry, nameof(ExecutionImpactReport.SubmittedAtUtc)))
            throw new InvalidOperationException("Submitted impact report content and identity are immutable.");

        var before = entry.OriginalValues.GetValue<string>(nameof(ExecutionImpactReport.Status));
        var after = entry.CurrentValues.GetValue<string>(nameof(ExecutionImpactReport.Status));
        var allowed = (before, after) switch
        {
            (ExecutionImpactReportStatuses.Submitted, ExecutionImpactReportStatuses.Approved) => true,
            (ExecutionImpactReportStatuses.Submitted, ExecutionImpactReportStatuses.Rejected) => true,
            (ExecutionImpactReportStatuses.Approved, ExecutionImpactReportStatuses.Published) => true,
            _ => false
        };
        if (!allowed) throw new InvalidOperationException($"Illegal impact report transition: {before} -> {after}.");

        if (before == ExecutionImpactReportStatuses.Submitted)
        {
            RequireReviewEvidence(entry, nameof(ExecutionImpactReport.ReviewedBySubject), nameof(ExecutionImpactReport.ReviewedAtUtc), "A reviewed impact report must record reviewer identity and time.");
        }
        else if (Changed(entry, nameof(ExecutionImpactReport.ReviewedBySubject))
                 || Changed(entry, nameof(ExecutionImpactReport.ReviewedAtUtc))
                 || Changed(entry, nameof(ExecutionImpactReport.ReviewNote)))
        {
            throw new InvalidOperationException("Impact review evidence is immutable after approval.");
        }

        if (after == ExecutionImpactReportStatuses.Published
            && (string.IsNullOrWhiteSpace(entry.CurrentValues.GetValue<string?>(nameof(ExecutionImpactReport.PublishedBySubject)))
                || entry.CurrentValues.GetValue<DateTimeOffset?>(nameof(ExecutionImpactReport.PublishedAtUtc)) is null))
            throw new InvalidOperationException("A published impact report must record publisher identity and time.");
    }

    private static void GuardAppendOnly<TEntity>(IEnumerable<EntityEntry<TEntity>> entries, string message) where TEntity : class
    {
        foreach (var entry in entries)
        {
            if (entry.State is EntityState.Modified or EntityState.Deleted) throw new InvalidOperationException(message);
        }
    }

    private static void RequireReviewEvidence<TEntity>(EntityEntry<TEntity> entry, string actorProperty, string timeProperty, string message) where TEntity : class
    {
        if (entry.CurrentValues.GetValue<DateTimeOffset?>(timeProperty) is null
            || string.IsNullOrWhiteSpace(entry.CurrentValues.GetValue<string?>(actorProperty)))
            throw new InvalidOperationException(message);
    }

    private static bool Changed<TEntity>(EntityEntry<TEntity> entry, string propertyName) where TEntity : class =>
        !Equals(entry.OriginalValues[propertyName], entry.CurrentValues[propertyName]);
}
