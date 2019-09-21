# Vue.js

Pangolin.js uses [webpack](https://webpack.js.org) under the hood and generates its configuration
with [webpack-chain](https://github.com/neutrinojs/webpack-chain). This allows to easily tap into
the loaders and plugins and extend the pipeline.

## Installation

### Install Vue.js

```bash
# Install Vue.js as a dependency
npm install vue

# Install vue-loader and vue-template-compiler as development dependencies
npm install -D vue-loader vue-template-compiler
```

### Install ESLint plugin <Badge text="Optional" />

```bash
npm install -D eslint-plugin-vue
```

## Configuration

### pangolin.config.js

Extend your [pangolin.config.js](/guide/configuration.md) with the following settings:

```js
const VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports = {
  chain (config) {
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

### .eslintrc.js

Extend your ESLint configuration with the [ESLint Vue plugin](https://eslint.vuejs.org):

```js
module.exports = {
  root: true,
  extends: [
    '@pangolinjs',
    'plugin:vue/recommended'
  ]
}
```

## Usage

Now you are ready to import [single file components](https://vuejs.org/v2/guide/single-file-components.html)
in Pangolin.js.
