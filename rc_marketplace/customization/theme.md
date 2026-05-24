# Theme

Visual styling is defined in `ui.config.lua` as inline CSS strings. The file contains two complete theme objects: `theme_light` and `theme_dark`. The NUI applies whichever theme the player has selected in the Settings panel.

## Structure

```lua
UI = {}

UI.themes = {
    theme_light = {
        listing = {
            cars  = { main = "background: ...", price = "color: ...", ... },
            jobs  = { ... },
            items = { ... },
            -- other categories follow the same shape
        },
        desktop      = "background: ...",
        navButtons   = { home = "...", cars = "...", ... },
        chat         = { sidebar = "...", message = "...", ... },
        newAd        = { background = "...", input = { ... }, ... },
        notification = "background: ...",
        -- ...
    },
    theme_dark = {
        -- identical structure, different color values
    },
}
```

Every value is a CSS inline-style string passed directly to a `style` attribute in the Vue component. Any valid CSS for that context is accepted.

## Per-region keys

| Key path | What it styles |
|---|---|
| `listing.<category>.main` | Listing card gradient header |
| `listing.<category>.listingBackground` | Listing card body background |
| `listing.<category>.descriptionText` | Description text color on listing card |
| `listing.<category>.price` | Price text color |
| `listing.<category>.block` | Detail block background and text (mileage, salary, etc.) |
| `desktop` | Full-panel background in standalone desktop mode |
| `backButton` | Back button color and background |
| `navButtons.background` | Nav bar background |
| `navButtons.<key>` | Individual nav button (`home`, `cars`, `items`, `jobs`, `realEstates`, `weapons`, `other`, `createNew`, `messages`, `myAds`, `settings`) |
| `viewAd.background.<category>` | Category-tinted background on the full ad view |
| `viewAd.block1 / block2 / block3` | Detail blocks on the full ad view |
| `chat.sidebar` | Chatters list sidebar |
| `chat.activeChatter` | Active conversation highlight |
| `chat.defaultChatter` | Inactive conversation entry |
| `chat.background` | Chat thread background |
| `chat.message` | Chat bubble background and text |
| `chat.messageInput.*` | Input field background, placeholder, text, border, send button |
| `newAd.background` | Create/edit form page background |
| `newAd.formBackground` | Form container background and text |
| `newAd.input.*` | Form input background, placeholder, and text colors |
| `newAd.button.*` | Submit button default and hover states |
| `newAd.cooldown` | Cooldown notice background and text |
| `notification` | Toast notification overlay |
| `action.cancel` | Cancel action button |
| `action.delete` | Delete action button |

## Switching theme

Players switch between dark and light theme from the Settings panel inside the marketplace. The selection is persisted locally per player. The theme maps to `UI.themes.theme_dark` or `UI.themes.theme_light` in `ui.config.lua`.
