using System.Text.Json;
using Microsoft.EntityFrameworkCore;
using Moon.Platform.Api.Common.Auditing;
using Moon.Platform.Api.Common.Messaging;
using Moon.Platform.Api.Infrastructure.Persistence;
using Moon.Platform.Api.Modules.Projects;
using Npgsql;

namespace Moon.Platform.Api.Modules.Funding;

public interface ILedgerService
{
    Task<LedgerOperationResult> PostReconciledPaymentAsync(
        Guid paymentId,
        string idempotencyKey,
        string actorSubject,
        string correlationId,
        string? ipAddress,
        CancellationToken cancellationToken = default);

    Task<LedgerOperationResult> ReverseJournalAsync(
        Guid journalId,
        string idempotencyKey,
        string reason,
        string actorSubject,
        string correlationId,
        string? ipAddress,
        CancellationToken cancellationToken = default);

    Task<ProjectBalanceOperationResult> GetProjectAllocableBalanceAsync(
        Guid projectId,
        string currency,
        CancellationToken cancellationToken = default);
}

public sealed class LedgerService(
    MoonDbContext dbContext,
    IAuditWriter auditWriter,
    IOutboxWriter? outboxWriter = null) : ILedgerService
{
    private readonly IOutboxWriter _outboxWriter = outboxWriter ?? new OutboxWriter(dbContext);

    public async Task<LedgerOperationResult> PostReconciledPaymentAsync(
        Guid paymentId,
        string idempotencyKey,
        string actorSubject,
        string correlationId,
        string? ipAddress,
        CancellationToken cancellationToken = default)
    {
        var keyError = NormalizeIdempotencyKey(idempotencyKey, out var normalizedKey);
        if (keyError is not null)
        {
            return keyError;
        }

        if (!await IsActiveUserAsync(actorSubject, cancellationToken))
        {
            return LedgerOperationResult.Failure(
                "ledger_actor_inactive",
                "Ledger poster must be an active synchronized user.");
        }

        var idempotent = await FindByIdempotencyKeyAsync(actorSubject, normalizedKey, cancellationToken);
        if (idempotent is not null)
        {
            return ResolvePostingReplay(idempotent, paymentId);
        }

        await using var transaction = await dbContext.Database.BeginTransactionAsync(cancellationToken);
        var payment = await LockPaymentAsync(paymentId, cancellationToken);
        if (payment is null)
        {
            await transaction.RollbackAsync(cancellationToken);
            return LedgerOperationResult.Failure("payment_not_found", "Payment was not found.");
        }

        if (payment.Status != PaymentStatuses.Reconciled || payment.ReconciledAtUtc is null)
        {
            await transaction.RollbackAsync(cancellationToken);
            return LedgerOperationResult.Failure(
                "ledger_payment_not_reconciled",
                "Only reconciled payments can be posted to the ledger.");
        }

        var existingPosting = await dbContext.LedgerJournals
            .AsNoTracking()
            .Include(x => x.Entries)
            .SingleOrDefaultAsync(
                x => x.PaymentId == payment.Id && x.Kind == LedgerJournalKinds.PaymentReconciliation,
                cancellationToken);
        if (existingPosting is not null)
        {
            await transaction.RollbackAsync(cancellationToken);
            return existingPosting.CreatedBySubject == actorSubject
                   && existingPosting.IdempotencyKey == normalizedKey
                ? LedgerOperationResult.Success(ToView(existingPosting), replayed: true)
                : LedgerOperationResult.Failure(
                    "ledger_payment_already_posted",
                    "This reconciled payment already has a ledger posting.");
        }

        var scope = await dbContext.FundingCommitments.AsNoTracking()
            .Where(x => x.Id == payment.CommitmentId)
            .Join(
                dbContext.Projects.AsNoTracking(),
                commitment => commitment.ProjectId,
                project => project.Id,
                (commitment, project) => new { commitment.ProjectId, project.OrganizationId })
            .SingleAsync(cancellationToken);

        var lockedProject = await dbContext.Projects
            .FromSqlInterpolated($"SELECT * FROM moon.projects WHERE \"Id\" = {scope.ProjectId} FOR UPDATE")
            .SingleAsync(cancellationToken);

        var currentVersion = await dbContext.ProjectVersions.AsNoTracking()
            .SingleOrDefaultAsync(
                x => x.ProjectId == lockedProject.Id && x.VersionNumber == lockedProject.CurrentVersionNumber,
                cancellationToken);

        var journal = new LedgerJournal
        {
            PaymentId = payment.Id,
            ProjectId = scope.ProjectId,
            Currency = payment.Currency,
            Kind = LedgerJournalKinds.PaymentReconciliation,
            IdempotencyKey = normalizedKey,
            CreatedBySubject = actorSubject,
            Payment = payment
        };

        journal.Entries.Add(new LedgerEntry
        {
            JournalId = journal.Id,
            ProjectId = journal.ProjectId,
            AccountCode = LedgerAccountCodes.CashSettlement,
            Side = LedgerEntrySides.Debit,
            AmountMinor = payment.AmountMinor,
            Currency = payment.Currency,
            Journal = journal
        });
        journal.Entries.Add(new LedgerEntry
        {
            JournalId = journal.Id,
            ProjectId = journal.ProjectId,
            AccountCode = LedgerAccountCodes.ProjectFunds,
            Side = LedgerEntrySides.Credit,
            AmountMinor = payment.AmountMinor,
            Currency = payment.Currency,
            Journal = journal
        });

        dbContext.LedgerJournals.Add(journal);

        try
        {
            await dbContext.SaveChangesAsync(cancellationToken);
        }
        catch (DbUpdateException exception) when (
            exception.InnerException is PostgresException { SqlState: PostgresErrorCodes.UniqueViolation })
        {
            await transaction.RollbackAsync(cancellationToken);
            dbContext.ChangeTracker.Clear();
            return await ResolvePostingRaceAsync(paymentId, normalizedKey, actorSubject, cancellationToken);
        }

        await AppendAuditAsync(
            journal,
            scope.OrganizationId,
            actorSubject,
            "ledger.payment.posted",
            correlationId,
            ipAddress,
            cancellationToken);

        await EnqueueFundingThresholdIfReachedAsync(
            lockedProject,
            currentVersion,
            journal,
            scope.OrganizationId,
            actorSubject,
            correlationId,
            ipAddress,
            cancellationToken);

        await transaction.CommitAsync(cancellationToken);
        return LedgerOperationResult.Success(ToView(journal));
    }

    public async Task<LedgerOperationResult> ReverseJournalAsync(
        Guid journalId,
        string idempotencyKey,
        string reason,
        string actorSubject,
        string correlationId,
        string? ipAddress,
        CancellationToken cancellationToken = default)
    {
        var keyError = NormalizeIdempotencyKey(idempotencyKey, out var normalizedKey);
        if (keyError is not null)
        {
            return keyError;
        }

        reason = reason.Trim();
        if (string.IsNullOrWhiteSpace(reason) || reason.Length > 4000)
        {
            return LedgerOperationResult.Failure(
                "ledger_reversal_reason_invalid",
                "Reversal reason is required and must be at most 4000 characters.");
        }

        if (!await IsActiveUserAsync(actorSubject, cancellationToken))
        {
            return LedgerOperationResult.Failure(
                "ledger_actor_inactive",
                "Ledger reverser must be an active synchronized user.");
        }

        var idempotent = await FindByIdempotencyKeyAsync(actorSubject, normalizedKey, cancellationToken);
        if (idempotent is not null)
        {
            return ResolveReversalReplay(idempotent, journalId, reason);
        }

        await using var transaction = await dbContext.Database.BeginTransactionAsync(cancellationToken);
        var original = await dbContext.LedgerJournals
            .FromSqlInterpolated($"SELECT * FROM moon.ledger_journals WHERE \"Id\" = {journalId} FOR UPDATE")
            .SingleOrDefaultAsync(cancellationToken);
        if (original is null)
        {
            await transaction.RollbackAsync(cancellationToken);
            return LedgerOperationResult.Failure("ledger_journal_not_found", "Ledger journal was not found.");
        }

        if (original.Kind == LedgerJournalKinds.Reversal)
        {
            await transaction.RollbackAsync(cancellationToken);
            return LedgerOperationResult.Failure(
                "ledger_reversal_of_reversal_not_allowed",
                "A reversal journal cannot itself be reversed. Create the appropriate new business transaction instead.");
        }

        var existingReversal = await dbContext.LedgerJournals
            .AsNoTracking()
            .Include(x => x.Entries)
            .SingleOrDefaultAsync(x => x.ReversesJournalId == original.Id, cancellationToken);
        if (existingReversal is not null)
        {
            await transaction.RollbackAsync(cancellationToken);
            return existingReversal.CreatedBySubject == actorSubject
                   && existingReversal.IdempotencyKey == normalizedKey
                   && existingReversal.Reason == reason
                ? LedgerOperationResult.Success(ToView(existingReversal), replayed: true)
                : LedgerOperationResult.Failure(
                    "ledger_journal_already_reversed",
                    "Ledger journal has already been reversed.");
        }

        var originalEntries = await dbContext.LedgerEntries
            .AsNoTracking()
            .Where(x => x.JournalId == original.Id)
            .OrderBy(x => x.Id)
            .ToListAsync(cancellationToken);
        if (originalEntries.Count < 2)
        {
            await transaction.RollbackAsync(cancellationToken);
            return LedgerOperationResult.Failure(
                "ledger_journal_corrupt",
                "Original journal does not contain the required balanced entry set.");
        }

        var reversal = new LedgerJournal
        {
            PaymentId = original.PaymentId,
            ProjectId = original.ProjectId,
            Currency = original.Currency,
            Kind = LedgerJournalKinds.Reversal,
            IdempotencyKey = normalizedKey,
            CreatedBySubject = actorSubject,
            ReversesJournalId = original.Id,
            Reason = reason
        };

        foreach (var entry in originalEntries)
        {
            reversal.Entries.Add(new LedgerEntry
            {
                JournalId = reversal.Id,
                ProjectId = entry.ProjectId,
                AccountCode = entry.AccountCode,
                Side = entry.Side == LedgerEntrySides.Debit ? LedgerEntrySides.Credit : LedgerEntrySides.Debit,
                AmountMinor = entry.AmountMinor,
                Currency = entry.Currency,
                Journal = reversal
            });
        }

        dbContext.LedgerJournals.Add(reversal);

        try
        {
            await dbContext.SaveChangesAsync(cancellationToken);
        }
        catch (DbUpdateException exception) when (
            exception.InnerException is PostgresException { SqlState: PostgresErrorCodes.UniqueViolation })
        {
            await transaction.RollbackAsync(cancellationToken);
            dbContext.ChangeTracker.Clear();
            return await ResolveReversalRaceAsync(journalId, normalizedKey, reason, actorSubject, cancellationToken);
        }

        var organizationId = await dbContext.Projects.AsNoTracking()
            .Where(x => x.Id == reversal.ProjectId)
            .Select(x => x.OrganizationId)
            .SingleAsync(cancellationToken);

        await AppendAuditAsync(
            reversal,
            organizationId,
            actorSubject,
            "ledger.journal.reversed",
            correlationId,
            ipAddress,
            cancellationToken);

        await transaction.CommitAsync(cancellationToken);
        return LedgerOperationResult.Success(ToView(reversal));
    }

    public async Task<ProjectBalanceOperationResult> GetProjectAllocableBalanceAsync(
        Guid projectId,
        string currency,
        CancellationToken cancellationToken = default)
    {
        currency = currency.Trim().ToUpperInvariant();
        if (currency.Length != 3 || !currency.All(char.IsLetter))
        {
            return ProjectBalanceOperationResult.Failure(
                "ledger_invalid_currency",
                "Currency must be a three-letter alphabetic code.");
        }

        var projectExists = await dbContext.Projects.AsNoTracking()
            .AnyAsync(x => x.Id == projectId, cancellationToken);
        if (!projectExists)
        {
            return ProjectBalanceOperationResult.Failure("project_not_found", "Project was not found.");
        }

        var amount = await GetAllocableAmountAsync(projectId, currency, cancellationToken);
        return ProjectBalanceOperationResult.Success(new ProjectAllocableBalanceView(projectId, currency, amount));
    }

    private async Task EnqueueFundingThresholdIfReachedAsync(
        Project project,
        ProjectVersion? version,
        LedgerJournal journal,
        Guid organizationId,
        string actorSubject,
        string correlationId,
        string? ipAddress,
        CancellationToken cancellationToken)
    {
        if (version is null
            || version.FundingTargetMinor is not > 0
            || string.IsNullOrWhiteSpace(version.FundingTargetCurrency)
            || !string.Equals(version.FundingTargetCurrency, journal.Currency, StringComparison.Ordinal))
        {
            return;
        }

        var allocableAmount = await GetAllocableAmountAsync(project.Id, journal.Currency, cancellationToken);
        if (allocableAmount < version.FundingTargetMinor.Value)
        {
            return;
        }

        var reachedAt = DateTimeOffset.UtcNow;
        var integrationEvent = new FundingThresholdReachedEvent(
            project.Id,
            version.Id,
            version.FundingTargetMinor.Value,
            allocableAmount,
            journal.Currency,
            reachedAt);

        await _outboxWriter.EnqueueAsync(new OutboxWriteRequest(
            IntegrationEventTypes.FundingThresholdReached,
            "project",
            project.Id.ToString(),
            $"funding-threshold-reached:{project.Id:N}",
            IntegrationEventSerialization.ToJson(integrationEvent),
            correlationId,
            reachedAt), cancellationToken);

        await auditWriter.AppendAsync(new AuditWriteRequest(
            actorSubject,
            "funding.threshold.reached",
            "project",
            project.Id.ToString(),
            correlationId,
            organizationId.ToString(),
            project.Id.ToString(),
            AfterJson: JsonSerializer.Serialize(new
            {
                ProjectVersionId = version.Id,
                FundingTargetMinor = version.FundingTargetMinor.Value,
                version.FundingTargetCurrency,
                AllocableAmountMinor = allocableAmount,
                ReachedAtUtc = reachedAt,
                LedgerJournalId = journal.Id
            }),
            IpAddress: ipAddress), cancellationToken);
    }

    private async Task<long> GetAllocableAmountAsync(
        Guid projectId,
        string currency,
        CancellationToken cancellationToken) =>
        await dbContext.LedgerEntries
            .AsNoTracking()
            .Where(x =>
                x.ProjectId == projectId
                && x.Currency == currency
                && x.AccountCode == LedgerAccountCodes.ProjectFunds)
            .Select(x => (long?)(x.Side == LedgerEntrySides.Credit ? x.AmountMinor : -x.AmountMinor))
            .SumAsync(cancellationToken) ?? 0L;

    private static LedgerOperationResult? NormalizeIdempotencyKey(string idempotencyKey, out string normalized)
    {
        normalized = idempotencyKey.Trim();
        return string.IsNullOrWhiteSpace(normalized) || normalized.Length > 128
            ? LedgerOperationResult.Failure(
                "ledger_invalid_idempotency_key",
                "Idempotency-Key is required and must be at most 128 characters.")
            : null;
    }

    private async Task<bool> IsActiveUserAsync(string subject, CancellationToken cancellationToken) =>
        await dbContext.Users.AsNoTracking()
            .AnyAsync(x => x.ExternalSubject == subject && x.IsActive, cancellationToken);

    private async Task<FundingPayment?> LockPaymentAsync(Guid paymentId, CancellationToken cancellationToken) =>
        await dbContext.FundingPayments
            .FromSqlInterpolated($"SELECT * FROM moon.funding_payments WHERE \"Id\" = {paymentId} FOR UPDATE")
            .SingleOrDefaultAsync(cancellationToken);

    private async Task<LedgerJournal?> FindByIdempotencyKeyAsync(
        string actorSubject,
        string idempotencyKey,
        CancellationToken cancellationToken) =>
        await dbContext.LedgerJournals
            .AsNoTracking()
            .Include(x => x.Entries)
            .SingleOrDefaultAsync(
                x => x.CreatedBySubject == actorSubject && x.IdempotencyKey == idempotencyKey,
                cancellationToken);

    private async Task<LedgerOperationResult> ResolvePostingRaceAsync(
        Guid paymentId,
        string idempotencyKey,
        string actorSubject,
        CancellationToken cancellationToken)
    {
        var idempotent = await FindByIdempotencyKeyAsync(actorSubject, idempotencyKey, cancellationToken);
        if (idempotent is not null)
        {
            return ResolvePostingReplay(idempotent, paymentId);
        }

        var posted = await dbContext.LedgerJournals
            .AsNoTracking()
            .Include(x => x.Entries)
            .SingleOrDefaultAsync(
                x => x.PaymentId == paymentId && x.Kind == LedgerJournalKinds.PaymentReconciliation,
                cancellationToken);
        return posted is null
            ? LedgerOperationResult.Failure("ledger_posting_conflict", "Concurrent ledger posting could not be resolved safely.")
            : LedgerOperationResult.Failure("ledger_payment_already_posted", "This reconciled payment already has a ledger posting.");
    }

    private async Task<LedgerOperationResult> ResolveReversalRaceAsync(
        Guid journalId,
        string idempotencyKey,
        string reason,
        string actorSubject,
        CancellationToken cancellationToken)
    {
        var idempotent = await FindByIdempotencyKeyAsync(actorSubject, idempotencyKey, cancellationToken);
        if (idempotent is not null)
        {
            return ResolveReversalReplay(idempotent, journalId, reason);
        }

        var reversal = await dbContext.LedgerJournals
            .AsNoTracking()
            .Include(x => x.Entries)
            .SingleOrDefaultAsync(x => x.ReversesJournalId == journalId, cancellationToken);
        return reversal is null
            ? LedgerOperationResult.Failure("ledger_reversal_conflict", "Concurrent ledger reversal could not be resolved safely.")
            : LedgerOperationResult.Failure("ledger_journal_already_reversed", "Ledger journal has already been reversed.");
    }

    private static LedgerOperationResult ResolvePostingReplay(LedgerJournal existing, Guid paymentId)
    {
        return existing.Kind == LedgerJournalKinds.PaymentReconciliation && existing.PaymentId == paymentId
            ? LedgerOperationResult.Success(ToView(existing), replayed: true)
            : LedgerOperationResult.Failure(
                "ledger_idempotency_conflict",
                "The same Idempotency-Key cannot be reused for a different ledger operation.");
    }

    private static LedgerOperationResult ResolveReversalReplay(
        LedgerJournal existing,
        Guid journalId,
        string reason)
    {
        return existing.Kind == LedgerJournalKinds.Reversal
               && existing.ReversesJournalId == journalId
               && string.Equals(existing.Reason, reason, StringComparison.Ordinal)
            ? LedgerOperationResult.Success(ToView(existing), replayed: true)
            : LedgerOperationResult.Failure(
                "ledger_idempotency_conflict",
                "The same Idempotency-Key cannot be reused for a different ledger operation.");
    }

    private async Task AppendAuditAsync(
        LedgerJournal journal,
        Guid organizationId,
        string actorSubject,
        string action,
        string correlationId,
        string? ipAddress,
        CancellationToken cancellationToken)
    {
        await auditWriter.AppendAsync(new AuditWriteRequest(
            actorSubject,
            action,
            "ledger_journal",
            journal.Id.ToString(),
            correlationId,
            organizationId.ToString(),
            journal.ProjectId.ToString(),
            AfterJson: JsonSerializer.Serialize(new
            {
                JournalId = journal.Id,
                journal.PaymentId,
                journal.ProjectId,
                journal.Currency,
                journal.Kind,
                journal.ReversesJournalId,
                journal.Reason,
                Entries = journal.Entries.Select(entry => new
                {
                    entry.AccountCode,
                    entry.Side,
                    entry.AmountMinor,
                    entry.Currency
                })
            }),
            IpAddress: ipAddress), cancellationToken);
    }

    private static LedgerJournalView ToView(LedgerJournal journal) => new(
        journal.Id,
        journal.PaymentId,
        journal.ProjectId,
        journal.Currency,
        journal.Kind,
        journal.CreatedBySubject,
        journal.CreatedAtUtc,
        journal.ReversesJournalId,
        journal.Reason,
        journal.Entries
            .OrderBy(x => x.AccountCode, StringComparer.Ordinal)
            .ThenBy(x => x.Side, StringComparer.Ordinal)
            .Select(x => new LedgerEntryView(x.Id, x.AccountCode, x.Side, x.AmountMinor, x.Currency))
            .ToArray());
}
