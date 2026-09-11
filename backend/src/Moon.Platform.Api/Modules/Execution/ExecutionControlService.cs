using System.Text.Json;
using Microsoft.EntityFrameworkCore;
using Moon.Platform.Api.Common.Auditing;
using Moon.Platform.Api.Common.Authorization;
using Moon.Platform.Api.Common.Messaging;
using Moon.Platform.Api.Infrastructure.Persistence;
using Moon.Platform.Api.Modules.Funding;
using Moon.Platform.Api.Modules.Projects;
using Npgsql;

namespace Moon.Platform.Api.Modules.Execution;

public interface IExecutionControlService
{
    Task<ExecutionControlOperationResult> SubmitExpenseAsync(Guid projectId, Guid stageId, long amountMinor, string currency, string category, string description, string? evidenceReference, string actorSubject, string correlationId, string? ipAddress, CancellationToken cancellationToken = default);
    Task<ExecutionControlOperationResult> ReviewExpenseAsync(Guid projectId, Guid stageId, Guid expenseId, string decision, string? note, string actorSubject, string correlationId, string? ipAddress, CancellationToken cancellationToken = default);
    Task<ExecutionControlOperationResult> ReportRiskAsync(Guid projectId, Guid stageId, string severity, string title, string description, string actorSubject, string correlationId, string? ipAddress, CancellationToken cancellationToken = default);
    Task<ExecutionControlOperationResult> TransitionRiskAsync(Guid projectId, Guid stageId, Guid riskId, string action, string note, string actorSubject, string correlationId, string? ipAddress, CancellationToken cancellationToken = default);
    Task<ExecutionControlOperationResult> FreezeAsync(Guid projectId, string reason, string actorSubject, string correlationId, string? ipAddress, CancellationToken cancellationToken = default);
    Task<ExecutionControlOperationResult> UnfreezeAsync(Guid projectId, string reason, string actorSubject, string correlationId, string? ipAddress, CancellationToken cancellationToken = default);
    Task<ExecutionControlOperationResult> ReleaseDisbursementAsync(Guid projectId, Guid stageId, long amountMinor, string currency, string idempotencyKey, string actorSubject, string correlationId, string? ipAddress, CancellationToken cancellationToken = default);
}

public sealed class ExecutionControlService(MoonDbContext dbContext, IAuditWriter auditWriter, IOrganizationAccessService organizationAccess, IOutboxWriter? outboxWriter = null) : IExecutionControlService
{
    private readonly IOutboxWriter _outboxWriter = outboxWriter ?? new OutboxWriter(dbContext);

    private DbSet<ExecutionExpense> Expenses => dbContext.Set<ExecutionExpense>();
    private DbSet<ExecutionRisk> Risks => dbContext.Set<ExecutionRisk>();
    private DbSet<ExecutionFreezeEvent> FreezeEvents => dbContext.Set<ExecutionFreezeEvent>();
    private DbSet<ExecutionDisbursement> Disbursements => dbContext.Set<ExecutionDisbursement>();
    private DbSet<ExecutionStage> Stages => dbContext.Set<ExecutionStage>();

