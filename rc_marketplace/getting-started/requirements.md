# Requirements

## Dependencies

| Dependency | Purpose |
|---|---|
| `oxmysql` | Database driver. Required. Set `Config.sqlDriver = "oxmysql"` in `config.lua`. |
| `kq_link` | Server callback bridge and framework abstraction layer. Must start before `rc_marketplace`. |
| `es_extended` **or** `qb-core` / `qbx_core` / `qbx-core` | Player framework for money deduction and name resolution. Detected automatically at runtime. |

::: warning mysql-async is not supported
`mysql-async` has been deprecated and is not installed on most modern servers. Use `oxmysql`. Any other driver that exposes `executeSync(query, data)` works via the generic fallback, but is unsupported.
:::

## What kq_link handles

`kq_link` is the bridge between rc_marketplace and your server. It provides:

- **Server callbacks** — all client-to-server requests route through `kq_link`'s callback system.
- **Player name resolution** — character names read via `kq_link:GetPlayerCharacterName`.
- **Framework-agnostic money deduction** — the ad cost, promotion cost, and edit cost are taken from the player's cash account regardless of framework.

No manual configuration in `kq_link` is needed; just ensure it starts before `rc_marketplace`.

## Optional dependencies

| Resource | Purpose |
|---|---|
| `screenshot-basic` | In-game photo capture for ad images. Button auto-hides when not running. Desktop mode only. |
| `yseries` | Registers the marketplace as a phone app in Y-Series. |
| `lb-phone` | Registers the marketplace as a phone app in lb-phone (Loaf Scripts). |
| `gksphone` | Registers the marketplace as a phone app in gksphone v2. |
| `qs-smartphone-pro` | Registers the marketplace as a phone app in Quasar smartphone. |

Only one phone resource needs to be running. The script auto-detects whichever is started and falls back to the standalone `/marketplace` chat command if none are.

## Server requirements

- FiveM server running **Cerulean** artifacts or newer.
- Lua 5.4 (enabled automatically via `fxmanifest.lua`).
- MariaDB / MySQL database accessible by `oxmysql`.
