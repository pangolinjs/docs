# Pangolin.js Core

This is the [core framework package](https://github.com/pangolinjs/core) that provides a dev server with a nice UI and builds the production files.

## CLI

::: tip About tasks
These commands are wrapped in [package.json scripts](usage#tasks), which can be started with [`npm run`](https://docs.npmjs.com/cli/run-script).
:::

## Dev

Start the development server with the web UI and file watching.

```bash
pangolin-core dev
```

## Build

Build production-ready files and a static export of the web UI.

```bash
pangolin-core build
```

## Inspect

Print the webpack config for the dev or build command to the console.

```bash
# Inspect the webpack dev config.
pangolin-core inspect dev

# Inpsect the webpack build config.
pangolin-core inspect build
```
