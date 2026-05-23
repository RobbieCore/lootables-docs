# Posting an Ad

## Opening the form

Click **Create Listing** in the navigation bar. The form is the same whether you are in phone mode or standalone desktop mode.

## Image rules

Every ad requires at least one image. Images are validated client-side and again server-side.

| Format | Accepted | Limit |
|---|---|---|
| `https://` or `http://` URL | Yes | 2 048 characters max |
| `data:image/jpeg;base64,...` | Yes | 200 KB max |
| `data:image/png;base64,...` | Yes | 200 KB max |
| `data:image/webp;base64,...` | Yes | 200 KB max |
| Any other format | No | — |

Pasting a screenshot from the clipboard produces a `data:image/webp;base64,...` string that is accepted. In-game camera output (Discord webhook or base64 mode) also produces accepted formats.

If any image URL is invalid, the field is highlighted in red and submission is blocked.

## Location pin

The location field has two parts: a text label and an optional map pin.

- **Use current location** — fills the text label with your current zone/street and places a pin at your in-game position.
- **Map click** — click anywhere on the GTA V Leaflet map to set a custom pin. The zone name fills the text label automatically.
- **Manual text** — type a location description directly in the text field without pinning.

The pin coordinates are stored with the ad and shown on the map widget in the full ad view.

## Ad costs

The posting cost is displayed in the form before submission. It is:

```
Base cost  +  Promotion cost (if Promote Ad is checked)
```

Both values are set in real time by the server admin via `/mpadmin`. The form always shows the current live values.

Funds are deducted from your cash account at submission. If you lack the funds, the post is rejected with an "Insufficient funds" message.

## Per-player ad limit

If you have reached the server's maximum active ads limit, the post is rejected. The limit is configured by an admin in `/mpadmin`.

## After posting

The ad appears in its category listing immediately for all connected players. A Discord webhook notification fires if the server has one configured.
