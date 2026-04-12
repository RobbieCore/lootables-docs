# Police & Dispatch

Minimum police requirements and dispatch system integration.

## Police

```lua
Config.police = {
    jobNames    = { 'police' },   -- Job names that count as police
    onlineCount = 1,              -- Minimum police online to start the heist
}
```

Add additional job names if your server uses custom police jobs. Set `onlineCount = 0` to disable the requirement.

## Dispatch

```lua
Config.dispatch = {
    option    = 'container',    -- When to trigger: 'beach', 'interior', or 'container'
    enabled   = false,
    system    = 'default',      -- 'default', 'ps-dispatch', 'cd-dispatch', 'core-dispatch-old', 'core-dispatch-new'
    eventName = 'Cartel Robbed',
    blip = {
        sprite    = 788,
        color     = 75,
        scale     = 1.0,
        alpha     = 1.0,
        timeout   = 60,         -- Blip duration in seconds
        showRadar = true,
    },
}
```

### Supported Dispatch Systems

| System | Value |
|--------|-------|
| Built-in (notification) | `'default'` |
| ps-dispatch | `'ps-dispatch'` |
| cd_dispatch | `'cd-dispatch'` |
| core_dispatch (old API) | `'core-dispatch-old'` |
| core_dispatch (new API) | `'core-dispatch-new'` |

The dispatch integration code lives in `client/editable/policeAlert.lua` and can be extended for additional systems — see [Customization → Dispatch integration](/rc_cartel_heist/customization/dispatch-integration).
