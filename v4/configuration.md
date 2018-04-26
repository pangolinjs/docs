# Configuration


## webpack

Located in `config/webpack.js`.

For simple changes export a `configure`-object which will be merged into the existing webpack config with [webpack-merge](https://github.com/survivejs/webpack-merge).

```js
module.exports = {
  configure: {
    // Merge config changes
    entry: './src/main.js'
  }
}
```

For more advanced changes export `configure` as a function that receives the current context as the first argument.

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


## Branding

Located in `config/branding.scss`.

Specify custom colors for the styleguide sidebar and component pages. Browser support for [CSS Custom Properties](http://caniuse.com/#feat=css-variables) is required. Unsopported browsers fall back to default colors.


## Config files

* `.babelrc`: [Configuration for Babel](https://babeljs.io/docs/usage/babelrc/)
* `.browserslistrc`: [Set supported browsers](https://github.com/ai/browserslist)
* `.editorconfig`: [Set basic rules for editors/IDEs](http://editorconfig.org/)
* `.eslintignore`: [Files ignored by ESLint](http://eslint.org/docs/user-guide/configuring#ignoring-files-and-directories)
* `.eslintrc.json`: [Configuration and rules for ESLint](http://eslint.org/docs/user-guide/configuring)
* `.stylelintignore`: [Files ignored by stylelint](https://stylelint.io/user-guide/configuration/#stylelintignore)
* `.stylelintrc.json`: [Configuration and rules for Stylelint](https://stylelint.io/user-guide/configuration/)
* `postcss.config.js`: [Configuration for PostCSS](https://github.com/postcss/postcss#webpack)
