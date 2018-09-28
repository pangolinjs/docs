# Introduction

Living Styleguide for componentized front end development.

Uses the [Gulp](http://gulpjs.com/) task runner to compile and [lint](http://stylelint.io/) [Sass](http://sass-lang.com/), [lint](http://eslint.org/) JavaScript, [transpile](https://babeljs.io/) ES6 Code and create static HTML from [Handlebars](http://handlebarsjs.com/).

::: danger DEPRECATED
You are viewing the documentation for an old Pangolin version.
:::


## Prerequisites

* [Node.js with npm](https://nodejs.org/)
* [Front End Styleguide](https://github.com/mvsde/styleguide)

*Only tested with Node.js v6.9.1 and v7.2.0. An update from 6 to 7 may require a full re-install of dependencies.*


## Installation

Make sure CLI is installed globally with `npm install -g front-end-styleguide-cli`.

If you don't want to or cannot install the CLI you have to use `./node_modules/.bin/front-end-styleguide` instead of `front-end-styleguide`.

Run `npm install` to get all dependencies. `npm update` will install and update all dependencies.

*To check for outdated packages without updating them run `npm outdated`.*


## Configuration

The files `config/config.json` and `config/paths.json` can be used to customize specific task settings and the source and destination folders.

`.babelrc` and `.eslintrc.json` files are also available for Babel and ESLint configuration.
