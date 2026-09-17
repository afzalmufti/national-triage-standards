# National Triage Standards

Proof of concept for the National Triage Standards website, built with
[Eleventy](https://www.11ty.dev/) and the
[NHS.UK Eleventy plugin](https://github.com/x-govuk/nhsuk-eleventy-plugin).

Content is authored in Markdown and the navigation is generated automatically
from the page structure.

## Requirements

- Node.js >= 22.22 (see [.nvmrc](.nvmrc))

## Getting started

```shell
npm install
npm start
```

Then visit <http://localhost:8080>.

## Build

```shell
npm run build
```

The static site is generated into `_site/`.

## Adding a page

Add a Markdown file under `app/<section>/`. It is automatically included in that
section's left-hand navigation, ordered by the `order` value in its frontmatter.
