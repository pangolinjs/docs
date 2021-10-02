const { nav, guideSidebar, cookbookSidebar } = require('./nav.js')

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
    repo: 'pangolinjs/core',

    docsRepo: 'pangolinjs/docs',
    docsBranch: 'main',
    docsDir: 'docs',

    editLinks: true,

    nav,

    sidebarDepth: 2,
    sidebar: {
      '/guide/': guideSidebar,
      '/cookbook/': cookbookSidebar
    }
  }
}
