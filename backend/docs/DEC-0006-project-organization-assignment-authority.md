# DEC-0006 — Project organization assignment authority

Status: Business decision explicitly approved by the product owner on 2026-11-28.
Related: [DEC-0002](DEC-0002-national-csr-pilot-and-five-role-model.md), [DEC-0004](DEC-0004-approval-and-certificate-authority.md), [DEC-0005](DEC-0005-project-funding-and-disbursement-responsibility.md), [Five-panel capability matrix](panel-capability-matrix-five-role-target.md).
Scope: authority to determine the organization associated with a project, not implementation.

## Approved decision

The manager of the single creative house Aineh (مدیر خانه خلاق آینه), not the startup, determines the organization associated with a project. This is part of the project review and assignment business boundary. The startup defines and submits its project; Aineh determines the relevant organization and approves the project under DEC-0004. The associated organization is the relevant party for project funding and direct disbursement under DEC-0005. Official tax certificate issuance remains subject to the organization's actual legal authority.

Each project is associated with exactly one organization, selected by Aineh. Multiple concurrent organization associations for a single project are not permitted. A registered organization may be associated with multiple projects. This is the required target association cardinality; the draft-stage requirement and exact assignment timing remain to be specified. The authoritative association must reference a registered organization; the organization's tag derives from that association. Funding receipt, direct disbursement and any legally authorized certificate issuance must remain attributable to the relevant organization under DEC-0004 and DEC-0005. Emdad remains the pilot organization. No hard-coded assignment or silent historical data remapping is authorized. Organizations do not gain access to unrelated projects; enforce scope in Backend. The public-site freeze remains: do not change public pages or expose new organization tags during this redesign.

## Still undecided

Required timing relative to approval/publication, reassignment authority and policy, whether and how an organization accepts an assignment, historical mapping, and the consequences of changes after a payment or certificate exist require explicit contracts. Do not infer permission to redirect project funds or transfer historical payment/certificate ownership. No new roles, automatic approvals, production activation, migration, or runtime changes.

This record resolves the assignment-authority and single-organization cardinality questions in the earlier capability matrix and decisions, not the remaining association lifecycle questions.
