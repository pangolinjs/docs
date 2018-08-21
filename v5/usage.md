---
title: "[v5] Usage"
---

# Usage


## Tasks

Run tasks with `yarn task-name` or `npm run task-name`, e.g. `yarn dev`.

| Name        | Purpose |
|-------------|---------|
| `lint:js`   | Lints JavaScript with [ESLint](https://eslint.org). |
| `lint:css`  | Lints CSS with [stylelint](https://stylelint.io). |
| `test:unit` | Runs the specified test runner, defaults to [AVA](https://ava.li). |
| `dev`       | Starts the development server with file watching and auto reload. |
| `build`     | Builds production-ready files for CMS integration. |
| `build:dev` | Generates a static version of Pangolin for static file servers. |

## JavaScript

JavaScript files are bundled together with [webpack](https://webpack.js.org/) and transpiled with [Babel](https://babeljs.io/) and the env preset. To learn more about JavaScript modules head over to the [MDN article on `import`](https://developer.mozilla.org/de/docs/Web/JavaScript/Reference/Statements/import). [ESLint](http://eslint.org) checks if the code follows the [Standard Style](https://standardjs.com/).

Global [ESLint rules](http://eslint.org/docs/rules/) are set in `.eslintrc.json`. Per-file rules can be set with comments (e.g. `/* eslint no-console: "off" */`). With an `.eslintignore` file in the project root, JavaScript files can be [excluded from linting](http://eslint.org/docs/user-guide/configuring#ignoring-files-and-directories).


## CSS

[Sass](http://sass-lang.com/) is a CSS preprocessor supporting variables, nesting and mixins – among many other features. For a quick start jump to the [Sass Basics](http://sass-lang.com/guide). [stylelint](http://stylelint.io/) monitors the code for errors and consistency deviations. It uses the [Sass Guidelines config](https://github.com/bjankord/stylelint-config-sass-guidelines) with a few additions.

Global [stylelint rules](http://stylelint.io/user-guide/rules/) are set in `.stylelintrc.json`. Per-file rules can be set with comments (e.g. `/* stylelint-disable selector-max-id */`). With a `.stylelintignore` file in the project root, CSS files can be [excluded from linting](http://stylelint.io/user-guide/configuration/#stylelintignore).


## HTML

[Nunjucks](https://mozilla.github.io/nunjucks/) is an HTML templating engine based on JavaScript. Pangolin creates static HTML from Nunjucks files. Take a look at the [templating docs](https://mozilla.github.io/nunjucks/templating.html) for further information on Nunjucks.
