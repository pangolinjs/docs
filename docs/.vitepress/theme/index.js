import DefaultTheme from 'vitepress/theme'
import OutdatedVersion from './components/OutdatedVersion.vue'

export default {
  ...DefaultTheme,

  enhanceApp ({ app }) {
    app.component('OutdatedVersion', OutdatedVersion)
  }
}
