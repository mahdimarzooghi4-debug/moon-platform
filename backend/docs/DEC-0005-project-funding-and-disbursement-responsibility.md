# DEC-0005 — Project funding and disbursement responsibility

Status: Business decision explicitly approved by the product owner on 2026-11-28.
Related: [DEC-0002](DEC-0002-national-csr-pilot-and-five-role-model.md), [DEC-0003](DEC-0003-moon-platform-revenue-model.md), [DEC-0004](DEC-0004-approval-and-certificate-authority.md).
Scope: Project participation funds and payment responsibilities in the five-role model. This is not production payment activation.

## Approved operating model

| Action | Responsible party |
| --- | --- |
| Financial participation in a project | Company or individual |
| Receive project participation funds | Relevant organization, directly into its official account |
| Review progress and approve satisfactory performance (حسن انجام کار) | مدیر خانه خلاق آینه |
| Pay project funds to the implementing startup in stages following Aineh approval | Relevant organization, directly |
| Record and monitor project financial flows | سامانه ماه, under central administration |
| Official tax certificate issuance | Relevant legally authorized organization |

In the Emdad pilot, project participation funds are paid to the official account of کمیته امداد امام خمینی (ره); Emdad pays the implementing startup directly after the applicable Aineh approval. Future organizations follow the same business model, subject to their actual official account and legal authority. Moon is the information management and monitoring platform, not the recipient, custodian or payout intermediary of these project funds. Aineh's approval establishes performance approval, not bank settlement evidence.

## Approved execution-stage planning authority

The implementing startup defines its project execution stages and the funding amount required for each stage. The manager of the single creative house Aineh reviews and approves the proposed execution stages and their respective funding amounts. The approved plan is the authoritative basis for stage-level execution and financial controls; neither the startup nor the organization may unilaterally approve that plan. Aineh's plan approval is distinct from subsequent satisfactory-performance approval and does not itself authorize or prove an actual payout. The organization pays the startup directly after applicable performance approval under the approved funding model.

Preserve the approved stage plan and its financial terms with auditable lineage. The plan approval timing, any permissible pre-execution revision procedure, exact amount/currency validation and caps, funding availability requirements, evidence, advance payments and partial disbursement rules require explicit subsequent contracts. Do not invent a percentage, threshold, automatic payment, or permission to change an approved plan.

## Approved minimum funding for execution start

The startup proposes the minimum financial resources required to begin execution of its project. Aineh reviews and approves this project-specific start threshold. Execution may begin only when the approved minimum is met by verified, reconciled project participation funds attributable to the assigned organization, subject to the other valid execution prerequisites. Full project funding or full first-stage funding is not a universally mandatory starting threshold. The minimum is distinct from the total project funding target and the approved amounts for individual execution stages. No fixed global percentage, default threshold, unverified commitment or provider callback may substitute for the approved minimum and authoritative financial evidence.

Technical must adapt the existing versioned funding-target, ledger-derived allocable balance and FundingThresholdReached controls without conflating the overall funding target with the execution-start threshold or treating an internal ledger posting as proof of external bank receipt. Specify version binding, amount/currency validation, handling of financial-record corrections, any permissible pre-execution threshold revisions, the exact start transition and subsequent funding shortfalls before implementation; no in-execution plan amendment is permitted. Reaching the threshold does not authorize automatic disbursement or waive Aineh performance approval.

## Approved project-specific advance payment policy

Advance payment requirements vary by project. No universal advance-payment amount, percentage or mandatory advance applies. In the context of the proposed planning flow, the startup proposes project-specific advance requirements, if any, and Aineh reviews them as part of the financial and execution plan. The organization remains the direct payer; Moon records and monitors the financial flow. Any approved advance is distinct from a payment following satisfactory-performance approval. Do not treat general plan approval or attainment of the execution-start funding threshold as an automatic advance release.

The exact advance authorization and release prerequisites, whether advances are defined at project or stage level, treatment against later payments, insufficient funds, recovery/refund, and external payment evidence remain to be specified before implementation. No invented default amount, automatic transfer or double payment is authorized.

## Approved prohibition of project amendments during execution

