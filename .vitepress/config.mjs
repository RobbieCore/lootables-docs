import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Robicore Docs',
  description: 'Official documentation for Robicore FiveM scripts',

  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
  ],

  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      {
        text: 'Scripts',
        items: [
          { text: 'Lootables', link: '/lootables/' },
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
