# Cooldowns

Control timing between player interactions. All values are in **milliseconds**.

## Configuration

```lua
Config.cooldowns = {
    errorMessage = 2500,
    successOpen  = 1500,
    pickupItem   = 2500,
}
```

| Option | Purpose | Default |
|--------|---------|---------|
| `errorMessage` | How long error tooltips stay on screen (e.g., "not enough police") | `2500` (2.5s) |
| `successOpen` | Delay after opening a box before further interaction is allowed | `1500` (1.5s) |
| `pickupItem` | Delay between picking up individual loot items | `2500` (2.5s) |

## Reset Time

The **reset time** (how long before a looted box becomes available again) is configured **per-box** in the admin panel, not in `config.lua`. Each box stores its own reset time in the database.

To change a box's reset time:
1. Run `/placebox`
2. Select the box
3. Edit the **Reset Time** field (in milliseconds)
4. Save
