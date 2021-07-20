module.exports = {
  title: 'Pangolin Pattern Library',
  description: 'Framework for componentized front end development with Nunjucks, Sass, and JavaScript',
  head: [
    ['link', { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' }],
    ['link', { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' }],
    ['link', { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png' }],
    ['link', { rel: 'manifest', href: '/site.webmanifest' }],
    ['link', { rel: 'mask-icon', href: '/safari-pinned-tab.svg', color: '#ff721f' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-title', content: 'Pangolin' }],
    ['meta', { name: 'application-name', content: 'Pangolin' }],
    ['meta', { name: 'msapplication-TileColor', content: '#ff721f' }],
    ['meta', { name: 'theme-color', content: '#ff721f' }]
  ],
  themeConfig: {
    repo: 'pangolinjs',
    docsRepo: 'pangolinjs/docs',
    docsBranch: 'master',
    editLinks: true,
    displayAllHeaders: true,
    nav: [
      {
        text: 'Guide',
        link: '/guide/'
      },
      {
        text: 'Versions',
        items: [
          {
            text: 'v5',
            link: '/'
          },
          {
            text: 'v4',
            link: 'https://v4.pangolinjs.org'
          },
          {
            text: 'v3',
            link: 'https://v3.pangolinjs.org'
          },
          {
            text: 'v2',
            link: 'https://v2.pangolinjs.org'
          }
        ]
      },
      {
        text: 'About',
        link: '/about'
      }
    ],
    sidebarDepth: 2,
    sidebar: {
      '/guide/': [{
        title: 'Guide',
        collapsable: false,
        children: [
          '',
          'getting-started',
          'configuration',
          'usage',
          'templates',
          'components',
          'testing'
        ]
      }]
    }
  }
}
