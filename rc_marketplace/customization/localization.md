# Localization

## Where strings live

All user-facing strings are in `locale/locale.lua`. The file defines a `Locale` table where each entry maps a dot-notation key to the string displayed in the interface:

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

Edit the value (right-hand side) for any key. Do not rename the key itself — the interface looks up strings by exact key. A renamed key causes the raw key string to appear in the UI.

```lua
-- French example
['post']   = 'Publier',
['delete'] = 'Supprimer',
['listing.create'] = 'Créer une annonce',
```

Save the file and restart the resource.

## Adding a second language file

The entire `locale/` folder is open. The resource loads `locale/locale.lua` as the active `Locale` table. To switch languages, either:

- Replace the values in `locale/locale.lua` directly with your translated strings, or
- Create a `locale/fr.lua` (or similar) and load it from within `locale/locale.lua`.

## Key reference (selection)

| Key | Displayed for |
|---|---|
| `'listing.searchPrompt'` | Home screen search placeholder |
| `'notification.adPosted'` | Success notice after posting |
| `'error.insufficientFunds'` | Error when player cannot afford the posting cost |
| `'error.maxImages'` | Error when the image limit is reached |
| `'ad.chatWithPoster'` | Chat button label on the full ad view |
| `'map.pickOnMap'` | Map pin button label in the ad form |
| `'map.setWaypoint'` | Waypoint button label on the map widget |
| `'admin.panel'` | Admin panel label in the nav bar |
| `'admin.banSeller'` | Ban button label visible to admins on an ad view |
| `'settings.theme'` | Theme section label in the Settings panel |

The full list is in `locale/locale.lua` — every key in that file corresponds to a string rendered somewhere in the interface.
