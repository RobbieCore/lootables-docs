# Client Exports and Globals

rc_extra_seats does not expose formal `exports(...)` calls on the client side, but it defines several globals in the shared namespace that client-side resources loaded after it can use directly.

## SeatLookup

An alias for `VehicleRegistry`. Both names point to the same table.

```lua
-- type: table<number, VehicleSeatConfig>
local cfg = SeatLookup[GetHashKey('SANDKING')]
```

Populated at resource start from `Config.pickupTruckModels`. Rebuilt when the editor broadcasts a live model update.

## RebuildSeatLookup

```lua
RebuildSeatLookup()
```

Rebuilds `VehicleRegistry` (and updates `SeatLookup` to point to the new table) from the current state of `Config.pickupTruckModels`. Call this after modifying `Config.pickupTruckModels` at runtime from a client-side resource.

## GetSeatConfigForEntity

```lua
local cfg = GetSeatConfigForEntity(vehicle)
```

| Parameter | Type | Description |
|---|---|---|
| `vehicle` | `number` | A vehicle entity handle |

**Returns:** `VehicleSeatConfig` or `nil` if the model has no configured seats.

**Example:**

```lua
local vehicle = GetVehiclePedIsIn(PlayerPedId(), false)
local cfg = GetSeatConfigForEntity(vehicle)
if cfg then
    print(('This vehicle has %d extra seats'):format(cfg:count()))
end
```

## VehicleRegistry

See [Server Exports — Shared globals](/rc_extra_seats/developer-api/server-exports#shared-globals-available-on-both-sides). The same class definitions apply on the client.

## Seat, VehicleSeatConfig, Occupancy

All three classes from `shared/classes.lua` are available as globals on the client. See the [Server Exports](/rc_extra_seats/developer-api/server-exports#shared-globals-available-on-both-sides) page for method signatures.

On the client, `Occupancy` is read-only in practice — the client reads the statebag to check seat availability but never writes it. Writes are server-authoritative.
