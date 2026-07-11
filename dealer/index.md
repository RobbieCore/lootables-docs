# NPC Dealers

A street-level economy script for FiveM. Players hire NPC dealers, keep them stocked with product, and manage the whole operation over a burner phone interface. Dealers work assigned corners, sell to other players and ambient pedestrians, skim the till, lie about it, and crack under police pressure — including an in-world frisk and a multi-round interrogation that writes intel into a cop's evidence notebook.

<a href="https://robicore.com" target="_blank" style="display:inline-block;padding:10px 24px;background:#3451b2;color:white;border-radius:8px;text-decoration:none;font-weight:600;margin-top:8px;">Purchase on Robicore Store</a>

---

## Key Features

- **Burner phone interface** — owners manage all their dealers from a single in-game phone app: hire, supply, assign corners, collect earnings, arm, fire, pay bonuses, and read dealer texts
- **NPC dealer AI** — dealers work assigned corners or walk custom routes, sell to players and ambient pedestrians, react to stress, flee cops, and may desert with stock if pushed too hard
- **Hidden personalities** — each dealer rolls a hidden trait at hire (loyal, greedy, coward, snake) that governs sell rate, skim chance, lie rate, and snitch resistance
- **In-world police interactions** — cops frisk dealers for contraband and crack them in a multi-round interrogation; results write case intel into a carried evidence notebook item
- **Heat and stress system** — dealer heat draws police dispatch; stress from cops nearby or players aiming at them drives flight, texts to the owner, and eventual desertion
- **Loyalty economy** — cash bonuses, timely restocking, and keeping heat low build loyalty; busts, dry spells, and neglect erode it
- **Notification control** — per-dealer buzz presets (all / frequent / normal / important) so owners aren't spammed; force-majeure events (death, bust, robbery) always notify regardless
- **Walk-route recorder** — assign a patrol path instead of a static spot using the in-world route editor
- **Admin dashboard** — add items, manage corners and hire spots, view all active dealers
- **Recruiter peds** — place in-world recruiters that players approach to hire a dealer; recruiter spots are map-blipped for discoverability
- **Framework-agnostic** — works with ESX, QBCore, QBox, and others via `kq_link`; no framework code inside the script
- **Auto-created database** — all tables set up on first start; no SQL import required
