# Platform Final Acceptance Closure

Status: **CLOSED / GREEN** for the platform repository/code acceptance baseline.

Acceptance date: **2026-09-12**

Target: **Platform repository/code acceptance baseline**

Production go-live: **OPEN**

## Accepted platform scope

The platform repository acceptance baseline now includes:

- frontend authentication integration using Keycloak OIDC + PKCE;
- authenticated session synchronization through `POST /api/v1/session/sync` followed by `GET /api/v1/me`;
- admin UI integration with real Organization/User/Membership/Role APIs;
- backend Phases 0 through 3 closed and green;
- public Impact overview/list/detail pages connected to the real Phase 3 public impact APIs;
- production delivery baseline using GitLab CI, GitLab Container Registry, and production frontend/backend container images;
- safe external-service defaults preserved: payment disabled, SMS disabled, and outbox dispatch disabled by default;
- disabled outbox mode does not initialize the MassTransit bus or hosted dispatcher, while the enabled transport behavior remains preserved.

KYC, IBAN inquiry, and company-registration integrations remain outside the v1 scope. External v1 integrations remain limited to SMS/OTP and the Payment Gateway boundary.

## Final platform acceptance gate

Final temporary GitHub Actions verification gate:

- branch: `integration/platform-final-acceptance`;
- tested commit: `c15bfce3934d18933315a314d26d5d258d529cec`;
- run: `34652234141`;
- job: `103436790062`;
- frontend reproducible build: **GREEN**;
- backend warnings-as-errors Release build: **GREEN**;
- EF Core pending-model verification: **GREEN**;
- backend integration suite with PostgreSQL 18 and RabbitMQ 4: **26 / 26 GREEN**;
- delivery architecture verification: **GREEN**;
- frontend production image: **GREEN**;
- backend production image: **GREEN**;
- unprivileged runtime assertions: **GREEN**;
- frontend `/healthz`: **GREEN**;
- backend `/health/live`: **GREEN**;
- backend `/api/v1/system`: **GREEN**;
- exact `main` commit/tree assertion: **GREEN**.

The temporary GitHub Actions acceptance workflow was removed after the successful gate. The production CI/CD architecture remains GitLab CI + GitLab Container Registry.

## Main branch boundary

Platform final acceptance does not itself authorize or perform a merge to `main`.

The accepted baseline preserves `main` exactly at:

- commit: `240efa7b2934e189c9647473360c091746cfc647`;
- tree: `4b825dc642cb6eb9a060e54bf8d69288fbee4904` (empty tree).

The acceptance branch remains separate. Any merge to `main` requires explicit authorization.

## Production go-live boundary

This closure is a repository/code acceptance decision, not a production activation decision.

The following remain production go-live dependencies rather than repository-acceptance blockers:

- provisioning production infrastructure and target environments;
- configuring GitLab protected variables, deployment credentials, promotion controls, rollback procedures, and runbooks;
- configuring real SMS/OTP provider credentials if SMS is activated;
- resolving OD-004 for the real payment provider;
- configuring approved real payment API credentials before payment activation.

`DisabledPaymentGateway` remains the safe default. Production payment activation remains **OPEN**. No real payment provider credential or other production secret was added to Git.

Staged disbursement remains an internal ledger reservation/release mechanism and does not represent or invoke a real external payout.
