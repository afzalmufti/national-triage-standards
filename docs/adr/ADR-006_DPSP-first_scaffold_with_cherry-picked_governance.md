# ADR-006: DPSP-first scaffold with cherry-picked repository-template governance

>|              |                                          |
>| ------------ | ---------------------------------------- |
>| Date         | `17/09/2026`                             |
>| Status       | `Accepted`                               |
>| Deciders     | `National Triage Standards team`         |
>| Significance | `Construction techniques, Dependencies`  |
>| Owners       | `National Triage Standards team`         |

## Context

The NHS England `repository-template` provides engineering governance (secret
scanning, EditorConfig, ADRs, CI conventions and licensing), but it is oriented
towards Terraform and Docker services and is heavyweight for a static site. DPSP
provides the website stack. We want the governance without the unnecessary weight.

## Decision

Base the repository on the DPSP (Eleventy) pattern and cherry-pick high-value
governance from `repository-template`: the ADR format (this directory),
`.editorconfig`, gitleaks secret scanning, Markdown and prose linting, pull request
and issue templates, `SECURITY.md`, and NHS licensing. Exclude Terraform, Docker,
the Make/asdf task runner and the multi-stage CI pipeline.

## Options considered

1. **Template-first** — base the repository on `repository-template`, strip the
   unused parts and wire `make` to `npm`. Strongest organisation compliance, but
   the most reconciliation effort.
2. **DPSP-first, cherry-pick governance (chosen)** — lightest for a static site,
   keeps the simple npm workflow, and adopts standards deliberately.
3. **Two-phase** — POC on the DPSP pattern now, then re-base onto the full template
   when promoting to the organisation.

## Consequences

- Governance is adopted incrementally; some template features are intentionally
  omitted.
- We track `repository-template` for updates to the standards we adopt.

## Tags

`governance` `scaffolding` `adr`
