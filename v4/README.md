# Front End Styleguide v4

[![JavaScript Standard Style][standard-image]][standard-url]

Pattern library framework for styleguide driven development with Sass, ES6+ and Nunjucks.


## Contents

1. [Prerequisites](#prerequisites)
1. [Installation](#installation)
1. [Project Structure](#project-structure)
1. [Configuration](#configuration)
   1. [webpack](#webpack)
   1. [Branding](#branding)
   1. [Config files](#config-files)
1. [Usage](#usage)
   1. [Tasks](#tasks)
   1. [JavaScript](#javascript)
   1. [CSS](#css)
   1. [HTML](#html)
   1. [Assets](#assets)
1. [Testing](#testing)
   1. [Unit](#unit)
   1. [End-to-End](#end-to-end)


## Prerequisites
* [Node.js](https://nodejs.org/)
* [Yarn](https://yarnpkg.com/) or npm (bundled with Node.js)


## Installation

```bash
# Yarn
yarn

# npm
npm install
```

## Project Structure
```
.
├── config
│   └── branding.scss
├── src
│   ├── assets
│   │   └── water.jpg
│   ├── components
│   │   ├── hello
│   │   │   ├── docs.njk
│   │   │   ├── scripts.js
│   │   │   ├── styles.scss
│   │   │   └── templates.njk
│   │   ├── image
│   │   │   ├── docs.njk
│   │   │   ├── styles.scss
│   │   │   └── templates.njk
│   │   ├── index.js
│   │   └── index.scss
│   ├── functions
│   │   └── hello.js
│   ├── prototypes
│   │   └── index.njk
│   ├── setup
│   │   ├── scaffolding.scss
│   │   └── variables.scss
│   ├── templates
│   │   └── prototypes.njk
│   ├── main.js
│   └── main.scss
├── .babelrc
├── .browserslistrc
├── .editorconfig
├── .eslintignore
├── .eslintrc.json
├── .stylelintignore
└── .stylelintrc.json
```


## Configuration

### webpack

Located in `config/webpack.js`.

For simple changes export a `configure`-object which will be merged into the existing webpack config with [webpack-merge](https://github.com/survivejs/webpack-merge).

```js
module.exports = {
  configure: {
    // Merge config changes
    entry: './src/main.js'
  }
}
```

For more advanced changes export `configure` as a function that receives the current context as the first argument.

```js
module.exports = {
  configure: context => {
    if (process.env.FESG_ENV === 'dev') {
      // return config for `dev` task
    }

    if (process.env.FESG_ENV === 'build') {
      // return config for `build` task
    }

    if (process.env.FESG_ENV === 'build:dev') {
      // return config for `build:dev` task
    }

    if (process.env.FESG_ENV === 'build:proto') {
      // return config for `build:proto` task
    }
  }
}
```

### Branding

Located in `config/branding.scss`.

Specify custom colors for the styleguide sidebar and component pages. Browser support for [CSS Custom Properties](http://caniuse.com/#feat=css-variables) is required. Unsopported browsers fall back to default colors.

### Config files

* `.babelrc`: [Configuration for Babel](https://babeljs.io/docs/usage/babelrc/)
* `.browserslistrc`: [Set supported browsers](https://github.com/ai/browserslist)
* `.editorconfig`: [Set basic rules for editors/IDEs](http://editorconfig.org/)
* `.eslintignore`: [Files ignored by ESLint](http://eslint.org/docs/user-guide/configuring#ignoring-files-and-directories)
* `.eslintrc.json`: [Configuration and rules for ESLint](http://eslint.org/docs/user-guide/configuring)
* `.stylelintignore`: [Files ignored by stylelint](https://stylelint.io/user-guide/configuration/#stylelintignore)
* `.stylelintrc.json`: [Configuration and rules for Stylelint](https://stylelint.io/user-guide/configuration/)
* `postcss.config.js`: [Configuration for PostCSS](https://github.com/postcss/postcss#webpack)


## Usage

### Tasks

```bash
# Start dev server
yarn dev
# or
npm run dev

# Build files for production (outputs to `dist`)
yarn build
# or
npm run build

# Create static styleguide (outputs to `dev`)
yarn build:dev
# or
npm run build:dev

# Create static styleguide without components (outputs to `proto`)
yarn build:proto
# or
npm run build:proto

# Run linting
yarn lint
# or
npm run lint

# Run unit tests (creates coverage-report) and e2e tests
yarn test
# or
npm run test
```

### JavaScript

JavaScript files are bundled together with [webpack](https://webpack.js.org/) and transpiled with [Babel](https://babeljs.io/) and the env preset. To learn more about JavaScript modules head over to the [MDN article on `import`](https://developer.mozilla.org/de/docs/Web/JavaScript/Reference/Statements/import). [ESLint](http://eslint.org) checks if the code follows the [Standard Style](https://standardjs.com/).

Global [ESLint rules](http://eslint.org/docs/rules/) are set in `.eslintrc.json`. Per-file rules can be set with comments (e.g. `/* eslint no-console: "off" */`). With a `.eslintignore` file in the project root, JavaScript files can be [excluded from linting](http://eslint.org/docs/user-guide/configuring#ignoring-files-and-directories).


### CSS

[Sass](http://sass-lang.com/) is a CSS preprocessor supporting variables, nesting and mixins – among many other features. For a quick start jump to the [Sass Basics](http://sass-lang.com/guide). [stylelint](http://stylelint.io/) monitors the code for errors and consistency deviations. It uses the [Sass Guidelines config](https://github.com/bjankord/stylelint-config-sass-guidelines) with a few additions.

Global [stylelint rules](http://stylelint.io/user-guide/rules/) are set in `.stylelintrc.json`. Per-file rules can be set with comments (e.g. `/* stylelint-disable selector-max-id */`). With a `.stylelintignore` file in the project root, CSS files can be [excluded from linting](http://stylelint.io/user-guide/configuration/#stylelintignore).


### HTML

[Nunjucks](https://mozilla.github.io/nunjucks/) is an HTML templating engine based on JavaScript. The styleguide creates static HTML from Nunjucks files. Take a look at the [templating docs](https://mozilla.github.io/nunjucks/templating.html) for further information on Nunjucks.

#### Global variables, filters, and tags

The styleguide adds a few custom gobal variables, filters, and tags.

* `process.env`
  * `NODE_ENV`: Returns `development` or `production` (`{{ process.env.NODE_ENV }}`)
  * `FESG_ENV`: Returns `dev`, `build`, or `build:dev` (`{{ process.env.FESG_ENV }}`)
* `fesg`
  * `head`: Outputs CSS and JS links (`{{ fesg.head }}`)
  * `sidebar`: Outputs the styleguide sidebar (`{{ fesg.sidebar }}`)
  * `footer`: Outputs the styleuide footer (`{{ fesg.footer }}`)
  * `components`: Returns the component template as a string (`fesg.components`)
* `relative`: Custom filter to create relative URLs (`{{ "assets/water.jpg" | relative }}`)


#### Components

Component pages are reference for UI elements. They will be generated only if the component folder contains a `docs.njk` file. Each component documentation should follow this pattern for a styled output:

```njk
{% set page = {
  title: "Component Title",
  description: "A short description"
} %}

{% extends fesg.components %}

{% block body %}

  {% section title="Variant #1", description="A short description" %}
    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis, unde.</p>
  {% usage %}
    A short description written in markdown. For example:
    * usage instructions
    * todos
  {% code %}
    <p>HTML code block</p>
    <p>Highlighted with Prism.js</p>
  {% endsection %}

  {% section title="Variant #2", description="A short description", background="#fff" %}
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. In est ex porro.</p>
  {% endsection %}

{% endblock %}
```

#### Prototypes

Prototypes represent final pages. There aren't many limitations. Just go ahead and build a nice reference page by leveraging all of Nunjucks templating features.


### Assets

All files placed in `src/assets` are copied to the output directory. Image files are compressed with [imagemin](https://github.com/imagemin/imagemin) – a lossless compressor for JPG, PNG, GIF and SVG.


## Testing

### Unit

The project comes pre-configured with the [AVA test runner](https://github.com/avajs/ava) – a lightning fast framework for JavaScript unit tests. All unit test files should be placed in `test/unit`.

The styleguide doesn't prescribe the testing framework. If you don't like AVA you can swap it for any other framework.


### End-to-End

End-to-End (e2e) testing is tricky. One of the simplest solutions is [TestCafe](https://devexpress.github.io/testcafe/) which comes pre-configured with the styleguide. All e2e test files should be placed in `test/e2e`.

As with unit testing the e2e testing framework can be replaced with anything you like.


[standard-image]: https://img.shields.io/badge/code_style-standard-brightgreen.svg?style=flat-square
[standard-url]: https://standardjs.com
