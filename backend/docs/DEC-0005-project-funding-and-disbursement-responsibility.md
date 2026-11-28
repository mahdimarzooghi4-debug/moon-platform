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

## Financial separation and integrity

Project participation funds are independent of Moon's own revenue and of fund capital. Fund capital is supplied exclusively by Moon itself; neither incoming project participation nor organization-to-startup payments are automatically recognized as Moon income or fund capital.

Preserve the existing financial integrity controls: verified provider/bank evidence, reconciliation, idempotency, immutable balanced ledger records and append-only corrections, audit and durable events. Adapt their authority and accounting semantics to the external organization custody model rather than assuming that the existing internal ledger release is a real bank transfer. Record approval, payout instruction/authorization where applicable, and actual confirmed external payout as distinct facts; never fabricate receipt or payout. An approval alone does not demonstrate that a payment has been executed. No automatic payout, arbitrary account selection, invented bank credentials or production payment activation.

## Contracts still required

Define project-to-organization association and assignment authority, verified beneficiary account mapping, stage plans, performance evidence, partial approvals, amounts and payment caps, payout confirmation/reconciliation evidence, exceptions, refunds/corrections, and exact financial permissions and controls. Determine the treatment of any advance payments and the conditions for project closure explicitly; do not infer them. The existing payment-provider boundary remains in force until real integrations and commercial/legal contracts are confirmed.

Keep public pages unchanged for Emdad pilot, exactly five role types, and one creative house Aineh. No role addition, migration, application code change, merge or deployment is authorized by this documentation. Continue Business → Technical → Backlog → Sprint → Code → Code Review → Stage → QA → Release Approval.
