---
title: rc_mower
---

# rc_mower — Server Owner Manual

A lawn-mowing job for FiveM. Players collect a truck, trailer and ride-on mower
from a depot, drive to a customer's yard, cut the grass without hitting rocks,
get paid, and return the vehicles for their deposit back.

Almost everything you will want to change is edited **in game**, from the admin
panel, and takes effect immediately — no restart, no file editing.

![Admin panel](/rc_mower/img/admin-money-payments.png)

## Contents

| Page | What's in it |
|---|---|
| [Installation](install.md) | Requirements, install order, permissions, database |
| [Admin panel](admin-panel.md) | Every setting you can tune in game, by category |
| [Yards](yards.md) | Creating, editing and disabling mowing locations |
| [What players see](players.md) | HUD, workshop, leaderboard, player commands |
| [Reference](reference.md) | Commands, ACE names, `config.lua`, files you may edit, database |
| [Troubleshooting](troubleshooting.md) | Common problems and their causes |

## The job in one page

1. A player targets the depot manager and picks **Start work**. A deposit is
   charged (default $100).
2. A truck, a trailer and a mower spawn. The player drives to a randomly chosen
   yard from your yard list.
3. Grass patches and rocks spawn inside the yard's radius. Cut grass pays;
   hitting a rock damages the mower's engine.
4. When enough of the yard is done, the customer pays: grass money + a perfect
   yard bonus + a level bonus + a streak bonus, capped by your payout limit.
5. The player drives back to the depot and returns the vehicles. The deposit is
   refunded in full, in half, or not at all, depending on the mower's engine
   health.

## Where settings live

| Setting kind | Where | Restart needed |
|---|---|---|
| Payments, XP, levels, tool tiers, spawn density, vehicles, blips, prizes | In game: **`/mower_edit` → Admin panel** | No |
| Mowing yards | In game: **`/mower_edit` → Yards map** | No |
| Database driver, identifier type, job gate, debug switches | `config.lua` | Yes |
| Every player-facing string | `locale/locale.lua` | Yes |
| Framework money / item / key behaviour | `server/editable/`, `client/editable/` | Yes |

Anything not in that table is script internals and is not intended to be
edited.
