# Requirements

## Dependencies

| Dependency | Purpose |
|---|---|
| `oxmysql` | Database driver. Required. Set `Config.sqlDriver = "oxmysql"` in `config.lua`. |
| `kq_link` | Server callback bridge. Must start before `rc_marketplace`. |
| `es_extended` **or** `qb-core` / `qbx_core` / `qbx-core` | Player framework for money deduction and name resolution. Detected automatically at runtime. |

::: warning mysql-async is not supported
`mysql-async` is no longer supported. Use `oxmysql`. Any other driver that exposes `executeSync(query, data)` works via a generic fallback, but is unsupported.
:::

## What kq_link handles

`kq_link` is a required bridge resource. It provides:

- **Server callbacks** — all client-to-server requests route through `kq_link`'s callback system.
- **Player name resolution** — character names read via `kq_link:GetPlayerCharacterName`.
- **Framework-agnostic money deduction** — ad cost, promotion cost, and edit cost are deducted from the player's cash account regardless of which framework is running.

No manual configuration in `kq_link` is required; just ensure it starts before `rc_marketplace`.

## Optional dependencies

| Resource | Purpose |
|---|---|
| `screenshot-basic` | In-game photo capture for ad images. The "Take a picture" button auto-hides when this resource is not running. Desktop mode only. |

The marketplace also registers as an app inside a compatible phone host when one is detected on your server. Registration happens automatically — no manual configuration needed. If no phone resource is running, the marketplace is accessible via the `/marketplace` command.

## Server requirements

- FiveM server running **Cerulean** artifacts or newer.
- Lua 5.4 (enabled automatically via `fxmanifest.lua`).
- MariaDB / MySQL database accessible by `oxmysql`.
