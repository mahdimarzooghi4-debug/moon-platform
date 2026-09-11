# Backend Phase 1 Closure

Status: Implementation gate candidate

Branch: `feat/backend-phase-1-project`

## Scope

Phase 1 implements the approved-project lifecycle required by the technical baseline:

- Project creation under an active organization membership
- Immutable numbered project versions
- Submit with current-version lock
- Evaluation assignment
- Conflict-of-interest declaration and blocking
- Evaluation completion
- Final approve/reject decision with actor, time, and reason
- Separation of duties between evaluator and decision maker
- Publication only after an approved, conflict-free, completed evaluation on the locked current version
- Append-only Audit coverage for material transitions

## Non-bypassable controls covered by tests

- A caller without active organization membership cannot create a project.
- A submitted project cannot receive another version.
- Locked project versions cannot be mutated.
- An evaluation cannot complete before conflict-of-interest declaration.
- A conflict-positive evaluation cannot complete and can be replaced by another evaluator assignment.
- An incomplete/conflicted evaluation cannot receive a final decision.
- An evaluator cannot record the final decision for their own evaluation.
- Final decisions are append-only.
- A project cannot publish before approval or without the matching completed conflict-free evaluation, approval decision, and locked current version.
- A published project cannot be republished or mutated.

## Gate

The temporary GitHub Actions closure gate is verification-only. It runs the full .NET solution against PostgreSQL 18, treats warnings as errors, verifies committed EF migrations have no pending model changes, executes the complete test suite, and performs source-level checks for the required Phase 1 endpoints and guards.

The technical baseline specifies GitLab CI + Container Registry for the formal delivery pipeline. GitHub Actions verification does not resolve that production CI/CD decision and must not be represented as formal GitLab CI acceptance.

## Closure rule

Phase 1 implementation may be marked GREEN only after the closure gate succeeds on the committed migration set. Production/platform acceptance remains separate and is deferred to the final platform integration and environment acceptance gates.
