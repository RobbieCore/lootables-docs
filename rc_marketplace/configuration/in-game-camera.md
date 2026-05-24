# In-Game Camera

The in-game camera lets players take a photo during gameplay and attach it directly to an ad. It relies on the optional `screenshot-basic` resource.

## Requirements

- `screenshot-basic` must be started and listed in `server.cfg` before `rc_marketplace`.
- `Config.screenshot.enabled = true` in `config.lua`.

If either condition is not met, the **Take a picture** button is hidden automatically in the ad form.

::: warning Desktop mode only
The in-game camera is not available when the marketplace is open inside a phone. Phone users add images by URL or clipboard paste instead.
:::

## Upload modes

Set `Config.screenshot.type` in `config.lua`:

| Mode | Description | `uploadUrl` required |
|---|---|---|
| `'discord'` | Uploads the JPEG to a Discord webhook. Stores the returned CDN URL with the ad. | Yes — full webhook URL |
| `'ftp'` | POSTs the JPEG to a custom HTTP endpoint. The endpoint must return the hosted image URL as plain text in the response body. | Yes — your endpoint URL |
| `'base64'` | No upload. Embeds a raw JPEG `data:` URI directly in the ad record. Avoids any external service but increases database storage usage per ad. | No |

Setting `Config.screenshot.uploadUrl = ''` forces the `base64` fallback regardless of `Config.screenshot.type`.

## Camera controls

After clicking **Take a picture** in the ad form:

| Control | Action |
|---|---|
| Mouse move | Look around (full 360° yaw, ±89° pitch) |
| Scroll up | Zoom in |
| Scroll down | Zoom out |
| W / A / S / D | Move the player (camera follows) |
| Left click | Capture the shot and attach it to the form |
| Right click | Cancel and return to the form |

HUD and radar are hidden while the camera is active and restored when you exit.

## Cooldown

There is a 12-second cooldown between captures per client session. If you attempt to capture again before the cooldown expires, a message indicates the remaining wait time.

## Upload webhook vs. ads-logger webhook

`Config.screenshot.uploadUrl` (in `config.lua`) and `Config.whlink` (in `server/server-config.lua`) are separate settings:

- `Config.screenshot.uploadUrl` receives the raw JPEG file upload from `screenshot-basic` and returns the CDN URL.
- `Config.whlink` receives the structured embed notification when ads are posted or deleted.

They can point to the same Discord webhook URL or different ones.
