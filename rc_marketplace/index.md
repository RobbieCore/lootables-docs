# rc_marketplace

An in-game classifieds board for FiveM. Players browse, post, edit, and chat about ads across six categories. The panel runs as an app inside a compatible phone host when one is detected, or as a standalone `/marketplace` panel when no phone is present.

## Documentation map

| Section | Use it for |
|---|---|
| [Requirements](/rc_marketplace/getting-started/requirements) | Dependencies, framework compatibility, optional integrations |
| [Installation](/rc_marketplace/getting-started/installation) | Drop-in steps, `server.cfg` load order, ACE permissions |
| [First Ad](/rc_marketplace/getting-started/first-ad) | End-to-end walkthrough from opening the panel to a live listing |
| [Browsing Ads](/rc_marketplace/player-guide/browsing-ads) | Home feed, category browsing, promoted carousel, saved/liked ads |
| [Posting an Ad](/rc_marketplace/player-guide/posting-an-ad) | Form fields by category, image rules, map pin, promoted option |
| [Messaging Sellers](/rc_marketplace/player-guide/messaging-sellers) | Chat flow, notifications, rate limits |
| [Setting a Waypoint](/rc_marketplace/player-guide/setting-a-waypoint) | Navigation button on an ad's map widget |
| [Admin Panel](/rc_marketplace/admin-guide/admin-panel) | Runtime tunables via `/mpadmin`: costs, limits, currency, auto-remove |
| [Bans and Moderation](/rc_marketplace/admin-guide/bans-and-moderation) | Banning players, unbanning, ad removal |
| [General Settings](/rc_marketplace/configuration/general-settings) | `config.lua` bootstrap options |
| [Discord Webhook](/rc_marketplace/configuration/discord-webhook) | `server/server-config.lua` webhook fields |
| [In-Game Camera](/rc_marketplace/configuration/in-game-camera) | `screenshot-basic` integration, upload modes |
| [Editable Files](/rc_marketplace/customization/editable-files-overview) | What you can modify, what is encrypted |
| [Localization](/rc_marketplace/customization/localization) | `locale/locale.lua` — translating or adding strings |
| [Theme](/rc_marketplace/customization/theme) | `ui.config.lua` dark/light palettes |
| [Troubleshooting](/rc_marketplace/troubleshooting) | Common failure modes and fixes |

## Key features

- **Six ad categories** — Cars, Items, Jobs, Real Estates, Weapons, Other; each with category-specific detail fields.
- **Promoted / featured ads** — optional promoted flag bumps an ad into the home carousel for an extra fee.
- **GTA V Leaflet map picker** — click anywhere on the map to pin an ad's location; viewers can set a minimap waypoint from the ad.
- **Encrypted in-app chat** — buyer-to-seller messaging stored with AES encryption; rate-limited and ad-derived to prevent spam.
- **Phone integration** — auto-registers as a "Marketplace" app inside a compatible phone resource when one is detected. Falls back to the `/marketplace` command when none is running.
- **In-game camera** — optional `screenshot-basic` integration; takes a scripted photo and attaches it via Discord webhook, FTP, or base64. Desktop mode only.
- **Runtime admin panel** — `/mpadmin` opens an in-NUI control panel for prices, currency symbol, max ads per player, and auto-expiry window. No restart required.
- **Ban management** — admins can ban/unban identifiers from posting; banned players' ads are removed automatically.
- **Likes / saved ads** — players can like any ad; a dedicated saved tab shows their liked listings.
- **Dual theme** — dark and light palettes defined in `ui.config.lua`; players toggle from the Settings panel.
- **Database auto-migration** — all tables are created on first boot; no manual SQL import needed.
