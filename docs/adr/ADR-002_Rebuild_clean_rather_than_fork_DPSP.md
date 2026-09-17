# ADR-002: Rebuild clean rather than fork DPSP

>|              |                                          |
>| ------------ | ---------------------------------------- |
>| Date         | `17/09/2026`                             |
>| Status       | `Accepted`                               |
>| Deciders     | `National Triage Standards team`         |
>| Significance | `Construction techniques, Dependencies`  |
>| Owners       | `National Triage Standards team`         |

## Context

The Digital Prevention Services Portfolio (DPSP) already implements the stack we
want: Eleventy, the `@x-govuk/nhsuk-eleventy-plugin`, GitHub Pages, and content
guardrails. We evaluated forking DPSP versus starting clean and reusing its
patterns.

## Decision

Start a clean project and copy only the small set of reusable files from DPSP (the
Eleventy configuration, GitHub Actions workflows, and the Markdown check and pull
request review scripts). Do not git-fork DPSP.

## Options considered

1. **Fork DPSP** — inherits its git history, content, branding and redirects, all
   of which we would need to remove. Little unique code is gained, because the
   value lives in the npm plugin.
2. **Clean rebuild reusing patterns (chosen)** — correct provenance, no unrelated
   history, and only the files we need.

## Consequences

- We depend on `@x-govuk/nhsuk-eleventy-plugin` for the design system.
- We maintain our own copies of the workflows and scripts, and track DPSP for
  improvements manually.

## Tags

`dpsp` `reuse` `scaffolding`
