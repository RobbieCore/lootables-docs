# Installation

## 1. Add the resource

Place the `rc_dealer` folder in your server's `resources/` directory. The burner phone interface ships pre-built — no compile step needed.

## 2. Update server.cfg

Dependencies must be ensured **before** `rc_dealer`. Load order matters.

```
ensure oxmysql
ensure ox_inventory
ensure kq_link
ensure rc_phonelink   # optional — only if you use the phone app
ensure rc_dealer
```

## 3. Grant admin permissions

Admin commands (dashboard, reload, recruiter placement, item management) are gated by an ACE node. Grant it to your admin group:

```
add_ace group.admin command.npcsell_reload allow
```

The ACE node is set in `ServerConfig.reloadAce` (default `command.npcsell_reload`). If you change it, update this line to match.

## 4. Register inventory items

Add the following to your `ox_inventory` item definitions (`data/items.lua`):

- **The evidence note item** — `rc_note` by default (set by `Config.noteItem`). Register it as a usable item with metadata support. A cop must carry one to frisk or interrogate a dealer; using it opens the case report.
- **Drug items** — every item name seeded under `ServerConfig.Defaults.Items` (default: `weed_baggy`, `coke_baggy`, `meth_baggy`, `oxy`) must exist as a real inventory item. Item names must match exactly.
- **Burner phone item** — only needed if you set `Config.useItem` to an item name (e.g. `'burner_phone'`). Disabled by default.

## 5. Start the server

Database tables are created automatically on first start — no SQL file to import. Gameplay tuning (items, prices, corners, hire spots) is seeded from `server/server.config.lua` into the database on that first start.

Check the server console for any `rc_dealer` errors after starting.

## 6. Verify

1. No errors in the server console for `rc_dealer`.
2. Run `/burner` as a player — the burner interface opens.
3. Run `/npcselladmin` as an admin (with the ACE granted) — the admin dashboard opens.
4. Walk to a recruiter spot and hire a dealer; supply and assign them to confirm the full loop works.
5. As a cop character carrying the `rc_note` item, approach an active dealer — confirm the frisk prompt appears.
