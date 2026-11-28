# DEC-0004 — Approval and certificate issuance authority

Status: Business decision recorded from the product owner's explicit instruction on 2026-11-28.
Related: [DEC-0002](DEC-0002-national-csr-pilot-and-five-role-model.md), [DEC-0003](DEC-0003-moon-platform-revenue-model.md), [Article 172 certificate contract](releases/article-172-certificate-contract.md).
Scope: five-role target operating model, not an implementation or production approval.

## Approved responsibility allocation

| Business action | Accountable approval or issuance authority |
| --- | --- |
| Startup registration/acceptance | مدیر خانه خلاق آینه |
| Project approval | مدیر خانه خلاق آینه |
| Confirmation of satisfactory completion (حسن انجام کار) | مدیر خانه خلاق آینه |
| Company registration approval and activation | مدیر سامانه ماه |
| Official Article 172 certificate or other tax certificate issuance | Relevant organization (سازمان), acting through a legally authorized issuer |

A startup is reviewed and approved by the single creative house Aineh. Project approval and confirmation of satisfactory completion are also its responsibilities; these are distinct business decisions. Do not infer that approval of a project proves completion, or that completion approval automatically authorizes a payment.

A company registers, is reviewed by the Moon system administrator, and becomes active upon that approval. Do not assign this approval to the organization or creative house. Activation is not a tax certificate or automatic financial entitlement.

The organization, not Moon or Aineh, officially issues applicable tax certificates. Emdad is the pilot issuer where authorized. Other organizations and certificate types may be supported only within their actual legal authority and confirmed eligibility rules. The existing Article 172 contract remains binding for the Emdad pilot: Moon prepares a non-official draft from authoritative data; an authorized organization official reviews and issues it with official number and evidence; Moon records and displays the issued certificate to the relevant company and notifies it after committed issuance. No local or simulated certificate may be presented as official. Other tax certificates require their own versioned contract, templates and authority evidence; this decision does not assert that every organization may issue every certificate.

## Remaining business contracts and technical gates

- Define review criteria, evidence, rejection/resubmission, approval reversal or suspension, project publication authority and transitions separately. Do not assume those rules from this allocation.
- Define satisfactory completion evidence, whether assessed per milestone or at project close, and its relationship to payment/release independently. No automatic settlement is approved.
- Define organization-project association, funding flow, organization-specific supervision, fund controls, certificate eligibility, issuance grants, official numbering/signature and other tax certificate types before implementing related operations.
- Enforce authorization and data scope in Backend, with immutable/auditable decisions and negative tests. Retain existing registration and financial history; do not widen grants as a shortcut to retiring old roles.
- Exactly five role types, one creative house Aineh, multiple organizations with Emdad pilot. Public site freeze remains. No new role, production deployment, data migration, or code change is authorized by this record.

This record resolves the stated approval and issuance responsibilities in DEC-0002; other unallocated responsibilities remain open. Follow Business → Technical → Backlog → Sprint → Code → Code Review → Stage → QA → Release Approval.
