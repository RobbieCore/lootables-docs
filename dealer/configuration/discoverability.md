# Discoverability

These settings control how visible dealers and hiring spots are to players on your server. All options are in `config.lua`.

## Recruiter Spot Blips

Shows map blips at hiring spots so players can find where to hire a dealer.

```lua
Config.recruiterBlip = {
    enabled    = true,
    sprite     = 480,
    color      = 6,
    scale      = 0.8,
    shortRange = false,
}
```

| Option | Purpose | Default |
|--------|---------|---------|
| `enabled` | Show or hide recruiter blips on the map. | `true` |
| `sprite` | Blip icon number from the FiveM blip sprite list. | `480` |
| `color` | Blip color index from the FiveM blip color list. | `6` (dark grey) |
| `scale` | Blip size. | `0.8` |
| `shortRange` | If `true`, the blip only appears when the player is close. Set `true` for servers that prefer players to discover spots organically. | `false` |

## Owner Dealer Blips

Shows a map blip for each of the owner's active dealers. Only the dealer's owner sees these — other players and cops never do.

```lua
Config.ownerBlip = {
    enabled    = true,
    sprite     = 480,
    color      = 2,
    scale      = 0.75,
    shortRange = true,
}
```

| Option | Purpose | Default |
|--------|---------|---------|
| `enabled` | Show or hide owner dealer blips. | `true` |
| `sprite` | Blip icon number. | `480` |
| `color` | Blip color index. | `2` (green) |
| `scale` | Blip size. | `0.75` |
| `shortRange` | If `true`, the blip only appears when the owner is close. | `true` |

## Join Hint

```lua
Config.joinHint = true
```

| Option | Purpose | Default |
|--------|---------|---------|
| `Config.joinHint` | Show a one-time hint after a player connects, pointing them at the burner command. Only fires once per session. | `true` |

## Dealer Presence

```lua
Config.dealerHint = {
    enabled  = true,
    distance = 20.0,
    text     = '~g~$',
}
Config.dealerGreets = true
Config.buyAnimation = true
```

| Option | Purpose | Default |
|--------|---------|---------|
| `Config.dealerHint.enabled` | Show a floating label above working dealers. | `true` |
| `Config.dealerHint.distance` | Metres within which the floating label is visible. | `20.0` |
| `Config.dealerHint.text` | Text that hovers above the dealer. Supports GTA color codes (`~g~`, `~r~`, etc.). | `'~g~$'` |
| `Config.dealerGreets` | Dealer calls out to nearby players while working a corner. | `true` |
| `Config.buyAnimation` | Hand-over animation plays when a player buys from or delivers to a dealer. | `true` |

::: tip Hardcore servers
Set `Config.recruiterBlip.shortRange = true` and `Config.dealerHint.enabled = false` to make dealers feel more hidden and require players to discover the system through roleplay.
:::
