# rc_extra_seats

rc_extra_seats adds configurable cargo-area passenger seats to any vehicle. Players walk up to a configured seat position, see a "Press E to sit" prompt (or use a targeting system), and attach to the vehicle at an exact bone-relative offset with proper orientation. The script works across any vehicle class — pickup beds, flatbeds, skidsteers, semis, industrials, and more.

Seat positions are defined per model in `config.lua`. An in-game visual editor (available to ACE-authorized admins) lets you place seats interactively without touching numbers by hand, then exports ready-to-paste config snippets.

The server is authoritative on occupancy. Every seat claim is arbitrated server-side; a self-healing registry cleans up on player disconnect, vehicle removal, and resource restart.

**Key features:**

- Per-model seat definitions with per-seat bone anchor, position offset, heading/pitch/roll, and detect radius
- Works on any vehicle — no dependency on a `boot` bone; falls back to entity coords when it's absent
- `E` key (keybind-remappable) or targeting system (ox_target, qb-target, qtarget) to sit/stand
- Collision-acceleration eject: players are thrown from the seat if the vehicle hits something hard enough
- Optional door-lock gate: locked vehicles don't show the prompt
- In-game seat editor with freecam, 3D click-and-drag gizmo, bone picker, live ped preview, undo, and one-click config export (ACE-gated)
- Live broadcast: push seat changes to all connected clients without restarting the resource
- Server exports for other resources to read occupancy or force-release seats
- Shared OO class layer (`Seat`, `VehicleSeatConfig`, `Occupancy`) available to both sides
- Fully localizable UI strings
- Ships with pre-tuned seat positions for SANDKING, YOSEMITE, BISON, DLOADER, and a dozen more models
