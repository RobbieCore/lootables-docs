# General Settings

`config.lua` is the bootstrap configuration file. It is loaded on both client and server. Changes require a resource restart.

```lua
Config = {}

Config.sqlDriver = "oxmysql"

Config.alternativeIdentifier = {
    enabled    = true,
    identifier = "license",
}

Config.debug = false

Config.messageNotification = 'script'

Config.screenshot = {
    enabled   = true,
    type      = 'discord',
    uploadUrl = 'https://discord.com/api/webhooks/ID/TOKEN',
}
```

## Options

| Option | Type | Default | Description |
|---|---|---|---|
| `Config.sqlDriver` | string | `"oxmysql"` | The MySQL resource to route queries through. Must match the resource name exactly. |
| `Config.alternativeIdentifier.enabled` | boolean | `true` | When `true`, uses the identifier type below instead of the first available identifier. |
| `Config.alternativeIdentifier.identifier` | string | `"license"` | Which identifier type to use as the player key: `"license"`, `"discord"`, `"steam"`, `"fivem"`, `"xbl"`, `"live"`. |
| `Config.debug` | boolean | `true` | Enables verbose logging to the F8 console and bypasses ACE permission checks (everyone is treated as admin). **Disable on production.** |
| `Config.messageNotification` | string | `'script'` | How desktop players are notified of new messages while the panel is closed. `'script'` shows a toast overlay; `'framework'` fires the native ESX/QBCore notification event. |
| `Config.screenshot.enabled` | boolean | `true` | Whether the in-game camera button appears in the ad form. Requires `screenshot-basic` to be running. |
| `Config.screenshot.type` | string | `'discord'` | Upload mode: `'discord'` (webhook CDN URL), `'ftp'` (HTTP endpoint returning a URL), `'base64'` (embed raw data URI directly). |
| `Config.screenshot.uploadUrl` | string | — | Full Discord webhook URL or FTP endpoint. Set to `''` to force `base64` fallback regardless of `type`. |

::: warning Identifier lock-in
`Config.alternativeIdentifier.identifier` determines how existing ads are linked to players. Changing it after players have posted ads will orphan their listings — those ads will no longer appear under "My Ads" for the original poster.
:::

::: danger Disable debug on production
`Config.debug = true` grants every connected player admin-level access. Only use it in local development environments.
:::
