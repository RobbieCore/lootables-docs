# Developer API

## Exports

This script does not expose any public exports.

## Events

All events use the `GetCurrentResourceName() .. ':eventName'` pattern for dynamic namespacing.

### Server Events (client-to-server)

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

### Client Events (server-to-client)

| Event Suffix | Description |
|-------------|-------------|
| `:client:getHasItem:*` | Item check response (dynamic suffix) |
| `:client:SetPoliceCount:*` | Police count response (dynamic suffix) |
| `:client:cardInteract` | Card interaction trigger |
| `:client:useEmpBlocker` | EMP blocker usage trigger |
| `:client:minigame1` | Minigame trigger |
| `:client:entrance_key` | Entrance key spawn trigger |
| `:client:thermite` | Thermite usage trigger |
| `:client:Area` | Area entry trigger |
| `:client:setHasNeededItems` | Set item check result |
| `:client:removeKey` | Remove key from display |
| `:client:getKeyId` | Get key entity ID |
| `:getCanCarryItem` | Carry check response |
| `:openDoor` | Door open sync |
| `:removeCard` | Card removal sync |
| `:sync_lights` | Light shutdown sync |
| `:sync_elecFx` | Electricity FX sync |
| `:getIslandNPCIds` | Island NPC IDs response |
| `:getInteriorNPCIds` | Interior NPC IDs response |
| `:removeEMP:client` | EMP removal sync |
| `:removeCutters:client` | Wire cutters removal sync |
| `:removeThermite:client` | Thermite removal sync |
| `:openCrate_sync` | Crate open sync |
| `:openContainer_sync` | Container open sync |
| `:removeDropsTable` | Table drop removal sync |
| `:removeDropsCrate` | Crate drop removal sync |
| `:removeDrops` | Container drop removal sync |
| `:removeBag` | Bag removal sync |
| `:DUIsync` | DUI state sync |
| `:syncCratesData` | Crate data sync |
| `:syncContainersData` | Container data sync |
| `:syncLocks` | Lock state sync |
| `:SyncItemTable` | Table item sync |
| `:SyncItemCrate` | Crate item sync |
| `:SyncItemCon` | Container item sync |
| `:getCutters` | Wire cutters pickup trigger |
| `:getEMP` | EMP pickup trigger |
| `:buyer:target` | Buyer targeting trigger |
| `:keyTarget` | Key targeting trigger |
| `:pickupJewel` | Jewellery pickup trigger |
| `:pickupBag` | Bag pickup trigger |
| `:claimJewelResult` | Jewellery claim result |
| `:claimBagResult` | Bag claim result |
| `:claimContainerResult` | Container claim result |
| `:pickupContainerDrop` | Container drop pickup trigger |
| `:openCrate` | Crate open trigger |
| `:openContainer` | Container open trigger |
| `:open:crate` | Crate open (targeting) |
| `:loot:crate` | Crate loot trigger |
| `:activatePoliceAlarm` | Police alarm activation |
| `:TriggerDispatchMessage` | Dispatch message trigger |

## NUI Callbacks

| Callback | Description |
|----------|-------------|
| `success` | Card minigame completed successfully |
| `failed` | Card minigame failed |
| `cardValid` | Card validated at reader |
| `closeCopy` | Close debug coordinates overlay |

## GlobalState Keys

The script uses FiveM `GlobalState` for cross-client synchronization. Key patterns include:

- `blocker_[n]_pickedUp` / `blocker_[n]_busy` — EMP blocker state
- `wireCutters_pickedUp` / `wireCutters_busy` — Wire cutters state
- `thermite_pickedUp` / `thermite_busy` — Thermite state
- `crate_[n]_open` / `crate_[n]_busy` / `crate_[n]_looted` — Crate state
- `container_[n]_open` / `container_[n]_busy` / `container_[n]_looted` — Container state
- `table_[n]_looted` — Table state
- `card_minigame_inProgress` / `card_minigame_success` — Card minigame state
- `<resourceName>:lights_shutDown` — Lights shutdown state
- `<resourceName>:emp:hacked` — EMP hack state
