# Editable Files Overview

The following files are outside the escrow lock. You can read and modify them freely.

## Files you can edit

| File | Purpose |
|---|---|
| `config.lua` | All configuration options and seat definitions |
| `client/editable/functions.lua` | Client-side helper functions: `ShowTooltip`, `GetVehicleLockState` |
| `client/util/transform.lua` | Matrix math helpers used by the editor and runtime |
| `client/editor.lua` | The full in-game seat editor |
| `server/editor.lua` | Server-side admin gate, broadcast handler, export archival, admin commands |
| `shared/classes.lua` | `Seat`, `VehicleSeatConfig`, `Occupancy` class definitions |
| `locale/locale.lua` | All player-facing UI strings |
| `nui/*` | NUI page (HTML, CSS, JS) for the export panel and toast notifications |

## What you can safely change

- **`config.lua`** — Any setting or seat definition. This is the primary customization surface.
- **`locale/locale.lua`** — UI string text. See [Localization](/rc_extra_seats/customization/localization).
- **`client/editable/functions.lua`** — `ShowTooltip` (how occupied-seat notifications display) and `GetVehicleLockState` (what counts as "locked" — adapt for custom lock systems).
- **`nui/style.css`** — Visual appearance of the export panel and toasts.
- **`client/editor.lua`** — Editor behavior, gizmo appearance, keybind assignments (if you need to remap editor keys beyond what Key Bindings supports).
- **`server/editor.lua`** — ACE check logic, broadcast sanitization limits (e.g. the 64-seat cap per model), export file format.

## What you should not change

- **Seat entry `kind` field values** — `'trunk'` is the only supported type. The field is reserved for future polymorphism.
- **Event names** — The string prefixes like `rc_extra_seats:SetSeatOccupied` are used by both sides of the network. Renaming them on one side without the other breaks occupancy.
- **`shared/classes.lua` class method signatures** — Other resources may call `GetSeatConfigForEntity`, `VehicleRegistry`, or the `Occupancy` methods. Changing signatures breaks those integrations. Adding new methods is safe.
- **The `escrow_ignore` list in `fxmanifest.lua`** — Adding files to it has no effect on your local copy but matters if you redistribution the resource.
