# Phase 2 — Transactional Outbox & Funding Threshold Slice

Status: verification candidate

## Boundary

- `FundingCommitted` is written to the PostgreSQL outbox in the same transaction as the commitment and audit record.
- `FundingThresholdReached` is evaluated only after a reconciled payment is posted to the immutable double-entry ledger.
- The threshold source of truth is the locked current `ProjectVersion` (`FundingTargetMinor` + `FundingTargetCurrency`).
- Commitments, provider callbacks, payment verification and payment reconciliation do not by themselves satisfy the threshold.
- The project row is locked while a ledger posting evaluates threshold crossing, preventing concurrent postings from independently missing the crossing.
- Event deduplication key for threshold crossing is project-scoped, so the event is emitted at most once for a project.

## Delivery

- Outbox messages are durable in PostgreSQL.
- Dispatcher claims pending rows with `FOR UPDATE SKIP LOCKED` and a time-bound lease.
- Publishing uses MassTransit; RabbitMQ transport is configuration-driven.
- Local compose includes RabbitMQ configured with quorum as the default queue type.
- Failed publishes use bounded exponential retry and transition to a durable dead-letter state after the configured maximum attempts.
- Real RabbitMQ credentials remain outside Git.

## Remaining Phase 2 closure work

`PaymentReconciled` must also be enqueued transactionally at the reconciliation boundary before Phase 2 is formally closed.
