# Theme

Visual styling is defined in `ui.config.lua` as inline CSS strings. The file contains two complete theme objects: `theme_light` and `theme_dark`. The NUI applies whichever theme is active.

## Structure

```lua
UI = {}

UI.themes = {
    theme_light = {
        listing = {
            cars  = { main = "background: ...", price = "color: ...", ... },
            jobs  = { ... },
            items = { ... },
            -- ...
        },
        desktop      = "background: ...",
        navButtons   = { home = "...", cars = "...", ... },
        chat         = { sidebar = "...", message = "...", ... },
        newAd        = { background = "...", input = { ... }, ... },
        notification = "background: ...",
        -- ...
    },
    theme_dark = {
        -- same structure, different colors
    },
}
```

Every value is a CSS inline-style string passed directly to a `style` attribute in the Vue component. Change any value to any valid CSS.

## Per-region keys

| Key | What it styles |
|---|---|
| `listing.<category>.main` | Listing card gradient header |
| `listing.<category>.listingBackground` | Listing card body background |
| `listing.<category>.price` | Price text color |
| `listing.<category>.block` | Detail block (mileage, salary, etc.) |
| `desktop` | Full-panel background (standalone desktop mode) |
| `navButtons.<key>` | Each navigation button by name (`home`, `cars`, `jobs`, `items`, `realEstates`, `weapons`, `other`, `createNew`, `messages`, `myAds`, `settings`) |
| `viewAd.background.<category>` | Full ad view category-tinted background |
| `viewAd.block1 / block2 / block3` | Detail blocks on the full ad view |
| `chat.sidebar` | Chatters list sidebar |
| `chat.message` | Chat bubble background + text |
| `chat.messageInput.*` | Chat input field colors |
| `newAd.background` | Create/edit ad form page background |
| `newAd.formBackground` | Form container background |
| `newAd.input.*` | Form input field colors |
| `newAd.button.*` | Submit/action button colors and hover states |
| `notification` | Toast notification overlay |

## Cross-script theme sync

rc_marketplace participates in the RobiCore cross-script theme protocol. When a player toggles the theme:

1. If `rc_core` is running, it calls `exports.rc_core:setTheme(theme)` to broadcast globally.
2. If `rc_core` is not running, it writes the theme to a per-resource KVP and fires a `rc:themeChanged` local event.

Any other RobiCore script that fires `rc:themeChanged` will also repaint the marketplace NUI with the new theme.

The two theme names recognized are `'dark'` and `'light'`. They map to `UI.themes.theme_dark` and `UI.themes.theme_light` in `ui.config.lua`.
