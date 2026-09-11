# Moon Platform Backend — Phase 0 Foundation

This branch implements the backend foundation without changing `main` or the closed frontend integration branch.

## Baseline

- .NET 10 / ASP.NET Core Web API
- Modular-monolith foundation with domain boundaries growing phase by phase
- PostgreSQL 18 via EF Core + Npgsql
- Keycloak/OIDC for authentication; authorization remains enforced by Moon API
- OpenTelemetry traces and metrics with correlation IDs
- Append-only audit write path for security/administrative changes
- External providers behind adapters

## Current external-service scope

Only SMS and Payment are external-provider concerns in the current product scope. Both are intentionally disabled until real credentials are supplied. KYC and bank-account/Sheba inquiry are not part of the current scope.

Interfaces reserved:

- `ISmsProvider`
- `IPaymentGateway`

No provider secret belongs in source control.

## Local infrastructure

```bash
docker compose up -d postgres keycloak
```

Run the API from `src/Moon.Platform.Api` using .NET 10. The development Keycloak authority is `http://localhost:8081/realms/moon` and the local API URL is `http://localhost:5080`.

## First `system_admin` bootstrap

The first privileged operator is not seeded with a password in Git. Provision the human identity in Keycloak first, then assign the Moon realm role with the one-time bootstrap script:

```bash
export KEYCLOAK_BASE_URL=http://localhost:8081
export KEYCLOAK_ADMIN_USERNAME=admin
export KEYCLOAK_ADMIN_PASSWORD='<local-or-secret-manager-value>'
export SYSTEM_ADMIN_USERNAME='<existing-keycloak-username>'
export ALLOW_INSECURE_KEYCLOAK=true # local/dev only
./scripts/bootstrap-system-admin.sh
```

The script refuses known placeholder admin passwords, refuses plain HTTP unless explicitly allowed for local/dev, assigns only the `system_admin` realm role, and requires `CONFIGURE_TOTP` on the target user's next interactive login. Production use must run against HTTPS from an audited operator session and the privileged bootstrap credential must be rotated afterward.

## Identity and access implemented

- `POST /api/v1/session/sync` upserts the authenticated Keycloak subject into PostgreSQL and audits the sync.
- `GET /api/v1/me` returns active database memberships plus trusted identity roles.
- Organization membership authorization is server-side.
- `/api/v1/admin/*` requires the Keycloak `system_admin` role.
- Admin APIs manage users already synced into Moon, organizations, roles, memberships, activation status, and audit the sensitive changes.
- A system administrator cannot deactivate their own Moon account through the admin API.

## Reproducible Phase 0 E2E smoke

`scripts/phase0-e2e.sh` creates an ephemeral Keycloak service client, grants it `system_admin`, obtains an OIDC client-credentials token, calls Moon identity sync and admin APIs, creates a PostgreSQL-backed organization, and verifies the expected audit records. The temporary client is deleted on exit.

This test intentionally does **not** enable a password grant for the Moon web client and does not store a test user password in the repository.

## Phase 0 closure status

The code foundation can be build/test gated independently of real SMS and payment credentials. Formal production closure still requires the deployment-specific secrets/hostnames, the real SMS provider/OTP path, and the documented production decisions that are intentionally not guessed in source control.

The technical specification names GitLab CI + Container Registry, while this source repository currently lives on GitHub. GitHub Actions used during implementation are verification gates only; the production CI/CD provider remains an explicit architecture/product decision rather than a silent deviation.
