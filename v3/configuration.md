# Configuration


## Styleguide
`config/config.json`

```json
{
  "css": {
    "dev": {},
    "dist": {}
  },
  "html": {
    "browsersync": {}
  },
  "img": {
    "svgSpriteDev": {},
    "svgSpriteDist": {},
    "imagemin": {}
  }
}
```

`config/paths.json`

```json
{
  "output": {
    "css": {
      "path": "css",
      "name": "styles.css"
    },
    "js": {
      "path": "js",
      "name": "scripts.js"
    },
    "img": {
      "path": "img",
      "icons": "icons.svg"
    }
  }
}
```


## Dotfiles

* `.babelrc`: [Configuration for Babel](https://babeljs.io/docs/usage/babelrc/)
* `.browserslistrc`: [Set supported browsers](https://github.com/ai/browserslist)
* `.editorconfig`: [Set basic rules for editors/IDEs](http://editorconfig.org/)
* `.eslintignore`: [Files ignored by ESLint](http://eslint.org/docs/user-guide/configuring#ignoring-files-and-directories)
* `.eslintrc.json`: [Configuration and rules for ESLint](http://eslint.org/docs/user-guide/configuring)
* `.stylelintrc.json`: [Configuration and rules for Stylelint](https://stylelint.io/user-guide/configuration/)
