# Lootables

A database-driven lootable box system for FiveM servers. Place interactive crates, safes, and shipping containers throughout your game world using a full in-game admin UI. Players crack them open through skill-based minigames to earn randomized loot.

[Purchase on Robicore Store →](https://robicore.com)

---

## Key Features

- **4 box types, 3 synchronized minigames** — Crates (A/D alternation), Small & Big Safes (3-number dial), Shipping Containers (15s thermite burn)
- **Synchronized loot** — loot items are rolled server-side and picked up one at a time; when one player takes an item, it disappears for everyone
- **Gizmo placement editor** — translate (W) / rotate (R), snap-to-ground (Left Alt), shift-drag clone, [ / ] to cycle drop props, freecam (F)
- **Lootables Editor UI** (`/lootables`) — edit every box's loot pool, required items, required weapons, reset cooldown and display name live
- **Items Management UI** (`/items`) — CRUD your item catalog with categories, default min/max/chance, inventory prop, and custom metadata
- **Metadata Fields Manager** (`/metadata`) — define your own metadata fields (string / number / boolean) and attach them to items
- **Export Management UI** (`/exportlootable`) — turn any placed box into a named export with one click, copy-to-clipboard snippets
- **Server exports** — `SpawnLootable`, `DeleteLootable`, `ResetLootable` for heists, drug runs and dynamic events
- **Client callback** — `RegisterOnPlayerSuccessCallback` to hook into open events (`crate` / `safe` / `container`)
- **Police gate** — minimum cops online before a box can be opened, with optional player notification
- **Dispatch integration** — built-in blip dispatch plus `ps-dispatch`, `cd-dispatch`, `core-dispatch` (old & new), with configurable chance and event name
- **Framework / inventory / target auto-detection** via `kq_link` — ESX, QBCore, QBox; `ox_target`, `qtarget`, `qb-target`
- **Extensible** — define your own box types, models and minigame bindings in `Config.boxTypes`
- **Invisible boxes** — optional alpha override to attach lootability to existing world props
- **Optimized** — 0.00–0.01 ms idle, per-box stream distance, GlobalState sync (no polling), built-in entity garbage collector
