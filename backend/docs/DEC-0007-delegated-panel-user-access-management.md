# DEC-0007 — Delegated panel user and access management

Status: Business decision approved and amended by the product owner on 2026-11-28. The subsequent explicit single-user rule for companies and startups supersedes earlier five-panel delegation language.
Related: DEC-0002, DEC-0004, DEC-0005, DEC-0006. Scope: five-panel user administration and permission delegation, not implementation.

## Approved business model

- The principal Moon administrator designates the principal administrator of Aineh and each organization, and manages internal Moon users. Company and startup access remains subject to their respective approved registration/activation authority under DEC-0004. Each company and each startup has only one active panel user.
- Only Moon administration, Aineh and each organization support multiple users and delegated capability/operation permissions within their own context. Each company and each startup has a single active panel user, no subordinate accounts and no user/permission-management workspace. Enforce the single-active-user rule in the backend including concurrent grants and replacement. All panel users have independent mobile-based authentication, not shared credentials.
- The central Moon administrator oversees system-wide access; oversight does not grant unrelated business approval, payment, certificate issuance or other operational authority. No delegated user may grant permissions beyond their own authority or outside their authorized context.
- Exactly five business role/panel types remain. A principal designation and granular permission grants are access-control concepts within these roles, not sixth or additional business roles. Aineh remains a single creative house; all organizations use one reusable panel with distinct context.
- Only the three multi-user panel types provide subordinate user/access management to authorized principal administrators. Company and startup have own account/security settings, not delegated administration. Preserve historic identities and revoke prior access on authorized replacement; the exact replacement/verification/revocation process remains to be specified. All actions and access changes are attributable to the actual actor and auditable.
- Sensitive financial operations, approvals and official certificate issuance remain limited by the approved business authority, applicable legal eligibility, signatory rules and financial controls. Delegation alone cannot confer legal authority or bypass required checks.

## Technical and Business contracts still needed

Define the principal designation/appointment/replacement/revocation and bootstrap lifecycle, actual principal cardinality, account identity and mobile change policy, invitation/activation, allowed delegable permissions, nondelegable operations, relationship between principal and subordinate grants, central oversight and revocation limits, cross-context denial, session/token revocation, concurrency and audit, and migration of existing users and memberships. Do not assume every permission is delegable or that the current UI/API can provision a new system administrator. Preserve existing identity, historical roles, membership and audit records. Use server-side scoped enforcement and negative tests; no self-escalation or automatic grants. Exact permission catalog and sensitive decision delegation require explicit contracts. Individual contributors remain mobile-only with no account/panel, as DEC-0002 specifies.

## Delivery

Apply this amended requirement to all five panel reviews. Earlier company/startup multi-user proposals are superseded. No application code, production account creation, authentication configuration changes, migrations, merge or deploy authorized. PR #324 stays Draft/Open. Public site remains frozen.
