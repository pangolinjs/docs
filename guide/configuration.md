# Configuration


## Branding

Located in `config/branding.scss`.

Specify custom colors for the styleguide sidebar and component pages. Browser support for [CSS Custom Properties](http://caniuse.com/#feat=css-variables) is required. Unsopported browsers fall back to default colors.

```scss
:root {
  // GLOBAL

  --fesg-color-primary: #1d5097;
  --fesg-color-text: #222;
  --fesg-color-border: #ddd;
  --fesg-color-background: #f2f4f7;

  // SPECIFIC
  //
  // Use these variables to overwrite global colors for specific elements

  // --fesg-color-sidebar-text
  // --fesg-color-sidebar-highlight-text
  // --fesg-color-sidebar-highlight-background
  // --fesg-color-sidebar-highlight-border
  // --fesg-color-sidebar-background
  // --fesg-color-sidebar-border
  // --fesg-color-sidebar-button-foreground
  // --fesg-color-sidebar-button-background

  // --fesg-color-header-text
  // --fesg-color-header-background
  // --fesg-color-header-border

  // --fesg-color-section-text
  // --fesg-color-section-button
  // --fesg-color-section-background
  // --fesg-color-section-border

  // --fesg-color-footer-text
  // --fesg-color-footer-background
  // --fesg-color-footer-border
}
```


## Config files

Located in the project root.

* `.babelrc`: [Configuration for Babel](https://babeljs.io/docs/usage/babelrc/)
* `.browserslistrc`: [Set supported browsers](https://github.com/ai/browserslist)
* `.editorconfig`: [Set basic rules for editors/IDEs](http://editorconfig.org/)
* `.eslintignore`: [Files ignored by ESLint](http://eslint.org/docs/user-guide/configuring#ignoring-files-and-directories)
* `.eslintrc.json`: [Configuration and rules for ESLint](http://eslint.org/docs/user-guide/configuring)
* `.stylelintignore`: [Files ignored by stylelint](https://stylelint.io/user-guide/configuration/#stylelintignore)
* `.stylelintrc.json`: [Configuration and rules for Stylelint](https://stylelint.io/user-guide/configuration/)
* `postcss.config.js`: [Configuration for PostCSS](https://github.com/postcss/postcss#webpack)


## webpack

Located in `config/webpack.js`.

### Dev server config

Overwrite default settings for the dev server.

```js
module.exports = {
  devServer: {
    // Auto-open in browser (defaults to false)
    open: true,
    // Set browser for auto-open (omit for default browser)
    browser: 'firefox',
    // Set port (defaults to 8080)
    port: 1337
  }
}
```

### webpack config

For simple changes to the webpack config set a `configure`-object. This will be merged into the default webpack config with [webpack-merge](https://github.com/survivejs/webpack-merge).

```js
module.exports = {
  configure: {
    // Merge config changes
    entry: './src/main.js'
  }
}
```

For more advanced changes set `configure` as a function. The first argument is the current context aka the project directory. This is needed for absolute webpack paths (e.g. `output.path`).

```js
module.exports = {
  configure: context => {
    if (process.env.FESG_ENV === 'dev') {
      // return config for `dev` task
    }

    if (process.env.FESG_ENV === 'build') {
      // return config for `build` task
    }

    if (process.env.FESG_ENV === 'build:dev') {
      // return config for `build:dev` task
    }

    if (process.env.FESG_ENV === 'build:proto') {
      // return config for `build:proto` task
    }
  }
}
```

### imagemin config

Change imagemin settings with the [`imagemin` configuration object](https://github.com/Klathmon/imagemin-webpack-plugin#api).

```js
module.exports = {
  imagemin: {
    svgo: {
      plugins: [{
        // Keep symbols in icon sprites
        cleanupIDs: false,
        removeUselessDefs: false
      }]
    }
  }
}
```
