module.exports = {
  title: 'Pangolin.js',
  description: 'Framework for design system development with Nunjucks, Sass, and JavaScript.',

  head: [
    ['link', { rel: 'stylesheet', href: '/custom.css' }],
    ['link', { rel: 'icon', href: '/icon.svg' }],
    ['link', { rel: 'apple-touch-icon', href: '/apple-touch-icon.png' }],
    ['link', { rel: 'manifest', href: '/site.webmanifest' }],
    ['meta', { name: 'theme-color', content: '#ff721f' }]
  ],

  themeConfig: {
    repo: 'pangolinjs',

    docsRepo: 'pangolinjs/docs',
    docsBranch: 'main',
    docsDir: 'docs',

    editLinks: true,

    nav: getNav(),
    sidebarDepth: 2,
    sidebar: {
      '/guide/': getGuideSidebar(),
      '/cookbook/': getCookbookSidebar()
    }
  }
}

function getNav () {
  return [
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
}

function getGuideSidebar () {
  return [
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
}

function getCookbookSidebar () {
  return [
    {
      title: 'Cookbook',
      collapsable: false,
      children: [
        { text: 'Introduction', link: '/cookbook/' },
        { text: 'Template Filters', link: '/cookbook/template-filters' },
        { text: 'Vue.js', link: '/cookbook/vue' }
      ]
    }
  ]
}