    public async Task<ExecutionControlOperationResult> SubmitExpenseAsync(Guid projectId, Guid stageId, long amountMinor, string currency, string category, string description, string? evidenceReference, string actorSubject, string correlationId, string? ipAddress, CancellationToken cancellationToken = default)
    {
        currency = NormalizeCurrency(currency);
        category = category?.Trim() ?? string.Empty;
        description = description?.Trim() ?? string.Empty;
        evidenceReference = string.IsNullOrWhiteSpace(evidenceReference) ? null : evidenceReference.Trim();
        if (amountMinor <= 0 || !IsValidCurrency(currency))
            return Failure("execution_expense_amount_invalid", "Expense amount must be positive and currency must be a three-letter code.");
        if (category.Length is < 1 or > 120 || description.Length is < 1 or > 4000 || evidenceReference?.Length > 2000)
            return Failure("execution_expense_invalid", "Expense category, description, or evidence reference is invalid.");

        var access = await RequireActiveProjectMemberAsync(projectId, actorSubject, cancellationToken);
        if (access.Error is not null)
            return access.Error;

        await using var transaction = await dbContext.Database.BeginTransactionAsync(cancellationToken);
        var project = await LockProjectAsync(projectId, cancellationToken);
        if (project is null)
        {
            await transaction.RollbackAsync(cancellationToken);
            return Failure("project_not_found", "Project was not found.");
        }
        if (await IsFrozenAsync(projectId, cancellationToken))
        {
            await transaction.RollbackAsync(cancellationToken);
            return Failure("execution_frozen", "Execution is frozen; new expenses cannot be submitted.");
        }

        var stage = await LockStageAsync(stageId, cancellationToken);
        if (stage is null || stage.ProjectId != projectId)
        {
            await transaction.RollbackAsync(cancellationToken);
            return Failure("execution_stage_not_found", "Execution stage was not found.");
        }
        if (stage.Status != ExecutionStageStatuses.Active)
        {
            await transaction.RollbackAsync(cancellationToken);
            return Failure("execution_expense_stage_not_active", "Expenses can be submitted only while the stage is active.");
        }
        if (!string.IsNullOrWhiteSpace(stage.DisbursementCurrency) && !string.Equals(stage.DisbursementCurrency, currency, StringComparison.Ordinal))
        {
            await transaction.RollbackAsync(cancellationToken);
            return Failure("execution_expense_currency_mismatch", "Expense currency must match the stage disbursement currency.");
        }

        var expense = new ExecutionExpense
        {
            ProjectId = projectId,
            StageId = stageId,
            AmountMinor = amountMinor,
            Currency = currency,
            Category = category,
            Description = description,
            EvidenceReference = evidenceReference,
            SubmittedBySubject = actorSubject
        };
        Expenses.Add(expense);
        await dbContext.SaveChangesAsync(cancellationToken);
        await AppendAuditAsync(actorSubject, "execution.expense.submitted", "execution_expense", expense.Id, project, correlationId, ipAddress,
            new { expense.StageId, expense.AmountMinor, expense.Currency, expense.Category, expense.Status }, cancellationToken);
        await transaction.CommitAsync(cancellationToken);
        return ExecutionControlOperationResult.Success(await BuildStateAsync(project, cancellationToken));
    }

    public async Task<ExecutionControlOperationResult> ReviewExpenseAsync(Guid projectId, Guid stageId, Guid expenseId, string decision, string? note, string actorSubject, string correlationId, string? ipAddress, CancellationToken cancellationToken = default)
    {
        decision = decision?.Trim().ToLowerInvariant() ?? string.Empty;
        note = string.IsNullOrWhiteSpace(note) ? null : note.Trim();
        if (decision is not ("approve" or "reject"))
            return Failure("execution_expense_review_invalid", "Expense review decision must be either 'approve' or 'reject'.");
        if (note?.Length > 4000 || decision == "reject" && string.IsNullOrWhiteSpace(note))
            return Failure("execution_expense_review_note_invalid", "A rejection requires a note; review notes must be at most 4000 characters.");
        if (!await IsActiveUserAsync(actorSubject, cancellationToken))
            return Failure("execution_actor_inactive", "Expense reviewer must be an active synchronized user.");

        await using var transaction = await dbContext.Database.BeginTransactionAsync(cancellationToken);
        var project = await LockProjectAsync(projectId, cancellationToken);
        if (project is null)
        {
            await transaction.RollbackAsync(cancellationToken);
            return Failure("project_not_found", "Project was not found.");
        }
        if (await IsFrozenAsync(projectId, cancellationToken))
        {
            await transaction.RollbackAsync(cancellationToken);
            return Failure("execution_frozen", "Execution is frozen; expenses cannot be reviewed.");
        }

        var expense = await Expenses
            .FromSqlInterpolated($"SELECT * FROM moon.execution_expenses WHERE \"Id\" = {expenseId} FOR UPDATE")
            .SingleOrDefaultAsync(cancellationToken);
        if (expense is null || expense.ProjectId != projectId || expense.StageId != stageId)
        {
            await transaction.RollbackAsync(cancellationToken);
            return Failure("execution_expense_not_found", "Execution expense was not found.");
        }
        if (expense.Status != ExecutionExpenseStatuses.Submitted)
        {
            await transaction.RollbackAsync(cancellationToken);
            return Failure("execution_expense_already_reviewed", "Only a submitted expense may be reviewed.");
        }

        expense.Status = decision == "approve" ? ExecutionExpenseStatuses.Approved : ExecutionExpenseStatuses.Rejected;
        expense.ReviewedBySubject = actorSubject;
        expense.ReviewedAtUtc = DateTimeOffset.UtcNow;
        expense.ReviewNote = note;
        await dbContext.SaveChangesAsync(cancellationToken);
        await AppendAuditAsync(actorSubject, decision == "approve" ? "execution.expense.approved" : "execution.expense.rejected", "execution_expense", expense.Id, project, correlationId, ipAddress,
            new { expense.StageId, expense.Status, expense.ReviewedBySubject, expense.ReviewedAtUtc, expense.ReviewNote }, cancellationToken);
        await transaction.CommitAsync(cancellationToken);
        return ExecutionControlOperationResult.Success(await BuildStateAsync(project, cancellationToken));
    }

