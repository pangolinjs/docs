---
title: "[v5] Getting Started"
---

# Getting Started


## Prerequisites

* [Node.js](https://nodejs.org)
* [Yarn](https://yarnpkg.com) or npm (bundled with Node.js)

Install the [CLI](https://github.com/pangolinjs/cli) globally:

```bash
# Yarn
yarn global add @pangolin/cli

# npm
npm install -g @pangolin/cli
```


## Create a new project

```bash
pangolin create project-name
```

This creates a project in a folder `project-name`. To create a new project in the current directory call `pangolin create .`


## Project structure

```
.
├── src
│   ├── components
│   │   └── …
│   ├── functions
│   │   └── …
│   ├── public
│   │   └── …
│   ├── setup
│   │   └── …
│   ├── templates
│   │   └── …
│   ├── main.js
│   └── main.scss
├── .babelrc
├── .browserslistrc
├── .eslintrc.json
├── .stylelintrc.json
├── ava.config.js
├── jsconfig.json
└── postcss.config.js
```

### Config files

| File                 | Purpose |
|----------------------|---------|
| `.babelrc`           | [Babel](https://babeljs.io) configuration |
| `.browserslistrc`    | [Browserslist](https://github.com/browserslist/browserslist) configuration |
| `.eslintrc.json`     | [ESLint](https://eslint.org) configuration |
| `.stylelint.json`    | [stylelint](https://stylelint.io) configuration |
| `ava.config.js`      | <Badge text="Optional" /> [AVA](https://ava.li) configuration |
| `jsconfig.json`      | <Badge text="Optional" /> [VSCode](https://code.visualstudio.com/docs/languages/jsconfig) configuration |
| `pangolin.config.js` | <Badge text="Optional" /> [Pangolin](configuration.md) configuration |
| `postcss.config.js`  | [PostCSS](https://postcss.org) configuration |

### `src` folder

| Folder       | Purpose |
|--------------|---------|
| `components` | From the smallest bit to the largest page — everything that can be abstracted into a general pattern. |
| `functions`  | <Badge text="Changeable" /> General purpose Sass or JavaScript functions. |
| `public`     | Static files that will be copied 1:1 to the output directory. Compresses images losslessly with [imagemin](https://github.com/imagemin/imagemin). |
| `setup`      | <Badge text="Changeable" /> Base files for global setup, e.g. variables or `body` styles. |
| `templates`  | Nunjucks page templates. Has to contain a `default.njk` template. |
