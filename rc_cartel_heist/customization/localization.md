# Localization

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

## Key Categories

| Prefix | Purpose |
|--------|---------|
| `error.*` | Error messages shown to players |
| `prompt.*` | Interaction prompts (Press [E] to ...) |
| `hint.*` | Context hints (Use X on Y) |
| `label.*` | Entity and blip labels |
| `buyer.*` | Buyer NPC messages |
| `alert.*` | Police dispatch alerts |
