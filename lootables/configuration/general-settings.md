# General Settings

All configuration lives in `config.lua`. Both server and client scripts load this file, so changes affect both sides. Restart the resource after editing.

## Debug & Logging

```lua
Config.debug = false
Config.logs  = false
```

| Option | Purpose | Default |
|--------|---------|---------|
| `Config.debug` | Enable debug output in server/client console | `false` |
| `Config.logs` | Enable logging | `false` |

## SQL Driver

```lua
Config.sqlDriver = "mysql"
```

| Value | Uses |
|-------|------|
| `"mysql"` | `mysql-async` (`MySQL.Sync.*`) |
| `"oxmysql"` | `oxmysql` (`exports.oxmysql:query_async`) |
| `"<resource>"` | Any resource that exposes `executeSync` (custom drivers) |

The driver name must match the resource started in your `server.cfg`. Ensure it starts **before** `ls_lootables`.

## Interaction

```lua
Config.interactionDistance   = 2.0
Config.showLootNotifications = true
Config.showCooldownMessages  = true
Config.removeRequiredItems   = true
```

| Option | Purpose | Default |
|--------|---------|---------|
| `interactionDistance` | How close (meters) a player must be to see the prompt and interact | `2.0` |
| `showLootNotifications` | Show a toast notification when an item is picked up | `true` |
| `showCooldownMessages` | Show remaining time when a box is on cooldown | `true` |
| `removeRequiredItems` | Consume required items from inventory when the box is opened | `true` |

## Player Visibility

```lua
Config.invisible = {
    enabled = false,
    alpha   = 50,
}
```

When `enabled = true`, the player becomes semi-transparent while a box is open.

| Option | Purpose | Default |
|--------|---------|---------|
| `enabled` | Toggle player invisibility while looting | `false` |
| `alpha` | Transparency level (0 = invisible, 255 = fully visible) | `50` |

## Drop Props

```lua
Config.dropProps = {
    freeze      = true,
    collision   = true,
    spawnRadius = 2.0,
}
```

Controls how loot item props behave when spawned after opening a box.

| Option | Purpose | Default |
|--------|---------|---------|
| `freeze` | Prevent props from falling due to physics | `true` |
| `collision` | Enable collision for spawned loot props | `true` |
| `spawnRadius` | Max distance from the box (meters) where props appear | `2.0` |