    public async Task<ExecutionControlOperationResult> ReportRiskAsync(Guid projectId, Guid stageId, string severity, string title, string description, string actorSubject, string correlationId, string? ipAddress, CancellationToken cancellationToken = default)
    {
        severity = severity?.Trim().ToLowerInvariant() ?? string.Empty;
        title = title?.Trim() ?? string.Empty;
        description = description?.Trim() ?? string.Empty;
        if (!ExecutionRiskSeverities.IsValid(severity) || title.Length is < 1 or > 200 || description.Length is < 1 or > 4000)
            return Failure("execution_risk_invalid", "Risk severity, title, or description is invalid.");

        var access = await RequireActiveProjectMemberAsync(projectId, actorSubject, cancellationToken);
        if (access.Error is not null)
            return access.Error;

        await using var transaction = await dbContext.Database.BeginTransactionAsync(cancellationToken);
        var project = await LockProjectAsync(projectId, cancellationToken);
        if (project is null)
        {
            await transaction.RollbackAsync(cancellationToken);
            return Failure("project_not_found", "Project was not found.");
        }
        var stage = await LockStageAsync(stageId, cancellationToken);
        if (stage is null || stage.ProjectId != projectId)
        {
            await transaction.RollbackAsync(cancellationToken);
            return Failure("execution_stage_not_found", "Execution stage was not found.");
        }
        if (stage.Status is not (ExecutionStageStatuses.Active or ExecutionStageStatuses.ReportSubmitted))
        {
            await transaction.RollbackAsync(cancellationToken);
            return Failure("execution_risk_stage_closed", "Risks can be reported only for the current execution stage.");
        }

        var risk = new ExecutionRisk
        {
            ProjectId = projectId,
            StageId = stageId,
            Severity = severity,
            Title = title,
            Description = description,
            ReportedBySubject = actorSubject
        };
        Risks.Add(risk);
        await dbContext.SaveChangesAsync(cancellationToken);
        await AppendAuditAsync(actorSubject, "execution.risk.reported", "execution_risk", risk.Id, project, correlationId, ipAddress,
            new { risk.StageId, risk.Severity, risk.Title, risk.Status }, cancellationToken);
        await transaction.CommitAsync(cancellationToken);
        return ExecutionControlOperationResult.Success(await BuildStateAsync(project, cancellationToken));
    }

