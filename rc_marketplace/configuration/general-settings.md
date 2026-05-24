# General Settings

`config.lua` is the bootstrap configuration file. It is loaded on both client and server. Changes require a resource restart.

```lua
Config = {}

Config.sqlDriver = "oxmysql"

Config.alternativeIdentifier = {
    enabled    = true,
    identifier = "discord",
}

Config.debug = true

Config.messageNotification = 'script'

Config.screenshot = {
    enabled   = true,
    type      = 'discord',
    uploadUrl = '',
}
```

::: warning These are the shipped defaults
The values shown above match the defaults in the shipped `config.lua`. Notably, `Config.debug = true` and `Config.alternativeIdentifier.identifier = "discord"` are the out-of-box values. Review and update them before putting the script on a live server.
:::

## Options

| Option | Type | Default | Description |
|---|---|---|---|
| `Config.sqlDriver` | string | `"oxmysql"` | The MySQL resource to route queries through. Must match the resource name exactly. |
| `Config.alternativeIdentifier.enabled` | boolean | `true` | When `true`, uses the identifier type below instead of the first available identifier. |
| `Config.alternativeIdentifier.identifier` | string | `"discord"` | Which identifier type to use as the player key: `"license"`, `"discord"`, `"steam"`, `"fivem"`, `"xbl"`, `"live"`. |
| `Config.debug` | boolean | `true` | Enables verbose F8 logging and **bypasses all ACE permission checks** (every player is treated as admin). **Must be `false` on production.** |
| `Config.messageNotification` | string | `'script'` | How desktop players are notified of new messages while the panel is closed. `'script'` shows a toast overlay; `'framework'` fires the framework's native notification event. |
| `Config.screenshot.enabled` | boolean | `true` | Whether the in-game camera button appears in the ad form. Also requires `screenshot-basic` to be running. |
| `Config.screenshot.type` | string | `'discord'` | Upload mode: `'discord'` (webhook CDN URL), `'ftp'` (HTTP endpoint that returns a URL in its response body), `'base64'` (embed raw JPEG data URI directly in the ad). |
| `Config.screenshot.uploadUrl` | string | `''` (empty) | Your Discord webhook URL or FTP endpoint. Empty string forces `base64` fallback regardless of `type`. |

::: warning Identifier lock-in
`Config.alternativeIdentifier.identifier` determines how existing ads are linked to players. Changing it after players have posted ads orphans those listings — they will no longer appear under "My Ads" for the original poster.
:::

::: danger Disable debug on production
`Config.debug = true` grants every connected player admin-level access to `/mpadmin` and all admin callbacks. Only use it in isolated local development environments.
:::
