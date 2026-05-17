# Client-Side Editable Functions

`client/editable/functions.lua` contains two helper functions called by the core runtime. Override them to integrate with custom systems.

## ShowTooltip

```lua
function ShowTooltip(message, duration)
```

| Parameter | Type | Description |
|---|---|---|
| `message` | `string` | The text to display. May contain GTA color codes (`~r~`, `~g~`, etc.) |
| `duration` | `number` | Duration in milliseconds |

**When called:** When the script needs to show a transient notification to the player — specifically when a seat claim is rejected (seat occupied) or a stand attempt fails.

**Default behavior:** Displays a standard GTA help-text overlay for the given duration.

**Override example** — replace with a framework notification:

```lua
function ShowTooltip(message, duration)
    -- Example: ESX notification
    ESX.ShowNotification(message)
end
```

## GetVehicleLockState

```lua
function GetVehicleLockState(vehicle)
```

| Parameter | Type | Description |
|---|---|---|
| `vehicle` | `number` | The vehicle entity handle |

**Returns:** `true` if the vehicle is considered **unlocked** (prompt allowed), `false` if locked (prompt blocked).

**When called:** Every tick when `Config.doorLock.enabled = true`, to decide whether to show the seat prompt.

**Default behavior:** Returns `true` when the native door lock status is 0 (no locks) or 1 (unlocked).

**Override example** — integrate with a custom lock resource:

```lua
function GetVehicleLockState(vehicle)
    -- Return true = unlocked, false = locked
    return exports['my_vehicle_keys']:isVehicleUnlocked(vehicle)
end
```

::: warning
The function must return `true` for unlocked (prompt visible) and `false` for locked (prompt hidden). This is the opposite of what you might expect — it is "can the player access this vehicle?" not "is the vehicle locked?".
:::
