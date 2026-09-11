# Backend Phase 3 — Execution Reporting Slice

Status: verification pending

Branch: `feat/backend-phase-3-execution`

This slice introduces ordered execution stages and progress-report gating.

## Implemented controls

- Execution can be initialized only for a published project.
- `product_owner` is the execution-plan policy role.
- The first stage becomes active; later stages start blocked.
- Only an active database-backed member of the project organization can submit a progress report.
- A blocked stage cannot accept a report.
- One submitted report per stage may await review at a time.
- `supervisor` is the progress-report reviewer policy role.
- Rejection is append-only, requires a review note, reopens the same stage, and does not unlock the next stage.
- Approval completes the current stage and activates only the immediate next stage.
- Submitted report content is immutable; final reports cannot be rewritten.
- Completed stages cannot be reopened through an allowed persistence transition.
- Material transitions are written to the append-only Audit log.

Phase 3 is not closed by this slice. Expense/Risk, Freeze/Unfreeze, staged Disbursement, and the final Phase 3 acceptance gate remain subsequent work.
