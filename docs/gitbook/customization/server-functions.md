# Server Functions

## server/editable/functions.lua

This file provides the SQL abstraction layer and server utility functions.

### sqlFetch / sqlInsert

All database reads and writes go through these two functions:

```lua
function sqlFetch(query, data) ... end
function sqlInsert(query, data) ... end
```

The active driver is selected by `Config.sqlDriver`. Override these if you use a custom database resource with a different API.

### GetIdentifier

```lua
function GetIdentifier(player) ... end
```

Returns the player's character identifier via `kq_link`. Override this if your server uses a custom identifier system.

### GetOnlinePoliceCount

```lua
function GetOnlinePoliceCount() ... end
```

Uses `kq_link:GetPlayersWithJob()` with `Config.police.jobNames` to count online officers. Override if you use a custom police/duty system.

---

## server/editable/qb.lua

Contains all server-side framework functions routed through `kq_link`. Despite the filename, this file is **framework-agnostic** — `kq_link` auto-detects your framework.

### Available Functions

| Function | Purpose |
|----------|---------|
| `AddPlayerItem(player, item, amount)` | Add an item to the player's inventory |
| `RemovePlayerItem(player, item, amount)` | Remove an item from inventory |
| `DoesPlayerHaveItem(player, item, amount)` | Check if player has at least `amount` of `item` |
| `CanPlayerCarryItem(player, item, amount)` | Check if player has inventory space |
| `AddMoney(player, amount)` | Add money to player |
| `RemovePlayerMoney(player, amount)` | Remove money from player |
| `CheckPlayerMoney(player, amount)` | Check if player can afford `amount` |
| `IsPolice(player)` | Check if player's job is in `Config.police.jobNames` |

Override any of these if you need custom logic beyond what `kq_link` provides.

---

## server/editable/dispatch.lua

Handles routing police alerts server-side.

When `Config.dispatch.enabled = false`:
- Sends a blip directly to each player whose `IsPolice()` returns `true`

When `Config.dispatch.enabled = true`:
- Forwards the alert to the client-side dispatch handler, which routes to the configured dispatch system

Modify this file if your dispatch system requires a server-side trigger.
