const v2 = require('./v2.js')
const v3 = require('./v3.js')
const v4 = require('./v4.js')
const v5 = require('./v5.js')
const v6 = require('./v6.js')

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

    algolia: {
      appId: 'P51QQ4RK1Z',
      apiKey: '04239f26d0d9d2128797128dd18a14d6',
      indexName: 'pangolinjs'
    },

    nav: [
      { text: 'Guide', link: '/v6/guide/' },
      { text: 'Cookbook', link: '/v6/cookbook/' },
      { text: 'About', link: '/about.html' },
      { text: 'Changelog', link: 'https://github.com/pangolinjs/core/blob/main/CHANGELOG.md' },
      {
        text: 'Versions',
        items: [
          { text: 'v6', link: '/v6/' },
          { text: 'v5', link: '/v5/' },
          { text: 'v4', link: '/v4/' },
          { text: 'v3', link: '/v3/' },
          { text: 'v2', link: '/v2/' }
        ]
      }
    ],

    sidebar: {
      '/v2/': v2.sidebar,
      '/v3/': v3.sidebar,
      '/v4/': v4.sidebar,
      '/v5/': v5.sidebar,
      '/v6/': v6.sidebar,

      '/': false
    }
  }
}
