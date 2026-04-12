# Server Security

Database settings, player identifier, and the server-side whitelist that prevents exploitation.

## Database

```lua
Config.sqlDriver = 'mysql'   -- 'mysql' or 'oxmysql'
```

### ESX Inventory Check

```lua
Config.canPlayerCarryAll = false   -- ESX only: require all items to fit before looting
```

## Player Identifier

```lua
Config.alternativeIdentifier = {
    enabled    = true,
    identifier = 'discord',    -- 'license', 'xbl', 'live', 'discord', 'fivem', 'license2'
}
```

## Server Security Config

Located in `server/server.config.lua`:

```lua
Cfg.logs         = true     -- Log item eligibility and rewards to console
Cfg.moneyMax     = 10000    -- Maximum money reward cap

Cfg.allowedItems = {
    'ls_wire_cutters',
    'ls_thermite',
    'ls_card',
    'ls_coke_block',
    'ls_coke_powder',
    'ls_emp_blocker',
    'ls_entrance_key',
    'ls_jewellery',
    'ls_weed_bag',
    'ls_weed_block',
}
```

::: warning
Only list items that are necessary for the heist. This whitelist prevents exploitation by ensuring only valid items can be granted during gameplay.
:::
