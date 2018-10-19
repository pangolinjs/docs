# Components

Located at `src/components`.

A component is represented by at least one `*.njk` file that holds the Nunjucks/HTML code. The contents of this file replace the `{% block pangolin_body %}{% endblock %}` of [templates](templates.md). Pangolin respects sub-folders and automatically creates a navigation tree for components.

Additional information can be provided with a `*.json` and a `*.md` file. All files have to share the same name, e.g. `button.njk`, `button.json`, and `button.md`.

| File     | Purpose                                                           |
|----------|-------------------------------------------------------------------|
| `*.njk`  | Holds the component’s Nunjucks/HTML code.                         |
| `*.json` | <Badge text="Optional" /> Configuration file for a component.     |
| `*.md`   | <Badge text="Optional" /> Markdown documentation for a component. |


## Nunjucks

Stored as `*.njk`.

Nunjucks files support all [default templating features](https://mozilla.github.io/nunjucks/templating.html), except `{% extends … %}` (this will be handled by Pangolin). Custom filters and tags can be defined in the [Pangolin configuration file](configuration.html#nunjucks-settings).

### `include` and `import`

[Include](https://mozilla.github.io/nunjucks/templating.html#include) and [import](https://mozilla.github.io/nunjucks/templating.html#import) paths will be resolved relative to the `src` directory:

::: v-pre
```django
{% include "components/atoms/hello.njk" %}

{% import "components/atoms/hello.njk" as hello %}
{% from "components/atoms/hello.njk" import hello as world %}
```
:::

### `static` custom tag

The custom tag `static` prefixes a string with an absolute path to the final output directory. If a base path is set with an [environment variable](configuration.md#environment-variables) or a [project setting](http://localhost:8080/guide/configuration.html#project-settings) this path will be prefixed as well.

::: v-pre
```django
<!-- Load an SVG image from `public/img` -->
<img src="{% static 'img/logo.svg' %}" alt="Logo">

<!-- This creates the following output -->
<img src="/optional/base/path/img/logo.svg" alt="Logo">
```
:::


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

The markdown converter uses [GitHub Flavored Markdown](https://github.github.com/gfm/) and converts single line breaks to `<br>`s. [GFM’s tables](https://github.github.com/gfm/#tables-extension-) are supported aswell. Code blocks are highlighted with Prism – take a look at [all supported languages](https://prismjs.com/#languages-list).
