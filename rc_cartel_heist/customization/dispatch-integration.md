# Dispatch Integration

The script supports multiple dispatch systems. Configure in `config.lua`:

```lua
Config.dispatch = {
    enabled = true,
    system  = 'ps-dispatch',  -- See options below
}
```

| System | Value |
|--------|-------|
| Built-in (notification) | `'default'` |
| ps-dispatch | `'ps-dispatch'` |
| cd_dispatch | `'cd-dispatch'` |
| core_dispatch (old API) | `'core-dispatch-old'` |
| core_dispatch (new API) | `'core-dispatch-new'` |

The dispatch integration code is in `client/editable/policeAlert.lua` and can be modified to support additional systems.
