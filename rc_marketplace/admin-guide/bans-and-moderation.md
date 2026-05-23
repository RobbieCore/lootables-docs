# Bans and Moderation

## Banning a player

From the admin panel (`/mpadmin`), go to the online players list, find the player, and click **Ban**. Fill in:

- **Reason** — displayed in the banned player's rejection message when they try to post.
- **Duration** — number of days. Leave at `0` for a permanent ban.

When the ban is applied:
- All of the banned player's active ads are deleted immediately.
- All connected clients receive a broadcast and remove the player's ads from the NUI in real time.
- The banned player cannot post new ads or send messages.

Bans are stored in the `rc_marketplace_bans` table and survive resource restarts.

## Unbanning a player

From the admin panel, switch to the **Bans** list. Find the identifier and click **Unban**. The record is removed immediately and the player can post again.

## Deleting an ad as admin

In any ad's full view, admins see a **Delete Ad** button that is not shown to regular players. Clicking it opens a confirmation dialog. On confirmation the ad is removed from the database and a deletion webhook fires (if configured).

## Temporary vs permanent bans

- **Duration > 0** — the ban record has an `expires_at` timestamp. The system checks `expires_at > NOW()` on every ad post and message attempt. Expired bans are ignored automatically without needing to be removed.
- **Duration = 0** — the ban has no `expires_at` (NULL) and is permanent until manually removed.

## Identifying a player

The admin panel's online players list shows the server ID, identifier, and character name for each connected player. Use the identifier value when cross-referencing ban records or when banning an offline player by identifier directly from the database.
