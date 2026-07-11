# Police Pressure

This page covers the knobs that control how cops interact with dealers — the reach and timing settings in `config.lua` (client-side) and the outcome/tuning settings in `server/server.config.lua` (server-only).

## Frisk (Search) Reach

```lua
Config.search = {
    reach = 2.2,   -- metres
}
```

| Option | Purpose | Default |
|--------|---------|---------|
| `reach` | How close a cop must stay to the dealer throughout a frisk. Stepping outside this range aborts the interaction. | `2.2` |

## Interrogation Reach and Time Limit

```lua
Config.interrogate = {
    reach = 2.2,     -- metres
    maxMs = 30000,   -- milliseconds
}
```

| Option | Purpose | Default |
|--------|---------|---------|
| `reach` | How close a cop must stay to the dealer throughout an interrogation round. | `2.2` |
| `maxMs` | Maximum time (ms) the cop has to complete a round before the dealer outlasts them. | `30000` |

## Dealer Panic

An armed dealer under pressure can pull a weapon mid-interaction.

```lua
Config.panic = {
    stress = 65,    -- dealer stress at/over which a botch can trigger a panic pull
    chance = 45,    -- % chance per botched frisk read or mistimed interrogation press
    fireMs = 3000,  -- how long the dealer fires at the cop before bolting
}
```

| Option | Purpose | Default |
|--------|---------|---------|
| `stress` | Dealer must be at or above this stress level for a panic pull to be possible. | `65` |
| `chance` | Percentage chance per botched interaction that a panic pull occurs (when stress is high enough). | `45` |
| `fireMs` | Milliseconds the dealer fires at the cop before fleeing. | `3000` |

Unarmed dealers cannot panic-pull. Lowering `stress` means danger begins earlier; raising `chance` makes botched reads more punishing for the cop.

---

## Server-Side Search Tuning (`ServerConfig.Defaults.Settings.copPress`)

These values are seeded into the database on first start and are the source of truth thereafter. Edit the database rows and run `/npcsell_reload` to apply changes.

```lua
copPress = {
    cooldownSec        = 300,
    perCopCooldownSec  = 600,
    attemptDecaySec    = 300,
    pressurePerAttempt = 20,
    bustedCooldownSec  = 900,
    bustArrestSec      = 120,
    searchHeat         = 15,
    armedResistChance  = 35,
    bustUnits          = 8,
    seizeToCop         = false,
    cashToCop          = false,
    bounty             = { base = 250, perUnit = 40, weapon = 300 },
    bodyFrac           = { base = 1.0, perResist = 0.005, min = 0.35 },
}
```

| Option | Purpose | Default |
|--------|---------|---------|
| `cooldownSec` | Seconds before the same dealer can be frisked or interrogated again by any cop. | `300` |
| `perCopCooldownSec` | Seconds before the same cop can interact with the same dealer again. | `600` |
| `attemptDecaySec` | Seconds per consecutive press attempt that the cumulative pressure decays by 1. | `300` |
| `pressurePerAttempt` | Added to the success roll for each consecutive attempt on the same dealer. Repeated attempts become more likely to succeed. | `20` |
| `bustedCooldownSec` | Seconds the dealer is off the streets after a confiscation (bust). | `900` |
| `bustArrestSec` | Seconds the busted dealer remains standing before being hauled off — time for cuff/escort RP. | `120` |
| `searchHeat` | Minimum dealer heat to trigger probable cause for a frisk. | `15` |
| `armedResistChance` | Percentage chance an armed dealer shoves the cop off and bolts mid-frisk. | `35` |
| `bustUnits` | On-body units found at or above which a full bust is triggered. | `8` |
| `seizeToCop` | If `true`, seized contraband goes to the officer's inventory. If `false`, it is destroyed/sent to evidence. | `false` |
| `cashToCop` | If `true`, seized dealer cash goes to the officer's inventory. If `false`, it goes to evidence. | `false` |
| `bounty.base` | Base cash reward paid to a cop on a successful bust. | `250` |
| `bounty.perUnit` | Additional reward per unit found on the dealer. | `40` |
| `bounty.weapon` | Additional reward if the dealer was carrying a weapon. | `300` |
| `bodyFrac.base` | Base fraction of on-body stock the cop finds during a frisk. | `1.0` |
| `bodyFrac.perResist` | Fraction subtracted per point of snitch resist (higher resist = harder to find everything). | `0.005` |
| `bodyFrac.min` | Minimum fraction found regardless of resist. | `0.35` |

