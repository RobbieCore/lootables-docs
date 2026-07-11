# Server Settings

All settings in this section live in `server/server.config.lua`. This file is server-only — it is never sent to clients. It is listed in `escrow_ignore` and remains editable after an escrow build. Restart the resource after editing.

## Core Settings

```lua
ServerConfig.sqlDriver    = 'oxmysql'
ServerConfig.moneyAccount = 'money'
ServerConfig.copJobs      = { 'police', 'lspd', 'bcso', 'sheriff' }
ServerConfig.reloadAce    = 'command.npcsell_reload'
```

| Option | Purpose | Default |
|--------|---------|---------|
| `sqlDriver` | The database resource name. Any resource that exposes the `oxmysql` execute interface works here. | `'oxmysql'` |
| `moneyAccount` | The framework cash account used for hire fees, purchases, and payouts. Must match the account name your framework uses (e.g. `'money'`, `'cash'`, `'bank'`). | `'money'` |
| `copJobs` | Job names recognised as police. Players holding any of these jobs can frisk and interrogate dealers. Add all cop job names your server uses. | `{ 'police', 'lspd', 'bcso', 'sheriff' }` |
| `reloadAce` | The ACE node that gates `/npcsell_reload`, `/npcsell_additem`, the admin dashboard, and recruiter placement. | `'command.npcsell_reload'` |

## Passive Sales

```lua
ServerConfig.passiveSales = true
```

| Option | Purpose | Default |
|--------|---------|---------|
| `passiveSales` | `true` — dealers sell to ambient NPC demand on their own (the `ambientSales` tuning defaults apply). `false` — dealers only earn when a real player buys from them. Direct switch; restart required. | `true` |

## Random Events

```lua
ServerConfig.randomEvents = {
    skim        = true,
    robbery     = true,
    fakeRobbery = true,
    desert      = true,
}
```

| Option | Purpose | Default |
|--------|---------|---------|
| `skim` | Dealer quietly pockets a unit or two on the server tick, scaled by low loyalty. | `true` |
| `robbery` | Dealer is randomly robbed and loses half their stock and held cash. | `true` |
| `fakeRobbery` | Dealer stages a fake robbery — nobody actually hit them; they lie to pocket the loss. Set `false` to make every robbery genuine (an armed dealer can fight it off). | `true` |
| `desert` | A maxed-stress, disloyal dealer may walk off the payroll, taking everything they hold. | `true` |

These are direct on/off switches — not seeded into the database. A restart is required to apply changes.

## Notification Throttle

Routine dealer texts (sales reports, restock reminders, assignment confirmations) produce a phone buzz at most `routineCapPerHour` times per dealer per hour. Force-majeure events — death, bust, robbery, cops circling, desertion — always buzz regardless of the cap. Messages are always stored and visible in the burner thread; only the buzz is throttled.

```lua
ServerConfig.notify = {
    routineCapPerHour = 3,
    windowSec         = 3600,
    presets = {
        { key = 'all',       cap = 99 },
        { key = 'frequent',  cap = 6  },
        { key = 'normal',    cap = nil },
        { key = 'important', cap = 0  },
    },
}
```

| Option | Purpose | Default |
|--------|---------|---------|
| `routineCapPerHour` | Maximum routine buzzes per dealer per `windowSec`. | `3` |
| `windowSec` | Sliding window in seconds for the cap. | `3600` |

**Presets** are the frequency options owners can choose per dealer inside the burner app. Each preset has a `key` (the label shown in the app) and a `cap`:

| Preset key | Cap | Effect |
|-----------|-----|--------|
| `all` | `99` | Effectively uncapped — all routine texts buzz. |
| `frequent` | `6` | Double the default cap per window. |
| `normal` | `nil` | Falls back to `routineCapPerHour`. |
| `important` | `0` | Mutes routine buzzes; urgent events still ring. |

A cap of `0` silences routine texts for that dealer while keeping force-majeure alerts active.

## Owner Actions

```lua
ServerConfig.actions = {
    bonusPresets              = { 500, 1000, 2500 },
    layLowStressRelief        = 20,
    toggleCooldownSec         = 60,
    productivityTargetPerTick = 5,
}
```

| Option | Purpose | Default |
|--------|---------|---------|
| `bonusPresets` | Cash amounts shown as bonus buttons in the burner app. Each $1,000 bonus raises dealer loyalty by `loyalty.bonusPerK`. | `{ 500, 1000, 2500 }` |
| `layLowStressRelief` | Stress removed from a dealer when the owner orders them to lay low. | `20` |
| `toggleCooldownSec` | Minimum seconds between lay-low toggles per dealer. Prevents rapid toggling to farm stress relief. | `60` |
| `productivityTargetPerTick` | Units sold per tick that counts as 100% productivity in the burner's stats display. | `5` |

---

## The Seed-then-Database Model

Everything under `ServerConfig.Defaults` is a **seed**, not a live config. On first start, each value is written into the database. After that, the **database rows are the source of truth**.

| Action | What happens |
|--------|-------------|
| First resource start | All `Defaults` are seeded into the database. |
| Edit `server/server.config.lua` | Has **no effect** on existing rows. |
| Delete a database row + run `/npcsell_reload` | That row is re-seeded from the current `Defaults`. |
| Run `/npcsell_reload` without deleting rows | Reloads live settings and seeds any missing rows; does not overwrite existing ones. |

To apply a changed default to something already in the database, delete that row and reload. The admin dashboard and `/npcsell_additem` are the recommended way to adjust items and prices at runtime without touching the database directly.

See [Tuning Defaults](tuning-defaults.md) for a summary of what each defaults category controls.
