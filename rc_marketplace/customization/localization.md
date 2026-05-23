# Localization

## Location

All user-facing strings live in `locale/locale.lua`. The file exports a `Locale` table where every key is the English default and every value is the translated string.

```lua
Locale = {
    ['Create Listing']  = 'Create Listing',
    ['Messages']        = 'Messages',
    ['Post']            = 'Post',
    ['Delete']          = 'Delete',
    -- ...
}
```

## Changing a string

Edit the value (right-hand side) for any key. Do not change the key itself — the NUI looks up strings by the exact English key.

```lua
-- Change the posting button label to French
['Post'] = 'Publier',
```

Restart the resource after saving.

## Adding a second language file

The whole `locale/` folder is in `escrow_ignore`, so you can add files there. However, the resource loads only `locale/locale.lua` as its `Locale` table. The practical approach is to keep a translated copy of the table in `locale/locale.lua` directly, or to `require` / `dofile` additional files from within `locale/locale.lua` and merge the results into `Locale`.

## Full string list

The table in `locale/locale.lua` contains every string rendered by the NUI — navigation labels, form field placeholders, error messages, button labels, and chat UI text. Open the file to see the complete list.

Notable entries for customization:

| Key | Used for |
|---|---|
| `'What are you looking for today?'` | Home screen search placeholder |
| `'Ad posted successfully!'` | Success toast after posting |
| `'Insufficient funds to post an ad.'` | Error when player cannot afford the ad cost |
| `'You have reached the maximum number of ads.'` | Error when player hits the per-player limit |
| `'Some images are invalid. Please fix them before submitting.'` | Image validation error |
