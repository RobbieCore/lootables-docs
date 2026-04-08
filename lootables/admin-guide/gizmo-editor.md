# Gizmo Editor

The 3D Gizmo editor lets you precisely position and rotate boxes after placement.

## Controls

| Key | Action |
|-----|--------|
| `W` | **Translate** mode — move the box along X/Y/Z axes |
| `R` | **Rotate** mode — rotate the box |
| `Left Alt` | **Snap to ground** — drop the box to the terrain surface |
| `Left Alt` (hold while rotating) | **Snap rotation** — snap to 45-degree increments |
| `Shift + Drag` | **Clone** — duplicate the box at a new position |
| `N` | **Next clone** — cycle through cloned boxes |
| `Delete` | **Delete** — remove the entity |
| `[` / `]` | **Prev / Next** drop prop |
| `M` | **Toggle NUI focus** — interact with the config panel |
| `F` | **Freeze freecam** — lock camera in place |
| `X` | **Exit gizmo** |

All keybinds are registered via FiveM's key mapping system and can be rebound by players in their GTA settings.

## How It Works

- Colored arrows appear on the selected entity (red = X, green = Y, blue = Z)
- Click and drag an arrow to move/rotate along that axis
- The gizmo operates in world space by default

## Tips

- Use **Snap to ground** (`Left Alt`) after positioning to ensure the box sits flush with the terrain
- **Clone** (`Shift + Drag`) is useful for placing multiple boxes of the same type in a row
- You can switch between translate and rotate modes at any time
- The gizmo stays active until you save or close the admin panel

## Loot Drop Positioning

When you add loot items to a box, their drop props can also be positioned using the gizmo. Each loot item's prop position is saved as an offset relative to the parent box, so if you move the box later, the drop positions move with it.
