# Moon — Ubuntu 24.04 main-server deployment contract

**State: IMPLEMENTATION DRAFT / NOT DEPLOYED / NOT RELEASE APPROVED.**
This directory provisions Moon directly on the owner's Ubuntu server. Render is
NOT part of the target topology. Do not modify Render or current DNS to run
these checks. PR #279 stays Draft/Open until code/security review and explicit
owner merge, Stage, QA, release and Production decisions.

## Architecture

One public HTTPS hostname (`mahcsr.ir`), published ports **80/443 only**:

| Public path | Private service | Function |
| --- | --- | --- |
| `/` and app routes | `web:8080` | React SPA / independent Moon login |
| `/api/*` and `/health/*` | `api:8080` | ASP.NET API, validated Keycloak bearer |
| `/identity/*` | `keycloak:8080` | Keycloak 26.7.3 OIDC Code+PKCE |
| `/identity/admin/*` | **403** | Admin UI intentionally not public |

The internal fixed Caddy gateway address `172.30.88.10` is the ONLY trusted
forwarded-header proxy in the API. Check this subnet does not conflict with the
host's VPN, Docker networks or intranet before approval. App requests use the
public HTTPS Keycloak issuer
`https://mahcsr.ir/identity/realms/moon`, routed internally to the Caddy TLS
gateway for signature-key discovery. The JWT issuer/audience are NOT replaced by
an internal HTTP issuer. HTTPS and certificate validation remain mandatory.

## Registry compatibility on the owner’s host

The host successfully pulled and ran an Alpine test image from Amazon ECR
Public. Docker Hub and download.docker.com responded with HTTP 403 on this
host. Direct pulls of Keycloak 26.7.3 from Quay, .NET 10 SDK/runtime from
Microsoft Container Registry, and PostgreSQL 18, Node 22, unprivileged Nginx
and Caddy 2.10.2 from ECR Public succeeded (owner-observed SSH output).
The deployment Compose and frontend Dockerfile therefore use **those exact
registries**. This change does NOT change versions of Keycloak or Postgres,
nor guarantee that all layers/build dependencies are reachable.

**Resource warning:** the dedicated Ubuntu host reports about 3.8 GiB RAM
and 4 GiB swap. Production Vite builds previously required a GitHub CI
Node heap greater than 5 GiB. The Compose file therefore uses immutable local
image tags and does not build application images on the server.

For an approved image build, open Actions → Release Verify, select the
`feat/mehrad-sso-integration` branch, and run the workflow manually. The
`server-images` job runs only for that branch, after the deployment contract,
frontend and backend jobs pass. It builds the frontend and API images at the
workflow commit SHA, then uploads a seven-day artifact containing the images
and a SHA-256 checksum. This creates an artifact only; it does not deploy,
change DNS or publish a public registry image.

Download the artifact and transfer both files to
`deploy/production/` on the server. Verify the archive with
`sha256sum -c moon-platform-images-<FULL_SHA>.tar.gz.sha256`, load it with
`docker load -i moon-platform-images-<FULL_SHA>.tar.gz`, and set
`MOON_IMAGE_TAG=<FULL_SHA>` in the private `.env.production`. Run the
read-only preflight again. The exact image SHA must match the approved source
commit; do not use a moving tag such as `latest`.

Do not run `docker system prune`; downloaded base images should be kept
until the corresponding services are validated. Clean-up requires explicit
inventory, verified backups and release acceptance.

PostgreSQL 18 instances are **independent** for Moon and Keycloak, each on the
internal Docker network with NO published database ports. RabbitMQ/outbox
dispatch remains disabled by policy until verified producer/consumer
operations and transport readiness. SMS, payments and Mehrad SSO are also
disabled by default. Do not mistake a reachable homepage for business launch.

## Phase A — server preparation (operator-controlled; no cutover yet)

1. Verify the Ubuntu 24.04 host's storage, RAM, CPU, Docker subnet availability,
   backup destination and outbound access for ACME/TLS.
2. Configure a non-root SSH operator, key-based access and host hardening.
   **Never change UFW/SSH rules before confirming an independent working SSH
   connection.** Only ingress 22 (restricted to authorized IPs), 80 and 443 is
   needed; do NOT publish 5432, 8080, 8081, RabbitMQ or Keycloak admin.
3. Install the maintained Docker Engine and Compose plugin using the official
   Ubuntu instructions. Do not run a `curl | sh` installer.
   https://docs.docker.com/engine/install/ubuntu/
4. Obtain the exact approved source SHA. Make a release tag/immutable image
   digest only after code review, Stage, QA and explicit approval. Do not
   automatically deploy a feature branch or follow its future commits.
