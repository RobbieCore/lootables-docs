# Requirements

## Dependencies

| Dependency | Purpose |
|-----------|---------|
| `mysql-async` or `oxmysql` | Database driver. One of these must be installed and started before `ls_lootables` |
| `kq_link` | Auto-detects your framework, inventory system, and targeting system. Must be started before `ls_lootables` |

## What kq_link Handles

`kq_link` is the bridge between Lootables and your server. It automatically detects and handles:

- **Framework** — ESX, QBCore, QBox, ox_core, and others
- **Inventory** — item adding, removing, checking
- **Targeting** — ox_target, qtarget, qb-target, and others
- **Money** — adding, removing, balance checks
- **Jobs** — police count, job detection

No manual configuration is needed for any of these. Just make sure `kq_link` is started before `ls_lootables`.

## Server Requirements

- FiveM server running **Cerulean** artifacts or newer
- Lua 5.4 enabled (set automatically via `fxmanifest.lua`)
- MySQL database accessible by your SQL resource
