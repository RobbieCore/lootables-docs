# Editable Files Overview

All files not listed below are encrypted. Do not attempt to modify encrypted files.

## Files open for editing

| File | Purpose |
|---|---|
| `config.lua` | Bootstrap config — SQL driver, identifier preference, debug flag, message notification mode, screenshot settings. |
| `ui.config.lua` | Visual theme definitions — dark and light palettes for every UI region (listings, nav buttons, chat, forms, notifications). |
| `locale/locale.lua` | All user-facing strings rendered in the interface. Change values here to translate or relabel. |
| `server/server-config.lua` | Discord webhook URL, webhook colors, and per-category webhook field toggles. |

The entire `locale/` folder is open for editing — you can add files there. The resource loads `locale/locale.lua` as the active `Locale` table. To use additional language files, load them from within `locale/locale.lua`.

## What you can safely change

- Any value in `config.lua` within the documented option types.
- Any CSS inline-style string value in `ui.config.lua`.
- Any string value (right-hand side) in the `Locale` table in `locale/locale.lua`.
- Webhook URLs, colors, and field toggles in `server/server-config.lua`.

## What you must not change

- Anything outside the four files listed above.
- `Locale` table **key names** in `locale/locale.lua` — the interface looks up strings by exact key. Renaming a key causes the raw key string to show in the UI.
- `UI.themes` **table structure key names** in `ui.config.lua` (e.g. `theme_light`, `theme_dark`, `listing`, `navButtons`) — the interface references these names directly.
- `Config.alternativeIdentifier.identifier` after players have posted ads. See [General Settings](/rc_marketplace/configuration/general-settings).
