---
layout: page
title: Component and layout examples
description: A reference page showing the NHS.UK components and layout options available when authoring content in Markdown.
---

{% from "details/macro.njk" import details %}
{% from "tag/macro.njk" import tag %}
{% from "card/macro.njk" import card %}

This page demonstrates the layout and component options available to content
authors. Almost everything below is written in plain Markdown; only the expander
uses an NHS.UK component macro.

[[toc]]

## Headings and text

Use `##` and `###` for headings. Within text you can write **bold**, _italic_
and ==highlighted== words, and abbreviations such as FIT are expanded on hover.

This paragraph is styled as a hint, to give quiet supporting guidance. {.nhsuk-hint}

## Images

![Example triage outcome categories: Emergency (immediate 999 response), Urgent (same day), Routine (within 5 working days) and Self-care (no appointment needed).](/assets/images/triage-outcomes.svg)

Example of a locally served image, copied from `app/assets/images` to `/assets/images` at build time. {.nhsuk-hint}


## Tables

Add a table using standard Markdown pipes. It is automatically given NHS.UK table
styles and made keyboard-scrollable.

| Triage outcome | Response time         | Example                          |
| -------------- | --------------------- | -------------------------------- |
| Emergency      | Immediate (999)       | Chest pain, difficulty breathing |
| Urgent         | Same day              | High fever that will not settle  |
| Routine        | Within 5 working days | Long-standing mild symptoms      |
| Self-care      | No appointment needed | Common cold                      |

## Callouts and warnings

Use GitHub-style alerts. `NOTE` and `TIP` become inset text; `IMPORTANT`,
`WARNING` and `CAUTION` become warning callouts. Add text after the alert type to
give it a custom heading.

> [!NOTE]
> Inset text draws attention to useful information without implying any risk.

> [!TIP] Good practice
> Keep triage questions short and written in plain English.

> [!WARNING]
> Warning callouts are used for important safety information a reader must not miss.

> [!CAUTION] Clinical safety
> Always escalate suspected sepsis immediately.

## Expander

Expanders (the NHS.UK details component) let readers reveal extra detail on
demand.

{{ details({
  summaryText: "What counts as a red flag symptom?",
  html: '<p class="nhsuk-body">Red flags are symptoms that suggest a potentially serious condition and require urgent escalation, such as new severe chest pain or the signs of sepsis.</p>'
}) }}

## Tags

Tags show the status of something and come in a range of colours.

{{ tag({ text: "Live", colour: "green" }) }} {{ tag({ text: "In review", colour: "blue" }) }} {{ tag({ text: "Experimental", colour: "yellow" }) }} {{ tag({ text: "Retired", colour: "grey" }) }}

## Cards

Cards group related content and can link to another page.

{{ card({
  heading: "Foundations",
  headingLevel: 3,
  href: "/foundations/",
  description: "Scope, principles and the shared language for the standards.",
  clickable: true
}) }}

Care cards use colour to signal urgency.

{{ card({
  heading: "When to escalate",
  headingLevel: 3,
  variant: "urgent",
  descriptionHtml: '<p class="nhsuk-body">Escalate immediately if a person shows red flag symptoms such as new severe chest pain or the signs of sepsis.</p>'
}) }}

## Definition lists

Definition lists pair a term with its description.

Safety netting
: Advice given to a patient about what to do if their condition changes or does not improve.

Conformance
: The extent to which a service meets the requirements of a standard.

## Quotes

> Getting the introduction right helped people understand why the screening invitation mattered to them.

## Code

Fenced code blocks are syntax highlighted:

```json
{
  "outcome": "urgent",
  "responseTimeHours": 24
}
```

*[FIT]: Faecal immunochemical test
