# 3D Text Style

The 3D floating text appearance is customized in `client/editable/functions.lua` via the `Modern3D` table:

```lua
local Modern3D = {
    font        = 4,
    bgColor     = { 15, 15, 15, 125 },
    borderColor = { 0, 255, 170, 255 },
    textColor   = { 255, 255, 255, 255 },
    shadowColor = { 0, 0, 0, 150 },
    arrowColor  = { 0, 255, 170, 255 },
    padding     = 0.003,
    offsetY     = 0.25,
    useArrow    = true,
    arrowSize   = 0.012,
    minScale    = 0.2,
    borderWidth = 0.002,
}
```

Colors are given as `{ r, g, b, a }` with each channel in the `0–255` range.
