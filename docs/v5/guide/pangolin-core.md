# Pangolin.js Core

<OutdatedVersion version="5" />

This is the [core framework package](https://github.com/pangolinjs/core) that provides a dev server with a nice UI and builds the production files.

## CLI

::: tip Note
These commands are wrapped in [package.json scripts](usage#tasks), which can be started with [`npm run`](https://docs.npmjs.com/cli/run-script).
:::

### Help and version

```txt
Usage: pangolin-core <command> [options]

Options:
  -V, --version              output the version number
  -h, --help                 output usage information

Commands:
  dev                        Start development server
  build [options]            Build production files
  lint <language> [options]  Lint CSS or JavaScript files
  inspect <task> [options]   Generate and output webpack config
```

### Dev

```txt
Usage: dev [options]

Start development server

Options:
  --open [browser]   Open in default or specific browser
  --host <hostname>  Override the default 0.0.0.0 hostname
  --port <port>      Override the default 8080 port
  -h, --help         output usage information
```

### Build

```txt
Usage: build [options]

Build production files

Options:
  --dev       Build files for static file server
  --modern    Build additional modern bundle
  --report    Generate report with Webpack Bundle Analyzer
  -h, --help  output usage information
```

### Linting

```txt
Usage: lint css|js [options]

Lint CSS or JavaScript files

Options:
  -h, --help  output usage information
```

### Inspect

```txt
Usage: inspect dev|build [options]

Generate and output webpack config

Options:
  --dev       Switch to dev mode for build task
  --compact   Less line breaks in output
  -h, --help  output usage information
```
