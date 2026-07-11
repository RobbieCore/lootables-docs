# Localization

All player-facing text — notifications, dealer text messages, burner interface labels — is stored in locale files under `locale/lang/`. Set the active language with `Config.locale` in `config.lua`.

## Setting the Language

```lua
Config.locale = 'en'
```

| Option | Purpose | Default |
|--------|---------|---------|
| `Config.locale` | Language code used for all text. An unknown code falls back to English. | `'en'` |

## Shipped Languages

| Code | Language |
|------|----------|
| `en` | English |
| `zh` | Chinese (Simplified) |
| `hi` | Hindi |
| `es` | Spanish |
| `fr` | French |
| `ar` | Arabic |
| `bn` | Bengali |
| `pt` | Portuguese |
| `ru` | Russian |
| `id` | Indonesian |
| `lt` | Lithuanian |

Language files live at `locale/lang/<code>.lua`. All locale files are in `escrow_ignore` and survive escrow builds.

## Editing Strings

Open the file for your active locale (e.g. `locale/lang/en.lua`) and change the string values on the right-hand side of each entry. Do not change the keys (left side) — the script looks them up by key.

Dealer "text message" strings (the burner thread messages your dealer sends) are also in the locale file. Edit them to match the tone of your server's setting.

## Adding a New Language

1. Copy `locale/lang/en.lua` to a new file named after your locale code, e.g. `locale/lang/de.lua`.
2. Translate all string values in the new file.
3. Set `Config.locale = 'de'` in `config.lua`.
4. Restart the resource.

The locale system falls back to English for any key not found in your file, so a partial translation is safe to use.
