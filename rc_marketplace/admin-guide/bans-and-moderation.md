# Bans and Moderation

## Banning a player

From the admin panel (`/mpadmin`), go to the online players list, find the player, and click **Ban**. Fill in:

- **Reason** — shown in the rejection message when the banned player tries to post or send a message.
- **Duration** — number of days. Leave empty for a permanent ban.

When the ban is applied:
- All of the banned player's active ads are deleted immediately.
- All connected clients receive a broadcast and remove the player's ads from the NUI in real time.
- The banned player cannot post new ads or send messages.

Bans are stored in the `rc_marketplace_bans` table and survive resource restarts.

## Banning an offline player

In the Ban section of the admin panel, type the player's identifier directly into the identifier field (e.g. `discord:123456789012345678`). Fill in reason and duration, then confirm. The ban takes effect for the next time that identifier connects.

## Unbanning a player

From the admin panel, switch to the **Bans** list. Find the identifier and click **Unban**. The record is removed immediately and the player can post again.

## Deleting an ad as admin

In any ad's full view, admins see a **Ban Seller** button and a **Delete Ad** button that are not shown to regular players. Clicking **Delete Ad** opens a confirmation dialog. On confirmation the ad is removed from the database and a deletion webhook fires (if configured).

## Temporary vs permanent bans

- **Duration > 0** — the ban has an `expires_at` timestamp. Expired bans are ignored automatically; no action is needed to remove them.
- **Duration = 0 (or empty)** — the ban has no expiry and is permanent until manually removed via **Unban**.

## Identifying players

The admin panel's online players list shows the server ID, identifier, and character name for each connected player. Use the identifier value when banning offline players or when cross-referencing the bans list.
