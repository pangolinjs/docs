# Usage


## Tasks

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


## JavaScript

JavaScript files are bundled together with [webpack](https://webpack.js.org/) and transpiled with [Babel](https://babeljs.io/) and the env preset. To learn more about JavaScript modules head over to the [MDN article on `import`](https://developer.mozilla.org/de/docs/Web/JavaScript/Reference/Statements/import). [ESLint](http://eslint.org) checks if the code follows the [Standard Style](https://standardjs.com/).

Global [ESLint rules](http://eslint.org/docs/rules/) are set in `.eslintrc.json`. Per-file rules can be set with comments (e.g. `/* eslint no-console: "off" */`). With a `.eslintignore` file in the project root, JavaScript files can be [excluded from linting](http://eslint.org/docs/user-guide/configuring#ignoring-files-and-directories).


## CSS

[Sass](http://sass-lang.com/) is a CSS preprocessor supporting variables, nesting and mixins – among many other features. For a quick start jump to the [Sass Basics](http://sass-lang.com/guide). [stylelint](http://stylelint.io/) monitors the code for errors and consistency deviations. It uses the [Sass Guidelines config](https://github.com/bjankord/stylelint-config-sass-guidelines) with a few additions.

Global [stylelint rules](http://stylelint.io/user-guide/rules/) are set in `.stylelintrc.json`. Per-file rules can be set with comments (e.g. `/* stylelint-disable selector-max-id */`). With a `.stylelintignore` file in the project root, CSS files can be [excluded from linting](http://stylelint.io/user-guide/configuration/#stylelintignore).


## HTML

[Nunjucks](https://mozilla.github.io/nunjucks/) is an HTML templating engine based on JavaScript. The styleguide creates static HTML from Nunjucks files. Take a look at the [templating docs](https://mozilla.github.io/nunjucks/templating.html) for further information on Nunjucks.

### Global variables, filters, and tags

The styleguide adds a few custom gobal variables, filters, and tags.

::: v-pre
* `process.env`
  * `NODE_ENV`: Returns `development` or `production` (`{{ process.env.NODE_ENV }}`)
  * `FESG_ENV`: Returns `dev`, `build`, `build:dev` or `build:proto` (`{{ process.env.FESG_ENV }}`)
* `fesg`
  * `head`: Outputs CSS and JS links (`{{ fesg.head }}`)
  * `sidebar`: Outputs the styleguide sidebar (`{{ fesg.sidebar }}`)
  * `footer`: Outputs the styleuide footer (`{{ fesg.footer }}`)
  * `components`: Returns the component template as a string (`fesg.components`)
* `relative`: Custom filter to create relative URLs (`{{ "assets/water.jpg" | relative }}`)
:::

### Components

Component pages are reference for UI elements. They will be generated only if the component folder contains a `docs.njk` file. Each component documentation should follow this pattern for a styled output:

::: v-pre
```twig
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
:::

### Prototypes

Prototypes represent final pages. There aren't many limitations. Just go ahead and build a nice reference page by leveraging all of Nunjucks templating features.


## Assets

All files placed in `src/assets` are copied to the output directory. Image files are compressed with [imagemin](https://github.com/imagemin/imagemin) – a lossless compressor for JPG, PNG, GIF and SVG.
