# Troubleshooting / FAQ

## Boxes are not spawning for players

- Verify the box is **enabled** in the admin panel
- If the box is marked as **exportable**, it must be spawned via the export API — it won't appear automatically
- Check that the player is within `loadDistance` (configured per box type in `Config.boxTypes`)
- Check the server console for database errors on startup

## Items are not being given to players

- Ensure the **item name** in the loot configuration **exactly matches** the item name registered in your inventory system
- Verify `kq_link` is started **before** `ls_lootables` in your `server.cfg`
- Check server console for errors when a player picks up loot

## Admin commands are not working

- Verify the ACE permission is set correctly:
  ```
  add_ace identifier.discord:YOUR_ID lootables.admin allow
  ```
- Adjust the identifier type if needed (e.g., `identifier.license:xxx`, `identifier.steam:xxx`)
- Make sure `Config.placement.enabled = true`

## The box stays "busy" and cannot be opened

- This can happen if a player disconnects mid-interaction
- The state resets automatically when the reset timer fires
- Restarting the resource will also clear all stuck states

## Police count requirement is blocking players

- Check `Config.police.enabled` and `Config.police.minCount`
- Set `Config.police.minCount` to `0` to disable the requirement
- Make sure `Config.police.jobNames` matches your server's actual police job names

## Dispatch alerts are not firing

- Ensure `Config.dispatch.enabled = true`
- Check that `Config.dispatch.system` matches your dispatch resource
- Verify `Config.dispatch.chance` is greater than 0
- Make sure the dispatch resource is running

## Database errors on startup

- Ensure your SQL resource (`mysql-async` or `oxmysql`) starts **before** `ls_lootables`
- Verify `Config.sqlDriver` matches your SQL resource
- Check server console for specific error messages

## How do I change the reset time for a box?

Open the admin panel (`/placebox`), navigate to the box, change the **Reset Time** value, and save.

## How do I require specific items to open a box?

In the admin panel for each box, add items to **Required Items** or **Required Weapons**. If `Config.removeRequiredItems = true`, required items are consumed when the box is opened.

## How do I add a new box type?

Add a new entry to `Config.boxTypes` with a unique `id`, set the `box_type` to `'crate'`, `'safe'`, or `'container'`, and restart the resource. See [Box Types](configuration/box-types.md) for details.
