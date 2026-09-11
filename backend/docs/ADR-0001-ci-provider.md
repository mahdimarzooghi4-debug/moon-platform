# ADR-0001 — Production CI and Registry Strategy

- Date: 2026-01-08
- Decision updated: 2026-09-12
- Status: Accepted

## Context

The implementation repository is hosted on GitHub, while the production delivery baseline requires auditable CI, image packaging, registry publication, protected secrets, and environment-specific promotion. The production CI and registry architecture is now implemented in the repository.

## Decision

1. GitLab CI is the canonical production CI/CD orchestration system.
2. GitLab Container Registry is the canonical registry for frontend and backend production images.
3. `.gitlab-ci.yml` is the source-controlled production pipeline definition for clean frontend verification, backend Release verification, EF model verification, integration tests, and container packaging/publication.
4. GitHub Actions may be used only as temporary acceptance or verification gates and must not remain as production CI.
5. Production deployment promotion is environment-specific and remains dependent on provisioned infrastructure, protected variables and secrets, deployment credentials, and rollback/runbook configuration.

## Consequences

- CI implementation is no longer provider-pending.
- No production provider credentials or external service secrets are committed to Git.
- Successful repository acceptance does not itself activate production deployment, SMS, or payment processing.
- Verification-only GitHub Actions workflows are removed after their acceptance purpose is complete.

## Residual go-live dependencies

- provision GitLab protected variables and target environments;
- configure production deployment promotion, rollback procedures, and operational runbooks;
- configure approved SMS/OTP credentials if SMS is activated;
- resolve OD-004 and configure the approved real payment provider before real payment activation.
