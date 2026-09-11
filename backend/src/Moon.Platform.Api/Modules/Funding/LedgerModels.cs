using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.EntityFrameworkCore;

namespace Moon.Platform.Api.Modules.Funding;

public static class LedgerEntrySides
{
    public const string Debit = "debit";
    public const string Credit = "credit";
}

public static class LedgerJournalKinds
{
    public const string PaymentReconciliation = "payment_reconciliation";
    public const string StageDisbursement = "stage_disbursement";
    public const string Reversal = "reversal";
}

public static class LedgerAccountCodes
{
    public const string CashSettlement = "asset:cash_settlement";
    public const string ProjectFunds = "liability:project_funds";
    public const string DisbursementPayable = "liability:disbursement_payable";
}

[Table("ledger_journals", Schema = "moon")]
[Index(nameof(CreatedBySubject), nameof(IdempotencyKey), IsUnique = true)]
[Index(nameof(PaymentId), nameof(Kind), IsUnique = true)]
[Index(nameof(ProjectId), nameof(Currency))]
[Index(nameof(ReversesJournalId), IsUnique = true)]
[Index(nameof(ExecutionDisbursementId), IsUnique = true)]
public sealed class LedgerJournal
{
    public Guid Id { get; init; } = Guid.NewGuid();
    public Guid? PaymentId { get; init; }
    public Guid ProjectId { get; init; }

    [MaxLength(3)]
    public string Currency { get; init; } = string.Empty;

    [MaxLength(48)]
    public string Kind { get; init; } = string.Empty;

    [MaxLength(128)]
    public string IdempotencyKey { get; init; } = string.Empty;

    [MaxLength(200)]
    public string CreatedBySubject { get; init; } = string.Empty;

    public DateTimeOffset CreatedAtUtc { get; init; } = DateTimeOffset.UtcNow;
    public Guid? ReversesJournalId { get; init; }
    public Guid? ExecutionDisbursementId { get; init; }

    [MaxLength(4000)]
    public string? Reason { get; init; }

    [ForeignKey(nameof(PaymentId))]
    public FundingPayment? Payment { get; set; }

    [ForeignKey(nameof(ReversesJournalId))]
    public LedgerJournal? ReversesJournal { get; set; }

    public ICollection<LedgerEntry> Entries { get; } = new List<LedgerEntry>();
}

[Table("ledger_entries", Schema = "moon")]
[Index(nameof(JournalId))]
[Index(nameof(ProjectId), nameof(Currency), nameof(AccountCode))]
public sealed class LedgerEntry
{
    public Guid Id { get; init; } = Guid.NewGuid();
    public Guid JournalId { get; init; }
    public Guid ProjectId { get; init; }

    [MaxLength(96)]
    public string AccountCode { get; init; } = string.Empty;

    [MaxLength(8)]
    public string Side { get; init; } = string.Empty;

    public long AmountMinor { get; init; }

    [MaxLength(3)]
    public string Currency { get; init; } = string.Empty;

    public DateTimeOffset CreatedAtUtc { get; init; } = DateTimeOffset.UtcNow;

    [ForeignKey(nameof(JournalId))]
    public LedgerJournal Journal { get; set; } = null!;
}

public sealed record LedgerEntryView(
    Guid EntryId,
    string AccountCode,
    string Side,
    long AmountMinor,
    string Currency);

public sealed record LedgerJournalView(
    Guid JournalId,
    Guid? PaymentId,
    Guid ProjectId,
    string Currency,
    string Kind,
    string CreatedBySubject,
    DateTimeOffset CreatedAtUtc,
    Guid? ReversesJournalId,
    string? Reason,
    IReadOnlyList<LedgerEntryView> Entries);

public sealed record LedgerOperationResult(
    LedgerJournalView? Journal,
    bool Replayed,
    string? ErrorCode,
    string? ErrorMessage)
{
    public bool Succeeded => Journal is not null && ErrorCode is null;

    public static LedgerOperationResult Success(LedgerJournalView journal, bool replayed = false) =>
        new(journal, replayed, null, null);

    public static LedgerOperationResult Failure(string code, string message) =>
        new(null, false, code, message);
}

public sealed record ProjectAllocableBalanceView(Guid ProjectId, string Currency, long AmountMinor);

public sealed record ProjectBalanceOperationResult(
    ProjectAllocableBalanceView? Balance,
    string? ErrorCode,
    string? ErrorMessage)
{
    public bool Succeeded => Balance is not null && ErrorCode is null;

    public static ProjectBalanceOperationResult Success(ProjectAllocableBalanceView balance) =>
        new(balance, null, null);

    public static ProjectBalanceOperationResult Failure(string code, string message) =>
        new(null, code, message);
}
