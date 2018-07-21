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
    editLinks: true,
    displayAllHeaders: true,
    nav: [
      {
        text: 'Documentation',
        link: '/v4/'
      },
      {
        text: 'All versions',
        items: [
          {
            text: 'Next (v5)',
            link: '/v5/'
          },
          {
            text: 'Latest (v4)',
            link: '/v4/'
          },
          {
            text: 'Legacy (v3)',
            link: '/v3/'
          },
          {
            text: 'Legacy (v2)',
            link: '/v2/'
          }
        ]
      },
      {
        text: 'About',
        link: '/about'
      }
    ],
    sidebar: {
      '/v5/': [{
        title: 'v5 Documentation',
        collapsable: false,
        children: [
          ['', 'Introduction']
        ]
      }],
      '/v4/': [{
        title: 'v4 Documentation',
        collapsable: false,
        children: [
          ['', 'Introduction'],
          ['getting-started', 'Getting Started'],
          ['configuration', 'Configuration'],
          ['usage', 'Usage'],
          ['testing', 'Testing']
        ]
      }],
      '/v3/': [{
        title: 'v3 Documentation',
        collapsable: false,
        children: [
          ['', 'Introduction'],
          ['configuration', 'Configuration'],
          ['folder-structure', 'Folder Structure'],
          ['usage', 'Usage'],
          ['branding', 'Branding']
        ]
      }],
      '/v2/': [{
        title: 'v2 Documentation',
        collapsable: false,
        children: [
          ['', 'Introduction'],
          ['usage', 'Usage']
        ]
      }]
    }
  }
}
