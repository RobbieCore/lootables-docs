import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Lootables',
  description: 'Documentation for Lootables - FiveM Loot Box System',

  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
  ],

  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Getting Started', link: '/getting-started/installation' },
      { text: 'Configuration', link: '/configuration/general-settings' },
      { text: 'Robicore Store', link: 'https://store.robicore.com' },
    ],

    sidebar: [
      {
        text: 'Getting Started',
        collapsed: false,
        items: [
          { text: 'Installation', link: '/getting-started/installation' },
          { text: 'Requirements', link: '/getting-started/requirements' },
          { text: 'First Box Setup', link: '/getting-started/first-box-setup' },
        ],
      },
      {
        text: 'Configuration',
        collapsed: false,
        items: [
          { text: 'General Settings', link: '/configuration/general-settings' },
          { text: 'Target System', link: '/configuration/target-system' },
          { text: 'Police & Dispatch', link: '/configuration/police-and-dispatch' },
          { text: 'Commands', link: '/configuration/commands' },
          { text: 'Cooldowns', link: '/configuration/cooldowns' },
          { text: 'Box Types', link: '/configuration/box-types' },
        ],
      },
      {
        text: 'Admin Guide',
        collapsed: false,
        items: [
          { text: 'Placing Boxes', link: '/admin-guide/placing-boxes' },
          { text: 'Gizmo Editor', link: '/admin-guide/gizmo-editor' },
          { text: 'Managing Items', link: '/admin-guide/managing-items' },
          { text: 'Managing Exports', link: '/admin-guide/managing-exports' },
          { text: 'Metadata Fields', link: '/admin-guide/metadata-fields' },
        ],
      },
      {
        text: 'Player Guide',
        collapsed: false,
        items: [
          { text: 'Interacting with Boxes', link: '/player-guide/interacting-with-boxes' },
          { text: 'Minigames', link: '/player-guide/minigames' },
        ],
      },
      {
        text: 'Customization',
        collapsed: false,
        items: [
          { text: 'Editable Files', link: '/customization/editable-files-overview' },
          { text: 'Server Functions', link: '/customization/server-functions' },
          { text: 'Client Functions', link: '/customization/client-functions' },
          { text: 'Localization', link: '/customization/localization' },
        ],
      },
      {
        text: 'Developer API',
        collapsed: false,
        items: [
          { text: 'Server Exports', link: '/developer-api/server-exports' },
          { text: 'Client Exports', link: '/developer-api/client-exports' },
        ],
      },
      {
        text: 'Troubleshooting',
        link: '/troubleshooting',
      },
    ],

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
