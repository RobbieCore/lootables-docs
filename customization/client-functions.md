# Client Functions

## client/editable/functions.lua

Client-side utility functions you can override to change interaction behavior.

### CanPlayerDoIt

```lua
function CanPlayerDoIt()
    return true
end
```

Called before showing the interaction prompt. Return `false` to block interaction for the current player. Use this for custom conditions like job checks, events, or status effects.

This is the recommended hook for adding custom client-side gating logic.

### Draw3DText

Renders floating text above a world coordinate. Used for proximity interaction prompts when the target system is disabled. Modify to change the font, scale, or shadow.

### ShowTooltip

Displays an on-screen help text message. Modify to replace the default FiveM help text with your own notification system.

### PlayAnim

Handles requesting, loading, and playing animation dictionaries on the client.

---

## client/editable/dispatch.lua

Handles how dispatch alerts are rendered on the client.

### Default System (no dispatch resource)

When `Config.dispatch.enabled = false`, online police players receive a timed blip on their map and a text notification. The blip is removed after 15 seconds.

### External Dispatch Systems

When `Config.dispatch.enabled = true`, the correct dispatch resource is called based on `Config.dispatch.system`:

| System | Method |
|--------|--------|
| `ps-dispatch` | `exports['ps-dispatch']:CustomAlert(...)` |
| `core-dispatch-old` | `TriggerServerEvent('core_dispatch:addCall', ...)` |
| `core-dispatch-new` | `exports['core_dispach']:addCall(...)` |
| `cd-dispatch` | `TriggerServerEvent('cd_dispatch:AddNotification', ...)` |

### PoliceAlarm / ClearPoliceBlips

These functions create and remove map blips for the built-in dispatch system. Modify `PoliceAlarm` to change blip behavior beyond what the config exposes.
