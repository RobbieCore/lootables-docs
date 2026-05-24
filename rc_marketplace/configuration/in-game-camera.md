# In-Game Camera

The in-game camera lets players take a photo during gameplay and attach it to an ad. It requires the optional `screenshot-basic` resource.

## Requirements

- `screenshot-basic` must start before `rc_marketplace` in `server.cfg`.
- `Config.screenshot.enabled = true` in `config.lua`.

If either condition is not met, the **Take a picture** button is hidden in the ad form automatically.

::: warning Desktop mode only
The in-game camera is not available when the marketplace is open inside a phone. Phone users add images by URL or clipboard paste.
:::

## Upload modes

Set `Config.screenshot.type` in `config.lua`:

| Mode | Description | `uploadUrl` required |
|---|---|---|
| `'discord'` | Uploads the photo to a Discord webhook and stores the returned CDN URL with the ad. | Yes — full webhook URL |
| `'ftp'` | POSTs the photo to a custom HTTP endpoint. The endpoint must return the hosted image URL as plain text in the response body. | Yes — your endpoint URL |
| `'base64'` | No upload. Embeds a JPEG data URI directly in the ad. Avoids any external service but increases storage usage per ad. | No |

Setting `Config.screenshot.uploadUrl = ''` forces the `base64` mode regardless of `Config.screenshot.type`.

## Camera controls

After clicking **Take a picture**:

| Control | Action |
|---|---|
| Mouse move | Look around |
| Scroll wheel | Zoom in / out |
| W / A / S / D | Move (camera follows) |
| Left click | Capture and attach to the form |
| Right click | Cancel and return to the form |

HUD and radar are hidden while the camera is active and restored on exit.

## Cooldown

There is a cooldown between captures per client session. If you try to capture again too soon, the form shows the remaining wait time.

## Two separate webhook URLs

`Config.screenshot.uploadUrl` (for photo uploads via `screenshot-basic`) and `Config.whlink` (for ad-event log embeds in `server/server-config.lua`) are independent settings. They can point to the same Discord webhook or to different ones.
