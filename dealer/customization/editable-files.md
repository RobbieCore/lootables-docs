# Editable Files

`rc_dealer` ships with a small set of files that are explicitly authorised for server-owner modification. These files are listed under `escrow_ignore` in `fxmanifest.lua` and will not be obfuscated in an escrow build.

## Files You Can Edit

| File | Purpose |
|------|---------|
| `config.lua` | All client and shared configuration values. See [General Settings](../configuration/general-settings.md), [Commands & Keybinds](../configuration/commands-and-keybinds.md), [Police Pressure](../configuration/police-pressure.md), and [Discoverability](../configuration/discoverability.md). |
| `server/server.config.lua` | Server-only configuration: SQL driver, money account, cop jobs, ACE, notification throttle, owner actions, and all seeded gameplay defaults. See [Server Settings](../configuration/server-settings.md) and [Tuning Defaults](../configuration/tuning-defaults.md). |
| `locale/lang/*.lua` | Language strings for all player-facing text. See [Localization](localization.md). |
| `locale/locale.lua` | Locale resolver — generally no need to edit unless adding a custom language loader. |

## What You Can Safely Change

- Any option documented in the Configuration section of these docs
- Language files — translate, reword, or add a new language
- Seeded defaults in `server/server.config.lua` — effective on first start or after a row delete + `/npcsell_reload`

## What You Should Not Change

- Any file **not** listed above — these are core script files
- Function signatures called by the core (names and parameter order)
- The `escrow_ignore` block in `fxmanifest.lua`

::: warning
Modifying files outside the `escrow_ignore` list voids support and may break on any resource update.
:::
