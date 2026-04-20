# Commands

All admin chat commands can be renamed in `config.lua`.

## Configuration

```lua
Config.commands = {
    placebox       = 'placebox',
    lootables      = 'lootables',
    items          = 'items',            -- routes to the Items (Presets) tab
    metadata       = 'metadata',         -- routes to the Metadata tab
    exportlootable = 'exportlootable',   -- routes to the Exports view
}
```

| Option | Default | Purpose |
|--------|---------|---------|
| `placebox` | `/placebox` | Placement mode — spawn a new box or edit an existing one |
| `lootables` | `/lootables` | Open the admin panel (Existing / Editor / Metadata / Items tabs) |
| `items` | `/items` | Shortcut to the **Items** tab inside the admin panel |
| `metadata` | `/metadata` | Shortcut to the **Metadata** tab |
| `exportlootable` | `/exportlootable` | Shortcut to the **Exports** view |

Since v2.1.0 the `/items`, `/metadata`, and `/exportlootable` commands are convenience shortcuts — they all route into the same all-in-one panel as `/lootables`, just focused on the relevant tab.

## Renaming

```lua
Config.commands = {
    placebox  = 'lb',          -- /lb instead of /placebox
    items     = 'lootitems',   -- /lootitems instead of /items
    -- ...
}
```

## Permissions

Every command is server-registered and gated by the `lootables.admin` ACE permission (configurable via `Config.placement.acePermission`). Players without the ACE see a silent no-op — the commands are hidden entirely.

```
add_ace identifier.discord:YOUR_ID lootables.admin allow
```

`Config.debug = true` bypasses the check for local development.
