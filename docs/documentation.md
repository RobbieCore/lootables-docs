# Lootables

## 1. Overview

Lootables is a database-driven lootable box system for FiveM servers. Admins place interactive boxes throughout the game world using an in-game UI. Players interact with them through skill-based minigames to receive randomized loot.

### Key Features

- **Four box types**: Crates, Small Safes, Big Safes, and Shipping Containers
- **Unique minigames per type**: A/D key alternation, safe dial cracking, thermite breach
- **Full in-game admin UI**: Place, position, configure, and manage boxes without touching the database
- **3D Gizmo editor**: Translate, rotate, snap-to-ground, and clone boxes visually
- **Per-box configuration**: Custom loot tables, required items/weapons, police requirements, reset timers
- **Item management UI**: Create and manage loot items with categories and metadata
- **Export system**: Expose lootables to other scripts for programmatic spawning, resetting, and deletion
- **Framework support**: ESX and QBCore
- **Target system support**: ox_target, qtarget, qb-target
- **Dispatch integration**: Built-in dispatch or cd-dispatch, ps-dispatch, core-dispatch
- **Automatic database setup**: Tables are created and migrated automatically on first start

---

## 2. Installation

### Requirements

- FiveM server (Cerulean artifacts or newer)
- **One** SQL resource: `mysql-async` **or** `oxmysql`
- `kq_link` (framework bridge -- auto-detects ESX, QBCore, QBox, ox_core)

### Optional Dependencies

- `ox_target`, `qtarget`, or `qb-target` (for target-based interaction)
- `cd-dispatch`, `ps-dispatch`, or `core-dispatch` (for police dispatch alerts)

### Setup

1. Place the `ls_lootables` folder in your server's `resources/` directory.

2. Set your SQL driver in `config.lua` (if not using `mysql-async`):
   ```lua
   Config.sqlDriver = "mysql"    -- for mysql-async (default)
   -- or
   Config.sqlDriver = "oxmysql"  -- for oxmysql
   ```

3. Add to your `server.cfg` **after** your framework, SQL, and kq_link resources:
   ```
   ensure ls_lootables
   ```

5. Grant admin permissions:
   ```
   add_ace identifier.discord:YOUR_DISCORD_ID lootables.admin allow
   ```
   Replace `YOUR_DISCORD_ID` with your Discord user ID (or use another identifier type).

6. Start or restart your server. Database tables are created automatically.

---

## 3. Configuration

All configuration is in `config.lua`.

### General

| Option | Purpose | Default |
|--------|---------|---------|
| `Config.debug` | Enable debug output in server console | `false` |
| `Config.logs` | Enable logging | `false` |

### SQL Driver

| Option | Purpose | Default |
|--------|---------|---------|
| `Config.sqlDriver` | SQL resource name | `"mysql"` |

Accepted values: `"mysql"` (mysql-async), `"oxmysql"`, or a custom resource name.

### Target System

| Option | Purpose | Default |
|--------|---------|---------|
| `Config.target.enabled` | Use a target system instead of proximity prompts | `false` |
| `Config.target.system` | Which target system to use | `'ox_target'` |

Accepted values: `'ox_target'`, `'qtarget'`, `'qb-target'`

### Interaction

| Option | Purpose | Default |
|--------|---------|---------|
| `Config.interactionDistance` | How close (meters) a player must be to interact | `5.0` |
| `Config.showLootNotifications` | Show toast notification when receiving loot | `true` |
| `Config.showCooldownMessages` | Show message when a box is on cooldown | `true` |
| `Config.removeRequiredItems` | Remove required items from the player after opening | `true` |

### Cooldowns

All values in **milliseconds**.

| Option | Purpose | Default |
|--------|---------|---------|
| `Config.cooldowns.errorMessage` | Duration error messages are shown | `2500` |
| `Config.cooldowns.successOpen` | Cooldown after successfully opening a box | `1500` |
| `Config.cooldowns.pickupItem` | Cooldown after picking up an item | `2500` |

### Player Visibility

| Option | Purpose | Default |
|--------|---------|---------|
| `Config.invisible.enabled` | Make player semi-invisible while looting | `false` |
| `Config.invisible.alpha` | Player alpha while invisible (0 = invisible, 255 = visible) | `50` |

### Drop Props

| Option | Purpose | Default |
|--------|---------|---------|
| `Config.dropProps.freeze` | Freeze loot props when spawned | `true` |
| `Config.dropProps.collision` | Enable collision for loot props | `true` |
| `Config.dropProps.spawnRadius` | Max spawn distance from the box (meters) | `2.0` |

### Police System

| Option | Purpose | Default |
|--------|---------|---------|
| `Config.police.enabled` | Enable police count requirement | `true` |
| `Config.police.jobNames` | Job names that count as police | `{ 'police' }` |
| `Config.police.minCount` | Default minimum police required (0 = disabled) | `0` |
| `Config.police.notifyPlayer` | Notify player when not enough police online | `true` |

The minimum police count can also be overridden per-box in the admin panel.

### Dispatch

