# Central SMS login — foundation

This module contains a Java 21 transition policy and a private PostgreSQL store for the future Keycloak 26.7.3 browser authenticator. It is not installed, bound to a realm, or exposed to users.

## Approved behavior and boundaries

- One login path for every enabled, eligible Moon account; no distinction based on the selected panel or browser-supplied role. Existing Keycloak account identity (exact canonical mobile username) and authoritative role/membership checks must remain in force.
- SMS.ir, six ASCII digits, expiry at 120 seconds from issuance; exactly at the deadline is expired.
- Preserve the existing OIDC authorization-code + PKCE flow, Keycloak-issued tokens, subject, and API-side role/membership checks. Never mint a token in the OTP policy or turn a registration-verification token into a login token.
- HMAC-bound challenges, no plaintext code retained in the challenge; delivery acknowledgement is required; wrong code is counted; consumed or invalidated challenges cannot verify again.
- Five attempts is reused from the existing startup mobile verification policy. The next integration must enforce resend cooldown, per-account and source rate limits across sessions and resends, and prevent account enumeration.

## Required before activation

The policy alone is not an authenticator. The PostgreSQL store implements atomic state transitions, one active challenge per realm/mobile, shared limits, and consume-before-success. All replicas must use the same dedicated stable HMAC secret and database. No raw mobile, subject, IP or code is stored. Challenge cleanup across inactive scopes, operational database provisioning, trusted-proxy source extraction, and coordinated key rotation remain required before activation. The caller must atomically apply each transition (including consume-before-authentication-success), invalidate prior challenges on resend, and handle concurrent requests, delivery failure or ambiguity, restart and multi-replica behavior. A previous immutable snapshot must never be accepted again. Use a dedicated server-side HMAC secret, never the SMS.ir key. No credential or OTP may be logged or passed to URLs.

Implement and test a Keycloak Authentication SPI on the deployed version, wire SMS.ir using server-only configuration, resolve an enabled account through authoritative username/subject mapping, preserve required actions and account controls, and use generic user-facing failures. Existing accounts without a valid assigned mobile require operator reconciliation; never assign a mobile or role from a login request. Maintain an independent administrative recovery path outside the public Moon browser flow.

Add real Keycloak/PostgreSQL/browser integration tests for correct, wrong, expired, concurrent, repeated, disabled, unknown and cross-account attempts; role isolation; failed SMS; and rollback. Only then review and explicitly activate the Moon browser flow in the running realm. Updating realm import JSON alone does not update an existing realm. Do not activate this foundation or change existing login while integration is incomplete.

## Test

From repository root:

```sh
out=$(mktemp -d)
javac -Xlint:all -Werror -d "$out" $(find backend/keycloak/sms-login/src/main -name '*.java') backend/keycloak/sms-login/src/test/java/ir/mah/identity/LoginOtpChallengeTest.java
java -cp "$out" ir.mah.identity.LoginOtpChallengeTest
rm -rf "$out"
```

The CI PostgreSQL job applies schema.sql to a disposable database and verifies concurrent consumption and shared rate limits. No schema is applied to production.

## SMS transport

The isolated Java transport uses the exact Keycloak 26.7.3 JSON dependency set and the existing Moon SMS.ir verify contract. Production endpoint is fixed; configuration is server-only. Current deployment template is 743974 and parameter CODE; the operator must wire those approved settings and the existing secret into Keycloak at deployment. No live SMS is sent by CI.

LoginOtpService issues a pending challenge, sends once, records provider acceptance before allowing verification, invalidates failed/ambiguous sends, and never returns a code to the caller. Provider acceptance is not proof of handset delivery. The transport and service remain unregistered with Keycloak; the browser authenticator, server secret provisioning, database wiring and runtime tests are still required.

## Keycloak provider (not activated)

The provider ID is moon-sms-login. The Maven package contains the Authentication SPI and a Persian server-rendered form. It accepts only the moon realm and moon-web client, and must be configured as a standalone REQUIRED browser execution, not added to the password flow or made an alternative that could bypass OTP. Account resolution is exact canonical mobile username, not a role supplied by the browser. Disabled/locked/unresolved users cannot authenticate. A challenge is bound to the root authentication session and tab, account subject, realm and client. Only a committed verification calls context.setUser and context.success; the usual Keycloak required actions and OIDC flow remain in force.

Unresolved accounts use the same form and shared issuance limits, but no SMS is sent. This is not a guarantee of timing indistinguishability; enumeration resistance must be tested and hardened before activation. The connection address must be derived from the trusted reverse proxy configuration; do not activate on an unverified proxy topology. Existing mobile username ownership must be reconciled before OTP-only login, especially privileged users. Required actions and alternate clients must be reviewed; never silently remove a required action or alter admin recovery.

Server-only required environment: MOON_LOGIN_OTP_JDBC_URL, MOON_LOGIN_OTP_DB_USER, MOON_LOGIN_OTP_DB_PASSWORD, MOON_LOGIN_OTP_HMAC_KEY (base64, at least 32 random bytes), MOON_SMS_IR_API_KEY, MOON_SMS_IR_STARTUP_TEMPLATE_ID, MOON_SMS_IR_STARTUP_CODE_PARAMETER. The existing SMS settings are reused only after explicit operator wiring. The private OTP schema is not installed automatically. No provider JAR, environment, existing realm, frontend or production compose is changed by this commit. CI checks compilation and disposable Keycloak installation; full browser/role/recovery integration remains required.

## Web entry (not deployed)

The public Moon login page starts the existing OIDC authorization-code + PKCE flow directly instead of showing a simulated five-digit form. The chosen account category is a navigation preference only; the server-rendered Keycloak form confirms the prefilled mobile and sends the real six-digit code on POST. Explicit login requests prompt for authentication. Existing authorized panels are selected using the backend identity response; inactive users and unknown panel routes are rejected. The legacy OTP route is no longer reachable through /auth. The Keycloak provider must be activated together with this UI; a separate deployment of the UI against the existing password browser flow is not a working SMS login. Owner confirmed auditor is not a Moon business role. No auditor panel is required. Retired historical role and membership references are retained; new grants, reactivation and effective access are denied. Existing active legacy memberships must be reconciled via audited administration before applying the retirement migration. Existing realm role assignments must be checked by the operator before activation; import JSON alone does not mutate the running realm.

## Disposable browser integration

CI builds the unchanged provider JAR and runs Keycloak 26.7.3, PostgreSQL 18, and Chromium. The SMS.ir hostname resolves to a disposable HTTPS fixture on a Docker network, with an ephemeral certificate and fake API key. No live SMS, production realm, or production database is accessed. The fixture derives the seven current domain roles from the repository production realm; verifies OIDC state, PKCE, nonce, subject, audience and role isolation; checks wrong code, cooldown, expiry, attempt exhaustion, disabled/unknown users, rejected transport, session isolation and required action preservation. Database state is reset only between isolated test scenarios. These tests do not validate real SMS delivery, real account ownership, existing realm migration, proxy configuration, or operational recovery. The provider remains unactivated in production.
