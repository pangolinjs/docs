module.exports.nav = [
  { text: 'Guide', link: '/guide/' },
  { text: 'Cookbook', link: '/cookbook/' },
  { text: 'About', link: '/about' },
  { text: 'Changelog', link: 'https://github.com/pangolinjs/core/blob/main/CHANGELOG.md' },
  {
    text: 'Versions',
    items: [
      { text: 'v6', link: '/' },
      { text: 'v5', link: 'https://v5.pangolinjs.org' },
      { text: 'v4', link: 'https://v4.pangolinjs.org' },
      { text: 'v3', link: 'https://v3.pangolinjs.org' },
      { text: 'v2', link: 'https://v2.pangolinjs.org' }
    ]
  }
]

module.exports.guideSidebar = [
  {
    title: 'Guide',
    collapsable: false,
    children: [
      { text: 'Introduction', link: '/guide/' },
      { text: 'Getting Started', link: '/guide/getting-started' },
      { text: 'Configuration', link: '/guide/configuration' },
      { text: 'Usage', link: '/guide/usage' },
      { text: 'Components', link: '/guide/components' },
      { text: 'Pangolin.js Core', link: '/guide/pangolin-core' }
    ]
  }
]

module.exports.cookbookSidebar = [
  {
    title: 'Cookbook',
    collapsable: false,
    children: [
      { text: 'Introduction', link: '/cookbook/' },
      { text: 'Configuration from Environment', link: '/cookbook/configuration-from-environment' },
      { text: 'Template Filters', link: '/cookbook/template-filters' },
      { text: 'Vue.js', link: '/cookbook/vue' }
    ]
  }
]
