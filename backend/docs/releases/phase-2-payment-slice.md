# Backend Phase 2 Payment Slice

Status: Gate candidate

Branch: `feat/backend-phase-2-funding`

This slice adds provider-agnostic payment intent, authenticated webhook receipt, server-side verification, and reconciliation.

Security and financial boundaries:

- Payment intent creation requires `Idempotency-Key` and is bound to the original commitment owner.
- Provider callbacks require event id, timestamp, signature, and payload version.
- Callback timestamps are replay-window constrained and validated callbacks are stored append-only.
- Replaying the same signed event with identical content is idempotent; reusing the same event id with different content is rejected.
- A provider callback never reconciles a commitment.
- Server-side verification must match provider, provider reference, amount, and currency.
- A verified payment still does not reconcile a commitment.
- Reconciliation is a separate finance-authorized, idempotent transition and is the only step in this slice that moves the commitment to `reconciled`.
- Payment terms and validated webhook receipts are persistence-guarded against destructive mutation.

The concrete payment provider is intentionally not selected in this slice. `IPaymentGateway` remains the adapter boundary and `DisabledPaymentGateway` remains the default until provider credentials and OD-004 commercial/legal details are approved.

This slice does not create ledger entries or allocable balance. Double-entry ledger posting is the next Phase 2 slice and will be coupled to reconciled payments only.