    public async Task<ExecutionControlOperationResult> TransitionRiskAsync(Guid projectId, Guid stageId, Guid riskId, string action, string note, string actorSubject, string correlationId, string? ipAddress, CancellationToken cancellationToken = default)
    {
        action = action?.Trim().ToLowerInvariant() ?? string.Empty;
        note = note?.Trim() ?? string.Empty;
        if (action is not ("mitigate" or "close") || note.Length is < 1 or > 4000)
            return Failure("execution_risk_transition_invalid", "Risk action must be 'mitigate' or 'close' with a note up to 4000 characters.");
        if (!await IsActiveUserAsync(actorSubject, cancellationToken))
            return Failure("execution_actor_inactive", "Risk manager must be an active synchronized user.");

        await using var transaction = await dbContext.Database.BeginTransactionAsync(cancellationToken);
        var project = await LockProjectAsync(projectId, cancellationToken);
        if (project is null)
        {
            await transaction.RollbackAsync(cancellationToken);
            return Failure("project_not_found", "Project was not found.");
        }
        var risk = await Risks.FromSqlInterpolated($"SELECT * FROM moon.execution_risks WHERE \"Id\" = {riskId} FOR UPDATE").SingleOrDefaultAsync(cancellationToken);
        if (risk is null || risk.ProjectId != projectId || risk.StageId != stageId)
        {
            await transaction.RollbackAsync(cancellationToken);
            return Failure("execution_risk_not_found", "Execution risk was not found.");
        }

        var now = DateTimeOffset.UtcNow;
        if (action == "mitigate")
        {
            if (risk.Status != ExecutionRiskStatuses.Open)
            {
                await transaction.RollbackAsync(cancellationToken);
                return Failure("execution_risk_transition_conflict", "Only an open risk may be marked mitigated.");
            }
            risk.Status = ExecutionRiskStatuses.Mitigated;
            risk.MitigatedBySubject = actorSubject;
            risk.MitigatedAtUtc = now;
            risk.MitigationNote = note;
        }
        else
        {
            if (risk.Status is not (ExecutionRiskStatuses.Open or ExecutionRiskStatuses.Mitigated))
            {
                await transaction.RollbackAsync(cancellationToken);
                return Failure("execution_risk_transition_conflict", "Only an open or mitigated risk may be closed.");
            }
            risk.Status = ExecutionRiskStatuses.Closed;
            risk.ClosedBySubject = actorSubject;
            risk.ClosedAtUtc = now;
            risk.CloseNote = note;
        }

        await dbContext.SaveChangesAsync(cancellationToken);
        await AppendAuditAsync(actorSubject, action == "mitigate" ? "execution.risk.mitigated" : "execution.risk.closed", "execution_risk", risk.Id, project, correlationId, ipAddress,
            new { risk.StageId, risk.Status, risk.MitigatedBySubject, risk.MitigatedAtUtc, risk.MitigationNote, risk.ClosedBySubject, risk.ClosedAtUtc, risk.CloseNote }, cancellationToken);
        await transaction.CommitAsync(cancellationToken);
        return ExecutionControlOperationResult.Success(await BuildStateAsync(project, cancellationToken));
    }

    public Task<ExecutionControlOperationResult> FreezeAsync(Guid projectId, string reason, string actorSubject, string correlationId, string? ipAddress, CancellationToken cancellationToken = default) =>
        SetFreezeStateAsync(projectId, true, reason, actorSubject, correlationId, ipAddress, cancellationToken);

    public Task<ExecutionControlOperationResult> UnfreezeAsync(Guid projectId, string reason, string actorSubject, string correlationId, string? ipAddress, CancellationToken cancellationToken = default) =>
        SetFreezeStateAsync(projectId, false, reason, actorSubject, correlationId, ipAddress, cancellationToken);

