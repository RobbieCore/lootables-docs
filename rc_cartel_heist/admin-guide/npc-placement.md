# NPC Placement

Use the debug commands to get coordinates for placing new NPCs.

## Getting Coordinates

| Command | Purpose | Use for |
|---------|---------|---------|
| `/getcoords` | Returns **island-offset** coordinates | Outdoor island NPCs |
| `/getc` | Returns **plain world** coordinates | Interior (bunker) NPCs |

::: warning
Island NPC coordinates are offset from the island position, not world coordinates. Mixing the two will place NPCs in the wrong location after the island moves.
:::

## Where to Paste

Paste the output into the appropriate config section:

| Config key | NPC type |
|-----------|----------|
| `Config.cartelIslandNPC.coords` | Island guards |
| `Config.cartelBackupNPC.coords` | Backup NPCs |
| `Config.cartelInteriorNPC.coords` | Interior (bunker) NPCs |
| `Config.boatNPC.coords` | Boat patrol NPCs |
