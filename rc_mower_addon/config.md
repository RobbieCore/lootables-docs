# Configuration

Everything lives in `config.lua`. It stays editable after the escrow build, so
you can change any of this on a live server — a restart applies it.

Values below are the shipped defaults.

## Feature switches

```lua
Config.addon = {
    coopEnabled       = true,   -- crews
    lootEnabled       = true,   -- hidden valuables in the piles
    extraToolsEnabled = true,   -- trimmer / blower / can / pitchfork
}
```

Switching one off removes that feature cleanly — core's job still runs, and the
payout simply stops including that part.

## Task pay and XP

What each piece of non-mowing work is worth. These are paid on top of core's
grass money.

```lua
Config.taskPay = { edge = 6, leaves = 5, wilt = 8, pileSold = 12 }
Config.taskXp  = { edge = 2, leaves = 2, wilt = 3 }
```

| Key | Earned by |
|---|---|
| `edge` | Trimming one clump of tall weeds |
| `leaves` | Blowing away one leaf pile |
| `wilt` | Watering one wilted plant back to life |
| `pileSold` | Selling one grass pile at a dump point |

```lua
Config.fullClearBonusMult = 1.25    -- payout multiplier for a completely cleared yard
Config.layers.payoutFloor = 0.5     -- least a yard can pay, as a fraction of full
Config.completion = { requireTasks = false, requirePiles = false }
```

`completion` is the strict switch: leave both `false` and the extra work is
optional bonus money; set them `true` and a player cannot finish the yard until
the tasks (and/or every pile) are done.

## The tools

```lua
Config.items = {
    blower    = 'rc_mower_blower',
    can       = 'rc_mower_can',
    trimmer   = 'rc_mower_trimmer',
    pitchfork = 'rc_mower_pitchfork',
}
Config.toolDeposits = { blower = 2000, can = 2000, trimmer = 2500, pitchfork = 1500 }
Config.rechargeSeconds = 2.5
```

`items` must match your inventory. `toolDeposits` is what renting one costs;
the money comes back on return, and is kept if the player loses the tool.

Each tool has bronze / silver / gold tiers under `Config.tools.<tool>`:

| Field | Means |
|---|---|
| `range` | How far the tool reaches (blower, trimmer, pitchfork) |
| `charges` | Uses before it needs a refill (blower, trimmer) |
| `capacity` | Watering-can equivalent of `charges` |
| `useSeconds` | Total run time a full charge gives |
| `edgePerSec` | Trimmer work rate |
| `loadPerHit` | Piles a pitchfork lifts per action |
| `price` / `level` | Cost of the upgrade and the player level that unlocks it |

`Config.rechargeSeconds` is how long the refill bar at the truck runs before a
drained tool is usable again.

> **Tier upgrades are not purchasable in game yet.** The in-game Workshop sells
> the mower's tier only; the `price` / `level` values on the other tools are
> read but nothing offers them for sale. Everyone starts on bronze. To grant a
> higher tier, set it in `rc_mower_addon_tools` directly.

`Config.toolParticles` picks the effect each tool sprays. Both the dictionary
and the name have to be a real GTA particle pair; a wrong name silently does
nothing.

## Crews

```lua
Config.crew = {
    enabled      = true,
    maxSize      = 4,
    inviteRadius = 25.0,       -- how close to invite someone
    nearbyRadius = 50.0,       -- scan radius for the invite picker
    nameSource   = 'framework',-- 'framework' = character name, 'license' = account name
    bonusPercent = 0.25,       -- +25% payout for a crew of 2 or more
    paymentMax   = 1000,       -- cap on any one member's share
    scaling      = { ... },    -- how much extra yard work per extra member
}
Config.lobby = { maxSize = 4 }
```

`scaling` is what keeps a bigger crew honest — one row per crew size, and a
bigger crew gets a proportionally bigger yard so four players do not clear a
one-player yard in a quarter of the time:

```lua
scaling = {
    [1] = { grass = 1.0, rocks = 1.0, loot = 1 },
    [2] = { grass = 1.6, rocks = 1.4, loot = 2 },
    [3] = { grass = 2.2, rocks = 1.8, loot = 3 },
    [4] = { grass = 2.8, rocks = 2.2, loot = 4 },
}
```

The multipliers are deliberately below the headcount (four players get 2.8× the
grass, not 4×), so joining a crew is still worth doing. `loot` is how many
hidden finds that yard can hold.

