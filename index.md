---
layout: home

title: Robicore Docs
titleTemplate: Official documentation for Robicore FiveM scripts

hero:
  name: Robicore
  text: Docs for serious FiveM servers.
  tagline: Official documentation for every Robicore script — deep configuration references, admin guides, and developer APIs.
  actions:
    - theme: brand
      text: Browse Lootables
      link: /lootables/
    - theme: alt
      text: Cartel Island Heist
      link: /rc_cartel_heist/
    - theme: alt
      text: Visit Store ↗
      link: https://robicore.com

features:
  - icon: 📦
    title: Lootables
    details: Database-driven lootable box system. In-game admin UI, 3D gizmo editor, skill-based minigames, and fully randomized loot tables.
    link: /lootables/
    linkText: Read the docs

  - icon: 🏝️
    title: Cartel Island Heist
    details: Multi-stage island & bunker heist. Armed NPC guards, thermite breaches, card-swipe hacks, and aerial escape routes.
    link: /rc_cartel_heist/
    linkText: Read the docs

  - icon: ⚙️
    title: Auto framework detection
    details: Powered by kq_link — ESX, QBCore, inventories, and targeting systems are detected automatically with zero config.

  - icon: 🧩
    title: Deep customization
    details: Editable client & server files, localization support, and public export APIs so other scripts can hook in cleanly.

  - icon: 🛡️
    title: Police & dispatch ready
    details: Built-in dispatch with drop-in support for cd-dispatch, ps-dispatch, core-dispatch, and minimum-police requirements.

  - icon: 🚀
    title: Production-grade
    details: MySQL-backed persistence, automatic migrations, performant event loops, and battle-tested on live servers.
---

<div class="vp-doc home-extras">

## Quick links

- **Getting started** — [Install Lootables](/lootables/getting-started/installation) · [Cartel Heist setup](/rc_cartel_heist/getting-started/)
- **Admin guides** — [Place boxes in-game](/lootables/admin-guide/placing-boxes) · [Gizmo editor](/lootables/admin-guide/gizmo-editor)
- **Developer API** — [Server exports](/lootables/developer-api/server-exports) · [Client exports](/lootables/developer-api/client-exports)
- **Troubleshooting** — [Lootables](/lootables/troubleshooting) · [Cartel Heist](/rc_cartel_heist/troubleshooting)

## Need help?

Join the [Robicore Discord](https://discord.gg/your-invite) for support, feature requests, and release announcements — or head to the [store](https://robicore.com) to grab the latest scripts.

</div>

<style scoped>
.home-extras {
  max-width: 1152px;
  margin: 0 auto;
  padding: 3rem 24px 5rem;
}

.home-extras h2 {
  font-family: var(--font-display);
  font-weight: 700;
  letter-spacing: -0.01em;
  font-size: 1.5rem;
  margin-top: 2.5rem;
  padding-top: 1.5rem;
  border-top: 1px solid var(--border);
}

.home-extras h2:first-child {
  margin-top: 0;
  padding-top: 0;
  border-top: 0;
}
</style>
