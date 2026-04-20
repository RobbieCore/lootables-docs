# Managing Items

> **v2.1.0 — this changed.** There's no separate master-item table any more. Items come **live from your active inventory** (ox_inventory, qb-inventory, qs-inventory, etc.) via the `kq_link` bridge. The old **Items** tab is now the **Presets** manager.

## How loot items flow

1. When you add a loot entry to a box, the picker autocompletes against your server's registered items — pulled on-demand from `kq_link:GetInventoryItems()`.
2. The box stores the **item name** (e.g. `bread`, `lockpick`) plus per-drop overrides (min / max / chance / prop).
3. At open-time the server generates loot, and `kq_link` gives the items to the player through your inventory.

No manual master list to maintain. If an item exists in your inventory, it shows up in the picker.

## Requirements

- `kq_link` version **≥ 1.22** (the `client-inventory-items` feature — PR #78 on `Kuzkay/kq_link`).
- A supported inventory — ox, qb, ps, qs, codem, tgiann, jaksam, core, origen, chezza, ak47, or the native framework inventory.

If the picker is empty, check `/restart kq_link` and confirm `Link.inventory` is set correctly in `kq_link/config.lua`.

## Presets (the Items tab)

Open the admin panel (`/lootables`) and switch to the **Items** tab. Presets are admin-curated overlays keyed by item name — reusable defaults so you don't have to re-enter min/max/chance/prop for the same item across many boxes.

Each preset has:

| Field | Description |
|-------|-------------|
| **Preset name** | A label for your own reference (e.g. "Kitchen bread roll") |
| **Item name** | The inventory item this preset overlays (autocompleted from the picker) |
| **Min / Max** | Default quantity range when you drop this preset into a box |
| **Chance** | Default drop chance (1–100) |
| **Prop model** | Default world prop shown when the item drops |
| **Prop offset / rotation** | Default placement relative to the box |
| **Metadata** | Optional key/value overlay (see [Metadata Fields](metadata-fields.md)) |

### Using a preset in a box

In the Editor tab, click **Add loot item**. The row has two sources: **Inventory** (live autocomplete) or **Preset** (your saved overlays). Pick a preset → its defaults populate the row instantly. You can still override any field per-box.

## Icons

Item icons come from the inventory's own image directory via `kq_link:GetInventoryImagePath()` — returns `(path, format)`, e.g. `('nui://ox_inventory/web/images/', 'png')`. The admin NUI stitches that with `item.image` (or falls back to `<name>.<format>`) to render icons without touching your server assets.

If `GetInventoryImagePath()` returns an empty string for your inventory (unverified paths on paid packs like ak47 / core / origen), icons won't render but everything else still works. You can patch the path in `kq_link/links/inventories/<inv>/client.lua` on your install.

## Migrating from 2.0.x

The `rc_lootable_items` table is dropped automatically on first 2.1.0 boot. If you had custom presets-style data in the old items table, the migration preserves what it can into `rc_lootable_presets`.

Item rows on existing boxes continue to work — they were already keyed by item name, not by a foreign-key ID.
