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

Open `config.lua` and set the values relevant to your server before the first start:

```lua
Config.sqlDriver = "oxmysql"   -- must match your SQL resource name exactly

Config.alternativeIdentifier = {
    enabled    = true,
    identifier = "discord",    -- "license" | "xbl" | "live" | "discord" | "fivem" | "license2"
}

Config.debug = false           -- MUST be false on any live server

Config.messageNotification = 'script'  -- 'script' | 'framework'
```

::: danger Disable debug on production
`Config.debug = true` grants every connected player admin-level access. Set it to `false` before the resource goes live.
:::

::: warning Identifier lock-in
`Config.alternativeIdentifier.identifier` determines how existing ads are linked to players. Do not change it after players have posted ads — existing listings will no longer appear under "My Ads" for the original poster.
:::

## 3. Configure the Discord webhook (optional)

Open `server/server-config.lua` and paste your webhook URL if you want new-ad and deletion events logged to a Discord channel:

```lua
Config.whlink = ''    -- paste your full Discord webhook URL, or leave empty to disable
Config.whName = 'Marketplace Logger'
Config.whLogo = 'https://example.com/icon.png'
```

See [Discord Webhook](/rc_marketplace/configuration/discord-webhook) for the full field reference.

## 4. Configure the in-game camera (optional)

If `screenshot-basic` is running on your server and you want players to take in-game photos for ads:

```lua
Config.screenshot = {
    enabled   = true,
    type      = 'discord',   -- 'discord' | 'ftp' | 'base64'
    uploadUrl = '',          -- Discord webhook URL or FTP endpoint; empty forces base64
}
```

See [In-Game Camera](/rc_marketplace/configuration/in-game-camera) for all modes.

## 5. Add to `server.cfg`

`oxmysql` and `kq_link` must both start before `rc_marketplace`. If you use a phone resource, start it before `rc_marketplace` as well:

```cfg
ensure oxmysql
ensure kq_link

# your phone resource here (if any)

ensure rc_marketplace
```

## 6. Grant the admin ACE

Players who need access to `/mpadmin` require the `rc_marketplace.admin` ACE:

```cfg
add_ace group.admin rc_marketplace.admin allow
```

Regular players need no ACE.

## 7. First-start verification

Start the resource and check the server console. A clean start has no `SCRIPT ERROR` lines. The database is set up automatically on first boot — no SQL import is needed.

In-game: the phone app appears in the phone's app list if a compatible phone is running, or `/marketplace` opens the panel in standalone mode.

::: tip
If you see database errors on boot, your SQL resource is not starting before `rc_marketplace`. Fix the load order in `server.cfg` and restart.
:::
