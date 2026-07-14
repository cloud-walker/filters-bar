# Filters Bar

A proof of concept for componentising a **Linear-style filters bar**: a compact
row of filter chips, an "add filter" picker, and a clear-all action, built as
a single reusable `FiltersBar` component.

> **Status:** design PoC / work in progress. `src/ui/FiltersBar/FiltersBar.tsx`
> is currently a static stub used to sketch the markup — the behaviour
> described below is the target design, not yet the implementation.

## What it does

The bar distinguishes between two kinds of filters and follows a small set of
display rules:

1. **Main filters** are always visible, even when they have no value set
   (e.g. an empty "Status" chip inviting the user to pick one).
2. **Extra filters** are only rendered once they've been added *and* given a
   value — an extra filter that's been added but not yet filled in doesn't
   show up as a chip in the bar.
3. Every filter chip that is added and filled — main or extra — gets a
   **remove button** to clear just that filter.
4. An **extra filters picker** lets the user choose which additional filter
   to add to the bar.
5. A **"Clear filters" button** is rendered only when the current filters
   state differs from the default state — it disappears once the bar is back
   to its default.
6. There is a well-defined **default state**, which is what the bar renders
   before the user has touched anything.

## Why

Filters UIs like this (Linear, Height, etc.) look simple but hide a fair
amount of state logic: which filters are "always on" vs. optional, when a
chip should appear or disappear, and when the reset action itself should be
visible. This repo is a sandbox for working out that state model and
componentising it cleanly, before dropping it into a real product.

## Stack

React + TypeScript + Vite. See below for the generated tooling notes from the
Vite template this project started from.

---

## React + TypeScript + Vite (template notes)

This template provides a minimal setup to get React working in Vite with HMR and some Oxlint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

### React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

### Expanding the Oxlint configuration

If you are developing a production application, we recommend enabling type-aware lint rules by installing `oxlint-tsgolint` and editing `.oxlintrc.json`:

```json
{
  "$schema": "./node_modules/oxlint/configuration_schema.json",
  "plugins": ["react", "typescript", "oxc"],
  "options": {
    "typeAware": true
  },
  "rules": {
    "react/rules-of-hooks": "error",
    "react/only-export-components": ["warn", { "allowConstantExport": true }]
  }
}
```

See the [Oxlint rules documentation](https://oxc.rs/docs/guide/usage/linter/rules) for the full list of rules and categories.
