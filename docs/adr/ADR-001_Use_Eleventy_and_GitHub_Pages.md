# ADR-001: Use Eleventy and static hosting on GitHub Pages

>|              |                                       |
>| ------------ | ------------------------------------- |
>| Date         | `17/09/2026`                          |
>| Status       | `Accepted`                            |
>| Deciders     | `National Triage Standards team`      |
>| Significance | `Structure, Construction techniques`  |
>| Owners       | `National Triage Standards team`      |

## Context

The National Triage Standards site is primarily standards documentation that must
be maintained by non-technical team members through the GitHub web interface. We
need Markdown-first authoring, the NHS.UK look and feel, and hosting that avoids a
separate subscription or Azure service to manage.

## Decision

Build the site with [Eleventy](https://www.11ty.dev/) using the
[`@x-govuk/nhsuk-eleventy-plugin`](https://github.com/x-govuk/nhsuk-eleventy-plugin)
for NHS.UK styles, layouts and navigation, and publish the generated static site
to GitHub Pages using a GitHub Actions workflow.

## Options considered

1. **Add Markdown rendering to the existing Express/Nunjucks service-manual app** —
   keeps service-manual features but remains a dynamic application hosted on Azure
   App Service, with more infrastructure to run and maintain.
2. **Build-time static export from the Express app** — requires bespoke tooling to
   build and maintain.
3. **Eleventy + `@x-govuk/nhsuk-eleventy-plugin` on GitHub Pages (chosen)** —
   purpose-built for Markdown, Nunjucks and the NHS.UK frontend, auto-generates
   navigation, and hosts for free.

## Consequences

- Free hosting on GitHub Pages (a public repository, or a private repository on
  GitHub Team or Enterprise — see [ADR-004](ADR-004_Private_repository_with_published_GitHub_Pages.md)).
- No live component demos or runtime search inherited from the service manual; add
  [Pagefind](https://pagefind.app/) for search if required.
- Non-technical authors edit Markdown; navigation is generated from the page
  structure.

## Tags

`eleventy` `github-pages` `hosting` `static-site`
