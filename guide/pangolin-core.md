# Pangolin Core

This is the [core framework package](https://github.com/pangolinjs/core) that provides a dev server with a nice UI and builds the production files.


## CLI

::: tip Note
The following commands are wrapped with [`package.json` scripts](usage.md#tasks) for easier execution with [`npm run`](https://docs.npmjs.com/cli/run-script).
:::

### Help and version

```
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

```
Usage: dev [options]

Start development server

Options:
  -o, --open [browser]  Open in default or specific browser
  --host <hostname>     Override the default localhost hostname
  --port <port>         Override the default 8080 port
  -h, --help            output usage information
```

### Build

```
Usage: build [options]

Build production files

Options:
  -d, --dev   Build files for static file server
  --modern    Build additional modern bundle
  --report    Generate report with Webpack Bundle Analyzer
  -h, --help  output usage information
```

### Linting

```
Usage: lint css|js [options]

Lint CSS or JavaScript files

Options:
  -h, --help  output usage information
```

### Inspect

```
Usage: inspect dev|build [options]

Generate and output webpack config

Options:
  -d, --dev      Switch to dev mode for build task
  -v, --verbose  Show more information
  -h, --help     output usage information
```
