# Troubleshooting / FAQ

## The resource fails to start or shows database errors

- Verify `oxmysql` is started **before** `rc_dealer` in your `server.cfg`.
- Check that `ServerConfig.sqlDriver` matches your database resource name exactly.
- Confirm `oxmysql` has a valid database connection — check its own startup output for connection errors.
- Check the server console for the specific error line from `rc_dealer`.

## The burner phone won't open

- Confirm at least one of `Config.openCommand`, `Config.openKeybind`, or `Config.useItem` is set to an active value.
- If using a command, verify it matches what you configured (`Config.openCommand` default is `'burner'`).
- If using a keybind, check FiveM's key-binding settings — the player may have rebound it.
- If using an item (`Config.useItem`), confirm the item exists in `ox_inventory` and the player has one in their inventory.

## The burner screen is blank or shows an error

- The NUI was not built before starting the server. Run `cd nui && npm install && npm run build` and verify `nui/dist/nui.html` exists.
- Restart the resource after building.

## Admin commands are not working

- Verify the ACE is granted correctly in `server.cfg`:
  ```cfg
  add_ace group.admin command.npcsell_reload allow
  ```
- If you changed `ServerConfig.reloadAce`, update the ACE line to match the new value.
- Check that the player's identifier is in the correct group.

## Cop frisk / interrogate options are not appearing

- Confirm the player's job name is listed in `ServerConfig.copJobs`. Job names are case-sensitive — they must match exactly what your framework returns.
- Confirm the cop is carrying the evidence note item (`Config.noteItem`, default `rc_note`). The item must exist in `ox_inventory` and be in the cop's active inventory.
- Check that the dealer is in a working state (assigned to a corner and active, not laid low or busted).
- The frisk prompt requires the dealer's heat to be at or above `copPress.searchHeat` (default `15`). A dealer who just started will have zero heat.
- Run `/rc_copcheck` on the cop's client. It prints to the F8 console: the detected job, whether `amCop` resolves true, and each nearby dealer's state and distance. This is the fastest way to pin whether the problem is the job gate, the ped state, or the interaction system.

## The interrogation minigame board does not open

- Confirm the cop is carrying the evidence note item (`Config.noteItem`) and is within `Config.interrogate.reach` metres (default `2.2`) of the dealer when using the interaction.
- Confirm the dealer isn't already busted/dead — the crack-start is rejected for a dealer in a terminal state.
- If there is an active cooldown (`interrogate.perCopCooldown`, default `45` seconds between the same cop's attempts), the server rejects the crack-start. Wait for the cooldown.
- If the dealer has lawyered up (`interrogate.lockoutSec`, default `600` seconds), no cop can interrogate them until the lockout expires.

## Items are not being given to players who buy from a dealer

- Confirm the item name in the seeded Items table **exactly matches** the item name registered in `ox_inventory`. Names are case-sensitive.
- Verify `kq_link` is started before `rc_dealer`.
- Run `/npcsell_diag <playerId> <item>` from the server console. It walks every layer of the item-count chain — `kq_link`, direct `ox_inventory` — and prints where the mismatch is. If direct `ox_inventory` calls show the item but `kq_link` returns 0, the bridge is linked to the wrong inventory; ensure `ox_inventory` starts before `kq_link`, or set `Link.inventory = "ox_inventory"` in `kq_link/config.lua`.

## Dealers are not spawning on their corners

- Verify the player is within `Config.spawnDistance` (default `120.0` metres) of the corner.
- Check the server console for errors when the resource started — a failed database seed can leave corners unregistered.
- Run `/npcsell_reload` to force a seed of any missing database rows.

## A dealer deserted with the owner's stock

This is intended behavior: a dealer at very high stress with low loyalty may desert, taking their on-hand stock with them. To prevent it:
- Keep dealer stress low by keeping heat down and paying bonuses.
- Build loyalty through regular restocking and bonus payments before it gets critical.
- Use the "lay low" action via the burner to pull a stressed dealer off the corner before they desert.

## `/npcsell_reload` says it succeeded but my changed default didn't apply

`/npcsell_reload` only seeds **missing** rows — it does not overwrite existing ones. To apply a changed default:
1. Delete the relevant row from the database.
2. Run `/npcsell_reload`.
The row will be re-seeded from the current `server/server.config.lua` value.

## rc_phonelink integration is not working

- Confirm `rc_phonelink` is in your `server.cfg` and ensured **before** `rc_dealer`.
- `rc_phonelink` is listed as an `optional_dependencies` entry in `fxmanifest.lua` — the resource still starts without it, but phone-app integration will be inactive.
- If using a custom phone icon, ensure `Config.phoneIcon` is set to a valid, publicly accessible URL.

## The recruiter placement editor won't open

- Confirm you have the ACE node (`ServerConfig.reloadAce`) granted to your identifier.
- Check that you are running the correct command (`Config.recruiterCommand`, default `/addrecruiter`).
