# Moon — Cross-panel Business integration and project lifecycle review

Status: consolidated approved decisions and proposed integration design, 2026-11-28. Not a new approval, Technical contract or production admission. Baseline 842b9f7a5ee3d45cf550c07850c1031a5c4a3c75. All five existing panels have initial review records; organization/startup reviews were source-only. DEC-0002 through amended DEC-0007 take precedence over earlier proposals.

## Authority matrix
- Moon admin: define registered organizations; approve and activate companies; monitor all project activity and record/reconcile information within the approved remit; record three revenue sources and actual fund activity. No project or performance approval, official certificate issuance or custody/payout of project funds.
- Aineh: sole creative house; startup acceptance, project/plan review and approval, select exactly one registered organization, approve project publication, assess satisfactory performance, sole stoppage decision when approved plan cannot be executed. No bank settlement or certificate issuance.
- Startup: propose project, stage schedule/amounts, minimum funding needed to start, optional project-specific advance; execute approved plan; report actual outcomes and evidence. No self-approval or amendment during execution.
- Company: ordinary registration/approval/activation, project participation, own verified payments/receipts, permitted reports and official tax certificates, contributor instructions if stopped. Fund follows same ordinary company flow if participating; no privileged path.
- Organization: receive funds directly into official account; direct stage payments to startup following applicable approved conditions; record actual financial evidence; legally authorized issuer officially issues applicable certificates. No extra project acceptance or veto.
- Individual contributor: mobile-only real SMS OTP, no account/panel, participation and authenticated stoppage instructions. Public site freeze remains.

## Lifecycle — approved boundaries, not a new state enum
| Handoff | Authoritative fact / condition | Next operation / unresolved gate |
| --- | --- | --- |
| Startup registration -> Aineh | Real application and review decision | Activation and verified login; legacy temporary-password mismatch and precise replacement lifecycle require Technical. |
| Company registration -> Moon | Real reviewed application and activation | Only own authorized account; activation not tax eligibility. |
| Startup -> Aineh | Versioned proposed plan, target, stage amounts, schedule, minimum start threshold, optional advance and evidence | Aineh review; exact correction/rejection/resubmission and eligibility contract open. |
| Aineh -> catalog and assigned organization | Approved project/version, one registered organization; Aineh alone publication authority | Exact publication prerequisites and assignment timing open. No extra acceptance by Moon or organization. |
| Participant -> organization | Payment to verified official account; actual authoritative confirmation/reconciliation | Record receipt, scoped notifications. Pending/failed attempts are not confirmed funding. Organization locks after first financial participation; exact event and race handling Technical. |
| Verified funds -> execution | Approved project-specific minimum is met, plus other applicable prerequisites | Exact start command/authority and funding-shortfall handling open; not automatic payout. Optional advance follows approved project-specific conditions still to be defined. |
| Startup -> Aineh | Stage execution/report and protected evidence tied to approved plan | Human satisfactory-performance review; actual vs reported vs verified data separated. No plan amendment in execution. |
| Aineh -> organization | Applicable satisfactory-performance approval and approved financial terms | Actual organization-to-startup payment, independent evidence and reconciliation. Partial approvals/caps/advances offsets and timing open. No simulated transfer. |
| Organization -> company | Applicable legal eligibility and authorized official issuance | Moon prepares unofficial draft and records actual issued number/date/artifact. Notice after committed issuance; issuance is independent of payment success and project completion, exact eligibility gates per certificate contract. |
| Final stage -> closeout | Actual stage decisions, reports, verified transactions and settlement records | Final performance and financial closure conditions/authority not yet approved; cannot infer completion from last stage or payment alone. |
| Stoppage -> contributors | Aineh sole stoppage decision, published report and notification to actual contributors | Authenticated explicit choice for attributable unspent share: refund, contributor-selected replacement project, explicit delegation of replacement selection to Aineh. Calculation/recipient eligibility/actual execution/nonresponse/tax rules open. No automatic transfer or consent. |

## Shared information and financial integrity
Use authoritative versioned backend facts; independent approval, execution, report publication, payment, reconciliation, certificate and closure states. A UI route, localStorage record, callback alone or sample metric is not proof. Do not collapse funding target, minimum start threshold, stage budget, actual receipts or payouts. Preserve immutable ledger and audit, deduplicated events, external evidence, correction lineage, and historical access/financial records. Separate project funds held by organization, Moon operating revenues, fund capital exclusively supplied by Moon, and fund income attributable to Moon. No invented percentages, automatic allocations, withholding, investment execution, or fund privileged payments.

Proposed cross-panel projections (subject to exact field-level visibility): registration decisions to applicant and authorized reviewers/admin; published projects to eligible users; verified receipts and performance decisions to appropriately scoped participants, startup, organization, Aineh and Moon; full report submissions only to authorized reviewers/submitter, approved/public representations separately; official certificates only to company, authorized issuing organization and appropriately scoped Moon oversight; stopped project report public without private identity, instructions scoped to actual contributor and authorized handling staff. Do not copy sensitive evidence or full beneficiary records across all panels. Unknown values must remain unknown.

Amended DEC-0007: multi-user delegation only Moon/Aineh/organization; exactly one active panel user per company/startup, no subordinate workspace. Central principal designates Aineh and organization principals. No implied legal signing/financial authority by delegation. Shared visual requirements: top gap and centered logo for five panels; proposed 24px desktop/16px mobile, subject to review.

## Business decision queue (no defaults)
1. Project plan and execution: approval/revision before execution, exact start authority/prerequisites, response to delay and funding shortfall, report correction and stage activation.
2. Financial release: advance level and release prerequisites, recovery/offset; stage payment amount/cap/partial acceptance, actual payout authorization, evidence, reconciliation.
3. Stoppage: attributable unspent-share calculation, inter-organization transfer and recipient eligibility, nonresponse, authenticated instruction lifecycle, tax consequences.
4. Closeout: final report and satisfactory performance, financial settlement, closure authority, residual funds, permitted reopening if any.
5. Identity and organizations: official account verification, single-user replacement, principal delegation, sensitive permission catalog, issuer authorization.
6. Revenue/fund and reporting: actual contracts, recognition and reconciliation, publication/visibility, aggregation and evidence, legal tax eligibility and official issuance mechanism.

Next Business discussion should resolve item 1 in small explicit owner-approved decisions. Do not invent values or assume open policies are approved. Technical may only derive bounded contracts from approved facts. PR #324 Draft/Open; docs only; no merge, deployment, public changes, live payments or data migration.
