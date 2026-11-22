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

## Server-side candidate resolution foundation (implemented, no login)

- Local Keycloak is pinned to `26.7.3` in `backend/docker-compose.yml`.
  The imported `moon` realm has `registrationAllowed=false`; independent
  `moon-web` OAuth/OIDC code + PKCE login remains the primary login path.
- `MehradKeycloakCandidateResolver.ResolveFromOneTimeProofAsync` takes the
  handoff ID, pinned merchant UUID and secret proof **on the server**.
  It atomically consumes the at-most-five-minute verified handoff and only
  then reads the exact immutable `(merchantId, mehradSubject)` identity link.
  Failed/wrong proofs do not consume a legitimate handoff; replay cannot
  produce a second candidate. The proof is never accepted from a public
  Moon/Keycloak login endpoint.
- Only an active Moon user with a previously linked Keycloak `sub` can be
  returned as a `(MoonUserId, KeycloakSubject)` **candidate**. Unknown links,
  cross-merchant claims, deactivated users and replayed proofs fail closed.
  No account, permission, role, session or token is created.
- A Moon database mapping does NOT prove that a corresponding Keycloak user
  remains present or enabled. Any eventual Keycloak authenticator must
  validate the account independently and bind the one-time proof to its own
  browser-authentication session, including `state` and CSRF protection.
- This slice is internal only: **no bridge HTTP endpoint, no custom Keycloak
  Authenticator SPI and no new OAuth grant** are enabled or registered.

## Proposed Keycloak browser handoff (not yet implemented)

1. Mehrad redirects to Moon's registered callback with a short-lived code.
2. Moon validates the HMAC code exchange and the signed provider ID Token.
3. A separately security-reviewed Keycloak 26.7.3 Authenticator SPI must start
   or resume a standard browser authentication session using a bound,
   one-time, fixed-audience challenge. The absence of provider `state`
   requires explicit anti-mix-up review before this design can be activated.
4. The trusted server component consumes the provider handoff once, yielding
   the existing Keycloak-sub candidate. Unknown/disabled identities fail.
5. Keycloak must look up the exact enabled user and create its **own** login
   session; the Moon API must not forge JWTs or assign default privileges.
6. Moon's existing OIDC code/PKCE callback, session-sync and authorization
   still operate, and direct Moon login remains independent.

The exact browser/Keycloak binding, challenge exchange, consumer auth,
first-time-user handling and activation are **not** delivered by the
candidate resolver; approval and adversarial tests are required.

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
