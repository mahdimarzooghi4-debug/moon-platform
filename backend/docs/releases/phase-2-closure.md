# Backend Phase 2 Closure

Status: GREEN — implementation gate passed

Branch: `feat/backend-phase-2-funding`

Tested code head: `f9dc0cb999cf4e051ef04f3a9ead0b06d7bce21f`

Final verification evidence: GitHub Actions run `34639106867` completed successfully against PostgreSQL 18 and RabbitMQ 4.

## Scope

Phase 2 implements the server-controlled funding and money-effects boundary required by the technical baseline:

- Funding commitments for published projects
- Idempotent payment-intent creation behind `IPaymentGateway`
- Signed/versioned/replay-protected payment webhook handling
- Server-side provider verification before reconciliation
- Reconciliation with idempotency protection
- Immutable double-entry ledger posting
- Append-only reversal journals instead of destructive ledger mutation
- Project allocable balance derived only from ledger entries
- Versioned project funding target on `ProjectVersion`
- `FundingCommitted`, `PaymentReconciled`, and `FundingThresholdReached` integration events
- Transactional PostgreSQL Outbox for durable event creation
- MassTransit + RabbitMQ outbox dispatcher with PostgreSQL leasing, `FOR UPDATE SKIP LOCKED`, retry/backoff, and dead-letter state
- RabbitMQ quorum queue configuration for the local/runtime baseline
- Append-only Audit coverage for material financial transitions

## Non-bypassable controls covered by tests

- Provider callback success alone does not make funds allocable.
- A payment must be authenticated, server-verified, reconciled, and then posted to the ledger before allocable balance increases.
- Replayed webhook content cannot produce a second financial effect.
- Payment-intent and reconciliation idempotency keys cannot be reused for a different operation.
- A reconciled payment can produce only one normal ledger posting.
- Ledger journals are balanced and original financial history is not edited in place.
- Corrections are represented by append-only reversal journals.
- Funding threshold is evaluated from ledger-derived allocable balance, not from provider callback or transient payment state.
- Funding threshold is bound to the locked/current project-version funding target and currency.
- Concurrent/replayed posting cannot emit a duplicate `FundingThresholdReached` event.
- `FundingCommitted`, `PaymentReconciled`, and `FundingThresholdReached` are written to the durable Outbox inside their controlling database transaction.
- The dispatcher publishes the durable envelope through a real RabbitMQ broker and marks the PostgreSQL Outbox row published only after successful broker publish.

## Final gate result

The final gate:

- built the full .NET 10 solution with warnings treated as errors;
- verified EF Core migrations have no pending model changes;
- ran the complete backend suite against PostgreSQL 18;
- started a real RabbitMQ 4 broker;
- created and consumed through the real quorum queue `phase2-outbox-quorum-probe`;
- exercised the MassTransit Outbox dispatcher end-to-end;
- validated local Docker Compose infrastructure configuration;
- passed 18 tests, 0 failed, 0 skipped, with 0 build warnings and 0 build errors.

## Production activation boundaries

Phase 2 implementation is closed, but production payment activation is intentionally not claimed. `IPaymentGateway` remains provider-agnostic and the real payment provider, credentials, callback contract, currency/settlement/fees/SLA and legal responsibility remain subject to OD-004 and credential delivery. Until those are approved and configured, the disabled/sandbox boundary remains the safe default.

The temporary GitHub Actions gate is verification-only. The technical baseline specifies GitLab CI + Container Registry for the formal delivery pipeline; this implementation gate does not resolve that production CI/CD decision.

## Closure

Phase 2 implementation is GREEN and may be used as the base for Backend Phase 3 Execution. Production/platform acceptance remains separate and is deferred to provider activation plus final platform/environment acceptance gates.
