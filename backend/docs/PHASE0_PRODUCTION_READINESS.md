# Phase 0 Production Readiness

Phase 0 implementation and production closure are tracked separately. A green code gate proves the implemented foundation; it does not invent missing production credentials or product/legal decisions.

## Implemented and gated

- .NET 10 API foundation
- PostgreSQL 18 / EF Core migration
- Keycloak OIDC/JWT validation
- identity sync into Moon PostgreSQL
- role and organization membership authorization
- system-admin-only access-management API
- append-only audit write path for identity/access changes
- correlation ID, health/readiness checks and OpenTelemetry hooks
- local/dev Docker baseline
- first `system_admin` bootstrap without committed user credentials
- MFA bootstrap requirement (`CONFIGURE_TOTP`) for the first privileged operator
- reproducible identity/admin/PostgreSQL/Audit E2E smoke
- SMS and Payment kept behind disabled adapters until credentials exist

## Required before production closure

- production Keycloak hostname/TLS and secret-manager-backed admin/bootstrap procedure
- approved production PostgreSQL connection/backup/restore configuration
- real SMS provider credentials and the approved SMS OTP authentication flow
- production frontend origins for CORS
- observability collector/endpoints and alert routing
- final retention/hosting decision and environment access policy
- explicit production CI/CD provider decision (see `ADR-0001-ci-provider-pending.md`)
- production smoke/rollback evidence in the target environment

## External services

Current product scope has only two external-provider integrations:

1. SMS / OTP
2. Payment gateway

KYC, Shahkar and Sheba inquiry are intentionally out of current scope.

## Secret policy

No real provider key, merchant key, Keycloak admin password, database password or end-user credential belongs in Git. Placeholder/local-only values must never be reused in production.

## Closure rule

Do not label Phase 0 `CLOSED` for production until every item in the production section has an approved value/evidence. It is valid to label the implementation `GREEN / gated` while external credentials or architecture decisions remain open.
