---
title: "[v5] Configuration"
---

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
    name: 'Project name', // Default: Pangolin
    base: '/project-base/', // Default: /
    branding: {
      colorTheme: '#5d675b', // Default: rgb(204, 91, 24)
      colorTitle: '#f7ef99', // Default: rgb(255, 255, 255)
      favicon: 'favicon.ico' // Default: undefined
    }
  }
}
```

## Dev server settings

```js
module.exports = {
  devServer: {
    open: true, // Default: false
    browser: 'firefox', // Default: undefined
    port: 1337 // Default: 8080
  }
}
```

## webpack settings

### Simple merge

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

Every aspect of the webpack config can be changed with [webpack-chain](https://github.com/mozilla-neutrino/webpack-chain).

```js
const svgo = {
  plugins: [{
    // Keep symbols in icon sprites
    cleanupIDs: false,
    removeUselessDefs: false
  }]
}

module.exports = {
  chain (config) {
    if (process.env.PANGOLIN_ENV === 'build') {
      config
        .plugin('imagemin')
        .tap(args => {
          args[0].svgo = svgo
          return args
        })
    }
  }
}
```