    public async Task<ExecutionControlOperationResult> ReleaseDisbursementAsync(Guid projectId, Guid stageId, long amountMinor, string currency, string idempotencyKey, string actorSubject, string correlationId, string? ipAddress, CancellationToken cancellationToken = default)
    {
        currency = NormalizeCurrency(currency);
        idempotencyKey = idempotencyKey?.Trim() ?? string.Empty;
        if (amountMinor <= 0 || !IsValidCurrency(currency))
            return Failure("execution_disbursement_amount_invalid", "Disbursement amount must be positive and currency must be a three-letter code.");
        if (idempotencyKey.Length is < 1 or > 128)
            return Failure("execution_disbursement_idempotency_invalid", "Idempotency-Key is required and must be at most 128 characters.");
        if (!await IsActiveUserAsync(actorSubject, cancellationToken))
            return Failure("execution_actor_inactive", "Disbursement actor must be an active synchronized user.");

        var replay = await Disbursements.AsNoTracking().SingleOrDefaultAsync(x => x.ReleasedBySubject == actorSubject && x.IdempotencyKey == idempotencyKey, cancellationToken);
        if (replay is not null)
            return await ResolveDisbursementReplayAsync(replay, projectId, stageId, amountMinor, currency, cancellationToken);
        if (await dbContext.LedgerJournals.AsNoTracking().AnyAsync(x => x.CreatedBySubject == actorSubject && x.IdempotencyKey == idempotencyKey, cancellationToken))
            return Failure("execution_disbursement_idempotency_conflict", "The Idempotency-Key is already used by another ledger operation.");

        await using var transaction = await dbContext.Database.BeginTransactionAsync(cancellationToken);
        var project = await LockProjectAsync(projectId, cancellationToken);
        if (project is null)
        {
            await transaction.RollbackAsync(cancellationToken);
            return Failure("project_not_found", "Project was not found.");
        }
        if (await IsFrozenAsync(projectId, cancellationToken))
        {
            await transaction.RollbackAsync(cancellationToken);
            return Failure("execution_frozen", "Execution is frozen; staged disbursement is blocked.");
        }

        var stage = await LockStageAsync(stageId, cancellationToken);
        if (stage is null || stage.ProjectId != projectId)
        {
            await transaction.RollbackAsync(cancellationToken);
            return Failure("execution_stage_not_found", "Execution stage was not found.");
        }
        if (stage.Status != ExecutionStageStatuses.Active)
        {
            await transaction.RollbackAsync(cancellationToken);
            return Failure("execution_disbursement_stage_not_active", "Funds can be released only for the active execution stage.");
        }
        if (stage.DisbursementLimitMinor is not > 0 || string.IsNullOrWhiteSpace(stage.DisbursementCurrency))
        {
            await transaction.RollbackAsync(cancellationToken);
            return Failure("execution_disbursement_not_configured", "This stage has no configured disbursement limit.");
        }
        if (!string.Equals(stage.DisbursementCurrency, currency, StringComparison.Ordinal))
        {
            await transaction.RollbackAsync(cancellationToken);
            return Failure("execution_disbursement_currency_mismatch", "Disbursement currency must match the configured stage currency.");
        }

        var alreadyReleased = await GetActiveStageDisbursementAmountAsync(stageId, currency, cancellationToken);
        if (amountMinor > stage.DisbursementLimitMinor.Value - alreadyReleased)
        {
            await transaction.RollbackAsync(cancellationToken);
            return Failure("execution_disbursement_stage_limit_exceeded", "The requested release exceeds the remaining stage disbursement limit.");
        }
        var allocable = await GetAllocableAmountAsync(projectId, currency, cancellationToken);
        if (amountMinor > allocable)
        {
            await transaction.RollbackAsync(cancellationToken);
            return Failure("execution_disbursement_insufficient_balance", "The project ledger does not have enough allocable balance for this release.");
        }

        var disbursement = new ExecutionDisbursement
        {
            ProjectId = projectId,
            StageId = stageId,
            AmountMinor = amountMinor,
            Currency = currency,
            IdempotencyKey = idempotencyKey,
            ReleasedBySubject = actorSubject
        };
        var journal = new LedgerJournal
        {
            PaymentId = null,
            ProjectId = projectId,
            Currency = currency,
            Kind = LedgerJournalKinds.StageDisbursement,
            IdempotencyKey = idempotencyKey,
            CreatedBySubject = actorSubject,
            ExecutionDisbursementId = disbursement.Id
        };
        journal.Entries.Add(new LedgerEntry { JournalId = journal.Id, ProjectId = projectId, AccountCode = LedgerAccountCodes.ProjectFunds, Side = LedgerEntrySides.Debit, AmountMinor = amountMinor, Currency = currency, Journal = journal });
        journal.Entries.Add(new LedgerEntry { JournalId = journal.Id, ProjectId = projectId, AccountCode = LedgerAccountCodes.DisbursementPayable, Side = LedgerEntrySides.Credit, AmountMinor = amountMinor, Currency = currency, Journal = journal });
        Disbursements.Add(disbursement);
        dbContext.LedgerJournals.Add(journal);

        try
        {
            await dbContext.SaveChangesAsync(cancellationToken);
        }
        catch (DbUpdateException exception) when (exception.InnerException is PostgresException { SqlState: PostgresErrorCodes.UniqueViolation })
        {
            await transaction.RollbackAsync(cancellationToken);
            dbContext.ChangeTracker.Clear();
            var raced = await Disbursements.AsNoTracking().SingleOrDefaultAsync(x => x.ReleasedBySubject == actorSubject && x.IdempotencyKey == idempotencyKey, cancellationToken);
            return raced is null
                ? Failure("execution_disbursement_conflict", "Concurrent disbursement could not be resolved safely.")
                : await ResolveDisbursementReplayAsync(raced, projectId, stageId, amountMinor, currency, cancellationToken);
        }

        await AppendAuditAsync(actorSubject, "execution.disbursement.released", "execution_disbursement", disbursement.Id, project, correlationId, ipAddress,
            new { disbursement.StageId, disbursement.AmountMinor, disbursement.Currency, LedgerJournalId = journal.Id, disbursement.ReleasedAtUtc }, cancellationToken);
        var integrationEvent = new ExecutionDisbursementReleasedEvent(disbursement.Id, projectId, stageId, amountMinor, currency, journal.Id, disbursement.ReleasedAtUtc);
        await _outboxWriter.EnqueueAsync(new OutboxWriteRequest(
            IntegrationEventTypes.ExecutionDisbursementReleased,
            "execution_disbursement",
            disbursement.Id.ToString(),
            $"execution-disbursement-released:{disbursement.Id:N}",
            IntegrationEventSerialization.ToJson(integrationEvent),
            correlationId,
            disbursement.ReleasedAtUtc), cancellationToken);
        await transaction.CommitAsync(cancellationToken);
        return ExecutionControlOperationResult.Success(await BuildStateAsync(project, cancellationToken));
    }

