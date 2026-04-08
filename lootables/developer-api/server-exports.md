# Server Exports

Use these exports from any server-side script to control lootables programmatically.

## Export-Based Lootables

These work with boxes that have been given an **export name** via the Export Manager (`/exportlootable`).

### SpawnLootable

Spawn an exportable lootable at specific coordinates.

```lua
exports['ls_lootables']:SpawnLootable(exportName, coords, heading, deleteOnLooted)
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
exports['ls_lootables']:ResetLootable(exportName)
```

### DeleteLootable

Remove a spawned exported lootable from the world.

```lua
exports['ls_lootables']:DeleteLootable(exportName)
```

### ClearSpawnedInstanceById

Remove a specific spawned instance by its ID.

```lua
exports['ls_lootables']:ClearSpawnedInstanceById(instanceId)
```

---

## Direct Box Access

Access boxes directly by their database ID.

### Get by ID

```lua
local crate     = exports['ls_lootables']:GetCrateById(id)
local safe      = exports['ls_lootables']:GetSafeById(id)
local container = exports['ls_lootables']:GetContainerById(id)
```

Returns the box data table or `nil` if not found.

### Remove by ID

```lua
exports['ls_lootables']:RemoveCrateById(id)
exports['ls_lootables']:RemoveSafeById(id)
exports['ls_lootables']:RemoveContainerById(id)
```

Removes the box from the world and database.

---

## Example: Heist Script Integration

```lua
-- When the heist starts, spawn a vault safe
exports['ls_lootables']:SpawnLootable('bank_vault', vector3(253.1, -688.2, 33.5), 160.0, true)

-- After the heist ends, clean up if not looted
exports['ls_lootables']:DeleteLootable('bank_vault')
```

```lua
-- Repeatable event: spawn a crate, let it reset on its own timer
exports['ls_lootables']:SpawnLootable('drug_crate', vector3(1500.0, 3200.0, 40.0), 90.0, false)
```
