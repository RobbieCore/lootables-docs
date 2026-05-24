# Your First Ad

A quick walkthrough from opening the marketplace to a live published listing.

## 1. Open the marketplace

**Phone mode:** open your phone and tap the **Marketplace** app icon.

**Standalone mode** (no compatible phone running): type `/marketplace` in chat.

The home screen loads with the featured ads carousel at the top and category nav buttons below.

## 2. Start a new listing

Click **Create Listing** in the navigation bar (top right in desktop mode; bottom nav in phone mode).

## 3. Fill in the basic fields

| Field | Notes |
|---|---|
| **Ad Type** | Select one: Car, Item, Job Offer, Real Estate, Weapon, or Other. This controls which category-specific fields appear. |
| **Ad Listing Name** | Short title — required. |
| **Description** | Full ad text — required. |
| **Price** | Numeric value — required. Use `0` for free. |
| **Location** | Text label. Click **Use my position** to auto-fill from your in-game location, or click anywhere on the map to pin a custom spot — required. |

## 4. Add at least one image

Click **+ Insert URL** or paste an image URL. Accepted formats:

- A direct `https://` URL pointing to a publicly accessible image
- A `data:image/jpeg`, `data:image/png`, or `data:image/webp` base64 string — pasting a screenshot from clipboard (`Ctrl+V`) automatically produces an accepted format

Up to five images per ad. Invalid URLs are highlighted before submission.

If `screenshot-basic` is running and `Config.screenshot.enabled = true`, a **Take a picture** button appears for desktop players. Click it to enter the in-game camera, frame your shot, then left-click to capture.

## 5. Fill in category-specific fields

- **Cars:** Mileage, Tuning Details
- **Jobs:** Job Title, Salary, Job Requirements
- **Real Estate:** Property Type, House Number / Address
- **Weapons:** Weapon Type, Condition, License Required
- **Items / Other:** Amount

## 6. Optional: promote the ad

Check **Promote Ad** to feature the listing in the home carousel. The promotion cost is shown in the form and charged in addition to the base posting cost.

## 7. Post

Click **Post Ad**. The server checks:

1. Whether you are banned from posting
2. Whether you have enough funds (base cost + optional promotion cost)
3. Whether you are below the per-player ad limit

On success you see "Ad created successfully!" and the listing appears in its category immediately for all connected players.

::: tip
The costs, currency symbol, and max-ads limit shown in the form come from the server in real time. They update the moment an admin saves a change in `/mpadmin`.
:::
