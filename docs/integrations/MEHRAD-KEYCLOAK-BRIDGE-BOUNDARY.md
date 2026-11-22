# Mehrad → Keycloak trusted identity bridge: architecture boundary

Status: TECHNICAL PROPOSAL ONLY. No external authentication plugin, custom
token grant, automatic user provisioning or Production sign-in is authorized.

Moon must continue to support two entrances into the same Moon application:
(1) independent Moon Keycloak/OIDC login; (2) entry from Mehrad, ending in a
genuine Keycloak session for the correctly mapped Moon user.

## Supported evidence and protocol gap

Current Mehrad documentation describes merchant-initiated SSO as a redirect
from the Mehrad application with a short-lived code. The Moon server can
exchange it using an HMAC-based client signature, then validate Mehrad's signed
ID Token and map the stable provider subject. This does not create or authorize
a Keycloak login session.

The available Mehrad merchant SSO documentation does not establish a standard
provider-initiated authorization endpoint for Keycloak, request state, nonce,
PKCE or user-initiated OIDC login. An OIDC discovery/JWKS endpoint alone does
not establish support for Keycloak's standard interactive OIDC identity broker.
Do not assume such endpoints or issue a fabricated Keycloak JWT.

Current authoritative verification entry points:
- https://mehrad.app/integrations/
- https://www.keycloak.org/docs/latest/server_admin/
- https://www.keycloak.org/docs/latest/server_development/
- https://www.keycloak.org/securing-apps/token-exchange

## Candidate paths — not a decision to activate

A. Standard Keycloak OIDC identity broker, ONLY IF Mehrad supplies a conforming
authorization-code identity-provider flow with broker-initiated login, state,
nonce, defined issuer, known endpoints, and a reviewed Keycloak callback. The
existing merchant callback cannot simply be treated as this flow.

B. Reviewed Keycloak extension / trusted broker, if Mehrad only supports
its merchant-initiated redirect. A backend could produce a strictly one-use,
short-lived, audience-bound attestation from a provider-verified identity. An
explicitly supported Keycloak plugin would validate issuer, audience, merchant,
nonce, state, browser authentication session, proof replay, and expiry through
a trusted backchannel, then Keycloak alone creates the session. Requires an
exact compatible Keycloak version, approved trust contract, dedicated code
and comprehensive adversarial E2E tests.

C. Existing Moon account linking, implemented in the current PR, is a limited
fallback only. It does NOT fulfill Mehrad-first seamless sign-in.

Never exchange arbitrary Mehrad tokens for Keycloak tokens or mint Moon tokens
outside Keycloak. Standard Keycloak token exchange must not be assumed to
accept a random third-party ID Token for local session issuance.

## Identity invariants and first-time user policy

- Exact key is (merchant UUID, signature-validated Mehrad subject UUID).
- No account matching by mobile, national ID, display name or unverified claims.
- Inactive or duplicate links always fail closed, with explicit recovery policy.
- No role, organization membership, permission, admin access or privilege
  is inherited from Mehrad.
- New-user provisioning policy (including opt-in, minimum profile, ownership
  checks and initial access) needs explicit business approval before any code
  path permits it. No implicit first-user creation.
- Moon login must remain usable during Mehrad downtime.
- Secrets, short-lived codes and proofs never enter front-end URLs/logs.

## Staging and security evidence required

- Mehrad documents Staging API: https://dev-api.mehrad.app and Production API:
  https://api.mehrad.app. Moon now explicitly pins separate providers for
  the code exchange, scoped profile and JWKS/issuer validation. Missing or
  unknown environment configuration fails closed.
- Signed Staging tokens, the actual reported issuer, key rotation and scopes
  still require live provider verification before enabling the real flow.
- Browser and PostgreSQL tests: correct existing link; no linked user;
  mixed subject/merchant; bad issuer/signature/audience; stale/forged/replayed
  proof; parallel exchanges; lost acknowledgments; login-CSRF and identity
  mix-up; cross-browser/keycloak-session switching; independent Moon login.
- Review a real HTTPS same-origin gateway, trusted forwarded headers and
  callback-code log redaction. No Stage server exists currently.

Business → Technical → Backlog → Sprint → Code → Code Review → Stage → QA →
Release Approval → Production → Monitoring → Improvement.

PR #279 remains Draft/Open; all activation and merge decisions are reserved
for explicit owner approval and independent security assessment.
