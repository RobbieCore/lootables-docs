---
title: rc_mower_addon
---

# rc_mower_addon — Server Owner Manual

The optional expansion for [`rc_mower`](/rc_mower/). Core is
the mowing job: drive out, cut the grass, get paid. This adds everything that
happens *around* the mowing — a crew to do it with, three more tools with their
own work to do, grass that has to be carted off the lawn and sold, and hidden
valuables in the piles.

It is a pure add-on. Core keeps working exactly as before if you remove it, and
every feature in here can be switched off individually.

## Contents

| Page | What's in it |
|---|---|
| [Installation](install.md) | Requirements, install order, inventory items, database |
| [Configuration](config.md) | Every block in `config.lua`, what it changes |
| [Gameplay](gameplay.md) | What players actually do, and the commands they use |
| [Troubleshooting](troubleshooting.md) | Common problems and their causes |

## What it adds

| Feature | Switch |
|---|---|
| **Crews** — up to 4 players on one yard, shared truck, split payout with a crew bonus | `Config.addon.coopEnabled` |
| **Three extra tools** — trimmer, leaf blower, watering can, each rented against a deposit and each with its own kind of yard work | `Config.addon.extraToolsEnabled` |
| **The carry loop** — cut grass leaves piles; a pitchfork carries them to the truck, the truck gets dumped for money | `Config.carry.enabled` |
| **Hidden loot** — rings, watches and wallets turn up in the piles and pay out as a tip when the job settles | `Config.addon.lootEnabled` |
| **Trailer disposal** — the loaded trailer is sold at a disposal site on the map | always on with the carry loop |

## Where settings live

| Setting kind | Where | Restart needed |
|---|---|---|
| Everything in this resource | `config.lua` | Yes |
| Payments, XP, levels, yards, vehicles — core's economy | Core's in-game admin panel (`/mower_edit`) | No |

There is no separate admin panel for the addon: it deliberately has no economy
of its own beyond the task pay rates, so it stays a file you edit once.

## Two things to set before you go live

1. **`Config.carry.dumpPoints`** ships as a single placeholder next to the
   depot. Put real dump locations on your map, or the carry loop has nowhere
   to unload. See [Configuration → The carry loop](config.md#the-carry-loop).
2. **The four tool items** must exist in your inventory resource, or players
   cannot rent anything. See [Installation → Inventory items](install.md#inventory-items).
