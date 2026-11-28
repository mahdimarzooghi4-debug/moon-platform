# Moon administrator — page-by-page Business review

Status: working design review, 2026-11-28. Baseline a486e18ac153342576724afa4633db46281e3574. The dashboard and menu concept is approved separately in admin-dashboard-business-design.md. The explicit owner decision below is approved; other review suggestions are proposals, not implementation permission.

## Approved company application list change

Display company name, representative full name and mobile number, status and review action in the application list; replace the tracking-code column with representative details. Retain tracking code in application detail. Authorized Moon administrators may see the real representative mobile number. Search by company name, representative name and mobile; Persian display labels. The current list API/UI summary shape contains id/name/trackingCode/status/submittedAtUtc; extend the authoritative scoped summary contract rather than fetching arbitrary detail records or using sample values. Preserve private document access and company activation review. No tax eligibility or certificate issuance is implied by company activation.

## Working review proposals (not independently approved)

- Users list: preserve visual identity, use exactly five approved operational roles, real backend invite records, organization/context filter and last login if authoritative. Individual contributors have no account/panel. Existing browser-local provisioning records require careful migration/reconciliation.
- User creation: constrain assignment to authorized approved contexts; only Aineh for creative-house context; do not bypass startup/company approval. Proposed email optional and remove temporary password only after secure identity/OTP contract review. Do not assume existing central login supports every target operation. No new privileged administrator creation grant is implied.
- Role list: retain read-only role catalog and membership totals; five target roles, historical role lineage preserved. No free-form policy editor.
- User detail: retain actual account and membership data; separate account blocking from membership revocation, propose reason and audit/history, immediate server-side revocation and last-login evidence. Do not claim existing enforcement without tests.
- Combined company/startup page: split into company, startup and organization sections per approved navigation. Replace client-local approval queue/profile overrides and hard-coded company active status with authoritative backend contracts. Existing company applications approval remains separate from certificate issuance.
- Company applications: preserve review and activation path and documents; propose grouped details, filters and localized states. Reject/return-for-correction transitions require explicit approval; do not invent them.
- Project list: source src/features/admin-panel/projects/index.tsx currently uses managed-project API, browser-store initial state, development fallback and local filters, and advertises admin editing. Propose central monitoring-only list with organization and startup, province, domain, execution and funding status, approved target, verified funding amount and progress, details and authorized export. Do not treat legacy managed-project records as authoritative project/funding evidence without verification. No central admin edit of approved project plan, organization assignment, approval, publication or stoppage. Aineh holds these responsibilities under DEC-0004/0005/0006. Project state grouping, pagination, filters and KPI semantics require Technical contract. No public-site change.

PR #324 remains Draft/Open; preserve live data, public-site freeze and explicit release gates. No code, migration or production changes authorized.
