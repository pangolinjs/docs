# Introduction

<OutdatedVersion version="3" />

Living Styleguide for componentized front end development.

Uses the [Gulp](http://gulpjs.com/) task runner to

* compile and [lint](https://stylelint.io/) [Sass](http://sass-lang.com/),
* [compile](https://babeljs.io/) and [lint](http://eslint.org/) JavaScript and
* create static HTML from [Nunjucks](https://mozilla.github.io/nunjucks/).

## Prerequisites

* [Node.js](https://nodejs.org/)

## Installation

With npm:  
`npm install -g front-end-styleguide-cli`

On some systems root (`sudo`) is needed to install global packages.

Create a new project in an empty folder:  
`front-end-styleguide init`

If the folder already contains a Git repository, this information will be used to populate the `package.json`.
