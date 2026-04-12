# Troubleshooting

## Props spawning at 0,0,0 / Anticheat issues

If your anticheat flags the wire cutters, thermite, or EMP blocker props, disable their spawning:

```lua
Config.wireCutters.enabled = false
Config.thermite.enabled    = false
Config.empBlocker.enabled  = false
```

Players will need to receive these items through other means when prop spawning is disabled.

## Items not being given to players

1. Check that items exist in your database (ESX) or `shared/items.lua` (QBCore)
2. Verify `Config.usedItems` matches your server's item names
3. Check `Cfg.allowedItems` in `server/server.config.lua` — items must be whitelisted
4. Enable `Cfg.logs = true` and check server console for blocked item grants

## Helicopter blacklisted (QBCore)

If the buzzard or your chosen helicopter model doesn't spawn, check your QBCore vehicle blacklist:

`[qb]/qb-smallresources/config.lua` — remove the model from the blacklist, or change `Config.helicopterModel` to an allowed model.

## Players can't start the heist

Check `Config.police.onlineCount` — the heist requires a minimum number of police online. Set to `0` to disable this requirement.

## Bunker entrance won't open

Verify `Config.bunkerEntrance.conditions`:
- `hackedEMP = true` — all EMPs must be hacked first
- `electricityDone = true` — electricity minigame must be completed
- `outsideContainersLooted = true` — outside containers must be opened

Set any condition to `false` to skip that requirement.

## NPC coordinates are wrong after moving the island

Island NPC coordinates are **offset from the island position**, not world coordinates. Use `/getcoords` (debug mode) to get properly offset coordinates.

Interior NPC coordinates are **plain world coordinates**. Use `/getc` (debug mode) for these.

## SQL errors on startup

Verify your SQL driver matches your setup:

```lua
Config.sqlDriver = 'mysql'     -- for mysql-async
Config.sqlDriver = 'oxmysql'   -- for oxmysql
```

Ensure the corresponding resource is started before `rc_cartel_heist` in your `server.cfg`.

## Card minigame not showing / NUI issues

The NUI minigame requires the `minigame/index.html` file and its assets. Verify these files exist:
- `minigame/index.html`
- `minigame/js/jquery.js`
- `minigame/*.wav`
- `minigame/wire-cutters.png`
- `minigame/metal-background.jpg`

## Dispatch not working

1. Ensure `Config.dispatch.enabled = true`
2. Check that `Config.dispatch.system` matches your installed dispatch resource
3. Verify the dispatch resource is started and running

## Props not spawning

- Check `Config.renderDistance` — props only spawn within this range
- Ensure `Config.wireCutters.enabled`, `Config.thermite.enabled`, and `Config.empBlocker.enabled` are set to `true`
- Check for errors in the F8 console

## Need help?

Contact us via support ticket on [Discord](https://robicore.com).
