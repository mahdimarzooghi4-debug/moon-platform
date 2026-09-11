# Moon Platform Backend — Phase 0 Foundation

This branch starts the backend foundation without changing `main` or the closed frontend integration branch.

## Approved baseline

- .NET 10 / ASP.NET Core Web API
- Modular monolith boundaries, with domain separation growing phase by phase
- PostgreSQL 18 via EF Core + Npgsql
- Keycloak/OIDC for authentication; authorization remains enforced by Moon API
- OpenTelemetry traces and metrics with correlation IDs
- Append-oriented audit model foundation
- External providers behind adapters

## Current external-service scope

Only SMS and Payment are external-provider concerns in the current product scope. Both are intentionally disabled until real credentials are supplied. KYC and bank-account/Sheba inquiry are not part of the current scope.

Interfaces already reserved:

- `ISmsProvider`
- `IPaymentGateway`

No provider secret belongs in source control.

## Local infrastructure

```bash
docker compose up -d postgres keycloak
```

Run the API from `src/Moon.Platform.Api` using .NET 10. The development Keycloak authority is `http://localhost:8081/realms/moon`.

## Phase 0 next increments

1. Create versioned EF migration for identity/organization/role/audit tables.
2. Add Keycloak realm/client bootstrap and role/claim mapping.
3. Implement server-side RBAC/ABAC policies and organization scoping.
4. Add immutable audit write service and sensitive-read audit hooks.
5. Add unit/integration tests with PostgreSQL Testcontainers.
6. Add SMS provider adapter after API key/template approval.
7. Add payment provider adapter after merchant key/callback contract is available.

The phase is not CLOSED until its acceptance gate passes; this commit is the green buildable foundation only.
