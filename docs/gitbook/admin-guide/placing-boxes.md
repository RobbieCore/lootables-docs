# Placing Boxes

## Enter Placement Mode

Run `/placebox` in chat (requires `lootables.admin` ACE permission).

A selection panel appears with two options:
- **Create New** — place a brand new box
- **Manage Existing** — navigate to and edit existing boxes

## Creating a New Box

1. Click **Create New**
2. You enter **freecam mode** — fly around with `WASD` and mouse
3. Press `TAB` to cycle through box types (Crate, Small Safe, Big Safe, Shipping Container)
4. A ghost preview of the selected box follows your camera position
5. Aim at the desired location and press `H` to confirm

After confirming:
- The **3D Gizmo editor** appears for fine-tuning (see [Gizmo Editor](gizmo-editor.md))
- The **configuration panel** opens on the right side of your screen

## Configuring a Box

The configuration panel lets you set:

| Field | Description |
|-------|-------------|
| **Display Name** | A friendly name (admin-only, not shown to players) |
| **Loot Items** | Add items with per-item chance (0-100) and min/max amounts |
| **Required Items** | Items the player must have to open the box |
| **Required Weapons** | Weapons the player must be holding |
| **Min Police** | Minimum police online (0 = no requirement) |
| **Reset Time** | Milliseconds before the box can be looted again |

## Saving

- Click **Save** to save a single box
- Click **Save All** to batch-save all boxes you've placed or modified

After saving, the admin preview entities are cleaned up and replaced with proper spawned entities visible to all players.

## Managing Existing Boxes

1. Run `/placebox` and select **Manage Existing**
2. Use `[` and `]` keys to navigate between existing boxes
3. The camera teleports to each box, showing its current configuration
4. Edit any settings in the side panel
5. Click **Save All** to apply changes
