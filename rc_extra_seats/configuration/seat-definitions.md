# Seat Definitions

Seat positions for each vehicle model live in `Config.pickupTruckModels` inside `config.lua`.

## Structure

```lua
Config.pickupTruckModels = {

    ['MODELNAME'] = {
        { offset = { x, y, z }, boneName = 'bone_name', detectRadius = 1.0 },
        { offset = { x, y, z }, boneName = 'bone_name', heading = 90.0 },
        -- additional seats...
    },

    ['ANOTHERMODEL'] = {
        -- ...
    },
}
```

Model names are case-insensitive for the hash lookup, but the key you write must match exactly the string you want in the editor's export snippets. Conventionally, use the display name in uppercase (e.g. `'SANDKING'`, `'YOSEMITE'`).

## Seat fields

| Field | Type | Required | Default | Description |
|---|---|---|---|---|
| `offset` | `{x, y, z}` | Yes | — | Position of the seat in the bone's local coordinate frame (meters). X = right, Y = forward, Z = up, relative to the vehicle's current orientation |
| `boneName` | `string` | No | `'chassis'` | The vehicle bone the seat attaches to. Falls back to `chassis`, then `chassis_dummy`, then entity root if the named bone does not exist on the model |
| `detectRadius` | `number` | No | `1.0` | Radius (meters) of the sphere around the seat position where the "Press E" prompt fires |
| `heading` | `number` | No | `0.0` | Yaw rotation of the seated ped in degrees, relative to the vehicle's forward direction |
| `pitch` | `number` | No | `0.0` | Pitch rotation of the seated ped in degrees |
| `roll` | `number` | No | `0.0` | Roll rotation of the seated ped in degrees |
| `kind` | `string` | No | `'trunk'` | Reserved for future seat types. Leave unset |

::: tip
The `detect = {x,y,z}` field from old configs is read but ignored. The prompt zone is always a sphere centered on the seat's attach position (`offset` + `boneName`). You only manage one location per seat now.
:::

## Common bone names

| Bone | Typical location |
|---|---|
| `seat_dside_r` | Driver-side rear seat area (most pickup trucks) |
| `seat_pside_r` | Passenger-side rear seat area |
| `seat_dside_f` | Driver-side front area (good anchor for industrial vehicles) |
| `chassis` | Vehicle body root (fallback for anything without named seats) |
| `chassis_dummy` | Alternative chassis root, present on some models |
| `boot` | Trunk/bed area (not present on all models) |

## Example entries

### Pickup truck with four bed seats

```lua
['SANDKING'] = {
    { offset = { 0.1, -0.8, 1.0 }, boneName = 'seat_dside_r' },
    { offset = { 0.8, -0.8, 1.0 }, boneName = 'seat_dside_r' },
    { offset = { 0.1, -2.4, 1.0 }, boneName = 'seat_dside_r' },
    { offset = { 0.8, -2.4, 1.0 }, boneName = 'seat_dside_r' },
},
```

### Skidsteer/industrial with custom radius and heading

```lua
['DLOADER'] = {
    { offset = { -0.000, -1.002, 0.752 }, boneName = 'seat_dside_f', detectRadius = 0.40 },
    { offset = {  0.665, -1.002, 0.752 }, boneName = 'seat_dside_f', detectRadius = 0.40 },
    { offset = {  0.416, -3.004, 0.752 }, boneName = 'seat_dside_f', heading = 174.84 },
},
```

## Adding a new model

The easiest path is to use the in-game editor (see [First Seat Setup](/rc_extra_seats/getting-started/first-seat-setup)). To add a model manually:

1. Open `config.lua`.
2. Add a new entry inside `Config.pickupTruckModels` using the uppercase model name as the key.
3. Define at least one seat with a valid `offset` and the correct `boneName`.
4. Restart or broadcast the resource.

```lua
['MYVEHICLE'] = {
    { offset = { 0.0, -1.5, 1.0 }, boneName = 'chassis', detectRadius = 1.2 },
},
```

If you are unsure of the bone name, open the editor, press **B** to display bones, and click the dot closest to where you want to place the seat.
