# Localization

All player-visible strings are defined in `locale/locale.lua`. The file is in `escrow_ignore` — edit it freely.

## File location

```
rc_extra_seats/
  locale/
    locale.lua
```

## Current strings

```lua
Locale = {
    ['Press ~INPUT_DB704DCF~ to stand up'] = "Press ~INPUT_DB704DCF~ to stand up",
    ['Press ~INPUT_DB704DCF~ to sit down'] = "Press ~INPUT_DB704DCF~ to sit down",
    ['~r~Current seat is occupied']        = "~r~Current seat is occupied",
    ['Stand Up']                           = "Stand Up",
    ['Sit Down']                           = "Sit Down",
}
```

## How to change strings

Edit the value on the right side of the `=` sign. Do not change the key (the left side) — the runtime looks up strings by key.

```lua
-- Change the sit prompt to French
['Press ~INPUT_DB704DCF~ to sit down'] = "Appuyez sur ~INPUT_DB704DCF~ pour vous asseoir",
```

## The `~INPUT_DB704DCF~` token

This is a GTA input token that renders as the current keybind icon for the E key (or whatever it has been rebound to). Do not remove or replace it — leave it exactly as shown so the prompt automatically reflects the player's current binding.

## Targeting system labels

The **"Sit Down"** and **"Stand Up"** strings are used as the option labels in ox_target / qb-target / qtarget. Change them here to localize the targeting menu options.

## Adding a second language

The script does not have a built-in language switcher. If you need per-player language support, override the `L()` function in `client/functions.lua` (it is not in `escrow_ignore`, but `client/editable/functions.lua` is, so add your logic there and call it from a wrapper). The simplest approach for a single-language server is to just edit the strings in `locale.lua` directly.
