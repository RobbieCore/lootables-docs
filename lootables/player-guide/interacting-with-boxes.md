# Interacting with Boxes

## Finding a Lootable Box

Lootable boxes are placed throughout the game world by server admins. They appear as physical props — crates, safes, or shipping containers.

Walk close to a box (within the server's configured interaction distance, default 5 meters).

## Interaction Prompt

When close enough, you'll see a prompt to interact with the box. Press `E` to start.

## Requirements Check

Before the minigame starts, the server checks if you meet the requirements:

1. **Required items** — You may need specific tools (e.g., a lockpick, crowbar). If `removeRequiredItems` is enabled, these are consumed on use
2. **Required weapons** — You may need to be holding a specific weapon
3. **Police count** — A minimum number of police officers may need to be online

If you don't meet a requirement, you'll see an error message explaining what's missing.

## Opening the Box

If all requirements are met, the **minigame** starts. Each box type has a different minigame — see [Minigames](minigames.md).

## Collecting Loot

After completing the minigame:

1. Loot items spawn as **3D props** near the box
2. Walk up to each prop and press `E` to pick it up
3. The item is added to your inventory
4. A notification appears showing what you received (if enabled by the server)

## Cooldowns

- After opening a box, there's a short cooldown before you can interact again
- After picking up each item, there's a brief delay before picking up the next
- Once all items are collected, the box enters its **reset timer** — it becomes lootable again after the configured time

## Already Looted

If someone else has already looted a box, you'll see a cooldown message with the remaining time until it resets (if enabled by the server).
