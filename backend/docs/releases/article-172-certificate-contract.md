# Article 172 certificate — owner-confirmed product contract

Status: owner-approved functional boundary; technical implementation and external issuance evidence not yet accepted.

## Decision (2026-11-27)

Moon generates the letter from its existing certificate template using authoritative data. The authorized Emdad official reviews and officially issues the certificate. Moon records and displays the final certificate to the relevant company and notifies its representative after confirmed issuance. Company-registration approval belongs to system_admin and is not certificate approval. Startup approval remains with the creative-house product owner.

The SMS parameter CODE is the exact official Emdad letter number, never Moon's tracking code or a locally invented official number. No truncation or synthetic number. If the number is incompatible with the approved SMS template, hold the notice for reconciliation. Owner-supplied third SMS.ir template ID: 100098. Configuration must still be explicitly enabled and actual template acceptance verified; no notification before committed official issuance.

## Existing implementation references

- src/features/company-panel/certificate-issued/index.tsx: existing printable certificate template and official logo layout; preserve design.
- src/features/company-panel/certificate-detail/index.tsx and certificates/index.tsx: company certificate views.
- src/panels/emdad/article172-approvals/: Emdad review screens.
- src/features/emdad-certificate-issuer-settings/index.tsx and src/shared/certificateIssuerSettings.ts: existing issuer settings UI, currently browser-local.
- backend/src/Moon.Platform.Api/Modules/Funding/PaymentModels.cs and FundingModels.cs: verified/reconciled payment and commitment models.

These screens currently contain static example certificate data and browser-local signer settings. They are not evidence of actual issuance. Replace sample data with authorized backend records before enabling live certificate views. No localStorage signature or bundled decorative stamp may be treated as an authorized official signature. Preserve template appearance, not sample content.

## Technical gates

1. Establish authoritative company identity, company-to-participation ownership and confirmed direct payment to Emdad. Existing FundingCommitment has CommittedBySubject but no explicit company organization ID; existing FundingPayment reconciliation alone is not proof that funds reached the required Emdad account or that Article 172 eligibility is satisfied.
2. Record real issuance-authority mapping to an active Emdad membership and an explicit grant. Existing supervisor role is generic; do not assume every supervisor or Moon system admin may issue.
3. Produce an explicitly non-official draft from the existing template using a versioned authoritative snapshot. Never issue or send an issuance message while draft.
4. Authorized Emdad action: review eligibility evidence, confirm the official letter number, issue the final immutable record with official date, issuer and approved artifact/signature evidence. Number source, signature authorization mechanism and official issuance integration must be confirmed before final issuance; no invented numbering sequence.
5. Company-scoped access to final record and print/download; audit reads and issuance. No cross-company access. Retain historic template and issuer evidence with issued records; later settings changes do not alter them.
6. Durable deduplicated notice from committed issuance, using exact official letter number and an approved SMS.ir template. Provider acceptance is not handset delivery. Uncertain sending requires reconciliation, not automatic duplicates.

No payment, tax eligibility criteria, external API, credential, signature technology, certificate number, issuer identity or production release is assumed. This document authorizes the functional flow, not a production release. Next technical increment must establish the missing authoritative contracts before enabling issuance.

## Draft template safety increment
The existing official-looking sample screens remain in source as design references, not live certificate or approval routes. Operational company and Emdad certificate routes display an honest unavailable state until the authoritative issuance API exists. The reusable draft letter component uses the existing logo and layout, accepts only supplied data, visibly marks the content as unofficial and unissued on screen and in print, and does not consume localStorage signer settings, a decorative stamp, or a fabricated letter number. It makes no legal eligibility assertion. This is presentation foundation only; there is no new public draft-generation or issuance endpoint.
