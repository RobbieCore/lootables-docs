# What players see

Useful when you are writing your own server's guide, or answering a support
ticket.

## Starting a job

The player targets the depot manager and picks **Start work**. The option shows
the deposit they are about to pay. If you have turned on the job requirement in
`config.lua`, players without that job see a "come back as a gardener" option
instead.

Vehicles spawn at the depot and the yard is marked on the map.

![HUD before reaching the yard](/rc_mower/img/hud-travelling.png)

## The HUD

![HUD during a job](/rc_mower/img/hud-job.png)

| Panel | Shows |
|---|---|
| Job | Estimated payout so far, how much of the yard is cut, and the condition of each vehicle |
| Stats | Rank name, level, XP toward the next level, and the current streak |
| Leaderboard | Today's top three and the player's own position |

Vehicle condition is the mower's engine health, and it decides the deposit
refund — so it is on screen the whole time, not just at the end.

![Stats panel](/rc_mower/img/hud-stats.png)
![Leaderboard panel](/rc_mower/img/hud-board.png)

Players arrange this themselves with `/mowerhud`.

![HUD arranger](/rc_mower/img/hud-edit.png)

| Control | Does |
|---|---|
| Blocks | Show or hide each panel |
| Palette | Twelve presets, or set any of the six colours individually |
| Opacity | How solid the panels are |
| Style | **Solid** plates or **Glass** |
| Image size | Scales the item and vehicle artwork |
| Volume | The level-up sound |
| **Reset** | Back to the shipped layout and colours |

Panels are dragged straight on the HUD while this is open. Everything here is
saved per player and survives a reconnect, so it is a player preference, not
something you need to manage.

On screen, at the shipped defaults, it comes to this — deliberately sparse, and
click-through everywhere except the arranger and the modals:

![HUD in place](/rc_mower/img/hud-full.png)

## Getting paid

Once enough of the yard is cut (your **Completion rules**), the customer pays.
The payout is grass money, plus the perfect-yard bonus if nothing was left, plus
a level bonus and a streak bonus, capped by your payout limit. Loot items may
drop with the payment.

A perfect yard extends the streak. A passing but imperfect yard resets it.
Streaks are not kept across a server restart.

Levelling up plays a short celebration and unlocks the next mower tier.

## The workshop

At the depot, the **Workshop** option on the manager opens the tier shop. It is
only offered between jobs — a player already working will not see it.

![Workshop](/rc_mower/img/workshop.png)

Three mower tiers — bronze, silver, gold. Bronze is free and everyone starts
with it. Each tier is faster and absorbs more rock damage, and each has a level
gate as well as a price, so money alone does not skip progression. A tier the
player cannot afford or has not levelled into shows the reason on the card.

Purchases are permanent and survive restarts.

## The daily leaderboard

`/mowerboard`, or the panel on the HUD.

![Leaderboard](/rc_mower/img/leaderboard.png)

Top three win the prizes you configured — shown here at the start of a fresh
period, before anyone has scored. Money is deliberately not part of the score,
so the board never publishes anyone's income.

Prizes are claimed from this window. Anything won and not yet collected shows as
**Unclaimed rewards** at the top and waits for the player, so a player who was
offline at the reset does not lose a prize.

## Returning the vehicles

The player drives back to the depot, parks inside the return radius, and picks
**Finish work** on the manager.

| Mower engine health | Deposit refund |
|---|---|
| 800 or more | Full |
| 300 – 800 | Half |
| Below 300 | Nothing |

## When something goes wrong

- `/mowerabandon` force-ends the job. The player gets nothing — no pay, no
  refund — but they are not stuck.
- A job left idle with no grass cut is disbanded automatically after 30 minutes.
- If the HUD stops receiving updates for 10 seconds it hides itself, so a
  disconnect never leaves panels stuck on screen.
