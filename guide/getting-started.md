# Getting Started

## Prerequisites

* [Node.js v15 or higher](https://nodejs.org)

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
├── public
│   └── …
├── src
│   ├── components
│   │   └── …
│   ├── css
│   │   └── …
│   ├── docs
│   │   └── …
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

### Configuration

| File                  | Purpose                                                                    |
|-----------------------|----------------------------------------------------------------------------|
| `.browserslistrc`     | [Browserslist](https://github.com/browserslist/browserslist) configuration |
| `.eslintrc.js`        | [ESLint](https://eslint.org) configuration                                 |
| `babel.config.js`     | [Babel](https://babeljs.io) configuration                                  |
| `pangolin.config.js`  | <Badge text="Optional" /> [Pangolin](configuration.md) configuration       |
| `postcss.config.js`   | [PostCSS](https://postcss.org) configuration                               |
| `stylelint.config.js` | [stylelint](https://stylelint.io) configuration                            |

### Folders

| Folder           | Purpose                                                                                             |
|------------------|-----------------------------------------------------------------------------------------------------|
| `public`         | Static files that will be copied as-is to the output directory.                                     |
| `src/components` | Everything is a component: the smallest button and the most complex page.                           |
| `src/css`        | <Badge text="Changeable" /> Global CSS files, like variables or body styles.                        |
| `src/docs`       | <Badge text="Optional" /> [Fractal documentation pages](https://fractal.build/guide/documentation/) |

### Files

| File            | Purpose                                                                        |
|-----------------|--------------------------------------------------------------------------------|
| `src/main.js`   | The main JavaScript entry point. Use this file to `import` all other JS files. |
| `src/main.scss` | The main CSS entry point. Use this file to `@use` all other CSS files.         |
