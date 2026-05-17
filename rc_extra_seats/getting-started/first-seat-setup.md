# First Seat Setup

This walkthrough takes you from zero configured seats to a working seat on a vehicle, using the in-game editor. If you prefer to write the config by hand, see [Seat Definitions](/rc_extra_seats/configuration/seat-definitions).

## Prerequisites

- Resource is running (see [Installation](/rc_extra_seats/getting-started/installation))
- You have the `rc_extra_seats.editor` ACE permission, or are in a group that holds the `command` ACE (most admin groups already do)

## Step 1 — Spawn or find the target vehicle

Drive or spawn the vehicle model you want to configure. For this example, use a `SANDKING`. Park it somewhere flat with open space around it so you can walk around the bed.

## Step 2 — Open the editor

Stand near the vehicle, look at it, and press **N** (default keybind: `seateditortoggle`). You can also type `/seateditor` in chat.

The editor will:
1. Detect the vehicle you are looking at via camera raycast
2. Switch to freecam, spawning the camera behind the vehicle
3. Spawn semi-transparent preview peds at any existing seat positions
4. Show the gizmo toolbar at the bottom of the screen

If no vehicle is found, a chat message appears: `Aim at a vehicle to edit.` Look directly at the vehicle and try again.

## Step 3 — Navigate with freecam

In freecam mode (F key **not** pressed — unfrozen), the camera flies freely:

- **Mouse** — look direction
- **W / S** — move forward / backward
- **A / D** — strafe left / right
- **Shift** — move faster
- **Alt** — move slower

Fly around until you have a clear top-down or angled view of the truck bed.

## Step 4 — Enter edit mode

Press **F** to freeze the freecam. The camera locks in place and the mouse cursor becomes active. You are now in gizmo-interactive mode.

## Step 5 — Add a seat

Press **Insert** to add a new seat. A preview ped appears and the gizmo (three colored arrows + a yellow ring) appears at the seat's current position.

If this is the first seat on a new model, the seat starts at the vehicle's best-guess default bone position.

## Step 6 — Drag the seat into position

With the cursor visible and freecam frozen:

- Hover over a **colored arrow** (red = vehicle-right, green = vehicle-forward, blue = up). The arrow highlights yellow.
- **Left-click and drag** to slide the seat along that axis.
- Hover over the **yellow ring** and drag to rotate the ped's heading (which direction they face).

Drag until the preview ped sits where you want it on the bed. The ped updates position live as you drag.

::: tip
Use **Tab** to cycle between seats when you have more than one. **Shift+Tab** cycles backward.
:::

## Step 7 — Assign the right bone

Press **B** to show vehicle bones as magenta dots. Hover over the bone you want the seat to attach to — the bone name appears as text above it. Click the bone dot to assign it to the selected seat.

Common choices for truck beds: `seat_dside_r` or `seat_pside_r`. For vehicles without rear seat bones, use `chassis` or `chassis_dummy`.

Press **B** again to hide the bone overlay.

## Step 8 — Adjust the detect radius

The detect radius is the sphere around the seat where the "Press E" prompt fires. The default is 1.0 m. Scroll the **mouse wheel** (up = larger, down = smaller) to adjust it. Hold **Shift** while scrolling for coarser 0.25 m steps instead of the default 0.05 m.

The orange circle drawn around the seat shows the current radius. Size it so the player naturally walks into it when approaching the seat from outside the vehicle.

## Step 9 — Export the config

Press **]** (right bracket) to export. Two things happen:

1. The NUI export panel opens, showing a ready-to-paste Lua snippet.
2. The snippet is saved to `seat_exports/<MODEL>_<timestamp>.lua` on the server disk.

Copy the snippet from the panel, paste it into the appropriate entry in `Config.pickupTruckModels` inside `config.lua`, then close the panel (there is a Close button, or press **]** again).

## Step 10 — Broadcast or restart

You have two options to apply the new seat data to all connected clients:

- **Press [** (left bracket) — broadcasts the current seat config live to all players without a resource restart. They see the change immediately.
- Restart the resource — `restart rc_extra_seats` in the server console. Everyone gets the freshly loaded `config.lua`.

For a permanent change, always paste the exported snippet into `config.lua`. The broadcast is temporary and does not survive a resource restart.

## Step 11 — Test as a player

Close the editor (**N** again or `/seatedclose`). Walk up to the seat position. The "Press E to sit down" prompt should appear. Press **E** to sit, press **E** again to stand.

## Going to production

The editor stays available to ACE-authorized admins regardless of debug mode — there's no separate toggle to flip. If you want to lock the editor down beyond admins, edit `server/editor.lua` and drop the `IsPlayerAceAllowed(src, 'command')` fallback in `isAdmin`, leaving only the script-specific `rc_extra_seats.editor` permission. Regular players cannot open it.
