# Gizmo Editor

The 3D Gizmo editor lets you precisely position and rotate boxes after placement.

## Controls

| Key | Action |
|-----|--------|
| `T` | **Translate** mode — move the box along X/Y/Z axes |
| `R` | **Rotate** mode — rotate the box |
| `Shift + Drag` | **Clone** — duplicate the box at a new position |
| `G` | **Snap to ground** — drop the box to the terrain surface |
| `Delete` | **Delete** — remove the entity |

## How It Works

- Colored arrows appear on the selected entity (red = X, green = Y, blue = Z)
- Click and drag an arrow to move/rotate along that axis
- The gizmo operates in world space by default

## Tips

- Use **Snap to ground** (`G`) after positioning to ensure the box sits flush with the terrain
- **Clone** (`Shift + Drag`) is useful for placing multiple boxes of the same type in a row
- You can switch between translate and rotate modes at any time
- The gizmo stays active until you save or close the admin panel

## Loot Drop Positioning

When you add loot items to a box, their drop props can also be positioned using the gizmo. Each loot item's prop position is saved as an offset relative to the parent box, so if you move the box later, the drop positions move with it.
