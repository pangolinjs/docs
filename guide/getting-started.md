# Getting Started

## Prerequisites

* [Node.js v14.10 or higher](https://nodejs.org)

## Create a new project

The following commands create a project in a new folder called `project-name`. To create a new project in the current directory use a `.` (dot) instead of a project name.

Choose one of the following methods:

### CLI with [npx](https://github.com/npm/npx)

```bash
npx @pangolinjs/cli@next create project-name
```

### Globally installed CLI

```bash
npm install --global @pangolinjs/cli@next
pangolin create project-name
```

## Project structure

```txt
.
├── src
│   ├── components
│   │   └── …
│   ├── css
│   │   └── …
│   ├── docs
│   │   └── …
│   ├── public
│   │   └── …
│   ├── main.js
│   └── main.scss
├── .browserslistrc
├── .eslintrc.js
├── babel.config.js
├── [pangolin.config.js]
├── postcss.config.js
└── stylelint.config.js
```

### Config files

| File                  | Purpose                                                                    |
|-----------------------|----------------------------------------------------------------------------|
| `.browserslistrc`     | [Browserslist](https://github.com/browserslist/browserslist) configuration |
| `.eslintrc.js`        | [ESLint](https://eslint.org) configuration                                 |
| `babel.config.js`     | [Babel](https://babeljs.io) configuration                                  |
| `pangolin.config.js`  | <Badge text="Optional" /> [Pangolin](configuration.md) configuration       |
| `postcss.config.js`   | [PostCSS](https://postcss.org) configuration                               |
| `stylelint.config.js` | [stylelint](https://stylelint.io) configuration                            |

### `src` files

| File        | Purpose                                                                        |
|-------------|--------------------------------------------------------------------------------|
| `main.js`   | The main JavaScript entry point. Use this file to `import` all other JS files. |
| `main.scss` | The main CSS entry point. Use this file to `@use` all other CSS files.         |

### `src` folders

| Folder       | Purpose                                                                                             |
|--------------|-----------------------------------------------------------------------------------------------------|
| `components` | Everything is a component: the smallest button and the most complex page.                           |
| `css`        | <Badge text="Changeable" /> Global CSS files, like variables or body styles.                        |
| `docs`       | <Badge text="Optional" /> [Fractal documentation pages](https://fractal.build/guide/documentation/) |
| `public`     | Static files that will be copied as-is to the output directory.                                     |
