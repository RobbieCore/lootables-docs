# Discord Webhook

Webhook configuration lives in `server/server-config.lua`. Changes require a resource restart.

## Fields

```lua
-- server/server-config.lua

Config.webhook = {
    onStart    = false,   -- fire a webhook when the resource starts
    newAd      = true,    -- fire when a new ad is posted
    onDeletion = true,    -- fire when an ad is deleted (by owner or admin)
}

Config.webHookColors = {
    newAd    = "#1C3C5C",   -- embed sidebar color for new-ad notifications
    whStart  = "#BBB33C",   -- embed sidebar color for resource-start notification
    deleteAd = "#6b150f",   -- embed sidebar color for deletion notifications
}

Config.whlink  = ''                  -- your Discord webhook URL; empty = webhooks disabled
Config.whName  = 'Ads Logger'        -- webhook bot display name
Config.whLogo  = 'https://...'       -- webhook bot avatar (any public image URL)
```

`Config.whlink` is empty by default. All ad-event webhooks are disabled until you supply a URL.

## Options

| Option | Type | Description |
|---|---|---|
| `Config.webhook.onStart` | boolean | Post a notification when the resource starts. Requires `Config.whlink` to be set. |
| `Config.webhook.newAd` | boolean | Post a notification when a player publishes a new ad. |
| `Config.webhook.onDeletion` | boolean | Post a notification when an ad is deleted (by the owner or an admin). |
| `Config.webHookColors.newAd` | string | Hex color string for the new-ad embed sidebar. |
| `Config.webHookColors.whStart` | string | Hex color string for the resource-start embed sidebar. |
| `Config.webHookColors.deleteAd` | string | Hex color string for the deletion embed sidebar. |
| `Config.whlink` | string | Full Discord webhook URL. Empty string disables webhooks. |
| `Config.whName` | string | Display name for the webhook bot. |
| `Config.whLogo` | string | Avatar image URL for the webhook bot. Any publicly accessible image URL works. |

## What each notification includes

**New ad (`newAd`):** Player name, identifier, image URLs (one per line), category.

**Ad deleted (`onDeletion`):** Player name, identifier, ad ID, deletion reason (owner self-delete vs. admin removal), deleted-by label.

**Resource started (`onStart`):** Resource name and a confirmation message.

## Per-category webhook fields

`Config.webhookData` in `server/server-config.lua` controls which fields are included in the new-ad webhook embed for each category. All fields default to `true`. Set any key to `false` to omit it.

Example — suppress images and promoted flag from job ad webhooks:

```lua
Config.webhookData.jobs.images   = false
Config.webhookData.jobs.promoted = false
```

Available keys per category:

| Category | Available keys |
|---|---|
| `cars` | `mileage`, `tuning`, `title`, `description`, `location`, `price`, `images`, `contactName`, `promoted` |
| `items` | `price`, `amount`, `title`, `description`, `location`, `images`, `contactName`, `promoted` |
| `jobs` | `jobTitle`, `salary`, `jobRequirements`, `title`, `description`, `location`, `price`, `images`, `contactName`, `promoted` |
| `realEstates` | `propertyType`, `houseNumber`, `title`, `description`, `location`, `images`, `contactName`, `promoted` |
| `weapons` | `type`, `condition`, `licenseRequired`, `title`, `description`, `images`, `contactName`, `promoted` |
| `other` | `type`, `amount`, `title`, `description`, `images`, `contactName`, `promoted` |
