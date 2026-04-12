# Bunker Access Conditions

Control the required steps before the underground bunker entrance opens:

```lua
Config.bunkerEntrance = {
    conditions = {
        hackedEMP               = true,
        electricityDone         = true,
        outsideContainersLooted = true,
    }
}
```

| Condition | Effect when `true` |
|-----------|--------------------|
| `hackedEMP` | All EMP blockers must be hacked before the entrance unlocks |
| `electricityDone` | The electricity minigame must be completed |
| `outsideContainersLooted` | All outdoor shipping containers must be looted |

Set any condition to `false` to skip that requirement.

## Police Requirements

The heist also requires a minimum number of police officers online before players can start:

```lua
Config.police = {
    jobNames    = { 'police' },
    onlineCount = 1,
}
```

Add additional job names if your server uses custom police jobs. Set `onlineCount = 0` to disable the requirement entirely.
