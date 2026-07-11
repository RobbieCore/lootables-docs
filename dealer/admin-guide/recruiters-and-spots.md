# Recruiters & Spots

Recruiters are in-world NPC peds that players approach to hire a dealer. Corners are the working spots dealers are assigned to sell from.

## Recruiter Placement

### Opening the Placement Editor

Run the command configured in `Config.recruiterCommand` (default `/addrecruiter`). Requires the ACE node set in `ServerConfig.reloadAce`.

```lua
Config.recruiterCommand = 'addrecruiter'
Config.recruiterModels  = { 'g_m_y_mexgoon_01', 'a_m_m_hillbilly_02', 'g_m_y_lost_01' }
```

### Placement Editor Controls

| Key | Action |
|-----|--------|
| Scroll wheel | Rotate the ped |
| Z + Scroll wheel | Adjust height |
| Tab | Cycle through models in `Config.recruiterModels` |
| Enter | Save and place the recruiter |
| Backspace | Cancel without saving |

### Recruiter Models

The `Config.recruiterModels` list controls which ped models are available in the placement editor. Tab cycles through them. Add any valid base-game ped model name to expand the selection.

```lua
Config.recruiterModels = {
    'g_m_y_mexgoon_01',
    'a_m_m_hillbilly_02',
    'g_m_y_lost_01',
}
```

### Default Hire Spots

Two hire spots are seeded from `ServerConfig.Defaults.HireSpots` on first start:

| Label | Location |
|-------|----------|
| Alley behind Vanilla Unicorn | Behind the Vanilla Unicorn strip club |
| Yellow Jack backlot | Behind Yellow Jack Inn in Sandy Shores |

Additional spots placed with `/addrecruiter` are saved to the database and persist across restarts.

### Recruiter Blip

Map blips on recruiter spots help players find where to hire. Configure the blip in `config.lua`:

```lua
Config.recruiterBlip = {
    enabled    = true,
    sprite     = 480,
    color      = 6,
    scale      = 0.8,
    shortRange = false,
}
```

See [Discoverability](../configuration/discoverability.md) for option details.

---

## Working Corners

Corners are the spots dealers are assigned to sell from. Each has a label, coordinates, heading, and idle animation scenario.

### Default Corners

Five corners are seeded from `ServerConfig.Defaults.Corners` on first start:

| Label | Location |
|-------|----------|
| Grove Street | Davis, near the cul-de-sac |
| Forum Drive | Forum Drive, south LS |
| Vespucci Canals | Vespucci waterfront |
| Mirror Park | Mirror Park residential |
| Davis / Roy Lowenstein | Davis Avenue |

### Adding and Editing Corners

Add or edit corners via the admin dashboard (`/npcselladmin`). Changes are written to the database immediately.

When a dealer is assigned to a corner, they navigate to the corner's coordinates and begin working. The `Config.walkInDistance` setting controls whether they walk there or respawn at the start point if they are already nearby.

### Turf Radius

`ServerConfig.Defaults.Settings.turfRadius` (default `40` metres) prevents two dealers from being assigned to corners closer than this distance apart. This avoids overlapping territories causing confusion or split sales.
