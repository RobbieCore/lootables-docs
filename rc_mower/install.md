# Installation

## Requirements

| Requirement | Notes |
|---|---|
| **kq_link** | Required. It is how rc_mower talks to your framework, inventory, targeting and notifications. Install and configure it first. |
| A framework | ESX, QBCore, Qbox, ox_core, vRP or standalone — whichever kq_link is set to. rc_mower does not care which. |
| A SQL driver | `oxmysql` (recommended) or `mysql-async`. |
| A targeting resource | ox_target / qb-target / qtarget, wired through kq_link. |

## Install

1. Drop the `rc_mower` folder into your resources.
2. Add it to `server.cfg` **after** the framework, the SQL driver and `kq_link`:

   ```cfg
   ensure oxmysql
   ensure es_extended      # or qb-core, etc.
   ensure kq_link
   ensure rc_mower
   ```

3. Start the server once. The database tables are created automatically on
   first boot, and 14 default yards are seeded so the job is playable
   immediately.
4. Grant yourself the admin permissions (below) and open `/mower_edit` to tune
   the job.

There is nothing to build or compile. The interface ships prebuilt.

## Permissions

Two ACE permissions, both off by default:

```cfg
add_ace identifier.license:YOURLICENSE rc_mower.edit  allow   # yard editor
add_ace identifier.license:YOURLICENSE rc_mower.admin allow   # admin panel (saving settings)
```

`rc_mower.edit` opens the editor and lets you create and move yards.
`rc_mower.admin` is checked separately when the admin panel **saves**, so you
can hand out yard editing without handing out the economy.

For a group instead of a person:

```cfg
add_principal identifier.license:YOURLICENSE group.admin
add_ace group.admin rc_mower.edit  allow
add_ace group.admin rc_mower.admin allow
```

## Database

The script creates and migrates its own tables on start. Nothing to import,
nothing to maintain — player progress, your yards, your admin settings, the
leaderboard and unclaimed prizes all live there and are handled for you.

If your host requires tables to be provisioned ahead of time, the full schema
ships with the resource at `_installation_/rc_mower_schema.sql`. It is safe to
run repeatedly.

**Upgrading from a 1.x install** (XP kept in `ls_extra`, yards with
`radius_from` / `radius_to`)? On oxmysql the resource migrates on its own at
first boot and leaves `ls_extra` in place. On mysql-async, or when the
resource's DB user cannot alter tables, import
`_installation_/migrate_legacy.sql` **first**, then `rc_mower_schema.sql`.

## Job requirement (optional)

`Config.job` is off by default: anyone can take the job. Turn it on to require
the `mower` job first, then add the job to your framework.

**ESX** — import `_installation_/esx/database.sql`.

**QBCore / Qbox** — add to `qb-core/shared/jobs.lua`:

```lua
['mower'] = {
    label = 'Gardener',
    type = 'gardener',
    defaultDuty = true,
    offDutyPay = false,
    grades = {
        [0] = { name = 'Gardener', payment = 0 },
    },
},
```

## First-boot checklist

- [ ] `kq_link` starts before `rc_mower` and reports your framework correctly.
- [ ] The server console shows no `rc_mower` errors on start.
- [ ] `config.lua` → `Config.debugMode.debug` is **false** for a live server.
- [ ] Your ACE lines are in `server.cfg`, not just typed into the console.
- [ ] `/mower_edit` opens the editor for you.
- [ ] The depot blip appears on the map where you want the job to start.

## Moving the depot

The depot ships at Mission Row. Stand where you want it and set three things in
**`/mower_edit` → Admin panel**, each with the **Stand here** button:

1. **Map & Interface → Map markers & blips → Headquarters** — the blip and the
   spot vehicles are returned to.
2. **Vehicles → Vehicle spawning** — where the truck and trailer appear.
3. **Map & Interface → Headquarters → Return radius** — how close counts as
   parked.

See [Admin panel](admin-panel.md#map--interface).
