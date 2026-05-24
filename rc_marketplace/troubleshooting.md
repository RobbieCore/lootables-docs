# Troubleshooting / FAQ

## The marketplace panel does not open

- In phone mode, verify the phone resource starts **before** `rc_marketplace` in `server.cfg`. The marketplace registers as a phone app on boot — if the phone starts after the marketplace, it may miss registration.
- If no compatible phone is running, type `/marketplace` in chat. This command is registered automatically when no phone is detected.
- Check the F8 console for `SCRIPT ERROR` lines referencing `rc_marketplace`.

## The phone app does not appear in the phone's app list

- The phone resource must start before `rc_marketplace`. If the phone hot-restarts after `rc_marketplace`, the app re-registers automatically. But if the phone first starts after `rc_marketplace` during server boot, the registration may be missed — restart `rc_marketplace` after the phone is confirmed running.
- If the app is still missing, your phone host may not be among the supported phone resources. The marketplace falls back to the `/marketplace` command in that case.

## "sqlFetch failed" errors on startup

- `oxmysql` (or whichever driver is set in `Config.sqlDriver`) must start **before** `rc_marketplace` in `server.cfg`.
- Verify `Config.sqlDriver` matches the exact resource name of your SQL driver (e.g. `"oxmysql"`).
- Check that the database is accessible and the SQL driver's own config has valid credentials.

## Admin panel (`/mpadmin`) says "access denied" or does nothing

- The player needs the `rc_marketplace.admin` ACE: `add_ace group.admin rc_marketplace.admin allow`.
- Admin status is cached for 5 minutes per player. After granting the ACE, the player can run `/refreshAdminStatus` in chat to force an immediate re-check.
- Do not leave `Config.debug = true` on a live server as a workaround — it grants every player admin access.

## "You are banned from posting ads" on a fresh install

- A ban record exists in `rc_marketplace_bans` for this player's identifier. Open `/mpadmin`, go to the Bans list, find the identifier, and click **Unban**.
- If the ban has an expiry date that has already passed, it is automatically ignored. No action is needed for expired bans.

## My Ads is empty / ads appear for others but not for me

- `Config.alternativeIdentifier.identifier` was likely changed after the player posted ads. The identifier stored on the ad no longer matches what the server resolves for the player.
- Do not change the identifier type on a live server with existing data. To recover, update the `player_id` values in `rc_marketplace_ads` to match the new identifier format, then restart.

## Images are rejected / "Some images are invalid"

- Only `https://` or `http://` URLs (max 2 048 characters) and `data:image/jpeg|png|webp;base64,...` strings (max 200 KB) are accepted.
- `data:image/gif`, `data:image/bmp`, and any non-image `data:` URLs are rejected.
- Validation runs on the client (the field turns red) and again on the server (the post is blocked even if the client check is bypassed).

## In-game camera button is missing

- `screenshot-basic` must be started before `rc_marketplace` and `Config.screenshot.enabled` must be `true`.
- The button is always hidden when the marketplace is open in phone mode — camera capture is desktop-only.
- Check the F8 console for errors from `screenshot-basic` itself.

## In-game camera: Discord upload fails

- Verify `Config.screenshot.uploadUrl` in `config.lua` is a valid Discord webhook URL.
- The screenshot upload goes through `screenshot-basic`. Check that resource's console output for HTTP error codes.
- If the webhook was deleted or its token regenerated in Discord, create a new one and update `Config.screenshot.uploadUrl`.

## Messages are not delivered in real time

- Messages are pushed to the recipient immediately if they are online. If the recipient is offline, they see the message the next time they open the chat tab.
- Connection issues detected by the client show a "Connection Warning" toast in the NUI.

## Chat rate limit error

The server enforces per-sender limits: 5 messages / 10 s, 20 / min, 200 / hr. These windows reset automatically — there is no manual reset command.

## "Open the ad to start a conversation" error

You can only message a player after opening one of their ads and clicking **Chat with Poster**. This authorizes the conversation server-side. If a resource restart occurred between opening the ad and sending the first message, the in-memory authorization was cleared. Open the ad again.

## Zone/location shows blank or unknown area on the map

- The script includes a hardcoded fallback table covering all GTA V zone names. A blank label means neither the native lookup nor the fallback matched (for example, a modded-map zone not in the GTA V defaults).
- Run `/rc_locate <x> <y>` in chat to see exactly what the lookup chain returns at specific coordinates. Run `/rc_here` to check your current position.
- Enable `/rc_verbose on` to log every map-picker click to F8 in real time.

## Database migration / fresh install

All 12 tables (`rc_marketplace_ads`, `_images`, `_categories`, `_cars`, `_jobs`, `_items`, `_real_estates`, `_weapons`, `_messages`, `_likes`, `_bans`, `_settings`) are created automatically on first boot. No manual SQL import is needed. Default settings are seeded with `INSERT IGNORE`, so existing admin-panel changes are never overwritten on restart.

Schema migrations (such as adding map coordinate columns or upgrading the messages table to encrypted storage) also run automatically on boot and are one-time operations.
