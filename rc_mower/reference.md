# Reference

## Commands

### Players

| Command | Does |
|---|---|
| `/mowerhud` | Opens the HUD arranger: drag panels, hide panels, set opacity and colours |
| `/mowerboard` | Opens the daily leaderboard |
| `/mowerabandon` | Force-ends a stuck job. No pay, no deposit refund |

`/mowerhud` also appears in **Settings → Key Bindings → FiveM** as
*"rc_mower: Customize HUD layout"*, unbound by default, so players can put it on
a key.

### Admins

| Command | ACE | Does |
|---|---|---|
| `/mower_edit` | `rc_mower.edit` | Opens the yard editor and admin panel |
| `/mower_edit_exit` | `rc_mower.edit` | Closes the editor |
| `/mower_edit_toggle_mode` | `rc_mower.edit` | Switches the editor camera between locked and free flight. Bound to **F** by default |
| `/mower_ring <h\|spacing\|alpha\|tickEvery> <n>` | `rc_mower.edit` | Tunes how the yard rings are drawn while the editor is open. Cosmetic |

### Server console

Only registered when `Config.debugMode.debug = true`. Leave debug off on a live
server and these do not exist.

| Command | Does |
|---|---|
| `mowerboard_period <seconds>` | Shortens the leaderboard period for testing. `0` restores the configured value |
| `mowerboard_seed [rows]` | Fills the current board with fake scores |
| `mowerboard_clearseed` | Removes the fake scores |
| `mowerboard_add [id] [score]` | Adds a score for a player |

## Permissions

| ACE | Grants |
|---|---|
| `rc_mower.edit` | Opening the editor, creating and moving yards |
| `rc_mower.admin` | Saving changes in the admin panel |

## `config.lua`

The only settings that are **not** in the admin panel, because they are read
once at boot. Changing any of these needs `restart rc_mower`.

| Key | What it does |
|---|---|
| `Config.debugMode.debug` | Verbose logging, debug commands, and it **bypasses the ACE checks**. Must be `false` on a live server |
| `Config.debugMode.debugLocationIndex` | Locks the job to one yard while testing. `0` = random, as in normal play |
| `Config.debugMode.bypassPermissions` | Skips only the editor/admin ACE checks. Also for testing |
| `Config.sqlDriver` | `oxmysql`, `mysql`, or any driver exporting `executeSync` |
| `Config.alternativeIdentifier` | Which identifier player progress is keyed on (`license`, `discord`, `steam`, …). **Changing this after players have progressed strands their XP** |
| `Config.standaloneSettings` | `payment = false` skips the deposit charge and refund entirely — a no-economy sandbox mode |
| `Config.job` | `enabled = true` requires the player to hold `jobName` before they may start work |
| `Config.toolItems` | Inventory item names used for the HUD's tool artwork |
| `Config.editorKeys` | Keys used by the yard editor, and the labels shown on screen. Change the control ID and the label together |
| `Config.levelUp` | The level-up celebration: on/off, volume and timings |
| `Config.finishLoot`, `Config.pileLoot` | First-boot defaults for the two loot tables. After that the admin panel's values win |

## Files you may edit

Everything else in the resource is encrypted and cannot be edited.

| Path | Contains |
|---|---|
| `config.lua` | The boot settings above |
| `locale/locale.lua` | Every player-facing string: blips, prompts, target options, notifications, and the interface |
| `server/editable/kq_link.lua` | Money, item and vehicle-key calls. Edit if you need something your framework does differently |
| `server/editable/esx.lua` | The ESX "player brings their own mower" lookup |
| `server/editable/functions.lua` | Identifier resolution, XP helpers, SQL wrappers, and `DeleteVehiclesProperly` — a stub for your own vehicle cleanup |
| `client/editable/*.lua` | Client-side job check and vehicle keys |

## Locale

`locale/locale.lua` is one flat table of strings. Colour codes like `~g~` are
GTA text colours; `${MONEY}` style tokens are substituted at runtime — keep them
in the string. Interface strings are the `nui.*` keys.

Translating the script means editing this one file. Restart after saving.

## Database

Created and migrated automatically on start. You do not need to touch it.

| I want to | Do this |
|---|---|
| Undo one group of settings | **Reset** on that group in the admin panel |
| Take a yard out of rotation | **Disable** it on the yards map |
| Back up my yards | **Export** on the editor rail |
| Provision tables ahead of install | Run `_installation_/rc_mower_schema.sql` |

The schema itself ships with the resource in that file. Resetting player
progression is a direct database operation — take a backup first, and do it with
the server stopped.

## Expansion

`rc_mower_addon` is an optional separate resource that adds co-op crews, extra
on-foot tools, customer mood, and hidden loot in leaf piles. Install it after
`rc_mower`. Its settings are documented with that resource; the **Pile tips** tab
in the admin panel feeds it.
