# Moon administrator dashboard — approved Business design

Status: owner-approved dashboard and navigation concept, 2026-11-28. Based on review of the live dashboard screenshot and source src/features/admin-panel/index.tsx at baseline 68ff058161b71da7c4bb1cd2fd0508beca6ee65d. This does not approve other page designs or authorize implementation or deployment.

Preserve the current visual identity, RTL layout and color system. Replace the hard-coded sample metrics, activity rows and project rows with authoritative backend information. Missing/unavailable values are not zero; no fabricated records.

Approved overview indicators: active organizations, active companies, active startups, active projects, individual contributors, beneficiaries, project funds raised, payments to startups. Separate financial summary: Moon revenue, fund capital, fund income. Preserve the separation of project contributions, Moon revenue, Moon-funded fund capital and income under DEC-0003/0005.

Project status overview: fundraising, executing, completed and stopped. Follow-up overview: company applications pending approval, organization payments pending, tax certificates pending issuance, stopped projects awaiting contributor instructions. This is a proposed display grouping approved as a dashboard concept, not a new lifecycle enum or a new approval authority. Recent activity includes event, role, organization, status and time; fundraising project table includes project, organization, funds raised, funding target and progress. Organization and time-range filters are required, subject to authorized data access.

Approved target navigation (based on the dashboard review): dashboard, users and access, companies, startups, organizations, projects, funding, individual contributors, revenue, fund, reports, support requests, content management, settings. Startup and project access in Moon admin is monitoring, not Aineh approval. No new operational role. The central admin does not receive project funds or issue official tax certificates.

Technical must define authoritative read models, exact KPI semantics, scope, date/currency handling, deduplication and unknown/error/empty states before implementation. The old dashboard shows sample records; do not claim them as operational totals. The public-site freeze remains. No runtime change, migration, merge or production release authorized.

## Amended execution requirements (DEC-0005)
Full verified funding of the approved total project target is mandatory before Aineh explicitly authorizes execution and determines the official start date. No lower start threshold. Startup designs the operational and financial plan (stages, schedule, outputs/KPIs, budgets, payment amounts/timing, project-specific advance if needed); Aineh reviews and approves it. Complete fulfillment of stage obligations is required for satisfactory-performance approval; no partial approval or progress-proportional stage settlement. Actual organization payment and reconciliation remain distinct; approved advances are separate and their release/offset details remain open. No amendment during execution.

Show fully funded projects awaiting Aineh authorization and official start date; Moon monitors, does not authorize start.

## Complete project intake and stage reporting amendment (DEC-0004/0005)
Monitor actual stage report approvals/publication, project-scoped SMS delivery, Aineh final operational completion and independent organization financial settlement. No Moon report approval, closure override or mass notification. Only confirmed contributors of same project receive stage-publication SMS.
No public-site/runtime change authorized; detailed technical evidence and delivery contracts remain open.
