# Editable Files Overview

All files not listed below are encrypted by the Tebex/Keymaster escrow tool. Do not attempt to modify encrypted files.

## Files open for editing

| File | Purpose |
|---|---|
| `config.lua` | Bootstrap config — SQL driver, identifier preference, debug flag, message notification mode, screenshot settings. |
| `ui.config.lua` | Visual theme definitions — dark and light palettes for every UI region (listings, nav buttons, chat, forms, notifications). |
| `locale/locale.lua` | All user-facing strings rendered in the NUI. Change labels or translate here. |
| `server/server-config.lua` | Discord webhook URL, webhook colors, and per-category webhook field toggles. |

The entire `locale/` folder is open — you can add files there (e.g. `locale/fr.lua`). However, the resource loads only `locale/locale.lua` as the active `Locale` table. Additional files must be referenced from within `locale/locale.lua`.

## What you can safely change

- Any value in `config.lua` within the documented option types (strings, booleans, numbers).
- Any CSS inline-style string in `ui.config.lua`.
- Any value (right-hand side) in the `Locale` table in `locale/locale.lua`.
- Webhook URLs, colors, and field toggles in `server/server-config.lua`.

## What you must not change

- Anything outside the four files listed above — it is encrypted and will cause errors if tampered with.
- `Locale` table **key names** in `locale/locale.lua` — the NUI looks up strings by exact key. Renaming a key breaks that lookup and the NUI falls back to the raw key string.
- `UI.themes` **table key names** in `ui.config.lua` (e.g. `theme_light`, `theme_dark`, `listing`, `navButtons`, `chat`, `newAd`) — the NUI references these names directly.
- `Config.alternativeIdentifier.identifier` after players have posted ads — see [General Settings](/rc_marketplace/configuration/general-settings).
