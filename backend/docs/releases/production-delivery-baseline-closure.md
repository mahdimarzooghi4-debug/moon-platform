# Production Delivery Baseline Closure

Status: **CLOSED / GREEN** for the repository production-delivery baseline.

Acceptance date: **2026-09-12**

Target: **Repository production-delivery baseline only. Production go-live remains OPEN.**

## Scope delivered

The repository now contains the production delivery baseline required by the platform architecture:

- GitLab CI declared in `.gitlab-ci.yml`;
- GitLab Container Registry packaging for frontend and backend images;
- clean frontend verification with Node 20 and `npm ci` + production Vite build;
- backend Release restore/build with warnings treated as errors;
- EF Core pending-model verification;
- full backend integration suite against PostgreSQL 18 and RabbitMQ 4;
- production frontend image using an unprivileged nginx runtime;
- production backend image using an unprivileged .NET runtime user;
- runtime smoke coverage for frontend and backend health/system endpoints;
- no real provider credentials or application secrets committed to Git.

The backend composition root also preserves the safe messaging boundary: when `Messaging:OutboxDispatchEnabled=false`, the MassTransit bus and outbox dispatcher are not initialized. When dispatch is enabled, the configured RabbitMQ/InMemory transport behavior remains available.

## Final acceptance evidence

Final temporary GitHub Actions verification gate:

- branch: `integration/platform-final-acceptance`;
- tested commit: `c15bfce3934d18933315a314d26d5d258d529cec`;
- run: `34652234141`;
- job: `103436790062`;
- frontend reproducible build: **GREEN**;
- backend warnings-as-errors Release build: **GREEN**;
- EF Core pending-model check: **GREEN**;
- full backend suite with PostgreSQL 18 and RabbitMQ 4: **26 / 26 GREEN**;
- delivery architecture assertions: **GREEN**;
- frontend production image build: **GREEN**;
- backend production image build: **GREEN**;
- unprivileged-container assertions: **GREEN**;
- frontend `/healthz`: **GREEN**;
- backend `/health/live`: **GREEN**;
- backend `/api/v1/system`: **GREEN**;
- exact `main` baseline assertion: **GREEN**.

The verification-only workflow was removed after this successful gate. GitHub Actions is not the production CI/CD mechanism.

## Architecture decision

The accepted production delivery architecture is:

- production CI/CD orchestration: **GitLab CI**;
- production image registry: **GitLab Container Registry**;
- source-controlled pipeline declaration: **`.gitlab-ci.yml`**;
- GitHub Actions: **temporary verification only**.

See `backend/docs/ADR-0001-ci-provider.md`.

## Main branch boundary

This closure does not authorize or perform a merge to `main`.

The final acceptance gate asserted that `main` remained exactly:

- commit: `240efa7b2934e189c9647473360c091746cfc647`;
- tree: `4b825dc642cb6eb9a060e54bf8d69288fbee4904` (empty tree).

A merge to `main` still requires explicit authorization.

## Residual production go-live dependencies

Repository delivery acceptance is complete, but production go-live remains separate and OPEN. Remaining environment/operational dependencies include:

- provision target production environments and deployment credentials;
- configure GitLab protected variables/secrets;
- configure production deployment promotion, rollback procedures, and operational runbooks;
- configure approved SMS/OTP credentials if SMS is activated;
- resolve OD-004 and select/configure the approved real payment provider before real payment activation.

`DisabledPaymentGateway` remains the safe default. No real payment provider or production payment credential has been selected or committed. Production payment activation remains **OPEN**.
