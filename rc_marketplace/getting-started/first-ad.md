# First Ad

A quick walkthrough from opening the marketplace to a live published listing.

## 1. Open the marketplace

**Phone mode:** open your phone and tap the **Marketplace** app icon.

**Standalone mode** (no supported phone running): type `/marketplace` in chat.

The home screen loads with a featured/promoted ads carousel at the top and category nav buttons below.

## 2. Create a new listing

Click **Create Listing** in the navigation bar (top right in desktop mode; bottom nav in phone mode).

The **Create New Ad** form opens.

## 3. Fill in the ad type and common fields

| Field | Notes |
|---|---|
| **Ad Type** | Select one: Car, Item, Job Offer, Real Estate, Weapon, or Other. This determines which detail fields appear below. |
| **Ad Listing Name** | Short title, e.g. "Selling Custom Sports Car". |
| **Description** | Full ad text. |
| **Price** | Leave blank for free / negotiable. |
| **Location** | Text label for the location. Click **Use current location** to auto-fill from your in-game position, or click on the map to pin a specific spot. |

## 4. Add images

Click **+ Add Image**. Each image slot accepts:

- A direct `https://` or `http://` URL (max 2 048 characters).
- A `data:image/jpeg`, `data:image/png`, or `data:image/webp` base64 string pasted from clipboard (max 200 KB).

If `screenshot-basic` is running and `Config.screenshot.enabled = true`, a **Take a picture** button appears. Click it to enter the in-game camera, frame your shot, then left-click to capture. The image attaches automatically. Right-click cancels.

Invalid URLs are highlighted in red before submission. Fix them before posting.

## 5. Fill in category-specific fields

**Cars:** Mileage, Tuning Details (click **+ Add Tuning Detail** for each mod entry).

**Jobs:** Job Title, Salary, Job Requirements.

**Real Estate:** Property Type (e.g. Apartment, House), House Number / Address.

**Weapons:** Weapon Type, Condition, License Required toggle.

**Items / Other:** Amount.

## 6. Optional: Promote the ad

Check **Promote Ad** to include the listing in the featured carousel on the home screen. The promotion cost is shown on the form (set in the admin panel). This is charged in addition to the base ad cost.

## 7. Post

Click **Post**. The server checks:

1. Whether you are banned from posting.
2. Whether you have enough funds (base cost + optional promotion cost).
3. Whether you are below your per-player ad limit.

On success you see "Ad posted successfully!" and the listing appears in the relevant category immediately for all online players.

::: tip
The costs, currency symbol, and max-ads limit shown in the form are live values from the server — they update the moment an admin changes them in `/mpadmin`, no restart needed.
:::
