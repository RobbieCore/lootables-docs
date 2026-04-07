# Lootables — Configuration & Customization

> **Version:** 2.0.0
> **Resource:** `ls_lootables`

This document covers every file that is **not obfuscated** and is intended to be edited by server owners. These are the files listed under `escrow_ignore` in the resource manifest:

- `config.lua` — all server/client settings
- `server/editable/*.lua` — server-side function overrides (via kq_link)
- `client/editable/*.lua` — client-side utilities
- `locale/*.lua` — all translatable strings

---

## Table of Contents

1. [config.lua](#configlua)
   - [Database Driver](#database-driver)
   - [Target System](#target-system)
   - [Commands](#commands)
   - [Placement Admin Tool](#placement-admin-tool)
   - [Player Visibility](#player-visibility)
   - [Drop Props](#drop-props)
   - [Interaction](#interaction)
   - [Cooldowns](#cooldowns)
   - [Police System](#police-system)
   - [Dispatch](#dispatch)
   - [Box Types](#box-types)
2. [server/editable/functions.lua](#servereditable-functionslua)
3. [server/editable/qb.lua](#servereditable-qblua)
4. [server/editable/dispatch.lua](#servereditable-dispatchlua)
5. [client/editable/functions.lua](#clienteditable-functionslua)
6. [client/editable/dispatch.lua](#clienteditable-dispatchlua)
7. [locale/locale.lua](#localelocale-lua)
8. [locale/ui.locale.lua](#localeuilocale-lua)

---

## config.lua

The main configuration file. Both server and client scripts load it, so any change here affects both sides. Restart the resource after editing.

---

### Database Driver

```lua
Config.sqlDriver = "mysql"
```

| Value | Uses |
|-------|------|
| `"mysql"` | `mysql-async` (`MySQL.Sync.*`) |
| `"oxmysql"` | `oxmysql` (`exports.oxmysql:query_async`) |
| `"<resource>"` | Any resource that exposes `executeSync` (custom drivers) |

The driver name must match the resource started in your `server.cfg`. Ensure it is started **before** `ls_lootables`.

---

### Target System

```lua
Config.target = {
    enabled = false,
    system  = 'ox_target', -- 'qtarget' or 'qb-target'
}
```

| Option | Effect |
|--------|--------|
| `enabled = false` | Interaction uses proximity text prompts (press E within range) |
| `enabled = true` | Interaction is handled by a targeting resource instead |
| `system` | Which targeting resource to use when `enabled = true` |

When `enabled = true`, the script registers zones/bones on each spawned box. The `CanPlayerDoIt()` function in `client/editable/functions.lua` can gate access at the client level.

---

### Commands

```lua
Config.commands = {
    placebox       = 'placebox',
    lootables      = 'lootables',
    items          = 'items',
    metadata       = 'metadata',
    exportlootable = 'exportlootable',
}
```

| Option | Effect |
|--------|--------|
| `placebox` | Chat command to open placement mode |
| `lootables` | Chat command to open the lootables editor |
| `items` | Chat command to open items management |
| `metadata` | Chat command to open metadata fields manager |
| `exportlootable` | Chat command to open export management |

---

### Placement Admin Tool

```lua
Config.placement = {
    enabled       = true,
    acePermission = 'lootables.admin',
    keys = {
        confirm = 'H',
        cancel  = 'ESC',
    },
    defaultModel = 'prop_box_wood02a_pu',
}
```

| Option | Effect |
|--------|--------|
| `enabled` | Enables or disables the in-game admin placement system entirely |
| `acePermission` | The ACE permission node required to use the command |
| `keys.confirm` | Keyboard key to confirm box position and open the config panel |
| `keys.cancel` | Key to cancel and exit placement mode |
| `defaultModel` | Default prop model shown when first entering placement mode |

Grant the permission in `server.cfg`:
```
add_ace identifier.discord:YOUR_ID lootables.admin allow
```

---

### Player Visibility

```lua
Config.invisible = {
    enabled = false,
    alpha   = 50,
}
```

When `enabled = true`, the player's character becomes semi-transparent while a lootable box is open. `alpha` controls the transparency level: `0` is fully invisible, `255` is fully opaque.

---

### Drop Props

```lua
Config.dropProps = {
    freeze      = true,
    collision   = true,
    spawnRadius = 2.0,
}
```

After a box is successfully opened, loot items are spawned as 3D props in the world.

| Option | Effect |
|--------|--------|
| `freeze` | Prevents props from falling due to physics when spawned |
| `collision` | Whether spawned props have collision with the world and players |
| `spawnRadius` | How far from the box (in meters) loot props can appear |

---

### Interaction

```lua
Config.interactionDistance   = 5.0
Config.showLootNotifications = true
Config.showCooldownMessages  = true
Config.removeRequiredItems   = true
```

| Option | Effect |
|--------|--------|
| `interactionDistance` | Meters a player must be from a box to see the prompt and interact |
| `showLootNotifications` | Show a toast notification each time an item is picked up |
| `showCooldownMessages` | Show a message with remaining reset time when a box is already looted |
| `removeRequiredItems` | If `true`, required tools/items are removed from the player's inventory when the box is opened |

---

### Cooldowns

```lua
Config.cooldowns = {
    errorMessage = 2500, -- ms
    successOpen  = 1500, -- ms
    pickupItem   = 2500, -- ms
}
```

All values are in **milliseconds**.

| Option | Effect |
|--------|--------|
| `errorMessage` | How long error tooltips (e.g. "not enough police") stay on screen |
| `successOpen` | Delay after successfully opening a box before further interaction is allowed |
| `pickupItem` | Delay between picking up individual loot items |

---

### Police System

```lua
Config.police = {
    enabled      = true,
    jobNames     = { 'police' },
    minCount     = 0,
    notifyPlayer = true,
}
```

| Option | Effect |
|--------|--------|
| `enabled` | Enable or disable the police count requirement entirely |
| `jobNames` | List of job names counted as police (must match your server's job names exactly) |
| `minCount` | Global minimum number of police that must be online to open any box (0 = no requirement). Individual boxes can override this in their config |
| `notifyPlayer` | Notify the player when they fail the police count check |

The per-box `min_police` value (set in the admin panel) overrides `Config.police.minCount` for that specific box.

---

### Dispatch

```lua
Config.dispatch = {
    enabled   = false,
    chance    = 100,
    system    = 'default',
    eventName = 'Box Opened',
    blip = {
        sprite    = 788,
        color     = 75,
        scale     = 1.0,
        alpha     = 1.0,
        timeout   = 60,
        showRadar = true,
    },
}
```

| Option | Effect |
|--------|--------|
| `enabled` | When `false`, a simple on-screen blip is shown to online police only. When `true`, the configured dispatch system is triggered |
| `chance` | Percentage chance (0–100) that an alert fires when a box is opened |
| `system` | Which dispatch resource to route alerts through (see table below) |
| `eventName` | The alert title shown in the dispatch UI |
| `blip.sprite` | GTA blip sprite ID |
| `blip.color` | GTA blip color ID |
| `blip.scale` | Blip size on the map |
| `blip.alpha` | Blip opacity (0.0–1.0) |
| `blip.timeout` | Seconds before the blip disappears from the map |
| `blip.showRadar` | Whether the blip flashes on the radar |

**Supported dispatch systems:**

| `system` value | Resource |
|----------------|----------|
| `'default'` | Built-in: sends a blip to all online police players directly |
| `'ps-dispatch'` | `ps-dispatch` (uses `CustomAlert` export) |
| `'cd-dispatch'` | `cd_dispatch` (uses `AddNotification` server event) |
| `'core-dispatch-old'` | `core_dispatch` (older API: `addCall` server event) |
| `'core-dispatch-new'` | `core_dispach` (newer API: `addCall` export) |

For `ps-dispatch`, `cd-dispatch`, and `core-dispatch-*`, you can also set:
```lua
Config.dispatch.policeCode  = '10-90'    -- Code shown in dispatch UI
Config.dispatch.description = 'Lootable box has been opened'
```

---

### Box Types

`Config.boxTypes` defines every spawnable box in the game. Each entry in the table is one box type. The `id` field links the entry to database records.

```lua
Config.boxTypes = {
    {
        id           = 1,
        box_type     = 'crate',
        sub_type     = 'standard',
        display_name = 'Wooden Crate',
        default_model = 'prop_ld_crate_01',
        loadDistance = 100.0,
        parts = { ... },
        opening = { ... },
    },
    ...
}
```

| Field | Effect |
|-------|--------|
| `id` | Unique numeric ID. Must match `box_type_id` in `ls_lootable_boxes` database table. Do not change IDs for existing box types |
| `box_type` | Category string: `'crate'`, `'safe'`, or `'container'` |
| `sub_type` | Variant within the category: `'standard'`, `'small'`, `'big'`, `'shipping'` |
| `display_name` | Human-readable name shown in the admin UI |
| `default_model` | GTA prop model used when placing via the admin tool |
| `loadDistance` | Distance in meters at which the box entity spawns for nearby players |

#### parts

Defines the prop models and their relative offsets that make up the box. Each key inside `parts` is a named component.

```lua
parts = {
    main = {
        model  = 'prop_ld_crate_01',
        offset = { x = 0.0, y = 0.0, z = -1.0, h = 270.0 }
    },
    top = {
        model    = 'prop_ld_crate_lid_01',
        offset   = { x = 0.0, y = 0.0, z = 0.56 },
        rotation = { x = 0.0, y = 0.0, z = 0.0 }
    }
}
```

`offset` positions the part relative to the stored world coordinates. `h` inside offset is a heading (yaw) offset in degrees. `rotation` is a separate pitch/roll/yaw in degrees applied on top.

#### opening (crates only)

```lua
opening = {
    tool = { dict = '...', anim = '...' },
    grab = { dict = '...', anim = '...' },
}
```

`tool` plays when the player starts cracking the crate. `grab` plays when they pick up loot. Both take an animation dictionary name and animation name.

#### lock (safes only)

```lua
lock = {
    offset  = { x = -0.35, y = -0.05, z = 0.415 },
    outline = { r = 255, g = 255, b = 255, a = 100 }
}
```

`offset` positions the dial interaction point relative to the safe body. `outline` is the RGBA highlight colour shown when near the lock.

#### drop (safes only)

```lua
drop = { offset = { x = -0.3, y = 0.4, z = 0.5 } }
```

Offset from the safe body where loot props are spawned.

#### thermite (containers only)

```lua
thermite = {
    particleDict = 'scr_ch_finale',
    particleName = 'scr_ch_finale_thermal_burn',
    duration     = 15000,
    outline      = { r = 255, g = 255, b = 255, a = 100 }
}
```

| Field | Effect |
|-------|--------|
| `particleDict` | GTA particle effect dictionary |
| `particleName` | GTA particle effect name |
| `duration` | Thermite burn time in milliseconds. This is the minigame timer for containers |
| `outline` | Highlight colour on the container lock point |

#### Adding a new box type

1. Add a new entry to `Config.boxTypes` with a unique `id` that has never been used.
2. Set `box_type` to `'crate'`, `'safe'`, or `'container'` depending on which minigame and client handler should be used.
3. Choose the correct `parts` layout for that category.
4. Restart the resource. The new type will appear in the admin placement UI automatically.

> Do not reuse or reassign IDs from deleted box types. The ID is stored per-box in the database.

---

## server/editable/functions.lua

This file provides the SQL abstraction layer and server utility functions. Edit this file if you need to swap database drivers or customise how player identifiers or police counts are resolved.

### sqlFetch / sqlInsert

All database reads and writes in the resource go through these two functions.

```lua
function sqlFetch(query, data) ... end
function sqlInsert(query, data) ... end
```

The active driver is selected by `Config.sqlDriver`. If you use a custom database resource with a different API, you can override these functions here.

### GetIdentifier

```lua
function GetIdentifier(player) ... end
```

Returns the player's character identifier via `kq_link`. Override this if your server uses a custom identifier system.

### GetOnlinePoliceCount / CheckPoliceCount

```lua
function GetOnlinePoliceCount() ... end
function CheckPoliceCount(minRequired) ... end
```

`GetOnlinePoliceCount` uses `kq_link:GetPlayersWithJob()` with `Config.police.jobNames` to count online officers. Override this if you use a custom police/duty system.

---

## server/editable/qb.lua

Contains all server-side framework functions routed through `kq_link`. Despite the filename, this file is framework-agnostic — `kq_link` auto-detects ESX, QBCore, QBox, ox_core, etc.

### Functions you can override

| Function | Purpose |
|----------|---------|
| `AddPlayerItem(player, item, amount)` | Adds an item to the player's inventory. Returns `true` if successful |
| `RemovePlayerItem(player, item, amount)` | Removes an item from the player's inventory |
| `DoesPlayerHaveItem(player, item, amount)` | Returns `true` if the player has at least `amount` of `item` |
| `CanPlayerCarryItem(player, item, amount)` | Returns `true` if the player has space for `amount` more of `item` |
| `AddMoney(player, amount)` | Adds money to the player's account |
| `RemovePlayerMoney(player, amount)` | Removes money. Returns `true` if successful |
| `CheckPlayerMoney(player, amount)` | Returns `true` if the player has at least `amount` |
| `IsPolice(player)` | Returns `true` if the player's current job is in `Config.police.jobNames` |

Override these if you need custom logic beyond what `kq_link` provides.

---

## server/editable/dispatch.lua

Handles routing police alerts server-side.

```lua
AddEventHandler(resName .. ':server:PoliceAlert', function(locationCoords, boxType)
    if not Config.dispatch.enabled then
        -- send blip directly to each police player
    else
        -- forward to TriggerDispatchMessage on client
    end
end)
```

When `Config.dispatch.enabled = false`, the server event sends `activatePoliceAlarm` directly to each player whose `IsPolice()` returns `true`. When `true`, it sends `TriggerDispatchMessage` to the player who opened the box, which then routes to the configured dispatch system.

Modify this file if your dispatch system requires a server-side trigger rather than client-side.

---

## client/editable/functions.lua

Client-side utility functions. Override these to change interaction behaviour.

### CanPlayerDoIt

```lua
function CanPlayerDoIt()
    return true
end
```

Called before showing the interaction prompt. Return `false` to block the interaction entirely for the current player (e.g. during specific jobs, events, or when a condition is not met). This is the intended hook for target system overrides.

### Draw3DText

Renders floating text above a world coordinate. Used for proximity interaction prompts when the target system is disabled. Modify the font, scale, or shadow settings here if needed.

### ShowTooltip

Displays an on-screen help text message. Modify this to replace the default FiveM help text with your own notification system.

### PlayAnim

Handles requesting, loading and playing animation dictionaries on the client. Modify if your animation system requires a different approach.

---

## client/editable/dispatch.lua

Handles how dispatch alerts are rendered on the client: blips on the map and notifications on screen.

### Default system (no dispatch resource)

When `Config.dispatch.enabled = false`, online police players receive the `activatePoliceAlarm` event. This creates a timed blip on their map and shows a text notification. The blip is removed after 15 seconds.

### External dispatch systems

When `Config.dispatch.enabled = true`, the `TriggerDispatchMessage` event fires on the client of the player who opened the box. Inside that handler, the correct dispatch resource export or event is called based on `Config.dispatch.system`:

| System | Integration method |
|--------|--------------------|
| `ps-dispatch` | `exports['ps-dispatch']:CustomAlert(...)` |
| `core-dispatch-old` | `TriggerServerEvent('core_dispatch:addCall', ...)` |
| `core-dispatch-new` | `exports['core_dispach']:addCall(...)` |
| `cd-dispatch` | `TriggerServerEvent('cd_dispatch:AddNotification', ...)` |

### PoliceAlarm / ClearPoliceBlips

These functions create and remove map blips for the default (non-dispatch) system. Modify `PoliceAlarm` to change the blip timeout, or adjust `CreatePoliceBlip` to change blip properties beyond what the config exposes.

---

## locale/locale.lua

All in-game text shown to players. Edit the **right-hand side** of each entry only. Do not change the keys (left side).

```lua
Locale = {
    ['key'] = 'Your translated text here',
    ...
}
```

### Interaction prompts

| Key | Where it appears |
|-----|-----------------|
| `safe.press_to_open` | Proximity prompt above a safe |
| `safe.action_unlock` | Target system action label for safes |
| `container.press_to_open` | Proximity prompt above a container |
| `container.action_unlock` | Target system action label for containers |
| `crate.press_to_open` | Proximity prompt above a crate |
| `crate.action_open` | Target system action label for crates |
| `loot.press_to_pickup` | Prompt shown above a loot drop prop |
| `loot.action_pickup` | Target system action label for loot |

### Error messages

| Key | Shown when |
|-----|-----------|
| `error.no_required_items_safe` | Player lacks the required item to open a safe |
| `error.no_required_items_container` | Player lacks the required item to open a container |
| `error.no_required_items_crate` | Player lacks the required item to open a crate |
| `error.not_enough_police` | Police count is below the required minimum. Supports `%d` for required count and online count |
| `error.inventory_full` | Player's inventory has no space for loot |
| `error.generic` | Fallback for unspecified server-side errors |

### Dispatch messages

| Key | Used for |
|-----|---------|
| `dispatch.thieves_opened` | Start of the default dispatch alert message |
| `dispatch.police_dispatch` | Subtitle of the default dispatch notification |
| `dispatch.thieves` | Blip label shown on police maps |
| `dispatch.alert` | Fallback notification title |

### Gizmo controls

Labels shown in the admin gizmo HUD during box placement. These use standard GTA colour codes (`~g~`, `~w~`, etc.).

| Key | Shown for |
|-----|----------|
| `gizmo.translate` | Move mode button |
| `gizmo.rotate` | Rotate mode button |
| `gizmo.clone` | Clone mode button |
| `gizmo.next` / `gizmo.prev` | Cycle to next/previous prop |
| `gizmo.delete` | Delete entity button |
| `gizmo.snap_ground` | Snap-to-ground button |
| `gizmo.snap_rotation` | Snap rotation button |

### Format variables

Some keys support `%d` placeholders (replaced at runtime with numbers). The `LFormat` helper handles this safely — if you remove the `%d` from a string, the message is still returned without crashing.

---

## locale/ui.locale.lua

Translations for the Vue.js NUI frontend. These strings are loaded into the browser at runtime via the `UILocale` global.

> **Note:** After editing this file, rebuild the NUI with `npx mix --production` in the `nui/` directory, or restart the resource if your build pipeline is already set up.

### Crate minigame

| Key | Displayed as |
|-----|-------------|
| `minigame.crate.header` | Large header text in the crate minigame |
| `minigame.crate.instruction` | Instruction line above the progress bar |
| `minigame.crate.progress_label` | Label on the progress bar |
| `minigame.crate.keys_hint` | Hint text at the bottom |
| `minigame.cancel` | Cancel button label (shared with other minigames) |

### Safe minigame

| Key | Displayed as |
|-----|-------------|
| `minigame.safe.header` | Header text in the safe cracking minigame |
| `minigame.safe.turn_left` | Label for the left dial button |
| `minigame.safe.turn_right` | Label for the right dial button |
| `minigame.safe.tooltip` | Full instruction text explaining the dial mechanic |

### Container (thermite) minigame

| Key | Displayed as |
|-----|-------------|
| `minigame.container.header` | Header text |
| `minigame.container.instruction` | Instruction line |
| `minigame.container.cancel` | Cancel button label |

### General UI

| Key | Used for |
|-----|---------|
| `ui.success` | Success state label |
| `ui.failed` | Failed state label |
| `ui.loading` | Loading spinner label |
| `ui.close` | Close button label |
