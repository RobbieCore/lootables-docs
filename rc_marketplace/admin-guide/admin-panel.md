# Admin Panel

The admin panel lets you change runtime tunables without restarting the resource. All changes take effect immediately for all connected players.

## Opening the panel

Type `/mpadmin` in chat. You need the `rc_marketplace.admin` ACE permission (or `Config.debug = true`).

Type `/mpadmin` again to close, or press **ESC**.

::: tip
The admin panel always opens as a standalone NUI overlay, even when the marketplace is embedded in a phone. It does not use the phone iframe.
:::

## Runtime settings

All of the following are stored in the database (`rc_marketplace_settings` table) and survive resource restarts.

| Setting | Key | Default | Description |
|---|---|---|---|
| Ad posting cost | `adCost` | 1000 | Amount deducted when a player posts a new ad. Set to `0` for free posting. |
| Promotion cost | `promotionCost` | 300 | Extra charge for marking an ad as promoted (featured carousel). |
| Edit cost | `editCost` | 150 | Charge applied each time a player edits an existing ad. |
| Max ads per player | `maxAdsPerPlayer` | 10 | Maximum simultaneous active ads a single player can hold. Set to `0` for unlimited. |
| Auto-remove value | `removeOutdatedValue` | 10 | Numeric part of the auto-expiry window (e.g. `10`). |
| Auto-remove unit | `removeOutdatedUnit` | DAY | Time unit: `MINUTE`, `HOUR`, or `DAY`. |
| Currency symbol | `currencySymbol` | `$` | Symbol shown next to prices in the UI (max 8 characters). |
| Currency position | `currencyPosition` | `prefix` | `prefix` shows the symbol before the number; `suffix` shows it after. |

### Auto-remove

Ads older than the `removeOutdatedValue` + `removeOutdatedUnit` window are deleted automatically. For example, the defaults (`10 DAY`) remove any ad that is more than 10 days old.

### Currency changes

Changing `currencySymbol` or `currencyPosition` broadcasts the new format to all connected players immediately — prices reformat in the NUI without any page reload.

## Online players list

The admin panel shows a list of currently online players with their server ID, identifier, and character name. This is the lookup tool for finding the identifier to ban.

## Seed commands (console / admin chat)

Two server-side commands are available for populating test data:

| Command | Effect |
|---|---|
| `/rc_seed [count]` | Generates `count` fake ads across all categories (default 8, max 200) and seeds a sample message thread for the invoking player. |
| `/rc_unseed` | Deletes all seeded rows (anything tagged with the `rcseed_` prefix for player IDs). |

Both commands require the `rc_marketplace.admin` ACE or must be run from the server console (source 0).
