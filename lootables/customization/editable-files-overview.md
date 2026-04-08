# Editable Files Overview

Lootables includes several files designed for server owners to customize without breaking the core script. These files are **not obfuscated** and are listed under `escrow_ignore` in the resource manifest.

## Editable Files

| File | Purpose |
|------|---------|
| `config.lua` | All configuration values |
| `server/editable/functions.lua` | SQL abstraction, player identifiers, police count |
| `server/editable/qb.lua` | Item, money, and job functions (routed through kq_link) |
| `server/editable/dispatch.lua` | Server-side dispatch routing |
| `client/editable/functions.lua` | Client utilities (interaction checks, animations, tooltips) |
| `client/editable/dispatch.lua` | Client dispatch rendering (blips, notifications) |
| `locale/locale.lua` | All server/client text strings |
| `locale/ui.locale.lua` | UI text strings (minigame labels, buttons) |

## What You Can Safely Change

- **config.lua** — Any setting documented in the Configuration section
- **Dispatch integration** — Add support for a custom dispatch system
- **Interaction logic** — Change when and how players can interact with boxes
- **All text strings** — Translate or reword any player-facing text

## What You Should Not Change

- Any file **not** in the list above — these are the core script files and are obfuscated
- The `id` values in `Config.boxTypes` — these link to database records
- Function signatures (names and parameters) — the core script calls these by name
