# Bans and Moderation

## Banning a player

From the admin panel (`/mpadmin`), go to the online players list, find the player, and click **Ban**. Fill in:

- **Reason** — shown to the banned player when they try to post an ad.
- **Duration** — number of days. Leave empty for a permanent ban.

When the ban is applied:

- All of the banned player's active ads are deleted immediately.
- All connected clients update their view in real time.
- The banned player cannot post new ads or send messages.

Bans persist across resource restarts.

## Banning an offline player

In the Ban section of the admin panel, type the player's identifier directly into the identifier field (e.g. `discord:123456789012345678`). Fill in reason and optional duration, then confirm. The ban takes effect the next time that identifier connects.

## Unbanning

From the admin panel, open the **Active Bans** list. Find the identifier and click **Unban**. The player can post again immediately.

## Temporary vs permanent bans

- **Duration > 0** — expires automatically at the calculated date. No action needed to remove it when it expires.
- **Duration empty / 0** — permanent. Only removed manually via **Unban**.

## Deleting an ad as admin

In any ad's full view, admins see a **Delete Ad** button that is not visible to regular players. Clicking it opens a confirmation dialog. On confirmation the ad is removed and a deletion webhook fires (if configured). Admins can also ban the ad's seller directly from the same view via the **Ban Seller** button.
