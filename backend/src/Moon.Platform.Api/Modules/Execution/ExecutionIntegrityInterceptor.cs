using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.ChangeTracking;
using Microsoft.EntityFrameworkCore.Diagnostics;

namespace Moon.Platform.Api.Modules.Execution;

public sealed class ExecutionIntegrityInterceptor : SaveChangesInterceptor
{
    public override InterceptionResult<int> SavingChanges(
        DbContextEventData eventData,
        InterceptionResult<int> result)
    {
        Guard(eventData.Context);
        return result;
    }

    public override ValueTask<InterceptionResult<int>> SavingChangesAsync(
        DbContextEventData eventData,
        InterceptionResult<int> result,
        CancellationToken cancellationToken = default)
    {
        Guard(eventData.Context);
        return ValueTask.FromResult(result);
    }

    private static void Guard(DbContext? dbContext)
    {
        if (dbContext is null)
        {
            return;
        }

        foreach (var entry in dbContext.ChangeTracker.Entries<ExecutionStage>())
        {
            GuardStage(entry);
        }

        foreach (var entry in dbContext.ChangeTracker.Entries<ProgressReport>())
        {
            GuardReport(entry);
        }

        foreach (var entry in dbContext.ChangeTracker.Entries<ExecutionExpense>())
        {
            GuardExpense(entry);
        }

        foreach (var entry in dbContext.ChangeTracker.Entries<ExecutionRisk>())
        {
            GuardRisk(entry);
        }

        foreach (var entry in dbContext.ChangeTracker.Entries<ExecutionFreezeEvent>())
        {
            if (entry.State is EntityState.Modified or EntityState.Deleted)
            {
                throw new InvalidOperationException("Execution freeze history is append-only.");
            }
        }

        foreach (var entry in dbContext.ChangeTracker.Entries<ExecutionDisbursement>())
        {
            if (entry.State is EntityState.Modified or EntityState.Deleted)
            {
                throw new InvalidOperationException("Execution disbursements are append-only; corrections must use ledger reversals.");
            }
        }
    }

    private static void GuardStage(EntityEntry<ExecutionStage> entry)
    {
        if (entry.State == EntityState.Deleted)
        {
            throw new InvalidOperationException("Execution stages are append-only and cannot be deleted.");
        }

        if (entry.State != EntityState.Modified)
        {
            return;
        }

        if (Changed(entry, nameof(ExecutionStage.ProjectId))
            || Changed(entry, nameof(ExecutionStage.SequenceNumber))
            || Changed(entry, nameof(ExecutionStage.Title))
            || Changed(entry, nameof(ExecutionStage.Description))
            || Changed(entry, nameof(ExecutionStage.DisbursementLimitMinor))
            || Changed(entry, nameof(ExecutionStage.DisbursementCurrency))
            || Changed(entry, nameof(ExecutionStage.CreatedBySubject))
            || Changed(entry, nameof(ExecutionStage.CreatedAtUtc)))
        {
            throw new InvalidOperationException("Execution stage identity and terms are immutable.");
        }

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

        if (!allowed)
        {
            throw new InvalidOperationException($"Illegal execution stage transition: {before} -> {after}.");
        }

        if (after == ExecutionStageStatuses.Active
            && entry.CurrentValues.GetValue<DateTimeOffset?>(nameof(ExecutionStage.ActivatedAtUtc)) is null)
        {
            throw new InvalidOperationException("An active execution stage must have an activation time.");
        }

        if (after == ExecutionStageStatuses.Completed
            && entry.CurrentValues.GetValue<DateTimeOffset?>(nameof(ExecutionStage.CompletedAtUtc)) is null)
        {
            throw new InvalidOperationException("A completed execution stage must have a completion time.");
        }
    }

    private static void GuardReport(EntityEntry<ProgressReport> entry)
    {
        if (entry.State == EntityState.Deleted)
        {
            throw new InvalidOperationException("Progress reports are append-only and cannot be deleted.");
        }

        if (entry.State != EntityState.Modified)
        {
            return;
        }

        if (Changed(entry, nameof(ProgressReport.ProjectId))
            || Changed(entry, nameof(ProgressReport.StageId))
            || Changed(entry, nameof(ProgressReport.AttemptNumber))
            || Changed(entry, nameof(ProgressReport.SubmittedBySubject))
            || Changed(entry, nameof(ProgressReport.Summary))
            || Changed(entry, nameof(ProgressReport.SubmittedAtUtc)))
        {
            throw new InvalidOperationException("Submitted progress report content and identity are immutable.");
        }

        var before = entry.OriginalValues.GetValue<string>(nameof(ProgressReport.Status));
        var after = entry.CurrentValues.GetValue<string>(nameof(ProgressReport.Status));
        if (before != ProgressReportStatuses.Submitted
            || after is not (ProgressReportStatuses.Approved or ProgressReportStatuses.Rejected))
        {
            throw new InvalidOperationException($"Illegal progress report transition: {before} -> {after}.");
        }

        if (entry.CurrentValues.GetValue<DateTimeOffset?>(nameof(ProgressReport.ReviewedAtUtc)) is null
            || string.IsNullOrWhiteSpace(entry.CurrentValues.GetValue<string?>(nameof(ProgressReport.ReviewedBySubject))))
        {
            throw new InvalidOperationException("A reviewed progress report must record reviewer identity and time.");
        }
    }

