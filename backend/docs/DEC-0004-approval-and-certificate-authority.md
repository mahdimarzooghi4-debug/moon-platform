# DEC-0004 — Approval and certificate issuance authority

Status: Business decision recorded from the product owner's explicit instruction on 2026-11-28.
Related: [DEC-0002](DEC-0002-national-csr-pilot-and-five-role-model.md), [DEC-0003](DEC-0003-moon-platform-revenue-model.md), [Article 172 certificate contract](releases/article-172-certificate-contract.md).
Scope: five-role target operating model, not an implementation or production approval.

## Approved responsibility allocation

| Business action | Accountable approval or issuance authority |
| --- | --- |
| Startup registration/acceptance | مدیر خانه خلاق آینه |
| Project approval | مدیر خانه خلاق آینه |
| Execution start authorization after full verified funding and official start date | مدیر خانه خلاق آینه |
| Confirmation of complete satisfactory completion (حسن انجام کار) | مدیر خانه خلاق آینه |
| Stage report approval (authorizes automatic publication) | مدیر خانه خلاق آینه |
| Final operational completion approval | مدیر خانه خلاق آینه |
| Company registration approval and activation | مدیر سامانه ماه |
| Official Article 172 certificate or other tax certificate issuance | Relevant organization (سازمان), acting through a legally authorized issuer |

A startup is reviewed and approved by the single creative house Aineh. Project approval and confirmation of satisfactory completion are also its responsibilities; these are distinct business decisions. Do not infer that approval of a project proves completion, or that completion approval automatically authorizes a payment.

A company registers, is reviewed by the Moon system administrator, and becomes active upon that approval. Do not assign this approval to the organization or creative house. Activation is not a tax certificate or automatic financial entitlement.

The organization, not Moon or Aineh, officially issues applicable tax certificates. Emdad is the pilot issuer where authorized. Other organizations and certificate types may be supported only within their actual legal authority and confirmed eligibility rules. The existing Article 172 contract remains binding for the Emdad pilot: Moon prepares a non-official draft from authoritative data; an authorized organization official reviews and issues it with official number and evidence; Moon records and displays the issued certificate to the relevant company and notifies it after committed issuance. No local or simulated certificate may be presented as official. Other tax certificates require their own versioned contract, templates and authority evidence; this decision does not assert that every organization may issue every certificate.

## Remaining business contracts and technical gates

- Define review criteria, evidence, rejection/resubmission, approval reversal or suspension, project publication authority and transitions separately. Do not assume those rules from this allocation.
- Define satisfactory completion evidence, at stage level (complete fulfillment required, no partial acceptance), final operational completion evidence, financial closeout and relationship to payment/release independently. No automatic settlement is approved.
- Define organization-project association, funding flow, organization-specific supervision, fund controls, certificate eligibility, issuance grants, official numbering/signature and other tax certificate types before implementing related operations.
- Enforce authorization and data scope in Backend, with immutable/auditable decisions and negative tests. Retain existing registration and financial history; do not widen grants as a shortcut to retiring old roles.
- Exactly five role types, one creative house Aineh, multiple organizations with Emdad pilot. Public site freeze remains. No new role, production deployment, data migration, or code change is authorized by this record.

This record resolves the stated approval and issuance responsibilities in DEC-0002; other unallocated responsibilities remain open. Follow Business → Technical → Backlog → Sprint → Code → Code Review → Stage → QA → Release Approval.

## Owner-approved complete-project intake, stage publication and operational closeout (2026-11-28)

Before project registration in Moon, the startup designs the complete operational and financial plan and coordinates/reviews it with Aineh outside the system. Only complete projects are registered: stage definitions, deliverables/KPIs, schedule, budgets, payment amounts/timing and any project-specific advance terms must be established in that plan. Moon is not a negotiation, co-design or incomplete-proposal development workspace. Retain formal Aineh approval/publication of the submitted complete version and all previously approved funding/start controls. A technical form draft is not an accepted registered project; its exact handling is not a new business approval. No in-execution amendment. Financial/advance terms are project-specific; no universal offset, recovery, percentage or payment formula is approved. Actual payment and reconciliation remain independent.

Reports must be published for each stage defined at project registration, tied to the approved stage/version. Startup submits actual stage performance and evidence; Aineh reviews and approves the report and complete satisfactory performance under existing rules. Approval of the stage report authorizes automatic publication of the approved publishable representation, without another Moon or organization approval. Record report version, approving actor/time and actual publication outcome; never expose private beneficiary identifiers or protected evidence. Report publication and actual payment are distinct facts; do not imply publication proves settlement or automatically pays.

After actual publication of each stage report, send SMS only to actual financial contributors of that same project (companies and individuals), derived from authoritative confirmed participation records, not all platform users or contributors of unrelated projects. SMS contains project name, stage title and report link; no fabricated delivery. Deduplication per contributor/report is proposed; exact recipient identity, contact resolution, delivery/idempotency and correction policy remain Technical. Existing stoppage notification remains project-scoped under DEC-0005. Final-report SMS is a proposal, not independently approved.

Aineh confirms final operational completion after all approved stages are complete. Operational completion and financial settlement by the organization remain independent; Moon records/monitors both. No automatic settlement or inferred financial closure from operational approval. Final report/financial closeout exact evidence, residual balances, exceptions and reopening rules remain to be specified. No public-site or runtime changes authorized.
