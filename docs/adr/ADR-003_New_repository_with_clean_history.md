# ADR-003: New repository with clean history

>|              |                                    |
>| ------------ | ---------------------------------- |
>| Date         | `17/09/2026`                       |
>| Status       | `Accepted`                         |
>| Deciders     | `National Triage Standards team`   |
>| Significance | `Structure`                        |
>| Owners       | `National Triage Standards team`   |

## Context

The starting point was `afzalmufti/national-triage-standards`, a fork of
`nhsuk/nhsuk-service-manual` on a personal account carrying the full service-manual
history and code, none of which is relevant to the Eleventy rebuild.

## Decision

Create a new, non-fork repository, build the Eleventy site there with a clean
history, and archive (not delete) the original fork once the replacement is
verified.

## Options considered

1. **Reuse the existing repository and wipe history in place** — keeps the URL and
   issues, but retains the fork association and personal-account ownership.
2. **New clean repository (chosen)** — non-fork by default, with a clean history;
   useful content (such as the draft site map) is preserved before archiving.

## Consequences

- Existing issues and history remain on the archived fork for reference.
- Content worth keeping is migrated before archiving.

## Tags

`repository` `git-history`
