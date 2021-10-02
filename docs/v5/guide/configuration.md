# Configuration

<OutdatedVersion version="5" />

Located at `pangolin.config.js` in the project root.

## Environment variables

These take precedence over the `pangolin.config.js` file.

| Name            | Purpose                                | `pangolin.config.js` |
|-----------------|----------------------------------------|----------------------|
| `PANGOLIN_BASE` | Sets the project base path for builds. | `project.base`       |
| `PANGOLIN_HOST` | Sets the dev server hostname.          | `devServer.host`     |
| `PANGOLIN_PORT` | Sets the dev server port.              | `devServer.port`     |

## `NODE_ENV` and `PANGOLIN_ENV`

Each command sets the `NODE_ENV` and `PANGOLIN_ENV` environment variables to specific values. These can be used for conditional config modification, e.g.:

```js
if (process.env.PANGOLIN_ENV === 'build:dev') {
  // This code will be executed for the `build --dev` command
}
```

| Command       | Task        | `NODE_ENV`    | `PANGOLIN_ENV` |
|---------------|-------------|---------------|----------------|
| `dev`         | `dev`       | `development` | `dev`          |
| `build`       | `build`     | `production`  | `build`        |
| `build --dev` | `build:dev` | `production`  | `build:dev`    |
| `lint css`    | `lint:css`  | `development` | `lint:css`     |
| `lint js`     | `lint:js`   | `development` | `lint:js`      |

::: tip Note
Tasks are pre-defined `package.json` scripts for the corresponding [`pangolin-core` command](pangolin-core). See [tasks section in the usage guide](usage#tasks) for more information.
:::

## Project

```js
module.exports = {
  project: {
    // Set the project name which will be used throughout the UI
    // Default: Pangolin.js
    name: 'Project name',

    // Set a different base path if the dev build
    // will be deployed in a sub-directory
    // Default: /
    base: '/project-base/',

    // Set custom UI colors
    branding: {
      // Default: #ff721f
      // Allowed formats: 3- or 6-digit hex colors (e.g. #639 or #1e88e5)
      color: '#5d675b',
      // Default: undefined
      favicon: 'favicon.ico'
    }
  }
}
```

## Filename hashing and manifest

Append a hash to filenames. The default is `'imported'` which adds a hash to assets that are imported in other files (for example images or fonts). The option `'all'` adds a hash to all files (including the main JS and CSS files). To disable filename hashing completely set the property to `false`.

To map source files to corresponding output files an asset manifest can be generated. The option defaults to `false` and can be set to `true`.

```js
module.exports = {
  fileNameHash: false || 'imported' || 'all',
  manifest: true
}
```

## Enable CORS for scripts

Sometimes enabling [CORs](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/crossorigin) for scripts is necessary—for example if Basic authentication in combination with Safari is used.

Setting the `crossorigin` configuration option adds the `crossorigin` HTML attribute to all `<script>` tags.

```js
module.exports = {
  // Allowed values: 'anonymous', 'use-credentials', or ''
  crossorigin: 'anonymous'
}
```

## Dev server

```js
module.exports = {
  devServer: {
    // Set the desired UI host
    // Default: '0.0.0.0'
    host: '127.0.0.1',
    // Set the desired UI port
    // Default: 8080
    port: 1337,
    // Set the WebSocket path
    // The path has to start with a '/'
    // Default: '/socket'
    webSocketPath: '/pangolin-ui-socket'
  }
}
```

Additional [DevServer options](https://webpack.js.org/configuration/dev-server/) can be configured by modifying the [webpack config](#webpack) as described in the following section. A short example might look like:

```js
// Config merge
module.exports = {
  configure: {
    devServer: {
      clientLogLevel: 'info'
    }
  }
}

// or object mutation
module.exports = {
  configure (config) {
    config.devServer.clientLogLevel = 'info'
  }
}

// or webpack-chain
module.exports = {
  chain (config) {
    config.devServer
      .clientLogLevel('info)
  }
}
```

## Transpile dependencies

The project’s source code is transpiled with [Babel](https://babeljs.io), but `node_modules` are excluded. Dependencies can be transpiled by including them explicitly. The config takes an array of strings or regexes. A string will be automatically prepended with `node_modules`, whereas a regex wont make any assumptions about the dependency location.

::: warning
Please be careful with dependency transpilation. [@babel/preset-env](https://babeljs.io/docs/en/babel-preset-env) in combination with [core-js](https://github.com/zloirock/core-js) may lead to bloated bundles. Use `npm run build -- --report` to generate a bundle report with [Webpack Bundle Analyzer](https://github.com/webpack-contrib/webpack-bundle-analyzer) that visualizes all imported files.
:::

```js
module.exports = {
  transpileDependencies: [
    'ky',
    /node_modules\/lodash\./
  ]
}
```

## webpack

### Config merge

Uses [webpack-merge](https://github.com/survivejs/webpack-merge) to merge the project configuration into the [Pangolin.js webpack configuration](https://webpack.js.org/configuration/). The project config takes precedence over the Pangolin.js config.

```js
module.exports = {
  configure: {
    entry: {
      main: ['./src/hello-world.js']
    }
  }
}
```

### Object mutation

Mutate the [webpack configuration](https://webpack.js.org/configuration/) properties directly. This allows more control e.g. with conditionals based on the current environment.

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

## Nunjucks

### Custom filters

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

### Custom tags

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
