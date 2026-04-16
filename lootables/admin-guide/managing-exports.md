# Managing Exports

Exports let other scripts control lootable boxes programmatically — spawning, resetting, or deleting them via server-side exports.

## Open the Export Manager

Run `/exportlootable` in chat (requires `lootables.admin` ACE permission).

## Creating an Export

1. Select an existing lootable box from the list
2. Give it a unique **Export Name** (e.g., `bank_vault_safe`, `warehouse_crate_01`)
3. Configure options:
   - **Has Delete Export** — allow other scripts to delete this box
   - **Has Reset Export** — allow other scripts to reset (re-loot) this box
   - **Reset Time (ms)** — override reset time when spawned via export
   - **Delete on Looted** — automatically remove the box after it's been looted

4. Click **Save**

## How Exports Work

When a box has an export, it becomes **exportable** — it won't spawn automatically for players. Instead, another script must call the spawn export to create it.

The box's `is_exportable` flag is set to `1` in the database. This means:
- The box **will not** appear in the world by default
- It must be spawned by calling the export from another script
- Once spawned, players interact with it normally

## Using Exports in Other Scripts

After creating an export named `bank_vault`, you can use it from any server-side script:

```lua
-- Spawn the lootable at specific coordinates
exports['rc_lootables']:SpawnLootable('bank_vault', vector3(x, y, z), heading, deleteOnLooted)

-- Reset it (make it lootable again)
exports['rc_lootables']:ResetLootable('bank_vault')

-- Delete it from the world
exports['rc_lootables']:DeleteLootable('bank_vault')
```

See [Server Exports](../developer-api/server-exports.md) for the full API reference.
