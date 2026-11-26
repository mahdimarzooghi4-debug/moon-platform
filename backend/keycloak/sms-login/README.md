# Central SMS login — foundation

This module is an isolated Java 21 transition policy for the future Keycloak 26.7.3 browser authenticator. It is not installed, bound to a realm, or exposed to users.

## Approved behavior and boundaries

- One login path for every enabled, eligible Moon account; no distinction based on the selected panel or browser-supplied role. Existing Keycloak account identity (exact canonical mobile username) and authoritative role/membership checks must remain in force.
- SMS.ir, six ASCII digits, expiry at 120 seconds from issuance; exactly at the deadline is expired.
- Preserve the existing OIDC authorization-code + PKCE flow, Keycloak-issued tokens, subject, and API-side role/membership checks. Never mint a token in the OTP policy or turn a registration-verification token into a login token.
- HMAC-bound challenges, no plaintext code retained in the challenge; delivery acknowledgement is required; wrong code is counted; consumed or invalidated challenges cannot verify again.
- Five attempts is reused from the existing startup mobile verification policy. The next integration must enforce resend cooldown, per-account and source rate limits across sessions and resends, and prevent account enumeration.

## Required before activation

The policy alone is not an authenticator or a persistent store. The caller must atomically apply each transition (including consume-before-authentication-success), invalidate prior challenges on resend, and handle concurrent requests, delivery failure or ambiguity, restart and multi-replica behavior. A previous immutable snapshot must never be accepted again. Use a dedicated server-side HMAC secret, never the SMS.ir key. No credential or OTP may be logged or passed to URLs.

Implement and test a Keycloak Authentication SPI on the deployed version, wire SMS.ir using server-only configuration, resolve an enabled account through authoritative username/subject mapping, preserve required actions and account controls, and use generic user-facing failures. Existing accounts without a valid assigned mobile require operator reconciliation; never assign a mobile or role from a login request. Maintain an independent administrative recovery path outside the public Moon browser flow.

Add real Keycloak/PostgreSQL/browser integration tests for correct, wrong, expired, concurrent, repeated, disabled, unknown and cross-account attempts; role isolation; failed SMS; and rollback. Only then review and explicitly activate the Moon browser flow in the running realm. Updating realm import JSON alone does not update an existing realm. Do not activate this foundation or change existing login while integration is incomplete.

## Test

From repository root:

```sh
out=$(mktemp -d)
javac -Xlint:all -Werror -d "$out" $(find backend/keycloak/sms-login/src -name '*.java')
java -cp "$out" ir.mah.identity.LoginOtpChallengeTest
rm -rf "$out"
```
