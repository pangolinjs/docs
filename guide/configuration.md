# Configuration

Located at `pangolin.config.js` in the project root.


## Environment variables

These take precedence over the `pangolin.config.js` file.

| Name            | Purpose |
|-----------------|---------|
| `PANGOLIN_BASE` | Sets the project base path for builds. |
| `PANGOLIN_PORT` | Sets the dev server port. |


## Project settings

```js
module.exports = {
  project: {
    // Set the project name which will be used throughout the UI
    // Default: Pangolin
    name: 'Project name',

    // Set a different base path if the dev build
    // will be deployed in a sub-directory
    // Default: /
    base: '/project-base/',

    // Disable webpack’s asset hashing
    // Default: true
    fileNameHash: false,

    // Set custom UI colors
    branding: {
      // Default: rgb(204, 91, 24)
      colorTheme: '#5d675b',
      // Default: rgb(255, 255, 255)
      colorTitle: '#f7ef99',
      // Default: undefined
      favicon: 'favicon.ico'
    }
  }
}
```

## Dev server settings

```js
module.exports = {
  devServer: {
    // Auto-open in browser
    // Default: false
    open: true,

    // Set the desired browser for auto-open
    // Default: undefined
    browser: 'firefox',

    // Set the desired UI port
    // Default: 8080
    port: 1337
  }
}
```

## webpack settings

### Simple merge

Merges project configuration with [webpack-merge](https://github.com/survivejs/webpack-merge) into default webpack configuration.

```js
module.exports = {
  configure: {
    entry: {
      main: ['./src/hello-world.js']
    }
  }
}
```

### Simple mutation

Mutate webpack configuration properties directly. This allows more control e.g. with conditionals based on the current environment.

```js
const path = require('path')

module.exports = {
  configure (config) {
    if (process.env.PANGOLIN_ENV === 'build') {
      config.output.path = path.join(config.context, 'output-dist')
    }
  }
}
```

### Advanced

[webpack-chain](https://github.com/mozilla-neutrino/webpack-chain) enables full control and expansion of all aspects of the webpack configuration.

```js
module.exports = {
  chain (config) {
    config
      .plugin('progress')
      .tap(args => {
        args[0].name = 'Project name'
        return args
      })
  }
}
```

## Nunjucks settings

### Filters

Add [custom Nunjucks filters](https://mozilla.github.io/nunjucks/api.html#custom-filters) to the rendering environment. The function name will be used as the filter name.

```js
module.exports = {
  nunjucks: {
    filters: {
      shorten: function (str, count) {
        return str.slice(0, count || 5) + '…'
      },
      lengthen: function (str) {
        // …
      }
    }
  }
}
```

### Tags

Add [custom Nunjucks tags](https://mozilla.github.io/nunjucks/api.html#custom-tags) to the rendering environment. The function name will be used as the [registered extension name](https://mozilla.github.io/nunjucks/api.html#addextension).

```js
module.exports = {
  nunjucks: {
    extensions: {
      uppercase: function () {
        this.tags = ['uppercase']

        this.parse = function (parser, nodes) {
          const token = parser.nextToken()
          const args = parser.parseSignature(null, true)

          parser.advanceAfterBlockEnd(token)

          return new nodes.CallExtension(this, 'run', args)
        }

        this.run = function (context, str) {
          console.log(str)
          if (typeof str === 'string') {
            return str.toUpperCase()
          }

          return str
        }
      }
    }
  }
}
```
