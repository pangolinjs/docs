# Setup

## Prerequisites

* [Node v15 or higher](https://nodejs.org)

## Create a new project

The following command creates a project in a new folder called `project-name`. To create a new project in the current directory use a `.` (dot) instead of a project name.

```bash
npx @pangolinjs/cli create project-name
```

## Project structure

```txt
.
├── public
│   └── …
├── src
│   ├── components
│   │   └── …
│   ├── css
│   │   └── …
│   ├── docs
│   │   └── …
│   ├── main.js
│   └── main.scss
├── .browserslistrc
├── .eslintrc.cjs
├── babel.config.js
├── [pangolin.config.js]
├── postcss.config.cjs
└── stylelint.config.cjs
```

### Configuration

| File                   | Purpose                                                                    |
|------------------------|----------------------------------------------------------------------------|
| `.browserslistrc`      | [Browserslist](https://github.com/browserslist/browserslist) configuration |
| `.eslintrc.cjs`        | [ESLint](https://eslint.org) configuration                                 |
| `babel.config.js`      | [Babel](https://babeljs.io) configuration                                  |
| `pangolin.config.js`   | (optional) [Pangolin](configuration) configuration                         |
| `postcss.config.cjs`   | [PostCSS](https://postcss.org) configuration                               |
| `stylelint.config.cjs` | [stylelint](https://stylelint.io) configuration                            |

### Folders

| Folder           | Purpose                                                                               |
|------------------|---------------------------------------------------------------------------------------|
| `public`         | Static files that will be copied as-is to the output directory.                       |
| `src/components` | Everything is a component: the smallest button and the most complex page.             |
| `src/css`        | (changeable) Global CSS files, like variables or body styles.                         |
| `src/docs`       | (optional) [Fractal documentation pages.](https://fractal.build/guide/documentation/) |

### Files

| File            | Purpose                                                                        |
|-----------------|--------------------------------------------------------------------------------|
| `src/main.js`   | The main JavaScript entry point. Use this file to `import` all other JS files. |
| `src/main.scss` | The main CSS entry point. Use this file to `@use` all other CSS files.         |
