# Components

Located at `src/components`.

::: tip Coming soon™️
A lot of highly trained monkeys are in the process of writing this documentation. In the meantime, the [CLI template](https://github.com/pangolinjs/cli/tree/master/template) is a great starting point, if you want to learn more about components.
:::

A component is represented by at least one `*.njk` file that holds the Nunjucks/HTML code. The contents of this file replace the `{% block pangolin_body %}{% endblock %}` of [templates](templates.md). Pangolin respects sub-folders and automatically creates a navigation tree for components.

Additional information can be provided with a `*.json` and a `*.md` file. All files have to share the same name, e.g. `button.njk`, `button.json`, and `button.md`.

| File     | Purpose |
|----------|---------|
| `*.njk`  | Holds the component’s Nunjucks/HTML code. |
| `*.json` | <Badge text="Optional" /> Configuration file for a component. |
| `*.md`   | <Badge text="Optional" /> Markdown documentation for a component. |


## Nunjucks

Stored as `*.njk`.

Nunjucks files support all [default templating features](https://mozilla.github.io/nunjucks/templating.html), except `{% extends … %}` (this will be handled by Pangolin). Custom filters and tags can be defined in the [Pangolin configuration file](configuration.html#nunjucks-settings).


## Configuration <Badge text="Optional" />

Stored as `*.json`.

Set a custom configuration for this component. The following options are available:

```json
{
  // Hide the component from the navigation tree
  // Default: false
  "hidden": true,

  // Set a different file from `src/templates` as the template
  // Default: "default.njk"
  "template": "page.njk"
}
```


## Documentation <Badge text="Optional" />

Stored as `*.md`.

Add a markdown documentation for this component. The rendered output will be displayed below the component view.

The markdown converter uses [GitHub Flavored Markdown](https://github.github.com/gfm/) and converts single line breaks to `<br>`s. [GFM’s tables](https://github.github.com/gfm/#tables-extension-) are supported aswell. Code blocks are highlighted with Prism. Take a look at [all supported languages](https://prismjs.com/#languages-list).
