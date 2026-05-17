# Requirements

## Runtime dependencies

| Dependency | Required | Purpose |
|---|---|---|
| FiveM server artifact | Any recent build | Base platform |
| `oxmysql` or equivalent | No | No database — the script has no tables |
| Targeting system | Optional | ox_target, qb-target, or qtarget for the targeting interaction mode |
| `ox_target` | Optional (recommended) | Default value in `Config.target.system` |

The script has **no mandatory framework dependency** (no ESX, no QB-Core required). It works standalone. The only optional integration is the targeting system.

## Targeting system

If `Config.target.enabled = true` (the default), you must have one of the following resources running and listed before `rc_extra_seats` in your `server.cfg`:

| Value | Resource |
|---|---|
| `'ox_target'` | ox_target |
| `'qb-target'` | qb-target |
| `'qtarget'` | qtarget |

::: tip
If you do not want to use a targeting system, set `Config.target.enabled = false`. The script will fall back to a proximity-based "Press E" keybind with a GTA help-text prompt.
:::

::: warning
If `Config.target.enabled = true` but the targeting resource is not running, the seat interaction will silently fail — no prompt will appear. Always confirm the targeting resource is started before rc_extra_seats.
:::

## Lua version

The manifest declares `lua54 'yes'`. Your server must support Lua 5.4 (any FiveM server artifact from 2022 onward does).

## No database

rc_extra_seats does not create or use any database tables. Occupancy state lives in entity statebags and is discarded when the resource or server stops.
