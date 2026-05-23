# Editable Files Overview

All files not listed below are encrypted by the Tebex/Keymaster escrow tool when the resource is uploaded. Do not attempt to edit encrypted files.

## Files you can modify

| File | Purpose |
|---|---|
| `config.lua` | Bootstrap config — SQL driver, identifier preference, debug flag, message notification mode, screenshot settings. |
| `ui.config.lua` | Visual theme definitions — dark and light palettes for every UI region (listings, nav buttons, chat, forms, notifications). |
| `locale/locale.lua` | All user-facing strings rendered in the NUI. Add a new language or change existing labels here. |
| `server/server-config.lua` | Discord webhook URLs, webhook colors, and per-category webhook field toggles. |

The entire `locale/` folder is open — you can add additional files there (e.g. `locale/fr.lua`) as long as `locale/locale.lua` still exports a `Locale` table.

## What you can safely change

- Any value in `config.lua` within the documented option types (strings, booleans, numbers).
- Any color or style string in `ui.config.lua` — these are CSS inline-style strings passed directly to the NUI.
- Any key in `locale/locale.lua` — values are the translated strings; keys must stay identical.
- Webhook URLs, colors, and field toggles in `server/server-config.lua`.

## What you should not change

- Anything outside the four files above — it is encrypted.
- `Locale` table key names in `locale/locale.lua` — the NUI looks up strings by exact key; renaming a key breaks the lookup.
- `UI.themes` table key names in `ui.config.lua` (e.g. `theme_light`, `theme_dark`, `listing`, `navButtons`) — the NUI references these keys by name.
- `Config.alternativeIdentifier.identifier` after players have posted ads — see [General Settings](/rc_marketplace/configuration/general-settings).
