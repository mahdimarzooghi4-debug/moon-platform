# Moon — Shared panel visual requirements

Status: owner-approved common visual requirements, 2026-11-28. Applies to all five authenticated panel types (Moon, Aineh, organization, company, startup), not the public website.

- Introduce a visible, consistent vertical gap between the top browser viewport and the panel shell/sidebar/content. No panel should appear glued to the top edge.
- Center the existing Moon logo horizontally and vertically in its white brand container at the top of the sidebar. Preserve the logo asset, proportions and existing visual identity.
- Proposed implementation defaults (not owner-specified numeric values): 24 CSS px desktop and 16 CSS px mobile; validate at representative breakpoints and adjust with owner design review. Align the top of the sidebar and main content in desktop layout. Avoid clipped headers, unintended overflow, or double spacing on nested routes; preserve mobile navigation usability, scrolling and RTL.
- Use shared layout tokens/components where appropriate; verify all five panels and nested states visually in Stage/QA before release. Public website remains frozen.
- This is documentation only, not a code change or deployment approval.
