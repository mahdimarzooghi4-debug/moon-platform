# Phase 2 Ledger Slice

This slice implements the double-entry, append-only funding ledger.

## Financial boundary

- A provider callback does not create ledger entries.
- Provider verification does not create ledger entries.
- Payment reconciliation does not itself create ledger entries.
- Only an explicit finance-authorized ledger posting for a reconciled payment creates a journal.
- Project allocable balance is calculated from `liability:project_funds` ledger entries only.

## Journal invariants

- Every journal contains at least two entries.
- Every entry amount is positive.
- Every journal is balanced: total debit equals total credit.
- Payment posting debits `asset:cash_settlement` and credits `liability:project_funds` for the same amount and currency.
- One reconciled payment can have at most one payment-reconciliation journal.
- Ledger idempotency keys are unique per actor.
- Journals and entries are append-only; update/delete is rejected by the persistence interceptor.

## Corrections

Financial corrections are represented only as reversal journals. A reversal copies the original entries with debit/credit sides inverted, requires a reason, is idempotent, and never mutates the original journal. A reversal journal cannot itself be reversed in this slice; a subsequent business event must be represented as a new transaction.

## Scope boundary

This slice does not implement staged disbursement or expense posting. Those flows will consume the allocable balance and create their own balanced journals in Phase 3.
