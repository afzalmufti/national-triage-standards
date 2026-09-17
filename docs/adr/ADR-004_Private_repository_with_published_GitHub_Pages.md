# ADR-004: Private repository with published GitHub Pages on NHS Enterprise Cloud

>|              |                                            |
>| ------------ | ------------------------------------------ |
>| Date         | `17/09/2026`                               |
>| Status       | `Proposed`                                 |
>| Deciders     | `National Triage Standards team`           |
>| Significance | `Nonfunctional characteristics, Structure` |
>| Owners       | `National Triage Standards team`           |

## Context

NHS organisation policy requires repositories to be private. GitHub Pages can be
published from a private repository on GitHub Enterprise Cloud, and the published
site can be either public or access-controlled. If the organisation uses Enterprise
Managed Users (EMU), Pages can only be published privately, and only to members of
the enterprise.

## Decision

Keep the repository private and publish the site with GitHub Pages. Publish the
site publicly if the organisation permits it; otherwise publish it privately
(access-controlled). Confirm the EMU status with platform administrators and mirror
how the DPSP site is published.

## Options considered

1. **Public repository** — simplest Pages hosting, but breaches the
   private-by-policy requirement.
2. **Private repository, public Pages (chosen if permitted)** — complies with
   policy, keeps the site openly accessible, and supports a custom domain.
3. **Private repository, access-controlled Pages** — the site is visible only to
   enterprise members; suitable if the content must remain internal.

## Consequences

- Requires GitHub Enterprise Cloud for private-repository Pages.
- Public visibility depends on the organisation not being EMU-restricted.
- A custom domain will be arranged via the NHS DNS team.

## Tags

`github-pages` `security` `enterprise` `visibility`
