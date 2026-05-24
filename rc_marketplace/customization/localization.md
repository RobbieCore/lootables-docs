# Localization

## Location

All user-facing strings live in `locale/locale.lua`. The file exports a `Locale` table where every entry maps a dot-notation key to its displayed string:

```lua
Locale = {
    ['listing.create']    = 'Create Listing',
    ['nav.messages']      = 'Messages',
    ['post']              = 'Post',
    ['delete']            = 'Delete',
    ['category.cars']     = 'Cars',
    ['category.jobs']     = 'Jobs',
    -- ...
}
```

## Translating a string

Edit the value (right-hand side) for any key. Do not change the key itself — the NUI looks up strings by exact key name. A renamed key causes the raw key string to appear in the UI instead of the translated label.

```lua
-- Change the posting button label to French
['post'] = 'Publier',

-- Change the Delete button label
['delete'] = 'Supprimer',
```

Restart the resource after saving.

## Adding a second language file

The entire `locale/` folder is in `escrow_ignore`, so you can add files there. The resource loads only `locale/locale.lua` as the active `Locale` table. To use a separate language file, either:

- Replace the values in `locale/locale.lua` directly with your translated strings, or
- Add a `locale/fr.lua` (or similar) and merge it into `Locale` from within `locale/locale.lua`.

## Notable keys

| Key | Used for |
|---|---|
| `'listing.searchPrompt'` | Home screen search placeholder |
| `'notification.adPosted'` | Success toast after posting |
| `'error.insufficientFunds'` | Error when player cannot afford the ad cost |
| `'error.maxImages'` | Error when the image limit is reached |
| `'error.imagesInvalid'` | Image validation error shown before submission |
| `'ad.chatWithPoster'` | Chat button label on the full ad view |
| `'map.pickOnMap'` | Map pin button label in the ad form |
| `'map.setWaypoint'` | Waypoint button label on the map widget |
| `'admin.panel'` | Admin panel nav label |

The full list is in `locale/locale.lua` — every key in that file corresponds to a string rendered somewhere in the NUI.
