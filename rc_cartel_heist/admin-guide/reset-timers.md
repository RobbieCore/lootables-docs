# Reset Timers

The heist has two independent reset timers:

| Timer | Config Key | Default | Description |
|-------|------------|---------|-------------|
| Island reset | `Config.islandResetTime` | 3,600,000 ms (1 hour) | Full island reset: NPCs, containers, crates, doors, and all state |
| Items reset | `Config.itemsResetTime` | 900,000 ms (15 min) | Resets pickup items: wire cutters, thermite, EMP blockers, key, card |

If players are currently on the island, the reset is delayed by `Config.resetTimeDelay` (default 60,000 ms).
