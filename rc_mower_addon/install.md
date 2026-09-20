# Installation

## Requirements

| Requirement | Notes |
|---|---|
| **rc_mower** | The base job. This resource is an add-on to it and will not start on its own. |
| **rc_mower_props** | Ships the custom grass-pile, leaf-pile, trimmer and pitchfork models. Without it the piles are invisible. |
| **kq_link** | How the addon talks to your framework and inventory — money, items, usable items, item images. |
| A SQL driver | `oxmysql` (recommended) or `mysql-async`, same as core. |

## Install

1. Drop the `rc_mower_addon` folder into your resources.
2. Add it to `server.cfg` **after** core:

   ```cfg
   ensure oxmysql
   ensure es_extended      # or qb-core, etc.
   ensure kq_link
   ensure rc_mower_props
   ensure rc_mower
   ensure rc_mower_addon
   ```

   Order matters. The addon reads core's job session and extends core's HUD; if
   it starts first it simply finds nothing to attach to.

3. Add the four tool items to your inventory (below).
4. Set your dump points in `config.lua` — see
   [Configuration → The carry loop](config.md#the-carry-loop).
5. Restart the server.

There is nothing to build. Three database tables are created automatically on
first start; if your host requires tables provisioned ahead of time, the schema
ships at `_installation_/rc_mower_addon_schema.sql`.

## rc_mower_props

A stream-only resource: four models and one `.ytyp`, nothing to configure. It
registers its models through a `DLC_ITYP_REQUEST` on start.

| Model | Used for |
|---|---|
| `rc_mow_grasspile` | Piles of cut grass left on the lawn, carried with the pitchfork, and stacked in the truck bed |
| `rc_mow_leafpile` | Leaf piles the blower clears |
| `rc_mow_trimmer` | The trimmer in a player's hands |
| `rc_mow_pitchfork` | The pitchfork in a player's hands |

The base `rc_mower` job uses stock GTA models and does not need it. If the
addon runs without it, the piles and the two held tools are invisible: the work
is still there and still pays, but there is nothing to see or aim at.

## Inventory items

Four items must exist in your inventory resource. They are what a player
carries and *uses* to put a tool in their hands:

| Item name | Tool | Rental deposit |
|---|---|---|
| `rc_mower_blower` | Leaf blower | $2000 |
| `rc_mower_can` | Watering can | $2000 |
| `rc_mower_trimmer` | Trimmer | $2500 |
| `rc_mower_pitchfork` | Pitchfork | $1500 |

Rename them freely in `Config.items` if your server has its own naming scheme —
the names there are the only thing that has to match your inventory.

The addon registers each one as a **usable item** through kq_link on start.
Using the item equips that tool; using it again puts the mower back. Watch for
this line in the server console on boot:

```
[rc_mower_addon][items] registered: blower=rc_mower_blower can=rc_mower_can trimmer=rc_mower_trimmer pitchfork=rc_mower_pitchfork
```

Item **images** are resolved from your inventory automatically — whatever image
your inventory has for the item is what the HUD shows. Add a `.png` for each of
the four to your inventory's image folder and there is nothing else to wire up.

Players never need to buy these items: they rent them from the **Workshop**
menu core already has, and the deposit comes back when the tool is returned.

## Permissions

None. The addon adds no ACE permissions of its own — crews, tools and the carry
loop are all player-facing. Core's `rc_mower.edit` and `rc_mower.admin` still
govern the yard editor and the admin panel.

## Database

Three tables, created and migrated on start:

| Table | What it holds |
|---|---|
| `rc_mower_addon_tools` | Each player's tier for blower / can / trimmer |
| `rc_mower_addon_tutorial` | How far a player got through the first-run guidance, and whether they turned it off |
| `rc_mower_addon_settings` | Used only by the development tuning tools; empty on a live server |

The mower's own tier stays in core's `rc_mower_tools`.

## First-boot checklist

- [ ] `rc_mower` and `rc_mower_props` both start before `rc_mower_addon`.
- [ ] The console prints the `registered: blower=… can=…` line, with no `off`
      and no `RegisterUsableItem … failed`.
- [ ] The four items exist in your inventory and have images.
- [ ] `Config.carry.dumpPoints` names a real location on your map.
- [ ] Start a job: core's Workshop menu now has a tool rental section, and
      cutting grass leaves pile props behind on the lawn.