    private async Task<ExecutionControlOperationResult> SetFreezeStateAsync(Guid projectId, bool freeze, string reason, string actorSubject, string correlationId, string? ipAddress, CancellationToken cancellationToken)
    {
        reason = reason?.Trim() ?? string.Empty;
        if (reason.Length is < 1 or > 4000)
            return Failure("execution_freeze_reason_invalid", "Freeze/unfreeze reason is required and must be at most 4000 characters.");
        if (!await IsActiveUserAsync(actorSubject, cancellationToken))
            return Failure("execution_actor_inactive", "Freeze manager must be an active synchronized user.");

        await using var transaction = await dbContext.Database.BeginTransactionAsync(cancellationToken);
        var project = await LockProjectAsync(projectId, cancellationToken);
        if (project is null)
        {
            await transaction.RollbackAsync(cancellationToken);
            return Failure("project_not_found", "Project was not found.");
        }
        if (!await Stages.AsNoTracking().AnyAsync(x => x.ProjectId == projectId, cancellationToken))
        {
            await transaction.RollbackAsync(cancellationToken);
            return Failure("execution_not_initialized", "Execution must be initialized before it can be frozen or unfrozen.");
        }

        var latest = await FreezeEvents.AsNoTracking().Where(x => x.ProjectId == projectId).OrderByDescending(x => x.SequenceNumber).FirstOrDefaultAsync(cancellationToken);
        var currentlyFrozen = latest?.Action == ExecutionFreezeActions.Freeze;
        if (freeze == currentlyFrozen)
        {
            await transaction.RollbackAsync(cancellationToken);
            return Failure(freeze ? "execution_already_frozen" : "execution_not_frozen", freeze ? "Execution is already frozen." : "Execution is not currently frozen.");
        }

        var freezeEvent = new ExecutionFreezeEvent
        {
            ProjectId = projectId,
            SequenceNumber = (latest?.SequenceNumber ?? 0) + 1,
            Action = freeze ? ExecutionFreezeActions.Freeze : ExecutionFreezeActions.Unfreeze,
            Reason = reason,
            ActorSubject = actorSubject
        };
        FreezeEvents.Add(freezeEvent);
        await dbContext.SaveChangesAsync(cancellationToken);
        await AppendAuditAsync(actorSubject, freeze ? "execution.frozen" : "execution.unfrozen", "project_execution", projectId, project, correlationId, ipAddress,
            new { freezeEvent.SequenceNumber, freezeEvent.Action, freezeEvent.Reason, freezeEvent.OccurredAtUtc }, cancellationToken);
        await transaction.CommitAsync(cancellationToken);
        return ExecutionControlOperationResult.Success(await BuildStateAsync(project, cancellationToken));
    }

