# Commands & Keybinds

## Player Commands

| Command | Config option | Purpose |
|---------|--------------|---------|
| `/burner` | `Config.openCommand` | Opens the burner phone. Set `Config.openCommand = false` to disable. |

Players can also open the burner with a keybind (`Config.openKeybind`) or by using an item (`Config.useItem`). Both are `false` by default — set either to activate it.

```lua
Config.openCommand = 'burner'   -- rename or set false to disable
Config.openKeybind = false      -- e.g. 'F7'
Config.useItem     = false      -- e.g. 'burner_phone'
```

## Admin Commands

These commands require the ACE node set in `ServerConfig.reloadAce` (default `command.npcsell_reload`).

```lua
Config.adminCommand     = 'npcselladmin'   -- admin dashboard
Config.recruiterCommand = 'addrecruiter'   -- recruiter placement editor
```

| Command | Config option | Purpose |
|---------|--------------|---------|
| `/npcselladmin` | `Config.adminCommand` | Opens the admin dashboard (item whitelist + dealer weapon whitelist). |
| `/addrecruiter` | `Config.recruiterCommand` | Opens the in-world recruiter placement editor. |
| `/npcsell_reload` | *(fixed)* | Re-seeds missing database rows from the current `Defaults` and reloads live settings. Run after changing seeded defaults or adding items. |
| `/npcsell_additem <item> <min> <max> <suggested>` | *(fixed)* | Adds or updates a sellable item in the live whitelist. Example: `/npcsell_additem weed_baggy 40 180 90`. |

Grant the ACE in `server.cfg`:

```cfg
add_ace group.admin command.npcsell_reload allow
```

### Admin UI visibility switch

```lua
Config.admin = true
```

| Option | Purpose | Default |
|--------|---------|---------|
| `Config.admin` | Master switch for all in-world admin UI: the Move/Remove prompts on recruiter peds and the `/npcselladmin` dashboard client-side. Set `false` to hide admin prompts for recording or showcase without removing the ACE. The server always re-validates the ACE on every admin action regardless of this flag. | `true` |

## Walk-Route Recorder

```lua
Config.routeCommand = 'burnerroute'
```

| Command | Purpose |
|---------|---------|
| `/burnerroute new <name>` | Start recording a new walk route with the given name |
| `/burnerroute point` | Add a stop at the current position |
| `/burnerroute save` | Save the current route (minimum 2 stops) |
| `/burnerroute cancel` | Discard and exit the recorder |

Available to any player who can open the burner. The route is attached to a dealer via the burner app. The in-world path editor (accessible via the "Set sell spots" prompt on a dealer ped) is the primary method for laying out routes — the recorder command is an alternative text-command flow.

## Cop Interactions (Job-Gated)

These are in-world interactions, not typed commands. Available to players whose job is listed in `ServerConfig.copJobs`.

| Interaction | Trigger |
|-------------|---------|
| Frisk (search) | Approach an active dealer, aim at them, press **E** within `Config.search.reach` metres. Requires carrying the `Config.noteItem` item. |
| Interrogate (crack) | Approach an active dealer, stay within `Config.interrogate.reach` metres, and trigger crack. The server opens the Board with one of its pooled minigames — no subdue step, the dealer is never damaged. Requires carrying the `Config.noteItem` item. |

## Fixed Editor Keybinds

These bindings are not configurable.

### Recruiter Placement Editor (`/addrecruiter`)

| Key | Action |
|-----|--------|
| Scroll wheel | Rotate the ped |
| Z + Scroll wheel | Adjust height |
| Tab | Cycle ped model |
| Enter | Save and place |
| Backspace | Cancel |

### Walk-Route Editor (`/burnerroute`)

| Key | Action |
|-----|--------|
| E | Add a stop at the current position |
| Left mouse button | Select a stop |
| X | Delete the selected stop |
| Scroll wheel | Adjust stop dwell time ±5 s |
| L | Toggle loop mode |
| Enter | Save the route |
| Backspace | Cancel |

## Diagnostic Commands

These commands help diagnose common configuration problems and are available to ACE admins or the server console.

| Command | Who | Purpose |
|---------|-----|---------|
| `/rc_copcheck` | Any player (output to F8) | Client-side dump of the cop gate check and every nearby dealer's state, ped adoption, and distance. Use when a cop reports that frisk/interrogate options are not appearing. |
| `/npcsell_diag <playerId> <item>` | ACE admin or server console | Walks every layer of the item-count chain for a player and item name. Use when a player cannot hand over or receive items from a dealer. |

### Path Editor Colors

The visual guides in the route editor use these colors, configurable in `config.lua`:

```lua
Config.EditorColors = {
    path     = { 0, 255, 110 },    -- segment beams
    loopLink = { 60, 160, 255 },   -- closing segment in loop mode
    stop     = { 0, 230, 110 },    -- stop pillars
    selected = { 255, 70, 70 },    -- selected stop
}
```

Each value is `{ R, G, B }` in 0–255 range.
