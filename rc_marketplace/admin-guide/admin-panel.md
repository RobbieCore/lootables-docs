# Admin Panel

The admin panel lets you change runtime settings without restarting the resource. All changes take effect immediately for all connected players.

## Opening the panel

Type `/mpadmin` in chat. Requires the `rc_marketplace.admin` ACE permission.

Type `/mpadmin` again (or press **ESC**) to close.

::: tip
The admin panel always opens as its own overlay, even when the marketplace is embedded inside a phone. It does not use the phone interface.
:::

## Runtime settings

All settings below are stored in the database and survive resource restarts.

| Setting | Default | Description |
|---|---|---|
| Ad posting cost | 1000 | Amount deducted when a player posts a new ad. Set to `0` for free posting. |
| Promotion cost | 300 | Extra charge for marking an ad as featured (shown in the home carousel). |
| Edit cost | 150 | Charge applied each time a player edits an existing ad. |
| Max ads per player | 10 | Maximum simultaneous active ads per player. Set to `0` for unlimited. |
| Auto-remove value | 10 | Numeric part of the auto-expiry window. |
| Auto-remove unit | DAY | Time unit: `MINUTE`, `HOUR`, or `DAY`. |
| Currency symbol | `$` | Symbol shown next to prices in the UI (max 8 characters). |
| Currency position | prefix | `prefix` shows the symbol before the number (`$1,000`); `suffix` shows it after (`1,000$`). |

### Auto-remove

Ads older than the configured value + unit are deleted automatically. The cleanup runs hourly. For example, the defaults (10 DAY) remove ads more than 10 days old.

### Currency changes

Changing the currency symbol or position broadcasts the update to all connected players immediately — prices reformat in the interface without any reload.

## Online players list

The admin panel shows currently connected players with their server ID, identifier, and character name. Use this to find identifiers when banning offline players.

## Admin cache

Admin status is cached per player for a short period to reduce overhead. If you grant the ACE to an already-connected player, they can run `/refreshAdminStatus` in chat to get access immediately without reconnecting.
