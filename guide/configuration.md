# Configuration

Located at `pangolin.config.js` in the project root.

## Environment variables

These take precedence over the `pangolin.config.js` file.

| Name            | Purpose                                | `pangolin.config.js` |
|-----------------|----------------------------------------|----------------------|
| `PANGOLIN_BASE` | Sets the project base path for builds. | `project.base`       |
| `PANGOLIN_HOST` | Sets the dev server hostname.          | `devServer.host`     |
| `PANGOLIN_PORT` | Sets the dev server port.              | `devServer.port`     |

## `NODE_ENV` and `PANGOLIN_ENV`

Each command sets the `process.env.NODE_ENV` and `process.env.PANGOLIN_ENV` variables to specific
values. These can be used for conditional config modification, e.g.:

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
Tasks are pre-defined `package.json` scripts for the corresponding [`pangolin-core` command](pangolin-core.md).
See [tasks section in the usage guide](usage.md#tasks) for more information.
:::

## Project

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
      // Default: #ff721f
      // Allowed formats: 3- or 6-digit hex colors (e.g. #639 or #1e88e5)
      color: '#5d675b',
      // Default: undefined
      favicon: 'favicon.ico'
    }
  }
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

Additional [DevServer options](https://webpack.js.org/configuration/dev-server/)
can be configured by modifying the [webpack config](#webpack) as described in the following section.
A short example might look like:

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

## webpack

### Config merge

Uses [webpack-merge](https://github.com/survivejs/webpack-merge) to merge the project configuration
into the Pangolin [webpack configuration](https://webpack.js.org/configuration/).
The project config takes precedence over the Pangolin config.

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

Mutate the [webpack configuration](https://webpack.js.org/configuration/) properties directly.
This allows more control e.g. with conditionals based on the current environment.

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

[webpack-chain](https://github.com/mozilla-neutrino/webpack-chain) enables full
control and expansion of all aspects of the webpack configuration.

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

Add [custom Nunjucks filters](https://mozilla.github.io/nunjucks/api.html#custom-filters)
to the rendering environment. The function name will be used as the filter name.

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

Add [custom Nunjucks tags](https://mozilla.github.io/nunjucks/api.html#custom-tags)
to the rendering environment. The function name will be used as the [registered extension name](https://mozilla.github.io/nunjucks/api.html#addextension).

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