    private async Task<(Project? Project, ExecutionControlOperationResult? Error)> RequireActiveProjectMemberAsync(Guid projectId, string actorSubject, CancellationToken cancellationToken)
    {
        if (!await IsActiveUserAsync(actorSubject, cancellationToken))
            return (null, Failure("execution_actor_inactive", "Actor must be an active synchronized user."));
        var project = await dbContext.Projects.AsNoTracking().SingleOrDefaultAsync(x => x.Id == projectId, cancellationToken);
        if (project is null)
            return (null, Failure("project_not_found", "Project was not found."));
        if (!await organizationAccess.IsMemberAsync(actorSubject, project.OrganizationId, cancellationToken))
            return (null, Failure("execution_member_forbidden", "Only an active member of the project organization may perform this action."));
        return (project, null);
    }

    private async Task<ExecutionControlOperationResult> ResolveDisbursementReplayAsync(ExecutionDisbursement existing, Guid projectId, Guid stageId, long amountMinor, string currency, CancellationToken cancellationToken)
    {
        if (existing.ProjectId != projectId || existing.StageId != stageId || existing.AmountMinor != amountMinor || !string.Equals(existing.Currency, currency, StringComparison.Ordinal))
            return Failure("execution_disbursement_idempotency_conflict", "The Idempotency-Key cannot be reused for a different disbursement.");
        var project = await dbContext.Projects.AsNoTracking().SingleOrDefaultAsync(x => x.Id == projectId, cancellationToken);
        return project is null ? Failure("project_not_found", "Project was not found.") : ExecutionControlOperationResult.Success(await BuildStateAsync(project, cancellationToken), true);
    }

    private async Task<long> GetActiveStageDisbursementAmountAsync(Guid stageId, string currency, CancellationToken cancellationToken)
    {
        var disbursements = await Disbursements.AsNoTracking().Where(x => x.StageId == stageId && x.Currency == currency).Select(x => new { x.Id, x.AmountMinor }).ToListAsync(cancellationToken);
        if (disbursements.Count == 0)
            return 0;
        var ids = disbursements.Select(x => x.Id).ToArray();
        var journals = await dbContext.LedgerJournals.AsNoTracking()
            .Where(x => x.ExecutionDisbursementId.HasValue && ids.Contains(x.ExecutionDisbursementId.Value))
            .Select(x => new { x.Id, DisbursementId = x.ExecutionDisbursementId!.Value })
            .ToListAsync(cancellationToken);
        var journalIds = journals.Select(x => x.Id).ToArray();
        var reversed = journalIds.Length == 0
            ? new List<Guid>()
            : await dbContext.LedgerJournals.AsNoTracking().Where(x => x.ReversesJournalId.HasValue && journalIds.Contains(x.ReversesJournalId.Value)).Select(x => x.ReversesJournalId!.Value).ToListAsync(cancellationToken);
        var reversedSet = reversed.ToHashSet();
        var journalByDisbursement = journals.ToDictionary(x => x.DisbursementId, x => x.Id);
        return disbursements.Where(x => journalByDisbursement.TryGetValue(x.Id, out var journalId) && !reversedSet.Contains(journalId)).Sum(x => x.AmountMinor);
    }

    private async Task<long> GetAllocableAmountAsync(Guid projectId, string currency, CancellationToken cancellationToken)
    {
        var amount = await dbContext.LedgerEntries.AsNoTracking()
            .Where(x => x.ProjectId == projectId && x.Currency == currency && x.AccountCode == LedgerAccountCodes.ProjectFunds)
            .Select(x => (long?)(x.Side == LedgerEntrySides.Credit ? x.AmountMinor : -x.AmountMinor))
            .SumAsync(cancellationToken);
        return amount ?? 0L;
    }

