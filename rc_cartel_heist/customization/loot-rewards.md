# Custom Loot Rewards

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
