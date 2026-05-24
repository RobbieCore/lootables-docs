# Messaging Sellers

## Starting a conversation

Open any ad and click **Chat with Poster** (or **Contact seller**). This authorizes the conversation and opens a direct message thread with the ad owner.

You cannot message a player without first opening one of their ads and initiating the chat — this prevents the messaging system from becoming a general chat tool. You cannot message yourself.

## Chat interface

The **Messages** tab in the navigation bar lists your active conversations. Click a contact to open the thread. Messages you sent appear on the right; received messages appear on the left.

## Notifications

When a message arrives while the marketplace is closed:

- **Phone mode** — the phone fires its standard notification.
- **Standalone mode** — behavior depends on `Config.messageNotification` in `config.lua`:
  - `'script'` — a toast overlay appears over the game world.
  - `'framework'` — the notification is sent via your framework's native notification system.

When the marketplace is open and you are viewing the chat, no additional notification fires.

## Rate limits

The server enforces per-sender rate limits. Exceeding a limit returns an error on that specific send attempt. The limit resets automatically when the time window passes.

## Message storage

All message content is stored encrypted. Only the sender and recipient can read it.