| Option | Purpose | Default |
|--------|---------|---------|
| `Config.dispatch.enabled` | Enable police dispatch alerts on box opening | `false` |
| `Config.dispatch.chance` | Chance (0-100) of alerting police | `100` |
| `Config.dispatch.system` | Dispatch system to use | `'default'` |
| `Config.dispatch.eventName` | Event name shown in dispatch | `'Box Opened'` |
| `Config.dispatch.blip.sprite` | Map blip sprite | `788` |
| `Config.dispatch.blip.color` | Map blip color | `75` |
| `Config.dispatch.blip.scale` | Map blip scale | `1.0` |
| `Config.dispatch.blip.timeout` | Blip timeout in seconds | `60` |
| `Config.dispatch.blip.showRadar` | Show blip on minimap | `true` |

Accepted dispatch systems: `'default'`, `'cd-dispatch'`, `'ps-dispatch'`, `'core-dispatch-old'`, `'core-dispatch-new'`

### Commands

| Option | Purpose | Default |
|--------|---------|---------|
| `Config.commands.placebox` | Command to start placement mode | `'placebox'` |
| `Config.commands.lootables` | Command to open lootables editor | `'lootables'` |
| `Config.commands.items` | Command to open items management | `'items'` |
| `Config.commands.metadata` | Command to open metadata fields manager | `'metadata'` |
| `Config.commands.exportlootable` | Command to open export management | `'exportlootable'` |

### Placement

| Option | Purpose | Default |
|--------|---------|---------|
| `Config.placement.enabled` | Enable the admin placement system | `true` |
| `Config.placement.acePermission` | ACE permission required | `'lootables.admin'` |
| `Config.placement.keys.confirm` | Key to confirm placement | `'H'` |
| `Config.placement.keys.cancel` | Key to cancel placement | `'ESC'` |

---

## 4. Usage

### Admin Commands

| Command | Permission | Description |
|---------|------------|-------------|
| `/placebox` | `lootables.admin` | Open the lootable placement and management panel |
| `/exportlootable` | `lootables.admin` | Open the export management panel |
| `/items` | `lootables.admin` | Open the item management panel |
| `/metadata` | `lootables.admin` | Open the metadata fields manager |

### Placing a New Box

1. Run `/placebox` in chat.
2. Select **Create New**.
3. You enter freecam mode. Use `TAB` to cycle through box types (Crate, Small Safe, Big Safe, Shipping Container).
4. Aim at the desired location and press `H` to confirm placement.
5. The 3D gizmo editor appears for fine-tuning position and rotation.
6. The configuration panel opens on the right side of the screen.
7. Configure the box: add loot items, set required items/weapons, police count, reset time, and display name.
8. Click **Save** to store the box.

### Gizmo Editor Controls

| Key | Action |
|-----|--------|
| `T` | Translate mode (move the box) |
| `R` | Rotate mode |
| `Shift + Drag` | Clone/duplicate the box |
| `G` | Snap to ground |
| `Delete` | Delete entity |

### Managing Existing Boxes

1. Run `/placebox` and select **Manage Existing**.
2. Use `[` and `]` keys to navigate between existing boxes.
3. Edit configuration in the side panel.
4. Click **Save All** to apply changes.

### Managing Items

1. Run `/items` to open the item manager.
2. Add items with:
   - **Item Name**: Must match your inventory system's item name exactly
   - **Display Name**: Friendly name shown in the UI
   - **Category**: Organize items into groups for easier browsing
   - **Min/Max Amount**: Default quantity range
   - **Chance**: Default drop chance (0-100)
   - **Prop Model**: GTA prop to display when dropped as loot
   - **Metadata**: Optional key-value data attached to the item (serial numbers, durability, etc.)

### Managing Exports

1. Run `/exportlootable` to open the export manager.
2. Create a named export for any placed box.
3. Other scripts can then control that box programmatically using the export name.

### Managing Metadata Fields

1. Run `/metadata` to open the metadata field manager.
2. Define reusable metadata fields (e.g., serial_number, durability, weapon_quality).
3. Fields can be of type: `string`, `number`, or `boolean`.
4. These fields become available when configuring item metadata in the item manager.

### Player Experience

1. A player approaches a placed box (within interaction distance).
2. A prompt appears (or a target option if target system is enabled).
3. Player presses `E` to interact.
4. If requirements are met (required items, weapons, police count), the minigame starts.
5. On success, loot props spawn near the box.
6. Player walks up to each prop and presses `E` to collect.
7. After the configured reset time, the box becomes available again.

### Box Types and Minigames

| Type | Minigame |
|------|----------|
| **Crate** | Alternate `A` and `D` keys rapidly to pry open |
| **Small Safe** | Rotate a dial to match 3 numbers |
| **Big Safe** | Rotate a dial to match 3 numbers |
| **Shipping Container** | Thermite breach with a timed sequence |

---

## 5. Customization

### Safe to Modify

The following files are designed for customization and are not obfuscated:

