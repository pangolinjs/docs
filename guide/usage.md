# Usage


## Tasks

Change your current terminal directory to the project root with `cd path/to/project`.

Then run tasks with `yarn task-name` or `npm run task-name`, e.g. `yarn dev` or `npm run dev`.

| Name        | Purpose                                                                    |
|-------------|----------------------------------------------------------------------------|
| `lint:js`   | Lints JavaScript with [ESLint](https://eslint.org).                        |
| `lint:css`  | Lints CSS with [stylelint](https://stylelint.io).                          |
| `test:unit` | Runs the specified test runner, defaults to [AVA](https://ava.li).         |
| `dev`       | Starts the development server with file watching and auto reload.          |
| `build`     | Builds production-ready files for CMS integration. Outputs to `dist`.      |
| `build:dev` | Generates a version of Pangolin for static file servers. Outputs to `dev`. |

## JavaScript

JavaScript files are bundled with [webpack](https://webpack.js.org) and transpiled with [Babel](https://babeljs.io) and the [env preset](https://babeljs.io/docs/en/babel-preset-env). To learn more about JavaScript modules head over to the MDN articles on [`import`](https://developer.mozilla.org/de/docs/Web/JavaScript/Reference/Statements/import) and [`export`](https://developer.mozilla.org/de/docs/Web/JavaScript/Reference/Statements/export).

[ESLint](http://eslint.org) is pre-configured with the [JavaScript Standard Style](https://standardjs.com). Global [ESLint rules](http://eslint.org/docs/rules/) are set in `.eslintrc.json`. Per-file rules can be set with comments (e.g. `/* eslint no-console: "off" */`). [Exclude files from linting](http://eslint.org/docs/user-guide/configuring#ignoring-files-and-directories) with an `.eslintignore` configuration file.

The `build` task produces up to three files:

| File         | Purpose                                                                                 |
|--------------|-----------------------------------------------------------------------------------------|
| `runtime.js` | webpack [runtime and manifest data](https://webpack.js.org/concepts/manifest/#runtime). |
| `vendors.js` | Third-party scripts from `node_modules` (only if files from npm are imported).          |
| `main.js`    | Main application code.                                                                  |


## CSS

[Sass](http://sass-lang.com) is a CSS preprocessor supporting variables, nesting and mixins – among many other features. For a quick start jump to the [Sass Basics](http://sass-lang.com/guide).

[stylelint](http://stylelint.io) monitors the code for errors and consistency deviations – defaulting to the [Sass Guidelines](https://github.com/bjankord/stylelint-config-sass-guidelines) with a few additions. Global [stylelint rules](http://stylelint.io/user-guide/rules/) are set in `.stylelintrc.json`. Per-file rules can be set with comments (e.g. `/* stylelint-disable selector-max-id */`). [Exclude CSS files from linting](http://stylelint.io/user-guide/configuration/#stylelintignore) with a `.stylelintignore` configuration file.

The `build` task produces up to two files:

| File          | Purpose                                                                    |
|---------------|----------------------------------------------------------------------------|
| `vendors.css` | Third-party CSS from `node_modules` (only if files from npm are imported). |
| `main.css`    | Main application CSS.                                                      |


## HTML

[Nunjucks](https://mozilla.github.io/nunjucks/) is an HTML templating engine based on JavaScript. Pangolin creates static HTML from Nunjucks files. Take a look at the [templating docs](https://mozilla.github.io/nunjucks/templating.html) for further information on Nunjucks.

Nunjucks resolves all file paths relative to the `src` folder.

The Nunjucks templates are for development and reference purposes only and the `build` task will not create any HTML. The `dev` task serves the components folder with a built-in web server. The `build:dev` task generates HTML for static file servers.
