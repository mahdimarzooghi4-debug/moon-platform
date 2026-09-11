# Backend Phase 2 — Commitment Slice

Status: gate candidate

Branch: `feat/backend-phase-2-funding`

## Scope

This slice introduces funding commitments for published projects only.

- `POST /api/v1/projects/{projectId}/commitments`
- `Idempotency-Key` is required.
- Amount is stored as `AmountMinor` (`long`).
- Currency is normalized as a three-letter uppercase code.
- The commitment creator must be an active synchronized identity.
- A project must already be `published` before accepting commitments.
- Commitment business terms are immutable after creation.
- Material creation is audited as `funding.committed`.

## Idempotency contract

Idempotency is enforced by the server and the database.

- Same actor + same key + same payload returns the original commitment and produces no second financial/business effect.
- Same actor + same key + different payload returns an idempotency conflict.
- A unique PostgreSQL constraint on actor + idempotency key closes the concurrent-request race; the service resolves the losing request back to the already-created commitment when the payload matches.

## Financial boundary

A commitment is not a reconciled payment and does not create allocable balance or a ledger credit. Its initial state is `awaiting_payment`.

Payment intent creation, gateway verification/webhooks, reconciliation and double-entry ledger posting are deliberately deferred to the next Phase 2 slices. Provider success alone must never create allocable balance; only successful server-side reconciliation may later produce the corresponding financial effect.

`IPaymentGateway` remains provider-agnostic and disabled until a payment provider and credentials are explicitly selected. No payment secret or provider-specific API key is stored in this repository.

## Delivery note

Any temporary GitHub Actions gate used for this slice is verification-only. The technical baseline's formal GitLab CI + Container Registry decision remains unresolved and separate from implementation verification.
