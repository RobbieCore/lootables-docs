# Messaging Sellers

## Starting a conversation

Open any ad and click **Chat with Poster** (or **Contact seller**). This opens a direct message thread with the ad owner and authorizes that conversation server-side.

You cannot message a player unless you have opened one of their ads and initiated the chat. This prevents the messaging system from being used as a general-purpose chat.

You cannot message yourself.

## Chat interface

The **Messages** tab in the navigation bar shows your active conversations. Click a contact in the list to open the thread.

Each message shows the sender's name and timestamp. Messages you sent appear on the right; received messages on the left.

## Unread notifications

When a message arrives while the marketplace is closed:

- **Phone mode** — the active phone fires its native notification (bell or bubble) with the sender name and a preview.
- **Standalone mode** — behavior depends on `Config.messageNotification` in `config.lua`:
  - `'script'` — a small toast overlay appears over the game world with the sender name and a preview.
  - `'framework'` — the notification is sent via your framework's native notification event.

When the marketplace is already open and you are viewing the chat, no additional notification fires.

## Rate limits

The server enforces per-sender rate limits:

- 5 messages per 10 seconds
- 20 messages per minute
- 200 messages per hour

Exceeding a limit returns an error on that specific send attempt. The limit resets automatically when the time window passes.

## Message length

Messages are capped at 500 characters. Text longer than 500 characters is silently truncated server-side.

## Encryption

All message content is stored encrypted in the database. The server decrypts only when delivering to the sender or recipient. Anyone with direct database access sees only ciphertext.