5. Create the production folder on the server, copy
   `deploy/production/env.example` to
   `deploy/production/.env.production`, replace **all** placeholders with new
   distinct strong secrets and set `chmod 600`. Secrets NEVER enter Git,
   the web frontend, chat, access logs or a support ticket. Treat users in the
   Docker group as effectively root. Protect Docker socket and shell history.
6. Run the **read-only** preflight:
   `bash deploy/production/preflight.sh`.
   It validates configuration presence and Compose syntax, NOT readiness.

## Phase B — approved empty-DB Stage bootstrap, not Production

The exact sequence below is an **operator runbook**, not permission to run it
on the real server. Capture a before/after change record.

- Confirm DNS cutover plan with the site owner. Current `mahcsr.ir` points to
  existing Render hosting; Caddy cannot obtain its public certificate until
  DNS/80/443 reach the NEW host. Do NOT remove or alter Render until cutover.
  A separately approved Stage hostname is preferable if external provider
  allows an additional redirect registration.
- Keycloak's imported realm `backend/keycloak/moon-realm-production.json`
  allows EXACTLY `https://mahcsr.ir/auth/callback` and web origin
  `https://mahcsr.ir`. It never creates system-admin membership and has
  `registrationAllowed=false`. The import runs for a NEW Keycloak DB;
  Keycloak's `--import-realm` does not overwrite an existing realm. Future
  realm config changes require a reviewed Keycloak-admin migration.
- Start `moon-db`, `keycloak-db`, and `keycloak` only after owner Stage
  approval. Confirm DB health and Keycloak startup.
- **Before schema changes:** take verified two-database backups and document
  a tested restore. A database reset is NOT a migration strategy.
- Run the explicit one-shot migration profile after schema review:
  `docker compose --env-file deploy/production/.env.production -f
  deploy/production/compose.yaml --profile migrations run --rm migrate`
  (execute the command as a single line).
  API always has `Database__MigrateOnStartup=false` and must NEVER silently
  advance schema during container restart.
- Only then start `api`, `web` and `gateway` using the approved SHA.
  Verify HTTPS and routed paths; do not activate unverified providers.

## Phase C — acceptance checks before any main-server activation

- HTTPS certificate, HSTS, public path routes, public 403 on Keycloak admin.
- `GET /health/live`, `GET /health/ready`, provider-independent Moon UI.
- Discovery URL
  `https://mahcsr.ir/identity/realms/moon/.well-known/openid-configuration`
  must report `issuer=https://mahcsr.ir/identity/realms/moon`.
- Existing Moon Keycloak login: OIDC state/nonce/PKCE, token audience,
  synchronizing `/api/v1/session/sync`, inactive user and role enforcement.
- New browser tab, logout, expired token, restart persistence, concurrency,
  CORS/CSRF, denied unknown privileges and audit event integrity.
- Callback `/api/v1/integrations/mehrad/sso/callback?code=...` remains
  disabled until independent Mehrad/Keycloak browser-broker review and real
  Staging signature/issuer validation. Caddy access logging is omitted and the
  callback route is excluded from ASP.NET OpenTelemetry tracing, but also
  inspect host/proxy, CDN, WAF, browser history and error monitoring to
  confirm codes are never collected. Verify SameSite cookie navigation.
- Real SMS and payments remain unimplemented/disabled. No invented OTP,
  payment provider, credentials or business approval.
- Execute a documented PostgreSQL **restore drill**, encrypted off-host
  backup, defined recovery objectives, host/container monitoring and alerts,
  incident response and rollback procedure. No RPO/RTO is invented.
- Confirm image update/rollback strategy and exact release SHA; review
  production capacity under load, external security testing, internal audit
  and owner release acceptance. A green CI is NOT Stage/QA approval.

## Operational backup

An explicit operator command (not a backup schedule):

`bash deploy/production/backup-databases.sh /absolute/private/backup/path`

It uses PostgreSQL custom dumps for BOTH Moon and Keycloak, rejects relative
paths, sets private file permissions and produces SHA-256 checksums. Dumps
contain personal data and credentials/identity state: encrypt them for
separate off-host storage, enforce retention authorized by the owner and
perform an isolated restore rehearsal. Do not expose dumps via web folders.

## Outstanding product gates

- Mehrad: current PR only supports explicit existing-account linking after
  separate Moon login. Seamless Mehrad-first Keycloak authentication, new-user
  onboarding policy and live sandbox security E2E are **not implemented**.
- Real SMS provider for OTP requires the owner's provider contract/API details;
  placeholder SMS remains disabled.
- Payment provider selection and OD-004 are unresolved; payment stays disabled.
- Main-domain DNS currently serves Render; deciding to replace it is a
  **separate cutover decision**. Server ownership and code readiness alone
  do not authorize this.