- **`config.lua`** - All configuration values described above
- **`server/editable/functions.lua`** - Server-side utilities (SQL abstraction, police count)
- **`server/editable/qb.lua`** - Framework function overrides via kq_link (item, money, job checks)
- **`server/editable/dispatch.lua`** - Dispatch system routing
- **`client/editable/functions.lua`** - Client-side utilities (animations, tooltips)
- **`client/editable/dispatch.lua`** - Client dispatch rendering (blips, notifications)
- **`locale/locale.lua`** - All server/client text strings
- **`locale/ui.locale.lua`** - All UI text strings (minigame labels, buttons)

### Locale Customization

Edit `locale/locale.lua` to change any player-facing text:

```lua
Locale = {
    ['safe.press_to_open'] = 'Press ~g~[~w~E~g~]~w~ to open the safe',
    ['crate.press_to_open'] = 'Press ~g~[~w~E~g~]~w~ to open crate',
    ['container.press_to_open'] = 'Press ~g~[~w~E~g~]~w~ to open the container',
    ['error.not_enough_police'] = 'Not enough police online! Required: %d, Online: %d',
    -- etc.
}
```

Variables like `%d` are optional. Removing them will not cause errors.

Edit `locale/ui.locale.lua` to change minigame UI text:

```lua
UILocale = {
    ['minigame.crate.header'] = 'CRATE OPENING',
    ['minigame.safe.header'] = 'SAFE CRACKING',
    ['minigame.container.header'] = 'THERMITE BREACH',
    -- etc.
}
```

---

## 6. Integration

### Server-Side Exports

**Spawn a lootable by export name at specific coordinates:**
```lua
exports['ls_lootables']:SpawnLootable(exportName, coords, heading, deleteOnLooted)
-- exportName: string (the export name configured in the export manager)
-- coords: vector3 (world position)
-- heading: number (rotation heading)
-- deleteOnLooted: boolean (remove after looting)
```

**Delete a spawned lootable by export name:**
```lua
exports['ls_lootables']:DeleteLootable(exportName)
```

**Reset a lootable by export name (make it lootable again):**
```lua
exports['ls_lootables']:ResetLootable(exportName)
```

**Clear a spawned instance by ID:**
```lua
exports['ls_lootables']:ClearSpawnedInstanceById(instanceId)
```

**Get a box by ID:**
```lua
local crate = exports['ls_lootables']:GetCrateById(id)
local safe = exports['ls_lootables']:GetSafeById(id)
local container = exports['ls_lootables']:GetContainerById(id)
```

**Remove a box by ID:**
```lua
exports['ls_lootables']:RemoveCrateById(id)
exports['ls_lootables']:RemoveSafeById(id)
exports['ls_lootables']:RemoveContainerById(id)
```

### Client-Side Exports

**Register a callback for when a player successfully opens any box:**
```lua
exports['ls_lootables']:RegisterOnPlayerSuccessCallback(function(type)
    -- type: 'container', 'safe', or 'crate'
    print('Player opened a ' .. type)
end)
```

---

## 7. FAQ / Troubleshooting

### Boxes are not spawning for players

- Verify the box is enabled in the admin panel.
- If the box is marked as exportable, it must be spawned via the export API.
- Check that the player is within the configured `loadDistance`.
- Check the server console for database errors on startup.

### Items are not being given to players

- Ensure the item name in the loot configuration **exactly matches** the item name registered in your inventory system.
- Verify `kq_link` is started before `ls_lootables` in your `server.cfg`.

### Admin commands are not working

- Verify the ACE permission is set correctly:
  ```
  add_ace identifier.discord:YOUR_ID lootables.admin allow
  ```
- If using a different identifier type, adjust accordingly (e.g., `identifier.license:xxx`).
- Make sure `Config.alternativeIdentifier` matches the identifier type you're using for ACE permissions.

### The box stays "busy" and cannot be opened

- This can happen if a player disconnects mid-interaction. The state resets automatically when the reset timer fires.
- Restarting the resource will also clear all stuck states.

### Police count requirement is blocking players

- Check `Config.police.enabled` and `Config.police.minCount` in your config.
- Individual boxes can override the minimum police count in their config panel.
- Setting the per-box minimum to `0` disables the police requirement for that box.

### Target system is not showing interaction options

- Ensure `Config.target.enabled = true` in your config.
- Verify `Config.target.system` matches your installed target resource name.
- Make sure the target resource is started before `ls_lootables`.

### Dispatch alerts are not firing

- Ensure `Config.dispatch.enabled = true`.
- Check that `Config.dispatch.system` matches your dispatch resource.
- Verify `Config.dispatch.chance` is greater than 0.

### Database errors on startup

- Ensure your SQL resource (`mysql-async` or `oxmysql`) is started **before** `ls_lootables` in your `server.cfg`.
- Verify `Config.sqlDriver` matches your SQL resource.
- Check the server console for specific error messages and report them to the developer if needed.

### How do I change the reset time for a box?

Open the admin panel (`/placebox` > Manage Existing), navigate to the box, and change the **Reset Time** value in the configuration panel. Save the changes.

### How do I require specific items or weapons to open a box?

In the admin panel configuration for each box, add items to the **Required Items** or **Required Weapons** fields. If `Config.removeRequiredItems` is `true`, required items will be consumed when the box is opened.
