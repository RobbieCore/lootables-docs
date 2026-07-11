# Admin Dashboard

Open the admin dashboard with the command configured in `Config.adminCommand` (default `/npcselladmin`). Requires the ACE node set in `ServerConfig.reloadAce` (default `command.npcsell_reload`).

```lua
Config.adminCommand = 'npcselladmin'
```

## What the Dashboard Manages

The dashboard covers two areas: the **sellable item whitelist** and the **dealer weapon whitelist**.

### Item Whitelist

Add new items dealers can sell, adjust price bounds on existing ones, enable or disable items, or remove items entirely — all without restarting the resource. Changes take effect immediately.

To add an item:
1. Open the dashboard with `/npcselladmin`.
2. Use the item search to find the inventory item name.
3. Set the minimum price, maximum price, and suggested price.
4. Save.

You can also add or update items via the server console or admin command:

```
/npcsell_additem <item> <minPrice> <maxPrice> <suggestedPrice>
```

Example:
```
/npcsell_additem weed_baggy 40 180 90
```

::: tip
Item names must match exactly what is registered in `ox_inventory`. Use the dashboard's inventory catalog search to find valid names already registered on your server.
:::

### Dealer Weapon Whitelist

Control which weapons owners are allowed to arm their dealers with. The whitelist is enforced server-side — an owner cannot hand a weapon to a dealer if that weapon's hash is not on the list.

From the dashboard:
- View the current whitelist.
- Add a weapon by its hash name (e.g. `WEAPON_PISTOL`).
- Remove a weapon to prevent owners from arming dealers with it.

An empty whitelist allows any weapon.

---

## Reload Command

```
/npcsell_reload
```

Reloads live settings into the running server and seeds any database rows that are missing (e.g. after you delete a row to reset a default). Does not overwrite existing rows. Run this after:

- Adding items to `ServerConfig.Defaults.Items` and wanting them seeded
- Changing `ServerConfig` scalar settings that you want applied without a full restart
- Deleting a database row to force a re-seed from `server/server.config.lua`

::: warning
`/npcsell_reload` does **not** apply `Defaults` changes to rows that already exist in the database. To reset a seeded value, delete the relevant row first, then reload.
:::
