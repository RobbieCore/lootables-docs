# Installation

## 1. Add the resource to your server

Place `rc_cartel_heist` and `ls_island_props` into your server's resources folder.

Add both to your `server.cfg`:

```cfg
ensure ls_island_props
ensure rc_cartel_heist
```

## 2. Add items to your database

::: code-group

```sql [ESX]
INSERT INTO items (name, label, weight, rare, can_remove)
VALUES
    ('ls_weed_block', 'Weed Block', 3, 0, 1),
    ('ls_weed_bag', 'Weed Bag', 1, 0, 1),
    ('ls_coke_block', 'Coke Block', 1, 0, 1),
    ('ls_coke_powder', 'Coke', 1, 0, 1),
    ('ls_jewellery', 'Jewellery', 1, 0, 1),
    ('ls_entrance_key', 'Cartel Key', 1, 0, 1),
    ('ls_emp_blocker', 'EMP Blocker', 1, 0, 1),
    ('ls_wire_cutters', 'Wire Cutters', 1, 0, 1),
    ('ls_thermite', 'Thermite', 1, 0, 1),
    ('ls_card', 'Entrance Card', 1, 0, 1);
```

```lua [QBCore]
-- Add to [qb]/qb-core/shared/items.lua

['ls_weed_block']   = {['name'] = 'ls_weed_block',   ['label'] = 'Weed Block',    ['weight'] = 0, ['type'] = 'item', ['image'] = 'ls_weed_block.png',   ['unique'] = true, ['useable'] = false, ['shouldClose'] = true, ['combinable'] = nil, ['description'] = 'Weed block'},
['ls_weed_bag']     = {['name'] = 'ls_weed_bag',     ['label'] = 'Weed Bag',      ['weight'] = 0, ['type'] = 'item', ['image'] = 'ls_weed_bag.png',     ['unique'] = true, ['useable'] = false, ['shouldClose'] = true, ['combinable'] = nil, ['description'] = 'Weed Bag'},
['ls_coke_block']   = {['name'] = 'ls_coke_block',   ['label'] = 'Coke Block',    ['weight'] = 0, ['type'] = 'item', ['image'] = 'ls_coke_block.png',   ['unique'] = true, ['useable'] = false, ['shouldClose'] = true, ['combinable'] = nil, ['description'] = 'Coke Block'},
['ls_coke_powder']  = {['name'] = 'ls_coke_powder',  ['label'] = 'Coke',          ['weight'] = 0, ['type'] = 'item', ['image'] = 'ls_coke_powder.png',  ['unique'] = true, ['useable'] = false, ['shouldClose'] = true, ['combinable'] = nil, ['description'] = 'Coke powder'},
['ls_jewellery']    = {['name'] = 'ls_jewellery',    ['label'] = 'Jewellery',     ['weight'] = 0, ['type'] = 'item', ['image'] = 'ls_jewellery.png',    ['unique'] = true, ['useable'] = false, ['shouldClose'] = true, ['combinable'] = nil, ['description'] = 'Jewellery'},
['ls_entrance_key'] = {['name'] = 'ls_entrance_key', ['label'] = 'Entrance Key',  ['weight'] = 0, ['type'] = 'item', ['image'] = 'ls_entrance_keys.png',['unique'] = true, ['useable'] = true,  ['shouldClose'] = true, ['combinable'] = nil, ['description'] = 'Cartel entrance key'},
['ls_card']         = {['name'] = 'ls_card',         ['label'] = 'Access Card',   ['weight'] = 0, ['type'] = 'item', ['image'] = 'ls_card.png',         ['unique'] = true, ['useable'] = true,  ['shouldClose'] = true, ['combinable'] = nil, ['description'] = 'Cartel access card'},
['ls_thermite']     = {['name'] = 'ls_thermite',     ['label'] = 'Thermite',      ['weight'] = 0, ['type'] = 'item', ['image'] = 'ls_thermite.png',     ['unique'] = true, ['useable'] = true,  ['shouldClose'] = true, ['combinable'] = nil, ['description'] = 'Thermite'},
['ls_emp_blocker']  = {['name'] = 'ls_emp_blocker',  ['label'] = 'EMP Blocker',   ['weight'] = 0, ['type'] = 'item', ['image'] = 'ls_emp_blocker.png',  ['unique'] = true, ['useable'] = true,  ['shouldClose'] = true, ['combinable'] = nil, ['description'] = 'Radio EMP blocker'},
['ls_wire_cutters'] = {['name'] = 'ls_wire_cutters', ['label'] = 'Wire Cutters',  ['weight'] = 0, ['type'] = 'item', ['image'] = 'ls_wire_cutters.png', ['unique'] = true, ['useable'] = true,  ['shouldClose'] = true, ['combinable'] = nil, ['description'] = 'Wire Cutters'},
```

:::

::: tip QBCore Item Images
Copy all item images from `_installation_/qb/` into your `[qb]/qb-inventory/html/images` folder.
:::

## 3. QBCore: Unblock helicopter model

If using the default `buzzard` helicopter model on QBCore, make sure to remove it from the blacklisted vehicles list in `[qb]/qb-smallresources/config.lua`. Alternatively, change `Config.helicopterModel` in `config.lua` to a different model.

## 4. Configure the script

Edit `config.lua` to match your server setup. See the [Configuration](/rc_cartel_heist/configuration/) section for all available options.

## 5. Restart your server

Restart your server and the heist is ready to go.
