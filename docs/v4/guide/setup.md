# Getting Started

<OutdatedVersion version="4" />

## Prerequisites

* [Node.js](https://nodejs.org)

Install the [CLI](https://github.com/front-end-styleguide/cli) globally:

```bash
npm install -g front-end-styleguide-cli
```

## Create a new project

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
npm install
```

## Project structure

The styleguide initialization creates the following folder and file structure:

```txt
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
