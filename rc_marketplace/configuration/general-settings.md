# General Settings

`config.lua` is the bootstrap configuration file. It is loaded on both client and server. Changes require a resource restart.

::: warning Shipped defaults
`Config.debug` ships as `true` and `Config.alternativeIdentifier.identifier` defaults to `"discord"`. Review both before putting the resource on a live server.
:::

```lua
Config = {}

Config.sqlDriver = "oxmysql"

Config.alternativeIdentifier = {
    enabled    = true,
    identifier = "discord",
}

Config.debug = false

Config.messageNotification = 'script'

Config.screenshot = {
    enabled   = true,
    type      = 'discord',
    uploadUrl = '',
}
```

## Options

| Option | Type | Default | Description |
|---|---|---|---|
| `Config.sqlDriver` | string | `"oxmysql"` | The SQL resource to route queries through. Must match the resource name exactly. |
| `Config.alternativeIdentifier.enabled` | boolean | `true` | When `true`, uses the identifier type below instead of the first available identifier. |
| `Config.alternativeIdentifier.identifier` | string | `"discord"` | Which identifier type to use as the player key: `"license"`, `"xbl"`, `"live"`, `"discord"`, `"fivem"`, `"license2"`. |
| `Config.debug` | boolean | `true` | Enables verbose logging and **bypasses all ACE permission checks** — every player is treated as admin. Must be `false` on any live server. |
| `Config.messageNotification` | string | `'script'` | How desktop players are notified of new messages while the panel is closed. `'script'` shows a toast; `'framework'` fires the framework's native notification. |
| `Config.screenshot.enabled` | boolean | `true` | Whether the in-game camera button appears in the ad form. Also requires `screenshot-basic` to be running. |
| `Config.screenshot.type` | string | `'discord'` | Upload mode: `'discord'` (webhook CDN URL), `'ftp'` (HTTP endpoint returning a URL in its response body), `'base64'` (embed JPEG data URI directly in the ad). |
| `Config.screenshot.uploadUrl` | string | `''` | Discord webhook URL or FTP endpoint. Empty forces `base64` regardless of `type`. |

::: warning Identifier lock-in
`Config.alternativeIdentifier.identifier` determines how ads are linked to players. Changing it after players have posted ads orphans those listings — they will no longer appear under "My Ads" for the original poster.
:::

::: danger Disable debug on production
`Config.debug = true` grants every connected player admin access to `/mpadmin` and all admin actions. Only use it in isolated local development.
:::
