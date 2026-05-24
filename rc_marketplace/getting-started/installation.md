# Installation

## 1. Place the resource

Drop the `rc_marketplace` folder into your server's `resources/` directory (or any bracketed category folder):

```
resources/
  [shop]/
    rc_marketplace/
      config.lua
      fxmanifest.lua
      ...
```

## 2. Configure `config.lua`

Open `config.lua`. The fields most servers need to set before the first start:

```lua
Config.sqlDriver = "oxmysql"   -- must match your SQL resource name

Config.alternativeIdentifier = {
    enabled    = true,
    identifier = "discord",    -- "license" | "discord" | "steam" | "fivem" | "xbl" | "live"
}

Config.debug = false           -- set true ONLY during local development

Config.messageNotification = 'script'  -- 'script' | 'framework'
```

::: danger Disable debug on production
`Config.debug = true` grants every connected player admin-level access to the marketplace. Keep it `false` on any server with real players.
:::

`Config.alternativeIdentifier.identifier` determines which identifier type links players to their ads. **Do not change this after players have posted ads** — it orphans existing listings.

## 3. Configure `server/server-config.lua`

Set your Discord webhook URL if you want new-ad and deletion notifications logged to a channel:

```lua
Config.whlink  = ''           -- paste your full Discord webhook URL here
Config.whName  = 'Marketplace Logger'
Config.whLogo  = 'https://example.com/icon.png'
```

`Config.whlink` is empty by default. Ad-event webhooks are disabled until you supply a URL.

See [Discord Webhook](/rc_marketplace/configuration/discord-webhook) for the full field reference.

## 4. Configure the in-game camera (optional)

If `screenshot-basic` is running and you want players to take in-game photos for ads, set the upload mode in `config.lua`:

```lua
Config.screenshot = {
    enabled   = true,
    type      = 'discord',   -- 'discord' | 'ftp' | 'base64'
    uploadUrl = '',          -- set to your Discord webhook URL or FTP endpoint
}
```

`uploadUrl` is empty by default; leaving it empty forces the `base64` fallback regardless of `type`.

See [In-Game Camera](/rc_marketplace/configuration/in-game-camera) for all modes and caveats.

## 5. Add to `server.cfg`

Load `kq_link` (and your SQL resource) before `rc_marketplace`. If you are using a phone resource, start it before `rc_marketplace` as well:

```cfg
ensure oxmysql
ensure kq_link

# your phone resource here (if any)

ensure rc_marketplace
```

Load order matters. `oxmysql` and `kq_link` must be running before `rc_marketplace` starts.

## 6. Grant the admin ACE

Any player who needs access to the admin panel (`/mpadmin`) or seed commands requires the `rc_marketplace.admin` ACE:

```cfg
add_ace group.admin rc_marketplace.admin allow
```

Regular players do not need any ACE.

## 7. First-start verification

Start the resource and check the server console. A clean start produces no errors.

Expected behavior:
- No `SCRIPT ERROR` lines in the console.
- All `rc_marketplace_*` tables created automatically in the database (12 tables total).
- In-game: the phone app appears in the phone's app list if a compatible phone is running, or `/marketplace` opens the panel in standalone mode.

::: tip
If you see `sqlFetch failed` errors on boot, your SQL resource is not starting before `rc_marketplace`. Fix the load order in `server.cfg` and restart.
:::
