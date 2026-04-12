# Requirements

| Dependency | Required | Notes |
|------------|----------|-------|
| [ls_island_props](https://robicore.com) | Yes | Island prop models |
| mysql-async or oxmysql | Yes | Database driver |
| ESX or QBCore | Yes | Framework (one of the two) |
| Targeting system | Optional | Only when `Config.interactionMode = 'targeting'` |
| Dispatch system | Optional | Only when `Config.dispatch.enabled = true` |

## SQL Driver

The script supports both `mysql-async` and `oxmysql`. Set your driver in `config.lua`:

```lua
Config.sqlDriver = 'mysql'     -- for mysql-async
Config.sqlDriver = 'oxmysql'   -- for oxmysql
```

Ensure the corresponding resource is started **before** `rc_cartel_heist` in your `server.cfg`.

## Framework

Only one framework is required — either ESX or QBCore. The script auto-detects which one is running.

## Targeting (optional)

A targeting resource (e.g. `qb-target`, `ox_target`) is only needed when you set:

```lua
Config.interactionMode = 'targeting'
```

If you use `'3dtext'` or `'tooltip'`, no targeting resource is required.

## Dispatch (optional)

A dispatch resource is only needed when you enable police alerts:

```lua
Config.dispatch.enabled = true
```

Supported systems: `ps-dispatch`, `cd-dispatch`, `core-dispatch` (old and new APIs), or the built-in default.
