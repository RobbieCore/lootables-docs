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
    newAd    = "#1C3C5C",  -- embed color for new ad notifications
    whStart  = "#BBB33C",  -- embed color for resource-start notification
    deleteAd = "#6b150f",  -- embed color for deletion notifications
}

Config.whlink  = 'https://discord.com/api/webhooks/ID/TOKEN'
Config.whName  = 'Ads Logger'
Config.whLogo  = 'https://cdn-icons-png.flaticon.com/512/6744/6744993.png'
```

## Options

| Option | Type | Description |
|---|---|---|
| `Config.webhook.onStart` | boolean | Post a notification to Discord when the resource starts. |
| `Config.webhook.newAd` | boolean | Post a notification when any player publishes a new ad. |
| `Config.webhook.onDeletion` | boolean | Post a notification when an ad is deleted (owner or admin). |
| `Config.webHookColors.newAd` | string | Hex color for the new-ad embed sidebar. |
| `Config.webHookColors.whStart` | string | Hex color for the resource-start embed sidebar. |
| `Config.webHookColors.deleteAd` | string | Hex color for the deletion embed sidebar. |
| `Config.whlink` | string | Full Discord webhook URL. |
| `Config.whName` | string | Webhook bot display name. |
| `Config.whLogo` | string | URL to the webhook bot avatar image. |

## What each notification includes

**New ad (`newAd`):** Player name, identifier, image URLs (one per line), category.

**Ad deleted (`onDeletion`):** Player name, identifier, ad ID, deletion reason (owner self-delete vs. admin removal).

## Per-category webhook fields

`Config.webhookData` in `server/server-config.lua` controls which fields of a new ad are included in the webhook embed for each category. Set any key to `false` to omit it from the notification. The defaults include all available fields for every category.

Example — suppress images and promoted flag from job ad webhooks:

```lua
Config.webhookData.jobs.images   = false
Config.webhookData.jobs.promoted = false
```
