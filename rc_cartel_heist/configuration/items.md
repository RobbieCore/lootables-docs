# Items

Item interaction, name remapping, prop spawning, and melee-weapon rules.

## Item Interaction Mode

```lua
Config.useRegisteredItems = false   -- false = interact via [E] or targeting; true = use items from inventory
```

## Item Name Mapping

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

## Prop Spawning

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
