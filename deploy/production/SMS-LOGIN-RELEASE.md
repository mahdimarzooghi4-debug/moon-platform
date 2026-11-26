# Moon SMS login: candidate deployment boundary

This is a preparation package, not authorization to install or activate the provider. The production automatic main-branch deploy is deliberately blocked for this release until an approved coordinated activation and rollback mechanism exists. Never remove the guard merely to make CI green.

## Candidate artifact and configuration

CI packages an optimized Keycloak 26.7.3 image with the unchanged tested provider. The base production compose is not changed. The separate compose.sms-candidate.yaml overlay is opt-in only. It adds a dedicated private PostgreSQL volume, a separate database-owner role and restricted runtime role, the existing OTP schema on first initialization, explicit secrets and the trusted Caddy proxy address. Keycloak connects only as `moon_login_otp` (NOSUPERUSER, NOCREATEDB, NOCREATEROLE, NOINHERIT, NOBYPASSRLS); the distinct `moon_login_otp_owner` role is used only by PostgreSQL initialization. Runtime receives only SELECT/INSERT/UPDATE/DELETE on the two OTP tables and USAGE on public; it cannot create tables, roles, databases, or extensions. The overlay does not bind a flow, run a realm import, or change the running realm. The existing API and Keycloak databases are not reused for OTP. PostgreSQL initialization scripts run only for a new volume; independently verify schema and privileges on existing volumes. No real secrets are committed.

On an approved server with a protected mode-600 environment file, the following is a read-only syntax/contract check (not approval or activation):
```sh
docker compose --env-file deploy/production/.env.production \
  -f deploy/production/compose.yaml -f deploy/production/compose.sms-candidate.yaml \
  config --format json | python3 deploy/production/validate-sms-candidate.py
```
Never print or save the rendered environment. The image tag is the reviewed release SHA, not a mutable tag. Generate two different unique OTP database credentials (owner and application) and an independent stable random HMAC key on the protected server. Do not give the owner credential to Keycloak. Use the existing authorized SMS.ir API credential only after confirming the login-specific template and parameter. Keycloak requires MOON_SMS_IR_LOGIN_TEMPLATE_ID and MOON_SMS_IR_LOGIN_CODE_PARAMETER, with no fallback to startup registration configuration. The registration API and its configuration are unchanged. Do not substitute test credentials.

## Release prerequisites (not yet evidenced)

- Complete technical code review and exact-SHA CI, including image build, real browser integration, and proxy spoofing resistance on the actual topology.
- Verify server capacity, private DB schema, least privilege, backup/restore and HMAC rotation/expired data cleanup procedures; no invented retention period.
- Privately inventory real Keycloak users, canonical verified mobile ownership, active roles and required actions. Reconcile any non-mobile or unverified privileged accounts before switching. Preserve required actions, audit trails and independently tested admin recovery. Do not assign roles or change mobile ownership automatically.
- Check for active legacy auditor memberships and realm assignments; resolve through audited authorized actions, not history deletion.
- Validate SMS.ir connectivity, real authorized key, active template, balance and an owner-approved test number. Provider acknowledgement is not proof of handset delivery.
- Create a dedicated REQUIRED browser flow and bind it only to moon-web, preserving the realm default flow and admin recovery; verify the current client override, PKCE and rollback targets. Existing realm import does not update live realm. Never use a global browser-flow override.
- Capture current immutable image tags, existing client flow binding, protected configuration and verified database backups; rehearse rollback in an isolated environment. Restore the previous client override and compatible web/Keycloak images together if activation fails; do not automatically reverse data migrations or restore a database over new business data.
- Explicit owner release approval is required before any production mutation. A successful CI is insufficient. After coordinated activation, verify one real delivered code and correct panel permissions for every actual role. Stop and roll back on failure.

## Status

Candidate packaging only. No production SSH, secret read, database migration, image transfer, runtime restart, client change or live SMS is performed by this preparation. The exact operational release command and rollback mechanism remain a separate gate.

## Client binding rehearsal

The private operator command sms-client-flow.py prepares an unbound exact one-execution REQUIRED flow, captures a mode-600 immutable-by-convention snapshot, and verifies client-only activation or rollback against the running Keycloak API. It accepts only an explicit private loopback tunnel and a mode-600 token file, never a command-line token. Every write requires an explicit matching release SHA argument, and activation/rollback require the snapshot digest. It requires enforced PKCE S256, checks default realm flow and other client binding drift, and refuses unexpected states. This is not cryptographic release authorization or a concurrency lock: use an exclusive operator maintenance window with independent owner approval. The running production realm has not been inspected. The disposable browser suite first rehearses activation, idempotent replay and rollback, then tests all seven roles using the client override rather than a global realm binding. A coordinated web/image switch and operational recovery gate are still required; the automatic deploy guard remains in place.

## Exact-SHA coordinated image bundle

The separate Moon SMS Release Bundle workflow packages the web, API and optimized Keycloak images from the same exact PR head (not the synthetic merge SHA). It checks the image IDs against the archived configuration blobs, rejects unrelated tags and incomplete archives, and uploads the archive plus SHA-256 manifest as a candidate artifact. The verifier never extracts layers or loads images. An archive digest is integrity evidence, not a signature or approval; retrieve the artifact only from the reviewed workflow run for the exact approved SHA. This package is not transferred to the server. The browser integration now starts the optimized provider image, rather than a development-mode Keycloak container. Full coordinated production switch, prior running image capture, maintenance window, real account/credential checks and recovery rehearsal remain operational prerequisites. The automatic deploy guard remains intact.
