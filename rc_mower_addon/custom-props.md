# Custom layer props (Hunyuan3D pipeline)

Base game has no usable leaf-pile or grass-clipping-pile prop. These two are
generated, converted to GTA `.ydr`, streamed, and wired into `Config.layers`.

## Props to make

| model name      | kind / tool        | target size (m)      | look                                   |
|-----------------|--------------------|----------------------|----------------------------------------|
| `rcm_grasspile` | `pile` / pitchfork | ~0.8 W × 0.8 D × 0.5 H | loose mound of green cut-grass clippings |
| `rcm_leafpile`  | `leaves` / blower  | ~0.9 W × 0.9 D × 0.4 H | flatter pile of dry brown/yellow leaves  |

Static decoration, walk-through → **no collision** needed (cheaper, simpler).
LOD: one model is fine at yard view distance; skip LOD chain.

## Reference image (Hunyuan input)

Hunyuan3D needs **one image, single object, plain/transparent background**. A raw
"clippings scattered on a lawn" photo fails — it can't separate blob from grass.
So either:

- **A. Source + clean:** grab a CC0 pile shot, then `rembg` / Photoshop knock the
  background to flat white before feeding Hunyuan.
- **B. Generate the reference** (more reliable for an amorphous mound) with any
  text-to-image model, prompt:
  > `a single loose mound of freshly cut green grass clippings, centered, isolated on a plain flat white background, soft even studio lighting, three-quarter top-down view, no shadow, product photo`
  (swap "green grass clippings" → "dry brown autumn leaves" for `rcm_leafpile`.)

Then run Hunyuan3D-2 (image→3D) on the cleaned/generated image.

## Conversion chain (after Hunyuan)

1. **Blender** — decimate to low poly, recenter origin to base, scale to target
   size above (GTA unit = 1 m), Z-up / Y-forward, bake texture to power-of-2.
2. **Sollumz** — export drawable → `rcm_grasspile.ydr` (+ `.ytd` texture dict).
3. **CodeWalker** — make a YTYP archetype so `GetHashKey('rcm_grasspile')` resolves.
4. **Stream** — drop `.ydr` + `.ytd` in `stream/`, register ytyp in `fxmanifest.lua`:
   `data_file 'DLC_ITYP_REQUEST' 'stream/rcm_props.ytyp'`.
5. **Verify load** — `/pt rcm_grasspile`. If it attaches in hand, it loads.

## Wire-in (once names resolve)

`config.lua` → `Config.layers`:
```lua
leaves    = { density = 0.006, min = 2, max = 10, model = 'rcm_leafpile' },
pileModel = 'rcm_grasspile',
```
Restart `rc_mower_addon`. Highlight already off (`Config.layers.highlight = false`).
