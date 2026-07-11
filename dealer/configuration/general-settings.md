# General Settings

All client-side and shared settings live in `config.lua`. This file is loaded by both server and client and is listed in `escrow_ignore`, so it remains editable after an escrow build. Restart the resource after editing.

## Debug

```lua
Config.debug = false
```

| Option | Purpose | Default |
|--------|---------|---------|
| `Config.debug` | Enable verbose debug output in the server and client console. | `false` |

## Language

```lua
Config.locale = 'en'
```

| Option | Purpose | Default |
|--------|---------|---------|
| `Config.locale` | Language code for all notifications, dealer texts, and the burner interface. Unknown codes fall back to English. | `'en'` |

See [Localization](../customization/localization.md) for the full language list and how to add a translation.

## Opening the Burner

Three independent ways to open the burner phone — enable any combination.

```lua
Config.openCommand = 'burner'   -- /burner; set false to disable
Config.openKeybind = false      -- e.g. 'F7'; set false to disable
Config.useItem     = false      -- e.g. 'burner_phone'; registers a usable item via kq_link
```

| Option | Purpose | Default |
|--------|---------|---------|
| `Config.openCommand` | Chat command that opens the burner. Set to `false` to disable. | `'burner'` |
| `Config.openKeybind` | Key binding that opens the burner (FiveM key-mapping menu). Set to `false` to disable. | `false` |
| `Config.useItem` | Inventory item name that opens the burner when used. Requires the item to exist in `ox_inventory`. Set to `false` to disable. | `false` |

::: tip
At least one of the three should be active. All three can be enabled simultaneously.
:::

## Evidence Note Item

```lua
Config.noteItem = 'rc_note'
```

| Option | Purpose | Default |
|--------|---------|---------|
| `Config.noteItem` | The inventory item cops must carry to frisk or interrogate dealers. Intel from interrogation is written into its metadata; using it opens the case report. Must exist in `ox_inventory`. | `'rc_note'` |

## Phone App Icon

```lua
Config.phoneIcon = false   -- e.g. 'https://your.cdn/icon.png'
```

| Option | Purpose | Default |
|--------|---------|---------|
| `Config.phoneIcon` | Custom icon URL for the burner app when using `rc_phonelink`. Set to `false` to use the built-in icon. | `false` |

## Dealer Streaming Distance

```lua
Config.spawnDistance  = 120.0
Config.walkInDistance = 30.0
Config.returnHomeDist = 6.0
```

| Option | Purpose | Default |
|--------|---------|---------|
| `Config.spawnDistance` | Metres from a working dealer's corner at which their ped is streamed in for nearby clients. Lower this if many active dealers cause client load issues. | `120.0` |
| `Config.walkInDistance` | If a dealer is already spawned within this distance of a newly assigned sell spot, they walk there instead of despawning and respawning. | `30.0` |
| `Config.returnHomeDist` | How far a non-route dealer may drift from their home spot before the AI walks them back (e.g. after fleeing a cop). | `6.0` |

## Dealer Health

```lua
Config.dealerHealth = { max = 400, armour = 50 }
```

| Option | Purpose | Default |
|--------|---------|---------|
| `max` | Maximum health for dealer peds. Higher than a standard ped so stray damage doesn't instantly drop them. | `400` |
| `armour` | Starting armour for dealer peds. | `50` |

## Flee Break-Contact

```lua
Config.fleeBreakContact = { seeRadius = 45.0, seconds = 4 }
```

| Option | Purpose | Default |
|--------|---------|---------|
| `seeRadius` | Metres used to check whether any cop is still nearby while a dealer is fleeing. | `45.0` |
| `seconds` | Seconds with no cop inside `seeRadius` before the dealer stops running and lays low. | `4` |

A fleeing dealer who loses the police under this condition transitions to a lay-low state — heat cools, they go quiet — rather than loitering in a fled state until the slow background tick.

## Burner Distance Refresh

```lua
Config.distance = { refreshMs = 1000 }
```

| Option | Purpose | Default |
|--------|---------|---------|
| `refreshMs` | How often (milliseconds) the burner interface updates dealer distance display while the app is open. | `1000` |
