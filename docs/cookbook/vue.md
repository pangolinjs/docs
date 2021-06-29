# Vue.js

Pangolin.js uses [webpack](https://webpack.js.org) under the hood and generates its configuration with [webpack-chain](https://github.com/neutrinojs/webpack-chain). This allows to tap into the loaders and plugins and extend the pipeline.

## Installation

```bash
# Install dependencies
npm install vue@next

# Install development dependencies
npm install --save-dev vue-loader@next @vue/compiler-sfc
```

## Configuration

### pangolin.config.js

Extend the [configuration](../guide/configuration) with the following settings:

```js
import VueLoaderPlugin from 'vue-loader/lib/plugin'

export default {
  webpack (config) {
    /* eslint-disable indent */

    config.module
      .rule('vue')
        .test(/\.vue$/)
        .use('vue')
          .loader('vue-loader')

    config.resolve
      .extensions
        .add('.vue')

    config.plugin('vue')
      .use(VueLoaderPlugin)

    /* eslint-enable indent */
  }
}
```

### .eslintrc.js (optional)

Install the [ESLint plugin for Vue](https://eslint.vuejs.org):

```bash
npm install --save-dev eslint-plugin-vue
```

Extend the ESLint configuration:

```js
module.exports = {
  root: true,
  extends: [
    '@pangolinjs/eslint-config',
    'plugin:vue/vue3-recommended'
  ]
}
```

## Usage

Pangolin.js is now configured to import and handle [Vue Single File Components](https://v3.vuejs.org/guide/single-file-component.html).
