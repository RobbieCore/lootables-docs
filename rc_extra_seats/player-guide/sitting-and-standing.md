# Sitting and Standing

## How it works

When you approach a configured vehicle and walk into the detect zone around a seat, a prompt appears. Interact with it to sit or stand.

The detect zone is a sphere (default 1.0 m radius) centered at the seat's position. You do not need to stand on the vehicle — just be close enough.

## Keybind mode

When the server is not using a targeting system, the interaction uses a GTA help-text prompt:

- `Press E to sit down` — appears when you are inside a seat's detect radius and the seat is free
- `Press E to stand up` — appears when you are already seated

Press **E** (default) to sit or stand. The keybind is remappable in GTA's Key Bindings settings under the name **ToggleSit**.

## Targeting mode

When the server uses ox_target, qb-target, or qtarget, the interaction appears as a standard target option on the vehicle:

- **Sit Down** — available when you are close to a free seat
- **Stand Up** — available when you are already seated

Interact with the vehicle through your targeting system the same way you would with any other targetable entity.

## While seated

Once seated, you are attached to the vehicle and move with it.

- You can **aim and shoot** from the seat. Your ped turns to face the camera direction when you aim.
- Melee weapons and throwables are disabled while seated.
- You cannot enter a normal vehicle seat, jump, or sprint while attached.
- You cannot use first-person camera mode.

## Getting ejected

You will be automatically detached and ragdolled if:

- The vehicle crashes hard enough (the speed change in a single tick exceeds the server's configured threshold)
- The vehicle flips upside down
- You die while seated
- The vehicle is deleted or the resource restarts (you are detached cleanly, no ragdoll)
- An admin forces you out with `/seatfreeplayer`

## Seat occupied

If another player is already in the seat you are standing near, the prompt reads **"Current seat is occupied"** in red and a short cooldown applies. Walk to a different seat position on the vehicle.

## Locked vehicles

If the server has the door-lock gate enabled (which it is by default), no prompt appears on a locked vehicle. Wait for the vehicle to be unlocked, or ask the driver to unlock it.
