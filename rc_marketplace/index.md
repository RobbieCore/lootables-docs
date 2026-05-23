# rc_marketplace

An in-game marketplace and ads browser for FiveM. Players post and browse classifieds across six categories, message sellers through an encrypted in-app chat, pin ad locations on a GTA V map, and save favourite listings. The UI runs as a phone app (Y-Series, lb-phone, gksphone, qs-smartphone-pro) or as a standalone desktop panel when no supported phone is running.

<a href="https://robicore.com" target="_blank" style="display:inline-block;padding:10px 24px;background:#3451b2;color:white;border-radius:8px;text-decoration:none;font-weight:600;margin-top:8px;">Purchase on Robicore Store</a>

---

## Documentation map

| Section | Use it for |
|---|---|
| [Requirements](/rc_marketplace/getting-started/requirements) | Dependencies, framework compatibility, optional integrations |
| [Installation](/rc_marketplace/getting-started/installation) | Drop-in steps, `server.cfg` load order, ACE permissions |
| [First Ad](/rc_marketplace/getting-started/first-ad) | End-to-end walkthrough from opening the panel to a live listing |
| [Browsing Ads](/rc_marketplace/player-guide/browsing-ads) | Home feed, category browsing, promoted carousel, saved/liked ads |
| [Posting an Ad](/rc_marketplace/player-guide/posting-an-ad) | Form fields by category, image rules, map pin, promoted option |
| [Messaging Sellers](/rc_marketplace/player-guide/messaging-sellers) | Chat flow, unread indicators, notifications |
| [Setting a Waypoint](/rc_marketplace/player-guide/setting-a-waypoint) | Navigation arrow button on an ad's map widget |
| [Admin Panel](/rc_marketplace/admin-guide/admin-panel) | Runtime tunables via `/mpadmin`: costs, limits, currency, auto-remove |
| [Bans and Moderation](/rc_marketplace/admin-guide/bans-and-moderation) | Banning players, unbanning, ad removal |
| [General Settings](/rc_marketplace/configuration/general-settings) | `config.lua` bootstrap options |
| [Discord Webhook](/rc_marketplace/configuration/discord-webhook) | `server/server-config.lua` webhook fields |
| [In-Game Camera](/rc_marketplace/configuration/in-game-camera) | `screenshot-basic` integration, upload modes |
| [Editable Files](/rc_marketplace/customization/editable-files-overview) | What you can modify, what is encrypted |
| [Localization](/rc_marketplace/customization/localization) | `locale/locale.lua` — translating or adding strings |
| [Theme](/rc_marketplace/customization/theme) | `ui.config.lua` dark/light palettes, cross-script sync |
| [Troubleshooting](/rc_marketplace/troubleshooting) | Common failure modes and fixes |

## Key features

- **Six ad categories** — Cars, Items, Jobs, Real Estates, Weapons, Other; each with category-specific detail fields.
- **Promoted / featured ads** — optional promoted flag bumps an ad into the home carousel at posting cost.
- **GTA V Leaflet map picker** — click anywhere on the map to pin an ad's location; viewers can set a minimap waypoint from the ad.
- **Encrypted in-app chat** — buyer-to-seller messaging stored with AES encryption; rate-limited and ad-derived to prevent spam.
- **Phone integration** — auto-registers as "Marketplace" in Y-Series, lb-phone, gksphone, and qs-smartphone-pro. Falls back to `/marketplace` command when none are running.
- **In-game camera** — optional `screenshot-basic` integration; takes a photo in-game and attaches it to the ad via Discord webhook, FTP, or base64.
- **Runtime admin panel** — `/mpadmin` command opens an in-NUI control panel for prices, currency symbol, max ads per player, and auto-expiry window. No restart required.
- **Ban management** — admins can ban/unban identifiers from posting; banned players' ads are removed automatically.
- **Likes / saved ads** — players can like any ad; a dedicated saved tab shows their liked listings.
- **Dual theme** — dark and light palettes defined in `ui.config.lua`; syncs across all RobiCore scripts via the `rc:themeChanged` event.
- **0.00 ms idle** — callback-driven; no per-tick polling.
- **Database auto-migration** — all tables are created on first boot; no manual SQL import needed.
