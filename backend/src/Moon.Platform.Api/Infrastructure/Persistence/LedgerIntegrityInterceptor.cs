using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Diagnostics;
using Moon.Platform.Api.Modules.Funding;

namespace Moon.Platform.Api.Infrastructure.Persistence;

public sealed class LedgerIntegrityInterceptor : SaveChangesInterceptor
{
    public override InterceptionResult<int> SavingChanges(
        DbContextEventData eventData,
        InterceptionResult<int> result)
    {
        Validate(eventData.Context);
        return base.SavingChanges(eventData, result);
    }

    public override ValueTask<InterceptionResult<int>> SavingChangesAsync(
        DbContextEventData eventData,
        InterceptionResult<int> result,
        CancellationToken cancellationToken = default)
    {
        Validate(eventData.Context);
        return base.SavingChangesAsync(eventData, result, cancellationToken);
    }

    private static void Validate(DbContext? context)
    {
        if (context is null)
        {
            return;
        }

        var journalMutation = context.ChangeTracker.Entries<LedgerJournal>()
            .Any(entry => entry.State is EntityState.Modified or EntityState.Deleted);
        var entryMutation = context.ChangeTracker.Entries<LedgerEntry>()
            .Any(entry => entry.State is EntityState.Modified or EntityState.Deleted);

        if (journalMutation || entryMutation)
        {
            throw new InvalidOperationException(
                "Ledger journals and entries are append-only. Corrections must be recorded through reversal journals.");
        }

        var addedEntries = context.ChangeTracker.Entries<LedgerEntry>()
            .Where(entry => entry.State == EntityState.Added)
            .Select(entry => entry.Entity)
            .ToList();

        foreach (var journal in context.ChangeTracker.Entries<LedgerJournal>()
                     .Where(entry => entry.State == EntityState.Added)
                     .Select(entry => entry.Entity))
        {
            var entries = addedEntries.Where(entry => entry.JournalId == journal.Id).ToList();
            if (entries.Count < 2)
            {
                throw new InvalidOperationException("Every ledger journal must contain at least two entries.");
            }

            if (entries.Any(entry =>
                    entry.AmountMinor <= 0
                    || entry.ProjectId != journal.ProjectId
                    || !string.Equals(entry.Currency, journal.Currency, StringComparison.Ordinal)
                    || string.IsNullOrWhiteSpace(entry.AccountCode)
                    || entry.Side is not (LedgerEntrySides.Debit or LedgerEntrySides.Credit)))
            {
                throw new InvalidOperationException(
                    "Ledger entries must have positive amounts and match the journal project/currency with a valid debit or credit side.");
            }

            var debit = entries
                .Where(entry => entry.Side == LedgerEntrySides.Debit)
                .Aggregate(0m, (total, entry) => total + entry.AmountMinor);
            var credit = entries
                .Where(entry => entry.Side == LedgerEntrySides.Credit)
                .Aggregate(0m, (total, entry) => total + entry.AmountMinor);

            if (debit <= 0 || debit != credit)
            {
                throw new InvalidOperationException("Ledger journal is not balanced: total debit must equal total credit.");
            }
        }
    }
}
