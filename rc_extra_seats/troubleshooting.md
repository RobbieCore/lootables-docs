# Troubleshooting

## No prompt appears near a configured vehicle

- Confirm the vehicle model name in `config.lua` matches exactly what the game uses as the display name (uppercase, e.g. `'SANDKING'`, not `'Sandking'`). Hash comparison is case-insensitive but the key must match for the editor export.
- Check that the targeting resource (`ox_target`, `qb-target`, etc.) is started **before** `rc_extra_seats` in `server.cfg`. If the targeting resource starts late, its entities are not registered.
- If `Config.target.enabled = true` and the targeting resource is not running at all, no prompt will appear. Either start the resource or switch to `Config.target.enabled = false`.
- With `Config.doorLock.enabled = true`, no prompt shows on a **locked** vehicle. The default `GetVehicleLockState` checks the native door lock status (0 or 1 = unlocked). If your server uses a custom lock system, override `GetVehicleLockState` in `client/editable/functions.lua`.
- Check engine health: the runtime skips the prompt if engine health is below 100. A freshly spawned vehicle with damage or a blackout engine will not show the seat.

## Prompt only fires while the player is moving

This was a pre-2.0 bug. If you see it, you are running an old version. The check that caused it (`IsEntityAttachedToAnyVehicle`) was removed — the detect radius is now the sole spatial gate, which fires regardless of player movement state.

## Seat prompt appears but sitting does nothing / "occupied" flash immediately

- Another player may genuinely hold the seat. Use `/seatocclist` to see current occupancy.
- The server claim timed out. The client waits up to 3 seconds for server confirmation. If the server is overloaded or the event is dropped, the claim fails and "occupied" is shown as a fallback. Check for script errors in the server console around the time of the failure.
- If many players are stuck-occupied with no one actually sitting, use `/seatfreeall` to reset global state and restart the resource if it recurs.

## Editor won't open (pressing N does nothing or shows "Access denied")

- Your player must have the `rc_extra_seats.editor` ACE, or be in a group that has `command` allowed. Check `server.cfg` for the relevant `add_ace` line.
- If you are in an admin group and still denied, double-check that the `add_principal identifier.… group.admin` line for your identifier is present.
- With `Config.debugMode.enabled = true`, the server console will print `[rc_extra_seats] access-denied src=… (Name)` when access is rejected — a quick way to confirm the server is seeing your attempt.

## Freecam doesn't start when I open the editor (error C001)

Error `C001` in the F8 console means the scripted camera failed to be created. This is a GTA build-specific scripted-cam issue. Try:
- Closing any other resource that creates a scripted camera before opening the editor.
- Switching to a different GTA graphic profile or restarting the game client.

## Preview peds don't appear (C002 / C003)

- `C002` — the preview ped model (`mp_m_freemode_01`) failed to stream in within the timeout. This can happen under very high server load. Close and reopen the editor to retry.
- `C003` — the seated idle animation dictionary failed to load. Same cause and fix as C002.

## Vehicles without a boot bone are not detected (skidsteers, semis, some bikes)

Fixed in the current version. `GetNearestVehicle` falls back to entity coordinates when the `boot` bone is absent. If you experience this on the current version, confirm you are not running a cached older `client/functions.lua`.

## Export file not saved (error S001)

`S001` in the server console means `SaveResourceFile` failed for `seat_exports/<file>.lua`. Common causes:
- The `seat_exports/` folder does not exist and the OS user running the server does not have write permission to create it. Create the folder manually inside the resource directory.
- The resource is running from a read-only path (some txAdmin setups with read-only artifacts). Move the resource to a writable path.

The export snippet is still shown in the NUI panel even if the file save fails — copy it from there.

## Players are permanently stuck seated after a server crash or resource restart

The server clears all occupancy on `onResourceStop` and runs a startup audit that wipes any stale `trunkSeats` statebag bits 2.5 seconds after boot. If players are still stuck after a restart:
1. Run `/seatfreeall` in the server console.
2. If the issue persists, the client-side state is stuck. Ask affected players to disconnect and reconnect — the `playerDropped` handler forces a cleanup on the next join.

## Periodic self-heal audit

The server runs an occupancy audit every 15 seconds. If it finds a player in the registry whose vehicle no longer exists, it releases them automatically. If it finds the statebag bit cleared for a player the registry still thinks is seated, it restores the bit. This audit runs silently unless `Config.debugMode.enabled = true`.

## Locked-vehicle logic seems backwards

`GetVehicleLockState` in `client/editable/functions.lua` returns `true` for **unlocked** (prompt allowed) and `false` for **locked** (prompt blocked). The name reflects "can the player access?" not "is it locked?". If you override this function for a custom lock system, match this convention.
