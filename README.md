---
home: true
heroImage: /icon.svg
actionText: Get Started →
actionLink: /guide/
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

Install the CLI:

```bash
# Yarn
yarn global add @pangolin/cli

# npm
npm install -g @pangolin/cli
```

Create a new project:

```bash
pangolin create project-name
```

This creates a project in a folder `project-name`. To create a new project in the current directory call `pangolin create .`
