# Server Events

Events triggered from the client to the server. All events use the `GetCurrentResourceName() .. ':eventName'` pattern for dynamic namespacing.

| Event Suffix | Description |
|-------------|-------------|
| `:server:hasItem` | Check if player has a specific item |
| `:server:GetPoliceCount` | Get current online police count |
| `:server:setGlobalState` | Set a GlobalState value |
| `:server:UseItem` | Use a heist item |
| `:server:canCarryItem` | Check if player can carry an item |
| `:server:giveHeistItem` | Give a heist item to the player |
| `:server:openDoor` | Open interior door |
| `:server:hasHeistItems` | Check if player has heist items |
| `:server:claimLoot` | Start claiming loot from a table/container |
| `:server:completeLoot` | Complete a loot claim |
| `:server:cancelLoot` | Cancel an in-progress loot |
| `:server:interruptLoot` | Interrupt looting |
| `:server:canCarryCard` | Check if player can carry the access card |
| `:server:setCooldown` | Set a cooldown timer |
| `:server:sell_illegal` | Sell items to the buyer |
| `:requestCratesSync` | Request crate data sync |
| `:requestContainersSync` | Request container data sync |
| `:requestLocksSync` | Request lock state sync |
| `:requestSync:lights` | Request light state sync (shutdown) |
| `:requestKey` | Request key assignment |
| `:PoliceAlert` | Trigger police alert |
| `:backup` | Trigger NPC backup |
| `:spawnLog` | Log spawn event |
| `:moneyReward` | Grant money reward |
| `:removeCard` | Remove card from player |
| `:removeSyncBag` | Sync bag removal |
| `:removeDropTable` | Remove table drop (sync) |
| `:removeDropCrate` | Remove crate drop (sync) |
| `:removeDrop` | Remove container drop (sync) |
| `:removeEMP:server` | Sync EMP removal |
| `:removeCutters:server` | Sync wire cutters removal |
| `:removeThermite:server` | Sync thermite removal |
| `:openCrate_request` | Request crate open sync |
| `:openContainer_request` | Request container open sync |
| `:sync_elecFx_request` | Request electricity FX sync |
| `:getIslandNPCIds:server` | Request island NPC IDs |
| `:getInteriorNPCIds:server` | Request interior NPC IDs |