The product owner expressly rejected an in-execution project amendment workflow. During execution the approved project budget, schedule and execution stages are fixed. Do not implement requests to amend them, approval of such amendments, or an administrative override. Preserve the original approved execution plan, approved funding terms and auditable history. The existing organization lock under DEC-0006 also remains in force. Actual progress reporting, payment evidence and append-only accounting corrections are distinct from amendment of the approved project plan and are not prohibited by this decision.

Pre-execution revision rules, handling of delays and funding shortfalls, detailed stoppage consequences, any resumption or final termination, and final closeout remain unspecified; the sole stoppage authority and contributor-notification/instruction requirements are approved below. Do not infer a replacement-project, cancellation or refund policy.

## Approved project stoppage, public reporting and contributor instructions

When the implementing startup cannot execute the project in accordance with its approved plan, the manager of the single creative house Aineh is the sole project-stoppage decision authority. Publish a report concerning the stoppage and notify the contributors (خیرین) of that specific project, including contributing companies and individuals. Obtain their instructions concerning the stopped project. Preserve the stoppage decision, report, notification and contributor-response lineage. The public report must not expose private contributor information; individual contributors retain the mobile-only identity and no-account/no-panel model in DEC-0002. Notification and response collection mechanisms must respect verified contributor identity and authoritative participation records. This product decision is not permission to change the currently frozen public site.

No unilateral disposition of remaining project funds, automatic refund, transfer to another project, resumption, change of approved project plan, or deemed consent from non-response is authorized by this decision. The associated organization remains the custodian and direct payer under DEC-0005, and the organization lock under DEC-0006 remains binding. Detailed execution of the approved contributor choices below, handling of spent versus unspent funds, conflicting instructions, non-response, deadlines, tax certificate consequences, actual bank execution, notification channel and publication/review process require explicit further contracts. Technical must distinguish stoppage from financial settlement and preserve existing audit and financial controls; no fabricated report, payment or contributor decision.

## Approved contributor choices after project stoppage

For the contributor's unspent remaining share in a stopped project, the product owner approved exactly the following offered choices: (1) return the remaining share to the contributor; (2) transfer the remaining share to another project chosen by the contributor; (3) explicitly delegate selection of a replacement project to Aineh. Apply the choices to both individual and company contributors. Preserve the authenticated instruction and its lineage; delegation is not assumed from silence. No automatic financial execution is authorized. The relevant organization executes permitted real financial operations; Moon records and monitors them. The existing project organization lock, financial separation and no-account individual participation rules remain binding.

The attributable unspent-share calculation, legal and tax-certificate consequences, execution and reconciliation of refunds and transfers (including inter-organization transfers), recipient-project eligibility, delegation scope and exercise, deadlines, non-response and exceptions still require explicit contracts. Never invent a pro-rata formula, eligibility, actual bank transfer or automatic refund.

## Financial separation and integrity

Project participation funds are independent of Moon's own revenue and of fund capital. Fund capital is supplied exclusively by Moon itself; neither incoming project participation nor organization-to-startup payments are automatically recognized as Moon income or fund capital.

Preserve the existing financial integrity controls: verified provider/bank evidence, reconciliation, idempotency, immutable balanced ledger records and append-only corrections, audit and durable events. Adapt their authority and accounting semantics to the external organization custody model rather than assuming that the existing internal ledger release is a real bank transfer. Record approval, payout instruction/authorization where applicable, and actual confirmed external payout as distinct facts; never fabricate receipt or payout. An approval alone does not demonstrate that a payment has been executed. No automatic payout, arbitrary account selection, invented bank credentials or production payment activation.

## Contracts still required

Define project-to-organization association and assignment authority, verified beneficiary account mapping, stage plan lifecycle, performance evidence, partial approvals, amount validation and payment caps, payout confirmation/reconciliation evidence, exceptions, refunds/corrections, and exact financial permissions and controls. Determine the detailed treatment of project-specific advance payments and the conditions for project closure explicitly; do not infer them. The existing payment-provider boundary remains in force until real integrations and commercial/legal contracts are confirmed.

Keep public pages unchanged for Emdad pilot, exactly five role types, and one creative house Aineh. No role addition, migration, application code change, merge or deployment is authorized by this documentation. Continue Business → Technical → Backlog → Sprint → Code → Code Review → Stage → QA → Release Approval.
