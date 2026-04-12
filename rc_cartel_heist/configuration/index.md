# Configuration

All configuration is done in two files: `config.lua` (gameplay settings) and `server/server.config.lua` (server-side security).

## General Settings

```lua
Config.debug            = false     -- Enable debug commands (/givehitem, /getcoords, /getc, /findprop)
Config.debugModels      = false     -- Print spawned model names to console
Config.showTooltips     = true      -- Show tooltip/error messages (false disables all except interaction prompts)
Config.renderDistance   = 500.0     -- Entity render distance
```

## NPC Settings

```lua
Config.npcShoot      = true             -- NPCs shoot at players
Config.npcShootRange = 50.0             -- Engagement range (max 300.0)
Config.npcWeapon     = 'WEAPON_MICROSMG' -- Weapon model
Config.npcAccuracy   = 100              -- Accuracy 0-100 (100 = perfectly accurate)
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

## Bunker Entrance Conditions

Control which tasks must be completed before players can enter the underground bunker:

```lua
Config.bunkerEntrance = {
    conditions = {
        hackedEMP               = true,  -- All EMPs must be hacked
        electricityDone         = true,  -- Electricity minigame completed
        outsideContainersLooted = true,  -- Outside containers looted
    }
}
```

## Items

### Item Interaction Mode

```lua
Config.useRegisteredItems = false   -- false = interact via [E] or targeting; true = use items from inventory
```

### Item Name Mapping

If your server uses different item names, change the right-side values:

```lua
Config.usedItems = {
    ['ls_entrance_key'] = 'ls_entrance_key',
    ['ls_emp_blocker']  = 'ls_emp_blocker',
    ['ls_wire_cutters'] = 'ls_wire_cutters',
    ['ls_thermite']     = 'ls_thermite',
    ['ls_card']         = 'ls_card',
}
```

### Prop Spawning

Disable prop spawning entirely if you manage these items externally (e.g. to avoid anticheat false positives):

```lua
Config.wireCutters = {
    enabled = true,     -- Set to false to disable wire cutters prop spawning
    -- ...
}

Config.thermite = {
    enabled = true,     -- Set to false to disable thermite prop spawning
    -- ...
}

Config.empBlocker = {
    enabled = true,     -- Set to false to disable EMP blocker prop spawning
    amountToSpawn = 4,  -- Number of EMP blockers to spawn
    -- ...
}
```

## Timers

```lua
Config.islandResetTime  = 3600000   -- Island full reset timer (ms) — default 1 hour
Config.itemsResetTime   = 900000    -- Items reset timer (ms) — default 15 minutes
Config.resetTimeDelay   = 60000     -- Delay reset when players are on the island (ms)
Config.interiorCooldown = 2000      -- Interior interaction cooldown (ms)
```

## Island Settings

```lua
Config.boatModel         = 'dinghy5'   -- Boat model for travel to island
Config.helicopterSpawn   = true        -- Spawn a helicopter on the island
Config.helicopterRockets = true        -- Helicopter has rockets
Config.helicopterModel   = 'buzzard'   -- Helicopter model
Config.freezeDrop        = false       -- Freeze loot props (for models without collision)
```

## Police

```lua
Config.police = {
    jobNames    = { 'police' },   -- Job names that count as police
    onlineCount = 1,              -- Minimum police online to start the heist
}
```

## Buyer

```lua
Config.buyer = {
    blip = {
        enabled = true,
        sprite  = 207,
        color   = 81,
        alpha   = 255,
        scale   = 1.0,
    },
    ped     = true,                     -- Spawn buyer NPC
    model   = "A_M_M_KTown_01",        -- Buyer ped model
    marker  = false,                    -- Show a marker at buyer location
    location = {
        x = 2525.48, y = 4980.82, z = 44.85, heading = 57.77
    },
}
```

### Sell Prices

Prices are randomized within a range each reset:

```lua
Config.itemPrice = {
    ['ls_weed_block']  = math.random(250, 500),
    ['ls_weed_bag']    = math.random(100, 250),
    ['ls_coke_block']  = math.random(1000, 2500),
    ['ls_coke_powder'] = math.random(250, 500),
    ['ls_jewellery']   = math.random(1000, 1500),
}
```

## Dispatch

```lua
Config.dispatch = {
    option    = 'container',    -- When to trigger: 'beach', 'interior', or 'container'
    enabled   = false,
    system    = 'default',      -- 'default', 'ps-dispatch', 'cd-dispatch', 'core-dispatch-old', 'core-dispatch-new'
    eventName = 'Cartel Robbed',
    blip = {
        sprite    = 788,
        color     = 75,
        scale     = 1.0,
        alpha     = 1.0,
        timeout   = 60,         -- Blip duration in seconds
        showRadar = true,
    },
}
```

## Melee Weapons

Allowed melee weapons for opening crates faster:

```lua
Config.meleeWeapon = {
    allowed = {
        'weapon_hatchet',
        'weapon_battleaxe',
        'weapon_crowbar',
    }
}
```

### Crate Opening Speed

```lua
Config.crateOpening = {
    tool = {
        time = 1500,    -- ms (minimum 1500)
    },
    unarmed = {
        time = 30000,   -- ms
    },
}
```

## Interior

```lua
Config.doorOpeningSpeed = 0.2   -- Container door speed (0.1 = slow, 1.0 = fast)
```

## Player Identifier

```lua
Config.alternativeIdentifier = {
    enabled    = true,
    identifier = 'discord',    -- 'license', 'xbl', 'live', 'discord', 'fivem', 'license2'
}
```

## Database

```lua
Config.sqlDriver = 'mysql'   -- 'mysql' or 'oxmysql'
```

### ESX Inventory Check

```lua
Config.canPlayerCarryAll = false   -- ESX only: require all items to fit before looting
```

## Server Security Config

Located in `server/server.config.lua`:

```lua
Cfg.logs         = true     -- Log item eligibility and rewards to console
Cfg.moneyMax     = 10000    -- Maximum money reward cap

Cfg.allowedItems = {
    'ls_wire_cutters',
    'ls_thermite',
    'ls_card',
    'ls_coke_block',
    'ls_coke_powder',
    'ls_emp_blocker',
    'ls_entrance_key',
    'ls_jewellery',
    'ls_weed_bag',
    'ls_weed_block',
}
```

::: warning
Only list items that are necessary for the heist. This whitelist prevents exploitation by ensuring only valid items can be granted during gameplay.
:::
