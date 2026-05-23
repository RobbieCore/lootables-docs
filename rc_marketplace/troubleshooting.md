# Troubleshooting / FAQ

## The marketplace panel does not open

- If you are in phone mode, verify the phone resource is started **before** `rc_marketplace` in `server.cfg`. Check with `/rc_phone_status` — it prints the active adapter and the state of every supported phone resource.
- If no phone is running, type `/marketplace` in chat. This command is registered automatically when no phone adapter is detected.
- Check the F8 console for `SCRIPT ERROR` lines referencing `rc_marketplace`.

## The phone app does not appear in the phone's app list

- The phone resource must be started before `rc_marketplace`. If the phone hot-restarts after `rc_marketplace`, the app re-registers automatically — but if the phone is started after `rc_marketplace` during server boot, the registration may miss.
- Run `/rc_phone_status` to see which adapter is active and whether registration succeeded.
- For `lb-phone`: the app registers inside the phone's own UI. If it is missing, restart both the phone resource and `rc_marketplace`.

## "sqlFetch failed" errors on startup

- `oxmysql` (or whichever driver is set in `Config.sqlDriver`) must be started **before** `rc_marketplace` in `server.cfg`.
- Verify `Config.sqlDriver` matches the exact resource name of your SQL driver.
- Check that your database is accessible and the credentials in your SQL resource config are correct.

## Admin panel (`/mpadmin`) says "access denied" or does nothing

- The player needs the `rc_marketplace.admin` ACE: `add_ace group.admin rc_marketplace.admin allow`.
- Alternatively, set `Config.debug = true` in `config.lua` for development (bypasses all ACE checks — disable on production).
- Admin status is cached for 5 minutes per player. Run `/refreshAdminStatus` in chat to force a re-check without waiting.

## "You are banned from posting ads" on a new server / fresh install

- A ban record exists in `rc_marketplace_bans` for this player's identifier. Open the admin panel (`/mpadmin`), go to the Bans list, find the identifier, and click Unban.
- If the ban was created with a duration and has expired, it is automatically ignored — no action needed.

## Ads appear for other players but not for me (My Ads is empty)

- This usually means `Config.alternativeIdentifier.identifier` was changed after the player posted ads. The identifier stored on the ad no longer matches what the server resolves for the player.
- Do not change the identifier type on a live server. To recover, update `player_id` values in `rc_marketplace_ads` to the new identifier format, then restart.

## Images are rejected / "Some images are invalid"

- Only `https://` or `http://` URLs (max 2 048 characters) and `data:image/jpeg|png|webp;base64,...` strings (max 200 KB) are accepted.
- `data:image/gif`, `data:image/bmp`, and any non-image `data:` URLs are rejected.
- The validation runs client-side (form highlights invalid fields in red) and again server-side (the post is rejected even if the client check is bypassed).

## In-game camera button is missing

- `screenshot-basic` must be started and `Config.screenshot.enabled = true`.
- The button is hidden in phone mode — camera capture is desktop-only.
- Check F8 for "screenshot-basic is not running" messages.

## In-game camera: Discord upload fails

- Verify `Config.screenshot.uploadUrl` is a valid Discord webhook URL (not the ads-logger webhook from `server/server-config.lua` — it can be the same URL but it must be set in `config.lua`).
- The upload goes through `screenshot-basic`; check that resource's logs for HTTP errors.
- If the webhook has been deleted or revoked in Discord, create a new one and update the URL.

## Messages are not delivered in real time

- Messages are pushed to the recipient immediately when they are online. If the recipient is offline, they will see the message the next time they open the chat.
- For `lb-phone` users: `lb-phone` does not pass plain NUI messages to the embedded iframe. The resource uses `lb-phone`'s custom app message API instead. If messages are missing in lb-phone mode, ensure `lb-phone` is the version that supports `SendCustomAppMessage`. Run `/rc_phone_status` to confirm the adapter is `lb-phone` and not `standalone`.

## Chat rate limit errors

- The server enforces: 5 messages / 10 s, 20 / minute, 200 / hour per sender identifier.
- These limits reset automatically when the time window expires. There is no manual reset.

## "Open the ad to start a conversation" error when sending a message

- You can only message a player after you have opened one of their ads and clicked **Chat with Poster**. This authorizes the conversation server-side.
- If a resource restart happened between opening the ad and sending the first message, the in-memory authorization was cleared. Open the ad again to re-authorize.

## Zone/location shows "NULL" or is blank on the map

- This is a native lookup issue on some server setups. The script has a hardcoded fallback table for all GTA V zone names; a blank zone label means neither the native nor the fallback returned a result (e.g. a modded map area with a zone ticker not in the GTA V default set).
- Use `/rc_locate <x> <y>` in chat to diagnose what the native chain returns at specific coordinates. Use `/rc_here` to check your current position.
- `/rc_verbose on` enables per-click logging of every map pick in the ad form — check F8 after clicking the map.

## Database migration / fresh install concerns

All tables (`rc_marketplace_ads`, `_images`, `_categories`, `_cars`, `_jobs`, `_items`, `_real_estates`, `_weapons`, `_messages`, `_likes`, `_bans`, `_settings`) are created automatically on first boot using `CREATE TABLE IF NOT EXISTS`. No manual SQL import is needed. Default settings are seeded into `rc_marketplace_settings` using `INSERT IGNORE`, so existing admin-panel changes are never overwritten on restart.
