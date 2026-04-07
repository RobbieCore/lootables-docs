# Managing Items

The Item Manager lets you create and manage the master list of loot items available across all boxes.

## Open the Item Manager

Run `/items` in chat (requires `lootables.admin` ACE permission).

## Adding an Item

Click **Add Item** and fill in:

| Field | Description |
|-------|-------------|
| **Item Name** | Must **exactly match** the item name in your inventory system (e.g., `bread`, `lockpick`) |
| **Display Name** | Friendly name shown in the admin UI |
| **Category** | Group items for easier browsing (e.g., "Weapons", "Tools", "Food") |
| **Min Amount** | Default minimum quantity per drop |
| **Max Amount** | Default maximum quantity per drop |
| **Chance** | Default drop chance (0-100) |
| **Prop Model** | GTA prop model name displayed as the 3D loot drop in the world |
| **Metadata** | Optional key-value data attached to the item |

## Important Notes

- The **Item Name** is what gets given to the player's inventory via `kq_link`. It must match your inventory system exactly — a typo here means the item won't be given
- **Min/Max/Chance** are defaults. When you add an item to a specific box, you can override these values per-box
- **Prop Model** determines what 3D object the player sees on the ground after opening a box

## Editing Items

Click on any existing item in the list to edit its properties. Changes apply to the master item definition. Boxes that reference this item will use the updated defaults (unless they have per-box overrides).

## Deleting Items

Remove items you no longer need. Boxes that reference a deleted item will skip it during loot generation.

## Metadata

Items can have metadata fields attached (e.g., serial numbers, durability, weapon quality). See [Metadata Fields](metadata-fields.md) for how to define reusable metadata schemas.
