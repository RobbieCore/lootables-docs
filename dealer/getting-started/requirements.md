# Requirements

## Dependencies

| Dependency | Required | Purpose |
|-----------|----------|---------|
| `oxmysql` | Yes | Database driver. Referenced by `ServerConfig.sqlDriver`. Must be started before `rc_dealer`. |
| `ox_inventory` | Yes | Item inventory system and evidence-note metadata for the cop case notebook. |
| `kq_link` | Yes | Framework, inventory, and job bridge. Handles ESX, QBCore, QBox, and others automatically. Configure your framework in `kq_link` — `rc_dealer` never calls a framework directly. Must be started before `rc_dealer`. |
| `rc_phonelink` | Optional | Adds the burner as an app inside your phone resource. Without it, players open the burner via command or keybind. |

## What kq_link Handles

`kq_link` is the bridge between NPC Dealers and your server stack. It auto-detects and handles:

- **Framework** — ESX, QBCore, QBox, ox_core, TMC, vRP, and others
- **Inventory** — item adding, removing, checking, and metadata (used for the cop evidence note)
- **Jobs** — job name detection for the cop gate (`ServerConfig.copJobs`)
- **Money** — cash account reads and writes for hire fees, payouts, and bounties

No manual framework configuration is needed inside `rc_dealer`. Set your framework up in `kq_link` and it propagates automatically.

## Server Requirements

- FiveM server running **Cerulean** artifacts or newer
- Lua 5.4 enabled (set automatically via `fxmanifest.lua`)
- MySQL-compatible database accessible to `oxmysql`
