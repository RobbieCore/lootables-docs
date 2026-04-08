# First Box Setup

A quick walkthrough to place your first lootable box after installation.

## 1. Enter placement mode

Run `/placebox` in chat. You need the `lootables.admin` ACE permission.

## 2. Choose "Create New"

A selection panel appears. Click **Create New** to start placing a fresh box.

## 3. Position the box

You enter **freecam mode**:

- Use `WASD` to fly around the map
- Press `Q` to cycle through box types (Crate, Small Safe, Big Safe, Shipping Container)
- A preview of the selected box follows your camera
- Press `Numpad Enter` to confirm the position

## 4. Fine-tune with the Gizmo

After confirming, the **3D Gizmo editor** appears:

- `W` — Translate (move) mode
- `R` — Rotate mode
- `Left Alt` — Snap to ground
- Drag the colored arrows to move along each axis

## 5. Configure the box

The configuration panel opens on the right side of your screen:

- **Display Name** — A friendly name for this box (shown in admin panel only)
- **Loot Items** — Click "Add Item" to add drops. Set each item's chance (0-100), min/max amount
- **Required Items** — Items the player must have to open the box (optionally consumed)
- **Required Weapons** — Weapons the player must be holding
- **Min Police** — Minimum police online to allow opening (0 = no requirement)
- **Reset Time** — How long (in milliseconds) before the box can be looted again

## 6. Save

Click **Save**. The box is now live — players within range can interact with it immediately.

## Verify it works

1. Walk up to the box as a non-admin player (or remove your admin permissions temporarily)
2. You should see the interaction prompt within 2 meters (default `Config.interactionDistance`)
3. Press `E` to start the minigame
4. Complete the minigame to receive loot

If the box doesn't appear, check that it's **enabled** and that `is_exportable` is not set (exportable boxes require a script to spawn them).