    private async Task<ExecutionControlView> BuildStateAsync(Project project, CancellationToken cancellationToken)
    {
        var expenses = await Expenses.AsNoTracking().Where(x => x.ProjectId == project.Id).OrderBy(x => x.SubmittedAtUtc).ToListAsync(cancellationToken);
        var risks = await Risks.AsNoTracking().Where(x => x.ProjectId == project.Id).OrderBy(x => x.ReportedAtUtc).ToListAsync(cancellationToken);
        var freezeHistory = await FreezeEvents.AsNoTracking().Where(x => x.ProjectId == project.Id).OrderBy(x => x.SequenceNumber).ToListAsync(cancellationToken);
        var disbursements = await Disbursements.AsNoTracking().Where(x => x.ProjectId == project.Id).OrderBy(x => x.ReleasedAtUtc).ToListAsync(cancellationToken);
        var journals = await dbContext.LedgerJournals.AsNoTracking().Where(x => x.ProjectId == project.Id && (x.ExecutionDisbursementId.HasValue || x.ReversesJournalId.HasValue)).ToListAsync(cancellationToken);
        var journalByDisbursement = journals.Where(x => x.ExecutionDisbursementId.HasValue).ToDictionary(x => x.ExecutionDisbursementId!.Value, x => x.Id);
        var reversed = journals.Where(x => x.ReversesJournalId.HasValue).Select(x => x.ReversesJournalId!.Value).ToHashSet();

        return new ExecutionControlView(
            project.Id,
            project.OrganizationId,
            freezeHistory.LastOrDefault()?.Action == ExecutionFreezeActions.Freeze,
            expenses.Select(x => new ExecutionExpenseView(x.Id, x.StageId, x.AmountMinor, x.Currency, x.Category, x.Description, x.EvidenceReference, x.Status, x.SubmittedBySubject, x.SubmittedAtUtc, x.ReviewedBySubject, x.ReviewedAtUtc, x.ReviewNote)).ToArray(),
            risks.Select(x => new ExecutionRiskView(x.Id, x.StageId, x.Severity, x.Title, x.Description, x.Status, x.ReportedBySubject, x.ReportedAtUtc, x.MitigatedBySubject, x.MitigatedAtUtc, x.MitigationNote, x.ClosedBySubject, x.ClosedAtUtc, x.CloseNote)).ToArray(),
            freezeHistory.Select(x => new ExecutionFreezeEventView(x.Id, x.SequenceNumber, x.Action, x.Reason, x.ActorSubject, x.OccurredAtUtc)).ToArray(),
            disbursements.Select(x =>
            {
                var found = journalByDisbursement.TryGetValue(x.Id, out var journalId);
                return new ExecutionDisbursementView(x.Id, x.StageId, x.AmountMinor, x.Currency, x.ReleasedBySubject, x.ReleasedAtUtc, found ? journalId : null, found && reversed.Contains(journalId));
            }).ToArray());
    }

    private Task<Project?> LockProjectAsync(Guid projectId, CancellationToken cancellationToken) =>
        dbContext.Projects.FromSqlInterpolated($"SELECT * FROM moon.projects WHERE \"Id\" = {projectId} FOR UPDATE").SingleOrDefaultAsync(cancellationToken);

    private Task<ExecutionStage?> LockStageAsync(Guid stageId, CancellationToken cancellationToken) =>
        Stages.FromSqlInterpolated($"SELECT * FROM moon.execution_stages WHERE \"Id\" = {stageId} FOR UPDATE").SingleOrDefaultAsync(cancellationToken);

    private async Task<bool> IsFrozenAsync(Guid projectId, CancellationToken cancellationToken)
    {
        var action = await FreezeEvents.AsNoTracking().Where(x => x.ProjectId == projectId).OrderByDescending(x => x.SequenceNumber).Select(x => x.Action).FirstOrDefaultAsync(cancellationToken);
        return action == ExecutionFreezeActions.Freeze;
    }

    private Task<bool> IsActiveUserAsync(string subject, CancellationToken cancellationToken) =>
        dbContext.Users.AsNoTracking().AnyAsync(x => x.ExternalSubject == subject && x.IsActive, cancellationToken);

    private async Task AppendAuditAsync(string actorSubject, string action, string subjectType, Guid subjectId, Project project, string correlationId, string? ipAddress, object after, CancellationToken cancellationToken)
    {
        await auditWriter.AppendAsync(new AuditWriteRequest(actorSubject, action, subjectType, subjectId.ToString(), correlationId,
            project.OrganizationId.ToString(), project.Id.ToString(), AfterJson: JsonSerializer.Serialize(after), IpAddress: ipAddress), cancellationToken);
    }

    private static string NormalizeCurrency(string value) => value?.Trim().ToUpperInvariant() ?? string.Empty;
    private static bool IsValidCurrency(string value) => value.Length == 3 && value.All(char.IsLetter);
    private static ExecutionControlOperationResult Failure(string code, string message) => ExecutionControlOperationResult.Failure(code, message);
}
