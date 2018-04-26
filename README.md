---
home: true
heroImage: /icon.svg
actionText: Get Started →
actionLink: /v4/
features:
- title: Nunjucks
  details: Nunjucks is an HTML templating engine based on JavaScript. The styleguide creates static HTML from Nunjucks files.
- title: Sass
  details: Sass is a CSS preprocessor supporting variables, nesting and mixins – among many other features.
- title: JavaScript
  details: JavaScript files are bundled together with webpack and transpiled with Babel and the env preset.
footer: GPL-3.0 Licensed | Copyright © Fynn Becker
---

## Quick start

### Install the CLI

```bash
# Yarn
yarn global add front-end-styleguide-cli

# npm
npm install -g front-end-styleguide-cli
```

### Create a new project

```bash
# Create a new folder for the project
mkdir project-name

# Change to the newly created folder
cd project-name

# Initialize a new styleguide project
# and follow the on-screen questions
# to customize the new project
front-end-styleguide init

# Install dependencies
yarn
# or
npm install
```

Documentation powered by [VuePress](https://vuepress.vuejs.org/).
