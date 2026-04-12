---
layout: home

title: Robicore Docs
titleTemplate: Documentation for Robicore FiveM scripts

hero:
  name: Robicore
  text: Documentation.
  tagline: Official docs for Robicore FiveM scripts, powered by kq_link.
---

<div class="vp-doc home-extras">

## What is kq_link?

`kq_link` is the shared compatibility layer that every Robicore script runs on. It auto-detects your server's framework (ESX or QBCore), inventory system, and targeting resource at runtime — so scripts work on any setup without per-framework builds or manual configuration.

## Scripts

- **[Lootables](/lootables/)** — database-driven lootable box system with in-game admin UI and skill-based minigames.
- **[Cartel Island Heist](/rc_cartel_heist/)** — multi-stage island and bunker heist with armed guards, thermite breaches, and a card-swipe minigame.

</div>

<style scoped>
.home-extras {
  max-width: 820px;
  margin: 0 auto;
  padding: 2rem 24px 5rem;
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
