# Lootables

A database-driven lootable box system for FiveM servers. Place interactive crates, safes, and shipping containers throughout your game world using a full in-game admin UI. Players crack them open through skill-based minigames to earn randomized loot.

Everything is stored in MySQL — positions, loot tables, items, and metadata. No config file editing required for day-to-day management.

---

## Key Features

- **4 box types** with unique minigames: Crates, Small Safes, Big Safes, and Shipping Containers
- **Full in-game admin panel** — place, position, and configure boxes without touching the database
- **3D Gizmo editor** — translate, rotate, snap-to-ground, and clone boxes visually
- **Database-driven** — all data stored in MySQL, automatic table creation and migration
- **Auto framework detection** — powered by `kq_link`, works with ESX, QBCore, QBox, ox_core and more
- **Randomized loot** — per-item drop chance, min/max amounts, independent rolls
- **Item management UI** — manage loot items, categories, and metadata in-game
- **Export system** — let other scripts spawn, reset, or delete lootables programmatically
- **Police requirements** — require minimum police online (global or per-box)
- **Dispatch integration** — built-in dispatch or plug into cd-dispatch, ps-dispatch, core-dispatch
- **Target system support** — ox_target, qtarget, qb-target, or proximity prompts
- **Configurable reset timers** — per-box cooldowns, boxes refill automatically
- **Locale support** — full localization for server and UI strings

---

## Box Types

| Type | Minigame | Description |
|------|----------|-------------|
| **Crate** | A/D Key Alternation | Pry open the crate by alternating keys (20 presses) |
| **Small Safe** | Dial Rotation | Crack the combination by matching 3 numbers |
| **Big Safe** | Dial Rotation | Same mechanic, larger safe model |
| **Shipping Container** | Thermite | Burn through the lock on a timed sequence |

---

## Support

For support, open a ticket in the [Robicore Discord](https://discord.gg/your-link).
