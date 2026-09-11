# Phase 1 — Publication slice

Publication is server-controlled and only succeeds when the project is approved, the current project version is locked, the linked evaluation is completed and conflict-free, and the recorded final decision is `approve`.

`POST /api/v1/projects/{projectId}/publish` requires the product-owner publication policy. The publisher subject and timestamp are persisted on the project, `project.published` is appended to the audit log, repeated publication is rejected, and a published project is immutable at the persistence boundary.

This slice does not close all of Phase 1 by itself; final Phase 1 acceptance still requires a consolidated gate across Project, Version, Evaluation, Decision, and Publish.
