# NPCs & Island

Control cartel guard behaviour, island environment, and bunker access.

## NPC Settings

```lua
Config.npcShoot      = true             -- NPCs shoot at players
Config.npcShootRange = 50.0             -- Engagement range (max 300.0)
Config.npcWeapon     = 'WEAPON_MICROSMG' -- Weapon model
Config.npcAccuracy   = 100              -- Accuracy 0-100 (100 = perfectly accurate)
```

## Island Settings

```lua
Config.boatModel         = 'dinghy5'   -- Boat model for travel to island
Config.helicopterSpawn   = true        -- Spawn a helicopter on the island
Config.helicopterRockets = true        -- Helicopter has rockets
Config.helicopterModel   = 'buzzard'   -- Helicopter model
Config.freezeDrop        = false       -- Freeze loot props (for models without collision)
```

## Bunker Entrance Conditions

Control which tasks must be completed before players can enter the underground bunker:

```lua
Config.bunkerEntrance = {
    conditions = {
        hackedEMP               = true,  -- All EMPs must be hacked
        electricityDone         = true,  -- Electricity minigame completed
        outsideContainersLooted = true,  -- Outside containers looted
    }
}
```

Set any condition to `false` to skip that requirement.
