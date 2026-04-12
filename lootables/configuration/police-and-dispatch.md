# Police & Dispatch

## Police System

Require a minimum number of police officers to be online before a box can be opened.

```lua
Config.police = {
    enabled      = true,
    jobNames     = { 'police' },
    minCount     = 0,
    notifyPlayer = true,
}
```

| Option | Purpose | Default |
|--------|---------|---------|
| `enabled` | Enable/disable the police count system entirely | `true` |
| `jobNames` | Job names that count as police (must match your server's job names) | `{ 'police' }` |
| `minCount` | Global minimum police required (0 = no requirement) | `0` |
| `notifyPlayer` | Tell the player when there aren't enough police online | `true` |

### Multiple Police Jobs

If your server has multiple police-type jobs:

```lua
Config.police.jobNames = { 'police', 'sheriff', 'highway' }
```

All listed jobs are counted together toward the minimum.

---

## Dispatch System

Alert police when a box is opened.

```lua
Config.dispatch = {
    enabled   = false,
    chance    = 100,
    system    = 'default',
    eventName = 'Box Opened',
    blip = {
        sprite    = 788,
        color     = 75,
        scale     = 1.0,
        alpha     = 1.0,
        timeout   = 60,
        showRadar = true,
    },
}
```

| Option | Purpose | Default |
|--------|---------|---------|
| `enabled` | Enable dispatch alerts when a box is opened | `false` |
| `chance` | Percentage chance (0-100) of triggering an alert | `100` |
| `system` | Which dispatch system to use | `'default'` |
| `eventName` | Alert title shown in the dispatch UI | `'Box Opened'` |

### Blip Settings

| Option | Purpose | Default |
|--------|---------|---------|
| `blip.sprite` | GTA blip sprite ID | `788` |
| `blip.color` | GTA blip color ID | `75` |
| `blip.scale` | Blip size on the map | `1.0` |
| `blip.alpha` | Blip opacity | `1.0` |
| `blip.timeout` | Seconds before the blip disappears | `60` |
| `blip.showRadar` | Flash the blip on the minimap | `true` |

### Supported Dispatch Systems

| `system` Value | Resource | Method |
|----------------|----------|--------|
| `'default'` | Built-in | Sends a blip directly to online police players |
| `'ps-dispatch'` | ps-dispatch | `exports['ps-dispatch']:CustomAlert(...)` |
| `'cd-dispatch'` | cd_dispatch | `TriggerServerEvent('cd_dispatch:AddNotification', ...)` |
| `'core-dispatch-old'` | core_dispatch (older) | `TriggerServerEvent('core_dispatch:addCall', ...)` |
| `'core-dispatch-new'` | core_dispatch (newer) | `exports['core_dispach']:addCall(...)` |

### Additional Dispatch Options

For external dispatch systems, you can also set:

```lua
Config.dispatch.policeCode  = '10-90'
Config.dispatch.description = 'Lootable box has been opened'
```
