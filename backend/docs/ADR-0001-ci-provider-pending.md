# ADR-0001 — CI/CD provider remains pending

Status: Pending decision

## Context

The technical specification explicitly names GitLab CI and a Container Registry for production delivery. The source repository currently used for implementation is GitHub.

## Decision for implementation work

GitHub Actions may be used as temporary verification gates while the code is developed in this repository. Those workflows validate builds, migrations, tests and end-to-end scenarios, and temporary one-off workflows are removed after successful gates.

This is **not** an approval to replace the production GitLab CI requirement.

## Production decision required

Before production CI/CD is considered CLOSED, product/architecture must explicitly choose one of these outcomes:

1. establish GitLab CI + Container Registry as specified, with repository mirroring or migration as appropriate; or
2. approve GitHub Actions/another provider as a documented architecture deviation and update the technical baseline accordingly.

Until then, implementation gates may be green while the production CI/CD acceptance item remains open.
