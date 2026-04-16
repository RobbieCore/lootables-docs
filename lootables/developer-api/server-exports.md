# Server Exports

Use these exports from any server-side script to control lootables programmatically.

## Export-Based Lootables

These work with boxes that have been given an **export name** via the Export Manager (`/exportlootable`).

### SpawnLootable

Spawn an exportable lootable at specific coordinates.

```lua
exports['rc_lootables']:SpawnLootable(exportName, coords, heading, deleteOnLooted)
```

| Parameter | Type | Description |
|-----------|------|-------------|
| `exportName` | `string` | The export name configured in the export manager |
| `coords` | `vector3` | World position to spawn at |
| `heading` | `number` | Rotation heading (0-360) |
| `deleteOnLooted` | `boolean` | Remove the box after it's been looted |

### ResetLootable

Make an exported lootable available for looting again.

```lua
exports['rc_lootables']:ResetLootable(exportName)
```

### DeleteLootable

Remove a spawned exported lootable from the world.

```lua
exports['rc_lootables']:DeleteLootable(exportName)
```

### ClearSpawnedInstanceById

Remove a specific spawned instance by its ID.

```lua
exports['rc_lootables']:ClearSpawnedInstanceById(instanceId)
```

---

## Direct Box Access

Access boxes directly by their database ID.

### Get by ID

```lua
local crate     = exports['rc_lootables']:GetCrateById(id)
local safe      = exports['rc_lootables']:GetSafeById(id)
local container = exports['rc_lootables']:GetContainerById(id)
```

Returns the box data table or `nil` if not found.

### Create New Safe

Create a new safe and insert it into the database.

```lua
local success, safeId = exports['rc_lootables']:CreateNewSafe({
    box_type_id = 2,           -- 2 = small safe, 3 = big safe
    position = { x = 100.0, y = 200.0, z = 30.0, h = 90.0 },
    model = 'ch_prop_ch_arcade_safe_body',  -- optional, defaults to prop_ld_int_safe_01
    config = {                 -- optional, all fields have defaults
        loot = {},
        required_items = {},
        required_weapons = {},
        reset_time = 60000,
    }
})
```

### Remove by ID

```lua
exports['rc_lootables']:RemoveCrateById(id)
exports['rc_lootables']:RemoveSafeById(id)
exports['rc_lootables']:RemoveContainerById(id)
```

Removes the box from the world and database.

---

## Example: Heist Script Integration

```lua
-- When the heist starts, spawn a vault safe
exports['rc_lootables']:SpawnLootable('bank_vault', vector3(253.1, -688.2, 33.5), 160.0, true)

-- After the heist ends, clean up if not looted
exports['rc_lootables']:DeleteLootable('bank_vault')
```

```lua
-- Repeatable event: spawn a crate, let it reset on its own timer
exports['rc_lootables']:SpawnLootable('drug_crate', vector3(1500.0, 3200.0, 40.0), 90.0, false)
```
