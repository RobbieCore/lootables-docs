# First Ad

A quick walkthrough from opening the marketplace to a live published listing.

## 1. Open the marketplace

**Phone mode:** open your phone and tap the **Marketplace** app icon.

**Standalone mode** (no compatible phone running): type `/marketplace` in chat.

The home screen loads with a featured/promoted ads carousel at the top and category nav buttons below.

## 2. Create a new listing

Click **Create Listing** in the navigation bar (top right in desktop mode; bottom nav in phone mode).

The **Create New Ad** form opens.

## 3. Fill in the ad type and common fields

| Field | Notes |
|---|---|
| **Ad Type** | Select one: Car, Item, Job Offer, Real Estate, Weapon, or Other. This controls which category-specific fields appear below. |
| **Ad Listing Name** | Short title, e.g. "Selling Custom Sports Car". Required. |
| **Description** | Full ad text. Required. |
| **Price** | Numeric value. Required (use `0` for free). |
| **Location** | Text label for the location. Click **Use my position** to auto-fill from your in-game position, or click anywhere on the map to pin a custom spot. Required. |

## 4. Add images

Click **+ Insert URL** or paste an image URL directly. Each image slot accepts:

- A direct `https://` or `http://` URL (max 2 048 characters).
- A `data:image/jpeg`, `data:image/png`, or `data:image/webp` base64 string (max 200 KB) — pasting a screenshot from clipboard (`Ctrl+V`) produces an accepted format.

Up to 5 images per ad.

If `screenshot-basic` is running and `Config.screenshot.enabled = true`, a **Take a picture** button appears. Click it to enter the in-game camera, frame your shot, then left-click to capture. Right-click cancels. This button is desktop-only and is hidden in phone mode.

Invalid URLs are highlighted in red before submission. Fix them before posting.

## 5. Fill in category-specific fields

**Cars:** Mileage, Tuning Details (click **+ Add Tuning Detail** for each mod entry).

**Jobs:** Job Title, Salary, Job Requirements.

**Real Estate:** Property Type (e.g. Apartment, House), House Number / Address.

**Weapons:** Weapon Type, Condition, License Required toggle.

**Items / Other:** Amount.

## 6. Optional: Promote the ad

Check **Promote Ad** to include the listing in the featured carousel on the home screen. The promotion cost is shown in the form. It is charged in addition to the base posting cost.

## 7. Post

Click **Post Ad**. The server checks:

1. Whether you are banned from posting.
2. Whether you have enough funds (base cost + optional promotion cost).
3. Whether you are below the per-player ad limit.

On success you see "Ad created successfully!" and the listing appears in its category immediately for all connected players.

::: tip
The costs, currency symbol, and max-ads limit shown in the form are live values from the server. They update the moment an admin changes them in `/mpadmin` — no restart required.
:::
