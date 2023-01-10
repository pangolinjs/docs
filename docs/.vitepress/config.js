import * as v2 from './v2.js'
import * as v3 from './v3.js'
import * as v4 from './v4.js'
import * as v5 from './v5.js'
import * as v6 from './v6.js'

/** @type {import('vitepress').UserConfig} */
export default {
	title: 'Pangolin.js',
	description: 'Framework for design system development with Nunjucks, Sass, and JavaScript.',

	head: [
		['link', { rel: 'icon', href: '/icon.svg' }],
		['link', { rel: 'apple-touch-icon', href: '/apple-touch-icon.png' }],
		['link', { rel: 'manifest', href: '/site.webmanifest' }],
		['meta', { name: 'theme-color', content: '#ff721f' }],
	],

	themeConfig: {
		logo: '/icon.svg',

		socialLinks: [
			{ icon: 'github', link: 'https://github.com/pangolinjs' },
			{ icon: 'mastodon', link: 'https://mastodon.social/@mvsde' },
			{ icon: 'twitter', link: 'https://twitter.com/mvsde' },
		],

		editLink: {
			pattern: 'https://github.com/pangolinjs/docs/edit/main/docs/:path',
		},

		algolia: {
			appId: 'P51QQ4RK1Z',
			apiKey: '04239f26d0d9d2128797128dd18a14d6',
			indexName: 'pangolinjs',
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
					{ text: 'v2', link: '/v2/' },
				],
			},
		],

		sidebar: {
			'/v2/': v2.sidebar,
			'/v3/': v3.sidebar,
			'/v4/': v4.sidebar,
			'/v5/': v5.sidebar,
			'/v6/': v6.sidebar,
		},

		footer: {
			message: 'Released under the Hippocratic License 3.0.',
			copyright: 'Copyright Fynn Becker',
		},
	},
}
