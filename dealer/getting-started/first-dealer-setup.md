# First Dealer Setup

A walkthrough from a fresh install to your first active dealer on a corner.

## Before you start

Make sure installation is complete:

- `rc_dealer` starts without errors
- The evidence note item (`rc_note` by default) exists in `ox_inventory`
- At least one drug item (`weed_baggy`, `coke_baggy`, `meth_baggy`, or `oxy`) exists in `ox_inventory`
- You have the admin ACE (`command.npcsell_reload`) if you want to use admin commands

---

## Step 1 — Find a recruiter

Recruiter spots are marked on the map with blips (enabled by default via `Config.recruiterBlip`). Walk up to a recruiter ped — they appear at the hire spots seeded from `ServerConfig.Defaults.HireSpots`.

The default seeded spots are:

- Alley behind Vanilla Unicorn
- Yellow Jack backlot

Admins can add more spots using `/addrecruiter` (see [Recruiters & Spots](../admin-guide/recruiters-and-spots.md)).

## Step 2 — Hire a dealer

Interact with the recruiter ped. Hiring costs the fee set in `ServerConfig.Defaults.Settings.hireFee` (default **$2,500**). The new dealer appears in your burner app.

Open the burner with `/burner` (or your configured command/keybind/item). The new dealer is listed in your thread list with their status.

## Step 3 — Supply the dealer

Tap into the dealer's thread in the burner app and send them product. Each dealer can carry a limited stock. Supply them before assigning to a corner so they can start selling immediately.

::: tip
Restocking a dealer before they run dry increases their loyalty (`restockGain`). Letting them run dry costs loyalty (`dryLossPerTick`).
:::

## Step 4 — Assign a sell spot

In the dealer's thread, assign them to one of the available corners. Default seeded corners include Grove Street, Forum Drive, Vespucci Canals, Mirror Park, and Davis/Roy Lowenstein.

Once assigned, the dealer spawns at their corner and begins working. Their blip appears on your map (owner-only, invisible to other players and cops).

## Step 5 — Manage over the burner

With a dealer on their corner you can, from the burner thread:

| Action | What it does |
|--------|-------------|
| Supply | Send product to restock their carry |
| Collect | Pull earned cash (minus the dealer's cut) |
| Bonus | Pay a cash bonus to raise loyalty |
| Arm / Disarm | Give or remove a weapon; armed dealers handle stress better |
| Lay low | Pull the dealer off the corner temporarily to cool heat and stress |
| Notify preset | Set how often routine texts buzz you (all / frequent / normal / important) |
| Fire | Terminate the dealer; they leave with whatever they're holding |

## Step 6 — Watch for dealer texts

Your dealer texts you automatically about:

- Sales (routine — subject to your notify preset)
- Running low on stock or going dry
- Cops nearby or a frisk attempt
- Robbery attempts
- High stress or imminent desertion
- Death or bust

Force-majeure texts (death, bust, robbery, desertion) always buzz regardless of the notify preset.

---

## Cop interaction overview

A player with a cop job (listed in `ServerConfig.copJobs`) carrying the evidence note item (`Config.noteItem`) can:

1. **Frisk** — approach an active dealer, aim at their body, and press **E** on each zone within `Config.search.reach` metres. The server checks heat level and whether the dealer is carrying enough to justify a search. A successful frisk may result in a bust; an armed dealer may resist and bolt.
2. **Interrogate** — the dealer must first be subdued (health at or below `interrogate.surrenderHp`, default 175). Then use the "Crack him for info" interaction within `Config.interrogate.reach` metres. The server selects a minigame from the configured pool and opens a full-screen challenge board. The cop must solve the minigame before the time limit (`Config.interrogate.maxMs`). Each successful round extracts a tier of intel. Failure adds stress to the dealer; too many consecutive failures trigger a lawyer lockout.

Intel from interrogation is stored in the note item's metadata. Using the note item opens the cop's case report.

See [Police Pressure](../configuration/police-pressure.md) for the full list of minigame types and all tuning options.
