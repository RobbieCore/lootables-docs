# Admin Guide

## Commands

### Debug Commands

These commands are only available when `Config.debug = true`:

| Command | Description |
|---------|-------------|
| `/givehitem [item] [amount]` | Give a heist item to yourself |
| `/getcoords` | Get island-offset coordinates (for NPC placement in config) |
| `/getc` | Get plain world coordinates and heading |
| `/findprop [model] [distance]` | Find a prop model within a given distance (default 10 units) |

### Always Available

| Command | Context | Description |
|---------|---------|-------------|
| `/testDuiState` | Client | Toggle DUI render state |
| `/openc [key]` | Server | Force-open a container or crate by key index |

## Reset Timers

The heist has two independent reset timers:

| Timer | Config Key | Default | Description |
|-------|------------|---------|-------------|
| Island reset | `Config.islandResetTime` | 3,600,000 ms (1 hour) | Full island reset: NPCs, containers, crates, doors, and all state |
| Items reset | `Config.itemsResetTime` | 900,000 ms (15 min) | Resets pickup items: wire cutters, thermite, EMP blockers, key, card |

If players are currently on the island, the reset is delayed by `Config.resetTimeDelay` (default 60,000 ms).

## Security Configuration

The `server/server.config.lua` file contains server-side security settings that prevent exploitation:

### Allowed Items Whitelist

Only items listed in `Cfg.allowedItems` can be granted during the heist. If a player attempts to receive an item not on this list, it will be blocked.

### Money Cap

`Cfg.moneyMax` (default `10000`) caps the maximum money reward value from any single loot pickup. This prevents exploits that could grant unreasonable amounts.

### Console Logging

Set `Cfg.logs = true` to log item grants and eligibility checks to the server console for monitoring.

## Police Requirements

The heist requires a minimum number of police officers online before players can start:

```lua
Config.police = {
    jobNames    = { 'police' },
    onlineCount = 1,
}
```

Add additional job names if your server uses custom police jobs.

## Bunker Access Conditions

Control the required steps before the underground bunker entrance opens:

```lua
Config.bunkerEntrance = {
    conditions = {
        hackedEMP               = true,
        electricityDone         = true,
        outsideContainersLooted = true,
    }
}
```

Set any condition to `false` to skip that requirement.

## Disabling Prop Spawning

If your server manages heist items externally or your anticheat flags the spawned props, disable them individually:

```lua
Config.wireCutters.enabled = false
Config.thermite.enabled    = false
Config.empBlocker.enabled  = false
```

When disabled, the script will not spawn the prop or its associated blip. Players will need to obtain these items through other means.

## Adding NPC Locations

Use the debug commands to get coordinates for placing new NPCs:

- **Island NPCs** (outdoor): Use `/getcoords` — returns island-offset coordinates
- **Interior NPCs** (underground): Use `/getc` — returns plain world coordinates

Paste the output into the appropriate config section:
- `Config.cartelIslandNPC.coords` for island guards
- `Config.cartelBackupNPC.coords` for backup NPCs
- `Config.cartelInteriorNPC.coords` for interior NPCs
- `Config.boatNPC.coords` for boat patrol NPCs
