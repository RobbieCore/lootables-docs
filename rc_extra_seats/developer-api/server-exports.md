# Server Exports

These functions are defined as globals in `server/server.lua` and are available to other server-side resources via the standard `exports` table.

## GetOccupancySnapshot

```lua
local snapshot = exports.rc_extra_seats:GetOccupancySnapshot()
```

Returns a shallow copy of the current server occupancy registry.

**Returns:** `table` — map of `{ [playerSrc] = { netId, seatIndex, hash, claimedAt } }`

| Field | Type | Description |
|---|---|---|
| `netId` | `number` | Network ID of the vehicle |
| `seatIndex` | `number` | 1-based index of the seat the player holds |
| `hash` | `number` | Model hash of the vehicle |
| `claimedAt` | `number` | Unix timestamp when the seat was claimed |

**Example:**

```lua
local snap = exports.rc_extra_seats:GetOccupancySnapshot()
for src, rec in pairs(snap) do
    print(('Player %d is in vehicle %d seat %d'):format(src, rec.netId, rec.seatIndex))
end
```

## ForceReleaseSeat

```lua
local released = exports.rc_extra_seats:ForceReleaseSeat(netId, seatIndex)
```

Finds whichever player holds the given vehicle + seat combination, releases them, and clears the statebag bit.

| Parameter | Type | Description |
|---|---|---|
| `netId` | `number` | Network ID of the vehicle |
| `seatIndex` | `number` | 1-based seat index |

**Returns:** `boolean` — `true` if a player was found and released (or the statebag bit was cleared), `false` if the seat was already free.

**Example:**

```lua
-- Free seat 2 on vehicle with netId 142
exports.rc_extra_seats:ForceReleaseSeat(142, 2)
```

## ForceReleasePlayer

```lua
local record = exports.rc_extra_seats:ForceReleasePlayer(playerSrc)
```

Frees whatever seat the given player currently holds.

| Parameter | Type | Description |
|---|---|---|
| `playerSrc` | `number` | The server source (player ID) to release |

**Returns:** `table` or `nil` — if the player was holding a seat, returns `{ netId, seatIndex }`. Returns `nil` if the player was not holding any seat.

**Example:**

```lua
local rec = exports.rc_extra_seats:ForceReleasePlayer(8)
if rec then
    print(('Freed player 8 from netId=%d seat=%d'):format(rec.netId, rec.seatIndex))
end
```

## ForceReleaseAll

```lua
local count = exports.rc_extra_seats:ForceReleaseAll()
```

Clears all active occupancy records and wipes `trunkSeats` statebags on every spawned vehicle.

**Returns:** `number` — count of occupancy records that were cleared.

**Example:**

```lua
local n = exports.rc_extra_seats:ForceReleaseAll()
print(('Cleared %d seat records'):format(n))
```

## RefreshModelLookup

```lua
exports.rc_extra_seats:RefreshModelLookup()
```

Rebuilds the server's internal vehicle→seat-config registry from the current state of `Config.pickupTruckModels`. Call this after modifying `Config.pickupTruckModels` from another resource at runtime.

**Returns:** nothing.

---

## Shared globals (available on both sides)

The following globals are defined in `shared/classes.lua` and loaded on both client and server. Other resources that load after `rc_extra_seats` can access them directly.

### VehicleRegistry

```lua
-- type: table<number, VehicleSeatConfig>
-- key: model hash, value: VehicleSeatConfig instance
local cfg = VehicleRegistry[GetHashKey('SANDKING')]
```

### GetSeatConfigForEntity

```lua
local cfg = GetSeatConfigForEntity(entity)
```

| Parameter | Type | Description |
|---|---|---|
| `entity` | `number` | A vehicle entity handle |

**Returns:** `VehicleSeatConfig` or `nil` if the model is not configured.

### Seat class

```lua
-- Access a specific seat
local cfg = GetSeatConfigForEntity(vehicle)
if cfg then
    local seat = cfg:getSeat(1)   -- seat at index 1
    print(seat.boneName, seat.detectRadius)
end
```

Key `Seat` fields readable after construction: `offset`, `boneName`, `heading`, `pitch`, `roll`, `detectRadius`, `kind`.

### VehicleSeatConfig methods

| Method | Returns | Description |
|---|---|---|
| `cfg:count()` | `number` | Number of seats defined for this model |
| `cfg:getSeat(i)` | `Seat` | Seat at 1-based index `i` |
| `cfg:findClosestDetect(vehicle, worldPos)` | `Seat, index` or `nil, nil` | Nearest seat whose detect radius contains `worldPos` |

### Occupancy class (server, authoritative)

```lua
local occ = Occupancy.decode(Entity(vehicle).state.trunkSeats, seatCount)
print(occ:isFree(1))     -- true/false
print(occ:isOccupied(2)) -- true/false
occ:claim(1)
occ:release(2)
Entity(vehicle).state:set('trunkSeats', occ:encode(), true)
```

::: warning
If you write to `trunkSeats` directly from another resource, the rc_extra_seats server registry will not know about it and the self-healing audit may overwrite your change. Use the exported `ForceReleaseSeat` / `ForceReleaseAll` functions instead of writing the statebag yourself.
:::
