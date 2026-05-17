# Installation

## 1. Place the resource

Drop the `rc_extra_seats` folder into your resources directory. The conventional location is inside a category folder:

```
resources/
  [bodyshop]/
    rc_extra_seats/
      config.lua
      fxmanifest.lua
      ...
```

The bracketed folder name (`[bodyshop]`) is just a category — you can rename it or put the resource in any valid resource path.

## 2. Add to server.cfg

Add the `ensure` line **after** any targeting resource you use:

```cfg
# Targeting system (if using one)
ensure ox_target

# Extra seats
ensure rc_extra_seats
```

Load order matters. If `rc_extra_seats` starts before `ox_target`, the targeting integration will fail silently.

## 3. Grant admin ACE permission

Admins who will use the in-game seat editor or the admin commands need the `rc_extra_seats.editor` ACE (or the catch-all `command` permission that most admin groups already have):

```cfg
add_ace group.admin rc_extra_seats.editor allow
```

Players do not need any ACE — the sit/stand interaction is available to everyone by default.

## 4. First-start verification

Start or restart the resource and check the server console for errors. A clean start produces no output unless `Config.debugMode.enabled = true`.

In-game, spawn or walk up to a configured vehicle model (e.g. `SANDKING`). You should see a "Press E to sit down" prompt (or a targeting option) when you approach the truck bed.

::: tip
If no prompt appears, check the [Troubleshooting](/rc_extra_seats/troubleshooting) page. The most common causes are load-order issues with the targeting resource and `Config.doorLock.enabled = true` on an unlocked vehicle (the logic is inverted — see the config docs).
:::

## Upgrading from ls_extra_seats

rc_extra_seats is a fork of `ls_extra_seats`. Existing `Config.pickupTruckModels` entries copy across without modification. Two things to be aware of:

- The `detect = {x,y,z}` field in old entries is silently ignored. The prompt zone is now a sphere centered on the seat's attach position with radius `detectRadius` (default `1.0`). If your old detect coords were significantly offset from the seat, the prompt area will have moved. Open the editor to tune `detectRadius` per seat.
- The `{0,0,0,0}` four-seat occupancy cap is gone. Models with more than four seats work correctly without any config change.
