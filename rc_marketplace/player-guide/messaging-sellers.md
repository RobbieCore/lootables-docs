# Messaging Sellers

## Starting a conversation

Open any ad and click **Chat with Poster**. This opens a direct message thread with the ad owner and authorizes future messages between you and that player.

You cannot message a player unless you have opened one of their ads first (or they have previously messaged you). This prevents the chat from being used as a general-purpose messenger.

You cannot message yourself.

## Chat interface

The **Messages** tab in the navigation bar shows your active conversations (chatters list). Click a chatter to open the thread.

Each message shows the sender's name and timestamp. Sent messages appear on the right; received messages on the left.

## Unread notifications

When a message arrives while the marketplace is closed:

- **Phone mode** — the active phone fires its native notification (bell/bubble) with the sender name and a message preview.
- **Standalone mode** — behavior depends on `Config.messageNotification` in `config.lua`:
  - `'script'` — a small toast overlay appears over the game world with the sender name and preview.
  - `'framework'` — the message is sent via your framework's native notification event (ESX notification or QBCore notify).

When the marketplace is open and you are already in the chat, no additional notification fires.

## Rate limits

The server enforces per-sender rate limits:

- 5 messages per 10 seconds
- 20 messages per minute
- 200 messages per hour

Exceeding a limit returns a rejection message on that send attempt.

## Message length

Messages are capped at 500 characters. Longer text is silently truncated to 500 characters server-side.

## Encryption

All message content is encrypted at rest in the database using AES. The server decrypts only when delivering to the sender or recipient. Server operators reading the database directly see only ciphertext.
