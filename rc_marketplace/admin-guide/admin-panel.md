# Admin Panel

The admin panel lets you change runtime tunables without restarting the resource. All changes take effect immediately for all connected players.

## Opening the panel

Type `/mpadmin` in chat. You need the `rc_marketplace.admin` ACE permission.

Type `/mpadmin` again to close, or press **ESC**.

::: tip
The admin panel always opens as a standalone NUI overlay, even when the marketplace is embedded inside a phone. It does not use the phone iframe.
:::

## Runtime settings

All settings below are stored in the database (`rc_marketplace_settings` table) and survive resource restarts.

| Setting | Key | Default | Description |
|---|---|---|---|
| Ad posting cost | `adCost` | 1000 | Amount deducted when a player posts a new ad. Set to `0` for free posting. |
| Promotion cost | `promotionCost` | 300 | Extra charge for marking an ad as promoted (featured carousel). |
| Edit cost | `editCost` | 150 | Charge applied each time a player edits an existing ad. |
| Max ads per player | `maxAdsPerPlayer` | 10 | Maximum simultaneous active ads per player. Set to `0` for unlimited. |
| Auto-remove value | `removeOutdatedValue` | 10 | Numeric part of the auto-expiry window. |
| Auto-remove unit | `removeOutdatedUnit` | DAY | Time unit: `MINUTE`, `HOUR`, or `DAY`. |
| Currency symbol | `currencySymbol` | `$` | Symbol shown next to prices in the UI (max 8 characters). |
| Currency position | `currencyPosition` | `prefix` | `prefix` shows the symbol before the number (`$1,000`); `suffix` shows it after (`1,000$`). |

### Auto-remove

Ads older than the `removeOutdatedValue` + `removeOutdatedUnit` window are deleted automatically. The cleanup runs hourly. For example, the defaults (`10 DAY`) remove ads more than 10 days old.

### Currency changes

Changing `currencySymbol` or `currencyPosition` broadcasts the update to all connected players immediately — prices reformat in the NUI without any reload.

## Online players list

The admin panel shows currently connected players with their server ID, identifier, and character name. This is the lookup tool for finding identifiers to use when banning.

## Admin cache and refresh

Admin status is cached per player for 5 minutes to reduce permission check overhead. If you grant the ACE to a player who is already connected, they can run `/refreshAdminStatus` in chat to get access immediately without waiting for the cache to expire.

## Seed commands

Two server-side commands exist for populating test data. Both require the `rc_marketplace.admin` ACE or must be run from the server console.

| Command | Effect |
|---|---|
| `/rc_seed [count]` | Generates `count` fake ads across all categories (default 8, max 200). When run by an in-game player, also seeds a sample encrypted message thread between that player and a fake contact. |
| `/rc_unseed` | Deletes all seeded rows. Anything tagged with the internal seed prefix (fake player IDs, likes, and messages) is removed. Real player data is not affected. |

## Diagnostic commands

These commands are available to all players and print to the F8 console. They are useful when troubleshooting location or map issues.

| Command | Description |
|---|---|
| `/rc_locate <x> <y>` | Runs a full zone and street name lookup at the given world coordinates and prints every step to F8. |
| `/rc_here` | Same as `/rc_locate` but uses your current in-game position. |
| `/rc_verbose on\|off` | Toggles live logging of every map-picker click in the ad form. Shows the resolved zone name for each click in F8. |
