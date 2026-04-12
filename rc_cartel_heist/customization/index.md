# Customization

The following files are escrow-ignored and fully editable.

## Editable Files

| File | Purpose |
|------|---------|
| `config.lua` | All gameplay configuration |
| `server/server.config.lua` | Server-side security (allowed items, money cap) |
| `client/editable/functions.lua` | 3D text rendering, HUD helpers, animation utilities |
| `client/editable/esx.lua` | ESX client-side framework initialization |
| `client/editable/qb.lua` | QBCore client-side framework initialization |
| `client/editable/policeAlert.lua` | Dispatch system integration and police blips |
| `server/editable/functions.lua` | SQL driver abstraction, player identifier, utilities |
| `server/editable/esx.lua` | ESX server-side framework initialization |
| `server/editable/qb.lua` | QBCore server-side framework initialization |
| `server/editable/policeAlert.lua` | Server-side police alert trigger |
| `locale/locale.lua` | All translatable strings |

## Locale

All player-facing text is in `locale/locale.lua`. The file uses a flat table with dot-separated keys:

```lua
Locale = {
    ['error.inventory_full']      = '~r~Not enough space in your inventory',
    ['prompt.pickup_emp']         = 'Press ~g~[~w~E~g~]~w~ to pick up EMP',
    ['label.wire_cutters']        = 'Wire Cutters',
    ['alert.thieves_shore']       = 'Thieves were seen on the shore.',
    ['buyer.sold_total']          = 'Just sold items for a total of ~g~%d $',
    -- ...
}
```

Strings are accessed in code via the `L('key')` helper function. To translate, replace the right-side values.

### Key Categories

| Prefix | Purpose |
|--------|---------|
| `error.*` | Error messages shown to players |
| `prompt.*` | Interaction prompts (Press [E] to ...) |
| `hint.*` | Context hints (Use X on Y) |
| `label.*` | Entity and blip labels |
| `buyer.*` | Buyer NPC messages |
| `alert.*` | Police dispatch alerts |

## 3D Text Style

The 3D floating text appearance is customized in `client/editable/functions.lua` via the `Modern3D` table:

```lua
local Modern3D = {
    font        = 4,
    bgColor     = { 15, 15, 15, 125 },
    borderColor = { 0, 255, 170, 255 },
    textColor   = { 255, 255, 255, 255 },
    shadowColor = { 0, 0, 0, 150 },
    arrowColor  = { 0, 255, 170, 255 },
    padding     = 0.003,
    offsetY     = 0.25,
    useArrow    = true,
    arrowSize   = 0.012,
    minScale    = 0.2,
    borderWidth = 0.002,
}
```

## Custom Loot Rewards

Change the reward item for any loot drop in `config.lua`:

```lua
-- Default
['coke_block7'] = {
    model  = 'ba_prop_battle_coke_block_01a',
    reward = 'ls_coke_block',
    amount = 1
}

-- Custom
['coke_block7'] = {
    model  = 'ba_prop_battle_coke_block_01a',
    reward = 'your_custom_item',
    amount = 3
}
```

::: warning
If you add custom item names as rewards, make sure to also add them to `Cfg.allowedItems` in `server/server.config.lua`, otherwise they will be blocked by the server-side whitelist.
:::

## Dispatch Integration

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

## SQL Driver

The script supports multiple SQL drivers:

```lua
Config.sqlDriver = 'mysql'   -- 'mysql' (mysql-async) or 'oxmysql'
```

The SQL abstraction is in `server/editable/functions.lua` and can be modified to support additional drivers.

## NPC Models

Change the cartel guard models:

```lua
Config.cartelNPCModels = {
    'A_M_M_EastSA_01',
    'CSB_Ramp_mex',
    'IG_Hao',
    'IG_Hao_02',
    'IG_Ortega',
    'S_M_Y_Robber_01',
}
```
