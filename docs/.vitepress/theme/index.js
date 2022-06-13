import DefaultTheme from 'vitepress/theme'
import OutdatedVersion from './components/OutdatedVersion.vue'
import './custom.css'

export default {
  ...DefaultTheme,

  enhanceApp ({ app }) {
    app.component('OutdatedVersion', OutdatedVersion)
  }
}
