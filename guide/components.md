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
