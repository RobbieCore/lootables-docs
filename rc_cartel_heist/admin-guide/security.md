# Security Configuration

The `server/server.config.lua` file contains server-side security settings that prevent exploitation.

## Allowed Items Whitelist

Only items listed in `Cfg.allowedItems` can be granted during the heist. If a player attempts to receive an item not on this list, it will be blocked.

## Money Cap

`Cfg.moneyMax` (default `10000`) caps the maximum money reward value from any single loot pickup. This prevents exploits that could grant unreasonable amounts.

## Console Logging

Set `Cfg.logs = true` to log item grants and eligibility checks to the server console for monitoring.

See [Configuration → Server Security](/rc_cartel_heist/configuration/server-security) for the full config block.
