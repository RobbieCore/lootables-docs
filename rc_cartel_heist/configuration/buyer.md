# Buyer

The buyer NPC accepts stolen loot and pays out randomized cash rewards.

## Buyer NPC

```lua
Config.buyer = {
    blip = {
        enabled = true,
        sprite  = 207,
        color   = 81,
        alpha   = 255,
        scale   = 1.0,
    },
    ped     = true,                     -- Spawn buyer NPC
    model   = "A_M_M_KTown_01",        -- Buyer ped model
    marker  = false,                    -- Show a marker at buyer location
    location = {
        x = 2525.48, y = 4980.82, z = 44.85, heading = 57.77
    },
}
```

## Sell Prices

Prices are randomized within a range each reset:

```lua
Config.itemPrice = {
    ['ls_weed_block']  = math.random(250, 500),
    ['ls_weed_bag']    = math.random(100, 250),
    ['ls_coke_block']  = math.random(1000, 2500),
    ['ls_coke_powder'] = math.random(250, 500),
    ['ls_jewellery']   = math.random(1000, 1500),
}
```