## Server-Side Interrogation Tuning (`ServerConfig.Defaults.Settings.interrogate`)

```lua
interrogate = {
    surrenderHp    = 175,
    roundsDivisor  = 60,
    minRounds      = 1,
    maxRounds      = 4,
    perCopCooldown = 45,
    failStress     = 18,
    failsToLawyer  = 3,
    lawyerWindowSec = 600,
    lockoutSec     = 600,
    diff           = { loyal = 0.6, tier = 0.3, stress = 0.25 },
    pool           = { 'sequence', 'spotlie', 'alibi', 'timeline', 'tell' },
}
```

| Option | Purpose | Default |
|--------|---------|---------|
| `surrenderHp` | Unused — reserved, not read by any current gate. Interrogation has no HP/subdue requirement; the board opens directly. | `175` |
| `roundsDivisor` | Controls how many rounds a tier takes: `ceil((snitchResist + loyalty) / roundsDivisor)`. Lower values = fewer rounds per tier = easier crack. | `60` |
| `minRounds` | Minimum rounds per tier. | `1` |
| `maxRounds` | Maximum rounds per tier (compression knob). | `4` |
| `perCopCooldown` | Seconds between a single cop's consecutive attempts on the same dealer. | `45` |
| `failStress` | Stress added to the dealer on each failed round. | `18` |
| `failsToLawyer` | Consecutive failures within `lawyerWindowSec` before the dealer lawyers up. | `3` |
| `lawyerWindowSec` | Rolling window (seconds) within which consecutive failures count toward the lawyer lockout. | `600` |
| `lockoutSec` | Duration (seconds) of the lawyer lockout — dealer refuses all interrogation. | `600` |
| `nonceTtlSec` | Seconds a challenge stays valid after being issued. Must be longer than the board play window; an expired nonce rejects the submission. | `180` |
| `diff.loyal` | Weight of dealer loyalty in the difficulty roll. | `0.6` |
| `diff.tier` | Weight of current tier depth in the difficulty roll. | `0.3` |
| `diff.stress` | Weight of dealer stress in the difficulty roll (stressed dealers are easier to crack). | `0.25` |
| `pool` | Active minigame IDs the server draws from per interrogation session. Remove an ID to disable that game; the list can hold up to 10 IDs. | `{ 'sequence', 'spotlie', 'alibi', 'timeline', 'tell' }` |

::: tip Tuning difficulty
Difficulty weights (`diff.*`) sum is not required to equal 1 — results are clamped 0–1. A higher `loyal` weight makes loyal dealers significantly harder to crack. Raising `failsToLawyer` gives cops more attempts before a lockout.
:::

### Minigame Pool

Each interrogation round, the server picks a game from `pool` using a per-cop shuffle-bag (each game appears once before any repeats). The five shipped games are:

| ID | Name | What the cop does |
|----|------|-------------------|
| `sequence` | Arrow Memory | Watch a sequence of directional arrows, then repeat it in order. Length 3–6 based on difficulty. |
| `spotlie` | Spot the Lie | A grid of arrows where most point the same way. Click the ones that don't. Grid grows with difficulty. |
| `alibi` | Mastermind | Deduce a hidden colour code using black/white peg feedback. Code never sent to the client; feedback is server-authoritative. |
| `timeline` | Timeline | Sort a set of statements by the time shown on each. |
| `tell` | Tell | Two near-identical statements side by side. Click every word that differs between them. |

Remove an ID from `pool` to disable that game entirely. The bag refills automatically when all remaining games have been used.
