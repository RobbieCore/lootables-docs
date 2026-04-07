# Requirements

## Required Dependencies

| Dependency | Purpose |
|-----------|---------|
| `mysql-async` or `oxmysql` | Database driver. One of these must be installed and started before `ls_lootables` |
| `kq_link` | Framework bridge. Auto-detects your framework (ESX, QBCore, QBox, ox_core). Must be started before `ls_lootables` |

## Optional Dependencies

| Dependency | Purpose |
|-----------|---------|
| `ox_target` | Target-based interaction system |
| `qtarget` | Alternative target system |
| `qb-target` | QBCore target system |
| `cd-dispatch` | Police dispatch alerts (cd_dispatch) |
| `ps-dispatch` | Police dispatch alerts (Project Sloth) |
| `core-dispatch` | Police dispatch alerts (core_dispatch) |

## Framework Support

Lootables uses `kq_link` to communicate with your framework. This means:

- **No framework configuration needed** — `kq_link` detects your framework automatically
- Works with **ESX**, **QBCore**, **QBox**, **ox_core**, and any framework supported by `kq_link`
- Item adding, removing, money, job checks — all handled through `kq_link`

## Server Requirements

- FiveM server running **Cerulean** artifacts or newer
- Lua 5.4 enabled (set automatically via `fxmanifest.lua`)
- MySQL database accessible by your SQL resource
