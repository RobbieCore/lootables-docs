# GlobalState Keys

The script uses FiveM `GlobalState` for cross-client synchronization. Key patterns include:

| Pattern | Purpose |
|---------|---------|
| `blocker_[n]_pickedUp` / `blocker_[n]_busy` | EMP blocker state |
| `wireCutters_pickedUp` / `wireCutters_busy` | Wire cutters state |
| `thermite_pickedUp` / `thermite_busy` | Thermite state |
| `crate_[n]_open` / `crate_[n]_busy` / `crate_[n]_looted` | Crate state |
| `container_[n]_open` / `container_[n]_busy` / `container_[n]_looted` | Container state |
| `table_[n]_looted` | Table state |
| `card_minigame_inProgress` / `card_minigame_success` | Card minigame state |
| `<resourceName>:lights_shutDown` | Lights shutdown state |
| `<resourceName>:emp:hacked` | EMP hack state |

## Exports

This script does not expose any public exports — all cross-resource integration happens via events (see [Server Events](/rc_cartel_heist/developer-api/server-events) and [Client Events](/rc_cartel_heist/developer-api/client-events)) and `GlobalState`.
