# Posting an Ad

## Opening the form

Click **Create Listing** in the navigation bar. The form is the same whether you are in phone mode or standalone desktop mode.

## Image rules

Every ad requires at least one image (maximum 5). Images are validated client-side and again server-side.

| Format | Accepted | Limit |
|---|---|---|
| `https://` or `http://` URL | Yes | 2 048 characters max |
| `data:image/jpeg;base64,...` | Yes | 200 KB max |
| `data:image/png;base64,...` | Yes | 200 KB max |
| `data:image/webp;base64,...` | Yes | 200 KB max |
| Any other format (gif, bmp, non-image data URIs, etc.) | No | — |

Pasting a screenshot from the clipboard (`Ctrl+V`) produces a `data:image/webp;base64,...` string that is accepted. In-game camera output (discord or base64 mode) also produces accepted formats.

If any image URL is invalid, the field is highlighted and submission is blocked until it is fixed.

## Location pin

The location field has two parts: a text label and an optional map pin.

- **Use my position** — fills the text label with your current zone/street and places a pin at your in-game position.
- **Map click** — click anywhere on the GTA V Leaflet map to set a custom pin. The zone name fills the text label automatically.
- **Manual text** — type a location description directly in the text field without pinning.

The pin coordinates are stored with the ad and shown on the map widget in the full ad view.

## Ad costs

The posting cost is displayed in the form before submission:

```
Base cost  +  Promotion cost (if Promote Ad is checked)
```

Both values are set by the admin in `/mpadmin`. The form always shows the current live values — no restart required for changes to appear.

Funds are deducted from your cash account at submission. If you do not have enough, the post is rejected with an "Insufficient funds" message.

## Per-player ad limit

If you have reached the server's maximum active ads limit, the post is rejected. The limit is set by the admin in `/mpadmin`.

## After posting

The ad appears in its category listing immediately for all connected players. A Discord webhook notification fires if the server has one configured.
