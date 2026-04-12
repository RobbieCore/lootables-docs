# Client Events

Events triggered from the server to the client. All events use the `GetCurrentResourceName() .. ':eventName'` pattern for dynamic namespacing.

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
