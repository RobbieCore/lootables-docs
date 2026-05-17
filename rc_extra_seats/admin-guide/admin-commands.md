# Admin Commands

These commands run server-side and are available in **production** regardless of `Config.debugMode.enabled`. They require the `rc_extra_seats.editor` ACE permission or the `command` ACE permission that most admin groups already hold.

You can run them from:
- The server console (type without the `/`)
- In-game chat (type with the `/`)
- Any RCON client

## /seatocclist

Lists every player currently holding a trunk seat, with their server ID and the vehicle net ID + seat index they occupy.

```
/seatocclist
```

**Output example (server console):**

```
  [8] PlayerName  →  netId=142 seat=2
  [15] AnotherPlayer  →  netId=98 seat=1
[rc_extra_seats] 2 active occupancies
```

Use the player ID shown here (the number in brackets) with `/seatfreeplayer`.

## /seatfreeplayer \<playerId\>

Frees the seat that a specific player is stuck in and detaches them from the vehicle.

```
/seatfreeplayer 8
```

If the player is not currently holding any seat, the command says so and does nothing.

::: tip
Use this when a player is stuck seated after a desync event or a script error. It clears both the server occupancy record and the client state.
:::

## /seatfreeall

Wipes all server-side seat occupancy and clears the `trunkSeats` statebag on every spawned vehicle. All seated players are detached simultaneously.

```
/seatfreeall
```

Use this as a last resort when the occupancy state is globally broken (e.g. after a partial resource crash or repeated stuck reports from multiple players).

## Permission setup

```cfg
# server.cfg — grant to your admin group
add_ace group.admin rc_extra_seats.editor allow

# Or if you use a named permission group
add_ace group.superadmin rc_extra_seats.editor allow
```

Players in `group.admin` automatically receive all ACEs granted to that group. Check your existing `add_ace` lines — if `group.admin` already has `command` allowed, the admin commands work without adding a new line.
