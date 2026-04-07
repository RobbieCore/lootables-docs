# Box Types

`Config.boxTypes` defines every spawnable box type. Each entry is one box type with its own model, minigame, and behavior.

## Structure

```lua
Config.boxTypes = {
    {
        id            = 1,
        box_type      = 'crate',
        sub_type      = 'standard',
        display_name  = 'Wooden Crate',
        default_model = 'prop_ld_crate_01',
        loadDistance   = 100.0,
        parts         = { ... },
        opening       = { ... },
    },
    -- more box types...
}
```

| Field | Purpose |
|-------|---------|
| `id` | Unique numeric ID. Links to `box_type_id` in the database. **Never change IDs for existing types** |
| `box_type` | Category: `'crate'`, `'safe'`, or `'container'`. Determines which minigame and handler is used |
| `sub_type` | Variant within the category: `'standard'`, `'small'`, `'big'`, `'shipping'` |
| `display_name` | Name shown in the admin UI when selecting box types |
| `default_model` | GTA prop model used as the default when placing via admin tool |
| `loadDistance` | Distance (meters) at which the box spawns for nearby players |

## Default Box Types

| ID | Type | Sub-type | Minigame | Model |
|----|------|----------|----------|-------|
| 1 | `crate` | `standard` | A/D key alternation (20 presses) | `prop_ld_crate_01` |
| 2 | `safe` | `small` | Dial rotation (match 3 numbers) | `ch_prop_ch_arcade_safe_body` |
| 3 | `safe` | `big` | Dial rotation (match 3 numbers) | `bkr_prop_biker_safebody_01a` |
| 4 | `container` | `shipping` | Thermite burn (15s timer) | `prop_container_04mb` |

## Parts

Each box type has a `parts` table defining the prop models and their relative positions.

```lua
parts = {
    main = {
        model  = 'prop_ld_crate_01',
        offset = { x = 0.0, y = 0.0, z = -1.0, h = 270.0 }
    },
    top = {
        model    = 'prop_ld_crate_lid_01',
        offset   = { x = 0.0, y = 0.0, z = 0.56 },
        rotation = { x = 0.0, y = 0.0, z = 0.0 }
    }
}
```

- `offset` — position relative to the stored world coordinates. `h` is heading (yaw) offset in degrees
- `rotation` — additional pitch/roll/yaw applied on top of the offset

## Type-Specific Settings

### Crates — `opening`

```lua
opening = {
    tool = { dict = 'anim_dict', anim = 'anim_name' },
    grab = { dict = 'anim_dict', anim = 'anim_name' },
}
```

- `tool` — animation played when cracking the crate
- `grab` — animation played when picking up loot

### Safes — `lock` and `drop`

```lua
lock = {
    offset  = { x = -0.35, y = -0.05, z = 0.415 },
    outline = { r = 255, g = 255, b = 255, a = 100 }
}
drop = { offset = { x = -0.3, y = 0.4, z = 0.5 } }
```

- `lock.offset` — dial interaction point relative to the safe body
- `lock.outline` — highlight color when near the lock (RGBA)
- `drop.offset` — where loot props spawn relative to the safe

### Containers — `thermite`

```lua
thermite = {
    particleDict = 'scr_ch_finale',
    particleName = 'scr_ch_finale_thermal_burn',
    duration     = 15000,
    outline      = { r = 255, g = 255, b = 255, a = 100 }
}
```

- `duration` — thermite burn time in milliseconds (this is the minigame timer)
- `particleDict` / `particleName` — GTA particle effect for the burn animation

## Adding a New Box Type

1. Add a new entry to `Config.boxTypes` with a **unique `id`** that has never been used
2. Set `box_type` to `'crate'`, `'safe'`, or `'container'` — this determines which minigame and client handler runs
3. Add the appropriate `parts` layout for that category
4. Restart the resource — the new type appears in the admin placement UI automatically

> **Warning:** Never reuse or reassign IDs from deleted box types. The ID is stored per-box in the database.
