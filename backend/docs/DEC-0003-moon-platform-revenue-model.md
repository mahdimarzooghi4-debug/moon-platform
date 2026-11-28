# DEC-0003 — Moon platform revenue model

Status: Business decision recorded on 2026-11-28 from product owner's explicit instruction.
Related: [DEC-0002](DEC-0002-national-csr-pilot-and-five-role-model.md).
Scope: Moon's own revenue and the central administrator's Revenue section; not project participation, settlement, or payment execution.

## Approved business scope

Moon has three revenue sources:
1. دریافتی از کمیته امداد — money received from Emdad in the pilot. In the multi-organization target architecture, preserve the identity of the source organization; do not assume other organizations already have the same commercial terms.
2. دریافتی از استارتاپ‌ها — money received from startups.
3. درآمد از صندوق — revenue received by Moon from fund income.

All three sources must be recordable in the «درآمدها» section of the Moon system administrator panel. This is a revenue recording capability, not permission to move money, withdraw from a fund, charge startups, or collect funds automatically.

Moon's own revenue must be distinguishable from project-directed participation funds, fund principal, and fund income that has not been established as Moon revenue. Do not classify the entirety of fund income or project contributions as Moon's revenue.

## Approved fund capital source

The fund's capital (سرمایه صندوق) is supplied exclusively by Moon itself. No external party is a direct capital provider to the fund under this business model. This does not prohibit the separately approved sources of Moon's own revenue; it does not imply those receipts are automatically allocated to fund capital.

Distinguish Moon operating revenue, Moon's allocation of its own resources as fund principal, fund income, and income actually attributable to Moon. Capital supplied by Moon is not revenue from the fund. Project participation funds from organizations, companies or individuals must not be treated as fund capital simply because they are received through Moon. Do not assume a capital amount, allocation ratio, timing, detailed investment terms, legal ownership structure, withdrawal authority, accounting treatment or automatic transfer. These require separate explicit contracts.

## Approved investment scope and recording-only boundary

The product owner explicitly approved that the fund is not restricted to Moon startups, projects or the Moon ecosystem. It may invest in opportunities inside or outside Moon, subject to applicable legal and contractual authority. Investment decisions and execution occur outside the software; the Moon administrator's fund section records investments and their actual financial history. The software is not an investment execution, brokerage, automated investment approval, payment or transfer platform. Do not require a Moon project/startup identifier for an external investment. Do not infer asset eligibility rules, investment limits, decision-maker/signatory authority, valuation methods, yields or return/distribution formulas.

Fund capital remains exclusively supplied by Moon. Record actual capital allocations, investments, returns and income with authoritative supporting evidence, independently of project contributions and Moon operating revenue. No automatic financial movement or reclassification is authorized.

## Approved fund participation in Moon projects through ordinary company flow

If the fund chooses to contribute money to a project on Moon, it must register and participate through the same ordinary company role and workflow as other company participants: company registration, review/approval and activation by the Moon administrator, project selection, participation and payment directly to the project's assigned organization's official account, authoritative payment confirmation and ordinary follow-up. The fund management section does not offer a direct project funding shortcut, a privileged funding route, automatic activation or an exception to project controls. No sixth role or dedicated fund participant panel. The registration must use a real legally authorized entity and representative; do not invent a separate legal identity for the fund, registration credentials, or tax eligibility. The exact legal identity and authorized representation remain to be confirmed.

The recording-only investment management boundary above remains in force; ordinary company participation is distinct from fund investment execution. Link genuine corresponding records where applicable with auditable lineage and no duplicate monetary effect. Do not assume that a project contribution is a recoverable investment, generates profit, or qualifies for a tax certificate. Certificate eligibility and issuance remain subject to DEC-0004 and applicable authority; the same project stoppage and contributor instruction rules in DEC-0005 apply. Fund accounting classification and any conflict-of-interest controls require explicit contracts.

## Proposed detail for subsequent business/technical contract (not yet approved)

A record could carry source category, identifiable payer/source reference, amount and currency, date of receipt, payment/document reference and description, with traceable audit history. Revenue totals and per-source breakdowns may be derived from valid records. Determine actual fields, authorization, corrections, duplicate prevention, reconciliation and reporting contract before implementation; preserve existing ledger and financial control boundaries.

## Undecided commercial and accounting rules

Amounts, rates or shares, startup charging basis and cadence, fund income definition and distribution basis, contract terms with organizations, accounting recognition, settlement timing, tax and correction treatment are not specified. No inferred percentage, fee schedule, formula, automatic deduction, accrual, or financial posting is authorized by this decision.

Keep the five-role model and Emdad pilot public-site freeze. Revenue recording belongs to the existing Moon administrator panel; it does not introduce another role or public page. Follow Business → Technical → Backlog → Sprint → Code → Code Review → Stage → QA → Release Approval before production. No runtime or data changes in this documentation commit.
