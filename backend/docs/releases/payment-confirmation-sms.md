# Payment confirmation SMS — product decision and integration gate

Owner decision, 2026-11-27: each successfully verified payment, whether made by an individual or a legal entity, must generate a confirmation SMS. No separate public individual participation tracking page or Moon-generated tracking code is required. Preserve the internal unique payment ID and the authoritative bank reference; corporate payment history remains in the organization workspace.

Owner-supplied SMS.ir template ID: **341233**. Parameters: `Project` (actual project name), `Amount` (verified amount in toman), `Reference` (actual bank reference). Template ID is supplied by the owner; provider approval and live delivery have not been independently verified.

## Admission conditions

- Send only after authenticated provider verification and matching transaction details. Neither intent creation, browser state, webhook alone nor a client-declared success constitutes verified payment.
- Resolve the actual recipient from the authoritative payment-time identity/contact for the individual or authorized corporate payer. Do not substitute a finance reviewer, arbitrary organization member, demo mobile or unverified input.
- Persist the authoritative bank reference separately if the gateway's intent reference is not the final bank reference. Do not label an intent token as a bank reference. Convert verified currency units to toman only according to the agreed gateway currency contract.
- Enqueue a durable notice atomically with the successful verification transition, uniquely deduplicated by internal payment ID. Dispatch after commit; retries must not generate duplicate notices. Ambiguous external delivery requires reconciliation rather than blind resend, following the existing SMS outbox pattern. SMS failure must not reverse a verified payment.
- No historical backfill or live SMS without explicit release admission. Provider acceptance does not prove handset delivery.

## Current repository blockers

At baseline 1a65c0ff03c5cbb439e40525d83a6010ccb5d680, Program.cs binds IPaymentGateway to DisabledPaymentGateway. PaymentVerificationResult only returns the pre-existing ProviderReference, and VerifyAsync requires it to match the intent reference. There is no separate final bank reference contract. AppUser has no mobile field; the payment/commitment records do not yet bind an authoritative recipient. Individual checkout is not an authoritative payment-time recipient source. The real gateway, final reference and recipient contracts must be implemented and tested before enabling template 341233. Existing registration/login SMS is unaffected.

This document records the decision only. No runtime payment or SMS behavior, schema, configuration, or production deployment is changed.
