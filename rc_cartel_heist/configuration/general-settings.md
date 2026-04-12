# General Settings

Top-level script behaviour, debug helpers, and render settings.

```lua
Config.debug            = false     -- Enable debug commands (/givehitem, /getcoords, /getc, /findprop)
Config.debugModels      = false     -- Print spawned model names to console
Config.showTooltips     = true      -- Show tooltip/error messages (false disables all except interaction prompts)
Config.renderDistance   = 500.0     -- Entity render distance
```

## Interaction Mode

```lua
Config.interactionMode = '3dtext'   -- '3dtext' | 'tooltip' | 'targeting'
```

| Mode | Description |
|------|-------------|
| `3dtext` | 3D floating text above objects with `[E]` prompt |
| `tooltip` | Top-left GTA help text |
| `targeting` | Third-eye targeting system (requires a targeting resource) |

## Timers

```lua
Config.islandResetTime  = 3600000   -- Island full reset timer (ms) — default 1 hour
Config.itemsResetTime   = 900000    -- Items reset timer (ms) — default 15 minutes
Config.resetTimeDelay   = 60000     -- Delay reset when players are on the island (ms)
Config.interiorCooldown = 2000      -- Interior interaction cooldown (ms)
```

## Interior

```lua
Config.doorOpeningSpeed = 0.2   -- Container door speed (0.1 = slow, 1.0 = fast)
```
