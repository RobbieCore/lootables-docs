# Seat Editor

The seat editor is an in-game tool for placing and tuning seat positions visually. It uses a freecam with a 3D click-and-drag gizmo, live preview peds, and exports ready-to-paste config snippets.

## Access requirements

The player must have the `rc_extra_seats.editor` ACE permission, or be in a group that has the `command` ACE (which most admin groups already hold in stock ESX / QBcore / txAdmin setups).

```cfg
# server.cfg
add_ace group.admin rc_extra_seats.editor allow
```

If you don't have permission, pressing N shows an "Access denied" message in chat.

`Config.debugMode.enabled` controls verbose server logging only — it does **not** gate editor access. Admins can use the editor whether debug mode is on or off.

## Opening and closing

| Method | Action |
|---|---|
| **N** (default keybind) | Toggle editor open/close |
| `/seateditor` (chat) | Open editor |
| `/seatedclose` (chat) | Close editor |

When you open the editor, look at (or stand near) the vehicle you want to edit. The editor detects the nearest vehicle via camera raycast and OBB proximity. If no vehicle is found, a chat message prompts you to aim at one.

## Freecam controls

The camera starts in **fly mode** (unfrozen). Use it to get a good viewing angle before switching to edit mode.

| Input | Action |
|---|---|
| Mouse | Look direction |
| W / S | Move forward / backward |
| A / D | Strafe left / right |
| Shift | Move faster |
| Alt | Move slower |
| **F** | Toggle freeze (fly mode ↔ edit mode) |

## Edit mode (frozen freecam)

Press **F** to freeze the camera. The mouse cursor becomes active and the gizmo is interactive.

### Gizmo axes

The gizmo appears at the selected seat's position.

| Color | Axis | Direction |
|---|---|---|
| Red | X | Vehicle right |
| Green | Y | Vehicle forward |
| Blue | Z | Up |
| Yellow ring | Yaw | Seat heading rotation |

Hover over an arrow or the ring — it highlights. Left-click and drag to move the seat along that axis or rotate it.

### Adjust detect radius

While in edit mode (frozen), scroll the **mouse wheel** to grow or shrink the detect radius of the selected seat. The orange circle around the seat shows the current radius.

| Input | Step size |
|---|---|
| Scroll wheel | 0.05 m |
| Shift + scroll wheel | 0.25 m |

### Bone picker

Press **B** to show all bones on the vehicle as magenta dots. Hover over a dot to see its name. Click it to assign that bone to the selected seat.

Press **B** again to hide bones.

## Seat management

These inputs work in both fly mode and edit mode:

| Input | Action |
|---|---|
| **Tab** | Cycle to next seat |
| **Shift + Tab** | Cycle to previous seat |
| **Insert** | Add a seat (copies the selected seat's position as a starting point) |
| **Delete** | Remove the selected seat |
| **Z** | Undo last change (up to 50 steps) |

## Export and broadcast

| Input | Action |
|---|---|
| **]** (right bracket) | Export — opens the NUI panel with a copy-ready config snippet and saves a file to `seat_exports/` on disk |
| **[** (left bracket) | Broadcast — pushes the current seat data to all connected clients immediately |

The **broadcast** is a live update that does not survive a resource restart. Always paste the exported snippet into `config.lua` for a permanent change.

### Exported file location

Files are written to `seat_exports/<MODEL>_<YYYYMMDD_HHMMSS>.lua` inside the resource folder. If the write fails, error code `S001` is printed to the server console.

## Chat fallback commands

These work when the editor is open and are useful for precise numeric input:

| Command | Description |
|---|---|
| `/seatset x\|y\|z <value>` | Set the selected seat's offset component |
| `/seatset yaw\|pitch\|roll <value>` | Set the selected seat's rotation (degrees) |
| `/seatset radius <value>` | Set the selected seat's detect radius (meters) |
| `/seatbone <name>` | Assign a bone by name to the selected seat |
| `/seatgoto <index>` | Jump to seat number `<index>` |

Example: `/seatset z 1.25` moves the selected seat 1.25 m up on its bone's local Z axis.

## Preview peds

When the editor opens, a semi-transparent ped is spawned at each seat position and plays the seated idle animation. Preview peds update in real time as you drag the gizmo — you see exactly how the ped will look before committing anything. They are removed automatically when you close the editor.

If a preview ped fails to load, error codes `C002` (model load failed) or `C003` (animation dict load failed) are printed to the client's F8 console.

## Error codes

| Code | Meaning | Where |
|---|---|---|
| `C001` | Freecam camera creation failed | Client F8 console |
| `C002` | Preview ped model could not be loaded | Client F8 console |
| `C003` | Preview ped animation dictionary failed to load | Client F8 console |
| `S001` | Server could not write the export file to `seat_exports/` | Server console |

Quote these codes when reporting issues.
