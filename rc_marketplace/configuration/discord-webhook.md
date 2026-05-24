# Discord Webhook

Webhook configuration lives in `server/server-config.lua`. Changes require a resource restart.

## Fields

```lua
-- server/server-config.lua

Config.webhook = {
    onStart    = false,   -- fire when the resource starts
    newAd      = true,    -- fire when a new ad is posted
    onDeletion = true,    -- fire when an ad is deleted
}

Config.webHookColors = {
    newAd    = "#1C3C5C",   -- embed sidebar color for new-ad events
    whStart  = "#BBB33C",   -- embed sidebar color for resource-start event
    deleteAd = "#6b150f",   -- embed sidebar color for deletion events
}

Config.whlink  = ''                  -- your Discord webhook URL; empty = webhooks disabled
Config.whName  = 'Ads Logger'        -- webhook bot display name
Config.whLogo  = 'https://...'       -- webhook bot avatar (any public image URL)
```

`Config.whlink` is empty by default. All ad-event webhooks are disabled until you supply a URL.

## Options

| Option | Type | Description |
|---|---|---|
| `Config.webhook.onStart` | boolean | Post a notification when the resource starts. |
| `Config.webhook.newAd` | boolean | Post a notification when a player publishes a new ad. |
| `Config.webhook.onDeletion` | boolean | Post a notification when an ad is deleted. |
| `Config.webHookColors.newAd` | string | Hex color for the new-ad embed sidebar. |
| `Config.webHookColors.whStart` | string | Hex color for the resource-start embed sidebar. |
| `Config.webHookColors.deleteAd` | string | Hex color for the deletion embed sidebar. |
| `Config.whlink` | string | Full Discord webhook URL. Empty string disables all webhooks. |
| `Config.whName` | string | Display name of the webhook bot. |
| `Config.whLogo` | string | Avatar image URL for the webhook bot. Any publicly accessible image URL. |

## Per-category webhook fields

`Config.webhookData` controls which fields are included in new-ad webhook embeds for each category. All fields default to `true`. Set any key to `false` to omit it.

Example — suppress images from job ad webhooks:

```lua
Config.webhookData.jobs.images = false
```

Available keys per category:

| Category | Keys |
|---|---|
| `cars` | `mileage`, `tuning`, `title`, `description`, `location`, `price`, `images`, `contactName`, `promoted` |
| `items` | `price`, `amount`, `title`, `description`, `location`, `images`, `contactName`, `promoted` |
| `jobs` | `jobTitle`, `salary`, `jobRequirements`, `title`, `description`, `location`, `price`, `images`, `contactName`, `promoted` |
| `realEstates` | `propertyType`, `houseNumber`, `title`, `description`, `location`, `images`, `contactName`, `promoted` |
| `weapons` | `type`, `condition`, `licenseRequired`, `title`, `description`, `images`, `contactName`, `promoted` |
| `other` | `type`, `amount`, `title`, `description`, `images`, `contactName`, `promoted` |