    private static void GuardExpense(EntityEntry<ExecutionExpense> entry)
    {
        if (entry.State == EntityState.Deleted)
        {
            throw new InvalidOperationException("Execution expenses are append-only and cannot be deleted.");
        }

        if (entry.State != EntityState.Modified)
        {
            return;
        }

        if (Changed(entry, nameof(ExecutionExpense.ProjectId))
            || Changed(entry, nameof(ExecutionExpense.StageId))
            || Changed(entry, nameof(ExecutionExpense.AmountMinor))
            || Changed(entry, nameof(ExecutionExpense.Currency))
            || Changed(entry, nameof(ExecutionExpense.Category))
            || Changed(entry, nameof(ExecutionExpense.Description))
            || Changed(entry, nameof(ExecutionExpense.EvidenceReference))
            || Changed(entry, nameof(ExecutionExpense.SubmittedBySubject))
            || Changed(entry, nameof(ExecutionExpense.SubmittedAtUtc)))
        {
            throw new InvalidOperationException("Submitted execution expense content and identity are immutable.");
        }

        var before = entry.OriginalValues.GetValue<string>(nameof(ExecutionExpense.Status));
        var after = entry.CurrentValues.GetValue<string>(nameof(ExecutionExpense.Status));
        if (before != ExecutionExpenseStatuses.Submitted
            || after is not (ExecutionExpenseStatuses.Approved or ExecutionExpenseStatuses.Rejected))
        {
            throw new InvalidOperationException($"Illegal execution expense transition: {before} -> {after}.");
        }

        if (entry.CurrentValues.GetValue<DateTimeOffset?>(nameof(ExecutionExpense.ReviewedAtUtc)) is null
            || string.IsNullOrWhiteSpace(entry.CurrentValues.GetValue<string?>(nameof(ExecutionExpense.ReviewedBySubject))))
        {
            throw new InvalidOperationException("A reviewed expense must record reviewer identity and time.");
        }
    }

    private static void GuardRisk(EntityEntry<ExecutionRisk> entry)
    {
        if (entry.State == EntityState.Deleted)
        {
            throw new InvalidOperationException("Execution risks cannot be deleted.");
        }

        if (entry.State != EntityState.Modified)
        {
            return;
        }

        if (Changed(entry, nameof(ExecutionRisk.ProjectId))
            || Changed(entry, nameof(ExecutionRisk.StageId))
            || Changed(entry, nameof(ExecutionRisk.Severity))
            || Changed(entry, nameof(ExecutionRisk.Title))
            || Changed(entry, nameof(ExecutionRisk.Description))
            || Changed(entry, nameof(ExecutionRisk.ReportedBySubject))
            || Changed(entry, nameof(ExecutionRisk.ReportedAtUtc)))
        {
            throw new InvalidOperationException("Reported risk identity and content are immutable.");
        }

        var before = entry.OriginalValues.GetValue<string>(nameof(ExecutionRisk.Status));
        var after = entry.CurrentValues.GetValue<string>(nameof(ExecutionRisk.Status));
        var allowed = (before, after) switch
        {
            (ExecutionRiskStatuses.Open, ExecutionRiskStatuses.Mitigated) => true,
            (ExecutionRiskStatuses.Open, ExecutionRiskStatuses.Closed) => true,
            (ExecutionRiskStatuses.Mitigated, ExecutionRiskStatuses.Closed) => true,
            _ => false
        };
        if (!allowed)
        {
            throw new InvalidOperationException($"Illegal execution risk transition: {before} -> {after}.");
        }

        if (before == ExecutionRiskStatuses.Mitigated
            && (Changed(entry, nameof(ExecutionRisk.MitigatedBySubject))
                || Changed(entry, nameof(ExecutionRisk.MitigatedAtUtc))
                || Changed(entry, nameof(ExecutionRisk.MitigationNote))))
        {
            throw new InvalidOperationException("Recorded risk mitigation evidence is immutable.");
        }

        if (after == ExecutionRiskStatuses.Mitigated
            && (string.IsNullOrWhiteSpace(entry.CurrentValues.GetValue<string?>(nameof(ExecutionRisk.MitigatedBySubject)))
                || entry.CurrentValues.GetValue<DateTimeOffset?>(nameof(ExecutionRisk.MitigatedAtUtc)) is null
                || string.IsNullOrWhiteSpace(entry.CurrentValues.GetValue<string?>(nameof(ExecutionRisk.MitigationNote)))))
        {
            throw new InvalidOperationException("A mitigated risk must record actor, time, and mitigation note.");
        }

        if (after == ExecutionRiskStatuses.Closed
            && (string.IsNullOrWhiteSpace(entry.CurrentValues.GetValue<string?>(nameof(ExecutionRisk.ClosedBySubject)))
                || entry.CurrentValues.GetValue<DateTimeOffset?>(nameof(ExecutionRisk.ClosedAtUtc)) is null
                || string.IsNullOrWhiteSpace(entry.CurrentValues.GetValue<string?>(nameof(ExecutionRisk.CloseNote)))))
        {
            throw new InvalidOperationException("A closed risk must record actor, time, and close note.");
        }
    }

    private static bool Changed<TEntity>(EntityEntry<TEntity> entry, string propertyName)
        where TEntity : class
        => !Equals(entry.OriginalValues[propertyName], entry.CurrentValues[propertyName]);
}
