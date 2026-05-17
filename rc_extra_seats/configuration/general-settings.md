# General Settings

All configuration lives in `config.lua` at the root of the resource. This file is in `escrow_ignore` — you can edit it freely.

## Debug mode

```lua
Config.debugMode = {
    enabled = false
}
```

| Option | Purpose | Default |
|---|---|---|
| `enabled` | Enables verbose `[rc_extra_seats]` audit/debug print output server-side | `false` |

::: tip
Debug mode only controls **logging verbosity**. Editor access is gated separately by ACE permissions (see [Seat Editor — Access requirements](/rc_extra_seats/admin-guide/seat-editor#access-requirements)). Leave this `false` in production for clean console output; flip it `true` temporarily if you need to trace claim/release activity.
:::

## Targeting system

```lua
Config.target = {
    enabled    = true,
    system     = 'ox_target',
    updateTime = 7500
}
```

| Option | Purpose | Default |
|---|---|---|
| `enabled` | Use a targeting system for sit/stand interaction instead of the keypress prompt | `true` |
| `system` | Which targeting resource to use. Accepted values: `'ox_target'`, `'qb-target'`, `'qtarget'` | `'ox_target'` |
| `updateTime` | Milliseconds between target-option refreshes on nearby vehicles. Lower values use more CPU | `7500` |

When `enabled = false`, the script uses a proximity keybind ("Press E to sit") with a GTA help-text prompt. No targeting resource is needed in that mode.

## Door lock gate

```lua
Config.doorLock = {
    enabled = true
}
```

| Option | Purpose | Default |
|---|---|---|
| `enabled` | When `true`, players cannot interact with a seat on a locked vehicle | `true` |

::: tip
The vehicle lock check uses door lock status 0 or 1 (unlocked). Status 2+ (locked) blocks the prompt. If you want seats always available regardless of lock state, set this to `false`.
:::

## Performance mode

```lua
Config.performanceMode = {
    enabled = true
}
```

| Option | Purpose | Default |
|---|---|---|
| `enabled` | When `true`, the attachment loop runs at a reduced tick rate. When `false`, ticks more frequently for smoother aiming animations | `true` |

Leave this `true` unless players report choppy aim animations while seated.

## Collision eject

```lua
Config.accelerationThreshold = 35.0
Config.enableVelocity         = true
```

| Option | Purpose | Default |
|---|---|---|
| `accelerationThreshold` | Speed delta (km/h) between consecutive ticks that triggers a seat eject. Lower = easier to get thrown | `35.0` |
| `enableVelocity` | Whether collision-based ejection is active at all | `true` |

When the vehicle decelerates sharply (crash) or flips upside down, seated players are detached and ragdolled. Set `enableVelocity = false` to disable this entirely.
