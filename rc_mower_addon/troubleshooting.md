# Troubleshooting

## The addon does nothing at all

Check the start order. `rc_mower_addon` attaches to a running `rc_mower`; if it
starts first there is nothing to attach to and it stays quiet rather than
erroring. In `server.cfg`, `rc_mower` must be `ensure`d above it.

## Players cannot rent any tool

The four items in `Config.items` do not exist in your inventory. Look for this
line in the server console on start:

```
[rc_mower_addon][items] registered: blower=… can=… trimmer=… pitchfork=…
```

- A tool showing `off` means you blanked its entry in `Config.items`.
- A `RegisterUsableItem … failed` line above it means kq_link rejected the
  name — usually because the item is not defined in your inventory yet.

## Using the tool item does nothing

Using a tool item only works **while on a mowing job**. Off the clock the item
is inert by design, so a player cannot walk around town holding a trimmer.

## Piles and leaf piles are invisible

`rc_mower_props` is not started, or is started after this resource. It ships the
`rc_mow_*` models; without it the props fail to load and the work is there but
cannot be seen.

The scattered leaves and truck-bed load use the same models, so if those are
missing too it is the same cause.

## Wilting plants never appear

The `wilt` layer uses a plant model that must be script-loadable on your server.
Map-only vegetation cannot be spawned by a script and silently produces zero
plants. If you have swapped `Config.layers.wilt.model`, put the shipped one
back and confirm the plants return before blaming anything else.

## Nowhere to dump the truck

`Config.carry.dumpPoints` is still the shipped placeholder, or is empty. Add
real locations — see [Configuration → The carry loop](config.md#the-carry-loop).

## Loading the truck does not work / the player has to stand in an odd spot

`Config.carry.depositOffset` and `depositReach` are measured against the shipped
truck model. If you changed core's truck in the admin panel, the load point
moved with it and those numbers need adjusting.

The same applies to `Config.carry.loadVisual.slots`, which places the visible
piles in the truck bed.

## Everyone is stuck on bronze tools

That is current behaviour: the in-game Workshop sells the mower tier only. The
other tools' `price` and `level` values are configured but nothing offers them
for sale yet. Set a player's tier directly in `rc_mower_addon_tools` if you want
to hand one out.

## The crew payout looks wrong

Two things shape it beyond core's own payout:

- A crew of two or more gets `Config.crew.bonusPercent` (+25 % by default) added
  before the split.
- `Config.crew.paymentMax` caps what any one member can take home, no matter
  what the job was worth.

If a share looks clipped, check that cap first.

## A found item shows as a blank tile in the HUD

`Config.lootItems` maps a loot kind to an inventory item name, and the HUD shows
that item's picture. A name your inventory does not have leaves the tile empty.
The cash tip is unaffected — only the picture is missing.

## Tool effects spray the wrong thing, or nothing

`Config.toolParticles` needs a real GTA particle dictionary and name together. A
wrong pair fails silently: the tool still works, it just looks like nothing is
happening.
