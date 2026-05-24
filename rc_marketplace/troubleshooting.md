# Troubleshooting

## The marketplace panel does not open

- In phone mode, the phone resource must start **before** `rc_marketplace` in `server.cfg`. If the phone starts after, the marketplace app registration may be missed — restart `rc_marketplace` after the phone is confirmed running.
- If no compatible phone is running, type `/marketplace` in chat. This command is registered automatically when no phone is detected.
- Check the server console for script errors referencing `rc_marketplace`.

## The phone app does not appear in the phone's app list

- Ensure the phone resource starts before `rc_marketplace` in `server.cfg`.
- If the phone hot-restarts after `rc_marketplace`, the app re-registers automatically on next open.
- If the app is still missing, your phone host may not be among the supported integrations. The marketplace falls back to `/marketplace` in that case.

## Database errors on startup

- Your SQL resource must start **before** `rc_marketplace` in `server.cfg`.
- Verify `Config.sqlDriver` in `config.lua` matches the exact resource name of your SQL driver (e.g. `"oxmysql"`).
- Check that the database is accessible and the SQL driver has valid credentials.

## Admin panel (`/mpadmin`) says "access denied" or does nothing

- The player needs the `rc_marketplace.admin` ACE: `add_ace group.admin rc_marketplace.admin allow`.
- Admin status is cached per player. After granting the ACE, the player can run `/refreshAdminStatus` in chat to force an immediate re-check without reconnecting.
- Do not use `Config.debug = true` as a workaround on a live server — it grants every player admin access.

## "You are banned from posting ads" on a fresh install

A ban record exists for this player's identifier. Open `/mpadmin`, go to the Active Bans list, find the identifier, and click **Unban**. Expired bans are ignored automatically.

## My Ads is empty / ads appear for others but not for me

`Config.alternativeIdentifier.identifier` was likely changed after players posted ads. The identifier stored on the ad no longer matches what the server resolves for the player. Do not change the identifier type on a server with existing ad data.

## Images are rejected ("Some images are invalid")

- Only `https://` or `http://` URLs and `data:image/jpeg`, `data:image/png`, or `data:image/webp` base64 strings are accepted.
- `data:image/gif`, `data:image/bmp`, and any non-image data URIs are rejected.
- Validation runs on the client (field turns red) and on the server (post is blocked even if the client check is bypassed).

## In-game camera button is missing

- `screenshot-basic` must be started before `rc_marketplace` and `Config.screenshot.enabled` must be `true`.
- The button is always hidden when the marketplace is open inside a phone — camera capture is desktop-only.
- Check the server console for errors from `screenshot-basic`.

## In-game camera: Discord upload fails

- Verify `Config.screenshot.uploadUrl` in `config.lua` is a valid Discord webhook URL.
- If the webhook was deleted or its token regenerated in Discord, create a new one and update `Config.screenshot.uploadUrl`.

## Messages are not delivered in real time

Messages are pushed to the recipient immediately if they are online. If the recipient is offline, they see the message the next time they open the chat tab. A "Connection Warning" toast in the interface indicates real-time updates may be delayed.

## Chat rate limit error

The server enforces per-sender rate limits. The limit resets automatically after the time window passes — there is no manual reset command.

## "Open the ad to start a conversation" error

You can only message a player after opening one of their ads and clicking **Chat with Poster**. If a resource restart occurred between opening the ad and sending the first message, the authorization was cleared. Open the ad again to re-authorize.

## Zone or location shows blank on the map

The script includes a fallback covering all standard GTA V zone names. A blank label means neither the lookup nor the fallback matched (for example, a modded-map zone not in the GTA V defaults). Typing the location manually in the text field still works regardless of zone label resolution.

## Database setup / migration

The database is set up automatically on first boot. No SQL import is needed. Any schema migrations (such as adding map coordinate support or upgrading storage) also run automatically and are one-time operations.
