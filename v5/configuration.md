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
    fileNameHash: false, // Default: true
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
