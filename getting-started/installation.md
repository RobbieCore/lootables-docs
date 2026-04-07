# Installation

## Requirements

- FiveM server (Cerulean artifacts or newer)
- **One** SQL resource: `mysql-async` **or** `oxmysql`
- `kq_link` (framework bridge — auto-detects ESX, QBCore, QBox, ox_core)

## Optional Dependencies

- `ox_target`, `qtarget`, or `qb-target` — for target-based interaction instead of proximity prompts
- `cd-dispatch`, `ps-dispatch`, or `core-dispatch` — for police dispatch alerts

## Setup Steps

### 1. Add the resource

Place the `ls_lootables` folder in your server's `resources/` directory.

### 2. Configure your SQL driver

Open `config.lua` and set the driver if you're not using `mysql-async`:

```lua
Config.sqlDriver = "mysql"    -- for mysql-async (default)
-- or
Config.sqlDriver = "oxmysql"  -- for oxmysql
```

### 3. Update server.cfg

Add to your `server.cfg` **after** your framework, SQL resource, and `kq_link`:

```
ensure ls_lootables
```

**Load order matters.** Your `server.cfg` should look something like:

```
ensure mysql-async       # or oxmysql
ensure es_extended       # or qb-core, etc.
ensure kq_link
ensure ls_lootables
```

### 4. Grant admin permissions

```
add_ace identifier.discord:YOUR_DISCORD_ID lootables.admin allow
```

Replace `YOUR_DISCORD_ID` with your actual Discord user ID. You can also use other identifier types:

```
add_ace identifier.license:YOUR_LICENSE lootables.admin allow
add_ace identifier.steam:YOUR_STEAM_HEX lootables.admin allow
```

### 5. Start the server

Database tables are created automatically on first start. Check your server console for any errors.

No manual SQL setup is required — the resource handles table creation and schema migration automatically.
