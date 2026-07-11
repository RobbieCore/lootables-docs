# Tuning Defaults

`ServerConfig.Defaults` in `server/server.config.lua` provides the initial values written into the database on first start. After that, the database is the source of truth — edit rows there (or delete a row and run `/npcsell_reload` to re-seed from this file).

This page summarises what each category governs. For the exact default numbers, open `server/server.config.lua` directly.

---

## Global Scalar Settings

**`Defaults.Settings`** — a flat table of server-wide tuning values.

### Hiring and Economy

| Setting | What it controls |
|---------|----------------|
| `maxDealersPerPlayer` | How many dealers a single player can have on their payroll at once. |
| `hireFee` | Upfront cash cost to put a dealer on payroll (paid to the server, not another player). |
| `dealerCutPercent` | Percentage of collected cash the dealer keeps as their pay. |
| `tickIntervalSec` | How often (seconds) the server runs the risk/sales tick for all active dealers. |
| `turfRadius` | Minimum metres between any two active dealers' corners. Prevents overlapping turf. |

### Loyalty (0–100)

Loyalty governs how honest a dealer is and how hard they are to flip. Low loyalty means more skimming and weaker snitch resistance.

| Setting | What it controls |
|---------|----------------|
| `loyalty.start` | Starting loyalty when a dealer is hired. |
| `loyalty.bonusPerK` | Loyalty gained per $1,000 in cash bonuses. |
| `loyalty.restockGain` | Loyalty gained when restocked before going dry. |
| `loyalty.dryLossPerTick` | Loyalty lost per tick the dealer works with an empty stash. |
| `loyalty.bustLoss` | Loyalty lost when cops confiscate the dealer's stash. |
| `loyalty.maxFromBonus` | Bonuses cannot push loyalty above this ceiling. |

### Heat

Heat accumulates from dealer activity and triggers police dispatch above a threshold. It decays while the dealer is quiet.

| Setting | What it controls |
|---------|----------------|
| `heat.perAmbientSale` | Heat gained per ambient (ped-to-dealer) sale. |
| `heat.perPlayerSale` | Heat gained per player purchase. Player sales generate more heat. |
| `heat.dispatchThreshold` | Heat level that fires a police dispatch blip. |
| `heat.decayPerTick` | Heat lost per tick while the dealer is calm. |
| `heat.dispatch` | Text and blip settings for the dispatch alert (message, blip sprite/color/scale/flash). |

### Ambient Sales

Dealers make drip-sales to passing pedestrians independently of player traffic. This keeps the operation ticking over even when no players are buying, but at reduced prices once player demand goes stale.

