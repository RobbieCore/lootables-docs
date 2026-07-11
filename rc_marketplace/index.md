---
title: rc_marketplace
---

# rc_marketplace

![rc_marketplace](/rc_marketplace/package.png)

An in-game marketplace for FiveM. Players post, browse, and reply to ads across six categories. The panel runs as an app inside a compatible phone resource when one is detected, or opens via `/marketplace` when no phone is present.

<a href="https://robicore.com" target="_blank" style="display:inline-block;padding:0.5rem 1.25rem;background:#E52D2D;color:#fff;font-weight:600;border-radius:4px;text-decoration:none;">Buy on Robicore Store</a>

## Key Features

- Six ad categories — Cars, Items, Jobs, Real Estates, Weapons, Other — each with category-specific fields
- GTA V map picker: sellers pin an ad's location; buyers tap **Set waypoint** to navigate there
- Optional in-game camera for ad photos via `screenshot-basic`
- In-app messaging between buyers and sellers, gated by opening an ad first and rate-limited per sender
- Promoted / featured listings with configurable cost, shown in the home carousel
- Favorites (saved ads) tab per player
- Live admin panel (`/mpadmin`): pricing, currency, per-player limits, and auto-remove window — no server restart required
- Ban system: by identifier or by clicking an online player; banned players' active ads removed automatically
- Discord webhook logging for new ads, deletions, and resource start
- Framework auto-detection via `kq_link` (ESX, QBCore, QBox, ox_core, TMC, vRP, Standalone)
- All UI strings translatable in `locale/locale.lua`
- Light/dark theme toggle, synchronized across RobiCore scripts
- Database set up automatically on first boot — no SQL import needed
