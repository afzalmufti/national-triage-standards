# ADR-005: Prove the concept under a personal account, then promote to the NHS organisation

>|              |                                    |
>| ------------ | ---------------------------------- |
>| Date         | `17/09/2026`                       |
>| Status       | `Accepted`                         |
>| Deciders     | `National Triage Standards team`   |
>| Significance | `Structure`                        |
>| Owners       | `National Triage Standards team`   |

## Context

Authorisation to create a repository in the NHS organisation is pending, but a
working proof of concept is needed first. A personal, free GitHub account cannot
publish Pages from a private repository.

## Decision

Build the proof of concept as a public repository under a personal account, then
transfer it to — or recreate it in — the NHS organisation as a private repository,
once authorised and the team agrees.

## Options considered

1. **Wait for organisation access before starting** — delays the proof of concept.
2. **Personal public POC, then promote (chosen)** — unblocks work now, provided no
   confidential content is placed in the public POC.

## Consequences

- No confidential content may be placed in the public POC.
- On promotion, organisation governance is applied (private visibility, branch
  protection, `CODEOWNERS`, required checks) — see
  [ADR-006](ADR-006_DPSP-first_scaffold_with_cherry-picked_governance.md).

## Tags

`poc` `github` `promotion`
