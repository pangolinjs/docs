# Getting Started


## Prerequisites

* [Node.js](https://nodejs.org)
* Global [Pangolin CLI](https://github.com/pangolinjs/cli) <Badge text="Optional" />
  ```bash
  npm install -g @pangolin/cli
  ```


## Create a new project

The following commands create a project in a new folder called `project-name`. To create a new project in the current directory use a `.` (dot) instead of a project name.

### With npx

```bash
npx -p @pangolin/cli pangolin create project-name
```

### With globally installed CLI

```bash
pangolin create project-name
```


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
├── .browserslistrc
├── .eslintrc.json
├── .stylelintrc.json
├── babel.config.js
├── [pangolin.config.js]
└── postcss.config.js
```

### Config files

| File                 | Purpose                                                                                                 |
|----------------------|---------------------------------------------------------------------------------------------------------|
| `.browserslistrc`    | [Browserslist](https://github.com/browserslist/browserslist) configuration                              |
| `.eslintrc.json`     | [ESLint](https://eslint.org) configuration                                                              |
| `.stylelint.json`    | [stylelint](https://stylelint.io) configuration                                                         |
| `babel.config.js`    | [Babel](https://babeljs.io) configuration                                                               |
| `pangolin.config.js` | <Badge text="Optional" /> [Pangolin](configuration.md) configuration                                    |
| `postcss.config.js`  | [PostCSS](https://postcss.org) configuration                                                            |

### `src` folder

| Folder       | Purpose                                                                                   |
|--------------|-------------------------------------------------------------------------------------------|
| `components` | Everything is a component: the smallest button and the most complex page.                 |
| `functions`  | <Badge text="Changeable" /> General purpose Sass or JavaScript functions.                 |
| `public`     | Static files that will be copied 1:1 to the output directory.                             |
| `setup`      | <Badge text="Changeable" /> Base files for global setup, e.g. variables or `body` styles. |
| `templates`  | Nunjucks page templates. Must contain at least a `default.njk` template.                  |
