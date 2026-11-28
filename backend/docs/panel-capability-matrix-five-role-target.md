# Five-panel target — Business capability matrix

Status: working Business design, 2026-11-28. Approved responsibilities are derived from DEC-0002 through DEC-0005. Suggested navigation, read models and unresolved permissions are not independently approved. This is not a Technical contract, implementation acceptance or release approval.

Baseline: PR #324, `bb0d8acf874a0d7c70f9af71bda5ea7909f5621b`, Release Verify #267 and Bundle #97 successful. Existing routes inspected in src/app/router.tsx; a route is not proof of a working API or real financial capability.

## 1. Manager of Moon (مدیر سامانه ماه)

| Capability | Business basis / boundary |
| --- | --- |
| Company applications and activation | Approved: review company registration and activate on approval (DEC-0004). |
| Organizations | Approved: define multiple organizations through admin; Emdad pilot (DEC-0002). |
| Users and access management | Existing admin capability; proposed retain with only five operational role types. Exact grants and migration require Technical contract. |
| Projects, funding and cross-organization reporting | Approved central recording and monitoring remit (DEC-0005); read visibility and reporting design proposed, no implicit project/performance approval or organization payout authority. |
| Revenue | Approved: record receipts from organizations (Emdad pilot), startups and fund income attributable to Moon (DEC-0003). |
| Fund | Approved Moon-only capital source; retain useful fund-management capabilities in central admin, as proposed and confirmed in conversation. Exact capital operations, investments, returns, allocation and authorizations require separate contract. |
| Support, content and settings | Existing admin routes; proposed preserve, no public-site redesign or new publishing authority. |

Suggested navigation: overview, companies, organizations, users/access, project monitoring, project finance, revenues, fund, reports, support/content/settings. Distinguish all three financial domains.

## 2. Manager of creative house Aineh (مدیر خانه خلاق آینه)

| Capability | Business basis / boundary |
| --- | --- |
| Startup applications | Approved acceptance authority (DEC-0004). |
| Project evaluation | Approved project approval authority (DEC-0004); no second evaluator role. |
| Progress and performance | Approved review and satisfactory-performance approval authority (DEC-0004/0005). |
| Evaluation history and reports | Existing route family; proposed preserve audit and read views. |
| Publication, closeout, freeze/risk and expense-related review | Exact authority remains open; do not derive from general approval authority. |

No multi-creative-house registry or startup assignment/transfer. No authority to issue official tax certificates or execute organization payout.

## 3. Startup (استارتاپ)

| Capability | Business basis / boundary |
| --- | --- |
| Profile and registration | Existing profile routes; own startup, reviewed by Aineh. |
| Define/submit projects | Existing project creation/version/submit flow; Aineh approves. Organization association selection and approval not decided. |
| Execution stages and progress reports | Existing stage/report routes; submit evidence for Aineh review. |
| Financial status | Proposed own project receipts/payout status; organization pays directly. Distinguish approval from confirmed external payment. |
| Payments to Moon | Revenue source approved (DEC-0003); existing financing-fee route is not an approved tariff or automatic charge. |

No self-approval, other-startup access or automatic payout. Profile/document and settings capabilities preserved subject to review.

## 4. Company (شرکت)

| Capability | Business basis / boundary |
| --- | --- |
| Registration and account | Approved admin approval and activation (DEC-0004). |
| Project selection and participation | Existing project/participation routes; direct payment to relevant official organization account (DEC-0005). |
| Participation history and receipts | Proposed preserve own records; only verified payments may have real success/receipt state. |
| Project reports | Existing report routes; proposed access to authorized published/project-related reports. |
| Tax certificates | Approved official issuance by legally authorized organization; Moon displays confirmed final certificate to relevant company. Existing unavailable routes stay honest until actual issuance contract is implemented. |

No authority to approve own application or issue certificates. Company cannot access another company's records.

## 5. Organization (سازمان)

| Capability | Business basis / boundary |
| --- | --- |
| Organization profile/context | Reusable panel, Emdad first; no organization-specific role or hard-coded panel. |
| Associated projects and project funding | Approved role as direct recipient of project funds; proposed organization-scoped read views and evidence. |
| Stage payments | Approved direct payment to implementing startup after applicable Aineh approval (DEC-0005); separate external payment evidence and reconciliation. |
| Tax certificates | Approved official issuance within actual legal authority (DEC-0004); versioned certificate contracts and issuance grants needed. |
| Payment history and financial reporting | Existing Emdad routes; proposed retain scoped real records. |

No independent approval of startup/project/performance under the approved allocation. No access to other organizations' nonpublic data. No assumed fund capital contribution or allocation rights. No special workflow for a future tax administration organization.

## Legacy route/capability disposition

- /panel/admin, /panel/creative-house, /panel/startup and /panel/company: retain and review by capability.
- /panel/emdad: generalize to reusable organization panel; technical route/compatibility strategy TBD, do not grant access by redirect alone.
- /panel/fund-manager: retire independent operational panel and role; move appropriate existing fund capabilities into Moon admin following explicit fund contracts. Existing investments, profit returns, cycle returns, profit split and fund reports are inventory, not accepted policy.
- Existing Emdad fund-synergy, fund-returns and App standalone fund-payments: inspect against Moon-only fund capital and project funds separation; do not migrate them as automatically authorized organization financial functions.
- evaluator and finance role retirement must preserve records and resolve every current authorization dependency. Auditor already retired. Historical role codes may remain for lineage, not operational access.

## Business decisions still open before affected implementation

1. Project organization relationship: cardinality, who selects/changes it and when it becomes fixed; historical project mapping.
2. Project publication, progress/impact publication, risk/freeze, expense review, execution closeout responsibilities.
3. Stage schedule, evidence, advances, payout caps, partial approvals, actual payment reconciliation and correction/refund rules.
4. Fund operating policy, investment/return model, and commercial/accounting rules for revenue; no invented percentages or calculations.
5. Organization onboarding/account validation, tax certificate types/eligibility and issuer grants, issuance evidence, provider contracts.
6. Detailed access and lifecycle rules (review/rejection/resubmission/suspension) and audit-preserving migration.

No new public pages, rebranding, organization tags on the public site, production changes or payments. Review each panel for Business, Flow, API/backend, cross-panel transitions, UI/UX/responsiveness, Security and E2E. Next: explicit Business decisions for missing authorities, then Technical and Backlog; do not implement unapproved rules.
