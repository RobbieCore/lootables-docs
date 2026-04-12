# Cartel Island Heist

A full-featured FiveM heist script where players raid a cartel-controlled island and underground bunker to steal drugs, money, and jewellery.

[Purchase on Robicore Store →](https://robicore.com)

---

## Key Features

- **Custom island** with streamed interior and cartel compound
- **Armed NPC guards** patrolling the island and bunker interior
- **Multi-stage heist** progression: hack EMPs, cut electricity, breach containers, loot the bunker
- **Shipping containers** with thermite-locked doors and randomized loot
- **Crates** opened with melee weapons or bare hands
- **Jewellery display tables** in the underground interior
- **Card-swipe minigame** (NUI) to access secured areas
- **EMP blocker** mechanic with satellite hacking
- **Buyer NPC** to sell stolen goods at randomized prices
- **Police dispatch** integration with multiple dispatch systems
- **Helicopter** spawns on the island for aerial escape
- **Boat NPCs** guarding the island perimeter
- **Configurable interaction modes**: 3D text, tooltip, or third-eye targeting
- **Full ESX and QBCore support**
- **Locale system** for easy translation

## Requirements

| Dependency | Required | Notes |
|------------|----------|-------|
| [ls_island_props](https://robicore.com) | Yes | Island prop models |
| mysql-async or oxmysql | Yes | Database driver |
| ESX or QBCore | Yes | Framework (one of the two) |
| Targeting system | Optional | Only when `Config.interactionMode = 'targeting'` |
| Dispatch system | Optional | Only when `Config.dispatch.enabled = true` |

## Next steps

- **[Getting Started](/rc_cartel_heist/getting-started/)** — install the resource, add items, and configure the script
- **[Configuration](/rc_cartel_heist/configuration/)** — every `config.lua` option explained
- **[Admin Guide](/rc_cartel_heist/admin-guide/)** — commands, reset timers, and NPC placement
- **[Player Guide](/rc_cartel_heist/player-guide/)** — heist walkthrough, controls, and loot tables
- **[Developer API](/rc_cartel_heist/developer-api/)** — events, GlobalState keys, and NUI callbacks
- **[Troubleshooting](/rc_cartel_heist/troubleshooting)** — common issues and fixes
