# Mehrad SSO — Moon development and Stage readiness

Status: DRAFT, NOT ACTIVATED. PR #279 remains Draft/Open/unmerged.
Moon preserves independent Keycloak OIDC login and Moon-owned account authorization.

## Provider onboarding (reported by the owner, not end-to-end verified)

- Development merchant for Moon confirmed by owner; Merchant ID held for server configuration.
- Active SSO key label moon-dev-sso, scopes openid and profile.
- Mehrad reportedly confirmed Moon redirect template:
  https://mahcsr.ir/api/v1/integrations/mehrad/sso/callback?code={code}
- The secret is stored privately by the owner and must never enter Git, chat, frontend or logs.
- Important: verify the correct SSO token/JWKS endpoint for development keys with
  Mehrad. The official integrations index identifies Staging as
  https://dev-api.mehrad.app and Production as https://api.mehrad.app.
  The Moon token client currently targets the Production URL, so Staging
  activation must remain blocked until environment isolation is implemented.
  Do not silently send development credentials to a production provider API.

## Existing-account linking implemented

The verified Mehrad code is exchanged server-to-server. A one-use bounded handoff
is issued only after ID token validation. A secure HttpOnly SameSite cookie holds
the browser proof. The /mehrad/confirm screen reads the existing Moon Keycloak
session, displays the Moon account, and requires explicit consent before a
same-origin POST to /api/v1/integrations/mehrad/sso/link-existing.
A bearer-authenticated, same-origin GET to /api/v1/integrations/mehrad/sso/handoff-preview
checks the still-active handoff cookie, shows the verified Mehrad subject UUID,
and does not consume the one-use proof or return provider credentials. The
browser requires this preview before presenting an active consent action.
After separate Moon OIDC login, only the known /mehrad/confirm return path is
allowed for this workflow. Moon authorization and roles do not change.

This does NOT issue a Keycloak session from Mehrad, provision a new Moon user or
complete seamless Mehrad-first login. Never link users by unverified phone or ID.

## Configuration and deployment preconditions

- Keep MehradSso__Enabled=false until Stage review.
- Inject MehradSso__MerchantId and MehradSso__ClientSecret via server-only secrets.
- After HTTPS deployment set MehradSso__PublicOrigin=https://mahcsr.ir .
- The Moon site is not on a server at that origin yet. No Stage has occurred.
- The current deploy/nginx.conf serves static SPA assets only. Provide trusted
  HTTPS same-origin routing for /mehrad/confirm, /api/v1/me, and Mehrad SSO APIs.
- Test proper trusted-forwarded-header handling on ASP.NET Core; never trust
  arbitrary client forwarded headers. Confirm strict cookies in real browsers.
- Redact callback code query values from all proxy/application access logs and
  tracing; set no-store, no-referrer, correct CORS and TLS settings.

## Blockers before activation

1. Review login-CSRF and identity mix-up, as Mehrad's described flow lacks state.
   The screen now displays the signed Mehrad subject UUID before consent.
   However, a UUID alone is not human-recognizable; independent review of
   identity intent/binding is still required before any Stage activation.
2. Define trusted Keycloak identity broker and first-time-user provisioning policy
   for genuine seamless Mehrad-first login. Do not forge Moon/Keycloak JWTs.
3. Obtain authorized test user, confirm development SSO API URL, provider JWT/JWKS
   behavior, expiry, key rotation and secure secret injection.
4. Decide handoff cleanup/retention policy and account collision/recovery rules.
5. Test real HTTPS browser path, no session, account confirmation, conflict, wrong
   Origin, consumed/expired handoff, lost ACK, simultaneous attempts and
   independent Moon login. Complete independent security review.

Business -> Technical -> Backlog -> Sprint -> Code -> Code Review -> Stage ->
QA/Testing -> Release Approval -> Production -> Monitoring -> Improvement.
Do not merge, mark Ready, or deploy this PR without explicit owner authorization.
