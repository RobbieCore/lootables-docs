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

Open `config.lua`. The only field most servers need to change before the first start:

```lua
Config.sqlDriver = "oxmysql"   -- must match your SQL resource name

Config.alternativeIdentifier = {
    enabled    = true,
    identifier = "license",    -- "license" | "discord" | "steam" | "fivem" | "xbl" | "live"
}

Config.debug = false           -- set true only during development

Config.messageNotification = 'script'  -- 'script' | 'framework'
```

`Config.alternativeIdentifier.identifier` decides which identifier type links players to their ads. **Do not change this after players have posted ads** — it will orphan existing listings.

## 3. Configure `server/server-config.lua`

Set your Discord webhook URL if you want new-ad and deletion notifications:

```lua
Config.whlink   = 'https://discord.com/api/webhooks/ID/TOKEN'
Config.whName   = 'Marketplace Logger'
Config.whLogo   = 'https://example.com/icon.png'
```

See [Discord Webhook](/rc_marketplace/configuration/discord-webhook) for the full field reference.

## 4. Configure the in-game camera (optional)

If `screenshot-basic` is running and you want in-game photo capture, set the upload mode in `config.lua`:

```lua
Config.screenshot = {
    enabled   = true,
    type      = 'discord',               -- 'discord' | 'ftp' | 'base64'
    uploadUrl = 'https://discord.com/api/webhooks/ID/TOKEN',
}
```

See [In-Game Camera](/rc_marketplace/configuration/in-game-camera) for all modes and caveats.

## 5. Add to `server.cfg`

Load `kq_link` (and your SQL resource) before `rc_marketplace`:

```cfg
ensure oxmysql
ensure kq_link

# optional phone (whichever you use)
ensure yseries
# ensure lb-phone

ensure rc_marketplace
```

Load order matters. If `kq_link` or `oxmysql` start after `rc_marketplace`, the resource will fail.

## 6. Grant the admin ACE

Players who need to open the admin panel (`/mpadmin`) or run seed commands require the `rc_marketplace.admin` ACE:

```cfg
add_ace group.admin rc_marketplace.admin allow
```

Regular players do not need any ACE.

## 7. First-start verification

Start the resource and check the server console. A clean start prints nothing unless `Config.debug = true`.

Expected behavior:
- No `SCRIPT ERROR` lines in the console.
- All `rc_marketplace_*` tables created automatically in the database.
- In-game, the phone app appears in the phone's app list (if a supported phone is running), or `/marketplace` opens the panel (standalone).

::: tip
If you see `sqlFetch failed` errors on boot, your SQL resource is not started before `rc_marketplace`. Fix the `server.cfg` load order and `restart rc_marketplace`.
:::
