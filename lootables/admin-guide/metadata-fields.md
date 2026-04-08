# Metadata Fields

Metadata fields let you define reusable data schemas that can be attached to loot items. For example: serial numbers, durability values, or weapon quality ratings.

## Open the Metadata Manager

Run `/metadata` in chat (requires `lootables.admin` ACE permission).

## Creating a Field

Click **Add Field** and fill in:

| Field | Description |
|-------|-------------|
| **Field Name** | Internal key name (e.g., `serial_number`, `durability`) |
| **Display Name** | Human-readable label shown in the admin UI |
| **Data Type** | `string`, `number`, or `boolean` |
| **Description** | Optional description of what this field represents |

## Data Types

| Type | Use Case | Example Value |
|------|----------|---------------|
| `string` | Text values | `"SN-48291"` |
| `number` | Numeric values | `85` |
| `boolean` | True/false flags | `true` |

## Using Metadata on Items

Once metadata fields are defined, they become available in the **Item Manager** (`/items`). When editing an item, you can attach metadata fields and set their values.

When a player receives that item as loot, the metadata is included — your inventory system receives the item with the attached key-value data.

## Example: Weapon Serial Numbers

1. Create a metadata field:
   - Field Name: `serial_number`
   - Display Name: `Serial Number`
   - Data Type: `string`

2. Edit a weapon item in `/items` and attach the `serial_number` metadata

3. When a player loots that weapon, it arrives in their inventory with a serial number attached
