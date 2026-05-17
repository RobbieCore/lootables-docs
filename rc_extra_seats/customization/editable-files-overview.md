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
| `locale/locale.lua` | All player-facing UI strings |
| `nui/*` | NUI page (HTML, CSS, JS) for the export panel and toast notifications |

## Files you cannot edit

| File | Why escrowed |
|---|---|
| `shared/classes.lua` | Core class layer (`Seat`, `VehicleSeatConfig`, `Occupancy`). These define the wire protocol between client and server and the JSON-encoded statebag format. Off-spec edits corrupt occupancy. The classes remain **callable as globals** from other resources — see the [Developer API](/rc_extra_seats/developer-api/server-exports#shared-globals-available-on-both-sides). |
| `client/client.lua`, `client/functions.lua`, `server/server.lua`, `fxmanifest.lua` | Core runtime. Use the editable files above for any customization. |

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
- **The shared class globals** (`Seat`, `VehicleSeatConfig`, `Occupancy`, `VehicleRegistry`, `GetSeatConfigForEntity`) — these are escrowed but exposed as globals. Other resources may call them — see the [Developer API](/rc_extra_seats/developer-api/server-exports). Don't try to monkey-patch their methods.