| Setting | What it controls |
|---------|----------------|
| `ambientSales.enabled` | Whether ambient sales are active at all. |
| `ambientSales.chancePerTick` | Percentage chance per tick that an ambient sale occurs (multiplied by the dealer's personality sell rate). |
| `ambientSales.unitsMin` / `unitsMax` | Range of units sold per ambient sale. |
| `ambientSales.cooldownSec` | Minimum seconds between ambient sales per dealer. |
| `ambientSales.priceFactor` | Street price as a fraction of the owner's set price when player demand is fresh. |
| `ambientSales.staleAfterSec` | Seconds since the last player purchase after which demand is considered stale. |
| `ambientSales.stalePriceFactor` | Street price fraction once demand has gone stale. |

### Stress

Dealers crack under sustained pressure. Stress builds from cops nearby and players aiming at them, and decays when the dealer is calm.

| Setting | What it controls |
|---------|----------------|
| `stress.copRadius` | Metres used to check for nearby cops; cops inside stress the dealer each tick. |
| `stress.copGainPerTick` | Stress added per tick while a cop is within `copRadius`. |
| `stress.aimGain` | Stress added per aiming event per player (rate-limited by `aimCooldownSec`). |
| `stress.aimCooldownSec` | Minimum seconds between stress events from the same player aiming. |
| `stress.decayPerTick` | Stress removed per tick when nothing is stressing the dealer. |
| `stress.armedGainFactor` | Multiplier on stress gains while the dealer is armed (armed dealers keep cooler). |
| `stress.textThreshold` | Stress level at which the dealer texts the owner, subject to `textCooldownSec`. |
| `stress.textCooldownSec` | Minimum seconds between stress text messages from the same dealer. |
| `stress.desertThreshold` | Stress level above which the dealer may desert each tick. |
| `stress.desertChancePerTick` | Percentage chance per tick the dealer deserts (scales up with low loyalty). |
| `stress.pullStress` | Stress level at which an armed dealer may draw on a cop during a botched interaction. See [Police Pressure](police-pressure.md). |
| `stress.deathDropPercent` | Percentage of stock that is lootable off a killed dealer's body. |
| `stress.lootWindowSec` | Seconds the body loot window stays open before cleanup. |
| `stress.bonusRelief` | Stress removed per cash bonus payment. |
| `stress.visitRelief` | Stress removed when the owner delivers product or collects earnings in person. |
| `stress.allowedWeapons` | List of weapon hashes the owner can arm a dealer with. |
| `stress.maxAmmo` | Maximum rounds the owner can load into a dealer. |
| `stress.aimReaction` | If `true`, armed dealers aim back at players who target them; unarmed dealers cower. |

### Flee

A stressed dealer who spots a cop will bolt and try to lose them.

| Setting | What it controls |
|---------|----------------|
| `flee.threshold` | Stress at or above which a nearby cop triggers flight. |
| `flee.clearThreshold` | Stress below which (with no cop nearby) the dealer calms down. |
| `flee.fleeRadius` | Metres used to check for cops that trigger flight. |
| `flee.fleeDuration` | Milliseconds between flight task re-issues (keeps the flee going). |

---

## Sellable Items (`Defaults.Items`)

A whitelist of inventory item names with price bounds. The owner sets the actual street price within `[minPrice, maxPrice]`; `suggested` is shown as a hint in the burner UI.

Default seeded items:

| Item | Min price | Max price | Suggested |
|------|-----------|-----------|-----------|
| `weed_baggy` | $40 | $180 | $90 |
| `coke_baggy` | $90 | $400 | $220 |
| `meth_baggy` | $80 | $350 | $190 |
| `oxy` | $25 | $120 | $60 |

Add items at runtime with the admin dashboard or `/npcsell_additem`. Item names must match real `ox_inventory` items.

---

## Corners (`Defaults.Corners`)

Working spots where dealers are assigned to sell. Each corner has a label, coordinates, heading, and idle scenario. The five default corners cover Grove Street, Forum Drive, Vespucci Canals, Mirror Park, and Davis/Roy Lowenstein.

Edit or add corners via the admin dashboard after first start.

---

## Hire Spots (`Defaults.HireSpots`)

Locations where recruiters are placed for players to hire dealers. Each spot has a label, coordinates, heading, and ped model. The two default hire spots are the alley behind Vanilla Unicorn and the Yellow Jack backlot.

Add more spots using the `/addrecruiter` placement editor (see [Recruiters & Spots](../admin-guide/recruiters-and-spots.md)).

---

## Personalities (`Defaults.Settings.personalities`)

Each dealer rolls one of four hidden personality types at hire. Personality is never visible to the owner and affects how the dealer behaves over time.

| Personality | Character |
|-------------|-----------|
| `loyal` | Reliable, honest, slow seller, very hard to flip. |
| `greedy` | Fast seller, frequent skimmer, lies about earnings, moderate snitch resist. |
| `coward` | Slow seller, occasionally skims, tells everything to a cop, prone to desertion. |
| `snake` | Decent seller, heavy skimmer, lies often, moderate snitch resist, will flip. |

Each personality has a spawn weight (controlling how often it's rolled), a sell-rate multiplier, skim/lie/snitch/robbery chance values. Adjust these in `Defaults.Settings.personalities` to shift the overall character of dealers on your server.

---

## Dealer Models (`Defaults.Settings.dealerModels`)

Pool of base-game ped model names used when spawning dealers. A model is picked randomly from this list at hire. Invalid model names fall back to a default. Keep this list to valid, verified base-game ped models.