## The carry loop

Cut grass leaves piles on the lawn. A player with a pitchfork carries them to
the truck, and a full truck is driven to a dump point and unloaded for money.

```lua
Config.carry = {
    enabled     = true,
    cap         = 5,        -- piles the truck holds; SHARED by the whole crew
    pickupDist  = 2.5,      -- pitchfork reach to grab a pile
    depositReach = 2.1,     -- how close to the truck's load point to load
    payPerPile  = 12,       -- paid per pile when the truck is dumped
    xpPerPile   = 1,
    dumpRadius  = 8.0,      -- how close to a dump point counts as "there"
    dumpPoints  = { vector3(-163.76, -31.58, 52.71) },   -- PLACEHOLDER
    fullWorkMult = 2.5,     -- densify watering/blowing work while the truck is full
}
```

> **Set `dumpPoints` before going live.** It ships with one placeholder next to
> the depot so the loop is testable out of the box. Add the real yard-waste
> locations on your map — each entry is a `vector3`, and any of them accepts a
> load.

`loadVisual` puts pile props in the truck bed as it fills. The slot offsets are
measured against the truck model, so if you change core's truck model in the
admin panel you will want to nudge these.

`depositOffset` / `depositReach` are the point on the truck a player loads at.
They are tuned for the shipped truck; change the truck and they move.

## Trailer disposal

The trailer is the second, larger sink: fill it, drive it to the disposal site,
sell the lot.

```lua
Config.trailerCapacity  = { bronze = 15, silver = 25, gold = 40 }
Config.disposalCoords   = vector3(2293.0, 4910.0, 41.5)
Config.disposalRadius   = 8.0
Config.disposalPayPerPile = 12
```

The disposal site gets a map blip automatically. Move `disposalCoords` wherever
suits your map.

## Hidden loot

```lua
Config.loot = {
    dropChancePerPile = 0.15,     -- 15% of piles hide something
    pool = { ... },               -- what turns up, by weight, and what it tips
}
Config.lootItems = { ring = 'ring', watch = 'watch', wallet = 'wallet', ... }
```

Nothing is granted to the inventory — a find pays out as a cash tip when the job
settles. `lootItems` only maps a pool entry to an inventory item **name**, and
that name is used to look up the picture the HUD shows. Point them at items your
inventory actually has, or the HUD shows a blank tile.

If core's `Config.pileLoot` is set, that wins: core hands its pool down and this
block is the fallback.

## Yard layers

`Config.layers` defines the three kinds of extra work spawned into a yard:

| Layer | Tool | Model |
|---|---|---|
| `edge` | Trimmer | Tall weeds — deliberately not the flat lawn the mower cuts |
| `leaves` | Leaf blower | Leaf piles, with a few loose leaves scattered on top |
| `wilt` | Watering can | Wilting plants that rise out of the ground as they are watered |

Each has a `density` (per square metre) plus `min` / `max` counts, so a small
yard and a large yard both get a sensible amount.

Two `wilt` settings are worth knowing:

- `secondsPerStage` — how long the can must be held on one plant per stage.
- `witherSeconds` — a plant not fully grown within this long dies (`0` turns it
  off). Dead plants cannot be watered, forfeit their pay, and cost the
  full-clear bonus. The clock restarts on each stage, and mowing comes first,
  hence the generous default.

`Config.layers.highlight` outlines what the held tool can act on and dims the
rest. Leave it on unless your server has its own highlight system.

## The mowing grid

`Config.grid` is the coverage overlay: the yard is divided into cells that turn
red → yellow → green as they are mowed.

```lua
Config.grid = {
    cellSize       = 4.0,
    mowTouchesDone = 2,     -- passes over a cell before it counts as done
    drawDistance   = 35.0,
    ...
}
```

## First-run guidance

`Config.carry.tutorial` controls the one-time on-screen guidance for the carry
loop. It is mandatory until a player's first paid job — someone who has never
seen it has no basis to switch it off — and after that payout they are asked
once whether to keep it. From then on it is theirs to set with `/mowertut`.

```lua
tutorial = {
    keepKey = 246, keepLabel = 'Y',    -- keep guidance
    offKey  = 73,  offLabel  = 'X',    -- turn it off
    promptSeconds = 45,                -- timing out means "leave it as it is"
}
```

The keys are GTA control ids; change the id and the label together, or the
prompt will name a key that does nothing.
