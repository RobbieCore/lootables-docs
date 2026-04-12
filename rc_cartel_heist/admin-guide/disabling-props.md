# Disabling Prop Spawning

If your server manages heist items externally or your anticheat flags the spawned props, disable them individually:

```lua
Config.wireCutters.enabled = false
Config.thermite.enabled    = false
Config.empBlocker.enabled  = false
```

When disabled, the script will not spawn the prop or its associated blip. Players will need to obtain these items through other means (shop, admin grant, crafting, etc.).

See [Configuration → Items](/rc_cartel_heist/configuration/items#prop-spawning) for the full prop-spawning config block.
