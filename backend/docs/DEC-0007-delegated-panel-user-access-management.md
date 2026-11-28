# DEC-0007 — Delegated panel user and access management

Status: Business decision explicitly approved by the product owner on 2026-11-28.
Related: DEC-0002, DEC-0004, DEC-0005, DEC-0006. Scope: five-panel user administration and permission delegation, not implementation.

## Approved business model

- The principal Moon administrator designates the principal administrator of each panel's actual organization/context (Aineh, each organization, each company, each startup). The principal Moon administrator also manages internal Moon users.
- Each designated principal panel administrator manages their own context's subordinate users and assigns configurable capability/operation permissions within that context. No fixed user count is implied. Each person has an independent account and mobile-based authentication, not shared credentials.
- The central Moon administrator oversees system-wide access; oversight does not grant unrelated business approval, payment, certificate issuance or other operational authority. No delegated user may grant permissions beyond their own authority or outside their authorized context.
- Exactly five business role/panel types remain. A principal designation and granular permission grants are access-control concepts within these roles, not sixth or additional business roles. Aineh remains a single creative house; all organizations use one reusable panel with distinct context.
- All five panels provide user/access management to authorized principal administrators. All actions and access changes are attributable to the actual actor and auditable.
- Sensitive financial operations, approvals and official certificate issuance remain limited by the approved business authority, applicable legal eligibility, signatory rules and financial controls. Delegation alone cannot confer legal authority or bypass required checks.

## Technical and Business contracts still needed

Define the principal designation/appointment/replacement/revocation and bootstrap lifecycle, actual principal cardinality, account identity and mobile change policy, invitation/activation, allowed delegable permissions, nondelegable operations, relationship between principal and subordinate grants, central oversight and revocation limits, cross-context denial, session/token revocation, concurrency and audit, and migration of existing users and memberships. Do not assume every permission is delegable or that the current UI/API can provision a new system administrator. Preserve existing identity, historical roles, membership and audit records. Use server-side scoped enforcement and negative tests; no self-escalation or automatic grants. Exact permission catalog and sensitive decision delegation require explicit contracts. Individual contributors remain mobile-only with no account/panel, as DEC-0002 specifies.

## Delivery

Apply this common requirement to all five panel reviews. No application code, production account creation, authentication configuration changes, migrations, merge or deploy authorized. PR #324 stays Draft/Open. Public site remains frozen.
