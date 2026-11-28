# Five-panel target — Business capability matrix

Status: working Business design, 2026-11-28. Approved responsibilities are derived from DEC-0002 through amended DEC-0007. Suggested navigation, read models and unresolved permissions are not independently approved. This is not a Technical contract, implementation acceptance or release approval.

Reconciled baseline: PR #324, `842b9f7a5ee3d45cf550c07850c1031a5c4a3c75`, Release Verify #286, Bundle #116 (attempt 2), SSH Transfer #80 successful. Existing routes inspected in src/app/router.tsx; a route is not proof of a working API or real financial capability.

## 1. Manager of Moon (مدیر سامانه ماه)

| Capability | Business basis / boundary |
| --- | --- |
| Company applications and activation | Approved: review company registration and activate on approval (DEC-0004). |
| Organizations | Approved: define multiple organizations through admin; Emdad pilot (DEC-0002). |
| Users and access management | Approved: multi-user access management for Moon, Aineh and each organization only; Moon principal appoints Aineh/organization principals. Exactly one active user per company/startup; no subordinate accounts. Exact grants and migration require Technical contract. |
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
| Organization assignment, publication and stoppage | Approved: Aineh assigns exactly one registered organization and alone approves publication, with no Moon/organization veto; Aineh alone decides stoppage if approved plan cannot be executed. Organization immutable after first financial participation. Aineh authorizes start only after full verified funding and determines official start date. Stage performance acceptance requires complete obligations, no partial acceptance. Closeout, report publication/revision and expense-review details remain open. |
| Users and access | Approved multi-user panel under designated principal, DEC-0007; exact grants remain open. |

No multi-creative-house registry or startup assignment/transfer. No authority to issue official tax certificates or execute organization payout.

## 3. Startup (استارتاپ)

| Capability | Business basis / boundary |
| --- | --- |
| Profile and registration | Existing profile routes; own startup, reviewed by Aineh. |
| Define/submit projects | Existing project creation/version/submit flow; Aineh approves. Aineh alone determines one registered organization and approves publication (DEC-0006). Startup designs operational plan, stages, schedule, KPIs, budgets, payment amounts/timing and any project-specific advance (DEC-0005). |
| Execution stages and progress reports | Existing stage/report routes; submit evidence for Aineh review. |
| Financial status | Proposed own project receipts/payout status; organization pays directly. Distinguish approval from confirmed external payment. |
| Payments to Moon | Revenue source approved (DEC-0003); existing financing-fee route is not an approved tariff or automatic charge. |

Exactly one active user per startup; no delegated user management. No self-approval, other-startup access or automatic payout. Profile/document and settings capabilities preserved subject to review.

## 4. Company (شرکت)

| Capability | Business basis / boundary |
| --- | --- |
| Registration and account | Approved admin approval and activation (DEC-0004). |
| Project selection and participation | Existing project/participation routes; direct payment to relevant official organization account (DEC-0005). |
| Participation history and receipts | Proposed preserve own records; only verified payments may have real success/receipt state. |
| Project reports | Existing report routes; proposed access to authorized published/project-related reports. |
| Tax certificates | Approved official issuance by legally authorized organization; Moon displays confirmed final certificate to relevant company. Existing unavailable routes stay honest until actual issuance contract is implemented. |

Exactly one active user per company; no delegated user management. Fund participates through ordinary company workflow only (DEC-0003). No authority to approve own application or issue certificates. Company cannot access another company's records.

## 5. Organization (سازمان)

| Capability | Business basis / boundary |
| --- | --- |
| Organization profile/context | Reusable panel, Emdad first; no organization-specific role or hard-coded panel. |
| Associated projects and project funding | Approved role as direct recipient of project funds; proposed organization-scoped read views and evidence. |
| Stage payments | Approved direct payment to implementing startup after applicable Aineh approval (DEC-0005); separate external payment evidence and reconciliation. |
| Tax certificates | Approved official issuance within actual legal authority (DEC-0004); versioned certificate contracts and issuance grants needed. |
| Payment history and financial reporting | Existing Emdad routes; proposed retain scoped real records. |
| Users and access | Approved multi-user panel per organization under designated principal (DEC-0007). |

No independent approval of startup/project/performance under the approved allocation. No access to other organizations' nonpublic data. No assumed fund capital contribution or allocation rights. No special workflow for a future tax administration organization.

## Legacy route/capability disposition

- /panel/admin, /panel/creative-house, /panel/startup and /panel/company: retain and review by capability.
- /panel/emdad: generalize to reusable organization panel; technical route/compatibility strategy TBD, do not grant access by redirect alone.
- /panel/fund-manager: retire independent operational panel and role; move appropriate existing fund capabilities into Moon admin following explicit fund contracts. Existing investments, profit returns, cycle returns, profit split and fund reports are inventory, not accepted policy.
- Existing Emdad fund-synergy, fund-returns and App standalone fund-payments: inspect against Moon-only fund capital and project funds separation; do not migrate them as automatically authorized organization financial functions.
- evaluator and finance role retirement must preserve records and resolve every current authorization dependency. Auditor already retired. Historical role codes may remain for lineage, not operational access.

## Business decisions still open before affected implementation

1. Exact assignment timing, pre-participation reassignment policy, authoritative lock event, in-flight payment handling and historical mapping. Cardinality, assignment authority and post-participation lock already approved.
2. Project publication transition/prerequisites, progress/impact report publication, expense review, stoppage settlement and execution closeout. Publication and stoppage authority already approved.
3. Stage and full-funding/start-authorization lifecycle, complete-performance evidence, advance release/offset, payout caps (partial acceptance prohibited), reconciliation, attributable unspent-share calculation and actual refund/transfer rules. No execution-plan amendment.
4. Fund operating policy, investment/return model, and commercial/accounting rules for revenue; no invented percentages or calculations.
5. Organization onboarding/account validation, tax certificate types/eligibility and issuer grants, issuance evidence, provider contracts.
6. Detailed access and lifecycle rules (review/rejection/resubmission/suspension) and audit-preserving migration.

No new public pages, rebranding, organization tags on the public site, production changes or payments. Review each panel for Business, Flow, API/backend, cross-panel transitions, UI/UX/responsiveness, Security and E2E. Next: explicit Business decisions for missing authorities, then Technical and Backlog; do not implement unapproved rules.
