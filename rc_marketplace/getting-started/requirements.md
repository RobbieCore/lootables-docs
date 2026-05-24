# Requirements

## Dependencies

| Dependency | Purpose |
|---|---|
| `oxmysql` | Database driver. Recommended. Set `Config.sqlDriver = "oxmysql"` in `config.lua`. |
| `kq_link` | Server callback and framework bridge. Must start before `rc_marketplace`. |
| ESX, QBCore, QBox, ox_core, TMC, vRP, or Standalone | Player framework for money deduction and name resolution. Detected automatically at runtime via `kq_link`. |

::: warning mysql-async is not supported
`mysql-async` is not supported. Use `oxmysql`.
:::

## What kq_link provides

`kq_link` is a required bridge resource. It handles server callbacks, character name lookups, and framework-agnostic money deduction (ad cost, promotion cost, edit cost) regardless of which framework is running. No manual `kq_link` configuration is required — just ensure it starts before `rc_marketplace`.

## Optional dependencies

| Resource | Purpose |
|---|---|
| `screenshot-basic` | In-game photo capture for ad images. The **Take a picture** button is hidden automatically if this resource is not running. Available in desktop mode only. |

The marketplace registers as an app inside a compatible phone resource when one is detected. If no compatible phone is running, it is accessible via the `/marketplace` command.

## Server requirements

- FiveM server running Cerulean artifacts or newer
- Lua 5.4 (enabled automatically via `fxmanifest.lua`)
- MariaDB / MySQL database accessible by `oxmysql`
