# Installation

## 1. Add the resource

Place the `rc_dealer` folder in your server's `resources/` directory.

## 2. Build the NUI

The burner phone interface must be compiled before the resource can start. Run these commands once from inside the `rc_dealer` folder:

```sh
cd nui
npm install
npm run build
```

Verify that `nui/dist/nui.html` exists after the build completes. If the file is missing, the build failed — check npm output for errors.

**Shortcut:** `tools/prepare_prod.py` runs the NUI build, checks prerequisites, and writes a `PROD-LAUNCH.md` checklist into the resource root with values pulled from your actual config files. Requires Python 3.

```sh
python tools/prepare_prod.py

# Skip the build and only regenerate the checklist:
python tools/prepare_prod.py --no-build
```

Read the generated `PROD-LAUNCH.md` before first launch.

## 3. Update server.cfg

Dependencies must be ensured **before** `rc_dealer`. Load order matters.

```
ensure oxmysql
ensure ox_inventory
ensure kq_link
ensure rc_phonelink   # optional — only if you use the phone app
ensure rc_dealer
```

## 4. Grant admin permissions

Admin commands (dashboard, reload, recruiter placement, item management) are gated by an ACE node. Grant it to your admin group:

```
add_ace group.admin command.npcsell_reload allow
```

The ACE node is set in `ServerConfig.reloadAce` (default `command.npcsell_reload`). If you change it, update this line to match.

## 5. Register inventory items

Add the following to your `ox_inventory` item definitions (`data/items.lua`):

- **The evidence note item** — `rc_note` by default (set by `Config.noteItem`). Register it as a usable item with metadata support. A cop must carry one to frisk or interrogate a dealer; using it opens the case report.
- **Drug items** — every item name seeded under `ServerConfig.Defaults.Items` (default: `weed_baggy`, `coke_baggy`, `meth_baggy`, `oxy`) must exist as a real inventory item. Item names must match exactly.
- **Burner phone item** — only needed if you set `Config.useItem` to an item name (e.g. `'burner_phone'`). Disabled by default.

## 6. Start the server

Database tables are created automatically on first start — no SQL file to import. Gameplay tuning (items, prices, corners, hire spots) is seeded from `server/server.config.lua` into the database on that first start.

Check the server console for any `rc_dealer` errors after starting.

## 7. Verify

1. No errors in the server console for `rc_dealer`.
2. Run `/burner` as a player — the burner interface opens.
3. Run `/npcselladmin` as an admin (with the ACE granted) — the admin dashboard opens.
4. Walk to a recruiter spot and hire a dealer; supply and assign them to confirm the full loop works.
5. As a cop character carrying the `rc_note` item, approach an active dealer — confirm the frisk prompt appears.
