# Target System

By default, Lootables uses **proximity prompts** — a text prompt appears when a player is close enough to a box. You can switch to a **target system** instead.

## Configuration

```lua
Config.target = {
    enabled = false,
    system  = 'ox_target',
}
```

| Option | Purpose | Default |
|--------|---------|---------|
| `enabled` | Use a target system instead of proximity prompts | `false` |
| `system` | Which target resource to use | `'ox_target'` |

## Supported Systems

| Value | Resource |
|-------|----------|
| `'ox_target'` | ox_target |
| `'qtarget'` | qtarget |
| `'qb-target'` | qb-target |

## How It Works

When `enabled = true`, the script registers target zones on each spawned box entity. Players aim at the box and see the target option instead of a floating text prompt.

The `CanPlayerDoIt()` function in `client/editable/functions.lua` is called before showing the target option. You can override it to add custom conditions:

```lua
function CanPlayerDoIt()
    -- Return false to block interaction
    return true
end
```

## Notes

- Make sure your target resource is started **before** `ls_lootables` in `server.cfg`
- Other target systems may work if they follow the same API as the supported ones
