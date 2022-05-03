# Setup

<OutdatedVersion version="5" />

## Prerequisites

* [Node.js v12.10 or higher](https://nodejs.org)

## Create a new project

The following command creates a project in a new folder called `project-name`. To create a new project in the current directory use a `.` (dot) instead of a project name.

```bash
npx @pangolinjs/cli create project-name
```

## Project structure

```txt
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
| `pangolin.config.js`  | (optional) [Pangolin](configuration) configuration                         |
| `postcss.config.js`   | [PostCSS](https://postcss.org) configuration                               |
| `stylelint.config.js` | [stylelint](https://stylelint.io) configuration                            |

### `src` folder

| Folder       | Purpose                                                                    |
|--------------|----------------------------------------------------------------------------|
| `components` | Everything is a component: the smallest button and the most complex page.  |
| `functions`  | (changeable) General purpose Sass or JavaScript functions.                 |
| `public`     | Static files that will be copied 1:1 to the output directory.              |
| `setup`      | (changeable) Base files for global setup, e.g. variables or `body` styles. |
| `templates`  | Nunjucks page templates. Must contain at least a `default.njk` template.   |
