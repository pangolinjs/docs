# Configuration

Located at `pangolin.config.js` in the project root.

## Project

```js
export default {
  project: {
    // Set the project's name.
    // Default: package.json "name" field
    name: 'Hello World',

    // Set the project's author name.
    // Default: package.json "author" or "author.name" field
    author: 'The Universe',

    // Set the project's version.
    // Default: package.json "version" field
    version: 'v10-final-final',

    // Set the base path for assets.
    // Default: /assets/
    base: '/path/to/assets/'
  }
}
```

## UI customization

```js
export default {
  ui: {
    // Set the UI color scheme.
    // Default: Pangolin.js colors
    color: {
      accent: '#ff721f',
      complement: '#000',
      links: '#7f390f'
    },

    // Set the UI favicon relative to the public folder.
    // Default: /favicon.ico
    favicon: '/icons/favicon.ico',

    // Set the context data output format.
    // https://fractal.build/guide/web/default-theme.html#format
    // Default: json
    format: 'json' || 'yaml',

    // Set the UI's html lang attribute.
    // Default: en
    lang: 'de',

    // Set UI labels.
    // https://fractal.build/guide/web/default-theme.html#labels
    // Default: Fractal default labels
    labels: {
      info: 'Meta'
    },

    // Set the sidebar information.
    // Default: package.json "version" and build date in ISO format
    information: [
      {
        label: 'Version',
        value: 'v2-the-finalist'
      },
      {
        label: 'Built on',
        value: new Date(),
        type: 'time',
        format: value => value.toLocaleDateString('de')
      }
    ]
  }
}
```

## Filename hashing and manifest

Use a content hash for the output file names. The default is `'imported'` which hashes assets that are imported in other files (for example images or fonts). The option `'all'` hashes all files (including the main JS and CSS file). To disable filename hashes completely set the option to `false`.

A [file manifest](https://github.com/danethurber/webpack-manifest-plugin) will be generated.

```js
export default {
  hashFiles: false || 'imported' || 'all'
}
```

## Template engine

Customize the Nunjucks template engine. Detailed instructions are available in the [Fractal Nunjucks Adapter](https://github.com/frctl/fractal/tree/main/packages/nunjucks) documentation.

```js
export default {
  engine: {
    env: {
      // Set up Nunjucks environment.
      // https://mozilla.github.io/nunjucks/api.html#configure
    },

    globals: {
      hello: 'world'
    },

    filters: {
      // Create custom filters.
      // https://mozilla.github.io/nunjucks/api.html#custom-filters
      filterName () {}
    },

    extensions: {
      // Create custom extensions.
      // https://mozilla.github.io/nunjucks/api.html#custom-tags
      extensionName: new ExtensionName()
    },

    paths: [
      // Add search paths for the `include` and `import` tags.
      // https://mozilla.github.io/nunjucks/templating.html#import
      // https://mozilla.github.io/nunjucks/templating.html#include
      "path/to/files"
    ]
  }
}
```

## webpack

[webpack-chain](https://github.com/neutrinojs/webpack-chain) enables full control and extension of all aspects of the webpack configuration.

```js
export default {
  webpack (config) {
    config
      .plugin('progress')
      .tap(args => {
        args[0].name = 'Hello World'
        return args
      })
  }
}
```
