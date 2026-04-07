# Commands

All admin chat commands can be renamed in `config.lua`.

## Configuration

```lua
Config.commands = {
    placebox       = 'placebox',
    lootables      = 'lootables',
    items          = 'items',
    metadata       = 'metadata',
    exportlootable = 'exportlootable',
}
```

| Option | Default Command | Purpose |
|--------|----------------|---------|
| `placebox` | `/placebox` | Open the placement and management panel |
| `lootables` | `/lootables` | Open the lootables editor |
| `items` | `/items` | Open the item management panel |
| `metadata` | `/metadata` | Open the metadata fields manager |
| `exportlootable` | `/exportlootable` | Open the export management panel |

## Renaming Commands

To change a command, edit the value:

```lua
Config.commands = {
    placebox       = 'lb',            -- /lb instead of /placebox
    items          = 'lootitems',     -- /lootitems instead of /items
    ...
}
```

## Permissions

All commands require the `lootables.admin` ACE permission (configurable via `Config.placement.acePermission`). Players without the permission will not see or be able to use these commands.

```
add_ace identifier.discord:YOUR_ID lootables.admin allow
```
