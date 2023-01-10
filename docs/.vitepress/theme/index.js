/* eslint-disable simple-import-sort/imports */

import DefaultTheme from 'vitepress/theme'
import OutdatedVersion from './components/OutdatedVersion.vue'
import './custom.css'

/** @type {import('vitepress').Theme} */
export default {
	...DefaultTheme,

	enhanceApp ({ app }) {
		app.component('OutdatedVersion', OutdatedVersion)
	},
}
