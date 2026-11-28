# DEC-0002 — National CSR platform, Emdad pilot and five-role model

Status: Business decision accepted by product owner on 2026-11-28.
Scope: target product and panel redesign; not an implementation or a production admission.
Baseline: PR #324, commit `16b93cee0e9bf08eb01c97df71f7a284e9f9a164`. Live responsive web baseline `3c1c83a996592617f5d905a6acd450d1b420b2a8`, as confirmed by the operator. Existing operational data and deployment remain in place.

## Approved business decisions

1. **National ambition, limited initial pilot.** Moon (ماه) is intended to become the official national CSR platform. This is a product objective, not a claim of official designation or approval. Initial pilot is with Imam Khomeini Relief Foundation (کمیته امداد امام خمینی (ره)).
2. **Multiple organizations.** Emdad is the first organization, not a permanently hard-coded organization type. Replace the dedicated Emdad panel concept with one reusable organization panel. Additional organizations (e.g. Iranian Red Crescent, هلال احمر) can be defined through the Moon administrator panel without writing a new panel for each organization. Examples do not assert onboarding or consent. The Iranian National Tax Administration (سازمان امور مالیاتی کشور) is also a prospective future organization using the same five-role business model and shared organization panel, not a separate role, special panel or special workflow. This does not assert an integration, legal authorization, onboarding, or an organization-specific project-definition path.
3. **Single creative house.** خانه خلاق آینه is the only creative house in Moon. The earlier multi-creative-house and startup-to-house assignment/transfer proposals are expressly superseded. All startups are under Aineh's creative-house remit. Do not build a multi-house registry, assignment workflow or transfer workflow as part of this redesign.
4. **Exactly five operational role types and panel types.** The following are the complete target business vocabulary, not new technical identifiers:

   | Role | Panel scope |
   | --- | --- |
   | مدیر سامانه ماه | central Moon administration |
   | مدیر خانه خلاق | خانه خلاق آینه |
   | استارتاپ | own startup scope |
   | شرکت | own company scope |
   | سازمان | own organization scope |

   Multiple users (only in Moon, Aineh and each organization), startups, companies and organizations do not create additional role types. Each company and each startup has exactly one active panel user as specified in amended DEC-0007. Standalone evaluator, finance/fund-manager, and other operational roles are to be retired; the existing supervisor/Emdad concept becomes the organization role. Auditor was previously retired. Retiring roles does not authorize deletion of business functions, ledger entries, audit history, identities or operational records.
5. **Project organization association and tag.** Projects must support an authoritative organization association and corresponding organization tag. Tags are derived from registered organization identity rather than fabricated display text. Future public catalog organization tags/filtering are planned but **not part of the present public-site release**. Cardinality, assignment/approval authority and transition rules require a later explicit business contract; do not guess or silently attach historical projects.
6. **Public site freeze for pilot.** Keep the current public pages, content, Emdad names/logos and responsive presentation unchanged during the panel redesign. The existing public branding is intentional for pilot; do not rebrand the site or introduce organization tags/filtering into public pages at this stage.
7. **Individual participation.** Individual participants require only a mobile number as identity information, verified by real SMS OTP. No signup, individual account, individual panel, name, national ID or email required. The agreed flow is project selection, amount, mobile, OTP, payment gateway, authoritative transaction confirmation, receipt and payment confirmation SMS. This is an approved business rule, not evidence that real integrations are already working. Public-site freeze means any UI rollout or payment activation needs separate approved scope. Do not simulate verification, payment success or receipts as real.

## Technical guardrails and unresolved contracts

- Enforce organization/startup/company data scope server-side, not just by hiding navigation or adding tags. Organization registration and access lifecycle, role codes and exact grants must be derived in Technical after business review.
- Existing role mapping spans backend SystemRoles, database memberships, Keycloak, authorization checks, login routing, frontend and cross-panel workflows. Do not delete role records or perform destructive migrations as a shortcut.
- Explicitly allocate evaluation, financial, funding, approval, supervision, certificate issuance and other legacy responsibilities across the five roles before implementation. Authority separation, maker/checker where required, financial controls, payment settlement and organization-specific legal rules are not waived by removing role types.
- Define project organization association cardinality, selection/assignment authority, project lifecycle and change policy. Define how existing Emdad data and memberships are migrated with verified lineage, access isolation, audit and rollback. No invented default mapping or automatic access elevation.
- No new organization onboarding, live payment activation, or new production credentials are implied by this decision.
- Technical design must preserve existing users, applications, financial and audit records. Establish migration and compatibility plan, tests for cross-organization denial and role retirement, and explicit release approval.

## Delivery order

Business (this decision and detailed responsibility/workflow contracts) → Technical → Product Backlog → Sprint → Code → Code Review → Stage → QA/Testing → Release Approval → Production → Monitoring → Improvement.

Review all five target panels for business contracts, real workflows, backend/API integration, cross-panel transitions, UI/UX and responsiveness, security, and end-to-end tests. Finish business/technical contracts before implementing the new permissions or removing legacy routes.

PR #324 remains Draft/Open; do not merge, deploy or execute a migration on the basis of this decision. The current public site and live release are not changed by this documentation.
