# Client Exports

Client-side exports for integrating with Lootables from other scripts.

## RegisterOnPlayerSuccessCallback

Register a callback that fires whenever a player successfully opens any lootable box.

```lua
exports['rc_lootables']:RegisterOnPlayerSuccessCallback(function(type)
    -- type: 'container', 'safe', or 'crate'
    print('Player opened a ' .. type)
end)
```

| Parameter | Type | Description |
|-----------|------|-------------|
| `type` | `string` | The box type that was opened: `'container'`, `'safe'`, or `'crate'` |

### Use Cases

- Trigger custom animations or effects after a successful open
- Log player activity
- Start a timer or trigger another event in your script
- Play custom sounds

### Example: Custom Notification

```lua
exports['rc_lootables']:RegisterOnPlayerSuccessCallback(function(type)
    if type == 'container' then
        -- Show a custom notification for container opens
        TriggerEvent('mynotify:show', 'You cracked the container!')
    end
end)
```
