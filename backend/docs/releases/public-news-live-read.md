# Public news operational read path

Public news pages use the existing published-only CMS API and stable record IDs. The landing news cards link to the same ID. No synthetic featured article, static dates, counts, related content or dummy body are rendered. The newest updated article is labeled accordingly, not presented as an administrator-selected feature.

Statistics use published news count and the current public impact overview report/project counts. The latter labels describe exactly what is measured, not an undefined time window. News year and sort filters use the real updatedAtUtc. Search covers title and summary; pagination operates on actual matching records.

Existing records provide only title, summary, status and last update time. Full body, original publication time, category, author, featured selection, related project/startup IDs, attachments and saved-news persistence require a separate governed CMS contract. Do not derive or fabricate those fields. Existing known sample IDs are excluded without deleting persisted rows on reads. Legacy generated news components remain design references, not public route targets.

Project header shares landing KPI API; public project listing/filtering and support submission are separate remaining packages. No Production deployment or data purge authorized by this change.
