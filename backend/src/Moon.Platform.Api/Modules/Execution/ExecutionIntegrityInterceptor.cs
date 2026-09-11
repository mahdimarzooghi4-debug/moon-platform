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

    private static bool Changed<TEntity>(EntityEntry<TEntity> entry, string propertyName)
        where TEntity : class
        => !Equals(entry.OriginalValues[propertyName], entry.CurrentValues[propertyName]);
}
