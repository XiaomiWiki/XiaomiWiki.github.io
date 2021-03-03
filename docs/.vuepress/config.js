const { description } = require('../../package')

module.exports = {


  base: '/XiaomiWiki.github.io/',

  locales: {
    // The key is the path for the locale to be nested under.
    // As a special case, the default locale can use '/' as its path.
    '/': {
      lang: 'en-UK', // this will be set as the lang attribute on <html>
      title: 'Xiaomi Wiki',
      description: 'Resources for Xiaomi devices, formerly hosted on r/Xiaomi'
    },
    '/fr/': {
      lang: 'fr-FR',
      title: 'Xiaomi Wiki',
      description: 'Ressources pour les appareils Xiaomi, anciennement hébergés sur r/Xiaomi'
    }
  },

  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: 'Vuepress Docs Boilerplate',
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#description
   */
  description: description,

  /**
   * Extra tags to be injected to the page HTML `<head>`
   *
   * ref：https://v1.vuepress.vuejs.org/config/#head
   */
  head: [
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }]
  ],

  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  themeConfig: {
    repo: '',
    editLinks: false,
    docsDir: '',
    editLinkText: '',
    lastUpdated: true,
    locales: {
      '/': {
        // text for the language dropdown
        selectText: 'Language',
        // label for this locale in the language dropdown
        label: 'English',
        // Aria Label for locale in the dropdown
        ariaLabel: 'Language',
        // text for the edit-on-github link
        editLinkText: 'Edit this page on GitHub',
        // config for Service Worker
        serviceWorker: {
          updatePopup: {
            message: "New content is available.",
            buttonText: "Refresh"
          }
        },
        // algolia docsearch options for current locale
        algolia: {},
        sidebar: {
          '/': [/* ... */],
        }
      },
      '/fr/': {
        selectText: 'Langue',
        label: 'Français',
        editLinkText: 'Éditer sur Github',
        serviceWorker: {
          updatePopup: {
            message: "Nouveau contenu disponible",
            buttonText: "Rafraîchir"
          }
        },
        algolia: {},
        sidebar: {
          '/fr/': [/* ... */],
        }
      }
    }
  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: [
    '@vuepress/plugin-back-to-top',
    '@vuepress/plugin-medium-zoom',
  ]
}
