# Troubleshooting

### The resource will not start

Check the order in `server.cfg`. `rc_mower` must come after the framework, the
SQL driver and `kq_link`. Starting before `kq_link` is the most common cause.

### "No active job locations. Contact an admin."

Every yard is disabled or incomplete. Open **`/mower_edit` → Yards map** and
check the **On / Off** switches. A yard missing a name, a centre, a customer or
a radius counts as incomplete and is skipped even when switched on — the
placement rail shows exactly which piece is missing.

### `/mower_edit` says nothing / does nothing

The ACE is not applied to you. `rc_mower.edit` must be in `server.cfg`, and the
identifier must be yours. Confirm with `add_ace` at the server console first —
if it works there but not from `server.cfg`, the line is in the wrong place or
after the server has already read it.

### I can open the editor but "Save changes" is refused

`rc_mower.admin` is a separate permission from `rc_mower.edit`. See
[Installation → Permissions](install.md#permissions).

### Settings changes do not stick

The admin panel writes to the database, not to `config.lua`. If a value keeps
coming back, something else is overwriting it — most often a second copy of
`rc_mower` still running, or a database user without write permission. The
values in `config.lua` and `shared/defaults.lua` are only a first-boot seed;
editing them on an installed server does nothing.

### Job vehicles do not spawn

Check **Admin panel → Vehicles → Vehicle models**. Every name must exist on your
server. The trailer uses a custom model shipped inside this resource — if you
removed the `stream` folder, either put it back or change the trailer model, or
set **Vehicles spawned** to 2 so no trailer is needed.

### Barely any grass spawns in a yard

The yard is on concrete. Grass will not spawn on hard surfaces. Move the centre
onto a lawn, or make the radius wide enough to cover one.

### Yards take far too long / are over in seconds

**Admin panel → The Yard → Grass**. Patch count is density × area, so a big
radius multiplies quickly. Change density first and payments second.

### Players lose their progress after a change

`Config.alternativeIdentifier` decides which identifier progress is stored
against. Changing it makes the script look players up under a different key, so
the old progress is still stored but invisible. Change it back and it returns.

### Nobody gets deposit refunds

The mower is coming back damaged. Rock damage per hit is in **Admin panel → The
Yard → Rocks**, and higher mower tiers absorb some of it. Lower the damage, or
lower the rock density.

### The leaderboard never resets

**Resets every** is in hours, in **Admin panel → Levels & Rewards → Daily
leaderboard**. The period is derived from the clock rather than a timer, so a
server that was offline over a rollover still rolls over on its next boot.

### Notifications appear twice, or not at all

**Admin panel → Map & Interface → Notifications**. `auto` probes ox_lib, then
kq_link, then the game's own feed. If you run something else, pick it
explicitly.

### Debug mode is still on

`Config.debugMode.debug = true` bypasses the ACE checks and registers the debug
commands, and `bypassPermissions` does the same for the editor. Both must be
`false` on a live server.
