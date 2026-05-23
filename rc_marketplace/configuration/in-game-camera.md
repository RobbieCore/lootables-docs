# In-Game Camera

The in-game camera lets players take a photo in-game and attach it directly to an ad. It uses the optional `screenshot-basic` resource.

## Requirements

- `screenshot-basic` must be started and listed in `server.cfg` before `rc_marketplace`.
- `Config.screenshot.enabled = true` in `config.lua`.

If either condition is not met, the **Take a picture** button is hidden automatically in the ad form. Phone users always see URL input only — the camera is desktop mode only.

## Upload modes

Set `Config.screenshot.type` in `config.lua`:

| Mode | Description | `uploadUrl` needed |
|---|---|---|
| `'discord'` | Uploads the JPEG to a Discord webhook. Stores the returned CDN URL with the ad. | Yes — full webhook URL |
| `'ftp'` | POSTs the JPEG to a custom HTTP endpoint. Expects the hosted image URL as the plain-text response body. | Yes — your endpoint URL |
| `'base64'` | No upload. Embeds a raw JPEG `data:` URI directly in the ad record. Avoids external services but increases database row size. | No |

Setting `uploadUrl = ''` forces `base64` fallback regardless of the `type` field.

## Camera controls

Once the camera is active (after clicking **Take a picture** in the ad form):

| Control | Action |
|---|---|
| Mouse move | Look around (full 360° yaw, ±89° pitch) |
| Scroll up | Zoom in |
| Scroll down | Zoom out |
| W / A / S / D | Move the player (camera follows) |
| Left click | Capture and attach photo |
| Right click | Cancel and return to form |

HUD and radar are hidden while the camera is active and restored on exit.

## Cooldown

There is a 12-second cooldown between captures per client session. If you try to capture again before the cooldown expires, the camera returns a "cooling down — try again in Xs" message.

## Discord webhook upload note

The `uploadUrl` used for `Config.screenshot.type = 'discord'` is a **separate** webhook from `Config.whlink` in `server/server-config.lua`. The screenshot webhook only receives the image file upload; the ads logger webhook in `server-config.lua` receives the structured embed. They can point to the same channel or different channels.
