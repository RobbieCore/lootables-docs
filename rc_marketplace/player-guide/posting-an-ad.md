# Posting an Ad

## Opening the form

Click **Create Listing** in the navigation bar. The form is the same in phone mode and standalone desktop mode.

## Image requirements

Every ad requires at least one image (maximum 5). Images are validated before submission.

**Accepted formats:**
- A direct `https://` or `http://` URL pointing to a publicly accessible image
- A `data:image/jpeg`, `data:image/png`, or `data:image/webp` base64 string — pasting a screenshot from clipboard (`Ctrl+V`) produces an accepted format automatically

All other formats (gif, bmp, non-image data URIs, etc.) are rejected. An invalid URL is highlighted in red; submission is blocked until it is fixed.

::: tip In-game camera
If `screenshot-basic` is running and the admin has enabled it, a **Take a picture** button appears in the form (desktop mode only). Click it to enter the in-game camera. Left-click to capture; right-click to cancel.
:::

## Location pin

The location field has a text label and an optional map pin:

- **Use my position** — fills the text label with your current zone and street, and places a pin at your in-game coordinates.
- **Map click** — click anywhere on the GTA V map to set a custom pin. The zone name fills the text label automatically.
- **Manual text** — type a location description without setting a pin.

The pin is stored with the ad and shown on the map widget in the full ad view, where other players can set a waypoint to it.

## Ad costs

The posting cost is shown in the form before submission:

```
Base posting cost  +  Promotion cost (if "Promote Ad" is checked)
```

Both values are set by the admin in `/mpadmin`. The form always shows current live values. Funds are deducted at submission. If you do not have enough, the post is rejected.

## Per-player ad limit

If you have reached the server's active-ads limit, the post is rejected. The limit is set by the admin in `/mpadmin`. Set to 0 for unlimited.

## After posting

The ad appears in its category listing immediately for all connected players.
