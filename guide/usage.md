# Usage

## Tasks

Change your current terminal directory to the project root with `cd path/to/project`.

Then run tasks with `npm run task-name`, e.g. `npm run dev`.

| Task       | Purpose                                                           |
|------------|-------------------------------------------------------------------|
| `dev`      | Starts the development server with file watching and auto reload. |
| `build`    | Builds production-ready files (output to `dist`).                 |
| `docs`     | Export for static file servers (output to `static`).              |
| `inspect`  | Print the webpack configuration to the console.                   |
| `lint:css` | Lints CSS with [stylelint](https://stylelint.io).                 |
| `lint:js`  | Lints JavaScript with [ESLint](https://eslint.org).               |

::: tip Note
Tasks are pre-defined `package.json` scripts for the corresponding
[`pangolin-core` command](pangolin-core.md).
:::

## JavaScript

JavaScript files are bundled with [webpack](https://webpack.js.org) and transpiled with [Babel](https://babeljs.io) and the [env preset](https://babeljs.io/docs/en/babel-preset-env). To learn more about JavaScript modules (commonly known as ES modules) head over to the MDN articles for the [`import`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import) and [`export`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/export) statements.

[ESLint](http://eslint.org) is pre-configured with the [JavaScript Standard Style](https://standardjs.com). Global [ESLint rules](http://eslint.org/docs/rules/) are set in `.eslintrc.js`. Per-file rules can be set with comments (e.g. `// eslint-disable no-console`). [Exclude files from linting](http://eslint.org/docs/user-guide/configuring#ignoring-files-and-directories) with an `.eslintignore` configuration file.

## CSS

[Sass](http://sass-lang.com) is a CSS preprocessor supporting variables, nesting and mixins – among many other features. For a quick start jump to the [Sass Basics](http://sass-lang.com/guide).

[stylelint](http://stylelint.io) monitors the code for errors and consistency deviations defaulting to the [Sass Guidelines](https://github.com/bjankord/stylelint-config-sass-guidelines)with a few additions. Global [stylelint rules](http://stylelint.io/user-guide/rules/) are set in `stylelint.config.js`. Per-file rules can be set with comments (e.g. `/* stylelint-disable selector-max-id */`). [Exclude CSS files from linting](http://stylelint.io/user-guide/configuration/#stylelintignore) with a `.stylelintignore` configuration file.

## HTML

[Nunjucks](https://mozilla.github.io/nunjucks/) is an HTML templating engine based on JavaScript. Pangolin.js uses [Fractal](https://fractal.build) to create static HTML from Nunjucks files. Take a look at the [templating docs](https://mozilla.github.io/nunjucks/templating.html)
for further information on Nunjucks.

The `dev` task serves the web UI with a built-in web server. The `build` task generates HTML for static file servers.
