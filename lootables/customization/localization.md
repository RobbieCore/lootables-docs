# Localization

All player-facing text is stored in locale files. Edit the **right-hand side** of each entry — do not change the keys (left side).

## locale/locale.lua

In-game text shown to players (prompts, errors, dispatch messages, gizmo labels).

```lua
Locale = {
    ['key'] = 'Your translated text here',
}
```

### Interaction Prompts

| Key | Where It Appears |
|-----|-----------------|
| `safe.press_to_open` | Proximity prompt above a safe |
| `safe.action_unlock` | Target system label for safes |
| `container.press_to_open` | Proximity prompt above a container |
| `container.action_unlock` | Target system label for containers |
| `crate.press_to_open` | Proximity prompt above a crate |
| `crate.action_open` | Target system label for crates |
| `loot.press_to_pickup` | Prompt above a loot drop prop |
| `loot.action_pickup` | Target system label for loot |

### Error Messages

| Key | Shown When |
|-----|-----------|
| `error.no_required_items_safe` | Player lacks the required item for a safe |
| `error.no_required_items_container` | Player lacks the required item for a container |
| `error.no_required_items_crate` | Player lacks the required item for a crate |
| `error.not_enough_police` | Police count below minimum. Supports `%d` for counts |
| `error.inventory_full` | Player's inventory is full |
| `error.generic` | Fallback error message |

### Dispatch Messages

| Key | Used For |
|-----|---------|
| `dispatch.thieves_opened` | Default dispatch alert message |
| `dispatch.police_dispatch` | Dispatch notification subtitle |
| `dispatch.thieves` | Blip label on police maps |
| `dispatch.alert` | Fallback notification title |

### Format Variables

Some keys support `%d` placeholders (replaced with numbers at runtime). The `LFormat` helper handles this safely — removing the `%d` won't cause errors.

---

## locale/ui.locale.lua

Text for the Vue.js NUI (minigame labels, buttons).

### Crate Minigame

| Key | Displayed As |
|-----|-------------|
| `minigame.crate.header` | Header text |
| `minigame.crate.instruction` | Instruction above the progress bar |
| `minigame.crate.progress_label` | Progress bar label |
| `minigame.crate.keys_hint` | Hint text at the bottom |
| `minigame.cancel` | Cancel button (shared across minigames) |

### Safe Minigame

| Key | Displayed As |
|-----|-------------|
| `minigame.safe.header` | Header text |
| `minigame.safe.turn_left` | Left dial button label |
| `minigame.safe.turn_right` | Right dial button label |
| `minigame.safe.tooltip` | Full instruction text |

### Container Minigame

| Key | Displayed As |
|-----|-------------|
| `minigame.container.header` | Header text |
| `minigame.container.instruction` | Instruction line |
| `minigame.container.cancel` | Cancel button label |

### General UI

| Key | Used For |
|-----|---------|
| `ui.success` | Success state label |
| `ui.failed` | Failed state label |
| `ui.loading` | Loading spinner label |
| `ui.close` | Close button label |
