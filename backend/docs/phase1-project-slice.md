# Phase 1 — Project slice

Implemented in this increment:

- organization-scoped project creation
- immutable numbered project versions
- automatic locking of the previous version when a new version is created
- submit transition from `draft` to `submitted`
- automatic locking of the current version on submit
- append-only audit actions: `project.created`, `project.version.created`, `project.submitted`
- authenticated API endpoints under `/api/v1/projects`
- PostgreSQL 18 persistence and EF Core migration

Evaluation, decision and publish remain separate Phase 1 increments and are not claimed complete by this slice.
