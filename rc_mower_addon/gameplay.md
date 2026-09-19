# Gameplay

What the addon changes about a shift, from the player's side.

## The yard has more in it

Core spawns grass and rocks. The addon spawns three more kinds of work on top,
each belonging to one tool:

| What's in the yard | Tool that handles it |
|---|---|
| Tall weeds along edges and fences | Trimmer |
| Piles of dead leaves | Leaf blower |
| Wilting plants | Watering can |
| Piles of cut grass, left behind by mowing | Pitchfork |

The mowing itself is unchanged, and by default all of this is optional bonus
money — a player who only mows still gets paid. Set
`Config.completion.requireTasks` if you would rather the yard is not finishable
until everything is done.

Whatever the held tool can act on is outlined, and everything else dims, so
there is no hunting for the last weed.

## Renting a tool

Tools are rented from the **Workshop** menu, the same one core already uses for
mower upgrades. Renting charges a deposit; returning the tool gives it back.
Lose the tool and the deposit is gone.

A rented tool arrives as an inventory item. **Using the item** puts it in the
player's hands; using it again puts them back on the mower. Only one tool is
held at a time.

Tools run on a charge. When one runs dry, the player refills it at the truck —
a short progress bar, and they are back to work.

## The carry loop

Mowing leaves piles of cut grass on the lawn, and they do not disappear on
their own.

1. Hold the pitchfork, walk up to a pile, pick it up.
2. Carry it to the truck and load it. The truck holds five piles, and that
   capacity is **shared by the whole crew** — a full truck blocks everyone.
3. Drive to a dump point and unload for money and XP.

While the truck is full, the yard grows extra watering and blowing work, so
nobody is stood around waiting for a teammate to drive back.

The trailer is the bigger sink: it holds far more, and it is emptied at the
disposal site marked on the map rather than at a dump point.

First time through, on-screen guidance walks a player through the loop. It
always shows until their first paid job, then asks once whether to keep it.
After that it is `/mowertut`'s to control.

## Crews

Up to four players can work one yard together.

| Command | What it does |
|---|---|
| `/mowerinvite [id]` | Invite a nearby player to your crew |
| `/mowerleave` | Leave the crew you are in |
| `/mowerkick [id]` | Remove someone from your crew |
| `/lobbyleave` | Leave a co-op lobby you have joined but not started |
| `/mowertut on\|off\|auto` | First-run carry guidance: always, never, or until learnt |

An invited player gets a prompt and answers it without typing.

A crew of two or more earns a **+25 % payout bonus**, and the money is split
between members when the job settles. The yard scales with the crew: more
players means more grass, more tasks and more places for something valuable to
turn up — but not proportionally more, so working together still pays better
than working alone.

## Hidden loot

Some grass piles have something in them: a wallet, a watch, a ring, and rarely
something genuinely valuable. Finds are not inventory items — they are counted
up and paid as a tip when the job settles, so there is nothing to sell or fence
afterwards.

## What the HUD shows

The addon extends core's HUD rather than adding a second one. When the relevant
feature is active you get panels for the crew, the tool in hand and its
remaining charge, the truck's load, the trailer's load, and anything found so
far. With the addon removed those panels simply do not appear.
