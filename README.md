# Moon Platform

Moon Platform is a full-stack platform for managing organizations, projects, evaluations, funding, execution, financial controls, and public impact reporting.

The repository currently contains the accepted application baseline. Backend implementation phases 0–3 and the platform repository acceptance gate are complete. The current workstream is UI/UX review and polish before production go-live preparation.

## Current status

| Area | Status |
| --- | --- |
| Frontend application | ✅ Implemented / accepted |
| Authentication & admin integration | ✅ Implemented / accepted |
| Backend phases 0–3 | ✅ Closed / GREEN |
| PostgreSQL schema & EF Core migrations | ✅ Implemented / verified |
| Backend automated suite | ✅ 26/26 GREEN at final acceptance |
| Public impact APIs & UI integration | ✅ Implemented |
| Production Docker baseline | ✅ Implemented |
| GitLab CI + GitLab Container Registry baseline | ✅ Implemented |
| UI/UX manual QA & polish | 🚧 In progress |
| Production infrastructure | ⏳ Not provisioned yet |
| Real SMS provider activation | ⏳ Open |
| Real payment provider / OD-004 | ⏳ Open |
| Production go-live | ⏳ Open |

> Repository acceptance does **not** mean production activation. Real provider credentials, production infrastructure, deployment promotion, monitoring, backup/restore, and go-live operations remain separate tasks.

## Stack

### Frontend

- React 18
- TypeScript
- Vite
- Material UI
- Tailwind CSS
- React Router
- TanStack Query
- React Hook Form
- RTL support with Vazirmatn and Stylis
- OIDC Authorization Code + PKCE through Keycloak

### Backend

- .NET 10 / ASP.NET Core
- EF Core + Npgsql
- PostgreSQL 18
- Keycloak / OIDC
- RabbitMQ / MassTransit integration boundary
- OpenTelemetry
- Modular-monolith architecture
- Append-only audit trail and durable outbox patterns

### Delivery

- Dockerized frontend and backend
- Non-root production containers
- GitLab CI as the canonical production CI/CD baseline
- GitLab Container Registry as the canonical production image registry

GitHub Actions was used only as temporary acceptance infrastructure and is not the production CI/CD system.

## Repository layout

```text
.
├── src/                         # Frontend application
├── public/                      # Frontend public assets
├── backend/
│   ├── src/Moon.Platform.Api/   # ASP.NET Core API
│   ├── tests/                   # Backend automated tests
│   ├── keycloak/                # Local realm configuration
│   ├── docs/                    # Architecture / release documentation
│   ├── scripts/                 # Bootstrap and verification scripts
│   └── docker-compose.yml       # Local PostgreSQL, RabbitMQ and Keycloak
├── deploy/                      # Runtime deployment configuration
├── Dockerfile                   # Frontend production image
├── .gitlab-ci.yml               # Production CI/CD baseline
└── package.json
```

## Local development

### Prerequisites

Install:

- Node.js 20
- npm
- .NET SDK **10.0.100**
- Docker + Docker Compose

For EF Core CLI operations:

```bash
dotnet tool install --global dotnet-ef --version 10.0.12
```

### 1. Configure the frontend

From the repository root:

```bash
cp .env.example .env
```

For local development, use:

```env
VITE_OIDC_AUTHORITY=http://localhost:8081/realms/moon
VITE_OIDC_CLIENT_ID=moon-web
VITE_API_BASE_URL=http://localhost:5080
```

### 2. Start local infrastructure

```bash
cd backend
cp .env.example .env
docker compose up -d postgres keycloak
```

RabbitMQ is not required for the default safe local runtime because outbox dispatch is disabled. Start it when testing messaging/integration behavior:

```bash
docker compose up -d rabbitmq
```

Local endpoints:

| Service | Address |
| --- | --- |
| Frontend | `http://localhost:5173` |
| Moon API | `http://localhost:5080` |
| Keycloak | `http://localhost:8081` |
| PostgreSQL | `localhost:5432` |
| RabbitMQ | `localhost:5672` |
| RabbitMQ Management | `http://localhost:15672` |

### 3. Apply database migrations

From `backend/`:

```bash
dotnet ef database update \
  --project src/Moon.Platform.Api/Moon.Platform.Api.csproj \
  --startup-project src/Moon.Platform.Api/Moon.Platform.Api.csproj
```

### 4. Run the backend

From `backend/`:

```bash
dotnet run --project src/Moon.Platform.Api/Moon.Platform.Api.csproj
```

Useful checks:

```text
GET http://localhost:5080/health/live
GET http://localhost:5080/health/ready
GET http://localhost:5080/api/v1/system
```

### 5. Run the frontend

In another terminal, from the repository root:

```bash
npm ci
npm run dev
```

Open:

```text
http://localhost:5173
```

## Authentication

The web application authenticates against the local `moon` Keycloak realm using OIDC + PKCE.

After login, the frontend synchronizes the authenticated identity with Moon through:

```text
POST /api/v1/session/sync
GET  /api/v1/me
```

For first `system_admin` provisioning and the privileged local bootstrap flow, see [`backend/README.md`](backend/README.md).

## Safe external-service defaults

External services are intentionally safe by default during local development and repository acceptance:

- SMS provider: disabled
- Payment gateway: disabled
- Outbox dispatch: disabled
- No real provider credentials are stored in Git

`DisabledPaymentGateway` remains the safe payment default until a real provider is explicitly selected and OD-004 is resolved.

KYC, IBAN/Sheba inquiry, and company-registration integrations are outside the current v1 external-service scope.

## Verification

Frontend:

```bash
npm ci
npm run build
```

Backend:

```bash
cd backend
dotnet restore Moon.Platform.slnx
dotnet build Moon.Platform.slnx -c Release --no-restore -warnaserror
dotnet ef migrations has-pending-model-changes \
  --project src/Moon.Platform.Api/Moon.Platform.Api.csproj \
  --startup-project src/Moon.Platform.Api/Moon.Platform.Api.csproj
dotnet test Moon.Platform.slnx -c Release --no-build --no-restore
```

The final platform acceptance gate completed with the backend suite at **26/26 GREEN** against PostgreSQL 18 and RabbitMQ 4.

## Current development workflow

`main` is the accepted stable baseline.

UI/UX review and visual debugging are being performed on:

```text
feat/ui-ux-polish
```

The immediate focus is manual product review across authentication, dashboard/navigation, projects, impact views, admin workflows, responsive behavior, RTL presentation, loading/error/empty states, consistency, and accessibility.

## Production readiness

The codebase is accepted, but production go-live is intentionally still open. Before launch, the remaining operational work includes production infrastructure, protected environment variables/secrets, deployment promotion, domain/TLS configuration, observability, backup/restore, runbooks, real SMS credentials, and payment-provider selection/activation.

See `backend/docs/` for architecture decisions, phase closure records, and final acceptance documentation.
