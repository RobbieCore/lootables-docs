import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Robicore Docs',
  description: 'Official documentation for Robicore FiveM scripts',
  appearance: 'dark',

  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    ['meta', { name: 'theme-color', content: '#E52D2D' }],
    ['meta', { property: 'og:title', content: 'Robicore Docs' }],
    ['meta', { property: 'og:description', content: 'Official documentation for Robicore FiveM scripts' }],
    ['meta', { property: 'og:type', content: 'website' }],
  ],

  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      {
        text: 'Scripts',
        items: [
          { text: 'Lootables', link: '/lootables/' },
          { text: 'Cartel Island Heist', link: '/rc_cartel_heist/' },
          { text: 'Extra Seats', link: '/rc_extra_seats/' },
          { text: 'Marketplace', link: '/rc_marketplace/' },
        ],
      },
      { text: 'Store', link: 'https://robicore.com' },
    ],

    sidebar: {
      '/lootables/': [
        {
          text: 'Lootables',
          link: '/lootables/',
          items: [],
        },
        {
          text: 'Getting Started',
          collapsed: false,
          items: [
            { text: 'Installation', link: '/lootables/getting-started/installation' },
            { text: 'Requirements', link: '/lootables/getting-started/requirements' },
            { text: 'First Box Setup', link: '/lootables/getting-started/first-box-setup' },
          ],
        },
        {
          text: 'Configuration',
          collapsed: false,
          items: [
            { text: 'General Settings', link: '/lootables/configuration/general-settings' },
            { text: 'Police & Dispatch', link: '/lootables/configuration/police-and-dispatch' },
            { text: 'Commands', link: '/lootables/configuration/commands' },
            { text: 'Cooldowns', link: '/lootables/configuration/cooldowns' },
            { text: 'Box Types', link: '/lootables/configuration/box-types' },
          ],
        },
        {
          text: 'Admin Guide',
          collapsed: false,
          items: [
            { text: 'Placing Boxes', link: '/lootables/admin-guide/placing-boxes' },
            { text: 'Gizmo Editor', link: '/lootables/admin-guide/gizmo-editor' },
            { text: 'Managing Items', link: '/lootables/admin-guide/managing-items' },
            { text: 'Managing Exports', link: '/lootables/admin-guide/managing-exports' },
            { text: 'Metadata Fields', link: '/lootables/admin-guide/metadata-fields' },
          ],
        },
        {
          text: 'Player Guide',
          collapsed: false,
          items: [
            { text: 'Interacting with Boxes', link: '/lootables/player-guide/interacting-with-boxes' },
            { text: 'Minigames', link: '/lootables/player-guide/minigames' },
          ],
        },
        {
          text: 'Customization',
          collapsed: false,
          items: [
            { text: 'Editable Files', link: '/lootables/customization/editable-files-overview' },
            { text: 'Server Functions', link: '/lootables/customization/server-functions' },
            { text: 'Client Functions', link: '/lootables/customization/client-functions' },
            { text: 'Localization', link: '/lootables/customization/localization' },
          ],
        },
        {
          text: 'Developer API',
          collapsed: false,
          items: [
            { text: 'Server Exports', link: '/lootables/developer-api/server-exports' },
            { text: 'Client Exports', link: '/lootables/developer-api/client-exports' },
          ],
        },
        {
          text: 'Troubleshooting',
          link: '/lootables/troubleshooting',
        },
      ],

      '/rc_cartel_heist/': [
        {
          text: 'Cartel Island Heist',
          link: '/rc_cartel_heist/',
          items: [],
        },
        {
          text: 'Getting Started',
          collapsed: false,
          items: [
            { text: 'Requirements', link: '/rc_cartel_heist/getting-started/requirements' },
            { text: 'Installation', link: '/rc_cartel_heist/getting-started/installation' },
          ],
        },
        {
          text: 'Configuration',
          collapsed: false,
          items: [
            { text: 'General Settings', link: '/rc_cartel_heist/configuration/general-settings' },
            { text: 'NPCs & Island', link: '/rc_cartel_heist/configuration/npcs-and-island' },
            { text: 'Items', link: '/rc_cartel_heist/configuration/items' },
            { text: 'Police & Dispatch', link: '/rc_cartel_heist/configuration/police-and-dispatch' },
            { text: 'Buyer', link: '/rc_cartel_heist/configuration/buyer' },
            { text: 'Server Security', link: '/rc_cartel_heist/configuration/server-security' },
          ],
        },
        {
          text: 'Admin Guide',
          collapsed: false,
          items: [
            { text: 'Commands', link: '/rc_cartel_heist/admin-guide/commands' },
            { text: 'Reset Timers', link: '/rc_cartel_heist/admin-guide/reset-timers' },
            { text: 'Bunker Access', link: '/rc_cartel_heist/admin-guide/bunker-access' },
            { text: 'NPC Placement', link: '/rc_cartel_heist/admin-guide/npc-placement' },
            { text: 'Disabling Props', link: '/rc_cartel_heist/admin-guide/disabling-props' },
            { text: 'Security Configuration', link: '/rc_cartel_heist/admin-guide/security' },
          ],
        },
        {
          text: 'Player Guide',
          collapsed: false,
          items: [
            { text: 'Heist Walkthrough', link: '/rc_cartel_heist/player-guide/walkthrough' },
            { text: 'Items & Loot', link: '/rc_cartel_heist/player-guide/items-and-loot' },
          ],
        },
        {
          text: 'Customization',
          collapsed: false,
          items: [
            { text: 'Editable Files', link: '/rc_cartel_heist/customization/editable-files' },
            { text: 'Localization', link: '/rc_cartel_heist/customization/localization' },
            { text: '3D Text Style', link: '/rc_cartel_heist/customization/3d-text-style' },
            { text: 'Custom Loot Rewards', link: '/rc_cartel_heist/customization/loot-rewards' },
            { text: 'Dispatch Integration', link: '/rc_cartel_heist/customization/dispatch-integration' },
            { text: 'NPC Models & SQL Driver', link: '/rc_cartel_heist/customization/npc-models' },
          ],
        },
        {
          text: 'Developer API',
          link: '/rc_cartel_heist/developer-api/',
        },
        {
          text: 'Troubleshooting',
          link: '/rc_cartel_heist/troubleshooting',
        },
      ],

      '/rc_extra_seats/': [
        {
          text: 'Extra Seats',
          link: '/rc_extra_seats/',
          items: [],
        },
        {
          text: 'Getting Started',
          collapsed: false,
          items: [
            { text: 'Requirements', link: '/rc_extra_seats/getting-started/requirements' },
            { text: 'Installation', link: '/rc_extra_seats/getting-started/installation' },
            { text: 'First Seat Setup', link: '/rc_extra_seats/getting-started/first-seat-setup' },
          ],
        },
        {
          text: 'Configuration',
          collapsed: false,
          items: [
            { text: 'General Settings', link: '/rc_extra_seats/configuration/general-settings' },
            { text: 'Seat Definitions', link: '/rc_extra_seats/configuration/seat-definitions' },
          ],
        },
        {
          text: 'Admin Guide',
          collapsed: false,
          items: [
            { text: 'Seat Editor', link: '/rc_extra_seats/admin-guide/seat-editor' },
            { text: 'Admin Commands', link: '/rc_extra_seats/admin-guide/admin-commands' },
          ],
        },
        {
          text: 'Player Guide',
          collapsed: false,
          items: [
            { text: 'Sitting and Standing', link: '/rc_extra_seats/player-guide/sitting-and-standing' },
          ],
        },
        {
          text: 'Customization',
          collapsed: false,
          items: [
            { text: 'Editable Files', link: '/rc_extra_seats/customization/editable-files-overview' },
            { text: 'Client Functions', link: '/rc_extra_seats/customization/client-functions' },
            { text: 'Localization', link: '/rc_extra_seats/customization/localization' },
          ],
        },
        {
          text: 'Developer API',
          collapsed: false,
          items: [
            { text: 'Server Exports', link: '/rc_extra_seats/developer-api/server-exports' },
            { text: 'Client Exports', link: '/rc_extra_seats/developer-api/client-exports' },
          ],
        },
        {
          text: 'Troubleshooting',
          link: '/rc_extra_seats/troubleshooting',
        },
      ],

      '/rc_marketplace/': [
        {
          text: 'Marketplace',
          link: '/rc_marketplace/',
          items: [],
        },
        {
          text: 'Getting Started',
          collapsed: false,
          items: [
            { text: 'Requirements', link: '/rc_marketplace/getting-started/requirements' },
            { text: 'Installation', link: '/rc_marketplace/getting-started/installation' },
            { text: 'Posting Your First Ad', link: '/rc_marketplace/getting-started/first-ad' },
          ],
        },
        {
          text: 'Player Guide',
          collapsed: false,
          items: [
            { text: 'Browsing Ads', link: '/rc_marketplace/player-guide/browsing-ads' },
            { text: 'Posting an Ad', link: '/rc_marketplace/player-guide/posting-an-ad' },
            { text: 'Messaging Sellers', link: '/rc_marketplace/player-guide/messaging-sellers' },
            { text: 'Setting a Waypoint', link: '/rc_marketplace/player-guide/setting-a-waypoint' },
          ],
        },
        {
          text: 'Admin Guide',
          collapsed: false,
          items: [
            { text: 'Admin Panel', link: '/rc_marketplace/admin-guide/admin-panel' },
            { text: 'Bans & Moderation', link: '/rc_marketplace/admin-guide/bans-and-moderation' },
          ],
        },
        {
          text: 'Configuration',
          collapsed: false,
          items: [
            { text: 'General Settings', link: '/rc_marketplace/configuration/general-settings' },
            { text: 'In-Game Camera', link: '/rc_marketplace/configuration/in-game-camera' },
            { text: 'Discord Webhook', link: '/rc_marketplace/configuration/discord-webhook' },
          ],
        },
        {
          text: 'Customization',
          collapsed: false,
          items: [
            { text: 'Editable Files', link: '/rc_marketplace/customization/editable-files-overview' },
            { text: 'Localization', link: '/rc_marketplace/customization/localization' },
            { text: 'Theme', link: '/rc_marketplace/customization/theme' },
          ],
        },
        {
          text: 'Troubleshooting',
          link: '/rc_marketplace/troubleshooting',
        },
      ],
    },

    socialLinks: [
      { icon: 'discord', link: 'https://discord.gg/your-invite' },
    ],

    search: {
      provider: 'local',
    },

    footer: {
      message: 'Robicore',
      copyright: 'Copyright 2024-2026 Robicore',
    },
  },
})
